import "./login.css"


const Login = () => {

    const login = () => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        )}
    

    return (<div className="container">
        <button onClick={login} className="btn" >Sign in with google</button>
    </div>)
}

export default Login