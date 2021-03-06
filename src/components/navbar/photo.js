import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    return <Img  style={{width: "150px", height: "150px"}} fluid={data.file.childImageSharp.fluid} />
}


export default Photo