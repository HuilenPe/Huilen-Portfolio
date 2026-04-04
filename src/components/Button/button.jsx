import styles from "./button.module.css";

function Button({ children, onClick, href }) {
    if (href) {
        return (
            <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }
    return (
        <span onClick={onClick} className={styles.link}>
            {children}
        </span>
    );
}

export default Button;