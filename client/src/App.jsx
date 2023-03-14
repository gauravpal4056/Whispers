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
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login/success`
      const {data} = await axios.get(url , {withCredentials: true});
      setUser(data.user._json)
      console.log(user);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route 
          exact path="/" 
          element = {user ? <Home user = {user}/> : <Navigate to="/login" />}
        />
        <Route 
          exact path="/login" 
          element = {user ?  <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </div>
  )
}

export default App
