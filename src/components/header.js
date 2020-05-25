import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import 'header.css'

const Header = () => (
  <>
<Navbar className="headers">
  <Navbar.Brand href="#home">
    <img
      alt="Pespectilt Logo"
      src="/logo.svg"
      width="30"
      height="30"
      className="d-inline-block align-top"
    />{' '}
    <Link
          to="/"
        >Perspectilt</Link>
    
  </Navbar.Brand>
</Navbar>
</>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
