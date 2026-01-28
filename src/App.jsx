import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import BalanceCard from './components/details.jsx'

function App() {

  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <BalanceCard />
    </div>
  )
}

export default App
