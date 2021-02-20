import React from "react"
import { Link } from "gatsby"
import ReactRough, { Line, Rectangle } from "react-rough"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout className="index-page">
    <SEO lang="ru" title="Что-то про webgl-игры" />
    <header>Альманах WebGL-экспериментов</header>
    <nav>
      <ul>
        <li>
          <Link to="/forest">Процедурная генерация леса</Link>
        </li>
        <li>
          <Link to="/pathfinding">Поиск пути</Link>
        </li>
        <li>
          <Link to="/strategy">Управление толпой</Link>
        </li>
      </ul>
    </nav>
    <ReactRough renderer="svg" width={700} height={700}>
      <Rectangle
        x={5}
        y={5}
        width={250}
        height={350}
        roughness={3}
        stroke="red"
      />
    </ReactRough>
    <ReactRough width={300} height={300}>
      <Line y1={295} x1={0} y2={100} x2={0} stroke="red" roughness={5} />
      <Line y1={295} x1={0} y2={295} x2={195} stroke="red" roughness={5} />
    </ReactRough>
  </Layout>
)

export default IndexPage
