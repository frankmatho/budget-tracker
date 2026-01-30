import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
//import BalanceCard from './components/details.jsx'
import Balance from './components/balance.jsx'

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [hasBudget, setHasBudget] = useState(false);

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
