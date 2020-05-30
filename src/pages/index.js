import React from "react"
import {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
//import Header from "../components/header"
//import Container from "react-bootstrap/Container"
import "../styles/main.css"

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Alert on site Data</Alert.Heading>
        <p>
          This site is currently in <i>development</i>. So , wait and see some great <b>Magic</b>.
          Presented by <a href="\">Pespectilt</a>.
          Wait and Watch.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

function IndexPage() {
  return (
    <div>
      <SEO title="Pespectilt." lang="en"/>
      <header id="header">
				<div class="logo"><a href="/">data <span>OVERFLOW</span></a></div>
				<a href="#menu"><span>Menu</span></a>
			</header>
      <section id="banner" className="bg-img" data-bg="data.jpg">
				<div class="inner">
					<header>
						<h1>Perspectilt</h1>
            <i class="fab fa-500px"></i>
            <AlertDismissible />
					</header>
				</div>
				<a href="#one" className="more"><i class="fas fa-chevron-down"></i>Learn More</a>
			</section>
    </div>
    );
}

export default IndexPage
