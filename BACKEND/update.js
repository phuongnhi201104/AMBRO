const mongoose = require("mongoose");
const DinhDuong = require("./db/dinhduong"); // Đường dẫn tới model

// Hàm bỏ dấu
const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

// Kết nối MongoDB
mongoose
  .connect("mongodb://localhost:27017/ambro_db") // Chỉ trỏ tới database
  .then(() => {
    console.log("Connected to MongoDB");
    updateNameUnsigned();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Hàm cập nhật
const updateNameUnsigned = async () => {
  try {
    const documents = await DinhDuong.find(); // Lấy tất cả tài liệu
    if (documents.length === 0) {
      console.warn("Không tìm thấy tài liệu nào trong collection.");
      mongoose.disconnect();
      return;
    }

    const updatePromises = documents.map((doc) => {
      if (isNaN(doc.Lipid)) {
        console.warn(`Sửa Lipid không hợp lệ cho tài liệu: ${doc.Name}`);
        doc.Lipid = 0; // Giá trị mặc định
      }
      doc.NameUnsigned = removeAccents(doc.Name);
      return doc.save(); // Lưu tài liệu
    });

    await Promise.all(updatePromises);
    console.log("Cập nhật NameUnsigned hoàn tất!");
  } catch (error) {
    console.error("Error updating documents:", error);
  } finally {
    mongoose.disconnect();
  }
};
