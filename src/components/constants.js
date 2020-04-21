import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export const SKILLS = [
  { name: "NODE JS", value: 80 },
  { name: "REACT JS", value: 60 },
  { name: "RUBY", value: 50 },
  { name: "SWIFT", value: 60 },
  { name: "GIT", value: 90 },
  { name: "DOCKER", value: 75 },
  { name: "KUBERNTES", value: 30 },
  { name: "HTML/CSS", value: 80 },
  { name: ".NET(C# & VB)", value: 70 }
]



const APPS_ICONS = {
  "MYSAIC": "mysaic.png",
  "TOPS": "tops.png",
  "BPM": "bpm.png",
  "CONTROLBLOOD": "controlblood.png",
  "IMPOMOTOR": "impomotor.png",
  "E-UNIVERSITY": "e-university.png",
  "ADDON": "addon.png",
  "GRAPTEL": "graptel.png"
}

const AppIcon = (app) => {
  return () => <img src={APPS_ICONS[app]} height="100"/>
}

export const PORTAFOLIO = [
  {
    img: AppIcon("MYSAIC"),
    title: "Mysaic",
    content: `Integrated a team of software developers 
  as Tech lead and collaborated in the 
  design and development of a project 
  focused on a social network for a 
  North American client.`,
    tools: ["Ruby", "AWS", "Rails", "MySQL", "Swift", "Kotlin", "Docker", "Linux", "Linode", "Fargate"]
  },
  {
    img: AppIcon("TOPS"),
    title: "Tops",
    content: `Developed and maintained the internal 
      process management system and 
      automation software for an USA 
      transcription company.`,
    tools: ["Nodejs", "AWS", "Reactjs", "Linux", "MySQL", "MongoDB"]
  },
  {
    img: AppIcon("BPM"),
    title: "BPM",
    content: `Developed and maintained a system 
      for automation of business process 
      mainly for official entities.`,
    tools: [".NET", "C#", "VB", "MSSQL", "JQuery", "Window Server", "IIS"]
  },
  {
    img: AppIcon("CONTROLBLOOD"),
    title: "ControlBlood",
    content: ` Develop new features and maintained
      software for public services collection 
      for AAA companies 
     (Aqueduct, Sewer and Toilet).`,
    tools: [".NET", "C#", "VB", "MSSQL", "JQuery", "Window Server", "IIS"]
  },
  {
    img: AppIcon("IMPOMOTOR"),
    title: "Impomotor",
    content: `Develop, implement and give 
      support for tax collection as vehicle 
      and property tax in city 
      halls and departments in Colombia.`,
    tools: [".NET", "C#", "VB", "MSSQL", "JQuery", "Window Server", "IIS"]
  }
]


export const HOBBY_PROJECTS = [
  {
    img: AppIcon("E-UNIVERSITY"),
    title: "E-University",
    content: `Unofficial mobile application
    for my university.`,
  },
  {
    img: AppIcon("ADDON"),
    title: "Easy Translate",
    content: `Add-on to translate from 
    english to spanish for Firefox`,
  },
  {
    img: AppIcon("GRAPTEL"),
    title: "GrapTel",
    content: `Graphics representation 
    of few codification 
    techniques.`,
  }]