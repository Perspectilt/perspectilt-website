import React from "react"
import {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

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
    <Layout>
    <SEO title="Pespectilt." lang="en"/>
    <h1 className="headers-content">We are perspectilt.</h1>
    <p>We do many things and are build the site. So you could see many updates. For now we started with a Gatsby template.</p>
    <p>From now on, we will build this site Good and Ready to show up.</p>
    <p> Check out our terminal interface. We would be build next.This is to check some updates.</p>
    <Link to="/terminal/">Go to Terminal</Link>
    <AlertDismissible />
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    );
}

export default IndexPage
