const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name for the expense is required"],
        minlength: [3, "The name should be at least 3 characters long"],
    },
    type: {
        type: String,
        required: [true, "Choose a type"],
        enum: ["expense", "income"],
    },
    date: {
        type: Date,
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [0.02, "Amount larger than 1 cent is required"],
    },
    category: {
        type: String,
        required: [true, "A category selection is required"],
        enum: [
            "software",
            "services",
            "mama",
            "hardware",
            "learning",
            "travel",
            "contractors",
            "state tax",
            "wave invoice",
            "upwork",
            "cash",
        ],
    },
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
