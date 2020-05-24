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
        <script type="application/ld+json">
        %7B
%20%20%20%20%20%20%20%20%20%20%20%20%22%40context%22%3A%20%22https%3A%2F%2Fschema.org%22%2C
%20%20%20%20%20%20%20%20%20%20%20%20%22%40type%22%3A%20%22Organization%22%2C
%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fperspectilt.js.org%2F%22%2C
%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Perspectilt%22%2C
%20%20%20%20%20%20%20%20%20%20%20%20%22contactPoint%22%3A%20%7B
%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%40type%22%3A%20%22ContactPoint%22%2C
%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22email%22%3A%20%22perspectilt%40syrusdark.website%22%2C
%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22contactType%22%3A%20%22Random%22
%20%20%20%20%20%20%20%20%20%20%20%20%7D
%20%20%20%20%20%20%20%20%20%20%7D
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
