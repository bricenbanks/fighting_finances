import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>The Fighting Finances Blog</h1>
    <h2>Where I show you how I'm fighting my financial past to build a future.</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
