import styles from "/styles/Timeline.module.css"
import TimelineEntry from "./TimelineEntry"
import Gradient from "./Gradient"

const Timeline: React.FC = () => {


    return (
        <div className={styles.container}>
            <Gradient which="left"/>
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
            <Gradient which="right"/>
        </div>
    )
}

export default Timeline