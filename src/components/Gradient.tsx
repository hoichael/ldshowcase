import styles from "/styles/Gradient.module.css"

interface Props {
    which: string;
}

const Gradient: React.FC<Props> = ( { which } ) => {

    return (
        <div className={styles["container"] + " " + styles[`${which}`]}>

        </div>
    )
}

export default Gradient
