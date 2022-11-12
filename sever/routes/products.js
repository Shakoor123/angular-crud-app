var express = require("express");
var router = express.Router();
var Phone = require("../models/products");
const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    next();
  } else {
    res.status(500).json("not authenticated");
  }
};
/* Post product. */
router.post("/", async function (req, res) {
  const phone = new Phone({
    name: req.body.name,
    ram: req.body.ram,
    memmory: req.body.memmory,
    price: req.body.price,
  });
  return phone
    .save()
    .then((p) => res.status(201).json({ p }))
    .catch((err) => res.status(500).json({ err }));
});

/* get single product. */
router.get("/", async function (req, res) {
  try {
    const phones = await Phone.find();
    res.status(200).json(phones);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a product
router.delete("/:phoneId", async (req, res) => {
  const _id = req.params.phoneId;
  console.log(_id);
  try {
    const deletedPhone = await Phone.deleteOne({ _id });
    res.status(200).json(deletedPhone);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/", async (req, res) => {
  const phoneId = req.body.phoneId;
  const phone = {
    name: req.body.name,
    ram: req.body.ram,
    memmory: req.body.memmory,
    price: req.body.price,
  };
  try {
    const updatedPhone = await Phone.updateOne(phoneId, phone);
    res.status(200).json(updatedPhone);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
