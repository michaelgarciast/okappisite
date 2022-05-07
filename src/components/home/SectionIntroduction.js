import React from "react"
import BannerOkappi from "../../images/media/banners/okappisas-banner.png"

import "../../styles/home.scss"


export const SectionIntroduction = () => {
  return (
    <div className="bg-section-introdution">
      <section className="custom-py-1 position-relative hero-shape3 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
              <img className="banner-okappi" src={BannerOkappi} alt="banner-Okappi"  />
            </div>
            <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
              <h1 className="title-banner display-4 mb-3">Tal vez es hora de que su Software tenga una interfaz más rápida</h1>
              <p className="text-banner lead  mb-4">Okappi es el marco rápido y flexible que hace que la creación de sitios web y aplicaciones con cualquier CMS, API o base de datos sea divertida nuevamente.</p>
              <a className="link-banner" href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                <span className="c-button__label">Empezar +</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
