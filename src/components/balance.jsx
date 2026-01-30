import { useState } from "react";
import Budget from "./budget";
import Expenses from "./expenses";
import BalanceCard from "./details";

function Balance({budget, expenses, setBudget, setExpenses, hasBudget, setHasBudget}) {
    const totalExpenses = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    const balance = budget - totalExpenses;

    return(
        <div className="p-6 space-y-4">
            <BalanceCard balance={balance} />
            <p className="text-sm text-gray-600">
                Total Expenses: Ksh {totalExpenses}
            </p>

            {!hasBudget && (
                <Budget 
                  budget={budget} 
                  setBudget={setBudget} 
                  setHasBudget={setHasBudget} 
                />
            )}

            {hasBudget && (
                <Expenses 
                  expenses={expenses} 
                  setExpenses={setExpenses} 
                />
            )
            }                       
        </div>
    );
}

export default Balance;