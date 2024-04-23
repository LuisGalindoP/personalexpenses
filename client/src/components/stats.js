const Stats = (props) => {
    const { allExpenses } = props;

    const actualMonth = new Date();

    let totalIncome = 0;
    let totalExpenses = 0;
    let profit = 0;

    //Calcula total expenses, income and profit in actual month
    for (let i = 0; i < allExpenses.length; i++) {
        let expenseMonth = new Date(allExpenses[i].date)
        console.log(expenseMonth.getMonth())
        if (expenseMonth.getMonth() === actualMonth.getMonth()) {

            if (allExpenses[i].type === "expense")  {
                totalExpenses = totalExpenses + allExpenses[i].amount;
            }else {
                totalIncome = totalIncome + allExpenses[i].amount;
            }
            profit = totalIncome - totalExpenses;
        }
    }


    return (
        <div>
            <h1>Stats</h1>
            {allExpenses ? <h2>{allExpenses.length}</h2> : <h2>nada</h2>}
            <h3>Income: {totalIncome} </h3>
            <h3>Expenses: {totalExpenses} </h3>
            <h3>Profit: {profit}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Total Expenses</th>
                        <th>Total Income</th>
                        <th>Profit</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Stats;
