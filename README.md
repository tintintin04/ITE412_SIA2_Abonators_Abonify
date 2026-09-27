# Abonify: A Fertilizer E-commerce Platform for Local Farmers and Agri-Shops

## Course

ITE 412 – System Integration and Architecture 2

## Team Members

| Name                         | Role                |
| -----------------------------| --------------------|
| Fortu, Charls Agustin M.     | Project Lead        |
| Madrigal, Cristina B.        | Diagram Designer    |
| Manalad, Donna Kriszelle D.  | Documenter          |
| Gasco, Rosa May S.           | Presenter           |

## Project Description

<p align="justify">
Abonify is a fertilizer e-commerce platform designed for local farmers, growers, and agri-shops. The system provides a platform where users can browse and purchase fertilizer products while agri-sellers can manage their products, inventory, prices, and orders. It also supports order management, payment proof submission, and delivery coordination.
</p>


## Repository Usage Notes

This repository contains the documentation, source code, test cases, and integration files for the Abonify project.

### Getting Started (for the group members)

1. Clone the repository.
2. Open the project folder in a code editor.
3. Install the required dependencies once the source code is available.
4. Run the project using the provided development commands.

### REST API Usage Notes

The Abonify REST API is located in the `/src/api` folder and uses Node.js with Express.

1. Go to the `/src/api` folder.
2. Run `node server.js` to start the API.
3. Test the endpoints using Postman:
   - `GET /products` – retrieves all products.
   - `POST /products` – adds a new product.
   - `GET /orders` – retrieves all orders.
   - `POST /orders` – adds a new order.

### Collaboration Workflow

<p align="justify">
Team members should create a feature branch for their assigned task, make their changes, commit the changes, and push the branch to the repository. Changes should be reviewed before being merged into the `main` branch.
</p>

### Communication

The team will use available communication platforms like messenger for project discussions, task assignments, updates, and coordination.

## Messaging Middleware

The project includes a simple in-memory message queue prototype under `/integration/middleware`. It demonstrates asynchronous communication between the Order Module and Approval Module using a Producer-Queue-Consumer workflow.

To run the messaging middleware demo:

```bash
node integration/middleware/demo.js
```