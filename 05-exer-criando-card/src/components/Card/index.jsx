import posterImg from "../../assets/starwars.jpg"
import Button from "../Button"
import styles from "./style.module.css"

export default function Card(){
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="Star Wars Poster" />
            <div>
                <h2>Pôster do filme Star Wars</h2>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura em MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar onde você decidir pendurar. Não peca a chance de adicionar essa linda memória ao seu acervo!</p>
                <Button/>
            </div>
        </div>
    )
}