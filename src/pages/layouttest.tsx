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
          <VerticalNavItem/>
          <VerticalNavItem/>
          </VerticalNavBar>
          <ContentPaneContainer>
            <RightPanelItem/>
            <RightPanelItem/>
            <RightPanelItem/>
            <RightPanelItem/>
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
  margin-left: 2rem;
  margin-right: 2rem;
}
@media screen and (max-width: ${size.mobileL} ) {
  margin-left: 0rem;
  margin-right: 0rem;
}
margin-top:3rem;
display: flex;
border: black 1px solid;
border-radius: 4px;
`
const VerticalNavBar = styled.div`
@media screen and (max-width: ${size.mobileL}) {
  display: none;
}
height: 50rem;
width: 30rem;
margin: 3rem;
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
`

const RightPanelItem = styled.div`
height: 10rem;
margin-left: 3rem;
margin-right:3rem;
margin-top:1.5rem;
background-color: lightgray;
border: black 1px solid;
border-radius: 4px;
`

const ContentPaneContainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
margin: 3rem;
background-color: gray;
border: black 1px solid;
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
