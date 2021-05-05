import { useEffect, useRef, useState } from "react"
import styles from "/styles/Timeline.module.css"
import TimelineEntry from "./TimelineEntry"
import Gradient from "./Gradient"

const Timeline: React.FC = () => {

//    let element:HTMLElement;
    const [element, setElement] = useState<HTMLElement>();
//    let hasScrolled = useRef(false);
    const [hasScrolled, setHasScrolled] = useState(false);
//    let intuitiveDirection = useRef(1);
    const [intuitiveDirection, setIntDir] = useState(1);

    useEffect(() => {
    //    element = document.getElementById("timeline")!;
    setElement(document.getElementById("timeline")!);
        window.addEventListener("scroll", scroll);
        window.addEventListener('mousewheel', scroll);
        window.addEventListener('DOMMouseScroll', scroll);

        window.addEventListener("mousedown", test)
        window.addEventListener("mouseup", test)
    }, [])

    function test(e:any):void {
        console.log(e)
    }

    function scroll(e:any):void {

        console.log(hasScrolled);

        if(!hasScrolled) {
            getIntuitiveDirection(e);
            return;
        }

        console.log(intuitiveDirection)

        if(e.deltaY) {
            element!.scrollLeft += (intuitiveDirection * (0.38) * e.deltaY);
        } else {
            element!.scrollLeft += (intuitiveDirection * (12) * e.detail);
        }
    }

    function getIntuitiveDirection(e:any):void {

        console.log(e)
        
        if(e.deltaY) {
            console.log(e.deltaY)
            if(e.deltaY < 0) {
                console.log("yo")
                setIntDir(-1);
            }
        } else {
            console.log(e.detail)
            if(e.detail < 0) {
                console.log("yo")
                setIntDir(-1);
            }
        }

        setHasScrolled(true);
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