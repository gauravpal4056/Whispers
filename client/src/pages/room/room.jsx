import { useState } from "react"
import { useDispatch } from "react-redux"
import { setRoomID } from "../../store/authSlice"

const Room = () => {

    const [details, setDetails] = useState("")
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setRoomID(details))
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setDetails(value)
    } 
    return (
        <>
            <div>
                <h1>enter room no</h1>
                <input type="text" value={details} />
                <button onClick={handleClick}>go</button>
            </div>
        </>
    )
}

export default Room