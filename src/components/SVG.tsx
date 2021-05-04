import { useState, useEffect } from "react"
import styles from "/styles/SVG.module.css"

interface Props {
    which: string;
}

const SVG: React.FC<Props> = ( { which } ) => {
    const [path, setPath] = useState("");

    useEffect(() => {
        switch(which) {
            case "mid": {
                setPath("M0 0 L20 0 L20 6 M20 0 L40 0")
                break
            }
            case "start": {
                setPath("M20 6 L20 0 L40 0")
                break
            }
            case "end": {
                setPath("M0 0 L20 0 L20 6")
                break
            }
        }
    }, [])

    return (
        <div className={styles.container}>
            <svg className={styles.svg} viewBox="0 0 40 6" preserveAspectRatio="none">
                <path className={styles.path} d={path} fill="none" stroke="black"></path>
            </svg>
        </div>
    )
}

export default SVG
