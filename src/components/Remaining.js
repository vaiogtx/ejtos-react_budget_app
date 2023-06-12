import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Budget from "./Budget";

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > Budget ? "alert-danger" : "alert-success";

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;