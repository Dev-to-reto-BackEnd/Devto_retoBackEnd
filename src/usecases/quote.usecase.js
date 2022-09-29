const QuoteRecipes = require("../models/quote-recipes.model");
const Quote = require("../models/quote.model");
const { createQuoteRecipe } = require("./quote-recipe.usecase");

const getByQuoterId = async (quoterId) => {
  const quoterQuotes = await Quote.find({ quoterId }).lean();

  const quotePerQuotes = await Promise.all(
    quoterQuotes.map((quote) => {
      return QuoteRecipes.find({ quoteId: quote._id }).populate("recipeId");
    })
  );
  return quoterQuotes.map((quote, index) => {
    return {
      ...quote,
      quotes: quotePerQuotes[index],
    };
  });
};

const createQuote = async (quoterId, data) => {
  data.quoterId = quoterId;
  const { recipes } = data;
  const quoteCreated = await Quote.create(data);

  for (const recipe of recipes) {
    await createQuoteRecipe({
      quoteId: quoteCreated._id,
      recipeId: recipe.id,
      quantity: recipe.quantity,
    });
  }
  return quoteCreated;
};

const updateQuote = (id, data) => {
  return Quote.findByIdAndUpdate(id, data, { returnDocument: "after" });
};

const deleteQuote = (id) => {
  return Quote.findByIdAndDelete(id);
};

const paidOutQuote = async (quoteId) => {
  const quote = await Quote.findById(quoteId);
  if (!quote) throw new Error("Cotización no encontrada");

  const updatedQuote = await Quote.findByIdAndUpdate(quoteId, {
    paidOut: true,
  });
  return updatedQuote;
};

module.exports = {
  getByQuoterId,
  createQuote,
  updateQuote,
  deleteQuote,
  paidOutQuote,
};
