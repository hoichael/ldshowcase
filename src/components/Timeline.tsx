import { useState, useEffect } from "react"
import styles from "/styles/Timeline.module.css"
import TimelineEntry from "./TimelineEntry"
import Gradient from "./Gradient"
import formatData from "../util/formatData"
import GameInterface from "../util/Game"

interface Props {
    data: [[], []] | never[][]
}

const Timeline: React.FC<Props> = ( { data } ) => {

    let element:HTMLElement;
    const [info, setInfo] = useState<null | GameInterface[]>(null)
//    const [receivedData, setDataFlag] = useState(false);

    useEffect(() => {
        element = document.getElementById("timeline")!;
        window.addEventListener("scroll", scroll);
        window.addEventListener('mousewheel', scroll);
        window.addEventListener('DOMMouseScroll', scroll);
    }, [])

    useEffect(() => {
        if(data[0].length === 0) { return }
        console.log(formatData(data));
        setInfo(formatData(data));
    }, [data])

    function scroll(e:any):void {
        if(e.detail) {
            element.scrollLeft += (-1 * (12) * e.detail);
        } else {
            element.scrollLeft += (-1 * (0.38) * e.deltaY);
        }
    }

    function generateEntries() {
        return info!.map(element => (
            <TimelineEntry key={element.title} info={element}/>
        )) 
    }

    return (
        <div id="timeline" className={styles.container}>
            <Gradient which="left"/>
                <div className={styles.timeline}>
                    {info && generateEntries()}
                </div>
            <Gradient which="right"/>
        </div>
    )
}

export default Timeline