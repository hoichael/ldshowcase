import { useState, useEffect } from "react"
import styles from "/styles/Banner.module.css"

const Banner: React.FC = () => {

    const [text, setText] = useState("");
    const yearZero = "2019"
    const yearCurrent = new Date().getFullYear();

    useEffect(() => {
        adjustText();
        window.onresize = () => {
            adjustText();
        };
    }, [])

    function adjustText(): any {
        let width = window.innerWidth;
        switch(true) {
            case width >= 1400: {
                setText("biggest")
                break;
            }
            case width >=1000: {
                setText("bigger")
                break;
            }
            case width >= 800: {
                setText("big")
                break;
            }
            default: {
                setText("smol")
                break;
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>{text}</div>
        </div>
    )
}

export default Banner