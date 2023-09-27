function sum(a,b){
  return a + b
}

export default function App(){
  // dentro das chaves só podemos usar códigos que o JS entenda
  const tech = "React"
  const status = true
  
  return (
    <div>
      <h1>{tech} is awesome!</h1>
      <h2>Like 1 + 1 is {sum(1,1)}</h2>

      {/* se passarmos apenas true o browswer não exibirá nada */}
      <h2>Current status: {JSON.stringify(status)}</h2> 

      {/* Não podemos usar, dentro do JSX , o if normal mas podemos usar uma expressão ternária */}
      <h2>Vamos estudar? {status ? "Of course!" : "Oh, no! :("}</h2>


    </div>
  )
}