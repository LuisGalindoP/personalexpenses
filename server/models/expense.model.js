const mongoose = require("mongoose");

//set the minmum date for the date entry
const minDate = new Date("2024-01-01");

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "a name for the expense is required"],
        minlength: [3, "the name should be at least 3 characters long"],
    },
    type: {
        type: String,
        required: [true, "choose a type"],
        enum: ["expense", "income"],
    },
    date: {
        type: Date,
        required: [true, "select a date"],
        min: [minDate, "date should be after 01/01/2024"],
    },
    amount: {
        type: Number,
        required: [true, "amount is required"],
        min: [0.01, "amount larger than 1 cent is required"],
    },
    category: {
        type: String,
        required: [true, "category selection is required"],
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
