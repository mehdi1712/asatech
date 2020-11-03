import React, { Component } from "react"

const customProjects = [
   {
      title: "Smart Home",
      category: "Lorem ipsum is a placeholder text commonly",
      image: "canadian-wanderlust.jpg",
      url: "http://asa.devv.ir",
   },
   {
      title: "Embedded Development",
      category: "Lorem ipsum is a placeholder text commonly",
      image: "original-thai-food.jpg",
      url: "http://asa.devv.ir",
   },
   {
      title: "Android Development",
      category: "Lorem ipsum is a placeholder text commonly",
      image: "resume-website.jpg",
      url: "http://asa.devv.ir",
   },
   {
      title: "Web Development",
      category: "Lorem ipsum is a placeholder text commonly",
      image: "fury-fighting-gear.jpg",
      url: "http://asa.devv.ir",
   },
   {
      title: "IOS Development",
      category: "Lorem ipsum is a placeholder text commonly",
      image: "smirkspace.jpg",
      url: "http://asa.devv.ir",
   },
]
class Portfolio extends Component {
   render() {
      var projects = customProjects.map(function (projects) {
         var projectImage = "images/portfolio/" + projects.image
         return (
            <div key={projects.title} className="columns portfolio-item">
               <div className="item-wrap">
                  <a href={projects.url} title={projects.title}>
                     <img alt={projects.title} src={projectImage} />
                     <div className="overlay">
                        <div className="portfolio-item-meta">
                           <h5>{projects.title}</h5>
                           <p>{projects.category}</p>
                        </div>
                     </div>
                     <div className="link-icon">
                        <i className="fa fa-link"></i>
                     </div>
                  </a>
               </div>
            </div>
         )
      })

      return (
         <section id="portfolio">
            <div className="row">
               <div className="twelve columns collapsed">
                  <h1>Check Out Some of Our Works.</h1>

                  <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                     {projects}
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

export default Portfolio
