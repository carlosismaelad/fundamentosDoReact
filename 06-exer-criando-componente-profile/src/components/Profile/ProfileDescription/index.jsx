import propTypes from "prop-types"
import styles from "./styles.module.css"

export default function ProfileDescription(props){
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )

}

ProfileDescription.prototypes = {
    children: propTypes.node
}