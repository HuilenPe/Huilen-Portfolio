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

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(targetId)

      if (!target) return

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToHash
