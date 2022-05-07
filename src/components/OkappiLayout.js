import * as React from "react"

import PropTypes from "prop-types"
import Header from "./layouts/header/Header"
import Footer from "./layouts/footer/Footer"

const OkappiLayout = ({ children }) => {
  return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

OkappiLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default OkappiLayout
