const ExpenseController = require("../controllers/expense.controller");
const { models } = require("mongoose");

module.exports = (app) => {
    app.get("/api/expenses", ExpenseController.findAllExpenses);
    app.post("/api/expenses", ExpenseController.createNewExpense);
    app.get("/api/expenses/:id", ExpenseController.findOneExpense);
    app.post("/api/expenses/:id", ExpenseController.deleteOneExpense);
};
