/* 
- JSX é uma extensão da linguagem JavaScript;
- Significa "JavaScript XML"
- Não é entendido pelo navegador, deve ser compilado (pelo Babel, por exemplo)
- É o formato usado pelo React para representar os elemento do DOM
- Facilita o processo de escrita do conteúdo que deve se renderizado na tela.
- O VsCode, por entender que se trata de um arquivo jsx, traz o autocomplete do emet para HTML.
*/

// Exemplo:
const element = <h1>Hello, world!</h1>
const anotherElement = (
    <div>
        <h1>Texto</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
)

// Criando componentes
function Button(){
    return <button>Clique aqui</button>
}

function Container(){
    return (
        <div className="principal">
            <h1>Apresentação</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}