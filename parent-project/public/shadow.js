! function e(t, n, r) {
    function a(u, l) {
        if (!n[u]) {
            if (!t[u]) { var i = "function" == typeof require && require; if (!l && i) return i(u, !0); if (o) return o(u, !0); var f = new Error("Cannot find module '" + u + "'"); throw f.code = "MODULE_NOT_FOUND", f }
            var s = n[u] = { g: {} };
            t[u][0].call(s.g, function(e) { var n = t[u][1][e]; return a(n ? n : e) }, s, s.g, e, t, n, r)
        }
        return n[u].g
    }
    for (var o = "function" == typeof require && require, u = 0; u < r.length; u++) a(r[u]);
    return a
}({
    1: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a() {
            var e = {};
            e.h = Document.prototype.createElement, e.i = Document.prototype.createElementNS, e.j = f(), e.k = new b, Object.defineProperty(window, Y, { value: e.k, l: !1, m: !0, o: !0 }), Document.prototype.createElement = h, Document.prototype.createElementNS = m, "loading" === window.document.readyState ? window.document.addEventListener(Q, c, { once: !0 }) : c(), e.p = [], e.q = [], e.s = !1, I(window, e)
        }

        function o() {
            var e = C(window);
            e && (s(e.j), delete window[Y], Document.prototype.createElement = e.h, Document.prototype.createElementNS = e.i, I(window, void 0))
        }

        function u() { return null != C(window) }

        function l() {
            for (var e = [], t = Object.getOwnPropertyNames(window), n = 0; n < t.length; n++) {
                var r = t[n];
                if (!/^webkit/.test(r)) {
                    var a = window[r];
                    (a && a instanceof H || a === H) && e.push({ name: r, object: a, constructor: a.prototype.constructor })
                }
            }
            return e
        }

        function i() {
            try {
                new Function("return class {}");
                for (var e = new Function("nativeHTMLElement", "return function(){const newTarget=new.target||this.constructor;return Reflect.construct(nativeHTMLElement, [], newTarget);}"), t = l(), n = 0; n < t.length; n++) {
                    var r = t[n],
                        a = r.name,
                        o = r.object,
                        u = e(o);
                    u.prototype = o.prototype, Object.defineProperty(o.prototype, ee, { value: u, l: !0, m: !0 }), window[a] = u
                }
            } catch (e) { return }
        }

        function f() {
            for (var e = l(), t = 0; t < e.length; t++) {
                var n = e[t],
                    r = n.name,
                    a = n.object,
                    o = d();
                o.prototype = a.prototype, Object.defineProperty(a.prototype, ee, { value: o, l: !0, m: !0 }), window[r] = o
            }
            return e
        }

        function s(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    r = n.name,
                    a = n.object,
                    o = n.constructor;
                Object.defineProperty(a.prototype, ee, { value: o, l: !0, m: !0 }), window[r] = a
            }
        }

        function d() {
            return function e() {
                var t = Object.getPrototypeOf(this),
                    n = window[Y],
                    r = C(n);
                if (t.constructor === e) throw new TypeError("Illegal constructor");
                for (var a = void 0, o = 0; o < r.t.length; o++) { var u = r.t[o]; if (u.constructor === t.constructor) { a = u; break } }
                if (!a) throw new TypeError;
                if (e !== a.u) throw new TypeError("Illegal constructor");
                var l = t,
                    i = a.v;
                if (0 === i.length) {
                    var f = C(window).h,
                        s = f.call(window.document, a.localName);
                    return Object.setPrototypeOf(s, l), I(s, { A: V, B: a }), s
                }
                var d = i.length - 1,
                    c = i[d];
                if (c === Z) throw k.default.C("InvalidStateError", "This element instance is already constructed");
                return Object.setPrototypeOf(c, l), i[d] = Z, c
            }
        }

        function c() {
            var e = [];
            P.default.D(window.document, e.push.bind(e)), e.forEach(T)
        }

        function v(e, t, n, r, a, o) {
            a = a || null;
            var u = null,
                l = E(e, n, t, a);
            if (l && l.name != l.localName) u = C(window).h.call(e, t), I(u, { A: X, B: null, F: a }), o ? g(u, l) : y(u, l);
            else if (l)
                if (o) try { if (u = new l.constructor, !(u instanceof HTMLElement)) throw new TypeError("Illegal constructor"); if (0 !== u.attributes.length || u.hasChildNodes() || u.parentNode || u.ownerDocument !== e || u.namespaceURI !== B || u.localName !== t) { var i = new Error("Invalid state manipulation during custom element construction"); throw i.name = "NotSupportedError", i } } catch (n) { k.default.G(n), u = C(window).h.call(e, t), I(u, { A: q }) } else u = C(window).h.call(e, t), Object.setPrototypeOf(u, HTMLElement.prototype), y(u, l);
                else u = n ? C(window).i.call(e, n, t) : C(window).h.call(e, t);
            return u
        }

        function h(e, t) {
            var n = null;
            e = e.toLowerCase(), n = B;
            var r = t ? t.is || null : null,
                a = v(this, e, n, null, r, !0);
            return null != r && a.setAttribute(te, r), a
        }

        function m(e, t, n) {
            var r = n ? n.is || null : null,
                a = v(this, t, e, null, r, !0);
            return null != r && a.setAttribute(te, r), a
        }

        function p(e) { if (e.nodeType != Node.ELEMENT_NODE) return !1; var t = C(e); return !!t && t.A === V }

        function N(e) {
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1
            }
            var t = e.length;
            if (t < 2) return !1;
            var n = e.charCodeAt(0);
            if (n < 97 || n > 122) return !1;
            for (var r = !1, a = 1; a < t; a++) {
                var o = e.charCodeAt(a);
                if (!(o >= 97 && o <= 122))
                    if (45 !== o) { if (46 !== o && 95 !== o && 183 !== o && !(o >= 48 && o <= 57)) { if (o < 192) return !1; if (!(o >= 192 && o <= 214 || o >= 216 && o <= 246 || o >= 248 && o <= 893 || o >= 895 && o <= 8191 || o >= 8204 && o <= 8205 || o >= 8255 && o <= 8256 || o >= 8304 && o <= 8591 || o >= 11264 && o <= 12271 || o >= 12289 && o <= 55295 || o >= 63744 && o <= 64975 || o >= 65008 && o <= 65533 || o >= 65536 && o <= 983039)) return !1 } } else r = !0
            }
            return r
        }

        function E(e, t, n, r) { if (t !== B) return null; if (!e.defaultView) return null; for (var a = e.defaultView.customElements, o = C(a), u = 0; u < o.t.length; u++) { var l = o.t[u]; if (l.localName === n && (l.name === n || l.name === r)) return l } return null }

        function b() { I(this, { t: [], H: !1, I: {} }) }

        function g(e, t) {
            var n = C(e);
            if (n) { if (M(n)) return } else n = I(e, { J: [], B: t });
            for (var r = e.attributes, a = 0; a < r.length; a++) {
                var o = r[a],
                    u = [o.localName, null, o.value, o.namespaceURI];
                w(e, $, u), F.default.K(o)
            }
            e.isConnected && w(e, J, []), t.v.push(e);
            var l = null;
            try { var i = new t.constructor; if (i !== e) throw k.default.C("InvalidStateError") } catch (t) { l = t, delete e.prototype, n.A = q, n.B = null, n.J.splice(0, n.J.length) }
            if (t.v.pop(), l) throw l;
            n.A = V
        }

        function T(e) {
            var t = C(e),
                n = null;
            if (t) {
                if (M(t)) return;
                n = t.F
            }
            var r = E(e.ownerDocument, e.namespaceURI, e.localName, n);
            r && g(e, r)
        }

        function O(e) {
            var t = C(e),
                n = null;
            if (t) {
                if (M(t)) return;
                n = t.F
            }
            var r = E(e.ownerDocument, e.namespaceURI, e.localName, n);
            r && y(e, r)
        }

        function j(e) {
            var t = C(window);
            if (t) {
                var n = t.p;
                if (0 === n.length) {
                    if (t.q.push(e), t.s) return;
                    t.s = !0, L.default.L(function() { _(t.q), t.s = !1 })
                } else n[n.length - 1].push(e)
            }
        }

        function w(e, t, n) {
            var r = C(e),
                a = r.B,
                o = a.M[t];
            if (null != o) {
                if (t === $) { var u = n[0]; if (a.observedAttributes.indexOf(u) === -1) return }
                r.J || (r.J = []), r.J.push({ type: W, N: o, O: n }), j(e)
            }
        }

        function y(e, t) {
            var n = C(e) || I(e, { J: [] });
            n.B = t, n.J.push({ type: G, P: t }), j(e)
        }

        function _(e) {
            for (var t = 0; t < e.length; t++)
                for (var n = e[t], r = C(n).J; r.length;) try {
                    var a = r.splice(0, 1),
                        o = a[0];
                    switch (o.type) {
                        case G:
                            g(n, o.P);
                            break;
                        case W:
                            o.N.apply(n, o.O)
                    }
                } catch (e) { k.default.G(e) }
        }

        function D(e) {
            var t = C(window);
            if (t) {
                var n = t.p;
                n.push([]);
                var r = e();
                return _(n.pop()), r
            }
            return e()
        }

        function M(e) { return e && (e.A === V || e.A === q) }

        function S(e, t) { var n = e[t]; return n && "function" == typeof n ? n : null }

        function C(e) { return e.R }

        function I(e, t) { return e.R = t }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var x = e("./dom.js"),
            P = r(x),
            A = e("./microtask.js"),
            L = r(A),
            R = e("./utils.js"),
            k = r(R),
            U = e("./interfaces/Attr.js"),
            F = r(U),
            H = window.HTMLElement,
            B = "http://www.w3.org/1999/xhtml",
            Z = 1,
            G = 1,
            W = 2,
            q = "failed",
            V = "custom",
            X = "undefined",
            Y = "customElements",
            J = "connectedCallback",
            K = "disconnectedCallback",
            z = "adoptedCallback",
            $ = "attributeChangedCallback",
            Q = "DOMContentLoaded",
            ee = "constructor",
            te = "is",
            ne = Y in window,
            re = "Promise" in window;
        n.default = { S: ne, T: a, U: o, V: u, W: i, X: p, Y: O, Z: D, $: N }, P.default._(function(e) { e.isConnected && (p(e) ? w(e, J, []) : O(e)) }), P.default.aa(function(e, t) { p(e) && w(e, K, []) }), P.default.ba(function(e, t, n) { p(e) && w(e, z, [t, n]) }), P.default.ca(function(e) { O(e) }), P.default.da(function(e, t, n, r, a) {
            if (p(e)) {
                var o = [t, n, r, a];
                w(e, $, o)
            }
        }), b.prototype = {
            define: function(e, t, n) {
                var r = this;
                D(function() {
                    var a = C(r);
                    if (t !== t.prototype.constructor) throw new TypeError("The passed argument must be a constructor");
                    if (!N(e)) throw k.default.C("SyntaxError");
                    var o = e,
                        u = n ? n.extends : null,
                        l = window.HTMLElement;
                    if (null != u) {
                        if (N(u)) throw k.default.C("NotSupportedError");
                        o = u, l = Object.getPrototypeOf(testElement).constructor
                    }
                    if (a.H) throw k.default.C("NotSupportedError");
                    a.H = !0;
                    var i = null,
                        f = [],
                        s = void 0;
                    try {
                        var d = t.prototype;
                        if (!(d instanceof Object)) throw new TypeError("Invalid prototype");
                        if (s = {}, s[J] = S(d, J), s[K] = S(d, K), s[z] = S(d, z), s[$] = S(d, $), s[$]) {
                            var c = t.observedAttributes;
                            c && (f = c.slice())
                        }
                    } catch (e) { i = e }
                    if (a.H = !1, i) throw i;
                    var v = { name: e, localName: o, constructor: t, observedAttributes: f, M: s, v: [], u: l };
                    a.t.push(v);
                    var h = window.document;
                    "loading" !== h.readyState && P.default.D(h, function(e) {
                        if (e.nodeType === Node.ELEMENT_NODE && e.namespaceURI === B && e.localName === o) {
                            if (u) { var t = C(e); if (t.F !== u) return }
                            y(e, v)
                        }
                    });
                    var m = a.I[e];
                    m && L.default.L(function() { m.resolve(), a.I[e] = null })
                })
            },
            get: function(e) { for (var t = C(this), n = 0; n < t.t.length; n++) { var r = t.t[n]; if (r.name === e) return r.constructor } },
            whenDefined: function(e) { if (!re) throw new Error("Please include a promise polyfill."); if (!N(e)) throw k.default.C("SyntaxError", "Invalid custom element name"); for (var t = C(this), n = 0; n < t.t.length; n++) { var r = t.t[n]; if (e === r.name) return Promise.resolve() } var a = t.I[e]; return a || (a = { ea: null, resolve: null }, a.ea = new Promise(function(e, t) { a.resolve = e }), t.I[e] = a), a.ea }
        }
    }, { "./dom.js": 2, "./interfaces/Attr.js": 3, "./microtask.js": 19, "./utils.js": 28 }],
    2: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e) { fe.push(e) }

        function o(e) { se.push(e) }

        function u(e) { de.push(e) }

        function l(e) { ce.push(e) }

        function i(e) { ve.push(e) }

        function f(e, t) {
            t(e);
            var n = null,
                r = null;
            (n = ue.default.fa(e)) && (r = n.shadowRoot) && f(r, t);
            for (var a = e.childNodes, o = 0; o < a.length; o++) f(a[o], t)
        }

        function s(e, t, n) {
            n(e) && (t[t.length] = e);
            var r = e.firstChild;
            r && s(r, t, n);
            var a = e.nextSibling;
            a && s(a, t, n)
        }

        function d(e, t) { if (t(e)) return e; var n = e.firstChild; if (n) { var r = d(n, t); if (r) return r } var a = e.nextSibling; return a ? d(a, t) : null }

        function c(e) { return e.nodeName === Ue }

        function v(e) { return e.localName === Fe }

        function h(e) { return e instanceof Element || e instanceof Text }

        function m(e, t) {
            var n = t.tagName,
                r = 0;
            switch (n) {
                case "TABLE":
                    e = "<TABLE>" + e + "</TABLE>", r = 1;
                    break;
                case "COLGROUP":
                case "TBODY":
                case "THEAD":
                case "TFOOT":
                    e = "<TABLE><" + n + ">" + e + "</" + n + "></TABLE>", r = 2;
                    break;
                case "TR":
                    e = "<TABLE><TBODY><TR>" + e + "</TR></TBODY></TABLE>", r = 3;
                    break;
                default:
                    e = "<BODY>" + e + "</BODY>"
            }
            for (var a = He.parseFromString(e, "text/html").body, o = 0; o < r && a.firstChild; o++) a = a.firstChild;
            for (var u = void 0; u = a.firstChild;) Ee.value.call(Be, u);
            return Be
        }

        function p(e) {
            function t(e, t) { return e && e.length ? (e = e.replace("&", "&amp;"), e = e.replace(" ", "&nbsp;"), t ? e = e.replace('"', "&quot;") : (e = e.replace("<", "&lt;"), e = e.replace(">", "&gt;")), e) : we }

            function n(e) {
                var t = e.namespaceURI,
                    n = e.localName;
                if (!t) return n;
                switch (t) {
                    case Pe:
                        return "xml:" + n;
                    case Ae:
                        return "xmlns" === n ? n : "xmlns:" + n;
                    case Le:
                        return "xlink:" + n;
                    default:
                        return e.name
                }
            }
            var r = we;
            if ("template" === e.localName) {
                var a = e.content;
                a && (e = a)
            }
            for (var o = e.childNodes, u = 0; u < o.length; u++) {
                var l = o[u];
                switch (l.nodeType) {
                    case Node.ELEMENT_NODE:
                        var i = void 0;
                        switch (l.namespaceURI) {
                            case Ce:
                            case Ie:
                            case xe:
                                i = l.localName;
                                break;
                            default:
                                i = l.ga
                        }
                        r += "<" + i;
                        for (var f = l.attributes, s = 0; s < f.length; s++) {
                            var d = f[s];
                            r += " " + n(d), r += '="' + t(d.value) + '"'
                        }
                        switch (r += ">", l.localName) {
                            case "area":
                            case "base":
                            case "basefont":
                            case "bgsound":
                            case "br":
                            case "col":
                            case "embed":
                            case "frame":
                            case "hr":
                            case "img":
                            case "input":
                            case "keygen":
                            case "link":
                            case "meta":
                            case "param":
                            case "source":
                            case "track":
                            case "wbr":
                                continue;
                            case "pre":
                            case "textarea":
                            case "listing":
                                var c = l.firstChild;
                                c && c.nodeType === Node.TEXT_NODE && "\n" === c.data[0] && (r += "\n")
                        }
                        r += p(l), r += "</" + i + ">";
                        break;
                    case Node.TEXT_NODE:
                        switch (l.parentNode.localName) {
                            case "style":
                            case "script":
                            case "xmp":
                            case "iframe":
                            case "noembed":
                            case "noframes":
                            case "plaintext":
                            case "noscript":
                                r += l.data;
                                break;
                            default:
                                r += t(l.data)
                        }
                        break;
                    case Node.COMMENT_NODE:
                        r += "<!--" + l.data + "-->";
                        break;
                    case Node.PROCESSING_INSTRUCTION_NODE:
                        r += "<?" + l.target + " " + l.data + ">";
                        break;
                    case Node.DOCUMENT_TYPE_NODE:
                        r += "<!DOCTYPE " + l.name + ">"
                }
            }
            return r
        }

        function N(e) { for (var t = e, n = t.parentNode; null != n;) t = n, n = t.parentNode; return t }

        function E(e, t) {
            for (var n = e.parentNode; null != n;) {
                if (t === n) return !0;
                n = n.parentNode
            }
            return !1
        }

        function b(e, t) {
            for (var n = t.parentNode; null != n;) {
                if (e === n) return !0;
                n = n.parentNode
            }
            return !1
        }

        function g(e, t) { return e === t || b(e, t) }

        function T(e, t) {
            for (var n = null, r = 0; r < e.length; r++) { var a = e[r]; "string" == typeof a && (e[r] = t.createTextNode(a)) }
            if (1 === e.length) n = e[0];
            else { n = t.createDocumentFragment(); for (var o = 0; o < e.length; o++) n.appendChild(e[o]) }
            return n
        }

        function O(e, t, n) {
            t = t || e.ownerDocument;
            for (var r = be.value.call(e, !1), a = 0; a < ce.length; a++) ce[a](r);
            if (n)
                for (var o = e.childNodes, u = o.length, l = 0; l < u; l++) {
                    var i = O(o[l], t, !0);
                    Ee.value.call(r, i)
                }
            return r
        }

        function j(e, t) {
            var n = e.ownerDocument,
                r = e.parentNode;
            null != r && ae(e, r), t != n && f(e, function(e) { for (var r = 0; r < de.length; r++) de[r](e, n, t) })
        }

        function w(e, t) { if (g(e, t)) return !0; var n = N(t).host; return !(!n || !w(e, n)) }

        function y(e) { var t = N(e); return c(t) && (t = y(t.host)), t }

        function _(e, t) {
            do
                if (e = c(e) ? e.host : e.parentNode, e === t) return !0;
            while (null != e);
            return !1
        }

        function D(e, t) { return _(t, e) }

        function M(e, t) { return e === t || D(e, t) }

        function S(e, t) { var n = N(e); return !!c(n) && (!M(n, t) && !(n.mode !== ke && !S(n.host, t))) }

        function C(e, t) {
            for (var n = void 0; n = N(e);) {
                if (!c(n) || M(n, t)) return e;
                e = n.host
            }
        }

        function I(e, t, n) {
            for (var r = e.localName, a = e.namespaceURI, o = e.value, u = n, l = 0; l < ve.length; l++) ve[l](t, r, o, u, a);
            a ? pe.value.call(t, a, e.prefix + ":" + r, u) : me.value.call(t, r, u)
        }

        function x(e, t) { for (var n = e.localName, r = e.namespaceURI, a = null, o = e.value, u = 0; u < ve.length; u++) ve[u](t, n, a, o, r) }

        function P(e, t) {
            for (var n = e.localName, r = e.namespaceURI, a = e.value, o = null, u = 0; u < ve.length; u++) ve[u](t, n, a, o, r);
            he.value.call(t, r, n)
        }

        function A(e, t, n) { for (var r = e.localName, a = e.namespaceURI, o = e.value, u = t.value, l = 0; l < ve.length; l++) ve[l](n, r, o, u, a) }

        function L(e, t, n) {
            if (null != e.ownerElement && e.ownerElement !== t) throw ue.default.C(ye);
            var r = t.attributes,
                a = r.getNamedItemNS(e.namespaceURI, e.localName);
            return a === e ? e : (Ne.value.call(r, e), a ? A(a, e, t) : x(e, t), a)
        }

        function R(e, t, n, r, a) {
            r = r || null, a = a || null;
            var o = e.attributes,
                u = o.getNamedItemNS(a, t);
            return u ? void I(u, e, n) : (me.value.call(e, t, n), u = o.getNamedItemNS(a, t), void x(u, e))
        }

        function U(e, t) {
            var n = t.attributes,
                r = n.getNamedItem(e);
            return r && P(r, t), r
        }

        function F(e, t, n) {
            var r = n.attributes,
                a = r.getNamedItemNS(e, t);
            return a && P(a, n), a
        }

        function H(e, t, n) {
            if (!(n instanceof Node)) throw new TypeError;
            var r = void 0;
            switch ((t || we).toLowerCase()) {
                case "beforebegin":
                    return (r = e.parentNode) ? $(n, r, e) : null;
                case "afterbegin":
                    return $(n, e, e.firstChild);
                case "beforeend":
                    return $(n, e, null);
                case "afterend":
                    return (r = e.parentNode) ? $(n, r, e.nextSibling) : null;
                default:
                    throw ue.default.C(Me)
            }
        }

        function B(e, t) {
            var n = [],
                r = e.firstChild;
            if (null === r) return n;
            if ("*" === t) return s(r, n, ue.default.ha), n;
            var a = t.toLowerCase();
            return s(r, n, function(e) { return e.nodeType === Node.ELEMENT_NODE && (e.namespaceURI === Ce ? e.localName === a : null !== e.prefix ? e.prefix + ":" + e.localName === t : e.localName === t) }), n
        }

        function Z(e, t, n) {
            var r = [],
                a = e.firstChild;
            return null === a ? r : ("" === t && (t = null), "*" === t && "*" === n ? (s(a, r, ue.default.ha), r) : "*" === t ? (s(a, r, function(e) { return e.nodeType === Node.ELEMENT_NODE && e.localName === n }), r) : "*" === n ? (s(a, r, function(e) { return e.nodeType === Node.ELEMENT_NODE && e.namespaceURI === t }), r) : (s(a, r, function(e) { return e.nodeType === Node.ELEMENT_NODE && e.namespaceURI === t && e.localName === n }), r))
        }

        function G(e, t) {
            var n = [],
                r = e.firstChild;
            if (null === r) return n;
            var a = ue.default.ia(t);
            return null === a ? n : (s(r, n, function(e) { if (e.nodeType !== Node.ELEMENT_NODE) return !1; var t = ue.default.ia(e.className); return null !== t && ue.default.ja(a, t) }), n)
        }

        function W(e, t) { null == e.ownerElement ? Oe.set.call(e, t) : I(e, e.ownerElement, t) }

        function q(e, t) { var n = e.parentNode; if (!n) return null; var r = ue.default.fa(n); if (!r || !r.shadowRoot) return null; if (t === !0 && r.shadowRoot.mode !== Re) return null; if (!r.shadowRoot.firstChild) return null; var a = e instanceof Element ? e.slot : we; return d(r.shadowRoot.firstChild, function(e) { return v(e) && e.name === a }) }

        function V(e) {
            var t = void 0,
                n = N(e);
            if (!c(n)) return [];
            var r = n.host,
                a = r.childNodes;
            t = new Array(a.length);
            for (var o = 0, u = 0; u < a.length; u++) {
                var l = a[u];
                if (l.nodeType === Node.ELEMENT_NODE || l.nodeType === Node.TEXT_NODE) {
                    var i = q(l);
                    i === e && (t[o++] = l)
                }
            }
            return t.length = o, t
        }

        function X(e) {
            var t = [],
                n = V(e);
            if (0 === n.length) {
                var r = e.childNodes,
                    a = r.length;
                n.length = a;
                for (var o = 0, u = 0; u < a; u++) {
                    var l = r[u];
                    l.nodeType !== Node.ELEMENT_NODE && l.nodeType !== Node.TEXT_NODE || (n[o++] = l)
                }
                n.length = o
            }
            for (var i = 0; i < n.length; i++) {
                var f = n[i];
                if (v(f)) {
                    var s = X(f),
                        d = d;
                    t.length += s.length;
                    for (var c = 0; c < s.length; c++) t[d + c] = s[k]
                } else t[t.length] = f
            }
            return t
        }

        function Y(e, t, n) {
            var r = ue.default.fa(e);
            r.assignedSlot = t;
            var a = ue.default.fa(t) || ue.default.ka(t, {}),
                o = a.assignedNodes = a.assignedNodes || [],
                u = o.length;
            if (n || ie.default.la(t), 0 === u) {
                if (o.push(e), !a.childNodes) {
                    a.childNodes = Array.prototype.slice.call(t.childNodes);
                    for (var l = a.childNodes, i = l.length, f = 0; f < i; f++) {
                        var s = l[f],
                            d = ue.default.fa(s) || ue.default.ka(s, {});
                        d.parentNode = t
                    }
                }
                for (var c = a.childNodes, v = c.length, h = 0; h < v; h++) Te.value.call(t, c[h]);
                Ee.value.call(t, e)
            } else {
                for (var m = null, p = 0, N = 0; N < u; N++) {
                    var E = o[N];
                    if (E.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING) break;
                    p++
                }
                o.splice(p, 0, e), ge.value.call(t, e, m)
            }
        }

        function J(e, t, n) {
            var r = ue.default.fa(e);
            r.assignedSlot = null;
            var a = ue.default.fa(t),
                o = a.assignedNodes;
            if (o.splice(o.indexOf(e), 1), n || ie.default.la(t), Te.value.call(t, e), 0 === o.length)
                for (var u = a.childNodes, l = u.length, i = 0; i < l; i++) Ee.value.call(t, u[i])
        }

        function K(e, t) {
            var n = [];
            s(e, n, v);
            for (var r = (n.length, e.host.childNodes), a = r.length, o = 0; o < a; o++) {
                var u = r[o];
                if (h(u)) {
                    for (var l = ue.default.fa(u), i = l.assignedSlot, f = null, d = u instanceof Element ? u.slot : we, c = 0; c < n.length; c++) { var m = n[c]; if (m.name === d) { f = m; break } }
                    if (f !== i) {
                        if (i) {
                            var p = !t || t.indexOf(i) === -1;
                            J(u, i, p)
                        }
                        if (f) {
                            var N = !t || t.indexOf(f) === -1;
                            Y(u, f, N)
                        }
                    }
                }
            }
        }

        function z(e, t, n) { if (w(e, t)) throw ue.default.C(_e); if (null != n && n.parentNode !== t) throw ue.default.C(De) }

        function $(e, t, n) { z(e, t, n); var r = n; return r === e && (r = e.nextSibling), j(e, t.ownerDocument), Q(e, t, r), e }

        function Q(e, t, n, r) {
            ie.default.ma();
            var a = 1,
                o = void 0;
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (o = e.childNodes, a = o.length);
            var u = new Array(a);
            if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                for (var l = 0; l < a; l++) u[l] = o[l];
                if (e === Be)
                    for (var i = 0; i < a; i++) Te.value.call(e, u[i]);
                else {
                    for (var d = 0; d < a; d++) ae(u[d], e, !0);
                    ie.default.na(Se, e, null, null, null, null, u)
                }
            } else u[0] = e;
            for (var m = ue.default.fa(t), p = m ? m.childNodes : null, E = (t.isConnected, c(t)), b = N(t), g = 0; g < a; g++) {
                var T = u[g];
                if (p) {
                    if (n) {
                        var O = p.indexOf(n);
                        p.splice(O, 0, T)
                    } else p.push(T);
                    var j = ue.default.fa(T) || ue.default.ka(T, {});
                    j.parentNode = t, E && ge.value.call(m.host, T, n)
                } else ge.value.call(t, T, n);
                if (m && m.shadowRoot && h(T)) {
                    var w = q(T);
                    w && Y(T, w)
                }
                if (v(t) && 0 === t.assignedNodes().length && ie.default.la(t), c(b)) {
                    var y = v(T) ? [T] : [];
                    s(T, y, v), y.length && K(b, y)
                }
                f(T, function(e) { for (var t = 0; t < fe.length; t++) fe[t](e) })
            }
            if (!r) {
                var _ = n ? n.previousSibling : t.lastChild;
                ie.default.na(Se, t, null, null, null, u, null, _, n)
            }
        }

        function ee(e, t) { return $(e, t, null) }

        function te(e, t, n) {
            if (w(t, n)) throw ue.default.C(_e);
            if (e.parentNode !== n) throw ue.default.C(De);
            var r = e.nextSibling;
            r === t && (r = t.nextSibling);
            var a = e.previousSibling;
            j(t, n.ownerDocument);
            var o = [],
                u = e.parentNode;
            null != u && (o[0] = e, ae(e, n, !0));
            var l = void 0;
            if (t instanceof DocumentFragment) {
                var i = t.childNodes,
                    f = i.length;
                l = new Array(f);
                for (var s = 0; s < f; s++) l[s] = i[s]
            } else l = [t];
            Q(t, n, r, !0), ie.default.na(Se, n, null, null, null, l, o, a, r)
        }

        function ne(e, t) {
            null != e && j(e, t.ownerDocument);
            for (var n = t.childNodes, r = n.length, a = new Array(r), o = 0; o < r; o++) a[o] = n[o];
            var u = void 0;
            if (null == e) u = [];
            else if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                var l = e.childNodes,
                    i = l.length;
                u = new Array(i);
                for (var f = 0; f < i; f++) u[f] = l[f]
            } else u = [e];
            for (var s = 0; s < r; s++) ae(a[s], t, !0);
            null != e && Q(e, t, null, !0), ie.default.na(Se, t, null, null, null, u, a)
        }

        function re(e, t) { if (e.parentNode !== t) throw ue.default.C(De); return ae(e, t), e }

        function ae(e, t, n) {
            ie.default.ma();
            var r = e.previousSibling,
                a = e.nextSibling,
                o = ue.default.fa(e),
                u = ue.default.fa(t);
            if (u && u.childNodes) {
                var l = u.childNodes.indexOf(e);
                u.childNodes.splice(l, 1), o.parentNode = null, c(t) && Te.value.call(t.host, e)
            } else Te.value.call(t, e);
            o && o.assignedSlot && J(e, o.assignedSlot);
            var i = N(t);
            if (c(i)) {
                var d = v(e) ? [e] : [];
                s(e, d, v), d.length && K(i)
            }
            f(e, function(e) { for (var n = 0; n < se.length; n++) se[n](e, t) });
            for (var h = t; h;) {
                var m = ue.default.fa(h);
                if (m && m.oa)
                    for (var p = m.oa, E = p.length, b = 0; b < E; b++) {
                        var g = p[b];
                        if (g.options.subtree) {
                            var T = g.pa,
                                O = g.options,
                                j = ie.default.qa(T, e, O);
                            p.push({ pa: j, options: O })
                        }
                    }
                h = h.parentNode
            }
            n || ie.default.na(Se, t, null, null, null, null, [e], r, a)
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var oe = e("./utils.js"),
            ue = r(oe),
            le = e("./mutation-observers.js"),
            ie = r(le);
        n.default = { _: a, aa: o, ba: u, ca: l, da: i, D: f, ra: s, sa: d, ta: c, ua: m, va: p, root: N, wa: T, clone: O, xa: j, ya: y, za: M, Aa: S, Ba: C, Ca: I, Da: x, removeAttribute: P, setAttribute: L, Ea: R, Fa: U, Ga: F, Ha: H, Ia: B, Ja: Z, Ka: G, La: W, Ma: X, Na: $, Oa: Q, append: ee, replace: te, Pa: ne, Qa: re, remove: ae };
        var fe = [],
            se = [],
            de = [],
            ce = [],
            ve = [],
            he = ue.default.Ra(Element, "removeAttributeNS"),
            me = ue.default.Ra(Element, "setAttribute"),
            pe = ue.default.Ra(Element, "setAttributeNS"),
            Ne = ue.default.Ra(NamedNodeMap, "setNamedItemNS"),
            Ee = ue.default.Ra(Node, "appendChild"),
            be = ue.default.Ra(Node, "cloneNode"),
            ge = ue.default.Ra(Node, "insertBefore"),
            Te = ue.default.Ra(Node, "removeChild"),
            Oe = ue.default.Ra(Attr, "value"),
            je = "name",
            we = "",
            ye = "InUseAttributeError",
            _e = "HierarchyRequestError",
            De = "NotFoundError",
            Me = "SyntaxError",
            Se = "childList",
            Ce = "http://www.w3.org/1999/xhtml",
            Ie = "http://www.w3.org/1998/Math/MathML",
            xe = "http://www.w3.org/2000/svg",
            Pe = "http://www.w3.org/XML/1998/namespace",
            Ae = "http://www.w3.org/2000/xmlns/",
            Le = "http://www.w3.org/1999/xlink",
            Re = "open",
            ke = "closed",
            Ue = "#shadow-root",
            Fe = "slot",
            He = new DOMParser,
            Be = document.createDocumentFragment();
        i(function(e, t, n, r, a) {
            if (v(e) && t === je && null == a) {
                if (r === n) return;
                if (null == r && n === we) return;
                if (r === we && null == n) return;
                null == r || r === we ? me.value.call(e, je, we) : me.value.call(e, je, r);
                var o = N(e);
                c(o) && K(o)
            }
        }), i(function(e, t, n, r, a) {
            if (t === Fe && null == a) {
                if (r === n) return;
                if (null == r && n === we) return;
                if (r === we && null == n) return;
                null == r || r === we ? me.value.call(e, Fe, we) : me.value.call(e, Fe, r);
                var o = e.parentNode;
                if (!o) return;
                var u = ue.default.fa(o);
                if (!u || !u.shadowRoot) return;
                K(u.shadowRoot)
            }
        })
    }, { "./mutation-observers.js": 26, "./utils.js": 28 }],
    3: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a() {
            if (!c.default.Sa) {
                var e = c.default.Ra(Attr, "value"),
                    t = { get: e.get, set: function(e) { var t = this; return s.default.Z(function() { i.default.La(t, e) }) } };
                c.default.defineProperty(Attr.prototype, "value", t)
            }
        }

        function o(e) { c.default.defineProperty(e, "value", { get: function() { if (!this.ownerElement) { delete this.value; var e = this.value; return e } return this.namespaceURI ? this.ownerElement.getAttributeNS(this.namespaceURI, this.localName) : this.ownerElement.getAttribute(this.localName) }, set: function(e) { var t = this; if (!this.ownerElement) { delete this.value; var n = this.value = e; return n } return s.default.Z(function() { return i.default.La(t, e) }) } }) }

        function u(e) { c.default.Sa && o(e) }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = e("../dom.js"),
            i = r(l),
            f = e("../custom-elements.js"),
            s = r(f),
            d = e("../utils.js"),
            c = r(d);
        n.default = { T: a, K: u }
    }, { "../custom-elements.js": 1, "../dom.js": 2, "../utils.js": 28 }],
    4: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e, t) {
            var n = !1,
                r = !1,
                a = !1,
                o = null;
            t && (n = t.bubbles === !0, r = t.cancelable === !0, a = t.composed === !0, o = t.detail || null);
            var u = document.createEvent("CustomEvent");
            return u.initCustomEvent(e, n, r, o), Object.defineProperty(u, "composed", { o: !0, m: !0, get: function() { return a } }), u
        }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = a;
        var o = e("../utils.js");
        r(o);
        a.prototype = window.CustomEvent.prototype
    }, { "../utils.js": 28 }],
    5: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../custom-elements.js"),
            l = r(u),
            i = e("../mutation-observers.js"),
            f = r(i),
            s = e("../utils.js"),
            d = r(s),
            c = Document.prototype.createCDATASection,
            v = Document.prototype.createComment,
            h = Document.prototype.createDocumentFragment,
            m = Document.prototype.createElement,
            p = Document.prototype.createElementNS,
            N = Document.prototype.createProcessingInstruction,
            E = Document.prototype.createTextNode;
        n.default = { createCDATASection: function(e) { var t = c.call(this, e); return f.default.Ta(t), t }, createComment: function(e) { var t = v.call(this, e); return f.default.Ta(t), t }, createDocumentFragment: function() { var e = h.call(this); return f.default.Ta(e), e }, createElement: function(e, t) { var n = m.call(this, e, t); return f.default.Ta(n), n }, createElementNS: function(e, t, n) { var r = p.call(this, e, t, n); return f.default.Ta(r), r }, createProcessingInstruction: function(e, t) { var n = N.call(this, e, t); return f.default.Ta(n), n }, createTextNode: function(e) { var t = E.call(this, e); return f.default.Ta(t), t }, getElementsByTagName: function(e) { return o.default.Ia(this, e) }, getElementsByTagNameNS: function(e, t) { return o.default.Ja(this, e, t) }, getElementsByClassName: function(e) { return o.default.Ka(this, e) }, importNode: function(e, t) { var n = this; return l.default.Z(function() { if (e.nodeType === Node.DOCUMENT_NODE || o.default.ta(e)) throw d.default.C("NotSupportedError"); return o.default.clone(e, n, t) }) }, adoptNode: function(e) { var t = this; return l.default.Z(function() { return o.default.xa(e, t) }) } }
    }, { "../custom-elements.js": 1, "../dom.js": 2, "../mutation-observers.js": 26, "../utils.js": 28 }],
    6: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../custom-elements.js"),
            l = r(u),
            i = e("../utils.js"),
            f = r(i),
            s = e("../interfaces/Attr.js"),
            d = r(s),
            c = e("../interfaces/ShadowRoot.js"),
            v = r(c);
        n.default = {
            T: function() {
                if (Element.prototype.matches || (Element.prototype.matches = Element.prototype.Ua || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector), f.default.Sa) ! function() {
                    var e = {
                        get: function() {
                            delete HTMLElement.prototype["attributes"];
                            var t = this.attributes;
                            f.default.defineProperty(HTMLElement.prototype, "attributes", e);
                            var n = f.default.fa(t);
                            return n || f.default.ka(t, { Va: this }), t
                        }
                    };
                    f.default.extend(Element, E), f.default.extend(HTMLElement, b), f.default.defineProperty(HTMLElement.prototype, "attributes", e)
                }();
                else {
                    var e = {
                        get: function() {
                            var e = N.get.call(this),
                                t = f.default.fa(e);
                            return t || f.default.ka(e, { Va: this }), e
                        }
                    };
                    f.default.extend(Element, E), f.default.extend(Element, b), f.default.defineProperty(Element.prototype, "attributes", e), f.default.Wa(HTMLElement, "children"), f.default.Wa(HTMLElement, "parentElement"), f.default.Wa(HTMLElement, "innerHTML"), f.default.Wa(HTMLElement, "outerHTML"), f.default.Wa(HTMLElement, "contains"), f.default.Wa(HTMLElement, "insertAdjacentText"), f.default.Wa(HTMLElement, "insertAdjacentElement"), f.default.Wa(HTMLElement, "insertAdjacentHTML")
                }
            }
        };
        var h = f.default.Ra(Element, "setAttribute"),
            m = f.default.Ra(Element, "setAttributeNS"),
            p = f.default.Ra(Node, "removeChild"),
            N = f.default.Ra(Element, "attributes") || f.default.Ra(Node, "attributes"),
            E = {get slot() { return this.hasAttribute("slot") ? this.getAttribute("slot") : "" },
                set slot(e) { this.setAttribute("slot", e) },
                setAttribute: function(e, t) {
                    var n = this;
                    return l.default.Z(function() {
                        var r = n.attributes,
                            a = r.getNamedItem(e);
                        a ? o.default.Ca(a, n, t) : (h.value.call(n, e, t), a = r.getNamedItem(e), d.default.K(a), o.default.Da(a, n))
                    })
                },
                setAttributeNS: function(e, t, n) {
                    var r = this;
                    return l.default.Z(function() {
                        var a = r.attributes,
                            u = t.split(":", 2),
                            l = u[u.length - 1],
                            i = a.getNamedItemNS(e, l);
                        i ? o.default.Ca(i, r, n) : (m.value.call(r, e, t, n), i = a.getNamedItemNS(e, l), d.default.K(i), o.default.Da(i, r))
                    })
                },
                removeAttribute: function(e) { var t = this; return l.default.Z(function() { o.default.Fa(e, t) }) },
                removeAttributeNS: function(e, t) { var n = this; return l.default.Z(function() { o.default.Ga(e, t, n) }) },
                setAttributeNode: function(e) { var t = this; return d.default.K(e), l.default.Z(function() { return o.default.setAttribute(e, t) }) },
                setAttributeNodeNS: function(e) { var t = this; return d.default.K(e), l.default.Z(function() { return o.default.setAttribute(e, t) }) },
                removeAttributeNode: function(e) { var t = this; return l.default.Z(function() { if (e.ownerElement !== t) throw f.default.C("NotFoundError"); return o.default.removeAttribute(e, t), e }) },
                attachShadow: function(e) {
                    if (!e || "open" !== e.mode && "closed" !== e.mode) throw f.default.C("TypeError");
                    if ("http://www.w3.org/1999/xhtml" !== this.namespaceURI) throw f.default.C("NotSupportedError");
                    switch (this.localName) {
                        case "article":
                        case "aside":
                        case "blockquote":
                        case "body":
                        case "div":
                        case "footer":
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                        case "header":
                        case "main":
                        case "nav":
                        case "p":
                        case "section":
                        case "span":
                            break;
                        default:
                            if (l.default.$(this.localName)) break;
                            throw f.default.C("NotSupportedError")
                    }
                    if (this.shadowRoot) throw f.default.C("InvalidStateError");
                    var t = this.ownerDocument.createDocumentFragment();
                    f.default.extend(t, v.default), f.default.ka(t, { host: this, mode: e.mode, childNodes: [] });
                    for (var n = Array.prototype.slice.call(this.childNodes), r = n.length, a = 0; a < r; a++) {
                        var o = n[a],
                            u = f.default.fa(o) || f.default.ka(o, {});
                        u.parentNode = this, p.value.call(this, o)
                    }
                    var i = f.default.fa(this);
                    return i || (i = {}, f.default.ka(this, i)), i.shadowRoot = t, i.childNodes = n, t
                },
                get shadowRoot() {
                    var e = null,
                        t = f.default.fa(this);
                    return t && (e = t.shadowRoot, !e || "closed" === e.mode) ? null : e
                },
                closest: function(e) {
                    var t = this;
                    do
                        if (t.matches(e)) return t;
                    while (t = t.parentElement)
                },
                getElementsByTagName: function(e) { return o.default.Ia(this, e) },
                getElementsByTagNameNS: function(e, t) { return o.default.Ja(this, e, t) },
                getElementsByClassName: function(e) { return o.default.Ka(this, e) },
                insertAdjacentElement: function(e, t) { var n = this; return l.default.Z(function() { return o.default.Ha(n, e, t) }) },
                insertAdjacentText: function(e, t) {
                    var n = this.ownerDocument.createTextNode(t);
                    o.default.Ha(this, e, n)
                },
                insertAdjacentHTML: function(e, t) {
                    var n = this;
                    return l.default.Z(function() {
                        var r = o.default.ua(t, n);
                        o.default.Ha(n, e, r)
                    })
                }
            },
            b = {get innerHTML() { return o.default.va(this) },
                set innerHTML(e) {
                    var t = this;
                    return l.default.Z(function() {
                        var n = o.default.ua(e, t),
                            r = t["content"];
                        r instanceof DocumentFragment ? o.default.Pa(n, r) : o.default.Pa(n, t)
                    })
                },
                get outerHTML() { return o.default.va({ childNodes: [this] }) },
                set outerHTML(e) {
                    var t = this;
                    return l.default.Z(function() {
                        var n = t.parentNode;
                        if (null !== n) {
                            if (n.nodeType === Node.DOCUMENT_NODE) throw f.default.C("NoModificationAllowedError");
                            n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (n = t.ownerDocument.createElement("body"));
                            var r = o.default.ua(e, n);
                            o.default.replace(t, r, t.parentNode)
                        }
                    })
                }
            }
    }, { "../custom-elements.js": 1, "../dom.js": 2, "../interfaces/Attr.js": 3, "../interfaces/ShadowRoot.js": 16, "../utils.js": 28 }],
    7: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e, t) {
            var n = !1,
                r = !1,
                a = !1;
            t && (n = t.bubbles === !0, r = t.cancelable === !0, a = t.composed === !0);
            var o = document.createEvent("Event");
            return o.initEvent(e, n, r), Object.defineProperty(o, "composed", { o: !0, m: !0, get: function() { return a } }), o
        }

        function o() { f.default.Sa || (f.default.extend(Event, {get currentTarget() { var e = f.default.fa(this); return e ? e.currentTarget : d.get.call(this) }, get target() { var e = f.default.fa(this); return e ? e.target : c.get.call(this) } }), f.default.extend(FocusEvent, {get relatedTarget() { var e = f.default.fa(this); return e ? e.relatedTarget : v.get.call(this) } }), f.default.extend(MouseEvent, {get relatedTarget() { var e = f.default.fa(this); return e ? e.relatedTarget : h.get.call(this) } })), f.default.extend(Event, m), a.prototype = Event.prototype, window.Event = a }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var u = e("../dom.js"),
            l = r(u),
            i = e("../utils.js"),
            f = r(i);
        n.default = { T: o };
        var s = f.default.Ra(Event, "stopImmediatePropagation"),
            d = f.default.Ra(Event, "currentTarget"),
            c = f.default.Ra(Event, "target"),
            v = f.default.Ra(FocusEvent, "relatedTarget"),
            h = f.default.Ra(MouseEvent, "relatedTarget"),
            m = {
                stopImmediatePropagation: function() { var e = f.default.fa(this); return e ? (e.Xa = !0, void this.stopPropagation()) : void s.value.call(this) },
                composedPath: function e() {
                    var e = [],
                        t = this.currentTarget,
                        n = f.default.fa(this).path;
                    if (n)
                        for (var r = 0, a = 0; a < n.length; a++) {
                            var o = n[a][0];
                            t instanceof Window ? o instanceof Node && l.default.Aa(o, l.default.ya(o)) || (e[r++] = o) : t instanceof Node ? l.default.Aa(o, t) || (e[r++] = o) : e[r++] = o
                        }
                    return e
                },
                get composed() { return p.indexOf(this.type) !== -1 }
            },
            p = ["blur", "focus", "focusin", "focusout", "click", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "wheel", "beforeinput", "input", "keydown", "keyup", "compositionstart", "compositionupdate", "compositionend", "DOMActivate", "DOMFocusIn", "DOMFocusOut", "keypress", "touchstart", "touchend", "touchmove", "touchcancel"]
    }, { "../dom.js": 2, "../utils.js": 28 }],
    8: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a() {
            "EventTarget" in Window ? m.default.extend(EventTarget, w(EventTarget)) : (m.default.extend(Window, w(Window)), m.default.extend(Node, w(Node)))
        }

        function o(e, t, n) {
            var r = m.default.fa(e),
                a = e,
                o = r;
            if (r && r.host && (a = r.host, o = m.default.fa(a)), !o || !o.Ya) return null;
            for (var u = o.Ya, l = 0; l < u.length; l++) { var i = u[l]; if (i.target === a && i.type === t && i.capture === n) return i }
            return null
        }

        function u(e, t, n) {
            var r = m.default.fa(e),
                a = e,
                o = r;
            r && r.host && (a = r.host, o = m.default.fa(a)), o ? o.Ya || (o.Ya = []) : o = m.default.ka(a, { Ya: [] });
            var u = new y(a, t, n);
            return o.Ya.push(u), u
        }

        function l(e) {
            var t = [],
                n = 0,
                r = T(e),
                a = null;
            e instanceof FocusEvent ? a = O : e instanceof MouseEvent && (a = j);
            var o = r,
                u = null,
                l = null;
            a && (u = a(e), u && (l = v.default.Ba(u, r))), t[n++] = [r, o, l];
            for (var f = i(r, e, t); null != f;)
                if (u && (l = v.default.Ba(u, f)), v.default.za(v.default.root(r), f)) t[n++] = [f, null, l], f = i(f, e, t);
                else {
                    if (f === l) break;
                    r = f, t[n++] = [f, r, l], f = i(f, e, t)
                }
            return t
        }

        function i(e, t, n) { if (e instanceof Node) { if (e.nodeType === Node.DOCUMENT_NODE) return "load" === t.type ? null : e.defaultView; if (v.default.ta(e)) { if (!t.composed) { var r = n[0][0]; if (v.default.root(r) === e) return null } return e.host } return e.assignedSlot || e.parentNode } return null }

        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n][0],
                    a = t[n][2];
                if (r === e) return a
            }
            return null
        }

        function s(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n][0]; if (r === e) { for (var a = n; a >= 0; a--) { var o = t[a][1]; if (null != o) return o } return null } } return null }

        function d(e) {
            var t = m.default.fa(e) || m.default.ka(e, {});
            if (t.Za) return t.Za;
            t.$a = e;
            var n = { type: { get: function() { return e.type } }, target: { get: function() { return t.target || e.target } }, currentTarget: { get: function() { return t.currentTarget || e.currentTarget } }, eventPhase: { get: function() { return e.eventPhase } }, bubbles: { get: function() { return e.bubbles } }, cancelable: { get: function() { return e.cancelable } }, preventDefault: { value: function() { return e.preventDefault() } }, defaultPrevented: { get: function() { return e.defaultPrevented } }, stopPropagation: { value: function() { return e.stopPropagation() } } };
            "relatedTarget" in e && (n.relatedTarget = { get: function() { return t.relatedTarget || e.relatedTarget } });
            var r = Object.create(e, n);
            return m.default.ka(r, t), t.Za = r, r
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("../dom.js"),
            v = r(c),
            h = e("../utils.js"),
            m = r(h),
            p = e("./Event.js");
        r(p);
        n.default = { T: a };
        var N = "function __BROWSERTOOLS_CONSOLE_SAFEFUNC(){try{return n(arguments)}catch(i){t(i)}}",
            E = m.default.Ra(Event, "target"),
            b = m.default.Ra(FocusEvent, "relatedTarget"),
            g = m.default.Ra(MouseEvent, "relatedTarget"),
            T = function(e) { return E.get.call(e) },
            O = function(e) { return b.get.call(e) },
            j = function(e) { return g.get.call(e) };
        m.default.Sa && (T = function(e) { var t = m.default.fa(e); return t.$a.target }, O = function(e) { var t = m.default.fa(e); return t.$a.relatedTarget }, j = O);
        var w = function(e) {
                var t = { addEventListener: e.prototype.addEventListener, removeEventListener: e.prototype.removeEventListener, dispatchEvent: e.prototype.dispatchEvent };
                return {
                    addEventListener: function(e, n, r) {
                        if ("function" == typeof n) {
                            if (this instanceof Document && n.toString() === N) return void t.addEventListener.call(this, e, n, r);
                            var a = { N: n },
                                l = !1;
                            "boolean" == typeof r ? l = r : "undefined" != typeof r && (l = r.capture === !0, a.once = r.once === !0, a.passive = r.passive === !0);
                            var i = o(this, e, l) || u(this, e, l);
                            i.addListener(this, a), i._a(t.addEventListener)
                        }
                    },
                    removeEventListener: function(e, n, r) {
                        if ("function" == typeof n) {
                            if (this instanceof Document && n.toString() === N) return void t.removeEventListener.call(this, e, n, r);
                            var a = { N: n },
                                u = !1;
                            "boolean" == typeof r ? u = r : "undefined" != typeof r && (u = r.capture === !0);
                            var l = o(this, e, u);
                            l && (l.removeListener(this, a), l.empty && l.detach(t.removeEventListener))
                        }
                    }
                }
            },
            y = function(e, t, n) {
                var r = this;
                this.target = e, this.type = t, this.capture = n, this.ab = [], this.bb = [], this.N = function(t) {
                    var n = t.eventPhase;
                    switch (n) {
                        case Event.prototype.CAPTURING_PHASE:
                            r.ab.length && r.cb(t, r.target, r.ab), r.bb.length && r.cb(t, m.default.fa(e).shadowRoot, r.bb);
                            break;
                        case Event.prototype.AT_TARGET:
                            var a = T(t),
                                o = r.eb(a);
                            o.length && r.cb(t, a, o);
                            break;
                        case Event.prototype.BUBBLING_PHASE:
                            r.bb.length && r.cb(t, m.default.fa(e).shadowRoot, r.bb), r.ab.length && r.cb(t, r.target, r.ab)
                    }
                }, m.default.Sa && ! function() {
                    var e = r.N;
                    r.N = function(t) {
                        var n = d(t);
                        e(n)
                    }
                }()
            };
        y.prototype = {get empty() { return 0 === this.ab.length && 0 === this.bb.length },
            eb: function(e) { var t = m.default.fa(e); return t && t.host ? this.bb : this.ab },
            addListener: function(e, t) {
                for (var n = this.eb(e), r = 0; r < n.length; r++)
                    if (t.N === n[r].N) return;
                n.push(t)
            },
            removeListener: function(e, t) { for (var n = this.eb(e), r = 0; r < n.length; r++) { var a = n[r]; if (t.N === a.N) { a.fb = !0, n.splice(r, 1); break } } },
            cb: function(e, t, n) {
                var r = m.default.fa(e) || m.default.ka(e, {}),
                    a = r.gb;
                a || (a = r.gb = l(e));
                var o = s(t, a);
                if (o) {
                    var u = f(t, a),
                        i = void 0;
                    r.path = a, r.currentTarget = t, r.target = o, r.relatedTarget = u;
                    for (var d = n.slice(0, n.length), c = 0; c < d.length; c++) { var v = d[c]; if (!v.fb) { v.N.call(t, e) } if (v.once && (i ? i.push[v] : i = [v]), r.Xa) break }
                    if (r.path = null, r.currentTarget = null, i)
                        for (var h = 0; h < i.length; h++) {
                            var p = n.indexOf(i[h]);
                            n.splice(p, 1)
                        }
                } else e.stopImmediatePropagation()
            },
            _a: function(e) { e.call(this.target, this.type, this.N, this.capture) },
            detach: function(e) { e.call(this.target, this.type, this.N, this.capture) }
        }
    }, { "../dom.js": 2, "../utils.js": 28, "./Event.js": 7 }],
    9: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../utils.js"),
            l = r(u);
        n.default = {get name() { if ("slot" === this.localName) return this.hasAttribute("name") ? this.getAttribute("name") : "" },
            set name(e) { "slot" === this.localName && o.default.Ea(this, "name", e) },
            assignedNodes: function e(t) {
                if ("slot" === this.localName) {
                    if (!t || t.hb !== !0) {
                        var e = null,
                            n = l.default.fa(this);
                        return n && (e = n.assignedNodes), e || []
                    }
                    return o.default.Ma(this)
                }
            }
        }
    }, { "../dom.js": 2, "../utils.js": 28 }],
    10: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../utils.js"),
            l = r(u);
        n.default = {
            deleteCaption: function() {
                var e = this.caption;
                e && o.default.remove(e, this)
            },
            deleteTHead: function() {
                var e = this.tHead;
                e && o.default.remove(e, this)
            },
            deleteTFoot: function() {
                var e = this.tFoot;
                e && o.default.remove(e, this)
            },
            deleteRow: function(e) {
                if (e === -1 && (e = this.rows.length - 1), e < 0 || e >= this.rows.length) throw l.default.C("IndexSizeError");
                this.rows[e].remove()
            }
        }
    }, { "../dom.js": 2, "../utils.js": 28 }],
    11: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../utils.js"),
            o = r(a);
        n.default = {
            deleteCell: function(e) {
                if (e === -1 && (e = this.cells.length - 1), e < 0 || e >= this.cells.length) throw o.default.C("IndexSizeError");
                this.cells[e].remove()
            }
        }
    }, { "../utils.js": 28 }],
    12: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../utils.js"),
            o = r(a);
        n.default = {
            deleteRow: function(e) {
                if (e < 0 || e >= this.rows.length) throw o.default.C("IndexSizeError");
                this.rows[e].remove()
            }
        }
    }, { "../utils.js": 28 }],
    13: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e) {
            var t = l.default.ib(e);
            f.default.ka(this, { jb: t }), t.kb = this
        }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = a;
        var o = e("../dom.js"),
            u = (r(o), e("../mutation-observers.js")),
            l = r(u),
            i = e("../utils.js"),
            f = r(i);
        a.prototype = { observe: function(e, t) { f.default.fa(this).jb.observe(e, t) }, disconnect: function() { f.default.fa(this).jb.disconnect() }, takeRecords: function() { var e = f.default.fa(this).jb.lb; return e.splice(0, e.length) } }
    }, { "../dom.js": 2, "../mutation-observers.js": 26, "../utils.js": 28 }],
    14: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../custom-elements.js"),
            l = r(u),
            i = e("../utils.js"),
            f = r(i),
            s = e("../interfaces/Attr.js"),
            d = r(s);
        n.default = {
            setNamedItem: function(e) { var t = this; return d.default.K(e), l.default.Z(function() { var n = f.default.fa(t); return o.default.setAttribute(e, n.Va) }) },
            setNamedItemNS: function(e) { var t = this; return d.default.K(e), l.default.Z(function() { var n = f.default.fa(t); return o.default.setAttribute(e, n.Va) }) },
            removeNamedItem: function(e) {
                var t = this;
                return l.default.Z(function() {
                    var n = f.default.fa(t),
                        r = o.default.Fa(e, n.Va);
                    if (!r) throw f.default.C("NotFoundError");
                    return r
                })
            },
            removeNamedItemNS: function(e, t) {
                var n = this;
                return l.default.Z(function() {
                    var r = f.default.fa(n),
                        a = o.default.Ga(e, t, r.Va);
                    if (!a) throw f.default.C("NotFoundError");
                    return a
                })
            }
        }
    }, { "../custom-elements.js": 1, "../dom.js": 2, "../interfaces/Attr.js": 3, "../utils.js": 28 }],
    15: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a() {
            if (v.default.Sa) {
                var e = [Document, DocumentFragment, Element, Attr, CharacterData];
                e.forEach(function(e) { return v.default.extend(e, N) }), v.default.extend(Node, E)
            } else v.default.extend(Node, N), v.default.extend(Node, E), v.default.Wa(Node, "attributes")
        }

        function o(e, t) {
            var n = e.parentNode;
            do
                if (n === t) return !0;
            while (n = n.parentNode);
            return !1
        }

        function u(e, t) {
            function n(e, t, n) { for (var r = e.childNodes, a = 0; a < r.length; a++) { var o = r[a]; if (o === t) return !0; if (o === n) return !1 } }
            var r = e.parentNode,
                a = t.parentNode;
            if (r === a) return n(e, t);
            for (var o = [r], u = [a]; r = r.parentNode;) o.push(r);
            for (; a = a.parentNode;) u.push(a);
            o.reverse(), u.reverse();
            for (var l = (Math.abs(o.length - u.length), Math.min(o.length, u.length), 0); o[l] === u[l];) l++;
            return n(o[l - 1], o[l], u[l])
        }

        function l(e) {
            for (var t = "", n = e.childNodes, r = 0; r < n.length; r++) {
                var a = n[r];
                switch (a.nodeType) {
                    case Node.ELEMENT_NODE:
                        t += l(a);
                        break;
                    case Node.TEXT_NODE:
                        t += a.data
                }
            }
            return t
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = e("../dom.js"),
            f = r(i),
            s = e("../custom-elements.js"),
            d = r(s),
            c = e("../utils.js"),
            v = r(c);
        n.default = { T: a };
        var h = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
            m = v.default.Ra(Node, "hasChildNodes"),
            p = v.default.Ra(Node, "childNodes"),
            N = {get parentNode() { var e = v.default.fa(this); if (e) { var t = e.parentNode; if (t) return t } return h.currentNode = this, h.parentNode() },
                get parentElement() { var e = this.parentNode; return e && e.nodeType === Node.ELEMENT_NODE ? e : null },
                get childNodes() {
                    var e = v.default.fa(this);
                    if (e) { var t = e.childNodes; if (t) { for (var n = t.length, r = new Array(n), a = 0; a < n; a++) r[a] = t[a]; return r } }
                    if (v.default.Sa) {
                        var o = new Array;
                        h.currentNode = this;
                        var u = h.firstChild();
                        if (!u) return o;
                        o.push(u);
                        for (var l = void 0; l = h.nextSibling();) o.push(l);
                        return o
                    }
                    return p.get.call(this)
                },
                get firstChild() { var e = v.default.fa(this); if (e) { var t = e.childNodes; if (t) return t.length ? t[0] : null } return h.currentNode = this, h.firstChild() },
                get lastChild() { var e = v.default.fa(this); if (e) { var t = e.childNodes; if (t) return t.length ? t[t.length - 1] : null } return h.currentNode = this, h.lastChild() },
                get previousSibling() {
                    var e = v.default.fa(this);
                    if (e) {
                        var t = e.parentNode;
                        if (t) {
                            var n = v.default.fa(t).childNodes,
                                r = n.indexOf(this) - 1;
                            return r < 0 ? null : n[r]
                        }
                    }
                    return h.currentNode = this, h.previousSibling()
                },
                get nextSibling() {
                    var e = v.default.fa(this);
                    if (e) {
                        var t = e.parentNode;
                        if (t) {
                            var n = v.default.fa(t).childNodes,
                                r = n.indexOf(this) + 1;
                            return r === n.length ? null : n[r]
                        }
                    }
                    return h.currentNode = this, h.nextSibling()
                },
                get nodeValue() {
                    switch (this.nodeType) {
                        case Node.ATTRIBUTE_NODE:
                            return this.value;
                        case Node.TEXT_NODE:
                        case Node.PROCESSING_INSTRUCTION_NODE:
                        case Node.COMMENT_NODE:
                            return this.data
                    }
                },
                set nodeValue(e) {
                    var t = this;
                    return d.default.Z(function() {
                        switch (t.nodeType) {
                            case Node.ATTRIBUTE_NODE:
                                t.value = e;
                                break;
                            case Node.TEXT_NODE:
                            case Node.PROCESSING_INSTRUCTION_NODE:
                            case Node.COMMENT_NODE:
                                t.data = e
                        }
                    })
                },
                get textContent() {
                    switch (this.nodeType) {
                        case Node.DOCUMENT_FRAGMENT_NODE:
                        case Node.ELEMENT_NODE:
                            return l(this);
                        case Node.ATTRIBUTE_NODE:
                            return this.value;
                        case Node.TEXT_NODE:
                        case Node.PROCESSING_INSTRUCTION_NODE:
                        case Node.COMMENT_NODE:
                            return this.data;
                        default:
                            return null
                    }
                },
                set textContent(e) {
                    var t = this;
                    return d.default.Z(function() {
                        switch (t.nodeType) {
                            case Node.DOCUMENT_FRAGMENT_NODE:
                            case Node.ELEMENT_NODE:
                                var n = null;
                                "" !== e && (n = t.ownerDocument.createTextNode(e)), f.default.Pa(n, t);
                                break;
                            case Node.ATTRIBUTE_NODE:
                                t.value = e;
                                break;
                            case Node.TEXT_NODE:
                            case Node.PROCESSING_INSTRUCTION_NODE:
                            case Node.COMMENT_NODE:
                                t.data = e
                        }
                    })
                }
            },
            E = {get isConnected() { return f.default.ya(this).nodeType === Node.DOCUMENT_NODE },
                getRootNode: function(e) { var t = e && e.composed === !0; return t ? f.default.ya(this) : f.default.root(this) },
                hasChildNodes: function() { var e = v.default.fa(this); if (e) { var t = e.childNodes; if (t) return t.length > 0 } return m.value.call(this) },
                normalize: function() {
                    var e = this;
                    return d.default.Z(function() {
                        for (var t = e.childNodes, n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r.nodeType === Node.TEXT_NODE) {
                                var a = r.data.length;
                                if (0 === a) { f.default.remove(r, e); continue }
                                for (var o = "", u = new Array(t.length), l = 0, i = r;
                                    (i = i.nextSibling) && i.nodeType === Node.TEXT_NODE;) o += i.data, u[l++] = i;
                                r.replaceData(a, 0, o);
                                for (var s = 0; s < l; s++) f.default.remove(u[s], e)
                            } else r.normalize()
                        }
                    })
                },
                cloneNode: function(e) { var t = this; return d.default.Z(function() { if (f.default.ta(t)) throw v.default.C("NotSupportedError"); return f.default.clone(t, void 0, e) }) },
                isEqualNode: function(e) {
                    if (!e) return !1;
                    if (this.nodeType !== e.nodeType) return !1;
                    var t = void 0,
                        n = void 0;
                    switch (this.nodeType) {
                        case Node.DOCUMENT_TYPE_NODE:
                            if (this.name !== e.name || this.publicId !== e.publicId || this.systemId !== e.systemId) return !1;
                            break;
                        case Node.ELEMENT_NODE:
                            if (this.namespaceURI !== e.namespaceURI || this.prefix !== e.prefix || this.localName !== e.localName) return !1;
                            if (t = this.attributes, n = e.attributes, t.length != n.length) return !1;
                            break;
                        case Node.ATTRIBUTE_NODE:
                            if (this.namespaceURI !== e.namespaceURI || this.localName !== e.localName || this.value !== e.value) return !1;
                            break;
                        case Node.PROCESSING_INSTRUCTION_NODE:
                            if (this.target !== e.target || this.data !== e.data) return !1;
                            break;
                        case Node.TEXT_NODE:
                        case Node.COMMENT_NODE:
                            if (this.data !== e.data) return !1
                    }
                    if (this.nodeType == Node.ELEMENT_NODE)
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r],
                                o = n[a.name];
                            if (a.value !== o.value) return !1
                        }
                    var u = this.childNodes,
                        l = e.childNodes;
                    if (u.length !== e.childNodes.length) return !1;
                    for (var i = 0; i < u.length; i++)
                        if (!u[i].isEqualNode(l[i])) return !1;
                    return !0
                },
                compareDocumentPosition: function(e) {
                    if (this === e) return 0;
                    var t = e,
                        n = this,
                        r = null,
                        a = null;
                    if (t.nodeType == Document.prototype.ATTRIBUTE_NODE && (r = t, t = r.ownerElement), n.nodeType == Document.prototype.ATTRIBUTE_NODE && (a = n, n = a.ownerElement, r && t && n === t))
                        for (var l = n.mb, i = 0; i < l.length; i++) { var s = l[i]; if (s.isEqualNode(r)) return Document.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + Document.prototype.DOCUMENT_POSITION_PRECEDING; if (s.isEqualNode(a)) return Document.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + Document.prototype.DOCUMENT_POSITION_FOLLOWING }
                    return t && n && f.default.root(t) === f.default.root(n) ? o(n, t) || t === n && a ? Document.prototype.DOCUMENT_POSITION_CONTAINS + Document.prototype.DOCUMENT_POSITION_PRECEDING : o(t, n) || t === n && r ? Document.prototype.DOCUMENT_POSITION_CONTAINS + Document.prototype.DOCUMENT_POSITION_FOLLOWING : u(t, n) ? Document.prototype.DOCUMENT_POSITION_PRECEDING : Document.prototype.DOCUMENT_POSITION_FOLLOWING : Document.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + Document.prototype.DOCUMENT_POSITION_FOLLOWING + Document.prototype.DOCUMENT_POSITION_DISCONNECTED
                },
                contains: function(e) {
                    var t = e.parentNode;
                    if (!t) return !1;
                    do
                        if (t === this) return !0;
                    while (t = t.parentNode);
                    return !1
                },
                insertBefore: function(e, t) { var n = this; return d.default.Z(function() { return f.default.Na(e, n, t) }) },
                appendChild: function(e) { var t = this; return d.default.Z(function() { return f.default.append(e, t) }) },
                replaceChild: function(e, t) { var n = this; return d.default.Z(function() { return f.default.replace(t, e, n) }) },
                removeChild: function(e) { var t = this; return d.default.Z(function() { return f.default.Qa(e, t) }) }
            }
    }, { "../custom-elements.js": 1, "../dom.js": 2, "../utils.js": 28 }],
    16: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../custom-elements.js"),
            l = r(u),
            i = e("../utils.js"),
            f = r(i);
        n.default = {get nodeName() { return "#shadow-root" },
            get mode() { return f.default.fa(this).mode },
            get host() { return f.default.fa(this).host },
            get innerHTML() { return o.default.va(this) },
            set innerHTML(e) {
                var t = this;
                return l.default.Z(function() {
                    var n = o.default.ua(e, t);
                    o.default.Pa(n, t)
                })
            }
        }
    }, { "../custom-elements.js": 1, "../dom.js": 2, "../utils.js": 28 }],
    17: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../utils.js"),
            l = r(u);
        n.default = {
            splitText: function(e) {
                var t = this.length;
                if (e > t) throw l.default.C("IndexSizeError");
                var n = t - e,
                    r = this.data.slice(e, n),
                    a = this.ownerDocument.createTextNode(r),
                    u = this.parentNode;
                return u && o.default.Oa(a, u, this.nextSibling), this.replaceData(e, n, ""), a
            }
        }
    }, { "../dom.js": 2, "../utils.js": 28 }],
    18: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        var a = e("./shadow-dom.js"),
            o = r(a),
            u = e("./custom-elements.js"),
            l = r(u),
            i = !1,
            f = !1;
        !window["forceShadowDomPolyfill"] && o.default.S || (i = !0), !window["forceCustomElementsPolyfill"] && l.default.S || (i = !0, f = !0), i && (o.default.T(), window["shadowDomPolyfilled"] = !0), f ? (l.default.T(), window["customElementsPolyfilled"] = !0) : l.default.W()
    }, { "./custom-elements.js": 1, "./shadow-dom.js": 27 }],
    19: [function(e, t, n) {
        "use strict";

        function r(e) { u.push(e), o || (l.hidden = !l.hidden, o = !0) }

        function a() { o = !1, u.splice(0, u.length).forEach(function(e) { return e() }) }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = { L: r };
        var o = !1,
            u = new Array,
            l = document.createElement("span"),
            i = new MutationObserver(a);
        i.observe(l, { attributes: !0 })
    }, {}],
    20: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../custom-elements.js"),
            l = r(u);
        n.default = {
            before: function() {
                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return l.default.Z(function() {
                    var t = e.parentNode;
                    if (t) {
                        for (var r = e.previousSibling; r && n.indexOf(r) !== -1;) r = r.previousSibling;
                        var a = o.default.wa(n, e.ownerDocument);
                        r = null === r ? t.firstChild : r.nextSibling, o.default.Na(a, t, r)
                    }
                })
            },
            after: function() {
                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return l.default.Z(function() {
                    var t = e.parentNode;
                    if (t) {
                        for (var r = e.nextSibling; r && n.indexOf(r) !== -1;) r = r.nextSibling;
                        var a = o.default.wa(n, e.ownerDocument);
                        o.default.Na(a, t, r)
                    }
                })
            },
            replaceWith: function() {
                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return l.default.Z(function() {
                    var t = e.parentNode;
                    if (t) {
                        for (var r = e.nextSibling; r && n.indexOf(r) !== -1;) r = r.nextSibling;
                        var a = o.default.wa(n, e.ownerDocument);
                        e.parentNode == t ? o.default.replace(e, a, t) : o.default.Na(a, t, r)
                    }
                })
            },
            remove: function() {
                var e = this;
                return l.default.Z(function() {
                    var t = e.parentNode;
                    t && o.default.remove(e, t)
                })
            }
        }
    }, { "../custom-elements.js": 1, "../dom.js": 2 }],
    21: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../utils.js"),
            l = r(u),
            i = l.default.Ra(Document, "activeElement");
        n.default = {get activeElement() {
                var e = this.ownerDocument || this,
                    t = i.get.call(e);
                return t && e == o.default.ya(this) ? o.default.Ba(t, this) : null
            }
        }
    }, { "../dom.js": 2, "../utils.js": 28 }],
    22: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../utils.js"),
            o = r(a),
            u = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);
        n.default = {get previousElementSibling() { var e = o.default.fa(this); if (e) { var t = e.parentNode; if (t) { for (var n = o.default.fa(t).childNodes, r = n.indexOf(this); r > 0;) { var a = n[--r]; if (a.nodeType === Node.ELEMENT_NODE) return a } return null } } return u.currentNode = this, u.previousSibling() }, get nextElementSibling() { var e = o.default.fa(this); if (e) { var t = e.parentNode; if (t) { for (var n = o.default.fa(t).childNodes, r = n.indexOf(this); r < n.length - 1;) { var a = n[++r]; if (a.nodeType === Node.ELEMENT_NODE) return a } return null } } return u.currentNode = this, u.nextSibling() } }
    }, { "../utils.js": 28 }],
    23: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a);
        n.default = { getElementById: function(e) { if ("" === e || /\s/.test(e)) return null; var t = this.firstChild; return t ? o.default.sa(t, function(t) { return t.id === e }) : null } }
    }, { "../dom.js": 2 }],
    24: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../custom-elements.js"),
            l = r(u),
            i = e("../utils.js"),
            f = r(i),
            s = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);
        n.default = {get children() {
                var e = void 0,
                    t = f.default.fa(this);
                t && (e = t.childNodes), e || (e = this.childNodes);
                for (var n = e.length, r = new Array(n), a = 0, o = 0; o < n; o++) {
                    var u = e[o];
                    u.nodeType == Node.ELEMENT_NODE && (r[a++] = u)
                }
                return r.length = a, r
            },
            get firstElementChild() { var e = f.default.fa(this); if (e) { var t = e.childNodes; if (t) { for (var n = 0; n < t.length; n++) { var r = t[n]; if (r.nodeType == Node.ELEMENT_NODE) return r } return null } } return s.currentNode = this, s.firstChild() },
            get lastElementChild() { var e = f.default.fa(this); if (e) { var t = e.childNodes; if (t) { for (var n = t.length - 1; n >= 0; n--) { var r = t[n]; if (r.nodeType == Node.ELEMENT_NODE) return r } return null } } return s.currentNode = this, s.lastChild() },
            get childElementCount() {
                var e = void 0,
                    t = f.default.fa(this);
                t && (e = t.childNodes), e || (e = this.childNodes);
                for (var n = 0, r = 0; r < e.length; r++) {
                    var a = e[r];
                    a.nodeType == Node.ELEMENT_NODE && n++
                }
                return n
            },
            prepend: function() {
                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return l.default.Z(function() {
                    var t = o.default.wa(n, e.ownerDocument || e);
                    o.default.Na(t, e, e.firstChild)
                })
            },
            append: function() {
                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return l.default.Z(function() {
                    var t = o.default.wa(n, e.ownerDocument || e);
                    o.default.append(t, e)
                })
            },
            querySelector: function(e) { var t = this.firstChild; return t ? o.default.sa(t, function(t) { return t.nodeType === Node.ELEMENT_NODE && t.matches(e) }) : null },
            querySelectorAll: function(e) {
                var t = [],
                    n = this.firstChild;
                return n ? (o.default.ra(n, t, function(t) { return t.nodeType === Node.ELEMENT_NODE && t.matches(e) }), t) : t
            }
        }
    }, { "../custom-elements.js": 1, "../dom.js": 2, "../utils.js": 28 }],
    25: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../dom.js"),
            o = r(a),
            u = e("../utils.js"),
            l = r(u);
        n.default = {get assignedSlot() { var e = l.default.fa(this); if (e) { var t = e.assignedSlot; return t && o.default.Aa(t, this) ? null : t } return null } }
    }, { "../dom.js": 2, "../utils.js": 28 }],
    26: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a() { j || (j = !0, h.default.L(d)) }

        function o(e) {
            var t = p.default.fa(e) || p.default.ka(e, {}),
                n = t.oa;
            return n ? n : t.oa = []
        }

        function u(e) {
            return {
                N: e,
                lb: [],
                nb: [],
                observe: function(e, t) {
                    f(w.takeRecords()), 0 === this.nb.length && g.push(this);
                    var n = o(e);
                    n.push({ pa: this, options: t }), this.nb.push(e)
                },
                disconnect: function() {
                    var e = g.indexOf(this);
                    g.splice(e, 1);
                    for (var t = 0; t < this.nb.length; t++)
                        for (var n = o(this.nb[t]), r = 0; r < n.length; r++)
                            if (n[r].pa === this) { n.splice(r, 1); break }
                    this.nb = []
                }
            }
        }

        function l(e, t, n) {
            var r = {
                    jb: e,
                    N: e.N,
                    options: n,
                    lb: [],
                    ob: t,
                    disconnect: function() {
                        for (var e = o(this.ob), t = 0; t < e.length; t++)
                            if (e[t].pa === this) { e.splice(t, 1); break }
                    }
                },
                a = o(t);
            return a.push({ pa: r, options: n }), r
        }

        function i(e, t, n, r, o, u, l, i, f) {
            if (0 !== g.length) {
                for (var s = [], d = [], c = [t], v = t; v = v.parentNode;) c.push(v);
                for (var h = 0; h < c.length; h++) {
                    var m = c[h],
                        T = p.default.fa(m);
                    if (T && T.oa)
                        for (var j = 0; j < T.oa.length; j++) {
                            var w = T.oa[j],
                                y = w.options;
                            if (m == t || y.subtree) {
                                if (e === N) { if (!y.attributes) continue; if (y.attributeFilter && (y.attributeFilter.indexOf(n) === -1 || null != r)) continue }
                                if ((e !== b || y.characterData) && (e !== E || y.childList)) {
                                    var _ = w.pa,
                                        D = s.indexOf(_);
                                    D === -1 && (D = s.length, s[D] = _), (e === N && y.attributeOldValue || e === b && y.characterDataOldValue) && (d[D] = o)
                                }
                            }
                        }
                }
                if (0 !== s.length) {
                    for (var M = 0; M < s.length; M++) {
                        var S = s[M],
                            C = { type: e, target: t, attributeName: null, attributeNamespace: null, addedNodes: O, removedNodes: O, previousSibling: null, nextSibling: null, oldValue: null };
                        n && (C.attributeName = n, C.attributeNamespace = r), u && (C.addedNodes = u, u instanceof Array && (C.addedNodes = u.slice())), l && (C.removedNodes = l, l instanceof Array && (C.removedNodes = l.slice())), i && (C.previousSibling = i), f && (C.nextSibling = f), C.oldValue = d[M], S.lb.push(C)
                    }
                    a()
                }
            }
        }

        function f(e) {
            for (var t = e.length, n = 0; n < t; n++) {
                var r = e[n];
                i(r.type, r.target, r.attributeName, r.attributeNamespace, r.oldValue, r.addedNodes, r.removedNodes, r.previousSibling, r.nextSibling)
            }
        }

        function s(e) { w.observe(e, { attributes: !0, characterData: !0, attributeOldValue: !0, characterDataOldValue: !0, subtree: !0 }) }

        function d() {
            j = !1;
            for (var e = g.slice(), t = T.splice(0, T.length), n = 0; n < e.length; n++) {
                for (var r = e[n], a = r.lb.splice(0, r.lb.length), o = g.length - 1; o >= 0; o--) {
                    var u = g[o];
                    u.jb === r && (g.splice(o, 1), u.disconnect())
                }
                if (a.length) try { r.N.call(r.kb, a, r.kb) } catch (e) { p.default.G(e) }
            }
            for (var l = 0; l < t.length; l++) {
                var i = t[l],
                    f = i.ownerDocument.createEvent("Event");
                f.initEvent("slotchange", !0, !1);
                try { i.dispatchEvent(f) } catch (e) { p.default.G(e) }
            }
        }

        function c(e) { T.indexOf(e) === -1 && T.push(e), a() }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var v = e("./microtask.js"),
            h = r(v),
            m = e("./utils.js"),
            p = r(m);
        n.default = { na: i, ma: function() { f(w.takeRecords()) }, ib: u, qa: l, Ta: s, la: c };
        var N = "attributes",
            E = "childList",
            b = "characterData",
            g = [],
            T = [],
            O = Object.freeze([]),
            j = !1,
            w = new MutationObserver(function(e) { f(e), d() });
        s(document)
    }, { "./microtask.js": 19, "./utils.js": 28 }],
    27: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a() { window["ShadyDOM"] = { inUse: !0 }, f.default.T(), window.CustomEvent = d.default, l.default.extend(Document, v.default), m.default.T(), N.default.T(), b.default.T(), l.default.extend("HTMLSlotElement" in window ? HTMLSlotElement : HTMLUnknownElement, T.default), l.default.extend(HTMLTableElement, j.default), l.default.extend(HTMLTableRowElement, y.default), l.default.extend(HTMLTableSectionElement, D.default), window.MutationObserver = S.default, l.default.extend(NamedNodeMap, I.default), P.default.T(), l.default.extend(Text, k.default), l.default.extend(DocumentType, F.default), l.default.extend(Element, F.default), l.default.extend(CharacterData, F.default), l.default.extend(Document, B.default), l.default.extend(L.default, B.default), l.default.extend(Element, G.default), l.default.extend(CharacterData, G.default), l.default.extend(Document, q.default), l.default.extend(DocumentFragment, q.default), l.default.extend(Document, X.default), l.default.extend(DocumentFragment, X.default), l.default.extend(L.default, X.default), l.default.Sa ? l.default.extend(HTMLElement, X.default) : l.default.extend(Element, X.default), l.default.extend(Element, J.default), l.default.extend(Text, J.default) }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o = e("./dom.js"),
            u = (r(o), e("./utils.js")),
            l = r(u),
            i = e("./interfaces/Attr.js"),
            f = r(i),
            s = e("./interfaces/CustomEvent.js"),
            d = r(s),
            c = e("./interfaces/Document.js"),
            v = r(c),
            h = e("./interfaces/Element.js"),
            m = r(h),
            p = e("./interfaces/Event.js"),
            N = r(p),
            E = e("./interfaces/EventTarget.js"),
            b = r(E),
            g = e("./interfaces/HTMLSlotElement.js"),
            T = r(g),
            O = e("./interfaces/HTMLTableElement.js"),
            j = r(O),
            w = e("./interfaces/HTMLTableRowElement.js"),
            y = r(w),
            _ = e("./interfaces/HTMLTableSectionElement.js"),
            D = r(_),
            M = e("./interfaces/MutationObserver.js"),
            S = r(M),
            C = e("./interfaces/NamedNodeMap.js"),
            I = r(C),
            x = e("./interfaces/Node.js"),
            P = r(x),
            A = e("./interfaces/ShadowRoot.js"),
            L = r(A),
            R = e("./interfaces/Text.js"),
            k = r(R),
            U = e("./mixins/ChildNode.js"),
            F = r(U),
            H = e("./mixins/DocumentOrShadowRoot.js"),
            B = r(H),
            Z = e("./mixins/NonDocumentTypeChildNode.js"),
            G = r(Z),
            W = e("./mixins/NonElementParentNode.js"),
            q = r(W),
            V = e("./mixins/ParentNode.js"),
            X = r(V),
            Y = e("./mixins/Slotable.js"),
            J = r(Y),
            K = "attachShadow" in Element.prototype;
        n.default = { S: K, T: a }
    }, { "./dom.js": 2, "./interfaces/Attr.js": 3, "./interfaces/CustomEvent.js": 4, "./interfaces/Document.js": 5, "./interfaces/Element.js": 6, "./interfaces/Event.js": 7, "./interfaces/EventTarget.js": 8, "./interfaces/HTMLSlotElement.js": 9, "./interfaces/HTMLTableElement.js": 10, "./interfaces/HTMLTableRowElement.js": 11, "./interfaces/HTMLTableSectionElement.js": 12, "./interfaces/MutationObserver.js": 13, "./interfaces/NamedNodeMap.js": 14, "./interfaces/Node.js": 15, "./interfaces/ShadowRoot.js": 16, "./interfaces/Text.js": 17, "./mixins/ChildNode.js": 20, "./mixins/DocumentOrShadowRoot.js": 21, "./mixins/NonDocumentTypeChildNode.js": 22, "./mixins/NonElementParentNode.js": 23, "./mixins/ParentNode.js": 24, "./mixins/Slotable.js": 25, "./utils.js": 28 }],
    28: [function(e, t, n) {
        "use strict";

        function r(e, t) { return Object.getOwnPropertyDescriptor(e.prototype || e, t) }

        function a(e, t) {
            try {
                var n = p.value.call(window.document, "div");
                m.value.call(n, n)
            } catch (n) { return Object.create(n, { message: { get: function() { return t } }, name: { get: function() { return e } }, code: { get: function() { return n.code } }, toString: { value: function() { return t ? e + ": " + t : e } } }) }
        }

        function o(e) { "console" in window && "error" in window.console && window.console.error(e) }

        function u(e, t) {
            t = t.prototype || t;
            for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                var a = n[r];
                if ("constructor" !== a) {
                    var o = Object.getOwnPropertyDescriptor(t, a);
                    if (o.m = !0, e.prototype) {
                        var u = Object.getOwnPropertyDescriptor(e.prototype, a);
                        if (u) {
                            if ("value" in o) {
                                if (!u.l) continue;
                                e.prototype[a] = o.value;
                                continue
                            }
                            if (("get" in o || "set" in o) && !u.m) continue
                        }
                        Object.defineProperty(e.prototype, a, o)
                    } else Object.defineProperty(e, a, o)
                }
            }
        }

        function l(e, t, n) { n.m = !0, n.o = !0; var r = Object.getOwnPropertyDescriptor(e, t); return "value" in n && (n.l = !0, r && !r.m) ? void(e[t] = n.value) : void Object.defineProperty(e, t, n) }

        function i(e, t) { var n = Object.getOwnPropertyDescriptor(e.prototype, t); if (n) return n.m ? void delete e.prototype[t] : void console.warn("Warning: unable to delete property '" + t + "' of " + e.name) }

        function f(e) { return e._shadow }

        function s(e, t) { return e._shadow = t }

        function d(e) { return e.nodeType === Node.ELEMENT_NODE }

        function c(e, t) {
            if (t.length < e.length) return !1;
            var n = 0,
                r = 0,
                a = e[0],
                o = t[0],
                u = t.length,
                l = e.length;
            do o === a && (a = e[++n]), o = t[++n]; while (n <= l && r <= u);
            return n > l
        }

        function v(e) {
            if (null === e || void 0 === e || "" === e) return null;
            if (e = e.trim().split(/\s+/).sort(), e.length > 1) {
                for (var t = e[0], n = [t], r = 1; r < e.length; r++) {
                    var a = e[r];
                    a !== t && (n.push(a), t = a)
                }
                e = n
            }
            return e
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var h = "undefined" == typeof r(Node, "childNodes").get,
            m = r(Node, "appendChild"),
            p = r(Document, "createElement");
        n.default = { Sa: h, Ra: r, C: a, G: o, extend: u, defineProperty: l, Wa: i, fa: f, ka: s, ha: d, ia: v, ja: c }
    }, {}]
}, {}, [18]);
//# sourceMappingURL=./dist/shadow-dom.min.js.map