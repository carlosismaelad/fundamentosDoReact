import { useContext } from "react"
import UserContext from "../contexts/userContext"

export default function Header(){
    const user = useContext(UserContext)
    return(
        <header>
            <h3>Bem vindo, {user.name}!</h3>
            <hr />
        </header>
    )
}