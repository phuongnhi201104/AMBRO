const express = require("express");
const {
  addCongThuc,
  updateCongThuc,
  deleteCongThuc,
  getAllCongThuc,
  getCongThuc,
} = require("../controllers/congthuc-handler");
const router = express.Router();

router.post("/", async (req, res) => {
  model = req.body;
  let congthuc = await addCongThuc(model);
  res.send(congthuc);
});

router.put("/:id", async (req, res) => {
  let model = req.body;
  let id = req.params["id"];
  await updateCongThuc(id, model);
  res.send({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  let id = req.params["id"];
  await deleteCongThuc(id);
  res.send({ message: "Deleted" });
});

router.get("/:id", async (req, res) => {
  let id = req.params["id"];
  let congthuc = await getCongThuc(id);
  res.send(congthuc);
});

router.get("/", async (req, res) => {
  let id = req.params["model"];
  let congthucs = await getAllCongThuc();
  res.send(congthucs);
});

router.get("/congthuc/:id", async (req, res) => {
  const id = req.params["id"];
  const congthuc = await getCongThuc(id);
  res.send(congthuc);
});

module.exports = router;
