// If you don't want to use TypeScript you can delete this file!
import React, {FunctionComponent} from "react"
import { PageProps, Link, graphql } from "gatsby"
//import {} from 'styled-components/cssprop'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}


const layoutTest: FunctionComponent  = () => (
    <div>
        <PageContainer>
          <VerticalNavBar>

          <VerticalNavTopItem/>
          <VerticalNavItem> 
            Go home
          </VerticalNavItem>
          <VerticalNavItem/>
          <VerticalNavItem/>
          <VerticalNavItem/>
          <VerticalNavItem/>
          </VerticalNavBar>
          <ContentPaneContainer>
            <WhoAmIItem>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


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


const PageContainer = styled.div`
@media screen and (min-width: ${size.tablet}) {
  margin-left: 5rem;
  margin-right: 5rem;
}
@media screen and (max-width: ${size.mobileL} ) {
  margin-left: 0rem;
  margin-right: 0rem;
}
margin-top:3rem;
display: flex;
`
const VerticalNavBar = styled.div`
@media screen and (max-width: ${size.mobileL}) {
  display: none;
}
height: 50rem;
width: 30rem;
margin-top: 3rem;
margin-left:3rem;
background-color: gray;
position: sticky;
`

const VerticalNavTopItem = styled.div`
height: 20rem;
`

const VerticalNavItem = styled.div`
height: 5rem;
margin-top: 0.5rem;
background-color: lightgray;
justify-content: center;
align-items: center;
display:flex;
&:hover {
  background-color: white;
  border: 1px lightgray solid;
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
background-color: lightgray;
border: black 1px solid;
border-radius: 4px;
`

const ContentPaneContainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
margin-top: 3rem;
border-radius: 4px;
`


export default layoutTest

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
// 