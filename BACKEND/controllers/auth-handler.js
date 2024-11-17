const { model, models } = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./../models/user");
const jwt = require("jsonwebtoken");

async function registerUser(model) {
  const hashPassword = await bcrypt.hash(model.password, 10);
  let user = new User({
    name: model.name,
    email: model.email,
    password: hashPassword,
  });
  await user.save();
}

// async function loginUser(model) {
//   const user = await User.findOne({ email: model.email });

//   if (!user) {
//     return null;
//   }
//   const isMatched = await bcrypt.compare(model.password, user.password);
//   if (isMatched) {
//     // login
//     const token = jwt.sign(
//       {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//       },
//       "seceret",
//       {
//         expiresIn: "1h",
//       }
//     );
//     return { token, user };
//   } else {
//     return null;
//   }
// }

async function loginUser(model) {
  try {
    const user = await User.findOne({ email: model.email });
    if (!user) {
      console.log("Email không tồn tại:", model.email);
      return null;
    }

    const isMatched = await bcrypt.compare(model.password, user.password);
    if (isMatched) {
      // Login thành công
      const token = jwt.sign(
        {
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin || false,
        },
        "secret", // Lưu ý: Chỉnh sửa lỗi "seceret" thành "secret"
        { expiresIn: "1h" }
      );

      return {
        token,
        user: { id: user._id, name: user.name, email: user.email },
      };
    } else {
      console.log("Sai mật khẩu cho email:", model.email);
      return null;
    }
  } catch (error) {
    console.error("Lỗi trong loginUser:", error);
    throw error;
  }
}

module.exports = { registerUser, loginUser };
