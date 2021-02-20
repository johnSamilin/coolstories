import React from "react"

import Layout from "../components/layout"

import "./strategy-demo.css"
import "highlight.js/styles/Hybrid.css"

const Page = () => (
  <Layout className="strategy-demo-page" path="strategy-demo">
    <iframe
      className="strategy-demo"
      frameBorder="0"
      width="100%"
      height="100%"
      src="/strategy-demo/index.html"
    />
    <pre class="hints">
      Удерживайте левый shift, чтобы выделить несколько юнитов
    </pre>
  </Layout>
)

export default Page
