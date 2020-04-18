import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Photo = () => {
    const data = useStaticQuery(graphql`
     query {
        file(relativePath: { eq: "circle-profile-picture.png" }) {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
        }
      }`)
    return <Img imgStyle fluid={data.file.childImageSharp.fluid} />
}


export default Photo