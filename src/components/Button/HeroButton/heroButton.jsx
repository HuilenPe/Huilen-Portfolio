import { React } from "react"
import styles from "../HeroButton/heroButton.module.css"

function HeroButton({ text, onClick }) {
    return (
        <button className={styles.heroButton} onClick={onClick}>
            {text}
        </button>
    );
}

export default HeroButton