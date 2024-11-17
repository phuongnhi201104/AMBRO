const express = require("express");
const router = express.Router();
const DanhMuc = require("../models/danhmuc");
const {
  addDanhMuc,
  updateDanhMuc,
  deleteDanhMuc,
} = require("../controllers/danhmuc.handler");

router.post("", async (req, res) => {
  let model = req.body;
  let result = await addDanhMuc(model);

  res.send(result);
});

router.put("/:id", async (req, res) => {
  let model = req.body;
  let id = req.params["id"];

  await updateDanhMuc(id, model);
  res.send({ message: "updated" });
});

router.delete("/:id", async (req, res) => {
  let id = req.params["id"];
  await deleteDanhMuc(id);
  res.send({ message: "deleted" });
});
module.exports = router;
