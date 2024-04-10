import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const ArticlePage = ({ data }) => {
    return (
      <Layout pageTitle="Articles">
        {
        data.Drupal.nodeArticles.edges.map((node) => (
          <article key={node.node?.id}>
            <h2>
              <Link to={`${node.node?.path}`}>
                <h1>{node.node?.title}</h1>
              </Link>
            </h2>
            <img src={node.node?.mediaImage?.mediaImage?.url} alt="Food" width="300px" height="200px"></img>
          </article>
        ))
      }
      </Layout>
    );
  };

  export const query = graphql`
  query MyQuery {
  Drupal {
    nodeRecipes(first: 10) {
      edges {
        node {
          changed
          id
          cookingTime
          created
          path
          status
          title
          preparationTime
          numberOfServings
          difficulty
          summary {
            value
          }
          mediaImage {
            mediaImage {
              height
              width
              url
              styles {
                height
                style
                url
                width
              }
            }
          }
          ingredients
          recipeInstruction {
            value
            processed
            format
          }
        }
      }
    }
    nodeArticles(first: 10) {
      edges {
        node {
          changed
          id
          path
          title
          mediaImage {
            mediaImage {
              url
            }
          }
          author {
            displayName
            id
            created
          }
          body {
            value
          }
        }
      }
    }
  }
}
`

  export const Head = () => <Seo title="Articles" />
  
  export default ArticlePage