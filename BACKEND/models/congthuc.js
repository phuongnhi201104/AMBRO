const mongoose = require("mongoose");
const { Schema } = mongoose;
const congThucSchema = new mongoose.Schema({
  name: { type: String, required: true },
  datePosted: { type: String, required: true },
  estimatedTime: { type: String, required: true },
  images: { type: String, required: true },
  description: { type: String },
  DanhMucId: { type: Schema.Types.ObjectId, ref: "DanhMuc" },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
  nutritionFacts: { type: String },
  tips: { type: String },
  reasons: { type: String },
  advice: { type: String },
});

const CongThuc = mongoose.model("congthucs", congThucSchema);

module.exports = CongThuc;
