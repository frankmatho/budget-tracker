import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import BalanceCard from './components/details.jsx'

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <BalanceCard budget={budget} expenses={expenses} setBudget={setBudget} setExpenses={setExpenses} />
    </div>
  )
}

export default App
