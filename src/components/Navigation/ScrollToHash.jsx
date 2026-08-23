import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }

    const targetId = decodeURIComponent(
      location.hash.replace("#", "")
    )

    let frame
    let attempts = 0
    const maxAttempts = 10

    function scrollToTarget() {
      const target = document.getElementById(targetId)

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        return
      }

      attempts += 1

      if (attempts < maxAttempts) {
        frame = requestAnimationFrame(scrollToTarget)
      }
    }

    frame = requestAnimationFrame(scrollToTarget)

    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToHash
