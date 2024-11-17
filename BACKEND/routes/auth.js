const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth-handler");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/auth-middleware");

router.post("/register", async (req, res) => {
  let model = req.body;
  if (model.name && model.email && model.password) {
    await registerUser(model);
    res.send({
      message: "User registered",
    });
  } else {
    res.status(400).json({
      error: "Please provide name, email and password",
    });
  }
});

// router.post("/login", async (req, res) => {
//   let model = req.body;
//   if (model.email && model.password) {
//     const result = await loginUser(model);
//     if (result) {
//       res.send(result);
//     } else {
//       res.status(400).json({
//         error: "Email or password chưa đúng",
//       });
//     }
//   } else {
//     res.status(400).json({
//       error: "Please provide email and password",
//     });
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const model = req.body;

    if (model.email && model.password) {
      console.log("Thông tin nhận được:", model);

      const result = await loginUser(model);

      if (result) {
        console.log("Đăng nhập thành công:", result);
        res.send(result);
      } else {
        res.status(400).json({ error: "Email hoặc mật khẩu không đúng" });
      }
    } else {
      res.status(400).json({ error: "Thiếu email hoặc mật khẩu" });
    }
  } catch (error) {
    console.error("Lỗi trong route login:", error);
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
});

// Route yêu cầu xác thực
router.get("/profile", verifyToken, (req, res) => {
  res.send({
    message: "Access granted",
    user: req.user, // Thông tin người dùng từ token
  });
});

// Route chỉ dành cho admin
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.send({
    message: "Admin access granted",
  });
});
module.exports = router;
