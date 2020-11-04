import React from "react"
import { useLanguageState, useLanguageAction, useLanguageData } from "../provider/LanguageProvider"
import "./Header.css"

const customSocial = [
   {
      name: "linkedin",
      url: "https://www.linkedin.com/company/asa-technology-group",
      className: "fa fa-linkedin",
   },
   {
      name: "instagram",
      url: "http://instagram.com/asa_tech_group",
      className: "fa fa-instagram",
   },
   {
      name: "github",
      url: "http://asa.devv.ir",
      className: "fa fa-github",
   },
   {
      name: "skype",
      url: "http://asa.devv.ir",
      className: "fa fa-skype",
   },
]
const Header = () => {
   const { Header } = useLanguageData()
   const language = useLanguageState()
   const { toggleLang } = useLanguageAction()

   console.log(Header)
   var networks = customSocial.map(function (network) {
      return (
         <li key={network.name}>
            <a href={network.url}>
               <i className={network.className}></i>
            </a>
         </li>
      )
   })

   return (
      <header id="home">
         <nav id="nav-wrap">
            <div className="toggle-container" onClick={toggleLang}>
               <div className={`dialog-button ${language ? "" : "disabled"}`}>{language ? "Fa" : "En"}</div>
            </div>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
               Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
               Hide navigation
            </a>

            <ul id="nav" className="nav">
               <li className="current">
                  <a className="smoothscroll" href="#home">
                     {Header.Home}
                  </a>
               </li>
               <li>
                  <a className="smoothscroll" href="#about">
                     {Header.About}
                  </a>
               </li>
               {/*<li>*/}
               {/*   <a className="smoothscroll" href="#resume">*/}
               {/*      Resume*/}
               {/*   </a>*/}
               {/*</li>*/}
               <li>
                  <a className="smoothscroll" href="#portfolio">
                     {Header.Works}
                  </a>
               </li>
               <li>
                  <a className="smoothscroll" href="#testimonials">
                     {Header.Testimonials}
                  </a>
               </li>
               <li>
                  <a className="smoothscroll" href="#contact">
                     {Header.Contact}
                  </a>
               </li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Asa Technology Group</h1>
               <h3 style={{ color: "wheat" }}>{Header.Content}</h3>
               <hr />
               <ul className="social">{networks}</ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about">
               <i className="icon-down-circle"></i>
            </a>
         </p>
      </header>
   )
}

export default Header
