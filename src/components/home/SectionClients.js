import React from "react"
import idioms from "../../utils/idioms"

const SectionClients = () => {
  return (
    <div className="bg-clients">
      <section className="p-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="d-flex justify-content-center">
              <div className="p-4">
                <h2>Todas las partes más difíciles de construir la <br/> web,<span> ahora son un poco más fáciles.</span></h2>
                <p>Actuación, SEO, Seguridad, Integraciones, Accesibilidad. Lo tenemos cubierto para <br/>usted. <span>Okappi S.A.S</span> hace que las partes más difíciles de crear una experiencia digital<br/> increíble sean simples, dejándote más tiempo para concentrarte en tu negocio.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="list-unstyled d-flex flex-wrap">
              {idioms.map((idiom, index)=>(
              <div key={index} className="list-box">
                <img className="logos-leng" src={idiom.image} alt="icon-idioms" />
              </div>
              ))}
            </div>
          </div>
          <div className="content-ceo">
            <div className="d-flex justify-content-center">
              <p>Necesitábamos que nuestra App fuera increíblemente rápida, escalable, tuviera una seguridad de primer nivel y, 
                lo que es más importante, permitiera a los creadores de contenido que no son desarrolladores experimentar un nuevo mundo. 
                <span> Okappi S.A.S</span> no defraudó: seis meses después de implementar tecnología de primer nivel, 
                hemos aumentado el tráfico de nuestra App en un 97.3%,<br/> ¡y esperamos que ese número siga aumentando!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionClients