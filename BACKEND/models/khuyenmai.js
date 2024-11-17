const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema({
  // id: { type: Number, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  reasons_to_join: { type: String, required: true },
  promotion_details: { type: [String], required: true },
  voucher_code: { type: String, required: true },
  benefits: { type: [String], required: true },
  note: { type: String, required: true },
  time: { type: String, required: true },
  voucher: { type: String, required: true },
  banner: { type: String, required: true },
});

const Promotion = mongoose.model("khuyenmais", promotionSchema);

module.exports = Promotion;
