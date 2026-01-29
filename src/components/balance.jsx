import { useState } from "react";
import Budget from "./budget";
import Expenses from "./expenses";
import BalanceCard from "./details";

function Balance({budget, expenses, setBudget, setExpenses}) {
    const balance = budget -expenses;

    return(
        <div className="p-6 space-y-4">
            <BalanceCard balance={balance} />
            <Budget budget={budget} setBudget={setBudget} />
            <Expenses expenses={expenses} setExpenses={setExpenses} />
        </div>
    );
}

export default Balance;