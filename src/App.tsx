import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
