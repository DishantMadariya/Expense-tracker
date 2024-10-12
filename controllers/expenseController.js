const Expense = require('../models/expenseModel');

// Add Expense
module.exports.addExpense = async (req, res) => {
  try {
    const { amount, category, paymentMethod } = req.body;
    const newExpense = new Expense({ amount, category, paymentMethod });
    await newExpense.save();
    res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Expenses with filtering, sorting, and pagination
module.exports.getExpenses = async (req, res) => {
  try {
    const { category, startDate, endDate, paymentMethod, sortBy } = req.query;
    const query = {};

    if (category) query.category = category;
    if (startDate || endDate) query.createdAt = { 
      ...(startDate && { $gte: new Date(startDate) }), 
      ...(endDate && { $lte: new Date(endDate) }) 
    };
    if (paymentMethod) query.paymentMethod = paymentMethod;

    const sortOptions = {};
    if (sortBy) sortOptions[sortBy] = 1;

    const expenses = await Expense.find(query).sort(sortOptions);
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Expense
module.exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(id, updates, { new: true });
    res.json({ message: 'Expense updated successfully', expense: updatedExpense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Expense
module.exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
