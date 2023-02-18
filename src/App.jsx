import { useState } from 'react'
import './App.css'
import Login from './assets/login'
import Nav from './assets/Nav'
import CandidateCard from './assets/CandidateCard'
import ConfirmPage from './assets/ConfirmPage'
import AdminPage from './assets/AdminPage'

function App() {
  // name: 'Tyler-James',
  // password: 'AiHU39s',
  // type: 'admin',
  // email: 'Tyler-James46@walla.co.il'


  const [showLogin, setShowLogin] = useState(true);
  const [showVoting, setShowVoting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleLogin = () => {
    setShowLogin(false);
    setShowVoting(true);
  }
  const handleVoting = () => {
    setShowVoting(false);
    setShowConfirm(true);
  }
  const handleChange = () => {
    setShowConfirm(false);
    setShowVoting(true);
  }
  const handleConfirm = () => {
    setShowConfirm(false);
    setShowAdmin(true);
  }
  const handleLogout = () => {
    setShowConfirm(false);
    setShowAdmin(false);
    setShowVoting(false);
    setShowLogin(true);
  }
  return (
    <main className='mainContainer'>
      {!showLogin && <Nav onLogout={handleLogout} />}
      {showLogin && <Login onLogin={handleLogin} />}
      <section className='candidateSection'>
        {!showLogin && showVoting && <CandidateCard onVoting={handleVoting} />}
        {!showLogin && showConfirm && <ConfirmPage onConfirm={handleConfirm} onChange={handleChange} />}
      </section>
      {!showLogin && showAdmin && <AdminPage />}
    </main>
  )

}

export default App
