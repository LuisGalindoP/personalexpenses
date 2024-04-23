const Expense = require("../models/expense.model");

module.exports = {
    //FIND AND RETURN ALL THE EXPENSES IN DB
    findAllExpenses: (req, res) => {
        Expense.find()
            .then((allExpenses) => {
                console.log(allExpenses);
                res.json(allExpenses);
            })
            .catch((err) => {
                console.log(`Error in findAllExpenses ${err}`);
                res.json({
                    message: "Something went wrong with findAllExpenses",
                    error: err,
                });
            });
    },
    //CREATE A NEW EXPENSE IN DB
    createNewExpense: (req, res) => {
        Expense.create(req.body)
            .then((newExpense) => {
                console.log(newExpense);
                res.json(newExpense);
            })
            .catch((err) => {
                console.log(`Error in createNewExpense ${err}`);
                //We set a response status of 400 to display our err, which is the rejection of our promise.
                //A 400 status means our client is talking to our server just fine, but the client is not sending good info
                //A 404 status means you are not calling to the right place or your server is not setup properly
                //This is how we will eventually display our validations from the server into react
                //On the flip side a status of 200 means we are looking good
                res.status(400).json(err);
            });
    },
    //FIND A SPECIFIC EXPENSE
    findOneExpense: (req, res) => {
        Expense.findOne({ _id: req.params.id })
            .then((oneExpense) => {
                console.log(oneExpense);
                res.json(oneExpense);
            })
            .catch((err) => {
                console.log(`Error in findOneExpense ${err}`);
                res.json({ message: "Error in findOneExpense", error: err });
            });
    },
    //DELETE A SPECIFI EXPENSE
    deleteOneExpense: (req, res) => {
        Expense.deleteOne({ _id: req.params.id })
            .then((deleteOne) => {
                console.log(deleteOne);
                res.json(deleteOne);
            })
            .catch((err) => {
                console.log(`Error in deleteOneExpense ${err}`);
                res.json({ message: "Error in deleteOneExpense", error: err });
            });
    },
};
