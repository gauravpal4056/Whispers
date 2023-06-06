import './App.css'
//modules
import axios from "axios"
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes,  } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
//pages
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Profile from './pages/profile/profile'
import Room from './pages/room/room'
import CreateRoom from './pages/room/createRoom'
import Sent from './pages/sent/sent'
import Received from './pages/received/received'
import Chat from './pages/chat/chatPage'
import Create from './pages/create/create'
//slices
import { setName, setGoogleId, setUser } from './store/authSlice'
//component
import Navbar from './components/navbar/navbar'
//mui
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Outer from './components/navbar/outer'


function App() {
  const [mode, setMode] = useState(false)
  const darkMode= (mode) => {
    setMode(mode)
  }
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      primary: {
        
        // Purple and green play nicely together.
        main: "#9ac101",
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    }
    ,});

  const user = useSelector((state) => state.auth.user)
  const googleId = useSelector((state) => state.auth.googleId)
  const roomID = useSelector(state => state.auth.roomID)
  const dispatch = useDispatch()
  const getUser = async () => {
    const uid = localStorage.getItem("uid")
    if(uid){
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/auth/checkUser/${uid}`
        const {data} = await axios.get(url);
        if(data.exist){
          dispatch(setUser(data.user))
          console.log(user_exists);
        }
        else{
          dispatch(setGoogleId(data.uid))
          dispatch(setName(data.displayName))
        }
      }catch (error) {
        console.log(error)
      }
    }
    
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route 
            exact path="/" 
            element = {user || googleId ? <Outer mode={mode} toggle={darkMode} /> : <Navigate to="/login" />}
          >
            <Route 
              index element={user ? <Home /> : googleId ?  <Navigate to="/room" /> : <Navigate to="/login" />}
            />
            <Route
              exact path="room" 
              element = {user ? <Navigate to="/" /> : roomID ? <Navigate to="/profile" /> : googleId ? <Room/> : <Navigate to="/login" /> }
            />
            <Route
              exact path="profile" 
              element = {user ? <Navigate to="/" /> : roomID ? <Profile /> : googleId ? <Navigate to="/room" /> : <Navigate to="/login" />}
            />
            <Route
              exact path="sent" 
              element = {user ? <Sent /> : <Navigate to="/login" />}
            />
            <Route
              exact path="received" 
              element = {user ? <Received /> : <Navigate to="/login" />}
            />
            <Route
              exact path="received/chat" 
              element = {user ? <Chat /> : <Navigate to="/login" />}
            />
            <Route
              exact path="create" 
              element = {user ? <Create /> : <Navigate to="/login" />}
            />
            <Route
              exact path="sent/chat" 
              element = {user ? <Chat /> : <Navigate to="/login" />}
            />
          </Route>
          <Route 
            exact path="/login" 
            element = {user ?  <Navigate to="/" /> : googleId ? <Navigate to="/room" /> : <Login />}
          />
          <Route 
            exact path="/createRoom" 
            element = {<CreateRoom />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
