import React from "react"
import ReactGA from "react-ga"
import "./App.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import About from "./Components/About"
// import Resume from "./Components/Resume"
import Contact from "./Components/Contact"
import Testimonials from "./Components/Testimonials"
import Portfolio from "./Components/Portfolio"
import LanguageProvider from "./provider/LanguageProvider"

class App extends React.Component {
   render() {
      ReactGA.initialize("UA-110570651-1")
      ReactGA.pageview(window.location.pathname)

      return (
         <LanguageProvider>
            <div className="App">
               <Header />
               <About />
               <Portfolio />
               <Testimonials />
               <Contact />
               <Footer />
            </div>
         </LanguageProvider>
      )
   }
}

export default App
