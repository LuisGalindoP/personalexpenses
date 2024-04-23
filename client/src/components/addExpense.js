import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const AddExpense = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("01/01/2024");
    const [amount, setAmount] = useState(0.0);
    const [category, setCategory] = useState("");
    const { reload, setReload } = props;
    const { allExpenses, setAllExpenses } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/expenses", {
                name,
                type,
                date,
                amount,
                category,
            })
            .then((res) => {
                setReload(!reload);
                console.log(
                    "This is the res from submitHandler when adding a expense",
                    res
                );
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1>Add Expense component</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>description:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>type:</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        name="type"
                    >
                        <option value="none" defaultValue hidden>
                            Select a type
                        </option>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
                <div>
                    <label>amount:</label>
                    <input
                        type="Number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label>date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        name="type"
                    >
                        <option value="none" defaultValue hidden>
                            Select a type
                        </option>
                        <option value="software">Software</option>
                        <option value="services">Services</option>
                        <option value="hardware">Hardware</option>
                        <option value="learning">Learning</option>
                        <option value="travel">Travel</option>
                        <option value="contractors">Contractors</option>
                        <option value="state tax">State tax</option>
                        <option value="wave invoice">Wave invoice</option>
                        <option value="upwork">Upwork</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default AddExpense;
