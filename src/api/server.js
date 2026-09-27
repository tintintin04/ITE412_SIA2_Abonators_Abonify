const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import API modules
const productsRouter = require("./products");
const ordersRouter = require("./orders");

// API routes
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Abonify REST API is running"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Abonify REST API running at http://localhost:${PORT}`);
});