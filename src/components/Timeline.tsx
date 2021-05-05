import { useState, useEffect } from "react"
import styles from "/styles/Timeline.module.css"
import TimelineEntry from "./TimelineEntry"
import Gradient from "./Gradient"
import formatData from "../util/formatData"

interface Props {
    data: [[], []] | never[][]
}

const Timeline: React.FC<Props> = ( { data } ) => {

    let element:HTMLElement;
    const [info, setInfo] = useState()

    useEffect(() => {
        element = document.getElementById("timeline")!;
        window.addEventListener("scroll", scroll);
        window.addEventListener('mousewheel', scroll);
        window.addEventListener('DOMMouseScroll', scroll);

    //    window.addEventListener("mousedown", test)
    //    window.addEventListener("mouseup", test) 
    }, [])

    useEffect(() => {
        if(data[0].length === 0) { return }
        console.log(formatData(data));
    }, [data])

    function test(e:any):void {
        console.log("asdfsdfsdfsdf")
        console.log(e)
    }

    function scroll(e:any):void {
    /*    console.log("asdf")
        console.log(e);
        console.log(element.scrollLeft);
        console.log(e.deltaY); */
        if(e.detail) {
            element.scrollLeft += (-1 * (12) * e.detail);
        } else {
            element.scrollLeft += (-1 * (0.38) * e.deltaY);
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