import { useTranslation } from "react-i18next"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Layout/Header/header"
import ScrollToHash from "./components/Navigation/ScrollToHash"
import Home from "./pages/Home/Home"
import ProjectPage from "./pages/ProjectPage/ProjectPage"
import BackToTop from "./components/UI/BackToTop/BackToTop"

function App() {
  const { t } = useTranslation()
  return (
    <>
      <ScrollToHash />

      <a href="#main-content" className="skip-link">{t("common.skipToContent")}</a>

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

      <BackToTop />
    </>
  )
}

export default App
