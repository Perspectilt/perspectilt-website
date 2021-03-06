import PropTypes from "prop-types";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import styles from "./header.module.css"

const Header = () => (
  <>
<Navbar className={styles.headersContent}  sticky="top" bg="dark" variant="dark">
  <Navbar.Brand href="\" className={styles.headerBrand}>
    <img
      alt="Pespectilt Logo"
      src="/logo.svg"
      width="40"
      height="40"
      className="d-inline-block align-top"
    />{' '}
    <span className={styles.headerBrand}>Perspectilt</span>
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
