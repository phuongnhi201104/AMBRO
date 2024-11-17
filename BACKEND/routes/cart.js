// routes/cart.routes.js
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router.delete("/remove-selected", cartController.removeSelectedItems);
router.delete("/:id", cartController.removeFromCart);
router.get("/", cartController.getCart);
router.post("/", cartController.addToCart);

router.get("/cart-details", async (req, res) => {
  try {
    const userId = req.query.userId; // Nhận userId từ query

    // Giả sử model Cart lưu trữ thông tin userId, productId, và quantity
    const cartItems = await Cart.find({ userId });

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ message: "Giỏ hàng rỗng" });
    }

    // Lấy chi tiết sản phẩm
    const productIds = cartItems.map((item) => item.productId);
    const products = await Product.find({ _id: { $in: productIds } });

    const detailedCartItems = cartItems.map((item) => {
      const product = products.find(
        (prod) => prod._id.toString() === item.productId.toString()
      );
      return {
        product,
        quantity: item.quantity,
      };
    });

    res.status(200).json(detailedCartItems);
  } catch (error) {
    console.error("Error fetching cart details:", error);
    res.status(500).json({ message: "Lỗi khi lấy chi tiết giỏ hàng" });
  }
});

module.exports = router;
