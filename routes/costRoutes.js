const express = require("express");
const router = express.Router();

let costs = [];

router.post("/", (req, res) => {
  const newCost = { id: costs.length + 1, ...req.body };
  costs.push(newCost);
  res.status(201).json(newCost);
});

router.get("/", (req, res) => {
  res.status(200).json(costs);
});

module.exports = router;
