import React from "react"
import { Link } from "gatsby"
import ReactRough, { Path } from "react-rough"
import { RoughNotation } from 'react-rough-notation'
import Highlight from 'react-highlight'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Footer } from "../../components/footer"

import "../strategy.css"
import "highlight.js/styles/Hybrid.css"

const Page = () => (
  <Layout lang="en" className="strategy-page" path="strategy">
    <SEO title="About crowd management" />
    <header className="lead">
      <h1>Crowd management</h1>
      to be translated
    </header>
    <div class="gif-wrapper">
      <img loading="lazy" src="/images/separate-walk.gif" alt="Передвижение по отдельности" />
      <img loading="lazy" src="/images/group-walk.gif" alt="Передвижение группой" />
      <img loading="lazy" src="/images/bracket.gif" alt="Выделение группы" />
    </div>
  </Layout>
)

export default Page
