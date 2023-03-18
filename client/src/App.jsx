import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Profile from './pages/profile/profile'
import InviteRoom from './pages/room/inviteRoom'
import Room from './pages/room/room'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { setName, setGoogleId, setUser } from './store/authSlice'
import axios from "axios"

function App() {
  const user = useSelector((state) => state.auth.user)
  const googleId = useSelector((state) => state.auth.googleId)
  const roomID = useSelector((state) => state.auth.roomID)
  console.log(roomID);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login/success`
      const {data} = await axios.get(url , {withCredentials: true});
      const res = data.user._json;
      console.log(res);
      if(data.exist){
        dispatch(setUser(res))
        navigate('/')
      }
      else{
        dispatch(setGoogleId(res.sub))
        dispatch(setName(res.name))
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
      <Routes>
        <Route 
          exact path="/" 
          element = {user ? <Home /> : googleId ? <Navigate to="/room" /> : <Navigate to="/login" />}
        />
        <Route 
          path="/invite/:invite_id" 
          element= {<InviteRoom />  }
        />
        <Route
          exact path="/room" 
          element = {user ? <Navigate to="/" /> : roomID ? <Navigate to="/room/profile" /> : <Room /> }
        >
          <Route
          exact path="/room/profile" 
          element = {user ? <Navigate to="/" /> : roomID ? <Profile /> : <Navigate to="/login" />}
          />  
        </Route>
        
        <Route 
          exact path="/login" 
          element = {user ?  <Navigate to="/" /> : googleId ? <Navigate to="/room" /> : <Login />}
        />
      </Routes>
    </div>
  )
}

export default App
