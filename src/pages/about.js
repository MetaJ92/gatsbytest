import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
var Home = "/"
const About = () => {
  return (
    <Layout pageTitle="About Me">
      <Link to={Home}>Back to Home</Link>
      <p>Hiya! I like ice cream!</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />
//export const Head = () => <title>About Me</title>

export default About