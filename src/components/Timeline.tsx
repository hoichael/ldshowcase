import styles from "/styles/Timeline.module.css"
import TimelineEntry from "./TimelineEntry"

const Timeline: React.FC = () => {


    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                <TimelineEntry which="start"/>
                <TimelineEntry which="mid"/>
                <TimelineEntry which="mid"/>
                <TimelineEntry which="mid"/>
                <TimelineEntry which="mid"/>
                <TimelineEntry which="mid"/>
                <TimelineEntry which="mid"/>
                <TimelineEntry which="mid"/>
                <TimelineEntry which="end"/>
            </div>
        </div>
    )
}

export default Timeline