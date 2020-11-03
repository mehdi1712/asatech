import React, { Component } from "react"

class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={"/images/profilepic.jpg"} alt=" Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Us</h2>

                  <p>
                     we use latest technology to create new products in iot context. our team consist of four people, each of whom is excellent in
                     their specialty.
                  </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
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
}

export default About
