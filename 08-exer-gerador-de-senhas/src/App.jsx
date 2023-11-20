import { useState } from "react"
import Input from "./components/input/input"

function App(){
  const [password, setPassword] = useState("")
  const [copyButton, setCopyButton] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput? customSize : 8

  function generate(){
    const  caracters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""

    for(let i = 0; i< passwordSize; i++){
      const position = Math.floor(Math.random() * caracters.length)
      newPassword += caracters[position]      
    }
    setPassword(newPassword)
    setCopyButton("Copiar")
  }

  function copyToCliboard(){
    window.navigator.clipboard.writeText(password)
    setCopyButton("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput" id="showInput">Customizar o tamanho: </label>
        <input 
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={()=> setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput? (
        <div>
          <label htmlFor="passwordSize">Tamanho da senha: </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
        </div>
      ): null}
      <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyToCliboard}>{copyButton}</button>
      <div>{password}</div>
    </div>

  )
}

export default App
