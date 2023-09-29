import propTypes from "prop-types"
import styles from "./styles.module.css"

export default function Title(props){
    return (
        <h2 className={styles.wrapper}>
            {props.children}
        </h2>
    )
}

Title.propTypes = {
    children: propTypes.node,
};