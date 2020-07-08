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

const BlogIndex = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="My projects" />
      <CardContainer>
        <Card>

        </Card>
        <Card/>
        <Card/>
        <Card/>
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
export default BlogIndex
