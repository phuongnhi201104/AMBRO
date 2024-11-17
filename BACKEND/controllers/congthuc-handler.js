const CongThuc = require("./../models/congthuc");
async function addCongThuc(model) {
  let congthuc = new CongThuc({
    ...model,
  });
  await congthuc.save();
  return congthuc.toObject();
}

async function updateCongThuc(id, model) {
  await CongThuc.findByIdAndUpdate(id, model);
}

async function deleteCongThuc(id) {
  await CongThuc.findByIdAndDelete(id);
}

async function getAllCongThuc() {
  let congthucs = await CongThuc.find();
  return congthucs.map((x) => x.toObject());
}

async function getCongThuc(id) {
  let congthuc = await CongThuc.findById(id);
  return congthuc.toObject();
}

module.exports = {
  addCongThuc,
  updateCongThuc,
  deleteCongThuc,
  getAllCongThuc,
  getCongThuc,
};
