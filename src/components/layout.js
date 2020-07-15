/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bettertext.css/bettertext.min.css"
import LangSelector from "./lang-selector"

const Layout = ({ children, className, lang, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <main className={className}>
    <LangSelector lang={lang} path={path} />
    {children}
  </main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
