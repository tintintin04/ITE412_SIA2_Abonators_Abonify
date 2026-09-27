const express = require("express");

const router = express.Router();

let orders = [
  {
    id: 1,
    customerName: "Juan Dela Cruz",
    productId: 1,
    quantity: 2,
    totalAmount: 1700,
    status: "Pending"
  },
  {
    id: 2,
    customerName: "Maria Santos",
    productId: 2,
    quantity: 1,
    totalAmount: 450,
    status: "Preparing"
  }
];

// GET /orders
router.get("/", (req, res) => {
  res.status(200).json(orders);
});

// POST /orders
router.post("/", (req, res) => {
  const {
    customerName,
    productId,
    quantity,
    totalAmount,
    status
  } = req.body;

  const newOrder = {
    id: orders.length + 1,
    customerName,
    productId,
    quantity,
    totalAmount,
    status
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

module.exports = router;