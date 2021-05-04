import { useEffect } from "react"
import styles from "/styles/Timeline.module.css"
import TimelineEntry from "./TimelineEntry"
import Gradient from "./Gradient"

const Timeline: React.FC = () => {

    let element:HTMLElement;

    useEffect(() => {
        element = document.getElementById("timeline")!;
        window.addEventListener("scroll", scroll);
        window.addEventListener('mousewheel', scroll);
        window.addEventListener('DOMMouseScroll', scroll);
    }, [])

    function scroll(e:any):void {
    /*    console.log("asdf")
        console.log(e);
        console.log(element.scrollLeft);
        console.log(e.deltaY); */
        if(e.detail) {
            element.scrollLeft += (-1 * (15) * e.detail);
        } else {
            element.scrollLeft += (-1 * (0.35) * e.deltaY);
        }
    }

    return (
        <div id="timeline" className={styles.container}>
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