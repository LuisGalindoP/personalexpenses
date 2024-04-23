const Stats = (props) => {
    const { allExpenses } = props;

    let totalIncome = 0;
    let totalExpenses = 0;
    let profit = 0;

    for (let i = 0; i < allExpenses.length; i++) {
        totalIncome = totalIncome + allExpenses[i].amount;
    }

    return (
        <div>
            <h1>Stats</h1>
            {allExpenses ? <h2>{allExpenses.length}</h2> : <h2>nada</h2>}
            {totalIncome}
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
