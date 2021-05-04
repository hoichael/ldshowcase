import styles from "/styles/TimelineEntry.module.css"
import GameCard from "./GameCard"
import SVG from "./SVG"

interface Props {
    which: string;
}

const TimelineEntry: React.FC<Props> = ( { which } ) => {

    return (
        <div className={styles.container}>
            <div className={styles.datecontainer}>
                ASDFASDF
            </div>
            <div className={styles.svgcontainer}>
                <SVG which={which}/>
            </div>
            <div className={styles.cardcontainer}>
                <GameCard info={{}}/>
            </div>
        </div>
    )
}

export default TimelineEntry