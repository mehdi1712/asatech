import React from "react"
import { useLanguageData } from "../provider/LanguageProvider"

const Contact = () => {
   const { Contact } = useLanguageData()
   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1>
                  <span></span>
               </h1>
            </div>

            <div className="ten columns">
               <p className="lead">{Contact.Title}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">
                           {Contact.Name} <span className="required">*</span>
                        </label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">
                           {Contact.Email} <span className="required">*</span>
                        </label>
                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                     </div>

                     <div>
                        <label htmlFor="contactSubject"> {Contact.Subject}</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">
                           {Contact.Message} <span className="required">*</span>
                        </label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     </div>

                     <div>
                        <button className="submit">{Contact.Submit}</button>
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning"> Error boy</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!
                  <br />
               </div>
            </div>

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>{Contact.Title2}</h4>
                  <p className="address">
                     "Asa Group"
                     <br />
                     Iran , Semnan , Science and Technology Park
                     <br />
                     <span>{Contact.Phone} : 023332232</span>
                  </p>
               </div>
            </aside>
         </div>
      </section>
   )
}

export default Contact
