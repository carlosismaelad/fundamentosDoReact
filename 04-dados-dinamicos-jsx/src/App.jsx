import Title from "./components/Title"
import {Subtitle} from "./components/Subtitle"
import Status from "./components/Status"
import styles from "./App.module.css"


export default function App(){
  // dentro das chaves só podemos usar códigos que o JS entenda
  
  
  return (
    <div className={styles.app}>
      <Title/>
      <Subtitle/>
      <Status/>

      {/* Não podemos usar, dentro do JSX , o if normal mas podemos usar uma expressão ternária */}
      


    </div>
  )
}