import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const Homepage = () => {
  return (
  <Layout pageTitle="Jake's Home Page!!">
    <p>Meowdy!</p>
    <StaticImage
        alt="Lizard"
        //src="C:\Users\Spiri\Desktop\SchoolWork\CSC 496\gatsbytest\src\images\Lizard.JPG"
        //src="https://raw.githubusercontent.com/MetaJ92/gatsbytest/main/src/images/Lizard.JPG"
        src="Lizard.JPG"
      />
  </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />
//export const Head = () => <title>Home Page</title>

export default Homepage;