import { useState } from "react"

function App(){
  const [password, setPassword] = useState("")
  const [copyButton, setCopyButton] = useState("Copiar")

  function generate(){
    const  caracters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""

    for(let i = 0; i< length; i++){
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
      <button onClick={generate}>Gerar</button>
      <button onClick={copyToCliboard}>{copyButton}</button>
      <div>{password}</div>
    </div>

  )
}

export default App
