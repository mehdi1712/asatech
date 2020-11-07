import React from "react"
import { useLanguageState, useLanguageAction, useLanguageData } from "../provider/LanguageProvider"
import "./Header.css"
// import { InstagramIcon, LinkedInIcon, GitHubIcon } from "@material-ui/icons"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const Header = () => {
   const { Header } = useLanguageData()
   const language = useLanguageState()
   const { toggleLang } = useLanguageAction()

   var networks = (
      <ul>
         <li key="linkedin">
            <a href="https://www.linkedin.com/company/asa-technology-groupedin">
               <InstagramIcon style={{ fontSize: 40 }} />
            </a>
         </li>
         <li key="linkedin">
            <a href="https://www.linkedin.com/company/asa-technology-groupedin">
               <LinkedInIcon style={{ fontSize: 40 }} />
            </a>
         </li>
         <li key="linkedin">
            <a href="https://www.linkedin.com/company/asa-technology-groupedin">
               <GitHubIcon style={{ fontSize: 40 }} />
            </a>
         </li>
      </ul>
   )

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
