import React from "react"
import { Link, graphql } from "gatsby"

import styled from 'styled-components'
import Bio from "../components/bio"
import Layout from "../components/layout"
import {size} from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import {WhoAmIItem, RightPanelItem, NoTopMarginTitle, RightPanelHeader} from "../components/layout"
import Card from "../components/projectcard"
//TODO This page should be refactored to
// a - use graphql queries
// b - use Gatsby-Image for progressive loading

import RCJAImage from '../../content/assets/projects/rcjarego.png'
import PopTrackerImage from '../../content/assets/projects/poptracker.png'
import SoccerImage from '../../content/assets/projects/soccerscorer.png'
import WeatherImage from '../../content/assets/projects/weatherapp.png'


const BlogIndex = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="My projects" />
      <CardContainer>

        <Card
            title = "RCJA National Event Manager"
            body = "The Event Management system for the Robocup Junior Australia National body. Volunteer project done pro-bono." 
            githubUrl = "https://github.com/MelbourneHighSchoolRobotics/RCJA_Registration_System"
            liveSiteUrl = "https://enter.robocupjunior.org.au/"
            image = {data.regoImage.childImageSharp}
        />

        <Card 
        title = "Slack-Compile"
        body = "A lightweight webserver built with flask, beautiful soup and urllib to scrape,compile and run snippets of code on slack using hackerrank's public api."
        githubUrl = "https://github.com/Dalordish/slack-compile"/>

        <Card
        title = "This site!"
        body = "The site you're looking at right now was an attempt to ditch css frameworks, do my own UI/UX design with Figma, and use Gatsby/React/Typescript to modernise my site."
        githubUrl = "https://github.com/Dalordish/dalordish.github.io/"
        liveSiteUrl = "https://dalordish.github.io/"
        image = {data.blogImage.childImageSharp}
        />

        <Card
         title = "ClubManager"
         body = "A complex attendance, inventory, management and allocation system for the High School Robotics club I mentor at."
         />
        <Card
        title= "Simple Weather App"
        body = "A simple, minimalist webapp built with JQuery and bootstrap using geoip and weather apis."
        githubUrl = "https://github.com/Dalordish/Simple-Weather-App"
        liveSiteUrl = "https://dalordish.github.io/Simple-Weather-App/"
        image = {data.weatherImage.childImageSharp}
        />
        <Card
        title = "Roboscore"
        body = 'A Game scoring system for the high school robotics competition "Robocup Junior". Built using pure javascript and material design lite by google.'
        githubUrl = "https://github.com/Dalordish/roboscore"
        liveSiteUrl = "https://dalordish.github.io/roboscore/"
        image = {data.soccerImage.childImageSharp}
        />
        <Card
        title = "PSArchives Population Tracker"
        body = "A population tracker for the popular massively multiplayer online FPS Planetside 2. "
        image = {data.popImage.childImageSharp }
        />
    </CardContainer>
    </Layout>
  )
}

const CardContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
@media screen and (max-width: ${size.laptop}) {
    justify-content: center;
}

`



export const query = graphql`

query {
      popImage: file(absolutePath: { regex: "/poptracker.png/" }) {
        childImageSharp {
          fixed(width: 1300, height: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      regoImage: file(absolutePath: { regex: "/rcjarego.png/" }) {
        childImageSharp {
          fixed(width: 1300, height: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      soccerImage: file(absolutePath: { regex: "/soccerscorer.png/" }) {
        childImageSharp {
          fixed(width: 1300, height: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      weatherImage: file(absolutePath: { regex: "/weatherapp.png/" }) {
        childImageSharp {
          fixed(width: 1300, height: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      blogImage: file(absolutePath: { regex: "/blogphoto.png/" }) {
        childImageSharp {
          fixed(width: 1300, height: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      } 
    }
`

export default BlogIndex
