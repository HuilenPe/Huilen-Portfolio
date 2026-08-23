import { Route, Routes } from "react-router-dom"
import Header from "./components/Layout/Header/header"
import ScrollToHash from "./components/Navigation/ScrollToHash"
import Home from "./pages/Home/Home"
import ProjectPage from "./pages/ProjectPage/ProjectPage"

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/:slug"
          element={<ProjectPage />}
        />
      </Routes>
    </>
  )
}

export default App
