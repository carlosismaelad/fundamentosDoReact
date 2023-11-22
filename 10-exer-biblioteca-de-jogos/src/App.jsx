import { useState } from "react"


function App() {
  const [ggames, setGames] = useState(()=> {
    const storedGames = localStorage.getItem("obc-game-lib")
    if(!storedGames) return []
    return JSON.parse(storedGames)

  })
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title, cover})
    setTitle("")
    setCover("")
  }

  

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título do jogo: </label>
          <input 
            type="text" 
            name="title" 
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa: </label>
          <input 
            type="text" 
            name="cover" 
            id="cover" 
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar à biblioteca</button>
      </form>
      <div className="games">
        {ggames.map((game) =>(
          <div key={game.id}>
            <img src={game.cover} alt="" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default App
