import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
//import BalanceCard from './components/details.jsx'
import Balance from './components/balance.jsx'

function App() {
  const [budget, setBudget] = useState(() =>{
    return Number(localStorage.getItem("budget")) || 0;
  });

  const [expenses, setExpenses] = useState(() =>{
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [hasBudget, setHasBudget] = useState(() =>{
    return localStorage.getItem("hasBudget") === "true";
  });

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("hasBudget", hasBudget);
  }, [hasBudget]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Balance 
        budget={budget} 
        expenses={expenses} 
        setBudget={setBudget} 
        setExpenses={setExpenses}
        hasBudget={hasBudget} 
        setHasBudget={setHasBudget} 
        />
    </div>
  );
}

export default App
