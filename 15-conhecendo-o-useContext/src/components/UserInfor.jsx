import { useContext } from "react"
import UserContext from "../contexts/userContext"

export default function UserInfo(){

    const user = useContext(UserContext)

    return(
        <div>
            <h2>informações do usuário</h2>
            <p>Nome: {user.name}</p>
            <p>e-mail: {user.email}</p>
        </div>
    )
}