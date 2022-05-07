import React from "react"
import IconSectionDescription from "../../images/media/section/atoms.png"
import IconProyectSoftware from "../../images/media/proyects/icon1.png"
import IconProyectDataBase from "../../images/media/proyects/icon2.png"
import IconProyectAdvisory from "../../images/media/proyects/icon3.png"

//IMPORT CSS
import "../../styles/home.scss"

const SectionDescription = () => {

    const steps = [
        {
            image: IconProyectSoftware,
            title: "Sofware",
            description: "Un marco de interfaz de pila completa que viene con todo lo que necesita de forma inmediata.",
        },
        {
            image: IconProyectDataBase,
            title: "Nube / Cloud",
            description: "Una plataforma en la nube unificada para crear, previsualizar e implementar sus proyectos.",
        },
        {
            image: IconProyectAdvisory,
            title: "Asesoria",
            description: "Nuestros servicios expertos que están diseñados para ayudar a su equipo a aprovechar al máximo.",
        },
    ]

  return (
    <div className="bg-description">
        <section className="pb-0">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                        <img src={IconSectionDescription} alt="Icon-okappi" className="icon-okappi" />
                        <h3 className="subtitle-description">Okappi S.A.S ®</h3>
                        <h2 className="title-description">Un enfoque único</h2>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <p className="mt-4 max-w-3xl space-y-6 text-description ">
                        Llega más lejos, más rápido. Cree su próximo sitio web o aplicación web desde la base. 
                        Agregue fácilmente funciones, como SEO, análisis o búsqueda, instalando un complemento.
                        </p>
                        <a className="link-banner" href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                            <span className="c-button__label">Conoce más +</span>
                        </a>
                    </div>
                    <div className="d-flex flex-row card-content">
                        {steps.map((card, index)=>(
                        <div 
                            key={index}
                            className="p-5">
                            <img className="icon-proyect" src={card.image} alt="icon-proyect" />
                            <h4 className="title-card">{card.title}</h4>
                            <p className="text-card">{card.description}</p>
                            <hr/>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SectionDescription