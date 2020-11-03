import React, { Component } from "react"

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
class Header extends Component {
   render() {
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
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                  Show navigation
               </a>
               <a className="mobile-btn" href="#home" title="Hide navigation">
                  Hide navigation
               </a>

               <ul id="nav" className="nav">
                  <li className="current">
                     <a className="smoothscroll" href="#home">
                        Home
                     </a>
                  </li>
                  <li>
                     <a className="smoothscroll" href="#about">
                        About
                     </a>
                  </li>
                  {/*<li>*/}
                  {/*   <a className="smoothscroll" href="#resume">*/}
                  {/*      Resume*/}
                  {/*   </a>*/}
                  {/*</li>*/}
                  <li>
                     <a className="smoothscroll" href="#portfolio">
                        Works
                     </a>
                  </li>
                  <li>
                     <a className="smoothscroll" href="#testimonials">
                        Testimonials
                     </a>
                  </li>
                  <li>
                     <a className="smoothscroll" href="#contact">
                        Contact
                     </a>
                  </li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">Asa Technology Group</h1>
                  <h3 style={{ color: "wheat" }}>
                     We use latest technology to create new products in IOT context. Our team consist of four people, each of whom is excellent in
                     their specialty.
                  </h3>
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
}

export default Header
