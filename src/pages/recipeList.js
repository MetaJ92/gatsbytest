import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const RecipePage = ({ data }) => {
    return (
      <Layout pageTitle="Recipes">
        {
        data.Drupal.nodeRecipes.edges.map((node) => (
          <article key={node.node?.id}>
            <h2>
              <Link to={`${node.node?.path}`}>
                <h1>{node.node?.title}</h1>
              </Link>
            </h2>
            <p>Difficulty: {node.node?.difficulty}</p>
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
                nodeRecipes(first: 100) {
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
                                styles{
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
                            }
                        }
                    }
                }
            }
    }
`
  
  export const Head = () => <Seo title="Recipes" />
  
  export default RecipePage