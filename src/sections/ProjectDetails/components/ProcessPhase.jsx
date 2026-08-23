import styles from "../ProjectDetails.module.css"

function ProcessPhase({ area }) {
  return (
    <span className={styles.processPhase}>
      {area}
    </span>
  )
}

export default ProcessPhase
