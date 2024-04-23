import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Main = (props) => {
    const { allExpenses, setAllExpenses } = props;
    const { reload, setReload } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/expenses")
            .then((res) => {
                // console.log("This is the res from axios allExpenses", res);
                // console.log(res.data);
                setAllExpenses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [reload]);

    const deleteExpense = (id) => {
        axios
            .post(`http://localhost:8000/api/expenses/${id}`)
            .then((response) => {
                setReload(!reload);
                // console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Main component</h1>

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
                        return (
                            <tr key={index}>
                                <td>{expense.name}</td>
                                <td>{expense.type}</td>
                                <td>{expense.amount}.00</td>
                                <td>{(expense.date).toString().slice(0,10)}</td>
                                <td>{expense.category}</td>
                                <td>
                                    <button
                                        onClick={(event) => {
                                            deleteExpense(expense._id);
                                        }}
                                        type={"submit"}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
