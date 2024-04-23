import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Main from "./components/main";
import AddExpense from "./components/addExpense";
import Stats from "./components/stats";

function App() {
    const [allExpenses, setAllExpenses] = useState([]);
    const [reload, setReload] = useState(false);

    return (
        <div>
            <AddExpense
                allExpenses={allExpenses}
                setAllExpenses={setAllExpenses}
                reload={reload}
                setReload={setReload}
            />
            <Main
                allExpenses={allExpenses}
                setAllExpenses={setAllExpenses}
                reload={reload}
                setReload={setReload}
            />
            <Stats allExpenses={allExpenses} setAllExpenses={setAllExpenses} />
        </div>
    );
}

export default App;
