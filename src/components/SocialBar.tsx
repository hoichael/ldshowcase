import SocialIcon from "./SocialIcon"
import styles from "/styles/SocialBar.module.css"

const SocialBar: React.FC = () => {

    return (
            <div className={styles.container}>
                <SocialIcon url="https://github.com/Noah2610" src="github.svg" title="Noah's GitHub"/>
                <SocialIcon url="https://soundcloud.com/g0rm" src="soundcloud.svg" title="Moritz' SoundCloud"/>
                <SocialIcon url="https://github.com/hoichael" src="github.svg" title="My Github"/>
            </div>
    )
}

export default SocialBar
