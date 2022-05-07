import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import LogoFooterOkappi from "../../../images/logos/logo-okappi.png"

const Footer = () => {
  return (
    <footer className="text-center bg-subfooter">
        <div className="container">
          <div className="align-self-center">
            <img className="logo-okappi" src={LogoFooterOkappi} alt="logoOkappi"  />
              <div className="d-flex flex-nowrap">
                <div className="p-2 flex-fill bd-highlight">
                  <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                  <FontAwesomeIcon className="icon-social-footer" icon={faFacebook} />
                  </a>
                  <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon className="icon-social-footer" icon={faTwitter} />
                  </a>
                  <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon className="icon-social-footer" icon={faInstagram} />
                  </a>
                  <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon className="icon-social-footer" icon={faLinkedin} />
                  </a>
                </div>
              </div>
              <hr/>
              <div className="d-flex justify-content-between">
                <div className="p-2">
                  <span className="okappi-copy">© 2022 Okappi S.A.S | Todos los derechos reservados</span>
                </div>
                <div className="p-2">
                  <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                    <span className="politic-okappi">Políticas de privacidad</span>
                  </a>
                </div>
              </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer