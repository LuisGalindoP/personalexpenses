import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const AddExpense = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("expense");
    const [date, setDate] = useState("01/01/2024");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("software");
    const { reload, setReload } = props;
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors({});
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
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
        setName("");
        setAmount(0);
    };
    return (
        <div className="component-base">
            <h2 className="title-component">New Transaction</h2>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <div className="form-component">
                        <label className="form-label">description:</label>
                        <input
                            className="form-input"
                            placeholder="description"
                            name="description"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-component">
                        <label className="form-label">type:</label>
                        <select
                            className="form-input"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            name="type"
                        >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </div>
                    <div className="form-component">
                        <label className="form-label">amount:</label>
                        <input
                            name="amount"
                            className="form-input"
                            type="Number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="form-component">
                        <label className="form-label">date:</label>
                        <input
                            className="form-input"
                            type="date"
                            // value={actualDate}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="form-component">
                        <label className="form-label">category:</label>
                        <select
                            className="form-input"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            name="category"
                        >
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

                    <button className="add-button" type={"submit"}>
                        Add
                    </button>
                </div>
            </form>
            {errors.amount ? (
                <p className="error">{errors.amount.message}</p>
            ) : null}
            {errors.name ? (
                <p className="error">{errors.name.message}</p>
            ) : null}
            {errors.date ? (
                <p className="error">{errors.date.message}</p>
            ) : null}
        </div>
    );
};

export default AddExpense;
