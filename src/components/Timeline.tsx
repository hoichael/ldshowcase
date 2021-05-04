import styles from "/styles/Timeline.module.css"
import TimelineEntry from "./TimelineEntry"

const Timeline: React.FC = () => {


    return (
        <div className={styles.container}>
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
        </div>
    )
}

export default Timeline