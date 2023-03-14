import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import axios from "axios"
function App() {
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/login/success`)
      const data = await res.json();
      setUser(data.user._json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route 
          exact path="/" 
          element = {user ? <Home user = {user}/> : <Navigate to="/login" />}
        />
        <Route 
          exact path="/login" 
          element = {user ? <Home user = {user}/> : <Login />}
        />
      </Routes>
    </div>
  )
}

export default App
