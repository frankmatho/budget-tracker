import { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

    return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Expenses</h3>
      <input
        type="number"
        placeholder="Add Amount"
        value={expenses}
        onChange={(e) => setExpenses(Number(e.target.value))}
        className="border p-2 w-full mt-2"
      />
    </div>
    );
}

export default Expenses;