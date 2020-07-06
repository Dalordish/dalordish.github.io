// If you don't want to use TypeScript you can delete this file!
import React, {FunctionComponent} from "react"
import { PageProps, Link, graphql } from "gatsby"
//import {} from 'styled-components/cssprop'
import styled from 'styled-components'
import SEO from "./seo"
import ProfileImage from '../../public/icons/icon-144x144.png'
import { createGlobalStyle } from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faRss} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
type DataProps = {
  site: {
    buildTime: string
  }
}


const Layout: FunctionComponent  = (props) => (
    <div>
        <PageContainer>
          {/* desktop side nav bar*/}
          <VerticalNavBar>
            <VerticalNavTopItem>
              <VerticalNavImage src = {ProfileImage}/>
            </VerticalNavTopItem>
            <Link style = {{boxShadow:`none`, textShadow:`none`, color:`${colors.dark}`}} to = "/">
            <VerticalNavItem> 
              Home
            </VerticalNavItem>
            </Link>
            <VerticalNavItem>
              Portfolio
            </VerticalNavItem>
            <VerticalNavItem>
              Blog
            </VerticalNavItem>
            <VerticalNavItem>
              About
            </VerticalNavItem>
              <VerticalNavFooter>
                <IconContainer>
                  <FontAwesomeIcon icon = {faGithub} size = "lg" inverse/>
                </IconContainer>
                <IconContainer>
                  <FontAwesomeIcon icon = {faLinkedin} size = "lg" inverse/>
                </IconContainer>
                <IconContainer>
                  <FontAwesomeIcon icon = {faEnvelope} size = "lg" inverse/>
                </IconContainer>
                 <IconContainer>
                  <FontAwesomeIcon icon = {faRss} size = "lg" inverse/>
                </IconContainer>
                
              </VerticalNavFooter>

          </VerticalNavBar>
          
          {/* mobile header nav bar */}
          <HorizontalNavBar>
            <HorizontalNavBarItem>
              Home
            </HorizontalNavBarItem>

            <HorizontalNavBarItem>
              About
            </HorizontalNavBarItem>

            <HorizontalNavBarItem>
              Blog 
            </HorizontalNavBarItem>

          </HorizontalNavBar>
          <ContentPaneContainer>
            {props.children}
          </ContentPaneContainer>
          
        </PageContainer>
        
    </div>
)


// ------------------ Styling constants -------------//
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptopm1: '1023px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const colors = {
  primary: '#eeeeee',
  secondary: '#979797',
  tertiary: '#666666',
  dark: '#000000',
  emphasis:'#D0088cc' 
}

// ------------------- layout items ------------------//
const PageContainer = styled.div`

@media screen and (max-width: ${size.mobileL} ) {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  flex-direction:column;
}
@media screen and (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
  margin-left:2.5rem;
  margin-right:2.5rem;
  margin-top: 2rem;
  flex-direction:column;
}
@media screen and (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  flex-direction: column;
}
@media screen and (min-width: ${size.laptop}) and (max-width: ${size.laptopL}) {
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 4rem;
  flex-direction:row;
}
@media screen and (min-width:${size.laptopL}) {
 margin-left: 15rem;
 margin-right: 15rem;
 margin-top: 4rem;
 flex-direction: row;
}

margin-top:6rem;
display: flex;
`


const VerticalNavBar = styled.div`
@media screen and (max-width: ${size.laptopm1}) {
  display: none;
}
height: 40rem;
width: 20rem;
margin-right: 3rem;
background-color: ${colors.primary};
`

const VerticalNavTopItem = styled.div`
min-height: 10rem;
justify-content: center;
align-items: center;
display:flex;
padding: 1rem;

`
const VerticalNavImage = styled.img`
border-radius: 50%;
`
const VerticalNavItem = styled.div`
height: 5rem;
margin-top: 0.5rem;
background-color: ${colors.secondary};
opacity:0.9;
justify-content: center;
align-items: center;
display:flex;
&:hover {
  background-color: ${colors.emphasis};
  opacity:1;
}
`
const IconContainer = styled.div`
margin:  10px;
`

const VerticalNavFooter = styled.div`
margin-top: 4.7rem;
height: 2.5rem;
align-self:flex-end;
background-color: ${colors.secondary};
justify-content:center;
display:flex;
align-items:center;
`

export const WhoAmIItem = styled.div `
min-height: 2rem;
margin-bottom:1rem;
`
// horizontal navbar


const HorizontalNavBar = styled.div`
@media screen and (min-width: ${size.laptop}) {
  display:none;
}
background-color: ${colors.primary};
height: 4rem;
margin-bottom: 1rem;
display:flex;
flex-direction:row;
`

const HorizontalNavBarItem = styled.div`
background-color: ${colors.secondary};
opacity:0.9;
justify-content: center;
align-items: center;
display:flex;
flex-basis: 100%;
margin-left: 0.2rem;
margin-right:0.2rem;
&:hover{
  background-color: ${colors.emphasis};
  opacity:1;
}
`

export const RightPanelItem = styled.div`
min-height: 7.5rem;
margin-bottom:1.5rem;
background-color: ${colors.primary};
padding: 1rem;
`

export const RightPanelHeader = styled.h3`
color: black;
margin-top: 0rem;
`

const ContentPaneContainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
`

export default Layout;

// -------------- misc -----------

export const NoTopMarginTitle = styled.h1`
  margin-top:0rem;
`
/*
export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
*/
// 
