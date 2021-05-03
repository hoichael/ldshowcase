import { useState, useRef } from "react"
import styles from "/styles/GameCard.module.css"

interface Props {
   info: object;
}

const GameCard: React.FC<Props> = ( { info } ) => {
    let expanded = useRef(false);

    function changeHeight(e:any): void {
        if(expanded.current) {
            e.currentTarget.classList.remove(styles.expanded)
            expanded.current = false;
        } else {
            e.currentTarget.classList.add(styles.expanded)
            expanded.current = true;
        }
    }

    return (
        <div className={styles.container} onClick={(e) => {changeHeight(e)}}>
            <img className={styles.thumbnail} src="https://img.itch.zone/aW1nLzI1Mjc0NTkucG5n/315x250%23c/btzn8z.png"></img>
        </div>
    )
}

export default GameCard