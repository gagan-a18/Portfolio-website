import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
