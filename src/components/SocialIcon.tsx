import styles from "/styles/SocialIcon.module.css"

interface Props {
    url: string;
    src: string;
    title: string;
}

const SocialIcon: React.FC<Props> = ( { url, src, title } ) => {

    function openLink(e:any, url:string) {
        e.preventDefault();
        window.open(url);
    }

    return (
        <a className={styles.link} href={url} title={title} onClick={(e) => openLink(e, url)}>
            <div className={styles.icon}>
                <img className={styles.img} src={src}></img>
            </div>
        </a>
    )
}

export default SocialIcon