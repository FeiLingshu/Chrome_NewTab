var pl = Object.defineProperty;
var gl = (e, t, n) => t in e ? pl(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Fe = (e, t, n) => (gl(e, typeof t != "symbol" ? t + "" : t, n),
n);
import {s as hl, u as v, c as le, r as nt, i as Et, n as Ts, d as be, h as $n, p as lr, a as Ue, w as Rt, e as Ur, m as ks, t as Cs, b as Ot, f as $r, g as _l, j as vl, k as yl, o as bl, l as El, q as Ve, v as zs, x as Is, y as Sl, F as xe, z as Br, A as C, T as Al, B as Bn, C as Q, D as te, E as Ae, G as P, _ as wl, H as F, I as xl, J as Ge, K as se, L as fe, M as de, S as jn, N as Hn, O as Rl, P as Nn, Q as Pn, R as Ln, U as Ns, V as $t, W as Tn, X as gn, Y as un, Z as _o, $ as Ol, a0 as Ut, a1 as Ps, a2 as Ls, a3 as hn, a4 as Tl, a5 as cr, a6 as kl, a7 as Cl, a8 as jr, a9 as Ds, aa as Fs, ab as zl, ac as Vt, ad as Il, ae as Nl, af as Pl, ag as Ll, ah as Dl, ai as Fl, aj as Ml, ak as Hr, al as Ms, am as Wn, an as Us, ao as $s, ap as Bs, aq as js, ar as Hs, as as _n, at as Ul, au as $l, av as nn, aw as Bl, ax as jl, ay as Hl, az as Wl, aA as Ws, aB as Vl, aC as Yl, aD as ql, aE as Gl, aF as Kl, aG as Jl, aH as Xl, aI as vo, aJ as Ql, aK as Zl, aL as yo, aM as ec} from "./ant-design-414671ee.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const a of o)
            if (a.type === "childList")
                for (const s of a.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const a = {};
        return o.integrity && (a.integrity = o.integrity),
        o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const a = n(o);
        fetch(o.href, a)
    }
}
)();
/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Dt = typeof window < "u";
function tc(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const ve = Object.assign;
function ur(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = rt(o) ? o.map(e) : e(o)
    }
    return n
}
const rn = () => {}
  , rt = Array.isArray
  , nc = /\/$/
  , rc = e => e.replace(nc, "");
function fr(e, t, n="/") {
    let r, o = {}, a = "", s = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return l < c && l >= 0 && (c = -1),
    c > -1 && (r = t.slice(0, c),
    a = t.slice(c + 1, l > -1 ? l : t.length),
    o = e(a)),
    l > -1 && (r = r || t.slice(0, l),
    s = t.slice(l, t.length)),
    r = ic(r ?? t, n),
    {
        fullPath: r + (a && "?") + a + s,
        path: r,
        query: o,
        hash: s
    }
}
function oc(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function bo(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function sc(e, t, n) {
    const r = t.matched.length - 1
      , o = n.matched.length - 1;
    return r > -1 && r === o && Bt(t.matched[r], n.matched[o]) && Vs(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Bt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Vs(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!ac(e[n], t[n]))
            return !1;
    return !0
}
function ac(e, t) {
    return rt(e) ? Eo(e, t) : rt(t) ? Eo(t, e) : e === t
}
function Eo(e, t) {
    return rt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function ic(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let a = n.length - 1, s, l;
    for (s = 0; s < r.length; s++)
        if (l = r[s],
        l !== ".")
            if (l === "..")
                a > 1 && a--;
            else
                break;
    return n.slice(0, a).join("/") + "/" + r.slice(s - (s === r.length ? 1 : 0)).join("/")
}
var fn;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(fn || (fn = {}));
var on;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(on || (on = {}));
function lc(e) {
    if (!e)
        if (Dt) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    rc(e)
}
const cc = /^[^#]+#/;
function uc(e, t) {
    return e.replace(cc, "#") + t
}
function fc(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const Vn = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function mc(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = fc(o, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}
function So(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const br = new Map;
function dc(e, t) {
    br.set(e, t)
}
function pc(e) {
    const t = br.get(e);
    return br.delete(e),
    t
}
let gc = () => location.protocol + "//" + location.host;
function Ys(e, t) {
    const {pathname: n, search: r, hash: o} = t
      , a = e.indexOf("#");
    if (a > -1) {
        let l = o.includes(e.slice(a)) ? e.slice(a).length : 1
          , c = o.slice(l);
        return c[0] !== "/" && (c = "/" + c),
        bo(c, "")
    }
    return bo(n, e) + r + o
}
function hc(e, t, n, r) {
    let o = []
      , a = []
      , s = null;
    const l = ({state: d}) => {
        const h = Ys(e, location)
          , g = n.value
          , A = t.value;
        let z = 0;
        if (d) {
            if (n.value = h,
            t.value = d,
            s && s === g) {
                s = null;
                return
            }
            z = A ? d.position - A.position : 0
        } else
            r(h);
        o.forEach(w => {
            w(n.value, g, {
                delta: z,
                type: fn.pop,
                direction: z ? z > 0 ? on.forward : on.back : on.unknown
            })
        }
        )
    }
    ;
    function c() {
        s = n.value
    }
    function i(d) {
        o.push(d);
        const h = () => {
            const g = o.indexOf(d);
            g > -1 && o.splice(g, 1)
        }
        ;
        return a.push(h),
        h
    }
    function f() {
        const {history: d} = window;
        d.state && d.replaceState(ve({}, d.state, {
            scroll: Vn()
        }), "")
    }
    function m() {
        for (const d of a)
            d();
        a = [],
        window.removeEventListener("popstate", l),
        window.removeEventListener("beforeunload", f)
    }
    return window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", f, {
        passive: !0
    }),
    {
        pauseListeners: c,
        listen: i,
        destroy: m
    }
}
function Ao(e, t, n, r=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? Vn() : null
    }
}
function _c(e) {
    const {history: t, location: n} = window
      , r = {
        value: Ys(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || a(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function a(c, i, f) {
        const m = e.indexOf("#")
          , d = m > -1 ? (n.host && document.querySelector("base") ? e : e.slice(m)) + c : gc() + e + c;
        try {
            t[f ? "replaceState" : "pushState"](i, "", d),
            o.value = i
        } catch (h) {
            console.error(h),
            n[f ? "replace" : "assign"](d)
        }
    }
    function s(c, i) {
        const f = ve({}, t.state, Ao(o.value.back, c, o.value.forward, !0), i, {
            position: o.value.position
        });
        a(c, f, !0),
        r.value = c
    }
    function l(c, i) {
        const f = ve({}, o.value, t.state, {
            forward: c,
            scroll: Vn()
        });
        a(f.current, f, !0);
        const m = ve({}, Ao(r.value, c, null), {
            position: f.position + 1
        }, i);
        a(c, m, !1),
        r.value = c
    }
    return {
        location: r,
        state: o,
        push: l,
        replace: s
    }
}
function vc(e) {
    e = lc(e);
    const t = _c(e)
      , n = hc(e, t.state, t.location, t.replace);
    function r(a, s=!0) {
        s || n.pauseListeners(),
        history.go(a)
    }
    const o = ve({
        location: "",
        base: e,
        go: r,
        createHref: uc.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function yc(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    vc(e)
}
function bc(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function qs(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const ht = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , Gs = Symbol("");
var wo;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(wo || (wo = {}));
function jt(e, t) {
    return ve(new Error, {
        type: e,
        [Gs]: !0
    }, t)
}
function ft(e, t) {
    return e instanceof Error && Gs in e && (t == null || !!(e.type & t))
}
const xo = "[^/]+?"
  , Ec = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Sc = /[.+*?^${}()[\]/\\]/g;
function Ac(e, t) {
    const n = ve({}, Ec, t)
      , r = [];
    let o = n.start ? "^" : "";
    const a = [];
    for (const i of e) {
        const f = i.length ? [] : [90];
        n.strict && !i.length && (o += "/");
        for (let m = 0; m < i.length; m++) {
            const d = i[m];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                m || (o += "/"),
                o += d.value.replace(Sc, "\\$&"),
                h += 40;
            else if (d.type === 1) {
                const {value: g, repeatable: A, optional: z, regexp: w} = d;
                a.push({
                    name: g,
                    repeatable: A,
                    optional: z
                });
                const R = w || xo;
                if (R !== xo) {
                    h += 10;
                    try {
                        new RegExp(`(${R})`)
                    } catch ($) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${R}): ` + $.message)
                    }
                }
                let j = A ? `((?:${R})(?:/(?:${R}))*)` : `(${R})`;
                m || (j = z && i.length < 2 ? `(?:/${j})` : "/" + j),
                z && (j += "?"),
                o += j,
                h += 20,
                z && (h += -8),
                A && (h += -20),
                R === ".*" && (h += -50)
            }
            f.push(h)
        }
        r.push(f)
    }
    if (n.strict && n.end) {
        const i = r.length - 1;
        r[i][r[i].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const s = new RegExp(o,n.sensitive ? "" : "i");
    function l(i) {
        const f = i.match(s)
          , m = {};
        if (!f)
            return null;
        for (let d = 1; d < f.length; d++) {
            const h = f[d] || ""
              , g = a[d - 1];
            m[g.name] = h && g.repeatable ? h.split("/") : h
        }
        return m
    }
    function c(i) {
        let f = ""
          , m = !1;
        for (const d of e) {
            (!m || !f.endsWith("/")) && (f += "/"),
            m = !1;
            for (const h of d)
                if (h.type === 0)
                    f += h.value;
                else if (h.type === 1) {
                    const {value: g, repeatable: A, optional: z} = h
                      , w = g in i ? i[g] : "";
                    if (rt(w) && !A)
                        throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                    const R = rt(w) ? w.join("/") : w;
                    if (!R)
                        if (z)
                            d.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : m = !0);
                        else
                            throw new Error(`Missing required param "${g}"`);
                    f += R
                }
        }
        return f || "/"
    }
    return {
        re: s,
        score: r,
        keys: a,
        parse: l,
        stringify: c
    }
}
function wc(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}
function xc(e, t) {
    let n = 0;
    const r = e.score
      , o = t.score;
    for (; n < r.length && n < o.length; ) {
        const a = wc(r[n], o[n]);
        if (a)
            return a;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Ro(r))
            return 1;
        if (Ro(o))
            return -1
    }
    return o.length - r.length
}
function Ro(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Rc = {
    type: 0,
    value: ""
}
  , Oc = /[a-zA-Z0-9_]/;
function Tc(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Rc]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(h) {
        throw new Error(`ERR (${n})/"${i}": ${h}`)
    }
    let n = 0
      , r = n;
    const o = [];
    let a;
    function s() {
        a && o.push(a),
        a = []
    }
    let l = 0, c, i = "", f = "";
    function m() {
        i && (n === 0 ? a.push({
            type: 0,
            value: i
        }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),
        a.push({
            type: 1,
            value: i,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"),
        i = "")
    }
    function d() {
        i += c
    }
    for (; l < e.length; ) {
        if (c = e[l++],
        c === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            c === "/" ? (i && m(),
            s()) : c === ":" ? (m(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            c === "(" ? n = 2 : Oc.test(c) ? d() : (m(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && l--);
            break;
        case 2:
            c === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + c : n = 3 : f += c;
            break;
        case 3:
            m(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && l--,
            f = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${i}"`),
    m(),
    s(),
    o
}
function kc(e, t, n) {
    const r = Ac(Tc(e.path), n)
      , o = ve(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function Cc(e, t) {
    const n = []
      , r = new Map;
    t = ko({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(f) {
        return r.get(f)
    }
    function a(f, m, d) {
        const h = !d
          , g = zc(f);
        g.aliasOf = d && d.record;
        const A = ko(t, f)
          , z = [g];
        if ("alias"in f) {
            const j = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const $ of j)
                z.push(ve({}, g, {
                    components: d ? d.record.components : g.components,
                    path: $,
                    aliasOf: d ? d.record : g
                }))
        }
        let w, R;
        for (const j of z) {
            const {path: $} = j;
            if (m && $[0] !== "/") {
                const E = m.record.path
                  , H = E[E.length - 1] === "/" ? "" : "/";
                j.path = m.record.path + ($ && H + $)
            }
            if (w = kc(j, m, A),
            d ? d.alias.push(w) : (R = R || w,
            R !== w && R.alias.push(w),
            h && f.name && !To(w) && s(f.name)),
            g.children) {
                const E = g.children;
                for (let H = 0; H < E.length; H++)
                    a(E[H], w, d && d.children[H])
            }
            d = d || w,
            (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w)
        }
        return R ? () => {
            s(R)
        }
        : rn
    }
    function s(f) {
        if (qs(f)) {
            const m = r.get(f);
            m && (r.delete(f),
            n.splice(n.indexOf(m), 1),
            m.children.forEach(s),
            m.alias.forEach(s))
        } else {
            const m = n.indexOf(f);
            m > -1 && (n.splice(m, 1),
            f.record.name && r.delete(f.record.name),
            f.children.forEach(s),
            f.alias.forEach(s))
        }
    }
    function l() {
        return n
    }
    function c(f) {
        let m = 0;
        for (; m < n.length && xc(f, n[m]) >= 0 && (f.record.path !== n[m].record.path || !Ks(f, n[m])); )
            m++;
        n.splice(m, 0, f),
        f.record.name && !To(f) && r.set(f.record.name, f)
    }
    function i(f, m) {
        let d, h = {}, g, A;
        if ("name"in f && f.name) {
            if (d = r.get(f.name),
            !d)
                throw jt(1, {
                    location: f
                });
            A = d.record.name,
            h = ve(Oo(m.params, d.keys.filter(R => !R.optional).map(R => R.name)), f.params && Oo(f.params, d.keys.map(R => R.name))),
            g = d.stringify(h)
        } else if ("path"in f)
            g = f.path,
            d = n.find(R => R.re.test(g)),
            d && (h = d.parse(g),
            A = d.record.name);
        else {
            if (d = m.name ? r.get(m.name) : n.find(R => R.re.test(m.path)),
            !d)
                throw jt(1, {
                    location: f,
                    currentLocation: m
                });
            A = d.record.name,
            h = ve({}, m.params, f.params),
            g = d.stringify(h)
        }
        const z = [];
        let w = d;
        for (; w; )
            z.unshift(w.record),
            w = w.parent;
        return {
            name: A,
            path: g,
            params: h,
            matched: z,
            meta: Nc(z)
        }
    }
    return e.forEach(f => a(f)),
    {
        addRoute: a,
        resolve: i,
        removeRoute: s,
        getRoutes: l,
        getRecordMatcher: o
    }
}
function Oo(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function zc(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Ic(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function Ic(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "boolean" ? n : n[r];
    return t
}
function To(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Nc(e) {
    return e.reduce( (t, n) => ve(t, n.meta), {})
}
function ko(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Ks(e, t) {
    return t.children.some(n => n === e || Ks(e, n))
}
const Js = /#/g
  , Pc = /&/g
  , Lc = /\//g
  , Dc = /=/g
  , Fc = /\?/g
  , Xs = /\+/g
  , Mc = /%5B/g
  , Uc = /%5D/g
  , Qs = /%5E/g
  , $c = /%60/g
  , Zs = /%7B/g
  , Bc = /%7C/g
  , ea = /%7D/g
  , jc = /%20/g;
function Wr(e) {
    return encodeURI("" + e).replace(Bc, "|").replace(Mc, "[").replace(Uc, "]")
}
function Hc(e) {
    return Wr(e).replace(Zs, "{").replace(ea, "}").replace(Qs, "^")
}
function Er(e) {
    return Wr(e).replace(Xs, "%2B").replace(jc, "+").replace(Js, "%23").replace(Pc, "%26").replace($c, "`").replace(Zs, "{").replace(ea, "}").replace(Qs, "^")
}
function Wc(e) {
    return Er(e).replace(Dc, "%3D")
}
function Vc(e) {
    return Wr(e).replace(Js, "%23").replace(Fc, "%3F")
}
function Yc(e) {
    return e == null ? "" : Vc(e).replace(Lc, "%2F")
}
function Dn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
function qc(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const a = r[o].replace(Xs, " ")
          , s = a.indexOf("=")
          , l = Dn(s < 0 ? a : a.slice(0, s))
          , c = s < 0 ? null : Dn(a.slice(s + 1));
        if (l in t) {
            let i = t[l];
            rt(i) || (i = t[l] = [i]),
            i.push(c)
        } else
            t[l] = c
    }
    return t
}
function Co(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Wc(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (rt(r) ? r.map(a => a && Er(a)) : [r && Er(r)]).forEach(a => {
            a !== void 0 && (t += (t.length ? "&" : "") + n,
            a != null && (t += "=" + a))
        }
        )
    }
    return t
}
function Gc(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = rt(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const Kc = Symbol("")
  , zo = Symbol("")
  , Vr = Symbol("")
  , Yr = Symbol("")
  , Sr = Symbol("");
function Qt() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e,
        reset: n
    }
}
function yt(e, t, n, r, o) {
    const a = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise( (s, l) => {
        const c = m => {
            m === !1 ? l(jt(4, {
                from: n,
                to: t
            })) : m instanceof Error ? l(m) : bc(m) ? l(jt(2, {
                from: t,
                to: m
            })) : (a && r.enterCallbacks[o] === a && typeof m == "function" && a.push(m),
            s())
        }
          , i = e.call(r && r.instances[o], t, n, c);
        let f = Promise.resolve(i);
        e.length < 3 && (f = f.then(c)),
        f.catch(m => l(m))
    }
    )
}
function mr(e, t, n, r) {
    const o = [];
    for (const a of e)
        for (const s in a.components) {
            let l = a.components[s];
            if (!(t !== "beforeRouteEnter" && !a.instances[s]))
                if (Jc(l)) {
                    const i = (l.__vccOpts || l)[t];
                    i && o.push(yt(i, n, r, a, s))
                } else {
                    let c = l();
                    o.push( () => c.then(i => {
                        if (!i)
                            return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${a.path}"`));
                        const f = tc(i) ? i.default : i;
                        a.components[s] = f;
                        const d = (f.__vccOpts || f)[t];
                        return d && yt(d, n, r, a, s)()
                    }
                    ))
                }
        }
    return o
}
function Jc(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Io(e) {
    const t = Et(Vr)
      , n = Et(Yr)
      , r = le( () => t.resolve(v(e.to)))
      , o = le( () => {
        const {matched: c} = r.value
          , {length: i} = c
          , f = c[i - 1]
          , m = n.matched;
        if (!f || !m.length)
            return -1;
        const d = m.findIndex(Bt.bind(null, f));
        if (d > -1)
            return d;
        const h = No(c[i - 2]);
        return i > 1 && No(f) === h && m[m.length - 1].path !== h ? m.findIndex(Bt.bind(null, c[i - 2])) : d
    }
    )
      , a = le( () => o.value > -1 && eu(n.params, r.value.params))
      , s = le( () => o.value > -1 && o.value === n.matched.length - 1 && Vs(n.params, r.value.params));
    function l(c={}) {
        return Zc(c) ? t[v(e.replace) ? "replace" : "push"](v(e.to)).catch(rn) : Promise.resolve()
    }
    return {
        route: r,
        href: le( () => r.value.href),
        isActive: a,
        isExactActive: s,
        navigate: l
    }
}
const Xc = be({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Io,
    setup(e, {slots: t}) {
        const n = nt(Io(e))
          , {options: r} = Et(Vr)
          , o = le( () => ({
            [Po(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Po(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const a = t.default && t.default(n);
            return e.custom ? a : $n("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, a)
        }
    }
})
  , Qc = Xc;
function Zc(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function eu(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (!rt(o) || o.length !== r.length || r.some( (a, s) => a !== o[s]))
            return !1
    }
    return !0
}
function No(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Po = (e, t, n) => e ?? t ?? n
  , tu = be({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = Et(Sr)
          , o = le( () => e.route || r.value)
          , a = Et(zo, 0)
          , s = le( () => {
            let i = v(a);
            const {matched: f} = o.value;
            let m;
            for (; (m = f[i]) && !m.components; )
                i++;
            return i
        }
        )
          , l = le( () => o.value.matched[s.value]);
        lr(zo, le( () => s.value + 1)),
        lr(Kc, l),
        lr(Sr, o);
        const c = Ue();
        return Rt( () => [c.value, l.value, e.name], ([i,f,m], [d,h,g]) => {
            f && (f.instances[m] = i,
            h && h !== f && i && i === d && (f.leaveGuards.size || (f.leaveGuards = h.leaveGuards),
            f.updateGuards.size || (f.updateGuards = h.updateGuards))),
            i && f && (!h || !Bt(f, h) || !d) && (f.enterCallbacks[m] || []).forEach(A => A(i))
        }
        , {
            flush: "post"
        }),
        () => {
            const i = o.value
              , f = e.name
              , m = l.value
              , d = m && m.components[f];
            if (!d)
                return Lo(n.default, {
                    Component: d,
                    route: i
                });
            const h = m.props[f]
              , g = h ? h === !0 ? i.params : typeof h == "function" ? h(i) : h : null
              , z = $n(d, ve({}, g, t, {
                onVnodeUnmounted: w => {
                    w.component.isUnmounted && (m.instances[f] = null)
                }
                ,
                ref: c
            }));
            return Lo(n.default, {
                Component: z,
                route: i
            }) || z
        }
    }
});
function Lo(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const nu = tu;
function ru(e) {
    const t = Cc(e.routes, e)
      , n = e.parseQuery || qc
      , r = e.stringifyQuery || Co
      , o = e.history
      , a = Qt()
      , s = Qt()
      , l = Qt()
      , c = hl(ht);
    let i = ht;
    Dt && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const f = ur.bind(null, I => "" + I)
      , m = ur.bind(null, Yc)
      , d = ur.bind(null, Dn);
    function h(I, G) {
        let Y, X;
        return qs(I) ? (Y = t.getRecordMatcher(I),
        X = G) : X = I,
        t.addRoute(X, Y)
    }
    function g(I) {
        const G = t.getRecordMatcher(I);
        G && t.removeRoute(G)
    }
    function A() {
        return t.getRoutes().map(I => I.record)
    }
    function z(I) {
        return !!t.getRecordMatcher(I)
    }
    function w(I, G) {
        if (G = ve({}, G || c.value),
        typeof I == "string") {
            const ne = fr(n, I, G.path)
              , ge = t.resolve({
                path: ne.path
            }, G)
              , ct = o.createHref(ne.fullPath);
            return ve(ne, ge, {
                params: d(ge.params),
                hash: Dn(ne.hash),
                redirectedFrom: void 0,
                href: ct
            })
        }
        let Y;
        if ("path"in I)
            Y = ve({}, I, {
                path: fr(n, I.path, G.path).path
            });
        else {
            const ne = ve({}, I.params);
            for (const ge in ne)
                ne[ge] == null && delete ne[ge];
            Y = ve({}, I, {
                params: m(ne)
            }),
            G.params = m(G.params)
        }
        const X = t.resolve(Y, G)
          , pe = I.hash || "";
        X.params = f(d(X.params));
        const Se = oc(r, ve({}, I, {
            hash: Hc(pe),
            path: X.path
        }))
          , re = o.createHref(Se);
        return ve({
            fullPath: Se,
            hash: pe,
            query: r === Co ? Gc(I.query) : I.query || {}
        }, X, {
            redirectedFrom: void 0,
            href: re
        })
    }
    function R(I) {
        return typeof I == "string" ? fr(n, I, c.value.path) : ve({}, I)
    }
    function j(I, G) {
        if (i !== I)
            return jt(8, {
                from: G,
                to: I
            })
    }
    function $(I) {
        return V(I)
    }
    function E(I) {
        return $(ve(R(I), {
            replace: !0
        }))
    }
    function H(I) {
        const G = I.matched[I.matched.length - 1];
        if (G && G.redirect) {
            const {redirect: Y} = G;
            let X = typeof Y == "function" ? Y(I) : Y;
            return typeof X == "string" && (X = X.includes("?") || X.includes("#") ? X = R(X) : {
                path: X
            },
            X.params = {}),
            ve({
                query: I.query,
                hash: I.hash,
                params: "path"in X ? {} : I.params
            }, X)
        }
    }
    function V(I, G) {
        const Y = i = w(I)
          , X = c.value
          , pe = I.state
          , Se = I.force
          , re = I.replace === !0
          , ne = H(Y);
        if (ne)
            return V(ve(R(ne), {
                state: typeof ne == "object" ? ve({}, pe, ne.state) : pe,
                force: Se,
                replace: re
            }), G || Y);
        const ge = Y;
        ge.redirectedFrom = G;
        let ct;
        return !Se && sc(r, X, Y) && (ct = jt(16, {
            to: ge,
            from: X
        }),
        Pe(X, X, !0, !1)),
        (ct ? Promise.resolve(ct) : D(ge, X)).catch(ke => ft(ke) ? ft(ke, 2) ? ke : Ne(ke) : $e(ke, ge, X)).then(ke => {
            if (ke) {
                if (ft(ke, 2))
                    return V(ve({
                        replace: re
                    }, R(ke.to), {
                        state: typeof ke.to == "object" ? ve({}, pe, ke.to.state) : pe,
                        force: Se
                    }), G || ge)
            } else
                ke = ee(ge, X, !0, re, pe);
            return q(ge, X, ke),
            ke
        }
        )
    }
    function O(I, G) {
        const Y = j(I, G);
        return Y ? Promise.reject(Y) : Promise.resolve()
    }
    function x(I) {
        const G = pt.values().next().value;
        return G && typeof G.runWithContext == "function" ? G.runWithContext(I) : I()
    }
    function D(I, G) {
        let Y;
        const [X,pe,Se] = ou(I, G);
        Y = mr(X.reverse(), "beforeRouteLeave", I, G);
        for (const ne of X)
            ne.leaveGuards.forEach(ge => {
                Y.push(yt(ge, I, G))
            }
            );
        const re = O.bind(null, I, G);
        return Y.push(re),
        ot(Y).then( () => {
            Y = [];
            for (const ne of a.list())
                Y.push(yt(ne, I, G));
            return Y.push(re),
            ot(Y)
        }
        ).then( () => {
            Y = mr(pe, "beforeRouteUpdate", I, G);
            for (const ne of pe)
                ne.updateGuards.forEach(ge => {
                    Y.push(yt(ge, I, G))
                }
                );
            return Y.push(re),
            ot(Y)
        }
        ).then( () => {
            Y = [];
            for (const ne of I.matched)
                if (ne.beforeEnter && !G.matched.includes(ne))
                    if (rt(ne.beforeEnter))
                        for (const ge of ne.beforeEnter)
                            Y.push(yt(ge, I, G));
                    else
                        Y.push(yt(ne.beforeEnter, I, G));
            return Y.push(re),
            ot(Y)
        }
        ).then( () => (I.matched.forEach(ne => ne.enterCallbacks = {}),
        Y = mr(Se, "beforeRouteEnter", I, G),
        Y.push(re),
        ot(Y))).then( () => {
            Y = [];
            for (const ne of s.list())
                Y.push(yt(ne, I, G));
            return Y.push(re),
            ot(Y)
        }
        ).catch(ne => ft(ne, 8) ? ne : Promise.reject(ne))
    }
    function q(I, G, Y) {
        for (const X of l.list())
            x( () => X(I, G, Y))
    }
    function ee(I, G, Y, X, pe) {
        const Se = j(I, G);
        if (Se)
            return Se;
        const re = G === ht
          , ne = Dt ? history.state : {};
        Y && (X || re ? o.replace(I.fullPath, ve({
            scroll: re && ne && ne.scroll
        }, pe)) : o.push(I.fullPath, pe)),
        c.value = I,
        Pe(I, G, Y, re),
        Ne()
    }
    let ie;
    function Ee() {
        ie || (ie = o.listen( (I, G, Y) => {
            if (!zt.listening)
                return;
            const X = w(I)
              , pe = H(X);
            if (pe) {
                V(ve(pe, {
                    replace: !0
                }), X).catch(rn);
                return
            }
            i = X;
            const Se = c.value;
            Dt && dc(So(Se.fullPath, Y.delta), Vn()),
            D(X, Se).catch(re => ft(re, 12) ? re : ft(re, 2) ? (V(re.to, X).then(ne => {
                ft(ne, 20) && !Y.delta && Y.type === fn.pop && o.go(-1, !1)
            }
            ).catch(rn),
            Promise.reject()) : (Y.delta && o.go(-Y.delta, !1),
            $e(re, X, Se))).then(re => {
                re = re || ee(X, Se, !1),
                re && (Y.delta && !ft(re, 8) ? o.go(-Y.delta, !1) : Y.type === fn.pop && ft(re, 20) && o.go(-1, !1)),
                q(X, Se, re)
            }
            ).catch(rn)
        }
        ))
    }
    let Z = Qt(), ce = Qt(), ae;
    function $e(I, G, Y) {
        Ne(I);
        const X = ce.list();
        return X.length ? X.forEach(pe => pe(I, G, Y)) : console.error(I),
        Promise.reject(I)
    }
    function Ze() {
        return ae && c.value !== ht ? Promise.resolve() : new Promise( (I, G) => {
            Z.add([I, G])
        }
        )
    }
    function Ne(I) {
        return ae || (ae = !I,
        Ee(),
        Z.list().forEach( ([G,Y]) => I ? Y(I) : G()),
        Z.reset()),
        I
    }
    function Pe(I, G, Y, X) {
        const {scrollBehavior: pe} = e;
        if (!Dt || !pe)
            return Promise.resolve();
        const Se = !Y && pc(So(I.fullPath, 0)) || (X || !Y) && history.state && history.state.scroll || null;
        return Ts().then( () => pe(I, G, Se)).then(re => re && mc(re)).catch(re => $e(re, I, G))
    }
    const dt = I => o.go(I);
    let Ct;
    const pt = new Set
      , zt = {
        currentRoute: c,
        listening: !0,
        addRoute: h,
        removeRoute: g,
        hasRoute: z,
        getRoutes: A,
        resolve: w,
        options: e,
        push: $,
        replace: E,
        go: dt,
        back: () => dt(-1),
        forward: () => dt(1),
        beforeEach: a.add,
        beforeResolve: s.add,
        afterEach: l.add,
        onError: ce.add,
        isReady: Ze,
        install(I) {
            const G = this;
            I.component("RouterLink", Qc),
            I.component("RouterView", nu),
            I.config.globalProperties.$router = G,
            Object.defineProperty(I.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => v(c)
            }),
            Dt && !Ct && c.value === ht && (Ct = !0,
            $(o.location).catch(pe => {}
            ));
            const Y = {};
            for (const pe in ht)
                Y[pe] = le( () => c.value[pe]);
            I.provide(Vr, G),
            I.provide(Yr, nt(Y)),
            I.provide(Sr, c);
            const X = I.unmount;
            pt.add(I),
            I.unmount = function() {
                pt.delete(I),
                pt.size < 1 && (i = ht,
                ie && ie(),
                ie = null,
                c.value = ht,
                Ct = !1,
                ae = !1),
                X()
            }
        }
    };
    function ot(I) {
        return I.reduce( (G, Y) => G.then( () => x(Y)), Promise.resolve())
    }
    return zt
}
function ou(e, t) {
    const n = []
      , r = []
      , o = []
      , a = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < a; s++) {
        const l = t.matched[s];
        l && (e.matched.find(i => Bt(i, l)) ? r.push(l) : n.push(l));
        const c = e.matched[s];
        c && (t.matched.find(i => Bt(i, c)) || o.push(c))
    }
    return [n, r, o]
}
function su() {
    return Et(Yr)
}
var au = !1;
/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let ta;
const Yn = e => ta = e
  , na = Symbol();
function Ar(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var sn;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(sn || (sn = {}));
function iu() {
    const e = Ur(!0)
      , t = e.run( () => Ue({}));
    let n = []
      , r = [];
    const o = ks({
        install(a) {
            Yn(o),
            o._a = a,
            a.provide(na, o),
            a.config.globalProperties.$pinia = o,
            r.forEach(s => n.push(s)),
            r = []
        },
        use(a) {
            return !this._a && !au ? r.push(a) : n.push(a),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return o
}
const ra = () => {}
;
function Do(e, t, n, r=ra) {
    e.push(t);
    const o = () => {
        const a = e.indexOf(t);
        a > -1 && (e.splice(a, 1),
        r())
    }
    ;
    return !n && yl() && bl(o),
    o
}
function Lt(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    }
    )
}
const lu = e => e();
function wr(e, t) {
    e instanceof Map && t instanceof Map && t.forEach( (n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , o = e[n];
        Ar(o) && Ar(r) && e.hasOwnProperty(n) && !Ot(r) && !$r(r) ? e[n] = wr(o, r) : e[n] = r
    }
    return e
}
const cu = Symbol();
function uu(e) {
    return !Ar(e) || !e.hasOwnProperty(cu)
}
const {assign: vt} = Object;
function fu(e) {
    return !!(Ot(e) && e.effect)
}
function mu(e, t, n, r) {
    const {state: o, actions: a, getters: s} = t
      , l = n.state.value[e];
    let c;
    function i() {
        l || (n.state.value[e] = o ? o() : {});
        const f = El(n.state.value[e]);
        return vt(f, a, Object.keys(s || {}).reduce( (m, d) => (m[d] = ks(le( () => {
            Yn(n);
            const h = n._s.get(e);
            return s[d].call(h, h)
        }
        )),
        m), {}))
    }
    return c = oa(e, i, t, n, r, !0),
    c
}
function oa(e, t, n={}, r, o, a) {
    let s;
    const l = vt({
        actions: {}
    }, n)
      , c = {
        deep: !0
    };
    let i, f, m = [], d = [], h;
    const g = r.state.value[e];
    !a && !g && (r.state.value[e] = {}),
    Ue({});
    let A;
    function z(O) {
        let x;
        i = f = !1,
        typeof O == "function" ? (O(r.state.value[e]),
        x = {
            type: sn.patchFunction,
            storeId: e,
            events: h
        }) : (wr(r.state.value[e], O),
        x = {
            type: sn.patchObject,
            payload: O,
            storeId: e,
            events: h
        });
        const D = A = Symbol();
        Ts().then( () => {
            A === D && (i = !0)
        }
        ),
        f = !0,
        Lt(m, x, r.state.value[e])
    }
    const w = a ? function() {
        const {state: x} = n
          , D = x ? x() : {};
        this.$patch(q => {
            vt(q, D)
        }
        )
    }
    : ra;
    function R() {
        s.stop(),
        m = [],
        d = [],
        r._s.delete(e)
    }
    function j(O, x) {
        return function() {
            Yn(r);
            const D = Array.from(arguments)
              , q = []
              , ee = [];
            function ie(ce) {
                q.push(ce)
            }
            function Ee(ce) {
                ee.push(ce)
            }
            Lt(d, {
                args: D,
                name: O,
                store: E,
                after: ie,
                onError: Ee
            });
            let Z;
            try {
                Z = x.apply(this && this.$id === e ? this : E, D)
            } catch (ce) {
                throw Lt(ee, ce),
                ce
            }
            return Z instanceof Promise ? Z.then(ce => (Lt(q, ce),
            ce)).catch(ce => (Lt(ee, ce),
            Promise.reject(ce))) : (Lt(q, Z),
            Z)
        }
    }
    const $ = {
        _p: r,
        $id: e,
        $onAction: Do.bind(null, d),
        $patch: z,
        $reset: w,
        $subscribe(O, x={}) {
            const D = Do(m, O, x.detached, () => q())
              , q = s.run( () => Rt( () => r.state.value[e], ee => {
                (x.flush === "sync" ? f : i) && O({
                    storeId: e,
                    type: sn.direct,
                    events: h
                }, ee)
            }
            , vt({}, c, x)));
            return D
        },
        $dispose: R
    }
      , E = nt($);
    r._s.set(e, E);
    const H = r._a && r._a.runWithContext || lu
      , V = r._e.run( () => (s = Ur(),
    H( () => s.run(t))));
    for (const O in V) {
        const x = V[O];
        if (Ot(x) && !fu(x) || $r(x))
            a || (g && uu(x) && (Ot(x) ? x.value = g[O] : wr(x, g[O])),
            r.state.value[e][O] = x);
        else if (typeof x == "function") {
            const D = j(O, x);
            V[O] = D,
            l.actions[O] = x
        }
    }
    return vt(E, V),
    vt(Cs(E), V),
    Object.defineProperty(E, "$state", {
        get: () => r.state.value[e],
        set: O => {
            z(x => {
                vt(x, O)
            }
            )
        }
    }),
    r._p.forEach(O => {
        vt(E, s.run( () => O({
            store: E,
            app: r._a,
            pinia: r,
            options: l
        })))
    }
    ),
    g && a && n.hydrate && n.hydrate(E.$state, g),
    i = !0,
    f = !0,
    E
}
function qr(e, t, n) {
    let r, o;
    const a = typeof t == "function";
    typeof e == "string" ? (r = e,
    o = a ? n : t) : (o = e,
    r = e.id);
    function s(l, c) {
        const i = vl();
        return l = l || (i ? Et(na, null) : null),
        l && Yn(l),
        l = ta,
        l._s.has(r) || (a ? oa(r, t, o, l) : mu(r, o, l)),
        l._s.get(r)
    }
    return s.$id = r,
    s
}
function Ye(e) {
    {
        e = Cs(e);
        const t = {};
        for (const n in e) {
            const r = e[n];
            (Ot(r) || $r(r)) && (t[n] = _l(e, n))
        }
        return t
    }
}
function du(e) {
    return typeof e == "object" && e !== null
}
function Fo(e, t) {
    return e = du(e) ? e : Object.create(null),
    new Proxy(e,{
        get(n, r, o) {
            return r === "key" ? Reflect.get(n, r, o) : Reflect.get(n, r, o) || Reflect.get(t, r, o)
        }
    })
}
function pu(e, t) {
    return t.reduce( (n, r) => n == null ? void 0 : n[r], e)
}
function gu(e, t, n) {
    return t.slice(0, -1).reduce( (r, o) => /^(__proto__)$/.test(o) ? {} : r[o] = r[o] || {}, e)[t[t.length - 1]] = n,
    e
}
function hu(e, t) {
    return t.reduce( (n, r) => {
        const o = r.split(".");
        return gu(n, o, pu(e, o))
    }
    , {})
}
function Mo(e, {storage: t, serializer: n, key: r, debug: o}) {
    try {
        const a = t == null ? void 0 : t.getItem(r);
        a && e.$patch(n == null ? void 0 : n.deserialize(a))
    } catch (a) {
        o && console.error(a)
    }
}
function Uo(e, {storage: t, serializer: n, key: r, paths: o, debug: a}) {
    try {
        const s = Array.isArray(o) ? hu(e, o) : e;
        t.setItem(r, n.serialize(s))
    } catch (s) {
        a && console.error(s)
    }
}
function _u(e={}) {
    return t => {
        const {auto: n=!1} = e
          , {options: {persist: r=n}, store: o} = t;
        if (!r)
            return;
        const a = (Array.isArray(r) ? r.map(s => Fo(s, e)) : [Fo(r, e)]).map( ({storage: s=localStorage, beforeRestore: l=null, afterRestore: c=null, serializer: i={
            serialize: JSON.stringify,
            deserialize: JSON.parse
        }, key: f=o.$id, paths: m=null, debug: d=!1}) => {
            var h;
            return {
                storage: s,
                beforeRestore: l,
                afterRestore: c,
                serializer: i,
                key: ((h = e.key) != null ? h : g => g)(f),
                paths: m,
                debug: d
            }
        }
        );
        o.$persist = () => {
            a.forEach(s => {
                Uo(o.$state, s)
            }
            )
        }
        ,
        o.$hydrate = ({runHooks: s=!0}={}) => {
            a.forEach(l => {
                const {beforeRestore: c, afterRestore: i} = l;
                s && (c == null || c(t)),
                Mo(o, l),
                s && (i == null || i(t))
            }
            )
        }
        ,
        a.forEach(s => {
            const {beforeRestore: l, afterRestore: c} = s;
            l == null || l(t),
            Mo(o, s),
            c == null || c(t),
            o.$subscribe( (i, f) => {
                Uo(f, s)
            }
            , {
                detached: !0
            })
        }
        )
    }
}
const sa = "baidu"
  , aa = "百度"
  , ia = "img/microsoft.svg"
  , la = "百度是中国使用群体最多的一款搜索引擎"
  , ca = {
    url: "https://www.baidu.com/s?ie={inputEncoding}&wd={searchText}&pn={page}0",
    list: "#content_left div.result, #content_left div.result-op",
    itemTitle: "h3 a@text",
    itemUrl: "h3 a:first-child@href",
    itemIcon: "",
    itemCover: "img.c-img@src",
    itemDesc: "div.c-abstract@text"
}
  , vu = {
    id: sa,
    name: aa,
    icon: ia,
    description: la,
    search: ca
}
  , yu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vu,
    description: la,
    icon: ia,
    id: sa,
    name: aa,
    search: ca
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ua = "bing"
  , fa = "Bing"
  , ma = "img/microsoft.svg"
  , da = "必应是一款由微软公司推出的网络搜索引擎"
  , pa = {
    url: "https://cn.bing.com/search?q={searchText}&first={page}0",
    list: "#b_results li.b_algo",
    itemTitle: "h2 a@text",
    itemUrl: "h2 a@href",
    itemIcon: "",
    itemCover: "",
    itemDesc: "div.b_caption p@text"
}
  , bu = {
    id: ua,
    name: fa,
    icon: ma,
    description: da,
    search: pa
}
  , Eu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bu,
    description: da,
    icon: ma,
    id: ua,
    name: fa,
    search: pa
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ga = "google"
  , ha = "Google"
  , _a = "img/microsoft.svg"
  , va = "Google搜索是全球公认为全球最大的搜索引擎"
  , ya = {
    url: "https://www.google.com/search?q={searchText}&ie={inputEncoding}",
    list: "#content_left div.result",
    itemTitle: "h3 a@text",
    itemUrl: "h3 a:first-child@href",
    itemIcon: "",
    itemCover: "img.c-img@src",
    itemDesc: "div.c-abstract@text"
}
  , Su = {
    id: ga,
    name: ha,
    icon: _a,
    description: va,
    search: ya
}
  , Au = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Su,
    description: va,
    icon: _a,
    id: ga,
    name: ha,
    search: ya
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ba = "maven"
  , Ea = "Maven"
  , Sa = "img/microsoft.svg"
  , Aa = "Maven 是一个项目管理工具，可以对 Java 项目进行构建、依赖管理。"
  , wa = {
    url: "https://mvnrepository.com/search?q={searchText}"
}
  , wu = {
    id: ba,
    name: Ea,
    icon: Sa,
    description: Aa,
    search: wa
}
  , xu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: wu,
    description: Aa,
    icon: Sa,
    id: ba,
    name: Ea,
    search: wa
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xa = "npm"
  , Ra = "npm"
  , Oa = "img/microsoft.svg"
  , Ta = "npm (node package manager) Javascript包管理"
  , ka = {
    url: "https://www.npmjs.com/search?q={searchText}"
}
  , Ru = {
    id: xa,
    name: Ra,
    icon: Oa,
    description: Ta,
    search: ka
}
  , Ou = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ru,
    description: Ta,
    icon: Oa,
    id: xa,
    name: Ra,
    search: ka
}, Symbol.toStringTag, {
    value: "Module"
}));
var bt = (e => (e.Blank = "_blank",
e.Self = "_self",
e))(bt || {})
  , at = (e => (e[e.none = 0] = "none",
e[e.baidu = 1] = "baidu",
e[e.bing = 2] = "bing",
e[e.google = 3] = "google",
e))(at || {});
function Ca(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Tu} = Object.prototype
  , {getPrototypeOf: Gr} = Object
  , qn = (e => t => {
    const n = Tu.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , lt = e => (e = e.toLowerCase(),
t => qn(t) === e)
  , Gn = e => t => typeof t === e
  , {isArray: Yt} = Array
  , mn = Gn("undefined");
function ku(e) {
    return e !== null && !mn(e) && e.constructor !== null && !mn(e.constructor) && Xe(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const za = lt("ArrayBuffer");
function Cu(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && za(e.buffer),
    t
}
const zu = Gn("string")
  , Xe = Gn("function")
  , Ia = Gn("number")
  , Kn = e => e !== null && typeof e == "object"
  , Iu = e => e === !0 || e === !1
  , kn = e => {
    if (qn(e) !== "object")
        return !1;
    const t = Gr(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Nu = lt("Date")
  , Pu = lt("File")
  , Lu = lt("Blob")
  , Du = lt("FileList")
  , Fu = e => Kn(e) && Xe(e.pipe)
  , Mu = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Xe(e.append) && ((t = qn(e)) === "formdata" || t === "object" && Xe(e.toString) && e.toString() === "[object FormData]"))
}
  , Uu = lt("URLSearchParams")
  , $u = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vn(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, o;
    if (typeof e != "object" && (e = [e]),
    Yt(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = a.length;
        let l;
        for (r = 0; r < s; r++)
            l = a[r],
            t.call(null, e[l], l, e)
    }
}
function Na(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, o;
    for (; r-- > 0; )
        if (o = n[r],
        t === o.toLowerCase())
            return o;
    return null
}
const Pa = ( () => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , La = e => !mn(e) && e !== Pa;
function xr() {
    const {caseless: e} = La(this) && this || {}
      , t = {}
      , n = (r, o) => {
        const a = e && Na(t, o) || o;
        kn(t[a]) && kn(r) ? t[a] = xr(t[a], r) : kn(r) ? t[a] = xr({}, r) : Yt(r) ? t[a] = r.slice() : t[a] = r
    }
    ;
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && vn(arguments[r], n);
    return t
}
const Bu = (e, t, n, {allOwnKeys: r}={}) => (vn(t, (o, a) => {
    n && Xe(o) ? e[a] = Ca(o, n) : e[a] = o
}
, {
    allOwnKeys: r
}),
e)
  , ju = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Hu = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Wu = (e, t, n, r) => {
    let o, a, s;
    const l = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        a = o.length; a-- > 0; )
            s = o[a],
            (!r || r(s, e, t)) && !l[s] && (t[s] = e[s],
            l[s] = !0);
        e = n !== !1 && Gr(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Vu = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , Yu = e => {
    if (!e)
        return null;
    if (Yt(e))
        return e;
    let t = e.length;
    if (!Ia(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , qu = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Gr(Uint8Array))
  , Gu = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const a = o.value;
        t.call(e, a[0], a[1])
    }
}
  , Ku = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Ju = lt("HTMLFormElement")
  , Xu = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
    return r.toUpperCase() + o
})
  , $o = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Qu = lt("RegExp")
  , Da = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    vn(n, (o, a) => {
        t(o, a, e) !== !1 && (r[a] = o)
    }
    ),
    Object.defineProperties(e, r)
}
  , Zu = e => {
    Da(e, (t, n) => {
        if (Xe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (Xe(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , ef = (e, t) => {
    const n = {}
      , r = o => {
        o.forEach(a => {
            n[a] = !0
        }
        )
    }
    ;
    return Yt(e) ? r(e) : r(String(e).split(t)),
    n
}
  , tf = () => {}
  , nf = (e, t) => (e = +e,
Number.isFinite(e) ? e : t)
  , dr = "abcdefghijklmnopqrstuvwxyz"
  , Bo = "0123456789"
  , Fa = {
    DIGIT: Bo,
    ALPHA: dr,
    ALPHA_DIGIT: dr + dr.toUpperCase() + Bo
}
  , rf = (e=16, t=Fa.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function of(e) {
    return !!(e && Xe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const sf = e => {
    const t = new Array(10)
      , n = (r, o) => {
        if (Kn(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[o] = r;
                const a = Yt(r) ? [] : {};
                return vn(r, (s, l) => {
                    const c = n(s, o + 1);
                    !mn(c) && (a[l] = c)
                }
                ),
                t[o] = void 0,
                a
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , af = lt("AsyncFunction")
  , lf = e => e && (Kn(e) || Xe(e)) && Xe(e.then) && Xe(e.catch)
  , T = {
    isArray: Yt,
    isArrayBuffer: za,
    isBuffer: ku,
    isFormData: Mu,
    isArrayBufferView: Cu,
    isString: zu,
    isNumber: Ia,
    isBoolean: Iu,
    isObject: Kn,
    isPlainObject: kn,
    isUndefined: mn,
    isDate: Nu,
    isFile: Pu,
    isBlob: Lu,
    isRegExp: Qu,
    isFunction: Xe,
    isStream: Fu,
    isURLSearchParams: Uu,
    isTypedArray: qu,
    isFileList: Du,
    forEach: vn,
    merge: xr,
    extend: Bu,
    trim: $u,
    stripBOM: ju,
    inherits: Hu,
    toFlatObject: Wu,
    kindOf: qn,
    kindOfTest: lt,
    endsWith: Vu,
    toArray: Yu,
    forEachEntry: Gu,
    matchAll: Ku,
    isHTMLForm: Ju,
    hasOwnProperty: $o,
    hasOwnProp: $o,
    reduceDescriptors: Da,
    freezeMethods: Zu,
    toObjectSet: ef,
    toCamelCase: Xu,
    noop: tf,
    toFiniteNumber: nf,
    findKey: Na,
    global: Pa,
    isContextDefined: La,
    ALPHABET: Fa,
    generateString: rf,
    isSpecCompliantForm: of,
    toJSONObject: sf,
    isAsyncFn: af,
    isThenable: lf
};
function me(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
T.inherits(me, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: T.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Ma = me.prototype
  , Ua = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Ua[e] = {
        value: e
    }
}
);
Object.defineProperties(me, Ua);
Object.defineProperty(Ma, "isAxiosError", {
    value: !0
});
me.from = (e, t, n, r, o, a) => {
    const s = Object.create(Ma);
    return T.toFlatObject(e, s, function(c) {
        return c !== Error.prototype
    }, l => l !== "isAxiosError"),
    me.call(s, e.message, t, n, r, o),
    s.cause = e,
    s.name = e.name,
    a && Object.assign(s, a),
    s
}
;
const cf = null;
function Rr(e) {
    return T.isPlainObject(e) || T.isArray(e)
}
function $a(e) {
    return T.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function jo(e, t, n) {
    return e ? e.concat(t).map(function(o, a) {
        return o = $a(o),
        !n && a ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function uf(e) {
    return T.isArray(e) && !e.some(Rr)
}
const ff = T.toFlatObject(T, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Jn(e, t, n) {
    if (!T.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = T.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(A, z) {
        return !T.isUndefined(z[A])
    });
    const r = n.metaTokens
      , o = n.visitor || f
      , a = n.dots
      , s = n.indexes
      , c = (n.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
    if (!T.isFunction(o))
        throw new TypeError("visitor must be a function");
    function i(g) {
        if (g === null)
            return "";
        if (T.isDate(g))
            return g.toISOString();
        if (!c && T.isBlob(g))
            throw new me("Blob is not supported. Use a Buffer instead.");
        return T.isArrayBuffer(g) || T.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
    }
    function f(g, A, z) {
        let w = g;
        if (g && !z && typeof g == "object") {
            if (T.endsWith(A, "{}"))
                A = r ? A : A.slice(0, -2),
                g = JSON.stringify(g);
            else if (T.isArray(g) && uf(g) || (T.isFileList(g) || T.endsWith(A, "[]")) && (w = T.toArray(g)))
                return A = $a(A),
                w.forEach(function(j, $) {
                    !(T.isUndefined(j) || j === null) && t.append(s === !0 ? jo([A], $, a) : s === null ? A : A + "[]", i(j))
                }),
                !1
        }
        return Rr(g) ? !0 : (t.append(jo(z, A, a), i(g)),
        !1)
    }
    const m = []
      , d = Object.assign(ff, {
        defaultVisitor: f,
        convertValue: i,
        isVisitable: Rr
    });
    function h(g, A) {
        if (!T.isUndefined(g)) {
            if (m.indexOf(g) !== -1)
                throw Error("Circular reference detected in " + A.join("."));
            m.push(g),
            T.forEach(g, function(w, R) {
                (!(T.isUndefined(w) || w === null) && o.call(t, w, T.isString(R) ? R.trim() : R, A, d)) === !0 && h(w, A ? A.concat(R) : [R])
            }),
            m.pop()
        }
    }
    if (!T.isObject(e))
        throw new TypeError("data must be an object");
    return h(e),
    t
}
function Ho(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Kr(e, t) {
    this._pairs = [],
    e && Jn(e, this, t)
}
const Ba = Kr.prototype;
Ba.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Ba.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Ho)
    }
    : Ho;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function mf(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function ja(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || mf
      , o = n && n.serialize;
    let a;
    if (o ? a = o(t, n) : a = T.isURLSearchParams(t) ? t.toString() : new Kr(t,n).toString(r),
    a) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + a
    }
    return e
}
class df {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        T.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Wo = df
  , Ha = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , pf = typeof URLSearchParams < "u" ? URLSearchParams : Kr
  , gf = typeof FormData < "u" ? FormData : null
  , hf = typeof Blob < "u" ? Blob : null
  , _f = ( () => {
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
  , vf = ( () => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , it = {
    isBrowser: !0,
    classes: {
        URLSearchParams: pf,
        FormData: gf,
        Blob: hf
    },
    isStandardBrowserEnv: _f,
    isStandardBrowserWebWorkerEnv: vf,
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
function yf(e, t) {
    return Jn(e, new it.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, a) {
            return it.isNode && T.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : a.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function bf(e) {
    return T.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function Ef(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const o = n.length;
    let a;
    for (r = 0; r < o; r++)
        a = n[r],
        t[a] = e[a];
    return t
}
function Wa(e) {
    function t(n, r, o, a) {
        let s = n[a++];
        const l = Number.isFinite(+s)
          , c = a >= n.length;
        return s = !s && T.isArray(o) ? o.length : s,
        c ? (T.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r,
        !l) : ((!o[s] || !T.isObject(o[s])) && (o[s] = []),
        t(n, r, o[s], a) && T.isArray(o[s]) && (o[s] = Ef(o[s])),
        !l)
    }
    if (T.isFormData(e) && T.isFunction(e.entries)) {
        const n = {};
        return T.forEachEntry(e, (r, o) => {
            t(bf(r), o, n, 0)
        }
        ),
        n
    }
    return null
}
const Sf = {
    "Content-Type": void 0
};
function Af(e, t, n) {
    if (T.isString(e))
        try {
            return (t || JSON.parse)(e),
            T.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Xn = {
    transitional: Ha,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , a = T.isObject(t);
        if (a && T.isHTMLForm(t) && (t = new FormData(t)),
        T.isFormData(t))
            return o && o ? JSON.stringify(Wa(t)) : t;
        if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t))
            return t;
        if (T.isArrayBufferView(t))
            return t.buffer;
        if (T.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let l;
        if (a) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return yf(t, this.formSerializer).toString();
            if ((l = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return Jn(l ? {
                    "files[]": t
                } : t, c && new c, this.formSerializer)
            }
        }
        return a || o ? (n.setContentType("application/json", !1),
        Af(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Xn.transitional
          , r = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (t && T.isString(t) && (r && !this.responseType || o)) {
            const s = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (s)
                    throw l.name === "SyntaxError" ? me.from(l, me.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: it.classes.FormData,
        Blob: it.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
T.forEach(["delete", "get", "head"], function(t) {
    Xn.headers[t] = {}
});
T.forEach(["post", "put", "patch"], function(t) {
    Xn.headers[t] = T.merge(Sf)
});
const Jr = Xn
  , wf = T.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , xf = e => {
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function(s) {
        o = s.indexOf(":"),
        n = s.substring(0, o).trim().toLowerCase(),
        r = s.substring(o + 1).trim(),
        !(!n || t[n] && wf[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Vo = Symbol("internals");
function Zt(e) {
    return e && String(e).trim().toLowerCase()
}
function Cn(e) {
    return e === !1 || e == null ? e : T.isArray(e) ? e.map(Cn) : String(e)
}
function Rf(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Of = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pr(e, t, n, r, o) {
    if (T.isFunction(r))
        return r.call(this, t, n);
    if (o && (t = n),
    !!T.isString(t)) {
        if (T.isString(r))
            return t.indexOf(r) !== -1;
        if (T.isRegExp(r))
            return r.test(t)
    }
}
function Tf(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function kf(e, t) {
    const n = T.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, a, s) {
                return this[r].call(this, t, o, a, s)
            },
            configurable: !0
        })
    }
    )
}
class Qn {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;
        function a(l, c, i) {
            const f = Zt(c);
            if (!f)
                throw new Error("header name must be a non-empty string");
            const m = T.findKey(o, f);
            (!m || o[m] === void 0 || i === !0 || i === void 0 && o[m] !== !1) && (o[m || c] = Cn(l))
        }
        const s = (l, c) => T.forEach(l, (i, f) => a(i, f, c));
        return T.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : T.isString(t) && (t = t.trim()) && !Of(t) ? s(xf(t), n) : t != null && a(n, t, r),
        this
    }
    get(t, n) {
        if (t = Zt(t),
        t) {
            const r = T.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n)
                    return o;
                if (n === !0)
                    return Rf(o);
                if (T.isFunction(n))
                    return n.call(this, o, r);
                if (T.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Zt(t),
        t) {
            const r = T.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || pr(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;
        function a(s) {
            if (s = Zt(s),
            s) {
                const l = T.findKey(r, s);
                l && (!n || pr(r, r[l], l, n)) && (delete r[l],
                o = !0)
            }
        }
        return T.isArray(t) ? t.forEach(a) : a(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , o = !1;
        for (; r--; ) {
            const a = n[r];
            (!t || pr(this, this[a], a, t, !0)) && (delete this[a],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , r = {};
        return T.forEach(this, (o, a) => {
            const s = T.findKey(r, a);
            if (s) {
                n[s] = Cn(o),
                delete n[a];
                return
            }
            const l = t ? Tf(a) : String(a).trim();
            l !== a && delete n[a],
            n[l] = Cn(o),
            r[l] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return T.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && T.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)),
        r
    }
    static accessor(t) {
        const r = (this[Vo] = this[Vo] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function a(s) {
            const l = Zt(s);
            r[l] || (kf(o, s),
            r[l] = !0)
        }
        return T.isArray(t) ? t.forEach(a) : a(t),
        this
    }
}
Qn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.freezeMethods(Qn.prototype);
T.freezeMethods(Qn);
const mt = Qn;
function gr(e, t) {
    const n = this || Jr
      , r = t || n
      , o = mt.from(r.headers);
    let a = r.data;
    return T.forEach(e, function(l) {
        a = l.call(n, a, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    a
}
function Va(e) {
    return !!(e && e.__CANCEL__)
}
function yn(e, t, n) {
    me.call(this, e ?? "canceled", me.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
T.inherits(yn, me, {
    __CANCEL__: !0
});
function Cf(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new me("Request failed with status code " + n.status,[me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const zf = it.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, o, a, s, l) {
            const c = [];
            c.push(n + "=" + encodeURIComponent(r)),
            T.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()),
            T.isString(a) && c.push("path=" + a),
            T.isString(s) && c.push("domain=" + s),
            l === !0 && c.push("secure"),
            document.cookie = c.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();
function If(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Nf(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Ya(e, t) {
    return e && !If(t) ? Nf(e, t) : t
}
const Pf = it.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function o(a) {
        let s = a;
        return t && (n.setAttribute("href", s),
        s = n.href),
        n.setAttribute("href", s),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
    function(s) {
        const l = T.isString(s) ? o(s) : s;
        return l.protocol === r.protocol && l.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function Lf(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Df(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let o = 0, a = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(c) {
        const i = Date.now()
          , f = r[a];
        s || (s = i),
        n[o] = c,
        r[o] = i;
        let m = a
          , d = 0;
        for (; m !== o; )
            d += n[m++],
            m = m % e;
        if (o = (o + 1) % e,
        o === a && (a = (a + 1) % e),
        i - s < t)
            return;
        const h = f && i - f;
        return h ? Math.round(d * 1e3 / h) : void 0
    }
}
function Yo(e, t) {
    let n = 0;
    const r = Df(50, 250);
    return o => {
        const a = o.loaded
          , s = o.lengthComputable ? o.total : void 0
          , l = a - n
          , c = r(l)
          , i = a <= s;
        n = a;
        const f = {
            loaded: a,
            total: s,
            progress: s ? a / s : void 0,
            bytes: l,
            rate: c || void 0,
            estimated: c && s && i ? (s - a) / c : void 0,
            event: o
        };
        f[t ? "download" : "upload"] = !0,
        e(f)
    }
}
const Ff = typeof XMLHttpRequest < "u"
  , Mf = Ff && function(e) {
    return new Promise(function(n, r) {
        let o = e.data;
        const a = mt.from(e.headers).normalize()
          , s = e.responseType;
        let l;
        function c() {
            e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l)
        }
        T.isFormData(o) && (it.isStandardBrowserEnv || it.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType("multipart/form-data;", !1));
        let i = new XMLHttpRequest;
        if (e.auth) {
            const h = e.auth.username || ""
              , g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            a.set("Authorization", "Basic " + btoa(h + ":" + g))
        }
        const f = Ya(e.baseURL, e.url);
        i.open(e.method.toUpperCase(), ja(f, e.params, e.paramsSerializer), !0),
        i.timeout = e.timeout;
        function m() {
            if (!i)
                return;
            const h = mt.from("getAllResponseHeaders"in i && i.getAllResponseHeaders())
              , A = {
                data: !s || s === "text" || s === "json" ? i.responseText : i.response,
                status: i.status,
                statusText: i.statusText,
                headers: h,
                config: e,
                request: i
            };
            Cf(function(w) {
                n(w),
                c()
            }, function(w) {
                r(w),
                c()
            }, A),
            i = null
        }
        if ("onloadend"in i ? i.onloadend = m : i.onreadystatechange = function() {
            !i || i.readyState !== 4 || i.status === 0 && !(i.responseURL && i.responseURL.indexOf("file:") === 0) || setTimeout(m)
        }
        ,
        i.onabort = function() {
            i && (r(new me("Request aborted",me.ECONNABORTED,e,i)),
            i = null)
        }
        ,
        i.onerror = function() {
            r(new me("Network Error",me.ERR_NETWORK,e,i)),
            i = null
        }
        ,
        i.ontimeout = function() {
            let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const A = e.transitional || Ha;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
            r(new me(g,A.clarifyTimeoutError ? me.ETIMEDOUT : me.ECONNABORTED,e,i)),
            i = null
        }
        ,
        it.isStandardBrowserEnv) {
            const h = (e.withCredentials || Pf(f)) && e.xsrfCookieName && zf.read(e.xsrfCookieName);
            h && a.set(e.xsrfHeaderName, h)
        }
        o === void 0 && a.setContentType(null),
        "setRequestHeader"in i && T.forEach(a.toJSON(), function(g, A) {
            i.setRequestHeader(A, g)
        }),
        T.isUndefined(e.withCredentials) || (i.withCredentials = !!e.withCredentials),
        s && s !== "json" && (i.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && i.addEventListener("progress", Yo(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && i.upload && i.upload.addEventListener("progress", Yo(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (l = h => {
            i && (r(!h || h.type ? new yn(null,e,i) : h),
            i.abort(),
            i = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(l),
        e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const d = Lf(f);
        if (d && it.protocols.indexOf(d) === -1) {
            r(new me("Unsupported protocol " + d + ":",me.ERR_BAD_REQUEST,e));
            return
        }
        i.send(o || null)
    }
    )
}
  , zn = {
    http: cf,
    xhr: Mf
};
T.forEach(zn, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Uf = {
    getAdapter: e => {
        e = T.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        for (let o = 0; o < t && (n = e[o],
        !(r = T.isString(n) ? zn[n.toLowerCase()] : n)); o++)
            ;
        if (!r)
            throw r === !1 ? new me(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(T.hasOwnProp(zn, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!T.isFunction(r))
            throw new TypeError("adapter is not a function");
        return r
    }
    ,
    adapters: zn
};
function hr(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new yn(null,e)
}
function qo(e) {
    return hr(e),
    e.headers = mt.from(e.headers),
    e.data = gr.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Uf.getAdapter(e.adapter || Jr.adapter)(e).then(function(r) {
        return hr(e),
        r.data = gr.call(e, e.transformResponse, r),
        r.headers = mt.from(r.headers),
        r
    }, function(r) {
        return Va(r) || (hr(e),
        r && r.response && (r.response.data = gr.call(e, e.transformResponse, r.response),
        r.response.headers = mt.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Go = e => e instanceof mt ? e.toJSON() : e;
function Ht(e, t) {
    t = t || {};
    const n = {};
    function r(i, f, m) {
        return T.isPlainObject(i) && T.isPlainObject(f) ? T.merge.call({
            caseless: m
        }, i, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f
    }
    function o(i, f, m) {
        if (T.isUndefined(f)) {
            if (!T.isUndefined(i))
                return r(void 0, i, m)
        } else
            return r(i, f, m)
    }
    function a(i, f) {
        if (!T.isUndefined(f))
            return r(void 0, f)
    }
    function s(i, f) {
        if (T.isUndefined(f)) {
            if (!T.isUndefined(i))
                return r(void 0, i)
        } else
            return r(void 0, f)
    }
    function l(i, f, m) {
        if (m in t)
            return r(i, f);
        if (m in e)
            return r(void 0, i)
    }
    const c = {
        url: a,
        method: a,
        data: a,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: l,
        headers: (i, f) => o(Go(i), Go(f), !0)
    };
    return T.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
        const m = c[f] || o
          , d = m(e[f], t[f], f);
        T.isUndefined(d) && m !== l || (n[f] = d)
    }),
    n
}
const qa = "1.4.0"
  , Xr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Xr[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Ko = {};
Xr.transitional = function(t, n, r) {
    function o(a, s) {
        return "[Axios v" + qa + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "")
    }
    return (a, s, l) => {
        if (t === !1)
            throw new me(o(s, " has been removed" + (n ? " in " + n : "")),me.ERR_DEPRECATED);
        return n && !Ko[s] && (Ko[s] = !0,
        console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(a, s, l) : !0
    }
}
;
function $f(e, t, n) {
    if (typeof e != "object")
        throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
        const a = r[o]
          , s = t[a];
        if (s) {
            const l = e[a]
              , c = l === void 0 || s(l, a, e);
            if (c !== !0)
                throw new me("option " + a + " must be " + c,me.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new me("Unknown option " + a,me.ERR_BAD_OPTION)
    }
}
const Or = {
    assertOptions: $f,
    validators: Xr
}
  , _t = Or.validators;
let Fn = class {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Wo,
            response: new Wo
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Ht(this.defaults, n);
        const {transitional: r, paramsSerializer: o, headers: a} = n;
        r !== void 0 && Or.assertOptions(r, {
            silentJSONParsing: _t.transitional(_t.boolean),
            forcedJSONParsing: _t.transitional(_t.boolean),
            clarifyTimeoutError: _t.transitional(_t.boolean)
        }, !1),
        o != null && (T.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : Or.assertOptions(o, {
            encode: _t.function,
            serialize: _t.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s;
        s = a && T.merge(a.common, a[n.method]),
        s && T.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g => {
            delete a[g]
        }
        ),
        n.headers = mt.concat(s, a);
        const l = [];
        let c = !0;
        this.interceptors.request.forEach(function(A) {
            typeof A.runWhen == "function" && A.runWhen(n) === !1 || (c = c && A.synchronous,
            l.unshift(A.fulfilled, A.rejected))
        });
        const i = [];
        this.interceptors.response.forEach(function(A) {
            i.push(A.fulfilled, A.rejected)
        });
        let f, m = 0, d;
        if (!c) {
            const g = [qo.bind(this), void 0];
            for (g.unshift.apply(g, l),
            g.push.apply(g, i),
            d = g.length,
            f = Promise.resolve(n); m < d; )
                f = f.then(g[m++], g[m++]);
            return f
        }
        d = l.length;
        let h = n;
        for (m = 0; m < d; ) {
            const g = l[m++]
              , A = l[m++];
            try {
                h = g(h)
            } catch (z) {
                A.call(this, z);
                break
            }
        }
        try {
            f = qo.call(this, h)
        } catch (g) {
            return Promise.reject(g)
        }
        for (m = 0,
        d = i.length; m < d; )
            f = f.then(i[m++], i[m++]);
        return f
    }
    getUri(t) {
        t = Ht(this.defaults, t);
        const n = Ya(t.baseURL, t.url);
        return ja(n, t.params, t.paramsSerializer)
    }
}
;
T.forEach(["delete", "get", "head", "options"], function(t) {
    Fn.prototype[t] = function(n, r) {
        return this.request(Ht(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
T.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(a, s, l) {
            return this.request(Ht(l || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: a,
                data: s
            }))
        }
    }
    Fn.prototype[t] = n(),
    Fn.prototype[t + "Form"] = n(!0)
});
const In = Fn;
class Qr {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(a) {
            n = a
        }
        );
        const r = this;
        this.promise.then(o => {
            if (!r._listeners)
                return;
            let a = r._listeners.length;
            for (; a-- > 0; )
                r._listeners[a](o);
            r._listeners = null
        }
        ),
        this.promise.then = o => {
            let a;
            const s = new Promise(l => {
                r.subscribe(l),
                a = l
            }
            ).then(o);
            return s.cancel = function() {
                r.unsubscribe(a)
            }
            ,
            s
        }
        ,
        t(function(a, s, l) {
            r.reason || (r.reason = new yn(a,s,l),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Qr(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
const Bf = Qr;
function jf(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function Hf(e) {
    return T.isObject(e) && e.isAxiosError === !0
}
const Tr = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Tr).forEach( ([e,t]) => {
    Tr[t] = e
}
);
const Wf = Tr;
function Ga(e) {
    const t = new In(e)
      , n = Ca(In.prototype.request, t);
    return T.extend(n, In.prototype, t, {
        allOwnKeys: !0
    }),
    T.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return Ga(Ht(e, o))
    }
    ,
    n
}
const Ie = Ga(Jr);
Ie.Axios = In;
Ie.CanceledError = yn;
Ie.CancelToken = Bf;
Ie.isCancel = Va;
Ie.VERSION = qa;
Ie.toFormData = Jn;
Ie.AxiosError = me;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(t) {
    return Promise.all(t)
}
;
Ie.spread = jf;
Ie.isAxiosError = Hf;
Ie.mergeConfig = Ht;
Ie.AxiosHeaders = mt;
Ie.formToJSON = e => Wa(T.isHTMLForm(e) ? new FormData(e) : e);
Ie.HttpStatusCode = Wf;
Ie.default = Ie;
const Vf = Ie
  , bn = Vf.create({
    timeout: 1e4
});
function je(e) {
    return e === void 0 || e === null ? !0 : typeof e == "string" || e instanceof Array ? e.length === 0 : e instanceof Set ? e.size === 0 : !1
}
function Jo(e, t) {
    if (e && t) {
        const n = e.toLowerCase()
          , r = t.toLowerCase();
        return n === r
    } else
        return !1
}
function Ka(e, ...t) {
    const n = JSON.stringify(e)
      , r = JSON.parse(n);
    for (let o of t)
        Reflect.has(r, o) && Reflect.deleteProperty(r, o);
    return r
}
function Ja(e, t, n=!1, r=!0, o=0) {
    const a = Object.keys(e);
    for (const s of a) {
        const l = e[s];
        r && je(l) || n && !Reflect.has(t, s) || (typeof l == "object" && o > 0 ? Ja(l, t[s], n, r, o - 1) : t[s] = l)
    }
}
function Yf() {
    for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++)
        e[n] = t.substr(Math.floor(Math.random() * 16), 1);
    return e[14] = "4",
    e[19] = t.substr(e[19] & 3 | 8, 1),
    e[8] = e[13] = e[18] = e[23] = "-",
    e.join("")
}
const Un = class {
    constructor(t, n) {
        Fe(this, "url");
        const r = Object.keys(n);
        for (let o of r) {
            const a = `{${o}}`;
            t.includes(a) && (t = t.replace(a, encodeURIComponent(n[o])))
        }
        this.url = new URL(t)
    }
    static defalut(t, n) {
        return n = Object.assign(Un.DEFAULT, n),
        new Un(t,n)
    }
    getUrl() {
        return this.url
    }
    getUrlString() {
        return this.url.toString()
    }
}
;
let an = Un;
Fe(an, "DEFAULT", {
    inputEncoding: "utf-8",
    page: 0
});
class ln {
    constructor(t) {
        Fe(this, "current");
        this.current = t
    }
    static async load(t) {
        const {data: n} = await bn.get(t, {
            responseType: "document"
        });
        if (!(n instanceof Document))
            throw new Error("error content");
        return new ln(n)
    }
    getElements(t) {
        return Array.from(this.current.querySelectorAll(t)).map(n => new ln(n))
    }
    getElement(t) {
        const n = this.current.querySelector(t);
        return n && new ln(n)
    }
    getStringList(t) {
        if (je(t))
            return null;
        let n = "text";
        if (t.includes("@")) {
            const a = t.split("@");
            t = a[0],
            n = a[1]
        }
        const r = this.getElements(t)
          , o = [];
        if (je(r))
            return o;
        for (let a of r)
            o.push(a.getData(n));
        return o
    }
    getString(t) {
        var n;
        return (n = this.getStringList(t)) == null ? void 0 : n.join(`
`)
    }
    getData(t) {
        var n;
        switch (t) {
        case "href":
        case "src":
            return this.current instanceof Element ? this.current.getAttribute(t) : null;
        case "text":
        default:
            return (n = this.current) == null ? void 0 : n.textContent
        }
    }
}
class qf {
    constructor(t) {
        Fe(this, "id");
        Fe(this, "name");
        Fe(this, "description");
        Fe(this, "icon");
        Fe(this, "search");
        if (typeof t == "string" && (t = JSON.parse(t)),
        typeof t == "object")
            this.id = t.id,
            this.name = t.name,
            this.description = t.description,
            this.icon = t.icon,
            this.search = t.search;
        else
            throw new Error("error data")
    }
    async getSearchList(t, n=0) {
        const r = an.defalut(this.search.url, {
            page: n,
            searchText: t
        }).getUrlString()
          , a = (await ln.load(r)).getElements(this.search.list)
          , s = [];
        for (let l of a) {
            const c = l.getString(this.search.itemTitle)
              , i = l.getString(this.search.itemUrl)
              , f = l.getString(this.search.itemDesc)
              , m = l.getString(this.search.itemCover)
              , d = l.getString(this.search.itemIcon);
            s.push({
                title: c,
                url: i,
                urlText: i,
                description: f,
                cover: m,
                icon: d
            })
        }
        return s
    }
}
async function Gf(e) {
    try {
        const {data: t} = await bn.get("https://suggestion.baidu.com/su", {
            params: {
                p: 3,
                ie: "UTF-8",
                cb: "",
                wd: e
            },
            responseType: "text"
        })
          , r = /.*?s:(\[.*?\]).*?/.exec(t)[1] ?? "[]";
        return JSON.parse(r)
    } catch {
        return []
    }
}
async function Kf(e) {
    try {
        const {data: t} = await bn.get("https://api.bing.com/qsonhs.aspx", {
            params: {
                type: "json",
                q: e
            }
        });
        return t.AS.Results[0].Suggests.map(n => n.Txt)
    } catch {
        return []
    }
}
async function Jf(e) {
    try {
        const {data: t} = await bn.get("https://suggestqueries.google.com/complete/search", {
            params: {
                client: "gws-wiz",
                q: e,
                jsonp: ""
            },
            responseType: "text"
        })
          , n = /\["(.*?)"/g
          , r = [];
        let o = null;
        for (; (o = n.exec(t)) != null; )
            r.push(o[1]);
        return r
    } catch {
        return []
    }
}
function xn(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Xa = {
    exports: {}
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, t) {
    (function(n) {
        e.exports = n()
    }
    )(function() {
        return function n(r, o, a) {
            function s(i, f) {
                if (!o[i]) {
                    if (!r[i]) {
                        var m = typeof xn == "function" && xn;
                        if (!f && m)
                            return m(i, !0);
                        if (l)
                            return l(i, !0);
                        var d = new Error("Cannot find module '" + i + "'");
                        throw d.code = "MODULE_NOT_FOUND",
                        d
                    }
                    var h = o[i] = {
                        exports: {}
                    };
                    r[i][0].call(h.exports, function(g) {
                        var A = r[i][1][g];
                        return s(A || g)
                    }, h, h.exports, n, r, o, a)
                }
                return o[i].exports
            }
            for (var l = typeof xn == "function" && xn, c = 0; c < a.length; c++)
                s(a[c]);
            return s
        }({
            1: [function(n, r, o) {
                (function(a) {
                    var s = a.MutationObserver || a.WebKitMutationObserver, l;
                    if (s) {
                        var c = 0
                          , i = new s(g)
                          , f = a.document.createTextNode("");
                        i.observe(f, {
                            characterData: !0
                        }),
                        l = function() {
                            f.data = c = ++c % 2
                        }
                    } else if (!a.setImmediate && typeof a.MessageChannel < "u") {
                        var m = new a.MessageChannel;
                        m.port1.onmessage = g,
                        l = function() {
                            m.port2.postMessage(0)
                        }
                    } else
                        "document"in a && "onreadystatechange"in a.document.createElement("script") ? l = function() {
                            var z = a.document.createElement("script");
                            z.onreadystatechange = function() {
                                g(),
                                z.onreadystatechange = null,
                                z.parentNode.removeChild(z),
                                z = null
                            }
                            ,
                            a.document.documentElement.appendChild(z)
                        }
                        : l = function() {
                            setTimeout(g, 0)
                        }
                        ;
                    var d, h = [];
                    function g() {
                        d = !0;
                        for (var z, w, R = h.length; R; ) {
                            for (w = h,
                            h = [],
                            z = -1; ++z < R; )
                                w[z]();
                            R = h.length
                        }
                        d = !1
                    }
                    r.exports = A;
                    function A(z) {
                        h.push(z) === 1 && !d && l()
                    }
                }
                ).call(this, typeof Ve < "u" ? Ve : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }
            , {}],
            2: [function(n, r, o) {
                var a = n(1);
                function s() {}
                var l = {}
                  , c = ["REJECTED"]
                  , i = ["FULFILLED"]
                  , f = ["PENDING"];
                r.exports = m;
                function m(E) {
                    if (typeof E != "function")
                        throw new TypeError("resolver must be a function");
                    this.state = f,
                    this.queue = [],
                    this.outcome = void 0,
                    E !== s && A(this, E)
                }
                m.prototype.catch = function(E) {
                    return this.then(null, E)
                }
                ,
                m.prototype.then = function(E, H) {
                    if (typeof E != "function" && this.state === i || typeof H != "function" && this.state === c)
                        return this;
                    var V = new this.constructor(s);
                    if (this.state !== f) {
                        var O = this.state === i ? E : H;
                        h(V, O, this.outcome)
                    } else
                        this.queue.push(new d(V,E,H));
                    return V
                }
                ;
                function d(E, H, V) {
                    this.promise = E,
                    typeof H == "function" && (this.onFulfilled = H,
                    this.callFulfilled = this.otherCallFulfilled),
                    typeof V == "function" && (this.onRejected = V,
                    this.callRejected = this.otherCallRejected)
                }
                d.prototype.callFulfilled = function(E) {
                    l.resolve(this.promise, E)
                }
                ,
                d.prototype.otherCallFulfilled = function(E) {
                    h(this.promise, this.onFulfilled, E)
                }
                ,
                d.prototype.callRejected = function(E) {
                    l.reject(this.promise, E)
                }
                ,
                d.prototype.otherCallRejected = function(E) {
                    h(this.promise, this.onRejected, E)
                }
                ;
                function h(E, H, V) {
                    a(function() {
                        var O;
                        try {
                            O = H(V)
                        } catch (x) {
                            return l.reject(E, x)
                        }
                        O === E ? l.reject(E, new TypeError("Cannot resolve promise with itself")) : l.resolve(E, O)
                    })
                }
                l.resolve = function(E, H) {
                    var V = z(g, H);
                    if (V.status === "error")
                        return l.reject(E, V.value);
                    var O = V.value;
                    if (O)
                        A(E, O);
                    else {
                        E.state = i,
                        E.outcome = H;
                        for (var x = -1, D = E.queue.length; ++x < D; )
                            E.queue[x].callFulfilled(H)
                    }
                    return E
                }
                ,
                l.reject = function(E, H) {
                    E.state = c,
                    E.outcome = H;
                    for (var V = -1, O = E.queue.length; ++V < O; )
                        E.queue[V].callRejected(H);
                    return E
                }
                ;
                function g(E) {
                    var H = E && E.then;
                    if (E && (typeof E == "object" || typeof E == "function") && typeof H == "function")
                        return function() {
                            H.apply(E, arguments)
                        }
                }
                function A(E, H) {
                    var V = !1;
                    function O(ee) {
                        V || (V = !0,
                        l.reject(E, ee))
                    }
                    function x(ee) {
                        V || (V = !0,
                        l.resolve(E, ee))
                    }
                    function D() {
                        H(x, O)
                    }
                    var q = z(D);
                    q.status === "error" && O(q.value)
                }
                function z(E, H) {
                    var V = {};
                    try {
                        V.value = E(H),
                        V.status = "success"
                    } catch (O) {
                        V.status = "error",
                        V.value = O
                    }
                    return V
                }
                m.resolve = w;
                function w(E) {
                    return E instanceof this ? E : l.resolve(new this(s), E)
                }
                m.reject = R;
                function R(E) {
                    var H = new this(s);
                    return l.reject(H, E)
                }
                m.all = j;
                function j(E) {
                    var H = this;
                    if (Object.prototype.toString.call(E) !== "[object Array]")
                        return this.reject(new TypeError("must be an array"));
                    var V = E.length
                      , O = !1;
                    if (!V)
                        return this.resolve([]);
                    for (var x = new Array(V), D = 0, q = -1, ee = new this(s); ++q < V; )
                        ie(E[q], q);
                    return ee;
                    function ie(Ee, Z) {
                        H.resolve(Ee).then(ce, function(ae) {
                            O || (O = !0,
                            l.reject(ee, ae))
                        });
                        function ce(ae) {
                            x[Z] = ae,
                            ++D === V && !O && (O = !0,
                            l.resolve(ee, x))
                        }
                    }
                }
                m.race = $;
                function $(E) {
                    var H = this;
                    if (Object.prototype.toString.call(E) !== "[object Array]")
                        return this.reject(new TypeError("must be an array"));
                    var V = E.length
                      , O = !1;
                    if (!V)
                        return this.resolve([]);
                    for (var x = -1, D = new this(s); ++x < V; )
                        q(E[x]);
                    return D;
                    function q(ee) {
                        H.resolve(ee).then(function(ie) {
                            O || (O = !0,
                            l.resolve(D, ie))
                        }, function(ie) {
                            O || (O = !0,
                            l.reject(D, ie))
                        })
                    }
                }
            }
            , {
                1: 1
            }],
            3: [function(n, r, o) {
                (function(a) {
                    typeof a.Promise != "function" && (a.Promise = n(2))
                }
                ).call(this, typeof Ve < "u" ? Ve : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }
            , {
                2: 2
            }],
            4: [function(n, r, o) {
                var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
                    return typeof u
                }
                : function(u) {
                    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                }
                ;
                function s(u, _) {
                    if (!(u instanceof _))
                        throw new TypeError("Cannot call a class as a function")
                }
                function l() {
                    try {
                        if (typeof indexedDB < "u")
                            return indexedDB;
                        if (typeof webkitIndexedDB < "u")
                            return webkitIndexedDB;
                        if (typeof mozIndexedDB < "u")
                            return mozIndexedDB;
                        if (typeof OIndexedDB < "u")
                            return OIndexedDB;
                        if (typeof msIndexedDB < "u")
                            return msIndexedDB
                    } catch {
                        return
                    }
                }
                var c = l();
                function i() {
                    try {
                        if (!c || !c.open)
                            return !1;
                        var u = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform)
                          , _ = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
                        return (!u || _) && typeof indexedDB < "u" && typeof IDBKeyRange < "u"
                    } catch {
                        return !1
                    }
                }
                function f(u, _) {
                    u = u || [],
                    _ = _ || {};
                    try {
                        return new Blob(u,_)
                    } catch (y) {
                        if (y.name !== "TypeError")
                            throw y;
                        for (var p = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, b = new p, S = 0; S < u.length; S += 1)
                            b.append(u[S]);
                        return b.getBlob(_.type)
                    }
                }
                typeof Promise > "u" && n(3);
                var m = Promise;
                function d(u, _) {
                    _ && u.then(function(p) {
                        _(null, p)
                    }, function(p) {
                        _(p)
                    })
                }
                function h(u, _, p) {
                    typeof _ == "function" && u.then(_),
                    typeof p == "function" && u.catch(p)
                }
                function g(u) {
                    return typeof u != "string" && (console.warn(u + " used as a key, but it is not a string."),
                    u = String(u)),
                    u
                }
                function A() {
                    if (arguments.length && typeof arguments[arguments.length - 1] == "function")
                        return arguments[arguments.length - 1]
                }
                var z = "local-forage-detect-blob-support"
                  , w = void 0
                  , R = {}
                  , j = Object.prototype.toString
                  , $ = "readonly"
                  , E = "readwrite";
                function H(u) {
                    for (var _ = u.length, p = new ArrayBuffer(_), b = new Uint8Array(p), S = 0; S < _; S++)
                        b[S] = u.charCodeAt(S);
                    return p
                }
                function V(u) {
                    return new m(function(_) {
                        var p = u.transaction(z, E)
                          , b = f([""]);
                        p.objectStore(z).put(b, "key"),
                        p.onabort = function(S) {
                            S.preventDefault(),
                            S.stopPropagation(),
                            _(!1)
                        }
                        ,
                        p.oncomplete = function() {
                            var S = navigator.userAgent.match(/Chrome\/(\d+)/)
                              , y = navigator.userAgent.match(/Edge\//);
                            _(y || !S || parseInt(S[1], 10) >= 43)
                        }
                    }
                    ).catch(function() {
                        return !1
                    })
                }
                function O(u) {
                    return typeof w == "boolean" ? m.resolve(w) : V(u).then(function(_) {
                        return w = _,
                        w
                    })
                }
                function x(u) {
                    var _ = R[u.name]
                      , p = {};
                    p.promise = new m(function(b, S) {
                        p.resolve = b,
                        p.reject = S
                    }
                    ),
                    _.deferredOperations.push(p),
                    _.dbReady ? _.dbReady = _.dbReady.then(function() {
                        return p.promise
                    }) : _.dbReady = p.promise
                }
                function D(u) {
                    var _ = R[u.name]
                      , p = _.deferredOperations.pop();
                    if (p)
                        return p.resolve(),
                        p.promise
                }
                function q(u, _) {
                    var p = R[u.name]
                      , b = p.deferredOperations.pop();
                    if (b)
                        return b.reject(_),
                        b.promise
                }
                function ee(u, _) {
                    return new m(function(p, b) {
                        if (R[u.name] = R[u.name] || dt(),
                        u.db)
                            if (_)
                                x(u),
                                u.db.close();
                            else
                                return p(u.db);
                        var S = [u.name];
                        _ && S.push(u.version);
                        var y = c.open.apply(c, S);
                        _ && (y.onupgradeneeded = function(k) {
                            var L = y.result;
                            try {
                                L.createObjectStore(u.storeName),
                                k.oldVersion <= 1 && L.createObjectStore(z)
                            } catch (M) {
                                if (M.name === "ConstraintError")
                                    console.warn('The database "' + u.name + '" has been upgraded from version ' + k.oldVersion + " to version " + k.newVersion + ', but the storage "' + u.storeName + '" already exists.');
                                else
                                    throw M
                            }
                        }
                        ),
                        y.onerror = function(k) {
                            k.preventDefault(),
                            b(y.error)
                        }
                        ,
                        y.onsuccess = function() {
                            var k = y.result;
                            k.onversionchange = function(L) {
                                L.target.close()
                            }
                            ,
                            p(k),
                            D(u)
                        }
                    }
                    )
                }
                function ie(u) {
                    return ee(u, !1)
                }
                function Ee(u) {
                    return ee(u, !0)
                }
                function Z(u, _) {
                    if (!u.db)
                        return !0;
                    var p = !u.db.objectStoreNames.contains(u.storeName)
                      , b = u.version < u.db.version
                      , S = u.version > u.db.version;
                    if (b && (u.version !== _ && console.warn('The database "' + u.name + `" can't be downgraded from version ` + u.db.version + " to version " + u.version + "."),
                    u.version = u.db.version),
                    S || p) {
                        if (p) {
                            var y = u.db.version + 1;
                            y > u.version && (u.version = y)
                        }
                        return !0
                    }
                    return !1
                }
                function ce(u) {
                    return new m(function(_, p) {
                        var b = new FileReader;
                        b.onerror = p,
                        b.onloadend = function(S) {
                            var y = btoa(S.target.result || "");
                            _({
                                __local_forage_encoded_blob: !0,
                                data: y,
                                type: u.type
                            })
                        }
                        ,
                        b.readAsBinaryString(u)
                    }
                    )
                }
                function ae(u) {
                    var _ = H(atob(u.data));
                    return f([_], {
                        type: u.type
                    })
                }
                function $e(u) {
                    return u && u.__local_forage_encoded_blob
                }
                function Ze(u) {
                    var _ = this
                      , p = _._initReady().then(function() {
                        var b = R[_._dbInfo.name];
                        if (b && b.dbReady)
                            return b.dbReady
                    });
                    return h(p, u, u),
                    p
                }
                function Ne(u) {
                    x(u);
                    for (var _ = R[u.name], p = _.forages, b = 0; b < p.length; b++) {
                        var S = p[b];
                        S._dbInfo.db && (S._dbInfo.db.close(),
                        S._dbInfo.db = null)
                    }
                    return u.db = null,
                    ie(u).then(function(y) {
                        return u.db = y,
                        Z(u) ? Ee(u) : y
                    }).then(function(y) {
                        u.db = _.db = y;
                        for (var k = 0; k < p.length; k++)
                            p[k]._dbInfo.db = y
                    }).catch(function(y) {
                        throw q(u, y),
                        y
                    })
                }
                function Pe(u, _, p, b) {
                    b === void 0 && (b = 1);
                    try {
                        var S = u.db.transaction(u.storeName, _);
                        p(null, S)
                    } catch (y) {
                        if (b > 0 && (!u.db || y.name === "InvalidStateError" || y.name === "NotFoundError"))
                            return m.resolve().then(function() {
                                if (!u.db || y.name === "NotFoundError" && !u.db.objectStoreNames.contains(u.storeName) && u.version <= u.db.version)
                                    return u.db && (u.version = u.db.version + 1),
                                    Ee(u)
                            }).then(function() {
                                return Ne(u).then(function() {
                                    Pe(u, _, p, b - 1)
                                })
                            }).catch(p);
                        p(y)
                    }
                }
                function dt() {
                    return {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: []
                    }
                }
                function Ct(u) {
                    var _ = this
                      , p = {
                        db: null
                    };
                    if (u)
                        for (var b in u)
                            p[b] = u[b];
                    var S = R[p.name];
                    S || (S = dt(),
                    R[p.name] = S),
                    S.forages.push(_),
                    _._initReady || (_._initReady = _.ready,
                    _.ready = Ze);
                    var y = [];
                    function k() {
                        return m.resolve()
                    }
                    for (var L = 0; L < S.forages.length; L++) {
                        var M = S.forages[L];
                        M !== _ && y.push(M._initReady().catch(k))
                    }
                    var U = S.forages.slice(0);
                    return m.all(y).then(function() {
                        return p.db = S.db,
                        ie(p)
                    }).then(function(W) {
                        return p.db = W,
                        Z(p, _._defaultConfig.version) ? Ee(p) : W
                    }).then(function(W) {
                        p.db = S.db = W,
                        _._dbInfo = p;
                        for (var J = 0; J < U.length; J++) {
                            var oe = U[J];
                            oe !== _ && (oe._dbInfo.db = p.db,
                            oe._dbInfo.version = p.version)
                        }
                    })
                }
                function pt(u, _) {
                    var p = this;
                    u = g(u);
                    var b = new m(function(S, y) {
                        p.ready().then(function() {
                            Pe(p._dbInfo, $, function(k, L) {
                                if (k)
                                    return y(k);
                                try {
                                    var M = L.objectStore(p._dbInfo.storeName)
                                      , U = M.get(u);
                                    U.onsuccess = function() {
                                        var W = U.result;
                                        W === void 0 && (W = null),
                                        $e(W) && (W = ae(W)),
                                        S(W)
                                    }
                                    ,
                                    U.onerror = function() {
                                        y(U.error)
                                    }
                                } catch (W) {
                                    y(W)
                                }
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function zt(u, _) {
                    var p = this
                      , b = new m(function(S, y) {
                        p.ready().then(function() {
                            Pe(p._dbInfo, $, function(k, L) {
                                if (k)
                                    return y(k);
                                try {
                                    var M = L.objectStore(p._dbInfo.storeName)
                                      , U = M.openCursor()
                                      , W = 1;
                                    U.onsuccess = function() {
                                        var J = U.result;
                                        if (J) {
                                            var oe = J.value;
                                            $e(oe) && (oe = ae(oe));
                                            var he = u(oe, J.key, W++);
                                            he !== void 0 ? S(he) : J.continue()
                                        } else
                                            S()
                                    }
                                    ,
                                    U.onerror = function() {
                                        y(U.error)
                                    }
                                } catch (J) {
                                    y(J)
                                }
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function ot(u, _, p) {
                    var b = this;
                    u = g(u);
                    var S = new m(function(y, k) {
                        var L;
                        b.ready().then(function() {
                            return L = b._dbInfo,
                            j.call(_) === "[object Blob]" ? O(L.db).then(function(M) {
                                return M ? _ : ce(_)
                            }) : _
                        }).then(function(M) {
                            Pe(b._dbInfo, E, function(U, W) {
                                if (U)
                                    return k(U);
                                try {
                                    var J = W.objectStore(b._dbInfo.storeName);
                                    M === null && (M = void 0);
                                    var oe = J.put(M, u);
                                    W.oncomplete = function() {
                                        M === void 0 && (M = null),
                                        y(M)
                                    }
                                    ,
                                    W.onabort = W.onerror = function() {
                                        var he = oe.error ? oe.error : oe.transaction.error;
                                        k(he)
                                    }
                                } catch (he) {
                                    k(he)
                                }
                            })
                        }).catch(k)
                    }
                    );
                    return d(S, p),
                    S
                }
                function I(u, _) {
                    var p = this;
                    u = g(u);
                    var b = new m(function(S, y) {
                        p.ready().then(function() {
                            Pe(p._dbInfo, E, function(k, L) {
                                if (k)
                                    return y(k);
                                try {
                                    var M = L.objectStore(p._dbInfo.storeName)
                                      , U = M.delete(u);
                                    L.oncomplete = function() {
                                        S()
                                    }
                                    ,
                                    L.onerror = function() {
                                        y(U.error)
                                    }
                                    ,
                                    L.onabort = function() {
                                        var W = U.error ? U.error : U.transaction.error;
                                        y(W)
                                    }
                                } catch (W) {
                                    y(W)
                                }
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function G(u) {
                    var _ = this
                      , p = new m(function(b, S) {
                        _.ready().then(function() {
                            Pe(_._dbInfo, E, function(y, k) {
                                if (y)
                                    return S(y);
                                try {
                                    var L = k.objectStore(_._dbInfo.storeName)
                                      , M = L.clear();
                                    k.oncomplete = function() {
                                        b()
                                    }
                                    ,
                                    k.onabort = k.onerror = function() {
                                        var U = M.error ? M.error : M.transaction.error;
                                        S(U)
                                    }
                                } catch (U) {
                                    S(U)
                                }
                            })
                        }).catch(S)
                    }
                    );
                    return d(p, u),
                    p
                }
                function Y(u) {
                    var _ = this
                      , p = new m(function(b, S) {
                        _.ready().then(function() {
                            Pe(_._dbInfo, $, function(y, k) {
                                if (y)
                                    return S(y);
                                try {
                                    var L = k.objectStore(_._dbInfo.storeName)
                                      , M = L.count();
                                    M.onsuccess = function() {
                                        b(M.result)
                                    }
                                    ,
                                    M.onerror = function() {
                                        S(M.error)
                                    }
                                } catch (U) {
                                    S(U)
                                }
                            })
                        }).catch(S)
                    }
                    );
                    return d(p, u),
                    p
                }
                function X(u, _) {
                    var p = this
                      , b = new m(function(S, y) {
                        if (u < 0) {
                            S(null);
                            return
                        }
                        p.ready().then(function() {
                            Pe(p._dbInfo, $, function(k, L) {
                                if (k)
                                    return y(k);
                                try {
                                    var M = L.objectStore(p._dbInfo.storeName)
                                      , U = !1
                                      , W = M.openKeyCursor();
                                    W.onsuccess = function() {
                                        var J = W.result;
                                        if (!J) {
                                            S(null);
                                            return
                                        }
                                        u === 0 || U ? S(J.key) : (U = !0,
                                        J.advance(u))
                                    }
                                    ,
                                    W.onerror = function() {
                                        y(W.error)
                                    }
                                } catch (J) {
                                    y(J)
                                }
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function pe(u) {
                    var _ = this
                      , p = new m(function(b, S) {
                        _.ready().then(function() {
                            Pe(_._dbInfo, $, function(y, k) {
                                if (y)
                                    return S(y);
                                try {
                                    var L = k.objectStore(_._dbInfo.storeName)
                                      , M = L.openKeyCursor()
                                      , U = [];
                                    M.onsuccess = function() {
                                        var W = M.result;
                                        if (!W) {
                                            b(U);
                                            return
                                        }
                                        U.push(W.key),
                                        W.continue()
                                    }
                                    ,
                                    M.onerror = function() {
                                        S(M.error)
                                    }
                                } catch (W) {
                                    S(W)
                                }
                            })
                        }).catch(S)
                    }
                    );
                    return d(p, u),
                    p
                }
                function Se(u, _) {
                    _ = A.apply(this, arguments);
                    var p = this.config();
                    u = typeof u != "function" && u || {},
                    u.name || (u.name = u.name || p.name,
                    u.storeName = u.storeName || p.storeName);
                    var b = this, S;
                    if (!u.name)
                        S = m.reject("Invalid arguments");
                    else {
                        var y = u.name === p.name && b._dbInfo.db
                          , k = y ? m.resolve(b._dbInfo.db) : ie(u).then(function(L) {
                            var M = R[u.name]
                              , U = M.forages;
                            M.db = L;
                            for (var W = 0; W < U.length; W++)
                                U[W]._dbInfo.db = L;
                            return L
                        });
                        u.storeName ? S = k.then(function(L) {
                            if (L.objectStoreNames.contains(u.storeName)) {
                                var M = L.version + 1;
                                x(u);
                                var U = R[u.name]
                                  , W = U.forages;
                                L.close();
                                for (var J = 0; J < W.length; J++) {
                                    var oe = W[J];
                                    oe._dbInfo.db = null,
                                    oe._dbInfo.version = M
                                }
                                var he = new m(function(_e, Te) {
                                    var Re = c.open(u.name, M);
                                    Re.onerror = function(Je) {
                                        var Xt = Re.result;
                                        Xt.close(),
                                        Te(Je)
                                    }
                                    ,
                                    Re.onupgradeneeded = function() {
                                        var Je = Re.result;
                                        Je.deleteObjectStore(u.storeName)
                                    }
                                    ,
                                    Re.onsuccess = function() {
                                        var Je = Re.result;
                                        Je.close(),
                                        _e(Je)
                                    }
                                }
                                );
                                return he.then(function(_e) {
                                    U.db = _e;
                                    for (var Te = 0; Te < W.length; Te++) {
                                        var Re = W[Te];
                                        Re._dbInfo.db = _e,
                                        D(Re._dbInfo)
                                    }
                                }).catch(function(_e) {
                                    throw (q(u, _e) || m.resolve()).catch(function() {}),
                                    _e
                                })
                            }
                        }) : S = k.then(function(L) {
                            x(u);
                            var M = R[u.name]
                              , U = M.forages;
                            L.close();
                            for (var W = 0; W < U.length; W++) {
                                var J = U[W];
                                J._dbInfo.db = null
                            }
                            var oe = new m(function(he, _e) {
                                var Te = c.deleteDatabase(u.name);
                                Te.onerror = function() {
                                    var Re = Te.result;
                                    Re && Re.close(),
                                    _e(Te.error)
                                }
                                ,
                                Te.onblocked = function() {
                                    console.warn('dropInstance blocked for database "' + u.name + '" until all open connections are closed')
                                }
                                ,
                                Te.onsuccess = function() {
                                    var Re = Te.result;
                                    Re && Re.close(),
                                    he(Re)
                                }
                            }
                            );
                            return oe.then(function(he) {
                                M.db = he;
                                for (var _e = 0; _e < U.length; _e++) {
                                    var Te = U[_e];
                                    D(Te._dbInfo)
                                }
                            }).catch(function(he) {
                                throw (q(u, he) || m.resolve()).catch(function() {}),
                                he
                            })
                        })
                    }
                    return d(S, _),
                    S
                }
                var re = {
                    _driver: "asyncStorage",
                    _initStorage: Ct,
                    _support: i(),
                    iterate: zt,
                    getItem: pt,
                    setItem: ot,
                    removeItem: I,
                    clear: G,
                    length: Y,
                    key: X,
                    keys: pe,
                    dropInstance: Se
                };
                function ne() {
                    return typeof openDatabase == "function"
                }
                var ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , ct = "~~local_forage_type~"
                  , ke = /^~~local_forage_type~([^~]+)~/
                  , It = "__lfsc__:"
                  , Gt = It.length
                  , Kt = "arbf"
                  , we = "blob"
                  , N = "si08"
                  , B = "ui08"
                  , qe = "uic8"
                  , Le = "si16"
                  , Nt = "si32"
                  , At = "ur16"
                  , ut = "ui32"
                  , An = "fl32"
                  , tr = "fl64"
                  , io = Gt + Kt.length
                  , lo = Object.prototype.toString;
                function co(u) {
                    var _ = u.length * .75, p = u.length, b, S = 0, y, k, L, M;
                    u[u.length - 1] === "=" && (_--,
                    u[u.length - 2] === "=" && _--);
                    var U = new ArrayBuffer(_)
                      , W = new Uint8Array(U);
                    for (b = 0; b < p; b += 4)
                        y = ge.indexOf(u[b]),
                        k = ge.indexOf(u[b + 1]),
                        L = ge.indexOf(u[b + 2]),
                        M = ge.indexOf(u[b + 3]),
                        W[S++] = y << 2 | k >> 4,
                        W[S++] = (k & 15) << 4 | L >> 2,
                        W[S++] = (L & 3) << 6 | M & 63;
                    return U
                }
                function nr(u) {
                    var _ = new Uint8Array(u), p = "", b;
                    for (b = 0; b < _.length; b += 3)
                        p += ge[_[b] >> 2],
                        p += ge[(_[b] & 3) << 4 | _[b + 1] >> 4],
                        p += ge[(_[b + 1] & 15) << 2 | _[b + 2] >> 6],
                        p += ge[_[b + 2] & 63];
                    return _.length % 3 === 2 ? p = p.substring(0, p.length - 1) + "=" : _.length % 3 === 1 && (p = p.substring(0, p.length - 2) + "=="),
                    p
                }
                function Ci(u, _) {
                    var p = "";
                    if (u && (p = lo.call(u)),
                    u && (p === "[object ArrayBuffer]" || u.buffer && lo.call(u.buffer) === "[object ArrayBuffer]")) {
                        var b, S = It;
                        u instanceof ArrayBuffer ? (b = u,
                        S += Kt) : (b = u.buffer,
                        p === "[object Int8Array]" ? S += N : p === "[object Uint8Array]" ? S += B : p === "[object Uint8ClampedArray]" ? S += qe : p === "[object Int16Array]" ? S += Le : p === "[object Uint16Array]" ? S += At : p === "[object Int32Array]" ? S += Nt : p === "[object Uint32Array]" ? S += ut : p === "[object Float32Array]" ? S += An : p === "[object Float64Array]" ? S += tr : _(new Error("Failed to get type for BinaryArray"))),
                        _(S + nr(b))
                    } else if (p === "[object Blob]") {
                        var y = new FileReader;
                        y.onload = function() {
                            var k = ct + u.type + "~" + nr(this.result);
                            _(It + we + k)
                        }
                        ,
                        y.readAsArrayBuffer(u)
                    } else
                        try {
                            _(JSON.stringify(u))
                        } catch (k) {
                            console.error("Couldn't convert value into a JSON string: ", u),
                            _(null, k)
                        }
                }
                function zi(u) {
                    if (u.substring(0, Gt) !== It)
                        return JSON.parse(u);
                    var _ = u.substring(io), p = u.substring(Gt, io), b;
                    if (p === we && ke.test(_)) {
                        var S = _.match(ke);
                        b = S[1],
                        _ = _.substring(S[0].length)
                    }
                    var y = co(_);
                    switch (p) {
                    case Kt:
                        return y;
                    case we:
                        return f([y], {
                            type: b
                        });
                    case N:
                        return new Int8Array(y);
                    case B:
                        return new Uint8Array(y);
                    case qe:
                        return new Uint8ClampedArray(y);
                    case Le:
                        return new Int16Array(y);
                    case At:
                        return new Uint16Array(y);
                    case Nt:
                        return new Int32Array(y);
                    case ut:
                        return new Uint32Array(y);
                    case An:
                        return new Float32Array(y);
                    case tr:
                        return new Float64Array(y);
                    default:
                        throw new Error("Unkown type: " + p)
                    }
                }
                var rr = {
                    serialize: Ci,
                    deserialize: zi,
                    stringToBuffer: co,
                    bufferToString: nr
                };
                function uo(u, _, p, b) {
                    u.executeSql("CREATE TABLE IF NOT EXISTS " + _.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], p, b)
                }
                function Ii(u) {
                    var _ = this
                      , p = {
                        db: null
                    };
                    if (u)
                        for (var b in u)
                            p[b] = typeof u[b] != "string" ? u[b].toString() : u[b];
                    var S = new m(function(y, k) {
                        try {
                            p.db = openDatabase(p.name, String(p.version), p.description, p.size)
                        } catch (L) {
                            return k(L)
                        }
                        p.db.transaction(function(L) {
                            uo(L, p, function() {
                                _._dbInfo = p,
                                y()
                            }, function(M, U) {
                                k(U)
                            })
                        }, k)
                    }
                    );
                    return p.serializer = rr,
                    S
                }
                function gt(u, _, p, b, S, y) {
                    u.executeSql(p, b, S, function(k, L) {
                        L.code === L.SYNTAX_ERR ? k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [_.storeName], function(M, U) {
                            U.rows.length ? y(M, L) : uo(M, _, function() {
                                M.executeSql(p, b, S, y)
                            }, y)
                        }, y) : y(k, L)
                    }, y)
                }
                function Ni(u, _) {
                    var p = this;
                    u = g(u);
                    var b = new m(function(S, y) {
                        p.ready().then(function() {
                            var k = p._dbInfo;
                            k.db.transaction(function(L) {
                                gt(L, k, "SELECT * FROM " + k.storeName + " WHERE key = ? LIMIT 1", [u], function(M, U) {
                                    var W = U.rows.length ? U.rows.item(0).value : null;
                                    W && (W = k.serializer.deserialize(W)),
                                    S(W)
                                }, function(M, U) {
                                    y(U)
                                })
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function Pi(u, _) {
                    var p = this
                      , b = new m(function(S, y) {
                        p.ready().then(function() {
                            var k = p._dbInfo;
                            k.db.transaction(function(L) {
                                gt(L, k, "SELECT * FROM " + k.storeName, [], function(M, U) {
                                    for (var W = U.rows, J = W.length, oe = 0; oe < J; oe++) {
                                        var he = W.item(oe)
                                          , _e = he.value;
                                        if (_e && (_e = k.serializer.deserialize(_e)),
                                        _e = u(_e, he.key, oe + 1),
                                        _e !== void 0) {
                                            S(_e);
                                            return
                                        }
                                    }
                                    S()
                                }, function(M, U) {
                                    y(U)
                                })
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function fo(u, _, p, b) {
                    var S = this;
                    u = g(u);
                    var y = new m(function(k, L) {
                        S.ready().then(function() {
                            _ === void 0 && (_ = null);
                            var M = _
                              , U = S._dbInfo;
                            U.serializer.serialize(_, function(W, J) {
                                J ? L(J) : U.db.transaction(function(oe) {
                                    gt(oe, U, "INSERT OR REPLACE INTO " + U.storeName + " (key, value) VALUES (?, ?)", [u, W], function() {
                                        k(M)
                                    }, function(he, _e) {
                                        L(_e)
                                    })
                                }, function(oe) {
                                    if (oe.code === oe.QUOTA_ERR) {
                                        if (b > 0) {
                                            k(fo.apply(S, [u, M, p, b - 1]));
                                            return
                                        }
                                        L(oe)
                                    }
                                })
                            })
                        }).catch(L)
                    }
                    );
                    return d(y, p),
                    y
                }
                function Li(u, _, p) {
                    return fo.apply(this, [u, _, p, 1])
                }
                function Di(u, _) {
                    var p = this;
                    u = g(u);
                    var b = new m(function(S, y) {
                        p.ready().then(function() {
                            var k = p._dbInfo;
                            k.db.transaction(function(L) {
                                gt(L, k, "DELETE FROM " + k.storeName + " WHERE key = ?", [u], function() {
                                    S()
                                }, function(M, U) {
                                    y(U)
                                })
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function Fi(u) {
                    var _ = this
                      , p = new m(function(b, S) {
                        _.ready().then(function() {
                            var y = _._dbInfo;
                            y.db.transaction(function(k) {
                                gt(k, y, "DELETE FROM " + y.storeName, [], function() {
                                    b()
                                }, function(L, M) {
                                    S(M)
                                })
                            })
                        }).catch(S)
                    }
                    );
                    return d(p, u),
                    p
                }
                function Mi(u) {
                    var _ = this
                      , p = new m(function(b, S) {
                        _.ready().then(function() {
                            var y = _._dbInfo;
                            y.db.transaction(function(k) {
                                gt(k, y, "SELECT COUNT(key) as c FROM " + y.storeName, [], function(L, M) {
                                    var U = M.rows.item(0).c;
                                    b(U)
                                }, function(L, M) {
                                    S(M)
                                })
                            })
                        }).catch(S)
                    }
                    );
                    return d(p, u),
                    p
                }
                function Ui(u, _) {
                    var p = this
                      , b = new m(function(S, y) {
                        p.ready().then(function() {
                            var k = p._dbInfo;
                            k.db.transaction(function(L) {
                                gt(L, k, "SELECT key FROM " + k.storeName + " WHERE id = ? LIMIT 1", [u + 1], function(M, U) {
                                    var W = U.rows.length ? U.rows.item(0).key : null;
                                    S(W)
                                }, function(M, U) {
                                    y(U)
                                })
                            })
                        }).catch(y)
                    }
                    );
                    return d(b, _),
                    b
                }
                function $i(u) {
                    var _ = this
                      , p = new m(function(b, S) {
                        _.ready().then(function() {
                            var y = _._dbInfo;
                            y.db.transaction(function(k) {
                                gt(k, y, "SELECT key FROM " + y.storeName, [], function(L, M) {
                                    for (var U = [], W = 0; W < M.rows.length; W++)
                                        U.push(M.rows.item(W).key);
                                    b(U)
                                }, function(L, M) {
                                    S(M)
                                })
                            })
                        }).catch(S)
                    }
                    );
                    return d(p, u),
                    p
                }
                function Bi(u) {
                    return new m(function(_, p) {
                        u.transaction(function(b) {
                            b.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(S, y) {
                                for (var k = [], L = 0; L < y.rows.length; L++)
                                    k.push(y.rows.item(L).name);
                                _({
                                    db: u,
                                    storeNames: k
                                })
                            }, function(S, y) {
                                p(y)
                            })
                        }, function(b) {
                            p(b)
                        })
                    }
                    )
                }
                function ji(u, _) {
                    _ = A.apply(this, arguments);
                    var p = this.config();
                    u = typeof u != "function" && u || {},
                    u.name || (u.name = u.name || p.name,
                    u.storeName = u.storeName || p.storeName);
                    var b = this, S;
                    return u.name ? S = new m(function(y) {
                        var k;
                        u.name === p.name ? k = b._dbInfo.db : k = openDatabase(u.name, "", "", 0),
                        u.storeName ? y({
                            db: k,
                            storeNames: [u.storeName]
                        }) : y(Bi(k))
                    }
                    ).then(function(y) {
                        return new m(function(k, L) {
                            y.db.transaction(function(M) {
                                function U(he) {
                                    return new m(function(_e, Te) {
                                        M.executeSql("DROP TABLE IF EXISTS " + he, [], function() {
                                            _e()
                                        }, function(Re, Je) {
                                            Te(Je)
                                        })
                                    }
                                    )
                                }
                                for (var W = [], J = 0, oe = y.storeNames.length; J < oe; J++)
                                    W.push(U(y.storeNames[J]));
                                m.all(W).then(function() {
                                    k()
                                }).catch(function(he) {
                                    L(he)
                                })
                            }, function(M) {
                                L(M)
                            })
                        }
                        )
                    }) : S = m.reject("Invalid arguments"),
                    d(S, _),
                    S
                }
                var Hi = {
                    _driver: "webSQLStorage",
                    _initStorage: Ii,
                    _support: ne(),
                    iterate: Pi,
                    getItem: Ni,
                    setItem: Li,
                    removeItem: Di,
                    clear: Fi,
                    length: Mi,
                    key: Ui,
                    keys: $i,
                    dropInstance: ji
                };
                function Wi() {
                    try {
                        return typeof localStorage < "u" && "setItem"in localStorage && !!localStorage.setItem
                    } catch {
                        return !1
                    }
                }
                function mo(u, _) {
                    var p = u.name + "/";
                    return u.storeName !== _.storeName && (p += u.storeName + "/"),
                    p
                }
                function Vi() {
                    var u = "_localforage_support_test";
                    try {
                        return localStorage.setItem(u, !0),
                        localStorage.removeItem(u),
                        !1
                    } catch {
                        return !0
                    }
                }
                function Yi() {
                    return !Vi() || localStorage.length > 0
                }
                function qi(u) {
                    var _ = this
                      , p = {};
                    if (u)
                        for (var b in u)
                            p[b] = u[b];
                    return p.keyPrefix = mo(u, _._defaultConfig),
                    Yi() ? (_._dbInfo = p,
                    p.serializer = rr,
                    m.resolve()) : m.reject()
                }
                function Gi(u) {
                    var _ = this
                      , p = _.ready().then(function() {
                        for (var b = _._dbInfo.keyPrefix, S = localStorage.length - 1; S >= 0; S--) {
                            var y = localStorage.key(S);
                            y.indexOf(b) === 0 && localStorage.removeItem(y)
                        }
                    });
                    return d(p, u),
                    p
                }
                function Ki(u, _) {
                    var p = this;
                    u = g(u);
                    var b = p.ready().then(function() {
                        var S = p._dbInfo
                          , y = localStorage.getItem(S.keyPrefix + u);
                        return y && (y = S.serializer.deserialize(y)),
                        y
                    });
                    return d(b, _),
                    b
                }
                function Ji(u, _) {
                    var p = this
                      , b = p.ready().then(function() {
                        for (var S = p._dbInfo, y = S.keyPrefix, k = y.length, L = localStorage.length, M = 1, U = 0; U < L; U++) {
                            var W = localStorage.key(U);
                            if (W.indexOf(y) === 0) {
                                var J = localStorage.getItem(W);
                                if (J && (J = S.serializer.deserialize(J)),
                                J = u(J, W.substring(k), M++),
                                J !== void 0)
                                    return J
                            }
                        }
                    });
                    return d(b, _),
                    b
                }
                function Xi(u, _) {
                    var p = this
                      , b = p.ready().then(function() {
                        var S = p._dbInfo, y;
                        try {
                            y = localStorage.key(u)
                        } catch {
                            y = null
                        }
                        return y && (y = y.substring(S.keyPrefix.length)),
                        y
                    });
                    return d(b, _),
                    b
                }
                function Qi(u) {
                    var _ = this
                      , p = _.ready().then(function() {
                        for (var b = _._dbInfo, S = localStorage.length, y = [], k = 0; k < S; k++) {
                            var L = localStorage.key(k);
                            L.indexOf(b.keyPrefix) === 0 && y.push(L.substring(b.keyPrefix.length))
                        }
                        return y
                    });
                    return d(p, u),
                    p
                }
                function Zi(u) {
                    var _ = this
                      , p = _.keys().then(function(b) {
                        return b.length
                    });
                    return d(p, u),
                    p
                }
                function el(u, _) {
                    var p = this;
                    u = g(u);
                    var b = p.ready().then(function() {
                        var S = p._dbInfo;
                        localStorage.removeItem(S.keyPrefix + u)
                    });
                    return d(b, _),
                    b
                }
                function tl(u, _, p) {
                    var b = this;
                    u = g(u);
                    var S = b.ready().then(function() {
                        _ === void 0 && (_ = null);
                        var y = _;
                        return new m(function(k, L) {
                            var M = b._dbInfo;
                            M.serializer.serialize(_, function(U, W) {
                                if (W)
                                    L(W);
                                else
                                    try {
                                        localStorage.setItem(M.keyPrefix + u, U),
                                        k(y)
                                    } catch (J) {
                                        (J.name === "QuotaExceededError" || J.name === "NS_ERROR_DOM_QUOTA_REACHED") && L(J),
                                        L(J)
                                    }
                            })
                        }
                        )
                    });
                    return d(S, p),
                    S
                }
                function nl(u, _) {
                    if (_ = A.apply(this, arguments),
                    u = typeof u != "function" && u || {},
                    !u.name) {
                        var p = this.config();
                        u.name = u.name || p.name,
                        u.storeName = u.storeName || p.storeName
                    }
                    var b = this, S;
                    return u.name ? S = new m(function(y) {
                        u.storeName ? y(mo(u, b._defaultConfig)) : y(u.name + "/")
                    }
                    ).then(function(y) {
                        for (var k = localStorage.length - 1; k >= 0; k--) {
                            var L = localStorage.key(k);
                            L.indexOf(y) === 0 && localStorage.removeItem(L)
                        }
                    }) : S = m.reject("Invalid arguments"),
                    d(S, _),
                    S
                }
                var rl = {
                    _driver: "localStorageWrapper",
                    _initStorage: qi,
                    _support: Wi(),
                    iterate: Ji,
                    getItem: Ki,
                    setItem: tl,
                    removeItem: el,
                    clear: Gi,
                    length: Zi,
                    key: Xi,
                    keys: Qi,
                    dropInstance: nl
                }
                  , ol = function(_, p) {
                    return _ === p || typeof _ == "number" && typeof p == "number" && isNaN(_) && isNaN(p)
                }
                  , sl = function(_, p) {
                    for (var b = _.length, S = 0; S < b; ) {
                        if (ol(_[S], p))
                            return !0;
                        S++
                    }
                    return !1
                }
                  , po = Array.isArray || function(u) {
                    return Object.prototype.toString.call(u) === "[object Array]"
                }
                  , Jt = {}
                  , go = {}
                  , Pt = {
                    INDEXEDDB: re,
                    WEBSQL: Hi,
                    LOCALSTORAGE: rl
                }
                  , al = [Pt.INDEXEDDB._driver, Pt.WEBSQL._driver, Pt.LOCALSTORAGE._driver]
                  , wn = ["dropInstance"]
                  , or = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(wn)
                  , il = {
                    description: "",
                    driver: al.slice(),
                    name: "localforage",
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1
                };
                function ll(u, _) {
                    u[_] = function() {
                        var p = arguments;
                        return u.ready().then(function() {
                            return u[_].apply(u, p)
                        })
                    }
                }
                function sr() {
                    for (var u = 1; u < arguments.length; u++) {
                        var _ = arguments[u];
                        if (_)
                            for (var p in _)
                                _.hasOwnProperty(p) && (po(_[p]) ? arguments[0][p] = _[p].slice() : arguments[0][p] = _[p])
                    }
                    return arguments[0]
                }
                var cl = function() {
                    function u(_) {
                        s(this, u);
                        for (var p in Pt)
                            if (Pt.hasOwnProperty(p)) {
                                var b = Pt[p]
                                  , S = b._driver;
                                this[p] = S,
                                Jt[S] || this.defineDriver(b)
                            }
                        this._defaultConfig = sr({}, il),
                        this._config = sr({}, this._defaultConfig, _),
                        this._driverSet = null,
                        this._initDriver = null,
                        this._ready = !1,
                        this._dbInfo = null,
                        this._wrapLibraryMethodsWithReady(),
                        this.setDriver(this._config.driver).catch(function() {})
                    }
                    return u.prototype.config = function(p) {
                        if ((typeof p > "u" ? "undefined" : a(p)) === "object") {
                            if (this._ready)
                                return new Error("Can't call config() after localforage has been used.");
                            for (var b in p) {
                                if (b === "storeName" && (p[b] = p[b].replace(/\W/g, "_")),
                                b === "version" && typeof p[b] != "number")
                                    return new Error("Database version must be a number.");
                                this._config[b] = p[b]
                            }
                            return "driver"in p && p.driver ? this.setDriver(this._config.driver) : !0
                        } else
                            return typeof p == "string" ? this._config[p] : this._config
                    }
                    ,
                    u.prototype.defineDriver = function(p, b, S) {
                        var y = new m(function(k, L) {
                            try {
                                var M = p._driver
                                  , U = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                if (!p._driver) {
                                    L(U);
                                    return
                                }
                                for (var W = or.concat("_initStorage"), J = 0, oe = W.length; J < oe; J++) {
                                    var he = W[J]
                                      , _e = !sl(wn, he);
                                    if ((_e || p[he]) && typeof p[he] != "function") {
                                        L(U);
                                        return
                                    }
                                }
                                var Te = function() {
                                    for (var Xt = function(ml) {
                                        return function() {
                                            var dl = new Error("Method " + ml + " is not implemented by the current driver")
                                              , ho = m.reject(dl);
                                            return d(ho, arguments[arguments.length - 1]),
                                            ho
                                        }
                                    }, ar = 0, fl = wn.length; ar < fl; ar++) {
                                        var ir = wn[ar];
                                        p[ir] || (p[ir] = Xt(ir))
                                    }
                                };
                                Te();
                                var Re = function(Xt) {
                                    Jt[M] && console.info("Redefining LocalForage driver: " + M),
                                    Jt[M] = p,
                                    go[M] = Xt,
                                    k()
                                };
                                "_support"in p ? p._support && typeof p._support == "function" ? p._support().then(Re, L) : Re(!!p._support) : Re(!0)
                            } catch (Je) {
                                L(Je)
                            }
                        }
                        );
                        return h(y, b, S),
                        y
                    }
                    ,
                    u.prototype.driver = function() {
                        return this._driver || null
                    }
                    ,
                    u.prototype.getDriver = function(p, b, S) {
                        var y = Jt[p] ? m.resolve(Jt[p]) : m.reject(new Error("Driver not found."));
                        return h(y, b, S),
                        y
                    }
                    ,
                    u.prototype.getSerializer = function(p) {
                        var b = m.resolve(rr);
                        return h(b, p),
                        b
                    }
                    ,
                    u.prototype.ready = function(p) {
                        var b = this
                          , S = b._driverSet.then(function() {
                            return b._ready === null && (b._ready = b._initDriver()),
                            b._ready
                        });
                        return h(S, p, p),
                        S
                    }
                    ,
                    u.prototype.setDriver = function(p, b, S) {
                        var y = this;
                        po(p) || (p = [p]);
                        var k = this._getSupportedDrivers(p);
                        function L() {
                            y._config.driver = y.driver()
                        }
                        function M(J) {
                            return y._extend(J),
                            L(),
                            y._ready = y._initStorage(y._config),
                            y._ready
                        }
                        function U(J) {
                            return function() {
                                var oe = 0;
                                function he() {
                                    for (; oe < J.length; ) {
                                        var _e = J[oe];
                                        return oe++,
                                        y._dbInfo = null,
                                        y._ready = null,
                                        y.getDriver(_e).then(M).catch(he)
                                    }
                                    L();
                                    var Te = new Error("No available storage method found.");
                                    return y._driverSet = m.reject(Te),
                                    y._driverSet
                                }
                                return he()
                            }
                        }
                        var W = this._driverSet !== null ? this._driverSet.catch(function() {
                            return m.resolve()
                        }) : m.resolve();
                        return this._driverSet = W.then(function() {
                            var J = k[0];
                            return y._dbInfo = null,
                            y._ready = null,
                            y.getDriver(J).then(function(oe) {
                                y._driver = oe._driver,
                                L(),
                                y._wrapLibraryMethodsWithReady(),
                                y._initDriver = U(k)
                            })
                        }).catch(function() {
                            L();
                            var J = new Error("No available storage method found.");
                            return y._driverSet = m.reject(J),
                            y._driverSet
                        }),
                        h(this._driverSet, b, S),
                        this._driverSet
                    }
                    ,
                    u.prototype.supports = function(p) {
                        return !!go[p]
                    }
                    ,
                    u.prototype._extend = function(p) {
                        sr(this, p)
                    }
                    ,
                    u.prototype._getSupportedDrivers = function(p) {
                        for (var b = [], S = 0, y = p.length; S < y; S++) {
                            var k = p[S];
                            this.supports(k) && b.push(k)
                        }
                        return b
                    }
                    ,
                    u.prototype._wrapLibraryMethodsWithReady = function() {
                        for (var p = 0, b = or.length; p < b; p++)
                            ll(this, or[p])
                    }
                    ,
                    u.prototype.createInstance = function(p) {
                        return new u(p)
                    }
                    ,
                    u
                }()
                  , ul = new cl;
                r.exports = ul
            }
            , {
                3: 3
            }]
        }, {}, [4])(4)
    })
}
)(Xa);
var Xf = Xa.exports;
const Qa = zs(Xf)
  , Qf = {
    name: "light-tab-page",
    driver: Qa.INDEXEDDB
}
  , Rn = Qa.createInstance({
    ...Qf,
    storeName: "wallpaper"
});
async function Za(e) {
    if (je(e))
        return !1;
    let t = new Image;
    t.src = e;
    try {
        return await new Promise( (n, r) => {
            t.onload = n,
            t.onerror = r
        }
        ),
        !0
    } catch {
        return !1
    } finally {
        t.remove()
    }
}
function Xo(e) {
    const t = ["png", "jpeg", "jpg", "gif"];
    let n = e.type;
    return n = n.substring(n.lastIndexOf("/") + 1, n.length),
    t.includes(n)
}
function Zf(e) {
    return new Promise( (t, n) => {
        const r = document.createElement("canvas")
          , o = r.getContext("2d")
          , a = new Image;
        a.src = e,
        a.onload = () => {
            o.drawImage(a, 0, 0);
            const s = o.getImageData(0, 0, a.width, a.height);
            t(s),
            r.remove()
        }
        ,
        a.onerror = n
    }
    )
}
function em(e) {
    if (!window)
        return Ue(!1);
    const t = window.matchMedia(e)
      , n = Ue(t.matches)
      , r = o => {
        n.value = o.matches
    }
    ;
    return t.addEventListener("change", r),
    Is( () => {
        t.removeEventListener("change", r)
    }
    ),
    n
}
function tm() {
    return em("(prefers-color-scheme: dark)")
}
const Qo = "https://cn.bing.com";
async function nm(e=1) {
    const {data: t} = await bn.get("/HPImageArchive.aspx", {
        baseURL: Qo,
        params: {
            format: "js",
            idx: 0,
            n: e,
            mkt: "zh-CN"
        }
    })
      , n = t.images && t.images[0];
    return je(n) ? null : Qo + n.url
}
function rm(e) {
    return e.startsWith("blob:")
}
var ei = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        r()
    }
    )(Ve, function() {
        function n(i, f) {
            return typeof f > "u" ? f = {
                autoBom: !1
            } : typeof f != "object" && (console.warn("Deprecated: Expected third argument to be a object"),
            f = {
                autoBom: !f
            }),
            f.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type) ? new Blob(["\uFEFF", i],{
                type: i.type
            }) : i
        }
        function r(i, f, m) {
            var d = new XMLHttpRequest;
            d.open("GET", i),
            d.responseType = "blob",
            d.onload = function() {
                c(d.response, f, m)
            }
            ,
            d.onerror = function() {
                console.error("could not download file")
            }
            ,
            d.send()
        }
        function o(i) {
            var f = new XMLHttpRequest;
            f.open("HEAD", i, !1);
            try {
                f.send()
            } catch {}
            return 200 <= f.status && 299 >= f.status
        }
        function a(i) {
            try {
                i.dispatchEvent(new MouseEvent("click"))
            } catch {
                var f = document.createEvent("MouseEvents");
                f.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                i.dispatchEvent(f)
            }
        }
        var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Ve == "object" && Ve.global === Ve ? Ve : void 0
          , l = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
          , c = s.saveAs || (typeof window != "object" || window !== s ? function() {}
        : "download"in HTMLAnchorElement.prototype && !l ? function(i, f, m) {
            var d = s.URL || s.webkitURL
              , h = document.createElement("a");
            f = f || i.name || "download",
            h.download = f,
            h.rel = "noopener",
            typeof i == "string" ? (h.href = i,
            h.origin === location.origin ? a(h) : o(h.href) ? r(i, f, m) : a(h, h.target = "_blank")) : (h.href = d.createObjectURL(i),
            setTimeout(function() {
                d.revokeObjectURL(h.href)
            }, 4e4),
            setTimeout(function() {
                a(h)
            }, 0))
        }
        : "msSaveOrOpenBlob"in navigator ? function(i, f, m) {
            if (f = f || i.name || "download",
            typeof i != "string")
                navigator.msSaveOrOpenBlob(n(i, m), f);
            else if (o(i))
                r(i, f, m);
            else {
                var d = document.createElement("a");
                d.href = i,
                d.target = "_blank",
                setTimeout(function() {
                    a(d)
                })
            }
        }
        : function(i, f, m, d) {
            if (d = d || open("", "_blank"),
            d && (d.document.title = d.document.body.innerText = "downloading..."),
            typeof i == "string")
                return r(i, f, m);
            var h = i.type === "application/octet-stream"
              , g = /constructor/i.test(s.HTMLElement) || s.safari
              , A = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((A || h && g || l) && typeof FileReader < "u") {
                var z = new FileReader;
                z.onloadend = function() {
                    var j = z.result;
                    j = A ? j : j.replace(/^data:[^;]*;/, "data:attachment/file;"),
                    d ? d.location.href = j : location = j,
                    d = null
                }
                ,
                z.readAsDataURL(i)
            } else {
                var w = s.URL || s.webkitURL
                  , R = w.createObjectURL(i);
                d ? d.location = R : location.href = R,
                d = null,
                setTimeout(function() {
                    w.revokeObjectURL(R)
                }, 4e4)
            }
        }
        );
        s.saveAs = c.saveAs = c,
        e.exports = c
    })
}
)(ei);
var om = ei.exports;
class Zo {
    constructor() {
        Fe(this, "isLeaf");
        Fe(this, "children");
        Fe(this, "next");
        Fe(this, "color");
        Fe(this, "count");
        this.isLeaf = !1,
        this.children = new Array(8),
        this.color = {
            r: 0,
            g: 0,
            b: 0
        },
        this.count = 0
    }
}
class sm {
    constructor() {
        Fe(this, "root");
        Fe(this, "reducible");
        Fe(this, "leafNum");
        this.root = new Zo,
        this.reducible = new Array(7),
        this.leafNum = 0
    }
    createNode(t) {
        var n = new Zo;
        return t === 7 ? (n.isLeaf = !0,
        this.leafNum++) : (n.next = this.reducible[t],
        this.reducible[t] = n),
        n
    }
    addColor(t, n, r) {
        const {r: o, g: a, b: s} = n;
        if (t.isLeaf)
            t.count++,
            t.color.r += o,
            t.color.g += a,
            t.color.b += s;
        else {
            const l = 7 - r
              , c = o >> l & 1
              , i = a >> l & 1
              , f = s >> l & 1
              , m = (c << 2) + (i << 1) + f;
            let d = t.children[m];
            d || (d = this.createNode(r + 1),
            t.children[m] = d),
            this.addColor(d, n, r + 1)
        }
    }
    reduceTree() {
        let t = 6, n;
        for (; !(n = this.reducible[t]); )
            t--;
        this.reducible[t] = n.next;
        let r = 0
          , o = 0
          , a = 0
          , s = 0;
        for (let l = 0; l < 8; l++) {
            const c = n.children[l];
            c && (o += c.color.r,
            a += c.color.g,
            s += c.color.b,
            r += c.count,
            this.leafNum--)
        }
        n.isLeaf = !0,
        n.color = {
            r: o,
            g: a,
            b: s
        },
        n.count = r,
        this.leafNum++
    }
    buildTree(t, n) {
        for (var r = 0; r < t.length; r += 4) {
            const o = t[r]
              , a = t[r + 1]
              , s = t[r + 2];
            for (this.addColor(this.root, {
                r: o,
                g: a,
                b: s
            }, 0); this.leafNum > n; )
                this.reduceTree()
        }
        console.log("buildTree Complete")
    }
    statistics(t, n) {
        if (t.isLeaf) {
            const o = Math.floor(t.color.r / t.count)
              , a = Math.floor(t.color.g / t.count)
              , s = Math.floor(t.color.b / t.count)
              , l = ((o << 16) + (a << 8) + s).toString(16);
            n[l] ? n[l] += t.count : n[l] = t.count;
            return
        }
        for (var r = 0; r < 8; r++) {
            const o = t.children[r];
            o && this.statistics(o, n)
        }
    }
}
async function am(e) {
    const t = new sm
      , {data: n} = await Zf(e);
    t.buildTree(n, 32);
    var r = {};
    t.statistics(t.root, r);
    var o = [];
    for (var a in r)
        o.push({
            color: a,
            count: r[a]
        });
    return o.sort( (s, l) => l.count - s.count),
    o.slice(0, 10).map(s => `#${s.color}`)
}
var tt = (e => (e[e.Auto = 0] = "Auto",
e[e.Light = 1] = "Light",
e[e.Dart = 2] = "Dart",
e))(tt || {})
  , et = (e => (e[e.None = 0] = "None",
e[e.Local = 1] = "Local",
e[e.Bing = 2] = "Bing",
e))(et || {})
  , kr = (e => (e.Auto = "auto",
e.SimplifiedChinese = "zh-CN",
e.TraditionalChinese = "zh-TW",
e.English = "en",
e))(kr || {})
  , Wt = (e => (e[e.searchCenter = 0] = "searchCenter",
e[e.overallCenter = 1] = "overallCenter",
e))(Wt || {});
const _r = "_MARK_"
  , im = ["#1890ff", "#7FBA00", "#F25022", "#FFB900", "#00A4EF", "#1F1F1F"]
  , Ce = qr("setting", {
    state: () => ({
        lang: kr.Auto,
        theme: {
            mode: tt.Auto,
            primaryColor: "#1890ff",
            colorPalette: []
        },
        background: {
            id: "",
            type: et.None,
            url: "",
            blur: 0,
            maskColor: "#000",
            maskOpacity: 0,
            autoOpacity: !0
        },
        search: {
            currentEngine: "bing",
            openPageTarget: bt.Blank,
            showEngineIcon: !0,
            showEngineSelect: !0,
            searchInputRadius: 4,
            useSearchEngines: ["bing", "google", "baidu"],
            suggestion: at.none
        },
        topSite: {
            enable: !1,
            col: 6,
            row: 2,
            gap: 16,
            iconSize: 32,
            boardSize: 64,
            boardRadius: 4,
            boardColor: "#fff",
            boardOpacity: .8
        },
        layout: {
            align: Wt.searchCenter
        },
        popup: {
            current: 0
        }
    }),
    getters: {
        currentLang: ({lang: e}) => e === kr.Auto ? navigator.language : e,
        currentTheme() {
            const e = this.theme.mode;
            return e === tt.Auto ? tm().value ? tt.Dart : tt.Light : e
        },
        primaryColors() {
            const {colorPalette: e} = this.theme;
            return je(e) ? im : e
        }
    },
    actions: {
        async uploadBackgroundImage(e) {
            if (!Xo(e))
                throw new Error("这不是一个图片文件");
            const t = Yf()
              , n = URL.createObjectURL(e)
              , r = this.background.url;
            await Rn.clear(),
            r && rm(r) && URL.revokeObjectURL(r),
            await Rn.setItem(t, e),
            Ja({
                id: t,
                url: n
            }, this.background)
        },
        async reloadBackgroundImage() {
            var n;
            const e = (n = this.background) == null ? void 0 : n.id
              , t = await Rn.getItem(e);
            if (t && Xo(t)) {
                const r = URL.createObjectURL(t);
                this.background.url = r
            } else
                this.background.id = null,
                this.background.url = null,
                await Rn.removeItem(e)
        },
        async loadBingDailyWallpaper() {
            const e = await nm();
            je(e) || (this.background.url = e)
        },
        async loadWallpaperPalette() {
            const {url: e} = this.background;
            this.theme.colorPalette = await am(e)
        },
        exportSetting() {
            const {npm_package_name: e, npm_package_version: t} = {
                npm_package_name: "light-tab-page",
                npm_package_version: "1.5.2",
                BASE_URL: "/",
                MODE: "production",
                DEV: !1,
                PROD: !0,
                SSR: !1
            }
              , n = JSON.stringify({
                [_r]: e,
                ...window.localStorage
            })
              , r = new Blob([n],{
                type: "application/json;charset=utf-8"
            });
            om.saveAs(r, `${e}_${t}.json`)
        },
        async importSetting(e) {
            if (!e.type.includes("json"))
                throw new Error("导入文件不匹配");
            const t = await e.text()
              , n = JSON.parse(t)
              , {npm_package_name: r} = {
                npm_package_name: "light-tab-page",
                npm_package_version: "1.5.2",
                BASE_URL: "/",
                MODE: "production",
                DEV: !1,
                PROD: !0,
                SSR: !1
            };
            if (n[_r] !== r)
                throw new Error("备份文件已损坏");
            for (let o in n)
                o !== _r && localStorage.setItem(o, n[o])
        }
    }
})
  , ti = "search-engines"
  , tn = "search-history"
  , vr = 100
  , lm = Object.assign({
    "/src/rules/baidu.json": yu,
    "/src/rules/bing.json": Eu,
    "/src/rules/google.json": Au,
    "/src/rules/maven.json": xu,
    "/src/rules/npm.json": Ou
})
  , ni = Object.values(lm)
  , Zr = Object.fromEntries(ni.map(e => [e.id, {
    id: e.id,
    name: e.name,
    icon: e.icon,
    description: e.description,
    baseUrl: e.search.url
}]))
  , es = {
    searchEngines: {
        ...Zr
    },
    history: [],
    rules: Object.fromEntries(ni.map(e => [e.id, new qf(e)]))
}
  , En = qr("search", {
    persist: !1,
    state: () => {
        const e = JSON.parse(localStorage[ti] ?? "{}");
        return Object.assign(es.searchEngines, e),
        es
    }
    ,
    getters: {
        currentUseEngine(e) {
            const {search: t} = Ce();
            return e.searchEngines[t.currentEngine]
        },
        useSearchEngines(e) {
            const {search: t} = Ce()
              , n = t.useSearchEngines
              , r = {};
            for (let o of n) {
                const a = e.searchEngines[o];
                je(a) || (r[o] = a)
            }
            return r
        }
    },
    actions: {
        async submitSearch(e) {
            const t = e.trim();
            if (je(t))
                throw new Error("搜索内容不能为空");
            const r = Ce().search
              , o = r.currentEngine
              , a = {
                engineId: o,
                searchText: t,
                timestamp: Date.now()
            };
            this.putHistory(a),
            this.openSearchPage({
                engine: o,
                text: t,
                target: r.openPageTarget
            })
        },
        openSearchPage(e) {
            const {engine: t, text: n, target: r} = e
              , o = this.searchEngines
              , a = an.defalut(o[t].baseUrl, {
                searchText: n
            }).getUrlString();
            window.open(a, r)
        },
        getSuggestion(e) {
            const {search: t} = Ce();
            switch (t.suggestion) {
            case at.baidu:
                return Gf(e);
            case at.bing:
                return Kf(e);
            case at.google:
                return Jf(e);
            default:
                return []
            }
        },
        putHistory(e) {
            let t = JSON.parse(localStorage[tn] ?? "[]");
            t = t.filter(n => n.searchText !== e.searchText),
            t.unshift(e),
            this.history = t,
            ns(t)
        },
        deleteHistory(e) {
            const t = JSON.parse(localStorage[tn] ?? "[]");
            t.splice(e, 1),
            this.history = t,
            ns(t)
        },
        loadHistory() {
            const e = JSON.parse(localStorage[tn] ?? "[]");
            this.history = e
        },
        cleanHistory() {
            this.history = [],
            localStorage.removeItem(tn)
        },
        addSearchEngine(e) {
            const t = {
                ...this.searchEngines,
                [e.id]: e
            };
            this.searchEngines = t,
            ts(t)
        },
        deleteSearchEngine(e) {
            const t = Ka(this.searchEngines, e);
            this.searchEngines = t,
            ts(t)
        }
    }
});
function ts(e) {
    const t = Ka(e, ...Object.keys(Zr))
      , n = JSON.stringify(t);
    localStorage.setItem(ti, n)
}
function ns(e) {
    const t = e.length;
    t > vr && e.splice(vr - 1, t - vr);
    const n = JSON.stringify(e);
    localStorage.setItem(tn, n)
}
var ri = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        r(e)
    }
    )(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Ve, function(n) {
        var r, o;
        if (!((o = (r = globalThis.chrome) == null ? void 0 : r.runtime) != null && o.id))
            throw new Error("This script should only be loaded in a browser extension.");
        if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
            const a = "The message port closed before a response was received."
              , s = l => {
                const c = {
                    alarms: {
                        clear: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        clearAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    bookmarks: {
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getChildren: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getRecent: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getSubTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTree: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    browserAction: {
                        disable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        enable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        getBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getBadgeText: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        openPopup: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setBadgeText: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    browsingData: {
                        remove: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        removeCache: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCookies: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeDownloads: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFormData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeHistory: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeLocalStorage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePasswords: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePluginData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        settings: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    commands: {
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    contextMenus: {
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    cookies: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAllCookieStores: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    devtools: {
                        inspectedWindow: {
                            eval: {
                                minArgs: 1,
                                maxArgs: 2,
                                singleCallbackArg: !1
                            }
                        },
                        panels: {
                            create: {
                                minArgs: 3,
                                maxArgs: 3,
                                singleCallbackArg: !0
                            },
                            elements: {
                                createSidebarPane: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        }
                    },
                    downloads: {
                        cancel: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        download: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        erase: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFileIcon: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        open: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        pause: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFile: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        resume: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    extension: {
                        isAllowedFileSchemeAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        isAllowedIncognitoAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    history: {
                        addUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        deleteRange: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getVisits: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    i18n: {
                        detectLanguage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAcceptLanguages: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    identity: {
                        launchWebAuthFlow: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    idle: {
                        queryState: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    management: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getSelf: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setEnabled: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        uninstallSelf: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    notifications: {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPermissionLevel: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    pageAction: {
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        hide: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    permissions: {
                        contains: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        request: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    runtime: {
                        getBackgroundPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPlatformInfo: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        openOptionsPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        requestUpdateCheck: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        sendMessage: {
                            minArgs: 1,
                            maxArgs: 3
                        },
                        sendNativeMessage: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        setUninstallURL: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    sessions: {
                        getDevices: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getRecentlyClosed: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        restore: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    storage: {
                        local: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        managed: {
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        sync: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        }
                    },
                    tabs: {
                        captureVisibleTab: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        detectLanguage: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        discard: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        duplicate: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        executeScript: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getZoom: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getZoomSettings: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goBack: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goForward: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        highlight: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        insertCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        query: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        reload: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        sendMessage: {
                            minArgs: 2,
                            maxArgs: 3
                        },
                        setZoom: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        setZoomSettings: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        update: {
                            minArgs: 1,
                            maxArgs: 2
                        }
                    },
                    topSites: {
                        get: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    webNavigation: {
                        getAllFrames: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFrame: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    webRequest: {
                        handlerBehaviorChanged: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    windows: {
                        create: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getLastFocused: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    }
                };
                if (Object.keys(c).length === 0)
                    throw new Error("api-metadata.json has not been included in browser-polyfill");
                class i extends WeakMap {
                    constructor(x, D=void 0) {
                        super(D),
                        this.createItem = x
                    }
                    get(x) {
                        return this.has(x) || this.set(x, this.createItem(x)),
                        super.get(x)
                    }
                }
                const f = O => O && typeof O == "object" && typeof O.then == "function"
                  , m = (O, x) => (...D) => {
                    l.runtime.lastError ? O.reject(new Error(l.runtime.lastError.message)) : x.singleCallbackArg || D.length <= 1 && x.singleCallbackArg !== !1 ? O.resolve(D[0]) : O.resolve(D)
                }
                  , d = O => O == 1 ? "argument" : "arguments"
                  , h = (O, x) => function(q, ...ee) {
                    if (ee.length < x.minArgs)
                        throw new Error(`Expected at least ${x.minArgs} ${d(x.minArgs)} for ${O}(), got ${ee.length}`);
                    if (ee.length > x.maxArgs)
                        throw new Error(`Expected at most ${x.maxArgs} ${d(x.maxArgs)} for ${O}(), got ${ee.length}`);
                    return new Promise( (ie, Ee) => {
                        if (x.fallbackToNoCallback)
                            try {
                                q[O](...ee, m({
                                    resolve: ie,
                                    reject: Ee
                                }, x))
                            } catch (Z) {
                                console.warn(`${O} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, Z),
                                q[O](...ee),
                                x.fallbackToNoCallback = !1,
                                x.noCallback = !0,
                                ie()
                            }
                        else
                            x.noCallback ? (q[O](...ee),
                            ie()) : q[O](...ee, m({
                                resolve: ie,
                                reject: Ee
                            }, x))
                    }
                    )
                }
                  , g = (O, x, D) => new Proxy(x,{
                    apply(q, ee, ie) {
                        return D.call(ee, O, ...ie)
                    }
                });
                let A = Function.call.bind(Object.prototype.hasOwnProperty);
                const z = (O, x={}, D={}) => {
                    let q = Object.create(null)
                      , ee = {
                        has(Ee, Z) {
                            return Z in O || Z in q
                        },
                        get(Ee, Z, ce) {
                            if (Z in q)
                                return q[Z];
                            if (!(Z in O))
                                return;
                            let ae = O[Z];
                            if (typeof ae == "function")
                                if (typeof x[Z] == "function")
                                    ae = g(O, O[Z], x[Z]);
                                else if (A(D, Z)) {
                                    let $e = h(Z, D[Z]);
                                    ae = g(O, O[Z], $e)
                                } else
                                    ae = ae.bind(O);
                            else if (typeof ae == "object" && ae !== null && (A(x, Z) || A(D, Z)))
                                ae = z(ae, x[Z], D[Z]);
                            else if (A(D, "*"))
                                ae = z(ae, x[Z], D["*"]);
                            else
                                return Object.defineProperty(q, Z, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get() {
                                        return O[Z]
                                    },
                                    set($e) {
                                        O[Z] = $e
                                    }
                                }),
                                ae;
                            return q[Z] = ae,
                            ae
                        },
                        set(Ee, Z, ce, ae) {
                            return Z in q ? q[Z] = ce : O[Z] = ce,
                            !0
                        },
                        defineProperty(Ee, Z, ce) {
                            return Reflect.defineProperty(q, Z, ce)
                        },
                        deleteProperty(Ee, Z) {
                            return Reflect.deleteProperty(q, Z)
                        }
                    }
                      , ie = Object.create(O);
                    return new Proxy(ie,ee)
                }
                  , w = O => ({
                    addListener(x, D, ...q) {
                        x.addListener(O.get(D), ...q)
                    },
                    hasListener(x, D) {
                        return x.hasListener(O.get(D))
                    },
                    removeListener(x, D) {
                        x.removeListener(O.get(D))
                    }
                })
                  , R = new i(O => typeof O != "function" ? O : function(D) {
                    const q = z(D, {}, {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    O(q)
                }
                )
                  , j = new i(O => typeof O != "function" ? O : function(D, q, ee) {
                    let ie = !1, Ee, Z = new Promise(Ze => {
                        Ee = function(Ne) {
                            ie = !0,
                            Ze(Ne)
                        }
                    }
                    ), ce;
                    try {
                        ce = O(D, q, Ee)
                    } catch (Ze) {
                        ce = Promise.reject(Ze)
                    }
                    const ae = ce !== !0 && f(ce);
                    if (ce !== !0 && !ae && !ie)
                        return !1;
                    const $e = Ze => {
                        Ze.then(Ne => {
                            ee(Ne)
                        }
                        , Ne => {
                            let Pe;
                            Ne && (Ne instanceof Error || typeof Ne.message == "string") ? Pe = Ne.message : Pe = "An unexpected error occurred",
                            ee({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: Pe
                            })
                        }
                        ).catch(Ne => {
                            console.error("Failed to send onMessage rejected reply", Ne)
                        }
                        )
                    }
                    ;
                    return $e(ae ? ce : Z),
                    !0
                }
                )
                  , $ = ({reject: O, resolve: x}, D) => {
                    l.runtime.lastError ? l.runtime.lastError.message === a ? x() : O(new Error(l.runtime.lastError.message)) : D && D.__mozWebExtensionPolyfillReject__ ? O(new Error(D.message)) : x(D)
                }
                  , E = (O, x, D, ...q) => {
                    if (q.length < x.minArgs)
                        throw new Error(`Expected at least ${x.minArgs} ${d(x.minArgs)} for ${O}(), got ${q.length}`);
                    if (q.length > x.maxArgs)
                        throw new Error(`Expected at most ${x.maxArgs} ${d(x.maxArgs)} for ${O}(), got ${q.length}`);
                    return new Promise( (ee, ie) => {
                        const Ee = $.bind(null, {
                            resolve: ee,
                            reject: ie
                        });
                        q.push(Ee),
                        D.sendMessage(...q)
                    }
                    )
                }
                  , H = {
                    devtools: {
                        network: {
                            onRequestFinished: w(R)
                        }
                    },
                    runtime: {
                        onMessage: w(j),
                        onMessageExternal: w(j),
                        sendMessage: E.bind(null, "sendMessage", {
                            minArgs: 1,
                            maxArgs: 3
                        })
                    },
                    tabs: {
                        sendMessage: E.bind(null, "sendMessage", {
                            minArgs: 2,
                            maxArgs: 3
                        })
                    }
                }
                  , V = {
                    clear: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    set: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                };
                return c.privacy = {
                    network: {
                        "*": V
                    },
                    services: {
                        "*": V
                    },
                    websites: {
                        "*": V
                    }
                },
                z(l, H, c)
            }
            ;
            n.exports = s(chrome)
        } else
            n.exports = globalThis.browser
    })
}
)(ri);
var dn = ri.exports;
const qt = !!dn.runtime
  , eo = {
    bing: {
        origins: ["https://cn.bing.com/"]
    },
    suggestion: {
        origins: ["https://suggestion.baidu.com/", "https://api.bing.com/", "https://suggestqueries.google.com/"]
    },
    topSite: {
        permissions: ["topSites"]
    }
}
  , cm = {
    install(e) {
        e.directive("permis", {
            async created(t, n) {
                if (!qt || je(n.value) || await dn.permissions.contains(n.value))
                    return;
                const o = a => {
                    a.preventDefault(),
                    a.stopPropagation(),
                    dn.permissions.request(n.value).then(s => {
                        s && (t.removeEventListener("click", o),
                        t.click())
                    }
                    )
                }
                ;
                t.addEventListener("click", o)
            }
        })
    }
};
async function um() {
    return qt ? await dn.topSites.get() : []
}
function oi(e) {
    if (qt) {
        const t = new URL(dn.runtime.getURL("/_favicon/"));
        return t.searchParams.set("pageUrl", e),
        t.searchParams.set("size", "128"),
        t.toString()
    } else
        return `${new URL(e).origin}/favicon.ico`
}
const to = qr("top-site", {
    state: () => ({
        topSites: [],
        lastUpdateTime: void 0
    }),
    getters: {
        getCurrentTopSites() {
            const {topSite: e} = Ce();
            return this.topSites.filter( (t, n) => n < e.col * e.row)
        }
    },
    actions: {
        async syncBrowserTopSites() {
            const e = Date.now()
              , t = this.topSites.filter(o => o == null ? void 0 : o.custom)
              , n = await um()
              , r = await Promise.all(n.map(async o => {
                const a = o.favicon || oi(o.url)
                  , s = await Za(a);
                return {
                    title: o.title ?? "无标题",
                    url: o.url,
                    icon: s ? a : void 0,
                    textIcon: !s,
                    custom: !1
                }
            }
            ));
            console.log("load browser top-sites:", `${Date.now() - e}ms`),
            this.topSites = t.concat(r),
            this.lastUpdateTime = e
        },
        addTopSite(e) {
            this.topSites.push(e)
        },
        updateTopSite(e) {
            this.topSites[e.index] = e
        },
        deleteTopSite(e) {
            this.topSites.splice(e, 1)
        },
        sortTopSites(e) {
            const t = this.topSites
              , n = t[e.from];
            je(n) || (t.splice(e.from, 1),
            t.splice(e.to, 0, n))
        }
    }
})
  , si = iu()
  , fm = _u({
    key: e => `${e}-data`,
    auto: !0
});
si.use(fm);
const mm = {
    install(e) {
        e.use(si)
    }
};
async function dm(e) {
    await new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function pm(e, t=100) {
    let n;
    return (...r) => {
        const o = this;
        n && clearTimeout(n),
        n = setTimeout( () => {
            Reflect.apply(e, o, r)
        }
        , t)
    }
}
/*!
  * shared v9.3.0-beta.19
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const Cr = typeof window < "u"
  , kt = (e, t=!1) => t ? Symbol.for(e) : Symbol(e)
  , gm = (e, t, n) => hm({
    l: e,
    k: t,
    s: n
})
  , hm = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , De = e => typeof e == "number" && isFinite(e)
  , _m = e => ii(e) === "[object Date]"
  , Mn = e => ii(e) === "[object RegExp]"
  , Zn = e => ue(e) && Object.keys(e).length === 0;
function vm(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const Be = Object.assign;
let rs;
const no = () => rs || (rs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function os(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const ym = Object.prototype.hasOwnProperty;
function ro(e, t) {
    return ym.call(e, t)
}
const ze = Array.isArray
  , Me = e => typeof e == "function"
  , K = e => typeof e == "string"
  , Oe = e => typeof e == "boolean"
  , ye = e => e !== null && typeof e == "object"
  , ai = Object.prototype.toString
  , ii = e => ai.call(e)
  , ue = e => {
    if (!ye(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , bm = e => e == null ? "" : ze(e) || ue(e) && e.toString === ai ? JSON.stringify(e, null, 2) : String(e);
/*!
  * message-compiler v9.3.0-beta.19
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const li = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
};
function ci(e, t, n={}) {
    const {domain: r, messages: o, args: a} = n
      , s = e
      , l = new SyntaxError(String(s));
    return l.code = e,
    t && (l.location = t),
    l.domain = r,
    l
}
/*!
  * devtools-if v9.3.0-beta.19
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const ui = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.3.0-beta.19
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const St = [];
St[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
};
St[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
};
St[2] = {
    w: [2],
    i: [3, 0],
    [0]: [3, 0]
};
St[3] = {
    i: [3, 0],
    [0]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
};
St[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [4, 2],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
};
St[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
};
St[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
};
const Em = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Sm(e) {
    return Em.test(e)
}
function Am(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function wm(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function xm(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Sm(t) ? Am(t) : "*" + t
}
function Rm(e) {
    const t = [];
    let n = -1, r = 0, o = 0, a, s, l, c, i, f, m;
    const d = [];
    d[0] = () => {
        s === void 0 ? s = l : s += l
    }
    ,
    d[1] = () => {
        s !== void 0 && (t.push(s),
        s = void 0)
    }
    ,
    d[2] = () => {
        d[0](),
        o++
    }
    ,
    d[3] = () => {
        if (o > 0)
            o--,
            r = 4,
            d[0]();
        else {
            if (o = 0,
            s === void 0 || (s = xm(s),
            s === !1))
                return !1;
            d[1]()
        }
    }
    ;
    function h() {
        const g = e[n + 1];
        if (r === 5 && g === "'" || r === 6 && g === '"')
            return n++,
            l = "\\" + g,
            d[0](),
            !0
    }
    for (; r !== null; )
        if (n++,
        a = e[n],
        !(a === "\\" && h())) {
            if (c = wm(a),
            m = St[r],
            i = m[c] || m.l || 8,
            i === 8 || (r = i[0],
            i[1] !== void 0 && (f = d[i[1]],
            f && (l = a,
            f() === !1))))
                return;
            if (r === 7)
                return t
        }
}
const ss = new Map;
function Om(e, t) {
    return ye(e) ? e[t] : null
}
function Tm(e, t) {
    if (!ye(e))
        return null;
    let n = ss.get(t);
    if (n || (n = Rm(t),
    n && ss.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let o = e
      , a = 0;
    for (; a < r; ) {
        const s = o[n[a]];
        if (s === void 0)
            return null;
        o = s,
        a++
    }
    return o
}
const km = e => e
  , Cm = e => ""
  , zm = "text"
  , Im = e => e.length === 0 ? "" : e.join("")
  , Nm = bm;
function as(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function Pm(e) {
    const t = De(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t
}
function Lm(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function Dm(e={}) {
    const t = e.locale
      , n = Pm(e)
      , r = ye(e.pluralRules) && K(t) && Me(e.pluralRules[t]) ? e.pluralRules[t] : as
      , o = ye(e.pluralRules) && K(t) && Me(e.pluralRules[t]) ? as : void 0
      , a = w => w[r(n, w.length, o)]
      , s = e.list || []
      , l = w => s[w]
      , c = e.named || {};
    De(e.pluralIndex) && Lm(n, c);
    const i = w => c[w];
    function f(w) {
        const R = Me(e.messages) ? e.messages(w) : ye(e.messages) ? e.messages[w] : !1;
        return R || (e.parent ? e.parent.message(w) : Cm)
    }
    const m = w => e.modifiers ? e.modifiers[w] : km
      , d = ue(e.processor) && Me(e.processor.normalize) ? e.processor.normalize : Im
      , h = ue(e.processor) && Me(e.processor.interpolate) ? e.processor.interpolate : Nm
      , g = ue(e.processor) && K(e.processor.type) ? e.processor.type : zm
      , z = {
        list: l,
        named: i,
        plural: a,
        linked: (w, ...R) => {
            const [j,$] = R;
            let E = "text"
              , H = "";
            R.length === 1 ? ye(j) ? (H = j.modifier || H,
            E = j.type || E) : K(j) && (H = j || H) : R.length === 2 && (K(j) && (H = j || H),
            K($) && (E = $ || E));
            let V = f(w)(z);
            return E === "vnode" && ze(V) && H && (V = V[0]),
            H ? m(H)(V, E) : V
        }
        ,
        message: f,
        type: g,
        interpolate: h,
        normalize: d
    };
    return z
}
let pn = null;
function Fm(e) {
    pn = e
}
function Mm(e, t, n) {
    pn && pn.emit(ui.I18nInit, {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const Um = $m(ui.FunctionTranslate);
function $m(e) {
    return t => pn && pn.emit(e, t)
}
function Bm(e, t, n) {
    return [...new Set([n, ...ze(t) ? t : ye(t) ? Object.keys(t) : K(t) ? [t] : [n]])]
}
function fi(e, t, n) {
    const r = K(n) ? n : oo
      , o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let a = o.__localeChainCache.get(r);
    if (!a) {
        a = [];
        let s = [n];
        for (; ze(s); )
            s = is(a, s, t);
        const l = ze(t) || !ue(t) ? t : t.default ? t.default : null;
        s = K(l) ? [l] : l,
        ze(s) && is(a, s, !1),
        o.__localeChainCache.set(r, a)
    }
    return a
}
function is(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && Oe(r); o++) {
        const a = t[o];
        K(a) && (r = jm(e, t[o], n))
    }
    return r
}
function jm(e, t, n) {
    let r;
    const o = t.split("-");
    do {
        const a = o.join("-");
        r = Hm(e, a, n),
        o.splice(-1, 1)
    } while (o.length && r === !0);
    return r
}
function Hm(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o),
        (ze(n) || ue(n)) && n[o] && (r = n[o])
    }
    return r
}
const Wm = "9.3.0-beta.19"
  , er = -1
  , oo = "en-US"
  , ls = ""
  , cs = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Vm() {
    return {
        upper: (e, t) => t === "text" && K(e) ? e.toUpperCase() : t === "vnode" && ye(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && K(e) ? e.toLowerCase() : t === "vnode" && ye(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && K(e) ? cs(e) : t === "vnode" && ye(e) && "__v_isVNode"in e ? cs(e.children) : e
    }
}
let Ym, mi;
function qm(e) {
    mi = e
}
let di;
function Gm(e) {
    di = e
}
let pi = null;
const us = e => {
    pi = e
}
  , Km = () => pi;
let gi = null;
const fs = e => {
    gi = e
}
  , Jm = () => gi;
let ms = 0;
function Xm(e={}) {
    const t = K(e.version) ? e.version : Wm
      , n = K(e.locale) ? e.locale : oo
      , r = ze(e.fallbackLocale) || ue(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n
      , o = ue(e.messages) ? e.messages : {
        [n]: {}
    }
      , a = ue(e.datetimeFormats) ? e.datetimeFormats : {
        [n]: {}
    }
      , s = ue(e.numberFormats) ? e.numberFormats : {
        [n]: {}
    }
      , l = Be({}, e.modifiers || {}, Vm())
      , c = e.pluralRules || {}
      , i = Me(e.missing) ? e.missing : null
      , f = Oe(e.missingWarn) || Mn(e.missingWarn) ? e.missingWarn : !0
      , m = Oe(e.fallbackWarn) || Mn(e.fallbackWarn) ? e.fallbackWarn : !0
      , d = !!e.fallbackFormat
      , h = !!e.unresolving
      , g = Me(e.postTranslation) ? e.postTranslation : null
      , A = ue(e.processor) ? e.processor : null
      , z = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , w = !!e.escapeParameter
      , R = Me(e.messageCompiler) ? e.messageCompiler : Ym
      , j = Me(e.messageResolver) ? e.messageResolver : mi || Om
      , $ = Me(e.localeFallbacker) ? e.localeFallbacker : di || Bm
      , E = ye(e.fallbackContext) ? e.fallbackContext : void 0
      , H = Me(e.onWarn) ? e.onWarn : vm
      , V = e
      , O = ye(V.__datetimeFormatters) ? V.__datetimeFormatters : new Map
      , x = ye(V.__numberFormatters) ? V.__numberFormatters : new Map
      , D = ye(V.__meta) ? V.__meta : {};
    ms++;
    const q = {
        version: t,
        cid: ms,
        locale: n,
        fallbackLocale: r,
        messages: o,
        modifiers: l,
        pluralRules: c,
        missing: i,
        missingWarn: f,
        fallbackWarn: m,
        fallbackFormat: d,
        unresolving: h,
        postTranslation: g,
        processor: A,
        warnHtmlMessage: z,
        escapeParameter: w,
        messageCompiler: R,
        messageResolver: j,
        localeFallbacker: $,
        fallbackContext: E,
        onWarn: H,
        __meta: D
    };
    return q.datetimeFormats = a,
    q.numberFormats = s,
    q.__datetimeFormatters = O,
    q.__numberFormatters = x,
    __INTLIFY_PROD_DEVTOOLS__ && Mm(q, t, D),
    q
}
function so(e, t, n, r, o) {
    const {missing: a, onWarn: s} = e;
    if (a !== null) {
        const l = a(e, n, t, o);
        return K(l) ? l : t
    } else
        return t
}
function en(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
let hi = li.__EXTEND_POINT__;
const yr = () => ++hi
  , Ft = {
    INVALID_ARGUMENT: hi,
    INVALID_DATE_ARGUMENT: yr(),
    INVALID_ISO_DATE_ARGUMENT: yr(),
    __EXTEND_POINT__: yr()
};
function Mt(e) {
    return ci(e, null, void 0)
}
const ds = () => ""
  , st = e => Me(e);
function ps(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: l} = e
      , [c,i] = zr(...t)
      , f = Oe(i.missingWarn) ? i.missingWarn : e.missingWarn
      , m = Oe(i.fallbackWarn) ? i.fallbackWarn : e.fallbackWarn
      , d = Oe(i.escapeParameter) ? i.escapeParameter : e.escapeParameter
      , h = !!i.resolvedMessage
      , g = K(i.default) || Oe(i.default) ? Oe(i.default) ? a ? c : () => c : i.default : n ? a ? c : () => c : ""
      , A = n || g !== ""
      , z = K(i.locale) ? i.locale : e.locale;
    d && Qm(i);
    let[w,R,j] = h ? [c, z, l[z] || {}] : _i(e, c, z, s, m, f)
      , $ = w
      , E = c;
    if (!h && !(K($) || st($)) && A && ($ = g,
    E = $),
    !h && (!(K($) || st($)) || !K(R)))
        return o ? er : c;
    let H = !1;
    const V = () => {
        H = !0
    }
      , O = st($) ? $ : vi(e, c, R, $, E, V);
    if (H)
        return $;
    const x = td(e, R, j, i)
      , D = Dm(x)
      , q = Zm(e, O, D)
      , ee = r ? r(q, c) : q;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const ie = {
            timestamp: Date.now(),
            key: K(c) ? c : st($) ? $.key : "",
            locale: R || (st($) ? $.locale : ""),
            format: K($) ? $ : st($) ? $.source : "",
            message: ee
        };
        ie.meta = Be({}, e.__meta, Km() || {}),
        Um(ie)
    }
    return ee
}
function Qm(e) {
    ze(e.list) ? e.list = e.list.map(t => K(t) ? os(t) : t) : ye(e.named) && Object.keys(e.named).forEach(t => {
        K(e.named[t]) && (e.named[t] = os(e.named[t]))
    }
    )
}
function _i(e, t, n, r, o, a) {
    const {messages: s, onWarn: l, messageResolver: c, localeFallbacker: i} = e
      , f = i(e, r, n);
    let m = {}, d, h = null;
    const g = "translate";
    for (let A = 0; A < f.length && (d = f[A],
    m = s[d] || {},
    (h = c(m, t)) === null && (h = m[t]),
    !(K(h) || Me(h))); A++) {
        const z = so(e, t, d, a, g);
        z !== t && (h = z)
    }
    return [h, d, m]
}
function vi(e, t, n, r, o, a) {
    const {messageCompiler: s, warnHtmlMessage: l} = e;
    if (st(r)) {
        const i = r;
        return i.locale = i.locale || n,
        i.key = i.key || t,
        i
    }
    if (s == null) {
        const i = () => r;
        return i.locale = n,
        i.key = t,
        i
    }
    const c = s(r, ed(e, n, o, r, l, a));
    return c.locale = n,
    c.key = t,
    c.source = r,
    c
}
function Zm(e, t, n) {
    return t(n)
}
function zr(...e) {
    const [t,n,r] = e
      , o = {};
    if (!K(t) && !De(t) && !st(t))
        throw Mt(Ft.INVALID_ARGUMENT);
    const a = De(t) ? String(t) : (st(t),
    t);
    return De(n) ? o.plural = n : K(n) ? o.default = n : ue(n) && !Zn(n) ? o.named = n : ze(n) && (o.list = n),
    De(r) ? o.plural = r : K(r) ? o.default = r : ue(r) && Be(o, r),
    [a, o]
}
function ed(e, t, n, r, o, a) {
    return {
        warnHtmlMessage: o,
        onError: s => {
            throw a && a(s),
            s
        }
        ,
        onCacheKey: s => gm(t, n, s)
    }
}
function td(e, t, n, r) {
    const {modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: c, missingWarn: i, fallbackContext: f} = e
      , d = {
        locale: t,
        modifiers: o,
        pluralRules: a,
        messages: h => {
            let g = s(n, h);
            if (g == null && f) {
                const [,,A] = _i(f, h, t, l, c, i);
                g = s(A, h)
            }
            if (K(g)) {
                let A = !1;
                const w = vi(e, h, t, g, h, () => {
                    A = !0
                }
                );
                return A ? ds : w
            } else
                return st(g) ? g : ds
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    De(r.plural) && (d.pluralIndex = r.plural),
    d
}
function gs(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s} = e
      , {__datetimeFormatters: l} = e
      , [c,i,f,m] = Ir(...t)
      , d = Oe(f.missingWarn) ? f.missingWarn : e.missingWarn;
    Oe(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const h = !!f.part
      , g = K(f.locale) ? f.locale : e.locale
      , A = s(e, o, g);
    if (!K(c) || c === "")
        return new Intl.DateTimeFormat(g,m).format(i);
    let z = {}, w, R = null;
    const j = "datetime format";
    for (let H = 0; H < A.length && (w = A[H],
    z = n[w] || {},
    R = z[c],
    !ue(R)); H++)
        so(e, c, w, d, j);
    if (!ue(R) || !K(w))
        return r ? er : c;
    let $ = `${w}__${c}`;
    Zn(m) || ($ = `${$}__${JSON.stringify(m)}`);
    let E = l.get($);
    return E || (E = new Intl.DateTimeFormat(w,Be({}, R, m)),
    l.set($, E)),
    h ? E.formatToParts(i) : E.format(i)
}
const yi = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function Ir(...e) {
    const [t,n,r,o] = e
      , a = {};
    let s = {}, l;
    if (K(t)) {
        const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!c)
            throw Mt(Ft.INVALID_ISO_DATE_ARGUMENT);
        const i = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
        l = new Date(i);
        try {
            l.toISOString()
        } catch {
            throw Mt(Ft.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (_m(t)) {
        if (isNaN(t.getTime()))
            throw Mt(Ft.INVALID_DATE_ARGUMENT);
        l = t
    } else if (De(t))
        l = t;
    else
        throw Mt(Ft.INVALID_ARGUMENT);
    return K(n) ? a.key = n : ue(n) && Object.keys(n).forEach(c => {
        yi.includes(c) ? s[c] = n[c] : a[c] = n[c]
    }
    ),
    K(r) ? a.locale = r : ue(r) && (s = r),
    ue(o) && (s = o),
    [a.key || "", l, a, s]
}
function hs(e, t, n) {
    const r = e;
    for (const o in n) {
        const a = `${t}__${o}`;
        r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a)
    }
}
function _s(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s} = e
      , {__numberFormatters: l} = e
      , [c,i,f,m] = Nr(...t)
      , d = Oe(f.missingWarn) ? f.missingWarn : e.missingWarn;
    Oe(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const h = !!f.part
      , g = K(f.locale) ? f.locale : e.locale
      , A = s(e, o, g);
    if (!K(c) || c === "")
        return new Intl.NumberFormat(g,m).format(i);
    let z = {}, w, R = null;
    const j = "number format";
    for (let H = 0; H < A.length && (w = A[H],
    z = n[w] || {},
    R = z[c],
    !ue(R)); H++)
        so(e, c, w, d, j);
    if (!ue(R) || !K(w))
        return r ? er : c;
    let $ = `${w}__${c}`;
    Zn(m) || ($ = `${$}__${JSON.stringify(m)}`);
    let E = l.get($);
    return E || (E = new Intl.NumberFormat(w,Be({}, R, m)),
    l.set($, E)),
    h ? E.formatToParts(i) : E.format(i)
}
const bi = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function Nr(...e) {
    const [t,n,r,o] = e
      , a = {};
    let s = {};
    if (!De(t))
        throw Mt(Ft.INVALID_ARGUMENT);
    const l = t;
    return K(n) ? a.key = n : ue(n) && Object.keys(n).forEach(c => {
        bi.includes(c) ? s[c] = n[c] : a[c] = n[c]
    }
    ),
    K(r) ? a.locale = r : ue(r) && (s = r),
    ue(o) && (s = o),
    [a.key || "", l, a, s]
}
function vs(e, t, n) {
    const r = e;
    for (const o in n) {
        const a = `${t}__${o}`;
        r.__numberFormatters.has(a) && r.__numberFormatters.delete(a)
    }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (no().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.3.0-beta.19
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const nd = "9.3.0-beta.19";
function rd() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (no().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
let Ei = li.__EXTEND_POINT__;
const We = () => ++Ei
  , Ke = {
    UNEXPECTED_RETURN_TYPE: Ei,
    INVALID_ARGUMENT: We(),
    MUST_BE_CALL_SETUP_TOP: We(),
    NOT_INSTALLED: We(),
    NOT_AVAILABLE_IN_LEGACY_MODE: We(),
    REQUIRED_VALUE: We(),
    INVALID_VALUE: We(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: We(),
    NOT_INSTALLED_WITH_PROVIDE: We(),
    UNEXPECTED_ERROR: We(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: We(),
    BRIDGE_SUPPORT_VUE_2_ONLY: We(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: We(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: We(),
    __EXTEND_POINT__: We()
};
function Qe(e, ...t) {
    return ci(e, null, void 0)
}
const Pr = kt("__translateVNode")
  , Lr = kt("__datetimeParts")
  , Dr = kt("__numberParts")
  , od = kt("__setPluralRules")
  , sd = kt("__injectWithOption");
function Fr(e) {
    if (!ye(e))
        return e;
    for (const t in e)
        if (ro(e, t))
            if (!t.includes("."))
                ye(e[t]) && Fr(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let o = e;
                for (let a = 0; a < r; a++)
                    n[a]in o || (o[n[a]] = {}),
                    o = o[n[a]];
                o[n[r]] = e[t],
                delete e[t],
                ye(o[n[r]]) && Fr(o[n[r]])
            }
    return e
}
function Si(e, t) {
    const {messages: n, __i18n: r, messageResolver: o, flatJson: a} = t
      , s = ue(n) ? n : ze(r) ? {} : {
        [e]: {}
    };
    if (ze(r) && r.forEach(l => {
        if ("locale"in l && "resource"in l) {
            const {locale: c, resource: i} = l;
            c ? (s[c] = s[c] || {},
            cn(i, s[c])) : cn(i, s)
        } else
            K(l) && cn(JSON.parse(l), s)
    }
    ),
    o == null && a)
        for (const l in s)
            ro(s, l) && Fr(s[l]);
    return s
}
const On = e => !ye(e) || ze(e);
function cn(e, t) {
    if (On(e) || On(t))
        throw Qe(Ke.INVALID_VALUE);
    for (const n in e)
        ro(e, n) && (On(e[n]) || On(t[n]) ? t[n] = e[n] : cn(e[n], t[n]))
}
function Ai(e) {
    return e.type
}
function ad(e, t, n) {
    let r = ye(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = Si(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const o = Object.keys(r);
    o.length && o.forEach(a => {
        e.mergeLocaleMessage(a, r[a])
    }
    );
    {
        if (ye(t.datetimeFormats)) {
            const a = Object.keys(t.datetimeFormats);
            a.length && a.forEach(s => {
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (ye(t.numberFormats)) {
            const a = Object.keys(t.numberFormats);
            a.length && a.forEach(s => {
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function ys(e) {
    return C(Al, null, e, 0)
}
const bs = "__INTLIFY_META__";
let Es = 0;
function Ss(e) {
    return (t, n, r, o) => e(n, r, Br() || void 0, o)
}
const id = () => {
    const e = Br();
    let t = null;
    return e && (t = Ai(e)[bs]) ? {
        [bs]: t
    } : null
}
;
function wi(e={}, t) {
    const {__root: n} = e
      , r = n === void 0;
    let o = Oe(e.inheritLocale) ? e.inheritLocale : !0;
    const a = Ue(n && o ? n.locale.value : K(e.locale) ? e.locale : oo)
      , s = Ue(n && o ? n.fallbackLocale.value : K(e.fallbackLocale) || ze(e.fallbackLocale) || ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value)
      , l = Ue(Si(a.value, e))
      , c = Ue(ue(e.datetimeFormats) ? e.datetimeFormats : {
        [a.value]: {}
    })
      , i = Ue(ue(e.numberFormats) ? e.numberFormats : {
        [a.value]: {}
    });
    let f = n ? n.missingWarn : Oe(e.missingWarn) || Mn(e.missingWarn) ? e.missingWarn : !0
      , m = n ? n.fallbackWarn : Oe(e.fallbackWarn) || Mn(e.fallbackWarn) ? e.fallbackWarn : !0
      , d = n ? n.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0
      , h = !!e.fallbackFormat
      , g = Me(e.missing) ? e.missing : null
      , A = Me(e.missing) ? Ss(e.missing) : null
      , z = Me(e.postTranslation) ? e.postTranslation : null
      , w = n ? n.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , R = !!e.escapeParameter;
    const j = n ? n.modifiers : ue(e.modifiers) ? e.modifiers : {};
    let $ = e.pluralRules || n && n.pluralRules, E;
    E = ( () => {
        r && fs(null);
        const N = {
            version: nd,
            locale: a.value,
            fallbackLocale: s.value,
            messages: l.value,
            modifiers: j,
            pluralRules: $,
            missing: A === null ? void 0 : A,
            missingWarn: f,
            fallbackWarn: m,
            fallbackFormat: h,
            unresolving: !0,
            postTranslation: z === null ? void 0 : z,
            warnHtmlMessage: w,
            escapeParameter: R,
            messageResolver: e.messageResolver,
            __meta: {
                framework: "vue"
            }
        };
        N.datetimeFormats = c.value,
        N.numberFormats = i.value,
        N.__datetimeFormatters = ue(E) ? E.__datetimeFormatters : void 0,
        N.__numberFormatters = ue(E) ? E.__numberFormatters : void 0;
        const B = Xm(N);
        return r && fs(B),
        B
    }
    )(),
    en(E, a.value, s.value);
    function V() {
        return [a.value, s.value, l.value, c.value, i.value]
    }
    const O = le({
        get: () => a.value,
        set: N => {
            a.value = N,
            E.locale = a.value
        }
    })
      , x = le({
        get: () => s.value,
        set: N => {
            s.value = N,
            E.fallbackLocale = s.value,
            en(E, a.value, N)
        }
    })
      , D = le( () => l.value)
      , q = le( () => c.value)
      , ee = le( () => i.value);
    function ie() {
        return Me(z) ? z : null
    }
    function Ee(N) {
        z = N,
        E.postTranslation = N
    }
    function Z() {
        return g
    }
    function ce(N) {
        N !== null && (A = Ss(N)),
        g = N,
        E.missing = A
    }
    const ae = (N, B, qe, Le, Nt, At) => {
        V();
        let ut;
        if (__INTLIFY_PROD_DEVTOOLS__)
            try {
                us(id()),
                r || (E.fallbackContext = n ? Jm() : void 0),
                ut = N(E)
            } finally {
                us(null),
                r || (E.fallbackContext = void 0)
            }
        else
            ut = N(E);
        if (De(ut) && ut === er) {
            const [An,tr] = B();
            return n && d ? Le(n) : Nt(An)
        } else {
            if (At(ut))
                return ut;
            throw Qe(Ke.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function $e(...N) {
        return ae(B => Reflect.apply(ps, null, [B, ...N]), () => zr(...N), "translate", B => Reflect.apply(B.t, B, [...N]), B => B, B => K(B))
    }
    function Ze(...N) {
        const [B,qe,Le] = N;
        if (Le && !ye(Le))
            throw Qe(Ke.INVALID_ARGUMENT);
        return $e(B, qe, Be({
            resolvedMessage: !0
        }, Le || {}))
    }
    function Ne(...N) {
        return ae(B => Reflect.apply(gs, null, [B, ...N]), () => Ir(...N), "datetime format", B => Reflect.apply(B.d, B, [...N]), () => ls, B => K(B))
    }
    function Pe(...N) {
        return ae(B => Reflect.apply(_s, null, [B, ...N]), () => Nr(...N), "number format", B => Reflect.apply(B.n, B, [...N]), () => ls, B => K(B))
    }
    function dt(N) {
        return N.map(B => K(B) || De(B) || Oe(B) ? ys(String(B)) : B)
    }
    const pt = {
        normalize: dt,
        interpolate: N => N,
        type: "vnode"
    };
    function zt(...N) {
        return ae(B => {
            let qe;
            const Le = B;
            try {
                Le.processor = pt,
                qe = Reflect.apply(ps, null, [Le, ...N])
            } finally {
                Le.processor = null
            }
            return qe
        }
        , () => zr(...N), "translate", B => B[Pr](...N), B => [ys(B)], B => ze(B))
    }
    function ot(...N) {
        return ae(B => Reflect.apply(_s, null, [B, ...N]), () => Nr(...N), "number format", B => B[Dr](...N), () => [], B => K(B) || ze(B))
    }
    function I(...N) {
        return ae(B => Reflect.apply(gs, null, [B, ...N]), () => Ir(...N), "datetime format", B => B[Lr](...N), () => [], B => K(B) || ze(B))
    }
    function G(N) {
        $ = N,
        E.pluralRules = $
    }
    function Y(N, B) {
        const qe = K(B) ? B : a.value
          , Le = Se(qe);
        return E.messageResolver(Le, N) !== null
    }
    function X(N) {
        let B = null;
        const qe = fi(E, s.value, a.value);
        for (let Le = 0; Le < qe.length; Le++) {
            const Nt = l.value[qe[Le]] || {}
              , At = E.messageResolver(Nt, N);
            if (At != null) {
                B = At;
                break
            }
        }
        return B
    }
    function pe(N) {
        const B = X(N);
        return B ?? (n ? n.tm(N) || {} : {})
    }
    function Se(N) {
        return l.value[N] || {}
    }
    function re(N, B) {
        l.value[N] = B,
        E.messages = l.value
    }
    function ne(N, B) {
        l.value[N] = l.value[N] || {},
        cn(B, l.value[N]),
        E.messages = l.value
    }
    function ge(N) {
        return c.value[N] || {}
    }
    function ct(N, B) {
        c.value[N] = B,
        E.datetimeFormats = c.value,
        hs(E, N, B)
    }
    function ke(N, B) {
        c.value[N] = Be(c.value[N] || {}, B),
        E.datetimeFormats = c.value,
        hs(E, N, B)
    }
    function It(N) {
        return i.value[N] || {}
    }
    function Gt(N, B) {
        i.value[N] = B,
        E.numberFormats = i.value,
        vs(E, N, B)
    }
    function Kt(N, B) {
        i.value[N] = Be(i.value[N] || {}, B),
        E.numberFormats = i.value,
        vs(E, N, B)
    }
    Es++,
    n && Cr && (Rt(n.locale, N => {
        o && (a.value = N,
        E.locale = N,
        en(E, a.value, s.value))
    }
    ),
    Rt(n.fallbackLocale, N => {
        o && (s.value = N,
        E.fallbackLocale = N,
        en(E, a.value, s.value))
    }
    ));
    const we = {
        id: Es,
        locale: O,
        fallbackLocale: x,
        get inheritLocale() {
            return o
        },
        set inheritLocale(N) {
            o = N,
            N && n && (a.value = n.locale.value,
            s.value = n.fallbackLocale.value,
            en(E, a.value, s.value))
        },
        get availableLocales() {
            return Object.keys(l.value).sort()
        },
        messages: D,
        get modifiers() {
            return j
        },
        get pluralRules() {
            return $ || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return f
        },
        set missingWarn(N) {
            f = N,
            E.missingWarn = f
        },
        get fallbackWarn() {
            return m
        },
        set fallbackWarn(N) {
            m = N,
            E.fallbackWarn = m
        },
        get fallbackRoot() {
            return d
        },
        set fallbackRoot(N) {
            d = N
        },
        get fallbackFormat() {
            return h
        },
        set fallbackFormat(N) {
            h = N,
            E.fallbackFormat = h
        },
        get warnHtmlMessage() {
            return w
        },
        set warnHtmlMessage(N) {
            w = N,
            E.warnHtmlMessage = N
        },
        get escapeParameter() {
            return R
        },
        set escapeParameter(N) {
            R = N,
            E.escapeParameter = N
        },
        t: $e,
        getLocaleMessage: Se,
        setLocaleMessage: re,
        mergeLocaleMessage: ne,
        getPostTranslationHandler: ie,
        setPostTranslationHandler: Ee,
        getMissingHandler: Z,
        setMissingHandler: ce,
        [od]: G
    };
    return we.datetimeFormats = q,
    we.numberFormats = ee,
    we.rt = Ze,
    we.te = Y,
    we.tm = pe,
    we.d = Ne,
    we.n = Pe,
    we.getDateTimeFormat = ge,
    we.setDateTimeFormat = ct,
    we.mergeDateTimeFormat = ke,
    we.getNumberFormat = It,
    we.setNumberFormat = Gt,
    we.mergeNumberFormat = Kt,
    we[sd] = e.__injectWithOption,
    we[Pr] = zt,
    we[Lr] = I,
    we[Dr] = ot,
    we
}
const ao = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function ld({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce( (r, o) => [...r, ...o.type === xe ? o.children : [o]], []) : t.reduce( (n, r) => {
        const o = e[r];
        return o && (n[r] = o()),
        n
    }
    , {})
}
function xi(e) {
    return xe
}
const cd = be({
    name: "i18n-t",
    props: Be({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => De(e) || !isNaN(e)
        }
    }, ao),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , o = e.i18n || He({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const a = Object.keys(n).filter(m => m !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = K(e.plural) ? +e.plural : e.plural);
            const l = ld(t, a)
              , c = o[Pr](e.keypath, l, s)
              , i = Be({}, r)
              , f = K(e.tag) || ye(e.tag) ? e.tag : xi();
            return $n(f, i, c)
        }
    }
})
  , As = cd;
function ud(e) {
    return ze(e) && !K(e[0])
}
function Ri(e, t, n, r) {
    const {slots: o, attrs: a} = t;
    return () => {
        const s = {
            part: !0
        };
        let l = {};
        e.locale && (s.locale = e.locale),
        K(e.format) ? s.key = e.format : ye(e.format) && (K(e.format.key) && (s.key = e.format.key),
        l = Object.keys(e.format).reduce( (d, h) => n.includes(h) ? Be({}, d, {
            [h]: e.format[h]
        }) : d, {}));
        const c = r(e.value, s, l);
        let i = [s.key];
        ze(c) ? i = c.map( (d, h) => {
            const g = o[d.type]
              , A = g ? g({
                [d.type]: d.value,
                index: h,
                parts: c
            }) : [d.value];
            return ud(A) && (A[0].key = `${d.type}-${h}`),
            A
        }
        ) : K(c) && (i = [c]);
        const f = Be({}, a)
          , m = K(e.tag) || ye(e.tag) ? e.tag : xi();
        return $n(m, f, i)
    }
}
const fd = be({
    name: "i18n-n",
    props: Be({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ao),
    setup(e, t) {
        const n = e.i18n || He({
            useScope: "parent",
            __useComponent: !0
        });
        return Ri(e, t, bi, (...r) => n[Dr](...r))
    }
})
  , ws = fd
  , md = be({
    name: "i18n-d",
    props: Be({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ao),
    setup(e, t) {
        const n = e.i18n || He({
            useScope: "parent",
            __useComponent: !0
        });
        return Ri(e, t, yi, (...r) => n[Lr](...r))
    }
})
  , xs = md;
function dd(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function pd(e) {
    const t = s => {
        const {instance: l, modifiers: c, value: i} = s;
        if (!l || !l.$)
            throw Qe(Ke.UNEXPECTED_ERROR);
        const f = dd(e, l.$)
          , m = Rs(i);
        return [Reflect.apply(f.t, f, [...Os(m)]), f]
    }
    ;
    return {
        created: (s, l) => {
            const [c,i] = t(l);
            Cr && e.global === i && (s.__i18nWatcher = Rt(i.locale, () => {
                l.instance && l.instance.$forceUpdate()
            }
            )),
            s.__composer = i,
            s.textContent = c
        }
        ,
        unmounted: s => {
            Cr && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s, {value: l}) => {
            if (s.__composer) {
                const c = s.__composer
                  , i = Rs(l);
                s.textContent = Reflect.apply(c.t, c, [...Os(i)])
            }
        }
        ,
        getSSRProps: s => {
            const [l] = t(s);
            return {
                textContent: l
            }
        }
    }
}
function Rs(e) {
    if (K(e))
        return {
            path: e
        };
    if (ue(e)) {
        if (!("path"in e))
            throw Qe(Ke.REQUIRED_VALUE, "path");
        return e
    } else
        throw Qe(Ke.INVALID_VALUE)
}
function Os(e) {
    const {path: t, locale: n, args: r, choice: o, plural: a} = e
      , s = {}
      , l = r || {};
    return K(n) && (s.locale = n),
    De(o) && (s.plural = o),
    De(a) && (s.plural = a),
    [t, l, s]
}
function gd(e, t, ...n) {
    const r = ue(n[0]) ? n[0] : {}
      , o = !!r.useI18nComponentName;
    (Oe(r.globalInstall) ? r.globalInstall : !0) && (e.component(o ? "i18n" : As.name, As),
    e.component(ws.name, ws),
    e.component(xs.name, xs)),
    e.directive("t", pd(t))
}
const hd = kt("global-vue-i18n");
function _d(e={}, t) {
    const n = Oe(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , o = new Map
      , [a,s] = vd(e)
      , l = kt("");
    function c(m) {
        return o.get(m) || null
    }
    function i(m, d) {
        o.set(m, d)
    }
    function f(m) {
        o.delete(m)
    }
    {
        const m = {
            get mode() {
                return "composition"
            },
            get allowComposition() {
                return r
            },
            async install(d, ...h) {
                if (d.__VUE_I18N_SYMBOL__ = l,
                d.provide(d.__VUE_I18N_SYMBOL__, m),
                ue(h[0])) {
                    const A = h[0];
                    m.__composerExtend = A.__composerExtend,
                    m.__vueI18nExtend = A.__vueI18nExtend
                }
                n && Od(d, m.global),
                gd(d, m, ...h);
                const g = d.unmount;
                d.unmount = () => {
                    m.dispose(),
                    g()
                }
            },
            get global() {
                return s
            },
            dispose() {
                a.stop()
            },
            __instances: o,
            __getInstance: c,
            __setInstance: i,
            __deleteInstance: f
        };
        return m
    }
}
function He(e={}) {
    const t = Br();
    if (t == null)
        throw Qe(Ke.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw Qe(Ke.NOT_INSTALLED);
    const n = yd(t)
      , r = Ed(n)
      , o = Ai(t)
      , a = bd(e, o);
    if (a === "global")
        return ad(r, e, o),
        r;
    if (a === "parent") {
        let c = Sd(n, t, e.__useComponent);
        return c == null && (c = r),
        c
    }
    const s = n;
    let l = s.__getInstance(t);
    if (l == null) {
        const c = Be({}, e);
        "__i18n"in o && (c.__i18n = o.__i18n),
        r && (c.__root = r),
        l = wi(c),
        s.__composerExtend && s.__composerExtend(l),
        wd(s, t),
        s.__setInstance(t, l)
    }
    return l
}
function vd(e, t, n) {
    const r = Ur();
    {
        const o = r.run( () => wi(e));
        if (o == null)
            throw Qe(Ke.UNEXPECTED_ERROR);
        return [r, o]
    }
}
function yd(e) {
    {
        const t = Et(e.isCE ? hd : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw Qe(e.isCE ? Ke.NOT_INSTALLED_WITH_PROVIDE : Ke.UNEXPECTED_ERROR);
        return t
    }
}
function bd(e, t) {
    return Zn(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function Ed(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function Sd(e, t, n=!1) {
    let r = null;
    const o = t.root;
    let a = Ad(t, n);
    for (; a != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(a)),
        r != null || o === a)
            break;
        a = a.parent
    }
    return r
}
function Ad(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function wd(e, t, n) {
    Sl( () => {}
    , t),
    Is( () => {
        e.__deleteInstance(t)
    }
    , t)
}
const xd = ["locale", "fallbackLocale", "availableLocales"]
  , Rd = ["t", "rt", "d", "n", "tm", "te"];
function Od(e, t) {
    const n = Object.create(null);
    xd.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o)
            throw Qe(Ke.UNEXPECTED_ERROR);
        const a = Ot(o.value) ? {
            get() {
                return o.value.value
            },
            set(s) {
                o.value.value = s
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, r, a)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Rd.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o || !o.value)
            throw Qe(Ke.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${r}`, o)
    }
    )
}
qm(Tm);
Gm(fi);
rd();
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = no();
    e.__INTLIFY__ = !0,
    Fm(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const Td = {
    class: "search-warp"
}
  , kd = {
    key: 0,
    class: "search-logo"
}
  , Cd = ["src"]
  , zd = {
    class: "search-input",
    ref: "searchInput"
}
  , Id = be({
    __name: "Search",
    props: {
        value: {}
    },
    setup(e) {
        const t = e;
        Bn(g => ({
            b44509f8: l.value
        }));
        const {t: n} = He()
          , r = Ce()
          , o = En()
          , {search: a} = Ye(r)
          , s = Ue(!1)
          , l = le( () => `${a.value.searchInputRadius}px`)
          , c = Ue()
          , i = Ue(t.value);
        Rt( () => t.value, g => i.value = g ?? "");
        function f(g) {
            o.submitSearch(g)
        }
        const m = pm(d);
        async function d(g) {
            if (je(g))
                c.value = [];
            else {
                const A = await o.getSuggestion(g);
                c.value = A.map(z => ({
                    value: z
                }))
            }
        }
        function h(g) {
            if (g.key !== "Tab")
                return;
            g.preventDefault();
            const A = Object.keys(o.useSearchEngines)
              , z = A.length;
            let w = A.indexOf(a.value.currentEngine);
            w += g.shiftKey ? -1 : 1,
            a.value.currentEngine = w < 0 ? A[z - 1] : w < z ? A[w] : A[0]
        }
        return (g, A) => {
            const z = jn
              , w = Hn
              , R = Rl
              , j = wl;
            return F(),
            Q("div", Td, [v(a).showEngineIcon ? (F(),
            Q("div", kd, [te("img", {
                src: v(o).currentUseEngine.icon,
                class: "logo",
                alt: "logo",
                draggable: "false"
            }, null, 8, Cd)])) : Ae("", !0), te("div", zd, [C(j, {
                value: i.value,
                "onUpdate:value": A[3] || (A[3] = $ => i.value = $),
                open: s.value,
                options: c.value,
                defaultActiveFirstOption: !1,
                size: "large",
                autofocus: "",
                backfill: "",
                style: {
                    width: "100%"
                },
                onSearch: v(m),
                onSelect: A[4] || (A[4] = $ => s.value = !1)
            }, {
                default: P( () => [C(R, {
                    placeholder: v(n)("home.search"),
                    "enter-button": "",
                    size: "large",
                    onKeydown: h,
                    onClick: A[1] || (A[1] = $ => s.value = !0),
                    onBlur: A[2] || (A[2] = $ => s.value = !1),
                    onSearch: f
                }, xl({
                    _: 2
                }, [v(a).showEngineSelect ? {
                    name: "addonBefore",
                    fn: P( () => [C(w, {
                        value: v(a).currentEngine,
                        "onUpdate:value": A[0] || (A[0] = $ => v(a).currentEngine = $),
                        style: {
                            width: "90px"
                        }
                    }, {
                        default: P( () => [(F(!0),
                        Q(xe, null, Ge(v(o).useSearchEngines, ($, E) => (F(),
                        se(z, {
                            value: E,
                            key: E
                        }, {
                            default: P( () => [fe(de($.name), 1)]),
                            _: 2
                        }, 1032, ["value"]))), 128))]),
                        _: 1
                    }, 8, ["value"])]),
                    key: "0"
                } : void 0]), 1032, ["placeholder"])]),
                _: 1
            }, 8, ["value", "open", "options", "onSearch"])], 512)])
        }
    }
});
const xt = e => `${e ?? 0}px`
  , Oi = e => `${Math.round((e ?? 0) * 100)}%`
  , Nd = {
    class: "icon-warp"
}
  , Pd = ["src"]
  , Ti = be({
    __name: "Icon",
    props: {
        src: {},
        textIcon: {
            type: Boolean,
            default: !1
        },
        title: {},
        size: {
            default: 32
        }
    },
    setup(e) {
        const t = e
          , n = le( () => xt(t.size));
        function r() {
            return je(t.title) ? "无" : t.title.trim().charAt(0).toUpperCase()
        }
        return (o, a) => (F(),
        Q("div", Nd, [te("div", {
            class: "icon-content",
            style: Nn({
                width: n.value,
                height: n.value
            })
        }, [t.textIcon || !t.src ? (F(),
        Q("p", {
            key: 0,
            class: "text-icon",
            style: Nn({
                fontSize: n.value
            })
        }, de(r()), 5)) : (F(),
        Q("img", {
            key: 1,
            class: "img-icon",
            src: t.src,
            alt: "logo",
            draggable: "false"
        }, null, 8, Pd))], 4), Pn(o.$slots, "default")]))
    }
});
var wt = (e => (e[e.start = 0] = "start",
e[e.enter = 1] = "enter",
e[e.over = 2] = "over",
e[e.end = 3] = "end",
e))(wt || {});
const Ld = {
    class: "top-site-warp"
}
  , Dd = ["title"]
  , Fd = te("div", {
    class: "icon-board"
}, null, -1)
  , Md = ["onClick"]
  , Ud = {
    class: "icon-title"
}
  , $d = ["title"]
  , Bd = te("div", {
    class: "icon-board"
}, null, -1)
  , jd = {
    class: "icon-title"
}
  , Hd = be({
    __name: "TopSite",
    setup(e) {
        Bn(R => ({
            a817abb6: v(o).col,
            a8173b02: v(o).row,
            f89c13e2: `${v(o).gap}px`,
            "516e1f80": `${v(o).boardSize}px`,
            fee61850: v(o).boardColor,
            "0cfe7340": v(o).boardOpacity,
            "6b261b51": `${v(o).boardRadius}px`
        }));
        const {t} = He()
          , n = Ce()
          , r = to()
          , {topSite: o} = Ye(n)
          , a = le( () => r.getCurrentTopSites)
          , s = nt({
            currentDrag: -1,
            shake: !1,
            editStatus: !1,
            showAddModal: !1
        })
          , l = nt({
            title: "",
            url: "",
            icon: "",
            textIcon: !1,
            autoIcon: !0
        })
          , c = nt({
            title: [{
                required: !0,
                message: "请输入名称"
            }],
            url: [{
                required: !0,
                message: "请输入地址URL",
                type: "url"
            }],
            icon: [{
                required: !1,
                message: "请输入图标URL",
                type: "url"
            }]
        })
          , {validate: i, resetFields: f, validateInfos: m} = Ln.useForm(l, c);
        function d(R) {
            window.open(R, bt.Blank)
        }
        function h() {
            s.shake = !0,
            s.editStatus = !0,
            document.body.addEventListener("click", g)
        }
        function g(R) {
            s.editStatus && (R.stopPropagation(),
            s.shake = !1,
            s.editStatus = !1,
            document.body.removeEventListener("click", g))
        }
        function A(R, j) {
            switch (R) {
            case wt.start:
                s.currentDrag = j,
                h();
                return;
            case wt.enter:
                if (s.currentDrag === j)
                    return;
                const $ = {
                    from: s.currentDrag,
                    to: j
                };
                r.sortTopSites($),
                s.currentDrag = j;
                return;
            case wt.end:
                s.currentDrag = -1;
                return
            }
        }
        async function z() {
            try {
                await i();
                const R = l.autoIcon ? oi(l.url) : void 0
                  , j = {
                    ...l,
                    custom: !0,
                    icon: R
                };
                r.addTopSite(j),
                f(),
                s.showAddModal = !1
            } catch {}
        }
        async function w() {
            r.lastUpdateTime || await r.syncBrowserTopSites()
        }
        return Ns(w),
        (R, j) => {
            const $ = Ti
              , E = Ps
              , H = Ls
              , V = hn
              , O = Ln
              , x = Tl;
            return F(),
            Q("div", Ld, [C(Ol, {
                class: "top-site-grid",
                name: "flip-list",
                tag: "ul"
            }, {
                default: P( () => [(F(!0),
                Q(xe, null, Ge(a.value, (D, q) => (F(),
                Q("li", {
                    key: D.url,
                    class: $t(["top-site-item", {
                        hide: s.currentDrag === q
                    }]),
                    title: D.title
                }, [C($, {
                    class: $t(["top-site-icon", {
                        "shake-active": s.shake
                    }]),
                    "text-icon": D.textIcon,
                    src: D.icon,
                    title: D.title,
                    size: v(o).iconSize,
                    draggable: "true",
                    onClick: ee => d(D.url),
                    onContextmenu: Tn(h, ["prevent", "stop"]),
                    onDragstart: ee => A(v(wt).start, q),
                    onDragenter: ee => A(v(wt).enter, q),
                    onDragover: j[0] || (j[0] = Tn( () => {}
                    , ["prevent"])),
                    onDragend: ee => A(v(wt).end, q)
                }, {
                    default: P( () => [Fd, C(gn, {
                        name: "scale"
                    }, {
                        default: P( () => [un(te("sup", {
                            class: "bubble-delete",
                            onClick: Tn(ee => v(r).deleteTopSite(q), ["stop"])
                        }, null, 8, Md), [[_o, s.editStatus]])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["class", "text-icon", "src", "title", "size", "onClick", "onContextmenu", "onDragstart", "onDragenter", "onDragend"]), te("div", Ud, [te("span", null, de(D.title), 1)])], 10, Dd))), 128)), a.value.length < v(o).col * v(o).row ? un((F(),
                Q("li", {
                    key: 0,
                    class: "top-site-item",
                    title: v(t)("topsite.add")
                }, [C($, {
                    class: "top-site-icon",
                    title: "＋",
                    size: 48,
                    textIcon: "",
                    onClick: j[1] || (j[1] = D => s.showAddModal = !0)
                }, {
                    default: P( () => [Bd]),
                    _: 1
                }), te("div", jd, [te("span", null, de(v(t)("topsite.add")), 1)])], 8, $d)), [[_o, !s.shake]]) : Ae("", !0)]),
                _: 1
            }), C(x, {
                visible: s.showAddModal,
                "onUpdate:visible": j[7] || (j[7] = D => s.showAddModal = D),
                title: v(t)("topsite.add"),
                width: 500,
                centered: "",
                "destroy-on-close": "",
                "ok-text": "保存",
                "cancel-text": "取消",
                onOk: z
            }, {
                default: P( () => [C(O, {
                    model: l,
                    "label-col": {
                        span: 6
                    },
                    "wrapper-col": {
                        span: 16
                    },
                    ref: "formRef"
                }, {
                    default: P( () => [C(H, Ut({
                        label: "网站标题"
                    }, v(m).title), {
                        default: P( () => [C(E, {
                            value: l.title,
                            "onUpdate:value": j[2] || (j[2] = D => l.title = D),
                            placeholder: "标题"
                        }, null, 8, ["value"])]),
                        _: 1
                    }, 16), C(H, Ut({
                        label: "网站URL"
                    }, v(m).url), {
                        default: P( () => [C(E, {
                            value: l.url,
                            "onUpdate:value": j[3] || (j[3] = D => l.url = D),
                            placeholder: "URL"
                        }, null, 8, ["value"])]),
                        _: 1
                    }, 16), C(H, {
                        label: "自动获取图标"
                    }, {
                        default: P( () => [C(V, {
                            checked: l.autoIcon,
                            "onUpdate:checked": j[4] || (j[4] = D => l.autoIcon = D)
                        }, null, 8, ["checked"])]),
                        _: 1
                    }), l.autoIcon ? Ae("", !0) : (F(),
                    se(H, {
                        key: 0,
                        label: "文字图标"
                    }, {
                        default: P( () => [C(V, {
                            checked: l.textIcon,
                            "onUpdate:checked": j[5] || (j[5] = D => l.textIcon = D)
                        }, null, 8, ["checked"])]),
                        _: 1
                    })), l.autoIcon || l.textIcon ? Ae("", !0) : (F(),
                    se(H, Ut({
                        key: 1,
                        label: "图标URL"
                    }, v(m).icon), {
                        default: P( () => [C(E, {
                            value: l.icon,
                            "onUpdate:value": j[6] || (j[6] = D => l.icon = D),
                            placeholder: "图标URL"
                        }, null, 8, ["value"])]),
                        _: 1
                    }, 16))]),
                    _: 1
                }, 8, ["model"])]),
                _: 1
            }, 8, ["visible", "title"])])
        }
    }
});
const Wd = te("div", {
    class: "wallpaper-mask"
}, null, -1)
  , Vd = [Wd]
  , Yd = be({
    __name: "Wallpaper",
    async setup(e) {
        let t, n;
        Bn(c => ({
            "2d955605": `${v(o).blur}px`,
            "0cdb52d1": v(o).maskColor,
            "10fa8e85": s.value
        }));
        const r = Ce()
          , {background: o, currentTheme: a} = Ye(r)
          , s = le( () => {
            const {maskOpacity: i, autoOpacity: f} = o.value;
            return f && a.value === tt.Dart ? (.75 + (1 - .75) * i).toFixed(2) : i
        }
        );
        return ([t,n] = cr( () => Za(o.value.url)),
        t = await t,
        n(),
        t) || ([t,n] = cr( () => r.reloadBackgroundImage()),
        await t,
        n()),
        o.value.type === et.Bing && ([t,n] = cr( () => r.loadBingDailyWallpaper()),
        await t,
        n()),
        (c, i) => v(je)(v(o).url) ? Ae("", !0) : (F(),
        Q("div", {
            key: 0,
            id: "wallpaper-image",
            style: Nn({
                backgroundImage: `url(${v(o).url})`
            })
        }, Vd, 4))
    }
});
const qd = {
    class: "color-radio-warp"
}
  , Gd = ["onClick"]
  , Kd = be({
    __name: "ColorRadio",
    props: {
        colors: {},
        radius: {
            default: "4px"
        },
        value: {}
    },
    emits: ["update:value"],
    setup(e, {emit: t}) {
        const n = e;
        function r(o) {
            t("update:value", o)
        }
        return (o, a) => (F(),
        Q("div", qd, [(F(!0),
        Q(xe, null, Ge(n.colors, s => (F(),
        Q("div", {
            class: $t(["color-item", {
                active: v(Jo)(n.value, s)
            }]),
            key: s,
            style: Nn({
                backgroundColor: s,
                borderRadius: `${n.radius}`
            }),
            onClick: l => r(s)
        }, [C(gn, {
            name: "scale"
        }, {
            default: P( () => [v(Jo)(n.value, s) ? (F(),
            se(v(kl), {
                key: 0,
                class: "select-icon"
            })) : Ae("", !0)]),
            _: 2
        }, 1024)], 14, Gd))), 128))]))
    }
});
const Jd = {
    class: "setting-lable"
}
  , Tt = be({
    __name: "SettingItem",
    props: {
        lable: {},
        horizontal: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (F(),
        Q("div", {
            class: $t(["setting-item", {
                horizontal: t.horizontal !== !1
            }])
        }, [te("div", Jd, [Pn(n.$slots, "lable", {}, () => [te("span", null, de(t.lable), 1)])]), Pn(n.$slots, "default")], 2))
    }
});
const Xd = "/assets/auto-mode-efc9239e.svg"
  , Qd = "/assets/light-mode-40010873.svg"
  , Zd = "/assets/dark-mode-68fc1318.svg"
  , ep = {
    class: "theme-setting"
}
  , tp = {
    class: "theme-mode"
}
  , np = ["onClick"]
  , rp = ["src"]
  , op = be({
    __name: "ThemeSetting",
    setup(e) {
        const t = [{
            name: "跟随系统",
            mode: tt.Auto,
            icon: Xd
        }, {
            name: "浅色模式",
            mode: tt.Light,
            icon: Qd
        }, {
            name: "深色模式",
            mode: tt.Dart,
            icon: Zd
        }]
          , {t: n} = He()
          , r = Ce()
          , {theme: o, primaryColors: a, background: s} = Ye(r)
          , l = nt({
            colorPalette: !1
        })
          , c = le( () => !je(o.value.colorPalette));
        async function i(f) {
            f ? r.loadWallpaperPalette() : o.value.colorPalette = []
        }
        return (f, m) => {
            const d = jr
              , h = Tt
              , g = Kd
              , A = Ds
              , z = hn;
            return F(),
            Q("div", ep, [C(h, {
                lable: v(n)("theme.mode")
            }, {
                default: P( () => [te("div", tp, [(F(),
                Q(xe, null, Ge(t, w => C(d, {
                    title: w.name,
                    key: w.name
                }, {
                    default: P( () => [te("div", {
                        class: "theme-item",
                        onClick: R => v(o).mode = w.mode
                    }, [te("img", {
                        src: w.icon
                    }, null, 8, rp), C(gn, {
                        name: "scale"
                    }, {
                        default: P( () => [w.mode === v(o).mode ? (F(),
                        se(v(Cl), {
                            key: 0,
                            class: "select-icon"
                        })) : Ae("", !0)]),
                        _: 2
                    }, 1024)], 8, np)]),
                    _: 2
                }, 1032, ["title"])), 64))])]),
                _: 1
            }, 8, ["lable"]), C(h, {
                lable: v(n)("theme.primaryColor")
            }, {
                default: P( () => [C(g, {
                    value: v(o).primaryColor,
                    "onUpdate:value": m[0] || (m[0] = w => v(o).primaryColor = w),
                    colors: v(a)
                }, null, 8, ["value", "colors"])]),
                _: 1
            }, 8, ["lable"]), v(s).type === v(et).Local ? (F(),
            se(h, {
                key: 0,
                horizontal: ""
            }, {
                lable: P( () => [te("span", null, [fe(de(v(n)("theme.wallpaperPalette")) + " ", 1), C(A, {
                    color: "warning"
                }, {
                    default: P( () => [fe(de(v(n)("common.experimen")), 1)]),
                    _: 1
                })])]),
                default: P( () => [C(z, {
                    checked: c.value,
                    loading: l.colorPalette,
                    onChange: i
                }, null, 8, ["checked", "loading"])]),
                _: 1
            })) : Ae("", !0)])
        }
    }
});
const sp = ["src"]
  , ap = {
    key: 0,
    class: "add-engine-layout"
}
  , ip = {
    class: "btn-list"
}
  , lp = {
    key: 1,
    style: {
        textAlign: "center",
        marginTop: "12px",
        height: "32px",
        lineHeight: "32px"
    }
}
  , cp = be({
    __name: "SearchManage",
    setup(e) {
        const t = Ce()
          , n = En()
          , {search: r} = Ye(t)
          , o = le( () => Object.values(n.searchEngines))
          , a = Object.keys(Zr);
        Ue();
        const s = nt({
            show: !1,
            name: "",
            url: "",
            icon: "",
            description: ""
        })
          , l = nt({
            name: [{
                required: !0,
                message: "请输入名称"
            }],
            icon: [{
                required: !0,
                message: "请输入图标URL",
                type: "url"
            }],
            url: [{
                required: !0,
                message: "请输入地址URL",
                type: "url"
            }]
        })
          , {validate: c, resetFields: i, validateInfos: f} = Ln.useForm(s, l);
        function m(g) {
            const A = new Set(r.value.useSearchEngines);
            A.add(g),
            r.value.useSearchEngines = Array.from(A)
        }
        function d(g) {
            const A = new Set(r.value.useSearchEngines);
            A.delete(g),
            r.value.useSearchEngines = Array.from(A)
        }
        async function h() {
            try {
                await c();
                const {name: g, icon: A, description: z, url: w} = s
                  , R = {
                    name: g,
                    icon: A,
                    description: z,
                    id: g,
                    baseUrl: w
                };
                n.addSearchEngine(R),
                m(g),
                i(),
                s.show = !1
            } catch {}
        }
        return (g, A) => {
            const z = Ds
              , w = zl
              , R = Vt
              , j = Il
              , $ = Ps
              , E = Ls
              , H = Nl
              , V = Ln
              , O = Pl;
            return F(),
            se(O, {
                class: "search-list"
            }, {
                loadMore: P( () => [s.show ? (F(),
                Q("div", ap, [C(V, {
                    model: s,
                    layout: "vertical"
                }, {
                    default: P( () => [C(E, Ut({
                        label: "搜索引擎名称"
                    }, v(f).name), {
                        default: P( () => [C($, {
                            value: s.name,
                            "onUpdate:value": A[0] || (A[0] = x => s.name = x),
                            placeholder: "名称"
                        }, null, 8, ["value"])]),
                        _: 1
                    }, 16), C(E, Ut({
                        label: "图标URL",
                        name: "icon"
                    }, v(f).icon), {
                        default: P( () => [C($, {
                            value: s.icon,
                            "onUpdate:value": A[1] || (A[1] = x => s.icon = x),
                            placeholder: "图标URL"
                        }, null, 8, ["value"])]),
                        _: 1
                    }, 16), C(E, {
                        label: "描述",
                        name: "description"
                    }, {
                        default: P( () => [C($, {
                            value: s.description,
                            "onUpdate:value": A[2] || (A[2] = x => s.description = x),
                            placeholder: "描述"
                        }, null, 8, ["value"])]),
                        _: 1
                    }), C(E, Ut({
                        label: "地址URL (用 {searchText} 代替搜索词)",
                        name: "url"
                    }, v(f).url), {
                        default: P( () => [C(H, {
                            value: s.url,
                            "onUpdate:value": A[3] || (A[3] = x => s.url = x),
                            placeholder: "地址URL",
                            rows: 3
                        }, null, 8, ["value"])]),
                        _: 1
                    }, 16)]),
                    _: 1
                }, 8, ["model"]), te("div", ip, [C(R, {
                    type: "primary",
                    onClick: h
                }, {
                    default: P( () => [fe(" 保存 ")]),
                    _: 1
                }), C(R, {
                    onClick: A[4] || (A[4] = x => s.show = !1)
                }, {
                    default: P( () => [fe(" 取消 ")]),
                    _: 1
                })])])) : (F(),
                Q("div", lp, [C(R, {
                    type: "text",
                    onClick: A[5] || (A[5] = x => s.show = !0)
                }, {
                    icon: P( () => [C(v(Fs))]),
                    default: P( () => [fe(" 创建 ")]),
                    _: 1
                })]))]),
                default: P( () => [(F(!0),
                Q(xe, null, Ge(o.value, x => (F(),
                se(j, {
                    key: x.id
                }, {
                    actions: P( () => [v(r).useSearchEngines.includes(x.id) ? (F(),
                    se(R, {
                        key: 1,
                        type: "link",
                        size: "small",
                        disabled: v(r).currentEngine === x.id,
                        onClick: D => d(x.id)
                    }, {
                        default: P( () => [fe(" 移出 ")]),
                        _: 2
                    }, 1032, ["disabled", "onClick"])) : (F(),
                    se(R, {
                        key: 0,
                        type: "link",
                        size: "small",
                        onClick: D => m(x.id)
                    }, {
                        default: P( () => [fe(" 添加 ")]),
                        _: 2
                    }, 1032, ["onClick"])), v(a).includes(x.id) ? Ae("", !0) : (F(),
                    se(R, {
                        key: 2,
                        type: "link",
                        size: "small",
                        disabled: v(r).currentEngine === x.id,
                        onClick: D => v(n).deleteSearchEngine(x.id)
                    }, {
                        default: P( () => [fe(" 删除 ")]),
                        _: 2
                    }, 1032, ["disabled", "onClick"]))]),
                    default: P( () => [C(w, {
                        description: x.description
                    }, {
                        title: P( () => [te("span", null, [fe(de(x.name) + " ", 1), v(a).includes(x.id) ? (F(),
                        Q(xe, {
                            key: 0
                        }, [fe("(内置)")], 64)) : Ae("", !0)]), v(r).currentEngine === x.id ? (F(),
                        se(z, {
                            key: 0,
                            color: "processing"
                        }, {
                            default: P( () => [fe(" 使用中 ")]),
                            _: 1
                        })) : v(r).useSearchEngines.includes(x.id) ? (F(),
                        se(z, {
                            key: 1,
                            color: "success"
                        }, {
                            default: P( () => [fe(" 已添加 ")]),
                            _: 1
                        })) : Ae("", !0)]),
                        avatar: P( () => [te("img", {
                            src: x.icon
                        }, null, 8, sp)]),
                        _: 2
                    }, 1032, ["description"])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            })
        }
    }
});
const Mr = be({
    __name: "IconTooltip",
    props: {
        title: {},
        type: {
            default: "info"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => {
            const o = jr;
            return F(),
            Q("span", {
                class: $t(["icon-tooltip", t.type])
            }, [C(o, {
                title: t.title
            }, {
                default: P( () => [Pn(n.$slots, "default", {}, () => [t.type === "info" ? (F(),
                se(v(Ll), {
                    key: 0
                })) : t.type === "warn" ? (F(),
                se(v(Dl), {
                    key: 1
                })) : t.type === "success" ? (F(),
                se(v(Fl), {
                    key: 2
                })) : t.type === "error" ? (F(),
                se(v(Ml), {
                    key: 3
                })) : Ae("", !0)])]),
                _: 3
            }, 8, ["title"])], 2)
        }
    }
});
const up = {
    class: "search-setting"
}
  , fp = be({
    __name: "SearchSetting",
    setup(e) {
        const {t} = He()
          , n = Ce()
          , r = En()
          , {search: o} = Ye(n)
          , {useSearchEngines: a} = Ye(r)
          , s = Ue(!1)
          , l = le({
            get: () => n.search.openPageTarget === bt.Blank,
            set: c => {
                const i = c ? bt.Blank : bt.Self;
                o.value.openPageTarget = i
            }
        });
        return (c, i) => {
            const f = jn
              , m = Hn
              , d = Tt
              , h = Wn
              , g = hn
              , A = Us
              , z = Hr("permis");
            return F(),
            Q(xe, null, [te("div", up, [C(d, {
                horizontal: ""
            }, {
                lable: P( () => [te("span", null, de(v(t)("search.engine")), 1), C(Mr, {
                    class: "engine-setting",
                    title: "管理搜索引擎",
                    onClick: i[0] || (i[0] = w => s.value = !0)
                }, {
                    default: P( () => [C(v(Ms))]),
                    _: 1
                })]),
                default: P( () => [C(m, {
                    value: v(o).currentEngine,
                    "onUpdate:value": i[1] || (i[1] = w => v(o).currentEngine = w),
                    style: {
                        width: "90px"
                    }
                }, {
                    default: P( () => [(F(!0),
                    Q(xe, null, Ge(v(a), (w, R) => (F(),
                    se(f, {
                        value: R,
                        key: R
                    }, {
                        default: P( () => [fe(de(w.name), 1)]),
                        _: 2
                    }, 1032, ["value"]))), 128))]),
                    _: 1
                }, 8, ["value"])]),
                _: 1
            }), C(d, {
                horizontal: ""
            }, {
                lable: P( () => [te("span", null, de(v(t)("search.suggestApi")), 1), v(o).suggestion === v(at).none ? (F(),
                se(Mr, {
                    key: 0,
                    title: v(t)("search.suggestApiTip"),
                    type: "warn"
                }, null, 8, ["title"])) : Ae("", !0)]),
                default: P( () => [un((F(),
                se(m, {
                    value: v(o).suggestion,
                    "onUpdate:value": i[2] || (i[2] = w => v(o).suggestion = w),
                    disabled: !v(qt),
                    style: {
                        width: "100px"
                    }
                }, {
                    default: P( () => [C(f, {
                        value: v(at).none
                    }, {
                        default: P( () => [fe(" 不使用 ")]),
                        _: 1
                    }, 8, ["value"]), C(f, {
                        value: v(at).baidu
                    }, {
                        default: P( () => [fe(" 百度 API ")]),
                        _: 1
                    }, 8, ["value"]), C(f, {
                        value: v(at).bing
                    }, {
                        default: P( () => [fe(" Bing API ")]),
                        _: 1
                    }, 8, ["value"]), C(f, {
                        value: v(at).google
                    }, {
                        default: P( () => [fe(" Google API ")]),
                        _: 1
                    }, 8, ["value"])]),
                    _: 1
                }, 8, ["value", "disabled"])), [[z, v(eo).suggestion]])]),
                _: 1
            }), C(d, {
                lable: v(t)("search.searchRound")
            }, {
                default: P( () => [C(h, {
                    value: v(o).searchInputRadius,
                    "onUpdate:value": i[3] || (i[3] = w => v(o).searchInputRadius = w),
                    max: 22,
                    "tip-formatter": v(xt)
                }, null, 8, ["value", "tip-formatter"])]),
                _: 1
            }, 8, ["lable"]), C(d, {
                lable: v(t)("search.newTabOpen"),
                horizontal: ""
            }, {
                default: P( () => [C(g, {
                    checked: l.value,
                    "onUpdate:checked": i[4] || (i[4] = w => l.value = w)
                }, null, 8, ["checked"])]),
                _: 1
            }, 8, ["lable"]), C(d, {
                lable: v(t)("search.showEngineIcon"),
                horizontal: ""
            }, {
                default: P( () => [C(g, {
                    checked: v(o).showEngineIcon,
                    "onUpdate:checked": i[5] || (i[5] = w => v(o).showEngineIcon = w)
                }, null, 8, ["checked"])]),
                _: 1
            }, 8, ["lable"]), C(d, {
                lable: v(t)("search.showEngineSelet"),
                horizontal: ""
            }, {
                default: P( () => [C(g, {
                    checked: v(o).showEngineSelect,
                    "onUpdate:checked": i[6] || (i[6] = w => v(o).showEngineSelect = w)
                }, null, 8, ["checked"])]),
                _: 1
            }, 8, ["lable"])]), C(A, {
                visible: s.value,
                "onUpdate:visible": i[7] || (i[7] = w => s.value = w),
                title: "管理搜索引擎",
                width: 400,
                "destroy-on-close": ""
            }, {
                default: P( () => [C(cp)]),
                _: 1
            }, 8, ["visible"])], 64)
        }
    }
});
const mp = {
    class: "background-setting"
}
  , dp = ["src"]
  , pp = {
    key: 1
}
  , gp = be({
    __name: "BackgroundSetting",
    setup(e) {
        const {t} = He()
          , n = Ce()
          , {background: r} = Ye(n);
        function o(a) {
            n.uploadBackgroundImage(a.file)
        }
        return Rt( () => r.value.type, a => {
            a === et.Bing && n.loadBingDailyWallpaper()
        }
        ),
        (a, s) => {
            const l = $s
              , c = Bs
              , i = Tt
              , f = js
              , m = Wn
              , d = hn
              , h = Hr("permis");
            return F(),
            Q("div", mp, [C(i, {
                lable: v(t)("background.wallpaper.setting")
            }, {
                default: P( () => [C(c, {
                    value: v(r).type,
                    "onUpdate:value": s[0] || (s[0] = g => v(r).type = g),
                    "button-style": "solid"
                }, {
                    default: P( () => [C(l, {
                        value: v(et).None
                    }, {
                        default: P( () => [fe(de(v(t)("background.wallpaper.none")), 1)]),
                        _: 1
                    }, 8, ["value"]), C(l, {
                        value: v(et).Local
                    }, {
                        default: P( () => [fe(de(v(t)("background.wallpaper.local")), 1)]),
                        _: 1
                    }, 8, ["value"]), un((F(),
                    se(l, {
                        value: v(et).Bing,
                        disabled: !v(qt)
                    }, {
                        default: P( () => [fe(de(v(t)("background.wallpaper.bing")), 1)]),
                        _: 1
                    }, 8, ["value", "disabled"])), [[h, v(eo).bing]])]),
                    _: 1
                }, 8, ["value"])]),
                _: 1
            }, 8, ["lable"]), v(r).type === v(et).Local ? (F(),
            se(i, {
                key: 0,
                class: "upload-layout",
                lable: v(t)("background.wallpaper.upload")
            }, {
                default: P( () => [C(f, {
                    class: "background-uploader",
                    "list-type": "picture-card",
                    "show-upload-list": !1,
                    customRequest: o,
                    accept: "image/*",
                    style: {
                        width: "100%"
                    }
                }, {
                    default: P( () => [v(r).url ? (F(),
                    Q("img", {
                        key: 0,
                        src: v(r).url,
                        alt: "avatar"
                    }, null, 8, dp)) : (F(),
                    Q("div", pp, [C(v(Fs))]))]),
                    _: 1
                })]),
                _: 1
            }, 8, ["lable"])) : Ae("", !0), v(r).type !== v(et).None ? (F(),
            Q(xe, {
                key: 1
            }, [C(i, {
                lable: v(t)("background.blur")
            }, {
                default: P( () => [C(m, {
                    value: v(r).blur,
                    "onUpdate:value": s[1] || (s[1] = g => v(r).blur = g),
                    max: 48,
                    tipFormatter: v(xt)
                }, null, 8, ["value", "tipFormatter"])]),
                _: 1
            }, 8, ["lable"]), C(i, {
                lable: v(t)("background.maskOpacity")
            }, {
                default: P( () => [C(m, {
                    value: v(r).maskOpacity,
                    "onUpdate:value": s[2] || (s[2] = g => v(r).maskOpacity = g),
                    step: .01,
                    max: 1,
                    tipFormatter: v(Oi)
                }, null, 8, ["value", "tipFormatter"])]),
                _: 1
            }, 8, ["lable"]), C(i, {
                lable: v(t)("background.wallpaperDark"),
                horizontal: ""
            }, {
                default: P( () => [C(d, {
                    checked: v(r).autoOpacity,
                    "onUpdate:checked": s[3] || (s[3] = g => v(r).autoOpacity = g)
                }, null, 8, ["checked"])]),
                _: 1
            }, 8, ["lable"])], 64)) : Ae("", !0)])
        }
    }
});
var ki = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(Ve, function() {
        return function(n, r, o) {
            n = n || {};
            var a = r.prototype
              , s = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function l(i, f, m, d) {
                return a.fromToBase(i, f, m, d)
            }
            o.en.relativeTime = s,
            a.fromToBase = function(i, f, m, d, h) {
                for (var g, A, z, w = m.$locale().relativeTime || s, R = n.thresholds || [{
                    l: "s",
                    r: 44,
                    d: "second"
                }, {
                    l: "m",
                    r: 89
                }, {
                    l: "mm",
                    r: 44,
                    d: "minute"
                }, {
                    l: "h",
                    r: 89
                }, {
                    l: "hh",
                    r: 21,
                    d: "hour"
                }, {
                    l: "d",
                    r: 35
                }, {
                    l: "dd",
                    r: 25,
                    d: "day"
                }, {
                    l: "M",
                    r: 45
                }, {
                    l: "MM",
                    r: 10,
                    d: "month"
                }, {
                    l: "y",
                    r: 17
                }, {
                    l: "yy",
                    d: "year"
                }], j = R.length, $ = 0; $ < j; $ += 1) {
                    var E = R[$];
                    E.d && (g = d ? o(i).diff(m, E.d, !0) : m.diff(i, E.d, !0));
                    var H = (n.rounding || Math.round)(Math.abs(g));
                    if (z = g > 0,
                    H <= E.r || !E.r) {
                        H <= 1 && $ > 0 && (E = R[$ - 1]);
                        var V = w[E.l];
                        h && (H = h("" + H)),
                        A = typeof V == "string" ? V.replace("%d", H) : V(H, f, E.l, z);
                        break
                    }
                }
                if (f)
                    return A;
                var O = z ? w.future : w.past;
                return typeof O == "function" ? O(A) : O.replace("%s", A)
            }
            ,
            a.to = function(i, f) {
                return l(i, f, this, !0)
            }
            ,
            a.from = function(i, f) {
                return l(i, f, this)
            }
            ;
            var c = function(i) {
                return i.$u ? o.utc() : o()
            };
            a.toNow = function(i) {
                return this.to(c(this), i)
            }
            ,
            a.fromNow = function(i) {
                return this.from(c(this), i)
            }
        }
    })
}
)(ki);
var hp = ki.exports;
const _p = zs(hp);
var vp = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Hs)
    }
    )(Ve, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , a = {
            name: "zh-cn",
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function(s, l) {
                return l === "W" ? s + "周" : s + "日"
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            meridiem: function(s, l) {
                var c = 100 * s + l;
                return c < 600 ? "凌晨" : c < 900 ? "早上" : c < 1100 ? "上午" : c < 1300 ? "中午" : c < 1800 ? "下午" : "晚上"
            }
        };
        return o.default.locale(a, null, !0),
        a
    })
}
)(vp);
var yp = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Hs)
    }
    )(Ve, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , a = {
            name: "zh-tw",
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function(s, l) {
                return l === "W" ? s + "週" : s + "日"
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            },
            meridiem: function(s, l) {
                var c = 100 * s + l;
                return c < 600 ? "凌晨" : c < 900 ? "早上" : c < 1100 ? "上午" : c < 1300 ? "中午" : c < 1800 ? "下午" : "晚上"
            }
        };
        return o.default.locale(a, null, !0),
        a
    })
}
)(yp);
var bp = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(Ve, function() {
        return {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(n) {
                var r = ["th", "st", "nd", "rd"]
                  , o = n % 100;
                return "[" + n + (r[(o - 20) % 10] || r[o] || r[0]) + "]"
            }
        }
    })
}
)(bp);
_n.extend(_p);
_n.locale("zh-cn");
const Ep = {
    class: "top-site-setting"
}
  , Sp = {
    style: {
        "font-size": "10px",
        color: "#a0a0a0"
    }
}
  , Ap = be({
    __name: "TopSiteSetting",
    setup(e) {
        const {t} = He()
          , n = Ce()
          , r = to()
          , {topSite: o} = Ye(n)
          , a = nt({
            syncing: !1
        })
          , s = le( () => _n(r.lastUpdateTime).fromNow());
        async function l() {
            a.syncing = !0,
            await dm(1e3),
            await r.syncBrowserTopSites(),
            a.syncing = !1
        }
        return (c, i) => {
            const f = Vt
              , m = Tt
              , d = Wn;
            return F(),
            Q("div", Ep, [C(m, {
                horizontal: ""
            }, {
                lable: P( () => [fe(de(v(t)("topsite.topSiteData")) + " ", 1), te("span", Sp, " (" + de(v(t)("topsite.topSiteDataTip", [s.value])) + ") ", 1)]),
                default: P( () => [C(f, {
                    loading: a.syncing,
                    onClick: l
                }, {
                    default: P( () => [fe(de(v(t)("topsite.sync")), 1)]),
                    _: 1
                }, 8, ["loading"])]),
                _: 1
            }), C(m, {
                lable: v(t)("topsite.iconSize"),
                horizontal: ""
            }, {
                default: P( () => [C(d, {
                    class: "horizontal-item",
                    value: v(o).iconSize,
                    "onUpdate:value": i[0] || (i[0] = h => v(o).iconSize = h),
                    min: 16,
                    max: v(o).boardSize,
                    step: 8,
                    tipFormatter: v(xt)
                }, null, 8, ["value", "max", "tipFormatter"])]),
                _: 1
            }, 8, ["lable"]), C(m, {
                lable: v(t)("topsite.boardSize"),
                horizontal: ""
            }, {
                default: P( () => [C(d, {
                    class: "horizontal-item",
                    value: v(o).boardSize,
                    "onUpdate:value": i[1] || (i[1] = h => v(o).boardSize = h),
                    min: 16,
                    max: 96,
                    step: 8,
                    tipFormatter: v(xt)
                }, null, 8, ["value", "tipFormatter"])]),
                _: 1
            }, 8, ["lable"]), C(m, {
                lable: v(t)("topsite.boardOpacity"),
                horizontal: ""
            }, {
                default: P( () => [C(d, {
                    class: "horizontal-item",
                    value: v(o).boardOpacity,
                    "onUpdate:value": i[2] || (i[2] = h => v(o).boardOpacity = h),
                    step: .01,
                    max: 1,
                    tipFormatter: v(Oi)
                }, null, 8, ["value", "tipFormatter"])]),
                _: 1
            }, 8, ["lable"]), C(m, {
                lable: v(t)("topsite.boardRound"),
                horizontal: ""
            }, {
                default: P( () => [C(d, {
                    class: "horizontal-item",
                    value: v(o).boardRadius,
                    "onUpdate:value": i[3] || (i[3] = h => v(o).boardRadius = h),
                    max: (v(o).boardSize ?? 0) / 2,
                    tipFormatter: v(xt)
                }, null, 8, ["value", "max", "tipFormatter"])]),
                _: 1
            }, 8, ["lable"])])
        }
    }
});
const wp = be({
    __name: "LayoutSetting",
    setup(e) {
        const {t} = He()
          , n = Ce()
          , {topSite: r, layout: o} = Ye(n);
        return (a, s) => {
            const l = Mr
              , c = hn
              , i = Tt
              , f = Wn
              , m = $s
              , d = Bs
              , h = Hr("permis");
            return F(),
            Q(xe, null, [C(i, {
                horizontal: ""
            }, {
                lable: P( () => [te("span", null, de(v(t)("layout.topSiteBar")), 1), v(r).enable ? Ae("", !0) : (F(),
                se(l, {
                    key: 0,
                    title: v(t)("layout.topSiteBarTip"),
                    type: "warn"
                }, null, 8, ["title"]))]),
                default: P( () => [un(C(c, {
                    checked: v(r).enable,
                    "onUpdate:checked": s[0] || (s[0] = g => v(r).enable = g),
                    disabled: !v(qt)
                }, null, 8, ["checked", "disabled"]), [[h, v(eo).topSite]])]),
                _: 1
            }), v(r).enable ? (F(),
            Q(xe, {
                key: 0
            }, [C(i, {
                lable: v(t)("layout.colRow")
            }, {
                default: P( () => [C(f, {
                    value: v(r).col,
                    "onUpdate:value": s[1] || (s[1] = g => v(r).col = g),
                    min: 4,
                    max: 8,
                    marks: {
                        4: "4列",
                        6: "6列",
                        8: "8列"
                    },
                    dots: ""
                }, null, 8, ["value"]), C(f, {
                    value: v(r).row,
                    "onUpdate:value": s[2] || (s[2] = g => v(r).row = g),
                    min: 1,
                    max: 3,
                    marks: {
                        1: "1行",
                        2: "2行",
                        3: "3行"
                    }
                }, null, 8, ["value"])]),
                _: 1
            }, 8, ["lable"]), C(i, {
                lable: v(t)("layout.space")
            }, {
                default: P( () => [C(f, {
                    value: v(r).gap,
                    "onUpdate:value": s[3] || (s[3] = g => v(r).gap = g),
                    min: 0,
                    max: 48,
                    tipFormatter: v(xt)
                }, null, 8, ["value", "tipFormatter"])]),
                _: 1
            }, 8, ["lable"])], 64)) : Ae("", !0), C(i, {
                lable: v(t)("layout.align.text")
            }, {
                default: P( () => [C(d, {
                    value: v(o).align,
                    "onUpdate:value": s[4] || (s[4] = g => v(o).align = g),
                    "button-style": "solid"
                }, {
                    default: P( () => [C(m, {
                        value: v(Wt).searchCenter
                    }, {
                        default: P( () => [fe(de(v(t)("layout.align.searchCenter")), 1)]),
                        _: 1
                    }, 8, ["value"]), C(m, {
                        value: v(Wt).overallCenter
                    }, {
                        default: P( () => [fe(de(v(t)("layout.align.overallCenter")), 1)]),
                        _: 1
                    }, 8, ["value"])]),
                    _: 1
                }, 8, ["value"])]),
                _: 1
            }, 8, ["lable"])], 64)
        }
    }
})
  , xp = {
    class: "other-setting"
}
  , Rp = {
    class: "backup-btn-warp"
}
  , Op = be({
    __name: "OtherSetting",
    setup(e) {
        const {t, availableLocales: n} = He()
          , r = Ce()
          , {lang: o} = Ye(r)
          , a = Ue({
            auto: le( () => t("common.auto")),
            ...Object.fromEntries(n.map(c => [c, t("lang", c, {
                locale: c
            })]))
        });
        async function s(c) {
            try {
                const i = c.file;
                await r.importSetting(i)
            } catch (i) {
                console.log(i)
            }
            location.reload()
        }
        function l() {
            r.exportSetting()
        }
        return (c, i) => {
            const f = jn
              , m = Hn
              , d = Vt
              , h = js;
            return F(),
            Q("div", xp, [C(Tt, {
                lable: v(t)("other.lang"),
                horizontal: ""
            }, {
                default: P( () => [C(m, {
                    value: v(o),
                    "onUpdate:value": i[0] || (i[0] = g => Ot(o) ? o.value = g : null),
                    style: {
                        width: "100px"
                    }
                }, {
                    default: P( () => [(F(!0),
                    Q(xe, null, Ge(a.value, (g, A) => (F(),
                    se(f, {
                        value: A,
                        key: A
                    }, {
                        default: P( () => [fe(de(g), 1)]),
                        _: 2
                    }, 1032, ["value"]))), 128))]),
                    _: 1
                }, 8, ["value"])]),
                _: 1
            }, 8, ["lable"]), C(Tt, {
                lable: v(t)("other.backup.text")
            }, {
                default: P( () => [te("div", Rp, [C(d, {
                    onClick: l
                }, {
                    icon: P( () => [C(v(Ul))]),
                    default: P( () => [fe(" " + de(v(t)("other.backup.export")), 1)]),
                    _: 1
                }), C(h, {
                    accept: "application/json",
                    "show-upload-list": !1,
                    customRequest: s
                }, {
                    default: P( () => [C(d, null, {
                        icon: P( () => [C(v($l))]),
                        default: P( () => [fe(" " + de(v(t)("other.backup.import")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })])]),
                _: 1
            }, 8, ["lable"])])
        }
    }
});
const Tp = {
    class: "about-warp"
}
  , kp = {
    class: "app-name"
}
  , Cp = te("br", null, null, -1)
  , zp = {
    class: "app-version"
}
  , Ip = {
    class: "social"
}
  , Np = ["href"]
  , Pp = {
    class: "copyright"
}
  , Lp = {
    href: "https://github.com/Devifish/light-tab-page/blob/master/LICENSE"
}
  , Dp = te("br", null, null, -1)
  , Fp = be({
    __name: "About",
    setup(e) {
        const {t} = He()
          , n = "light-tab-page"
          , r = "1.5.2"
          , o = le( () => ({
            [t("about.projectHome")]: "https://github.com/Devifish/light-tab-page",
            [t("about.changelog")]: "https://github.com/Devifish/light-tab-page/blob/master/CHANGELOG.md",
            [t("about.feedback")]: "https://github.com/Devifish/light-tab-page/issues"
        }));
        return (a, s) => (F(),
        Q("footer", Tp, [te("p", kp, [fe(de(v(n)) + " ", 1), Cp, te("span", zp, "Version " + de(v(r)), 1)]), te("ul", Ip, [(F(!0),
        Q(xe, null, Ge(o.value, (l, c) => (F(),
        Q("li", null, [te("a", {
            href: l
        }, de(c), 9, Np)]))), 256))]), te("p", Pp, [te("a", Lp, de(v(t)("about.license")), 1), Dp, fe(" Copyright © 2023 Devifish. All rights reserved. ")])]))
    }
});
const Mp = {
    class: "setting-layout"
}
  , Up = {
    class: "setting-menu"
}
  , $p = be({
    __name: "Index",
    setup(e) {
        const {t} = He()
          , n = Ce()
          , r = le( () => [{
            key: "ThemeSetting",
            title: t("theme.setting"),
            icon: Bl,
            component: op
        }, {
            key: "SearchSetting",
            title: t("search.setting"),
            icon: jl,
            component: fp
        }, {
            key: "BackgroundSetting",
            title: t("background.setting"),
            icon: Hl,
            component: gp
        }, {
            key: "LayoutSetting",
            title: t("layout.setting"),
            icon: Wl,
            component: wp
        }, {
            key: "TopSiteSetting",
            title: t("topsite.setting"),
            icon: Ws,
            component: Ap,
            skip: !n.topSite.enable
        }, {
            key: "OtherSetting",
            title: t("other.setting"),
            icon: Vl,
            component: Op
        }, {
            key: "About",
            title: t("about.text"),
            component: Fp
        }].filter(o => !o.skip));
        return (o, a) => {
            const s = Yl;
            return F(),
            Q("div", Mp, [(F(!0),
            Q(xe, null, Ge(r.value, (l, c) => (F(),
            Q(xe, {
                key: l.key
            }, [te("section", Up, [te("h3", null, [l.icon ? (F(),
            se(nn(l.icon), {
                key: 0
            })) : Ae("", !0), fe(" " + de(l.title), 1)]), (F(),
            se(nn(l.component)))]), c < r.value.length - 1 ? (F(),
            se(s, {
                key: 0
            })) : Ae("", !0)], 64))), 128))])
        }
    }
});
const Bp = {
    class: "setting-wrap"
}
  , jp = {
    class: "wallpaper-wrap"
}
  , Hp = be({
    __name: "Index",
    setup(e) {
        const t = su()
          , n = Ce()
          , r = nt({
            searchText: le( () => t.params.text),
            settingVisible: !1,
            align: le( () => n.layout.align),
            enableTopSite: le( () => n.topSite.enable),
            enableWallpaper: le( () => n.background.type !== et.None)
        });
        return (o, a) => {
            const s = Vt
              , l = Us;
            return F(),
            Q(xe, null, [te("main", {
                class: $t(["main-wrap", {
                    "search-center": r.align === v(Wt).searchCenter,
                    "overall-center": r.align === v(Wt).overallCenter
                }])
            }, [C(Id, {
                class: "search",
                value: r.searchText
            }, null, 8, ["value"]), C(gn, {
                name: "fade"
            }, {
                default: P( () => [r.enableTopSite ? (F(),
                se(Hd, {
                    key: 0
                })) : Ae("", !0)]),
                _: 1
            })], 2), te("div", Bp, [C(s, {
                type: "text",
                onClick: a[0] || (a[0] = c => r.settingVisible = !0)
            }, {
                default: P( () => [C(v(Ms), {
                    style: {
                        "font-size": "18px"
                    }
                })]),
                _: 1
            })]), te("div", jp, [(F(),
            se(ql, null, {
                default: P( () => [r.enableWallpaper ? (F(),
                se(Yd, {
                    key: 0
                })) : Ae("", !0)]),
                _: 1
            }))]), C(l, {
                open: r.settingVisible,
                "onUpdate:open": a[1] || (a[1] = c => r.settingVisible = c),
                width: 400,
                closable: !1,
                "destroy-on-close": ""
            }, {
                default: P( () => [C($p)]),
                _: 1
            }, 8, ["open"])], 64)
        }
    }
});
const Wp = {
    class: "home-top-site-layout"
}
  , Vp = {
    class: "home-top-site-grid"
}
  , Yp = ["onClick"]
  , qp = {
    class: "icon-title"
}
  , Gp = be({
    __name: "HomeTopSite",
    setup(e) {
        Bn(a => ({
            "0b9f1684": r.value
        }));
        const t = to()
          , {topSites: n} = Ye(t)
          , r = le( () => Math.ceil(n.value.length / 3));
        function o(a) {
            window.open(a, bt.Blank)
        }
        return (a, s) => {
            const l = Ti;
            return F(),
            Q("div", Wp, [te("ul", Vp, [(F(!0),
            Q(xe, null, Ge(v(n), c => (F(),
            Q("li", {
                key: c.url,
                class: "home-top-site-item",
                onClick: i => o(c.url)
            }, [C(l, {
                class: "home-top-site-icon",
                "text-icon": c.textIcon,
                src: c.icon,
                title: c.title
            }, null, 8, ["text-icon", "src", "title"]), te("div", qp, [te("span", null, de(c.title), 1)])], 8, Yp))), 128))])])
        }
    }
});
const Kp = {
    class: "search-history-layout"
}
  , Jp = {
    class: "history-list"
}
  , Xp = ["onMouseover", "onClick"]
  , Qp = {
    class: "search-text"
}
  , Zp = ["src"]
  , eg = {
    key: 1,
    class: "time-text"
}
  , tg = be({
    __name: "SearchHistory",
    setup(e) {
        const t = En()
          , {history: n, searchEngines: r} = Ye(t)
          , o = Ue(null);
        function a(c) {
            t.openSearchPage({
                engine: c.engineId,
                text: c.searchText,
                target: bt.Blank
            })
        }
        function s(c) {
            t.deleteHistory(c)
        }
        function l() {
            t.loadHistory()
        }
        return Ns(l),
        (c, i) => {
            const f = Vt;
            return F(),
            Q("div", Kp, [te("ul", Jp, [(F(!0),
            Q(xe, null, Ge(v(n), (m, d) => {
                var h;
                return F(),
                Q("li", {
                    class: "history-list-item",
                    key: m.timestamp,
                    onMouseover: g => o.value = d,
                    onMouseleave: i[0] || (i[0] = g => o.value = null),
                    onClick: g => a(m)
                }, [te("span", Qp, [(F(),
                Q("img", {
                    src: (h = v(r)[m.engineId]) == null ? void 0 : h.icon,
                    key: m.engineId
                }, null, 8, Zp)), fe(" " + de(m.searchText), 1)]), o.value === d ? (F(),
                se(f, {
                    key: 0,
                    type: "text",
                    size: "small",
                    onClick: Tn(g => s(d), ["stop"])
                }, {
                    default: P( () => [C(v(Gl))]),
                    _: 2
                }, 1032, ["onClick"])) : (F(),
                Q("span", eg, de(v(_n)(m.timestamp).fromNow()), 1))], 40, Xp)
            }
            ), 128))])])
        }
    }
});
const ng = {
    id: "popup-layout"
}
  , rg = {
    class: "title"
}
  , og = {
    key: 0,
    class: "action-menu"
}
  , sg = {
    key: 0,
    class: "content-warp"
}
  , ag = be({
    __name: "Index",
    setup(e) {
        const {t} = He()
          , n = Ce()
          , {popup: r} = Ye(n)
          , o = le( () => [{
            title: t("popup.topsite"),
            icon: Ws,
            skip: !n.topSite.enable,
            component: Gp
        }, {
            title: t("popup.searchHistory"),
            icon: Jl,
            component: tg,
            actions: [{
                title: t("common.clean"),
                icon: Xl,
                click: s
            }]
        }].filter(l => !l.skip))
          , a = le( () => o.value[r.value.current]);
        function s() {
            En().cleanHistory()
        }
        return (l, c) => {
            const i = jn
              , f = Hn
              , m = Vt
              , d = jr;
            return F(),
            Q("main", ng, [te("div", rg, [C(f, {
                value: v(r).current,
                "onUpdate:value": c[0] || (c[0] = h => v(r).current = h),
                bordered: !1,
                size: "small"
            }, {
                default: P( () => [(F(!0),
                Q(xe, null, Ge(o.value, (h, g) => (F(),
                se(i, {
                    value: g,
                    key: h.title
                }, {
                    default: P( () => [te("span", null, [(F(),
                    se(nn(h.icon))), fe(" " + de(h.title), 1)])]),
                    _: 2
                }, 1032, ["value"]))), 128))]),
                _: 1
            }, 8, ["value"]), a.value ? (F(),
            Q("div", og, [(F(!0),
            Q(xe, null, Ge(a.value.actions, h => (F(),
            se(d, {
                key: h.title,
                title: h.title
            }, {
                default: P( () => [C(m, {
                    type: "text",
                    size: "small",
                    onClick: h.click
                }, {
                    default: P( () => [(F(),
                    se(nn(h.icon)))]),
                    _: 2
                }, 1032, ["onClick"])]),
                _: 2
            }, 1032, ["title"]))), 128))])) : Ae("", !0)]), a.value ? (F(),
            Q("div", sg, [C(gn, {
                name: "fade",
                mode: "out-in"
            }, {
                default: P( () => [(F(),
                se(Kl, null, [(F(),
                se(nn(a.value.component)))], 1024))]),
                _: 1
            })])) : Ae("", !0)])
        }
    }
});
const ig = ru({
    history: yc(),
    routes: [{
        path: "/",
        name: "Home",
        component: Hp
    }, {
        path: "/popup",
        name: "Popup",
        component: ag
    }]
})
  , lg = be({
    __name: "App",
    setup(e) {
        const {locale: t} = He()
          , n = Ce()
          , r = le( () => {
            let o = yo.defaultAlgorithm;
            return n.currentTheme == tt.Dart && (o = yo.darkAlgorithm),
            {
                algorithm: o,
                token: {
                    colorPrimary: n.theme.primaryColor
                }
            }
        }
        );
        return vo( () => {
            const o = n.currentTheme === tt.Dart;
            document.body.parentElement.setAttribute("data-theme", o ? "dark" : "light"),
            document.body.setAttribute("style", `--primary-color: ${n.theme.primaryColor}`)
        }
        ),
        vo( () => {
            t.value = n.currentLang,
            _n.locale(n.currentLang.toLowerCase())
        }
        ),
        (o, a) => {
            const s = Ql("router-view")
              , l = Zl;
            return F(),
            se(l, {
                theme: r.value
            }, {
                default: P( () => [C(s)]),
                _: 1
            }, 8, ["theme"])
        }
    }
})
  , cg = {
    en: {
        lang: e => {
            const {normalize: t} = e;
            return t(["English"])
        }
        ,
        common: {
            auto: e => {
                const {normalize: t} = e;
                return t(["Auto"])
            }
            ,
            clean: e => {
                const {normalize: t} = e;
                return t(["Clean"])
            }
            ,
            experimen: e => {
                const {normalize: t} = e;
                return t(["Experimen"])
            }
        },
        home: {
            search: e => {
                const {normalize: t} = e;
                return t(["Search"])
            }
        },
        theme: {
            setting: e => {
                const {normalize: t} = e;
                return t(["Theme Setting"])
            }
            ,
            mode: e => {
                const {normalize: t} = e;
                return t(["Theme mode"])
            }
            ,
            primaryColor: e => {
                const {normalize: t} = e;
                return t(["Primary color"])
            }
            ,
            wallpaperPalette: e => {
                const {normalize: t} = e;
                return t(["Using the wallpaper palette"])
            }
        },
        search: {
            setting: e => {
                const {normalize: t} = e;
                return t(["Search Setting"])
            }
            ,
            engine: e => {
                const {normalize: t} = e;
                return t(["Search engine"])
            }
            ,
            suggestApi: e => {
                const {normalize: t} = e;
                return t(["Suggest api"])
            }
            ,
            suggestApiTip: e => {
                const {normalize: t} = e;
                return t(["Search suggestions need to request the website interface, opening requires authorization"])
            }
            ,
            searchRound: e => {
                const {normalize: t} = e;
                return t(["Search box rounded corners"])
            }
            ,
            newTabOpen: e => {
                const {normalize: t} = e;
                return t(["Open search results in a new tab"])
            }
            ,
            showEngineIcon: e => {
                const {normalize: t} = e;
                return t(["Show search Microsoft icon above the search box"])
            }
            ,
            showEngineSelet: e => {
                const {normalize: t} = e;
                return t(["Show search engine drop-down in front of the search box"])
            }
        },
        background: {
            setting: e => {
                const {normalize: t} = e;
                return t(["Background Setting"])
            }
            ,
            wallpaper: {
                setting: e => {
                    const {normalize: t} = e;
                    return t(["Wallpaper setting"])
                }
                ,
                none: e => {
                    const {normalize: t} = e;
                    return t(["None"])
                }
                ,
                local: e => {
                    const {normalize: t} = e;
                    return t(["Local"])
                }
                ,
                bing: e => {
                    const {normalize: t} = e;
                    return t(["Bing wallpaper"])
                }
                ,
                upload: e => {
                    const {normalize: t} = e;
                    return t(["Upload wallpaper"])
                }
            },
            blur: e => {
                const {normalize: t} = e;
                return t(["Blur"])
            }
            ,
            maskOpacity: e => {
                const {normalize: t} = e;
                return t(["Mask opacity"])
            }
            ,
            wallpaperDark: e => {
                const {normalize: t} = e;
                return t(["Make the wallpaper darker in dark mode"])
            }
        },
        layout: {
            setting: e => {
                const {normalize: t} = e;
                return t(["Layout Setting"])
            }
            ,
            topSiteBar: e => {
                const {normalize: t} = e;
                return t(["Topsite Bar"])
            }
            ,
            topSiteBarTip: e => {
                const {normalize: t} = e;
                return t(["Topsite Bar data comes from the most recent browsing, opening requires authorization"])
            }
            ,
            colRow: e => {
                const {normalize: t} = e;
                return t(["Col/Row"])
            }
            ,
            space: e => {
                const {normalize: t} = e;
                return t(["Space"])
            }
            ,
            align: {
                text: e => {
                    const {normalize: t} = e;
                    return t(["Align"])
                }
                ,
                searchCenter: e => {
                    const {normalize: t} = e;
                    return t(["Search only center (Default)"])
                }
                ,
                overallCenter: e => {
                    const {normalize: t} = e;
                    return t(["Overall center"])
                }
            }
        },
        topsite: {
            setting: e => {
                const {normalize: t} = e;
                return t(["Topsite Setting"])
            }
            ,
            topSiteData: e => {
                const {normalize: t} = e;
                return t(["Topsite data"])
            }
            ,
            topSiteDataTip: e => {
                const {normalize: t, interpolate: n, list: r} = e;
                return t(["last sync: ", n(r(0))])
            }
            ,
            sync: e => {
                const {normalize: t} = e;
                return t(["Sync"])
            }
            ,
            iconSize: e => {
                const {normalize: t} = e;
                return t(["Icon size"])
            }
            ,
            boardSize: e => {
                const {normalize: t} = e;
                return t(["Board size"])
            }
            ,
            boardColor: e => {
                const {normalize: t} = e;
                return t(["Board color"])
            }
            ,
            boardOpacity: e => {
                const {normalize: t} = e;
                return t(["Board opacity"])
            }
            ,
            boardRound: e => {
                const {normalize: t} = e;
                return t(["Board round"])
            }
            ,
            add: e => {
                const {normalize: t} = e;
                return t(["Add topsite"])
            }
        },
        other: {
            setting: e => {
                const {normalize: t} = e;
                return t(["Other Setting"])
            }
            ,
            lang: e => {
                const {normalize: t} = e;
                return t(["Language"])
            }
            ,
            searchPlus: e => {
                const {normalize: t} = e;
                return t(["Search enhancement"])
            }
            ,
            backup: {
                text: e => {
                    const {normalize: t} = e;
                    return t(["Backup setting"])
                }
                ,
                export: e => {
                    const {normalize: t} = e;
                    return t(["Export setting"])
                }
                ,
                import: e => {
                    const {normalize: t} = e;
                    return t(["Import setting"])
                }
            }
        },
        about: {
            text: e => {
                const {normalize: t} = e;
                return t(["About"])
            }
            ,
            projectHome: e => {
                const {normalize: t} = e;
                return t(["Project Home"])
            }
            ,
            changelog: e => {
                const {normalize: t} = e;
                return t(["Changelog"])
            }
            ,
            feedback: e => {
                const {normalize: t} = e;
                return t(["Feedback"])
            }
            ,
            license: e => {
                const {normalize: t} = e;
                return t(["Released under the MIT License"])
            }
        },
        popup: {
            topsite: e => {
                const {normalize: t} = e;
                return t(["Topsite"])
            }
            ,
            searchHistory: e => {
                const {normalize: t} = e;
                return t(["SearchHistory"])
            }
        }
    },
    "zh-CN": {
        lang: e => {
            const {normalize: t} = e;
            return t(["简体中文"])
        }
        ,
        common: {
            auto: e => {
                const {normalize: t} = e;
                return t(["自动"])
            }
            ,
            clean: e => {
                const {normalize: t} = e;
                return t(["清空"])
            }
            ,
            experimen: e => {
                const {normalize: t} = e;
                return t(["试验"])
            }
        },
        home: {
            search: e => {
                const {normalize: t} = e;
                return t(["搜索"])
            }
        },
        theme: {
            setting: e => {
                const {normalize: t} = e;
                return t(["主题设置"])
            }
            ,
            mode: e => {
                const {normalize: t} = e;
                return t(["主题模式"])
            }
            ,
            primaryColor: e => {
                const {normalize: t} = e;
                return t(["基础颜色"])
            }
            ,
            wallpaperPalette: e => {
                const {normalize: t} = e;
                return t(["使用壁纸调色板"])
            }
        },
        search: {
            setting: e => {
                const {normalize: t} = e;
                return t(["搜索设置"])
            }
            ,
            engine: e => {
                const {normalize: t} = e;
                return t(["搜索引擎"])
            }
            ,
            suggestApi: e => {
                const {normalize: t} = e;
                return t(["搜索建议接口"])
            }
            ,
            suggestApiTip: e => {
                const {normalize: t} = e;
                return t(["搜索建议需请求网站接口，开启需要授权"])
            }
            ,
            searchRound: e => {
                const {normalize: t} = e;
                return t(["搜索框圆角"])
            }
            ,
            newTabOpen: e => {
                const {normalize: t} = e;
                return t(["在新标签页中打开搜索结果"])
            }
            ,
            showEngineIcon: e => {
                const {normalize: t} = e;
                return t(["在搜索框上方显示Microsoft图标"])
            }
            ,
            showEngineSelet: e => {
                const {normalize: t} = e;
                return t(["在搜索框前添加搜索引擎下拉列表"])
            }
        },
        background: {
            setting: e => {
                const {normalize: t} = e;
                return t(["背景设置"])
            }
            ,
            wallpaper: {
                setting: e => {
                    const {normalize: t} = e;
                    return t(["壁纸设置"])
                }
                ,
                none: e => {
                    const {normalize: t} = e;
                    return t(["无"])
                }
                ,
                local: e => {
                    const {normalize: t} = e;
                    return t(["本地图片"])
                }
                ,
                bing: e => {
                    const {normalize: t} = e;
                    return t(["Bing每日壁纸"])
                }
                ,
                upload: e => {
                    const {normalize: t} = e;
                    return t(["上传壁纸"])
                }
            },
            blur: e => {
                const {normalize: t} = e;
                return t(["模糊强度"])
            }
            ,
            maskOpacity: e => {
                const {normalize: t} = e;
                return t(["遮罩不透明度"])
            }
            ,
            wallpaperDark: e => {
                const {normalize: t} = e;
                return t(["在深色模式下使壁纸更暗"])
            }
        },
        layout: {
            setting: e => {
                const {normalize: t} = e;
                return t(["布局设置"])
            }
            ,
            topSiteBar: e => {
                const {normalize: t} = e;
                return t(["导航栏"])
            }
            ,
            topSiteBarTip: e => {
                const {normalize: t} = e;
                return t(["导航栏数据来源于最近浏览，开启需要授权"])
            }
            ,
            colRow: e => {
                const {normalize: t} = e;
                return t(["行/列数"])
            }
            ,
            space: e => {
                const {normalize: t} = e;
                return t(["间距"])
            }
            ,
            align: {
                text: e => {
                    const {normalize: t} = e;
                    return t(["对齐"])
                }
                ,
                searchCenter: e => {
                    const {normalize: t} = e;
                    return t(["仅搜索居中 (默认)"])
                }
                ,
                overallCenter: e => {
                    const {normalize: t} = e;
                    return t(["整体居中"])
                }
            }
        },
        topsite: {
            setting: e => {
                const {normalize: t} = e;
                return t(["导航栏设置"])
            }
            ,
            topSiteData: e => {
                const {normalize: t} = e;
                return t(["最近浏览数据"])
            }
            ,
            topSiteDataTip: e => {
                const {normalize: t, interpolate: n, list: r} = e;
                return t(["最近同步: ", n(r(0))])
            }
            ,
            sync: e => {
                const {normalize: t} = e;
                return t(["同步"])
            }
            ,
            iconSize: e => {
                const {normalize: t} = e;
                return t(["图标大小"])
            }
            ,
            boardSize: e => {
                const {normalize: t} = e;
                return t(["底板大小"])
            }
            ,
            boardColor: e => {
                const {normalize: t} = e;
                return t(["底板颜色"])
            }
            ,
            boardOpacity: e => {
                const {normalize: t} = e;
                return t(["底板不透明度"])
            }
            ,
            boardRound: e => {
                const {normalize: t} = e;
                return t(["底板圆角"])
            }
            ,
            add: e => {
                const {normalize: t} = e;
                return t(["添加导航"])
            }
        },
        other: {
            setting: e => {
                const {normalize: t} = e;
                return t(["其他设置"])
            }
            ,
            lang: e => {
                const {normalize: t} = e;
                return t(["语言"])
            }
            ,
            searchPlus: e => {
                const {normalize: t} = e;
                return t(["搜索增强"])
            }
            ,
            backup: {
                text: e => {
                    const {normalize: t} = e;
                    return t(["备份配置"])
                }
                ,
                export: e => {
                    const {normalize: t} = e;
                    return t(["导出配置"])
                }
                ,
                import: e => {
                    const {normalize: t} = e;
                    return t(["导入配置"])
                }
            }
        },
        about: {
            text: e => {
                const {normalize: t} = e;
                return t(["关于"])
            }
            ,
            projectHome: e => {
                const {normalize: t} = e;
                return t(["项目地址"])
            }
            ,
            changelog: e => {
                const {normalize: t} = e;
                return t(["更新日志"])
            }
            ,
            feedback: e => {
                const {normalize: t} = e;
                return t(["问题反馈"])
            }
            ,
            license: e => {
                const {normalize: t} = e;
                return t(["遵循 MIT 开源协议"])
            }
        },
        popup: {
            topsite: e => {
                const {normalize: t} = e;
                return t(["首页导航"])
            }
            ,
            searchHistory: e => {
                const {normalize: t} = e;
                return t(["搜索历史"])
            }
        }
    },
    "zh-TW": {
        lang: e => {
            const {normalize: t} = e;
            return t(["繁體中文"])
        }
        ,
        common: {
            auto: e => {
                const {normalize: t} = e;
                return t(["自動"])
            }
            ,
            clean: e => {
                const {normalize: t} = e;
                return t(["清空"])
            }
            ,
            experimen: e => {
                const {normalize: t} = e;
                return t(["试验"])
            }
        },
        home: {
            search: e => {
                const {normalize: t} = e;
                return t(["搜索"])
            }
        },
        theme: {
            setting: e => {
                const {normalize: t} = e;
                return t(["主題設置"])
            }
            ,
            mode: e => {
                const {normalize: t} = e;
                return t(["主題模式"])
            }
            ,
            primaryColor: e => {
                const {normalize: t} = e;
                return t(["基础颜色"])
            }
            ,
            wallpaperPalette: e => {
                const {normalize: t} = e;
                return t(["使用壁紙调色板"])
            }
        },
        search: {
            setting: e => {
                const {normalize: t} = e;
                return t(["搜索設置"])
            }
            ,
            engine: e => {
                const {normalize: t} = e;
                return t(["搜索引擎"])
            }
            ,
            suggestApi: e => {
                const {normalize: t} = e;
                return t(["搜索建議接口"])
            }
            ,
            suggestApiTip: e => {
                const {normalize: t} = e;
                return t(["搜索建議需請求網站接口，開啟需要授權"])
            }
            ,
            searchRound: e => {
                const {normalize: t} = e;
                return t(["搜索框圓角"])
            }
            ,
            newTabOpen: e => {
                const {normalize: t} = e;
                return t(["在新標簽頁中打開搜索結果"])
            }
            ,
            showEngineIcon: e => {
                const {normalize: t} = e;
                return t(["在搜索框上方顯示Microsoft圖標"])
            }
            ,
            showEngineSelet: e => {
                const {normalize: t} = e;
                return t(["在搜索框前添加搜索引擎下拉列表"])
            }
        },
        background: {
            setting: e => {
                const {normalize: t} = e;
                return t(["背景設置"])
            }
            ,
            wallpaper: {
                setting: e => {
                    const {normalize: t} = e;
                    return t(["壁紙設置"])
                }
                ,
                none: e => {
                    const {normalize: t} = e;
                    return t(["無"])
                }
                ,
                local: e => {
                    const {normalize: t} = e;
                    return t(["本地圖片"])
                }
                ,
                bing: e => {
                    const {normalize: t} = e;
                    return t(["Bing每日壁紙"])
                }
                ,
                upload: e => {
                    const {normalize: t} = e;
                    return t(["上傳壁紙"])
                }
            },
            blur: e => {
                const {normalize: t} = e;
                return t(["模糊強度"])
            }
            ,
            maskOpacity: e => {
                const {normalize: t} = e;
                return t(["遮罩不透明度"])
            }
            ,
            wallpaperDark: e => {
                const {normalize: t} = e;
                return t(["在深色模式下使壁紙更暗"])
            }
        },
        layout: {
            setting: e => {
                const {normalize: t} = e;
                return t(["布局設置"])
            }
            ,
            topSiteBar: e => {
                const {normalize: t} = e;
                return t(["導航欄"])
            }
            ,
            topSiteBarTip: e => {
                const {normalize: t} = e;
                return t(["導航欄數據來源於最近瀏覽，開啟需要授權"])
            }
            ,
            colRow: e => {
                const {normalize: t} = e;
                return t(["行/列數"])
            }
            ,
            space: e => {
                const {normalize: t} = e;
                return t(["間距"])
            }
            ,
            align: {
                text: e => {
                    const {normalize: t} = e;
                    return t(["對齊"])
                }
                ,
                searchCenter: e => {
                    const {normalize: t} = e;
                    return t(["僅搜索居中 (默認)"])
                }
                ,
                overallCenter: e => {
                    const {normalize: t} = e;
                    return t(["整體居中"])
                }
            }
        },
        topsite: {
            setting: e => {
                const {normalize: t} = e;
                return t(["導航欄設置"])
            }
            ,
            topSiteData: e => {
                const {normalize: t} = e;
                return t(["最近瀏覽數據"])
            }
            ,
            topSiteDataTip: e => {
                const {normalize: t, interpolate: n, list: r} = e;
                return t(["最近同步: ", n(r(0))])
            }
            ,
            sync: e => {
                const {normalize: t} = e;
                return t(["同步"])
            }
            ,
            iconSize: e => {
                const {normalize: t} = e;
                return t(["圖標大小"])
            }
            ,
            boardSize: e => {
                const {normalize: t} = e;
                return t(["底板大小"])
            }
            ,
            boardColor: e => {
                const {normalize: t} = e;
                return t(["底板顏色"])
            }
            ,
            boardOpacity: e => {
                const {normalize: t} = e;
                return t(["底板不透明度"])
            }
            ,
            boardRound: e => {
                const {normalize: t} = e;
                return t(["底板圓角"])
            }
            ,
            add: e => {
                const {normalize: t} = e;
                return t(["添加導航"])
            }
        },
        other: {
            setting: e => {
                const {normalize: t} = e;
                return t(["其他設置"])
            }
            ,
            lang: e => {
                const {normalize: t} = e;
                return t(["語言"])
            }
            ,
            searchPlus: e => {
                const {normalize: t} = e;
                return t(["搜索增强"])
            }
            ,
            backup: {
                text: e => {
                    const {normalize: t} = e;
                    return t(["備份設置"])
                }
                ,
                export: e => {
                    const {normalize: t} = e;
                    return t(["導出設置"])
                }
                ,
                import: e => {
                    const {normalize: t} = e;
                    return t(["導入設置"])
                }
            }
        },
        about: {
            text: e => {
                const {normalize: t} = e;
                return t(["關於"])
            }
            ,
            projectHome: e => {
                const {normalize: t} = e;
                return t(["項目地址"])
            }
            ,
            changelog: e => {
                const {normalize: t} = e;
                return t(["更新日誌"])
            }
            ,
            feedback: e => {
                const {normalize: t} = e;
                return t(["問題反饋"])
            }
            ,
            license: e => {
                const {normalize: t} = e;
                return t(["遵循 MIT 開源協議"])
            }
        },
        popup: {
            topsite: e => {
                const {normalize: t} = e;
                return t(["首頁導航"])
            }
            ,
            searchHistory: e => {
                const {normalize: t} = e;
                return t(["搜索歷史"])
            }
        }
    }
}
  , ug = _d({
    legacy: !1,
    locale: navigator.language,
    fallbackLocale: "zh-CN",
    missingWarn: !1,
    fallbackWarn: !1,
    messages: cg
});
const Sn = ec(lg);
Sn.use(ig);
Sn.use(mm);
Sn.use(ug);
Sn.use(cm);
Sn.mount(document.body);
