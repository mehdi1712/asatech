import React from "react"
import { useLanguageData } from "../provider/LanguageProvider"

const About = () => {
   const { About } = useLanguageData()
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={"/images/profilepic.jpg"} alt=" Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>{About.Title1}</h2>

               <p>{About.Paragraph1}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>{About.Title2}</h2>
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
