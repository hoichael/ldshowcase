import styles from "/styles/GameCard.module.css"

interface Props {
   info: object;
}

const GameCard: React.FC<Props> = ( { info } ) => {

    return (
        <div className={styles.container}>
        </div>
    )
}

export default GameCard