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
  const [loggedUser, setLoggedUser] = useState('');
  const [loggedType, setLoggedType] = useState('');
  const [votedCand, setVotedCand] = useState('');

  const handleLogin = () => {
    setShowLogin(false);
    setShowVoting(true);
  }
  const handleVoting = (candidateName) => {
    let votedCandidate = candidateName;
    setVotedCand(votedCandidate);
    setShowVoting(false);
    setShowConfirm(true);
  }
  const handleChange = () => {
    setShowConfirm(false);
    setShowVoting(true);
  }
  const handleLogout = () => {
    setShowConfirm(false);
    setShowAdmin(false);
    setShowVoting(false);
    setShowLogin(true);
    setLoggedUser('');
  }
  const handleConfirm = () => {
    if (loggedType === 'admin') {
      setShowConfirm(false);
      setShowAdmin(true);
    } else if (loggedType === 'user') {
      handleLogout();
    }
  }

  const saveUserName = (userName) => {
    setLoggedUser(userName);
  };
  const saveType = (type) => {
    setLoggedType(type);
    console.log(type);
  };
  return (
    <main className='mainContainer'>
      {!showLogin && <Nav onLogout={handleLogout} loggedUser={loggedUser} />}
      <section className='loginSection'>
        {showLogin && <Login onLogin={handleLogin} onSaveUser={saveUserName} onSaveType={saveType} />}
      </section>
      <section className='candidateSection'>
        {!showLogin && showVoting && <CandidateCard onVoting={handleVoting} />}
        {!showLogin && showConfirm && <ConfirmPage onConfirm={handleConfirm} onChange={handleChange} votedCand={votedCand} />}
      </section>
      {!showLogin && showAdmin && <AdminPage />}
    </main>
  )

}

export default App
