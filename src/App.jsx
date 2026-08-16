import Header from "@/components/Layout/Header/header.jsx"
import Hero from "@/sections/Hero/Hero.jsx"
import Projects from "@/sections/Projects/Projects.jsx"
import ProjectDetails from "./sections/ProjectDetails/ProjectDetails.jsx"
import About from "./sections/About/About.jsx"
import Skills from "./sections/Skills/Skills.jsx"
import Contact from "./sections/Contact/Contact.jsx"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <ProjectDetails />
      <About /> 
      <Skills />
      <Contact />
    </>
  )
}

export default App