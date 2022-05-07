import * as React from "react"
import { Link } from "gatsby"
//LOGO
import LogoOkappi from "../../../images/logos/logo.png"

//CSS IMPORT
import "../../../styles/layout.scss"

const Header = () => (
  <header className="site-header">
    <div id="header-okappi-wrap" className="w-100 z-index-1"> 
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar bg-default navbar-expand-lg justify-content-start">
              <div className="container-fluid">
                <a className="navbar-brand logo text-primary mb-0 font-w-7 me-4" href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                  <img className="mt-0" src={LogoOkappi} alt="LogoOkappi" width={180} />
                </a>
                <button 
                  className="navbar-toggler collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarOkappi" 
                  aria-controls="navbarOkappi" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarOkappi">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/page-2" className="nav-link">Servicios</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/page-2" className="nav-link">Nosotros</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/page-2" className="nav-link contact">Contáctanos</Link>
                    </li>
                  </ul>
                  {/* <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon className="icon-social" icon={faFacebook} />
                      </a>
                      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon className="icon-social" icon={faTwitter} />
                      </a>
                      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon className="icon-social" icon={faInstagram} />
                      </a>
                      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon className="icon-social" icon={faLinkedin} />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
)


export default Header
