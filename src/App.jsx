import { Route, Routes } from "react-router-dom"
import Header from "./components/Layout/Header/header"
import ScrollToHash from "./components/Navigation/ScrollToHash"
import Home from "./pages/Home/Home"
import ProjectPage from "./pages/ProjectPage/ProjectPage"

function App() {
  return (
    <>
      <ScrollToHash />

      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/projects/:slug"
            element={<ProjectPage />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
