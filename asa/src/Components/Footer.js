import React, { Component } from "react"

const customSocial = [
   {
      name: "linkedin",
      url: "https://www.linkedin.com/company/asa-technology-group",
      className: "fa fa-linkedin",
   },
   {
      name: "instagram",
      url: "http://instagram.com/tbaker_x",
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
class Footer extends Component {
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
         <footer>
            <div className="row">
               <div className="twelve columns">
                  <ul className="social-links">{networks}</ul>

                  <ul className="copyright">
                     <li>&copy; Copyright 2020 Asa technology</li>
                  </ul>
               </div>
               <div id="go-top">
                  <a className="smoothscroll" title="Back to Top" href="#home">
                     <i className="icon-up-open"></i>
                  </a>
               </div>
            </div>
         </footer>
      )
   }
}

export default Footer
