import { useState } from 'react'
import './App.css'
import Login from './assets/login'
import Nav from './assets/Nav'
import CandidateCard from './assets/CandidateCard'
import ConfirmPage from './assets/ConfirmPage'
import AdminPage from './assets/AdminPage'

function App() {


  return (
    <main className='mainContainer'>
      <Nav />
      <Login />
      <section className='candidateSection'>
        <CandidateCard />
        <ConfirmPage />
      </section>
      <AdminPage />
    </main>
  )

}

export default App
