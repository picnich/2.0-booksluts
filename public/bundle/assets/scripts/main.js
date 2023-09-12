(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@barba/core/dist/barba.umd.js
  var require_barba_umd = __commonJS({
    "node_modules/@barba/core/dist/barba.umd.js"(exports, module) {
      !function(t, n) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n();
      }(exports, function() {
        function t(t2, n2) {
          for (var r2 = 0; r2 < n2.length; r2++) {
            var e2 = n2[r2];
            e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t2, e2.key, e2);
          }
        }
        function n(n2, r2, e2) {
          return r2 && t(n2.prototype, r2), e2 && t(n2, e2), n2;
        }
        function r() {
          return (r = Object.assign || function(t2) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var r2 = arguments[n2];
              for (var e2 in r2)
                Object.prototype.hasOwnProperty.call(r2, e2) && (t2[e2] = r2[e2]);
            }
            return t2;
          }).apply(this, arguments);
        }
        function e(t2, n2) {
          t2.prototype = Object.create(n2.prototype), t2.prototype.constructor = t2, t2.__proto__ = n2;
        }
        function i(t2) {
          return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          })(t2);
        }
        function o(t2, n2) {
          return (o = Object.setPrototypeOf || function(t3, n3) {
            return t3.__proto__ = n3, t3;
          })(t2, n2);
        }
        function u(t2, n2, r2) {
          return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }() ? Reflect.construct : function(t3, n3, r3) {
            var e2 = [null];
            e2.push.apply(e2, n3);
            var i2 = new (Function.bind.apply(t3, e2))();
            return r3 && o(i2, r3.prototype), i2;
          }).apply(null, arguments);
        }
        function f(t2) {
          var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return (f = function(t3) {
            if (null === t3 || -1 === Function.toString.call(t3).indexOf("[native code]"))
              return t3;
            if ("function" != typeof t3)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n2) {
              if (n2.has(t3))
                return n2.get(t3);
              n2.set(t3, r2);
            }
            function r2() {
              return u(t3, arguments, i(this).constructor);
            }
            return r2.prototype = Object.create(t3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), o(r2, t3);
          })(t2);
        }
        function s(t2, n2) {
          try {
            var r2 = t2();
          } catch (t3) {
            return n2(t3);
          }
          return r2 && r2.then ? r2.then(void 0, n2) : r2;
        }
        "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var c, a = "2.9.7", h = function() {
        };
        !function(t2) {
          t2[t2.off = 0] = "off", t2[t2.error = 1] = "error", t2[t2.warning = 2] = "warning", t2[t2.info = 3] = "info", t2[t2.debug = 4] = "debug";
        }(c || (c = {}));
        var v = c.off, l = function() {
          function t2(t3) {
            this.t = t3;
          }
          t2.getLevel = function() {
            return v;
          }, t2.setLevel = function(t3) {
            return v = c[t3];
          };
          var n2 = t2.prototype;
          return n2.error = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.error, c.error, n3);
          }, n2.warn = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.warn, c.warning, n3);
          }, n2.info = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.info, c.info, n3);
          }, n2.debug = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.log, c.debug, n3);
          }, n2.i = function(n3, r2, e2) {
            r2 <= t2.getLevel() && n3.apply(console, ["[" + this.t + "] "].concat(e2));
          }, t2;
        }(), d = O, m = E2, p = g, w = x, b = T, y = "/", P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
        function g(t2, n2) {
          for (var r2, e2 = [], i2 = 0, o2 = 0, u2 = "", f2 = n2 && n2.delimiter || y, s2 = n2 && n2.whitelist || void 0, c2 = false; null !== (r2 = P.exec(t2)); ) {
            var a2 = r2[0], h2 = r2[1], v2 = r2.index;
            if (u2 += t2.slice(o2, v2), o2 = v2 + a2.length, h2)
              u2 += h2[1], c2 = true;
            else {
              var l2 = "", d2 = r2[2], m2 = r2[3], p2 = r2[4], w2 = r2[5];
              if (!c2 && u2.length) {
                var b2 = u2.length - 1, g2 = u2[b2];
                (!s2 || s2.indexOf(g2) > -1) && (l2 = g2, u2 = u2.slice(0, b2));
              }
              u2 && (e2.push(u2), u2 = "", c2 = false);
              var E3 = m2 || p2, x2 = l2 || f2;
              e2.push({ name: d2 || i2++, prefix: l2, delimiter: x2, optional: "?" === w2 || "*" === w2, repeat: "+" === w2 || "*" === w2, pattern: E3 ? A2(E3) : "[^" + k(x2 === f2 ? x2 : x2 + f2) + "]+?" });
            }
          }
          return (u2 || o2 < t2.length) && e2.push(u2 + t2.substr(o2)), e2;
        }
        function E2(t2, n2) {
          return function(r2, e2) {
            var i2 = t2.exec(r2);
            if (!i2)
              return false;
            for (var o2 = i2[0], u2 = i2.index, f2 = {}, s2 = e2 && e2.decode || decodeURIComponent, c2 = 1; c2 < i2.length; c2++)
              if (void 0 !== i2[c2]) {
                var a2 = n2[c2 - 1];
                f2[a2.name] = a2.repeat ? i2[c2].split(a2.delimiter).map(function(t3) {
                  return s2(t3, a2);
                }) : s2(i2[c2], a2);
              }
            return { path: o2, index: u2, params: f2 };
          };
        }
        function x(t2, n2) {
          for (var r2 = new Array(t2.length), e2 = 0; e2 < t2.length; e2++)
            "object" == typeof t2[e2] && (r2[e2] = new RegExp("^(?:" + t2[e2].pattern + ")$", R(n2)));
          return function(n3, e3) {
            for (var i2 = "", o2 = e3 && e3.encode || encodeURIComponent, u2 = !e3 || false !== e3.validate, f2 = 0; f2 < t2.length; f2++) {
              var s2 = t2[f2];
              if ("string" != typeof s2) {
                var c2, a2 = n3 ? n3[s2.name] : void 0;
                if (Array.isArray(a2)) {
                  if (!s2.repeat)
                    throw new TypeError('Expected "' + s2.name + '" to not repeat, but got array');
                  if (0 === a2.length) {
                    if (s2.optional)
                      continue;
                    throw new TypeError('Expected "' + s2.name + '" to not be empty');
                  }
                  for (var h2 = 0; h2 < a2.length; h2++) {
                    if (c2 = o2(a2[h2], s2), u2 && !r2[f2].test(c2))
                      throw new TypeError('Expected all "' + s2.name + '" to match "' + s2.pattern + '"');
                    i2 += (0 === h2 ? s2.prefix : s2.delimiter) + c2;
                  }
                } else if ("string" != typeof a2 && "number" != typeof a2 && "boolean" != typeof a2) {
                  if (!s2.optional)
                    throw new TypeError('Expected "' + s2.name + '" to be ' + (s2.repeat ? "an array" : "a string"));
                } else {
                  if (c2 = o2(String(a2), s2), u2 && !r2[f2].test(c2))
                    throw new TypeError('Expected "' + s2.name + '" to match "' + s2.pattern + '", but got "' + c2 + '"');
                  i2 += s2.prefix + c2;
                }
              } else
                i2 += s2;
            }
            return i2;
          };
        }
        function k(t2) {
          return t2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function A2(t2) {
          return t2.replace(/([=!:$/()])/g, "\\$1");
        }
        function R(t2) {
          return t2 && t2.sensitive ? "" : "i";
        }
        function T(t2, n2, r2) {
          for (var e2 = (r2 = r2 || {}).strict, i2 = false !== r2.start, o2 = false !== r2.end, u2 = r2.delimiter || y, f2 = [].concat(r2.endsWith || []).map(k).concat("$").join("|"), s2 = i2 ? "^" : "", c2 = 0; c2 < t2.length; c2++) {
            var a2 = t2[c2];
            if ("string" == typeof a2)
              s2 += k(a2);
            else {
              var h2 = a2.repeat ? "(?:" + a2.pattern + ")(?:" + k(a2.delimiter) + "(?:" + a2.pattern + "))*" : a2.pattern;
              n2 && n2.push(a2), s2 += a2.optional ? a2.prefix ? "(?:" + k(a2.prefix) + "(" + h2 + "))?" : "(" + h2 + ")?" : k(a2.prefix) + "(" + h2 + ")";
            }
          }
          if (o2)
            e2 || (s2 += "(?:" + k(u2) + ")?"), s2 += "$" === f2 ? "$" : "(?=" + f2 + ")";
          else {
            var v2 = t2[t2.length - 1], l2 = "string" == typeof v2 ? v2[v2.length - 1] === u2 : void 0 === v2;
            e2 || (s2 += "(?:" + k(u2) + "(?=" + f2 + "))?"), l2 || (s2 += "(?=" + k(u2) + "|" + f2 + ")");
          }
          return new RegExp(s2, R(r2));
        }
        function O(t2, n2, r2) {
          return t2 instanceof RegExp ? function(t3, n3) {
            if (!n3)
              return t3;
            var r3 = t3.source.match(/\((?!\?)/g);
            if (r3)
              for (var e2 = 0; e2 < r3.length; e2++)
                n3.push({ name: e2, prefix: null, delimiter: null, optional: false, repeat: false, pattern: null });
            return t3;
          }(t2, n2) : Array.isArray(t2) ? function(t3, n3, r3) {
            for (var e2 = [], i2 = 0; i2 < t3.length; i2++)
              e2.push(O(t3[i2], n3, r3).source);
            return new RegExp("(?:" + e2.join("|") + ")", R(r3));
          }(t2, n2, r2) : function(t3, n3, r3) {
            return T(g(t3, r3), n3, r3);
          }(t2, n2, r2);
        }
        d.match = function(t2, n2) {
          var r2 = [];
          return E2(O(t2, r2, n2), r2);
        }, d.regexpToFunction = m, d.parse = p, d.compile = function(t2, n2) {
          return x(g(t2, n2), n2);
        }, d.tokensToFunction = w, d.tokensToRegExp = b;
        var S = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, j = new (function() {
          function t2() {
            this.o = S, this.u = new DOMParser();
          }
          var n2 = t2.prototype;
          return n2.toString = function(t3) {
            return t3.outerHTML;
          }, n2.toDocument = function(t3) {
            return this.u.parseFromString(t3, "text/html");
          }, n2.toElement = function(t3) {
            var n3 = document.createElement("div");
            return n3.innerHTML = t3, n3;
          }, n2.getHtml = function(t3) {
            return void 0 === t3 && (t3 = document), this.toString(t3.documentElement);
          }, n2.getWrapper = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
          }, n2.getContainer = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
          }, n2.removeContainer = function(t3) {
            document.body.contains(t3) && t3.parentNode.removeChild(t3);
          }, n2.addContainer = function(t3, n3) {
            var r2 = this.getContainer();
            r2 ? this.s(t3, r2) : n3.appendChild(t3);
          }, n2.getNamespace = function(t3) {
            void 0 === t3 && (t3 = document);
            var n3 = t3.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n3 ? n3.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
          }, n2.getHref = function(t3) {
            if (t3.tagName && "a" === t3.tagName.toLowerCase()) {
              if ("string" == typeof t3.href)
                return t3.href;
              var n3 = t3.getAttribute("href") || t3.getAttribute("xlink:href");
              if (n3)
                return this.resolveUrl(n3.baseVal || n3);
            }
            return null;
          }, n2.resolveUrl = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            var e2 = n3.length;
            if (0 === e2)
              throw new Error("resolveUrl requires at least one argument; got none.");
            var i2 = document.createElement("base");
            if (i2.href = arguments[0], 1 === e2)
              return i2.href;
            var o2 = document.getElementsByTagName("head")[0];
            o2.insertBefore(i2, o2.firstChild);
            for (var u2, f2 = document.createElement("a"), s2 = 1; s2 < e2; s2++)
              f2.href = arguments[s2], i2.href = u2 = f2.href;
            return o2.removeChild(i2), u2;
          }, n2.s = function(t3, n3) {
            n3.parentNode.insertBefore(t3, n3.nextSibling);
          }, t2;
        }())(), M = new (function() {
          function t2() {
            this.h = [], this.v = -1;
          }
          var e2 = t2.prototype;
          return e2.init = function(t3, n2) {
            this.l = "barba";
            var r2 = { ns: n2, scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(r2), this.v = 0;
            var e3 = { from: this.l, index: 0, states: [].concat(this.h) };
            window.history && window.history.replaceState(e3, "", t3);
          }, e2.change = function(t3, n2, r2) {
            if (r2 && r2.state) {
              var e3 = r2.state, i2 = e3.index;
              n2 = this.m(this.v - i2), this.replace(e3.states), this.v = i2;
            } else
              this.add(t3, n2);
            return n2;
          }, e2.add = function(t3, n2) {
            var r2 = this.size, e3 = this.p(n2), i2 = { ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(i2), this.v = r2;
            var o2 = { from: this.l, index: r2, states: [].concat(this.h) };
            switch (e3) {
              case "push":
                window.history && window.history.pushState(o2, "", t3);
                break;
              case "replace":
                window.history && window.history.replaceState(o2, "", t3);
            }
          }, e2.update = function(t3, n2) {
            var e3 = n2 || this.v, i2 = r({}, this.get(e3), {}, t3);
            this.set(e3, i2);
          }, e2.remove = function(t3) {
            t3 ? this.h.splice(t3, 1) : this.h.pop(), this.v--;
          }, e2.clear = function() {
            this.h = [], this.v = -1;
          }, e2.replace = function(t3) {
            this.h = t3;
          }, e2.get = function(t3) {
            return this.h[t3];
          }, e2.set = function(t3, n2) {
            return this.h[t3] = n2;
          }, e2.p = function(t3) {
            var n2 = "push", r2 = t3, e3 = S.prefix + "-" + S.history;
            return r2.hasAttribute && r2.hasAttribute(e3) && (n2 = r2.getAttribute(e3)), n2;
          }, e2.m = function(t3) {
            return Math.abs(t3) > 1 ? t3 > 0 ? "forward" : "back" : 0 === t3 ? "popstate" : t3 > 0 ? "back" : "forward";
          }, n(t2, [{ key: "current", get: function() {
            return this.h[this.v];
          } }, { key: "state", get: function() {
            return this.h[this.h.length - 1];
          } }, { key: "previous", get: function() {
            return this.v < 1 ? null : this.h[this.v - 1];
          } }, { key: "size", get: function() {
            return this.h.length;
          } }]), t2;
        }())(), L = function(t2, n2) {
          try {
            var r2 = function() {
              if (!n2.next.html)
                return Promise.resolve(t2).then(function(t3) {
                  var r3 = n2.next;
                  if (t3) {
                    var e2 = j.toElement(t3);
                    r3.namespace = j.getNamespace(e2), r3.container = j.getContainer(e2), r3.html = t3, M.update({ ns: r3.namespace });
                    var i2 = j.toDocument(t3);
                    document.title = i2.title;
                  }
                });
            }();
            return Promise.resolve(r2 && r2.then ? r2.then(function() {
            }) : void 0);
          } catch (t3) {
            return Promise.reject(t3);
          }
        }, $ = d, _ = { __proto__: null, update: L, nextTick: function() {
          return new Promise(function(t2) {
            window.requestAnimationFrame(t2);
          });
        }, pathToRegexp: $ }, q = function() {
          return window.location.origin;
        }, B2 = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).port;
        }, U = function(t2) {
          var n2, r2 = t2.match(/:\d+/);
          if (null === r2)
            /^http/.test(t2) && (n2 = 80), /^https/.test(t2) && (n2 = 443);
          else {
            var e2 = r2[0].substring(1);
            n2 = parseInt(e2, 10);
          }
          var i2, o2 = t2.replace(q(), ""), u2 = {}, f2 = o2.indexOf("#");
          f2 >= 0 && (i2 = o2.slice(f2 + 1), o2 = o2.slice(0, f2));
          var s2 = o2.indexOf("?");
          return s2 >= 0 && (u2 = D(o2.slice(s2 + 1)), o2 = o2.slice(0, s2)), { hash: i2, path: o2, port: n2, query: u2 };
        }, D = function(t2) {
          return t2.split("&").reduce(function(t3, n2) {
            var r2 = n2.split("=");
            return t3[r2[0]] = r2[1], t3;
          }, {});
        }, F = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), t2.replace(/(\/#.*|\/|#.*)$/, "");
        }, H = { __proto__: null, getHref: function() {
          return window.location.href;
        }, getOrigin: q, getPort: B2, getPath: function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).path;
        }, parse: U, parseQuery: D, clean: F };
        function I(t2, n2, r2) {
          return void 0 === n2 && (n2 = 2e3), new Promise(function(e2, i2) {
            var o2 = new XMLHttpRequest();
            o2.onreadystatechange = function() {
              if (o2.readyState === XMLHttpRequest.DONE) {
                if (200 === o2.status)
                  e2(o2.responseText);
                else if (o2.status) {
                  var n3 = { status: o2.status, statusText: o2.statusText };
                  r2(t2, n3), i2(n3);
                }
              }
            }, o2.ontimeout = function() {
              var e3 = new Error("Timeout error [" + n2 + "]");
              r2(t2, e3), i2(e3);
            }, o2.onerror = function() {
              var n3 = new Error("Fetch error");
              r2(t2, n3), i2(n3);
            }, o2.open("GET", t2), o2.timeout = n2, o2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o2.setRequestHeader("x-barba", "yes"), o2.send();
          });
        }
        var C2 = function(t2) {
          return !!t2 && ("object" == typeof t2 || "function" == typeof t2) && "function" == typeof t2.then;
        };
        function N(t2, n2) {
          return void 0 === n2 && (n2 = {}), function() {
            for (var r2 = arguments.length, e2 = new Array(r2), i2 = 0; i2 < r2; i2++)
              e2[i2] = arguments[i2];
            var o2 = false, u2 = new Promise(function(r3, i3) {
              n2.async = function() {
                return o2 = true, function(t3, n3) {
                  t3 ? i3(t3) : r3(n3);
                };
              };
              var u3 = t2.apply(n2, e2);
              o2 || (C2(u3) ? u3.then(r3, i3) : r3(u3));
            });
            return u2;
          };
        }
        var X = new (function(t2) {
          function n2() {
            var n3;
            return (n3 = t2.call(this) || this).logger = new l("@barba/core"), n3.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n3.registered = /* @__PURE__ */ new Map(), n3.init(), n3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            var t3 = this;
            this.registered.clear(), this.all.forEach(function(n3) {
              t3[n3] || (t3[n3] = function(r3, e2) {
                t3.registered.has(n3) || t3.registered.set(n3, /* @__PURE__ */ new Set()), t3.registered.get(n3).add({ ctx: e2 || {}, fn: r3 });
              });
            });
          }, r2.do = function(t3) {
            for (var n3 = this, r3 = arguments.length, e2 = new Array(r3 > 1 ? r3 - 1 : 0), i2 = 1; i2 < r3; i2++)
              e2[i2 - 1] = arguments[i2];
            if (this.registered.has(t3)) {
              var o2 = Promise.resolve();
              return this.registered.get(t3).forEach(function(t4) {
                o2 = o2.then(function() {
                  return N(t4.fn, t4.ctx).apply(void 0, e2);
                });
              }), o2.catch(function(r4) {
                n3.logger.debug("Hook error [" + t3 + "]"), n3.logger.error(r4);
              });
            }
            return Promise.resolve();
          }, r2.clear = function() {
            var t3 = this;
            this.all.forEach(function(n3) {
              delete t3[n3];
            }), this.init();
          }, r2.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t3 = [];
            this.registered.forEach(function(n3, r3) {
              return t3.push(r3);
            }), this.logger.info("Registered hooks: " + t3.join(","));
          }, n2;
        }(h))(), z = function() {
          function t2(t3) {
            if (this.P = [], "boolean" == typeof t3)
              this.g = t3;
            else {
              var n2 = Array.isArray(t3) ? t3 : [t3];
              this.P = n2.map(function(t4) {
                return $(t4);
              });
            }
          }
          return t2.prototype.checkHref = function(t3) {
            if ("boolean" == typeof this.g)
              return this.g;
            var n2 = U(t3).path;
            return this.P.some(function(t4) {
              return null !== t4.exec(n2);
            });
          }, t2;
        }(), G = function(t2) {
          function n2(n3) {
            var r2;
            return (r2 = t2.call(this, n3) || this).k = /* @__PURE__ */ new Map(), r2;
          }
          e(n2, t2);
          var i2 = n2.prototype;
          return i2.set = function(t3, n3, r2) {
            return this.k.set(t3, { action: r2, request: n3 }), { action: r2, request: n3 };
          }, i2.get = function(t3) {
            return this.k.get(t3);
          }, i2.getRequest = function(t3) {
            return this.k.get(t3).request;
          }, i2.getAction = function(t3) {
            return this.k.get(t3).action;
          }, i2.has = function(t3) {
            return !this.checkHref(t3) && this.k.has(t3);
          }, i2.delete = function(t3) {
            return this.k.delete(t3);
          }, i2.update = function(t3, n3) {
            var e2 = r({}, this.k.get(t3), {}, n3);
            return this.k.set(t3, e2), e2;
          }, n2;
        }(z), Q = function() {
          return !window.history.pushState;
        }, W = function(t2) {
          return !t2.el || !t2.href;
        }, J = function(t2) {
          var n2 = t2.event;
          return n2.which > 1 || n2.metaKey || n2.ctrlKey || n2.shiftKey || n2.altKey;
        }, K = function(t2) {
          var n2 = t2.el;
          return n2.hasAttribute("target") && "_blank" === n2.target;
        }, V = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.protocol && window.location.protocol !== n2.protocol || void 0 !== n2.hostname && window.location.hostname !== n2.hostname;
        }, Y = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.port && B2() !== B2(n2.href);
        }, Z = function(t2) {
          var n2 = t2.el;
          return n2.getAttribute && "string" == typeof n2.getAttribute("download");
        }, tt = function(t2) {
          return t2.el.hasAttribute(S.prefix + "-" + S.prevent);
        }, nt = function(t2) {
          return Boolean(t2.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
        }, rt = function(t2) {
          var n2 = t2.href;
          return F(n2) === F() && B2(n2) === B2();
        }, et = function(t2) {
          function n2(n3) {
            var r3;
            return (r3 = t2.call(this, n3) || this).suite = [], r3.tests = /* @__PURE__ */ new Map(), r3.init(), r3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, false);
          }, r2.add = function(t3, n3, r3) {
            void 0 === r3 && (r3 = true), this.tests.set(t3, n3), r3 && this.suite.push(t3);
          }, r2.run = function(t3, n3, r3, e2) {
            return this.tests.get(t3)({ el: n3, event: r3, href: e2 });
          }, r2.checkLink = function(t3, n3, r3) {
            var e2 = this;
            return this.suite.some(function(i2) {
              return e2.run(i2, t3, n3, r3);
            });
          }, n2;
        }(z), it = function(t2) {
          function n2(r2, e2) {
            var i2;
            void 0 === e2 && (e2 = "Barba error");
            for (var o2 = arguments.length, u2 = new Array(o2 > 2 ? o2 - 2 : 0), f2 = 2; f2 < o2; f2++)
              u2[f2 - 2] = arguments[f2];
            return (i2 = t2.call.apply(t2, [this].concat(u2)) || this).error = r2, i2.label = e2, Error.captureStackTrace && Error.captureStackTrace(function(t3) {
              if (void 0 === t3)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t3;
            }(i2), n2), i2.name = "BarbaError", i2;
          }
          return e(n2, t2), n2;
        }(f(Error)), ot = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], t3 && (this.all = this.all.concat(t3)), this.update();
          }
          var n2 = t2.prototype;
          return n2.add = function(t3, n3) {
            switch (t3) {
              case "rule":
                this.A.splice(n3.position || 0, 0, n3.value);
                break;
              case "transition":
              default:
                this.all.push(n3);
            }
            this.update();
          }, n2.resolve = function(t3, n3) {
            var r2 = this;
            void 0 === n3 && (n3 = {});
            var e2 = n3.once ? this.once : this.page;
            e2 = e2.filter(n3.self ? function(t4) {
              return t4.name && "self" === t4.name;
            } : function(t4) {
              return !t4.name || "self" !== t4.name;
            });
            var i2 = /* @__PURE__ */ new Map(), o2 = e2.find(function(e3) {
              var o3 = true, u3 = {};
              return !(!n3.self || "self" !== e3.name) || (r2.A.reverse().forEach(function(n4) {
                o3 && (o3 = r2.R(e3, n4, t3, u3), e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "from") && r2.R(e3, n4, t3, u3, "to")), e3.from && !e3.to && (o3 = r2.R(e3, n4, t3, u3, "from")), !e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "to")));
              }), i2.set(e3, u3), o3);
            }), u2 = i2.get(o2), f2 = [];
            if (f2.push(n3.once ? "once" : "page"), n3.self && f2.push("self"), u2) {
              var s2, c2 = [o2];
              Object.keys(u2).length > 0 && c2.push(u2), (s2 = this.logger).info.apply(s2, ["Transition found [" + f2.join(",") + "]"].concat(c2));
            } else
              this.logger.info("No transition found [" + f2.join(",") + "]");
            return o2;
          }, n2.update = function() {
            var t3 = this;
            this.all = this.all.map(function(n3) {
              return t3.T(n3);
            }).sort(function(t4, n3) {
              return t4.priority - n3.priority;
            }).reverse().map(function(t4) {
              return delete t4.priority, t4;
            }), this.page = this.all.filter(function(t4) {
              return void 0 !== t4.leave || void 0 !== t4.enter;
            }), this.once = this.all.filter(function(t4) {
              return void 0 !== t4.once;
            });
          }, n2.R = function(t3, n3, r2, e2, i2) {
            var o2 = true, u2 = false, f2 = t3, s2 = n3.name, c2 = s2, a2 = s2, h2 = s2, v2 = i2 ? f2[i2] : f2, l2 = "to" === i2 ? r2.next : r2.current;
            if (i2 ? v2 && v2[s2] : v2[s2]) {
              switch (n3.type) {
                case "strings":
                default:
                  var d2 = Array.isArray(v2[c2]) ? v2[c2] : [v2[c2]];
                  l2[c2] && -1 !== d2.indexOf(l2[c2]) && (u2 = true), -1 === d2.indexOf(l2[c2]) && (o2 = false);
                  break;
                case "object":
                  var m2 = Array.isArray(v2[a2]) ? v2[a2] : [v2[a2]];
                  l2[a2] ? (l2[a2].name && -1 !== m2.indexOf(l2[a2].name) && (u2 = true), -1 === m2.indexOf(l2[a2].name) && (o2 = false)) : o2 = false;
                  break;
                case "function":
                  v2[h2](r2) ? u2 = true : o2 = false;
              }
              u2 && (i2 ? (e2[i2] = e2[i2] || {}, e2[i2][s2] = f2[i2][s2]) : e2[s2] = f2[s2]);
            }
            return o2;
          }, n2.O = function(t3, n3, r2) {
            var e2 = 0;
            return (t3[n3] || t3.from && t3.from[n3] || t3.to && t3.to[n3]) && (e2 += Math.pow(10, r2), t3.from && t3.from[n3] && (e2 += 1), t3.to && t3.to[n3] && (e2 += 2)), e2;
          }, n2.T = function(t3) {
            var n3 = this;
            t3.priority = 0;
            var r2 = 0;
            return this.A.forEach(function(e2, i2) {
              r2 += n3.O(t3, e2.name, i2 + 1);
            }), t3.priority = r2, t3;
          }, t2;
        }(), ut = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.S = false, this.store = new ot(t3);
          }
          var r2 = t2.prototype;
          return r2.get = function(t3, n2) {
            return this.store.resolve(t3, n2);
          }, r2.doOnce = function(t3) {
            var n2 = t3.data, r3 = t3.transition;
            try {
              var e2 = function() {
                i2.S = false;
              }, i2 = this, o2 = r3 || {};
              i2.S = true;
              var u2 = s(function() {
                return Promise.resolve(i2.j("beforeOnce", n2, o2)).then(function() {
                  return Promise.resolve(i2.once(n2, o2)).then(function() {
                    return Promise.resolve(i2.j("afterOnce", n2, o2)).then(function() {
                    });
                  });
                });
              }, function(t4) {
                i2.S = false, i2.logger.debug("Transition error [before/after/once]"), i2.logger.error(t4);
              });
              return Promise.resolve(u2 && u2.then ? u2.then(e2) : e2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.doPage = function(t3) {
            var n2 = t3.data, r3 = t3.transition, e2 = t3.page, i2 = t3.wrapper;
            try {
              var o2 = function(t4) {
                if (u2)
                  return t4;
                f2.S = false;
              }, u2 = false, f2 = this, c2 = r3 || {}, a2 = true === c2.sync || false;
              f2.S = true;
              var h2 = s(function() {
                function t4() {
                  return Promise.resolve(f2.j("before", n2, c2)).then(function() {
                    var t5 = false;
                    function r5(r6) {
                      return t5 ? r6 : Promise.resolve(f2.remove(n2)).then(function() {
                        return Promise.resolve(f2.j("after", n2, c2)).then(function() {
                        });
                      });
                    }
                    var o3 = function() {
                      if (a2)
                        return s(function() {
                          return Promise.resolve(f2.add(n2, i2)).then(function() {
                            return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                              return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                return Promise.resolve(Promise.all([f2.leave(n2, c2), f2.enter(n2, c2)])).then(function() {
                                  return Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                            });
                          });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [sync]");
                        });
                      var r6 = function(r7) {
                        return t5 ? r7 : s(function() {
                          var t6 = function() {
                            if (false !== o4)
                              return Promise.resolve(f2.add(n2, i2)).then(function() {
                                return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                  return Promise.resolve(f2.enter(n2, c2, o4)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                          }();
                          if (t6 && t6.then)
                            return t6.then(function() {
                            });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [before/after/enter]");
                        });
                      }, o4 = false, u3 = s(function() {
                        return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                          return Promise.resolve(Promise.all([f2.leave(n2, c2), L(e2, n2)]).then(function(t6) {
                            return t6[0];
                          })).then(function(t6) {
                            return o4 = t6, Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                            });
                          });
                        });
                      }, function(t6) {
                        if (f2.M(t6))
                          throw new it(t6, "Transition error [before/after/leave]");
                      });
                      return u3 && u3.then ? u3.then(r6) : r6(u3);
                    }();
                    return o3 && o3.then ? o3.then(r5) : r5(o3);
                  });
                }
                var r4 = function() {
                  if (a2)
                    return Promise.resolve(L(e2, n2)).then(function() {
                    });
                }();
                return r4 && r4.then ? r4.then(t4) : t4();
              }, function(t4) {
                if (f2.S = false, t4.name && "BarbaError" === t4.name)
                  throw f2.logger.debug(t4.label), f2.logger.error(t4.error), t4;
                throw f2.logger.debug("Transition error [page]"), f2.logger.error(t4), t4;
              });
              return Promise.resolve(h2 && h2.then ? h2.then(o2) : o2(h2));
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.once = function(t3, n2) {
            try {
              return Promise.resolve(X.do("once", t3, n2)).then(function() {
                return n2.once ? N(n2.once, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.leave = function(t3, n2) {
            try {
              return Promise.resolve(X.do("leave", t3, n2)).then(function() {
                return n2.leave ? N(n2.leave, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.enter = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do("enter", t3, n2)).then(function() {
                return n2.enter ? N(n2.enter, n2)(t3, r3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.add = function(t3, n2) {
            try {
              return j.addContainer(t3.next.container, n2), X.do("nextAdded", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.remove = function(t3) {
            try {
              return j.removeContainer(t3.current.container), X.do("currentRemoved", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.M = function(t3) {
            return t3.message ? !/Timeout error|Fetch error/.test(t3.message) : !t3.status;
          }, r2.j = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do(t3, n2, r3)).then(function() {
                return r3[t3] ? N(r3[t3], r3)(n2) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, n(t2, [{ key: "isRunning", get: function() {
            return this.S;
          }, set: function(t3) {
            this.S = t3;
          } }, { key: "hasOnce", get: function() {
            return this.store.once.length > 0;
          } }, { key: "hasSelf", get: function() {
            return this.store.all.some(function(t3) {
              return "self" === t3.name;
            });
          } }, { key: "shouldWait", get: function() {
            return this.store.all.some(function(t3) {
              return t3.to && !t3.to.route || t3.sync;
            });
          } }]), t2;
        }(), ft = function() {
          function t2(t3) {
            var n2 = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), 0 !== t3.length && (t3.forEach(function(t4) {
              n2.byNamespace.set(t4.namespace, t4);
            }), this.names.forEach(function(t4) {
              X[t4](n2.L(t4));
            }));
          }
          return t2.prototype.L = function(t3) {
            var n2 = this;
            return function(r2) {
              var e2 = t3.match(/enter/i) ? r2.next : r2.current, i2 = n2.byNamespace.get(e2.namespace);
              return i2 && i2[t3] ? N(i2[t3], i2)(r2) : Promise.resolve();
            };
          }, t2;
        }();
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t2) {
          var n2 = this;
          do {
            if (n2.matches(t2))
              return n2;
            n2 = n2.parentElement || n2.parentNode;
          } while (null !== n2 && 1 === n2.nodeType);
          return null;
        });
        var st = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } };
        return new (function() {
          function t2() {
            this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
          }
          var e2 = t2.prototype;
          return e2.use = function(t3, n2) {
            var r2 = this.plugins;
            r2.indexOf(t3) > -1 ? this.logger.warn("Plugin [" + t3.name + "] already installed.") : "function" == typeof t3.install ? (t3.install(this, n2), r2.push(t3)) : this.logger.warn("Plugin [" + t3.name + '] has no "install" method.');
          }, e2.init = function(t3) {
            var n2 = void 0 === t3 ? {} : t3, e3 = n2.transitions, i2 = void 0 === e3 ? [] : e3, o2 = n2.views, u2 = void 0 === o2 ? [] : o2, f2 = n2.schema, s2 = void 0 === f2 ? S : f2, c2 = n2.requestError, a2 = n2.timeout, h2 = void 0 === a2 ? 2e3 : a2, v2 = n2.cacheIgnore, d2 = void 0 !== v2 && v2, m2 = n2.prefetchIgnore, p2 = void 0 !== m2 && m2, w2 = n2.preventRunning, b2 = void 0 !== w2 && w2, y2 = n2.prevent, P2 = void 0 === y2 ? null : y2, g2 = n2.debug, E3 = n2.logLevel;
            if (l.setLevel(true === (void 0 !== g2 && g2) ? "debug" : void 0 === E3 ? "off" : E3), this.logger.info(this.version), Object.keys(s2).forEach(function(t4) {
              S[t4] && (S[t4] = s2[t4]);
            }), this.$ = c2, this.timeout = h2, this.cacheIgnore = d2, this.prefetchIgnore = p2, this.preventRunning = b2, this._ = this.dom.getWrapper(), !this._)
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x2 = this.data.current;
            if (!x2.container)
              throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d2), this.prevent = new et(p2), this.transitions = new ut(i2), this.views = new ft(u2), null !== P2) {
              if ("function" != typeof P2)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", P2);
            }
            this.history.init(x2.url.href, x2.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(t4) {
              return t4.init();
            });
            var k2 = this.data;
            k2.trigger = "barba", k2.next = k2.current, k2.current = r({}, this.schemaPage), this.hooks.do("ready", k2), this.once(k2), this.q();
          }, e2.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
          }, e2.force = function(t3) {
            window.location.assign(t3);
          }, e2.go = function(t3, n2, r2) {
            var e3;
            if (void 0 === n2 && (n2 = "barba"), this.transitions.isRunning)
              this.force(t3);
            else if (!(e3 = "popstate" === n2 ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t3) : this.prevent.run("sameUrl", null, null, t3)) || this.transitions.hasSelf)
              return n2 = this.history.change(t3, n2, r2), r2 && (r2.stopPropagation(), r2.preventDefault()), this.page(t3, n2, e3);
          }, e2.once = function(t3) {
            try {
              var n2 = this;
              return Promise.resolve(n2.hooks.do("beforeEnter", t3)).then(function() {
                function r2() {
                  return Promise.resolve(n2.hooks.do("afterEnter", t3)).then(function() {
                  });
                }
                var e3 = function() {
                  if (n2.transitions.hasOnce) {
                    var r3 = n2.transitions.get(t3, { once: true });
                    return Promise.resolve(n2.transitions.doOnce({ transition: r3, data: t3 })).then(function() {
                    });
                  }
                }();
                return e3 && e3.then ? e3.then(r2) : r2();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.page = function(t3, n2, e3) {
            try {
              var i2 = function() {
                var t4 = o2.data;
                return Promise.resolve(o2.hooks.do("page", t4)).then(function() {
                  var n3 = s(function() {
                    var n4 = o2.transitions.get(t4, { once: false, self: e3 });
                    return Promise.resolve(o2.transitions.doPage({ data: t4, page: u2, transition: n4, wrapper: o2._ })).then(function() {
                      o2.q();
                    });
                  }, function() {
                    0 === l.getLevel() && o2.force(t4.current.url.href);
                  });
                  if (n3 && n3.then)
                    return n3.then(function() {
                    });
                });
              }, o2 = this;
              o2.data.next.url = r({ href: t3 }, o2.url.parse(t3)), o2.data.trigger = n2;
              var u2 = o2.cache.has(t3) ? o2.cache.update(t3, { action: "click" }).request : o2.cache.set(t3, o2.request(t3, o2.timeout, o2.onRequestError.bind(o2, n2)), "click").request, f2 = function() {
                if (o2.transitions.shouldWait)
                  return Promise.resolve(L(u2, o2.data)).then(function() {
                  });
              }();
              return Promise.resolve(f2 && f2.then ? f2.then(i2) : i2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.onRequestError = function(t3) {
            this.transitions.isRunning = false;
            for (var n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), e3 = 1; e3 < n2; e3++)
              r2[e3 - 1] = arguments[e3];
            var i2 = r2[0], o2 = r2[1], u2 = this.cache.getAction(i2);
            return this.cache.delete(i2), !(this.$ && false === this.$(t3, u2, i2, o2) || ("click" === u2 && this.force(i2), 1));
          }, e2.prefetch = function(t3) {
            var n2 = this;
            this.cache.has(t3) || this.cache.set(t3, this.request(t3, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t4) {
              n2.logger.error(t4);
            }), "prefetch");
          }, e2.F = function() {
            true !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
          }, e2.H = function() {
            true !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
          }, e2.B = function(t3) {
            var n2 = this, r2 = this.I(t3);
            if (r2) {
              var e3 = this.dom.getHref(r2);
              this.prevent.checkHref(e3) || this.cache.has(e3) || this.cache.set(e3, this.request(e3, this.timeout, this.onRequestError.bind(this, r2)).catch(function(t4) {
                n2.logger.error(t4);
              }), "enter");
            }
          }, e2.U = function(t3) {
            var n2 = this.I(t3);
            if (n2)
              return this.transitions.isRunning && this.preventRunning ? (t3.preventDefault(), void t3.stopPropagation()) : void this.go(this.dom.getHref(n2), n2, t3);
          }, e2.D = function(t3) {
            this.go(this.url.getHref(), "popstate", t3);
          }, e2.I = function(t3) {
            for (var n2 = t3.target; n2 && !this.dom.getHref(n2); )
              n2 = n2.parentNode;
            if (n2 && !this.prevent.checkLink(n2, t3, this.dom.getHref(n2)))
              return n2;
          }, e2.q = function() {
            var t3 = this.url.getHref(), n2 = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: r({ href: t3 }, this.url.parse(t3)) };
            this.C = { current: n2, next: r({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data);
          }, n(t2, [{ key: "data", get: function() {
            return this.C;
          } }, { key: "wrapper", get: function() {
            return this._;
          } }]), t2;
        }())();
      });
    }
  });

  // node_modules/gsap/dist/gsap.js
  var require_gsap = __commonJS({
    "node_modules/gsap/dist/gsap.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = global2 || self, factory(global2.window = global2.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        function _assertThisInitialized2(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        var _config = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        }, _defaults2 = {
          duration: 0.5,
          overwrite: false,
          delay: 0
        }, _suppressOverwrites2, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString3 = function _isString4(value) {
          return typeof value === "string";
        }, _isFunction3 = function _isFunction4(value) {
          return typeof value === "function";
        }, _isNumber3 = function _isNumber4(value) {
          return typeof value === "number";
        }, _isUndefined = function _isUndefined2(value) {
          return typeof value === "undefined";
        }, _isObject3 = function _isObject4(value) {
          return typeof value === "object";
        }, _isNotFalse = function _isNotFalse2(value) {
          return value !== false;
        }, _windowExists3 = function _windowExists4() {
          return typeof window !== "undefined";
        }, _isFuncOrString = function _isFuncOrString2(value) {
          return _isFunction3(value) || _isString3(value);
        }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
        }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win2, _coreInitted2, _doc2, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
          return (_installScope = _merge(scope, _globals)) && gsap5;
        }, _missingPlugin = function _missingPlugin2(property, value) {
          return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        }, _warn = function _warn2(message, suppress) {
          return !suppress && console.warn(message);
        }, _addGlobal = function _addGlobal2(name, obj) {
          return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        }, _emptyFunc = function _emptyFunc2() {
          return 0;
        }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
          var target = targets[0], harnessPlugin, i;
          _isObject3(target) || _isFunction3(target) || (targets = [targets]);
          if (!(harnessPlugin = (target._gsap || {}).harness)) {
            i = _harnessPlugins.length;
            while (i-- && !_harnessPlugins[i].targetTest(target)) {
            }
            harnessPlugin = _harnessPlugins[i];
          }
          i = targets.length;
          while (i--) {
            targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
          }
          return targets;
        }, _getCache = function _getCache2(target) {
          return target._gsap || _harness(toArray(target))[0]._gsap;
        }, _getProperty = function _getProperty2(target, property, v) {
          return (v = target[property]) && _isFunction3(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
        }, _forEachName = function _forEachName2(names, func) {
          return (names = names.split(",")).forEach(func) || names;
        }, _round = function _round2(value) {
          return Math.round(value * 1e5) / 1e5 || 0;
        }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
          var l = toFind.length, i = 0;
          for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
          }
          return i < l;
        }, _parseVars = function _parseVars2(params, type, parent) {
          var isLegacy = _isNumber3(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars;
          isLegacy && (vars.duration = params[1]);
          vars.parent = parent;
          if (type) {
            irVars = vars;
            while (parent && !("immediateRender" in irVars)) {
              irVars = parent.vars.defaults || {};
              parent = _isNotFalse(parent.vars.inherit) && parent.parent;
            }
            vars.immediateRender = _isNotFalse(irVars.immediateRender);
            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
          }
          return vars;
        }, _lazyRender = function _lazyRender2() {
          var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
          _lazyLookup = {};
          _lazyTweens.length = 0;
          for (i = 0; i < l; i++) {
            tween = a[i];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
          }
        }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
          _lazyTweens.length && _lazyRender();
          animation.render(time, suppressEvents, force);
          _lazyTweens.length && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible2(value) {
          var n = parseFloat(value);
          return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString3(value) ? value.trim() : value;
        }, _passThrough3 = function _passThrough4(p) {
          return p;
        }, _setDefaults3 = function _setDefaults4(obj, defaults2) {
          for (var p in defaults2) {
            p in obj || (obj[p] = defaults2[p]);
          }
          return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults2(obj, defaults2) {
          for (var p in defaults2) {
            p in obj || p === "duration" || p === "ease" || (obj[p] = defaults2[p]);
          }
        }, _merge = function _merge2(base, toMerge) {
          for (var p in toMerge) {
            base[p] = toMerge[p];
          }
          return base;
        }, _mergeDeep = function _mergeDeep2(base, toMerge) {
          for (var p in toMerge) {
            p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject3(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
          }
          return base;
        }, _copyExcluding = function _copyExcluding2(obj, excluding) {
          var copy = {}, p;
          for (p in obj) {
            p in excluding || (copy[p] = obj[p]);
          }
          return copy;
        }, _inheritDefaults = function _inheritDefaults2(vars) {
          var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults3;
          if (_isNotFalse(vars.inherit)) {
            while (parent) {
              func(vars, parent.vars.defaults);
              parent = parent.parent || parent._dp;
            }
          }
          return vars;
        }, _arraysMatch = function _arraysMatch2(a1, a2) {
          var i = a1.length, match = i === a2.length;
          while (match && i-- && a1[i] === a2[i]) {
          }
          return i < 0;
        }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = parent[lastProp], t;
          if (sortBy) {
            t = child[sortBy];
            while (prev && prev[sortBy] > t) {
              prev = prev._prev;
            }
          }
          if (prev) {
            child._next = prev._next;
            prev._next = child;
          } else {
            child._next = parent[firstProp];
            parent[firstProp] = child;
          }
          if (child._next) {
            child._next._prev = child;
          } else {
            parent[lastProp] = child;
          }
          child._prev = prev;
          child.parent = child._dp = parent;
          return child;
        }, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = child._prev, next = child._next;
          if (prev) {
            prev._next = next;
          } else if (parent[firstProp] === child) {
            parent[firstProp] = next;
          }
          if (next) {
            next._prev = prev;
          } else if (parent[lastProp] === child) {
            parent[lastProp] = prev;
          }
          child._next = child._prev = child.parent = null;
        }, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
          child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
          child._act = 0;
        }, _uncache = function _uncache2(animation, child) {
          if (animation && (!child || child._end > animation._dur || child._start < 0)) {
            var a = animation;
            while (a) {
              a._dirty = 1;
              a = a.parent;
            }
          }
          return animation;
        }, _recacheAncestors = function _recacheAncestors2(animation) {
          var parent = animation.parent;
          while (parent && parent.parent) {
            parent._dirty = 1;
            parent.totalDuration();
            parent = parent.parent;
          }
          return animation;
        }, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
          return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
        }, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
          return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        }, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
          var whole = Math.floor(tTime /= cycleDuration);
          return tTime && whole === tTime ? whole - 1 : whole;
        }, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
          return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        }, _setEnd = function _setEnd2(animation) {
          return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        }, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
          var parent = animation._dp;
          if (parent && parent.smoothChildTiming && animation._ts) {
            animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
            _setEnd(animation);
            parent._dirty || _uncache(parent, animation);
          }
          return animation;
        }, _postAddChecks = function _postAddChecks2(timeline, child) {
          var t;
          if (child._time || child._initted && !child._dur) {
            t = _parentToChildTotalTime(timeline.rawTime(), child);
            if (!child._dur || _clamp2(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
              child.render(t, true);
            }
          }
          if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
              t = timeline;
              while (t._dp) {
                t.rawTime() >= 0 && t.totalTime(t._tTime);
                t = t._dp;
              }
            }
            timeline._zTime = -_tinyNum;
          }
        }, _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
          child.parent && _removeFromParent(child);
          child._start = _round(position + child._delay);
          child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
          _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
          timeline._recent = child;
          skipChecks || _postAddChecks(timeline, child);
          return timeline;
        }, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
          return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        }, _attemptInitTween = function _attemptInitTween2(tween, totalTime, force, suppressEvents) {
          _initTween(tween, totalTime);
          if (!tween._initted) {
            return 1;
          }
          if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
            _lazyTweens.push(tween);
            tween._lazy = [totalTime, suppressEvents];
            return 1;
          }
        }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
          var parent = _ref.parent;
          return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
        }, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
          var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
          if (repeatDelay && tween._repeat) {
            tTime = _clamp2(0, tween._tDur, totalTime);
            iteration = _animationCycle(tTime, repeatDelay);
            prevIteration = _animationCycle(tween._tTime, repeatDelay);
            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
            if (iteration !== prevIteration) {
              prevRatio = 1 - ratio;
              tween.vars.repeatRefresh && tween._initted && tween.invalidate();
            }
          }
          if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
              return;
            }
            prevIteration = tween._zTime;
            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
            suppressEvents || (suppressEvents = totalTime && !prevIteration);
            tween.ratio = ratio;
            tween._from && (ratio = 1 - ratio);
            tween._time = 0;
            tween._tTime = tTime;
            suppressEvents || _callback(tween, "onStart");
            pt = tween._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
            tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
            tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
              ratio && _removeFromParent(tween, 1);
              if (!suppressEvents) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
              }
            }
          } else if (!tween._zTime) {
            tween._zTime = totalTime;
          }
        }, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
          var child;
          if (time > prevTime) {
            child = animation._first;
            while (child && child._start <= time) {
              if (!child._dur && child.data === "isPause" && child._start > prevTime) {
                return child;
              }
              child = child._next;
            }
          } else {
            child = animation._last;
            while (child && child._start >= time) {
              if (!child._dur && child.data === "isPause" && child._start < prevTime) {
                return child;
              }
              child = child._prev;
            }
          }
        }, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
          var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
          totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
          animation._dur = dur;
          animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
          totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
          skipUncache || _uncache(animation.parent, animation);
          return animation;
        }, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
          return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        }, _zeroPosition = {
          _start: 0,
          endTime: _emptyFunc
        }, _parsePosition3 = function _parsePosition4(animation, position) {
          var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset;
          if (_isString3(position) && (isNaN(position) || position in labels)) {
            i = position.charAt(0);
            if (i === "<" || i === ">") {
              return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
            }
            i = position.indexOf("=");
            if (i < 0) {
              position in labels || (labels[position] = clippedDuration);
              return labels[position];
            }
            offset = +(position.charAt(i - 1) + position.substr(i + 1));
            return i > 1 ? _parsePosition4(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
          }
          return position == null ? clippedDuration : +position;
        }, _conditionalReturn = function _conditionalReturn2(value, func) {
          return value || value === 0 ? func(value) : func;
        }, _clamp2 = function _clamp3(min, max, value) {
          return value < min ? min : value > max ? max : value;
        }, getUnit = function getUnit2(value) {
          if (typeof value !== "string") {
            return "";
          }
          var v = _unitExp.exec(value);
          return v ? value.substr(v.index + v[0].length) : "";
        }, clamp = function clamp2(min, max, value) {
          return _conditionalReturn(value, function(v) {
            return _clamp2(min, max, v);
          });
        }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
          return value && _isObject3(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject3(value[0])) && !value.nodeType && value !== _win2;
        }, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
          if (accumulator === void 0) {
            accumulator = [];
          }
          return ar.forEach(function(value) {
            var _accumulator;
            return _isString3(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
          }) || accumulator;
        }, toArray = function toArray2(value, leaveStrings) {
          return _isString3(value) && !leaveStrings && (_coreInitted2 || !_wake()) ? _slice.call(_doc2.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
        }, shuffle = function shuffle2(a) {
          return a.sort(function() {
            return 0.5 - Math.random();
          });
        }, distribute = function distribute2(v) {
          if (_isFunction3(v)) {
            return v;
          }
          var vars = _isObject3(v) ? v : {
            each: v
          }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
          if (_isString3(from)) {
            ratioX = ratioY = {
              center: 0.5,
              edges: 0.5,
              end: 1
            }[from] || 0;
          } else if (!isDecimal && ratios) {
            ratioX = from[0];
            ratioY = from[1];
          }
          return function(i, target, a) {
            var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
            if (!distances) {
              wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
              if (!wrapAt) {
                max = -_bigNum;
                while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
                }
                wrapAt--;
              }
              distances = cache[l] = [];
              originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
              originY = ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
              max = 0;
              min = _bigNum;
              for (j = 0; j < l; j++) {
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
              }
              from === "random" && shuffle(distances);
              distances.max = max - min;
              distances.min = min;
              distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
              distances.b = l < 0 ? base - l : base;
              distances.u = getUnit(vars.amount || vars.each) || 0;
              ease = ease && l < 0 ? _invertEase(ease) : ease;
            }
            l = (distances[i] - distances.min) / distances.max || 0;
            return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
          };
        }, _roundModifier = function _roundModifier2(v) {
          var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
          return function(raw) {
            var n = Math.round(parseFloat(raw) / v) * v * p;
            return (n - n % 1) / p + (_isNumber3(raw) ? 0 : getUnit(raw));
          };
        }, snap = function snap2(snapTo, value) {
          var isArray = _isArray(snapTo), radius, is2D;
          if (!isArray && _isObject3(snapTo)) {
            radius = isArray = snapTo.radius || _bigNum;
            if (snapTo.values) {
              snapTo = toArray(snapTo.values);
              if (is2D = !_isNumber3(snapTo[0])) {
                radius *= radius;
              }
            } else {
              snapTo = _roundModifier(snapTo.increment);
            }
          }
          return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction3(snapTo) ? function(raw) {
            is2D = snapTo(raw);
            return Math.abs(is2D - raw) <= radius ? is2D : raw;
          } : function(raw) {
            var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
            while (i--) {
              if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
              } else {
                dx = Math.abs(snapTo[i] - x);
              }
              if (dx < min) {
                min = dx;
                closest = i;
              }
            }
            closest = !radius || min <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber3(raw) ? closest : closest + getUnit(raw);
          });
        }, random = function random2(min, max, roundingIncrement, returnFunction) {
          return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
          });
        }, pipe = function pipe2() {
          for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
            functions[_key] = arguments[_key];
          }
          return function(value) {
            return functions.reduce(function(v, f) {
              return f(v);
            }, value);
          };
        }, unitize = function unitize2(func, unit) {
          return function(value) {
            return func(parseFloat(value)) + (unit || getUnit(value));
          };
        }, normalize = function normalize2(min, max, value) {
          return mapRange(min, max, 0, 1, value);
        }, _wrapArray = function _wrapArray2(a, wrapper, value) {
          return _conditionalReturn(value, function(index) {
            return a[~~wrapper(index)];
          });
        }, wrap = function wrap2(min, max, value) {
          var range = max - min;
          return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
            return (range + (value2 - min) % range) % range + min;
          });
        }, wrapYoyo = function wrapYoyo2(min, max, value) {
          var range = max - min, total = range * 2;
          return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
            value2 = (total + (value2 - min) % total) % total || 0;
            return min + (value2 > range ? total - value2 : value2);
          });
        }, _replaceRandom = function _replaceRandom2(value) {
          var prev = 0, s = "", i, nums, end, isArray;
          while (~(i = value.indexOf("random(", prev))) {
            end = value.indexOf(")", i);
            isArray = value.charAt(i + 7) === "[";
            nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
            prev = end + 1;
          }
          return s + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
          var inRange = inMax - inMin, outRange = outMax - outMin;
          return _conditionalReturn(value, function(value2) {
            return outMin + ((value2 - inMin) / inRange * outRange || 0);
          });
        }, interpolate = function interpolate2(start, end, progress, mutate) {
          var func = isNaN(start + end) ? 0 : function(p2) {
            return (1 - p2) * start + p2 * end;
          };
          if (!func) {
            var isString = _isString3(start), master = {}, p, i, interpolators, l, il;
            progress === true && (mutate = 1) && (progress = null);
            if (isString) {
              start = {
                p: start
              };
              end = {
                p: end
              };
            } else if (_isArray(start) && !_isArray(end)) {
              interpolators = [];
              l = start.length;
              il = l - 2;
              for (i = 1; i < l; i++) {
                interpolators.push(interpolate2(start[i - 1], start[i]));
              }
              l--;
              func = function func2(p2) {
                p2 *= l;
                var i2 = Math.min(il, ~~p2);
                return interpolators[i2](p2 - i2);
              };
              progress = end;
            } else if (!mutate) {
              start = _merge(_isArray(start) ? [] : {}, start);
            }
            if (!interpolators) {
              for (p in end) {
                _addPropTween.call(master, start, p, "get", end[p]);
              }
              func = function func2(p2) {
                return _renderPropTweens(p2, master) || (isString ? start.p : start);
              };
            }
          }
          return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
          var labels = timeline.labels, min = _bigNum, p, distance, label;
          for (p in labels) {
            distance = labels[p] - fromTime;
            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
              label = p;
              min = distance;
            }
          }
          return label;
        }, _callback = function _callback2(animation, type, executeLazyFirst) {
          var v = animation.vars, callback = v[type], params, scope;
          if (!callback) {
            return;
          }
          params = v[type + "Params"];
          scope = v.callbackScope || animation;
          executeLazyFirst && _lazyTweens.length && _lazyRender();
          return params ? callback.apply(scope, params) : callback.call(scope);
        }, _interrupt = function _interrupt2(animation) {
          _removeFromParent(animation);
          animation.progress() < 1 && _callback(animation, "onInterrupt");
          return animation;
        }, _quickTween, _createPlugin = function _createPlugin2(config) {
          config = !config.name && config["default"] || config;
          var name = config.name, isFunc = _isFunction3(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
          } : config, instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
          }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
          };
          _wake();
          if (config !== Plugin) {
            if (_plugins[name]) {
              return;
            }
            _setDefaults3(Plugin, _setDefaults3(_copyExcluding(config, instanceDefaults), statics));
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
            _plugins[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
              _harnessPlugins.push(Plugin);
              _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }
          _addGlobal(name, Plugin);
          config.register && config.register(gsap5, Plugin, PropTween);
        }, _255 = 255, _colorLookup = {
          aqua: [0, _255, _255],
          lime: [0, _255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, _255],
          navy: [0, 0, 128],
          white: [_255, _255, _255],
          olive: [128, 128, 0],
          yellow: [_255, _255, 0],
          orange: [_255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [_255, 0, 0],
          pink: [_255, 192, 203],
          cyan: [0, _255, _255],
          transparent: [_255, _255, _255, 0]
        }, _hue = function _hue2(h, m1, m2) {
          h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
          return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
        }, splitColor = function splitColor2(v, toHSL, forceAlpha) {
          var a = !v ? _colorLookup.black : _isNumber3(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
          if (!a) {
            if (v.substr(-1) === ",") {
              v = v.substr(0, v.length - 1);
            }
            if (_colorLookup[v]) {
              a = _colorLookup[v];
            } else if (v.charAt(0) === "#") {
              if (v.length < 6) {
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
              }
              if (v.length === 9) {
                a = parseInt(v.substr(1, 6), 16);
                return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
              }
              v = parseInt(v.substr(1), 16);
              a = [v >> 16, v >> 8 & _255, v & _255];
            } else if (v.substr(0, 3) === "hsl") {
              a = wasHSL = v.match(_strictNumExp);
              if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1);
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
              } else if (~v.indexOf("=")) {
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
              }
            } else {
              a = v.match(_strictNumExp) || _colorLookup.transparent;
            }
            a = a.map(Number);
          }
          if (toHSL && !wasHSL) {
            r = a[0] / _255;
            g = a[1] / _255;
            b = a[2] / _255;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            l = (max + min) / 2;
            if (max === min) {
              h = s = 0;
            } else {
              d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
              h *= 60;
            }
            a[0] = ~~(h + 0.5);
            a[1] = ~~(s * 100 + 0.5);
            a[2] = ~~(l * 100 + 0.5);
          }
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }, _colorOrderData = function _colorOrderData2(v) {
          var values = [], c = [], i = -1;
          v.split(_colorExp).forEach(function(v2) {
            var a = v2.match(_numWithUnitExp) || [];
            values.push.apply(values, a);
            c.push(i += a.length + 1);
          });
          values.c = c;
          return values;
        }, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
          var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
          if (!colors) {
            return s;
          }
          colors = colors.map(function(color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
          });
          if (orderMatchData) {
            d = _colorOrderData(s);
            c = orderMatchData.c;
            if (c.join(result) !== d.c.join(result)) {
              shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
              l = shell.length - 1;
              for (; i < l; i++) {
                result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
              }
            }
          }
          if (!shell) {
            shell = s.split(_colorExp);
            l = shell.length - 1;
            for (; i < l; i++) {
              result += shell[i] + colors[i];
            }
          }
          return result + shell[l];
        }, _colorExp = function() {
          var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
          for (p in _colorLookup) {
            s += "|" + p + "\\b";
          }
          return new RegExp(s + ")", "gi");
        }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
          var combined = a.join(" "), toHSL;
          _colorExp.lastIndex = 0;
          if (_colorExp.test(combined)) {
            toHSL = _hslExp.test(combined);
            a[1] = _formatColors(a[1], toHSL);
            a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
            return true;
          }
        }, _tickerActive, _ticker = function() {
          var _getTime2 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime2(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf2, _self, _delta, _i2, _tick = function _tick2(v) {
            var elapsed = _getTime2() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
            elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
              frame = ++_self.frame;
              _delta = time - _self.time * 1e3;
              _self.time = time = time / 1e3;
              _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
              dispatch = 1;
            }
            manual || (_id = _req(_tick2));
            if (dispatch) {
              for (_i2 = 0; _i2 < _listeners2.length; _i2++) {
                _listeners2[_i2](time, _delta, frame, v);
              }
            }
          };
          _self = {
            time: 0,
            frame: 0,
            tick: function tick() {
              _tick(true);
            },
            deltaRatio: function deltaRatio(fps) {
              return _delta / (1e3 / (fps || 60));
            },
            wake: function wake() {
              if (_coreReady) {
                if (!_coreInitted2 && _windowExists3()) {
                  _win2 = _coreInitted2 = window;
                  _doc2 = _win2.document || {};
                  _globals.gsap = gsap5;
                  (_win2.gsapVersions || (_win2.gsapVersions = [])).push(gsap5.version);
                  _install(_installScope || _win2.GreenSockGlobals || !_win2.gsap && _win2 || {});
                  _raf2 = _win2.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf2 || function(f) {
                  return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
              }
            },
            sleep: function sleep() {
              (_raf2 ? _win2.cancelAnimationFrame : clearTimeout)(_id);
              _tickerActive = 0;
              _req = _emptyFunc;
            },
            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
              _lagThreshold = threshold || 1 / _tinyNum;
              _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
            },
            fps: function fps(_fps) {
              _gap = 1e3 / (_fps || 240);
              _nextTime = _self.time * 1e3 + _gap;
            },
            add: function add(callback) {
              _listeners2.indexOf(callback) < 0 && _listeners2.push(callback);
              _wake();
            },
            remove: function remove(callback) {
              var i;
              ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i2 >= i && _i2--;
            },
            _listeners: _listeners2
          };
          return _self;
        }(), _wake = function _wake2() {
          return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
          var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
          for (; i < l; i++) {
            val = split[i];
            index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
            parsedVal = val.substr(0, index);
            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
            key = val.substr(index + 1).trim();
          }
          return obj;
        }, _valueInParentheses = function _valueInParentheses2(value) {
          var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
          return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        }, _configEaseFromString = function _configEaseFromString2(name) {
          var split = (name + "").split("("), ease = _easeMap[split[0]];
          return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        }, _invertEase = function _invertEase2(ease) {
          return function(p) {
            return 1 - ease(1 - p);
          };
        }, _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
          var child = timeline._first, ease;
          while (child) {
            if (child instanceof Timeline) {
              _propagateYoyoEase2(child, isYoyo);
            } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
              if (child.timeline) {
                _propagateYoyoEase2(child.timeline, isYoyo);
              } else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
              }
            }
            child = child._next;
          }
        }, _parseEase = function _parseEase2(ease, defaultEase) {
          return !ease ? defaultEase : (_isFunction3(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        }, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
          if (easeOut === void 0) {
            easeOut = function easeOut2(p) {
              return 1 - easeIn(1 - p);
            };
          }
          if (easeInOut === void 0) {
            easeInOut = function easeInOut2(p) {
              return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
            };
          }
          var ease = {
            easeIn,
            easeOut,
            easeInOut
          }, lowercaseName;
          _forEachName(names, function(name) {
            _easeMap[name] = _globals[name] = ease;
            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
            for (var p in ease) {
              _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
            }
          });
          return ease;
        }, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
          return function(p) {
            return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
          };
        }, _configElastic = function _configElastic2(type, amplitude, period) {
          var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
            return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
          } : _easeInOutFromOut(easeOut);
          p2 = _2PI / p2;
          ease.config = function(amplitude2, period2) {
            return _configElastic2(type, amplitude2, period2);
          };
          return ease;
        }, _configBack = function _configBack2(type, overshoot) {
          if (overshoot === void 0) {
            overshoot = 1.70158;
          }
          var easeOut = function easeOut2(p) {
            return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
          } : _easeInOutFromOut(easeOut);
          ease.config = function(overshoot2) {
            return _configBack2(type, overshoot2);
          };
          return ease;
        };
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
          var power = i < 5 ? i + 1 : i;
          _insertEase(name + ",Power" + (power - 1), i ? function(p) {
            return Math.pow(p, power);
          } : function(p) {
            return p;
          }, function(p) {
            return 1 - Math.pow(1 - p, power);
          }, function(p) {
            return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
          });
        });
        _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
        _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
        (function(n, c) {
          var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
            return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
          };
          _insertEase("Bounce", function(p) {
            return 1 - easeOut(1 - p);
          }, easeOut);
        })(7.5625, 2.75);
        _insertEase("Expo", function(p) {
          return p ? Math.pow(2, 10 * (p - 1)) : 0;
        });
        _insertEase("Circ", function(p) {
          return -(_sqrt(1 - p * p) - 1);
        });
        _insertEase("Sine", function(p) {
          return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
        });
        _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
        _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
          config: function config(steps, immediateStart) {
            if (steps === void 0) {
              steps = 1;
            }
            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
            return function(p) {
              return ((p2 * _clamp2(0, max, p) | 0) + p3) * p1;
            };
          }
        };
        _defaults2.ease = _easeMap["quad.out"];
        _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
          return _callbackNames += name + "," + name + "Params,";
        });
        var GSCache = function GSCache2(target, harness) {
          this.id = _gsID++;
          target._gsap = this;
          this.target = target;
          this.harness = harness;
          this.get = harness ? harness.get : _getProperty;
          this.set = harness ? harness.getSetter : _getSetter;
        };
        var Animation = function() {
          function Animation2(vars, time) {
            var parent = vars.parent || _globalTimeline;
            this.vars = vars;
            this._delay = +vars.delay || 0;
            if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
              this._rDelay = vars.repeatDelay || 0;
              this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
            }
            this._ts = 1;
            _setDuration(this, +vars.duration, 1, 1);
            this.data = vars.data;
            _tickerActive || _ticker.wake();
            parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
            vars.reversed && this.reverse();
            vars.paused && this.paused(true);
          }
          var _proto = Animation2.prototype;
          _proto.delay = function delay(value) {
            if (value || value === 0) {
              this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
              this._delay = value;
              return this;
            }
            return this._delay;
          };
          _proto.duration = function duration(value) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
          };
          _proto.totalDuration = function totalDuration(value) {
            if (!arguments.length) {
              return this._tDur;
            }
            this._dirty = 0;
            return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
          };
          _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
            _wake();
            if (!arguments.length) {
              return this._tTime;
            }
            var parent = this._dp;
            if (parent && parent.smoothChildTiming && this._ts) {
              _alignPlayhead(this, _totalTime);
              !parent._dp || parent.parent || _postAddChecks(parent, this);
              while (parent.parent) {
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                  parent.totalTime(parent._tTime, true);
                }
                parent = parent.parent;
              }
              if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
                _addToTimeline(this._dp, this, this._start - this._delay);
              }
            }
            if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
              this._ts || (this._pTime = _totalTime);
              _lazySafeRender(this, _totalTime, suppressEvents);
            }
            return this;
          };
          _proto.time = function time(value, suppressEvents) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
          };
          _proto.totalProgress = function totalProgress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
          };
          _proto.progress = function progress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
          };
          _proto.iteration = function iteration(value, suppressEvents) {
            var cycleDuration = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
          };
          _proto.timeScale = function timeScale(value) {
            if (!arguments.length) {
              return this._rts === -_tinyNum ? 0 : this._rts;
            }
            if (this._rts === value) {
              return this;
            }
            var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
            this._rts = +value || 0;
            this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
            return _recacheAncestors(this.totalTime(_clamp2(-this._delay, this._tDur, tTime), true));
          };
          _proto.paused = function paused(value) {
            if (!arguments.length) {
              return this._ps;
            }
            if (this._ps !== value) {
              this._ps = value;
              if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                this._ts = this._act = 0;
              } else {
                _wake();
                this._ts = this._rts;
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
              }
            }
            return this;
          };
          _proto.startTime = function startTime(value) {
            if (arguments.length) {
              this._start = value;
              var parent = this.parent || this._dp;
              parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
              return this;
            }
            return this._start;
          };
          _proto.endTime = function endTime(includeRepeats) {
            return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
          };
          _proto.rawTime = function rawTime(wrapRepeats) {
            var parent = this.parent || this._dp;
            return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
          };
          _proto.globalTime = function globalTime(rawTime) {
            var animation = this, time = arguments.length ? rawTime : animation.rawTime();
            while (animation) {
              time = animation._start + time / (animation._ts || 1);
              animation = animation._dp;
            }
            return time;
          };
          _proto.repeat = function repeat(value) {
            if (arguments.length) {
              this._repeat = value === Infinity ? -2 : value;
              return _onUpdateTotalDuration(this);
            }
            return this._repeat === -2 ? Infinity : this._repeat;
          };
          _proto.repeatDelay = function repeatDelay(value) {
            if (arguments.length) {
              this._rDelay = value;
              return _onUpdateTotalDuration(this);
            }
            return this._rDelay;
          };
          _proto.yoyo = function yoyo(value) {
            if (arguments.length) {
              this._yoyo = value;
              return this;
            }
            return this._yoyo;
          };
          _proto.seek = function seek(position, suppressEvents) {
            return this.totalTime(_parsePosition3(this, position), _isNotFalse(suppressEvents));
          };
          _proto.restart = function restart(includeDelay, suppressEvents) {
            return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
          };
          _proto.play = function play(from, suppressEvents) {
            from != null && this.seek(from, suppressEvents);
            return this.reversed(false).paused(false);
          };
          _proto.reverse = function reverse(from, suppressEvents) {
            from != null && this.seek(from || this.totalDuration(), suppressEvents);
            return this.reversed(true).paused(false);
          };
          _proto.pause = function pause(atTime, suppressEvents) {
            atTime != null && this.seek(atTime, suppressEvents);
            return this.paused(true);
          };
          _proto.resume = function resume() {
            return this.paused(false);
          };
          _proto.reversed = function reversed(value) {
            if (arguments.length) {
              !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
              return this;
            }
            return this._rts < 0;
          };
          _proto.invalidate = function invalidate() {
            this._initted = this._act = 0;
            this._zTime = -_tinyNum;
            return this;
          };
          _proto.isActive = function isActive() {
            var parent = this.parent || this._dp, start = this._start, rawTime;
            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
          };
          _proto.eventCallback = function eventCallback(type, callback, params) {
            var vars = this.vars;
            if (arguments.length > 1) {
              if (!callback) {
                delete vars[type];
              } else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
              }
              return this;
            }
            return vars[type];
          };
          _proto.then = function then(onFulfilled) {
            var self2 = this;
            return new Promise(function(resolve) {
              var f = _isFunction3(onFulfilled) ? onFulfilled : _passThrough3, _resolve = function _resolve2() {
                var _then = self2.then;
                self2.then = null;
                _isFunction3(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
                resolve(f);
                self2.then = _then;
              };
              if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
                _resolve();
              } else {
                self2._prom = _resolve;
              }
            });
          };
          _proto.kill = function kill() {
            _interrupt(this);
          };
          return Animation2;
        }();
        _setDefaults3(Animation.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: false,
          parent: null,
          _initted: false,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -_tinyNum,
          _prom: 0,
          _ps: false,
          _rts: 1
        });
        var Timeline = function(_Animation) {
          _inheritsLoose(Timeline2, _Animation);
          function Timeline2(vars, time) {
            var _this;
            if (vars === void 0) {
              vars = {};
            }
            _this = _Animation.call(this, vars, time) || this;
            _this.labels = {};
            _this.smoothChildTiming = !!vars.smoothChildTiming;
            _this.autoRemoveChildren = !!vars.autoRemoveChildren;
            _this._sort = _isNotFalse(vars.sortChildren);
            _this.parent && _postAddChecks(_this.parent, _assertThisInitialized2(_this));
            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized2(_this), vars.scrollTrigger);
            return _this;
          }
          var _proto2 = Timeline2.prototype;
          _proto2.to = function to(targets, vars, position) {
            new Tween(targets, _parseVars(arguments, 0, this), _parsePosition3(this, _isNumber3(vars) ? arguments[3] : position));
            return this;
          };
          _proto2.from = function from(targets, vars, position) {
            new Tween(targets, _parseVars(arguments, 1, this), _parsePosition3(this, _isNumber3(vars) ? arguments[3] : position));
            return this;
          };
          _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
            new Tween(targets, _parseVars(arguments, 2, this), _parsePosition3(this, _isNumber3(fromVars) ? arguments[4] : position));
            return this;
          };
          _proto2.set = function set(targets, vars, position) {
            vars.duration = 0;
            vars.parent = this;
            _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
            vars.immediateRender = !!vars.immediateRender;
            new Tween(targets, vars, _parsePosition3(this, position), 1);
            return this;
          };
          _proto2.call = function call(callback, params, position) {
            return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition3(this, position));
          };
          _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.duration = duration;
            vars.stagger = vars.stagger || stagger;
            vars.onComplete = onCompleteAll;
            vars.onCompleteParams = onCompleteAllParams;
            vars.parent = this;
            new Tween(targets, vars, _parsePosition3(this, position));
            return this;
          };
          _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.runBackwards = 1;
            _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
            toVars.startAt = fromVars;
            _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
            if (tTime !== this._tTime || force || crossingStart) {
              if (prevTime !== this._time && dur) {
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
              }
              time = tTime;
              prevStart = this._start;
              timeScale = this._ts;
              prevPaused = !timeScale;
              if (crossingStart) {
                dur || (prevTime = this._zTime);
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
              }
              if (this._repeat) {
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _round(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === tTime / cycleDuration) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
                if (yoyo && iteration & 1) {
                  time = dur - time;
                  isYoyo = 1;
                }
                if (iteration !== prevIteration && !this._lock) {
                  var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                  iteration < prevIteration && (rewinding = !rewinding);
                  prevTime = rewinding ? 0 : dur;
                  this._lock = 1;
                  this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                  !suppressEvents && this.parent && _callback(this, "onRepeat");
                  this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                  if (prevTime !== this._time || prevPaused !== !this._ts) {
                    return this;
                  }
                  dur = this._dur;
                  tDur = this._tDur;
                  if (doesWrap) {
                    this._lock = 2;
                    prevTime = rewinding ? dur : -1e-4;
                    this.render(prevTime, true);
                    this.vars.repeatRefresh && !isYoyo && this.invalidate();
                  }
                  this._lock = 0;
                  if (!this._ts && !prevPaused) {
                    return this;
                  }
                  _propagateYoyoEase(this, isYoyo);
                }
              }
              if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
                if (pauseTween) {
                  tTime -= time - (time = pauseTween._start);
                }
              }
              this._tTime = tTime;
              this._time = time;
              this._act = !timeScale;
              if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0;
              }
              !prevTime && (time || !dur && totalTime >= 0) && !suppressEvents && _callback(this, "onStart");
              if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while (child) {
                  next = child._next;
                  if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = -_tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time;
                while (child) {
                  next = child._prev;
                  if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              }
              if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                  this._start = prevStart;
                  _setEnd(this);
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
              if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                  if (!this._lock) {
                    (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                    if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                      _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                      this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                    }
                  }
                }
              }
            }
            return this;
          };
          _proto2.add = function add(child, position) {
            var _this2 = this;
            _isNumber3(position) || (position = _parsePosition3(this, position));
            if (!(child instanceof Animation)) {
              if (_isArray(child)) {
                child.forEach(function(obj) {
                  return _this2.add(obj, position);
                });
                return this;
              }
              if (_isString3(child)) {
                return this.addLabel(child, position);
              }
              if (_isFunction3(child)) {
                child = Tween.delayedCall(0, child);
              } else {
                return this;
              }
            }
            return this !== child ? _addToTimeline(this, child, position) : this;
          };
          _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
            if (nested === void 0) {
              nested = true;
            }
            if (tweens === void 0) {
              tweens = true;
            }
            if (timelines === void 0) {
              timelines = true;
            }
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = -_bigNum;
            }
            var a = [], child = this._first;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) {
                  tweens && a.push(child);
                } else {
                  timelines && a.push(child);
                  nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
              }
              child = child._next;
            }
            return a;
          };
          _proto2.getById = function getById(id) {
            var animations = this.getChildren(1, 1, 1), i = animations.length;
            while (i--) {
              if (animations[i].vars.id === id) {
                return animations[i];
              }
            }
          };
          _proto2.remove = function remove(child) {
            if (_isString3(child)) {
              return this.removeLabel(child);
            }
            if (_isFunction3(child)) {
              return this.killTweensOf(child);
            }
            _removeLinkedListItem(this, child);
            if (child === this._recent) {
              this._recent = this._last;
            }
            return _uncache(this);
          };
          _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
            if (!arguments.length) {
              return this._tTime;
            }
            this._forcing = 1;
            if (!this._dp && this._ts) {
              this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
            }
            _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
            this._forcing = 0;
            return this;
          };
          _proto2.addLabel = function addLabel(label, position) {
            this.labels[label] = _parsePosition3(this, position);
            return this;
          };
          _proto2.removeLabel = function removeLabel(label) {
            delete this.labels[label];
            return this;
          };
          _proto2.addPause = function addPause(position, callback, params) {
            var t = Tween.delayedCall(0, callback || _emptyFunc, params);
            t.data = "isPause";
            this._hasPause = 1;
            return _addToTimeline(this, t, _parsePosition3(this, position));
          };
          _proto2.removePause = function removePause(position) {
            var child = this._first;
            position = _parsePosition3(this, position);
            while (child) {
              if (child._start === position && child.data === "isPause") {
                _removeFromParent(child);
              }
              child = child._next;
            }
          };
          _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
            while (i--) {
              _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
            }
            return this;
          };
          _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
            var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber3(onlyActive), children;
            while (child) {
              if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                  a.push(child);
                }
              } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
                a.push.apply(a, children);
              }
              child = child._next;
            }
            return a;
          };
          _proto2.tweenTo = function tweenTo(position, vars) {
            vars = vars || {};
            var tl = this, endTime = _parsePosition3(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults3({
              ease: "none",
              lazy: false,
              immediateRender: false,
              time: endTime,
              overwrite: "auto",
              duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
              onStart: function onStart() {
                tl.pause();
                var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                _onStart && _onStart.apply(tween, onStartParams || []);
              }
            }, vars));
            return immediateRender ? tween.render(0) : tween;
          };
          _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
            return this.tweenTo(toPosition, _setDefaults3({
              startAt: {
                time: _parsePosition3(this, fromPosition)
              }
            }, vars));
          };
          _proto2.recent = function recent() {
            return this._recent;
          };
          _proto2.nextLabel = function nextLabel(afterTime) {
            if (afterTime === void 0) {
              afterTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition3(this, afterTime));
          };
          _proto2.previousLabel = function previousLabel(beforeTime) {
            if (beforeTime === void 0) {
              beforeTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition3(this, beforeTime), 1);
          };
          _proto2.currentLabel = function currentLabel(value) {
            return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
          };
          _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = 0;
            }
            var child = this._first, labels = this.labels, p;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
              }
              child = child._next;
            }
            if (adjustLabels) {
              for (p in labels) {
                if (labels[p] >= ignoreBeforeTime) {
                  labels[p] += amount;
                }
              }
            }
            return _uncache(this);
          };
          _proto2.invalidate = function invalidate() {
            var child = this._first;
            this._lock = 0;
            while (child) {
              child.invalidate();
              child = child._next;
            }
            return _Animation.prototype.invalidate.call(this);
          };
          _proto2.clear = function clear(includeLabels) {
            if (includeLabels === void 0) {
              includeLabels = true;
            }
            var child = this._first, next;
            while (child) {
              next = child._next;
              this.remove(child);
              child = next;
            }
            this._dp && (this._time = this._tTime = this._pTime = 0);
            includeLabels && (this.labels = {});
            return _uncache(this);
          };
          _proto2.totalDuration = function totalDuration(value) {
            var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
            if (arguments.length) {
              return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
            }
            if (self2._dirty) {
              parent = self2.parent;
              while (child) {
                prev = child._prev;
                child._dirty && child.totalDuration();
                start = child._start;
                if (start > prevStart && self2._sort && child._ts && !self2._lock) {
                  self2._lock = 1;
                  _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
                } else {
                  prevStart = start;
                }
                if (start < 0 && child._ts) {
                  max -= start;
                  if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                    self2._start += start / self2._ts;
                    self2._time -= start;
                    self2._tTime -= start;
                  }
                  self2.shiftChildren(-start, false, -Infinity);
                  prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
              }
              _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
              self2._dirty = 0;
            }
            return self2._tDur;
          };
          Timeline2.updateRoot = function updateRoot(time) {
            if (_globalTimeline._ts) {
              _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
              _lastRenderedFrame = _ticker.frame;
            }
            if (_ticker.frame >= _nextGCFrame) {
              _nextGCFrame += _config.autoSleep || 120;
              var child = _globalTimeline._first;
              if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                  while (child && !child._ts) {
                    child = child._next;
                  }
                  child || _ticker.sleep();
                }
              }
            }
          };
          return Timeline2;
        }(Animation);
        _setDefaults3(Timeline.prototype, {
          _lock: 0,
          _hasPause: 0,
          _forcing: 0
        });
        var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
          var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
          pt.b = start;
          pt.e = end;
          start += "";
          end += "";
          if (hasRandom = ~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (stringFilter) {
            a = [start, end];
            stringFilter(a, target, prop);
            start = a[0];
            end = a[1];
          }
          startNums = start.match(_complexStringNumExp) || [];
          while (result = _complexStringNumExp.exec(end)) {
            endNum = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(") {
              color = 1;
            }
            if (endNum !== startNums[matchIndex++]) {
              startNum = parseFloat(startNums[matchIndex - 1]) || 0;
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                s: startNum,
                c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
              };
              index = _complexStringNumExp.lastIndex;
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
          pt.fp = funcParam;
          if (_relExp.test(end) || hasRandom) {
            pt.e = 0;
          }
          this._pt = pt;
          return pt;
        }, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
          _isFunction3(end) && (end = end(index || 0, target, targets));
          var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction3(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction3(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction3(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
          if (_isString3(end)) {
            if (~end.indexOf("random(")) {
              end = _replaceRandom(end);
            }
            if (end.charAt(1) === "=") {
              end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
            }
          }
          if (parsedStart !== end) {
            if (!isNaN(parsedStart * end)) {
              pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
              funcParam && (pt.fp = funcParam);
              modifier && pt.modifier(modifier, this, target);
              return this._pt = pt;
            }
            !currentValue && !(prop in target) && _missingPlugin(prop, end);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
          }
        }, _processVars = function _processVars2(vars, index, target, targets, tween) {
          _isFunction3(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
          if (!_isObject3(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
            return _isString3(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
          }
          var copy = {}, p;
          for (p in vars) {
            copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
          }
          return copy;
        }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
          var plugin, pt, ptLookup, i;
          if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
            if (tween !== _quickTween) {
              ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
              i = plugin._props.length;
              while (i--) {
                ptLookup[plugin._props[i]] = pt;
              }
            }
          }
          return plugin;
        }, _overwritingTween, _initTween = function _initTween2(tween, time) {
          var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites2, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
          tl && (!keyframes || !ease) && (ease = "none");
          tween._ease = _parseEase(ease, _defaults2.ease);
          tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults2.ease)) : 0;
          if (yoyoEase && tween._yoyo && !tween._repeat) {
            yoyoEase = tween._yEase;
            tween._yEase = tween._ease;
            tween._ease = yoyoEase;
          }
          if (!tl) {
            harness = targets[0] ? _getCache(targets[0]).harness : 0;
            harnessVars = harness && vars[harness.prop];
            cleanVars = _copyExcluding(vars, _reservedProps);
            prevStartAt && prevStartAt.render(-1, true).kill();
            if (startAt) {
              _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults3({
                data: "isStart",
                overwrite: false,
                parent,
                immediateRender: true,
                lazy: _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate,
                onUpdateParams,
                callbackScope,
                stagger: 0
              }, startAt)));
              if (immediateRender) {
                if (time > 0) {
                  autoRevert || (tween._startAt = 0);
                } else if (dur && !(time < 0 && prevStartAt)) {
                  time && (tween._zTime = time);
                  return;
                }
              }
            } else if (runBackwards && dur) {
              if (prevStartAt) {
                !autoRevert && (tween._startAt = 0);
              } else {
                time && (immediateRender = false);
                p = _setDefaults3({
                  overwrite: false,
                  data: "isFromStart",
                  lazy: immediateRender && _isNotFalse(lazy),
                  immediateRender,
                  stagger: 0,
                  parent
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars);
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                if (!immediateRender) {
                  _initTween2(tween._startAt, _tinyNum);
                } else if (!time) {
                  return;
                }
              }
            }
            tween._pt = 0;
            lazy = dur && _isNotFalse(lazy) || lazy && !dur;
            for (i = 0; i < targets.length; i++) {
              target = targets[i];
              gsData = target._gsap || _harness(targets)[i]._gsap;
              tween._ptLookup[i] = ptLookup = {};
              _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
              index = fullTargets === targets ? i : fullTargets.indexOf(target);
              if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                  ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
              }
              if (!harness || harnessVars) {
                for (p in cleanVars) {
                  if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                    plugin.priority && (hasPriority = 1);
                  } else {
                    ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                  }
                }
              }
              tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
              if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));
                overwritten = !tween.parent;
                _overwritingTween = 0;
              }
              tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
            }
            hasPriority && _sortPropTweensByPriority(tween);
            tween._onInit && tween._onInit(tween);
          }
          tween._from = !tl && !!vars.runBackwards;
          tween._onUpdate = onUpdate;
          tween._initted = (!tween._op || tween._pt) && !overwritten;
        }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
          var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
          if (!propertyAliases) {
            return vars;
          }
          copy = _merge({}, vars);
          for (p in propertyAliases) {
            if (p in copy) {
              aliases = propertyAliases[p].split(",");
              i = aliases.length;
              while (i--) {
                copy[aliases[i]] = copy[p];
              }
            }
          }
          return copy;
        }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
          return _isFunction3(value) ? value.call(tween, i, target, targets) : _isString3(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
        var Tween = function(_Animation2) {
          _inheritsLoose(Tween2, _Animation2);
          function Tween2(targets, vars, time, skipInherit) {
            var _this3;
            if (typeof vars === "number") {
              time.duration = vars;
              vars = time;
              time = null;
            }
            _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = _this3.parent, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber3(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
            _this3._ptLookup = [];
            _this3._overwrite = overwrite;
            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              vars = _this3.vars;
              tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults2 || {}
              });
              tl.kill();
              tl.parent = tl._dp = _assertThisInitialized2(_this3);
              tl._start = 0;
              if (keyframes) {
                _setDefaults3(tl.vars.defaults, {
                  ease: "none"
                });
                keyframes.forEach(function(frame) {
                  return tl.to(parsedTargets, frame, ">");
                });
              } else {
                l = parsedTargets.length;
                staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
                if (_isObject3(stagger)) {
                  for (p in stagger) {
                    if (~_staggerTweenProps.indexOf(p)) {
                      staggerVarsToMerge || (staggerVarsToMerge = {});
                      staggerVarsToMerge[p] = stagger[p];
                    }
                  }
                }
                for (i = 0; i < l; i++) {
                  copy = {};
                  for (p in vars) {
                    if (_staggerPropsToSkip.indexOf(p) < 0) {
                      copy[p] = vars[p];
                    }
                  }
                  copy.stagger = 0;
                  yoyoEase && (copy.yoyoEase = yoyoEase);
                  staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                  curTarget = parsedTargets[i];
                  copy.duration = +_parseFuncOrString(duration, _assertThisInitialized2(_this3), i, curTarget, parsedTargets);
                  copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized2(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                  if (!stagger && l === 1 && copy.delay) {
                    _this3._delay = delay = copy.delay;
                    _this3._start += delay;
                    copy.delay = 0;
                  }
                  tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
              }
              duration || _this3.duration(duration = tl.duration());
            } else {
              _this3.timeline = 0;
            }
            if (overwrite === true && !_suppressOverwrites2) {
              _overwritingTween = _assertThisInitialized2(_this3);
              _globalTimeline.killTweensOf(parsedTargets);
              _overwritingTween = 0;
            }
            parent && _postAddChecks(parent, _assertThisInitialized2(_this3));
            if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized2(_this3)) && parent.data !== "nested") {
              _this3._tTime = -_tinyNum;
              _this3.render(Math.max(0, -delay));
            }
            scrollTrigger && _scrollTrigger(_assertThisInitialized2(_this3), scrollTrigger);
            return _this3;
          }
          var _proto3 = Tween2.prototype;
          _proto3.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
            if (!dur) {
              _renderZeroDurationTween(this, totalTime, suppressEvents, force);
            } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
              time = tTime;
              timeline = this.timeline;
              if (this._repeat) {
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _round(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === tTime / cycleDuration) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                  yoyoEase = this._yEase;
                  time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                  return this;
                }
                if (iteration !== prevIteration) {
                  timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                  if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                    this._lock = force = 1;
                    this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
                  }
                }
              }
              if (!this._initted) {
                if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                  this._tTime = 0;
                  return this;
                }
                if (dur !== this._dur) {
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._tTime = tTime;
              this._time = time;
              if (!this._act && this._ts) {
                this._act = 1;
                this._lazy = 0;
              }
              this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
              if (this._from) {
                this.ratio = ratio = 1 - ratio;
              }
              time && !prevTime && !suppressEvents && _callback(this, "onStart");
              pt = this._pt;
              while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
              }
              timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
              if (this._onUpdate && !suppressEvents) {
                totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
                _callback(this, "onUpdate");
              }
              this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
              if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                  _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                  this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
              }
            }
            return this;
          };
          _proto3.targets = function targets() {
            return this._targets;
          };
          _proto3.invalidate = function invalidate() {
            this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
            this._ptLookup = [];
            this.timeline && this.timeline.invalidate();
            return _Animation2.prototype.invalidate.call(this);
          };
          _proto3.kill = function kill(targets, vars) {
            if (vars === void 0) {
              vars = "all";
            }
            if (!targets && (!vars || vars === "all")) {
              this._lazy = this._pt = 0;
              return this.parent ? _interrupt(this) : this;
            }
            if (this.timeline) {
              var tDur = this.timeline.totalDuration();
              this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
              this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
              return this;
            }
            var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
            if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
              vars === "all" && (this._pt = 0);
              return _interrupt(this);
            }
            overwrittenProps = this._op = this._op || [];
            if (vars !== "all") {
              if (_isString3(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                  return p[name] = 1;
                });
                vars = p;
              }
              vars = _addAliasesToVars(parsedTargets, vars);
            }
            i = parsedTargets.length;
            while (i--) {
              if (~killingTargets.indexOf(parsedTargets[i])) {
                curLookup = propTweenLookup[i];
                if (vars === "all") {
                  overwrittenProps[i] = vars;
                  props = curLookup;
                  curOverwriteProps = {};
                } else {
                  curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                  props = vars;
                }
                for (p in props) {
                  pt = curLookup && curLookup[p];
                  if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                      _removeLinkedListItem(this, pt, "_pt");
                    }
                    delete curLookup[p];
                  }
                  if (curOverwriteProps !== "all") {
                    curOverwriteProps[p] = 1;
                  }
                }
              }
            }
            this._initted && !this._pt && firstPT && _interrupt(this);
            return this;
          };
          Tween2.to = function to(targets, vars) {
            return new Tween2(targets, vars, arguments[2]);
          };
          Tween2.from = function from(targets, vars) {
            return new Tween2(targets, _parseVars(arguments, 1));
          };
          Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
            return new Tween2(callback, 0, {
              immediateRender: false,
              lazy: false,
              overwrite: false,
              delay,
              onComplete: callback,
              onReverseComplete: callback,
              onCompleteParams: params,
              onReverseCompleteParams: params,
              callbackScope: scope
            });
          };
          Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
            return new Tween2(targets, _parseVars(arguments, 2));
          };
          Tween2.set = function set(targets, vars) {
            vars.duration = 0;
            vars.repeatDelay || (vars.repeat = 0);
            return new Tween2(targets, vars);
          };
          Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            return _globalTimeline.killTweensOf(targets, props, onlyActive);
          };
          return Tween2;
        }(Animation);
        _setDefaults3(Tween.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0
        });
        _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
          Tween[name] = function() {
            var tl = new Timeline(), params = _slice.call(arguments, 0);
            params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
            return tl[name].apply(tl, params);
          };
        });
        var _setterPlain = function _setterPlain2(target, property, value) {
          return target[property] = value;
        }, _setterFunc = function _setterFunc2(target, property, value) {
          return target[property](value);
        }, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
          return target[property](data.fp, value);
        }, _setterAttribute = function _setterAttribute2(target, property, value) {
          return target.setAttribute(property, value);
        }, _getSetter = function _getSetter2(target, property) {
          return _isFunction3(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        }, _renderPlain = function _renderPlain2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4, data);
        }, _renderBoolean = function _renderBoolean2(ratio, data) {
          return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        }, _renderComplexString = function _renderComplexString2(ratio, data) {
          var pt = data._pt, s = "";
          if (!ratio && data.b) {
            s = data.b;
          } else if (ratio === 1 && data.e) {
            s = data.e;
          } else {
            while (pt) {
              s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
              pt = pt._next;
            }
            s += data.c;
          }
          data.set(data.t, data.p, s, data);
        }, _renderPropTweens = function _renderPropTweens2(ratio, data) {
          var pt = data._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
          var pt = this._pt, next;
          while (pt) {
            next = pt._next;
            pt.p === property && pt.modifier(modifier, tween, target);
            pt = next;
          }
        }, _killPropTweensOf = function _killPropTweensOf2(property) {
          var pt = this._pt, hasNonDependentRemaining, next;
          while (pt) {
            next = pt._next;
            if (pt.p === property && !pt.op || pt.op === property) {
              _removeLinkedListItem(this, pt, "_pt");
            } else if (!pt.dep) {
              hasNonDependentRemaining = 1;
            }
            pt = next;
          }
          return !hasNonDependentRemaining;
        }, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
          data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        }, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
          var pt = parent._pt, next, pt2, first, last;
          while (pt) {
            next = pt._next;
            pt2 = first;
            while (pt2 && pt2.pr > pt.pr) {
              pt2 = pt2._next;
            }
            if (pt._prev = pt2 ? pt2._prev : last) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }
            if (pt._next = pt2) {
              pt2._prev = pt;
            } else {
              last = pt;
            }
            pt = next;
          }
          parent._pt = first;
        };
        var PropTween = function() {
          function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
            this.t = target;
            this.s = start;
            this.c = change;
            this.p = prop;
            this.r = renderer || _renderPlain;
            this.d = data || this;
            this.set = setter || _setterPlain;
            this.pr = priority || 0;
            this._next = next;
            if (next) {
              next._prev = this;
            }
          }
          var _proto4 = PropTween2.prototype;
          _proto4.modifier = function modifier(func, tween, target) {
            this.mSet = this.mSet || this.set;
            this.set = _setterWithModifier;
            this.m = func;
            this.mt = target;
            this.tween = tween;
          };
          return PropTween2;
        }();
        _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
          return _reservedProps[name] = 1;
        });
        _globals.TweenMax = _globals.TweenLite = Tween;
        _globals.TimelineLite = _globals.TimelineMax = Timeline;
        _globalTimeline = new Timeline({
          sortChildren: false,
          defaults: _defaults2,
          autoRemoveChildren: true,
          id: "root",
          smoothChildTiming: true
        });
        _config.stringFilter = _colorStringFilter;
        var _gsap = {
          registerPlugin: function registerPlugin() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            args.forEach(function(config) {
              return _createPlugin(config);
            });
          },
          timeline: function timeline(vars) {
            return new Timeline(vars);
          },
          getTweensOf: function getTweensOf(targets, onlyActive) {
            return _globalTimeline.getTweensOf(targets, onlyActive);
          },
          getProperty: function getProperty(target, property, unit, uncache) {
            _isString3(target) && (target = toArray(target)[0]);
            var getter = _getCache(target || {}).get, format = unit ? _passThrough3 : _numericIfPossible;
            unit === "native" && (unit = "");
            return !target ? target : !property ? function(property2, unit2, uncache2) {
              return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
            } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
          },
          quickSetter: function quickSetter(target, property, unit) {
            target = toArray(target);
            if (target.length > 1) {
              var setters = target.map(function(t) {
                return gsap5.quickSetter(t, property, unit);
              }), l = setters.length;
              return function(value) {
                var i = l;
                while (i--) {
                  setters[i](value);
                }
              };
            }
            target = target[0] || {};
            var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
              var p2 = new Plugin();
              _quickTween._pt = 0;
              p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
              p2.render(1, p2);
              _quickTween._pt && _renderPropTweens(1, _quickTween);
            } : cache.set(target, p);
            return Plugin ? setter : function(value) {
              return setter(target, p, unit ? value + unit : value, cache, 1);
            };
          },
          isTweening: function isTweening(targets) {
            return _globalTimeline.getTweensOf(targets, true).length > 0;
          },
          defaults: function defaults2(value) {
            value && value.ease && (value.ease = _parseEase(value.ease, _defaults2.ease));
            return _mergeDeep(_defaults2, value || {});
          },
          config: function config(value) {
            return _mergeDeep(_config, value || {});
          },
          registerEffect: function registerEffect(_ref2) {
            var name = _ref2.name, effect = _ref2.effect, plugins = _ref2.plugins, defaults2 = _ref2.defaults, extendTimeline = _ref2.extendTimeline;
            (plugins || "").split(",").forEach(function(pluginName) {
              return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
            });
            _effects[name] = function(targets, vars, tl) {
              return effect(toArray(targets), _setDefaults3(vars || {}, defaults2), tl);
            };
            if (extendTimeline) {
              Timeline.prototype[name] = function(targets, vars, position) {
                return this.add(_effects[name](targets, _isObject3(vars) ? vars : (position = vars) && {}, this), position);
              };
            }
          },
          registerEase: function registerEase(name, ease) {
            _easeMap[name] = _parseEase(ease);
          },
          parseEase: function parseEase(ease, defaultEase) {
            return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
          },
          getById: function getById(id) {
            return _globalTimeline.getById(id);
          },
          exportRoot: function exportRoot(vars, includeDelayedCalls) {
            if (vars === void 0) {
              vars = {};
            }
            var tl = new Timeline(vars), child, next;
            tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
            _globalTimeline.remove(tl);
            tl._dp = 0;
            tl._time = tl._tTime = _globalTimeline._time;
            child = _globalTimeline._first;
            while (child) {
              next = child._next;
              if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
                _addToTimeline(tl, child, child._start - child._delay);
              }
              child = next;
            }
            _addToTimeline(_globalTimeline, tl, 0);
            return tl;
          },
          utils: {
            wrap,
            wrapYoyo,
            distribute,
            random,
            snap,
            normalize,
            getUnit,
            clamp,
            splitColor,
            toArray,
            mapRange,
            pipe,
            unitize,
            interpolate,
            shuffle
          },
          install: _install,
          effects: _effects,
          ticker: _ticker,
          updateRoot: Timeline.updateRoot,
          plugins: _plugins,
          globalTimeline: _globalTimeline,
          core: {
            PropTween,
            globals: _addGlobal,
            Tween,
            Timeline,
            Animation,
            getCache: _getCache,
            _removeLinkedListItem,
            suppressOverwrites: function suppressOverwrites(value) {
              return _suppressOverwrites2 = value;
            }
          }
        };
        _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
          return _gsap[name] = Tween[name];
        });
        _ticker.add(Timeline.updateRoot);
        _quickTween = _gsap.to({}, {
          duration: 0
        });
        var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
          var pt = plugin._pt;
          while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
            pt = pt._next;
          }
          return pt;
        }, _addModifiers = function _addModifiers2(tween, modifiers) {
          var targets = tween._targets, p, i, pt;
          for (p in modifiers) {
            i = targets.length;
            while (i--) {
              pt = tween._ptLookup[i][p];
              if (pt && (pt = pt.d)) {
                if (pt._pt) {
                  pt = _getPluginPropTween(pt, p);
                }
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
              }
            }
          }
        }, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
          return {
            name,
            rawVars: 1,
            init: function init(target, vars, tween) {
              tween._onInit = function(tween2) {
                var temp, p;
                if (_isString3(vars)) {
                  temp = {};
                  _forEachName(vars, function(name2) {
                    return temp[name2] = 1;
                  });
                  vars = temp;
                }
                if (modifier) {
                  temp = {};
                  for (p in vars) {
                    temp[p] = modifier(vars[p]);
                  }
                  vars = temp;
                }
                _addModifiers(tween2, vars);
              };
            }
          };
        };
        var gsap5 = _gsap.registerPlugin({
          name: "attr",
          init: function init(target, vars, tween, index, targets) {
            var p, pt;
            for (p in vars) {
              pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
              pt && (pt.op = p);
              this._props.push(p);
            }
          }
        }, {
          name: "endArray",
          init: function init(target, value) {
            var i = value.length;
            while (i--) {
              this.add(target, i, target[i] || 0, value[i]);
            }
          }
        }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
        Tween.version = Timeline.version = gsap5.version = "3.6.0";
        _coreReady = 1;
        if (_windowExists3()) {
          _wake();
        }
        var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
        var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists$1 = function _windowExists4() {
          return typeof window !== "undefined";
        }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp2 = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        }, _renderCSSProp = function _renderCSSProp2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
          return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
        }, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
          var value = data.s + data.c * ratio;
          data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
        }, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
          return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        }, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
          return target.style[property] = value;
        }, _setterCSSProp = function _setterCSSProp2(target, property, value) {
          return target.style.setProperty(property, value);
        }, _setterTransform = function _setterTransform2(target, property, value) {
          return target._gsap[property] = value;
        }, _setterScale = function _setterScale2(target, property, value) {
          return target._gsap.scaleX = target._gsap.scaleY = value;
        }, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache.scaleX = cache.scaleY = value;
          cache.renderTransform(ratio, cache);
        }, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache[property] = value;
          cache.renderTransform(ratio, cache);
        }, _transformProp2 = "transform", _transformOriginProp = _transformProp2 + "Origin", _supports3D, _createElement = function _createElement2(type, ns) {
          var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
          return e.style ? e : _doc$1.createElement(type);
        }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
          var cs = getComputedStyle(target);
          return cs[property] || cs.getPropertyValue(property.replace(_capsExp2, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
          var e = element || _tempDiv, s = e.style, i = 5;
          if (property in s && !preferPrefix) {
            return property;
          }
          property = property.charAt(0).toUpperCase() + property.substr(1);
          while (i-- && !(_prefixes[i] + property in s)) {
          }
          return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
        }, _initCore = function _initCore2() {
          if (_windowExists$1() && window.document) {
            _win$1 = window;
            _doc$1 = _win$1.document;
            _docElement = _doc$1.documentElement;
            _tempDiv = _createElement("div") || {
              style: {}
            };
            _tempDivStyler = _createElement("div");
            _transformProp2 = _checkPropPrefix(_transformProp2);
            _transformOriginProp = _transformProp2 + "Origin";
            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
            _supports3D = !!_checkPropPrefix("perspective");
            _pluginInitted = 1;
          }
        }, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
          var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
          _docElement.appendChild(svg);
          svg.appendChild(this);
          this.style.display = "block";
          if (swapIfPossible) {
            try {
              bbox = this.getBBox();
              this._gsapBBox = this.getBBox;
              this.getBBox = _getBBoxHack2;
            } catch (e) {
            }
          } else if (this._gsapBBox) {
            bbox = this._gsapBBox();
          }
          if (oldParent) {
            if (oldSibling) {
              oldParent.insertBefore(this, oldSibling);
            } else {
              oldParent.appendChild(this);
            }
          }
          _docElement.removeChild(svg);
          this.style.cssText = oldCSS;
          return bbox;
        }, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
          var i = attributesArray.length;
          while (i--) {
            if (target.hasAttribute(attributesArray[i])) {
              return target.getAttribute(attributesArray[i]);
            }
          }
        }, _getBBox = function _getBBox2(target) {
          var bounds;
          try {
            bounds = target.getBBox();
          } catch (error) {
            bounds = _getBBoxHack.call(target, true);
          }
          bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
          return bounds && !bounds.width && !bounds.x && !bounds.y ? {
            x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          } : bounds;
        }, _isSVG = function _isSVG2(e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
        }, _removeProperty = function _removeProperty2(target, property) {
          if (property) {
            var style = target.style;
            if (property in _transformProps && property !== _transformOriginProp) {
              property = _transformProp2;
            }
            if (style.removeProperty) {
              if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
                property = "-" + property;
              }
              style.removeProperty(property.replace(_capsExp2, "-$1").toLowerCase());
            } else {
              style.removeAttribute(property);
            }
          }
        }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
          var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
          plugin._pt = pt;
          pt.b = beginning;
          pt.e = end;
          plugin._props.push(property);
          return pt;
        }, _nonConvertibleUnits = {
          deg: 1,
          rad: 1,
          turn: 1
        }, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
          var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
          if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
            return curValue;
          }
          curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
          isSVG = target.getCTM && _isSVG(target);
          if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
            return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
          }
          style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
          parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
          if (isSVG) {
            parent = (target.ownerSVGElement || {}).parentNode;
          }
          if (!parent || parent === _doc$1 || !parent.appendChild) {
            parent = _doc$1.body;
          }
          cache = parent._gsap;
          if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
            return _round(curValue / cache.width * amount);
          } else {
            (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
            if (horizontal && toPercent) {
              cache = _getCache(parent);
              cache.time = _ticker.time;
              cache.width = parent[measureProperty];
            }
          }
          return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        }, _get2 = function _get3(target, property, unit, uncache) {
          var value;
          _pluginInitted || _initCore();
          if (property in _propertyAliases && property !== "transform") {
            property = _propertyAliases[property];
            if (~property.indexOf(",")) {
              property = property.split(",")[0];
            }
          }
          if (_transformProps[property] && property !== "transform") {
            value = _parseTransform(target, uncache);
            value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
          } else {
            value = target.style[property];
            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
              value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
            }
          }
          return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
          if (!start || start === "none") {
            var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
            if (s && s !== start) {
              prop = p;
              start = s;
            } else if (prop === "borderColor") {
              start = _getComputedProperty(target, "borderTopColor");
            }
          }
          var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
          pt.b = start;
          pt.e = end;
          start += "";
          end += "";
          if (end === "auto") {
            target.style[prop] = end;
            end = _getComputedProperty(target, prop) || end;
            target.style[prop] = start;
          }
          a = [start, end];
          _colorStringFilter(a);
          start = a[0];
          end = a[1];
          startValues = start.match(_numWithUnitExp) || [];
          endValues = end.match(_numWithUnitExp) || [];
          if (endValues.length) {
            while (result = _numWithUnitExp.exec(end)) {
              endValue = result[0];
              chunk = end.substring(index, result.index);
              if (color) {
                color = (color + 1) % 5;
              } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                color = 1;
              }
              if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                if (relative) {
                  endValue = endValue.substr(2);
                }
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _numWithUnitExp.lastIndex - endUnit.length;
                if (!endUnit) {
                  endUnit = endUnit || _config.units[prop] || startUnit;
                  if (index === end.length) {
                    end += endUnit;
                    pt.e += endUnit;
                  }
                }
                if (startUnit !== endUnit) {
                  startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                }
                pt._pt = {
                  _next: pt._pt,
                  p: chunk || matchIndex === 1 ? chunk : ",",
                  s: startNum,
                  c: relative ? relative * endNum : endNum - startNum,
                  m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
              }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
          } else {
            pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
          }
          _relExp.test(end) && (pt.e = 0);
          this._pt = pt;
          return pt;
        }, _keywordToPercent = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
          var split = value.split(" "), x = split[0], y = split[1] || "50%";
          if (x === "top" || x === "bottom" || y === "left" || y === "right") {
            value = x;
            x = y;
            y = value;
          }
          split[0] = _keywordToPercent[x] || x;
          split[1] = _keywordToPercent[y] || y;
          return split.join(" ");
        }, _renderClearProps = function _renderClearProps2(ratio, data) {
          if (data.tween && data.tween._time === data.tween._dur) {
            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
            if (props === "all" || props === true) {
              style.cssText = "";
              clearTransforms = 1;
            } else {
              props = props.split(",");
              i = props.length;
              while (--i > -1) {
                prop = props[i];
                if (_transformProps[prop]) {
                  clearTransforms = 1;
                  prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp2;
                }
                _removeProperty(target, prop);
              }
            }
            if (clearTransforms) {
              _removeProperty(target, _transformProp2);
              if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1);
                cache.uncache = 1;
              }
            }
          }
        }, _specialProps = {
          clearProps: function clearProps(plugin, target, property, endValue, tween) {
            if (tween.data !== "isFromStart") {
              var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
              pt.u = endValue;
              pt.pr = -10;
              pt.tween = tween;
              plugin._props.push(property);
              return 1;
            }
          }
        }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
          return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
        }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
          var matrixString = _getComputedProperty(target, _transformProp2);
          return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
        }, _getMatrix = function _getMatrix2(target, force2D) {
          var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
          if (cache.svg && target.getAttribute("transform")) {
            temp = target.transform.baseVal.consolidate().matrix;
            matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
          } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
            temp = style.display;
            style.display = "block";
            parent = target.parentNode;
            if (!parent || !target.offsetParent) {
              addedToDOM = 1;
              nextSibling = target.nextSibling;
              _docElement.appendChild(target);
            }
            matrix = _getComputedTransformMatrixAsArray(target);
            temp ? style.display = temp : _removeProperty(target, "display");
            if (addedToDOM) {
              nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
          }
          return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
        }, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth2, matrixArray, pluginToAddPropTweensTo) {
          var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
          if (!originIsAbsolute) {
            bounds = _getBBox(target);
            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
          } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
            x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
            y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
            xOrigin = x;
            yOrigin = y;
          }
          if (smooth2 || smooth2 !== false && cache.smooth) {
            tx = xOrigin - xOriginOld;
            ty = yOrigin - yOriginOld;
            cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
            cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
          } else {
            cache.xOffset = cache.yOffset = 0;
          }
          cache.xOrigin = xOrigin;
          cache.yOrigin = yOrigin;
          cache.smooth = !!smooth2;
          cache.origin = origin;
          cache.originIsAbsolute = !!originIsAbsolute;
          target.style[_transformOriginProp] = "0px 0px";
          if (pluginToAddPropTweensTo) {
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
          }
          target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        }, _parseTransform = function _parseTransform2(target, uncache) {
          var cache = target._gsap || new GSCache(target);
          if ("x" in cache && !uncache && !cache.uncache) {
            return cache;
          }
          var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
          x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
          scaleX = scaleY = 1;
          cache.svg = !!(target.getCTM && _isSVG(target));
          matrix = _getMatrix(target, cache.svg);
          if (cache.svg) {
            t1 = !cache.uncache && target.getAttribute("data-svg-origin");
            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
          }
          xOrigin = cache.xOrigin || 0;
          yOrigin = cache.yOrigin || 0;
          if (matrix !== _identity2DMatrix) {
            a = matrix[0];
            b = matrix[1];
            c = matrix[2];
            d = matrix[3];
            x = a12 = matrix[4];
            y = a22 = matrix[5];
            if (matrix.length === 6) {
              scaleX = Math.sqrt(a * a + b * b);
              scaleY = Math.sqrt(d * d + c * c);
              rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
              skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
              skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));
              if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
              }
            } else {
              a32 = matrix[6];
              a42 = matrix[7];
              a13 = matrix[8];
              a23 = matrix[9];
              a33 = matrix[10];
              a43 = matrix[11];
              x = matrix[12];
              y = matrix[13];
              z = matrix[14];
              angle = _atan2(a32, a33);
              rotationX = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
              }
              angle = _atan2(-c, a33);
              rotationY = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
              }
              angle = _atan2(b, a);
              rotation = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
              }
              if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
              }
              scaleX = _round(Math.sqrt(a * a + b * b + c * c));
              scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
              angle = _atan2(a12, a22);
              skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
              perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
            }
            if (cache.svg) {
              t1 = target.getAttribute("transform");
              cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp2));
              t1 && target.setAttribute("transform", t1);
            }
          }
          if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
            if (invertedScaleX) {
              scaleX *= -1;
              skewX += rotation <= 0 ? 180 : -180;
              rotation += rotation <= 0 ? 180 : -180;
            } else {
              scaleY *= -1;
              skewX += skewX <= 0 ? 180 : -180;
            }
          }
          cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
          cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
          cache.z = z + px;
          cache.scaleX = _round(scaleX);
          cache.scaleY = _round(scaleY);
          cache.rotation = _round(rotation) + deg;
          cache.rotationX = _round(rotationX) + deg;
          cache.rotationY = _round(rotationY) + deg;
          cache.skewX = skewX + deg;
          cache.skewY = skewY + deg;
          cache.transformPerspective = perspective + px;
          if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
            style[_transformOriginProp] = _firstTwoOnly(origin);
          }
          cache.xOffset = cache.yOffset = 0;
          cache.force3D = _config.force3D;
          cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
          cache.uncache = 0;
          return cache;
        }, _firstTwoOnly = function _firstTwoOnly2(value) {
          return (value = value.split(" "))[0] + " " + value[1];
        }, _addPxTranslate = function _addPxTranslate2(target, start, value) {
          var unit = getUnit(start);
          return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        }, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
          cache.z = "0px";
          cache.rotationY = cache.rotationX = "0deg";
          cache.force3D = 0;
          _renderCSSTransforms(ratio, cache);
        }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
          var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
          if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
            var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
            angle = parseFloat(rotationX) * _DEG2RAD;
            cos = Math.cos(angle);
            x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
            y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
            z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
          }
          if (transformPerspective !== _zeroPx) {
            transforms += "perspective(" + transformPerspective + _endParenthesis;
          }
          if (xPercent || yPercent) {
            transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
          }
          if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
            transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
          }
          if (rotation !== _zeroDeg) {
            transforms += "rotate(" + rotation + _endParenthesis;
          }
          if (rotationY !== _zeroDeg) {
            transforms += "rotateY(" + rotationY + _endParenthesis;
          }
          if (rotationX !== _zeroDeg) {
            transforms += "rotateX(" + rotationX + _endParenthesis;
          }
          if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
            transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
          }
          if (scaleX !== 1 || scaleY !== 1) {
            transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
          }
          target.style[_transformProp2] = transforms || "translate(0, 0)";
        }, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
          var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
          rotation = parseFloat(rotation);
          skewX = parseFloat(skewX);
          skewY = parseFloat(skewY);
          if (skewY) {
            skewY = parseFloat(skewY);
            skewX += skewY;
            rotation += skewY;
          }
          if (rotation || skewX) {
            rotation *= _DEG2RAD;
            skewX *= _DEG2RAD;
            a11 = Math.cos(rotation) * scaleX;
            a21 = Math.sin(rotation) * scaleX;
            a12 = Math.sin(rotation - skewX) * -scaleY;
            a22 = Math.cos(rotation - skewX) * scaleY;
            if (skewX) {
              skewY *= _DEG2RAD;
              temp = Math.tan(skewX - skewY);
              temp = Math.sqrt(1 + temp * temp);
              a12 *= temp;
              a22 *= temp;
              if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
              }
            }
            a11 = _round(a11);
            a21 = _round(a21);
            a12 = _round(a12);
            a22 = _round(a22);
          } else {
            a11 = scaleX;
            a22 = scaleY;
            a21 = a12 = 0;
          }
          if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
            tx = _convertToUnit(target, "x", x, "px");
            ty = _convertToUnit(target, "y", y, "px");
          }
          if (xOrigin || yOrigin || xOffset || yOffset) {
            tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
            ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
          }
          if (xPercent || yPercent) {
            temp = target.getBBox();
            tx = _round(tx + xPercent / 100 * temp.width);
            ty = _round(ty + yPercent / 100 * temp.height);
          }
          temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
          target.setAttribute("transform", temp);
          forceCSS && (target.style[_transformProp2] = temp);
        }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue, relative) {
          var cap = 360, isString = _isString3(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
          if (isString) {
            direction = endValue.split("_")[1];
            if (direction === "short") {
              change %= cap;
              if (change !== change % (cap / 2)) {
                change += change < 0 ? cap : -cap;
              }
            }
            if (direction === "cw" && change < 0) {
              change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            } else if (direction === "ccw" && change > 0) {
              change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            }
          }
          plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
          pt.e = finalValue;
          pt.u = "deg";
          plugin._props.push(property);
          return pt;
        }, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
          var style = _tempDivStyler.style, startCache = target._gsap, exclude = "perspective,force3D,transformOrigin,svgOrigin", endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
          style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;";
          style[_transformProp2] = transforms;
          _doc$1.body.appendChild(_tempDivStyler);
          endCache = _parseTransform(_tempDivStyler, 1);
          for (p in _transformProps) {
            startValue = startCache[p];
            endValue = endCache[p];
            if (startValue !== endValue && exclude.indexOf(p) < 0) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
              startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
              endNum = parseFloat(endValue);
              plugin._pt = new PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
              plugin._pt.u = endUnit || 0;
              plugin._props.push(p);
            }
          }
          _doc$1.body.removeChild(_tempDivStyler);
        };
        _forEachName("padding,margin,Width,Radius", function(name, index) {
          var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
            return index < 2 ? name + side : "border" + side + name;
          });
          _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
            var a, vars;
            if (arguments.length < 4) {
              a = props.map(function(prop) {
                return _get2(plugin, prop, property);
              });
              vars = a.join(" ");
              return vars.split(a[0]).length === 5 ? a[0] : vars;
            }
            a = (endValue + "").split(" ");
            vars = {};
            props.forEach(function(prop, i) {
              return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
            });
            plugin.init(target, vars, tween);
          };
        });
        var CSSPlugin = {
          name: "css",
          register: _initCore,
          targetTest: function targetTest(target) {
            return target.style && target.nodeType;
          },
          init: function init(target, vars, tween, index, targets) {
            var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth2, hasPriority;
            _pluginInitted || _initCore();
            for (p in vars) {
              if (p === "autoRound") {
                continue;
              }
              endValue = vars[p];
              if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
                continue;
              }
              type = typeof endValue;
              specialProp = _specialProps[p];
              if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
              }
              if (type === "string" && ~endValue.indexOf("random(")) {
                endValue = _replaceRandom(endValue);
              }
              if (specialProp) {
                specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
              } else if (p.substr(0, 2) === "--") {
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
              } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                  startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                  p in _config.units && !getUnit(startValue) && (startValue += _config.units[p]);
                  (startValue + "").charAt(1) === "=" && (startValue = _get2(target, p));
                } else {
                  startValue = _get2(target, p);
                }
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                  if (p === "autoAlpha") {
                    if (startNum === 1 && _get2(target, "visibility") === "hidden" && endNum) {
                      startNum = 0;
                    }
                    _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                  }
                  if (p !== "scale" && p !== "transform") {
                    p = _propertyAliases[p];
                    ~p.indexOf(",") && (p = p.split(",")[0]);
                  }
                }
                isTransformRelated = p in _transformProps;
                if (isTransformRelated) {
                  if (!transformPropTween) {
                    cache = target._gsap;
                    cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                    smooth2 = vars.smoothOrigin !== false && cache.smooth;
                    transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp2, 0, 1, cache.renderTransform, cache, 0, -1);
                    transformPropTween.dep = 1;
                  }
                  if (p === "scale") {
                    this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
                    props.push("scaleY", p);
                    p += "X";
                  } else if (p === "transformOrigin") {
                    endValue = _convertKeywordsToPercentages(endValue);
                    if (cache.svg) {
                      _applySVGOrigin(target, endValue, 0, smooth2, 0, this);
                    } else {
                      endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                      endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                      _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                    }
                    continue;
                  } else if (p === "svgOrigin") {
                    _applySVGOrigin(target, endValue, 1, smooth2, 0, this);
                    continue;
                  } else if (p in _rotationalProperties) {
                    _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                    continue;
                  } else if (p === "smoothOrigin") {
                    _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                    continue;
                  } else if (p === "force3D") {
                    cache[p] = endValue;
                    continue;
                  } else if (p === "transform") {
                    _addRawTransformPTs(this, endValue, target);
                    continue;
                  }
                } else if (!(p in style)) {
                  p = _checkPropPrefix(p) || p;
                }
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                  startUnit = (startValue + "").substr((startNum + "").length);
                  endNum || (endNum = 0);
                  endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                  startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                  this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                  this._pt.u = endUnit || 0;
                  if (startUnit !== endUnit) {
                    this._pt.b = startValue;
                    this._pt.r = _renderCSSPropWithBeginning;
                  }
                } else if (!(p in style)) {
                  if (p in target) {
                    this.add(target, p, target[p], endValue, index, targets);
                  } else {
                    _missingPlugin(p, endValue);
                    continue;
                  }
                } else {
                  _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                }
                props.push(p);
              }
            }
            hasPriority && _sortPropTweensByPriority(this);
          },
          get: _get2,
          aliases: _propertyAliases,
          getSetter: function getSetter(target, property, plugin) {
            var p = _propertyAliases[property];
            p && p.indexOf(",") < 0 && (property = p);
            return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get2(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
          },
          core: {
            _removeProperty,
            _getMatrix
          }
        };
        gsap5.utils.checkPrefix = _checkPropPrefix;
        (function(positionAndScale, rotation, others, aliases) {
          var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
            _transformProps[name] = 1;
          });
          _forEachName(rotation, function(name) {
            _config.units[name] = "deg";
            _rotationalProperties[name] = 1;
          });
          _propertyAliases[all[13]] = positionAndScale + "," + rotation;
          _forEachName(aliases, function(name) {
            var split = name.split(":");
            _propertyAliases[split[1]] = all[split[0]];
          });
        })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
          _config.units[name] = "px";
        });
        gsap5.registerPlugin(CSSPlugin);
        var gsapWithCSS = gsap5.registerPlugin(CSSPlugin) || gsap5, TweenMaxWithCSS = gsapWithCSS.core.Tween;
        exports2.Back = Back;
        exports2.Bounce = Bounce;
        exports2.CSSPlugin = CSSPlugin;
        exports2.Circ = Circ;
        exports2.Cubic = Cubic;
        exports2.Elastic = Elastic;
        exports2.Expo = Expo;
        exports2.Linear = Linear;
        exports2.Power0 = Power0;
        exports2.Power1 = Power1;
        exports2.Power2 = Power2;
        exports2.Power3 = Power3;
        exports2.Power4 = Power4;
        exports2.Quad = Quad;
        exports2.Quart = Quart;
        exports2.Quint = Quint;
        exports2.Sine = Sine;
        exports2.SteppedEase = SteppedEase;
        exports2.Strong = Strong;
        exports2.TimelineLite = Timeline;
        exports2.TimelineMax = Timeline;
        exports2.TweenLite = Tween;
        exports2.TweenMax = TweenMaxWithCSS;
        exports2.default = gsapWithCSS;
        exports2.gsap = gsapWithCSS;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // node_modules/gsap/dist/Flip.js
  var require_Flip = __commonJS({
    "node_modules/gsap/dist/Flip.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = global2 || self, factory(global2.window = global2.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var _doc2, _win2, _docElement, _body2, _divContainer, _svgContainer, _identityMatrix, _transformProp2 = "transform", _transformOriginProp = _transformProp2 + "Origin", _hasOffsetBug, _setDoc = function _setDoc2(element) {
          var doc = element.ownerDocument || element;
          if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
            _transformProp2 = "msTransform";
            _transformOriginProp = _transformProp2 + "Origin";
          }
          while (doc.parentNode && (doc = doc.parentNode)) {
          }
          _win2 = window;
          _identityMatrix = new Matrix2D();
          if (doc) {
            _doc2 = doc;
            _docElement = doc.documentElement;
            _body2 = doc.body;
            var d1 = doc.createElement("div"), d2 = doc.createElement("div");
            _body2.appendChild(d1);
            d1.appendChild(d2);
            d1.style.position = "static";
            d1.style[_transformProp2] = "translate3d(0,0,1px)";
            _hasOffsetBug = d2.offsetParent !== d1;
            _body2.removeChild(d1);
          }
          return doc;
        }, _forceNonZeroScale = function _forceNonZeroScale2(e) {
          var a, cache;
          while (e && e !== _body2) {
            cache = e._gsap;
            cache && cache.uncache && cache.get(e, "x");
            if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
              cache.scaleX = cache.scaleY = 1e-4;
              cache.renderTransform(1, cache);
              a ? a.push(cache) : a = [cache];
            }
            e = e.parentNode;
          }
          return a;
        }, _svgTemps = [], _divTemps = [], _getDocScrollTop = function _getDocScrollTop2() {
          return _win2.pageYOffset || _doc2.scrollTop || _docElement.scrollTop || _body2.scrollTop || 0;
        }, _getDocScrollLeft = function _getDocScrollLeft2() {
          return _win2.pageXOffset || _doc2.scrollLeft || _docElement.scrollLeft || _body2.scrollLeft || 0;
        }, _svgOwner = function _svgOwner2(element) {
          return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
        }, _isFixed = function _isFixed2(element) {
          if (_win2.getComputedStyle(element).position === "fixed") {
            return true;
          }
          element = element.parentNode;
          if (element && element.nodeType === 1) {
            return _isFixed2(element);
          }
        }, _createSibling = function _createSibling2(element, i) {
          if (element.parentNode && (_doc2 || _setDoc(element))) {
            var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc2.createElementNS ? _doc2.createElementNS(ns.replace(/^https/, "http"), type) : _doc2.createElement(type);
            if (i) {
              if (!svg) {
                if (!_divContainer) {
                  _divContainer = _createSibling2(element);
                  _divContainer.style.cssText = css;
                }
                e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                _divContainer.appendChild(e);
              } else {
                _svgContainer || (_svgContainer = _createSibling2(element));
                e.setAttribute("width", 0.01);
                e.setAttribute("height", 0.01);
                e.setAttribute("transform", "translate(" + x + "," + y + ")");
                _svgContainer.appendChild(e);
              }
            }
            return e;
          }
          throw "Need document and parent.";
        }, _consolidate = function _consolidate2(m) {
          var c = new Matrix2D(), i = 0;
          for (; i < m.numberOfItems; i++) {
            c.multiply(m.getItem(i).matrix);
          }
          return c;
        }, _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
          var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
          if (element === _win2) {
            return element;
          }
          siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
          container = svg ? _svgContainer : _divContainer;
          if (svg) {
            b = isRootSVG ? {
              x: 0,
              y: 0
            } : element.getBBox();
            m = element.transform ? element.transform.baseVal : {};
            if (m.numberOfItems) {
              m = m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
              x = m.a * b.x + m.c * b.y;
              y = m.b * b.x + m.d * b.y;
            } else {
              m = _identityMatrix;
              x = b.x;
              y = b.y;
            }
            if (adjustGOffset && element.tagName.toLowerCase() === "g") {
              x = y = 0;
            }
            container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
            (isRootSVG ? svg : parent).appendChild(container);
          } else {
            x = y = 0;
            if (_hasOffsetBug) {
              m = element.offsetParent;
              b = element;
              while (b && (b = b.parentNode) && b !== m && b.parentNode) {
                if ((_win2.getComputedStyle(b)[_transformProp2] + "").length > 4) {
                  x = b.offsetLeft;
                  y = b.offsetTop;
                  b = 0;
                }
              }
            }
            cs = _win2.getComputedStyle(element);
            if (cs.position !== "absolute") {
              m = element.offsetParent;
              while (parent !== m) {
                x += parent.scrollLeft || 0;
                y += parent.scrollTop || 0;
                parent = parent.parentNode;
              }
            }
            b = container.style;
            b.top = element.offsetTop - y + "px";
            b.left = element.offsetLeft - x + "px";
            b[_transformProp2] = cs[_transformProp2];
            b[_transformOriginProp] = cs[_transformOriginProp];
            b.position = cs.position === "fixed" ? "fixed" : "absolute";
            element.parentNode.appendChild(container);
          }
          return container;
        }, _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
          m.a = a;
          m.b = b;
          m.c = c;
          m.d = d;
          m.e = e;
          m.f = f;
          return m;
        };
        var Matrix2D = function() {
          function Matrix2D2(a, b, c, d, e, f) {
            if (a === void 0) {
              a = 1;
            }
            if (b === void 0) {
              b = 0;
            }
            if (c === void 0) {
              c = 0;
            }
            if (d === void 0) {
              d = 1;
            }
            if (e === void 0) {
              e = 0;
            }
            if (f === void 0) {
              f = 0;
            }
            _setMatrix(this, a, b, c, d, e, f);
          }
          var _proto = Matrix2D2.prototype;
          _proto.inverse = function inverse() {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
            return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
          };
          _proto.multiply = function multiply(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
            return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
          };
          _proto.clone = function clone() {
            return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
          };
          _proto.equals = function equals(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
          };
          _proto.apply = function apply(point, decoratee) {
            if (decoratee === void 0) {
              decoratee = {};
            }
            var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            decoratee.x = x * a + y * c + e || 0;
            decoratee.y = x * b + y * d + f || 0;
            return decoratee;
          };
          return Matrix2D2;
        }();
        function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
          if (!element || !element.parentNode || (_doc2 || _setDoc(element)).documentElement === element) {
            return new Matrix2D();
          }
          var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
          parent.removeChild(container);
          if (zeroScales) {
            b1 = zeroScales.length;
            while (b1--) {
              b2 = zeroScales[b1];
              b2.scaleX = b2.scaleY = 0;
              b2.renderTransform(1, b2);
            }
          }
          return inverse ? m.inverse() : m;
        }
        var _id = 1, _toArray2, gsap5, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _emptyObj = {}, _dashedNameLookup = {}, _memoizedRemoveProps = {}, _callbacks = "onStart,onUpdate,onComplete,onReverseComplete,onInterrupt".split(","), _removeProps = "transform,transformOrigin,width,height,position,top,left,opacity,zIndex".split(","), _getEl = function _getEl2(target) {
          return _toArray2(target)[0] || console.warn("Element not found:", target);
        }, _round = function _round2(value) {
          return Math.round(value * 1e4) / 1e4 || 0;
        }, _toggleClass = function _toggleClass2(targets, className, action) {
          return targets.forEach(function(el) {
            return el.classList[action](className);
          });
        }, _reserved = {
          zIndex: 1,
          clear: 1,
          simple: 1,
          spin: 1,
          clearProps: 1,
          targets: 1,
          toggleClass: 1,
          onComplete: 1,
          onUpdate: 1,
          onInterrupt: 1,
          onStart: 1,
          delay: 1,
          repeat: 1,
          repeatDelay: 1,
          yoyo: 1,
          scale: 1,
          fade: 1,
          absolute: 1,
          props: 1,
          onEnter: 1,
          onLeave: 1,
          custom: 1,
          paused: 1,
          nested: 1
        }, _fitReserved = {
          zIndex: 1,
          simple: 1,
          clearProps: 1,
          scale: 1,
          absolute: 1,
          fitChild: 1,
          getVars: 1,
          props: 1
        }, _camelToDashed = function _camelToDashed2(p) {
          return p.replace(/([A-Z])/g, "-$1").toLowerCase();
        }, _listToArray = function _listToArray2(list) {
          return typeof list === "string" ? list.split(" ").join("").split(",") : list;
        }, _closestTenth, _copy = function _copy2(obj, exclude) {
          var result = {}, p;
          for (p in obj) {
            exclude[p] || (result[p] = obj[p]);
          }
          return result;
        }, _memoizedProps = {}, _memoizeProps = function _memoizeProps2(props) {
          var p = _memoizedProps[props] = _listToArray(props);
          _memoizedRemoveProps[props] = p.concat(_removeProps);
          return p;
        }, _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
          var cache = el._gsap || gsap5.core.getCache(el);
          if (cache.gmCache === gsap5.ticker.frame) {
            return cache.gMatrix;
          }
          cache.gmCache = gsap5.ticker.frame;
          return cache.gMatrix = getGlobalMatrix(el, true, false, true);
        }, _getDOMDepth = function _getDOMDepth2(el, invert, level) {
          if (level === void 0) {
            level = 0;
          }
          var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l = invert ? -inc * 900 : 0;
          while (el) {
            l += inc;
            el = el.previousSibling;
          }
          return parent ? l + _getDOMDepth2(parent, invert, level + 1) : l;
        }, _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
          comps.forEach(function(comp) {
            return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
          });
          comps.sort(function(c1, c2) {
            return c1.d - c2.d;
          });
          return comps;
        }, _recordInlineStyles = function _recordInlineStyles2(elState, props) {
          var style = elState.element.style, a = elState.css = elState.css || [], i = props.length, p, v;
          while (i--) {
            p = props[i];
            v = style[p] || style.getPropertyValue(p);
            a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
          }
          return style;
        }, _applyInlineStyles = function _applyInlineStyles2(state) {
          var css = state.css, style = state.element.style, i = 0;
          state.cache.uncache = 1;
          for (; i < css.length; i += 2) {
            css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
          }
        }, _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
          var i = comps.length, comp;
          while (i--) {
            comp = comps[i];
            comp.a.cache.uncache = 1;
          }
          onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
        }, _makeAbsolute = function _makeAbsolute2(elState, fallbackNode) {
          var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, result, displayIsNone;
          typeof fallbackNode !== "object" && (fallbackNode = elState);
          if (getProp("position") !== "absolute") {
            displayIsNone = getProp("display") === "none";
            if (!elState.isVisible || displayIsNone) {
              displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
              elState.matrix = fallbackNode.matrix;
              elState.width = width = elState.width || fallbackNode.width;
              elState.height = height = elState.height || fallbackNode.height;
            }
            style.position = "absolute";
            style.width = width + "px";
            style.height = height + "px";
            style.top || (style.top = "0px");
            style.left || (style.left = "0px");
            if (uncache) {
              result = new ElementState(element);
            } else {
              result = _copy(elState, _emptyObj);
              if (elState.simple) {
                var bounds = element.getBoundingClientRect();
                result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
              } else {
                result.matrix = getGlobalMatrix(element, false, false, true);
              }
            }
            result = _fit(result, elState, true);
            elState.x = parseFloat(result.x);
            elState.y = parseFloat(result.y);
          }
          return element;
        }, _findElStateInState = function _findElStateInState2(state, other) {
          return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
        }, _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
          return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
        }, _recordProps = function _recordProps2(elState, props) {
          var getProp = gsap5.getProperty(elState.element, null, "native"), obj = elState.props = {}, i = props.length;
          while (i--) {
            obj[props[i]] = (getProp(props[i]) + "").trim();
          }
          obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
          return elState;
        }, _applyProps = function _applyProps2(element, props) {
          var style = element.style || element, p;
          for (p in props) {
            style[p] = props[p];
          }
        }, _getID = function _getID2(el) {
          var id = el.getAttribute("data-flip-id");
          id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
          return id;
        }, _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
          return elStates.map(function(elState) {
            return elState.element;
          });
        }, _handleCallback = function _handleCallback2(callback, elStates, tl) {
          return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
        }, _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
          var element = fromState.element, cache = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, cssText = vars && element.style.cssText, dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.width !== width || fromState.height !== height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix;
          if (simple) {
            scaleX = scaleY = 1;
            rotation = skewX = 0;
          } else {
            parentMatrix = _getInverseGlobalMatrix(parent);
            matrix = parentMatrix.clone().multiply(toState.matrix);
            rotation = _round(Math.atan2(matrix.b, matrix.a) * _RAD2DEG);
            skewX = _round(Math.atan2(matrix.c, matrix.d) * _RAD2DEG + rotation) % 360;
            scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
            scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD);
            if (fitChild) {
              getProp = gsap5.getProperty(fitChild);
              dimensionState = {
                scaleX: getProp("scaleX"),
                scaleY: getProp("scaleY"),
                width: Math.ceil(parseFloat(getProp("width", "px"))),
                height: parseFloat(getProp("height", "px"))
              };
            }
            cache.rotation = rotation + "deg";
            cache.skewX = skewX + "deg";
          }
          if (scale) {
            scaleX *= width / dimensionState.width;
            scaleY *= height / dimensionState.height;
            cache.scaleX = scaleX;
            cache.scaleY = scaleY;
          } else {
            width *= scaleX / dimensionState.scaleX;
            height *= scaleY / dimensionState.scaleY;
            element.style.width = width + "px";
            element.style.height = height + "px";
          }
          if (fromState.position === "fixed") {
            e -= _getDocScrollLeft();
            f -= _getDocScrollTop();
          }
          if (toState.position === "fixed") {
            e += _getDocScrollLeft();
            f += _getDocScrollTop();
          }
          applyProps && _applyProps(element, toState.props);
          if (simple) {
            x += e - fromState.matrix.e;
            y += f - fromState.matrix.f;
          } else if (deep || parent !== toState.parent) {
            cache.renderTransform(1, cache);
            matrix = getGlobalMatrix(fitChild || element, false, false, true);
            fromPoint = parentMatrix.apply({
              x: matrix.e,
              y: matrix.f
            });
            toPoint = parentMatrix.apply({
              x: e,
              y: f
            });
            x += _round(toPoint.x - fromPoint.x);
            y += _round(toPoint.y - fromPoint.y);
          } else {
            parentMatrix.e = parentMatrix.f = 0;
            toPoint = parentMatrix.apply({
              x: e - fromState.matrix.e,
              y: f - fromState.matrix.f
            });
            x += _round(toPoint.x);
            y += _round(toPoint.y);
          }
          if (vars && !(vars instanceof ElementState)) {
            element.style.cssText = cssText;
            cache.uncache = 1;
          } else {
            cache.x = x + "px";
            cache.y = y + "px";
            cache.renderTransform(1, cache);
          }
          if (vars) {
            vars.x = x;
            vars.y = y;
            vars.rotation = rotation;
            vars.skewX = skewX;
            if (scale) {
              vars.scaleX = scaleX;
              vars.scaleY = scaleY;
            } else {
              vars.width = width;
              vars.height = height;
            }
          }
          return vars || cache;
        }, _parseState = function _parseState2(targetsOrState, vars) {
          return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
        }, _getChangingElState = function _getChangingElState2(toState, fromState, id) {
          var to1 = toState.idLookup[id], to2 = toState.alt[id];
          return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
        }, _fromTo = function _fromTo2(fromState, toState, vars, relative) {
          fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
          vars = vars || {};
          var _vars = vars, clearProps = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap5.timeline({
            delay,
            paused,
            repeat,
            repeatDelay,
            yoyo
          }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
            return spinNum;
          }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i, el, comp, state, targets, finalStates, fromNode, toNode;
          relative || (toState = new FlipState(toState.targets, props).fit(toState, scale));
          for (p in toState.idLookup) {
            toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
            el = toNode.element;
            fromNode = fromState.idLookup[p];
            fromState.alt[p] && el === fromNode.element && (fromNode = fromState.alt[p]);
            if (fromNode) {
              comp = {
                t: el,
                b: fromNode,
                a: toNode,
                sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
              };
              comps.push(comp);
              if (comp.sd) {
                if (comp.sd < 0) {
                  comp.b = toNode;
                  comp.a = fromNode;
                }
                fade && comps.push(comp.swap = {
                  t: fromNode.element,
                  b: comp.b,
                  a: comp.a,
                  sd: comp.sd * -1,
                  swap: comp
                });
              }
              el._flip = fromNode.element._flip = animation;
            } else if (toNode.isVisible) {
              comps.push({
                t: el,
                b: _copy(toNode, {
                  isVisible: 1
                }),
                a: toNode,
                sd: 0
              });
              el._flip = animation;
            }
          }
          props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p2) {
            return tweenVars[p2] = function(i2) {
              return comps[i2].a.props[p2];
            };
          });
          comps.finalStates = finalStates = [];
          absolute && _orderByDOMDepth(comps, true).forEach(function(c) {
            return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b);
          });
          _orderByDOMDepth(comps);
          for (i = 0; i < comps.length; i++) {
            comp = comps[i];
            el = comp.t;
            nested && !(comp.sd < 0) && (comp.a.matrix = getGlobalMatrix(el, false, false, true));
            if (comp.sd || comp.b.isVisible && comp.a.isVisible) {
              if (comp.sd < 0) {
                state = new ElementState(el, props, fromState.simple);
                _fit(state, comp.a, scale, 0, 0, state);
                state.matrix = getGlobalMatrix(el, false, false, true);
                state.css = comp.b.css;
                comp.a = state;
                fade && (el.style.opacity = interrupted ? comp.b.opacity : comp.a.opacity);
                stagger && swapOutTargets.push(el);
              } else if (comp.sd > 0 && fade) {
                el.style.opacity = interrupted ? comp.a.opacity - comp.b.opacity : "0";
              }
              _fit(comp.a, comp.b, scale, props);
            } else {
              if (!comp.b.isVisible) {
                comp.a.isVisible && entering.push(comp.a);
                comps.splice(i--, 1);
              } else if (!comp.a.isVisible) {
                comp.b.css = comp.a.css;
                leaving.push(comp.b);
                comps.splice(i--, 1);
                absolute && nested && _fit(comp.a, comp.b, scale, props);
              }
            }
            finalStates.push(comp.a);
          }
          if (scale) {
            tweenVars.scaleX = function(i2) {
              return comps[i2].a.scaleX;
            };
            tweenVars.scaleY = function(i2) {
              return comps[i2].a.scaleY;
            };
          } else {
            tweenVars.width = function(i2) {
              return comps[i2].a.width;
            };
            tweenVars.height = function(i2) {
              return comps[i2].a.height;
            };
            tweenVars.autoRound = vars.autoRound || false;
          }
          tweenVars.x = function(i2) {
            return comps[i2].a.x;
          };
          tweenVars.y = function(i2) {
            return comps[i2].a.y;
          };
          tweenVars.rotation = function(i2) {
            return comps[i2].a.rotation + (spin ? spinFunc(i2, targets[i2], targets) * 360 : 0);
          };
          tweenVars.skewX = function(i2) {
            return comps[i2].a.skewX;
          };
          (_zIndex || _zIndex === 0) && (tweenVars.modifiers = {
            zIndex: function zIndex() {
              return _zIndex;
            }
          }) && (tweenVars.zIndex = 0);
          targets = comps.map(function(c) {
            return c.t;
          });
          fade && (tweenVars.opacity = function(i2) {
            return comps[i2].sd < 0 ? 0 : comps[i2].sd > 0 ? comps[i2].a.opacity : "+=0";
          });
          if (swapOutTargets.length) {
            stagger = gsap5.utils.distribute(stagger);
            var dummyArray = targets.slice(swapOutTargets.length);
            tweenVars.stagger = function(i2, el2) {
              return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i2].swap.t) : i2, el2, dummyArray);
            };
          }
          _callbacks.forEach(function(name) {
            return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
          });
          if (custom && targets.length) {
            remainingProps = _copy(tweenVars, _reserved);
            if ("scale" in custom) {
              custom.scaleX = custom.scaleY = custom.scale;
              delete custom.scale;
            }
            for (p in custom) {
              v = _copy(custom[p], _fitReserved);
              v[p] = tweenVars[p];
              !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
              v.stagger = tweenVars.stagger;
              addFunc.call(animation, targets, v, 0);
              delete remainingProps[p];
            }
          }
          if (targets.length || leaving.length || entering.length) {
            toggleClass && animation.add(function() {
              return _toggleClass(targets, toggleClass, animation._zTime < 0 ? "remove" : "add");
            }, 0) && !paused && _toggleClass(targets, toggleClass, "add");
            targets.length && addFunc.call(animation, targets, remainingProps, 0);
          }
          _handleCallback(onEnter, entering, animation);
          _handleCallback(onLeave, leaving, animation);
          endTime = animation.duration();
          animation.call(function() {
            var forward = animation.time() >= endTime;
            forward && _setFinalStates(comps, !clearProps);
            toggleClass && _toggleClass(targets, toggleClass, forward ? "remove" : "add");
          });
          return animation;
        }, _createLookup = function _createLookup2(state) {
          var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i = elStates.length, elState;
          while (i--) {
            elState = elStates[i];
            lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
          }
        };
        var FlipState = function() {
          function FlipState2(targets, vars, targetsAreElementStates) {
            this.props = vars && vars.props;
            this.simple = !!(vars && vars.simple);
            if (targetsAreElementStates) {
              this.targets = _elementsFromElementStates(targets);
              this.elementStates = targets;
              _createLookup(this);
            } else {
              this.targets = _toArray2(targets);
              this.update(!vars || vars.clear !== false);
            }
          }
          var _proto = FlipState2.prototype;
          _proto.update = function update(clear) {
            var _this = this;
            this.elementStates = this.targets.map(function(el) {
              return new ElementState(el, _this.props, _this.simple);
            });
            _createLookup(this);
            this.killFlips(clear);
            this.recordInlineStyles();
            return this;
          };
          _proto.fit = function fit(state, scale, nested) {
            var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i = 0, fromNode, toNode;
            for (; i < elStatesInOrder.length; i++) {
              fromNode = elStatesInOrder[i];
              nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
              toNode = toElStates[fromNode.id];
              toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
              fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
            }
            return this;
          };
          _proto.getProperty = function getProperty(element, property) {
            var es = this.getElementState(element) || _emptyObj;
            return property in es ? es[property] : (es.props || _emptyObj)[property];
          };
          _proto.recordInlineStyles = function recordInlineStyles() {
            var props = _memoizedRemoveProps[this.props] || _removeProps, i = this.elementStates.length;
            while (i--) {
              _recordInlineStyles(this.elementStates[i], props);
            }
          };
          _proto.killFlips = function killFlips(clear) {
            var found;
            this.targets.forEach(function(tl) {
              tl = tl._flip;
              if (tl && tl.progress() < 1 && !tl.paused()) {
                found = 1;
                tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
                clear && tl.progress(1);
                tl.kill();
              }
            });
            if (found && clear) {
              this.elementStates.forEach(function(es) {
                var b = es.element.getBoundingClientRect();
                es.isVisible = b.width || b.height || b.top || b.left;
                es.uncache = 1;
              });
            }
            this.interrupted = !!found;
          };
          _proto.getElementState = function getElementState(element) {
            return this.elementStates[this.targets.indexOf(_getEl(element))];
          };
          _proto.makeAbsolute = function makeAbsolute() {
            return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
          };
          return FlipState2;
        }();
        var ElementState = function() {
          function ElementState2(element, props, simple) {
            this.element = element;
            this.update(props, simple);
          }
          var _proto2 = ElementState2.prototype;
          _proto2.update = function update(props, simple) {
            var element = this.element, getProp = gsap5.getProperty(element), cache = gsap5.core.getCache(element), bounds = element.getBoundingClientRect(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
            this.getProp = getProp;
            this.element = element;
            this.id = _getID(element);
            this.matrix = m;
            this.cache = cache;
            this.bounds = bounds;
            this.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
            this.display = getProp("display");
            this.position = getProp("position");
            this.parent = element.parentNode;
            this.x = getProp("x");
            this.y = getProp("y");
            this.scaleX = cache.scaleX;
            this.scaleY = cache.scaleY;
            this.rotation = getProp("rotation");
            this.skewX = getProp("skewX");
            this.opacity = getProp("opacity");
            this.width = _closestTenth(parseFloat(getProp("width", "px")) + 0.04);
            this.height = parseFloat(getProp("height", "px"));
            props && _recordProps(this, _memoizedProps[props] || _memoizeProps(props));
            this.simple = simple || _round(m.a) === 1 && !_round(m.b) && !_round(m.c) && _round(m.d) === 1;
            this.uncache = 0;
          };
          return ElementState2;
        }();
        var Flip3 = function() {
          function Flip4() {
          }
          Flip4.getState = function getState(targets, vars) {
            return _parseState(targets, typeof vars === "string" ? {
              props: vars
            } : vars);
          };
          Flip4.from = function from(state, vars) {
            vars = vars || {};
            "clearProps" in vars || (vars.clearProps = true);
            return _fromTo(state, _parseState(vars.targets || state.targets, {
              props: vars.props || state.props,
              simple: vars.simple,
              clear: !!vars.clear
            }), vars, -1);
          };
          Flip4.to = function to(state, vars) {
            return _fromTo(state, _parseState(vars.targets || state.targets, {
              props: vars.props || state.props,
              simple: vars.simple,
              clear: !!vars.clear
            }), vars, 1);
          };
          Flip4.fromTo = function fromTo(fromState, toState, vars) {
            return _fromTo(fromState, toState, vars);
          };
          Flip4.fit = function fit(fromEl, toEl, vars) {
            var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps;
            props && _applyProps(v, before.props);
            if (runBackwards) {
              _recordInlineStyles(after, inlineProps);
              "immediateRender" in v || (v.immediateRender = true);
              v.onComplete = function() {
                _applyInlineStyles(after);
                onComplete && onComplete.apply(this, arguments);
              };
            }
            absolute && _makeAbsolute(after, before);
            v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
            return getVars ? v : v.duration ? gsap5.to(after.element, v) : null;
          };
          Flip4.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
            return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
          };
          Flip4.isFlipping = function isFlipping(target) {
            var f = Flip4.getByTarget(target);
            return !!f && f.isActive();
          };
          Flip4.getByTarget = function getByTarget(target) {
            return (_getEl(target) || _emptyObj)._flip;
          };
          Flip4.getElementState = function getElementState(target, props) {
            return new ElementState(_getEl(target), props);
          };
          Flip4.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
            var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
            return point ? m.apply(point) : m;
          };
          Flip4.register = function register(core) {
            gsap5 = core;
            _setDoc(document.body);
            _toArray2 = gsap5.utils.toArray;
            _closestTenth = gsap5.utils.snap(0.1);
          };
          return Flip4;
        }();
        typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip3);
        exports2.Flip = Flip3;
        exports2.default = Flip3;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/splitting/dist/splitting.js
  var require_splitting = __commonJS({
    "node_modules/splitting/dist/splitting.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.Splitting = factory();
      })(exports, function() {
        "use strict";
        var root = document;
        var createText = root.createTextNode.bind(root);
        function setProperty(el, varName, value) {
          el.style.setProperty(varName, value);
        }
        function appendChild(el, child) {
          return el.appendChild(child);
        }
        function createElement(parent, key, text, whitespace) {
          var el = root.createElement("span");
          key && (el.className = key);
          if (text) {
            !whitespace && el.setAttribute("data-" + key, text);
            el.textContent = text;
          }
          return parent && appendChild(parent, el) || el;
        }
        function getData(el, key) {
          return el.getAttribute("data-" + key);
        }
        function $(e, parent) {
          return !e || e.length == 0 ? (
            // null or empty string returns empty array
            []
          ) : e.nodeName ? (
            // a single element is wrapped in an array
            [e]
          ) : (
            // selector and NodeList are converted to Element[]
            [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e))
          );
        }
        function Array2D(len) {
          var a = [];
          for (; len--; ) {
            a[len] = [];
          }
          return a;
        }
        function each(items, fn) {
          items && items.some(fn);
        }
        function selectFrom(obj) {
          return function(key) {
            return obj[key];
          };
        }
        function index(element, key, items) {
          var prefix = "--" + key;
          var cssVar = prefix + "-index";
          each(items, function(items2, i) {
            if (Array.isArray(items2)) {
              each(items2, function(item) {
                setProperty(item, cssVar, i);
              });
            } else {
              setProperty(items2, cssVar, i);
            }
          });
          setProperty(element, prefix + "-total", items.length);
        }
        var plugins = {};
        function resolvePlugins(by, parent, deps) {
          var index2 = deps.indexOf(by);
          if (index2 == -1) {
            deps.unshift(by);
            each(plugins[by].depends, function(p) {
              resolvePlugins(p, by, deps);
            });
          } else {
            var indexOfParent = deps.indexOf(parent);
            deps.splice(index2, 1);
            deps.splice(indexOfParent, 0, by);
          }
          return deps;
        }
        function createPlugin(by, depends, key, split) {
          return {
            by,
            depends,
            key,
            split
          };
        }
        function resolve(by) {
          return resolvePlugins(by, 0, []).map(selectFrom(plugins));
        }
        function add(opts) {
          plugins[opts.by] = opts;
        }
        function splitText(el, key, splitOn, includePrevious, preserveWhitespace) {
          el.normalize();
          var elements = [];
          var F = document.createDocumentFragment();
          if (includePrevious) {
            elements.push(el.previousSibling);
          }
          var allElements = [];
          $(el.childNodes).some(function(next) {
            if (next.tagName && !next.hasChildNodes()) {
              allElements.push(next);
              return;
            }
            if (next.childNodes && next.childNodes.length) {
              allElements.push(next);
              elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));
              return;
            }
            var wholeText = next.wholeText || "";
            var contents = wholeText.trim();
            if (contents.length) {
              if (wholeText[0] === " ") {
                allElements.push(createText(" "));
              }
              each(contents.split(splitOn), function(splitText2, i) {
                if (i && preserveWhitespace) {
                  allElements.push(createElement(F, "whitespace", " ", preserveWhitespace));
                }
                var splitEl = createElement(F, key, splitText2);
                elements.push(splitEl);
                allElements.push(splitEl);
              });
              if (wholeText[wholeText.length - 1] === " ") {
                allElements.push(createText(" "));
              }
            }
          });
          each(allElements, function(el2) {
            appendChild(F, el2);
          });
          el.innerHTML = "";
          appendChild(el, F);
          return elements;
        }
        var _ = 0;
        function copy(dest, src2) {
          for (var k in src2) {
            dest[k] = src2[k];
          }
          return dest;
        }
        var WORDS = "words";
        var wordPlugin = createPlugin(
          /*by: */
          WORDS,
          /*depends: */
          _,
          /*key: */
          "word",
          /*split: */
          function(el) {
            return splitText(el, "word", /\s+/, 0, 1);
          }
        );
        var CHARS = "chars";
        var charPlugin = createPlugin(
          /*by: */
          CHARS,
          /*depends: */
          [WORDS],
          /*key: */
          "char",
          /*split: */
          function(el, options, ctx) {
            var results = [];
            each(ctx[WORDS], function(word, i) {
              results.push.apply(results, splitText(word, "char", "", options.whitespace && i));
            });
            return results;
          }
        );
        function Splitting3(opts) {
          opts = opts || {};
          var key = opts.key;
          return $(opts.target || "[data-splitting]").map(function(el) {
            var ctx = el["\u{1F34C}"];
            if (!opts.force && ctx) {
              return ctx;
            }
            ctx = el["\u{1F34C}"] = { el };
            var items = resolve(opts.by || getData(el, "splitting") || CHARS);
            var opts2 = copy({}, opts);
            each(items, function(plugin) {
              if (plugin.split) {
                var pluginBy = plugin.by;
                var key2 = (key ? "-" + key : "") + plugin.key;
                var results = plugin.split(el, opts2, ctx);
                key2 && index(el, key2, results);
                ctx[pluginBy] = results;
                el.classList.add(pluginBy);
              }
            });
            el.classList.add("splitting");
            return ctx;
          });
        }
        function html(opts) {
          opts = opts || {};
          var parent = opts.target = createElement();
          parent.innerHTML = opts.content;
          Splitting3(opts);
          return parent.outerHTML;
        }
        Splitting3.html = html;
        Splitting3.add = add;
        function detectGrid(el, options, side) {
          var items = $(options.matching || el.children, el);
          var c = {};
          each(items, function(w) {
            var val = Math.round(w[side]);
            (c[val] || (c[val] = [])).push(w);
          });
          return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));
        }
        function byNumber(a, b) {
          return a - b;
        }
        var linePlugin = createPlugin(
          /*by: */
          "lines",
          /*depends: */
          [WORDS],
          /*key: */
          "line",
          /*split: */
          function(el, options, ctx) {
            return detectGrid(el, { matching: ctx[WORDS] }, "offsetTop");
          }
        );
        var itemPlugin = createPlugin(
          /*by: */
          "items",
          /*depends: */
          _,
          /*key: */
          "item",
          /*split: */
          function(el, options) {
            return $(options.matching || el.children, el);
          }
        );
        var rowPlugin = createPlugin(
          /*by: */
          "rows",
          /*depends: */
          _,
          /*key: */
          "row",
          /*split: */
          function(el, options) {
            return detectGrid(el, options, "offsetTop");
          }
        );
        var columnPlugin = createPlugin(
          /*by: */
          "cols",
          /*depends: */
          _,
          /*key: */
          "col",
          /*split: */
          function(el, options) {
            return detectGrid(el, options, "offsetLeft");
          }
        );
        var gridPlugin = createPlugin(
          /*by: */
          "grid",
          /*depends: */
          ["rows", "cols"]
        );
        var LAYOUT = "layout";
        var layoutPlugin = createPlugin(
          /*by: */
          LAYOUT,
          /*depends: */
          _,
          /*key: */
          _,
          /*split: */
          function(el, opts) {
            var rows = opts.rows = +(opts.rows || getData(el, "rows") || 1);
            var columns = opts.columns = +(opts.columns || getData(el, "columns") || 1);
            opts.image = opts.image || getData(el, "image") || el.currentSrc || el.src;
            if (opts.image) {
              var img = $("img", el)[0];
              opts.image = img && (img.currentSrc || img.src);
            }
            if (opts.image) {
              setProperty(el, "background-image", "url(" + opts.image + ")");
            }
            var totalCells = rows * columns;
            var elements = [];
            var container = createElement(_, "cell-grid");
            while (totalCells--) {
              var cell = createElement(container, "cell");
              createElement(cell, "cell-inner");
              elements.push(cell);
            }
            appendChild(el, container);
            return elements;
          }
        );
        var cellRowPlugin = createPlugin(
          /*by: */
          "cellRows",
          /*depends: */
          [LAYOUT],
          /*key: */
          "row",
          /*split: */
          function(el, opts, ctx) {
            var rowCount = opts.rows;
            var result = Array2D(rowCount);
            each(ctx[LAYOUT], function(cell, i, src2) {
              result[Math.floor(i / (src2.length / rowCount))].push(cell);
            });
            return result;
          }
        );
        var cellColumnPlugin = createPlugin(
          /*by: */
          "cellColumns",
          /*depends: */
          [LAYOUT],
          /*key: */
          "col",
          /*split: */
          function(el, opts, ctx) {
            var columnCount = opts.columns;
            var result = Array2D(columnCount);
            each(ctx[LAYOUT], function(cell, i) {
              result[i % columnCount].push(cell);
            });
            return result;
          }
        );
        var cellPlugin = createPlugin(
          /*by: */
          "cells",
          /*depends: */
          ["cellRows", "cellColumns"],
          /*key: */
          "cell",
          /*split: */
          function(el, opt, ctx) {
            return ctx[LAYOUT];
          }
        );
        add(wordPlugin);
        add(charPlugin);
        add(linePlugin);
        add(itemPlugin);
        add(rowPlugin);
        add(columnPlugin);
        add(gridPlugin);
        add(layoutPlugin);
        add(cellRowPlugin);
        add(cellColumnPlugin);
        add(cellPlugin);
        return Splitting3;
      });
    }
  });

  // src/assets/scripts/modules/app.js
  var import_core = __toESM(require_barba_umd());

  // node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target2, property2, receiver2) {
        var base = _superPropBase(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i2 = arr[Symbol.iterator](), _s; !(_n = (_s = _i2.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i2["return"] != null)
          _i2["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var defaults = {
    el: document,
    name: "scroll",
    offset: [0, 0],
    repeat: false,
    smooth: false,
    initPosition: {
      x: 0,
      y: 0
    },
    direction: "vertical",
    gestureDirection: "vertical",
    reloadOnContextChange: false,
    lerp: 0.1,
    "class": "is-inview",
    scrollbarContainer: false,
    scrollbarClass: "c-scrollbar",
    scrollingClass: "has-scroll-scrolling",
    draggingClass: "has-scroll-dragging",
    smoothClass: "has-scroll-smooth",
    initClass: "has-scroll-init",
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "vertical",
      breakpoint: 1024
    },
    smartphone: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "vertical"
    }
  };
  var _default = /* @__PURE__ */ function() {
    function _default2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      this.namespace = "locomotive";
      this.html = document.documentElement;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.els = {};
      this.currentElements = {};
      this.listeners = {};
      this.hasScrollTicking = false;
      this.hasCallEventSet = false;
      this.checkScroll = this.checkScroll.bind(this);
      this.checkResize = this.checkResize.bind(this);
      this.checkEvent = this.checkEvent.bind(this);
      this.instance = {
        scroll: {
          x: 0,
          y: 0
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight
        },
        currentElements: this.currentElements
      };
      if (this.isMobile) {
        if (this.isTablet) {
          this.context = "tablet";
        } else {
          this.context = "smartphone";
        }
      } else {
        this.context = "desktop";
      }
      if (this.isMobile)
        this.direction = this[this.context].direction;
      if (this.direction === "horizontal") {
        this.directionAxis = "x";
      } else {
        this.directionAxis = "y";
      }
      if (this.getDirection) {
        this.instance.direction = null;
      }
      if (this.getDirection) {
        this.instance.speed = 0;
      }
      this.html.classList.add(this.initClass);
      window.addEventListener("resize", this.checkResize, false);
    }
    _createClass(_default2, [{
      key: "init",
      value: function init() {
        this.initEvents();
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        this.dispatchScroll();
      }
    }, {
      key: "checkResize",
      value: function checkResize() {
        var _this = this;
        if (!this.resizeTick) {
          this.resizeTick = true;
          requestAnimationFrame(function() {
            _this.resize();
            _this.resizeTick = false;
          });
        }
      }
    }, {
      key: "resize",
      value: function resize() {
      }
    }, {
      key: "checkContext",
      value: function checkContext() {
        if (!this.reloadOnContextChange)
          return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        var oldContext = this.context;
        if (this.isMobile) {
          if (this.isTablet) {
            this.context = "tablet";
          } else {
            this.context = "smartphone";
          }
        } else {
          this.context = "desktop";
        }
        if (oldContext != this.context) {
          var oldSmooth = oldContext == "desktop" ? this.smooth : this[oldContext].smooth;
          var newSmooth = this.context == "desktop" ? this.smooth : this[this.context].smooth;
          if (oldSmooth != newSmooth)
            window.location.reload();
        }
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;
        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach(function(el) {
          el.addEventListener("click", _this2.setScrollTo, false);
        });
      }
    }, {
      key: "setScrollTo",
      value: function setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute("href"), {
          offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
        });
      }
    }, {
      key: "addElements",
      value: function addElements() {
      }
    }, {
      key: "detectElements",
      value: function detectElements(hasCallEventSet) {
        var _this3 = this;
        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight;
        var scrollLeft = this.instance.scroll.x;
        var scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
          if (el && (!el.inView || hasCallEventSet)) {
            if (_this3.direction === "horizontal") {
              if (scrollRight >= el.left && scrollLeft < el.right) {
                _this3.setInView(el, i);
              }
            } else {
              if (scrollBottom >= el.top && scrollTop < el.bottom) {
                _this3.setInView(el, i);
              }
            }
          }
          if (el && el.inView) {
            if (_this3.direction === "horizontal") {
              var width = el.right - el.left;
              el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);
              if (scrollRight < el.left || scrollLeft > el.right) {
                _this3.setOutOfView(el, i);
              }
            } else {
              var height = el.bottom - el.top;
              el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);
              if (scrollBottom < el.top || scrollTop > el.bottom) {
                _this3.setOutOfView(el, i);
              }
            }
          }
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "setInView",
      value: function setInView(current, i) {
        this.els[i].inView = true;
        current.el.classList.add(current["class"]);
        this.currentElements[i] = current;
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "enter");
          if (!current.repeat) {
            this.els[i].call = false;
          }
        }
      }
    }, {
      key: "setOutOfView",
      value: function setOutOfView(current, i) {
        var _this4 = this;
        this.els[i].inView = false;
        Object.keys(this.currentElements).forEach(function(el) {
          el === i && delete _this4.currentElements[el];
        });
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "exit");
        }
        if (current.repeat) {
          current.el.classList.remove(current["class"]);
        }
      }
    }, {
      key: "dispatchCall",
      value: function dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(",").map(function(item) {
          return item.trim();
        });
        this.callObj = current;
        if (this.callValue.length == 1)
          this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + "call");
        this.el.dispatchEvent(callEvent);
      }
    }, {
      key: "dispatchScroll",
      value: function dispatchScroll() {
        var scrollEvent = new Event(this.namespace + "scroll");
        this.el.dispatchEvent(scrollEvent);
      }
    }, {
      key: "setEvents",
      value: function setEvents(event, func) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }
        var list = this.listeners[event];
        list.push(func);
        if (list.length === 1) {
          this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }
        if (event === "call") {
          this.hasCallEventSet = true;
          this.detectElements(true);
        }
      }
    }, {
      key: "unsetEvents",
      value: function unsetEvents(event, func) {
        if (!this.listeners[event])
          return;
        var list = this.listeners[event];
        var index = list.indexOf(func);
        if (index < 0)
          return;
        list.splice(index, 1);
        if (list.index === 0) {
          this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
      }
    }, {
      key: "checkEvent",
      value: function checkEvent(event) {
        var _this5 = this;
        var name = event.type.replace(this.namespace, "");
        var list = this.listeners[name];
        if (!list || list.length === 0)
          return;
        list.forEach(function(func) {
          switch (name) {
            case "scroll":
              return func(_this5.instance);
            case "call":
              return func(_this5.callValue, _this5.callWay, _this5.callObj);
            default:
              return func();
          }
        });
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance.scroll = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;
        window.removeEventListener("resize", this.checkResize, false);
        Object.keys(this.listeners).forEach(function(event) {
          _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach(function(el) {
          el.removeEventListener("click", _this6.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
      }
    }]);
    return _default2;
  }();
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  var smoothscroll = createCommonjsModule(function(module, exports) {
    (function() {
      function polyfill() {
        var w = window;
        var d = document;
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        }
        var Element2 = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element2.prototype.scroll || scrollElement,
          scrollIntoView: Element2.prototype.scrollIntoView
        };
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        function shouldBailOut(firstArg) {
          if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
            return true;
          }
          if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
            return false;
          }
          throw new TypeError(
            "behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior."
          );
        }
        function hasScrollableSpace(el, axis) {
          if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }
          if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
          return overflowValue === "auto" || overflowValue === "scroll";
        }
        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
          var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
          return isScrollableY || isScrollableX;
        }
        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }
          return el;
        }
        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME;
          elapsed = elapsed > 1 ? 1 : elapsed;
          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY);
          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }
        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now();
          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          }
          step({
            scrollable,
            method,
            startTime,
            startX,
            startY,
            x,
            y
          });
        }
        w.scroll = w.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
              w,
              arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset,
              // use top prop, second argument if present or fallback to scrollY
              arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset
            );
            return;
          }
          smoothScroll.call(
            w,
            d.body,
            arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset,
            arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset
          );
        };
        w.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
              w,
              arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0,
              arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0
            );
            return;
          }
          smoothScroll.call(
            w,
            d.body,
            ~~arguments[0].left + (w.scrollX || w.pageXOffset),
            ~~arguments[0].top + (w.scrollY || w.pageYOffset)
          );
        };
        Element2.prototype.scroll = Element2.prototype.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === "number" && arguments[1] === void 0) {
              throw new SyntaxError("Value could not be converted");
            }
            original.elementScroll.call(
              this,
              // use left prop, first number argument or fallback to scrollLeft
              arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft,
              // use top prop, second argument or fallback to scrollTop
              arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop
            );
            return;
          }
          var left = arguments[0].left;
          var top = arguments[0].top;
          smoothScroll.call(
            this,
            this,
            typeof left === "undefined" ? this.scrollLeft : ~~left,
            typeof top === "undefined" ? this.scrollTop : ~~top
          );
        };
        Element2.prototype.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(
              this,
              arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
              arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
            );
            return;
          }
          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        };
        Element2.prototype.scrollIntoView = function() {
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
              this,
              arguments[0] === void 0 ? true : arguments[0]
            );
            return;
          }
          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();
          if (scrollableParent !== d.body) {
            smoothScroll.call(
              this,
              scrollableParent,
              scrollableParent.scrollLeft + clientRects.left - parentRects.left,
              scrollableParent.scrollTop + clientRects.top - parentRects.top
            );
            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: "smooth"
              });
            }
          } else {
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: "smooth"
            });
          }
        };
      }
      {
        module.exports = { polyfill };
      }
    })();
  });
  var smoothscroll_1 = smoothscroll.polyfill;
  var _default$1 = /* @__PURE__ */ function(_Core) {
    _inherits(_default2, _Core);
    var _super = _createSuper(_default2);
    function _default2() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      _this = _super.call(this, options);
      if (_this.resetNativeScroll) {
        if (history.scrollRestoration) {
          history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
      }
      window.addEventListener("scroll", _this.checkScroll, false);
      if (window.smoothscrollPolyfill === void 0) {
        window.smoothscrollPolyfill = smoothscroll;
        window.smoothscrollPolyfill.polyfill();
      }
      return _this;
    }
    _createClass(_default2, [{
      key: "init",
      value: function init() {
        this.instance.scroll.y = window.pageYOffset;
        this.addElements();
        this.detectElements();
        _get(_getPrototypeOf(_default2.prototype), "init", this).call(this);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this2 = this;
        _get(_getPrototypeOf(_default2.prototype), "checkScroll", this).call(this);
        if (this.getDirection) {
          this.addDirection();
        }
        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }
        this.instance.scroll.y = window.pageYOffset;
        if (Object.entries(this.els).length) {
          if (!this.hasScrollTicking) {
            requestAnimationFrame(function() {
              _this2.detectElements();
            });
            this.hasScrollTicking = true;
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (window.pageYOffset > this.instance.scroll.y) {
          if (this.instance.direction !== "down") {
            this.instance.direction = "down";
          }
        } else if (window.pageYOffset < this.instance.scroll.y) {
          if (this.instance.direction !== "up") {
            this.instance.direction = "up";
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (window.pageYOffset != this.instance.scroll.y) {
          this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        if (Object.entries(this.els).length) {
          this.windowHeight = window.innerHeight;
          this.updateElements();
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this3 = this;
        this.els = {};
        var els = this.el.querySelectorAll("[data-" + this.name + "]");
        els.forEach(function(el, index) {
          var BCR = el.getBoundingClientRect();
          var cl = el.dataset[_this3.name + "Class"] || _this3["class"];
          var id = typeof el.dataset[_this3.name + "Id"] === "string" ? el.dataset[_this3.name + "Id"] : index;
          var top;
          var left;
          var offset = typeof el.dataset[_this3.name + "Offset"] === "string" ? el.dataset[_this3.name + "Offset"].split(",") : _this3.offset;
          var repeat = el.dataset[_this3.name + "Repeat"];
          var call = el.dataset[_this3.name + "Call"];
          var target = el.dataset[_this3.name + "Target"];
          var targetEl;
          if (target !== void 0) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }
          var targetElBCR = targetEl.getBoundingClientRect();
          top = targetElBCR.top + _this3.instance.scroll.y;
          left = targetElBCR.left + _this3.instance.scroll.x;
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          if (repeat == "false") {
            repeat = false;
          } else if (repeat != void 0) {
            repeat = true;
          } else {
            repeat = _this3.repeat;
          }
          var relativeOffset = _this3.getRelativeOffset(offset);
          top = top + relativeOffset[0];
          bottom = bottom - relativeOffset[1];
          var mappedEl = {
            el,
            targetEl,
            id,
            "class": cl,
            top,
            bottom,
            left,
            right,
            offset,
            progress: 0,
            repeat,
            inView: false,
            call
          };
          _this3.els[id] = mappedEl;
          if (el.classList.contains(cl)) {
            _this3.setInView(_this3.els[id], id);
          }
        });
      }
    }, {
      key: "updateElements",
      value: function updateElements() {
        var _this4 = this;
        Object.entries(this.els).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
          var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;
          var bottom = top + el.targetEl.offsetHeight;
          var relativeOffset = _this4.getRelativeOffset(el.offset);
          _this4.els[i].top = top + relativeOffset[0];
          _this4.els[i].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset(offset) {
        var relativeOffset = [0, 0];
        if (offset) {
          for (var i = 0; i < offset.length; i++) {
            if (typeof offset[i] == "string") {
              if (offset[i].includes("%")) {
                relativeOffset[i] = parseInt(offset[i].replace("%", "") * this.windowHeight / 100);
              } else {
                relativeOffset[i] = parseInt(offset[i]);
              }
            } else {
              relativeOffset[i] = offset[i];
            }
          }
        }
        return relativeOffset;
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
       *          options {object} - Options object for additionnal settings.
       * @return {void}
       */
    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var offset = parseInt(options.offset) || 0;
        var callback = options.callback ? options.callback : false;
        if (typeof target === "string") {
          if (target === "top") {
            target = this.html;
          } else if (target === "bottom") {
            target = this.html.offsetHeight - window.innerHeight;
          } else {
            target = document.querySelector(target);
            if (!target) {
              return;
            }
          }
        } else if (typeof target === "number") {
          target = parseInt(target);
        } else if (target && target.tagName)
          ;
        else {
          console.warn("`target` parameter is not valid");
          return;
        }
        if (typeof target !== "number") {
          offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
        } else {
          offset = target + offset;
        }
        var isTargetReached = function isTargetReached2() {
          return parseInt(window.pageYOffset) === parseInt(offset);
        };
        if (callback) {
          if (isTargetReached()) {
            callback();
            return;
          } else {
            var onScroll = function onScroll2() {
              if (isTargetReached()) {
                window.removeEventListener("scroll", onScroll2);
                callback();
              }
            };
            window.addEventListener("scroll", onScroll);
          }
        }
        window.scrollTo({
          top: offset,
          behavior: options.duration === 0 ? "auto" : "smooth"
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.addElements();
        this.detectElements();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default2.prototype), "destroy", this).call(this);
        window.removeEventListener("scroll", this.checkScroll, false);
      }
    }]);
    return _default2;
  }(_default);
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  function E() {
  }
  E.prototype = {
    on: function(name, callback, ctx) {
      var e = this.e || (this.e = {});
      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx
      });
      return this;
    },
    once: function(name, callback, ctx) {
      var self2 = this;
      function listener() {
        self2.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },
    emit: function(name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;
      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }
      return this;
    },
    off: function(name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];
      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }
      liveEvents.length ? e[name] = liveEvents : delete e[name];
      return this;
    }
  };
  var tinyEmitter = E;
  var lethargy = createCommonjsModule(function(module, exports) {
    (function() {
      var root;
      root = exports !== null ? exports : this;
      root.Lethargy = function() {
        function Lethargy2(stability, sensitivity, tolerance, delay) {
          this.stability = stability != null ? Math.abs(stability) : 8;
          this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
          this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
          this.delay = delay != null ? delay : 150;
          this.lastUpDeltas = function() {
            var i, ref, results;
            results = [];
            for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
              results.push(null);
            }
            return results;
          }.call(this);
          this.lastDownDeltas = function() {
            var i, ref, results;
            results = [];
            for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
              results.push(null);
            }
            return results;
          }.call(this);
          this.deltasTimestamp = function() {
            var i, ref, results;
            results = [];
            for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
              results.push(null);
            }
            return results;
          }.call(this);
        }
        Lethargy2.prototype.check = function(e) {
          var lastDelta;
          e = e.originalEvent || e;
          if (e.wheelDelta != null) {
            lastDelta = e.wheelDelta;
          } else if (e.deltaY != null) {
            lastDelta = e.deltaY * -40;
          } else if (e.detail != null || e.detail === 0) {
            lastDelta = e.detail * -40;
          }
          this.deltasTimestamp.push(Date.now());
          this.deltasTimestamp.shift();
          if (lastDelta > 0) {
            this.lastUpDeltas.push(lastDelta);
            this.lastUpDeltas.shift();
            return this.isInertia(1);
          } else {
            this.lastDownDeltas.push(lastDelta);
            this.lastDownDeltas.shift();
            return this.isInertia(-1);
          }
        };
        Lethargy2.prototype.isInertia = function(direction) {
          var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
          lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
          if (lastDeltas[0] === null) {
            return direction;
          }
          if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) {
            return false;
          }
          lastDeltasOld = lastDeltas.slice(0, this.stability);
          lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
          oldSum = lastDeltasOld.reduce(function(t, s) {
            return t + s;
          });
          newSum = lastDeltasNew.reduce(function(t, s) {
            return t + s;
          });
          oldAverage = oldSum / lastDeltasOld.length;
          newAverage = newSum / lastDeltasNew.length;
          if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) {
            return direction;
          } else {
            return false;
          }
        };
        Lethargy2.prototype.showLastUpDeltas = function() {
          return this.lastUpDeltas;
        };
        Lethargy2.prototype.showLastDownDeltas = function() {
          return this.lastDownDeltas;
        };
        return Lethargy2;
      }();
    }).call(commonjsGlobal);
  });
  var support = function getSupport() {
    return {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1
    };
  }();
  var toString = Object.prototype.toString;
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var bindallStandalone = function(object) {
    if (!object)
      return console.warn("bindAll requires at least one argument.");
    var functions = Array.prototype.slice.call(arguments, 1);
    if (functions.length === 0) {
      for (var method in object) {
        if (hasOwnProperty$1.call(object, method)) {
          if (typeof object[method] == "function" && toString.call(object[method]) == "[object Function]") {
            functions.push(method);
          }
        }
      }
    }
    for (var i = 0; i < functions.length; i++) {
      var f = functions[i];
      object[f] = bind(object[f], object);
    }
  };
  function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }
  var Lethargy = lethargy.Lethargy;
  var EVT_ID = "virtualscroll";
  var src = VirtualScroll;
  var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
  };
  function VirtualScroll(options) {
    bindallStandalone(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown");
    this.el = window;
    if (options && options.el) {
      this.el = options.el;
      delete options.el;
    }
    this.options = objectAssign({
      mouseMultiplier: 1,
      touchMultiplier: 2,
      firefoxMultiplier: 15,
      keyStep: 120,
      preventTouch: false,
      unpreventTouchClass: "vs-touchmove-allowed",
      limitInertia: false,
      useKeyboard: true,
      useTouch: true
    }, options);
    if (this.options.limitInertia)
      this._lethargy = new Lethargy();
    this._emitter = new tinyEmitter();
    this._event = {
      y: 0,
      x: 0,
      deltaX: 0,
      deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;
    if (this.options.passive !== void 0) {
      this.listenerOptions = { passive: this.options.passive };
    }
  }
  VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;
    this._emitter.emit(EVT_ID, {
      x: evt.x,
      y: evt.y,
      deltaX: evt.deltaX,
      deltaY: evt.deltaY,
      originalEvent: e
    });
  };
  VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false)
      return;
    var evt = this._event;
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;
    if (support.isFirefox && e.deltaMode == 1) {
      evt.deltaX *= options.firefoxMultiplier;
      evt.deltaY *= options.firefoxMultiplier;
    }
    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;
    this._notify(e);
  };
  VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false)
      return;
    var evt = this._event;
    evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
    this._notify(e);
  };
  VirtualScroll.prototype._onTouchStart = function(e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
  };
  VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) {
      e.preventDefault();
    }
    var evt = this._event;
    var t = e.targetTouches ? e.targetTouches[0] : e;
    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
    this._notify(e);
  };
  VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;
    switch (e.keyCode) {
      case keyCodes.LEFT:
      case keyCodes.UP:
        evt.deltaY = this.options.keyStep;
        break;
      case keyCodes.RIGHT:
      case keyCodes.DOWN:
        evt.deltaY = -this.options.keyStep;
        break;
      case e.shiftKey:
        evt.deltaY = windowHeight;
        break;
      case keyCodes.SPACE:
        evt.deltaY = -windowHeight;
        break;
      default:
        return;
    }
    this._notify(e);
  };
  VirtualScroll.prototype._bind = function() {
    if (support.hasWheelEvent)
      this.el.addEventListener("wheel", this._onWheel, this.listenerOptions);
    if (support.hasMouseWheelEvent)
      this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions);
    if (support.hasTouch && this.options.useTouch) {
      this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions);
      this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions);
    }
    if (support.hasPointer && support.hasTouchWin) {
      this.bodyTouchAction = document.body.style.msTouchAction;
      document.body.style.msTouchAction = "none";
      this.el.addEventListener("MSPointerDown", this._onTouchStart, true);
      this.el.addEventListener("MSPointerMove", this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard)
      document.addEventListener("keydown", this._onKeyDown);
  };
  VirtualScroll.prototype._unbind = function() {
    if (support.hasWheelEvent)
      this.el.removeEventListener("wheel", this._onWheel);
    if (support.hasMouseWheelEvent)
      this.el.removeEventListener("mousewheel", this._onMouseWheel);
    if (support.hasTouch) {
      this.el.removeEventListener("touchstart", this._onTouchStart);
      this.el.removeEventListener("touchmove", this._onTouchMove);
    }
    if (support.hasPointer && support.hasTouchWin) {
      document.body.style.msTouchAction = this.bodyTouchAction;
      this.el.removeEventListener("MSPointerDown", this._onTouchStart, true);
      this.el.removeEventListener("MSPointerMove", this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard)
      document.removeEventListener("keydown", this._onKeyDown);
  };
  VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1)
      this._bind();
  };
  VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0)
      this._unbind();
  };
  VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
  };
  VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
  };
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  function getTranslate(el) {
    var translate = {};
    if (!window.getComputedStyle)
      return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
      translate.x = mat ? parseFloat(mat[1].split(", ")[12]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[13]) : 0;
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(", ")[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[5]) : 0;
    }
    return translate;
  }
  function getParents(elem) {
    var parents = [];
    for (; elem && elem !== document; elem = elem.parentNode) {
      parents.push(elem);
    }
    return parents;
  }
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 1e-3;
  var SUBDIVISION_PRECISION = 1e-7;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  var float32ArraySupported = typeof Float32Array === "function";
  function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function LinearEasing(x) {
    return x;
  }
  var src$1 = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    if (mX1 === mY1 && mX2 === mY2) {
      return LinearEasing;
    }
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function BezierEasing(x) {
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  };
  var keyCodes$1 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
  };
  var _default$2 = /* @__PURE__ */ function(_Core) {
    _inherits(_default2, _Core);
    var _super = _createSuper(_default2);
    function _default2() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      _this = _super.call(this, options);
      if (_this.inertia)
        _this.lerp = _this.inertia * 0.1;
      _this.isScrolling = false;
      _this.isDraggingScrollbar = false;
      _this.isTicking = false;
      _this.hasScrollTicking = false;
      _this.parallaxElements = {};
      _this.stop = false;
      _this.scrollbarContainer = options.scrollbarContainer;
      _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
      window.addEventListener("keydown", _this.checkKey, false);
      return _this;
    }
    _createClass(_default2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        this.html.classList.add(this.smoothClass);
        this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
        this.instance = _objectSpread2({
          delta: {
            x: this.initPosition.x,
            y: this.initPosition.y
          },
          scroll: {
            x: this.initPosition.x,
            y: this.initPosition.y
          }
        }, this.instance);
        this.vs = new src({
          el: this.scrollFromAnywhere ? document : this.el,
          mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
          firefoxMultiplier: this.firefoxMultiplier,
          touchMultiplier: this.touchMultiplier,
          useKeyboard: false,
          passive: true
        });
        this.vs.on(function(e) {
          if (_this2.stop) {
            return;
          }
          if (!_this2.isDraggingScrollbar) {
            requestAnimationFrame(function() {
              _this2.updateDelta(e);
              if (!_this2.isScrolling)
                _this2.startScrolling();
            });
          }
        });
        this.setScrollLimit();
        this.initScrollBar();
        this.addSections();
        this.addElements();
        this.checkScroll(true);
        this.transformElements(true, true);
        _get(_getPrototypeOf(_default2.prototype), "init", this).call(this);
      }
    }, {
      key: "setScrollLimit",
      value: function setScrollLimit() {
        this.instance.limit.y = this.el.offsetHeight - this.windowHeight;
        if (this.direction === "horizontal") {
          var totalWidth = 0;
          var nodes = this.el.children;
          for (var i = 0; i < nodes.length; i++) {
            totalWidth += nodes[i].offsetWidth;
          }
          this.instance.limit.x = totalWidth - this.windowWidth;
        }
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        this.startScrollTs = Date.now();
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        cancelAnimationFrame(this.checkScrollRaf);
        this.startScrollTs = void 0;
        if (this.scrollToRaf) {
          cancelAnimationFrame(this.scrollToRaf);
          this.scrollToRaf = null;
        }
        this.isScrolling = false;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        this.html.classList.remove(this.scrollingClass);
      }
    }, {
      key: "checkKey",
      value: function checkKey(e) {
        var _this3 = this;
        if (this.stop) {
          if (e.keyCode == keyCodes$1.TAB) {
            requestAnimationFrame(function() {
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0;
            });
          }
          return;
        }
        switch (e.keyCode) {
          case keyCodes$1.TAB:
            requestAnimationFrame(function() {
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0;
              _this3.scrollTo(document.activeElement, {
                offset: -window.innerHeight / 2
              });
            });
            break;
          case keyCodes$1.UP:
            if (this.isActiveElementScrollSensitive()) {
              this.instance.delta[this.directionAxis] -= 240;
            }
            break;
          case keyCodes$1.DOWN:
            if (this.isActiveElementScrollSensitive()) {
              this.instance.delta[this.directionAxis] += 240;
            }
            break;
          case keyCodes$1.PAGEUP:
            this.instance.delta[this.directionAxis] -= window.innerHeight;
            break;
          case keyCodes$1.PAGEDOWN:
            this.instance.delta[this.directionAxis] += window.innerHeight;
            break;
          case keyCodes$1.HOME:
            this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
            break;
          case keyCodes$1.END:
            this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
            break;
          case keyCodes$1.SPACE:
            if (this.isActiveElementScrollSensitive()) {
              if (e.shiftKey) {
                this.instance.delta[this.directionAxis] -= window.innerHeight;
              } else {
                this.instance.delta[this.directionAxis] += window.innerHeight;
              }
            }
            break;
          default:
            return;
        }
        if (this.instance.delta[this.directionAxis] < 0)
          this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis])
          this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
        this.stopScrolling();
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "isActiveElementScrollSensitive",
      value: function isActiveElementScrollSensitive() {
        return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this4 = this;
        var forced = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (forced || this.isScrolling || this.isDraggingScrollbar) {
          if (!this.hasScrollTicking) {
            this.checkScrollRaf = requestAnimationFrame(function() {
              return _this4.checkScroll();
            });
            this.hasScrollTicking = true;
          }
          this.updateScroll();
          var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
          var timeSinceStart = Date.now() - this.startScrollTs;
          if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
            this.stopScrolling();
          }
          Object.entries(this.sections).forEach(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], section = _ref2[1];
            if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
              if (_this4.direction === "horizontal") {
                _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
              } else {
                _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
              }
              if (!section.inView) {
                section.inView = true;
                section.el.style.opacity = 1;
                section.el.style.pointerEvents = "all";
                section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), "");
              }
            } else {
              if (section.inView || forced) {
                section.inView = false;
                section.el.style.opacity = 0;
                section.el.style.pointerEvents = "none";
                section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
              }
              _this4.transform(section.el, 0, 0);
            }
          });
          if (this.getDirection) {
            this.addDirection();
          }
          if (this.getSpeed) {
            this.addSpeed();
            this.speedTs = Date.now();
          }
          this.detectElements();
          this.transformElements();
          if (this.hasScrollbar) {
            var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
            if (this.direction === "horizontal") {
              this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
            } else {
              this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
            }
          }
          _get(_getPrototypeOf(_default2.prototype), "checkScroll", this).call(this);
          this.hasScrollTicking = false;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.checkContext();
        this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        };
        this.update();
      }
    }, {
      key: "updateDelta",
      value: function updateDelta(e) {
        var delta;
        var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
        if (gestureDirection === "both") {
          delta = e.deltaX + e.deltaY;
        } else if (gestureDirection === "vertical") {
          delta = e.deltaY;
        } else if (gestureDirection === "horizontal") {
          delta = e.deltaX;
        } else {
          delta = e.deltaY;
        }
        this.instance.delta[this.directionAxis] -= delta * this.multiplier;
        if (this.instance.delta[this.directionAxis] < 0)
          this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis])
          this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      }
    }, {
      key: "updateScroll",
      value: function updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) {
          this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
        } else {
          if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
          } else if (this.instance.scroll.y < 0) {
            this.setScroll(this.instance.scroll[this.directionAxis], 0);
          } else {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (this.instance.delta.y > this.instance.scroll.y) {
          if (this.instance.direction !== "down") {
            this.instance.direction = "down";
          }
        } else if (this.instance.delta.y < this.instance.scroll.y) {
          if (this.instance.direction !== "up") {
            this.instance.direction = "up";
          }
        }
        if (this.instance.delta.x > this.instance.scroll.x) {
          if (this.instance.direction !== "right") {
            this.instance.direction = "right";
          }
        } else if (this.instance.delta.x < this.instance.scroll.x) {
          if (this.instance.direction !== "left") {
            this.instance.direction = "left";
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
          this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "initScrollBar",
      value: function initScrollBar() {
        this.scrollbar = document.createElement("span");
        this.scrollbarThumb = document.createElement("span");
        this.scrollbar.classList.add("".concat(this.scrollbarClass));
        this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
        this.scrollbar.append(this.scrollbarThumb);
        if (this.scrollbarContainer) {
          this.scrollbarContainer.append(this.scrollbar);
        } else {
          document.body.append(this.scrollbar);
        }
        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);
        this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar);
        window.addEventListener("mouseup", this.releaseScrollBar);
        window.addEventListener("mousemove", this.moveScrollBar);
        this.hasScrollbar = false;
        if (this.direction == "horizontal") {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }
        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;
        if (this.direction === "horizontal") {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }
        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "reinitScrollBar",
      value: function reinitScrollBar() {
        this.hasScrollbar = false;
        if (this.direction == "horizontal") {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }
        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;
        if (this.direction === "horizontal") {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }
        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "destroyScrollBar",
      value: function destroyScrollBar() {
        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar);
        window.removeEventListener("mouseup", this.releaseScrollBar);
        window.removeEventListener("mousemove", this.moveScrollBar);
        this.scrollbar.remove();
      }
    }, {
      key: "getScrollBar",
      value: function getScrollBar(e) {
        this.isDraggingScrollbar = true;
        this.checkScroll();
        this.html.classList.remove(this.scrollingClass);
        this.html.classList.add(this.draggingClass);
      }
    }, {
      key: "releaseScrollBar",
      value: function releaseScrollBar(e) {
        this.isDraggingScrollbar = false;
        if (this.isScrolling) {
          this.html.classList.add(this.scrollingClass);
        }
        this.html.classList.remove(this.draggingClass);
      }
    }, {
      key: "moveScrollBar",
      value: function moveScrollBar(e) {
        var _this5 = this;
        if (this.isDraggingScrollbar) {
          requestAnimationFrame(function() {
            var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
            var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;
            if (y > 0 && y < _this5.instance.limit.y) {
              _this5.instance.delta.y = y;
            }
            if (x > 0 && x < _this5.instance.limit.x) {
              _this5.instance.delta.x = x;
            }
          });
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this6 = this;
        this.els = {};
        this.parallaxElements = {};
        var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
        els.forEach(function(el, index) {
          var targetParents = getParents(el);
          var section = Object.entries(_this6.sections).map(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], section2 = _ref4[1];
            return section2;
          }).find(function(section2) {
            return targetParents.includes(section2.el);
          });
          var cl = el.dataset[_this6.name + "Class"] || _this6["class"];
          var id = typeof el.dataset[_this6.name + "Id"] === "string" ? el.dataset[_this6.name + "Id"] : "el" + index;
          var top;
          var left;
          var repeat = el.dataset[_this6.name + "Repeat"];
          var call = el.dataset[_this6.name + "Call"];
          var position = el.dataset[_this6.name + "Position"];
          var delay = el.dataset[_this6.name + "Delay"];
          var direction = el.dataset[_this6.name + "Direction"];
          var sticky = typeof el.dataset[_this6.name + "Sticky"] === "string";
          var speed = el.dataset[_this6.name + "Speed"] ? parseFloat(el.dataset[_this6.name + "Speed"]) / 10 : false;
          var offset = typeof el.dataset[_this6.name + "Offset"] === "string" ? el.dataset[_this6.name + "Offset"].split(",") : _this6.offset;
          var target = el.dataset[_this6.name + "Target"];
          var targetEl;
          if (target !== void 0) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }
          var targetElBCR = targetEl.getBoundingClientRect();
          if (section === null) {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          } else {
            if (!section.inView) {
              top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
              left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
            } else {
              top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
              left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
            }
          }
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          var middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
          if (sticky) {
            var elBCR = el.getBoundingClientRect();
            var elTop = elBCR.top;
            var elLeft = elBCR.left;
            var elDistance = {
              x: elLeft - left,
              y: elTop - top
            };
            top += window.innerHeight;
            left += window.innerWidth;
            bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
            right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
            middle = {
              x: (right - left) / 2 + left,
              y: (bottom - top) / 2 + top
            };
          }
          if (repeat == "false") {
            repeat = false;
          } else if (repeat != void 0) {
            repeat = true;
          } else {
            repeat = _this6.repeat;
          }
          var relativeOffset = [0, 0];
          if (offset) {
            if (_this6.direction === "horizontal") {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == "string") {
                  if (offset[i].includes("%")) {
                    relativeOffset[i] = parseInt(offset[i].replace("%", "") * _this6.windowWidth / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }
              left = left + relativeOffset[0];
              right = right - relativeOffset[1];
            } else {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == "string") {
                  if (offset[i].includes("%")) {
                    relativeOffset[i] = parseInt(offset[i].replace("%", "") * _this6.windowHeight / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }
              top = top + relativeOffset[0];
              bottom = bottom - relativeOffset[1];
            }
          }
          var mappedEl = {
            el,
            id,
            "class": cl,
            section,
            top,
            middle,
            bottom,
            left,
            right,
            offset,
            progress: 0,
            repeat,
            inView: false,
            call,
            speed,
            delay,
            position,
            target: targetEl,
            direction,
            sticky
          };
          _this6.els[id] = mappedEl;
          if (el.classList.contains(cl)) {
            _this6.setInView(_this6.els[id], id);
          }
          if (speed !== false || sticky) {
            _this6.parallaxElements[id] = mappedEl;
          }
        });
      }
    }, {
      key: "addSections",
      value: function addSections() {
        var _this7 = this;
        this.sections = {};
        var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
        if (sections.length === 0) {
          sections = [this.el];
        }
        sections.forEach(function(section, index) {
          var id = typeof section.dataset[_this7.name + "Id"] === "string" ? section.dataset[_this7.name + "Id"] : "section" + index;
          var sectionBCR = section.getBoundingClientRect();
          var offset = {
            x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
            y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
          };
          var limit = {
            x: offset.x + sectionBCR.width + window.innerWidth * 2,
            y: offset.y + sectionBCR.height + window.innerHeight * 2
          };
          var persistent = typeof section.dataset[_this7.name + "Persistent"] === "string";
          section.setAttribute("data-scroll-section-id", id);
          var mappedSection = {
            el: section,
            offset,
            limit,
            inView: false,
            persistent,
            id
          };
          _this7.sections[id] = mappedSection;
        });
      }
    }, {
      key: "transform",
      value: function transform(element, x, y, delay) {
        var transform2;
        if (!delay) {
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
        } else {
          var start = getTranslate(element);
          var lerpX = lerp(start.x, x, delay);
          var lerpY = lerp(start.y, y, delay);
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
        }
        element.style.webkitTransform = transform2;
        element.style.msTransform = transform2;
        element.style.transform = transform2;
      }
    }, {
      key: "transformElements",
      value: function transformElements(isForced) {
        var _this8 = this;
        var setAllElements = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var scrollRight = this.instance.scroll.x + this.windowWidth;
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = {
          x: this.instance.scroll.x + this.windowMiddle.x,
          y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2), i = _ref6[0], current = _ref6[1];
          var transformDistance = false;
          if (isForced) {
            transformDistance = 0;
          }
          if (current.inView || setAllElements) {
            switch (current.position) {
              case "top":
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;
              case "elementTop":
                transformDistance = (scrollBottom - current.top) * -current.speed;
                break;
              case "bottom":
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                break;
              case "left":
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;
              case "elementLeft":
                transformDistance = (scrollRight - current.left) * -current.speed;
                break;
              case "right":
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                break;
              default:
                transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                break;
            }
          }
          if (current.sticky) {
            if (current.inView) {
              if (_this8.direction === "horizontal") {
                transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
              } else {
                transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
              }
            } else {
              if (_this8.direction === "horizontal") {
                if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                  transformDistance = current.right - current.left + window.innerWidth;
                } else {
                  transformDistance = false;
                }
              } else {
                if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                  transformDistance = current.bottom - current.top + window.innerHeight;
                } else {
                  transformDistance = false;
                }
              }
            }
          }
          if (transformDistance !== false) {
            if (current.direction === "horizontal" || _this8.direction === "horizontal" && current.direction !== "vertical") {
              _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
            } else {
              _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
          }
        });
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
       *          options {object} - Options object for additionnal settings.
       * @return {void}
       */
    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var _this9 = this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var offset = parseInt(options.offset) || 0;
        var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1e3;
        var easing = options.easing || [0.25, 0, 0.35, 1];
        var disableLerp = options.disableLerp ? true : false;
        var callback = options.callback ? options.callback : false;
        easing = src$1.apply(void 0, _toConsumableArray(easing));
        if (typeof target === "string") {
          if (target === "top") {
            target = 0;
          } else if (target === "bottom") {
            target = this.instance.limit.y;
          } else if (target === "left") {
            target = 0;
          } else if (target === "right") {
            target = this.instance.limit.x;
          } else {
            target = document.querySelector(target);
            if (!target) {
              return;
            }
          }
        } else if (typeof target === "number") {
          target = parseInt(target);
        } else if (target && target.tagName)
          ;
        else {
          console.warn("`target` parameter is not valid");
          return;
        }
        if (typeof target !== "number") {
          var targetInScope = getParents(target).includes(this.el);
          if (!targetInScope) {
            return;
          }
          var targetBCR = target.getBoundingClientRect();
          var offsetTop = targetBCR.top;
          var offsetLeft = targetBCR.left;
          var targetParents = getParents(target);
          var parentSection = targetParents.find(function(candidate) {
            return Object.entries(_this9.sections).map(function(_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2), key = _ref8[0], section = _ref8[1];
              return section;
            }).find(function(section) {
              return section.el == candidate;
            });
          });
          var parentSectionOffset = 0;
          if (parentSection) {
            parentSectionOffset = getTranslate(parentSection)[this.directionAxis];
          } else {
            parentSectionOffset = -this.instance.scroll[this.directionAxis];
          }
          if (this.direction === "horizontal") {
            offset = offsetLeft + offset - parentSectionOffset;
          } else {
            offset = offsetTop + offset - parentSectionOffset;
          }
        } else {
          offset = target + offset;
        }
        var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
        var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis]));
        var scrollDiff = scrollTarget - scrollStart;
        var render = function render2(p) {
          if (disableLerp) {
            if (_this9.direction === "horizontal") {
              _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
            } else {
              _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
            }
          } else {
            _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
          }
        };
        this.animatingScroll = true;
        this.stopScrolling();
        this.startScrolling();
        var start = Date.now();
        var loop = function loop2() {
          var p = (Date.now() - start) / duration;
          if (p > 1) {
            render(1);
            _this9.animatingScroll = false;
            if (duration == 0)
              _this9.update();
            if (callback)
              callback();
          } else {
            _this9.scrollToRaf = requestAnimationFrame(loop2);
            render(easing(p));
          }
        };
        loop();
      }
    }, {
      key: "update",
      value: function update() {
        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);
        this.reinitScrollBar();
        this.checkScroll(true);
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        this.stop = false;
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        this.stop = true;
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
          scroll: {
            x,
            y
          },
          delta: {
            x,
            y
          },
          speed: 0
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default2.prototype), "destroy", this).call(this);
        this.stopScrolling();
        this.html.classList.remove(this.smoothClass);
        this.vs.destroy();
        this.destroyScrollBar();
        window.removeEventListener("keydown", this.checkKey, false);
      }
    }]);
    return _default2;
  }(_default);
  var Smooth = /* @__PURE__ */ function() {
    function Smooth2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, Smooth2);
      this.options = options;
      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      if (!this.smooth && this.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible");
      if (!this.tablet.smooth && this.tablet.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)");
      if (!this.smartphone.smooth && this.smartphone.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)");
      this.init();
    }
    _createClass(Smooth2, [{
      key: "init",
      value: function init() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
          this.scroll = new _default$2(this.options);
        } else {
          this.scroll = new _default$1(this.options);
        }
        this.scroll.init();
        if (window.location.hash) {
          var id = window.location.hash.slice(1, window.location.hash.length);
          var target = document.getElementById(id);
          if (target)
            this.scroll.scrollTo(target);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this.scroll.update();
      }
    }, {
      key: "start",
      value: function start() {
        this.scroll.startScroll();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.scroll.stopScroll();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.scroll.setScroll(x, y);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        this.scroll.setEvents(event, func);
      }
    }, {
      key: "off",
      value: function off(event, func) {
        this.scroll.unsetEvents(event, func);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.scroll.destroy();
      }
    }]);
    return Smooth2;
  }();
  var locomotive_scroll_esm_default = Smooth;

  // src/assets/scripts/modules/app.js
  var import_gsap3 = __toESM(require_gsap());

  // node_modules/gsap/ScrollTrigger.js
  var gsap;
  var _coreInitted;
  var _win;
  var _doc;
  var _docEl;
  var _body;
  var _root;
  var _resizeDelay;
  var _raf;
  var _request;
  var _toArray;
  var _clamp;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites;
  var _ignoreResize;
  var _limitCallbacks;
  var _startup = 1;
  var _proxies = [];
  var _scrollers = [];
  var _getTime = Date.now;
  var _time1 = _getTime();
  var _lastScrollTime = 0;
  var _enabled = 1;
  var _passThrough = function _passThrough2(v) {
    return v;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _getGSAP = function _getGSAP2() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  };
  var _isViewport = function _isViewport2(e) {
    return !!~_root.indexOf(e);
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s = _ref.s, sc3 = _ref.sc;
    var i = _scrollers.indexOf(element), offset = sc3 === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc3 : function(value) {
      return arguments.length ? element[s] = value : element[s];
    }));
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
      _winOffsets.width = _win.innerWidth;
      _winOffsets.height = _win.innerHeight;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref2) {
    var d = _ref2.d, d2 = _ref2.d2, a = _ref2.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref3) {
    var s = _ref3.s, d2 = _ref3.d2, d = _ref3.d, a = _ref3.a;
    return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  };
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _callIfFunc = function _callIfFunc2(value) {
    return _isFunction(value) && value();
  };
  var _combineFunc = function _combineFunc2(f1, f2) {
    return function() {
      var result1 = _callIfFunc(f1), result2 = _callIfFunc(f2);
      return function() {
        _callIfFunc(result1);
        _callIfFunc(result2);
      };
    };
  };
  var _abs = Math.abs;
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _horizontal = {
    s: _scrollLeft,
    p: _left,
    p2: _Left,
    os: _right,
    os2: _Right,
    d: _width,
    d2: _Width,
    a: "x",
    sc: function sc(value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    }
  };
  var _vertical = {
    s: _scrollTop,
    p: _top,
    p2: _Top,
    os: _bottom,
    os2: _Bottom,
    d: _height,
    d2: _Height,
    a: "y",
    op: _horizontal,
    sc: function sc2(value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    }
  };
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref4) {
    var d2 = _ref4.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
    var a = [], labels = timeline.labels, duration = timeline.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
    return function(value, st) {
      var a = _getLabelRatioArray(timeline), i;
      a.sort(function(a2, b) {
        return a2 - b;
      });
      if (st.direction > 0) {
        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a.pop();
      } else {
        i = a.length;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener = function _addListener2(element, type, func) {
    return element.addEventListener(type, func, {
      passive: true
    });
  };
  var _removeListener = function _removeListener2(element, type, func) {
    return element.removeEventListener(type, func);
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref5, offset, matchWidthEl) {
    var startColor = _ref5.startColor, endColor = _ref5.endColor, fontSize = _ref5.fontSize, indent = _ref5.indent, fontWeight = _ref5.fontWeight;
    var e = _doc.createElement("div"), useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type);
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _sync = function _sync2() {
    return _request || (_request = _raf(_updateAll));
  };
  var _onScroll = function _onScroll2() {
    if (!_request) {
      _request = _raf(_updateAll);
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    }
  };
  var _onResize = function _onResize2() {
    return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
  };
  var _listeners = {};
  var _emptyArray = [];
  var _media = [];
  var _creatingMedia;
  var _lastMediaTick;
  var _onMediaChange = function _onMediaChange2(e) {
    var tick = gsap.ticker.frame, matches = [], i = 0, index;
    if (_lastMediaTick !== tick || _startup) {
      _revertAll();
      for (; i < _media.length; i += 4) {
        index = _win.matchMedia(_media[i]).matches;
        if (index !== _media[i + 3]) {
          _media[i + 3] = index;
          index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
        }
      }
      _revertRecorded();
      for (i = 0; i < matches.length; i++) {
        index = matches[i];
        _creatingMedia = _media[index];
        _media[index + 2] = _media[index + 1](e);
      }
      _creatingMedia = 0;
      _coreInitted && _refreshAll(0, 1);
      _lastMediaTick = tick;
      _dispatch("matchMedia");
    }
  };
  var _softRefresh = function _softRefresh2() {
    return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch = function _dispatch2(type) {
    return _listeners[type] && _listeners[type].map(function(f) {
      return f();
    }) || _emptyArray;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i = 0; i < _savedStyles.length; i += 4) {
      if (!media || _savedStyles[i + 3] === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i + 2].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (!media || trigger.media === media) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll());
          trigger.revert();
        }
      }
    }
    _revertRecorded(media);
    media || _dispatch("revert");
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
      return;
    }
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    for (_i = 0; _i < _triggers.length; _i++) {
      _triggers[_i].refresh();
    }
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _i = _triggers.length;
    while (_i--) {
      _triggers[_i].scroll.rec = 0;
    }
    _resizeDelay.pause();
    _dispatch("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _updateAll = function _updateAll2() {
    var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll2 = l && _triggers[0].scroll();
    _direction = _lastScroll > scroll2 ? -1 : 1;
    _lastScroll = scroll2;
    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;
        _dispatch("scrollEnd");
      }
      _time2 = _time1;
      _time1 = time;
    }
    if (_direction < 0) {
      _i = l;
      while (_i--) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
    _request = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    if (pin.parentNode === spacer) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (pin.parentNode !== spacer) {
      var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }
  };
  var _capsExp = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l = state.length, i = 0, p, value;
      (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;
      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll2, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
    _isFunction(value) && (value = value(self2));
    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self2));
      var element = _toArray(trigger)[0] || _body, bounds = _getBounds(element) || {}, offsets = value.split(" "), localOffset, globalOffset, display;
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll2 - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else if (markerScroller) {
      _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      scrollerMax = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    return Math.round(value);
  };
  var _prefixExp = /(?:webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p, cs;
      if (parent === _body) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      tween && tween.kill();
      lastScroll1 = Math.round(initialValue);
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;
      modifiers[prop] = function(value) {
        value = Math.round(getScroll());
        if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
          tween.kill();
          getTween2.tween = 0;
        } else {
          value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
        }
        lastScroll2 = lastScroll1;
        return lastScroll1 = Math.round(value);
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    scroller.addEventListener("mousewheel", function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    });
    return getTween;
  };
  _horizontal.op = _vertical;
  var ScrollTrigger = /* @__PURE__ */ function() {
    function ScrollTrigger2(vars, animation) {
      _coreInitted || ScrollTrigger2.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger2.prototype;
    _proto.init = function init(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(1);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough;
        return;
      }
      vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults);
      var direction = vars.horizontal ? _horizontal : _vertical, _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, isToggle = !scrub && scrub !== 0, scroller = _toArray(vars.scroller || _win)[0], scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self2);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), tweenTo, pinCache, snapFunc, isReverted, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress;
      self2.media = _creatingMedia;
      anticipatePin *= 45;
      _triggers.push(self2);
      self2.scroller = scroller;
      self2.scroll = _getScrollFunc(scroller, direction);
      scroll1 = self2.scroll();
      self2.vars = vars;
      animation = animation || vars.animation;
      "refreshPriority" in vars && (_sort = 1);
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      if (animation) {
        animation.vars.lazy = false;
        animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
        self2.animation = animation.pause();
        animation.scrollTrigger = self2;
        scrubSmooth = _isNumber(scrub) && scrub;
        scrubSmooth && (scrubTween = gsap.to(animation, {
          ease: "power3",
          duration: scrubSmooth,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self2);
          }
        }));
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap) {
        _isObject(snap) || (snap = {
          snapTo: snap
        });
        "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
          scrollBehavior: "auto"
        });
        snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : gsap.utils.snap(snap.snapTo);
        snapDurClamp = snap.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
          if (Math.abs(self2.getVelocity()) < 10 && !_pointerIsDown) {
            var totalProgress = animation && !isToggle ? animation.totalProgress() : self2.progress, velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1e3 || 0, change1 = _abs(velocity / 2) * velocity / 0.185, naturalEnd = totalProgress + change1, endValue = _clamp(0, 1, snapFunc(naturalEnd, self2)), scroll3 = self2.scroll(), endScroll = Math.round(start + endValue * change), tween = tweenTo.tween;
            if (scroll3 <= end && scroll3 >= start && endScroll !== scroll3) {
              if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll3)) {
                return;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap.ease || "power3",
                data: Math.abs(endScroll - scroll3),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onComplete: function onComplete() {
                  snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                  onSnapComplete && onSnapComplete(self2);
                }
              }, scroll3, change1 * change, endScroll - scroll3 - change1 * change);
            }
          } else if (self2.isActive) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self2);
      trigger = self2.trigger = _toArray(trigger || pin)[0];
      pin = pin === true ? trigger : _toArray(pin)[0];
      _isString(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self2.pin = pin;
        vars.force3D !== false && gsap.set(pin, {
          force3D: true
        });
        pinCache = gsap.core.getCache(pin);
        if (!pinCache.spacer) {
          pinCache.spacer = spacer = _doc.createElement("div");
          spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        self2.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap.getProperty(pin);
        pinSetter = gsap.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
        markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);
        if (!useFixedPosition) {
          _makePositionable(isViewport ? _body : scroller);
          gsap.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      self2.revert = function(revert) {
        var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r !== isReverted) {
          if (r) {
            prevScroll = Math.max(self2.scroll(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r ? "none" : "block";
          });
          r && (_refreshing = 1);
          self2.update(r);
          _refreshing = prevRefreshing;
          pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self2.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
          isReverted = r;
        }
      };
      self2.refresh = function(soft) {
        if (_refreshing || !self2.enabled) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener(ScrollTrigger2, "scrollEnd", _softRefresh);
          return;
        }
        _refreshing = 1;
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.progress(0).invalidate();
        isReverted || self2.revert();
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = _maxScroll(scroller, direction), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i = triggerIndex, cs2, bounds, scroll3, isVertical, override, curTrigger, curPin, oppositeScroll, initted;
        while (i--) {
          curPin = _triggers[i].pin;
          curPin && (curPin === trigger || curPin === pin) && _triggers[i].revert();
        }
        start = _parsePosition(parsedStart, trigger, size, direction, self2.scroll(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -1e-3 : 0);
        _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString(parsedStart) ? parsedStart : start + offset2;
            parsedEndTrigger = trigger;
          }
        }
        end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self2.scroll() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max)) || -1e-3;
        change = end - start || (start -= 0.01) && 1e-3;
        offset2 = 0;
        i = triggerIndex;
        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush < start) {
            cs2 = curTrigger.end - curTrigger.start;
            curPin === trigger && (offset2 += cs2);
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self2._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          gsap.set([markerStart, markerEnd], cs2);
        }
        if (pin) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll3 = self2.scroll();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i && spacerState.push(direction.d, i + _px);
            _setState(spacerState);
            useFixedPosition && self2.scroll(prevScroll);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll3 - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll3 - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites(1);
            animation.progress(1, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.progress(0, true);
            initted || animation.invalidate();
            _suppressOverwrites(0);
          } else {
            pinChange = change;
          }
        } else if (trigger && self2.scroll()) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        for (i = 0; i < triggerIndex; i++) {
          curTrigger = _triggers[i].pin;
          curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
        }
        self2.start = start;
        self2.end = end;
        scroll1 = scroll2 = self2.scroll();
        scroll1 < prevScroll && self2.scroll(prevScroll);
        self2.revert(false);
        _refreshing = 0;
        animation && isToggle && animation._initted && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
        if (prevProgress !== self2.progress) {
          scrubTween && animation.totalProgress(prevProgress, true);
          self2.progress = prevProgress;
          self2.update();
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
        onRefresh && onRefresh(self2);
      };
      self2.getVelocity = function() {
        return (self2.scroll() - scroll2) / (_getTime() - _time2) * 1e3 || 0;
      };
      self2.update = function(reset, recordVelocity) {
        var scroll3 = self2.scroll(), p = reset ? 0 : (scroll3 - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = scroll3;
          if (snap) {
            snap2 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll3 + (scroll3 - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 1e-4);
        if (clipped !== prevProgress2 && self2.enabled) {
          isActive = self2.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self2.direction = clipped > prevProgress2 ? 1 : -1;
          self2.progress = clipped;
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup) {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            } else if (animation) {
              animation.totalProgress(clipped, !!_refreshing);
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(pinStart + pinChange * clipped);
            } else if (stateChanged) {
              action = !reset && clipped > prevProgress2 && end + 1 > scroll3 && scroll3 + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || action)) {
                  var bounds = _getBounds(pin, true), _offset = scroll3 - start;
                  _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || action ? pinActiveState : pinState);
              pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
            }
          }
          snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self2);
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              if (animation && (action === "complete" || action === "reset" || action in animation)) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self2);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && onToggle(self2);
              callbacks[toggleState] && callbacks[toggleState](self2);
              once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && callbacks[toggleState](self2);
              }
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self2);
          }
        }
        if (markerEndSetter) {
          markerStartSetter(scroll3 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(scroll3);
        }
      };
      self2.enable = function() {
        if (!self2.enabled) {
          self2.enabled = true;
          _addListener(scroller, "resize", _onResize);
          _addListener(scroller, "scroll", _onScroll);
          onRefreshInit && _addListener(ScrollTrigger2, "refreshInit", onRefreshInit);
          !animation || !animation.add ? self2.refresh() : gsap.delayedCall(0.01, function() {
            return start || end || self2.refresh();
          }) && (change = 0.01) && (start = end = 0);
        }
      };
      self2.disable = function(reset, allowAnimation) {
        if (self2.enabled) {
          reset !== false && self2.revert();
          self2.enabled = self2.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener(ScrollTrigger2, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i = _triggers.length;
            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self2) {
                return;
              }
            }
            _removeListener(scroller, "resize", _onResize);
            _removeListener(scroller, "scroll", _onScroll);
          }
        }
      };
      self2.kill = function(revert, allowAnimation) {
        self2.disable(revert, allowAnimation);
        id && delete _ids[id];
        var i = _triggers.indexOf(self2);
        _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.render(-1);
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode.removeChild(m);
        });
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;
          _triggers.forEach(function(t) {
            return t.pin === pin && i++;
          });
          i || (pinCache.spacer = 0);
        }
      };
      self2.enable();
    };
    ScrollTrigger2.register = function register(core) {
      if (!_coreInitted) {
        gsap = core || _getGSAP();
        if (_windowExists() && window.document) {
          _win = window;
          _doc = document;
          _docEl = _doc.documentElement;
          _body = _doc.body;
        }
        if (gsap) {
          _toArray = gsap.utils.toArray;
          _clamp = gsap.utils.clamp;
          _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
          gsap.core.globals("ScrollTrigger", ScrollTrigger2);
          if (_body) {
            _raf = _win.requestAnimationFrame || function(f) {
              return setTimeout(f, 16);
            };
            _addListener(_win, "mousewheel", _onScroll);
            _root = [_win, _doc, _docEl, _body];
            _addListener(_doc, "scroll", _onScroll);
            var bodyStyle = _body.style, border = bodyStyle.borderTop, bounds;
            bodyStyle.borderTop = "1px solid #000";
            bounds = _getBounds(_body);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
            _syncInterval = setInterval(_sync, 200);
            gsap.delayedCall(0.5, function() {
              return _startup = 0;
            });
            _addListener(_doc, "touchcancel", _passThrough);
            _addListener(_body, "touchstart", _passThrough);
            _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function() {
              return _pointerIsDown = 1;
            });
            _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function() {
              return _pointerIsDown = 0;
            });
            _transformProp = gsap.utils.checkPrefix("transform");
            _stateProps.push(_transformProp);
            _coreInitted = _getTime();
            _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
            _autoRefresh = [_doc, "visibilitychange", function() {
              var w = _win.innerWidth, h = _win.innerHeight;
              if (_doc.hidden) {
                _prevWidth = w;
                _prevHeight = h;
              } else if (_prevWidth !== w || _prevHeight !== h) {
                _onResize();
              }
            }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function() {
              return _lastScrollTime || _refreshAll();
            }, _win, "resize", _onResize];
            _iterateAutoRefresh(_addListener);
          }
        }
      }
      return _coreInitted;
    };
    ScrollTrigger2.defaults = function defaults2(config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    };
    ScrollTrigger2.kill = function kill() {
      _enabled = 0;
      _triggers.slice(0).forEach(function(trigger) {
        return trigger.kill(1);
      });
    };
    ScrollTrigger2.config = function config(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger2.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _toArray(target)[0], i = _scrollers.indexOf(t), isViewport = _isViewport(t);
      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }
      isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
    };
    ScrollTrigger2.matchMedia = function matchMedia(vars) {
      var mq, p, i, func, result;
      for (p in vars) {
        i = _media.indexOf(p);
        func = vars[p];
        _creatingMedia = p;
        if (p === "all") {
          func();
        } else {
          mq = _win.matchMedia(p);
          if (mq) {
            mq.matches && (result = func());
            if (~i) {
              _media[i + 1] = _combineFunc(_media[i + 1], func);
              _media[i + 2] = _combineFunc(_media[i + 2], result);
            } else {
              i = _media.length;
              _media.push(p, func, result);
              mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
            _media[i + 3] = mq.matches;
          }
        }
        _creatingMedia = 0;
      }
      return _media;
    };
    ScrollTrigger2.clearMatchMedia = function clearMatchMedia(query) {
      query || (_media.length = 0);
      query = _media.indexOf(query);
      query >= 0 && _media.splice(query, 4);
    };
    return ScrollTrigger2;
  }();
  ScrollTrigger.version = "3.6.0";
  ScrollTrigger.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);
        i >= 0 && _savedStyles.splice(i, 4);
        _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
      }
    }) : _savedStyles;
  };
  ScrollTrigger.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger.create = function(vars, animation) {
    return new ScrollTrigger(vars, animation);
  };
  ScrollTrigger.refresh = function(safe) {
    return safe ? _onResize() : _refreshAll(true);
  };
  ScrollTrigger.update = _updateAll;
  ScrollTrigger.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger.getAll = function() {
    return _triggers.slice(0);
  };
  ScrollTrigger.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger.addEventListener = function(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger.removeEventListener = function(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };
  ScrollTrigger.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self2) {
        elements.length || delay.restart(true);
        elements.push(self2.trigger);
        triggers.push(self2);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction(batchMax)) {
      batchMax = batchMax();
      _addListener(ScrollTrigger, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray(targets).forEach(function(target) {
      var config = {};
      for (p in varsCopy) {
        config[p] = varsCopy[p];
      }
      config.trigger = target;
      result.push(ScrollTrigger.create(config));
    });
    return result;
  };
  ScrollTrigger.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  _getGSAP() && gsap.registerPlugin(ScrollTrigger);

  // src/assets/scripts/modules/app.js
  var import_Flip2 = __toESM(require_Flip());

  // src/assets/scripts/modules/menu.js
  var import_gsap = __toESM(require_gsap());
  var import_splitting2 = __toESM(require_splitting());
  var Menu = class {
    constructor(container) {
      this.menuOpenTrigger = container.querySelector(".toggleMenu");
      this.menuCloseTrigger = container.querySelector(".toggleMenuClose");
      this.dom = {
        nav: container.querySelector(".nav"),
        list: container.querySelectorAll(".bookList li"),
        // title: new SplitText(container.querySelector('.navContainer h2')),
        title: (0, import_splitting2.default)({ target: container.querySelector(".navContainer h2"), by: "chars" }),
        // splitTitle: container.querySelectorAll('.navContainer h2 .char'),
        bg: container.querySelector("nav-bg")
      };
      this.isOpen = false;
      this.addListeners();
    }
    animationOpen() {
      const tl = import_gsap.gsap.timeline({ defaults: { ease: "power2.easeIn" } });
      tl.addLabel("start");
      tl.fromTo(this.dom.nav, {
        autoAlpha: 0
        // duration: .5
      }, {
        autoAlpha: 1
        // duration: .5
      }, "start");
      tl.fromTo(this.dom.title[0].chars, {
        // tl.fromTo(this.dom.title.chars, {
        stagger: 0.01,
        yPercent: 100
        // duration: 0.2
      }, {
        stagger: 0.01,
        yPercent: 0
        // duration: 5
      }, "start");
      tl.fromTo(this.dom.list, {
        stagger: 0.01,
        yPercent: 100
        // duration: 0.2
      }, {
        stagger: 0.01,
        yPercent: 0
        // duration: 0.2
      }, "start");
      this.isOpen = true;
    }
    animationClose() {
      const tl = import_gsap.gsap.timeline({ defaults: { ease: "power2.easeIn" } });
      tl.addLabel("start");
      tl.fromTo(this.dom.nav, {
        autoAlpha: 1
      }, {
        autoAlpha: 0
      }, "start");
      tl.fromTo(this.dom.title[0].chars, {
        // tl.fromTo(this.dom.title.chars, {
        stagger: 0.01,
        yPercent: 0
        // duration: 0.2
      }, {
        stagger: 0.01,
        yPercent: 100
        // duration: 0.2
      }, "start");
      tl.fromTo(this.dom.list, {
        stagger: 0.01,
        yPercent: 0
        // duration: 0.2
      }, {
        stagger: 0.01,
        yPercent: 100
        // duration: 0.2
      }, "start");
      tl.timeScale(2);
      this.isOpen = false;
    }
    addListeners() {
      console.log("adding listeners", this.menuOpenTrigger, this.menuCloseTrigger);
      this.menuOpenTrigger.addEventListener("click", this.animationOpen.bind(this));
      this.menuCloseTrigger.addEventListener("click", this.animationClose.bind(this));
    }
    // removeListeners() {
    //     this.menuOpenTrigger.removeEventListener('click', this.init)
    //     this.menuCloseTrigger.removeEventListener('click', this.initClose)
    // }
  };

  // src/assets/scripts/modules/animations/index.js
  var import_gsap2 = __toESM(require_gsap());
  var import_Flip = __toESM(require_Flip());
  var import_splitting4 = __toESM(require_splitting());
  import_gsap2.gsap.registerPlugin(ScrollTrigger, import_Flip.Flip);
  function fadeSlideIn(elem) {
    import_gsap2.gsap.fromTo(elem, { y: 100, autoAlpha: 0 }, {
      duration: 0.5,
      ease: "power2.easeIn",
      stagger: 0.02,
      y: 0,
      autoAlpha: 1,
      overwrite: "auto"
    });
  }
  function hide(elem) {
    import_gsap2.gsap.set(elem, { autoAlpha: 0, y: 100 });
  }
  function handleBookHeadlines() {
    const bookTitle = document.querySelectorAll("h1.bookDetail-title");
    const splitTitle = (0, import_splitting4.default)({ target: bookTitle, by: "chars" });
    const bookAuthor = document.querySelectorAll(".bookDetail-author");
    const splitAuthor = (0, import_splitting4.default)({ target: bookAuthor, by: "chars" });
    const headlines = document.querySelectorAll(".bookTemplate-section h2");
    headlines.forEach((el) => {
      const splitText = (0, import_splitting4.default)({ target: el, by: "chars" });
      hide(splitText[0].chars);
      ScrollTrigger.create({
        trigger: el,
        horizontal: true,
        scroller: "[data-scroll-container]",
        start: "25% 50%",
        onEnter: function() {
          fadeSlideIn(splitText[0].chars);
        }
        // onEnterBack: function() { fadeSlideIn(splitText[0].chars) },
        // onLeave: function() { hide(splitText[0])}
      });
    });
  }
  function revealHomeBooks(books, numbers) {
    import_gsap2.gsap.from(books, {
      opacity: 0,
      yPercent: 100,
      duration: 0.9,
      stagger: 0.1,
      ease: "power2.easeIn"
    });
    import_gsap2.gsap.from(numbers, {
      opacity: 0,
      delay: 0.7,
      yPercent: 100,
      duration: 0.5,
      stagger: 0.1,
      ease: "power4.easeInOut"
    });
  }
  function homepageTitleEnter(title, subtitle, header) {
    console.log("homepage title enter");
    const splitTitle = (0, import_splitting4.default)({ target: title, by: "chars" });
    const splitSubTitle = (0, import_splitting4.default)({ target: subtitle, by: "chars" });
    const tl = import_gsap2.gsap.timeline({
      defaults: {
        ease: "power2.easeIn"
      }
      // onComplete: () => done() 
    });
    tl.addLabel("start");
    tl.from(splitTitle[0].chars, {
      y: 100,
      // autoAlpha: 0,
      stagger: 0.01
    }, "start");
    tl.from(splitSubTitle[0].chars, {
      y: 100,
      // autoAlpha: 0,
      stagger: 0.01
    }, "start+=.2");
    tl.from(header, {
      yPercent: -100
      // duration: .2,
      // stagger: 0.1,
    }, "start");
    return tl;
  }
  function homepageTitleLeave() {
    const title = document.querySelectorAll(".pageDesc h1");
    const subtitle = document.querySelectorAll(".pageDesc p");
    const splitTitle = (0, import_splitting4.default)({ target: title, by: "chars" });
    const splitSubTitle = (0, import_splitting4.default)({ target: subtitle, by: "chars" });
    console.log(title, splitTitle);
    const tl = import_gsap2.gsap.timeline({
      defaults: {
        ease: "power2.easeIn"
      }
      // onComplete: () => done() 
    });
    tl.addLabel("start");
    tl.to(splitTitle[0].chars, {
      y: 100,
      // autoAlpha: 0,
      stagger: 0.01
    }, "start");
    tl.to(splitSubTitle[0].chars, {
      y: 100,
      // autoAlpha: 0,
      stagger: 0.01
    }, "start");
    return tl;
  }
  function homepageLeave(container, done) {
    homepageTitleLeave();
    const books = container.querySelectorAll(".cover__item-imgInner");
    const numbers = container.querySelectorAll(".cover__item-number");
    const header = container.querySelectorAll("header");
    const amt = books.length;
    const tl = import_gsap2.gsap.timeline({
      defaults: {
        ease: "power2.easeIn"
      },
      onComplete: () => done()
    });
    tl.addLabel("start");
    tl.to(numbers, {
      opacity: 0,
      yPercent: 100,
      duration: 0.4
      // stagger: 0.2,
    }, "start");
    tl.to(books, {
      opacity: 0,
      yPercent: 100,
      duration: 0.4
      // stagger: 0.1,
    }, "start");
    tl.to(header, {
      yPercent: -100,
      duration: 0.2
      // stagger: 0.1,
    }, "start");
    return tl;
  }
  function BookEnter(nextContainer) {
    const bookTitle = nextContainer.querySelector(".bookDetail-title");
    const author = nextContainer.querySelector(".bookDetail-author");
    const book = nextContainer.querySelector(".bookCover-img");
    const bookLabels = nextContainer.querySelectorAll(".bookDetail-label");
    const bookValues = nextContainer.querySelectorAll(".bookDetail-value");
    const bg = nextContainer.querySelectorAll(".coverPage-bg");
    const shadow = nextContainer.querySelectorAll(".shadow");
    const header = nextContainer.querySelectorAll("header.book");
    const recommendedBy = nextContainer.querySelector(".bookDetail-recommendation");
    const splitTitle = (0, import_splitting4.default)({ target: bookTitle, by: "chars" });
    const splitAuthor = (0, import_splitting4.default)({ target: author, by: "chars " });
    const nextBookTitle = [...document.querySelectorAll(".next > span")];
    const splitNextTitle = (0, import_splitting4.default)({ target: nextBookTitle, by: "chars" });
    const nextBookImg = document.querySelector(".nextBook--img");
    const tl = import_gsap2.gsap.timeline({ defaults: { ease: "power2.easeIn" } });
    tl.addLabel("start");
    tl.from([book, shadow], {
      opacity: 0,
      yPercent: 100,
      duration: 0.8
    });
    if (window.innerWidth > 768) {
      tl.from(bg, {
        scaleX: 0,
        // transformOrigin: "left",
        duration: 0.25
      }, "start+=0.25");
    } else {
      tl.from(bg, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.25
      }, "start+=0.25");
    }
    tl.from(splitTitle[0].chars, {
      yPercent: 120,
      duration: 0.3,
      stagger: 0.04
    }, "start");
    tl.from(splitAuthor[0].chars, {
      yPercent: 200,
      duration: 0.2,
      // delay: 1,
      stagger: 0.02
    }, "start+=0.5");
    tl.from(bookLabels, {
      yPercent: 200,
      duration: 0.2,
      // delay: 1,
      stagger: 0.1
    }, "start+=0.5");
    tl.from(bookValues, {
      yPercent: 200,
      duration: 0.2,
      // delay: 1,
      stagger: 0.1
    }, "start+=.6");
    tl.from(recommendedBy, {
      opacity: 0,
      duration: 0.2
    }, "start+=1");
    if (window.innerWidth > 768) {
      tl.from(header, {
        xPercent: -100,
        duration: 0.2
      }, "start+=.6");
    } else {
      tl.from(header, {
        opacity: 0,
        duration: 0.2
      }, "start+=.6");
    }
    tl.from(splitNextTitle[0].chars, {
      yPercent: 150,
      duration: 3,
      stagger: 0.02
    }, "start");
    tl.from(nextBookImg, {
      yPercent: 150
      // duration: 0.2,
    }, "start");
  }
  function bookLeave(currentContainer, done) {
    const bookTitle = currentContainer.querySelector(".bookDetail-title");
    const author = currentContainer.querySelector(".bookDetail-author");
    const book = currentContainer.querySelector(".bookCover-img");
    const bg = currentContainer.querySelectorAll(".coverPage-bg");
    const shadow = currentContainer.querySelectorAll(".shadow");
    const header = currentContainer.querySelectorAll("header.book");
    const bookLabels = currentContainer.querySelectorAll(".bookDetail-label");
    const bookValues = currentContainer.querySelectorAll(".bookDetail-value");
    const recommendedBy = currentContainer.querySelectorAll(".bookDetail-recommendation");
    const nextBookTitle = currentContainer.querySelectorAll(".next span");
    const splitNextTitle = (0, import_splitting4.default)({ target: nextBookTitle, by: "chars" });
    const nextBookImg = currentContainer.querySelector(".nextBook--img");
    const nextBookBG = currentContainer.querySelector(".nextBook-bg");
    const nextBookSectionTitle = currentContainer.querySelector(".nextBook h2 ");
    const splitNextSectionTitle = (0, import_splitting4.default)({ target: nextBookSectionTitle, by: "chars" });
    const splitTitle = (0, import_splitting4.default)({ target: bookTitle, by: "chars" });
    const splitAuthor = (0, import_splitting4.default)({ target: author, by: "chars" });
    const tl = import_gsap2.gsap.timeline({
      defaults: {
        ease: "power2.easeIn"
      },
      onComplete: () => done()
    });
    if (window.innerWidth > 768) {
      tl.to(bg, {
        scaleX: 0
        // transformOrigin: "left",
      }, "start");
    } else {
      tl.to(bg, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.25
      }, "start");
    }
    tl.to([book, shadow], {
      opacity: 0,
      yPercent: 100,
      duration: 0.3
    }, "start");
    tl.to(splitTitle[0].chars, {
      yPercent: 120,
      duration: 0.2,
      stagger: 0.02
    }, "start");
    tl.to(splitAuthor[0].chars, {
      yPercent: 200,
      duration: 0.2,
      // delay: 1,
      stagger: 0.02
    }, "start");
    if (window.innerWidth > 768) {
      tl.to(header, {
        xPercent: -100,
        duration: 0.2
      }, "start");
    } else {
      tl.to(header, {
        opacity: 0,
        duration: 0.2
      }, "start");
    }
    tl.to(bookLabels, {
      yPercent: 200,
      // duration: 0.2,
      // delay: 1,
      stagger: 0.1
    }, "start");
    tl.to(bookValues, {
      yPercent: 200,
      // duration: 0.2,
      // delay: 1,
      stagger: 0.1
    }, "start");
    tl.to(recommendedBy, {
      opacity: 0
    }, "start");
    tl.to(splitNextTitle[0].chars, {
      yPercent: 150,
      // duration: 0.2,
      stagger: 0.02
    }, "start");
    tl.to(nextBookImg, {
      yPercent: 150
      // duration: 0.2,
    }, "start");
    tl.to(splitNextSectionTitle[0].chars, {
      yPercent: 100,
      stagger: 0.02,
      duration: 0.25
      // duration: 0.2,
    }, "start");
    tl.to(nextBookBG, {
      scaleX: 0
      // transformOrigin: "left",
      // duration: 3, 
    }, "start+=0.05");
    return tl;
  }

  // src/assets/scripts/modules/app.js
  import_gsap3.gsap.registerPlugin(ScrollTrigger, import_Flip2.Flip);
  console.log("App.js is loaded");
  var scroll;
  var menu;
  import_core.default.hooks.once((data) => {
    const toggle = document.querySelector(".toggleMenu");
    menu = new Menu(data.next.container);
  });
  import_core.default.hooks.enter((data) => {
    window.scrollTo(0, 0);
    menu = new Menu(data.next.container);
  });
  import_core.default.hooks.beforeLeave(() => {
    if (menu.isOpen) {
      menu.animationClose();
    }
  });
  import_core.default.init({
    debug: true,
    sync: true,
    // views: [Home, Book],
    transitions: [
      {
        name: "bookTemplate",
        async once(data) {
          smooth(data.next.container);
          handleBookHeadlines();
          BookEnter(data.next.container);
        },
        async leave(data) {
          const books = document.querySelectorAll(".cover__item-imgInner");
          const numbers = document.querySelectorAll(".cover__item-number");
          const header = document.querySelectorAll("header");
          const done = this.async();
          homepageLeave(data.current.container, done);
          bookLeave(data.current.container, done);
        },
        async beforeEnter(data) {
          smooth(data.next.container);
          ScrollTrigger.getAll().forEach((t) => t.kill());
        },
        async enter(data) {
          handleBookHeadlines();
          BookEnter(data.next.container);
        }
      },
      {
        name: "homepage",
        to: {
          namespace: [
            "home"
          ]
        },
        async once(data) {
          const title = document.querySelectorAll(".pageDesc h1");
          const subtitle = document.querySelectorAll(".pageDesc p");
          homepageTitleEnter(title, subtitle);
          smooth(data.next.container);
          revealHomeBooks(data.next.container.querySelectorAll(".cover__item-imgInner"), data.next.container.querySelectorAll(".cover__item-number"));
          handleBookHeadlines();
        },
        async leave(data) {
          const done = this.async();
          bookLeave(data.current.container, done);
        },
        async beforeEnter(data) {
          smooth(data.next.container);
          ScrollTrigger.getAll().forEach((t) => t.kill());
        },
        async enter(data) {
          const title = document.querySelectorAll(".pageDesc h1");
          const subtitle = document.querySelectorAll(".pageDesc p");
          const header = document.querySelectorAll("header");
          handleBookHeadlines();
          homepageTitleEnter(title, subtitle, header);
          revealHomeBooks(data.next.container.querySelectorAll(".cover__item-imgInner"), data.next.container.querySelectorAll(".cover__item-number"));
        }
      }
    ]
  });
  function smooth(scrollContainer) {
    let currentScrollContainer = scrollContainer.querySelector("[data-scroll-container]");
    scroll = new locomotive_scroll_esm_default({
      el: currentScrollContainer,
      smooth: true,
      direction: "horizontal"
    });
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      // we don't have to define a scrollLeft because we're only scrolling vertically.
      scrollLeft(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.x;
      },
      // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });
    setTimeout(() => {
      scroll.update();
    }, 5e3);
  }

  // src/assets/scripts/main.js
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
  function hi() {
    console.log("From Main.js");
  }
  ready(hi);
})();
/*! Bundled license information:

gsap/dist/gsap.js:
  (*!
   * GSAP 3.6.0
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/Flip.js:
  (*!
   * EasePack 3.6.0
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

locomotive-scroll/dist/locomotive-scroll.esm.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.6.0
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=main.js.map
