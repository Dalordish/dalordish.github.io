import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {faEnvelope, faRss} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {colors, IconContainer} from './layout'



const Card = ({title, body, githubUrl = '', liveSiteUrl='' , image = ''}) => {

    return(
    <CardOuter>
        <CardImage>
            {image ? <Image style = {{width: "13rem", height: "10rem"}} fixed = {image.fixed}/> : '' }
            {/*<ResizedImg src = {image}/>*/}
        </CardImage>
        <CardBody>
            <h3>{title}</h3>
            <span>
                {body}
            </span>
        </CardBody>
        <CardFooter>
            {liveSiteUrl ? 
            <CardFooterDivider>
              <a href = {liveSiteUrl}> View live site </a>
            </CardFooterDivider>
            : ''
             }
             {githubUrl ? 
            <div>
                <a href = {githubUrl}>
                    Source <IconContainer><FontAwesomeIcon icon = {faGithub} /> </IconContainer>
                </a>
            </div>
            : ''
              }
        </CardFooter>

    </CardOuter>

    )
}
export default Card;


const CardOuter =  styled.div`
height:27rem;
width: 13rem;
background-color: ${colors.primary};
display:flex;
flex-direction: column;
margin-right: 0.5rem;
margin-bottom: 2rem;
`

const CardBody = styled.div`
padding:1rem;
height: 15rem;
`
const CardImage = styled.div`
height:10rem;
width: 100%; 
background-color: lightgray;
`
const ResizedImg = styled.img`
    width: 100%:
    height:100%;
    object-fit: contain;
`
const CardFooter = styled.div`
border-top: 1px solid black;
height: 2rem;
justify-content:center;
display:flex;
align-items:center;
background-color: lightgray;
`

const CardFooterDivider = styled.div`
margin-right: 0.8rem;
padding-right: 0.8rem;
`