const express = require("express");

const DinhDuong = require("../models/dinhduong");

const {
  addDinhDuong,
  updateDinhDuong,
  deleteDinhDuong,
  getAllDinhDuong,
  getDinhDuong,
} = require("../controllers/dinhduong-handler");

const router = express.Router();

// Route để thêm dinh dưỡng
router.post("/", async (req, res) => {
  const model = req.body;
  const dinhduong = await addDinhDuong(model);
  res.status(201).send(dinhduong);
});

// Route để cập nhật dinh dưỡng theo ID
router.put("/:id", async (req, res) => {
  const model = req.body;
  const id = req.params["id"];
  await updateDinhDuong(id, model);
  res.send({ message: "Updated" });
});

// Route để xóa dinh dưỡng theo ID
router.delete("/:id", async (req, res) => {
  const id = req.params["id"];
  await deleteDinhDuong(id);
  res.send({ message: "Deleted" });
});

router.get("/dinhduong/:foodName", getDinhDuong);

// Route để lấy tất cả dinh dưỡng
router.get("/", async (req, res) => {
  try {
    const dinhduong = await getAllDinhDuong();
    res.send(dinhduong);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).send("Error retrieving data");
  }
});

// API lấy thông tin dinh dưỡng
router.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const food = await DinhDuong.findOne({ Name: name });
    if (!food) {
      return res.status(404).json({ message: "Không tìm thấy thực phẩm này!" });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy dữ liệu", error });
  }
});

// API lấy danh sách gợi ý
// router.get("/suggestions", async (req, res) => {
//   try {
//     const { name } = req.query;
//     const suggestions = await DinhDuong.find({
//       Name: { $regex: name, $options: "i" },
//     }).limit(10); // Tối đa 10 gợi ý
//     res.json(suggestions);
//   } catch (error) {
//     res.status(500).json({ message: "Lỗi khi lấy gợi ý", error });
//   }
// });

router.get("/suggestions/:foodName", async (req, res) => {
  const foodName = req.params.foodName;
  try {
    const suggestions = await DinhDuong.find({
      Name: { $regex: new RegExp(foodName, "i") }, // Tìm kiếm không phân biệt hoa/thường
    }).limit(5); // Giới hạn số lượng gợi ý trả về

    if (suggestions.length === 0) {
      return res.status(404).send({ message: "Không tìm thấy gợi ý nào." });
    }

    res.send(suggestions);
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    res.status(500).send({ message: "Lỗi server" });
  }
});

module.exports = router;
