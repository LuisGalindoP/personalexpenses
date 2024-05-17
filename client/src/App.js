import React, { useState, useEffect } from "react";
import axios from "axios";

import Month from "./components/month";
import AddExpense from "./components/addExpense";
import Stats from "./components/stats";
import History from "./components/history";

import "./App.css";

function App() {
    const [allExpenses, setAllExpenses] = useState([]);
    const [reload, setReload] = useState(false);
    const [actualMonth, setActualMonth] = useState(0);

    useEffect(() => {
        let today = new Date();
        setActualMonth(today.getMonth() + 1);
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

    return (
        <div>
            <h2 className="title-app">My Expenses</h2>
            <AddExpense
                allExpenses={allExpenses}
                setAllExpenses={setAllExpenses}
                reload={reload}
                setReload={setReload}
            />

            <Month
                allExpenses={allExpenses}
                setAllExpenses={setAllExpenses}
                reload={reload}
                setReload={setReload}
            />
            <Stats
                allExpenses={allExpenses}
                setAllExpenses={setAllExpenses}
                actualMonth={actualMonth}
            />
            <History allExpenses={allExpenses} actualMonth={actualMonth} />
        </div>
    );
}

export default App;
