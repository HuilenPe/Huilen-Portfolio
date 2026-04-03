import { useRef, useEffect, useState } from "react"
import styles from "./header.module.css"
import logoStyles from "./logo.module.css"

function Header() {
    const hRef = useRef(null)
    const dotRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    // lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto"
    }, [isOpen])

    // close mobile menu on desktop
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // run intro logo animation
    useEffect(() => {
        
        if (!hRef.current || !dotRef.current) return

        // H 
        hRef.current.animate(
            [
                { transform: "translateY(-120px)", opacity: 0 },
                { transform: "translateY(0)", opacity: 1 }
            ],
            {
                duration: 600,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards"
            }
        )

        // DOT rebote
        setTimeout(() => {
            dotRef.current.animate(
                [
                    { transform: "translateY(-120px)", opacity: 0 },
                    { transform: "translateY(0)", opacity: 1 }
                ],
                {
                    duration: 900,
                    easing: "cubic-bezier(0.34, 2.2, 0.64, 1)", 
                    fill: "forwards"
                }
            )
        }, 400)

    }, [])


    return (
        <header className={styles.header}>
            <div className={styles.container}>

                {/* logo */}
                <div className={styles.logo}>
                    <svg
                        className={styles.h}
                        viewBox="0 0 369 420"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">

                        {/* h */}
                        <path
                            ref={hRef}
                            className={`${logoStyles.path} ${logoStyles.hStart}`}
                            d="M174.5 1.5L94.5 16.5L1.5 355.5L77 341.5C79 330.3 105.594 228.5 115 207C120.833 193.667 141.8 167 179 167C216.2 167 212.833 205 206.5 224L176.5 341.5L246 337.5L283 196.5C295 139 273.5 108.995 232.5 103.5C184 97 150.5 123.5 128.5 149.5L174.5 1.5Z" fill="black"
                            stroke="black"
                        />
                        
                        {/* dot */}
                        <path
                            ref={dotRef}
                            className={`${logoStyles.path} ${logoStyles.dotStart}`}
                            d="M365.5 293.5C346.5 252 286.5 280 289.5 318.5C291.5 341.5 311 353.5 341.5 341C365.9 331 371 310 365.5 293.5Z"
                            fill="black"
                            stroke="black"
                        />
                    </svg>
                </div>

                {/* nav desktop (visible desde 768px)*/}
                <nav className={styles.nav}>
                    <a href="#projects">Proyectos</a>
                    <a href="#about">Sobre mí</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contacto</a>
                </nav>

                {/* burger (solo mobile) */}
                <button
                    className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
                    aria-label="Menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* nav mobile */}
                {isOpen && (
                    <nav className={styles.mobileNav}>
                        <a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a>
                        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>
                    </nav>
                )}

            </div>
        </header>
    )
}

export default Header