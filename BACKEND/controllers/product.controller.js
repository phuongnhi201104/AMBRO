const Product = require("../models/Product");

// Hàm lấy tất cả các danh mục sản phẩm (distinct)
exports.getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Hàm lấy tất cả sản phẩm theo điều kiện (có thể lọc theo danh mục và giá)
exports.getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;

    // Tạo query điều kiện lọc
    const query = {};

    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Hàm lấy chi tiết sản phẩm theo ID
exports.getProductDetail = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
