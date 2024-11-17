// const mongoose = require("mongoose");
// const express = require("express");
// const {
//   addKhuyenMai,
//   updateKhuyenMai,
//   deleteKhuyenMai,
//   getAllKhuyenMai,
//   getKhuyenMai,
// } = require("../controllers/khuyenmai-controller");

// const khuyenmaiController = require("../controllers/khuyenmai-controller");

// const router = express.Router();

// // router.post("/", async (req, res) => {
// //   const model = req.body;
// //   const khuyenmai = await addKhuyenMai(model);
// //   res.send(khuyenmai);
// // });
// router.post("/", async (req, res) => {
//   try {
//     const model = req.body;

//     // Validate nếu cần
//     if (!model.name || !model.title) {
//       return res.status(400).send({ message: "Missing required fields" });
//     }

//     const khuyenmai = await addKhuyenMai(model);
//     res.send(khuyenmai);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// // router.put("/:id", async (req, res) => {
// //   const model = req.body;
// //   const id = req.params["id"];
// //   await updateKhuyenMai(id, model);
// //   res.send({ message: "Updated" });
// // });

// router.put("/:id", async (req, res) => {
//   const id = req.params["id"];

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).send({ message: "Invalid ID format" });
//   }

//   try {
//     const model = req.body;
//     await updateKhuyenMai(id, model);
//     res.send({ message: "Updated" });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   const id = req.params["id"];
//   await deleteKhuyenMai(id);
//   res.send({ message: "Deleted" });
// });

// // router.get("/:id", async (req, res) => {
// //   const id = req.params["id"];
// //   const khuyenmai = await getKhuyenMai(id);
// //   res.send(khuyenmai);
// // });

// router.get("/:id", async (req, res) => {
//   const id = req.params["id"];

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).send({ message: "Invalid ID format" });
//   }

//   try {
//     const khuyenmai = await getKhuyenMai(id);
//     if (!khuyenmai) {
//       return res.status(404).send({ message: "Promotion not found" });
//     }
//     res.send(khuyenmai);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// router.get("/:id", khuyenmaiController.getKhuyenMaiById);

// // Lấy thông tin chi tiết khuyến mãi theo ID
// router.get("/khuyenmai/:id", async (req, res) => {
//   try {
//     const promotionId = req.params.id; // Lấy ID từ URL
//     const promotion = await KhuyenMai.findById(promotionId); // Tìm khuyến mãi trong database

//     if (!promotion) {
//       return res.status(404).json({ message: "Khuyến mãi không tồn tại" });
//     }

//     res.status(200).json(promotion); // Trả về dữ liệu khuyến mãi
//   } catch (error) {
//     console.error("Lỗi khi lấy khuyến mãi:", error);
//     res.status(500).json({ message: "Lỗi server, vui lòng thử lại sau" });
//   }
// });

// router.get("/", async (req, res) => {
//   const khuyenmais = await getAllKhuyenMai();
//   res.send(khuyenmais);
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const khuyenmaiController = require("../controllers/khuyenmai-controller");

// Thêm khuyến mãi
router.post("/", khuyenmaiController.addKhuyenMai);

// Cập nhật khuyến mãi
router.put("/:id", khuyenmaiController.updateKhuyenMai);

// Xóa khuyến mãi
router.delete("/:id", khuyenmaiController.deleteKhuyenMai);

// Lấy tất cả khuyến mãi
router.get("/", khuyenmaiController.getAllKhuyenMai);

// Lấy khuyến mãi theo ID
router.get("/:id", khuyenmaiController.getKhuyenMaiById);

module.exports = router;
