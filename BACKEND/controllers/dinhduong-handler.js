const DinhDuong = require("./../models/dinhduong");

async function addDinhDuong(model) {
  let dinhduong = new DinhDuong({
    ...model,
  });
  await dinhduong.save();
  return dinhduong.toObject();
}

async function updateDinhDuong(id, model) {
  await DinhDuong.findByIdAndUpdate(id, model);
}

async function deleteDinhDuong(id) {
  await DinhDuong.findByIdAndDelete(id);
}

async function getAllDinhDuong() {
  let dinhduong = await DinhDuong.find();
  console.log("Fetched Dinh Duong:", dinhduong);
  return dinhduong.map((x) => x.toObject());
}

// const getDinhDuong = async (req, res) => {
//   const foodName = req.params.foodName;
//   try {
//     const nutritionInfo = await DinhDuong.findOne({
//       Name: { $regex: new RegExp(foodName, "i") }, // Tìm kiếm không phân biệt hoa/thường
//     });
//     if (!nutritionInfo) {
//       return res
//         .status(404)
//         .send({ message: "Không tìm thấy thông tin dinh dưỡng" });
//     }
//     res.send(nutritionInfo);
//   } catch (error) {
//     console.error("Error fetching nutrition info:", error);
//     res.status(500).send({ message: "Lỗi server" });
//   }
// };

// const getDinhDuong = async (req, res) => {
//   const foodName = req.params.foodName;
//   try {
//     const searchValue = foodName
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .toLowerCase();
//     const results = await DinhDuong.findOne({
//       $or: [
//         { Name: { $regex: new RegExp(foodName, "i") } },
//         { NameUnsigned: { $regex: new RegExp(searchValue, "i") } },
//       ],
//     }).limit(5); // Giới hạn số lượng gợi ý trả về

//     if (results.length === 0) {
//       return res
//         .status(404)
//         .send({ message: "Không tìm thấy thông tin dinh dưỡng" });
//     }

//     res.send(results);
//   } catch (error) {
//     console.error("Error fetching nutrition info:", error);
//     res.status(500).send({ message: "Lỗi server" });
//   }
// };

const getDinhDuong = async (req, res) => {
  const foodName = req.params.foodName;
  try {
    const nutritionInfo = await DinhDuong.findOne({
      Name: { $regex: new RegExp(foodName, "i") }, // Tìm kiếm không phân biệt hoa/thường
    });

    // Kiểm tra nếu nutritionInfo là null
    if (!nutritionInfo) {
      return res
        .status(404)
        .send({ message: "Không tìm thấy thông tin dinh dưỡng" });
    }

    // Nếu nutritionInfo không phải là null, trả về thông tin
    res.send(nutritionInfo);
  } catch (error) {
    console.error("Error fetching nutrition info:", error);
    res.status(500).send({ message: "Lỗi server" });
  }
};
module.exports = {
  addDinhDuong,
  updateDinhDuong,
  deleteDinhDuong,
  getAllDinhDuong,
  getDinhDuong,
};
