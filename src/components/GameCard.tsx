import { useState, useRef } from "react"
import styles from "/styles/GameCard.module.css"
import GameInterface from "../util/Game"

interface Props {
    info: GameInterface;
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

    function openLink(e:any, url:string) {
        e.preventDefault();
        window.open(url);
    }

    return (
        <div className={styles["container"] + " " + styles["hover"]} onClick={(e) => {changeHeight(e)}}>
            <img className={styles.thumbnail} src={info.img}></img>
            <div className={styles.text}>{info.title}</div>
            <div className={styles.links}>
                <div><a className={styles.link} href={info.itchLink} onClick={(e) => openLink(e, info.itchLink)}>Itch Page</a></div>
                <div><a className={styles.link} href={info.ldLink} onClick={(e) => openLink(e, info.ldLink)}>LD Page</a></div>
            </div>
        </div>
    )
}

export default GameCard