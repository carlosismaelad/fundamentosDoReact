import propTypes from "prop-types"
import styles from "./styles.module.css"
import Title from "../Title"
import ProfileDescription from "./ProfileDescription"
import LinkButton from "../LinkButton"

export default function Profile(props){
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span> 
            </Title>
            <ProfileDescription>{props.bio}</ProfileDescription>
            <ProfileDescription>{props.phone}</ProfileDescription>
            <ProfileDescription>{props.email}</ProfileDescription>
            <ProfileDescription className={styles.links}>
                <div className={styles.links}>
                    <LinkButton href={props.githubUrl} target="_blank" rel="noreferrer">Github</LinkButton>
                    <LinkButton href={props.linkedinUrl} target="_blank" rel="noreferrer">Linkedin</LinkButton>
                    <LinkButton href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</LinkButton>
                </div>
            </ProfileDescription>
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