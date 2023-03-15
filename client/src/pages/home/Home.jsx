import { useSelector } from "react-redux"
import "./home.css"

const Home = () =>{
    const user = useSelector(state => state.auth.user)
    const logout = () => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/logout`,
            "_self"
        )}
    return (
        <div className="container">
            <button  className="btn" >Welcome</button>
            <button  className="btn" >{user.name}</button>
            <button  className="btn" >{user.googleId}</button>
            <button  className="btn" onClick={logout} >Logout</button>
        </div>
    )
}
export default Home