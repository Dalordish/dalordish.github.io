import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import {WhoAmIItem, RightPanelItem, NoTopMarginTitle, RightPanelHeader} from "../components/layout"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <WhoAmIItem> <NoTopMarginTitle>Hi! I'm Richard </NoTopMarginTitle> 
      I'm a tech head living in Melbourne. I'd call myself a developer first - mostly with the web, but I also dabble to varying degrees in Cybersecurity, Robotics, and just about anything else that catches my eye. When I'm not trying to do something weird with technology, you can probably find me reading, or playing the occasional indie game.
      </WhoAmIItem>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <RightPanelItem>
            <article key={node.fields.slug}>
              <header>
                <RightPanelHeader>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </RightPanelHeader>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          </RightPanelItem>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
