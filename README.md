

<!-- <p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p> -->
<h1 align="center">
  The Funky Fresh Gatsby Recipe Site!
</h1>

This repo contains a website project that hosts pages that include recipes for different dishes along with articles related to cooking and topics around food. This project mainly utilizes JavaScript with the benefits that Gatsby brings to the table along with some HTML and CSS action! No Leonardo DiCaprio here! This Gatsby is a react-based open-source framework that easily allows the construction of static sites using node APIs.

The contents of the recipe pages and articles are stored on a database. To obtain these page's contents, Gatsby connects to Drupal and from there a graphQL query is used to loop over the contents of each page into object nodes. At this point, a template file is utilized to display this queried content for your viewing pleasure. 

<img src="https://raw.githubusercontent.com/MetaJ92/gatsbytest/main/src/images/RecipePageEX.JPG" alt="Example of the Recipe template page in action"/>

<img src="https://raw.githubusercontent.com/MetaJ92/gatsbytest/main/src/images/ArticlePageEX.JPG" alt="Example of the Article template page in action"/>

<img src="https://raw.githubusercontent.com/MetaJ92/gatsbytest/main/src/images/ArticleListEX.JPG" alt="Example of the Article list page in action"/>


## GitHub Actions Steps

1. **Defining A Job**
- A series of actions are defined in this step such as grabbing permission tokens and the Ubuntu container.
2. **Checking Out Code**
- This step ensures no changes are made to the site repo during the process. 
3. **Installs Node.js**
- Installing Node.js with the action setup-node here will allow the use of npm to install dependencies the docker container requires.
4.  **Installs Dependencies**
- The Run command is used to install the needed dependencies.
5. **Installs Gatsby CLI**
- The Dependencies are installed using the clean install command which is needed before the build command can start.
6. **Building Gatsby**
- Once installations are complete, the gastby build command is run to construct the site.
7. **Verify Build**
- This step ensures the Gatsby site's content was correctly generated.
8. **Transferring Files To The SSH Server**
- SFTP is used to ensure a secure transfer of the site to a host using secrets provided in GitHub to connect such as an SSH private key. 
- The private key is transfered to the container by using commands to place the contents of SSH key secret into a key file.
9.  **Upload Using SFTP**
- Once security is in place, the next command dumps the public folder where the Gatsby build was formed onto the hosted web server.
10. **Clean Up**
- Steps are run that clean up the current git configuration that can result in a smoother experience.
11. **Job Done!**
- This step cleans up the final processes of parent processes that have completed, It's complete!!!