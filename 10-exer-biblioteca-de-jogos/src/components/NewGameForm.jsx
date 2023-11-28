import PropTypes from "prop-types"
import { useState } from "react"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm( { addGame}){

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({title, cover})
        setTitle("")
        setCover("")
    }

    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    return(
        <form onSubmit={handleSubmit}>
        <TextInput id="title" label="Título" value={title} setValue={setTitle}/>
        <TextInput id="cover" label="Capa" value={cover} setValue={setCover}/>
        <button type="submit">Adicionar à biblioteca</button>
      </form>
    )
}