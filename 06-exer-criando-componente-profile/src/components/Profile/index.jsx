import propTypes from "prop-types"
import styles from "./styles.module.css"
import Title from "../Title"
import ProfileSection from "./ProfileDescription"
import LinkButton from "../LinkButton"

export default function Profile(props){
    

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={() => alert(`Agora você está seguindo ${props.name}`)}
                >
                    Follow
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection 
                className={styles.links}
                id="links-section"
            
            >
            
                    <LinkButton href={props.githubUrl} target="_blank" rel="noreferrer">Github</LinkButton>
                    <LinkButton href={props.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</LinkButton>
                    <LinkButton href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</LinkButton>
 
            </ProfileSection>
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