import { useState } from "react";

function Budget({budget, setBudget}) {
    return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Budget</h3>
      <input
        type="number"
        placeholder="Add Budget Amount"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="border p-2 w-full mt-2"
      />
    </div>

    );
}

export default Budget;