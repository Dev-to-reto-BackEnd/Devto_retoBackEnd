const {
  getByQuoterId,
  createQuote,
  updateQuote,
  deleteQuote,
  paidOutQuote,
} = require("../usecases/quote.usecase");
const express = require("express");
const authMiddleware = require("../middlewares/auth.middlewares");

const router = express.Router();

//Middleware de auth
router.use(authMiddleware);

router.get("/", async (request, response) => {
  try {
    const quotes = await getByQuoterId(request.quoter.id);
    response.json({
      success: true,
      data: {
        quotes,
      },
    });
  } catch (err) {
    response.status(err.status || 500);
    response.json({
      succes: false,
      message: err.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const quote = await createQuote(request.quoter.id, request.body);
    response.json({
      success: true,
      data: {
        quote,
      },
    });
  } catch (err) {
    response.status(err.status || 500);
    response.json({
      succes: false,
      message: err.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const quote = await updateQuote(id, request.body);
    response.json({
      success: true,
      data: {
        quote,
      },
    });
  } catch (err) {
    response.status(err.status || 400);
    response.json({
      success: false,
      message: err.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const quote = await deleteQuote(id);
    response.status(200);
    response.json({
      success: true,
      message: "Quote Deleted",
    });
  } catch (err) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.put("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const quote = await paidOutQuote(id);
    response.status(202);
    response.json({
      success: true,
      message: "Cotización pagada",
    });
  } catch (err) {
    response.status(err.status || 500);
    response.json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
