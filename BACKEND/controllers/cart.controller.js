const Cart = require('../models/Cart');


exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne().populate('items.productId');
        res.json(cart || { items: [] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne();
        if (!cart) {
            cart = new Cart({ items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// exports.removeFromCart = async (req, res) => {
//   const itemId = req.params.id;
//   try {
//     let cart = await Cart.findOne();
//     if (cart) {
//       cart.items = cart.items.filter(item => item.productId.toString() !== itemId);
//       await cart.save();
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Cart not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// Xóa một sản phẩm khỏi giỏ hàng
exports.removeFromCart = async (req, res) => {
  const productId = req.params.id; // Lấy productId từ URL
  try {
    let cart = await Cart.findOne();
    if (cart) {
      // Lọc các sản phẩm còn lại mà không có productId cần xóa
      cart.items = cart.items.filter(item => item.productId.toString() !== productId);
      await cart.save();
      res.status(204).send(); // Trả về status 204 nếu xóa thành công
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




exports.removeSelectedItems = async (req, res) => {
  const productIds = req.body.productIds; // Mảng các productId cần xóa
  try {
    let cart = await Cart.findOne();
    if (cart) {
      cart.items = cart.items.filter(item => !productIds.includes(item.productId.toString()));
      await cart.save();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
