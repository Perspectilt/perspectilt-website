/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <div className="application">
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
    <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=jwEXOW40pg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=jwEXOW40pg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=jwEXOW40pg" />
        <link rel="manifest" href="/site.webmanifest?v=jwEXOW40pg" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=jwEXOW40pg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=jwEXOW40pg" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css" />
        <script type="application/ld+json">
        {String(`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://perspectilt.js.org/",
          "logo": "https://perspectilt.js.org/logo.png",
          "name": "Perspectilt",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "perspectilt@syrusdark.website",
            "contactType": "Important"
          }
        }`
      )
    }
        </script>
    </Helmet>
</div>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
