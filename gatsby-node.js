const path = require(`path`);

// exports.modifyWebpackConfig = ({ config, stage }) => {
//  config.devServer = {
//      hot: false,
//      inline: false,
//  }
//  return config;
// };

//Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
    // console.log(node);
    const { createNodeField } = actions 
    //if no path alias give it alias /node/druapl.id ex: en/node1 node.druaplid=node1
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
    //console.log("SLUG");//1st 38 2nd 10 15
    //console.log(slug);
    createNodeField({///create obj at data query time passed to a pageTemp.
        node,
        name: `slug`,
        value: slug,
    })
}
// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        //const articleTemplate = path.resolve('src/templates/node/article/index.js')
        const articleTemplate = path.resolve('src/pages/article.js')
        const pageTemplate = path.resolve(`src/pages/recipe.js`)

        // page building queries
        // field_ragozin_sheet throws graphql errors
        resolve(
            graphql(//ADD INGREDIENTS (enumerate igred when get to page template)
              `
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
            ).then(result => { 
                //console.log("RESULT");
                //console.log(result);//{data[]{drupal[]{nodeRecipes[],nodeArticles[]}}}
                if (result.errors) {
                    reject(result.errors)
                }
                //console.log("PAGES");
                //console.log(result.data.Drupal.nodeRecipes);//edges array of nodes&objects
                //console.log(result.data.Drupal.nodeArticles);//edges array of nodes&objects
                //console.log(result.data.Drupal.nodeArticles.edges)//list edges
                const pages = result.data.Drupal.nodeRecipes.edges;
                //const pages = result.data.Drupal.nodeArticles.edges;//ARTICLE


                //result.data.allNodeHorse.edges.forEach(({ node }, index) => {
                pages.forEach(({ node }, index) => {
                    ///console.log(node);//All the values for a recipe page
                    //console.log("PATH: ");
                    //console.log(node.path);//url to page /en/recipes/title-title-title
                    //const page_path = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
                    //slug/above page_path is undefined.
                    const page_path = node.path //same as node.path
                    ////console.log(node);//All the values for a recipe page
		                actions.createPage({//
                        path: `${page_path}`,
                        component: pageTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })//createPage
                })//foreach
                //forEach for articleTeplates
                const pages2 = result.data.Drupal.nodeArticles.edges;
                pages2.forEach(({ node }, index) => {
                  const page_path2 = node.path
                  actions.createPage({
                      path: `${page_path2}`,
                      component: articleTemplate,
                      context: {
                          nid: node.id,
                          data: node,
                      },
                  })//createPage articles
              })//foreach articles
            })//then
        )
    });
}