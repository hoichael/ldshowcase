import { useState, useEffect } from "react"
import styles from "/styles/Banner.module.css"

const Banner: React.FC = () => {

    const [text, setText] = useState("");
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
                setText(`Ludum Dare Games 2019-${yearCurrent}`)
                break;
            }
            case width >=900: {
                setText(`Ludum Dare: 2019-${yearCurrent}`)
                break;
            }
            default: {
                setText(`LD 2019-${yearCurrent}`)
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