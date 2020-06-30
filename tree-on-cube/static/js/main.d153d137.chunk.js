;(this.webpackJsonpforest = this.webpackJsonpforest || []).push([
  [0],
  {
    39: function (e, t, a) {
      e.exports = a(51)
    },
    43: function (e, t, a) {},
    44: function (e, t, a) {},
    51: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(1),
        o = a.n(n),
        r = a(18),
        c = a.n(r),
        l = (a(43), a(0)),
        i = a(19),
        s = a(6),
        m = a(27),
        u = a(38),
        h = (a(44), a(29))
      function g(e) {
        var t = Object(s.g)(h.a, "/tree-on-cube/models/pine/scene.gltf"),
          a = t.nodes,
          n = t.materials,
          r = e.scale,
          c = void 0 === r ? [1, 1, 1] : r
        a.tree_trunk001_0.geometry.computeBoundingBox(),
          console.log(a.tree_leaves001_0.geometry.boundingBox)
        var l = a.tree_leaves001_0.geometry.boundingBox.min.z * c[1]
        return o.a.createElement(
          "group",
          Object.assign({ rotation: [-Math.PI / 2, 0, 0] }, e, {
            scale: c,
            dispose: null,
          }),
          o.a.createElement(
            "mesh",
            {
              geometry: a.tree_leaves001_0.geometry,
              position: [0, 0, -l],
              castShadow: !0,
            },
            o.a.createElement("meshPhysicalMaterial", {
              attach: "material",
              color: "green",
            })
          ),
          o.a.createElement("mesh", {
            material: n["trunk.001"],
            geometry: a.tree_trunk001_0.geometry,
            position: [0, 0, -l],
            castShadow: !0,
            receiveShadow: !0,
          })
        )
      }
      Object(s.d)({ OrbitControls: i.b })
      var d = function () {
          var e = Object(n.useRef)(),
            t = Object(s.h)(),
            a = t.camera,
            r = t.gl
          return (
            Object(s.f)(function () {
              e.current.update()
            }),
            o.a.createElement("orbitControls", {
              autoRotate: !0,
              args: [a, r.domElement],
              ref: e,
            })
          )
        },
        f = function () {
          return o.a.createElement(
            m.a.mesh,
            { position: [0, -4, 0], castShadow: !0, receiveShadow: !0 },
            o.a.createElement("boxBufferGeometry", {
              attach: "geometry",
              args: [1, 1, 1],
            }),
            o.a.createElement(m.a.meshPhysicalMaterial, {
              attach: "material",
              color: "gray",
            })
          )
        },
        p = function () {
          return o.a.createElement(u.a, {
            makeDefault: !0,
            position: [10, 10, 25],
            fov: 18,
            aspect: 1,
          })
        },
        E = function () {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              s.a,
              {
                width: 200,
                height: 300,
                onCreated: function (e) {
                  var t = e.gl
                  ;(t.shadowMap.enabled = !0),
                    (t.shadowMap.type = l.PCFSoftShadowMap)
                },
              },
              o.a.createElement(p, null),
              o.a.createElement("ambientLight", { intensity: 0.75 }),
              o.a.createElement("spotLight", {
                position: [15, 20, 5],
                penumbra: 1,
                castShadow: !0,
              }),
              o.a.createElement(d, null),
              o.a.createElement(
                n.Suspense,
                { fallback: o.a.createElement(o.a.Fragment, null) },
                o.a.createElement(g, { position: [0, -3, 0] })
              ),
              o.a.createElement(f, null)
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
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(E, null)),
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
  [[39, 1, 2]],
])
//# sourceMappingURL=main.d153d137.chunk.js.map
