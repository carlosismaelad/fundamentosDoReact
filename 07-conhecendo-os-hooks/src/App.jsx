import './App.css'
import useCounter from './hooks/useCounter'

// Regra 1: Onde usar os hooks? 
// apenas dentro de funções que são componentes React  exceto dentro de kooks customizados

// Regra 2: A ordem dos hooks
// Não podemos usar um hook fora do toplevel do nosso componente, ou seja, não podemos chamar os hooks dentro de nenhum bloco.

function App() {
  const counter = useCounter()
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
