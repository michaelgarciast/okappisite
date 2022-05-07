import React from "react"
import ServicesImage from "../../images/media/banners/img-services.png"
//Icon
import IconSectionServices from "../../images/media/section/cloud.png"

const SectionServices = () => {
  return (
    <div className="bg-services">
        <section className="pb-0">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                <img className="okappi-services" src={ServicesImage} alt="Services-img" />
              </div>
              <div className="col-12 col-lg-6 col-xl-5">
                <img className="iconsection3" src={IconSectionServices} alt="Iconsection3" />
                <h5>¿Por qué Okappi? ®</h5>
                <h3>Nosotros</h3>
                <p>Ayudamos a los clientes de todo el panorama tecnológico a mantenerse a 
                  la vanguardia de las macrotendencias en evolución para que puedan hacer crecer su negocio.
                </p>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <span className="list-dot"></span>
                    </div>
                    <p className="text-item mb-0">Tecnologías de rendimiento rápido que voluptua.</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <span className="list-dot"></span>
                    </div>
                    <p className="text-item mb-0">Acceso rápido para compilar con código dinámico & estático.</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <span className="list-dot"></span>
                    </div>
                    <p className="text-item mb-0">Fácil de administrar su acceso a todos los datos para el desarrollo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default SectionServices