import { useState, useEffect } from "react";
import "../App.css";

import MonthHistory from "./monthHistory";

const History = (props) => {
    const { allExpenses } = props;
    const { actualMonth } = props;
    const { reload } = props;

    const [jan, setJan] = useState([]);
    const [feb, setFeb] = useState([]);
    const [mar, setMar] = useState([]);
    const [apr, setApr] = useState([]);
    const [may, setMay] = useState([]);
    const [jun, setJun] = useState([]);
    const [jul, setJul] = useState([]);
    const [ago, setAgo] = useState([]);
    const [sep, setSep] = useState([]);
    const [oct, setOct] = useState([]);
    const [nov, setNov] = useState([]);
    const [dec, setDec] = useState([]);

    useEffect(() => {
        let janEntries = [];
        let febEntries = [];
        let marEntries = [];
        let aprEntries = [];
        let mayEntries = [];
        let junEntries = [];
        let julEntries = [];
        let agoEntries = [];
        let sepEntries = [];
        let octEntries = [];
        let novEntries = [];
        let decEntries = [];

        allExpenses.map((entry) => {
            let entryMonth = entry.date.slice(5, 7);
            switch (entryMonth) {
                case "01":
                    janEntries.push(entry);
                    break;
                case "02":
                    febEntries.push(entry);
                    break;
                case "03":
                    marEntries.push(entry);
                    break;
                case "04":
                    aprEntries.push(entry);
                    break;
                case "05":
                    mayEntries.push(entry);
                    break;
                case "06":
                    junEntries.push(entry);
                    break;
                case "07":
                    julEntries.push(entry);
                    break;
                case "08":
                    agoEntries.push(entry);
                    break;
                case "09":
                    sepEntries.push(entry);
                    break;
                case "10":
                    octEntries.push(entry);
                    break;
                case "11":
                    novEntries.push(entry);
                    break;
                case "12":
                    decEntries.push(entry);
                    break;
                default:
                    console.log("nope");
            }
        });

        setJan(janEntries);
        setFeb(febEntries);
        setMar(marEntries);
        setApr(aprEntries);
        setMay(mayEntries);
        setJun(junEntries);
        setJul(julEntries);
        setAgo(agoEntries);
        setSep(sepEntries);
        setOct(octEntries);
        setNov(novEntries);
        setDec(decEntries);
    }, [allExpenses]);

    return (
        <div className="component-base">
            <h1 className="title-component">History</h1>
            {dec.length > 0 ? (
                <MonthHistory monthExpenses={dec} month="December" />
            ) : (
                <div />
            )}
            {nov.length > 0 ? (
                <MonthHistory monthExpenses={nov} month="November" />
            ) : (
                <div />
            )}
            {oct.length > 0 ? (
                <MonthHistory monthExpenses={oct} month="October" />
            ) : (
                <div />
            )}
            {sep.length > 0 ? (
                <MonthHistory monthExpenses={sep} month="September" />
            ) : (
                <div />
            )}
            {ago.length > 0 ? (
                <MonthHistory monthExpenses={ago} month="August" />
            ) : (
                <div />
            )}
            {jul.length > 0 ? (
                <MonthHistory monthExpenses={jul} month="July" />
            ) : (
                <div />
            )}
            {jun.length > 0 ? (
                <MonthHistory monthExpenses={jun} month="June" />
            ) : (
                <div />
            )}
            {may.length > 0 ? (
                <MonthHistory monthExpenses={may} month="May" />
            ) : (
                <div />
            )}
            {apr.length > 0 ? (
                <MonthHistory monthExpenses={apr} month="April" />
            ) : (
                <div />
            )}
            {mar.length > 0 ? (
                <MonthHistory monthExpenses={mar} month="March" />
            ) : (
                <div />
            )}
            {feb.length > 0 ? (
                <MonthHistory monthExpenses={feb} month="February" />
            ) : (
                <div />
            )}
            {jan.length > 0 ? (
                <MonthHistory monthExpenses={jan} month="January" />
            ) : (
                <div />
            )}
        </div>
    );
};

export default History;
