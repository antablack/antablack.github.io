import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Title1, Title2, Subtitle1 } from "../components/shared/titles"
import Divider from "../components/shared/divider"
import Content from "../components/shared/content"
import Skill from "../components/skill"
import Image from "../components/image"
import SEO from "../components/seo"
import PortafolioGrid from "../components/portafoliogrid"
import Card from "../components/shared/card"

const SKILLS = [
  { name: "NODE JS", value: 80 },
  { name: "REACT JS", value: 60 },
  { name: ".NET(C# & VB)", value: 70 },
  { name: "RUBY", value: 50 },
  { name: "SWIFT", value: 60 },
  { name: "ANGULAR 2+", value: 40 },
  { name: "HTML/CSS", value: 80 },
]


const PORTAFOLIO = [
  {
    img: "",
    title: "Mysaic",
    content: `Integrated a team of software developers 
as Tech lead and collaborated in the 
design and development of a project 
focused on a social network for a 
North American client.`,
    tools: ["Ruby", "AWS", "Rails", "MySQL", "Swift", "Kotlin", "Docker", "Linux", "Linode", "Fargate"]
  },
  {
    img: "",
    title: "Tops",
    content: `Developed and maintained the internal 
    process management system and 
    automation software for an USA 
    transcription company.`,
    tools: ["Ruby", "AWS", "Rails", "MySQL", "Swift", "Kotlin", "Docker", "Linux", "Linode", "Fargate"]
  }
]



const IndexPage = () => (
  <Layout>
    <div class="title">

      <Title1>
        Hi, I'm Juan
      </Title1>
      <Subtitle1>Developer and Tech Lover</Subtitle1>
    </div>

    <Divider />

    <article>
      <Subtitle1>ABOUT ME 🙎🏻‍♂️</Subtitle1>
      <Content>
        My full name is Juan Carlos Sanchez. I started developing software for more than 4 years, since I was small I was always enormously attracted to technology and to know how it worked, and even though I did they have an early access to a lot of technology (due to the region where I lived) I remember that my mother used to scold me because I broke my toys out of curiosity to know how they worked 😁.
      </Content>
      <Content>
        I currently live in Barranquilla - Colombia I work in a small SaaS company where I work as a software developer, I also love to participate in meetup as Barraquilla JS and I am also a mentor in Pioneras Dev Barranquilla.
      </Content>
    </article>
    <Divider />
    <article>
      <Subtitle1>ABOUT ME 🙎🏻‍♂️</Subtitle1>
      <Skill skills={SKILLS} />
      <Content>
        MSSQL | MongoDB | PostgreSQL | MySQL | VueJS | Firebase
      </Content>
    </article>
    <Divider />
    <Subtitle1>PORTAFOLIO 💼</Subtitle1>

    <PortafolioGrid>
      {PORTAFOLIO.map(item => (<Card {...item} />))}
    </PortafolioGrid>

    <Divider />
    <Subtitle1>HOBBY PROJECTS 🎮</Subtitle1>

  </Layout>
)

export default IndexPage
