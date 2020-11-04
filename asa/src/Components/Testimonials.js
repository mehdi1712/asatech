import React from "react"
import { useLanguageData } from "../provider/LanguageProvider"
const Testimonials = () => {
   const { Testimonials } = useLanguageData()
   // if(this.props.data){
   //   var testimonials = this.props.data.testimonials.map(function(testimonials){
   //     return (
   //             <p>we use latest technology to create new products in iot context. our team consist of four people, each of whom is excellent in their specialty.</p>
   //         )
   // <li key={testimonials.user}>
   //   <blockquote>
   //      <p>we use latest technology to create new products in iot context. our team consist of four people, each of whom is excellent in their specialty.</p>
   //      {/*<cite>{testimonials.user}</cite>*/}
   //   </blockquote>
   // </li>
   //   })
   // }

   return (
      <section id="testimonials">
         <div className="text-container">
            <div className="row">
               {/*<div className="two columns header-col">*/}
               {/*   <h1><span>Client Testimonials</span></h1>*/}
               {/*</div>*/}

               <div className="ten columns flex-container">
                  {/*<ul className="slides">*/}
                  {/*{testimonials}*/}
                  {/*</ul>*/}
                  <p style={{ color: "white" }}>
                     {Testimonials.Paragraph1}
                     <br />
                     <br />
                     {Testimonials.Paragraph2}
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonials
