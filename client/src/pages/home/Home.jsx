const Home = (userDetails) =>{
    const logout = () => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/logout`,
            "_self"
        )}
    
    return (
        <div className="container">
            <h1 className="btn">Home</h1>
            <h2  className="btn">{userDetails.name}</h2>
            <h2 className="btn">{userDetails.email}</h2>
            <button  className="btn" onClick={logout} >Logout</button>
        </div>
    )
}
export default Home