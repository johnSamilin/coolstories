import React from "react"
import { Link } from "gatsby"
import ReactRough, { Curve, Line } from "react-rough"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../pathfinding.css"
import { ProfileImgPathfindingJs } from "../../components/profile-img-pathfinding-js"
import { ProfileImgPathfindingJsThreaded } from "../../components/profile-img-pathfinding-threaded"
import { ProfileImgPathfindingGo } from "../../components/profile-img-pathfinding-go"
import { ProfileImgPathfindingAs } from "../../components/profile-img-pathfinding-as"
import { Footer } from "../../components/footer"

const Page = () => (
  <Layout className="pathfinding-page" lang="en" path="pathfinding">
    <SEO title="About path finding" />
    <header className="lead">
      <h1>Pathfinding</h1>
      <summary>This is a story that tells you how you can find your path wiht a number of ways.</summary>
    </header>
    <iframe
      className="pathfinding-demo"
      frameBorder="0"
      src="/pathfinding-demo/index.html"
    />
    <article>
      <p className="letter">
        When I did the <Link to="/forest">scene with forest</Link>, I added character there (btw, I got it <Link to="https://www.mixamo.com/#/">here</Link>), I thought that he cannot just stay on the map, he must know how to move. Not just from point A to point B but with regarding obstacles. Since our beloved character is in forest, he must know how to go around trees. This is complete new exeprience for me, and perhaps game developer guys will find this text amateurish, but it was fun for me to dig into WebAssembly and A* algorithm.
      </p>
      <h2>A*</h2>
      <p>
        If you imagine that The Surface as a grid, then all you're gonna do to <em>find tha way</em> is to search the in graph. One of the most optimal ways to do so is to use 62-years old algorithm. Each grid cell has passabilty factor (the higher it is the harder is the way). Some cells (the ones with trees) are impassable at all. The goal is to find the fastest path. We will use heuristic for that, and it will be indicating how good the decision to choose one or another direction will be.
      </p>
      <p>
        I'm a frontender and it turns out I'm interested in web platform features, so the right start point will be to use javascript implementation. There's a magnificent library <Link to="http://qiao.github.io/PathFinding.js/visual/">PathFinding.js</Link>  which contains a lot of heuristics and implementation variants. For me it looks like Best First Seacrch with Octile heuristic is the most optimal. Additionaly it can reduce the way to several critical points where the turns are. <Link to="https://github.com/johnSamilin/forest/blob/pathfinding/src/utils/pathfinding/js.ts">Link to source code</Link>
      </p>
      <p>
        <strong>Performance profile</strong>
        <ProfileImgPathfindingJs />
      </p>
      <h2>I want more power</h2>
      <p>
        Javascript has one thread and if your map is big enough or tricky enough, the calculations may affect UI responsivness. The browser is busy enough by performing a bunch of rendering work in 16ms and we could possibly help him by using a web worker. Doing so will free the main thread for some more important stuff. <Link to="https://github.com/johnSamilin/forest/blob/pathfinding/src/utils/pathfinding/threaded.ts">Link</Link> on the same code as above but hidden inside web worker (<Link to="https://github.com/johnSamilin/forest/blob/pathfinding/src/utils/pathfinding/pathfinding.worker.ts">Github</Link>).
      </p>
      <p>
        <strong>Performance profile</strong>
        <ProfileImgPathfindingJsThreaded />
      </p>
      <h2>I said more power</h2>
      <p>
        I'm sure that js version uses all the <Link to="https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e">optimization tricks</Link> like hidden classes and inline caching, and by using TypeScript you can be somehow sure that the parameters passed in Pathfinding.js methods always will be the same type (and it won't cause deoptimization). But what's more interesting for me is to move this process to WebAssembly and to enjoy <em>near-native</em> speed.
      </p>
      <p>
        WebAssembly can be compiled from a dozen of languages including C++, Go and Rust. Since I can't use any of those, I chose to find a ready solution and compile it for my needs. Thanks to <Link to="https://www.aaron-powell.com/posts/2019-02-05-golang-wasm-2-writing-go/">Aaron Powell</Link>'s great explanation it took me like a day. The thing is (and it mentioned in the article) that Wasm that is compiled from Go behaves as a program rather than a library, so there's possibility to use state in it and not to initialize grid with obstacles every time you want to use it. Keeping in mind that in this particular WebGL scene wasm module will be invoked on mouse move event, this may save some resources. On the other hand, this could possibly be a problem:
        <ul>
          <li>
            if a module throws an exception, then the thing that won't let Go script end closes itself and thus subsequent calls will be impossible;
          </li>
          <li>
            Go doesn't export any functions, instead it registers them in global scope;
          </li>
          <li>
            it can use global scope to modify DOM, which frightens me a bit.
          </li>
        </ul>
        <Link to="https://github.com/johnSamilin/go-pathfinding">Go</Link>
      </p>
      <p>
        <strong>Performance profile</strong>
        <ProfileImgPathfindingGo />
      </p>
      <h2>More!</h2>
      <p>
        Since I went so far, why not to implement A* myself using AssembyScript? I'm very excited about it's possibilities. AssmeblyScript is more strict TypeScript version with some <Link to="https://www.assemblyscript.org/stdlib/map.html#map">difference in basic types</Link> (ex. Map.keys() returns an array and not an iterator). By the way, it's always possible to convert AssembyScript to regular TypeScript pretty easy. <Link to="https://github.com/johnSamilin/assemblyscript-pathfinding">Result</Link>
      </p>
      <p>
        <strong>Performance profile</strong>
        <ProfileImgPathfindingAs />
      </p>
      <h2>What to do with all this?</h2>
      <p>
        I hoped that a simple migration from browser level to WebAssembly gives me performance boost. But as you may see from performance profiler sceenshots, there's no much difference. Sometimes Wasm works even worse when you move the pointer to fast or move the camera around the scene. FPS may be 1-2. In the end, I'd prefer JS version because it's simpler, more stable and more convenient.
      </p>
      <h3>P.S.</h3>
      <p>
        <br/>
        Yeah, I know that he doesn't go anywhere. But he doesn't hurry :)
      </p>
      <p className="date">
        13 july 2020
      </p>
      <Footer />
    </article>
  </Layout>
)

export default Page
