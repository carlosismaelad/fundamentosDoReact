import propTypes from "prop-types"
import styles from "./styles.module.css"

export default function ProfileSection(props){
    return (
        <div 
            {...props}
            className={`${styles.wrapper} ${props.className}`}>
            {props.children}
        </div>
    )

}

ProfileSection.prototypes = {
    children: propTypes.node
}