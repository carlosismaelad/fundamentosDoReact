import Card from "./components/Card"
import swPosterImg from "./assets/starwars.jpg"
import esbPosterImg from "./assets/empire-strikes-back.jpg"
import rotjPosterImg from "./assets/return-of-the-jedi.jpg"

function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg}/>
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={esbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg}/>
      
    </>
  )
}

export default App
