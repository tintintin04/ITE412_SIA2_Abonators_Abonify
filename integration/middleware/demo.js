const { enqueue, dequeue, isEmpty } = require("./queue");

const orders = [
  {
    customerName: "Pedro Reyes",
    productId: 1,
    quantity: 3,
    totalAmount: 2550
  },
  {
    customerName: "Maria Santos",
    productId: 2,
    quantity: 5,
    totalAmount: 2250
  },
  {
    customerName: "Juan Dela Cruz",
    productId: 1,
    quantity: 70,
    totalAmount: 59500
  }
];

console.log("=== ABONIFY MESSAGING MIDDLEWARE DEMO ===");

console.log("\n--- PRODUCER ---");

orders.forEach((order) => {
  enqueue(order);

  console.log(
    `Order request submitted: ${order.customerName}, Product ID ${order.productId}, Amount ₱${order.totalAmount}`
  );
});

console.log("\n--- CONSUMER ---");

while (!isEmpty()) {
  const order = dequeue();

  const decision =
    order.totalAmount <= 50000 ? "Approved" : "Rejected";

  console.log(
    `Order request for ${order.customerName} → ${decision}`
  );
}

console.log("\n=== DEMO COMPLETED ===");