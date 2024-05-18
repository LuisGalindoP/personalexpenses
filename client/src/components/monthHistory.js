import "../App.css";

const MonthHistory = (props) => {
    const { monthExpenses } = props;
    const { month } = props;
    return (
        <div>
            <h3>{month}</h3>
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
                                    <td>{expense.amount}.00</td>
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
