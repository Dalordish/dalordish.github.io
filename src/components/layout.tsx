// If you don't want to use TypeScript you can delete this file!
import React, {FunctionComponent} from "react"
import { PageProps, Link, graphql , useStaticQuery} from "gatsby"
//import {} from 'styled-components/cssprop'
import styled from 'styled-components'
import SEO from "./seo"
import ProfileImage from '../../content/assets/profile-pic.jpg'
import { createGlobalStyle } from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faRss} from '@fortawesome/free-solid-svg-icons'
//todo refactor this to use gatsby-image
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
  type DataProps = {
    site: {
      buildTime: string
    }
  }


  const Layout: FunctionComponent  = (props) => {
    const data = useStaticQuery(graphql`
      query SocialQuery {
        site {
          siteMetadata {
            social {
              twitter
              linkedin
              github
              email
            }
          }
        }
      }
    `)
    console.log(data);
    return(
      <div>
          <PageContainer>
            {/* desktop side nav bar*/}
            <VerticalNavBar>
              <VerticalNavTopItem>
                <VerticalNavImage src = {ProfileImage}/>
            </VerticalNavTopItem>
            <VerticalNavItem to = "/"> 
              Home
            </VerticalNavItem>
            <VerticalNavItem to = "#">
             Projects 
            </VerticalNavItem>
            {/*
            <VerticalNavItem>
              Blog
            </VerticalNavItem>
            */} 
            <VerticalNavItem to = "/about-this-site">
              About
            </VerticalNavItem>
              <VerticalNavFooter>
                <IconContainer>
                  <a href = {`https://github.com/${data.site.siteMetadata.social.github}`}>
                    <FontAwesomeIcon icon = {faGithub} size = "lg" inverse/>
                  </a>
                </IconContainer>
                <IconContainer>
                  <a href = {`https://linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}>
                    <FontAwesomeIcon icon = {faLinkedin} size = "lg" inverse/>
                  </a>
                </IconContainer>
                {/*
                <IconContainer>
                  <a href = "ma">
                    <FontAwesomeIcon icon = {faEnvelope} size = "lg" inverse/>
                  </a>
                </IconContainer>
                */}
                 <IconContainer>
                    <Link to="/rss.xml">
                      <FontAwesomeIcon icon = {faRss} size = "lg" inverse/>
                    </Link>
                </IconContainer>
                
              </VerticalNavFooter>

          </VerticalNavBar>
          
          {/* mobile header nav bar */}
          <HorizontalNavBar>
            <HorizontalNavBarItem to = "/">
              Home
            </HorizontalNavBarItem>
            <HorizontalNavBarItem to = "/about-this-site">
              About
            </HorizontalNavBarItem>
            <HorizontalNavBarItem to = "#">
              Projects 
            </HorizontalNavBarItem>
          </HorizontalNavBar>
          <ContentPaneContainer>
            {props.children}
          </ContentPaneContainer>
          
        </PageContainer>
        
    </div>
  )}


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
justify-content: center;
align-items: center;
display:flex;
padding-top: 1rem;

`
const VerticalNavImage = styled.img`
border-radius: 50%;
height: 10rem;
`
const VerticalNavItem = styled(Link)`
height: 5rem;
margin-top: 0.5rem;
text-decoration: none;
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
export const IconContainer = styled.span`
margin:  10px;
`

const VerticalNavFooter = styled.div`
margin-top: 8.7rem;
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

const HorizontalNavBarItem = styled(Link)`
background-color: ${colors.secondary};
opacity:0.9;
text-decoration: none;
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
