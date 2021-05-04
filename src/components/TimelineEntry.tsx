import styles from "/styles/TimelineEntry.module.css"
import GameCard from "./GameCard"
import SVG from "./SVG"

const TimelineEntry: React.FC = () => {


    return (
        <div className={styles.container}>
            <SVG />
            <GameCard info={{}}/>
        </div>
    )
}

export default TimelineEntry