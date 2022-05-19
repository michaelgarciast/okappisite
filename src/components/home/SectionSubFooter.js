import React from 'react';

import plataformaimg from '../../images/media/option/plataforma.png';

export const SectionSubFooter = () => {
  return (
    <section className="subfooter">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <img className="image-plataforma" src={plataformaimg} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <h3 className="subtitle-okappi-option1">RÁPIDO DE CONSTRUIR</h3>
            <h1 className="title-okappi-option1">
              estaras en las mejores manos
            </h1>
            <p className="text-okappi-option1">
              Llega más lejos, más rápido, con Okappi. Cree su próximo sitio web
              o aplicación web personalizada. Agregue fácilmente funciones, como
              SEO, análisis o búsqueda. brinda todo lo que necesita para crear
              su próximo proyecto web, más rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
