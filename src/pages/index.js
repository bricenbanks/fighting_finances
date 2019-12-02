import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Fighting Finances</h1>
    <p>All my life, I have been in a constant battle with my finances. Full disclure: In 2017, I slept in my car while I self-taught myself software development. That was my low point, and I'll never be back there. Now, just over two years later, I'm making over $100,000 as a software engineer, and I'm getting my finances back on track.</p>
    <Link to="/blog/">Go to blog</Link>
  </Layout>
)

export default IndexPage
