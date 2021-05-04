import { useState, useRef } from "react"
import styles from "/styles/GameCard.module.css"

interface Props {
   info: object;
}

const GameCard: React.FC<Props> = ( { info } ) => {
    let expanded = useRef(false);
    let element:any = useRef();
    let expandBool = useRef(false);

    function changeHeight(e:any): void {

        // following 3 functions: really bad. will rewrite at some point. (probably not)
        if(expandBool.current) { return }
        element.current = e.currentTarget;
        if(expanded.current) {
            e.currentTarget.classList.remove(styles.expanded)
            delayedClassChange();
            expanded.current = false;
        } else {
            e.currentTarget.classList.add(styles.expanded)
            e.currentTarget.classList.remove(styles.hover)
            expanded.current = true;
        }
    }

    function delayedClassChange():void {
        if(expandBool.current) { return }
        expandBool.current = true;
        element.current.addEventListener('transitionend', changeClass);
    }

    function changeClass():void {
        element.current.classList.add(styles.hover)
        expandBool.current = false;
        element.current.removeEventListener("transitionend", changeClass)
    }

    return (
        <div className={styles["container"] + " " + styles["hover"]} onClick={(e) => {changeHeight(e)}}>
            <img className={styles.thumbnail} src="https://img.itch.zone/aW1nLzI1Mjc0NTkucG5n/315x250%23c/btzn8z.png"></img>
            <div className={styles.text}>
                TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            </div>
            <div className={styles.links}>
                <div><a className={styles.link} href="https://noahro.itch.io/stabman">Itch Page</a></div>
                <div><a className={styles.link} href="https://noahro.itch.io/stabman">LD Page</a></div>
            </div>
        </div>
    )
}

export default GameCard