import propTypes from "prop-types"
import styles from "./styles.module.css"

export default function Profile(props){
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <h2>{props.name}</h2>
            <div>{props.bio}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div className={styles.links}>
                <a href={props.githubUrl} target="_blank" rel="noreferrer">Github</a>
                <a href={props.linkedinUrl} target="_blank" rel="noreferrer">Linkedin</a>
                <a href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</a>
            </div>
        </div>

    )
}

Profile.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    bio: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    githubUrl: propTypes.string.isRequired,
    linkedinUrl: propTypes.string.isRequired,
    twitterUrl: propTypes.string.isRequired
}