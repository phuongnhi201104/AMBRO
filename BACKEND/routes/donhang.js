// routes/orders.js
const express = require("express");
const router = express.Router();
// const Order = require("../db/donhang");

// Lấy tất cả đơn hàng
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
