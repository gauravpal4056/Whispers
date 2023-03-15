import { useState,  } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../store/authSlice"
import axios from "axios"
import "./profile.css"
const Profile = () => {
    const navigate = useNavigate()
    const userName = useSelector((state) => state.auth.name)
    const googleId = useSelector((state) => state.auth.googleId)
    const dispatch = useDispatch()
    const [details, setDetails] = useState({
        name:"", room:""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails({
            ...details,
            [name]: value
        })
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const {name, room} = details
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/create`, {
                name: name,
                room: room,
                googleId: googleId
            })
            const {data, status} = res
            console.log(res);
            console.log(data.user);
            if(status===200){
                dispatch(setUser(data.user))
                navigate("/")
            }
            else{
                console.log("error");
            }
        }
    catch(e){
        console.log(e);
    }
}
    return (
        <>
            <h1>Create a profile</h1>
            <form onSubmit={handleSubmit}>
                <h1>hey ! {userName}</h1>
                <h2>What do you want to be called ?</h2>
                <input className="btn" name="name" value={details.name} onChange={handleChange} placeholder="Name"/>
                <h2>Where are all of your Friends ?</h2>
                <input className="btn" name="room" value={details.room} onChange={handleChange} placeholder="room ID"/>
                <h2>Are you ready to create your account?</h2>
                <button  className="btn" type="submit"  />
            </form>
        </>
    )
}

export default Profile