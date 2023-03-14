import "./home.css"

const Home = (user) =>{
    const logout = () => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/logout`,
            "_self"
        )}
    return (
        <div className="container">
            <button  className="btn" >Welcome</button>
            <button  className="btn" >{user.user.name}</button>
            <button  className="btn" >{user.user.email}</button>
            <button  className="btn" onClick={logout} >Logout</button>
        </div>
    )
}
export default Home