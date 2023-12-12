import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/userContext"

export default function App(){
  const user = {
    name: "Carlos",
    email: "carlos@email.com"
  }

  return(
    <>
      <UserContext.Provider value={user}>
        <Header/>
        <h1>Usando o useContext</h1>
        <Container>
          <p>Este é o nosso app com contexto</p>
        </Container>
      </UserContext.Provider>
      <div>
        {/* {Não há acesso ao contexto aqui}   */}
      </div>    
    </>
  )
}