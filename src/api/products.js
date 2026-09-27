const express = require("express");

const router = express.Router();

let products = [
  {
    id: 1,
    name: "Complete Fertilizer 14-14-14",
    category: "Inorganic",
    price: 850,
    stock: 20
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "Organic",
    price: 450,
    stock: 15
  }
];

// GET /products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// POST /products
router.post("/", (req, res) => {
  const { name, category, price, stock } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

module.exports = router;