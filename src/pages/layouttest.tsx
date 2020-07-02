// If you don't want to use TypeScript you can delete this file!
import React, {FunctionComponent} from "react"
import { PageProps, Link, graphql } from "gatsby"
//import {} from 'styled-components/cssprop'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from '../../public/icons/icon-144x144.png'
import { createGlobalStyle } from 'styled-components'

type DataProps = {
  site: {
    buildTime: string
  }
}


const layoutTest: FunctionComponent  = () => (
    <div>
        <PageContainer>
          <VerticalNavBar>

          <VerticalNavTopItem>
            <VerticalNavImage src = {ProfileImage}/>
          </VerticalNavTopItem>
          <VerticalNavItem> 
            Home
          </VerticalNavItem>
          <VerticalNavItem>
            Portfolio
          </VerticalNavItem>
          <VerticalNavItem>
            Blog
          </VerticalNavItem>

          <VerticalNavItem>
            About
          </VerticalNavItem>
          </VerticalNavBar>
          <ContentPaneContainer>
            <WhoAmIItem>
              <h1> Hi There!</h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


              </WhoAmIItem>
            <RightPanelItem/>
            <RightPanelItem/>
          </ContentPaneContainer>
        </PageContainer>
    </div>
)



export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
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
const PageContainer = styled.div`

@media screen and (max-width: ${size.mobileL} ) {
  margin-left: 0rem;
  margin-right: 0rem;
}

@media screen and (max-width: ${size.tablet}) {
  margin-left:2.5rem;
  margin-right:2.5rem;
}

@media screen and (min-width: ${size.laptop}) {
  margin-left: 3rem;
  margin-right: 3rem;
  
}
@media screen and (min-width: ${size.laptopL}) {
  margin-left: 15rem;
  margin-right: 15rem;
}
margin-top:3rem;
display: flex;

`
const VerticalNavBar = styled.div`
@media screen and (max-width: ${size.laptop}) {
  display: none;
}
height: 36rem;
width: 20rem;
margin-top: 3rem;
margin-left:3rem;
padding-bottom: 3rem;
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
const WhoAmIItem = styled.div `
min-height: 10rem;
margin-left: 3rem;
margin-right:3rem;
margin-bottom:1.5rem;
`
const RightPanelItem = styled.div`
min-height: 10rem;
margin-left: 3rem;
margin-right:3rem;
margin-bottom:1.5rem;
background-color: ${colors.primary};
`

const ContentPaneContainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
margin-top: 3rem;
border-radius: 4px;
`

const GlobalStyle = createGlobalStyle`
  body {
 background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);  
color: blue;
  }`
  
export default layoutTest

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
// 