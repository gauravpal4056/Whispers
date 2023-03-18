import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setRoomID } from '../../store/authSlice'

const InviteRoom = () => {

    const { invite_id } = useParams()
    const dispatch = useDispatch()
    const login = () => {
        const temp = dispatch(setRoomID(invite_id))
        console.log(temp);
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        )
        
    }

    return (
        <>
            you have been invited to join the room {invite_id}
            <div>
                hello login to that room
                <button onClick= {login}>login</button>
            </div>
        </>
    )
}

export default InviteRoom;