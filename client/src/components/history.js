import "../App.css";

const History = (props) => {
    const { allExpenses } = props;
    const { actualMonth } = props;

    const sortedExpenses = allExpenses.sort();
    return (
        <div className="component-base">
            <h1 className="title-component">History</h1>
            {sortedExpenses.map((srt, index) => {
                return (
                    <div key={index}>
                        <p>{srt.name}</p>
                        <p>{srt.date}</p>
                    </div>
                );
            })}
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
                    {allExpenses ? (
                        allExpenses.map((expense, index) => {
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

export default History;
