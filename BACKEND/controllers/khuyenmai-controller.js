// const KhuyenMai = require("../models/khuyenmai");

// async function addKhuyenMai(model) {
//   let promotion = new KhuyenMai({
//     ...model,
//   });
//   await promotion.save();
//   return promotion.toObject();
// }

// async function updateKhuyenMai(id, model) {
//   await Promotion.findByIdAndUpdate(id, model);
// }

// async function deleteKhuyenMai(id) {
//   await Promotion.findByIdAndDelete(id);
// }

// async function getAllKhuyenMai() {
//   let promotions = await KhuyenMai.find();
//   return promotions.map((x) => x.toObject());
// }

// // async function getKhuyenMai(id) {
// //   let promotion = await KhuyenMai.findById({ id });
// //   return promotion ? promotion.toObject() : null;
// // }

// // async function getKhuyenMai(id) {
// //   let promotion = await KhuyenMai.findOne({ id }); // Tìm theo trường `id`
// //   return promotion ? promotion.toObject() : null;
// // }

// // async function getKhuyenMai(id) {
// //   if (!mongoose.Types.ObjectId.isValid(id)) {
// //     throw new Error("Invalid ObjectId");
// //   }

// //   let promotion = await KhuyenMai.findOne({ _id: id }); // Hoặc { id } nếu bạn muốn tìm bằng trường `id` của schema
// //   return promotion ? promotion.toObject() : null;
// // }
// exports.getKhuyenMaiById = async (req, res) => {
//   const id = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid ID format" });
//   }

//   try {
//     const khuyenmai = await KhuyenMai.findById(id);
//     if (!khuyenmai) {
//       return res.status(404).json({ message: "Promotion not found" });
//     }
//     res.json(khuyenmai);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// module.exports = {
//   addKhuyenMai,
//   updateKhuyenMai,
//   deleteKhuyenMai,
//   getAllKhuyenMai,
//   // getKhuyenMai,
// };
const KhuyenMai = require("./../models/khuyenmai");
const mongoose = require("mongoose");

// Thêm khuyến mãi mới
exports.addKhuyenMai = async (req, res) => {
  try {
    const model = req.body;
    const promotion = new KhuyenMai({ ...model });
    await promotion.save();
    res.status(201).json(promotion.toObject());
  } catch (error) {
    console.error("Error adding promotion:", error);
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật khuyến mãi
exports.updateKhuyenMai = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const model = req.body;
    const updated = await KhuyenMai.findByIdAndUpdate(id, model, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Promotion not found" });
    }
    res.json(updated.toObject());
  } catch (error) {
    console.error("Error updating promotion:", error);
    res.status(500).json({ message: error.message });
  }
};

// Xóa khuyến mãi
exports.deleteKhuyenMai = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const deleted = await KhuyenMai.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Promotion not found" });
    }
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting promotion:", error);
    res.status(500).json({ message: error.message });
  }
};

// Lấy danh sách tất cả khuyến mãi
exports.getAllKhuyenMai = async (req, res) => {
  try {
    const promotions = await KhuyenMai.find();
    res.json(promotions.map((promo) => promo.toObject()));
  } catch (error) {
    console.error("Error fetching promotions:", error);
    res.status(500).json({ message: error.message });
  }
};

// Lấy chi tiết khuyến mãi theo ID
exports.getKhuyenMaiById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const promotion = await KhuyenMai.findById(id);
    if (!promotion) {
      return res.status(404).json({ message: "Promotion not found" });
    }
    res.json(promotion.toObject());
  } catch (error) {
    console.error("Error fetching promotion by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
