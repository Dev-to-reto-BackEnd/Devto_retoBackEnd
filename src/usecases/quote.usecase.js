const { chromium } = require("playwright");
const fs = require("fs");
const Quote = require("../models/quote.model");
const { createQuoteRecipe } = require("./quote-recipe.usecase");

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

const getByQuoterId = (quoterId) => {
  return Quote.find({ quoterId });
};

const updateQuote = (id, data) => {
  return Quote.findByIdAndUpdate(id, data, { returnDocument: "after" });
};

const deleteQuote = (id) => {
  return Quote.findByIdAndDelete(id);
};

const toPDF = async (quoteId = 123) => {
  const quote = await Quote.findById(quoteId);
  if (!quote) throw new Error("Cotización no encontrada");

  const filePath = `pdfs/${quoteId}.pdf`;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  //   await page.goto(`https://opsurveyapp.com/quote/${quoteId}`);
  await page.goto(`https://example.com`);
  await page.pdf({ path: filePath });
  await browser.close();
  return filePath;
};

module.exports = {
  getByQuoterId,
  createQuote,
  updateQuote,
  deleteQuote,
  toPDF,
};
