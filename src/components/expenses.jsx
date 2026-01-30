import { useState } from "react";

function Expenses({expenses, setExpenses}) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function addExpense( ) {
    if (!name || !amount) return;

    setExpenses([
        ...expenses,
        {id: Date.now(), name, amount: Number(amount)}
    ]);

    setName("");
    setAmount("");
  }

    return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Add Expense</h3>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mt-2"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mt-2"
      />

      <button 
        onClick={addExpense} 
        className="bg-black text-white p-2 rounded mt-2">
        Add
      </button>

      <ul>
        {expenses.map((expense) => (
          <li 
          key={expense.id} 
          className="flex justify-between items-center">
            <span>{expense.name}</span>

            <div className="flex items-center gap-4">
              <span>Ksh {expense.amount}</span>

              <button 
              onClick={() =>
                setExpenses(expenses.filter((e) => e.id !== expense.id))
              }
              className="text-red-500"
              >
                X
              </button>
            </div>            
          </li>
        ))}
      </ul>
    </div>
    );
}

export default Expenses;