function FastClick(e) {
    "use strict";
    var t, n = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = e, !e || !e.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(n, arguments)
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(n, arguments)
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(n, arguments)
    }, this.onTouchMove = function() {
        return FastClick.prototype.onTouchMove.apply(n, arguments)
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(n, arguments)
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(n, arguments)
    }, FastClick.notNeeded(e) || (this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
        var r = Node.prototype.removeEventListener;
        "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
    }, e.addEventListener = function(t, n, i) {
        var r = Node.prototype.addEventListener;
        "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function(e) {
            e.propagationStopped || n(e)
        }), i) : r.call(e, t, n, i)
    }), "function" == typeof e.onclick && (t = e.onclick, e.addEventListener("click", function(e) {
        t(e)
    }, !1), e.onclick = null))
}

function executeFunctionByName(e, t) {
    for (var n = [].slice.call(arguments).splice(2), i = e.split("."), r = i.pop(), o = 0; o < i.length; o++) t = t[i[o]];
    return t[r].apply(this, n)
}

function resizeitems() {
    if ($.isArray(resizefunc))
        for (i = 0; i < resizefunc.length; i++) window[resizefunc[i]]()
}

function initscrolls() {
    !0 !== jQuery.browser.mobile && ($(".slimscroller").slimscroll({
        height: "auto",
        size: "5px"
    }), $(".slimscrollleft").slimScroll({
        height: "auto",
        position: "right",
        size: "5px",
        color: "#dcdcdc",
        wheelStep: 5
    }))
}

function toggle_slimscroll(e) {
    $("#wrapper").hasClass("enlarged") ? ($(e).css("overflow", "inherit").parent().css("overflow", "inherit"), $(e).siblings(".slimScrollBar").css("visibility", "hidden")) : ($(e).css("overflow", "hidden").parent().css("overflow", "hidden"), $(e).siblings(".slimScrollBar").css("visibility", "visible"))
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = "length" in e && e.length,
                n = Z.type(e);
            return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function i(e, t, n) {
            if (Z.isFunction(t)) return Z.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return Z.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (se.test(t)) return Z.filter(t, e, n);
                t = Z.filter(t, e)
            }
            return Z.grep(e, function(e) {
                return V.call(t, e) >= 0 !== n
            })
        }

        function r(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = he[e] = {};
            return Z.each(e.match(fe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            Q.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
        }

        function s() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Z.expando + s.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(be, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? Z.parseJSON(n) : n)
                    } catch (e) {}
                    ve.set(e, t, n)
                } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function d() {
            try {
                return Q.activeElement
            } catch (e) {}
        }

        function f(e, t) {
            return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function h(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function p(e) {
            var t = Le.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function g(e, t) {
            for (var n = 0, i = e.length; i > n; n++) me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
        }

        function m(e, t) {
            var n, i, r, o, a, s, l, c;
            if (1 === t.nodeType) {
                if (me.hasData(e) && (o = me.access(e), a = me.set(t, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; i > n; n++) Z.event.add(t, r, c[r][n])
                }
                ve.hasData(e) && (s = ve.access(e), l = Z.extend({}, s), ve.set(t, l))
            }
        }

        function v(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
        }

        function y(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function b(t, n) {
            var i, r = Z(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : Z.css(r[0], "display");
            return r.detach(), o
        }

        function w(e) {
            var t = Q,
                n = Me[e];
            return n || ("none" !== (n = b(e, t)) && n || (Oe = (Oe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), (t = Oe[0].contentDocument).write(), t.close(), n = b(e, t), Oe.detach()), Me[e] = n), n
        }

        function x(e, t, n) {
            var i, r, o, a, s = e.style;
            return (n = n || qe(e)) && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), We.test(a) && He.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function S(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function C(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Je.length; r--;)
                if ((t = Je[r] + n) in e) return t;
            return i
        }

        function T(e, t, n) {
            var i = Ue.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function D(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + xe[o], !0, r)), i ? ("content" === n && (a -= Z.css(e, "padding" + xe[o], !0, r)), "margin" !== n && (a -= Z.css(e, "border" + xe[o] + "Width", !0, r))) : (a += Z.css(e, "padding" + xe[o], !0, r), "padding" !== n && (a += Z.css(e, "border" + xe[o] + "Width", !0, r)));
            return a
        }

        function _(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = qe(e),
                a = "border-box" === Z.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if ((0 > (r = x(e, t, o)) || null == r) && (r = e.style[t]), We.test(r)) return r;
                i = a && (Y.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + D(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function k(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++)(i = e[a]).style && (o[a] = me.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Se(i) && (o[a] = me.access(i, "olddisplay", w(i.nodeName)))) : (r = Se(i), "none" === n && r || me.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
            for (a = 0; s > a; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function I(e, t, n, i, r) {
            return new I.prototype.init(e, t, n, i, r)
        }

        function F() {
            return setTimeout(function() {
                Ge = void 0
            }), Ge = Z.now()
        }

        function E(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = xe[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function A(e, t, n) {
            for (var i, r = (tt[t] || []).concat(tt["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function N(e, t, n) {
            var i, r, o, a, s, l, c, u = this,
                d = {},
                f = e.style,
                h = e.nodeType && Se(e),
                p = me.get(e, "fxshow");
            n.queue || (null == (s = Z._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = Z.css(e, "display"), "inline" === ("none" === c ? me.get(e, "olddisplay") || w(e.nodeName) : c) && "none" === Z.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], Qe.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !p || void 0 === p[i]) continue;
                        h = !0
                    }
                    d[i] = p && p[i] || Z.style(e, i)
                } else c = void 0;
            if (Z.isEmptyObject(d)) "inline" === ("none" === c ? w(e.nodeName) : c) && (f.display = c);
            else {
                p ? "hidden" in p && (h = p.hidden) : p = me.access(e, "fxshow", {}), o && (p.hidden = !h), h ? Z(e).show() : u.done(function() {
                    Z(e).hide()
                }), u.done(function() {
                    var t;
                    me.remove(e, "fxshow");
                    for (t in d) Z.style(e, t, d[t])
                });
                for (i in d) a = A(h ? p[i] : 0, i, u), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = Z.camelCase(n), r = t[i], o = e[n], Z.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = Z.cssHooks[i]) && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function j(e, t, n) {
            var i, r, o = 0,
                a = et.length,
                s = Z.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = Ge || F(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; a > o; o++) c.tweens[o].run(i);
                    return s.notifyWith(e, [c, i, n]), 1 > i && a ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: Z.extend({}, t),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ge || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for ($(u, c.opts.specialEasing); a > o; o++)
                if (i = et[o].call(c, e, u, c.opts)) return i;
            return Z.map(u, A, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function L(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(fe) || [];
                if (Z.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function R(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, Z.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                a = e === vt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function P(e, t) {
            var n, i, r = Z.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && Z.extend(!0, e, i), e
        }

        function O(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    a || (a = r)
                }
                o = o || a
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function M(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (!(a = c[l + " " + o] || c["* " + o]))
                    for (r in c)
                        if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                            break
                        }
                if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function H(e, t, n, i) {
            var r;
            if (Z.isArray(t)) Z.each(t, function(t, r) {
                n || St.test(e) ? i(e, r) : H(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== Z.type(t)) i(e, t);
            else
                for (r in t) H(e + "[" + r + "]", t[r], n, i)
        }

        function W(e) {
            return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var q = [],
            B = q.slice,
            U = q.concat,
            z = q.push,
            V = q.indexOf,
            X = {},
            J = X.toString,
            G = X.hasOwnProperty,
            Y = {},
            Q = e.document,
            K = "2.1.4",
            Z = function(e, t) {
                return new Z.fn.init(e, t)
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            ie = function(e, t) {
                return t.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: K,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return B.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
            },
            pushStack: function(e) {
                var t = Z.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return Z.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(Z.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(B.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: z,
            sort: q.sort,
            splice: q.splice
        }, Z.extend = Z.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (c && i && (Z.isPlainObject(i) || (r = Z.isArray(i))) ? (r ? (r = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(c, o, i)) : void 0 !== i && (a[t] = i));
            return a
        }, Z.extend({
            expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === Z.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[J.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, ie)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r = 0,
                    o = e.length,
                    a = n(e);
                if (i) {
                    if (a)
                        for (; o > r && !1 !== t.apply(e[r], i); r++);
                    else
                        for (r in e)
                            if (!1 === t.apply(e[r], i)) break
                } else if (a)
                    for (; o > r && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : z.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : V.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; o > r; r++) !t(e[r], r) !== a && i.push(e[r]);
                return i
            },
            map: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = [];
                if (n(e))
                    for (; a > o; o++) null != (r = t(e[o], o, i)) && s.push(r);
                else
                    for (o in e) null != (r = t(e[o], o, i)) && s.push(r);
                return U.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = B.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(B.call(arguments)))
                }, r.guid = e.guid = e.guid || Z.guid++, r) : void 0
            },
            now: Date.now,
            support: Y
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            X["[object " + t + "]"] = t.toLowerCase()
        });
        var re = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, c, d, f, h, p, g;
                if ((t ? t.ownerDocument || t : O) !== E && F(t), t = t || E, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && N) {
                    if (11 !== s && (r = me.exec(e)))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = r[3]) && b.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (b.qsa && (!$ || !$.test(e))) {
                        if (h = f = P, p = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (d = C(e), (f = t.getAttribute("id")) ? h = f.replace(ye, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", c = d.length; c--;) d[c] = h + u(d[c]);
                            p = ve.test(e) && l(t.parentNode) || t, g = d.join(",")
                        }
                        if (g) try {
                            return Y.apply(n, p.querySelectorAll(g)), n
                        } catch (e) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return D(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[P] = !0, e
            }

            function r(e) {
                var t = E.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || z) - (~e.sourceIndex || z);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function l(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function c() {}

            function u(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function d(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = H++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, c = [M, o];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (l = t[P] || (t[P] = {}), (s = l[i]) && s[0] === M && s[1] === o) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function p(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
                return a
            }

            function g(e, t, n, r, o, a) {
                return r && !r[P] && (r = g(r)), o && !o[P] && (o = g(o, a)), i(function(i, a, s, l) {
                    var c, u, d, f = [],
                        g = [],
                        m = a.length,
                        v = i || h(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : p(v, f, e, s, l),
                        b = n ? o || (i ? e : m || r) ? [] : a : y;
                    if (n && n(y, b, s, l), r)
                        for (c = p(b, g), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[g[u]] = !(y[g[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? K(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = p(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, l) : Y.apply(a, b)
                })
            }

            function m(e) {
                for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = d(function(e) {
                        return e === t
                    }, a, !0), c = d(function(e) {
                        return K(t, e) > -1
                    }, a, !0), h = [function(e, n, i) {
                        var r = !o && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, r
                    }]; r > s; s++)
                    if (n = w.relative[e[s].type]) h = [d(f(h), n)];
                    else {
                        if ((n = w.filter[e[s].type].apply(null, e[s].matches))[P]) {
                            for (i = ++s; r > i && !w.relative[e[i].type]; i++);
                            return g(s > 1 && f(h), s > 1 && u(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, i > s && m(e.slice(s, i)), r > i && m(e = e.slice(i)), r > i && u(e))
                        }
                        h.push(n)
                    }
                return f(h)
            }

            function v(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    a = function(i, a, s, l, c) {
                        var u, d, f, h = 0,
                            g = "0",
                            m = i && [],
                            v = [],
                            y = _,
                            b = i || o && w.find.TAG("*", c),
                            x = M += null == y ? 1 : Math.random() || .1,
                            S = b.length;
                        for (c && (_ = a !== E && a); g !== S && null != (u = b[g]); g++) {
                            if (o && u) {
                                for (d = 0; f = e[d++];)
                                    if (f(u, a, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (M = x)
                            }
                            r && ((u = !f && u) && h--, i && m.push(u))
                        }
                        if (h += g, r && g !== h) {
                            for (d = 0; f = n[d++];) f(m, v, a, s);
                            if (i) {
                                if (h > 0)
                                    for (; g--;) m[g] || v[g] || (v[g] = J.call(l));
                                v = p(v)
                            }
                            Y.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (M = x, _ = y), m
                    };
                return r ? i(a) : a
            }
            var y, b, w, x, S, C, T, D, _, k, I, F, E, A, N, $, j, L, R, P = "sizzle" + 1 * new Date,
                O = e.document,
                M = 0,
                H = 0,
                W = n(),
                q = n(),
                B = n(),
                U = function(e, t) {
                    return e === t && (I = !0), 0
                },
                z = 1 << 31,
                V = {}.hasOwnProperty,
                X = [],
                J = X.pop,
                G = X.push,
                Y = X.push,
                Q = X.slice,
                K = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ne = te.replace("w", "w#"),
                ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
                re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                oe = new RegExp(ee + "+", "g"),
                ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = new RegExp("^" + ee + "*," + ee + "*"),
                le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                ue = new RegExp(re),
                de = new RegExp("^" + ne + "$"),
                fe = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                pe = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /[+~]/,
                ye = /'|\\/g,
                be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                xe = function() {
                    F()
                };
            try {
                Y.apply(X = Q.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (e) {
                Y = {
                    apply: X.length ? function(e, t) {
                        G.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            b = t.support = {}, S = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, F = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : O;
                return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, A = i.documentElement, (n = i.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), N = !S(i), b.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), b.getElementsByTagName = r(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), b.getElementsByClassName = ge.test(i.getElementsByClassName), b.getById = r(function(e) {
                    return A.appendChild(e).id = P, !i.getElementsByName || !i.getElementsByName(P).length
                }), b.getById ? (w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && N) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, w.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                    return N ? t.getElementsByClassName(e) : void 0
                }, j = [], $ = [], (b.qsa = ge.test(i.querySelectorAll)) && (r(function(e) {
                    A.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || $.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + P + "-]").length || $.push("~="), e.querySelectorAll(":checked").length || $.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || $.push(".#.+[+~]")
                }), r(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && $.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:")
                })), (b.matchesSelector = ge.test(L = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(e) {
                    b.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), j.push("!=", re)
                }), $ = $.length && new RegExp($.join("|")), j = j.length && new RegExp(j.join("|")), t = ge.test(A.compareDocumentPosition), R = t || ge.test(A.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return I = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === O && R(O, e) ? -1 : t === i || t.ownerDocument === O && R(O, t) ? 1 : k ? K(k, e) - K(k, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return I = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        c = [t];
                    if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : k ? K(k, e) - K(k, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; l[r] === c[r];) r++;
                    return r ? a(l[r], c[r]) : l[r] === O ? -1 : c[r] === O ? 1 : 0
                }, i) : E
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== E && F(e), n = n.replace(ce, "='$1']"), !(!b.matchesSelector || !N || j && j.test(n) || $ && $.test(n))) try {
                    var i = L.call(e, n);
                    if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, E, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== E && F(e), R(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== E && F(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
                return void 0 !== i ? i : b.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (I = !b.detectDuplicates, k = !b.sortStable && e.slice(0), e.sort(U), I) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return k = null, e
            }, x = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += x(t);
                return n
            }, (w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (h = (c = (u = m[P] || (m[P] = {}))[e] || [])[0] === M && c[1], f = c[0] === M && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (f = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++f && d === t) {
                                            u[e] = [M, h, f];
                                            break
                                        }
                                } else if (y && (c = (t[P] || (t[P] = {}))[e]) && c[0] === M) f = c[1];
                                else
                                    for (;
                                        (d = ++h && d && d[g] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [M, f]), d !== t)););
                                return (f -= r) === i || f % i == 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[P] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;) i = K(e, r[a]), e[i] = !(t[i] = r[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = T(e.replace(ae, "$1"));
                        return r[P] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(be, we),
                            function(t) {
                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === A
                    },
                    focus: function(e) {
                        return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return pe.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
            return c.prototype = w.filters = w.pseudos, w.setFilters = new c, C = t.tokenize = function(e, n) {
                var i, r, o, a, s, l, c, u = q[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = w.preFilter; s;) {
                    (!i || (r = se.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }), s = s.slice(i.length));
                    for (a in w.filter) !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : q(e, l).slice(0)
            }, T = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = B[e + " "];
                if (!o) {
                    for (t || (t = C(e)), n = t.length; n--;) o = m(t[n]), o[P] ? i.push(o) : r.push(o);
                    (o = B(e, v(r, i))).selector = e
                }
                return o
            }, D = t.select = function(e, t, n, i) {
                var r, o, a, s, c, d = "function" == typeof e && e,
                    f = !i && C(e = d.selector || e);
                if (n = n || [], 1 === f.length) {
                    if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && N && w.relative[o[1].type]) {
                        if (!(t = (w.find.ID(a.matches[0].replace(be, we), t) || [])[0])) return n;
                        d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
                        if ((c = w.find[s]) && (i = c(a.matches[0].replace(be, we), ve.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && u(o))) return Y.apply(n, i), n;
                            break
                        }
                }
                return (d || T(e, f))(i, t, !N, n, ve.test(e) && l(t.parentNode) || t), n
            }, b.sortStable = P.split("").sort(U).join("") === P, b.detectDuplicates = !!I, F(), b.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(E.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), b.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(Z, function(e, t, n) {
                var i;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        Z.find = re, Z.expr = re.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = re.uniqueSort, Z.text = re.getText, Z.isXMLDoc = re.isXML, Z.contains = re.contains;
        var oe = Z.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            se = /^.[^:#\[\.,]*$/;
        Z.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, Z.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (Z.contains(r[t], this)) return !0
                }));
                for (t = 0; n > t; t++) Z.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
            }
        });
        var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (Z.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ae.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (i = Q.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = Q, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? void 0 !== le.ready ? le.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        }).prototype = Z.fn, le = Z(Q);
        var ue = /^(?:parents|prev(?:Until|All))/,
            de = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.extend({
            dir: function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && Z(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), Z.fn.extend({
            has: function(e) {
                var t = Z(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (Z.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? Z.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? V.call(Z(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), Z.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Z.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Z.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return Z.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return Z.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Z.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Z.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Z.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Z.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || Z.merge([], e.childNodes)
            }
        }, function(e, t) {
            Z.fn[e] = function(n, i) {
                var r = Z.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Z.filter(i, r)), this.length > 1 && (de[e] || Z.unique(r), ue.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var fe = /\S+/g,
            he = {};
        Z.Callbacks = function(e) {
            var t, n, i, r, a, s, l = [],
                c = !(e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e)).once && [],
                u = function(o) {
                    for (t = e.memory && o, n = !0, s = r || 0, r = 0, a = l.length, i = !0; l && a > s; s++)
                        if (!1 === l[s].apply(o[0], o[1]) && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function t(n) {
                                Z.each(n, function(n, i) {
                                    var r = Z.type(i);
                                    "function" === r ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
                                })
                            }(arguments), i ? a = l.length : t && (r = n, u(t))
                        }
                        return this
                    },
                    remove: function() {
                        return l && Z.each(arguments, function(e, t) {
                            for (var n;
                                (n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], a = 0, this
                    },
                    disable: function() {
                        return l = c = t = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, t || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, Z.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return Z.Deferred(function(n) {
                                Z.each(t, function(t, o) {
                                    var a = Z.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? Z.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, Z.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = B.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : Z.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? B.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && Z.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var pe;
        Z.fn.ready = function(e) {
            return Z.ready.promise().done(e), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, !0 !== e && --Z.readyWait > 0 || (pe.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
            }
        }), Z.ready.promise = function(t) {
            return pe || (pe = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), pe.promise(t)
        }, Z.ready.promise();
        var ge = Z.access = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === Z.type(n)) {
                r = !0;
                for (s in n) Z.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, Z.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(Z(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        };
        Z.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
            key: function(e) {
                if (!s.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = s.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, Z.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var i, r = this.key(e),
                    o = this.cache[r];
                if ("string" == typeof t) o[t] = n;
                else if (Z.isEmptyObject(o)) Z.extend(this.cache[r], t);
                else
                    for (i in t) o[i] = t[i];
                return o
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, o = this.key(e),
                    a = this.cache[o];
                if (void 0 === t) this.cache[o] = {};
                else {
                    Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (r = Z.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(fe) || [])), n = i.length;
                    for (; n--;) delete a[i[n]]
                }
            },
            hasData: function(e) {
                return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var me = new s,
            ve = new s,
            ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            be = /([A-Z])/g;
        Z.extend({
            hasData: function(e) {
                return ve.hasData(e) || me.hasData(e)
            },
            data: function(e, t, n) {
                return ve.access(e, t, n)
            },
            removeData: function(e, t) {
                ve.remove(e, t)
            },
            _data: function(e, t, n) {
                return me.access(e, t, n)
            },
            _removeData: function(e, t) {
                me.remove(e, t)
            }
        }), Z.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = ve.get(o), 1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(o, i, r[i]));
                        me.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    ve.set(this, e)
                }) : ge(this, function(t) {
                    var n, i = Z.camelCase(e);
                    if (o && void 0 === t) {
                        if (void 0 !== (n = ve.get(o, e))) return n;
                        if (void 0 !== (n = ve.get(o, i))) return n;
                        if (void 0 !== (n = l(o, i, void 0))) return n
                    } else this.each(function() {
                        var n = ve.get(this, i);
                        ve.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ve.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ve.remove(this, e)
                })
            }
        }), Z.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = me.get(e, t), n && (!i || Z.isArray(n) ? i = me.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Z.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = Z._queueHooks(e, t),
                    a = function() {
                        Z.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return me.get(e, n) || me.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        me.remove(e, [t + "queue", n])
                    })
                })
            }
        }), Z.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = Z.queue(this, e, t);
                    Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    Z.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = Z.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = me.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xe = ["Top", "Right", "Bottom", "Left"],
            Se = function(e, t) {
                return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
            },
            Ce = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = Q.createDocumentFragment().appendChild(Q.createElement("div")),
                t = Q.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), Y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Te = "undefined";
        Y.focusinBubbles = "onfocusin" in e;
        var De = /^key/,
            _e = /^(?:mouse|pointer|contextmenu)|click/,
            ke = /^(?:focusinfocus|focusoutblur)$/,
            Ie = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, h, p, g, m = me.get(e);
                if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Z.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                            return typeof Z !== Te && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(fe) || [""]).length; c--;) s = Ie.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h && (d = Z.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = Z.event.special[h] || {}, u = Z.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && Z.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), Z.event.global[h] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, h, p, g, m = me.hasData(e) && me.get(e);
                if (m && (l = m.events)) {
                    for (c = (t = (t || "").match(fe) || [""]).length; c--;)
                        if (s = Ie.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (d = Z.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || Z.removeEvent(e, h, m.handle), delete l[h])
                        } else
                            for (h in l) Z.event.remove(e, h + t[c], n, i, !0);
                    Z.isEmptyObject(l) && (delete m.handle, me.remove(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, u, d, f = [i || Q],
                    h = G.call(t, "type") ? t.type : t,
                    p = G.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !ke.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[Z.expando] ? t : new Z.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), d = Z.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!r && !d.noBubble && !Z.isWindow(i)) {
                        for (l = d.delegateType || h, ke.test(l + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (i.ownerDocument || Q) && f.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                        (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || h, (u = (me.get(a, "events") || {})[t.type] && me.get(a, "handle")) && u.apply(a, n), (u = c && a[c]) && u.apply && Z.acceptData(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                    return t.type = h, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Z.acceptData(i) || c && Z.isFunction(i[h]) && !Z.isWindow(i) && ((s = i[c]) && (i[c] = null), Z.event.triggered = h, i[h](), Z.event.triggered = void 0, s && (i[c] = s)), t.result
                }
            },
            dispatch: function(e) {
                e = Z.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = B.call(arguments),
                    l = (me.get(this, "events") || {})[e.type] || [],
                    c = Z.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (a = Z.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (i = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (!0 !== l.disabled || "click" !== e.type) {
                            for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Z(r, this).index(l) >= 0 : Z.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[Z.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = _e.test(r) ? this.mouseHooks : De.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== d() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return Z.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = Z.extend(new Z.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? Z.event.trigger(r, null, t) : Z.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, Z.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, Z.Event = function(e, t) {
            return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : u) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
        }, Z.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            Z.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !Z.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), Y.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                Z.event.simulate(t, e.target, Z.event.fix(e), !0)
            };
            Z.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = me.access(i, t);
                    r || i.addEventListener(e, n, !0), me.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = me.access(i, t) - 1;
                    r ? me.access(i, t, r) : (i.removeEventListener(e, n, !0), me.remove(i, t))
                }
            }
        }), Z.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = u;
                else if (!i) return this;
                return 1 === r && (o = i, i = function(e) {
                    return Z().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                    Z.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = u), this.each(function() {
                    Z.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    Z.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? Z.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ee = /<([\w:]+)/,
            Ae = /<|&#?\w+;/,
            Ne = /<(?:script|style|link)/i,
            $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
            je = /^$|\/(?:java|ecma)script/i,
            Le = /^true\/(.*)/,
            Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Pe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, Z.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s = e.cloneNode(!0),
                    l = Z.contains(e.ownerDocument, e);
                if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                    for (a = v(s), o = v(e), i = 0, r = o.length; r > i; i++) y(o[i], a[i]);
                if (t)
                    if (n)
                        for (o = o || v(e), a = a || v(s), i = 0, r = o.length; r > i; i++) m(o[i], a[i]);
                    else m(e, s);
                return (a = v(s, "script")).length > 0 && g(a, !l && v(e, "script")), s
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, c, u = t.createDocumentFragment(), d = [], f = 0, h = e.length; h > f; f++)
                    if ((r = e[f]) || 0 === r)
                        if ("object" === Z.type(r)) Z.merge(d, r.nodeType ? [r] : r);
                        else if (Ae.test(r)) {
                    for (o = o || u.appendChild(t.createElement("div")), a = (Ee.exec(r) || ["", ""])[1].toLowerCase(), s = Pe[a] || Pe._default, o.innerHTML = s[1] + r.replace(Fe, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                    Z.merge(d, o.childNodes), (o = u.firstChild).textContent = ""
                } else d.push(t.createTextNode(r));
                for (u.textContent = "", f = 0; r = d[f++];)
                    if ((!i || -1 === Z.inArray(r, i)) && (l = Z.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && g(o), n))
                        for (c = 0; r = o[c++];) je.test(r.type || "") && n.push(r);
                return u
            },
            cleanData: function(e) {
                for (var t, n, i, r, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (Z.acceptData(n) && (r = n[me.expando]) && (t = me.cache[r])) {
                        if (t.events)
                            for (i in t.events) o[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                        me.cache[r] && delete me.cache[r]
                    }
                    delete ve.cache[n[ve.expando]]
                }
            }
        }), Z.fn.extend({
            text: function(e) {
                return ge(this, function(e) {
                    return void 0 === e ? Z.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? Z.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return Z.clone(this, e, t)
                })
            },
            html: function(e) {
                return ge(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ne.test(e) && !Pe[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Fe, "<$1></$2>");
                        try {
                            for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = U.apply([], e);
                var n, i, r, o, a, s, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    f = e[0],
                    g = Z.isFunction(f);
                if (g || c > 1 && "string" == typeof f && !Y.checkClone && $e.test(f)) return this.each(function(n) {
                    var i = u.eq(n);
                    g && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (o = (r = Z.map(v(n, "script"), h)).length; c > l; l++) a = n, l !== d && (a = Z.clone(a, !0, !0), o && Z.merge(r, v(a, "script"))), t.call(this[l], a, l);
                    if (o)
                        for (s = r[r.length - 1].ownerDocument, Z.map(r, p), l = 0; o > l; l++) a = r[l], je.test(a.type || "") && !me.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Re, "")))
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            Z.fn[e] = function(e) {
                for (var n, i = [], r = Z(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(r[a])[t](n), z.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Oe, Me = {},
            He = /^margin/,
            We = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
            qe = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
                var t = e.getComputedStyle(a, null);
                n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
            }
            var n, i, r = Q.documentElement,
                o = Q.createElement("div"),
                a = Q.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(Y, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(Q.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), a.removeChild(n), t
                }
            }))
        }(), Z.swap = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        };
        var Be = /^(none|table(?!-c[ea]).+)/,
            Ue = new RegExp("^(" + we + ")(.*)$", "i"),
            ze = new RegExp("^([+-])=(" + we + ")", "i"),
            Ve = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Xe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Je = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = x(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = Z.camelCase(t),
                        l = e.style;
                    return t = Z.cssProps[s] || (Z.cssProps[s] = C(l, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = ze.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = Z.camelCase(t);
                return t = Z.cssProps[s] || (Z.cssProps[s] = C(e.style, s)), (a = Z.cssHooks[t] || Z.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = x(e, t, i)), "normal" === r && t in Xe && (r = Xe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || Z.isNumeric(o) ? o || 0 : r) : r
            }
        }), Z.each(["height", "width"], function(e, t) {
            Z.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Be.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                        return _(e, t, i)
                    }) : _(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && qe(e);
                    return T(e, n, i ? D(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), Z.cssHooks.marginRight = S(Y.reliableMarginRight, function(e, t) {
            return t ? Z.swap(e, {
                display: "inline-block"
            }, x, [e, "marginRight"]) : void 0
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            Z.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + xe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, He.test(e) || (Z.cssHooks[e + t].set = T)
        }), Z.fn.extend({
            css: function(e, t) {
                return ge(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (Z.isArray(t)) {
                        for (i = qe(e), r = t.length; r > a; a++) o[t[a]] = Z.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Se(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }), Z.Tween = I, I.prototype = {
            constructor: I,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Z.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = I.propHooks[this.prop];
                return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, Z.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, Z.fx = I.prototype.init, Z.fx.step = {};
        var Ge, Ye, Qe = /^(?:toggle|show|hide)$/,
            Ke = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
            Ze = /queueHooks$/,
            et = [N],
            tt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = Ke.exec(t),
                        o = r && r[3] || (Z.cssNumber[e] ? "" : "px"),
                        a = (Z.cssNumber[e] || "px" !== o && +i) && Ke.exec(Z.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do {
                            s = s || ".5", a /= s, Z.style(n.elem, e, a + o)
                        } while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        Z.Animation = Z.extend(j, {
                tweener: function(e, t) {
                    Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], tt[n] = tt[n] || [], tt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? et.unshift(e) : et.push(e)
                }
            }), Z.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? Z.extend({}, e) : {
                    complete: n || !n && t || Z.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !Z.isFunction(t) && t
                };
                return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
                }, i
            }, Z.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Se).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = Z.isEmptyObject(e),
                        o = Z.speed(t, n, i),
                        a = function() {
                            var t = j(this, Z.extend({}, e), o);
                            (r || me.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = Z.timers,
                            a = me.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && Ze.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && Z.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = me.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = Z.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, Z.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function(e, t) {
                var n = Z.fn[t];
                Z.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(E(t, !0), e, i, r)
                }
            }), Z.each({
                slideDown: E("show"),
                slideUp: E("hide"),
                slideToggle: E("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                Z.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), Z.timers = [], Z.fx.tick = function() {
                var e, t = 0,
                    n = Z.timers;
                for (Ge = Z.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || Z.fx.stop(), Ge = void 0
            }, Z.fx.timer = function(e) {
                Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
            }, Z.fx.interval = 13, Z.fx.start = function() {
                Ye || (Ye = setInterval(Z.fx.tick, Z.fx.interval))
            }, Z.fx.stop = function() {
                clearInterval(Ye), Ye = null
            }, Z.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Z.fn.delay = function(e, t) {
                return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e = Q.createElement("input"),
                    t = Q.createElement("select"),
                    n = t.appendChild(Q.createElement("option"));
                e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, (e = Q.createElement("input")).value = "t", e.type = "radio", Y.radioValue = "t" === e.value
            }();
        var nt, it = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(e, t) {
                return ge(this, Z.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    Z.removeAttr(this, e)
                })
            }
        }), Z.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Te ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? nt : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Z.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(fe);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!Y.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), nt = {
            set: function(e, t, n) {
                return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = it[t] || Z.find.attr;
            it[t] = function(e, t, i) {
                var r, o;
                return i || (o = it[t], it[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, it[t] = o), r
            }
        });
        var rt = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(e, t) {
                return ge(this, Z.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[Z.propFix[e] || e]
                })
            }
        }), Z.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !Z.isXMLDoc(e)) && (t = Z.propFix[t] || t, r = Z.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || rt.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (Z.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Z.propFix[this.toLowerCase()] = this
        });
        var ot = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = "string" == typeof e && e,
                    l = 0,
                    c = this.length;
                if (Z.isFunction(e)) return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(fe) || []; c > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = Z.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                    l = 0,
                    c = this.length;
                if (Z.isFunction(e)) return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(fe) || []; c > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? Z.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                    Z(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function() {
                    if ("string" === n)
                        for (var t, i = 0, r = Z(this), o = e.match(fe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === Te || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : me.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ot, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var at = /\r/g;
        Z.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, Z(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(at, "") : null == n ? "" : n)) : void 0
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Z.find.attr(e, "value");
                        return null != t ? t : Z.trim(Z.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (!(!(n = i[l]).selected && l !== r || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                                if (t = Z(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = Z.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = Z.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(e, t) {
                    return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
                }
            }, Y.checkOn || (Z.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            Z.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), Z.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var st = Z.now(),
            lt = /\?/;
        Z.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, Z.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
        };
        var ct = /#.*$/,
            ut = /([?&])_=[^&]*/,
            dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ht = /^(?:GET|HEAD)$/,
            pt = /^\/\//,
            gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            mt = {},
            vt = {},
            yt = "*/".concat("*"),
            bt = e.location.href,
            wt = gt.exec(bt.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bt,
                type: "GET",
                isLocal: ft.test(wt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e)
            },
            ajaxPrefilter: L(mt),
            ajaxTransport: L(vt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var l, u, v, y, w, S = t;
                    2 !== b && (b = 2, s && clearTimeout(s), i = void 0, o = a || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = O(d, x, n)), y = M(d, y, x, l), l ? (d.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (Z.lastModified[r] = w), (w = x.getResponseHeader("etag")) && (Z.etag[r] = w)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state, u = y.data, v = y.error, l = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || S) + "", l ? p.resolveWith(f, [u, S, x]) : p.rejectWith(f, [x, S, v]), x.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? u : v]), g.fireWith(f, [x, S]), c && (h.trigger("ajaxComplete", [x, d]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, l, c, u, d = Z.ajaxSetup({}, t),
                    f = d.context || d,
                    h = d.context && (f.nodeType || f.jquery) ? Z(f) : Z.event,
                    p = Z.Deferred(),
                    g = Z.Callbacks("once memory"),
                    m = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; t = dt.exec(o);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || bt) + "").replace(ct, "").replace(pt, wt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(fe) || [""], null == d.crossDomain && (l = gt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === wt[1] && l[2] === wt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), R(mt, d, t, x), 2 === b) return x;
                (c = Z.event && d.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ht.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (lt.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ut.test(r) ? r.replace(ut, "$1_=" + st++) : r + (lt.test(r) ? "&" : "?") + "_=" + st++)), d.ifModified && (Z.lastModified[r] && x.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && x.setRequestHeader("If-None-Match", Z.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, x, d) || 2 === b)) return x.abort();
                w = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[u](d[u]);
                if (i = R(vt, d, t, x)) {
                    x.readyState = 1, c && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, i.send(v, n)
                    } catch (e) {
                        if (!(2 > b)) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return Z.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return Z.get(e, void 0, t, "script")
            }
        }), Z.each(["get", "post"], function(e, t) {
            Z[t] = function(e, n, i, r) {
                return Z.isFunction(n) && (r = r || i, i = n, n = void 0), Z.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), Z._evalUrl = function(e) {
            return Z.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, Z.fn.extend({
            wrapAll: function(e) {
                var t;
                return Z.isFunction(e) ? this.each(function(t) {
                    Z(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return this.each(Z.isFunction(e) ? function(t) {
                    Z(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = Z(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = Z.isFunction(e);
                return this.each(function(n) {
                    Z(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, Z.expr.filters.visible = function(e) {
            return !Z.expr.filters.hidden(e)
        };
        var xt = /%20/g,
            St = /\[\]$/,
            Ct = /\r?\n/g,
            Tt = /^(?:submit|button|image|reset|file)$/i,
            Dt = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) H(n, e[n], t, r);
            return i.join("&").replace(xt, "+")
        }, Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Z.prop(this, "elements");
                    return e ? Z.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Z(this).is(":disabled") && Dt.test(this.nodeName) && !Tt.test(e) && (this.checked || !Ce.test(e))
                }).map(function(e, t) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ct, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ct, "\r\n")
                    }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var _t = 0,
            kt = {},
            It = {
                0: 200,
                1223: 204
            },
            Ft = Z.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in kt) kt[e]()
        }), Y.cors = !!Ft && "withCredentials" in Ft, Y.ajax = Ft = !!Ft, Z.ajaxTransport(function(e) {
            var t;
            return Y.cors || Ft && !e.crossDomain ? {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++_t;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) o.setRequestHeader(r, n[r]);
                    t = function(e) {
                        return function() {
                            t && (delete kt[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(It[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), o.onerror = t("error"), t = kt[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }), Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return Z.globalEval(e), e
                }
            }
        }), Z.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), Z.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = Z("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), Q.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Et = [],
            At = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Et.pop() || Z.expando + "_" + st++;
                return this[e] = !0, e
            }
        }), Z.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = !1 !== t.jsonp && (At.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && At.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(At, "$1" + r) : !1 !== t.jsonp && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || Z.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Et.push(r)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), Z.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Q;
            var i = ae.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, r), r && r.length && Z(r).remove(), Z.merge([], i.childNodes))
        };
        var Nt = Z.fn.load;
        Z.fn.load = function(e, t, n) {
            if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && Z.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, o || [e.responseText, t, e])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            Z.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), Z.expr.filters.animated = function(e) {
            return Z.grep(Z.timers, function(t) {
                return e === t.elem
            }).length
        };
        var $t = e.document.documentElement;
        Z.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c = Z.css(e, "position"),
                    u = Z(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = u.offset(), o = Z.css(e, "top"), l = Z.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (i = u.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, Z.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    Z.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                return o ? (t = o.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== Te && (r = i.getBoundingClientRect()), n = W(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - Z.css(n, "marginTop", !0),
                        left: t.left - i.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || $t; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                    return e || $t
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = "pageYOffset" === n;
            Z.fn[t] = function(r) {
                return ge(this, function(t, r, o) {
                    var a = W(t);
                    return void 0 === o ? a ? a[n] : t[r] : void(a ? a.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
                }, t, r, arguments.length, null)
            }
        }), Z.each(["top", "left"], function(e, t) {
            Z.cssHooks[t] = S(Y.pixelPosition, function(e, n) {
                return n ? (n = x(e, t), We.test(n) ? Z(e).position()[t] + "px" : n) : void 0
            })
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            Z.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                Z.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return ge(this, function(t, n, i) {
                        var r;
                        return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? Z.css(t, n, a) : Z.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), Z.fn.size = function() {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Z
        });
        var jt = e.jQuery,
            Lt = e.$;
        return Z.noConflict = function(t) {
            return e.$ === Z && (e.$ = Lt), t && e.jQuery === Z && (e.jQuery = jt), Z
        }, typeof t === Te && (e.jQuery = e.$ = Z), Z
    }), function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], function(t) {
            return e(t, window, document)
        }) : "object" == typeof exports ? module.exports = function(t, n) {
            return t || (t = window), n || (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n, t, t.document)
        } : e(jQuery, window, document)
    }(function(e, t, n, i) {
        function r(t) {
            var n, i, o = {};
            e.each(t, function(e) {
                (n = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (i = e.replace(n[0], n[2].toLowerCase()), o[i] = e, "o" === n[1] && r(t[e]))
            }), t._hungarianMap = o
        }

        function o(t, n, a) {
            t._hungarianMap || r(t);
            var s;
            e.each(n, function(r) {
                (s = t._hungarianMap[r]) === i || !a && n[s] !== i || ("o" === s.charAt(0) ? (n[s] || (n[s] = {}), e.extend(!0, n[s], n[r]), o(t[s], n[s], a)) : n[s] = n[r])
            })
        }

        function a(e) {
            var t = Ve.defaults.oLanguage,
                n = e.sZeroRecords;
            !e.sEmptyTable && n && "No data available in table" === t.sEmptyTable && Ae(e, e, "sZeroRecords", "sEmptyTable"), !e.sLoadingRecords && n && "Loading..." === t.sLoadingRecords && Ae(e, e, "sZeroRecords", "sLoadingRecords"), e.sInfoThousands && (e.sThousands = e.sInfoThousands), (e = e.sDecimal) && He(e)
        }

        function s(e) {
            if (ct(e, "ordering", "bSort"), ct(e, "orderMulti", "bSortMulti"), ct(e, "orderClasses", "bSortClasses"), ct(e, "orderCellsTop", "bSortCellsTop"), ct(e, "order", "aaSorting"), ct(e, "orderFixed", "aaSortingFixed"), ct(e, "paging", "bPaginate"), ct(e, "pagingType", "sPaginationType"), ct(e, "pageLength", "iDisplayLength"), ct(e, "searching", "bFilter"), "boolean" == typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : ""), "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : ""), e = e.aoSearchCols)
                for (var t = 0, n = e.length; t < n; t++) e[t] && o(Ve.models.oSearch, e[t])
        }

        function l(t) {
            ct(t, "orderable", "bSortable"), ct(t, "orderData", "aDataSort"), ct(t, "orderSequence", "asSorting"), ct(t, "orderDataType", "sortDataType");
            var n = t.aDataSort;
            n && !e.isArray(n) && (t.aDataSort = [n])
        }

        function c(n) {
            if (!Ve.__browser) {
                var i = {};
                Ve.__browser = i;
                var r = e("<div/>").css({
                        position: "fixed",
                        top: 0,
                        left: -1 * e(t).scrollLeft(),
                        height: 1,
                        width: 1,
                        overflow: "hidden"
                    }).append(e("<div/>").css({
                        position: "absolute",
                        top: 1,
                        left: 1,
                        width: 100,
                        overflow: "scroll"
                    }).append(e("<div/>").css({
                        width: "100%",
                        height: 10
                    }))).appendTo("body"),
                    o = r.children(),
                    a = o.children();
                i.barWidth = o[0].offsetWidth - o[0].clientWidth, i.bScrollOversize = 100 === a[0].offsetWidth && 100 !== o[0].clientWidth, i.bScrollbarLeft = 1 !== Math.round(a.offset().left), i.bBounding = !!r[0].getBoundingClientRect().width, r.remove()
            }
            e.extend(n.oBrowser, Ve.__browser), n.oScroll.iBarWidth = Ve.__browser.barWidth
        }

        function u(e, t, n, r, o, a) {
            var s, l = !1;
            for (n !== i && (s = n, l = !0); r !== o;) e.hasOwnProperty(r) && (s = l ? t(s, e[r], r, e) : e[r], l = !0, r += a);
            return s
        }

        function d(t, i) {
            var r = Ve.defaults.column,
                o = t.aoColumns.length,
                r = e.extend({}, Ve.models.oColumn, r, {
                    nTh: i || n.createElement("th"),
                    sTitle: r.sTitle ? r.sTitle : i ? i.innerHTML : "",
                    aDataSort: r.aDataSort ? r.aDataSort : [o],
                    mData: r.mData ? r.mData : o,
                    idx: o
                });
            t.aoColumns.push(r), (r = t.aoPreSearchCols)[o] = e.extend({}, Ve.models.oSearch, r[o]), f(t, o, e(i).data())
        }

        function f(t, n, r) {
            var n = t.aoColumns[n],
                a = t.oClasses,
                s = e(n.nTh);
            if (!n.sWidthOrig) {
                n.sWidthOrig = s.attr("width") || null;
                var c = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                c && (n.sWidthOrig = c[1])
            }
            r !== i && null !== r && (l(r), o(Ve.defaults.column, r), r.mDataProp !== i && !r.mData && (r.mData = r.mDataProp), r.sType && (n._sManualType = r.sType), r.className && !r.sClass && (r.sClass = r.className), e.extend(n, r), Ae(n, r, "sWidth", "sWidthOrig"), r.iDataSort !== i && (n.aDataSort = [r.iDataSort]), Ae(n, r, "aDataSort"));
            var u = n.mData,
                d = D(u),
                f = n.mRender ? D(n.mRender) : null,
                r = function(e) {
                    return "string" == typeof e && -1 !== e.indexOf("@")
                };
            n._bAttrSrc = e.isPlainObject(u) && (r(u.sort) || r(u.type) || r(u.filter)), n._setter = null, n.fnGetData = function(e, t, n) {
                var r = d(e, t, i, n);
                return f && t ? f(r, t, e, n) : r
            }, n.fnSetData = function(e, t, n) {
                return _(u)(e, t, n)
            }, "number" != typeof u && (t._rowReadObject = !0), t.oFeatures.bSort || (n.bSortable = !1, s.addClass(a.sSortableNone)), t = -1 !== e.inArray("asc", n.asSorting), r = -1 !== e.inArray("desc", n.asSorting), n.bSortable && (t || r) ? t && !r ? (n.sSortingClass = a.sSortableAsc, n.sSortingClassJUI = a.sSortJUIAscAllowed) : !t && r ? (n.sSortingClass = a.sSortableDesc, n.sSortingClassJUI = a.sSortJUIDescAllowed) : (n.sSortingClass = a.sSortable, n.sSortingClassJUI = a.sSortJUI) : (n.sSortingClass = a.sSortableNone, n.sSortingClassJUI = "")
        }

        function h(e) {
            if (!1 !== e.oFeatures.bAutoWidth) {
                var t = e.aoColumns;
                ge(e);
                for (var n = 0, i = t.length; n < i; n++) t[n].nTh.style.width = t[n].sWidth
            }("" !== (t = e.oScroll).sY || "" !== t.sX) && he(e), Le(e, null, "column-sizing", [e])
        }

        function p(e, t) {
            var n = v(e, "bVisible");
            return "number" == typeof n[t] ? n[t] : null
        }

        function g(t, n) {
            var i = v(t, "bVisible");
            return -1 !== (i = e.inArray(n, i)) ? i : null
        }

        function m(t) {
            var n = 0;
            return e.each(t.aoColumns, function(t, i) {
                i.bVisible && "none" !== e(i.nTh).css("display") && n++
            }), n
        }

        function v(t, n) {
            var i = [];
            return e.map(t.aoColumns, function(e, t) {
                e[n] && i.push(t)
            }), i
        }

        function y(e) {
            var t, n, r, o, a, s, l, c, u, d = e.aoColumns,
                f = e.aoData,
                h = Ve.ext.type.detect;
            for (t = 0, n = d.length; t < n; t++)
                if (l = d[t], u = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                for (r = 0, o = h.length; r < o; r++) {
                    for (a = 0, s = f.length; a < s && (u[a] === i && (u[a] = S(e, a, t, "type")), (c = h[r](u[a], e)) || r === h.length - 1) && "html" !== c; a++);
                    if (c) {
                        l.sType = c;
                        break
                    }
                }
                l.sType || (l.sType = "string")
            }
        }

        function b(t, n, r, o) {
            var a, s, l, c, u, f, h = t.aoColumns;
            if (n)
                for (a = n.length - 1; 0 <= a; a--) {
                    var p = (f = n[a]).targets !== i ? f.targets : f.aTargets;
                    for (e.isArray(p) || (p = [p]), s = 0, l = p.length; s < l; s++)
                        if ("number" == typeof p[s] && 0 <= p[s]) {
                            for (; h.length <= p[s];) d(t);
                            o(p[s], f)
                        } else if ("number" == typeof p[s] && 0 > p[s]) o(h.length + p[s], f);
                    else if ("string" == typeof p[s])
                        for (c = 0, u = h.length; c < u; c++)("_all" == p[s] || e(h[c].nTh).hasClass(p[s])) && o(c, f)
                }
            if (r)
                for (a = 0, t = r.length; a < t; a++) o(a, r[a])
        }

        function w(t, n, r, o) {
            var a = t.aoData.length,
                s = e.extend(!0, {}, Ve.models.oRow, {
                    src: r ? "dom" : "data",
                    idx: a
                });
            s._aData = n, t.aoData.push(s);
            for (var l = t.aoColumns, c = 0, u = l.length; c < u; c++) l[c].sType = null;
            return t.aiDisplayMaster.push(a), (n = t.rowIdFn(n)) !== i && (t.aIds[n] = s), (r || !t.oFeatures.bDeferRender) && N(t, a, r, o), a
        }

        function x(t, n) {
            var i;
            return n instanceof e || (n = e(n)), n.map(function(e, n) {
                return i = A(t, n), w(t, i.data, n, i.cells)
            })
        }

        function S(e, t, n, r) {
            var o = e.iDraw,
                a = e.aoColumns[n],
                s = e.aoData[t]._aData,
                l = a.sDefaultContent,
                c = a.fnGetData(s, r, {
                    settings: e,
                    row: t,
                    col: n
                });
            if (c === i) return e.iDrawError != o && null === l && (Ee(e, 0, "Requested unknown parameter " + ("function" == typeof a.mData ? "{function}" : "'" + a.mData + "'") + " for row " + t + ", column " + n, 4), e.iDrawError = o), l;
            if (c !== s && null !== c || null === l || r === i) {
                if ("function" == typeof c) return c.call(s)
            } else c = l;
            return null === c && "display" == r ? "" : c
        }

        function C(e, t, n, i) {
            e.aoColumns[n].fnSetData(e.aoData[t]._aData, i, {
                settings: e,
                row: t,
                col: n
            })
        }

        function T(t) {
            return e.map(t.match(/(\\.|[^\.])+/g) || [""], function(e) {
                return e.replace(/\\\./g, ".")
            })
        }

        function D(t) {
            if (e.isPlainObject(t)) {
                var n = {};
                return e.each(t, function(e, t) {
                        t && (n[e] = D(t))
                    }),
                    function(e, t, r, o) {
                        var a = n[t] || n._;
                        return a !== i ? a(e, t, r, o) : e
                    }
            }
            if (null === t) return function(e) {
                return e
            };
            if ("function" == typeof t) return function(e, n, i, r) {
                return t(e, n, i, r)
            };
            if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("("))) {
                var r = function(t, n, o) {
                    var a, s;
                    if ("" !== o)
                        for (var l = 0, c = (s = T(o)).length; l < c; l++) {
                            if (o = s[l].match(ut), a = s[l].match(dt), o) {
                                if (s[l] = s[l].replace(ut, ""), "" !== s[l] && (t = t[s[l]]), a = [], s.splice(0, l + 1), s = s.join("."), e.isArray(t))
                                    for (l = 0, c = t.length; l < c; l++) a.push(r(t[l], n, s));
                                t = "" === (t = o[0].substring(1, o[0].length - 1)) ? a : a.join(t);
                                break
                            }
                            if (a) s[l] = s[l].replace(dt, ""), t = t[s[l]]();
                            else {
                                if (null === t || t[s[l]] === i) return i;
                                t = t[s[l]]
                            }
                        }
                    return t
                };
                return function(e, n) {
                    return r(e, n, t)
                }
            }
            return function(e) {
                return e[t]
            }
        }

        function _(t) {
            if (e.isPlainObject(t)) return _(t._);
            if (null === t) return function() {};
            if ("function" == typeof t) return function(e, n, i) {
                t(e, "set", n, i)
            };
            if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("("))) {
                var n = function(t, r, o) {
                    var a;
                    a = (o = T(o))[o.length - 1];
                    for (var s, l, c = 0, u = o.length - 1; c < u; c++) {
                        if (s = o[c].match(ut), l = o[c].match(dt), s) {
                            if (o[c] = o[c].replace(ut, ""), t[o[c]] = [], (a = o.slice()).splice(0, c + 1), s = a.join("."), e.isArray(r))
                                for (l = 0, u = r.length; l < u; l++) a = {}, n(a, r[l], s), t[o[c]].push(a);
                            else t[o[c]] = r;
                            return
                        }
                        l && (o[c] = o[c].replace(dt, ""), t = t[o[c]](r)), null !== t[o[c]] && t[o[c]] !== i || (t[o[c]] = {}), t = t[o[c]]
                    }
                    a.match(dt) ? t[a.replace(dt, "")](r) : t[a.replace(ut, "")] = r
                };
                return function(e, i) {
                    return n(e, i, t)
                }
            }
            return function(e, n) {
                e[t] = n
            }
        }

        function k(e) {
            return rt(e.aoData, "_aData")
        }

        function I(e) {
            e.aoData.length = 0, e.aiDisplayMaster.length = 0, e.aiDisplay.length = 0, e.aIds = {}
        }

        function F(e, t, n) {
            for (var r = -1, o = 0, a = e.length; o < a; o++) e[o] == t ? r = o : e[o] > t && e[o]--; - 1 != r && n === i && e.splice(r, 1)
        }

        function E(e, t, n, r) {
            var o, a = e.aoData[t],
                s = function(n, i) {
                    for (; n.childNodes.length;) n.removeChild(n.firstChild);
                    n.innerHTML = S(e, t, i, "display")
                };
            if ("dom" !== n && (n && "auto" !== n || "dom" !== a.src)) {
                var l = a.anCells;
                if (l)
                    if (r !== i) s(l[r], r);
                    else
                        for (n = 0, o = l.length; n < o; n++) s(l[n], n)
            } else a._aData = A(e, a, r, r === i ? i : a._aData).data;
            if (a._aSortData = null, a._aFilterData = null, s = e.aoColumns, r !== i) s[r].sType = null;
            else {
                for (n = 0, o = s.length; n < o; n++) s[n].sType = null;
                $(e, a)
            }
        }

        function A(t, n, r, o) {
            var a, s, l, c = [],
                u = n.firstChild,
                d = 0,
                f = t.aoColumns,
                h = t._rowReadObject,
                o = o !== i ? o : h ? {} : [],
                p = function(e, t) {
                    if ("string" == typeof e) {
                        var n = e.indexOf("@"); - 1 !== n && (n = e.substring(n + 1), _(e)(o, t.getAttribute(n)))
                    }
                },
                g = function(t) {
                    r !== i && r !== d || (s = f[d], l = e.trim(t.innerHTML), s && s._bAttrSrc ? (_(s.mData._)(o, l), p(s.mData.sort, t), p(s.mData.type, t), p(s.mData.filter, t)) : h ? (s._setter || (s._setter = _(s.mData)), s._setter(o, l)) : o[d] = l), d++
                };
            if (u)
                for (; u;) "TD" != (a = u.nodeName.toUpperCase()) && "TH" != a || (g(u), c.push(u)), u = u.nextSibling;
            else
                for (u = 0, a = (c = n.anCells).length; u < a; u++) g(c[u]);
            return (n = n.firstChild ? n : n.nTr) && (n = n.getAttribute("id")) && _(t.rowId)(o, n), {
                data: o,
                cells: c
            }
        }

        function N(t, i, r, o) {
            var a, s, l, c, u, d = t.aoData[i],
                f = d._aData,
                h = [];
            if (null === d.nTr) {
                for (a = r || n.createElement("tr"), d.nTr = a, d.anCells = h, a._DT_RowIndex = i, $(t, d), c = 0, u = t.aoColumns.length; c < u; c++) l = t.aoColumns[c], (s = r ? o[c] : n.createElement(l.sCellType))._DT_CellIndex = {
                    row: i,
                    column: c
                }, h.push(s), r && !l.mRender && l.mData === c || e.isPlainObject(l.mData) && l.mData._ === c + ".display" || (s.innerHTML = S(t, i, c, "display")), l.sClass && (s.className += " " + l.sClass), l.bVisible && !r ? a.appendChild(s) : !l.bVisible && r && s.parentNode.removeChild(s), l.fnCreatedCell && l.fnCreatedCell.call(t.oInstance, s, S(t, i, c), f, i, c);
                Le(t, "aoRowCreatedCallback", null, [a, f, i])
            }
            d.nTr.setAttribute("role", "row")
        }

        function $(t, n) {
            var i = n.nTr,
                r = n._aData;
            if (i) {
                var o = t.rowIdFn(r);
                o && (i.id = o), r.DT_RowClass && (o = r.DT_RowClass.split(" "), n.__rowc = n.__rowc ? lt(n.__rowc.concat(o)) : o, e(i).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)), r.DT_RowAttr && e(i).attr(r.DT_RowAttr), r.DT_RowData && e(i).data(r.DT_RowData)
            }
        }

        function j(t) {
            var n, i, r, o, a, s = t.nTHead,
                l = t.nTFoot,
                c = 0 === e("th, td", s).length,
                u = t.oClasses,
                d = t.aoColumns;
            for (c && (o = e("<tr/>").appendTo(s)), n = 0, i = d.length; n < i; n++) a = d[n], r = e(a.nTh).addClass(a.sClass), c && r.appendTo(o), t.oFeatures.bSort && (r.addClass(a.sSortingClass), !1 !== a.bSortable && (r.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), Te(t, a.nTh, n))), a.sTitle != r[0].innerHTML && r.html(a.sTitle), Pe(t, "header")(t, r, a, u);
            if (c && M(t.aoHeader, s), e(s).find(">tr").attr("role", "row"), e(s).find(">tr>th, >tr>td").addClass(u.sHeaderTH), e(l).find(">tr>th, >tr>td").addClass(u.sFooterTH), null !== l)
                for (n = 0, i = (t = t.aoFooter[0]).length; n < i; n++) a = d[n], a.nTf = t[n].cell, a.sClass && e(a.nTf).addClass(a.sClass)
        }

        function L(t, n, r) {
            var o, a, s, l, c = [],
                u = [],
                d = t.aoColumns.length;
            if (n) {
                for (r === i && (r = !1), o = 0, a = n.length; o < a; o++) {
                    for (c[o] = n[o].slice(), c[o].nTr = n[o].nTr, s = d - 1; 0 <= s; s--) !t.aoColumns[s].bVisible && !r && c[o].splice(s, 1);
                    u.push([])
                }
                for (o = 0, a = c.length; o < a; o++) {
                    if (t = c[o].nTr)
                        for (; s = t.firstChild;) t.removeChild(s);
                    for (s = 0, n = c[o].length; s < n; s++)
                        if (l = d = 1, u[o][s] === i) {
                            for (t.appendChild(c[o][s].cell), u[o][s] = 1; c[o + d] !== i && c[o][s].cell == c[o + d][s].cell;) u[o + d][s] = 1, d++;
                            for (; c[o][s + l] !== i && c[o][s].cell == c[o][s + l].cell;) {
                                for (r = 0; r < d; r++) u[o + r][s + l] = 1;
                                l++
                            }
                            e(c[o][s].cell).attr("rowspan", d).attr("colspan", l)
                        }
                }
            }
        }

        function R(t) {
            n = Le(t, "aoPreDrawCallback", "preDraw", [t]);
            if (-1 !== e.inArray(!1, n)) de(t, !1);
            else {
                var n = [],
                    r = 0,
                    o = t.asStripeClasses,
                    a = o.length,
                    s = t.oLanguage,
                    l = t.iInitDisplayStart,
                    c = "ssp" == Oe(t),
                    u = t.aiDisplay;
                t.bDrawing = !0, l !== i && -1 !== l && (t._iDisplayStart = c ? l : l >= t.fnRecordsDisplay() ? 0 : l, t.iInitDisplayStart = -1);
                var l = t._iDisplayStart,
                    d = t.fnDisplayEnd();
                if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, de(t, !1);
                else if (c) {
                    if (!t.bDestroying && !q(t)) return
                } else t.iDraw++;
                if (0 !== u.length)
                    for (s = c ? t.aoData.length : d, c = c ? 0 : l; c < s; c++) {
                        var f = u[c],
                            h = t.aoData[f];
                        if (null === h.nTr && N(t, f), f = h.nTr, 0 !== a) {
                            var p = o[r % a];
                            h._sRowStripe != p && (e(f).removeClass(h._sRowStripe).addClass(p), h._sRowStripe = p)
                        }
                        Le(t, "aoRowCallback", null, [f, h._aData, r, c]), n.push(f), r++
                    } else r = s.sZeroRecords, 1 == t.iDraw && "ajax" == Oe(t) ? r = s.sLoadingRecords : s.sEmptyTable && 0 === t.fnRecordsTotal() && (r = s.sEmptyTable), n[0] = e("<tr/>", {
                        class: a ? o[0] : ""
                    }).append(e("<td />", {
                        valign: "top",
                        colSpan: m(t),
                        class: t.oClasses.sRowEmpty
                    }).html(r))[0];
                Le(t, "aoHeaderCallback", "header", [e(t.nTHead).children("tr")[0], k(t), l, d, u]), Le(t, "aoFooterCallback", "footer", [e(t.nTFoot).children("tr")[0], k(t), l, d, u]), (o = e(t.nTBody)).children().detach(), o.append(e(n)), Le(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
            }
        }

        function P(e, t) {
            var n = e.oFeatures,
                i = n.bFilter;
            n.bSort && xe(e), i ? X(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice(), !0 !== t && (e._iDisplayStart = 0), e._drawHold = t, R(e), e._drawHold = !1
        }

        function O(t) {
            var n = t.oClasses,
                i = e(t.nTable),
                i = e("<div/>").insertBefore(i),
                r = t.oFeatures,
                o = e("<div/>", {
                    id: t.sTableId + "_wrapper",
                    class: n.sWrapper + (t.nTFoot ? "" : " " + n.sNoFooter)
                });
            t.nHolding = i[0], t.nTableWrapper = o[0], t.nTableReinsertBefore = t.nTable.nextSibling;
            for (var a, s, l, c, u, d, f = t.sDom.split(""), h = 0; h < f.length; h++) {
                if (a = null, "<" == (s = f[h])) {
                    if (l = e("<div/>")[0], "'" == (c = f[h + 1]) || '"' == c) {
                        for (u = "", d = 2; f[h + d] != c;) u += f[h + d], d++;
                        "H" == u ? u = n.sJUIHeader : "F" == u && (u = n.sJUIFooter), -1 != u.indexOf(".") ? (c = u.split("."), l.id = c[0].substr(1, c[0].length - 1), l.className = c[1]) : "#" == u.charAt(0) ? l.id = u.substr(1, u.length - 1) : l.className = u, h += d
                    }
                    o.append(l), o = e(l)
                } else if (">" == s) o = o.parent();
                else if ("l" == s && r.bPaginate && r.bLengthChange) a = se(t);
                else if ("f" == s && r.bFilter) a = V(t);
                else if ("r" == s && r.bProcessing) a = ue(t);
                else if ("t" == s) a = fe(t);
                else if ("i" == s && r.bInfo) a = te(t);
                else if ("p" == s && r.bPaginate) a = le(t);
                else if (0 !== Ve.ext.feature.length)
                    for (d = 0, c = (l = Ve.ext.feature).length; d < c; d++)
                        if (s == l[d].cFeature) {
                            a = l[d].fnInit(t);
                            break
                        }
                a && ((l = t.aanFeatures)[s] || (l[s] = []), l[s].push(a), o.append(a))
            }
            i.replaceWith(o), t.nHolding = null
        }

        function M(t, n) {
            var i, r, o, a, s, l, c, u, d, f, h = e(n).children("tr");
            for (t.splice(0, t.length), o = 0, l = h.length; o < l; o++) t.push([]);
            for (o = 0, l = h.length; o < l; o++)
                for (r = (i = h[o]).firstChild; r;) {
                    if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase()) {
                        for (u = 1 * r.getAttribute("colspan"), d = 1 * r.getAttribute("rowspan"), u = u && 0 !== u && 1 !== u ? u : 1, d = d && 0 !== d && 1 !== d ? d : 1, a = 0, s = t[o]; s[a];) a++;
                        for (c = a, f = 1 === u, s = 0; s < u; s++)
                            for (a = 0; a < d; a++) t[o + a][c + s] = {
                                cell: r,
                                unique: f
                            }, t[o + a].nTr = i
                    }
                    r = r.nextSibling
                }
        }

        function H(e, t, n) {
            var i = [];
            n || (n = e.aoHeader, t && (n = [], M(n, t)));
            for (var t = 0, r = n.length; t < r; t++)
                for (var o = 0, a = n[t].length; o < a; o++) !n[t][o].unique || i[o] && e.bSortCellsTop || (i[o] = n[t][o].cell);
            return i
        }

        function W(t, n, i) {
            if (Le(t, "aoServerParams", "serverParams", [n]), n && e.isArray(n)) {
                var r = {},
                    o = /(.*?)\[\]$/;
                e.each(n, function(e, t) {
                    var n = t.name.match(o);
                    n ? (n = n[0], r[n] || (r[n] = []), r[n].push(t.value)) : r[t.name] = t.value
                }), n = r
            }
            var a, s = t.ajax,
                l = t.oInstance,
                c = function(e) {
                    Le(t, null, "xhr", [t, e, t.jqXHR]), i(e)
                };
            if (e.isPlainObject(s) && s.data) {
                a = s.data;
                var u = e.isFunction(a) ? a(n, t) : a,
                    n = e.isFunction(a) && u ? u : e.extend(!0, n, u);
                delete s.data
            }
            u = {
                data: n,
                success: function(e) {
                    var n = e.error || e.sError;
                    n && Ee(t, 0, n), t.json = e, c(e)
                },
                dataType: "json",
                cache: !1,
                type: t.sServerMethod,
                error: function(n, i) {
                    var r = Le(t, null, "xhr", [t, null, t.jqXHR]); - 1 === e.inArray(!0, r) && ("parsererror" == i ? Ee(t, 0, "Invalid JSON response", 1) : 4 === n.readyState && Ee(t, 0, "Ajax error", 7)), de(t, !1)
                }
            }, t.oAjaxData = n, Le(t, null, "preXhr", [t, n]), t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, e.map(n, function(e, t) {
                return {
                    name: t,
                    value: e
                }
            }), c, t) : t.sAjaxSource || "string" == typeof s ? t.jqXHR = e.ajax(e.extend(u, {
                url: s || t.sAjaxSource
            })) : e.isFunction(s) ? t.jqXHR = s.call(l, n, c, t) : (t.jqXHR = e.ajax(e.extend(u, s)), s.data = a)
        }

        function q(e) {
            return !e.bAjaxDataGet || (e.iDraw++, de(e, !0), W(e, B(e), function(t) {
                U(e, t)
            }), !1)
        }

        function B(t) {
            var n, i, r, o, a = t.aoColumns,
                s = a.length,
                l = t.oFeatures,
                c = t.oPreviousSearch,
                u = t.aoPreSearchCols,
                d = [],
                f = we(t);
            n = t._iDisplayStart, i = !1 !== l.bPaginate ? t._iDisplayLength : -1;
            var h = function(e, t) {
                d.push({
                    name: e,
                    value: t
                })
            };
            h("sEcho", t.iDraw), h("iColumns", s), h("sColumns", rt(a, "sName").join(",")), h("iDisplayStart", n), h("iDisplayLength", i);
            var p = {
                draw: t.iDraw,
                columns: [],
                order: [],
                start: n,
                length: i,
                search: {
                    value: c.sSearch,
                    regex: c.bRegex
                }
            };
            for (n = 0; n < s; n++) r = a[n], o = u[n], i = "function" == typeof r.mData ? "function" : r.mData, p.columns.push({
                data: i,
                name: r.sName,
                searchable: r.bSearchable,
                orderable: r.bSortable,
                search: {
                    value: o.sSearch,
                    regex: o.bRegex
                }
            }), h("mDataProp_" + n, i), l.bFilter && (h("sSearch_" + n, o.sSearch), h("bRegex_" + n, o.bRegex), h("bSearchable_" + n, r.bSearchable)), l.bSort && h("bSortable_" + n, r.bSortable);
            return l.bFilter && (h("sSearch", c.sSearch), h("bRegex", c.bRegex)), l.bSort && (e.each(f, function(e, t) {
                p.order.push({
                    column: t.col,
                    dir: t.dir
                }), h("iSortCol_" + e, t.col), h("sSortDir_" + e, t.dir)
            }), h("iSortingCols", f.length)), a = Ve.ext.legacy.ajax, null === a ? t.sAjaxSource ? d : p : a ? d : p
        }

        function U(e, t) {
            var n = z(e, t),
                r = t.sEcho !== i ? t.sEcho : t.draw,
                o = t.iTotalRecords !== i ? t.iTotalRecords : t.recordsTotal,
                a = t.iTotalDisplayRecords !== i ? t.iTotalDisplayRecords : t.recordsFiltered;
            if (r) {
                if (1 * r < e.iDraw) return;
                e.iDraw = 1 * r
            }
            for (I(e), e._iRecordsTotal = parseInt(o, 10), e._iRecordsDisplay = parseInt(a, 10), r = 0, o = n.length; r < o; r++) w(e, n[r]);
            e.aiDisplay = e.aiDisplayMaster.slice(), e.bAjaxDataGet = !1, R(e), e._bInitComplete || oe(e, t), e.bAjaxDataGet = !0, de(e, !1)
        }

        function z(t, n) {
            var r = e.isPlainObject(t.ajax) && t.ajax.dataSrc !== i ? t.ajax.dataSrc : t.sAjaxDataProp;
            return "data" === r ? n.aaData || n[r] : "" !== r ? D(r)(n) : n
        }

        function V(t) {
            var i = t.oClasses,
                r = t.sTableId,
                o = t.oLanguage,
                a = t.oPreviousSearch,
                s = t.aanFeatures,
                l = '<input type="search" class="' + i.sFilterInput + '"/>',
                c = (c = o.sSearch).match(/_INPUT_/) ? c.replace("_INPUT_", l) : c + l,
                i = e("<div/>", {
                    id: s.f ? null : r + "_filter",
                    class: i.sFilter
                }).append(e("<label/>").append(c)),
                s = function() {
                    var e = this.value ? this.value : "";
                    e != a.sSearch && (X(t, {
                        sSearch: e,
                        bRegex: a.bRegex,
                        bSmart: a.bSmart,
                        bCaseInsensitive: a.bCaseInsensitive
                    }), t._iDisplayStart = 0, R(t))
                },
                l = null !== t.searchDelay ? t.searchDelay : "ssp" === Oe(t) ? 400 : 0,
                u = e("input", i).val(a.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", l ? mt(s, l) : s).on("keypress.DT", function(e) {
                    if (13 == e.keyCode) return !1
                }).attr("aria-controls", r);
            return e(t.nTable).on("search.dt.DT", function(e, i) {
                if (t === i) try {
                    u[0] !== n.activeElement && u.val(a.sSearch)
                } catch (e) {}
            }), i[0]
        }

        function X(e, t, n) {
            var r = e.oPreviousSearch,
                o = e.aoPreSearchCols,
                a = function(e) {
                    r.sSearch = e.sSearch, r.bRegex = e.bRegex, r.bSmart = e.bSmart, r.bCaseInsensitive = e.bCaseInsensitive
                };
            if (y(e), "ssp" != Oe(e)) {
                for (Y(e, t.sSearch, n, t.bEscapeRegex !== i ? !t.bEscapeRegex : t.bRegex, t.bSmart, t.bCaseInsensitive), a(t), t = 0; t < o.length; t++) G(e, o[t].sSearch, t, o[t].bEscapeRegex !== i ? !o[t].bEscapeRegex : o[t].bRegex, o[t].bSmart, o[t].bCaseInsensitive);
                J(e)
            } else a(t);
            e.bFiltered = !0, Le(e, null, "search", [e])
        }

        function J(t) {
            for (var n, i, r = Ve.ext.search, o = t.aiDisplay, a = 0, s = r.length; a < s; a++) {
                for (var l = [], c = 0, u = o.length; c < u; c++) i = o[c], n = t.aoData[i], r[a](t, n._aFilterData, i, n._aData, c) && l.push(i);
                o.length = 0, e.merge(o, l)
            }
        }

        function G(e, t, n, i, r, o) {
            if ("" !== t) {
                for (var a = [], s = e.aiDisplay, i = Q(t, i, r, o), r = 0; r < s.length; r++) t = e.aoData[s[r]]._aFilterData[n], i.test(t) && a.push(s[r]);
                e.aiDisplay = a
            }
        }

        function Y(e, t, n, i, r, o) {
            var a, i = Q(t, i, r, o),
                o = e.oPreviousSearch.sSearch,
                s = e.aiDisplayMaster,
                r = [];
            if (0 !== Ve.ext.search.length && (n = !0), a = K(e), 0 >= t.length) e.aiDisplay = s.slice();
            else {
                for ((a || n || o.length > t.length || 0 !== t.indexOf(o) || e.bSorted) && (e.aiDisplay = s.slice()), t = e.aiDisplay, n = 0; n < t.length; n++) i.test(e.aoData[t[n]]._sFilterRow) && r.push(t[n]);
                e.aiDisplay = r
            }
        }

        function Q(t, n, i, r) {
            return t = n ? t : ft(t), i && (t = "^(?=.*?" + e.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function(e) {
                if ('"' === e.charAt(0)) var t = e.match(/^"(.*)"$/),
                    e = t ? t[1] : e;
                return e.replace('"', "")
            }).join(")(?=.*?") + ").*$"), RegExp(t, r ? "i" : "")
        }

        function K(e) {
            var t, n, i, r, o, a, s, l, c = e.aoColumns,
                u = Ve.ext.type.search;
            for (t = !1, n = 0, r = e.aoData.length; n < r; n++)
                if (!(l = e.aoData[n])._aFilterData) {
                    for (a = [], i = 0, o = c.length; i < o; i++) t = c[i], t.bSearchable ? (s = S(e, n, i, "filter"), u[t.sType] && (s = u[t.sType](s)), null === s && (s = ""), "string" != typeof s && s.toString && (s = s.toString())) : s = "", s.indexOf && -1 !== s.indexOf("&") && (ht.innerHTML = s, s = pt ? ht.textContent : ht.innerText), s.replace && (s = s.replace(/[\r\n]/g, "")), a.push(s);
                    l._aFilterData = a, l._sFilterRow = a.join("  "), t = !0
                }
            return t
        }

        function Z(e) {
            return {
                search: e.sSearch,
                smart: e.bSmart,
                regex: e.bRegex,
                caseInsensitive: e.bCaseInsensitive
            }
        }

        function ee(e) {
            return {
                sSearch: e.search,
                bSmart: e.smart,
                bRegex: e.regex,
                bCaseInsensitive: e.caseInsensitive
            }
        }

        function te(t) {
            var n = t.sTableId,
                i = t.aanFeatures.i,
                r = e("<div/>", {
                    class: t.oClasses.sInfo,
                    id: i ? null : n + "_info"
                });
            return i || (t.aoDrawCallback.push({
                fn: ne,
                sName: "information"
            }), r.attr("role", "status").attr("aria-live", "polite"), e(t.nTable).attr("aria-describedby", n + "_info")), r[0]
        }

        function ne(t) {
            var n = t.aanFeatures.i;
            if (0 !== n.length) {
                var i = t.oLanguage,
                    r = t._iDisplayStart + 1,
                    o = t.fnDisplayEnd(),
                    a = t.fnRecordsTotal(),
                    s = t.fnRecordsDisplay(),
                    l = s ? i.sInfo : i.sInfoEmpty;
                s !== a && (l += " " + i.sInfoFiltered), l = ie(t, l += i.sInfoPostFix), null !== (i = i.fnInfoCallback) && (l = i.call(t.oInstance, t, r, o, a, s, l)), e(n).html(l)
            }
        }

        function ie(e, t) {
            var n = e.fnFormatNumber,
                i = e._iDisplayStart + 1,
                r = e._iDisplayLength,
                o = e.fnRecordsDisplay(),
                a = -1 === r;
            return t.replace(/_START_/g, n.call(e, i)).replace(/_END_/g, n.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, n.call(e, e.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(e, o)).replace(/_PAGE_/g, n.call(e, a ? 1 : Math.ceil(i / r))).replace(/_PAGES_/g, n.call(e, a ? 1 : Math.ceil(o / r)))
        }

        function re(e) {
            var t, n, i, r = e.iInitDisplayStart,
                o = e.aoColumns;
            n = e.oFeatures;
            var a = e.bDeferLoading;
            if (e.bInitialised) {
                for (O(e), j(e), L(e, e.aoHeader), L(e, e.aoFooter), de(e, !0), n.bAutoWidth && ge(e), t = 0, n = o.length; t < n; t++)(i = o[t]).sWidth && (i.nTh.style.width = be(i.sWidth));
                Le(e, null, "preInit", [e]), P(e), ("ssp" != (o = Oe(e)) || a) && ("ajax" == o ? W(e, [], function(n) {
                    var i = z(e, n);
                    for (t = 0; t < i.length; t++) w(e, i[t]);
                    e.iInitDisplayStart = r, P(e), de(e, !1), oe(e, n)
                }, e) : (de(e, !1), oe(e)))
            } else setTimeout(function() {
                re(e)
            }, 200)
        }

        function oe(e, t) {
            e._bInitComplete = !0, (t || e.oInit.aaData) && h(e), Le(e, null, "plugin-init", [e, t]), Le(e, "aoInitComplete", "init", [e, t])
        }

        function ae(e, t) {
            var n = parseInt(t, 10);
            e._iDisplayLength = n, Re(e), Le(e, null, "length", [e, n])
        }

        function se(t) {
            for (var n = t.oClasses, i = t.sTableId, r = t.aLengthMenu, o = (a = e.isArray(r[0])) ? r[0] : r, r = a ? r[1] : r, a = e("<select/>", {
                    name: i + "_length",
                    "aria-controls": i,
                    class: n.sLengthSelect
                }), s = 0, l = o.length; s < l; s++) a[0][s] = new Option(r[s], o[s]);
            var c = e("<div><label/></div>").addClass(n.sLength);
            return t.aanFeatures.l || (c[0].id = i + "_length"), c.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", a[0].outerHTML)), e("select", c).val(t._iDisplayLength).on("change.DT", function() {
                ae(t, e(this).val()), R(t)
            }), e(t.nTable).on("length.dt.DT", function(n, i, r) {
                t === i && e("select", c).val(r)
            }), c[0]
        }

        function le(t) {
            var n = t.sPaginationType,
                i = Ve.ext.pager[n],
                r = "function" == typeof i,
                o = function(e) {
                    R(e)
                },
                n = e("<div/>").addClass(t.oClasses.sPaging + n)[0],
                a = t.aanFeatures;
            return r || i.fnInit(t, n, o), a.p || (n.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
                fn: function(e) {
                    if (r) {
                        var t, n = e._iDisplayStart,
                            s = e._iDisplayLength,
                            l = e.fnRecordsDisplay(),
                            n = (c = -1 === s) ? 0 : Math.ceil(n / s),
                            s = c ? 1 : Math.ceil(l / s),
                            l = i(n, s),
                            c = 0;
                        for (t = a.p.length; c < t; c++) Pe(e, "pageButton")(e, a.p[c], c, l, n, s)
                    } else i.fnUpdate(e, o)
                },
                sName: "pagination"
            })), n
        }

        function ce(e, t, n) {
            var i = e._iDisplayStart,
                r = e._iDisplayLength,
                o = e.fnRecordsDisplay();
            return 0 === o || -1 === r ? i = 0 : "number" == typeof t ? (i = t * r) > o && (i = 0) : "first" == t ? i = 0 : "previous" == t ? 0 > (i = 0 <= r ? i - r : 0) && (i = 0) : "next" == t ? i + r < o && (i += r) : "last" == t ? i = Math.floor((o - 1) / r) * r : Ee(e, 0, "Unknown paging action: " + t, 5), t = e._iDisplayStart !== i, e._iDisplayStart = i, t && (Le(e, null, "page", [e]), n && R(e)), t
        }

        function ue(t) {
            return e("<div/>", {
                id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                class: t.oClasses.sProcessing
            }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
        }

        function de(t, n) {
            t.oFeatures.bProcessing && e(t.aanFeatures.r).css("display", n ? "block" : "none"), Le(t, null, "processing", [t, n])
        }

        function fe(t) {
            var n = e(t.nTable);
            n.attr("role", "grid");
            var i = t.oScroll;
            if ("" === i.sX && "" === i.sY) return t.nTable;
            var r = i.sX,
                o = i.sY,
                a = t.oClasses,
                s = n.children("caption"),
                l = s.length ? s[0]._captionSide : null,
                c = e(n[0].cloneNode(!1)),
                u = e(n[0].cloneNode(!1)),
                d = n.children("tfoot");
            d.length || (d = null), c = e("<div/>", {
                class: a.sScrollWrapper
            }).append(e("<div/>", {
                class: a.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: r ? r ? be(r) : null : "100%"
            }).append(e("<div/>", {
                class: a.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: i.sXInner || "100%"
            }).append(c.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(n.children("thead"))))).append(e("<div/>", {
                class: a.sScrollBody
            }).css({
                position: "relative",
                overflow: "auto",
                width: r ? be(r) : null
            }).append(n)), d && c.append(e("<div/>", {
                class: a.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: r ? r ? be(r) : null : "100%"
            }).append(e("<div/>", {
                class: a.sScrollFootInner
            }).append(u.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(n.children("tfoot")))));
            var f = (n = c.children())[0],
                a = n[1],
                h = d ? n[2] : null;
            return r && e(a).on("scroll.DT", function() {
                var e = this.scrollLeft;
                f.scrollLeft = e, d && (h.scrollLeft = e)
            }), e(a).css(o && i.bCollapse ? "max-height" : "height", o), t.nScrollHead = f, t.nScrollBody = a, t.nScrollFoot = h, t.aoDrawCallback.push({
                fn: he,
                sName: "scrolling"
            }), c[0]
        }

        function he(t) {
            var n, r, o, a, s, l = (d = t.oScroll).sX,
                c = d.sXInner,
                u = d.sY,
                d = d.iBarWidth,
                f = e(t.nScrollHead),
                g = f[0].style,
                m = (y = f.children("div"))[0].style,
                v = y.children("table"),
                y = t.nScrollBody,
                b = e(y),
                w = y.style,
                x = e(t.nScrollFoot).children("div"),
                S = x.children("table"),
                C = e(t.nTHead),
                T = e(t.nTable),
                D = T[0],
                _ = D.style,
                k = t.nTFoot ? e(t.nTFoot) : null,
                I = t.oBrowser,
                F = I.bScrollOversize,
                E = rt(t.aoColumns, "nTh"),
                A = [],
                N = [],
                $ = [],
                j = [],
                L = function(e) {
                    (e = e.style).paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
                };
            r = y.scrollHeight > y.clientHeight, t.scrollBarVis !== r && t.scrollBarVis !== i ? (t.scrollBarVis = r, h(t)) : (t.scrollBarVis = r, T.children("thead, tfoot").remove(), k && (o = k.clone().prependTo(T), n = k.find("tr"), o = o.find("tr")), a = C.clone().prependTo(T), C = C.find("tr"), r = a.find("tr"), a.find("th, td").removeAttr("tabindex"), l || (w.width = "100%", f[0].style.width = "100%"), e.each(H(t, a), function(e, n) {
                s = p(t, e), n.style.width = t.aoColumns[s].sWidth
            }), k && pe(function(e) {
                e.style.width = ""
            }, o), f = T.outerWidth(), "" === l ? (_.width = "100%", F && (T.find("tbody").height() > y.offsetHeight || "scroll" == b.css("overflow-y")) && (_.width = be(T.outerWidth() - d)), f = T.outerWidth()) : "" !== c && (_.width = be(c), f = T.outerWidth()), pe(L, r), pe(function(t) {
                $.push(t.innerHTML), A.push(be(e(t).css("width")))
            }, r), pe(function(t, n) {
                -1 !== e.inArray(t, E) && (t.style.width = A[n])
            }, C), e(r).height(0), k && (pe(L, o), pe(function(t) {
                j.push(t.innerHTML), N.push(be(e(t).css("width")))
            }, o), pe(function(e, t) {
                e.style.width = N[t]
            }, n), e(o).height(0)), pe(function(e, t) {
                e.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + $[t] + "</div>", e.style.width = A[t]
            }, r), k && pe(function(e, t) {
                e.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + j[t] + "</div>", e.style.width = N[t]
            }, o), T.outerWidth() < f ? (n = y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y") ? f + d : f, F && (y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y")) && (_.width = be(n - d)), ("" === l || "" !== c) && Ee(t, 1, "Possible column misalignment", 6)) : n = "100%", w.width = be(n), g.width = be(n), k && (t.nScrollFoot.style.width = be(n)), !u && F && (w.height = be(D.offsetHeight + d)), l = T.outerWidth(), v[0].style.width = be(l), m.width = be(l), c = T.height() > y.clientHeight || "scroll" == b.css("overflow-y"), m[u = "padding" + (I.bScrollbarLeft ? "Left" : "Right")] = c ? d + "px" : "0px", k && (S[0].style.width = be(l), x[0].style.width = be(l), x[0].style[u] = c ? d + "px" : "0px"), T.children("colgroup").insertBefore(T.children("thead")), b.scroll(), !t.bSorted && !t.bFiltered || t._drawHold || (y.scrollTop = 0))
        }

        function pe(e, t, n) {
            for (var i, r, o = 0, a = 0, s = t.length; a < s;) {
                for (i = t[a].firstChild, r = n ? n[a].firstChild : null; i;) 1 === i.nodeType && (n ? e(i, r, o) : e(i, o), o++), i = i.nextSibling, r = n ? r.nextSibling : null;
                a++
            }
        }

        function ge(n) {
            var i, r, o = n.nTable,
                a = n.aoColumns,
                s = (x = n.oScroll).sY,
                l = x.sX,
                c = x.sXInner,
                u = a.length,
                d = v(n, "bVisible"),
                f = e("th", n.nTHead),
                g = o.getAttribute("width"),
                y = o.parentNode,
                b = !1,
                w = n.oBrowser,
                x = w.bScrollOversize;
            for ((i = o.style.width) && -1 !== i.indexOf("%") && (g = i), i = 0; i < d.length; i++) null !== (r = a[d[i]]).sWidth && (r.sWidth = me(r.sWidthOrig, y), b = !0);
            if (x || !b && !l && !s && u == m(n) && u == f.length)
                for (i = 0; i < u; i++) null !== (d = p(n, i)) && (a[d].sWidth = be(f.eq(i).width()));
            else {
                (u = e(o).clone().css("visibility", "hidden").removeAttr("id")).find("tbody tr").remove();
                var S = e("<tr/>").appendTo(u.find("tbody"));
                for (u.find("thead, tfoot").remove(), u.append(e(n.nTHead).clone()).append(e(n.nTFoot).clone()), u.find("tfoot th, tfoot td").css("width", ""), f = H(n, u.find("thead")[0]), i = 0; i < d.length; i++) r = a[d[i]], f[i].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? be(r.sWidthOrig) : "", r.sWidthOrig && l && e(f[i]).append(e("<div/>").css({
                    width: r.sWidthOrig,
                    margin: 0,
                    padding: 0,
                    border: 0,
                    height: 1
                }));
                if (n.aoData.length)
                    for (i = 0; i < d.length; i++) b = d[i], r = a[b], e(ve(n, b)).clone(!1).append(r.sContentPadding).appendTo(S);
                for (e("[name]", u).removeAttr("name"), r = e("<div/>").css(l || s ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 1,
                        right: 0,
                        overflow: "hidden"
                    } : {}).append(u).appendTo(y), l && c ? u.width(c) : l ? (u.css("width", "auto"), u.removeAttr("width"), u.width() < y.clientWidth && g && u.width(y.clientWidth)) : s ? u.width(y.clientWidth) : g && u.width(g), i = s = 0; i < d.length; i++) y = e(f[i]), c = y.outerWidth() - y.width(), y = w.bBounding ? Math.ceil(f[i].getBoundingClientRect().width) : y.outerWidth(), s += y, a[d[i]].sWidth = be(y - c);
                o.style.width = be(s), r.remove()
            }
            g && (o.style.width = be(g)), !g && !l || n._reszEvt || (o = function() {
                e(t).on("resize.DT-" + n.sInstance, mt(function() {
                    h(n)
                }))
            }, x ? setTimeout(o, 1e3) : o(), n._reszEvt = !0)
        }

        function me(t, i) {
            if (!t) return 0;
            var r = e("<div/>").css("width", be(t)).appendTo(i || n.body),
                o = r[0].offsetWidth;
            return r.remove(), o
        }

        function ve(t, n) {
            var i = ye(t, n);
            if (0 > i) return null;
            var r = t.aoData[i];
            return r.nTr ? r.anCells[n] : e("<td/>").html(S(t, i, n, "display"))[0]
        }

        function ye(e, t) {
            for (var n, i = -1, r = -1, o = 0, a = e.aoData.length; o < a; o++) n = S(e, o, t, "display") + "", n = n.replace(gt, ""), (n = n.replace(/&nbsp;/g, " ")).length > i && (i = n.length, r = o);
            return r
        }

        function be(e) {
            return null === e ? "0px" : "number" == typeof e ? 0 > e ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e
        }

        function we(t) {
            var n, r, o, a, s, l, c = [],
                u = t.aoColumns;
            n = t.aaSortingFixed, r = e.isPlainObject(n);
            var d = [];
            for (o = function(t) {
                    t.length && !e.isArray(t[0]) ? d.push(t) : e.merge(d, t)
                }, e.isArray(n) && o(n), r && n.pre && o(n.pre), o(t.aaSorting), r && n.post && o(n.post), t = 0; t < d.length; t++)
                for (n = 0, r = (o = u[l = d[t][0]].aDataSort).length; n < r; n++) a = o[n], s = u[a].sType || "string", d[t]._idx === i && (d[t]._idx = e.inArray(d[t][1], u[a].asSorting)), c.push({
                    src: l,
                    col: a,
                    dir: d[t][1],
                    index: d[t]._idx,
                    type: s,
                    formatter: Ve.ext.type.order[s + "-pre"]
                });
            return c
        }

        function xe(e) {
            var t, n, i, r, o = [],
                a = Ve.ext.type.order,
                s = e.aoData,
                l = 0,
                c = e.aiDisplayMaster;
            for (y(e), t = 0, n = (r = we(e)).length; t < n; t++)(i = r[t]).formatter && l++, _e(e, i.col);
            if ("ssp" != Oe(e) && 0 !== r.length) {
                for (t = 0, n = c.length; t < n; t++) o[c[t]] = t;
                l === r.length ? c.sort(function(e, t) {
                    var n, i, a, l, c = r.length,
                        u = s[e]._aSortData,
                        d = s[t]._aSortData;
                    for (a = 0; a < c; a++)
                        if (l = r[a], n = u[l.col], i = d[l.col], 0 !== (n = n < i ? -1 : n > i ? 1 : 0)) return "asc" === l.dir ? n : -n;
                    return n = o[e], i = o[t], n < i ? -1 : n > i ? 1 : 0
                }) : c.sort(function(e, t) {
                    var n, i, l, c, u = r.length,
                        d = s[e]._aSortData,
                        f = s[t]._aSortData;
                    for (l = 0; l < u; l++)
                        if (c = r[l], n = d[c.col], i = f[c.col], c = a[c.type + "-" + c.dir] || a["string-" + c.dir], 0 !== (n = c(n, i))) return n;
                    return n = o[e], i = o[t], n < i ? -1 : n > i ? 1 : 0
                })
            }
            e.bSorted = !0
        }

        function Se(e) {
            for (var t, n, i = e.aoColumns, r = we(e), e = e.oLanguage.oAria, o = 0, a = i.length; o < a; o++) {
                var s = (n = i[o]).asSorting;
                t = n.sTitle.replace(/<.*?>/g, "");
                var l = n.nTh;
                l.removeAttribute("aria-sort"), n.bSortable && (0 < r.length && r[0].col == o ? (l.setAttribute("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), n = s[r[0].index + 1] || s[0]) : n = s[0], t += "asc" === n ? e.sSortAscending : e.sSortDescending), l.setAttribute("aria-label", t)
            }
        }

        function Ce(t, n, r, o) {
            var a = t.aaSorting,
                s = t.aoColumns[n].asSorting,
                l = function(t, n) {
                    var r = t._idx;
                    return r === i && (r = e.inArray(t[1], s)), r + 1 < s.length ? r + 1 : n ? null : 0
                };
            "number" == typeof a[0] && (a = t.aaSorting = [a]), r && t.oFeatures.bSortMulti ? (r = e.inArray(n, rt(a, "0")), -1 !== r ? (null === (n = l(a[r], !0)) && 1 === a.length && (n = 0), null === n ? a.splice(r, 1) : (a[r][1] = s[n], a[r]._idx = n)) : (a.push([n, s[0], 0]), a[a.length - 1]._idx = 0)) : a.length && a[0][0] == n ? (n = l(a[0]), a.length = 1, a[0][1] = s[n], a[0]._idx = n) : (a.length = 0, a.push([n, s[0]]), a[0]._idx = 0), P(t), "function" == typeof o && o(t)
        }

        function Te(e, t, n, i) {
            var r = e.aoColumns[n];
            $e(t, {}, function(t) {
                !1 !== r.bSortable && (e.oFeatures.bProcessing ? (de(e, !0), setTimeout(function() {
                    Ce(e, n, t.shiftKey, i), "ssp" !== Oe(e) && de(e, !1)
                }, 0)) : Ce(e, n, t.shiftKey, i))
            })
        }

        function De(t) {
            var n, i, r = t.aLastSort,
                o = t.oClasses.sSortColumn,
                a = we(t),
                s = t.oFeatures;
            if (s.bSort && s.bSortClasses) {
                for (s = 0, n = r.length; s < n; s++) i = r[s].src, e(rt(t.aoData, "anCells", i)).removeClass(o + (2 > s ? s + 1 : 3));
                for (s = 0, n = a.length; s < n; s++) i = a[s].src, e(rt(t.aoData, "anCells", i)).addClass(o + (2 > s ? s + 1 : 3))
            }
            t.aLastSort = a
        }

        function _e(e, t) {
            var n, i = e.aoColumns[t],
                r = Ve.ext.order[i.sSortDataType];
            r && (n = r.call(e.oInstance, e, t, g(e, t)));
            for (var o, a = Ve.ext.type.order[i.sType + "-pre"], s = 0, l = e.aoData.length; s < l; s++)(i = e.aoData[s])._aSortData || (i._aSortData = []), (!i._aSortData[t] || r) && (o = r ? n[s] : S(e, s, t, "sort"), i._aSortData[t] = a ? a(o) : o)
        }

        function ke(t) {
            if (t.oFeatures.bStateSave && !t.bDestroying) {
                var n = {
                    time: +new Date,
                    start: t._iDisplayStart,
                    length: t._iDisplayLength,
                    order: e.extend(!0, [], t.aaSorting),
                    search: Z(t.oPreviousSearch),
                    columns: e.map(t.aoColumns, function(e, n) {
                        return {
                            visible: e.bVisible,
                            search: Z(t.aoPreSearchCols[n])
                        }
                    })
                };
                Le(t, "aoStateSaveParams", "stateSaveParams", [t, n]), t.oSavedState = n, t.fnStateSaveCallback.call(t.oInstance, t, n)
            }
        }

        function Ie(t, n, r) {
            var o, a, s = t.aoColumns,
                n = function(n) {
                    if (n && n.time) {
                        var c = Le(t, "aoStateLoadParams", "stateLoadParams", [t, l]);
                        if (-1 === e.inArray(!1, c) && !(0 < (c = t.iStateDuration) && n.time < +new Date - 1e3 * c || n.columns && s.length !== n.columns.length)) {
                            if (t.oLoadedState = e.extend(!0, {}, l), n.start !== i && (t._iDisplayStart = n.start, t.iInitDisplayStart = n.start), n.length !== i && (t._iDisplayLength = n.length), n.order !== i && (t.aaSorting = [], e.each(n.order, function(e, n) {
                                    t.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n)
                                })), n.search !== i && e.extend(t.oPreviousSearch, ee(n.search)), n.columns)
                                for (o = 0, a = n.columns.length; o < a; o++)(c = n.columns[o]).visible !== i && (s[o].bVisible = c.visible), c.search !== i && e.extend(t.aoPreSearchCols[o], ee(c.search));
                            Le(t, "aoStateLoaded", "stateLoaded", [t, l])
                        }
                    }
                    r()
                };
            if (t.oFeatures.bStateSave) {
                var l = t.fnStateLoadCallback.call(t.oInstance, t, n);
                l !== i && n(l)
            } else r()
        }

        function Fe(t) {
            var n = Ve.settings;
            return -1 !== (t = e.inArray(t, rt(n, "nTable"))) ? n[t] : null
        }

        function Ee(e, n, i, r) {
            if (i = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + i, r && (i += ". For more information about this error, please see " + r), n) t.console && console.log && console.log(i);
            else if (n = Ve.ext, n = n.sErrMode || n.errMode, e && Le(e, null, "error", [e, r, i]), "alert" == n) alert(i);
            else {
                if ("throw" == n) throw Error(i);
                "function" == typeof n && n(e, r, i)
            }
        }

        function Ae(t, n, r, o) {
            e.isArray(r) ? e.each(r, function(i, r) {
                e.isArray(r) ? Ae(t, n, r[0], r[1]) : Ae(t, n, r)
            }) : (o === i && (o = r), n[r] !== i && (t[o] = n[r]))
        }

        function Ne(t, n, i) {
            var r, o;
            for (o in n) n.hasOwnProperty(o) && (r = n[o], e.isPlainObject(r) ? (e.isPlainObject(t[o]) || (t[o] = {}), e.extend(!0, t[o], r)) : t[o] = i && "data" !== o && "aaData" !== o && e.isArray(r) ? r.slice() : r);
            return t
        }

        function $e(t, n, i) {
            e(t).on("click.DT", n, function(e) {
                t.blur(), i(e)
            }).on("keypress.DT", n, function(e) {
                13 === e.which && (e.preventDefault(), i(e))
            }).on("selectstart.DT", function() {
                return !1
            })
        }

        function je(e, t, n, i) {
            n && e[t].push({
                fn: n,
                sName: i
            })
        }

        function Le(t, n, i, r) {
            var o = [];
            return n && (o = e.map(t[n].slice().reverse(), function(e) {
                return e.fn.apply(t.oInstance, r)
            })), null !== i && (n = e.Event(i + ".dt"), e(t.nTable).trigger(n, r), o.push(n.result)), o
        }

        function Re(e) {
            var t = e._iDisplayStart,
                n = e.fnDisplayEnd(),
                i = e._iDisplayLength;
            t >= n && (t = n - i), t -= t % i, (-1 === i || 0 > t) && (t = 0), e._iDisplayStart = t
        }

        function Pe(t, n) {
            var i = t.renderer,
                r = Ve.ext.renderer[n];
            return e.isPlainObject(i) && i[n] ? r[i[n]] || r._ : "string" == typeof i ? r[i] || r._ : r._
        }

        function Oe(e) {
            return e.oFeatures.bServerSide ? "ssp" : e.ajax || e.sAjaxSource ? "ajax" : "dom"
        }

        function Me(e, t) {
            var n = [],
                n = Nt.numbers_length,
                i = Math.floor(n / 2);
            return t <= n ? n = at(0, t) : e <= i ? ((n = at(0, n - 2)).push("ellipsis"), n.push(t - 1)) : (e >= t - 1 - i ? n = at(t - (n - 2), t) : ((n = at(e - i + 2, e + i - 1)).push("ellipsis"), n.push(t - 1)), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
        }

        function He(t) {
            e.each({
                num: function(e) {
                    return $t(e, t)
                },
                "num-fmt": function(e) {
                    return $t(e, t, Ke)
                },
                "html-num": function(e) {
                    return $t(e, t, Ge)
                },
                "html-num-fmt": function(e) {
                    return $t(e, t, Ge, Ke)
                }
            }, function(e, n) {
                qe.type.order[e + t + "-pre"] = n, e.match(/^html\-/) && (qe.type.search[e + t] = qe.type.search.html)
            })
        }

        function We(e) {
            return function() {
                var t = [Fe(this[Ve.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return Ve.ext.internal[e].apply(this, t)
            }
        }
        var qe, Be, Ue, ze, Ve = function(t) {
                this.$ = function(e, t) {
                    return this.api(!0).$(e, t)
                }, this._ = function(e, t) {
                    return this.api(!0).rows(e, t).data()
                }, this.api = function(e) {
                    return new Be(e ? Fe(this[qe.iApiIndex]) : this)
                }, this.fnAddData = function(t, n) {
                    var r = this.api(!0),
                        o = e.isArray(t) && (e.isArray(t[0]) || e.isPlainObject(t[0])) ? r.rows.add(t) : r.row.add(t);
                    return (n === i || n) && r.draw(), o.flatten().toArray()
                }, this.fnAdjustColumnSizing = function(e) {
                    var t = this.api(!0).columns.adjust(),
                        n = t.settings()[0],
                        r = n.oScroll;
                    e === i || e ? t.draw(!1) : ("" !== r.sX || "" !== r.sY) && he(n)
                }, this.fnClearTable = function(e) {
                    var t = this.api(!0).clear();
                    (e === i || e) && t.draw()
                }, this.fnClose = function(e) {
                    this.api(!0).row(e).child.hide()
                }, this.fnDeleteRow = function(e, t, n) {
                    var r = this.api(!0),
                        o = (e = r.rows(e)).settings()[0],
                        a = o.aoData[e[0][0]];
                    return e.remove(), t && t.call(this, o, a), (n === i || n) && r.draw(), a
                }, this.fnDestroy = function(e) {
                    this.api(!0).destroy(e)
                }, this.fnDraw = function(e) {
                    this.api(!0).draw(e)
                }, this.fnFilter = function(e, t, n, r, o, a) {
                    o = this.api(!0), null === t || t === i ? o.search(e, n, r, a) : o.column(t).search(e, n, r, a), o.draw()
                }, this.fnGetData = function(e, t) {
                    var n = this.api(!0);
                    if (e !== i) {
                        var r = e.nodeName ? e.nodeName.toLowerCase() : "";
                        return t !== i || "td" == r || "th" == r ? n.cell(e, t).data() : n.row(e).data() || null
                    }
                    return n.data().toArray()
                }, this.fnGetNodes = function(e) {
                    var t = this.api(!0);
                    return e !== i ? t.row(e).node() : t.rows().nodes().flatten().toArray()
                }, this.fnGetPosition = function(e) {
                    var t = this.api(!0),
                        n = e.nodeName.toUpperCase();
                    return "TR" == n ? t.row(e).index() : "TD" == n || "TH" == n ? (e = t.cell(e).index(), [e.row, e.columnVisible, e.column]) : null
                }, this.fnIsOpen = function(e) {
                    return this.api(!0).row(e).child.isShown()
                }, this.fnOpen = function(e, t, n) {
                    return this.api(!0).row(e).child(t, n).show().child()[0]
                }, this.fnPageChange = function(e, t) {
                    var n = this.api(!0).page(e);
                    (t === i || t) && n.draw(!1)
                }, this.fnSetColumnVis = function(e, t, n) {
                    e = this.api(!0).column(e).visible(t), (n === i || n) && e.columns.adjust().draw()
                }, this.fnSettings = function() {
                    return Fe(this[qe.iApiIndex])
                }, this.fnSort = function(e) {
                    this.api(!0).order(e).draw()
                }, this.fnSortListener = function(e, t, n) {
                    this.api(!0).order.listener(e, t, n)
                }, this.fnUpdate = function(e, t, n, r, o) {
                    var a = this.api(!0);
                    return n === i || null === n ? a.row(t).data(e) : a.cell(t, n).data(e), (o === i || o) && a.columns.adjust(), (r === i || r) && a.draw(), 0
                }, this.fnVersionCheck = qe.fnVersionCheck;
                var n = this,
                    r = t === i,
                    u = this.length;
                r && (t = {}), this.oApi = this.internal = qe.internal;
                for (var h in Ve.ext.internal) h && (this[h] = We(h));
                return this.each(function() {
                    var h, p = {},
                        g = 1 < u ? Ne(p, t, !0) : t,
                        m = 0,
                        p = this.getAttribute("id"),
                        v = !1,
                        y = Ve.defaults,
                        S = e(this);
                    if ("table" != this.nodeName.toLowerCase()) Ee(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                    else {
                        s(y), l(y.column), o(y, y, !0), o(y.column, y.column, !0), o(y, e.extend(g, S.data()));
                        var C = Ve.settings,
                            m = 0;
                        for (h = C.length; m < h; m++) {
                            var T = C[m];
                            if (T.nTable == this || T.nTHead.parentNode == this || T.nTFoot && T.nTFoot.parentNode == this) {
                                var _ = g.bRetrieve !== i ? g.bRetrieve : y.bRetrieve;
                                if (r || _) return T.oInstance;
                                if (g.bDestroy !== i ? g.bDestroy : y.bDestroy) {
                                    T.oInstance.fnDestroy();
                                    break
                                }
                                return void Ee(T, 0, "Cannot reinitialise DataTable", 3)
                            }
                            if (T.sTableId == this.id) {
                                C.splice(m, 1);
                                break
                            }
                        }
                        null !== p && "" !== p || (this.id = p = "DataTables_Table_" + Ve.ext._unique++);
                        var k = e.extend(!0, {}, Ve.models.oSettings, {
                            sDestroyWidth: S[0].style.width,
                            sInstance: p,
                            sTableId: p
                        });
                        k.nTable = this, k.oApi = n.internal, k.oInit = g, C.push(k), k.oInstance = 1 === n.length ? n : S.dataTable(), s(g), g.oLanguage && a(g.oLanguage), g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = e.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]), g = Ne(e.extend(!0, {}, y), g), Ae(k.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")), Ae(k, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                            ["oSearch", "oPreviousSearch"],
                            ["aoSearchCols", "aoPreSearchCols"],
                            ["iDisplayLength", "_iDisplayLength"],
                            ["bJQueryUI", "bJUI"]
                        ]), Ae(k.oScroll, g, [
                            ["sScrollX", "sX"],
                            ["sScrollXInner", "sXInner"],
                            ["sScrollY", "sY"],
                            ["bScrollCollapse", "bCollapse"]
                        ]), Ae(k.oLanguage, g, "fnInfoCallback"), je(k, "aoDrawCallback", g.fnDrawCallback, "user"), je(k, "aoServerParams", g.fnServerParams, "user"), je(k, "aoStateSaveParams", g.fnStateSaveParams, "user"), je(k, "aoStateLoadParams", g.fnStateLoadParams, "user"), je(k, "aoStateLoaded", g.fnStateLoaded, "user"), je(k, "aoRowCallback", g.fnRowCallback, "user"), je(k, "aoRowCreatedCallback", g.fnCreatedRow, "user"), je(k, "aoHeaderCallback", g.fnHeaderCallback, "user"), je(k, "aoFooterCallback", g.fnFooterCallback, "user"), je(k, "aoInitComplete", g.fnInitComplete, "user"), je(k, "aoPreDrawCallback", g.fnPreDrawCallback, "user"), k.rowIdFn = D(g.rowId), c(k);
                        var I = k.oClasses;
                        g.bJQueryUI ? (e.extend(I, Ve.ext.oJUIClasses, g.oClasses), g.sDom === y.sDom && "lfrtip" === y.sDom && (k.sDom = '<"H"lfr>t<"F"ip>'), k.renderer ? e.isPlainObject(k.renderer) && !k.renderer.header && (k.renderer.header = "jqueryui") : k.renderer = "jqueryui") : e.extend(I, Ve.ext.classes, g.oClasses), S.addClass(I.sTable), k.iInitDisplayStart === i && (k.iInitDisplayStart = g.iDisplayStart, k._iDisplayStart = g.iDisplayStart), null !== g.iDeferLoading && (k.bDeferLoading = !0, p = e.isArray(g.iDeferLoading), k._iRecordsDisplay = p ? g.iDeferLoading[0] : g.iDeferLoading, k._iRecordsTotal = p ? g.iDeferLoading[1] : g.iDeferLoading);
                        var F = k.oLanguage;
                        e.extend(!0, F, g.oLanguage), F.sUrl && (e.ajax({
                            dataType: "json",
                            url: F.sUrl,
                            success: function(t) {
                                a(t), o(y.oLanguage, t), e.extend(!0, F, t), re(k)
                            },
                            error: function() {
                                re(k)
                            }
                        }), v = !0), null === g.asStripeClasses && (k.asStripeClasses = [I.sStripeOdd, I.sStripeEven]);
                        var p = k.asStripeClasses,
                            E = S.children("tbody").find("tr").eq(0);
                        if (-1 !== e.inArray(!0, e.map(p, function(e) {
                                return E.hasClass(e)
                            })) && (e("tbody tr", this).removeClass(p.join(" ")), k.asDestroyStripes = p.slice()), p = [], 0 !== (C = this.getElementsByTagName("thead")).length && (M(k.aoHeader, C[0]), p = H(k)), null === g.aoColumns)
                            for (C = [], m = 0, h = p.length; m < h; m++) C.push(null);
                        else C = g.aoColumns;
                        for (m = 0, h = C.length; m < h; m++) d(k, p ? p[m] : null);
                        if (b(k, g.aoColumnDefs, C, function(e, t) {
                                f(k, e, t)
                            }), E.length) {
                            var A = function(e, t) {
                                return null !== e.getAttribute("data-" + t) ? t : null
                            };
                            e(E[0]).children("th, td").each(function(e, t) {
                                var n = k.aoColumns[e];
                                if (n.mData === e) {
                                    var r = A(t, "sort") || A(t, "order"),
                                        o = A(t, "filter") || A(t, "search");
                                    null === r && null === o || (n.mData = {
                                        _: e + ".display",
                                        sort: null !== r ? e + ".@data-" + r : i,
                                        type: null !== r ? e + ".@data-" + r : i,
                                        filter: null !== o ? e + ".@data-" + o : i
                                    }, f(k, e))
                                }
                            })
                        }
                        var N = k.oFeatures,
                            p = function() {
                                if (g.aaSorting === i) {
                                    t = k.aaSorting;
                                    for (m = 0, h = t.length; m < h; m++) t[m][1] = k.aoColumns[m].asSorting[0]
                                }
                                De(k), N.bSort && je(k, "aoDrawCallback", function() {
                                    if (k.bSorted) {
                                        var t = we(k),
                                            n = {};
                                        e.each(t, function(e, t) {
                                            n[t.src] = t.dir
                                        }), Le(k, null, "order", [k, t, n]), Se(k)
                                    }
                                }), je(k, "aoDrawCallback", function() {
                                    (k.bSorted || "ssp" === Oe(k) || N.bDeferRender) && De(k)
                                }, "sc");
                                var t = S.children("caption").each(function() {
                                        this._captionSide = e(this).css("caption-side")
                                    }),
                                    n = S.children("thead");
                                if (0 === n.length && (n = e("<thead/>").appendTo(S)), k.nTHead = n[0], 0 === (n = S.children("tbody")).length && (n = e("<tbody/>").appendTo(S)), k.nTBody = n[0], 0 === (n = S.children("tfoot")).length && t.length > 0 && ("" !== k.oScroll.sX || "" !== k.oScroll.sY) && (n = e("<tfoot/>").appendTo(S)), 0 === n.length || 0 === n.children().length ? S.addClass(I.sNoFooter) : n.length > 0 && (k.nTFoot = n[0], M(k.aoFooter, k.nTFoot)), g.aaData)
                                    for (m = 0; m < g.aaData.length; m++) w(k, g.aaData[m]);
                                else(k.bDeferLoading || "dom" == Oe(k)) && x(k, e(k.nTBody).children("tr"));
                                k.aiDisplay = k.aiDisplayMaster.slice(), k.bInitialised = !0, !1 === v && re(k)
                            };
                        g.bStateSave ? (N.bStateSave = !0, je(k, "aoDrawCallback", ke, "state_save"), Ie(k, g, p)) : p()
                    }
                }), n = null, this
            },
            Xe = {},
            Je = /[\r\n]/g,
            Ge = /<.*?>/g,
            Ye = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
            Qe = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
            Ke = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            Ze = function(e) {
                return !e || !0 === e || "-" === e
            },
            et = function(e) {
                var t = parseInt(e, 10);
                return !isNaN(t) && isFinite(e) ? t : null
            },
            tt = function(e, t) {
                return Xe[t] || (Xe[t] = RegExp(ft(t), "g")), "string" == typeof e && "." !== t ? e.replace(/\./g, "").replace(Xe[t], ".") : e
            },
            nt = function(e, t, n) {
                var i = "string" == typeof e;
                return !!Ze(e) || (t && i && (e = tt(e, t)), n && i && (e = e.replace(Ke, "")), !isNaN(parseFloat(e)) && isFinite(e))
            },
            it = function(e, t, n) {
                return !!Ze(e) || (Ze(e) || "string" == typeof e ? !!nt(e.replace(Ge, ""), t, n) || null : null)
            },
            rt = function(e, t, n) {
                var r = [],
                    o = 0,
                    a = e.length;
                if (n !== i)
                    for (; o < a; o++) e[o] && e[o][t] && r.push(e[o][t][n]);
                else
                    for (; o < a; o++) e[o] && r.push(e[o][t]);
                return r
            },
            ot = function(e, t, n, r) {
                var o = [],
                    a = 0,
                    s = t.length;
                if (r !== i)
                    for (; a < s; a++) e[t[a]][n] && o.push(e[t[a]][n][r]);
                else
                    for (; a < s; a++) o.push(e[t[a]][n]);
                return o
            },
            at = function(e, t) {
                var n, r = [];
                t === i ? (t = 0, n = e) : (n = t, t = e);
                for (var o = t; o < n; o++) r.push(o);
                return r
            },
            st = function(e) {
                for (var t = [], n = 0, i = e.length; n < i; n++) e[n] && t.push(e[n]);
                return t
            },
            lt = function(e) {
                var t, n, i, r = [],
                    o = e.length,
                    a = 0;
                n = 0;
                e: for (; n < o; n++) {
                    for (t = e[n], i = 0; i < a; i++)
                        if (r[i] === t) continue e;
                    r.push(t), a++
                }
                return r
            };
        Ve.util = {
            throttle: function(e, t) {
                var n, r, o = t !== i ? t : 200;
                return function() {
                    var t = this,
                        a = +new Date,
                        s = arguments;
                    n && a < n + o ? (clearTimeout(r), r = setTimeout(function() {
                        n = i, e.apply(t, s)
                    }, o)) : (n = a, e.apply(t, s))
                }
            },
            escapeRegex: function(e) {
                return e.replace(Qe, "\\$1")
            }
        };
        var ct = function(e, t, n) {
                e[t] !== i && (e[n] = e[t])
            },
            ut = /\[.*?\]$/,
            dt = /\(\)$/,
            ft = Ve.util.escapeRegex,
            ht = e("<div>")[0],
            pt = ht.textContent !== i,
            gt = /<.*?>/g,
            mt = Ve.util.throttle,
            vt = [],
            yt = Array.prototype,
            bt = function(t) {
                var n, i, r = Ve.settings,
                    o = e.map(r, function(e) {
                        return e.nTable
                    });
                return t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? (n = e.inArray(t, o), -1 !== n ? [r[n]] : null) : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? i = e(t) : t instanceof e && (i = t), i ? i.map(function() {
                    return n = e.inArray(this, o), -1 !== n ? r[n] : null
                }).toArray() : void 0) : []
            };
        Be = function(t, n) {
            if (!(this instanceof Be)) return new Be(t, n);
            var i = [],
                r = function(e) {
                    (e = bt(e)) && (i = i.concat(e))
                };
            if (e.isArray(t))
                for (var o = 0, a = t.length; o < a; o++) r(t[o]);
            else r(t);
            this.context = lt(i), n && e.merge(this, n), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Be.extend(this, this, vt)
        }, Ve.Api = Be, e.extend(Be.prototype, {
            any: function() {
                return 0 !== this.count()
            },
            concat: yt.concat,
            context: [],
            count: function() {
                return this.flatten().length
            },
            each: function(e) {
                for (var t = 0, n = this.length; t < n; t++) e.call(this, this[t], t, this);
                return this
            },
            eq: function(e) {
                var t = this.context;
                return t.length > e ? new Be(t[e], this[e]) : null
            },
            filter: function(e) {
                var t = [];
                if (yt.filter) t = yt.filter.call(this, e, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) e.call(this, this[n], n, this) && t.push(this[n]);
                return new Be(this.context, t)
            },
            flatten: function() {
                var e = [];
                return new Be(this.context, e.concat.apply(e, this.toArray()))
            },
            join: yt.join,
            indexOf: yt.indexOf || function(e, t) {
                for (var n = t || 0, i = this.length; n < i; n++)
                    if (this[n] === e) return n;
                return -1
            },
            iterator: function(e, t, n, r) {
                var o, a, s, l, c, u, d, f = [],
                    h = this.context,
                    p = this.selector;
                for ("string" == typeof e && (r = n, n = t, t = e, e = !1), a = 0, s = h.length; a < s; a++) {
                    var g = new Be(h[a]);
                    if ("table" === t)(o = n.call(g, h[a], a)) !== i && f.push(o);
                    else if ("columns" === t || "rows" === t)(o = n.call(g, h[a], this[a], a)) !== i && f.push(o);
                    else if ("column" === t || "column-rows" === t || "row" === t || "cell" === t)
                        for (d = this[a], "column-rows" === t && (u = Tt(h[a], p.opts)), l = 0, c = d.length; l < c; l++) o = d[l], (o = "cell" === t ? n.call(g, h[a], o.row, o.column, a, l) : n.call(g, h[a], o, a, l, u)) !== i && f.push(o)
                }
                return f.length || r ? (e = new Be(h, e ? f.concat.apply([], f) : f), t = e.selector, t.rows = p.rows, t.cols = p.cols, t.opts = p.opts, e) : this
            },
            lastIndexOf: yt.lastIndexOf || function(e, t) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(e) {
                var t = [];
                if (yt.map) t = yt.map.call(this, e, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) t.push(e.call(this, this[n], n));
                return new Be(this.context, t)
            },
            pluck: function(e) {
                return this.map(function(t) {
                    return t[e]
                })
            },
            pop: yt.pop,
            push: yt.push,
            reduce: yt.reduce || function(e, t) {
                return u(this, e, t, 0, this.length, 1)
            },
            reduceRight: yt.reduceRight || function(e, t) {
                return u(this, e, t, this.length - 1, -1, -1)
            },
            reverse: yt.reverse,
            selector: null,
            shift: yt.shift,
            sort: yt.sort,
            splice: yt.splice,
            toArray: function() {
                return yt.slice.call(this)
            },
            to$: function() {
                return e(this)
            },
            toJQuery: function() {
                return e(this)
            },
            unique: function() {
                return new Be(this.context, lt(this))
            },
            unshift: yt.unshift
        }), Be.extend = function(t, n, i) {
            if (i.length && n && (n instanceof Be || n.__dt_wrapper)) {
                var r, o, a;
                for (r = 0, o = i.length; r < o; r++) a = i[r], n[a.name] = "function" == typeof a.val ? function(e, t, n) {
                    return function() {
                        var i = t.apply(e, arguments);
                        return Be.extend(i, i, n.methodExt), i
                    }
                }(t, a.val, a) : e.isPlainObject(a.val) ? {} : a.val, n[a.name].__dt_wrapper = !0, Be.extend(t, n[a.name], a.propExt)
            }
        }, Be.register = Ue = function(t, n) {
            if (e.isArray(t))
                for (var i = 0, r = t.length; i < r; i++) Be.register(t[i], n);
            else
                for (var o, a, s = t.split("."), l = vt, i = 0, r = s.length; i < r; i++) {
                    o = (a = -1 !== s[i].indexOf("()")) ? s[i].replace("()", "") : s[i];
                    var c;
                    e: {
                        c = 0;
                        for (var u = l.length; c < u; c++)
                            if (l[c].name === o) {
                                c = l[c];
                                break e
                            }
                        c = null
                    }
                    c || (c = {
                        name: o,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, l.push(c)), i === r - 1 ? c.val = n : l = a ? c.methodExt : c.propExt
                }
        }, Be.registerPlural = ze = function(t, n, r) {
            Be.register(t, r), Be.register(n, function() {
                var t = r.apply(this, arguments);
                return t === this ? this : t instanceof Be ? t.length ? e.isArray(t[0]) ? new Be(t.context, t[0]) : t[0] : i : t
            })
        }, Ue("tables()", function(t) {
            var n;
            if (t) {
                n = Be;
                var i = this.context;
                if ("number" == typeof t) t = [i[t]];
                else var r = e.map(i, function(e) {
                        return e.nTable
                    }),
                    t = e(r).filter(t).map(function() {
                        var t = e.inArray(this, r);
                        return i[t]
                    }).toArray();
                n = new n(t)
            } else n = this;
            return n
        }), Ue("table()", function(e) {
            var t = (e = this.tables(e)).context;
            return t.length ? new Be(t[0]) : e
        }), ze("tables().nodes()", "table().node()", function() {
            return this.iterator("table", function(e) {
                return e.nTable
            }, 1)
        }), ze("tables().body()", "table().body()", function() {
            return this.iterator("table", function(e) {
                return e.nTBody
            }, 1)
        }), ze("tables().header()", "table().header()", function() {
            return this.iterator("table", function(e) {
                return e.nTHead
            }, 1)
        }), ze("tables().footer()", "table().footer()", function() {
            return this.iterator("table", function(e) {
                return e.nTFoot
            }, 1)
        }), ze("tables().containers()", "table().container()", function() {
            return this.iterator("table", function(e) {
                return e.nTableWrapper
            }, 1)
        }), Ue("draw()", function(e) {
            return this.iterator("table", function(t) {
                "page" === e ? R(t) : ("string" == typeof e && (e = "full-hold" !== e), P(t, !1 === e))
            })
        }), Ue("page()", function(e) {
            return e === i ? this.page.info().page : this.iterator("table", function(t) {
                ce(t, e)
            })
        }), Ue("page.info()", function() {
            if (0 === this.context.length) return i;
            var e = this.context[0],
                t = e._iDisplayStart,
                n = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
                r = e.fnRecordsDisplay(),
                o = -1 === n;
            return {
                page: o ? 0 : Math.floor(t / n),
                pages: o ? 1 : Math.ceil(r / n),
                start: t,
                end: e.fnDisplayEnd(),
                length: n,
                recordsTotal: e.fnRecordsTotal(),
                recordsDisplay: r,
                serverSide: "ssp" === Oe(e)
            }
        }), Ue("page.len()", function(e) {
            return e === i ? 0 !== this.context.length ? this.context[0]._iDisplayLength : i : this.iterator("table", function(t) {
                ae(t, e)
            })
        });
        var wt = function(e, t, n) {
            if (n) {
                var i = new Be(e);
                i.one("draw", function() {
                    n(i.ajax.json())
                })
            }
            if ("ssp" == Oe(e)) P(e, t);
            else {
                de(e, !0);
                var r = e.jqXHR;
                r && 4 !== r.readyState && r.abort(), W(e, [], function(n) {
                    I(e);
                    for (var i = 0, r = (n = z(e, n)).length; i < r; i++) w(e, n[i]);
                    P(e, t), de(e, !1)
                })
            }
        };
        Ue("ajax.json()", function() {
            var e = this.context;
            if (0 < e.length) return e[0].json
        }), Ue("ajax.params()", function() {
            var e = this.context;
            if (0 < e.length) return e[0].oAjaxData
        }), Ue("ajax.reload()", function(e, t) {
            return this.iterator("table", function(n) {
                wt(n, !1 === t, e)
            })
        }), Ue("ajax.url()", function(t) {
            var n = this.context;
            return t === i ? 0 === n.length ? i : (n = n[0], n.ajax ? e.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource) : this.iterator("table", function(n) {
                e.isPlainObject(n.ajax) ? n.ajax.url = t : n.ajax = t
            })
        }), Ue("ajax.url().load()", function(e, t) {
            return this.iterator("table", function(n) {
                wt(n, !1 === t, e)
            })
        });
        var xt = function(t, n, r, o, a) {
                var s, l, c, u, d, f, h = [];
                for (c = typeof n, n && "string" !== c && "function" !== c && n.length !== i || (n = [n]), c = 0, u = n.length; c < u; c++)
                    for (d = 0, f = (l = n[c] && n[c].split && !n[c].match(/[\[\(:]/) ? n[c].split(",") : [n[c]]).length; d < f; d++)(s = r("string" == typeof l[d] ? e.trim(l[d]) : l[d])) && s.length && (h = h.concat(s));
                if ((t = qe.selector[t]).length)
                    for (c = 0, u = t.length; c < u; c++) h = t[c](o, a, h);
                return lt(h)
            },
            St = function(t) {
                return t || (t = {}), t.filter && t.search === i && (t.search = t.filter), e.extend({
                    search: "none",
                    order: "current",
                    page: "all"
                }, t)
            },
            Ct = function(e) {
                for (var t = 0, n = e.length; t < n; t++)
                    if (0 < e[t].length) return e[0] = e[t], e[0].length = 1, e.length = 1, e.context = [e.context[t]], e;
                return e.length = 0, e
            },
            Tt = function(t, n) {
                var i, r, o, a = [],
                    s = t.aiDisplay;
                i = t.aiDisplayMaster;
                var l = n.search;
                if (r = n.order, o = n.page, "ssp" == Oe(t)) return "removed" === l ? [] : at(0, i.length);
                if ("current" == o)
                    for (i = t._iDisplayStart, r = t.fnDisplayEnd(); i < r; i++) a.push(s[i]);
                else if ("current" == r || "applied" == r) a = "none" == l ? i.slice() : "applied" == l ? s.slice() : e.map(i, function(t) {
                    return -1 === e.inArray(t, s) ? t : null
                });
                else if ("index" == r || "original" == r)
                    for (i = 0, r = t.aoData.length; i < r; i++) "none" == l ? a.push(i) : (-1 === (o = e.inArray(i, s)) && "removed" == l || 0 <= o && "applied" == l) && a.push(i);
                return a
            };
        Ue("rows()", function(t, n) {
            t === i ? t = "" : e.isPlainObject(t) && (n = t, t = "");
            var n = St(n),
                r = this.iterator("table", function(r) {
                    var o, a = n;
                    return xt("row", t, function(t) {
                        var n = et(t);
                        if (null !== n && !a) return [n];
                        if (o || (o = Tt(r, a)), null !== n && -1 !== e.inArray(n, o)) return [n];
                        if (null === t || t === i || "" === t) return o;
                        if ("function" == typeof t) return e.map(o, function(e) {
                            var n = r.aoData[e];
                            return t(e, n._aData, n.nTr) ? e : null
                        });
                        if (n = st(ot(r.aoData, o, "nTr")), t.nodeName) return t._DT_RowIndex !== i ? [t._DT_RowIndex] : t._DT_CellIndex ? [t._DT_CellIndex.row] : (n = e(t).closest("*[data-dt-row]"), n.length ? [n.data("dt-row")] : []);
                        if ("string" == typeof t && "#" === t.charAt(0)) {
                            var s = r.aIds[t.replace(/^#/, "")];
                            if (s !== i) return [s.idx]
                        }
                        return e(n).filter(t).map(function() {
                            return this._DT_RowIndex
                        }).toArray()
                    }, r, a)
                }, 1);
            return r.selector.rows = t, r.selector.opts = n, r
        }), Ue("rows().nodes()", function() {
            return this.iterator("row", function(e, t) {
                return e.aoData[t].nTr || i
            }, 1)
        }), Ue("rows().data()", function() {
            return this.iterator(!0, "rows", function(e, t) {
                return ot(e.aoData, t, "_aData")
            }, 1)
        }), ze("rows().cache()", "row().cache()", function(e) {
            return this.iterator("row", function(t, n) {
                var i = t.aoData[n];
                return "search" === e ? i._aFilterData : i._aSortData
            }, 1)
        }), ze("rows().invalidate()", "row().invalidate()", function(e) {
            return this.iterator("row", function(t, n) {
                E(t, n, e)
            })
        }), ze("rows().indexes()", "row().index()", function() {
            return this.iterator("row", function(e, t) {
                return t
            }, 1)
        }), ze("rows().ids()", "row().id()", function(e) {
            for (var t = [], n = this.context, i = 0, r = n.length; i < r; i++)
                for (var o = 0, a = this[i].length; o < a; o++) {
                    var s = n[i].rowIdFn(n[i].aoData[this[i][o]]._aData);
                    t.push((!0 === e ? "#" : "") + s)
                }
            return new Be(n, t)
        }), ze("rows().remove()", "row().remove()", function() {
            var e = this;
            return this.iterator("row", function(t, n, r) {
                var o, a, s, l, c, u = t.aoData,
                    d = u[n];
                for (u.splice(n, 1), o = 0, a = u.length; o < a; o++)
                    if (s = u[o], c = s.anCells, null !== s.nTr && (s.nTr._DT_RowIndex = o), null !== c)
                        for (s = 0, l = c.length; s < l; s++) c[s]._DT_CellIndex.row = o;
                F(t.aiDisplayMaster, n), F(t.aiDisplay, n), F(e[r], n, !1), Re(t), (n = t.rowIdFn(d._aData)) !== i && delete t.aIds[n]
            }), this.iterator("table", function(e) {
                for (var t = 0, n = e.aoData.length; t < n; t++) e.aoData[t].idx = t
            }), this
        }), Ue("rows.add()", function(t) {
            var n = this.iterator("table", function(e) {
                    var n, i, r, o = [];
                    for (i = 0, r = t.length; i < r; i++) n = t[i], n.nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(x(e, n)[0]) : o.push(w(e, n));
                    return o
                }, 1),
                i = this.rows(-1);
            return i.pop(), e.merge(i, n), i
        }), Ue("row()", function(e, t) {
            return Ct(this.rows(e, t))
        }), Ue("row().data()", function(e) {
            var t = this.context;
            return e === i ? t.length && this.length ? t[0].aoData[this[0]]._aData : i : (t[0].aoData[this[0]]._aData = e, E(t[0], this[0], "data"), this)
        }), Ue("row().node()", function() {
            var e = this.context;
            return e.length && this.length ? e[0].aoData[this[0]].nTr || null : null
        }), Ue("row.add()", function(t) {
            t instanceof e && t.length && (t = t[0]);
            var n = this.iterator("table", function(e) {
                return t.nodeName && "TR" === t.nodeName.toUpperCase() ? x(e, t)[0] : w(e, t)
            });
            return this.row(n[0])
        });
        var Dt = function(e, t) {
                var n = e.context;
                n.length && (n = n[0].aoData[t !== i ? t : e[0]]) && n._details && (n._details.remove(), n._detailsShow = i, n._details = i)
            },
            _t = function(e, t) {
                var n = e.context;
                if (n.length && e.length) {
                    var i = n[0].aoData[e[0]];
                    if (i._details) {
                        (i._detailsShow = t) ? i._details.insertAfter(i.nTr): i._details.detach();
                        var r = n[0],
                            o = new Be(r),
                            a = r.aoData;
                        o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"), 0 < rt(a, "_details").length && (o.on("draw.dt.DT_details", function(e, t) {
                            r === t && o.rows({
                                page: "current"
                            }).eq(0).each(function(e) {
                                (e = a[e])._detailsShow && e._details.insertAfter(e.nTr)
                            })
                        }), o.on("column-visibility.dt.DT_details", function(e, t) {
                            if (r === t)
                                for (var n, i = m(t), o = 0, s = a.length; o < s; o++)(n = a[o])._details && n._details.children("td[colspan]").attr("colspan", i)
                        }), o.on("destroy.dt.DT_details", function(e, t) {
                            if (r === t)
                                for (var n = 0, i = a.length; n < i; n++) a[n]._details && Dt(o, n)
                        }))
                    }
                }
            };
        Ue("row().child()", function(t, n) {
            o = this.context;
            if (t === i) return o.length && this.length ? o[0].aoData[this[0]]._details : i;
            if (!0 === t) this.child.show();
            else if (!1 === t) Dt(this);
            else if (o.length && this.length) {
                var r = o[0],
                    o = o[0].aoData[this[0]],
                    a = [],
                    s = function(t, n) {
                        if (e.isArray(t) || t instanceof e)
                            for (var i = 0, o = t.length; i < o; i++) s(t[i], n);
                        else t.nodeName && "tr" === t.nodeName.toLowerCase() ? a.push(t) : (i = e("<tr><td/></tr>").addClass(n), e("td", i).addClass(n).html(t)[0].colSpan = m(r), a.push(i[0]))
                    };
                s(t, n), o._details && o._details.detach(), o._details = e(a), o._detailsShow && o._details.insertAfter(o.nTr)
            }
            return this
        }), Ue(["row().child.show()", "row().child().show()"], function() {
            return _t(this, !0), this
        }), Ue(["row().child.hide()", "row().child().hide()"], function() {
            return _t(this, !1), this
        }), Ue(["row().child.remove()", "row().child().remove()"], function() {
            return Dt(this), this
        }), Ue("row().child.isShown()", function() {
            var e = this.context;
            return !(!e.length || !this.length) && (e[0].aoData[this[0]]._detailsShow || !1)
        });
        var kt = /^([^:]+):(name|visIdx|visible)$/,
            It = function(e, t, n, i, r) {
                for (var n = [], i = 0, o = r.length; i < o; i++) n.push(S(e, r[i], t));
                return n
            };
        Ue("columns()", function(t, n) {
            t === i ? t = "" : e.isPlainObject(t) && (n = t, t = "");
            var n = St(n),
                r = this.iterator("table", function(i) {
                    var r = t,
                        o = n,
                        a = i.aoColumns,
                        s = rt(a, "sName"),
                        l = rt(a, "nTh");
                    return xt("column", r, function(t) {
                        var n = et(t);
                        if ("" === t) return at(a.length);
                        if (null !== n) return [n >= 0 ? n : a.length + n];
                        if ("function" == typeof t) {
                            var r = Tt(i, o);
                            return e.map(a, function(e, n) {
                                return t(n, It(i, n, 0, 0, r), l[n]) ? n : null
                            })
                        }
                        var c = "string" == typeof t ? t.match(kt) : "";
                        if (c) switch (c[2]) {
                            case "visIdx":
                            case "visible":
                                if ((n = parseInt(c[1], 10)) < 0) {
                                    var u = e.map(a, function(e, t) {
                                        return e.bVisible ? t : null
                                    });
                                    return [u[u.length + n]]
                                }
                                return [p(i, n)];
                            case "name":
                                return e.map(s, function(e, t) {
                                    return e === c[1] ? t : null
                                });
                            default:
                                return []
                        }
                        return t.nodeName && t._DT_CellIndex ? [t._DT_CellIndex.column] : (n = e(l).filter(t).map(function() {
                            return e.inArray(this, l)
                        }).toArray()).length || !t.nodeName ? n : (n = e(t).closest("*[data-dt-column]"), n.length ? [n.data("dt-column")] : [])
                    }, i, o)
                }, 1);
            return r.selector.cols = t, r.selector.opts = n, r
        }), ze("columns().header()", "column().header()", function() {
            return this.iterator("column", function(e, t) {
                return e.aoColumns[t].nTh
            }, 1)
        }), ze("columns().footer()", "column().footer()", function() {
            return this.iterator("column", function(e, t) {
                return e.aoColumns[t].nTf
            }, 1)
        }), ze("columns().data()", "column().data()", function() {
            return this.iterator("column-rows", It, 1)
        }), ze("columns().dataSrc()", "column().dataSrc()", function() {
            return this.iterator("column", function(e, t) {
                return e.aoColumns[t].mData
            }, 1)
        }), ze("columns().cache()", "column().cache()", function(e) {
            return this.iterator("column-rows", function(t, n, i, r, o) {
                return ot(t.aoData, o, "search" === e ? "_aFilterData" : "_aSortData", n)
            }, 1)
        }), ze("columns().nodes()", "column().nodes()", function() {
            return this.iterator("column-rows", function(e, t, n, i, r) {
                return ot(e.aoData, r, "anCells", t)
            }, 1)
        }), ze("columns().visible()", "column().visible()", function(t, n) {
            var r = this.iterator("column", function(n, r) {
                if (t === i) return n.aoColumns[r].bVisible;
                var o, a, s, l = n.aoColumns,
                    c = l[r],
                    u = n.aoData;
                if (t !== i && c.bVisible !== t) {
                    if (t) {
                        var d = e.inArray(!0, rt(l, "bVisible"), r + 1);
                        for (o = 0, a = u.length; o < a; o++) s = u[o].nTr, l = u[o].anCells, s && s.insertBefore(l[r], l[d] || null)
                    } else e(rt(n.aoData, "anCells", r)).detach();
                    c.bVisible = t, L(n, n.aoHeader), L(n, n.aoFooter), ke(n)
                }
            });
            return t !== i && (this.iterator("column", function(e, i) {
                Le(e, null, "column-visibility", [e, i, t, n])
            }), (n === i || n) && this.columns.adjust()), r
        }), ze("columns().indexes()", "column().index()", function(e) {
            return this.iterator("column", function(t, n) {
                return "visible" === e ? g(t, n) : n
            }, 1)
        }), Ue("columns.adjust()", function() {
            return this.iterator("table", function(e) {
                h(e)
            }, 1)
        }), Ue("column.index()", function(e, t) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === e || "toData" === e) return p(n, t);
                if ("fromData" === e || "toVisible" === e) return g(n, t)
            }
        }), Ue("column()", function(e, t) {
            return Ct(this.columns(e, t))
        }), Ue("cells()", function(t, n, r) {
            if (e.isPlainObject(t) && (t.row === i ? (r = t, t = null) : (r = n, n = null)), e.isPlainObject(n) && (r = n, n = null), null === n || n === i) return this.iterator("table", function(n) {
                var o, a, s, l, c, u, d, f = t,
                    h = St(r),
                    p = n.aoData,
                    g = Tt(n, h),
                    m = st(ot(p, g, "anCells")),
                    v = e([].concat.apply([], m)),
                    y = n.aoColumns.length;
                return xt("cell", f, function(t) {
                    var r = "function" == typeof t;
                    if (null === t || t === i || r) {
                        for (a = [], s = 0, l = g.length; s < l; s++)
                            for (o = g[s], c = 0; c < y; c++) u = {
                                row: o,
                                column: c
                            }, r ? (d = p[o], t(u, S(n, o, c), d.anCells ? d.anCells[c] : null) && a.push(u)) : a.push(u);
                        return a
                    }
                    return e.isPlainObject(t) ? [t] : (r = v.filter(t).map(function(e, t) {
                        return {
                            row: t._DT_CellIndex.row,
                            column: t._DT_CellIndex.column
                        }
                    }).toArray()).length || !t.nodeName ? r : (d = e(t).closest("*[data-dt-row]"), d.length ? [{
                        row: d.data("dt-row"),
                        column: d.data("dt-column")
                    }] : [])
                }, n, h)
            });
            var o, a, s, l, c, u = this.columns(n, r),
                d = this.rows(t, r),
                f = this.iterator("table", function(e, t) {
                    for (o = [], a = 0, s = d[t].length; a < s; a++)
                        for (l = 0, c = u[t].length; l < c; l++) o.push({
                            row: d[t][a],
                            column: u[t][l]
                        });
                    return o
                }, 1);
            return e.extend(f.selector, {
                cols: n,
                rows: t,
                opts: r
            }), f
        }), ze("cells().nodes()", "cell().node()", function() {
            return this.iterator("cell", function(e, t, n) {
                return (e = e.aoData[t]) && e.anCells ? e.anCells[n] : i
            }, 1)
        }), Ue("cells().data()", function() {
            return this.iterator("cell", function(e, t, n) {
                return S(e, t, n)
            }, 1)
        }), ze("cells().cache()", "cell().cache()", function(e) {
            return e = "search" === e ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t, n, i) {
                return t.aoData[n][e][i]
            }, 1)
        }), ze("cells().render()", "cell().render()", function(e) {
            return this.iterator("cell", function(t, n, i) {
                return S(t, n, i, e)
            }, 1)
        }), ze("cells().indexes()", "cell().index()", function() {
            return this.iterator("cell", function(e, t, n) {
                return {
                    row: t,
                    column: n,
                    columnVisible: g(e, n)
                }
            }, 1)
        }), ze("cells().invalidate()", "cell().invalidate()", function(e) {
            return this.iterator("cell", function(t, n, i) {
                E(t, n, e, i)
            })
        }), Ue("cell()", function(e, t, n) {
            return Ct(this.cells(e, t, n))
        }), Ue("cell().data()", function(e) {
            var t = this.context,
                n = this[0];
            return e === i ? t.length && n.length ? S(t[0], n[0].row, n[0].column) : i : (C(t[0], n[0].row, n[0].column, e), E(t[0], n[0].row, "data", n[0].column), this)
        }), Ue("order()", function(t, n) {
            var r = this.context;
            return t === i ? 0 !== r.length ? r[0].aaSorting : i : ("number" == typeof t ? t = [
                [t, n]
            ] : t.length && !e.isArray(t[0]) && (t = Array.prototype.slice.call(arguments)), this.iterator("table", function(e) {
                e.aaSorting = t.slice()
            }))
        }), Ue("order.listener()", function(e, t, n) {
            return this.iterator("table", function(i) {
                Te(i, e, t, n)
            })
        }), Ue("order.fixed()", function(t) {
            if (!t) {
                var n = (n = this.context).length ? n[0].aaSortingFixed : i;
                return e.isArray(n) ? {
                    pre: n
                } : n
            }
            return this.iterator("table", function(n) {
                n.aaSortingFixed = e.extend(!0, {}, t)
            })
        }), Ue(["columns().order()", "column().order()"], function(t) {
            var n = this;
            return this.iterator("table", function(i, r) {
                var o = [];
                e.each(n[r], function(e, n) {
                    o.push([n, t])
                }), i.aaSorting = o
            })
        }), Ue("search()", function(t, n, r, o) {
            var a = this.context;
            return t === i ? 0 !== a.length ? a[0].oPreviousSearch.sSearch : i : this.iterator("table", function(i) {
                i.oFeatures.bFilter && X(i, e.extend({}, i.oPreviousSearch, {
                    sSearch: t + "",
                    bRegex: null !== n && n,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === o || o
                }), 1)
            })
        }), ze("columns().search()", "column().search()", function(t, n, r, o) {
            return this.iterator("column", function(a, s) {
                var l = a.aoPreSearchCols;
                if (t === i) return l[s].sSearch;
                a.oFeatures.bFilter && (e.extend(l[s], {
                    sSearch: t + "",
                    bRegex: null !== n && n,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === o || o
                }), X(a, a.oPreviousSearch, 1))
            })
        }), Ue("state()", function() {
            return this.context.length ? this.context[0].oSavedState : null
        }), Ue("state.clear()", function() {
            return this.iterator("table", function(e) {
                e.fnStateSaveCallback.call(e.oInstance, e, {})
            })
        }), Ue("state.loaded()", function() {
            return this.context.length ? this.context[0].oLoadedState : null
        }), Ue("state.save()", function() {
            return this.iterator("table", function(e) {
                ke(e)
            })
        }), Ve.versionCheck = Ve.fnVersionCheck = function(e) {
            for (var t, n, i = Ve.version.split("."), r = 0, o = (e = e.split(".")).length; r < o; r++)
                if (t = parseInt(i[r], 10) || 0, n = parseInt(e[r], 10) || 0, t !== n) return t > n;
            return !0
        }, Ve.isDataTable = Ve.fnIsDataTable = function(t) {
            var n = e(t).get(0),
                i = !1;
            return t instanceof Ve.Api || (e.each(Ve.settings, function(t, r) {
                var o = r.nScrollHead ? e("table", r.nScrollHead)[0] : null,
                    a = r.nScrollFoot ? e("table", r.nScrollFoot)[0] : null;
                r.nTable !== n && o !== n && a !== n || (i = !0)
            }), i)
        }, Ve.tables = Ve.fnTables = function(t) {
            var n = !1;
            e.isPlainObject(t) && (n = t.api, t = t.visible);
            var i = e.map(Ve.settings, function(n) {
                if (!t || t && e(n.nTable).is(":visible")) return n.nTable
            });
            return n ? new Be(i) : i
        }, Ve.camelToHungarian = o, Ue("$()", function(t, n) {
            var i = this.rows(n).nodes(),
                i = e(i);
            return e([].concat(i.filter(t).toArray(), i.find(t).toArray()))
        }), e.each(["on", "one", "off"], function(t, n) {
            Ue(n + "()", function() {
                var t = Array.prototype.slice.call(arguments);
                t[0] = e.map(t[0].split(/\s/), function(e) {
                    return e.match(/\.dt\b/) ? e : e + ".dt"
                }).join(" ");
                var i = e(this.tables().nodes());
                return i[n].apply(i, t), this
            })
        }), Ue("clear()", function() {
            return this.iterator("table", function(e) {
                I(e)
            })
        }), Ue("settings()", function() {
            return new Be(this.context, this.context)
        }), Ue("init()", function() {
            var e = this.context;
            return e.length ? e[0].oInit : null
        }), Ue("data()", function() {
            return this.iterator("table", function(e) {
                return rt(e.aoData, "_aData")
            }).flatten()
        }), Ue("destroy()", function(n) {
            return n = n || !1, this.iterator("table", function(i) {
                var r, o = i.nTableWrapper.parentNode,
                    a = i.oClasses,
                    s = i.nTable,
                    l = i.nTBody,
                    c = i.nTHead,
                    u = i.nTFoot,
                    d = e(s),
                    l = e(l),
                    f = e(i.nTableWrapper),
                    h = e.map(i.aoData, function(e) {
                        return e.nTr
                    });
                i.bDestroying = !0, Le(i, "aoDestroyCallback", "destroy", [i]), n || new Be(i).columns().visible(!0), f.off(".DT").find(":not(tbody *)").off(".DT"), e(t).off(".DT-" + i.sInstance), s != c.parentNode && (d.children("thead").detach(), d.append(c)), u && s != u.parentNode && (d.children("tfoot").detach(), d.append(u)), i.aaSorting = [], i.aaSortingFixed = [], De(i), e(h).removeClass(i.asStripeClasses.join(" ")), e("th, td", c).removeClass(a.sSortable + " " + a.sSortableAsc + " " + a.sSortableDesc + " " + a.sSortableNone), i.bJUI && (e("th span." + a.sSortIcon + ", td span." + a.sSortIcon, c).detach(), e("th, td", c).each(function() {
                    var t = e("div." + a.sSortJUIWrapper, this);
                    e(this).append(t.contents()), t.detach()
                })), l.children().detach(), l.append(h), d[c = n ? "remove" : "detach"](), f[c](), !n && o && (o.insertBefore(s, i.nTableReinsertBefore), d.css("width", i.sDestroyWidth).removeClass(a.sTable), (r = i.asDestroyStripes.length) && l.children().each(function(t) {
                    e(this).addClass(i.asDestroyStripes[t % r])
                })), -1 !== (o = e.inArray(i, Ve.settings)) && Ve.settings.splice(o, 1)
            })
        }), e.each(["column", "row", "cell"], function(e, t) {
            Ue(t + "s().every()", function(e) {
                var n = this.selector.opts,
                    r = this;
                return this.iterator(t, function(o, a, s, l, c) {
                    e.call(r[t](a, "cell" === t ? s : n, "cell" === t ? n : i), a, s, l, c)
                })
            })
        }), Ue("i18n()", function(t, n, r) {
            var o = this.context[0];
            return (t = D(t)(o.oLanguage)) === i && (t = n), r !== i && e.isPlainObject(t) && (t = t[r] !== i ? t[r] : t._), t.replace("%d", r)
        }), Ve.version = "1.10.13", Ve.settings = [], Ve.models = {}, Ve.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, Ve.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1
        }, Ve.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, Ve.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(e) {
                try {
                    return JSON.parse((-1 === e.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + e.sInstance + "_" + location.pathname))
                } catch (e) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(e, t) {
                try {
                    (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + e.sInstance + "_" + location.pathname, JSON.stringify(t))
                } catch (e) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: e.extend({}, Ve.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        }, r(Ve.defaults), Ve.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, r(Ve.defaults.column), Ve.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1,
                bBounding: !1,
                barWidth: 0
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: i,
            oAjaxData: i,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == Oe(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == Oe(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var e = this._iDisplayLength,
                    t = this._iDisplayStart,
                    n = t + e,
                    i = this.aiDisplay.length,
                    r = this.oFeatures,
                    o = r.bPaginate;
                return r.bServerSide ? !1 === o || -1 === e ? t + i : Math.min(t + e, this._iRecordsDisplay) : !o || n > i || -1 === e ? i : n
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        }, Ve.ext = qe = {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: {
                cell: [],
                column: [],
                row: []
            },
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: Ve.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Ve.version
        }, e.extend(qe, {
            afnFiltering: qe.search,
            aTypes: qe.type.detect,
            ofnSearch: qe.type.search,
            oSort: qe.type.order,
            afnSortData: qe.order,
            aoFeatures: qe.feature,
            oApi: qe.internal,
            oStdClasses: qe.classes,
            oPagination: qe.pager
        }), e.extend(Ve.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var Ft = "ui-state-default",
            Et = "css_right ui-icon ui-icon-",
            At = "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
        e.extend(Ve.ext.oJUIClasses, Ve.ext.classes, {
            sPageButton: "fg-button ui-button " + Ft,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: Ft + " sorting_asc",
            sSortDesc: Ft + " sorting_desc",
            sSortable: Ft + " sorting",
            sSortableAsc: Ft + " sorting_asc_disabled",
            sSortableDesc: Ft + " sorting_desc_disabled",
            sSortableNone: Ft + " sorting_disabled",
            sSortJUIAsc: Et + "triangle-1-n",
            sSortJUIDesc: Et + "triangle-1-s",
            sSortJUI: Et + "carat-2-n-s",
            sSortJUIAscAllowed: Et + "carat-1-n",
            sSortJUIDescAllowed: Et + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + Ft,
            sScrollFoot: "dataTables_scrollFoot " + Ft,
            sHeaderTH: Ft,
            sFooterTH: Ft,
            sJUIHeader: At + " ui-corner-tl ui-corner-tr",
            sJUIFooter: At + " ui-corner-bl ui-corner-br"
        });
        var Nt = Ve.ext.pager;
        e.extend(Nt, {
            simple: function() {
                return ["previous", "next"]
            },
            full: function() {
                return ["first", "previous", "next", "last"]
            },
            numbers: function(e, t) {
                return [Me(e, t)]
            },
            simple_numbers: function(e, t) {
                return ["previous", Me(e, t), "next"]
            },
            full_numbers: function(e, t) {
                return ["first", "previous", Me(e, t), "next", "last"]
            },
            first_last_numbers: function(e, t) {
                return ["first", Me(e, t), "last"]
            },
            _numbers: Me,
            numbers_length: 7
        }), e.extend(!0, Ve.ext.renderer, {
            pageButton: {
                _: function(t, r, o, a, s, l) {
                    var c, u, d, f = t.oClasses,
                        h = t.oLanguage.oPaginate,
                        p = t.oLanguage.oAria.paginate || {},
                        g = 0,
                        m = function(n, i) {
                            var r, a, d, v, y = function(e) {
                                ce(t, e.data.action, !0)
                            };
                            for (r = 0, a = i.length; r < a; r++)
                                if (v = i[r], e.isArray(v)) d = e("<" + (v.DT_el || "div") + "/>").appendTo(n), m(d, v);
                                else {
                                    switch (c = null, u = "", v) {
                                        case "ellipsis":
                                            n.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            c = h.sFirst, u = v + (s > 0 ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            c = h.sPrevious, u = v + (s > 0 ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            c = h.sNext, u = v + (s < l - 1 ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            c = h.sLast, u = v + (s < l - 1 ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        default:
                                            c = v + 1, u = s === v ? f.sPageButtonActive : ""
                                    }
                                    null !== c && ($e(d = e("<a>", {
                                        class: f.sPageButton + " " + u,
                                        "aria-controls": t.sTableId,
                                        "aria-label": p[v],
                                        "data-dt-idx": g,
                                        tabindex: t.iTabIndex,
                                        id: 0 === o && "string" == typeof v ? t.sTableId + "_" + v : null
                                    }).html(c).appendTo(n), {
                                        action: v
                                    }, y), g++)
                                }
                        };
                    try {
                        d = e(r).find(n.activeElement).data("dt-idx")
                    } catch (e) {}
                    m(e(r).empty(), a), d !== i && e(r).find("[data-dt-idx=" + d + "]").focus()
                }
            }
        }), e.extend(Ve.ext.type.detect, [function(e, t) {
            var n = t.oLanguage.sDecimal;
            return nt(e, n) ? "num" + n : null
        }, function(e) {
            if (e && !(e instanceof Date) && !Ye.test(e)) return null;
            var t = Date.parse(e);
            return null !== t && !isNaN(t) || Ze(e) ? "date" : null
        }, function(e, t) {
            var n = t.oLanguage.sDecimal;
            return nt(e, n, !0) ? "num-fmt" + n : null
        }, function(e, t) {
            var n = t.oLanguage.sDecimal;
            return it(e, n) ? "html-num" + n : null
        }, function(e, t) {
            var n = t.oLanguage.sDecimal;
            return it(e, n, !0) ? "html-num-fmt" + n : null
        }, function(e) {
            return Ze(e) || "string" == typeof e && -1 !== e.indexOf("<") ? "html" : null
        }]), e.extend(Ve.ext.type.search, {
            html: function(e) {
                return Ze(e) ? e : "string" == typeof e ? e.replace(Je, " ").replace(Ge, "") : ""
            },
            string: function(e) {
                return Ze(e) ? e : "string" == typeof e ? e.replace(Je, " ") : e
            }
        });
        var $t = function(e, t, n, i) {
            return 0 === e || e && "-" !== e ? (t && (e = tt(e, t)), e.replace && (n && (e = e.replace(n, "")), i && (e = e.replace(i, ""))), 1 * e) : -1 / 0
        };
        e.extend(qe.type.order, {
            "date-pre": function(e) {
                return Date.parse(e) || -1 / 0
            },
            "html-pre": function(e) {
                return Ze(e) ? "" : e.replace ? e.replace(/<.*?>/g, "").toLowerCase() : e + ""
            },
            "string-pre": function(e) {
                return Ze(e) ? "" : "string" == typeof e ? e.toLowerCase() : e.toString ? e.toString() : ""
            },
            "string-asc": function(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            },
            "string-desc": function(e, t) {
                return e < t ? 1 : e > t ? -1 : 0
            }
        }), He(""), e.extend(!0, Ve.ext.renderer, {
            header: {
                _: function(t, n, i, r) {
                    e(t.nTable).on("order.dt.DT", function(e, o, a, s) {
                        t === o && (e = i.idx, n.removeClass(i.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == s[e] ? r.sSortAsc : "desc" == s[e] ? r.sSortDesc : i.sSortingClass))
                    })
                },
                jqueryui: function(t, n, i, r) {
                    e("<div/>").addClass(r.sSortJUIWrapper).append(n.contents()).append(e("<span/>").addClass(r.sSortIcon + " " + i.sSortingClassJUI)).appendTo(n), e(t.nTable).on("order.dt.DT", function(e, o, a, s) {
                        t === o && (e = i.idx, n.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == s[e] ? r.sSortAsc : "desc" == s[e] ? r.sSortDesc : i.sSortingClass), n.find("span." + r.sSortIcon).removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed).addClass("asc" == s[e] ? r.sSortJUIAsc : "desc" == s[e] ? r.sSortJUIDesc : i.sSortingClassJUI))
                    })
                }
            }
        });
        var jt = function(e) {
            return "string" == typeof e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e
        };
        return Ve.render = {
            number: function(e, t, n, i, r) {
                return {
                    display: function(o) {
                        if ("number" != typeof o && "string" != typeof o) return o;
                        var a = 0 > o ? "-" : "",
                            s = parseFloat(o);
                        return isNaN(s) ? jt(o) : (s = s.toFixed(n), o = Math.abs(s), s = parseInt(o, 10), o = n ? t + (o - s).toFixed(n).substring(2) : "", a + (i || "") + s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) + o + (r || ""))
                    }
                }
            },
            text: function() {
                return {
                    display: jt
                }
            }
        }, e.extend(Ve.ext.internal, {
            _fnExternApiFunc: We,
            _fnBuildAjax: W,
            _fnAjaxUpdate: q,
            _fnAjaxParameters: B,
            _fnAjaxUpdateDraw: U,
            _fnAjaxDataSrc: z,
            _fnAddColumn: d,
            _fnColumnOptions: f,
            _fnAdjustColumnSizing: h,
            _fnVisibleToColumnIndex: p,
            _fnColumnIndexToVisible: g,
            _fnVisbleColumns: m,
            _fnGetColumns: v,
            _fnColumnTypes: y,
            _fnApplyColumnDefs: b,
            _fnHungarianMap: r,
            _fnCamelToHungarian: o,
            _fnLanguageCompat: a,
            _fnBrowserDetect: c,
            _fnAddData: w,
            _fnAddTr: x,
            _fnNodeToDataIndex: function(e, t) {
                return t._DT_RowIndex !== i ? t._DT_RowIndex : null
            },
            _fnNodeToColumnIndex: function(t, n, i) {
                return e.inArray(i, t.aoData[n].anCells)
            },
            _fnGetCellData: S,
            _fnSetCellData: C,
            _fnSplitObjNotation: T,
            _fnGetObjectDataFn: D,
            _fnSetObjectDataFn: _,
            _fnGetDataMaster: k,
            _fnClearTable: I,
            _fnDeleteIndex: F,
            _fnInvalidate: E,
            _fnGetRowElements: A,
            _fnCreateTr: N,
            _fnBuildHead: j,
            _fnDrawHead: L,
            _fnDraw: R,
            _fnReDraw: P,
            _fnAddOptionsHtml: O,
            _fnDetectHeader: M,
            _fnGetUniqueThs: H,
            _fnFeatureHtmlFilter: V,
            _fnFilterComplete: X,
            _fnFilterCustom: J,
            _fnFilterColumn: G,
            _fnFilter: Y,
            _fnFilterCreateSearch: Q,
            _fnEscapeRegex: ft,
            _fnFilterData: K,
            _fnFeatureHtmlInfo: te,
            _fnUpdateInfo: ne,
            _fnInfoMacros: ie,
            _fnInitialise: re,
            _fnInitComplete: oe,
            _fnLengthChange: ae,
            _fnFeatureHtmlLength: se,
            _fnFeatureHtmlPaginate: le,
            _fnPageChange: ce,
            _fnFeatureHtmlProcessing: ue,
            _fnProcessingDisplay: de,
            _fnFeatureHtmlTable: fe,
            _fnScrollDraw: he,
            _fnApplyToChildren: pe,
            _fnCalculateColumnWidths: ge,
            _fnThrottle: mt,
            _fnConvertToWidth: me,
            _fnGetWidestNode: ve,
            _fnGetMaxLenString: ye,
            _fnStringToCss: be,
            _fnSortFlatten: we,
            _fnSort: xe,
            _fnSortAria: Se,
            _fnSortListener: Ce,
            _fnSortAttachListener: Te,
            _fnSortingClasses: De,
            _fnSortData: _e,
            _fnSaveState: ke,
            _fnLoadState: Ie,
            _fnSettingsFromNode: Fe,
            _fnLog: Ee,
            _fnMap: Ae,
            _fnBindAction: $e,
            _fnCallbackReg: je,
            _fnCallbackFire: Le,
            _fnLengthOverflow: Re,
            _fnRenderer: Pe,
            _fnDataSource: Oe,
            _fnRowAttributes: $,
            _fnCalculateEnd: function() {}
        }), e.fn.dataTable = Ve, Ve.$ = e, e.fn.dataTableSettings = Ve.settings, e.fn.dataTableExt = Ve.ext, e.fn.DataTable = function(t) {
            return e(this).dataTable(t).api()
        }, e.each(Ve, function(t, n) {
            e.fn.DataTable[t] = n
        }), e.fn.dataTable
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var r = e(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e(o);
        t && t.preventDefault(), a.length || (a = r.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.button"),
                o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function() {
            i[r](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.carousel"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(t, r),
            a = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var f = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(s), o.addClass(s), r.one("bsTransitionEnd", function() {
                o.removeClass([t, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var r = function(n) {
        var i, r = e(this),
            o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = e.extend({}, o.data(), r.data()),
                s = r.attr("data-slide-to");
            s && (a.interval = !1), t.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.collapse"),
                o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (t = r.data("bs.collapse")) && t.transitioning)) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = r, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = e(this);
        r.attr("data-target") || i.preventDefault();
        var o = t(r),
            a = o.data("bs.collapse") ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(r).remove(), e(o).each(function() {
            var i = e(this),
                r = t(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.5", a.prototype.toggle = function(i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = t(r),
                a = o.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = t(i),
                    a = r.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var s = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (s.length) {
                    var l = s.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery),
function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var r = e(this),
                o = r.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this, a)), "string" == typeof t ? o[t](i) : a.show && o.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && r;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            r = i.attr("href"),
            o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(o, a, this)
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof t && t;
            (r || !/destroy|hide/.test(t)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var a = r[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return (t = e.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = o[0].offsetWidth,
                f = o[0].offsetHeight;
            if (c) {
                var h = s,
                    p = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + f > p.bottom ? "top" : "top" == s && u.top - f < p.top ? "bottom" : "right" == s && u.right + d > p.width ? "left" : "left" == s && u.left - d < p.left ? "right" : s, o.removeClass(h).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, d, f);
            this.applyPlacement(g, s);
            var m = function() {
                var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            f = d ? 2 * u.left - r + l : 2 * u.top - o + c,
            h = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(f, i[0][h], d)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), t && t()
        }
        var r = this,
            o = e(this.$tip),
            a = e.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        var n = (t = t || this.$element)[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = i ? {
                top: 0,
                left: 0
            } : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, r, a, s, o)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - o - a.scroll,
                l = t.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var c = t.left - o,
                u = t.left + o + n;
            c < a.left ? r.left = a.left - c : u > a.right && (r.left = a.left + a.width - u)
        }
        return r
    }, n.prototype.getTitle = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }, n.prototype.getUID = function(e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.popover"),
                o = "object" == typeof t && t;
            (r || !/destroy|hide/.test(t)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery),
function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }
    t.VERSION = "3.3.5", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                r = t.data("target") || t.attr("href"),
                o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + i, r]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = o[o.length - 1]) && this.activate(e);
        if (a && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--;) a != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, r) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var a = i.find("> .active"),
            s = r && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var r = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.affix"),
                o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(e - i >= r + a) && "bottom";
        var s = null == this.affixed,
            l = s ? r : o.top,
            c = s ? a : t;
        return null != n && n >= r ? "top" : null != i && l + c >= e - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var s = this.getState(a, t, r, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - t - o
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery),
function(e) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (this.deviceIsIOS && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, FastClick.prototype.needsFocus = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !this.deviceIsAndroid;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, FastClick.prototype.sendClick = function(e, t) {
        "use strict";
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, FastClick.prototype.determineEventType = function(e) {
        "use strict";
        return this.deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, FastClick.prototype.focus = function(e) {
        "use strict";
        var t;
        this.deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, FastClick.prototype.updateScrollParent = function(e) {
        "use strict";
        var t, n;
        if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
        "use strict";
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, FastClick.prototype.onTouchStart = function(e) {
        "use strict";
        var t, n, i;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], this.deviceIsIOS) {
            if ((i = window.getSelection()).rangeCount && !i.isCollapsed) return !0;
            if (!this.deviceIsIOS4) {
                if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(e) {
        "use strict";
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, FastClick.prototype.onTouchMove = function(e) {
        "use strict";
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, FastClick.prototype.findControl = function(e) {
        "use strict";
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(e) {
        "use strict";
        var t, n, i, r, o, a = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (o = e.changedTouches[0], (a = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || a).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (i = a.tagName.toLowerCase())) {
            if (t = this.findControl(a)) {
                if (this.focus(a), this.deviceIsAndroid) return !1;
                a = t
            }
        } else if (this.needsFocus(a)) return e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(a), this.deviceIsIOS4 && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
        return !(!this.deviceIsIOS || this.deviceIsIOS4 || !(r = a.fastClickScrollParent) || r.fastClickLastScrollTop === r.scrollTop) || (this.needsClick(a) || (e.preventDefault(), this.sendClick(a, e)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(e) {
        "use strict";
        return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    }, FastClick.prototype.onClick = function(e) {
        "use strict";
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || ((t = this.onMouse(e)) || (this.targetElement = null), t)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var e = this.layer;
        this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(e) {
        "use strict";
        var t, n;
        if (void 0 === window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!FastClick.prototype.deviceIsAndroid) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && window.innerWidth <= window.screen.width) return !0
            }
        }
        return "none" === e.style.msTouchAction
    }, FastClick.attach = function(e) {
        "use strict";
        return new FastClick(e)
    }, "undefined" != typeof define && define.amd ? define(function() {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
    function(e) {
        e.fn.extend({
            slimScroll: function(n) {
                var i = {
                        width: "auto",
                        height: "250px",
                        size: "7px",
                        color: "#000",
                        position: "right",
                        distance: "1px",
                        start: "top",
                        opacity: .4,
                        alwaysVisible: !1,
                        disableFadeOut: !1,
                        railVisible: !1,
                        railColor: "#333",
                        railOpacity: .2,
                        railDraggable: !0,
                        railClass: "slimScrollRail",
                        barClass: "slimScrollBar",
                        wrapperClass: "slimScrollDiv",
                        allowPageScroll: !1,
                        wheelStep: 20,
                        touchScrollStep: 200,
                        borderRadius: "7px",
                        railBorderRadius: "7px"
                    },
                    r = e.extend(i, n);
                return this.each(function() {
                    function i(t) {
                        if (c) {
                            var n = 0;
                            (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3);
                            var i = t.target || t.srcTarget || t.srcElement;
                            e(i).closest("." + r.wrapperClass).is(w.parent()) && o(n, !0), t.preventDefault && !b && t.preventDefault(), b || (t.returnValue = !1)
                        }
                    }

                    function o(e, t, n) {
                        b = !1;
                        var i = e,
                            o = w.outerHeight() - D.outerHeight();
                        if (t && (i = parseInt(D.css("top")) + e * parseInt(r.wheelStep) / 100 * D.outerHeight(), i = Math.min(Math.max(i, 0), o), i = e > 0 ? Math.ceil(i) : Math.floor(i), D.css({
                                top: i + "px"
                            })), g = parseInt(D.css("top")) / (w.outerHeight() - D.outerHeight()), i = g * (w[0].scrollHeight - w.outerHeight()), n) {
                            var a = (i = e) / w[0].scrollHeight * w.outerHeight();
                            a = Math.min(Math.max(a, 0), o), D.css({
                                top: a + "px"
                            })
                        }
                        w.scrollTop(i), w.trigger("slimscrolling", ~~i), s(), l()
                    }

                    function a() {
                        p = Math.max(w.outerHeight() / w[0].scrollHeight * w.outerHeight(), y), D.css({
                            height: p + "px"
                        });
                        var e = p == w.outerHeight() ? "none" : "block";
                        D.css({
                            display: e
                        })
                    }

                    function s() {
                        if (a(), clearTimeout(f), g == ~~g) {
                            if (b = r.allowPageScroll, m != g) {
                                var e = 0 == ~~g ? "top" : "bottom";
                                w.trigger("slimscroll", e)
                            }
                        } else b = !1;
                        m = g, p >= w.outerHeight() ? b = !0 : (D.stop(!0, !0).fadeIn("fast"), r.railVisible && T.stop(!0, !0).fadeIn("fast"))
                    }

                    function l() {
                        r.alwaysVisible || (f = setTimeout(function() {
                            r.disableFadeOut && c || u || d || (D.fadeOut("slow"), T.fadeOut("slow"))
                        }, 1e3))
                    }
                    var c, u, d, f, h, p, g, m, v = "<div></div>",
                        y = 30,
                        b = !1,
                        w = e(this);
                    if (w.parent().hasClass(r.wrapperClass)) {
                        var x = w.scrollTop();
                        if (D = w.closest("." + r.barClass), T = w.closest("." + r.railClass), a(), e.isPlainObject(n)) {
                            if ("height" in n && "auto" == n.height) {
                                w.parent().css("height", "auto"), w.css("height", "auto");
                                var S = w.parent().parent().height();
                                w.parent().css("height", S), w.css("height", S)
                            }
                            if ("scrollTo" in n) x = parseInt(r.scrollTo);
                            else if ("scrollBy" in n) x += parseInt(r.scrollBy);
                            else if ("destroy" in n) return D.remove(), T.remove(), void w.unwrap();
                            o(x, !1, !0)
                        }
                    } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                        r.height = "auto" == r.height ? w.parent().height() : r.height;
                        var C = e(v).addClass(r.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: r.width,
                            height: r.height
                        });
                        w.css({
                            overflow: "hidden",
                            width: r.width,
                            height: r.height
                        });
                        var T = e(v).addClass(r.railClass).css({
                                width: r.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: r.alwaysVisible && r.railVisible ? "block" : "none",
                                "border-radius": r.railBorderRadius,
                                background: r.railColor,
                                opacity: r.railOpacity,
                                zIndex: 90
                            }),
                            D = e(v).addClass(r.barClass).css({
                                background: r.color,
                                width: r.size,
                                position: "absolute",
                                top: 0,
                                opacity: r.opacity,
                                display: r.alwaysVisible ? "block" : "none",
                                "border-radius": r.borderRadius,
                                BorderRadius: r.borderRadius,
                                MozBorderRadius: r.borderRadius,
                                WebkitBorderRadius: r.borderRadius,
                                zIndex: 99
                            }),
                            _ = "right" == r.position ? {
                                right: r.distance
                            } : {
                                left: r.distance
                            };
                        T.css(_), D.css(_), w.wrap(C), w.parent().append(D), w.parent().append(T), r.railDraggable && D.bind("mousedown", function(n) {
                                var i = e(document);
                                return d = !0, t = parseFloat(D.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function(e) {
                                    currTop = t + e.pageY - pageY, D.css("top", currTop), o(0, D.position().top, !1)
                                }), i.bind("mouseup.slimscroll", function(e) {
                                    d = !1, l(), i.unbind(".slimscroll")
                                }), !1
                            }).bind("selectstart.slimscroll", function(e) {
                                return e.stopPropagation(), e.preventDefault(), !1
                            }), T.hover(function() {
                                s()
                            }, function() {
                                l()
                            }), D.hover(function() {
                                u = !0
                            }, function() {
                                u = !1
                            }), w.hover(function() {
                                c = !0, s(), l()
                            }, function() {
                                c = !1, l()
                            }), w.bind("touchstart", function(e, t) {
                                e.originalEvent.touches.length && (h = e.originalEvent.touches[0].pageY)
                            }), w.bind("touchmove", function(e) {
                                b || e.originalEvent.preventDefault(), e.originalEvent.touches.length && (o((h - e.originalEvent.touches[0].pageY) / r.touchScrollStep, !0), h = e.originalEvent.touches[0].pageY)
                            }), a(), "bottom" === r.start ? (D.css({
                                top: w.outerHeight() - D.outerHeight()
                            }), o(0, !0)) : "top" !== r.start && (o(e(r.start).position().top, null, !0), r.alwaysVisible || D.hide()),
                            function(e) {
                                window.addEventListener ? (e.addEventListener("DOMMouseScroll", i, !1), e.addEventListener("mousewheel", i, !1)) : document.attachEvent("onmousewheel", i)
                            }(this)
                    }
                }), this
            }
        }), e.fn.extend({
            slimscroll: e.fn.slimScroll
        })
    }(jQuery),
    function(e) {
        "use strict";
        var t = function() {
            this.$body = e("body"), this.$openLeftBtn = e(".open-left"), this.$menuItem = e("#sidebar-menu a")
        };
        t.prototype.openLeftBar = function() {
            e("#wrapper").toggleClass("enlarged"), e("#wrapper").addClass("forced"), e("#wrapper").hasClass("enlarged") && e("body").hasClass("fixed-left") ? e("body").removeClass("fixed-left").addClass("fixed-left-void") : !e("#wrapper").hasClass("enlarged") && e("body").hasClass("fixed-left-void") && e("body").removeClass("fixed-left-void").addClass("fixed-left"), e("#wrapper").hasClass("enlarged") ? e(".left ul").removeAttr("style") : e(".subdrop").siblings("ul:first").show(), toggle_slimscroll(".slimscrollleft"), e("body").trigger("resize")
        }, t.prototype.menuItemClick = function(t) {
            e("#wrapper").hasClass("enlarged") || (e(this).parent().hasClass("has_sub") && t.preventDefault(), e(this).hasClass("subdrop") ? e(this).hasClass("subdrop") && (e(this).removeClass("subdrop"), e(this).next("ul").slideUp(350), e(".pull-right i", e(this).parent()).removeClass("md-remove").addClass("md-add")) : (e("ul", e(this).parents("ul:first")).slideUp(350), e("a", e(this).parents("ul:first")).removeClass("subdrop"), e("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add"), e(this).next("ul").slideDown(350), e(this).addClass("subdrop"), e(".pull-right i", e(this).parents(".has_sub:last")).removeClass("md-add").addClass("md-remove"), e(".pull-right i", e(this).siblings("ul")).removeClass("md-remove").addClass("md-add")))
        }, t.prototype.init = function() {
            var t = this;
            e(".open-left").click(function(e) {
                e.stopPropagation(), t.openLeftBar()
            }), t.$menuItem.on("click", t.menuItemClick), e("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click")
        }, e.Sidemenu = new t, e.Sidemenu.Constructor = t
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function() {
            this.$body = e("body"), this.$fullscreenBtn = e("#btn-fullscreen")
        };
        t.prototype.launchFullscreen = function(e) {
            e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
        }, t.prototype.exitFullscreen = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }, t.prototype.toggle_fullscreen = function() {
            var e = this;
            (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled) && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? e.exitFullscreen() : e.launchFullscreen(document.documentElement))
        }, t.prototype.init = function() {
            var e = this;
            e.$fullscreenBtn.on("click", function() {
                e.toggle_fullscreen()
            })
        }, e.FullScreen = new t, e.FullScreen.Constructor = t
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function() {
            this.VERSION = "1.1.0", this.AUTHOR = "Coderthemes", this.SUPPORT = "coderthemes@gmail.com", this.pageScrollElement = "html, body", this.$body = e("body")
        };
        t.prototype.onDocReady = function(t) {
            FastClick.attach(document.body), resizefunc.push("initscrolls"), resizefunc.push("changeptype"), e(".animate-number").each(function() {
                e(this).animateNumbers(e(this).attr("data-value"), !0, parseInt(e(this).attr("data-duration")))
            }), e(window).resize(debounce(resizeitems, 100)), e("body").trigger("resize"), e(".right-bar-toggle").on("click", function(t) {
                t.preventDefault(), e("#wrapper").toggleClass("right-bar-enabled")
            })
        }, t.prototype.init = function() {
            var t = this;
            e(document).ready(t.onDocReady), e.Sidemenu.init(), e.FullScreen.init()
        }, e.App = new t, e.App.Constructor = t
    }(window.jQuery),
    function(e) {
        "use strict";
        e.App.init()
    }(window.jQuery);
var toggle_fullscreen = function() {},
    w, h, dw, dh, changeptype = function() {
        w = $(window).width(), h = $(window).height(), dw = $(document).width(), dh = $(document).height(), !0 === jQuery.browser.mobile && $("body").addClass("mobile").removeClass("fixed-left"), $("#wrapper").hasClass("forced") || (w > 990 ? ($("body").removeClass("smallscreen").addClass("widescreen"), $("#wrapper").removeClass("enlarged")) : ($("body").removeClass("widescreen").addClass("smallscreen"), $("#wrapper").addClass("enlarged"), $(".left ul").removeAttr("style")), $("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left") ? $("body").removeClass("fixed-left").addClass("fixed-left-void") : !$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void") && $("body").removeClass("fixed-left-void").addClass("fixed-left")), toggle_slimscroll(".slimscrollleft")
    },
    debounce = function(e, t, n) {
        var i, r;
        return function() {
            var o = this,
                a = arguments,
                s = function() {
                    i = null, n || (r = e.apply(o, a))
                },
                l = n && !i;
            return clearTimeout(i), i = setTimeout(s, t), l && (r = e.apply(o, a)), r
        }
    },
    wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 50,
        mobile: !1
    });
wow.init(), window.jQuery && function(e) {
    "use strict";

    function t(e) {
        return e > 1048576 ? (e / 1048576).toFixed(1) + "Mb" : 1024 == e ? "1Mb" : (e / 1024).toFixed(1) + "Kb"
    }

    function n(e) {
        return (e.files && e.files.length ? e.files : null) || [{
            name: e.value,
            size: 0,
            type: ((e.value || "").match(/[^\.]+$/i) || [""])[0]
        }]
    }
    e.fn.MultiFile = function(i) {
        if (0 == this.length) return this;
        if ("string" == typeof arguments[0]) {
            if (this.length > 1) {
                var r = arguments;
                return this.each(function() {
                    e.fn.MultiFile.apply(e(this), r)
                })
            }
            return e.fn.MultiFile[arguments[0]].apply(this, e.makeArray(arguments).slice(1) || [])
        }
        "number" == typeof i && (i = {
            max: i
        });
        var i = e.extend({}, e.fn.MultiFile.options, i || {});
        e("form").not("MultiFile-intercepted").addClass("MultiFile-intercepted").submit(e.fn.MultiFile.disableEmpty), e.fn.MultiFile.options.autoIntercept && (e.fn.MultiFile.intercept(e.fn.MultiFile.options.autoIntercept), e.fn.MultiFile.options.autoIntercept = null), this.not(".MultiFile-applied").addClass("MultiFile-applied").each(function() {
            window.MultiFile = (window.MultiFile || 0) + 1;
            var r = window.MultiFile,
                o = {
                    e: this,
                    E: e(this),
                    clone: e(this).clone()
                },
                a = e.extend({}, e.fn.MultiFile.options, i || {}, (e.metadata ? o.E.metadata() : e.meta ? o.E.data() : null) || {}, {});
            a.max > 0 || (a.max = o.E.attr("maxlength")), a.max > 0 || (a.max = (String(o.e.className.match(/\b(max|limit)\-([0-9]+)\b/gi) || [""]).match(/[0-9]+/gi) || [""])[0], a.max > 0 ? a.max = String(a.max).match(/[0-9]+/gi)[0] : a.max = -1), a.max = new Number(a.max), a.accept = a.accept || o.E.attr("accept") || "", a.accept || (a.accept = o.e.className.match(/\b(accept\-[\w\|]+)\b/gi) || "", a.accept = new String(a.accept).replace(/^(accept|ext)\-/i, "")), a.maxsize = a.maxsize > 0 ? a.maxsize : o.E.data("maxsize") || 0, a.maxsize > 0 || (a.maxsize = (String(o.e.className.match(/\b(maxsize|maxload|size)\-([0-9]+)\b/gi) || [""]).match(/[0-9]+/gi) || [""])[0], a.maxsize > 0 ? a.maxsize = String(a.maxsize).match(/[0-9]+/gi)[0] : a.maxsize = -1), a.maxfile = a.maxfile > 0 ? a.maxfile : o.E.data("maxfile") || 0, a.maxfile > 0 || (a.maxfile = (String(o.e.className.match(/\b(maxfile|filemax)\-([0-9]+)\b/gi) || [""]).match(/[0-9]+/gi) || [""])[0], a.maxfile > 0 ? a.maxfile = String(a.maxfile).match(/[0-9]+/gi)[0] : a.maxfile = -1), a.maxfile > 1 && (a.maxfile = 1024 * a.maxfile), a.maxsize > 1 && (a.maxsize = 1024 * a.maxsize), !1 !== a.multiple && a.max > 1 && o.E.attr("multiple", "multiple").prop("multiple", !0), e.extend(o, a || {}), o.STRING = e.extend({}, e.fn.MultiFile.options.STRING, o.STRING), e.extend(o, {
                n: 0,
                slaves: [],
                files: [],
                instanceKey: o.e.id || "MultiFile" + String(r),
                generateID: function(e) {
                    return o.instanceKey + (e > 0 ? "_F" + String(e) : "")
                },
                trigger: function(t, i, r, o) {
                    var a, s = r[t] || r["on" + t];
                    if (s) return o = o || r.files || n(this), e.each(o, function(e, t) {
                        a = s.apply(r.wrapper, [i, t.name, r, t])
                    }), a
                }
            }), String(o.accept).length > 1 && (o.accept = o.accept.replace(/\W+/g, "|").replace(/^\W|\W$/g, ""), o.rxAccept = new RegExp("\\.(" + (o.accept ? o.accept : "") + ")$", "gi")), o.wrapID = o.instanceKey, o.E.wrap('<div class="MultiFile-wrap" id="' + o.wrapID + '"></div>'), o.wrapper = e("#" + o.wrapID), o.e.name = o.e.name || "file" + r + "[]", o.list || (o.wrapper.append('<div class="MultiFile-list" id="' + o.wrapID + '_list"></div>'), o.list = e("#" + o.wrapID + "_list")), o.list = e(o.list), o.addSlave = function(i, a) {
                o.n++, i.MultiFile = o, i.id = i.name = "", i.id = o.generateID(a), i.name = String(o.namePattern.replace(/\$name/gi, e(o.clone).attr("name")).replace(/\$id/gi, e(o.clone).attr("id")).replace(/\$g/gi, r).replace(/\$i/gi, a));
                var s;
                o.max > 0 && o.files.length > o.max && (i.disabled = !0, s = !0), o.current = i, (i = e(i)).val("").attr("value", "")[0].value = "", i.addClass("MultiFile-applied"), i.change(function(r, s, l) {
                    e(this).blur();
                    var c = this,
                        u = o.files || [],
                        d = this.files || [{
                            name: this.value,
                            size: 0,
                            type: ((this.value || "").match(/[^\.]+$/i) || [""])[0]
                        }],
                        f = [],
                        h = 0,
                        p = o.total_size || 0,
                        g = [];
                    e.each(d, function(e, t) {
                        f[f.length] = t
                    }), o.trigger("FileSelect", this, o, f), e.each(d, function(i, r) {
                        var a = r.name.replace(/^C:\\fakepath\\/gi, ""),
                            s = r.size,
                            l = function(e) {
                                return e.replace("$ext", String(a.match(/[^\.]+$/i) || "")).replace("$file", a.match(/[^\/\\]+$/gi)).replace("$size", t(s) + " > " + t(o.maxfile))
                            };
                        o.accept && a && !a.match(o.rxAccept) && (g[g.length] = l(o.STRING.denied), o.trigger("FileInvalid", this, o, [r])), e(o.wrapper).find("input[type=file]").not(c).each(function() {
                            e.each(n(this), function(e, t) {
                                if (t.name) {
                                    var n = (t.name || "").replace(/^C:\\fakepath\\/gi, "");
                                    a != n && a != n.substr(n.length - a.length) || (g[g.length] = l(o.STRING.duplicate), o.trigger("FileDuplicate", c, o, [t]))
                                }
                            })
                        }), o.maxfile > 0 && s > 0 && s > o.maxfile && (g[g.length] = l(o.STRING.toobig), o.trigger("FileTooBig", this, o, [r]));
                        var u = o.trigger("FileValidate", this, o, [r]);
                        u && "" != u && (g[g.length] = l(u)), h += r.size
                    }), p += h, f.size = h, f.total = p, f.total_length = f.length + u.length, o.max > 0 && u.length + d.length > o.max && (g[g.length] = o.STRING.toomany.replace("$max", o.max), o.trigger("FileTooMany", this, o, f)), o.maxsize > 0 && p > o.maxsize && (g[g.length] = o.STRING.toomuch.replace("$size", t(p) + " > " + t(o.maxsize)), o.trigger("FileTooMuch", this, o, f));
                    var m = e(o.clone).clone();
                    if (m.addClass("MultiFile"), g.length > 0) return o.error(g.join("\n\n")), o.n--, o.addSlave(m[0], a), i.parent().prepend(m), i.remove(), !1;
                    o.total_size = p, (d = u.concat(f)).size = p, d.size_label = t(p), o.files = d, e(this).css({
                        position: "absolute",
                        top: "-3000px"
                    }), i.after(m), o.addSlave(m[0], a + 1), o.addToList(this, a, f), o.trigger("afterFileSelect", this, o, f)
                }), e(i).data("MultiFile-wrap", o.wrapper), e(o.wrapper).data("MultiFile", o), s && e(i).attr("disabled", "disabled").prop("disabled", !0)
            }, o.addToList = function(i, r, a) {
                o.trigger("FileAppend", i, o, a);
                var s = e("<span/>");
                e.each(a, function(n, r) {
                    var a = String(r.name || "").replace(/[&<>'"]/g, function(e) {
                            return "&#" + e.charCodeAt() + ";"
                        }),
                        l = o.STRING,
                        c = l.label || l.file || l.name,
                        u = l.title || l.tooltip || l.selected,
                        d = "image/" == r.type.substr(0, 6) ? '<img class="MultiFile-preview" style="' + o.previewCss + '"/>' : "",
                        f = e(('<span class="MultiFile-label" title="' + u + '"><span class="MultiFile-title">' + c + "</span>" + (o.preview || e(i).is(".with-preview") ? d : "") + "</span>").replace(/\$(file|name)/gi, (a.match(/[^\/\\]+$/gi) || [a])[0]).replace(/\$(ext|extension|type)/gi, (a.match(/[^\.]+$/gi) || [""])[0]).replace(/\$(size)/gi, t(r.size || 0)).replace(/\$(preview)/gi, d).replace(/\$(i)/gi, n));
                    f.find("img.MultiFile-preview").each(function() {
                        var e = this,
                            t = new FileReader;
                        t.readAsDataURL(r), t.onload = function(t) {
                            e.src = t.target.result
                        }
                    }), n > 0 && s.append(", "), s.append(f);
                    a = String(r.name || "");
                    s[s.length] = ('<span class="MultiFile-title" title="' + o.STRING.selected + '">' + o.STRING.file + "</span>").replace(/\$(file|name)/gi, (a.match(/[^\/\\]+$/gi) || [a])[0]).replace(/\$(ext|extension|type)/gi, (a.match(/[^\.]+$/gi) || [""])[0]).replace(/\$(size)/gi, t(r.size || 0)).replace(/\$(i)/gi, n)
                });
                var l = e('<div class="MultiFile-label"></div>'),
                    c = e('<a class="MultiFile-remove" href="#' + o.wrapID + '">' + o.STRING.remove + "</a>").click(function() {
                        var r = n(i);
                        o.trigger("FileRemove", i, o, r), o.n--, o.current.disabled = !1, e(i).remove(), e(this).parent().remove(), e(o.current).css({
                            position: "",
                            top: ""
                        }), e(o.current).reset().val("").attr("value", "")[0].value = "";
                        var a = [],
                            s = 0;
                        return e(o.wrapper).find("input[type=file]").each(function() {
                            e.each(n(this), function(e, t) {
                                t.name && (a[a.length] = t, s += t.size)
                            })
                        }), o.files = a, o.total_size = s, o.size_label = t(s), e(o.wrapper).data("MultiFile", o), o.trigger("afterFileRemove", i, o, r), o.trigger("FileChange", o.current, o, a), !1
                    });
                o.list.append(l.append(c, " ", s)), o.trigger("afterFileAppend", i, o, a), o.trigger("FileChange", i, o, o.files)
            }, o.MultiFile || o.addSlave(o.e, 0), o.n++
        })
    }, e.extend(e.fn.MultiFile, {
        data: function() {
            var t = e(this),
                n = t.is(".MultiFile-wrap") ? t : t.data("MultiFile-wrap");
            if (!n || !n.length) return !console.error("Could not find MultiFile control wrapper");
            var i = n.data("MultiFile");
            return i ? i || {} : !console.error("Could not find MultiFile data in wrapper")
        },
        reset: function() {
            var t = this.MultiFile("data");
            return t && e(t.list).find("a.MultiFile-remove").click(), e(this)
        },
        files: function() {
            var e = this.MultiFile("data");
            return e ? e.files || [] : !console.log("MultiFile plugin not initialized")
        },
        size: function() {
            var e = this.MultiFile("data");
            return e ? e.total_size || 0 : !console.log("MultiFile plugin not initialized")
        },
        count: function() {
            var e = this.MultiFile("data");
            return e ? e.files ? e.files.length || 0 : 0 : !console.log("MultiFile plugin not initialized")
        },
        disableEmpty: function(t) {
            t = ("string" == typeof t ? t : "") || "mfD";
            var n = [];
            return e("input:file.MultiFile").each(function() {
                "" == e(this).val() && (n[n.length] = this)
            }), window.clearTimeout(e.fn.MultiFile.reEnableTimeout), e.fn.MultiFile.reEnableTimeout = window.setTimeout(e.fn.MultiFile.reEnableEmpty, 500), e(n).each(function() {
                this.disabled = !0
            }).addClass(t)
        },
        reEnableEmpty: function(t) {
            return t = ("string" == typeof t ? t : "") || "mfD", e("input:file." + t).removeClass(t).each(function() {
                this.disabled = !1
            })
        },
        intercepted: {},
        intercept: function(t, n, i) {
            var r, o;
            if ((i = i || []).constructor.toString().indexOf("Array") < 0 && (i = [i]), "function" == typeof t) return e.fn.MultiFile.disableEmpty(), o = t.apply(n || window, i), setTimeout(function() {
                e.fn.MultiFile.reEnableEmpty()
            }, 1e3), o;
            t.constructor.toString().indexOf("Array") < 0 && (t = [t]);
            for (var a = 0; a < t.length; a++)(r = t[a] + "") && function(t) {
                e.fn.MultiFile.intercepted[t] = e.fn[t] || function() {}, e.fn[t] = function() {
                    return e.fn.MultiFile.disableEmpty(), o = e.fn.MultiFile.intercepted[t].apply(this, arguments), setTimeout(function() {
                        e.fn.MultiFile.reEnableEmpty()
                    }, 1e3), o
                }
            }(r)
        }
    }), e.fn.MultiFile.options = {
        accept: "",
        max: -1,
        maxfile: -1,
        maxsize: -1,
        namePattern: "$name",
        preview: !1,
        previewCss: "max-height:100px; max-width:100px;",
        STRING: {
            remove: "x",
            denied: "You cannot select a $ext file.\nTry again...",
            file: "$file",
            selected: "File selected: $file",
            duplicate: "This file has already been selected:\n$file",
            toomuch: "The files selected exceed the maximum size permited ($size)",
            toomany: "Too many files selected (max: $max)",
            toobig: "$file is too big (max $size)"
        },
        autoIntercept: ["submit", "ajaxSubmit", "ajaxForm", "validate", "valid"],
        error: function(e) {
            "undefined" != typeof console && console.log(e), alert(e)
        }
    }, e.fn.reset = e.fn.reset || function() {
        return this.each(function() {
            try {
                this.reset()
            } catch (e) {}
        })
    }, e(function() {
        e("input[type=file].multi").MultiFile()
    })
}(jQuery);