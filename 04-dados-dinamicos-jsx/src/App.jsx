import Title from "./components/Title"
import {Subtitle} from "./components/Subtitle"
import Status from "./components/Status"


export default function App(){
  // dentro das chaves só podemos usar códigos que o JS entenda
  
  
  return (
    <div>
      <Title/>
      <Subtitle/>
      <Status/>

      {/* Não podemos usar, dentro do JSX , o if normal mas podemos usar uma expressão ternária */}
      


    </div>
  )
}