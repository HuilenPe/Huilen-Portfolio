import styles from "./button.module.css";

function Button({ children, onClick, href, variant = "primary", icon }) {
    const className = `${styles.button} ${styles[variant]}`;
    const content = (
        <>
            <span>{children}</span>
            {icon && <span className={styles.icon}>{icon}</span>}
        </>
    );


    if (href) {
        return (
            <a
                href={href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {content}
        </button>
    );
}

export default Button;