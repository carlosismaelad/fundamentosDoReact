import propTypes from "prop-types"
import styles from "./styles.module.css"

export default function LinkButton(props){
    return(
        <a 
            className={styles.wrapper} 
            href={props.href} 
            target="_blank" 
            rel="noreferrer">
            {props.children}
        </a>
    )
}


LinkButton.propTypes = {
    children: propTypes.node
}