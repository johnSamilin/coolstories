;(this.webpackJsonpforest = this.webpackJsonpforest || []).push([
  [0],
  {
    119: function (e, t, n) {
      e.exports = function () {
        return new Worker(n.p + "adad9c7d41097794a22d.worker.js")
      }
    },
    131: function (e, t, n) {
      e.exports = n(252)
    },
    135: function (e, t, n) {},
    162: function (e, t) {
      function n(e) {
        var t = new Error("Cannot find module '" + e + "'")
        throw ((t.code = "MODULE_NOT_FOUND"), t)
      }
      ;(n.keys = function () {
        return []
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 162)
    },
    166: function (e, t) {},
    168: function (e, t) {},
    200: function (e, t) {},
    201: function (e, t) {},
    246: function (e, t, n) {},
    252: function (e, t, n) {
      "use strict"
      n.r(t)
      var a,
        r,
        i = n(1),
        s = n.n(i),
        o = n(42),
        c = n.n(o),
        u = (n(135), n(12)),
        h = n.n(u),
        l = n(17),
        f = n(8),
        d = n(26),
        p = n(13),
        m = n(0),
        g = n(44),
        v = n(6),
        b = n(129),
        y = n(11),
        w = n(3),
        O = n(2),
        j = function e(t, n) {
          Object(O.a)(this, e),
            (this.x = void 0),
            (this.y = void 0),
            (this.age = void 0),
            (this.x = t),
            (this.y = n),
            (this.age = 1)
        },
        E = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 100,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 100,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 10
            Object(O.a)(this, e),
              (this.initialTrees = void 0),
              (this.seedRadius = 5),
              (this.seedDecay = 0.3),
              (this.seedStrength = 0.1),
              (this.desiredCoverage = 0.2),
              (this.seed = 7),
              (this.width = void 0),
              (this.height = void 0),
              (this.forest = void 0),
              (this.trees = []),
              (this.seeds = new Map()),
              (this.height = t),
              (this.width = n),
              (this.initialTrees = a),
              (this.forest = Array(n).fill(1)),
              (this.forest = this.forest.map(function (e) {
                return Array(t).fill(1)
              }))
            for (var r = 0; r < this.initialTrees; r++)
              for (;;) {
                var i = Math.ceil(Math.random() * this.width),
                  s = Math.ceil(Math.random() * this.height)
                if (1 === this.forest[i][s]) {
                  ;(this.forest[i][s] = 2), this.addTree(i, s)
                  break
                }
              }
          }
          return (
            Object(w.a)(e, [
              {
                key: "generate",
                value: function () {
                  for (var e = this.getCoverage(); e < this.desiredCoverage; )
                    this.step(), (e = this.getCoverage())
                  return this.removeSeeds(), this.trees
                },
              },
              {
                key: "removeSeeds",
                value: function () {
                  var e,
                    t = Object(y.a)(this.seeds.entries())
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n = Object(f.a)(e.value, 1)[0]
                          .split(",")
                          .map(function (e) {
                            return parseInt(e)
                          }),
                        a = Object(f.a)(n, 2),
                        r = a[0],
                        i = a[1]
                      this.forest[r][i] = 1
                    }
                  } catch (s) {
                    t.e(s)
                  } finally {
                    t.f()
                  }
                },
              },
              {
                key: "getCoverage",
                value: function () {
                  var e = this.width * this.height
                  return this.trees.length / e
                },
              },
              {
                key: "addTree",
                value: function (e, t) {
                  this.trees.push(new j(e, t)), (this.forest[e][t] = 2)
                },
              },
              {
                key: "step",
                value: function () {
                  var e,
                    t = new Map(),
                    n = Object(y.a)(this.seeds.entries())
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var a = Object(f.a)(e.value, 2),
                        r = a[0],
                        i = a[1]
                      t.set(r, i - this.seedDecay * i)
                    }
                  } catch (w) {
                    n.e(w)
                  } finally {
                    n.f()
                  }
                  this.seeds = t
                  var s,
                    o = Object(y.a)(this.seeds.entries())
                  try {
                    for (o.s(); !(s = o.n()).done; ) {
                      var c = Object(f.a)(s.value, 2),
                        u = c[0],
                        h = c[1]
                      if (Math.random() < h) {
                        var l = u.split(",").map(function (e) {
                            return parseInt(e)
                          }),
                          d = Object(f.a)(l, 2),
                          p = d[0],
                          m = d[1]
                        this.addTree(p, m)
                      }
                    }
                  } catch (w) {
                    o.e(w)
                  } finally {
                    o.f()
                  }
                  for (var g in ((this.trees = this.trees.map(function (e) {
                    return e.age++, e
                  })),
                  this.trees)) {
                    var v = this.trees[g],
                      b = v.x + "," + v.y
                    this.seeds.has(b) && this.seeds.delete(b)
                  }
                  this.seedTrees()
                },
              },
              {
                key: "seedTrees",
                value: function () {
                  for (var e in this.trees)
                    for (
                      var t = this.trees[e],
                        n = [
                          Math.max(t.x - this.seedRadius, 0),
                          Math.min(t.x + this.seedRadius, this.width),
                          Math.max(t.y - this.seedRadius, 0),
                          Math.min(t.y + this.seedRadius, this.height),
                        ],
                        a = n[0],
                        r = n[1],
                        i = n[2],
                        s = n[3],
                        o = 0;
                      o <= 2 * t.age;
                      o++
                    ) {
                      var c = Math.trunc(a + Math.random() * (r - a)),
                        u = Math.trunc(i + Math.random() * (s - i))
                      if (2 !== this.forest[c][u]) {
                        this.forest[c][u] = 3
                        var h = c + "," + u,
                          l = this.seeds.get(h) || 0
                        this.seeds.set(h, l + this.seedStrength)
                      }
                    }
                },
              },
            ]),
            e
          )
        })(),
        M = n(57)
      function P() {
        return (P = Object(l.a)(
          h.a.mark(function e() {
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", Promise.resolve())
                  case 1:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function k(e, t) {
        var n = r.findPath(
          Math.trunc(e[2] / 2),
          Math.trunc(e[0] / 2),
          Math.trunc(t[2] / 2),
          Math.trunc(t[0] / 2),
          a.clone()
        )
        return n.length, n
      }
      var x = {
          initPathfinding: function () {
            return P.apply(this, arguments)
          },
          startPathFinding: function (e, t) {
            return (
              (a = new M.Grid(e, t)),
              (r = new M.BiBestFirstFinder({ heuristic: M.Heuristic.octile })),
              !0
            )
          },
          setObstacles: function (e) {
            return (
              e.forEach(function (e) {
                var t = e.x,
                  n = e.y
                a.setWalkableAt(n, t, !1)
              }),
              !0
            )
          },
          findPath: k,
          findPathAsync: function (e, t) {
            return new Promise(function (n) {
              n(k(e, t))
            })
          },
        },
        S = n(119),
        A = new (n.n(S).a)()
      function C() {
        return (C = Object(l.a)(
          h.a.mark(function e() {
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", Promise.resolve())
                  case 1:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function F() {
        return (F = Object(l.a)(
          h.a.mark(function e(t, n) {
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, a) {
                        A.postMessage({
                          pathfinding: {
                            operation: "findPath",
                            payload: { from: t, to: n },
                          },
                        }),
                          (A.onmessage = function (t) {
                            t.data.pathfindingResult &&
                              "findPath" ===
                                t.data.pathfindingResult.operation &&
                              e(t.data.pathfindingResult.result)
                          })
                      })
                    )
                  case 1:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      var B = {
          initPathfinding: function () {
            return C.apply(this, arguments)
          },
          startPathFinding: function (e, t) {
            return (
              A.postMessage({
                pathfinding: {
                  operation: "start",
                  payload: { width: e, height: t },
                },
              }),
              !0
            )
          },
          setObstacles: function (e) {
            return (
              A.postMessage({
                pathfinding: {
                  operation: "setObstacles",
                  payload: { obstacles: e },
                },
              }),
              !0
            )
          },
          findPath: function (e, t) {
            return [[1, 1]]
          },
          findPathAsync: function (e, t) {
            return F.apply(this, arguments)
          },
        },
        _ = (n(152), !1)
      function I() {
        return (I = Object(l.a)(
          h.a.mark(function e() {
            var t, n, a, r
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!_) {
                      e.next = 2
                      break
                    }
                    return e.abrupt("return", Promise.resolve())
                  case 2:
                    return (
                      (t = new Go()),
                      (e.next = 5),
                      fetch(
                        "node_modules/go-pathfinding/build/go-pathfinding.wasm"
                      )
                    )
                  case 5:
                    return (n = e.sent), (e.next = 8), n.arrayBuffer()
                  case 8:
                    return (
                      (a = e.sent),
                      (e.next = 11),
                      WebAssembly.instantiate(a, t.importObject)
                    )
                  case 11:
                    ;(r = e.sent), (_ = !0), t.run(r.instance)
                  case 14:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function R(e, t) {
        var n = window.findPath(e[0] / 2, e[2] / 2, t[0] / 2, t[2] / 2),
          a = []
        if (n)
          for (var r = 0, i = 0; r < n.length; r += 2, i++)
            a[i] = [parseInt(n[r], 10), parseInt(n[r + 1], 10)]
        return a
      }
      var T,
        W,
        D = {
          initPathfinding: function () {
            return I.apply(this, arguments)
          },
          startPathFinding: function (e, t) {
            return window.setGrid(e, t), !0
          },
          setObstacles: function (e) {
            var t,
              n = e.reduce(function (e, t) {
                var n = t.x,
                  a = t.y
                return e.push(n), e.push(a), e
              }, [])
            return (t = window).setObstacles.apply(t, Object(p.a)(n)), !0
          },
          findPath: R,
          findPathAsync: function (e, t) {
            return new Promise(function (n) {
              n(R(e, t))
            })
          },
        },
        G = n(130),
        N = 1
      function L() {
        return (L = Object(l.a)(
          h.a.mark(function e() {
            var t, n, a
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      G.a.instantiate(
                        fetch(
                          "node_modules/assemblyscript-pathfinding/build/as-pathfinding.wasm"
                        )
                      )
                    )
                  case 2:
                    return (
                      (t = e.sent),
                      (n = t.exports),
                      (a = n.findPath),
                      (W = a),
                      e.abrupt("return")
                    )
                  case 7:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function z(e, t) {
        for (
          var n = W(
              T,
              Math.trunc(e[2] / 2),
              Math.trunc(e[0] / 2),
              Math.trunc(t[2] / 2),
              Math.trunc(t[0] / 2)
            ),
            a = [],
            r = 0;
          r < n.length - 1;
          r += 2
        )
          a.push([n[r], n[r + 1]])
        return a
      }
      var J = {
          initPathfinding: function () {
            return L.apply(this, arguments)
          },
          startPathFinding: function (e, t) {
            return (
              ((T = new Int8Array(e * t + 2))[0] = t), (T[1] = e), (N = t), !0
            )
          },
          setObstacles: function (e) {
            return (
              e.forEach(function (e) {
                var t = e.x,
                  n = e.y
                T[2 + (n * N + t)] = 1
              }),
              !0
            )
          },
          findPath: z,
          findPathAsync: function (e, t) {
            return new Promise(function (n, a) {
              n(z(e, t))
            })
          },
        },
        U = (n(246), n(120))
      function H(e) {
        var t = Object(v.e)(U.a, "/pathfinding-demo/models/pine/scene.gltf"),
          n = t.nodes,
          a = t.materials,
          r = e.scale,
          i = void 0 === r ? [1, 1, 1] : r
        n.tree_trunk001_0.geometry.computeBoundingBox()
        var o = n.tree_leaves001_0.geometry.boundingBox.min.z * i[1]
        return s.a.createElement(
          "group",
          Object.assign({ rotation: [-Math.PI / 2, 0, 0] }, e, {
            scale: i,
            dispose: null,
          }),
          s.a.createElement(
            "mesh",
            {
              geometry: n.tree_leaves001_0.geometry,
              position: [0, 0, -o],
              castShadow: !0,
              receiveShadow: !0,
            },
            s.a.createElement("meshPhysicalMaterial", {
              attach: "material",
              color: "green",
            })
          ),
          s.a.createElement("mesh", {
            material: a["trunk.001"],
            geometry: n.tree_trunk001_0.geometry,
            position: [0, 0, -o],
            castShadow: !0,
            receiveShadow: !0,
          })
        )
      }
      var V = n(80),
        $ = Object(i.memo)(function (e) {
          var t = e.isWalking,
            n = void 0 !== t && t,
            a = Object(v.e)(
              V.a,
              "/pathfinding-demo/models/player/BreathingIdle.fbx"
            ),
            r = Object(v.e)(
              V.a,
              "/pathfinding-demo/models/player/WalkForward.fbx"
            )
          a.traverse(function (e) {
            e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0))
          })
          var o = new m.AnimationMixer(a),
            c = o.clipAction(a.animations[0]),
            u = o.clipAction(r.animations[0])
          Object(i.useEffect)(
            function () {
              n ? (c.stop(), u.play()) : (u.stop(), c.play())
            },
            [n]
          )
          var h = new m.Clock()
          return (
            Object(v.d)(function () {
              var e = h.getDelta()
              o.update(e)
            }),
            s.a.createElement(
              "group",
              e,
              s.a.createElement("primitive", {
                object: a,
                scale: [0.0075, 0.0075, 0.0075],
                position: [0, -0.5, 0],
                attach: "target",
              })
            )
          )
        }),
        q = new E(50, 50, 10)
      D.initPathfinding(),
        J.initPathfinding(),
        Object(v.c)({ OrbitControls: g.b })
      var K = Object(i.memo)(function (e) {
          var t = e.position,
            n = e.target,
            a = Object(i.useRef)(),
            r = Object(v.f)(),
            o = r.camera,
            c = r.gl
          return (
            Object(i.useEffect)(
              function () {
                o.lookAt(t),
                  a.current &&
                    a.current.target.copy(
                      Object(d.a)(m.Vector3, Object(p.a)(n))
                    )
              },
              [t, n, a, o]
            ),
            Object(v.d)(function () {
              a.current.update()
            }),
            s.a.createElement("orbitControls", {
              maxPolarAngle: Math.PI / 3,
              minPolarAngle: Math.PI / 3,
              args: [o, c.domElement],
              ref: a,
            })
          )
        }),
        Q = Object(i.memo)(function (e) {
          var t = e.finder,
            n = Object(i.useState)([]),
            a = Object(f.a)(n, 2),
            r = a[0],
            o = a[1]
          return (
            Object(i.useEffect)(
              function () {
                var e = q.generate()
                o(e), t.setObstacles(e)
              },
              [t]
            ),
            s.a.createElement(
              i.Suspense,
              { fallback: s.a.createElement(s.a.Fragment, null) },
              r.map(function (e) {
                var t = e.x,
                  n = e.y,
                  a = e.age
                return s.a.createElement(H, {
                  position: [2 * t + Math.random(), 0.2, 2 * n + Math.random()],
                  scale: [0.2 + 0.1 * a, 0.2 + 0.1 * a, 0.2 + 0.1 * a],
                })
              })
            )
          )
        }),
        X = function (e) {
          var t = e.points,
            n = e.target
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              "mesh",
              { position: [n[0], -0.5, n[2]], castShadow: !0 },
              s.a.createElement("boxBufferGeometry", {
                attach: "geometry",
                args: [0.25, 0.1, 0.25],
              }),
              s.a.createElement("meshPhysicalMaterial", {
                attach: "material",
                color: "darkgreen",
              })
            ),
            t.slice(1).map(function (e) {
              return s.a.createElement(
                "mesh",
                { position: [2 * e[1], -0.5, 2 * e[0]], castShadow: !0 },
                s.a.createElement("boxBufferGeometry", {
                  attach: "geometry",
                  args: [0.25, 0.1, 0.25],
                }),
                s.a.createElement("meshPhysicalMaterial", {
                  attach: "material",
                  color: "green",
                })
              )
            })
          )
        },
        Y = function (e) {
          var t = e.handleClick,
            n = e.handleMove
          return s.a.createElement(
            "mesh",
            {
              rotation: [-Math.PI / 2, 0, 0],
              position: [50, -0.5, 50],
              receiveShadow: !0,
              onClick: t,
              onPointerMove: n,
            },
            s.a.createElement("planeBufferGeometry", {
              attach: "geometry",
              args: [100, 100, 100, 100],
            }),
            s.a.createElement("meshPhysicalMaterial", {
              attach: "material",
              color: "darkgreen",
            })
          )
        },
        Z = function (e) {
          var t = e.position
          return s.a.createElement(b.a, {
            makeDefault: !0,
            position: t,
            fov: 15,
          })
        },
        ee = function () {
          var e = Object(i.useState)([25, 0, 25]),
            t = Object(f.a)(e, 2),
            n = t[0],
            a = (t[1], Object(i.useState)([25, 0, 25])),
            r = Object(f.a)(a, 2),
            o = r[0],
            c = r[1],
            u = Object(i.useState)([60, 5, 75]),
            d = Object(f.a)(u, 2),
            p = d[0],
            g = (d[1], Object(i.useState)([])),
            b = Object(f.a)(g, 2),
            y = b[0],
            w = b[1],
            O = Object(i.useState)(!1),
            j = Object(f.a)(O, 2),
            E = j[0],
            M = j[1],
            P = Object(i.useState)(!1),
            k = Object(f.a)(P, 2),
            S = k[0],
            A = k[1],
            C = Object(i.useState)(!1),
            F = Object(f.a)(C, 2),
            _ = F[0],
            I = F[1],
            R = Object(i.useState)("threaded"),
            T = Object(f.a)(R, 2),
            W = T[0],
            G = T[1],
            N = Object(i.useMemo)(
              function () {
                switch (W) {
                  case "js":
                    return x
                  case "go":
                    return D
                  case "assemblyscript":
                    return J
                  default:
                    return B
                }
              },
              [W]
            )
          function L() {
            return (L = Object(l.a)(
              h.a.mark(function e(t) {
                var a, r
                return h.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!_) {
                          e.next = 2
                          break
                        }
                        return e.abrupt("return")
                      case 2:
                        return (
                          I(!0),
                          (a = [t.point.x, t.point.y, t.point.z]),
                          c(a),
                          (e.next = 7),
                          N.findPathAsync(n, a)
                        )
                      case 7:
                        ;(r = e.sent), I(!1), w(r)
                      case 10:
                      case "end":
                        return e.stop()
                    }
                }, e)
              })
            )).apply(this, arguments)
          }
          return (
            new m.Object3D().position.set(50, 0, 50),
            Object(i.useEffect)(
              function () {
                S && N.startPathFinding(50, 50)
              },
              [S, N]
            ),
            Object(i.useEffect)(
              function () {
                N.initPathfinding().then(function () {
                  return A(!0)
                })
              },
              [N]
            ),
            S &&
              s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(
                  "div",
                  { className: "controls" },
                  ["js", "threaded", "go", "assemblyscript"].map(function (e) {
                    return s.a.createElement(
                      "span",
                      {
                        className: "control ".concat(e === W ? "selected" : ""),
                        onClick: function () {
                          return G(e)
                        },
                      },
                      e
                    )
                  })
                ),
                s.a.createElement(
                  v.a,
                  {
                    onCreated: function (e) {
                      var t = e.gl
                      ;(t.shadowMap.enabled = !0),
                        (t.shadowMap.type = m.PCFSoftShadowMap)
                    },
                  },
                  s.a.createElement(Z, { position: p }),
                  s.a.createElement("ambientLight", { intensity: 0.75 }),
                  s.a.createElement("spotLight", {
                    position: [50, 10, 50],
                    penumbra: 1,
                    decay: 2,
                    castShadow: !0,
                  }),
                  s.a.createElement(K, { position: n, target: n }),
                  s.a.createElement(
                    i.Suspense,
                    { fallback: s.a.createElement(s.a.Fragment, null) },
                    s.a.createElement($, { position: n, isWalking: E })
                  ),
                  s.a.createElement(
                    i.Suspense,
                    { fallback: s.a.createElement(s.a.Fragment, null) },
                    s.a.createElement(Y, {
                      handleClick: function (e) {
                        M(!E)
                      },
                      handleMove: function (e) {
                        return L.apply(this, arguments)
                      },
                    })
                  ),
                  s.a.createElement(Q, { finder: N }),
                  s.a.createElement(X, { points: y, target: o })
                )
              )
          )
        }
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      )
      c.a.render(
        s.a.createElement(s.a.StrictMode, null, s.a.createElement(ee, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister()
            })
            .catch(function (e) {
              console.error(e.message)
            })
    },
  },
  [[131, 1, 2]],
])
//# sourceMappingURL=main.9126b110.chunk.js.map
