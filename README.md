# Expense Tracker API

This is a scalable RESTful API built with Node.js and MongoDB for managing expenses. The API handles CRUD operations for expenses, advanced filtering, sorting, and pagination.

## Features

- **CRUD operations**: Create, Read, Update, and Delete expenses.
- **Advanced filtering**: Filter expenses by category, date range, and payment method.
- **Sorting**: Sort expenses by amount or date.
- **Pagination**: Efficiently handle large datasets with pagination.
- **Error Handling & Optimization**:
  - Comprehensive error handling (e.g., 400, 404 responses).
  - Caching for frequently accessed data (optional).

## Requirements

- **Node.js** (v12 or higher)
- **MongoDB** (v4 or higher)
- **Postman** (or any REST client for testing the API)

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database to store expenses.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **bcryptjs**: Library for hashing passwords (if needed in future).
- **nodemon**: Tool for automatically restarting the server during development.

## Project Structure

```
- controllers/
    - expenseController.js  # Handles logic for API endpoints
- models/
    - expenseModel.js       # Mongoose schema for Expense model
- routes/
    - expenseRoutes.js      # API routes for CRUD operations
- config/
    - db.js                 # MongoDB connection setup
- app.js                    # Main application file
- .env                      # Environment variables
- package.json              # Project dependencies and scripts
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker-api.git
cd expense-tracker-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project with the following variables:

```bash
MONGO_URI=mongodb://localhost:27017/expensesdb
PORT=5000
```

- `MONGO_URI`: MongoDB connection string (replace with your own if needed).
- `PORT`: Port number for the API (default is 5000).

### 4. Start the server

```bash
npm start
```

The server will start running on `http://localhost:5000`.

## API Endpoints

### 1. Add Expense

- **URL**: `/api/expenses/add`
- **Method**: `POST`
- **Description**: Adds a new expense.

**Request Body**:

```json
{
  "amount": 100.50,
  "category": "Groceries",
  "paymentMethod": "cash"
}
```

**Response**:

```json
{
  "message": "Expense added successfully",
  "expense": { ... }
}
```

### 2. Get All Expenses (with optional filtering)

- **URL**: `/api/expenses/all`
- **Method**: `GET`
- **Description**: Fetches all expenses, with support for filtering, sorting, and pagination.

**Query Parameters**:
- `category`: Filter by expense category.
- `startDate`: Filter expenses created after this date.
- `endDate`: Filter expenses created before this date.
- `paymentMethod`: Filter by payment method (cash/credit).
- `sortBy`: Sort expenses by field (e.g., `amount` or `createdAt`).

### 3. Update Expense

- **URL**: `/api/expenses/update/:id`
- **Method**: `PATCH`
- **Description**: Updates an expense by its ID.

**Request Body**:

```json
{
  "amount": 150.75
}
```

**Response**:

```json
{
  "message": "Expense updated successfully",
  "expense": { ... }
}
```

### 4. Delete Expense

- **URL**: `/api/expenses/delete/:id`
- **Method**: `DELETE`
- **Description**: Deletes an expense by its ID.

**Response**:

```json
{
  "message": "Expense deleted successfully"
}
```

## Error Handling

The API handles various errors with appropriate status codes:
- **400**: Bad request (e.g., missing required fields).
- **404**: Resource not found (e.g., expense not found).
- **500**: Internal server error.

## Caching (Optional)

For optimized performance, you can implement caching using:
- **Redis**: External caching system.
- **In-memory**: Built-in caching for frequently accessed data.

## Testing the API

You can test the API using Postman or any REST client by sending requests to the defined routes.

### Example Postman Collection:

1. Create a new collection.
2. Add requests to the collection with appropriate methods and request bodies.
3. Use the environment variables for the server URLs.
