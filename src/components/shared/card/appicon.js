import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const AppIcon = ({filename}) => {
    const data = useStaticQuery(graphql`
     query {
        file(relativePath: { eq: "" }) {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
        }
      }`)
    return <Img imgStyle fluid={data.file.childImageSharp.fluid} />
}


export default AppIcon