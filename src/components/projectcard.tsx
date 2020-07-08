import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {faEnvelope, faRss} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {colors, IconContainer} from './layout'
import ProfileImage from '../../public/icons/icon-144x144.png'

const Card = () => {

    return(
    <CardOuter>
        {/*<Image src = {ProfileImage}/>*/}
        <CardImage/>
        <CardBody>
            <h3> Lorem Ipsum</h3>
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

            </span>
        </CardBody>
        <CardFooter>
            <CardFooterDivider>
              <a href = "#"> View live site </a>
            </CardFooterDivider>
            <div>
                <a href = "#">
                    Source <IconContainer><FontAwesomeIcon icon = {faGithub} /> </IconContainer>
                </a>
            </div>
        </CardFooter>

    </CardOuter>

    )
}
export default Card;


const CardOuter =  styled.div`
height:25rem;
min-width: 9rem;
max-width: 13rem;
background-color: ${colors.primary};
display:flex;
flex-direction: column;
margin-right: 0.5rem;
margin-bottom: 2rem;
`

const CardBody = styled.div`
padding:1rem;
`
const CardImage = styled.div`
height:10rem;
width: 100%; 
background-color: lightgray;
`
const CardFooter = styled.div`
border-top: 1px solid black;
height: 4rem;
justify-content:center;
display:flex;
align-items:center;
background-color: lightgray;
flex: 1;
`

const CardFooterDivider = styled.div`
margin-right: 0.8rem;
padding-right: 0.8rem;
`