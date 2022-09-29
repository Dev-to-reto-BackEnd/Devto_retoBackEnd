const QuoteRecipes = require("../models/quote-recipes.model");
const { chromium } = require("playwright");
const fs = require("fs");
const Quote = require("../models/quote.model");
const { createQuoteRecipe } = require("./quote-recipe.usecase");
const RecipeMaterials = require("../models/recipe-materials.model");

const getByQuoterId = async (quoterId) => {
  const quoterQuotes = await Quote.find({ quoterId })
    .populate("clientId")
    .lean();

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

const toPDF = async (quoteId) => {
  const quote = await Quote.findById(quoteId);
  if (!quote) throw new Error("Cotización no encontrada");

  const filePath = `pdfs/${quoteId}.pdf`;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000/quote/${quoteId}`);
  await page.pdf({ path: filePath });
  await browser.close();
  return filePath;
};

const getById = async (quoteId) => {
  const quote = await Quote.findById(quoteId).populate("clientId quoterId").lean()

  const quoteRecipes = await QuoteRecipes.find({ quoteId }).populate("recipeId").lean()

  const quoteRecipesMaterials = await Promise.all(
    quoteRecipes.map((quoteRecipe) => {
      return RecipeMaterials.find({ recipeId: quoteRecipe.recipeId }).populate("materialId").lean()
    })
  )

  const completeQuoteRecipes = quoteRecipes.map((quoteRecipe, index) => {
    return {
      ...quoteRecipe,
      materials: quoteRecipesMaterials[index]
    }
  })

  const quoteComplete = {
    ...quote,
    recipe: completeQuoteRecipes,
  }

  return quoteComplete
}

module.exports = {
  getByQuoterId,
  createQuote,
  updateQuote,
  deleteQuote,
  paidOutQuote,
  toPDF,
  getById
};
