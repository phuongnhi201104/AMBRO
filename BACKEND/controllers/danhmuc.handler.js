const { model } = require("mongoose");

const DanhMuc = require("../models/danhmuc");

async function addDanhMuc(model) {
  let category = new DanhMuc({
    name: model.name,
  });
  await category.save();
  return category.toObject();
}

async function updateDanhMuc(id, model) {
  await DanhMuc.findOneAndUpdate({ _id: id }, model);
  return;
}

async function deleteDanhMuc(id) {
  await DanhMuc.findByIdAndDelete(id);
  return;
}

module.exports = { addDanhMuc, updateDanhMuc, deleteDanhMuc };
