import "../App.css";

const MonthHistory = (props) => {
    const { monthExpenses } = props;
    const { month } = props;

    let mIncome = 0.0;
    let mExpenses = 0.0;
    let mProfit = 0.0;

    //Calculate the total month income, expenses and profit
    monthExpenses.map((expense, index) => {
        if (expense.type === "income") {
            mIncome += expense.amount;
        } else {
            mExpenses += expense.amount;
        }
        mProfit = mIncome - mExpenses;
    });

    return (
        <div>
            <h3 className="month">{month}</h3>
            <div className="stats-low-left">
                <div>
                    <p>Income</p>
                    <p>Expenses</p>
                    <p>Profit</p>
                </div>
                <div>
                    <p>{mIncome.toFixed(2)}</p>
                    <p>{mExpenses.toFixed(2)}</p>
                    <p>{mProfit.toFixed(2)}</p>
                </div>
            </div>
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
                    {monthExpenses ? (
                        monthExpenses.map((expense, index) => {
                            return (
                                <tr key={index}>
                                    <td>{expense.name}</td>
                                    <td>{expense.type}</td>
                                    <td
                                        className={
                                            expense.type === "income"
                                                ? "text-blue"
                                                : "text-red"
                                        }
                                    >
                                        {expense.amount.toFixed(2)}
                                    </td>
                                    <td>
                                        {expense.date.toString().slice(0, 10)}
                                    </td>
                                    <td>{expense.category}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <h1>nu</h1>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MonthHistory;
