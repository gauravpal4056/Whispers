import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Profile from './pages/profile/profile'
import Room from './pages/room/room'
import CreateRoom from './pages/room/createRoom'
import { useEffect } from 'react'
import { Navigate, Route, Routes,  } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { setName, setGoogleId, setUser } from './store/authSlice'
import axios from "axios"
import Name from './pages/profile/name'
import Navbar from './components/navbar/navbar'
import { createTheme, ThemeProvider } from '@mui/material';
function App() {

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#9ac101",
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
    typography: {
      fontFamily: [
        ['Oswald', "sans-serif"],
      ].join(','),
    },});

  const user = useSelector((state) => state.auth.user)
  const googleId = useSelector((state) => state.auth.googleId)
  const roomID = useSelector(state => state.auth.roomID)
  const profilePic = useSelector(state => state.auth.profilePic)
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login/success`
      const {data} = await axios.get(url , {withCredentials: true});
      console.log(data);

      const res = data.user;
      if(data.exist){
        dispatch(setUser(res))
      }
      else{
        dispatch(setGoogleId(res._json.sub))
        dispatch(setName(res._json.name))
      }
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route 
            exact path="/" 
            element = {user || googleId ? <Navbar /> : <Navigate to="/login" />}
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
              exact path="profile/name" 
              element = {user ? <Navigate to="/" /> : profilePic ? <Name/> : roomID ? <Navigate to="/profile" /> : googleId ? <Navigate to="/room" /> : <Navigate to="/login" />}
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
