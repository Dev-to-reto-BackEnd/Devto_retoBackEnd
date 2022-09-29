const mongoose = require("mongoose");
const { Schema } = mongoose;
const addBusinessDays = require("date-fns/addBusinessDays");

const quoteSchemma = new mongoose.Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "clients",
    required: true,
  },
  quoterId: {
    type: Schema.Types.ObjectId,
    ref: "quoters",
    required: true,
  },
  expirationDate: {
    type: Date,
    default: () => addBusinessDays(new Date(), 15),
  },
  profit: {
    type: Number,
    required: true,
    minLength: 1,
  },
  riskFactor: {
    type: Number,
    required: true,
    minLength: 1,
  },
  financing: {
    type: Number,
    required: true,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  note: {
    type: String,
    required: false,
  },
  paidOut: {
    type: Boolean,
    default: false,
  },
});

const Quote = mongoose.model("quote", quoteSchemma);

module.exports = Quote;
