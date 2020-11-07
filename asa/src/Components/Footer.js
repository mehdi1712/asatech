import React, { Component } from "react"

import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

class Footer extends Component {
   render() {
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
