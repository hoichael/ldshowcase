import styles from "/styles/TimelineEntry.module.css"
import GameCard from "./GameCard"
import SVG from "./SVG"
import GameInterface from "../util/Game"

interface Props {
    info: GameInterface;
}

const TimelineEntry: React.FC<Props> = ( { info } ) => {

    return (
        <div className={styles.container}>
            <div className={styles.datecontainer}>
                {info.date}
            </div>
            <div className={styles.svgcontainer}>
                <SVG which={info.svg}/>
            </div>
            <div className={styles.cardcontainer}>
                <GameCard info={info}/>
            </div>
        </div>
    )
}

export default TimelineEntry