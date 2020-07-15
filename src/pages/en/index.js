import React from "react"
import { Link } from "gatsby"
import ReactRough, { Line, Rectangle } from "react-rough"

import Layout from "../../components/layout"

import "../index.css"

const IndexPage = () => (
  <Layout className="index-page" lang="en">
    <header>
      WebGL experiments almanac
    </header>
    <nav>
      <ul>
        <li><Link to="/en/forest">Procedural forest generation</Link></li>
        <li><Link to="/en/pathfinding">Pathfinding</Link></li>
      </ul>
    </nav>
    <ReactRough renderer="svg" width={310} height={360}>
      <Rectangle x={5} y={5} width={250} height={350} roughness={3} stroke="red" />
    </ReactRough>
    <ReactRough width={300} height={300}>
      <Line y1={295} x1={0} y2={100} x2={0} stroke="red" roughness={5} />
      <Line y1={295} x1={0} y2={295} x2={195} stroke="red" roughness={5} />
    </ReactRough>
  </Layout>
)

export default IndexPage
