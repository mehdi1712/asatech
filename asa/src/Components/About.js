import React from "react"
import { useLanguageData, useLanguageState } from "../provider/LanguageProvider"
import "./About.css"

const About = () => {
   const { About } = useLanguageData()
   const lang = useLanguageState()

   return (
      <section id="about">
         <div className={lang ? "row fa1" : "row eng1"}>
            <div className="three columns">
               <img className="profile-pic" src={"/images/profilepic.jpg"} alt=" Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>{About.Title1}</h2>

               <p>{About.Paragraph1}</p>
               <div className={lang ? "row fa" : "row eng"}>
                  <div className="columns contact-details">
                     <h2 style={{ inlineSize: "max-content" }}>{About.Title2}</h2>
                     <p className="address">
                        {/*<span>{name}</span>*/}
                        {/*<br />*/}
                        <span>Iran - Semnan Province - Semnan</span>
                        <br />
                        <span>02333335544</span>
                        <br />
                        <span>asa.technology.group@gmail.com</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
