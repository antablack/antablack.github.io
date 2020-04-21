/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Navbar from "../navbar"
import "./index.scss"

const Layout = ({ children, isExpanded }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="body">
      <Navbar />
      <main style={{display: isExpanded ?  "none" : "block"}}>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  isExpanded: false
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = ({ isExpanded }) => {
  return { isExpanded }
}

export default connect(mapStateToProps)(Layout) 
