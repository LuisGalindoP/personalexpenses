import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Main = (props) => {
    const { allExpenses, setAllExpenses } = props;
    const { reload, setReload } = props;
    const [month, setMonth] = useState(0);

    const allMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    useEffect(() => {
        let today = new Date();
        setMonth(today.getMonth() + 1);
    }, [reload]);

    //handle delete Expenses
    const handleDeleteExpense = (id) => {
        axios
            .post(`http://localhost:8000/api/expenses/${id}`)
            .then((response) => {
                setReload(!reload);
                // console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="component-base">
            <h2 className="title-component">By Month</h2>

            <div className="select-month">
                <label className="form-label">Select Month: </label>
                <select
                    className="select-month-input"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    name="month"
                >
                    <option value={month}>{allMonths[month - 1]}</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>type</th>
                            <th>amount</th>
                            <th>date</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allExpenses.map((expense, index) => {
                            if (expense.date.toString().slice(5, 7) == month) {
                                return (
                                    <tr key={index}>
                                        <td>{expense.name}</td>
                                        <td>{expense.type}</td>
                                        <td>{expense.amount}.00</td>
                                        <td>
                                            {expense.date
                                                .toString()
                                                .slice(0, 10)}
                                        </td>
                                        <td>{expense.category}</td>
                                        <td>
                                            <button
                                                className="delete-button"
                                                onClick={(event) => {
                                                    handleDeleteExpense(
                                                        expense._id
                                                    );
                                                }}
                                                type={"submit"}
                                            >
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Main;
