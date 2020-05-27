import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pespectilt." lang="en"/>
    <h1 className="headers-content">We are perspectilt.</h1>
    <p>We do many things and are build the site. So you could see many updates. For now we started with a Gatsby template.</p>
    <p>From now on, we will build this site Good and Ready to show up.</p>
    <p> Check out our terminal interface. We would be build next.This is to check some updates.</p>
    <Link to="/terminal/">Go to Terminal</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
