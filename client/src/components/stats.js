import "../App.css";

const Stats = (props) => {
    const { allExpenses } = props;
    const { actualMonth } = props;

    let totalIncome = 0;
    let totalExpenses = 0;
    let profit = 0;

    let averageMonthIncome = 0;

    //Calculate the total income, expenses and profit of the year
    allExpenses.map((expense, index) => {
        if (expense.type === "income") {
            totalIncome += expense.amount;
        } else {
            totalExpenses += expense.amount;
        }
        profit = totalIncome - totalExpenses;
        averageMonthIncome = profit / actualMonth;
    });

    return (
        <div className="component-base">
            <h2 className="title-component">Annual Stats</h2>
            <div className="stats">
                <div className="stats-low">
                    <div>
                        <p>Income</p>
                        <p>Expenses</p>
                        <p>Profit</p>
                        <p>Average Month</p>
                    </div>
                    <div>
                        <p>{totalIncome}</p>
                        <p>{totalExpenses}</p>
                        <p>{profit}</p>
                        <p>{averageMonthIncome.toFixed(0)}</p>
                    </div>
                </div>
                <div className="stats-low">
                    <div>
                        <p>Entries</p>
                        <p>Month</p>
                        <p>Profit</p>
                        <p>Average Month</p>
                    </div>
                    <div>
                        <p>{allExpenses.length}</p>
                        <p>{actualMonth}</p>
                        <p>{profit}</p>
                        <p>{averageMonthIncome.toFixed(0)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
