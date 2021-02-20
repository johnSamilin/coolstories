!(function (t) {
  var e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    var i = (e[r] = { i: r, l: !1, exports: {} })
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  ;(n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 })
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && "object" === typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e]
            }.bind(null, i)
          )
      return r
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return n.d(e, "a", e), e
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = "/"),
    n((n.s = 27))
})([
  function (t, e) {
    t.exports = {
      Always: 1,
      Never: 2,
      IfAtMostOneObstacle: 3,
      OnlyWhenNoObstacles: 4,
    }
  },
  function (t, e) {
    function n(t) {
      for (var e = [[t.x, t.y]]; t.parent; ) (t = t.parent), e.push([t.x, t.y])
      return e.reverse()
    }
    function r(t, e, n, r) {
      var i,
        o,
        a,
        s,
        l,
        u,
        h = Math.abs,
        c = []
      for (
        i = t < n ? 1 : -1,
          o = e < r ? 1 : -1,
          l = (a = h(n - t)) - (s = h(r - e));
        c.push([t, e]), t !== n || e !== r;

      )
        (u = 2 * l) > -s && ((l -= s), (t += i)), u < a && ((l += a), (e += o))
      return c
    }
    ;(e.backtrace = n),
      (e.biBacktrace = function (t, e) {
        var r = n(t),
          i = n(e)
        return r.concat(i.reverse())
      }),
      (e.pathLength = function (t) {
        var e,
          n,
          r,
          i,
          o,
          a = 0
        for (e = 1; e < t.length; ++e)
          (n = t[e - 1]),
            (r = t[e]),
            (i = n[0] - r[0]),
            (o = n[1] - r[1]),
            (a += Math.sqrt(i * i + o * o))
        return a
      }),
      (e.interpolate = r),
      (e.expandPath = function (t) {
        var e,
          n,
          i,
          o,
          a,
          s,
          l = [],
          u = t.length
        if (u < 2) return l
        for (a = 0; a < u - 1; ++a)
          for (
            e = t[a],
              n = t[a + 1],
              o = (i = r(e[0], e[1], n[0], n[1])).length,
              s = 0;
            s < o - 1;
            ++s
          )
            l.push(i[s])
        return l.push(t[u - 1]), l
      }),
      (e.smoothenPath = function (t, e) {
        var n,
          i,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p = e.length,
          f = e[0][0],
          d = e[0][1],
          g = e[p - 1][0],
          v = e[p - 1][1]
        for (o = [[(n = f), (i = d)]], a = 2; a < p; ++a) {
          for (
            u = r(n, i, (l = e[a])[0], l[1]), c = !1, s = 1;
            s < u.length;
            ++s
          )
            if (((h = u[s]), !t.isWalkableAt(h[0], h[1]))) {
              c = !0
              break
            }
          c &&
            ((lastValidCoord = e[a - 1]),
            o.push(lastValidCoord),
            (n = lastValidCoord[0]),
            (i = lastValidCoord[1]))
        }
        return o.push([g, v]), o
      }),
      (e.compressPath = function (t) {
        if (t.length < 3) return t
        var e,
          n,
          r,
          i,
          o,
          a,
          s = [],
          l = t[0][0],
          u = t[0][1],
          h = t[1][0],
          c = t[1][1],
          p = h - l,
          f = c - u
        for (
          p /= o = Math.sqrt(p * p + f * f), f /= o, s.push([l, u]), a = 2;
          a < t.length;
          a++
        )
          (e = h),
            (n = c),
            (r = p),
            (i = f),
            (p = (h = t[a][0]) - e),
            (f = (c = t[a][1]) - n),
            (f /= o = Math.sqrt(p * p + f * f)),
            ((p /= o) === r && f === i) || s.push([e, n])
        return s.push([h, c]), s
      })
  },
  function (t, e) {
    t.exports = {
      manhattan: function (t, e) {
        return t + e
      },
      euclidean: function (t, e) {
        return Math.sqrt(t * t + e * e)
      },
      octile: function (t, e) {
        var n = Math.SQRT2 - 1
        return t < e ? n * t + e : n * e + t
      },
      chebyshev: function (t, e) {
        return Math.max(t, e)
      },
    }
  },
  function (t, e, n) {
    t.exports = n(12)
  },
  function (t, e, n) {
    var r = n(3),
      i = n(1),
      o = n(2)
    n(0)
    function a(t) {
      ;(t = t || {}),
        (this.heuristic = t.heuristic || o.manhattan),
        (this.trackJumpRecursion = t.trackJumpRecursion || !1)
    }
    ;(a.prototype.findPath = function (t, e, n, o, a) {
      var s,
        l = (this.openList = new r(function (t, e) {
          return t.f - e.f
        })),
        u = (this.startNode = a.getNodeAt(t, e)),
        h = (this.endNode = a.getNodeAt(n, o))
      for (
        this.grid = a, u.g = 0, u.f = 0, l.push(u), u.opened = !0;
        !l.empty();

      ) {
        if ((((s = l.pop()).closed = !0), s === h))
          return i.expandPath(i.backtrace(h))
        this._identifySuccessors(s)
      }
      return []
    }),
      (a.prototype._identifySuccessors = function (t) {
        var e,
          n,
          r,
          i,
          a,
          s,
          l,
          u,
          h,
          c,
          p = this.grid,
          f = this.heuristic,
          d = this.openList,
          g = this.endNode.x,
          v = this.endNode.y,
          y = t.x,
          b = t.y,
          m = Math.abs
        Math.max
        for (i = 0, a = (e = this._findNeighbors(t)).length; i < a; ++i)
          if (((n = e[i]), (r = this._jump(n[0], n[1], y, b)))) {
            if (((s = r[0]), (l = r[1]), (c = p.getNodeAt(s, l)).closed))
              continue
            ;(u = o.octile(m(s - y), m(l - b))),
              (h = t.g + u),
              (!c.opened || h < c.g) &&
                ((c.g = h),
                (c.h = c.h || f(m(s - g), m(l - v))),
                (c.f = c.g + c.h),
                (c.parent = t),
                c.opened ? d.updateItem(c) : (d.push(c), (c.opened = !0)))
          }
      }),
      (t.exports = a)
  },
  function (t, e, n) {
    t.exports = n(11)
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      ;(this.x = t), (this.y = e), (this.walkable = void 0 === n || n)
    }
  },
  function (t, e, n) {
    var r = n(3),
      i = n(1),
      o = n(2),
      a = n(0)
    function s(t) {
      ;(t = t || {}),
        (this.allowDiagonal = t.allowDiagonal),
        (this.dontCrossCorners = t.dontCrossCorners),
        (this.heuristic = t.heuristic || o.manhattan),
        (this.weight = t.weight || 1),
        (this.diagonalMovement = t.diagonalMovement),
        this.diagonalMovement ||
          (this.allowDiagonal
            ? this.dontCrossCorners
              ? (this.diagonalMovement = a.OnlyWhenNoObstacles)
              : (this.diagonalMovement = a.IfAtMostOneObstacle)
            : (this.diagonalMovement = a.Never)),
        this.diagonalMovement === a.Never
          ? (this.heuristic = t.heuristic || o.manhattan)
          : (this.heuristic = t.heuristic || o.octile)
    }
    ;(s.prototype.findPath = function (t, e, n, o, a) {
      var s,
        l,
        u,
        h,
        c,
        p,
        f,
        d,
        g = new r(function (t, e) {
          return t.f - e.f
        }),
        v = a.getNodeAt(t, e),
        y = a.getNodeAt(n, o),
        b = this.heuristic,
        m = this.diagonalMovement,
        A = this.weight,
        k = Math.abs,
        w = Math.SQRT2
      for (v.g = 0, v.f = 0, g.push(v), v.opened = !0; !g.empty(); ) {
        if ((((s = g.pop()).closed = !0), s === y)) return i.backtrace(y)
        for (h = 0, c = (l = a.getNeighbors(s, m)).length; h < c; ++h)
          (u = l[h]).closed ||
            ((p = u.x),
            (f = u.y),
            (d = s.g + (p - s.x === 0 || f - s.y === 0 ? 1 : w)),
            (!u.opened || d < u.g) &&
              ((u.g = d),
              (u.h = u.h || A * b(k(p - n), k(f - o))),
              (u.f = u.g + u.h),
              (u.parent = s),
              u.opened ? g.updateItem(u) : (g.push(u), (u.opened = !0))))
      }
      return []
    }),
      (t.exports = s)
  },
  function (t, e, n) {
    var r = n(3),
      i = n(1),
      o = n(2),
      a = n(0)
    function s(t) {
      ;(t = t || {}),
        (this.allowDiagonal = t.allowDiagonal),
        (this.dontCrossCorners = t.dontCrossCorners),
        (this.diagonalMovement = t.diagonalMovement),
        (this.heuristic = t.heuristic || o.manhattan),
        (this.weight = t.weight || 1),
        this.diagonalMovement ||
          (this.allowDiagonal
            ? this.dontCrossCorners
              ? (this.diagonalMovement = a.OnlyWhenNoObstacles)
              : (this.diagonalMovement = a.IfAtMostOneObstacle)
            : (this.diagonalMovement = a.Never)),
        this.diagonalMovement === a.Never
          ? (this.heuristic = t.heuristic || o.manhattan)
          : (this.heuristic = t.heuristic || o.octile)
    }
    ;(s.prototype.findPath = function (t, e, n, o, a) {
      var s,
        l,
        u,
        h,
        c,
        p,
        f,
        d,
        g = function (t, e) {
          return t.f - e.f
        },
        v = new r(g),
        y = new r(g),
        b = a.getNodeAt(t, e),
        m = a.getNodeAt(n, o),
        A = this.heuristic,
        k = this.diagonalMovement,
        w = this.weight,
        W = Math.abs,
        x = Math.SQRT2
      for (
        b.g = 0,
          b.f = 0,
          v.push(b),
          b.opened = 1,
          m.g = 0,
          m.f = 0,
          y.push(m),
          m.opened = 2;
        !v.empty() && !y.empty();

      ) {
        for (
          (s = v.pop()).closed = !0,
            h = 0,
            c = (l = a.getNeighbors(s, k)).length;
          h < c;
          ++h
        )
          if (!(u = l[h]).closed) {
            if (2 === u.opened) return i.biBacktrace(s, u)
            ;(p = u.x),
              (f = u.y),
              (d = s.g + (p - s.x === 0 || f - s.y === 0 ? 1 : x)),
              (!u.opened || d < u.g) &&
                ((u.g = d),
                (u.h = u.h || w * A(W(p - n), W(f - o))),
                (u.f = u.g + u.h),
                (u.parent = s),
                u.opened ? v.updateItem(u) : (v.push(u), (u.opened = 1)))
          }
        for (
          (s = y.pop()).closed = !0,
            h = 0,
            c = (l = a.getNeighbors(s, k)).length;
          h < c;
          ++h
        )
          if (!(u = l[h]).closed) {
            if (1 === u.opened) return i.biBacktrace(u, s)
            ;(p = u.x),
              (f = u.y),
              (d = s.g + (p - s.x === 0 || f - s.y === 0 ? 1 : x)),
              (!u.opened || d < u.g) &&
                ((u.g = d),
                (u.h = u.h || w * A(W(p - t), W(f - e))),
                (u.f = u.g + u.h),
                (u.parent = s),
                u.opened ? y.updateItem(u) : (y.push(u), (u.opened = 2)))
          }
      }
      return []
    }),
      (t.exports = s)
  },
  function (t, e, n) {
    t.exports = n(10)
  },
  function (t, e, n) {
    var r = (function (t) {
      "use strict"
      var e = Object.prototype,
        n = e.hasOwnProperty,
        r = "function" === typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag"
      function s(t, e, n, r) {
        var i = e && e.prototype instanceof h ? e : h,
          o = Object.create(i.prototype),
          a = new w(r || [])
        return (
          (o._invoke = (function (t, e, n) {
            var r = "suspendedStart"
            return function (i, o) {
              if ("executing" === r)
                throw new Error("Generator is already running")
              if ("completed" === r) {
                if ("throw" === i) throw o
                return x()
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate
                if (a) {
                  var s = m(a, n)
                  if (s) {
                    if (s === u) continue
                    return s
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg)
                  n.dispatchException(n.arg)
                } else "return" === n.method && n.abrupt("return", n.arg)
                r = "executing"
                var h = l(t, e, n)
                if ("normal" === h.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), h.arg === u)
                  )
                    continue
                  return { value: h.arg, done: n.done }
                }
                "throw" === h.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = h.arg))
              }
            }
          })(t, n, a)),
          o
        )
      }
      function l(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) }
        } catch (r) {
          return { type: "throw", arg: r }
        }
      }
      t.wrap = s
      var u = {}
      function h() {}
      function c() {}
      function p() {}
      var f = {}
      f[i] = function () {
        return this
      }
      var d = Object.getPrototypeOf,
        g = d && d(d(W([])))
      g && g !== e && n.call(g, i) && (f = g)
      var v = (p.prototype = h.prototype = Object.create(f))
      function y(t) {
        ;["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t)
          }
        })
      }
      function b(t, e) {
        var r
        this._invoke = function (i, o) {
          function a() {
            return new e(function (r, a) {
              !(function r(i, o, a, s) {
                var u = l(t[i], t, o)
                if ("throw" !== u.type) {
                  var h = u.arg,
                    c = h.value
                  return c && "object" === typeof c && n.call(c, "__await")
                    ? e.resolve(c.__await).then(
                        function (t) {
                          r("next", t, a, s)
                        },
                        function (t) {
                          r("throw", t, a, s)
                        }
                      )
                    : e.resolve(c).then(
                        function (t) {
                          ;(h.value = t), a(h)
                        },
                        function (t) {
                          return r("throw", t, a, s)
                        }
                      )
                }
                s(u.arg)
              })(i, o, r, a)
            })
          }
          return (r = r ? r.then(a, a) : a())
        }
      }
      function m(t, e) {
        var n = t.iterator[e.method]
        if (void 0 === n) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              m(t, e),
              "throw" === e.method)
            )
              return u
            ;(e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ))
          }
          return u
        }
        var r = l(n, t.iterator, e.arg)
        if ("throw" === r.type)
          return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), u
        var i = r.arg
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              u)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            u)
      }
      function A(t) {
        var e = { tryLoc: t[0] }
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e)
      }
      function k(t) {
        var e = t.completion || {}
        ;(e.type = "normal"), delete e.arg, (t.completion = e)
      }
      function w(t) {
        ;(this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(A, this),
          this.reset(!0)
      }
      function W(t) {
        if (t) {
          var e = t[i]
          if (e) return e.call(t)
          if ("function" === typeof t.next) return t
          if (!isNaN(t.length)) {
            var r = -1,
              o = function e() {
                for (; ++r < t.length; )
                  if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e
                return (e.value = void 0), (e.done = !0), e
              }
            return (o.next = o)
          }
        }
        return { next: x }
      }
      function x() {
        return { value: void 0, done: !0 }
      }
      return (
        (c.prototype = v.constructor = p),
        (p.constructor = c),
        (p[a] = c.displayName = "GeneratorFunction"),
        (t.isGeneratorFunction = function (t) {
          var e = "function" === typeof t && t.constructor
          return (
            !!e &&
            (e === c || "GeneratorFunction" === (e.displayName || e.name))
          )
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, p)
              : ((t.__proto__ = p), a in t || (t[a] = "GeneratorFunction")),
            (t.prototype = Object.create(v)),
            t
          )
        }),
        (t.awrap = function (t) {
          return { __await: t }
        }),
        y(b.prototype),
        (b.prototype[o] = function () {
          return this
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, n, r, i, o) {
          void 0 === o && (o = Promise)
          var a = new b(s(e, n, r, i), o)
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next()
              })
        }),
        y(v),
        (v[a] = "Generator"),
        (v[i] = function () {
          return this
        }),
        (v.toString = function () {
          return "[object Generator]"
        }),
        (t.keys = function (t) {
          var e = []
          for (var n in t) e.push(n)
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop()
                if (r in t) return (n.value = r), (n.done = !1), n
              }
              return (n.done = !0), n
            }
          )
        }),
        (t.values = W),
        (w.prototype = {
          constructor: w,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(k),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  n.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0)
          },
          stop: function () {
            this.done = !0
            var t = this.tryEntries[0].completion
            if ("throw" === t.type) throw t.arg
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t
            var e = this
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = "next"), (e.arg = void 0)),
                !!r
              )
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                a = o.completion
              if ("root" === o.tryLoc) return r("end")
              if (o.tryLoc <= this.prev) {
                var s = n.call(o, "catchLoc"),
                  l = n.call(o, "finallyLoc")
                if (s && l) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                } else if (s) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally")
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r]
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i
                break
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null)
            var a = o ? o.completion : {}
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), u)
                : this.complete(a)
            )
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              u
            )
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e]
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), k(n), u
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e]
              if (n.tryLoc === t) {
                var r = n.completion
                if ("throw" === r.type) {
                  var i = r.arg
                  k(n)
                }
                return i
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = { iterator: W(t), resultName: e, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              u
            )
          },
        }),
        t
      )
    })(t.exports)
    try {
      regeneratorRuntime = r
    } catch (i) {
      Function("r", "regeneratorRuntime = r")(r)
    }
  },
  function (t, e, n) {
    t.exports = {
      Heap: n(3),
      Node: n(6),
      Grid: n(14),
      Util: n(1),
      DiagonalMovement: n(0),
      Heuristic: n(2),
      AStarFinder: n(7),
      BestFirstFinder: n(15),
      BreadthFirstFinder: n(16),
      DijkstraFinder: n(17),
      BiAStarFinder: n(8),
      BiBestFirstFinder: n(18),
      BiBreadthFirstFinder: n(19),
      BiDijkstraFinder: n(20),
      IDAStarFinder: n(21),
      JumpPointFinder: n(22),
    }
  },
  function (t, e, n) {
    ;(function (t) {
      ;(function () {
        var e, n, r, i, o, a, s, l, u, h, c, p, f, d, g
        ;(r = Math.floor),
          (h = Math.min),
          (n = function (t, e) {
            return t < e ? -1 : t > e ? 1 : 0
          }),
          (u = function (t, e, i, o, a) {
            var s
            if ((null == i && (i = 0), null == a && (a = n), i < 0))
              throw new Error("lo must be non-negative")
            for (null == o && (o = t.length); i < o; )
              a(e, t[(s = r((i + o) / 2))]) < 0 ? (o = s) : (i = s + 1)
            return [].splice.apply(t, [i, i - i].concat(e)), e
          }),
          (a = function (t, e, r) {
            return null == r && (r = n), t.push(e), d(t, 0, t.length - 1, r)
          }),
          (o = function (t, e) {
            var r, i
            return (
              null == e && (e = n),
              (r = t.pop()),
              t.length ? ((i = t[0]), (t[0] = r), g(t, 0, e)) : (i = r),
              i
            )
          }),
          (l = function (t, e, r) {
            var i
            return null == r && (r = n), (i = t[0]), (t[0] = e), g(t, 0, r), i
          }),
          (s = function (t, e, r) {
            var i
            return (
              null == r && (r = n),
              t.length &&
                r(t[0], e) < 0 &&
                ((e = (i = [t[0], e])[0]), (t[0] = i[1]), g(t, 0, r)),
              e
            )
          }),
          (i = function (t, e) {
            var i, o, a, s, l, u
            for (
              null == e && (e = n),
                l = [],
                o = 0,
                a = (s = function () {
                  u = []
                  for (
                    var e = 0, n = r(t.length / 2);
                    0 <= n ? e < n : e > n;
                    0 <= n ? e++ : e--
                  )
                    u.push(e)
                  return u
                }
                  .apply(this)
                  .reverse()).length;
              o < a;
              o++
            )
              (i = s[o]), l.push(g(t, i, e))
            return l
          }),
          (f = function (t, e, r) {
            var i
            if ((null == r && (r = n), -1 !== (i = t.indexOf(e))))
              return d(t, 0, i, r), g(t, i, r)
          }),
          (c = function (t, e, r) {
            var o, a, l, u, h
            if ((null == r && (r = n), !(a = t.slice(0, e)).length)) return a
            for (i(a, r), l = 0, u = (h = t.slice(e)).length; l < u; l++)
              (o = h[l]), s(a, o, r)
            return a.sort(r).reverse()
          }),
          (p = function (t, e, r) {
            var a, s, l, c, p, f, d, g, v
            if ((null == r && (r = n), 10 * e <= t.length)) {
              if (!(l = t.slice(0, e).sort(r)).length) return l
              for (
                s = l[l.length - 1], c = 0, f = (d = t.slice(e)).length;
                c < f;
                c++
              )
                r((a = d[c]), s) < 0 &&
                  (u(l, a, 0, null, r), l.pop(), (s = l[l.length - 1]))
              return l
            }
            for (
              i(t, r), v = [], p = 0, g = h(e, t.length);
              0 <= g ? p < g : p > g;
              0 <= g ? ++p : --p
            )
              v.push(o(t, r))
            return v
          }),
          (d = function (t, e, r, i) {
            var o, a, s
            for (
              null == i && (i = n), o = t[r];
              r > e && i(o, (a = t[(s = (r - 1) >> 1)])) < 0;

            )
              (t[r] = a), (r = s)
            return (t[r] = o)
          }),
          (g = function (t, e, r) {
            var i, o, a, s, l
            for (
              null == r && (r = n),
                o = t.length,
                l = e,
                a = t[e],
                i = 2 * e + 1;
              i < o;

            )
              (s = i + 1) < o && !(r(t[i], t[s]) < 0) && (i = s),
                (t[e] = t[i]),
                (i = 2 * (e = i) + 1)
            return (t[e] = a), d(t, l, e, r)
          }),
          (e = (function () {
            function t(t) {
              ;(this.cmp = null != t ? t : n), (this.nodes = [])
            }
            return (
              (t.push = a),
              (t.pop = o),
              (t.replace = l),
              (t.pushpop = s),
              (t.heapify = i),
              (t.updateItem = f),
              (t.nlargest = c),
              (t.nsmallest = p),
              (t.prototype.push = function (t) {
                return a(this.nodes, t, this.cmp)
              }),
              (t.prototype.pop = function () {
                return o(this.nodes, this.cmp)
              }),
              (t.prototype.peek = function () {
                return this.nodes[0]
              }),
              (t.prototype.contains = function (t) {
                return -1 !== this.nodes.indexOf(t)
              }),
              (t.prototype.replace = function (t) {
                return l(this.nodes, t, this.cmp)
              }),
              (t.prototype.pushpop = function (t) {
                return s(this.nodes, t, this.cmp)
              }),
              (t.prototype.heapify = function () {
                return i(this.nodes, this.cmp)
              }),
              (t.prototype.updateItem = function (t) {
                return f(this.nodes, t, this.cmp)
              }),
              (t.prototype.clear = function () {
                return (this.nodes = [])
              }),
              (t.prototype.empty = function () {
                return 0 === this.nodes.length
              }),
              (t.prototype.size = function () {
                return this.nodes.length
              }),
              (t.prototype.clone = function () {
                var e
                return ((e = new t()).nodes = this.nodes.slice(0)), e
              }),
              (t.prototype.toArray = function () {
                return this.nodes.slice(0)
              }),
              (t.prototype.insert = t.prototype.push),
              (t.prototype.top = t.prototype.peek),
              (t.prototype.front = t.prototype.peek),
              (t.prototype.has = t.prototype.contains),
              (t.prototype.copy = t.prototype.clone),
              t
            )
          })()),
          (null !== t ? t.exports : void 0)
            ? (t.exports = e)
            : (window.Heap = e)
      }.call(this))
    }.call(this, n(13)(t)))
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      )
    }
  },
  function (t, e, n) {
    var r = n(6),
      i = n(0)
    function o(t, e, n) {
      var r
      "object" !== typeof t
        ? (r = t)
        : ((e = t.length), (r = t[0].length), (n = t)),
        (this.width = r),
        (this.height = e),
        (this.nodes = this._buildNodes(r, e, n))
    }
    ;(o.prototype._buildNodes = function (t, e, n) {
      var i,
        o,
        a = new Array(e)
      for (i = 0; i < e; ++i)
        for (a[i] = new Array(t), o = 0; o < t; ++o) a[i][o] = new r(o, i)
      if (void 0 === n) return a
      if (n.length !== e || n[0].length !== t)
        throw new Error("Matrix size does not fit")
      for (i = 0; i < e; ++i)
        for (o = 0; o < t; ++o) n[i][o] && (a[i][o].walkable = !1)
      return a
    }),
      (o.prototype.getNodeAt = function (t, e) {
        return this.nodes[e][t]
      }),
      (o.prototype.isWalkableAt = function (t, e) {
        return this.isInside(t, e) && this.nodes[e][t].walkable
      }),
      (o.prototype.isInside = function (t, e) {
        return t >= 0 && t < this.width && e >= 0 && e < this.height
      }),
      (o.prototype.setWalkableAt = function (t, e, n) {
        this.nodes[e][t].walkable = n
      }),
      (o.prototype.getNeighbors = function (t, e) {
        var n = t.x,
          r = t.y,
          o = [],
          a = !1,
          s = !1,
          l = !1,
          u = !1,
          h = !1,
          c = !1,
          p = !1,
          f = !1,
          d = this.nodes
        if (
          (this.isWalkableAt(n, r - 1) && (o.push(d[r - 1][n]), (a = !0)),
          this.isWalkableAt(n + 1, r) && (o.push(d[r][n + 1]), (l = !0)),
          this.isWalkableAt(n, r + 1) && (o.push(d[r + 1][n]), (h = !0)),
          this.isWalkableAt(n - 1, r) && (o.push(d[r][n - 1]), (p = !0)),
          e === i.Never)
        )
          return o
        if (e === i.OnlyWhenNoObstacles)
          (s = p && a), (u = a && l), (c = l && h), (f = h && p)
        else if (e === i.IfAtMostOneObstacle)
          (s = p || a), (u = a || l), (c = l || h), (f = h || p)
        else {
          if (e !== i.Always)
            throw new Error("Incorrect value of diagonalMovement")
          ;(s = !0), (u = !0), (c = !0), (f = !0)
        }
        return (
          s && this.isWalkableAt(n - 1, r - 1) && o.push(d[r - 1][n - 1]),
          u && this.isWalkableAt(n + 1, r - 1) && o.push(d[r - 1][n + 1]),
          c && this.isWalkableAt(n + 1, r + 1) && o.push(d[r + 1][n + 1]),
          f && this.isWalkableAt(n - 1, r + 1) && o.push(d[r + 1][n - 1]),
          o
        )
      }),
      (o.prototype.clone = function () {
        var t,
          e,
          n = this.width,
          i = this.height,
          a = this.nodes,
          s = new o(n, i),
          l = new Array(i)
        for (t = 0; t < i; ++t)
          for (l[t] = new Array(n), e = 0; e < n; ++e)
            l[t][e] = new r(e, t, a[t][e].walkable)
        return (s.nodes = l), s
      }),
      (t.exports = o)
  },
  function (t, e, n) {
    var r = n(7)
    function i(t) {
      r.call(this, t)
      var e = this.heuristic
      this.heuristic = function (t, n) {
        return 1e6 * e(t, n)
      }
    }
    ;(i.prototype = new r()), (i.prototype.constructor = i), (t.exports = i)
  },
  function (t, e, n) {
    var r = n(1),
      i = n(0)
    function o(t) {
      ;(t = t || {}),
        (this.allowDiagonal = t.allowDiagonal),
        (this.dontCrossCorners = t.dontCrossCorners),
        (this.diagonalMovement = t.diagonalMovement),
        this.diagonalMovement ||
          (this.allowDiagonal
            ? this.dontCrossCorners
              ? (this.diagonalMovement = i.OnlyWhenNoObstacles)
              : (this.diagonalMovement = i.IfAtMostOneObstacle)
            : (this.diagonalMovement = i.Never))
    }
    ;(o.prototype.findPath = function (t, e, n, i, o) {
      var a,
        s,
        l,
        u,
        h,
        c = [],
        p = this.diagonalMovement,
        f = o.getNodeAt(t, e),
        d = o.getNodeAt(n, i)
      for (c.push(f), f.opened = !0; c.length; ) {
        if ((((l = c.shift()).closed = !0), l === d)) return r.backtrace(d)
        for (u = 0, h = (a = o.getNeighbors(l, p)).length; u < h; ++u)
          (s = a[u]).closed ||
            s.opened ||
            (c.push(s), (s.opened = !0), (s.parent = l))
      }
      return []
    }),
      (t.exports = o)
  },
  function (t, e, n) {
    var r = n(7)
    function i(t) {
      r.call(this, t),
        (this.heuristic = function (t, e) {
          return 0
        })
    }
    ;(i.prototype = new r()), (i.prototype.constructor = i), (t.exports = i)
  },
  function (t, e, n) {
    var r = n(8)
    function i(t) {
      r.call(this, t)
      var e = this.heuristic
      this.heuristic = function (t, n) {
        return 1e6 * e(t, n)
      }
    }
    ;(i.prototype = new r()), (i.prototype.constructor = i), (t.exports = i)
  },
  function (t, e, n) {
    var r = n(1),
      i = n(0)
    function o(t) {
      ;(t = t || {}),
        (this.allowDiagonal = t.allowDiagonal),
        (this.dontCrossCorners = t.dontCrossCorners),
        (this.diagonalMovement = t.diagonalMovement),
        this.diagonalMovement ||
          (this.allowDiagonal
            ? this.dontCrossCorners
              ? (this.diagonalMovement = i.OnlyWhenNoObstacles)
              : (this.diagonalMovement = i.IfAtMostOneObstacle)
            : (this.diagonalMovement = i.Never))
    }
    ;(o.prototype.findPath = function (t, e, n, i, o) {
      var a,
        s,
        l,
        u,
        h,
        c = o.getNodeAt(t, e),
        p = o.getNodeAt(n, i),
        f = [],
        d = [],
        g = this.diagonalMovement
      for (
        f.push(c), c.opened = !0, c.by = 0, d.push(p), p.opened = !0, p.by = 1;
        f.length && d.length;

      ) {
        for (
          (l = f.shift()).closed = !0,
            u = 0,
            h = (a = o.getNeighbors(l, g)).length;
          u < h;
          ++u
        )
          if (!(s = a[u]).closed)
            if (s.opened) {
              if (1 === s.by) return r.biBacktrace(l, s)
            } else f.push(s), (s.parent = l), (s.opened = !0), (s.by = 0)
        for (
          (l = d.shift()).closed = !0,
            u = 0,
            h = (a = o.getNeighbors(l, g)).length;
          u < h;
          ++u
        )
          if (!(s = a[u]).closed)
            if (s.opened) {
              if (0 === s.by) return r.biBacktrace(s, l)
            } else d.push(s), (s.parent = l), (s.opened = !0), (s.by = 1)
      }
      return []
    }),
      (t.exports = o)
  },
  function (t, e, n) {
    var r = n(8)
    function i(t) {
      r.call(this, t),
        (this.heuristic = function (t, e) {
          return 0
        })
    }
    ;(i.prototype = new r()), (i.prototype.constructor = i), (t.exports = i)
  },
  function (t, e, n) {
    n(1)
    var r = n(2),
      i = n(6),
      o = n(0)
    function a(t) {
      ;(t = t || {}),
        (this.allowDiagonal = t.allowDiagonal),
        (this.dontCrossCorners = t.dontCrossCorners),
        (this.diagonalMovement = t.diagonalMovement),
        (this.heuristic = t.heuristic || r.manhattan),
        (this.weight = t.weight || 1),
        (this.trackRecursion = t.trackRecursion || !1),
        (this.timeLimit = t.timeLimit || 1 / 0),
        this.diagonalMovement ||
          (this.allowDiagonal
            ? this.dontCrossCorners
              ? (this.diagonalMovement = o.OnlyWhenNoObstacles)
              : (this.diagonalMovement = o.IfAtMostOneObstacle)
            : (this.diagonalMovement = o.Never)),
        this.diagonalMovement === o.Never
          ? (this.heuristic = t.heuristic || r.manhattan)
          : (this.heuristic = t.heuristic || r.octile)
    }
    ;(a.prototype.findPath = function (t, e, n, r, o) {
      var a,
        s,
        l,
        u = new Date().getTime(),
        h = function (t, e) {
          return this.heuristic(Math.abs(e.x - t.x), Math.abs(e.y - t.y))
        }.bind(this),
        c = function (t, e, n, r, a) {
          if (
            this.timeLimit > 0 &&
            new Date().getTime() - u > 1e3 * this.timeLimit
          )
            return 1 / 0
          var s,
            l,
            p,
            d,
            g = e + h(t, f) * this.weight
          if (g > n) return g
          if (t == f) return (r[a] = [t.x, t.y]), t
          var v,
            y,
            b = o.getNeighbors(t, this.diagonalMovement)
          for (p = 0, s = 1 / 0; (d = b[p]); ++p) {
            if (
              (this.trackRecursion &&
                ((d.retainCount = d.retainCount + 1 || 1),
                !0 !== d.tested && (d.tested = !0)),
              (l = c(
                d,
                e +
                  ((y = d), (v = t).x === y.x || v.y === y.y ? 1 : Math.SQRT2),
                n,
                r,
                a + 1
              )) instanceof i)
            )
              return (r[a] = [t.x, t.y]), l
            this.trackRecursion && 0 === --d.retainCount && (d.tested = !1),
              l < s && (s = l)
          }
          return s
        }.bind(this),
        p = o.getNodeAt(t, e),
        f = o.getNodeAt(n, r),
        d = h(p, f)
      for (a = 0; ; ++a) {
        if ((l = c(p, 0, d, (s = []), 0)) === 1 / 0) return []
        if (l instanceof i) return s
        d = l
      }
      return []
    }),
      (t.exports = a)
  },
  function (t, e, n) {
    var r = n(0),
      i = n(23),
      o = n(24),
      a = n(25),
      s = n(26)
    t.exports = function (t) {
      return (t = t || {}).diagonalMovement === r.Never
        ? new i(t)
        : t.diagonalMovement === r.Always
        ? new o(t)
        : t.diagonalMovement === r.OnlyWhenNoObstacles
        ? new a(t)
        : new s(t)
    }
  },
  function (t, e, n) {
    var r = n(4),
      i = n(0)
    function o(t) {
      r.call(this, t)
    }
    ;(o.prototype = new r()),
      (o.prototype.constructor = o),
      (o.prototype._jump = function (t, e, n, r) {
        var i = this.grid,
          o = t - n,
          a = e - r
        if (!i.isWalkableAt(t, e)) return null
        if (
          (!0 === this.trackJumpRecursion && (i.getNodeAt(t, e).tested = !0),
          i.getNodeAt(t, e) === this.endNode)
        )
          return [t, e]
        if (0 !== o) {
          if (
            (i.isWalkableAt(t, e - 1) && !i.isWalkableAt(t - o, e - 1)) ||
            (i.isWalkableAt(t, e + 1) && !i.isWalkableAt(t - o, e + 1))
          )
            return [t, e]
        } else {
          if (0 === a)
            throw new Error(
              "Only horizontal and vertical movements are allowed"
            )
          if (
            (i.isWalkableAt(t - 1, e) && !i.isWalkableAt(t - 1, e - a)) ||
            (i.isWalkableAt(t + 1, e) && !i.isWalkableAt(t + 1, e - a))
          )
            return [t, e]
          if (this._jump(t + 1, e, t, e) || this._jump(t - 1, e, t, e))
            return [t, e]
        }
        return this._jump(t + o, e + a, t, e)
      }),
      (o.prototype._findNeighbors = function (t) {
        var e,
          n,
          r,
          o,
          a,
          s,
          l,
          u,
          h = t.parent,
          c = t.x,
          p = t.y,
          f = this.grid,
          d = []
        if (h)
          (e = h.x),
            (n = h.y),
            (r = (c - e) / Math.max(Math.abs(c - e), 1)),
            (o = (p - n) / Math.max(Math.abs(p - n), 1)),
            0 !== r
              ? (f.isWalkableAt(c, p - 1) && d.push([c, p - 1]),
                f.isWalkableAt(c, p + 1) && d.push([c, p + 1]),
                f.isWalkableAt(c + r, p) && d.push([c + r, p]))
              : 0 !== o &&
                (f.isWalkableAt(c - 1, p) && d.push([c - 1, p]),
                f.isWalkableAt(c + 1, p) && d.push([c + 1, p]),
                f.isWalkableAt(c, p + o) && d.push([c, p + o]))
        else
          for (l = 0, u = (a = f.getNeighbors(t, i.Never)).length; l < u; ++l)
            (s = a[l]), d.push([s.x, s.y])
        return d
      }),
      (t.exports = o)
  },
  function (t, e, n) {
    var r = n(4),
      i = n(0)
    function o(t) {
      r.call(this, t)
    }
    ;(o.prototype = new r()),
      (o.prototype.constructor = o),
      (o.prototype._jump = function (t, e, n, r) {
        var i = this.grid,
          o = t - n,
          a = e - r
        if (!i.isWalkableAt(t, e)) return null
        if (
          (!0 === this.trackJumpRecursion && (i.getNodeAt(t, e).tested = !0),
          i.getNodeAt(t, e) === this.endNode)
        )
          return [t, e]
        if (0 !== o && 0 !== a) {
          if (
            (i.isWalkableAt(t - o, e + a) && !i.isWalkableAt(t - o, e)) ||
            (i.isWalkableAt(t + o, e - a) && !i.isWalkableAt(t, e - a))
          )
            return [t, e]
          if (this._jump(t + o, e, t, e) || this._jump(t, e + a, t, e))
            return [t, e]
        } else if (0 !== o) {
          if (
            (i.isWalkableAt(t + o, e + 1) && !i.isWalkableAt(t, e + 1)) ||
            (i.isWalkableAt(t + o, e - 1) && !i.isWalkableAt(t, e - 1))
          )
            return [t, e]
        } else if (
          (i.isWalkableAt(t + 1, e + a) && !i.isWalkableAt(t + 1, e)) ||
          (i.isWalkableAt(t - 1, e + a) && !i.isWalkableAt(t - 1, e))
        )
          return [t, e]
        return this._jump(t + o, e + a, t, e)
      }),
      (o.prototype._findNeighbors = function (t) {
        var e,
          n,
          r,
          o,
          a,
          s,
          l,
          u,
          h = t.parent,
          c = t.x,
          p = t.y,
          f = this.grid,
          d = []
        if (h)
          (e = h.x),
            (n = h.y),
            (r = (c - e) / Math.max(Math.abs(c - e), 1)),
            (o = (p - n) / Math.max(Math.abs(p - n), 1)),
            0 !== r && 0 !== o
              ? (f.isWalkableAt(c, p + o) && d.push([c, p + o]),
                f.isWalkableAt(c + r, p) && d.push([c + r, p]),
                f.isWalkableAt(c + r, p + o) && d.push([c + r, p + o]),
                f.isWalkableAt(c - r, p) || d.push([c - r, p + o]),
                f.isWalkableAt(c, p - o) || d.push([c + r, p - o]))
              : 0 === r
              ? (f.isWalkableAt(c, p + o) && d.push([c, p + o]),
                f.isWalkableAt(c + 1, p) || d.push([c + 1, p + o]),
                f.isWalkableAt(c - 1, p) || d.push([c - 1, p + o]))
              : (f.isWalkableAt(c + r, p) && d.push([c + r, p]),
                f.isWalkableAt(c, p + 1) || d.push([c + r, p + 1]),
                f.isWalkableAt(c, p - 1) || d.push([c + r, p - 1]))
        else
          for (l = 0, u = (a = f.getNeighbors(t, i.Always)).length; l < u; ++l)
            (s = a[l]), d.push([s.x, s.y])
        return d
      }),
      (t.exports = o)
  },
  function (t, e, n) {
    var r = n(4),
      i = n(0)
    function o(t) {
      r.call(this, t)
    }
    ;(o.prototype = new r()),
      (o.prototype.constructor = o),
      (o.prototype._jump = function (t, e, n, r) {
        var i = this.grid,
          o = t - n,
          a = e - r
        if (!i.isWalkableAt(t, e)) return null
        if (
          (!0 === this.trackJumpRecursion && (i.getNodeAt(t, e).tested = !0),
          i.getNodeAt(t, e) === this.endNode)
        )
          return [t, e]
        if (0 !== o && 0 !== a) {
          if (this._jump(t + o, e, t, e) || this._jump(t, e + a, t, e))
            return [t, e]
        } else if (0 !== o) {
          if (
            (i.isWalkableAt(t, e - 1) && !i.isWalkableAt(t - o, e - 1)) ||
            (i.isWalkableAt(t, e + 1) && !i.isWalkableAt(t - o, e + 1))
          )
            return [t, e]
        } else if (
          0 !== a &&
          ((i.isWalkableAt(t - 1, e) && !i.isWalkableAt(t - 1, e - a)) ||
            (i.isWalkableAt(t + 1, e) && !i.isWalkableAt(t + 1, e - a)))
        )
          return [t, e]
        return i.isWalkableAt(t + o, e) && i.isWalkableAt(t, e + a)
          ? this._jump(t + o, e + a, t, e)
          : null
      }),
      (o.prototype._findNeighbors = function (t) {
        var e,
          n,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c = t.parent,
          p = t.x,
          f = t.y,
          d = this.grid,
          g = []
        if (c) {
          if (
            ((e = c.x),
            (n = c.y),
            (r = (p - e) / Math.max(Math.abs(p - e), 1)),
            (o = (f - n) / Math.max(Math.abs(f - n), 1)),
            0 !== r && 0 !== o)
          )
            d.isWalkableAt(p, f + o) && g.push([p, f + o]),
              d.isWalkableAt(p + r, f) && g.push([p + r, f]),
              d.isWalkableAt(p, f + o) &&
                d.isWalkableAt(p + r, f) &&
                g.push([p + r, f + o])
          else if (0 !== r) {
            h = d.isWalkableAt(p + r, f)
            var v = d.isWalkableAt(p, f + 1),
              y = d.isWalkableAt(p, f - 1)
            h &&
              (g.push([p + r, f]),
              v && g.push([p + r, f + 1]),
              y && g.push([p + r, f - 1])),
              v && g.push([p, f + 1]),
              y && g.push([p, f - 1])
          } else if (0 !== o) {
            h = d.isWalkableAt(p, f + o)
            var b = d.isWalkableAt(p + 1, f),
              m = d.isWalkableAt(p - 1, f)
            h &&
              (g.push([p, f + o]),
              b && g.push([p + 1, f + o]),
              m && g.push([p - 1, f + o])),
              b && g.push([p + 1, f]),
              m && g.push([p - 1, f])
          }
        } else
          for (
            l = 0, u = (a = d.getNeighbors(t, i.OnlyWhenNoObstacles)).length;
            l < u;
            ++l
          )
            (s = a[l]), g.push([s.x, s.y])
        return g
      }),
      (t.exports = o)
  },
  function (t, e, n) {
    var r = n(4),
      i = n(0)
    function o(t) {
      r.call(this, t)
    }
    ;(o.prototype = new r()),
      (o.prototype.constructor = o),
      (o.prototype._jump = function (t, e, n, r) {
        var i = this.grid,
          o = t - n,
          a = e - r
        if (!i.isWalkableAt(t, e)) return null
        if (
          (!0 === this.trackJumpRecursion && (i.getNodeAt(t, e).tested = !0),
          i.getNodeAt(t, e) === this.endNode)
        )
          return [t, e]
        if (0 !== o && 0 !== a) {
          if (
            (i.isWalkableAt(t - o, e + a) && !i.isWalkableAt(t - o, e)) ||
            (i.isWalkableAt(t + o, e - a) && !i.isWalkableAt(t, e - a))
          )
            return [t, e]
          if (this._jump(t + o, e, t, e) || this._jump(t, e + a, t, e))
            return [t, e]
        } else if (0 !== o) {
          if (
            (i.isWalkableAt(t + o, e + 1) && !i.isWalkableAt(t, e + 1)) ||
            (i.isWalkableAt(t + o, e - 1) && !i.isWalkableAt(t, e - 1))
          )
            return [t, e]
        } else if (
          (i.isWalkableAt(t + 1, e + a) && !i.isWalkableAt(t + 1, e)) ||
          (i.isWalkableAt(t - 1, e + a) && !i.isWalkableAt(t - 1, e))
        )
          return [t, e]
        return i.isWalkableAt(t + o, e) || i.isWalkableAt(t, e + a)
          ? this._jump(t + o, e + a, t, e)
          : null
      }),
      (o.prototype._findNeighbors = function (t) {
        var e,
          n,
          r,
          o,
          a,
          s,
          l,
          u,
          h = t.parent,
          c = t.x,
          p = t.y,
          f = this.grid,
          d = []
        if (h)
          (e = h.x),
            (n = h.y),
            (r = (c - e) / Math.max(Math.abs(c - e), 1)),
            (o = (p - n) / Math.max(Math.abs(p - n), 1)),
            0 !== r && 0 !== o
              ? (f.isWalkableAt(c, p + o) && d.push([c, p + o]),
                f.isWalkableAt(c + r, p) && d.push([c + r, p]),
                (f.isWalkableAt(c, p + o) || f.isWalkableAt(c + r, p)) &&
                  d.push([c + r, p + o]),
                !f.isWalkableAt(c - r, p) &&
                  f.isWalkableAt(c, p + o) &&
                  d.push([c - r, p + o]),
                !f.isWalkableAt(c, p - o) &&
                  f.isWalkableAt(c + r, p) &&
                  d.push([c + r, p - o]))
              : 0 === r
              ? f.isWalkableAt(c, p + o) &&
                (d.push([c, p + o]),
                f.isWalkableAt(c + 1, p) || d.push([c + 1, p + o]),
                f.isWalkableAt(c - 1, p) || d.push([c - 1, p + o]))
              : f.isWalkableAt(c + r, p) &&
                (d.push([c + r, p]),
                f.isWalkableAt(c, p + 1) || d.push([c + r, p + 1]),
                f.isWalkableAt(c, p - 1) || d.push([c + r, p - 1]))
        else
          for (
            l = 0, u = (a = f.getNeighbors(t, i.IfAtMostOneObstacle)).length;
            l < u;
            ++l
          )
            (s = a[l]), d.push([s.x, s.y])
        return d
      }),
      (t.exports = o)
  },
  function (t, e, n) {
    "use strict"
    n.r(e)
    var r = n(9),
      i = n.n(r)
    function o(t, e, n, r, i, o, a) {
      try {
        var s = t[o](a),
          l = s.value
      } catch (u) {
        return void n(u)
      }
      s.done ? e(l) : Promise.resolve(l).then(r, i)
    }
    function a(t) {
      return function () {
        var e = this,
          n = arguments
        return new Promise(function (r, i) {
          var a = t.apply(e, n)
          function s(t) {
            o(a, r, i, s, l, "next", t)
          }
          function l(t) {
            o(a, r, i, s, l, "throw", t)
          }
          s(void 0)
        })
      }
    }
    var s,
      l,
      u = n(5)
    function h() {
      return (h = a(
        i.a.mark(function t() {
          return i.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt("return", Promise.resolve())
                case 1:
                case "end":
                  return t.stop()
              }
          }, t)
        })
      )).apply(this, arguments)
    }
    function c(t, e) {
      var n = l.findPath(
        Math.trunc(t[2] / 2),
        Math.trunc(t[0] / 2),
        Math.trunc(e[2] / 2),
        Math.trunc(e[0] / 2),
        s.clone()
      )
      return n.length, n
    }
    var p = {
        initPathfinding: function () {
          return h.apply(this, arguments)
        },
        startPathFinding: function (t, e) {
          return (
            (s = new u.Grid(t, e)),
            (l = new u.BiBestFirstFinder({
              heuristic: u.Heuristic.octile,
              allowDiagonal: !0,
            })),
            !0
          )
        },
        setObstacles: function (t) {
          return (
            t.forEach(function (t) {
              var e = t.x,
                n = t.y
              s.setWalkableAt(n, e, !1)
            }),
            !0
          )
        },
        findPath: c,
        findPathAsync: function (t, e) {
          return new Promise(function (n) {
            n(c(t, e))
          })
        },
      },
      f = self
    f.addEventListener("message", function (t) {
      if (t.data.pathfinding) {
        var e = t.data.pathfinding,
          n = e.operation,
          r = e.payload
        switch (n) {
          case "start":
            p.startPathFinding(r.width, r.height)
            break
          case "setObstacles":
            p.setObstacles(r.obstacles)
            break
          case "findPath":
            var i = p.findPath(r.from, r.to)
            f.postMessage({
              pathfindingResult: { operation: "findPath", result: i },
            })
        }
      }
    })
    e.default = {}
  },
])
//# sourceMappingURL=5b4d96d23a5943112a7b.worker.js.map
