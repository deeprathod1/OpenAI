import {ac as Rt, r as It, g as jt, c as Dt} from "./entry.d1b74521.js";
const Co = Rt({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, {slots: t, attrs: n}) {
        const r = It(!1);
        return jt(()=>{
            r.value = !0
        }
        ),
        i=>{
            var l;
            if (r.value)
                return (l = t.default) == null ? void 0 : l.call(t);
            const s = t.fallback || t.placeholder;
            if (s)
                return s();
            const o = i.fallback || i.placeholder || ""
              , a = i.fallbackTag || i.placeholderTag || "span";
            return Dt(a, n, o)
        }
    }
});
var ae = {}
  , Ut = {
    get exports() {
        return ae
    },
    set exports(e) {
        ae = e
    }
}
  , ce = {}
  , Ft = {
    get exports() {
        return ce
    },
    set exports(e) {
        ce = e
    }
}
  , H = 1e3
  , V = H * 60
  , Z = V * 60
  , G = Z * 24
  , Bt = G * 365.25
  , zt = function(e, t) {
    t = t || {};
    var n = typeof e;
    if (n === "string" && e.length > 0)
        return Yt(e);
    if (n === "number" && isNaN(e) === !1)
        return t.long ? Ht(e) : Wt(e);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
};
function Yt(e) {
    if (e = String(e),
    !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
            var n = parseFloat(t[1])
              , r = (t[2] || "ms").toLowerCase();
            switch (r) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
                return n * Bt;
            case "days":
            case "day":
            case "d":
                return n * G;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
                return n * Z;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
                return n * V;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
                return n * H;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
                return n;
            default:
                return
            }
        }
    }
}
function Wt(e) {
    return e >= G ? Math.round(e / G) + "d" : e >= Z ? Math.round(e / Z) + "h" : e >= V ? Math.round(e / V) + "m" : e >= H ? Math.round(e / H) + "s" : e + "ms"
}
function Ht(e) {
    return re(e, G, "day") || re(e, Z, "hour") || re(e, V, "minute") || re(e, H, "second") || e + " ms"
}
function re(e, t, n) {
    if (!(e < t))
        return e < t * 1.5 ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
}
(function(e, t) {
    t = e.exports = i.debug = i.default = i,
    t.coerce = l,
    t.disable = o,
    t.enable = s,
    t.enabled = a,
    t.humanize = zt,
    t.names = [],
    t.skips = [],
    t.formatters = {};
    var n;
    function r(c) {
        var u = 0, f;
        for (f in c)
            u = (u << 5) - u + c.charCodeAt(f),
            u |= 0;
        return t.colors[Math.abs(u) % t.colors.length]
    }
    function i(c) {
        function u() {
            if (u.enabled) {
                var f = u
                  , d = +new Date
                  , p = d - (n || d);
                f.diff = p,
                f.prev = n,
                f.curr = d,
                n = d;
                for (var h = new Array(arguments.length), b = 0; b < h.length; b++)
                    h[b] = arguments[b];
                h[0] = t.coerce(h[0]),
                typeof h[0] != "string" && h.unshift("%O");
                var C = 0;
                h[0] = h[0].replace(/%([a-zA-Z%])/g, function(k, q) {
                    if (k === "%%")
                        return k;
                    C++;
                    var U = t.formatters[q];
                    if (typeof U == "function") {
                        var R = h[C];
                        k = U.call(f, R),
                        h.splice(C, 1),
                        C--
                    }
                    return k
                }),
                t.formatArgs.call(f, h);
                var x = u.log || t.log || console.log.bind(console);
                x.apply(f, h)
            }
        }
        return u.namespace = c,
        u.enabled = t.enabled(c),
        u.useColors = t.useColors(),
        u.color = r(c),
        typeof t.init == "function" && t.init(u),
        u
    }
    function s(c) {
        t.save(c),
        t.names = [],
        t.skips = [];
        for (var u = (typeof c == "string" ? c : "").split(/[\s,]+/), f = u.length, d = 0; d < f; d++)
            u[d] && (c = u[d].replace(/\*/g, ".*?"),
            c[0] === "-" ? t.skips.push(new RegExp("^" + c.substr(1) + "$")) : t.names.push(new RegExp("^" + c + "$")))
    }
    function o() {
        t.enable("")
    }
    function a(c) {
        var u, f;
        for (u = 0,
        f = t.skips.length; u < f; u++)
            if (t.skips[u].test(c))
                return !1;
        for (u = 0,
        f = t.names.length; u < f; u++)
            if (t.names[u].test(c))
                return !0;
        return !1
    }
    function l(c) {
        return c instanceof Error ? c.stack || c.message : c
    }
}
)(Ft, ce);
(function(e, t) {
    t = e.exports = ce,
    t.log = i,
    t.formatArgs = r,
    t.save = s,
    t.load = o,
    t.useColors = n,
    t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : a(),
    t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
    function n() {
        return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    t.formatters.j = function(l) {
        try {
            return JSON.stringify(l)
        } catch (c) {
            return "[UnexpectedJSONParseError]: " + c.message
        }
    }
    ;
    function r(l) {
        var c = this.useColors;
        if (l[0] = (c ? "%c" : "") + this.namespace + (c ? " %c" : " ") + l[0] + (c ? "%c " : " ") + "+" + t.humanize(this.diff),
        !!c) {
            var u = "color: " + this.color;
            l.splice(1, 0, u, "color: inherit");
            var f = 0
              , d = 0;
            l[0].replace(/%[a-zA-Z%]/g, function(p) {
                p !== "%%" && (f++,
                p === "%c" && (d = f))
            }),
            l.splice(d, 0, u)
        }
    }
    function i() {
        return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }
    function s(l) {
        try {
            l == null ? t.storage.removeItem("debug") : t.storage.debug = l
        } catch {}
    }
    function o() {
        var l;
        try {
            l = t.storage.debug
        } catch {}
        return !l && typeof process < "u" && "env"in process && (l = {}.DEBUG),
        l
    }
    t.enable(o());
    function a() {
        try {
            return window.localStorage
        } catch {}
    }
}
)(Ut, ae);
var Be = ae("jsonp")
  , No = Gt
  , Vt = 0;
function Zt() {}
function Gt(e, t, n) {
    typeof t == "function" && (n = t,
    t = {}),
    t || (t = {});
    var r = t.prefix || "__jp", i = t.name || r + Vt++, s = t.param || "callback", o = t.timeout != null ? t.timeout : 6e4, a = encodeURIComponent, l = document.getElementsByTagName("script")[0] || document.head, c, u;
    o && (u = setTimeout(function() {
        f(),
        n && n(new Error("Timeout"))
    }, o));
    function f() {
        c.parentNode && c.parentNode.removeChild(c),
        window[i] = Zt,
        u && clearTimeout(u)
    }
    function d() {
        window[i] && f()
    }
    return window[i] = function(p) {
        Be("jsonp got", p),
        f(),
        n && n(null, p)
    }
    ,
    e += (~e.indexOf("?") ? "&" : "?") + s + "=" + a(i),
    e = e.replace("?&", "?"),
    Be('jsonp req "%s"', e),
    c = document.createElement("script"),
    c.src = e,
    l.parentNode.insertBefore(c, l),
    d
}
function le(e, t, n) {
    n = n || {};
    var r = e.ownerDocument
      , i = r.defaultView.CustomEvent;
    typeof i == "function" ? i = new i(t,{
        detail: n
    }) : (i = r.createEvent("Event"),
    i.initEvent(t, !1, !1),
    i.detail = n),
    e.dispatchEvent(i)
}
function lt(e) {
    return Array.isArray(e) || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
}
function ut(e) {
    return e === (e | 0) + ""
}
function N(e) {
    const t = document.createElement("span");
    return t.className = "observablehq--cellname",
    t.textContent = `${e} = `,
    t
}
const Qt = Symbol.prototype.toString;
function D(e) {
    return Qt.call(e)
}
const {getOwnPropertySymbols: Jt, prototype: {hasOwnProperty: Kt}} = Object
  , {toStringTag: Xt} = Symbol
  , ft = {}
  , K = Jt;
function he(e, t) {
    return Kt.call(e, t)
}
function xe(e) {
    return e[Xt] || e.constructor && e.constructor.name || "Object"
}
function g(e, t) {
    try {
        const n = e[t];
        return n && n.constructor,
        n
    } catch {
        return ft
    }
}
const en = [{
    symbol: "@@__IMMUTABLE_INDEXED__@@",
    name: "Indexed",
    modifier: !0
}, {
    symbol: "@@__IMMUTABLE_KEYED__@@",
    name: "Keyed",
    modifier: !0
}, {
    symbol: "@@__IMMUTABLE_LIST__@@",
    name: "List",
    arrayish: !0
}, {
    symbol: "@@__IMMUTABLE_MAP__@@",
    name: "Map"
}, {
    symbol: "@@__IMMUTABLE_ORDERED__@@",
    name: "Ordered",
    modifier: !0,
    prefix: !0
}, {
    symbol: "@@__IMMUTABLE_RECORD__@@",
    name: "Record"
}, {
    symbol: "@@__IMMUTABLE_SET__@@",
    name: "Set",
    arrayish: !0,
    setish: !0
}, {
    symbol: "@@__IMMUTABLE_STACK__@@",
    name: "Stack",
    arrayish: !0
}];
function dt(e) {
    try {
        let t = en.filter(({symbol: o})=>e[o] === !0);
        if (!t.length)
            return;
        const n = t.find(o=>!o.modifier)
          , r = n.name === "Map" && t.find(o=>o.modifier && o.prefix)
          , i = t.some(o=>o.arrayish)
          , s = t.some(o=>o.setish);
        return {
            name: `${r ? r.name : ""}${n.name}`,
            symbols: t,
            arrayish: i && !s,
            setish: s
        }
    } catch {
        return null
    }
}
const {getPrototypeOf: Oe, getOwnPropertyDescriptors: tn} = Object
  , pt = Oe({});
function ht(e, t, n, r) {
    let i = lt(e), s, o, a, l;
    e instanceof Map ? e instanceof e.constructor ? (s = `Map(${e.size})`,
    o = nn) : (s = "Map()",
    o = Y) : e instanceof Set ? e instanceof e.constructor ? (s = `Set(${e.size})`,
    o = rn) : (s = "Set()",
    o = Y) : i ? (s = `${e.constructor.name}(${e.length})`,
    o = sn) : (l = dt(e)) ? (s = `Immutable.${l.name}${l.name === "Record" ? "" : `(${e.size})`}`,
    i = l.arrayish,
    o = l.arrayish ? an : l.setish ? on : ln) : r ? (s = xe(e),
    o = cn) : (s = xe(e),
    o = Y);
    const c = document.createElement("span");
    c.className = "observablehq--expanded",
    n && c.appendChild(N(n));
    const u = c.appendChild(document.createElement("a"));
    u.innerHTML = `<svg width=8 height=8 class='observablehq--caret'>
    <path d='M4 7L0 1h8z' fill='currentColor' />
  </svg>`,
    u.appendChild(document.createTextNode(`${s}${i ? " [" : " {"}`)),
    u.addEventListener("mouseup", function(f) {
        f.stopPropagation(),
        fe(c, Le(e, null, n, r))
    }),
    o = o(e);
    for (let f = 0; !(a = o.next()).done && f < 20; ++f)
        c.appendChild(a.value);
    if (!a.done) {
        const f = c.appendChild(document.createElement("a"));
        f.className = "observablehq--field",
        f.style.display = "block",
        f.appendChild(document.createTextNode("  … more")),
        f.addEventListener("mouseup", function(d) {
            d.stopPropagation(),
            c.insertBefore(a.value, c.lastChild.previousSibling);
            for (let p = 0; !(a = o.next()).done && p < 19; ++p)
                c.insertBefore(a.value, c.lastChild.previousSibling);
            a.done && c.removeChild(c.lastChild.previousSibling),
            le(c, "load")
        })
    }
    return c.appendChild(document.createTextNode(i ? "]" : "}")),
    c
}
function *nn(e) {
    for (const [t,n] of e)
        yield un(t, n);
    yield*Y(e)
}
function *rn(e) {
    for (const t of e)
        yield bt(t);
    yield*Y(e)
}
function *on(e) {
    for (const t of e)
        yield bt(t)
}
function *sn(e) {
    for (let t = 0, n = e.length; t < n; ++t)
        t in e && (yield A(t, g(e, t), "observablehq--index"));
    for (const t in e)
        !ut(t) && he(e, t) && (yield A(t, g(e, t), "observablehq--key"));
    for (const t of K(e))
        yield A(D(t), g(e, t), "observablehq--symbol")
}
function *an(e) {
    let t = 0;
    for (const n = e.size; t < n; ++t)
        yield A(t, e.get(t), !0)
}
function *cn(e) {
    for (const n in tn(e))
        yield A(n, g(e, n), "observablehq--key");
    for (const n of K(e))
        yield A(D(n), g(e, n), "observablehq--symbol");
    const t = Oe(e);
    t && t !== pt && (yield mt(t))
}
function *Y(e) {
    for (const n in e)
        he(e, n) && (yield A(n, g(e, n), "observablehq--key"));
    for (const n of K(e))
        yield A(D(n), g(e, n), "observablehq--symbol");
    const t = Oe(e);
    t && t !== pt && (yield mt(t))
}
function *ln(e) {
    for (const [t,n] of e)
        yield A(t, n, "observablehq--key")
}
function mt(e) {
    const t = document.createElement("div")
      , n = t.appendChild(document.createElement("span"));
    return t.className = "observablehq--field",
    n.className = "observablehq--prototype-key",
    n.textContent = "  <prototype>",
    t.appendChild(document.createTextNode(": ")),
    t.appendChild(w(e, void 0, void 0, void 0, !0)),
    t
}
function A(e, t, n) {
    const r = document.createElement("div")
      , i = r.appendChild(document.createElement("span"));
    return r.className = "observablehq--field",
    i.className = n,
    i.textContent = `  ${e}`,
    r.appendChild(document.createTextNode(": ")),
    r.appendChild(w(t)),
    r
}
function un(e, t) {
    const n = document.createElement("div");
    return n.className = "observablehq--field",
    n.appendChild(document.createTextNode("  ")),
    n.appendChild(w(e)),
    n.appendChild(document.createTextNode(" => ")),
    n.appendChild(w(t)),
    n
}
function bt(e) {
    const t = document.createElement("div");
    return t.className = "observablehq--field",
    t.appendChild(document.createTextNode("  ")),
    t.appendChild(w(e)),
    t
}
function ze(e) {
    const t = window.getSelection();
    return t.type === "Range" && (t.containsNode(e, !0) || t.anchorNode.isSelfOrDescendant(e) || t.focusNode.isSelfOrDescendant(e))
}
function Le(e, t, n, r) {
    let i = lt(e), s, o, a, l;
    if (e instanceof Map ? e instanceof e.constructor ? (s = `Map(${e.size})`,
    o = fn) : (s = "Map()",
    o = W) : e instanceof Set ? e instanceof e.constructor ? (s = `Set(${e.size})`,
    o = dn) : (s = "Set()",
    o = W) : i ? (s = `${e.constructor.name}(${e.length})`,
    o = mn) : (l = dt(e)) ? (s = `Immutable.${l.name}${l.name === "Record" ? "" : `(${e.size})`}`,
    i = l.arrayish,
    o = l.arrayish ? hn : l.setish ? pn : bn) : (s = xe(e),
    o = W),
    t) {
        const f = document.createElement("span");
        return f.className = "observablehq--shallow",
        n && f.appendChild(N(n)),
        f.appendChild(document.createTextNode(s)),
        f.addEventListener("mouseup", function(d) {
            ze(f) || (d.stopPropagation(),
            fe(f, Le(e)))
        }),
        f
    }
    const c = document.createElement("span");
    c.className = "observablehq--collapsed",
    n && c.appendChild(N(n));
    const u = c.appendChild(document.createElement("a"));
    u.innerHTML = `<svg width=8 height=8 class='observablehq--caret'>
    <path d='M7 4L1 8V0z' fill='currentColor' />
  </svg>`,
    u.appendChild(document.createTextNode(`${s}${i ? " [" : " {"}`)),
    c.addEventListener("mouseup", function(f) {
        ze(c) || (f.stopPropagation(),
        fe(c, ht(e, null, n, r)))
    }, !0),
    o = o(e);
    for (let f = 0; !(a = o.next()).done && f < 20; ++f)
        f > 0 && c.appendChild(document.createTextNode(", ")),
        c.appendChild(a.value);
    return a.done || c.appendChild(document.createTextNode(", …")),
    c.appendChild(document.createTextNode(i ? "]" : "}")),
    c
}
function *fn(e) {
    for (const [t,n] of e)
        yield _n(t, n);
    yield*W(e)
}
function *dn(e) {
    for (const t of e)
        yield w(t, !0);
    yield*W(e)
}
function *pn(e) {
    for (const t of e)
        yield w(t, !0)
}
function *hn(e) {
    let t = -1
      , n = 0;
    for (const r = e.size; n < r; ++n)
        n > t + 1 && (yield ue(n - t - 1)),
        yield w(e.get(n), !0),
        t = n;
    n > t + 1 && (yield ue(n - t - 1))
}
function *mn(e) {
    let t = -1
      , n = 0;
    for (const r = e.length; n < r; ++n)
        n in e && (n > t + 1 && (yield ue(n - t - 1)),
        yield w(g(e, n), !0),
        t = n);
    n > t + 1 && (yield ue(n - t - 1));
    for (const r in e)
        !ut(r) && he(e, r) && (yield Q(r, g(e, r), "observablehq--key"));
    for (const r of K(e))
        yield Q(D(r), g(e, r), "observablehq--symbol")
}
function *W(e) {
    for (const t in e)
        he(e, t) && (yield Q(t, g(e, t), "observablehq--key"));
    for (const t of K(e))
        yield Q(D(t), g(e, t), "observablehq--symbol")
}
function *bn(e) {
    for (const [t,n] of e)
        yield Q(t, n, "observablehq--key")
}
function ue(e) {
    const t = document.createElement("span");
    return t.className = "observablehq--empty",
    t.textContent = e === 1 ? "empty" : `empty × ${e}`,
    t
}
function Q(e, t, n) {
    const r = document.createDocumentFragment()
      , i = r.appendChild(document.createElement("span"));
    return i.className = n,
    i.textContent = e,
    r.appendChild(document.createTextNode(": ")),
    r.appendChild(w(t, !0)),
    r
}
function _n(e, t) {
    const n = document.createDocumentFragment();
    return n.appendChild(w(e, !0)),
    n.appendChild(document.createTextNode(" => ")),
    n.appendChild(w(t, !0)),
    n
}
function vn(e, t) {
    if (e instanceof Date || (e = new Date(+e)),
    isNaN(e))
        return typeof t == "function" ? t(e) : t;
    const n = e.getUTCHours()
      , r = e.getUTCMinutes()
      , i = e.getUTCSeconds()
      , s = e.getUTCMilliseconds();
    return `${yn(e.getUTCFullYear())}-${T(e.getUTCMonth() + 1, 2)}-${T(e.getUTCDate(), 2)}${n || r || i || s ? `T${T(n, 2)}:${T(r, 2)}${i || s ? `:${T(i, 2)}${s ? `.${T(s, 3)}` : ""}` : ""}Z` : ""}`
}
function yn(e) {
    return e < 0 ? `-${T(-e, 6)}` : e > 9999 ? `+${T(e, 6)}` : T(e, 4)
}
function T(e, t) {
    return `${e}`.padStart(t, "0")
}
function wn(e) {
    return vn(e, "Invalid Date")
}
var gn = Error.prototype.toString;
function En(e) {
    return e.stack || gn.call(e)
}
var Cn = RegExp.prototype.toString;
function Nn(e) {
    return Cn.call(e)
}
const ve = 20;
function xn(e, t, n, r) {
    if (t === !1) {
        if (We(e, /["\n]/g) <= We(e, /`|\${/g)) {
            const c = document.createElement("span");
            r && c.appendChild(N(r));
            const u = c.appendChild(document.createElement("span"));
            return u.className = "observablehq--string",
            u.textContent = JSON.stringify(e),
            c
        }
        const o = e.split(`
`);
        if (o.length > ve && !n) {
            const c = document.createElement("div");
            r && c.appendChild(N(r));
            const u = c.appendChild(document.createElement("span"));
            u.className = "observablehq--string",
            u.textContent = "`" + Ye(o.slice(0, ve).join(`
`));
            const f = c.appendChild(document.createElement("span"))
              , d = o.length - ve;
            return f.textContent = `Show ${d} truncated line${d > 1 ? "s" : ""}`,
            f.className = "observablehq--string-expand",
            f.addEventListener("mouseup", function(p) {
                p.stopPropagation(),
                fe(c, w(e, t, !0, r))
            }),
            c
        }
        const a = document.createElement("span");
        r && a.appendChild(N(r));
        const l = a.appendChild(document.createElement("span"));
        return l.className = `observablehq--string${n ? " observablehq--expanded" : ""}`,
        l.textContent = "`" + Ye(e) + "`",
        a
    }
    const i = document.createElement("span");
    r && i.appendChild(N(r));
    const s = i.appendChild(document.createElement("span"));
    return s.className = "observablehq--string",
    s.textContent = JSON.stringify(e.length > 100 ? `${e.slice(0, 50)}…${e.slice(-49)}` : e),
    i
}
function Ye(e) {
    return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, Tn)
}
function Tn(e) {
    var t = e.charCodeAt(0);
    switch (t) {
    case 8:
        return "\\b";
    case 9:
        return "\\t";
    case 11:
        return "\\v";
    case 12:
        return "\\f";
    case 13:
        return "\\r"
    }
    return t < 16 ? "\\x0" + t.toString(16) : t < 32 ? "\\x" + t.toString(16) : "\\" + e
}
function We(e, t) {
    for (var n = 0; t.exec(e); )
        ++n;
    return n
}
var An = Function.prototype.toString
  , Sn = {
    prefix: "async ƒ"
}
  , $n = {
    prefix: "async ƒ*"
}
  , He = {
    prefix: "class"
}
  , kn = {
    prefix: "ƒ"
}
  , qn = {
    prefix: "ƒ*"
};
function On(e, t) {
    var n, r, i = An.call(e);
    switch (e.constructor && e.constructor.name) {
    case "AsyncFunction":
        n = Sn;
        break;
    case "AsyncGeneratorFunction":
        n = $n;
        break;
    case "GeneratorFunction":
        n = qn;
        break;
    default:
        n = /^class\b/.test(i) ? He : kn;
        break
    }
    return n === He ? B(n, "", t) : (r = /^(?:async\s*)?(\w+)\s*=>/.exec(i)) ? B(n, "(" + r[1] + ")", t) : (r = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)) ? B(n, r[1] ? "(" + r[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t) : (r = /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)) ? B(n, r[1] ? "(" + r[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t) : B(n, "(…)", t)
}
function B(e, t, n) {
    var r = document.createElement("span");
    r.className = "observablehq--function",
    n && r.appendChild(N(n));
    var i = r.appendChild(document.createElement("span"));
    return i.className = "observablehq--keyword",
    i.textContent = e.prefix,
    r.appendChild(document.createTextNode(t)),
    r
}
const {prototype: {toString: Ln}} = Object;
function w(e, t, n, r, i) {
    let s = typeof e;
    switch (s) {
    case "boolean":
    case "undefined":
        {
            e += "";
            break
        }
    case "number":
        {
            e = e === 0 && 1 / e < 0 ? "-0" : e + "";
            break
        }
    case "bigint":
        {
            e = e + "n";
            break
        }
    case "symbol":
        {
            e = D(e);
            break
        }
    case "function":
        return On(e, r);
    case "string":
        return xn(e, t, n, r);
    default:
        {
            if (e === null) {
                s = null,
                e = "null";
                break
            }
            if (e instanceof Date) {
                s = "date",
                e = wn(e);
                break
            }
            if (e === ft) {
                s = "forbidden",
                e = "[forbidden]";
                break
            }
            switch (Ln.call(e)) {
            case "[object RegExp]":
                {
                    s = "regexp",
                    e = Nn(e);
                    break
                }
            case "[object Error]":
            case "[object DOMException]":
                {
                    s = "error",
                    e = En(e);
                    break
                }
            default:
                return (n ? ht : Le)(e, t, r, i)
            }
            break
        }
    }
    const o = document.createElement("span");
    r && o.appendChild(N(r));
    const a = o.appendChild(document.createElement("span"));
    return a.className = `observablehq--${s}`,
    a.textContent = e,
    o
}
function fe(e, t) {
    e.classList.contains("observablehq--inspect") && t.classList.add("observablehq--inspect"),
    e.parentNode.replaceChild(t, e),
    le(t, "load")
}
const Mn = /\s+\(\d+:\d+\)$/m;
class Ve {
    constructor(t) {
        if (!t)
            throw new Error("invalid node");
        this._node = t,
        t.classList.add("observablehq")
    }
    pending() {
        const {_node: t} = this;
        t.classList.remove("observablehq--error"),
        t.classList.add("observablehq--running")
    }
    fulfilled(t, n) {
        const {_node: r} = this;
        if ((!Pn(t) || t.parentNode && t.parentNode !== r) && (t = w(t, !1, r.firstChild && r.firstChild.classList && r.firstChild.classList.contains("observablehq--expanded"), n),
        t.classList.add("observablehq--inspect")),
        r.classList.remove("observablehq--running", "observablehq--error"),
        r.firstChild !== t)
            if (r.firstChild) {
                for (; r.lastChild !== r.firstChild; )
                    r.removeChild(r.lastChild);
                r.replaceChild(t, r.firstChild)
            } else
                r.appendChild(t);
        le(r, "update")
    }
    rejected(t, n) {
        const {_node: r} = this;
        for (r.classList.remove("observablehq--running"),
        r.classList.add("observablehq--error"); r.lastChild; )
            r.removeChild(r.lastChild);
        var i = document.createElement("div");
        i.className = "observablehq--inspect",
        n && i.appendChild(N(n)),
        i.appendChild(document.createTextNode((t + "").replace(Mn, ""))),
        r.appendChild(i),
        le(r, "error", {
            error: t
        })
    }
}
Ve.into = function(e) {
    if (typeof e == "string" && (e = document.querySelector(e),
    e == null))
        throw new Error("container not found");
    return function() {
        return new Ve(e.appendChild(document.createElement("div")))
    }
}
;
function Pn(e) {
    return (e instanceof Element || e instanceof Text) && e instanceof e.constructor
}
var Ze = {}
  , ye = {}
  , we = 34
  , z = 10
  , ge = 13;
function _t(e) {
    return new Function("d","return {" + e.map(function(t, n) {
        return JSON.stringify(t) + ": d[" + n + '] || ""'
    }).join(",") + "}")
}
function Rn(e, t) {
    var n = _t(e);
    return function(r, i) {
        return t(n(r), i, e)
    }
}
function Ge(e) {
    var t = Object.create(null)
      , n = [];
    return e.forEach(function(r) {
        for (var i in r)
            i in t || n.push(t[i] = i)
    }),
    n
}
function y(e, t) {
    var n = e + ""
      , r = n.length;
    return r < t ? new Array(t - r + 1).join(0) + n : n
}
function In(e) {
    return e < 0 ? "-" + y(-e, 6) : e > 9999 ? "+" + y(e, 6) : y(e, 4)
}
function jn(e) {
    var t = e.getUTCHours()
      , n = e.getUTCMinutes()
      , r = e.getUTCSeconds()
      , i = e.getUTCMilliseconds();
    return isNaN(e) ? "Invalid Date" : In(e.getUTCFullYear()) + "-" + y(e.getUTCMonth() + 1, 2) + "-" + y(e.getUTCDate(), 2) + (i ? "T" + y(t, 2) + ":" + y(n, 2) + ":" + y(r, 2) + "." + y(i, 3) + "Z" : r ? "T" + y(t, 2) + ":" + y(n, 2) + ":" + y(r, 2) + "Z" : n || t ? "T" + y(t, 2) + ":" + y(n, 2) + "Z" : "")
}
function vt(e) {
    var t = new RegExp('["' + e + `
\r]`)
      , n = e.charCodeAt(0);
    function r(f, d) {
        var p, h, b = i(f, function(C, x) {
            if (p)
                return p(C, x - 1);
            h = C,
            p = d ? Rn(C, d) : _t(C)
        });
        return b.columns = h || [],
        b
    }
    function i(f, d) {
        var p = [], h = f.length, b = 0, C = 0, x, k = h <= 0, q = !1;
        f.charCodeAt(h - 1) === z && --h,
        f.charCodeAt(h - 1) === ge && --h;
        function U() {
            if (k)
                return ye;
            if (q)
                return q = !1,
                Ze;
            var te, ne = b, F;
            if (f.charCodeAt(ne) === we) {
                for (; b++ < h && f.charCodeAt(b) !== we || f.charCodeAt(++b) === we; )
                    ;
                return (te = b) >= h ? k = !0 : (F = f.charCodeAt(b++)) === z ? q = !0 : F === ge && (q = !0,
                f.charCodeAt(b) === z && ++b),
                f.slice(ne + 1, te - 1).replace(/""/g, '"')
            }
            for (; b < h; ) {
                if ((F = f.charCodeAt(te = b++)) === z)
                    q = !0;
                else if (F === ge)
                    q = !0,
                    f.charCodeAt(b) === z && ++b;
                else if (F !== n)
                    continue;
                return f.slice(ne, te)
            }
            return k = !0,
            f.slice(ne, h)
        }
        for (; (x = U()) !== ye; ) {
            for (var R = []; x !== Ze && x !== ye; )
                R.push(x),
                x = U();
            d && (R = d(R, C++)) == null || p.push(R)
        }
        return p
    }
    function s(f, d) {
        return f.map(function(p) {
            return d.map(function(h) {
                return u(p[h])
            }).join(e)
        })
    }
    function o(f, d) {
        return d == null && (d = Ge(f)),
        [d.map(u).join(e)].concat(s(f, d)).join(`
`)
    }
    function a(f, d) {
        return d == null && (d = Ge(f)),
        s(f, d).join(`
`)
    }
    function l(f) {
        return f.map(c).join(`
`)
    }
    function c(f) {
        return f.map(u).join(e)
    }
    function u(f) {
        return f == null ? "" : f instanceof Date ? jn(f) : t.test(f += "") ? '"' + f.replace(/"/g, '""') + '"' : f
    }
    return {
        parse: r,
        parseRows: i,
        format: o,
        formatBody: a,
        formatRows: l,
        formatRow: c,
        formatValue: u
    }
}
var yt = vt(",")
  , Dn = yt.parse
  , Un = yt.parseRows
  , wt = vt("	")
  , Fn = wt.parse
  , Bn = wt.parseRows;
function zn(e) {
    for (var t in e) {
        var n = e[t].trim(), r, i;
        if (!n)
            n = null;
        else if (n === "true")
            n = !0;
        else if (n === "false")
            n = !1;
        else if (n === "NaN")
            n = NaN;
        else if (!isNaN(r = +n))
            n = r;
        else if (i = n.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))
            Yn && i[4] && !i[7] && (n = n.replace(/-/g, "/").replace(/T/, " ")),
            n = new Date(n);
        else
            continue;
        e[t] = n
    }
    return e
}
const Yn = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
function _(e, t, n) {
    return {
        resolve(r=n) {
            return `${e}@${t}/${r}`
        }
    }
}
const Wn = _("d3", "7.6.1", "dist/d3.min.js")
  , Hn = _("@observablehq/inputs", "0.10.4", "dist/inputs.min.js")
  , Vn = _("@observablehq/plot", "0.6.0", "dist/plot.umd.min.js")
  , Zn = _("@observablehq/graphviz", "0.2.1", "dist/graphviz.min.js")
  , Ee = _("@observablehq/highlight.js", "2.0.0", "highlight.min.js")
  , Qe = _("@observablehq/katex", "0.11.1", "dist/katex.min.js")
  , Gn = _("lodash", "4.17.21", "lodash.min.js")
  , Qn = _("htl", "0.3.1", "dist/htl.min.js")
  , Jn = _("jszip", "3.10.0", "dist/jszip.min.js")
  , Kn = _("marked", "0.3.12", "marked.min.js")
  , Je = _("sql.js", "1.7.0", "dist/sql-wasm.js")
  , Xn = _("vega", "5.22.1", "build/vega.min.js")
  , er = _("vega-lite", "5.5.0", "build/vega-lite.min.js")
  , tr = _("vega-lite-api", "5.0.0", "build/vega-lite-api.min.js")
  , Te = _("apache-arrow", "4.0.1", "Arrow.es2015.min.js")
  , nr = _("arquero", "4.8.8", "dist/arquero.min.js")
  , rr = _("topojson-client", "3.1.0", "dist/topojson-client.min.js")
  , ir = _("exceljs", "4.3.0", "dist/exceljs.min.js")
  , or = _("mermaid", "9.1.6", "dist/mermaid.min.js")
  , Ke = _("leaflet", "1.8.0", "dist/leaflet.js")
  , ie = new Map
  , X = []
  , Ae = X.map
  , sr = X.some
  , ar = X.hasOwnProperty
  , cr = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/
  , lr = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/
  , Xe = /(?:\.[^/]*|\/)$/;
class j extends Error {
    constructor(t) {
        super(t)
    }
}
j.prototype.name = j.name;
function et(e) {
    const t = cr.exec(e);
    return t && {
        name: t[1],
        version: t[2],
        path: t[3]
    }
}
function gt(e="https://cdn.jsdelivr.net/npm/", t=["unpkg", "jsdelivr", "browser", "main"]) {
    if (!/\/$/.test(e))
        throw new Error("origin lacks trailing slash");
    function n(i) {
        for (const s of t) {
            let o = i[s];
            if (typeof o == "string")
                return o.startsWith("./") && (o = o.slice(2)),
                Xe.test(o) ? o : `${o}.js`
        }
    }
    function r(i) {
        const s = `${e}${i.name}${i.version ? `@${i.version}` : ""}/package.json`;
        let o = ie.get(s);
        return o || ie.set(s, o = fetch(s).then(a=>{
            if (!a.ok)
                throw new j("unable to load package.json");
            return a.redirected && !ie.has(a.url) && ie.set(a.url, o),
            a.json()
        }
        )),
        o
    }
    return async function(s, o) {
        if (s.startsWith(e) && (s = s.substring(e.length)),
        /^(\w+:)|\/\//i.test(s))
            return s;
        if (/^[.]{0,2}\//i.test(s))
            return new URL(s,o ?? location).href;
        if (!s.length || /^[\s._]/.test(s) || /\s$/.test(s))
            throw new j("illegal name");
        const a = et(s);
        if (!a)
            return `${e}${s}`;
        if (!a.version && o != null && o.startsWith(e)) {
            const c = await r(et(o.substring(e.length)));
            a.version = c.dependencies && c.dependencies[a.name] || c.peerDependencies && c.peerDependencies[a.name]
        }
        if (a.path && !Xe.test(a.path) && (a.path += ".js"),
        a.path && a.version && lr.test(a.version))
            return `${e}${a.name}@${a.version}/${a.path}`;
        const l = await r(a);
        return `${e}${l.name}@${l.version}/${a.path || n(l) || "index.js"}`
    }
}
var ur = me(gt());
function me(e) {
    const t = new Map
      , n = i(null);
    function r(a) {
        if (typeof a != "string")
            return a;
        let l = t.get(a);
        return l || t.set(a, l = new Promise((c,u)=>{
            const f = document.createElement("script");
            f.onload = ()=>{
                try {
                    c(X.pop()(i(a)))
                } catch {
                    u(new j("invalid module"))
                }
                f.remove()
            }
            ,
            f.onerror = ()=>{
                u(new j("unable to load module")),
                f.remove()
            }
            ,
            f.async = !0,
            f.src = a,
            window.define = Et,
            document.head.appendChild(f)
        }
        )),
        l
    }
    function i(a) {
        return l=>Promise.resolve(e(l, a)).then(r)
    }
    function s(a) {
        return me((l,c)=>l in a && (l = a[l],
        c = null,
        typeof l != "string") ? l : e(l, c))
    }
    function o(a) {
        return arguments.length > 1 ? Promise.all(Ae.call(arguments, n)).then(fr) : n(a)
    }
    return o.alias = s,
    o.resolve = e,
    o
}
function fr(e) {
    const t = {};
    for (const n of e)
        for (const r in n)
            ar.call(n, r) && (n[r] == null ? Object.defineProperty(t, r, {
                get: dr(n, r)
            }) : t[r] = n[r]);
    return t
}
function dr(e, t) {
    return ()=>e[t]
}
function pr(e) {
    return e = e + "",
    e === "exports" || e === "module"
}
function Et(e, t, n) {
    const r = arguments.length;
    r < 2 ? (n = e,
    t = []) : r < 3 && (n = t,
    t = typeof e == "string" ? [] : e),
    X.push(sr.call(t, pr) ? i=>{
        const s = {}
          , o = {
            exports: s
        };
        return Promise.all(Ae.call(t, a=>(a = a + "",
        a === "exports" ? s : a === "module" ? o : i(a)))).then(a=>(n.apply(null, a),
        o.exports))
    }
    : i=>Promise.all(Ae.call(t, i)).then(s=>typeof n == "function" ? n.apply(null, s) : n))
}
Et.amd = {};
let L = ur;
function hr(e) {
    L = e
}
function mr(e) {
    return e == null ? L : me(e)
}
async function Ct(e) {
    const [t,n] = await Promise.all([e(Je.resolve()), e.resolve(Je.resolve("dist/"))]);
    return t({
        locateFile: r=>`${n}${r}`
    })
}
class ee {
    constructor(t) {
        Object.defineProperties(this, {
            _db: {
                value: t
            }
        })
    }
    static async open(t) {
        const [n,r] = await Promise.all([Ct(L), Promise.resolve(t).then(Se)]);
        return new ee(new n.Database(r))
    }
    async query(t, n) {
        return await _r(this._db, t, n)
    }
    async queryRow(t, n) {
        return (await this.query(t, n))[0] || null
    }
    async explain(t, n) {
        const r = await this.query(`EXPLAIN QUERY PLAN ${t}`, n);
        return O("pre", {
            className: "observablehq--inspect"
        }, [Ce(r.map(i=>i.detail).join(`
`))])
    }
    async describeTables({schema: t}={}) {
        return this.query(`SELECT NULLIF(schema, 'main') AS schema, name FROM pragma_table_list() WHERE type = 'table'${t == null ? "" : " AND schema = ?"} AND name NOT LIKE 'sqlite_%'`, t == null ? [] : [t])
    }
    async describeColumns({schema: t, table: n}={}) {
        if (n == null)
            throw new Error("missing table");
        const r = await this.query(`SELECT name, type, "notnull" FROM pragma_table_info(?${t == null ? "" : ", ?"}) ORDER BY cid`, t == null ? [n] : [n, t]);
        if (!r.length)
            throw new Error(`table not found: ${n}`);
        return r.map(({name: i, type: s, notnull: o})=>({
            name: i,
            type: br(s),
            databaseType: s,
            nullable: !o
        }))
    }
    async describe(t) {
        const n = await (t === void 0 ? this.query("SELECT name FROM sqlite_master WHERE type = 'table'") : this.query("SELECT * FROM pragma_table_info(?)", [t]));
        if (!n.length)
            throw new Error("Not found");
        const {columns: r} = n;
        return O("table", {
            value: n
        }, [O("thead", [O("tr", r.map(i=>O("th", [Ce(i)])))]), O("tbody", n.map(i=>O("tr", r.map(s=>O("td", [Ce(i[s])])))))])
    }
    async sql() {
        return this.query(...this.queryTag.apply(this, arguments))
    }
    queryTag(t, ...n) {
        return [t.join("?"), n]
    }
}
Object.defineProperty(ee.prototype, "dialect", {
    value: "sqlite"
});
function br(e) {
    switch (e) {
    case "NULL":
        return "null";
    case "INT":
    case "INTEGER":
    case "TINYINT":
    case "SMALLINT":
    case "MEDIUMINT":
    case "BIGINT":
    case "UNSIGNED BIG INT":
    case "INT2":
    case "INT8":
        return "integer";
    case "TEXT":
    case "CLOB":
        return "string";
    case "REAL":
    case "DOUBLE":
    case "DOUBLE PRECISION":
    case "FLOAT":
    case "NUMERIC":
        return "number";
    case "BLOB":
        return "buffer";
    case "DATE":
    case "DATETIME":
        return "string";
    default:
        return /^(?:(?:(?:VARYING|NATIVE) )?CHARACTER|(?:N|VAR|NVAR)CHAR)\(/.test(e) ? "string" : /^(?:DECIMAL|NUMERIC)\(/.test(e) ? "number" : "other"
    }
}
function Se(e) {
    return typeof e == "string" ? fetch(e).then(Se) : e instanceof Response || e instanceof Blob ? e.arrayBuffer().then(Se) : e instanceof ArrayBuffer ? new Uint8Array(e) : e
}
async function _r(e, t, n) {
    const [r] = await e.exec(t, n);
    if (!r)
        return [];
    const {columns: i, values: s} = r
      , o = s.map(a=>Object.fromEntries(a.map((l,c)=>[i[c], l])));
    return o.columns = i,
    o
}
function O(e, t, n) {
    arguments.length === 2 && (n = t,
    t = void 0);
    const r = document.createElement(e);
    if (t !== void 0)
        for (const i in t)
            r[i] = t[i];
    if (n !== void 0)
        for (const i of n)
            r.appendChild(i);
    return r
}
function Ce(e) {
    return document.createTextNode(e)
}
class vr {
    constructor(t) {
        Object.defineProperties(this, {
            _: {
                value: t
            },
            sheetNames: {
                value: t.worksheets.map(n=>n.name),
                enumerable: !0
            }
        })
    }
    sheet(t, n) {
        const r = typeof t == "number" ? this.sheetNames[t] : this.sheetNames.includes(t += "") ? t : null;
        if (r == null)
            throw new Error(`Sheet not found: ${t}`);
        const i = this._.getWorksheet(r);
        return yr(i, n)
    }
}
function yr(e, {range: t, headers: n}={}) {
    let[[r,i],[s,o]] = wr(t, e);
    const a = n ? e._rows[i++] : null;
    let l = new Set(["#"]);
    for (let u = r; u <= s; u++) {
        const f = a ? tt(a.findCell(u + 1)) : null;
        let d = f && f + "" || gr(u);
        for (; l.has(d); )
            d += "_";
        l.add(d)
    }
    l = new Array(r).concat(Array.from(l));
    const c = new Array(o - i + 1);
    for (let u = i; u <= o; u++) {
        const f = c[u - i] = Object.create(null, {
            "#": {
                value: u + 1
            }
        })
          , d = e.getRow(u + 1);
        if (d.hasValues)
            for (let p = r; p <= s; p++) {
                const h = tt(d.findCell(p + 1));
                h != null && (f[l[p + 1]] = h)
            }
    }
    return c.columns = l.filter(()=>!0),
    c
}
function tt(e) {
    if (!e)
        return;
    const {value: t} = e;
    if (t && typeof t == "object" && !(t instanceof Date)) {
        if (t.formula || t.sharedFormula)
            return t.result && t.result.error ? NaN : t.result;
        if (t.richText)
            return nt(t);
        if (t.text) {
            let {text: n} = t;
            return n.richText && (n = nt(n)),
            t.hyperlink && t.hyperlink !== n ? `${t.hyperlink} ${n}` : n
        }
        return t
    }
    return t
}
function nt(e) {
    return e.richText.map(t=>t.text).join("")
}
function wr(e=":", {columnCount: t, rowCount: n}) {
    if (e += "",
    !e.match(/^[A-Z]*\d*:[A-Z]*\d*$/))
        throw new Error("Malformed range specifier");
    const [[r=0,i=0],[s=t - 1,o=n - 1]] = e.split(":").map(Er);
    return [[r, i], [s, o]]
}
function gr(e) {
    let t = "";
    e++;
    do
        t = String.fromCharCode(64 + (e % 26 || 26)) + t;
    while (e = Math.floor((e - 1) / 26));
    return t
}
function Er(e) {
    const [,t,n] = e.match(/^([A-Z]*)(\d*)$/);
    let r = 0;
    if (t)
        for (let i = 0; i < t.length; i++)
            r += Math.pow(26, t.length - i - 1) * (t.charCodeAt(i) - 64);
    return [r ? r - 1 : void 0, n ? +n - 1 : void 0]
}
async function M(e) {
    const t = await fetch(await e.url());
    if (!t.ok)
        throw new Error(`Unable to load file: ${e.name}`);
    return t
}
async function rt(e, t, {array: n=!1, typed: r=!1}={}) {
    const i = await e.text();
    return (t === "	" ? n ? Bn : Fn : n ? Un : Dn)(i, r && zn)
}
class Me {
    constructor(t, n) {
        Object.defineProperty(this, "name", {
            value: t,
            enumerable: !0
        }),
        n !== void 0 && Object.defineProperty(this, "mimeType", {
            value: n + "",
            enumerable: !0
        })
    }
    async blob() {
        return (await M(this)).blob()
    }
    async arrayBuffer() {
        return (await M(this)).arrayBuffer()
    }
    async text() {
        return (await M(this)).text()
    }
    async json() {
        return (await M(this)).json()
    }
    async stream() {
        return (await M(this)).body
    }
    async csv(t) {
        return rt(this, ",", t)
    }
    async tsv(t) {
        return rt(this, "	", t)
    }
    async image(t) {
        const n = await this.url();
        return new Promise((r,i)=>{
            const s = new Image;
            new URL(n,document.baseURI).origin !== new URL(location).origin && (s.crossOrigin = "anonymous"),
            Object.assign(s, t),
            s.onload = ()=>r(s),
            s.onerror = ()=>i(new Error(`Unable to load file: ${this.name}`)),
            s.src = n
        }
        )
    }
    async arrow() {
        const [t,n] = await Promise.all([L(Te.resolve()), M(this)]);
        return t.Table.from(n)
    }
    async sqlite() {
        return ee.open(M(this))
    }
    async zip() {
        const [t,n] = await Promise.all([L(Jn.resolve()), this.arrayBuffer()]);
        return new xr(await t.loadAsync(n))
    }
    async xml(t="application/xml") {
        return new DOMParser().parseFromString(await this.text(), t)
    }
    async html() {
        return this.xml("text/html")
    }
    async xlsx() {
        const [t,n] = await Promise.all([L(ir.resolve()), this.arrayBuffer()]);
        return new vr(await new t.Workbook().xlsx.load(n))
    }
}
class v extends Me {
    constructor(t, n, r) {
        super(n, r),
        Object.defineProperty(this, "_url", {
            value: t
        })
    }
    async url() {
        return await this._url + ""
    }
}
function Cr(e) {
    throw new Error(`File not found: ${e}`)
}
function Nr(e) {
    return Object.assign(t=>{
        const n = e(t += "");
        if (n == null)
            throw new Error(`File not found: ${t}`);
        if (typeof n == "object" && "url"in n) {
            const {url: r, mimeType: i} = n;
            return new v(r,t,i)
        }
        return new v(n,t)
    }
    , {
        prototype: v.prototype
    })
}
class xr {
    constructor(t) {
        Object.defineProperty(this, "_", {
            value: t
        }),
        this.filenames = Object.keys(t.files).filter(n=>!t.files[n].dir)
    }
    file(t) {
        const n = this._.file(t += "");
        if (!n || n.dir)
            throw new Error(`file not found: ${t}`);
        return new Tr(n)
    }
}
class Tr extends Me {
    constructor(t) {
        super(t.name),
        Object.defineProperty(this, "_", {
            value: t
        }),
        Object.defineProperty(this, "_url", {
            writable: !0
        })
    }
    async url() {
        return this._url || (this._url = this.blob().then(URL.createObjectURL))
    }
    async blob() {
        return this._.async("blob")
    }
    async arrayBuffer() {
        return this._.async("arraybuffer")
    }
    async text() {
        return this._.async("text")
    }
    async json() {
        return JSON.parse(await this.text())
    }
}
function Ar(e, t) {
    var n = document.createElement("canvas");
    return n.width = e,
    n.height = t,
    n
}
function Sr(e, t, n) {
    n == null && (n = devicePixelRatio);
    var r = document.createElement("canvas");
    r.width = e * n,
    r.height = t * n,
    r.style.width = e + "px";
    var i = r.getContext("2d");
    return i.scale(n, n),
    i
}
function $r(e, t="untitled", n="Save") {
    const r = document.createElement("a")
      , i = r.appendChild(document.createElement("button"));
    i.textContent = n,
    r.download = t;
    async function s() {
        await new Promise(requestAnimationFrame),
        URL.revokeObjectURL(r.href),
        r.removeAttribute("href"),
        i.textContent = n,
        i.disabled = !1
    }
    return r.onclick = async o=>{
        if (i.disabled = !0,
        r.href)
            return s();
        i.textContent = "Saving…";
        try {
            const a = await (typeof e == "function" ? e() : e);
            i.textContent = "Download",
            r.href = URL.createObjectURL(a)
        } catch {
            i.textContent = n
        }
        if (o.eventPhase)
            return s();
        i.disabled = !1
    }
    ,
    r
}
var oe = {
    math: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function kr(e, t) {
    var n = e += "", r = n.indexOf(":"), i;
    r >= 0 && (n = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1));
    var s = oe.hasOwnProperty(n) ? document.createElementNS(oe[n], e) : document.createElement(e);
    if (t)
        for (var o in t)
            n = o,
            r = n.indexOf(":"),
            i = t[o],
            r >= 0 && (n = o.slice(0, r)) !== "xmlns" && (o = o.slice(r + 1)),
            oe.hasOwnProperty(n) ? s.setAttributeNS(oe[n], o, i) : s.setAttribute(o, i);
    return s
}
function qr(e) {
    var t = document.createElement("input");
    return e != null && (t.type = e),
    t
}
function Or(e, t, n) {
    arguments.length === 1 && (t = e,
    e = null);
    var r = document.createElement("input");
    return r.min = e = e == null ? 0 : +e,
    r.max = t = t == null ? 1 : +t,
    r.step = n == null ? "any" : n = +n,
    r.type = "range",
    r
}
function Lr(e) {
    var t = document.createElement("select");
    return Array.prototype.forEach.call(e, function(n) {
        var r = document.createElement("option");
        r.value = r.textContent = n,
        t.appendChild(r)
    }),
    t
}
function Mr(e, t) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return n.setAttribute("viewBox", [0, 0, e, t]),
    n.setAttribute("width", e),
    n.setAttribute("height", t),
    n
}
function Pr(e) {
    return document.createTextNode(e)
}
var Rr = 0;
function Nt(e) {
    return new xt("O-" + (e == null ? "" : e + "-") + ++Rr)
}
function xt(e) {
    this.id = e,
    this.href = new URL(`#${e}`,location) + ""
}
xt.prototype.toString = function() {
    return "url(" + this.href + ")"
}
;
const Ir = {
    canvas: Ar,
    context2d: Sr,
    download: $r,
    element: kr,
    input: qr,
    range: Or,
    select: Lr,
    svg: Mr,
    text: Pr,
    uid: Nt
};
function jr(e) {
    return new Promise(function(t, n) {
        var r = new FileReader;
        r.onload = function() {
            t(r.result)
        }
        ,
        r.onerror = n,
        r.readAsArrayBuffer(e)
    }
    )
}
function Dr(e) {
    return new Promise(function(t, n) {
        var r = new FileReader;
        r.onload = function() {
            t(r.result)
        }
        ,
        r.onerror = n,
        r.readAsText(e)
    }
    )
}
function Ur(e) {
    return new Promise(function(t, n) {
        var r = new FileReader;
        r.onload = function() {
            t(r.result)
        }
        ,
        r.onerror = n,
        r.readAsDataURL(e)
    }
    )
}
const Fr = {
    buffer: jr,
    text: Dr,
    url: Ur
};
function Pe() {
    return this
}
function Tt(e, t) {
    let n = !1;
    if (typeof t != "function")
        throw new Error("dispose is not a function");
    return {
        [Symbol.iterator]: Pe,
        next: ()=>n ? {
            done: !0
        } : (n = !0,
        {
            done: !1,
            value: e
        }),
        return: ()=>(n = !0,
        t(e),
        {
            done: !0
        }),
        throw: ()=>({
            done: n = !0
        })
    }
}
function *Br(e, t) {
    for (var n, r = -1; !(n = e.next()).done; )
        t(n.value, ++r) && (yield n.value)
}
function be(e) {
    let t = !1, n, r;
    const i = e(s);
    if (i != null && typeof i != "function")
        throw new Error(typeof i.then == "function" ? "async initializers are not supported" : "initializer returned something, but not a dispose function");
    function s(a) {
        return r ? (r(a),
        r = null) : t = !0,
        n = a
    }
    function o() {
        return {
            done: !1,
            value: t ? (t = !1,
            Promise.resolve(n)) : new Promise(a=>r = a)
        }
    }
    return {
        [Symbol.iterator]: Pe,
        throw: ()=>({
            done: !0
        }),
        return: ()=>(i != null && i(),
        {
            done: !0
        }),
        next: o
    }
}
function zr(e) {
    return be(function(t) {
        var n = Yr(e)
          , r = it(e);
        function i() {
            t(it(e))
        }
        return e.addEventListener(n, i),
        r !== void 0 && t(r),
        function() {
            e.removeEventListener(n, i)
        }
    })
}
function it(e) {
    switch (e.type) {
    case "range":
    case "number":
        return e.valueAsNumber;
    case "date":
        return e.valueAsDate;
    case "checkbox":
        return e.checked;
    case "file":
        return e.multiple ? e.files : e.files[0];
    case "select-multiple":
        return Array.from(e.selectedOptions, t=>t.value);
    default:
        return e.value
    }
}
function Yr(e) {
    switch (e.type) {
    case "button":
    case "submit":
    case "checkbox":
        return "click";
    case "file":
        return "change";
    default:
        return "input"
    }
}
function *Wr(e, t) {
    for (var n, r = -1; !(n = e.next()).done; )
        yield t(n.value, ++r)
}
function Hr(e) {
    let t;
    const n = []
      , r = e(i);
    if (r != null && typeof r != "function")
        throw new Error(typeof r.then == "function" ? "async initializers are not supported" : "initializer returned something, but not a dispose function");
    function i(o) {
        return n.push(o),
        t && (t(n.shift()),
        t = null),
        o
    }
    function s() {
        return {
            done: !1,
            value: n.length ? Promise.resolve(n.shift()) : new Promise(o=>t = o)
        }
    }
    return {
        [Symbol.iterator]: Pe,
        throw: ()=>({
            done: !0
        }),
        return: ()=>(r != null && r(),
        {
            done: !0
        }),
        next: s
    }
}
function *Vr(e, t, n) {
    e = +e,
    t = +t,
    n = (i = arguments.length) < 2 ? (t = e,
    e = 0,
    1) : i < 3 ? 1 : +n;
    for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0; ++r < i; )
        yield e + r * n
}
function Zr(e, t) {
    if (!(!isFinite(t = +t) || t < 0 || t !== t | 0)) {
        for (var n, r = -1; !(n = e.next()).done; )
            if (++r === t)
                return n.value
    }
}
function Gr(e) {
    const t = URL.createObjectURL(new Blob([e],{
        type: "text/javascript"
    }))
      , n = new Worker(t);
    return Tt(n, ()=>{
        n.terminate(),
        URL.revokeObjectURL(t)
    }
    )
}
const Qr = {
    disposable: Tt,
    filter: Br,
    input: zr,
    map: Wr,
    observe: be,
    queue: Hr,
    range: Vr,
    valueAt: Zr,
    worker: Gr
};
function Re(e, t) {
    return function(n) {
        var r = n[0], i = [], s, o = null, a, l, c, u, f, d, p, h = -1;
        for (u = 1,
        f = arguments.length; u < f; ++u) {
            if (s = arguments[u],
            s instanceof Node)
                i[++h] = s,
                r += "<!--o:" + h + "-->";
            else if (Array.isArray(s)) {
                for (d = 0,
                p = s.length; d < p; ++d)
                    a = s[d],
                    a instanceof Node ? (o === null && (i[++h] = o = document.createDocumentFragment(),
                    r += "<!--o:" + h + "-->"),
                    o.appendChild(a)) : (o = null,
                    r += a);
                o = null
            } else
                r += s;
            r += n[u]
        }
        if (o = e(r),
        ++h > 0) {
            for (l = new Array(h),
            c = document.createTreeWalker(o, NodeFilter.SHOW_COMMENT, null, !1); c.nextNode(); )
                a = c.currentNode,
                /^o:/.test(a.nodeValue) && (l[+a.nodeValue.slice(2)] = a);
            for (u = 0; u < h; ++u)
                (a = l[u]) && a.parentNode.replaceChild(i[u], a)
        }
        return o.childNodes.length === 1 ? o.removeChild(o.firstChild) : o.nodeType === 11 ? ((a = t()).appendChild(o),
        a) : o
    }
}
const Jr = Re(function(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.trim(),
    document.importNode(t.content, !0)
}, function() {
    return document.createElement("span")
});
async function Kr(e) {
    const t = await e(Ke.resolve());
    if (!t._style) {
        const n = document.createElement("link");
        n.rel = "stylesheet",
        n.href = await e.resolve(Ke.resolve("dist/leaflet.css")),
        t._style = document.head.appendChild(n)
    }
    return t
}
function Xr(e) {
    return e(Kn.resolve()).then(function(t) {
        return Re(function(n) {
            var r = document.createElement("div");
            r.innerHTML = t(n, {
                langPrefix: ""
            }).trim();
            var i = r.querySelectorAll("pre code[class]");
            return i.length > 0 && e(Ee.resolve()).then(function(s) {
                i.forEach(function(o) {
                    function a() {
                        s.highlightBlock(o),
                        o.parentNode.classList.add("observablehq--md-pre")
                    }
                    s.getLanguage(o.className) ? a() : e(Ee.resolve("async-languages/index.js")).then(l=>{
                        if (l.has(o.className))
                            return e(Ee.resolve("async-languages/" + l.get(o.className))).then(c=>{
                                s.registerLanguage(o.className, c)
                            }
                            )
                    }
                    ).then(a, a)
                })
            }),
            r
        }, function() {
            return document.createElement("div")
        })
    })
}
async function ei(e) {
    const t = await e(or.resolve());
    return t.initialize({
        securityLevel: "loose",
        theme: "neutral"
    }),
    function() {
        const r = document.createElement("div");
        return r.innerHTML = t.render(Nt().id, String.raw.apply(String, arguments)),
        r.removeChild(r.firstChild)
    }
}
function ti(e) {
    let t;
    Object.defineProperties(this, {
        generator: {
            value: be(n=>void (t = n))
        },
        value: {
            get: ()=>e,
            set: n=>t(e = n)
        }
    }),
    e !== void 0 && t(e)
}
function *ni() {
    for (; ; )
        yield Date.now()
}
function ri(e, t) {
    return new Promise(function(n) {
        setTimeout(function() {
            n(t)
        }, e)
    }
    )
}
var $e = new Map;
function ii(e, t) {
    var n = new Promise(function(r) {
        $e.delete(t);
        var i = t - e;
        if (!(i > 0))
            throw new Error("invalid time");
        if (i > 2147483647)
            throw new Error("too long to wait");
        setTimeout(r, i)
    }
    );
    return $e.set(t, n),
    n
}
function At(e, t) {
    var n;
    return (n = $e.get(e = +e)) ? n.then(()=>t) : (n = Date.now()) >= e ? Promise.resolve(t) : ii(n, e).then(()=>t)
}
function oi(e, t) {
    return At(Math.ceil((Date.now() + 1) / e) * e, t)
}
const si = {
    delay: ri,
    tick: oi,
    when: At
};
function ai(e, t) {
    if (/^(\w+:)|\/\//i.test(e))
        return e;
    if (/^[.]{0,2}\//i.test(e))
        return new URL(e,t ?? location).href;
    if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e))
        throw new Error("illegal name");
    return "https://unpkg.com/" + e
}
const ci = Re(function(e) {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
    return t.innerHTML = e.trim(),
    t
}, function() {
    return document.createElementNS("http://www.w3.org/2000/svg", "g")
});
var li = String.raw;
function ui(e) {
    return new Promise(function(t, n) {
        var r = document.createElement("link");
        r.rel = "stylesheet",
        r.href = e,
        r.onerror = n,
        r.onload = t,
        document.head.appendChild(r)
    }
    )
}
function fi(e) {
    return Promise.all([e(Qe.resolve()), e.resolve(Qe.resolve("dist/katex.min.css")).then(ui)]).then(function(t) {
        var n = t[0]
          , r = i();
        function i(s) {
            return function() {
                var o = document.createElement("div");
                return n.render(li.apply(String, arguments), o, s),
                o.removeChild(o.firstChild)
            }
        }
        return r.options = i,
        r.block = i({
            displayMode: !0
        }),
        r
    })
}
async function di(e) {
    const [t,n,r] = await Promise.all([Xn, er, tr].map(i=>e(i.resolve())));
    return r.register(t, n)
}
function pi() {
    return be(function(e) {
        var t = e(document.body.clientWidth);
        function n() {
            var r = document.body.clientWidth;
            r !== t && e(t = r)
        }
        return window.addEventListener("resize", n),
        function() {
            window.removeEventListener("resize", n)
        }
    })
}
function hi(e, t) {
    return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function mi(e, t) {
    return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
function bi(e) {
    if (typeof e[Symbol.iterator] != "function")
        throw new TypeError("values is not iterable");
    return Array.from(e).reverse()
}
const Ie = 20;
function _i(e, t) {
    return e && (typeof e.sql == "function" || typeof e.queryTag == "function" && (typeof e.query == "function" || typeof e.queryStream == "function")) && (t !== "table" || typeof e.describeColumns == "function") && e !== qt
}
function vi(e) {
    return Array.isArray(e) && (gi(e.schema) || Ei(e.columns) || yi(e) || St(e) || $t(e)) || kt(e)
}
function yi(e) {
    const t = Math.min(Ie, e.length);
    for (let n = 0; n < t; ++n) {
        const r = e[n];
        if (r === null || typeof r != "object")
            return !1
    }
    return t > 0 && wi(e[0])
}
function wi(e) {
    for (const t in e)
        return !0;
    return !1
}
function gi(e) {
    return Array.isArray(e) && e.every(t=>t && typeof t.name == "string")
}
function Ei(e) {
    return Array.isArray(e) && e.every(t=>typeof t == "string")
}
function Ci(e) {
    return kt(e) || St(e) || $t(e)
}
function St(e) {
    const t = Math.min(Ie, e.length);
    if (!(t > 0))
        return !1;
    let n, r = !1;
    for (let i = 0; i < t; ++i) {
        const s = e[i];
        if (s == null)
            continue;
        const o = typeof s;
        if (n === void 0)
            switch (o) {
            case "number":
            case "boolean":
            case "string":
            case "bigint":
                n = o;
                break;
            default:
                return !1
            }
        else if (o !== n)
            return !1;
        r = !0
    }
    return r
}
function $t(e) {
    const t = Math.min(Ie, e.length);
    if (!(t > 0))
        return !1;
    let n = !1;
    for (let r = 0; r < t; ++r) {
        const i = e[r];
        if (i != null) {
            if (!(i instanceof Date))
                return !1;
            n = !0
        }
    }
    return n
}
function kt(e) {
    return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
}
const qt = Object.assign(async(e,t,n)=>{
    if (e = await ot(await e, "table"),
    _i(e))
        return st(e, xi(t, e), n);
    if (vi(e))
        return ki(e, t);
    throw e ? new Error("invalid data source") : new Error("missing data source")
}
, {
    sql(e, t) {
        return async function() {
            return st(await ot(await e, "sql"), arguments, t)
        }
    }
});
async function ot(e, t) {
    if (e instanceof v) {
        if (t === "table")
            switch (e.mimeType) {
            case "text/csv":
                return e.csv({
                    typed: !0
                });
            case "text/tab-separated-values":
                return e.tsv({
                    typed: !0
                });
            case "application/json":
                return e.json()
            }
        if (t === "table" || t === "sql")
            switch (e.mimeType) {
            case "application/x-sqlite3":
                return e.sqlite()
            }
        throw new Error(`unsupported file type: ${e.mimeType}`)
    }
    return e
}
async function st(e, t, n) {
    if (!e)
        throw new Error("missing data source");
    if (typeof e.queryTag == "function") {
        const r = new AbortController
          , i = {
            signal: r.signal
        };
        if (n.then(()=>r.abort("invalidated")),
        typeof e.queryStream == "function")
            return Ni(e.queryStream(...e.queryTag.apply(e, t), i));
        if (typeof e.query == "function")
            return e.query(...e.queryTag.apply(e, t), i)
    }
    if (typeof e.sql == "function")
        return e.sql.apply(e, t);
    throw new Error("source does not implement query, queryStream, or sql")
}
async function *Ni(e) {
    const t = await e
      , n = [];
    n.done = !1,
    n.error = null,
    n.schema = t.schema;
    try {
        const r = t.readRows();
        do {
            const i = await r.next();
            if (i.done)
                n.done = !0;
            else
                for (const s of i.value)
                    n.push(s);
            yield n
        } while (!n.done)
    } catch (r) {
        n.error = r,
        yield n
    }
}
function xi(e, t) {
    const n = typeof t.escape == "function" ? t.escape : u=>u
      , {select: r, from: i, filter: s, sort: o, slice: a} = e;
    if (!i.table)
        throw new Error("missing from table");
    if (r.columns && r.columns.length === 0)
        throw new Error("at least one column must be selected");
    const c = [[`SELECT ${r.columns ? r.columns.map(u=>`t.${n(u)}`) : "*"} FROM ${Ti(i.table, n)} t`]];
    for (let u = 0; u < s.length; ++u)
        m(u ? `
AND ` : `
WHERE `, c),
        Ai(s[u], c, n);
    for (let u = 0; u < o.length; ++u)
        m(u ? ", " : `
ORDER BY `, c),
        at(o[u], c, n);
    if (t.dialect === "mssql") {
        if (a.to !== null || a.from !== null) {
            if (!o.length) {
                if (!r.columns)
                    throw new Error("at least one column must be explicitly specified. Received '*'.");
                m(`
ORDER BY `, c),
                at({
                    column: r.columns[0],
                    direction: "ASC"
                }, c, n)
            }
            m(`
OFFSET ${a.from || 0} ROWS`, c),
            m(`
FETCH NEXT ${a.to !== null ? a.to - (a.from || 0) : 1e9} ROWS ONLY`, c)
        }
    } else
        (a.to !== null || a.from !== null) && m(`
LIMIT ${a.to !== null ? a.to - (a.from || 0) : 1e9}`, c),
        a.from !== null && m(` OFFSET ${a.from}`, c);
    return c
}
function Ti(e, t) {
    if (typeof e == "object") {
        let n = "";
        return e.database != null && (n += t(e.database) + "."),
        e.schema != null && (n += t(e.schema) + "."),
        n += t(e.table),
        n
    }
    return e
}
function m(e, t) {
    const n = t[0];
    n[n.length - 1] += e
}
function at({column: e, direction: t}, n, r) {
    m(`t.${r(e)} ${t.toUpperCase()}`, n)
}
function Ai({type: e, operands: t}, n, r) {
    if (t.length < 1)
        throw new Error("Invalid operand length");
    if (t.length === 1)
        switch (I(t[0], n, r),
        e) {
        case "n":
            m(" IS NULL", n);
            return;
        case "nn":
            m(" IS NOT NULL", n);
            return;
        default:
            throw new Error("Invalid filter operation")
        }
    if (t.length === 2 && !["in", "nin"].includes(e))
        if (["c", "nc"].includes(e)) {
            switch (I(t[0], n, r),
            e) {
            case "c":
                m(" LIKE ", n);
                break;
            case "nc":
                m(" NOT LIKE ", n);
                break
            }
            I($i(t[1]), n, r);
            return
        } else {
            switch (I(t[0], n, r),
            e) {
            case "eq":
                m(" = ", n);
                break;
            case "ne":
                m(" <> ", n);
                break;
            case "gt":
                m(" > ", n);
                break;
            case "lt":
                m(" < ", n);
                break;
            case "gte":
                m(" >= ", n);
                break;
            case "lte":
                m(" <= ", n);
                break;
            default:
                throw new Error("Invalid filter operation")
            }
            I(t[1], n, r);
            return
        }
    switch (I(t[0], n, r),
    e) {
    case "in":
        m(" IN (", n);
        break;
    case "nin":
        m(" NOT IN (", n);
        break;
    default:
        throw new Error("Invalid filter operation")
    }
    Si(t.slice(1), n),
    m(")", n)
}
function I(e, t, n) {
    e.type === "column" ? m(`t.${n(e.value)}`, t) : (t.push(e.value),
    t[0].push(""))
}
function Si(e, t) {
    let n = !0;
    for (const r of e)
        n ? n = !1 : m(",", t),
        t.push(r.value),
        t[0].push("")
}
function $i(e) {
    return {
        ...e,
        value: `%${e.value}%`
    }
}
function ki(e, t) {
    const n = e;
    let {schema: r, columns: i} = e
      , s = Ci(e);
    s && (e = Array.from(e, l=>({
        value: l
    })));
    for (const {type: l, operands: c} of t.filter) {
        const [{value: u}] = c
          , f = c.slice(1).map(({value: d})=>d);
        switch (l) {
        case "eq":
            {
                const [d] = f;
                if (d instanceof Date) {
                    const p = +d;
                    e = e.filter(h=>+h[u] === p)
                } else
                    e = e.filter(p=>p[u] === d);
                break
            }
        case "ne":
            {
                const [d] = f;
                e = e.filter(p=>p[u] !== d);
                break
            }
        case "c":
            {
                const [d] = f;
                e = e.filter(p=>typeof p[u] == "string" && p[u].includes(d));
                break
            }
        case "nc":
            {
                const [d] = f;
                e = e.filter(p=>typeof p[u] == "string" && !p[u].includes(d));
                break
            }
        case "in":
            {
                const d = new Set(f);
                e = e.filter(p=>d.has(p[u]));
                break
            }
        case "nin":
            {
                const d = new Set(f);
                e = e.filter(p=>!d.has(p[u]));
                break
            }
        case "n":
            {
                e = e.filter(d=>d[u] == null);
                break
            }
        case "nn":
            {
                e = e.filter(d=>d[u] != null);
                break
            }
        case "lt":
            {
                const [d] = f;
                e = e.filter(p=>p[u] < d);
                break
            }
        case "lte":
            {
                const [d] = f;
                e = e.filter(p=>p[u] <= d);
                break
            }
        case "gt":
            {
                const [d] = f;
                e = e.filter(p=>p[u] > d);
                break
            }
        case "gte":
            {
                const [d] = f;
                e = e.filter(p=>p[u] >= d);
                break
            }
        default:
            throw new Error(`unknown filter type: ${l}`)
        }
    }
    for (const {column: l, direction: c} of bi(t.sort)) {
        const u = c === "desc" ? hi : mi;
        e === n && (e = e.slice()),
        e.sort((f,d)=>u(f[l], d[l]))
    }
    let {from: o, to: a} = t.slice;
    if (o = o == null ? 0 : Math.max(0, o),
    a = a == null ? 1 / 0 : Math.max(0, a),
    (o > 0 || a < 1 / 0) && (e = e.slice(Math.max(0, o), Math.max(0, a))),
    t.select.columns) {
        if (r) {
            const l = new Map(r.map(c=>[c.name, c]));
            r = t.select.columns.map(c=>l.get(c))
        }
        i && (i = t.select.columns),
        e = e.map(l=>Object.fromEntries(t.select.columns.map(c=>[c, l[c]])))
    }
    return s && (e = e.map(l=>l.value)),
    e !== n && (r && (e.schema = r),
    i && (e.columns = i)),
    e
}
const Ot = Object.assign(Object.defineProperties(function(t) {
    const n = mr(t);
    Object.defineProperties(this, qi({
        FileAttachment: ()=>Cr,
        Mutable: ()=>ti,
        now: ni,
        width: pi,
        dot: ()=>n(Zn.resolve()),
        htl: ()=>n(Qn.resolve()),
        html: ()=>Jr,
        md: ()=>Xr(n),
        svg: ()=>ci,
        tex: ()=>fi(n),
        _: ()=>n(Gn.resolve()),
        aq: ()=>n.alias({
            "apache-arrow": Te.resolve()
        })(nr.resolve()),
        Arrow: ()=>n(Te.resolve()),
        d3: ()=>n(Wn.resolve()),
        Inputs: ()=>n(Hn.resolve()).then(r=>({
            ...r,
            file: r.fileOf(Me)
        })),
        L: ()=>Kr(n),
        mermaid: ()=>ei(n),
        Plot: ()=>n(Vn.resolve()),
        __query: ()=>qt,
        require: ()=>n,
        resolve: ()=>ai,
        SQLite: ()=>Ct(n),
        SQLiteDatabaseClient: ()=>ee,
        topojson: ()=>n(rr.resolve()),
        vl: ()=>di(n),
        aapl: ()=>new v("https://static.observableusercontent.com/files/3ccff97fd2d93da734e76829b2b066eafdaac6a1fafdec0faf6ebc443271cfc109d29e80dd217468fcb2aff1e6bffdc73f356cc48feb657f35378e6abbbb63b9").csv({
            typed: !0
        }),
        alphabet: ()=>new v("https://static.observableusercontent.com/files/75d52e6c3130b1cae83cda89305e17b50f33e7420ef205587a135e8562bcfd22e483cf4fa2fb5df6dff66f9c5d19740be1cfaf47406286e2eb6574b49ffc685d").csv({
            typed: !0
        }),
        cars: ()=>new v("https://static.observableusercontent.com/files/048ec3dfd528110c0665dfa363dd28bc516ffb7247231f3ab25005036717f5c4c232a5efc7bb74bc03037155cb72b1abe85a33d86eb9f1a336196030443be4f6").csv({
            typed: !0
        }),
        citywages: ()=>new v("https://static.observableusercontent.com/files/39837ec5121fcc163131dbc2fe8c1a2e0b3423a5d1e96b5ce371e2ac2e20a290d78b71a4fb08b9fa6a0107776e17fb78af313b8ea70f4cc6648fad68ddf06f7a").csv({
            typed: !0
        }),
        diamonds: ()=>new v("https://static.observableusercontent.com/files/87942b1f5d061a21fa4bb8f2162db44e3ef0f7391301f867ab5ba718b225a63091af20675f0bfe7f922db097b217b377135203a7eab34651e21a8d09f4e37252").csv({
            typed: !0
        }),
        flare: ()=>new v("https://static.observableusercontent.com/files/a6b0d94a7f5828fd133765a934f4c9746d2010e2f342d335923991f31b14120de96b5cb4f160d509d8dc627f0107d7f5b5070d2516f01e4c862b5b4867533000").csv({
            typed: !0
        }),
        industries: ()=>new v("https://static.observableusercontent.com/files/76f13741128340cc88798c0a0b7fa5a2df8370f57554000774ab8ee9ae785ffa2903010cad670d4939af3e9c17e5e18e7e05ed2b38b848ac2fc1a0066aa0005f").csv({
            typed: !0
        }),
        miserables: ()=>new v("https://static.observableusercontent.com/files/31d904f6e21d42d4963ece9c8cc4fbd75efcbdc404bf511bc79906f0a1be68b5a01e935f65123670ed04e35ca8cae3c2b943f82bf8db49c5a67c85cbb58db052").json(),
        olympians: ()=>new v("https://static.observableusercontent.com/files/31ca24545a0603dce099d10ee89ee5ae72d29fa55e8fc7c9ffb5ded87ac83060d80f1d9e21f4ae8eb04c1e8940b7287d179fe8060d887fb1f055f430e210007c").csv({
            typed: !0
        }),
        penguins: ()=>new v("https://static.observableusercontent.com/files/715db1223e067f00500780077febc6cebbdd90c151d3d78317c802732252052ab0e367039872ab9c77d6ef99e5f55a0724b35ddc898a1c99cb14c31a379af80a").csv({
            typed: !0
        }),
        weather: ()=>new v("https://static.observableusercontent.com/files/693a46b22b33db0f042728700e0c73e836fa13d55446df89120682d55339c6db7cc9e574d3d73f24ecc9bc7eb9ac9a1e7e104a1ee52c00aab1e77eb102913c1f").csv({
            typed: !0
        }),
        DOM: Ir,
        Files: Fr,
        Generators: Qr,
        Promises: si
    }))
}, {
    resolve: {
        get: ()=>L.resolve,
        enumerable: !0,
        configurable: !0
    },
    require: {
        get: ()=>L,
        set: hr,
        enumerable: !0,
        configurable: !0
    }
}), {
    resolveFrom: gt,
    requireFrom: me
});
function qi(e) {
    return Object.fromEntries(Object.entries(e).map(Oi))
}
function Oi([e,t]) {
    return [e, {
        value: t,
        writable: !0,
        enumerable: !0
    }]
}
function E(e, t) {
    this.message = e + "",
    this.input = t
}
E.prototype = Object.create(Error.prototype);
E.prototype.name = "RuntimeError";
E.prototype.constructor = E;
function Li(e) {
    return e && typeof e.next == "function" && typeof e.return == "function"
}
function Mi(e, t, n) {
    if (typeof t == "function" && (n = t,
    t = null),
    typeof n != "function")
        throw new Error("invalid observer");
    t == null && (t = new Ot);
    const {modules: r, id: i} = e
      , s = new Map
      , o = new Fe(t)
      , a = l(i);
    function l(c) {
        let u = s.get(c);
        return u || s.set(c, u = o.module()),
        u
    }
    for (const c of r) {
        const u = l(c.id);
        let f = 0;
        for (const d of c.variables)
            d.from ? u.import(d.remote, d.name, l(d.from)) : u === a ? u.variable(n(d, f, c.variables)).define(d.name, d.inputs, d.value) : u.define(d.name, d.inputs, d.value),
            ++f
    }
    return o
}
function ke(e) {
    return function() {
        return e
    }
}
function de(e) {
    return e
}
function Pi(e) {
    return function() {
        throw e
    }
}
var Ri = Array.prototype
  , Ii = Ri.map;
function $() {}
var je = 1
  , _e = 2
  , se = 3
  , J = {};
function P(e, t, n) {
    n || (n = J),
    Object.defineProperties(this, {
        _observer: {
            value: n,
            writable: !0
        },
        _definition: {
            value: De,
            writable: !0
        },
        _duplicate: {
            value: void 0,
            writable: !0
        },
        _duplicates: {
            value: void 0,
            writable: !0
        },
        _indegree: {
            value: NaN,
            writable: !0
        },
        _inputs: {
            value: [],
            writable: !0
        },
        _invalidate: {
            value: $,
            writable: !0
        },
        _module: {
            value: t
        },
        _name: {
            value: null,
            writable: !0
        },
        _outputs: {
            value: new Set,
            writable: !0
        },
        _promise: {
            value: Promise.resolve(void 0),
            writable: !0
        },
        _reachable: {
            value: n !== J,
            writable: !0
        },
        _rejector: {
            value: Ui(this)
        },
        _type: {
            value: e
        },
        _value: {
            value: void 0,
            writable: !0
        },
        _version: {
            value: 0,
            writable: !0
        }
    })
}
Object.defineProperties(P.prototype, {
    _pending: {
        value: Yi,
        writable: !0,
        configurable: !0
    },
    _fulfilled: {
        value: Wi,
        writable: !0,
        configurable: !0
    },
    _rejected: {
        value: Hi,
        writable: !0,
        configurable: !0
    },
    define: {
        value: Fi,
        writable: !0,
        configurable: !0
    },
    delete: {
        value: zi,
        writable: !0,
        configurable: !0
    },
    import: {
        value: Bi,
        writable: !0,
        configurable: !0
    }
});
function ji(e) {
    e._module._runtime._dirty.add(e),
    e._outputs.add(this)
}
function Di(e) {
    e._module._runtime._dirty.add(e),
    e._outputs.delete(this)
}
function De() {
    throw De
}
function S() {
    throw S
}
function Ui(e) {
    return function(t) {
        throw t === S ? t : t === De ? new E(e._name + " is not defined",e._name) : t instanceof Error && t.message ? new E(t.message,e._name) : new E(e._name + " could not be resolved",e._name)
    }
}
function ct(e) {
    return function() {
        throw new E(e + " is defined more than once")
    }
}
function Fi(e, t, n) {
    switch (arguments.length) {
    case 1:
        {
            n = e,
            e = t = null;
            break
        }
    case 2:
        {
            n = t,
            typeof e == "string" ? t = null : (t = e,
            e = null);
            break
        }
    }
    return Ue.call(this, e == null ? null : e + "", t == null ? [] : Ii.call(t, this._module._resolve, this._module), typeof n == "function" ? n : ke(n))
}
function Ue(e, t, n) {
    var r = this._module._scope
      , i = this._module._runtime;
    if (this._inputs.forEach(Di, this),
    t.forEach(ji, this),
    this._inputs = t,
    this._definition = n,
    this._value = void 0,
    n === $ ? i._variables.delete(this) : i._variables.add(this),
    e !== this._name || r.get(e) !== this) {
        var s, o;
        if (this._name)
            if (this._outputs.size)
                r.delete(this._name),
                o = this._module._resolve(this._name),
                o._outputs = this._outputs,
                this._outputs = new Set,
                o._outputs.forEach(function(a) {
                    a._inputs[a._inputs.indexOf(this)] = o
                }, this),
                o._outputs.forEach(i._updates.add, i._updates),
                i._dirty.add(o).add(this),
                r.set(this._name, o);
            else if ((o = r.get(this._name)) === this)
                r.delete(this._name);
            else if (o._type === se)
                o._duplicates.delete(this),
                this._duplicate = void 0,
                o._duplicates.size === 1 && (o = o._duplicates.keys().next().value,
                s = r.get(this._name),
                o._outputs = s._outputs,
                s._outputs = new Set,
                o._outputs.forEach(function(a) {
                    a._inputs[a._inputs.indexOf(s)] = o
                }),
                o._definition = o._duplicate,
                o._duplicate = void 0,
                i._dirty.add(s).add(o),
                i._updates.add(o),
                r.set(this._name, o));
            else
                throw new Error;
        if (this._outputs.size)
            throw new Error;
        e && ((o = r.get(e)) ? o._type === se ? (this._definition = ct(e),
        this._duplicate = n,
        o._duplicates.add(this)) : o._type === _e ? (this._outputs = o._outputs,
        o._outputs = new Set,
        this._outputs.forEach(function(a) {
            a._inputs[a._inputs.indexOf(o)] = this
        }, this),
        i._dirty.add(o).add(this),
        r.set(e, this)) : (o._duplicate = o._definition,
        this._duplicate = n,
        s = new P(se,this._module),
        s._name = e,
        s._definition = this._definition = o._definition = ct(e),
        s._outputs = o._outputs,
        o._outputs = new Set,
        s._outputs.forEach(function(a) {
            a._inputs[a._inputs.indexOf(o)] = s
        }),
        s._duplicates = new Set([this, o]),
        i._dirty.add(o).add(s),
        i._updates.add(o).add(s),
        r.set(e, s)) : r.set(e, this)),
        this._name = e
    }
    return this._version > 0 && ++this._version,
    i._updates.add(this),
    i._compute(),
    this
}
function Bi(e, t, n) {
    return arguments.length < 3 && (n = t,
    t = e),
    Ue.call(this, t + "", [n._resolve(e + "")], de)
}
function zi() {
    return Ue.call(this, null, [], $)
}
function Yi() {
    this._observer.pending && this._observer.pending()
}
function Wi(e) {
    this._observer.fulfilled && this._observer.fulfilled(e, this._name)
}
function Hi(e) {
    this._observer.rejected && this._observer.rejected(e, this._name)
}
function pe(e, t=[]) {
    Object.defineProperties(this, {
        _runtime: {
            value: e
        },
        _scope: {
            value: new Map
        },
        _builtins: {
            value: new Map([["@variable", Lt], ["invalidation", Mt], ["visibility", Pt], ...t])
        },
        _source: {
            value: null,
            writable: !0
        }
    })
}
Object.defineProperties(pe.prototype, {
    _resolve: {
        value: Xi,
        writable: !0,
        configurable: !0
    },
    redefine: {
        value: Vi,
        writable: !0,
        configurable: !0
    },
    define: {
        value: Zi,
        writable: !0,
        configurable: !0
    },
    derive: {
        value: Ki,
        writable: !0,
        configurable: !0
    },
    import: {
        value: Gi,
        writable: !0,
        configurable: !0
    },
    value: {
        value: Ji,
        writable: !0,
        configurable: !0
    },
    variable: {
        value: Qi,
        writable: !0,
        configurable: !0
    },
    builtin: {
        value: eo,
        writable: !0,
        configurable: !0
    }
});
function Vi(e) {
    var t = this._scope.get(e);
    if (!t)
        throw new E(e + " is not defined");
    if (t._type === se)
        throw new E(e + " is defined more than once");
    return t.define.apply(t, arguments)
}
function Zi() {
    var e = new P(je,this);
    return e.define.apply(e, arguments)
}
function Gi() {
    var e = new P(je,this);
    return e.import.apply(e, arguments)
}
function Qi(e) {
    return new P(je,this,e)
}
async function Ji(e) {
    var t = this._scope.get(e);
    if (!t)
        throw new E(e + " is not defined");
    if (t._observer === J) {
        t = this.variable(!0).define([e], de);
        try {
            return await qe(this._runtime, t)
        } finally {
            t.delete()
        }
    } else
        return qe(this._runtime, t)
}
async function qe(e, t) {
    await e._compute();
    try {
        return await t._promise
    } catch (n) {
        if (n === S)
            return qe(e, t);
        throw n
    }
}
function Ki(e, t) {
    const n = new Map
      , r = new Set
      , i = [];
    function s(a) {
        let l = n.get(a);
        return l || (l = new pe(a._runtime,a._builtins),
        l._source = a,
        n.set(a, l),
        i.push([l, a]),
        r.add(a),
        l)
    }
    const o = s(this);
    for (const a of e) {
        const {alias: l, name: c} = typeof a == "object" ? a : {
            name: a
        };
        o.import(c, l ?? c, t)
    }
    for (const a of r)
        for (const [l,c] of a._scope)
            if (c._definition === de) {
                if (a === this && o._scope.has(l))
                    continue;
                const u = c._inputs[0]._module;
                u._source && s(u)
            }
    for (const [a,l] of i)
        for (const [c,u] of l._scope) {
            const f = a._scope.get(c);
            if (!(f && f._type !== _e))
                if (u._definition === de) {
                    const d = u._inputs[0]
                      , p = d._module;
                    a.import(d._name, c, n.get(p) || p)
                } else
                    a.define(c, u._inputs.map(to), u._definition)
        }
    return o
}
function Xi(e) {
    var t = this._scope.get(e), n;
    if (!t)
        if (t = new P(_e,this),
        this._builtins.has(e))
            t.define(e, ke(this._builtins.get(e)));
        else if (this._runtime._builtin._scope.has(e))
            t.import(e, this._runtime._builtin);
        else {
            try {
                n = this._runtime._global(e)
            } catch (r) {
                return t.define(e, Pi(r))
            }
            n === void 0 ? this._scope.set(t._name = e, t) : t.define(e, ke(n))
        }
    return t
}
function eo(e, t) {
    this._builtins.set(e, t)
}
function to(e) {
    return e._name
}
const no = typeof requestAnimationFrame == "function" ? requestAnimationFrame : typeof setImmediate == "function" ? setImmediate : e=>setTimeout(e, 0);
var Lt = {}
  , Mt = {}
  , Pt = {};
function Fe(e=new Ot, t=go) {
    var n = this.module();
    if (Object.defineProperties(this, {
        _dirty: {
            value: new Set
        },
        _updates: {
            value: new Set
        },
        _precomputes: {
            value: [],
            writable: !0
        },
        _computing: {
            value: null,
            writable: !0
        },
        _init: {
            value: null,
            writable: !0
        },
        _modules: {
            value: new Map
        },
        _variables: {
            value: new Set
        },
        _disposed: {
            value: !1,
            writable: !0
        },
        _builtin: {
            value: n
        },
        _global: {
            value: t
        }
    }),
    e)
        for (var r in e)
            new P(_e,n).define(r, [], e[r])
}
Object.defineProperties(Fe, {
    load: {
        value: Mi,
        writable: !0,
        configurable: !0
    }
});
Object.defineProperties(Fe.prototype, {
    _precompute: {
        value: oo,
        writable: !0,
        configurable: !0
    },
    _compute: {
        value: so,
        writable: !0,
        configurable: !0
    },
    _computeSoon: {
        value: ao,
        writable: !0,
        configurable: !0
    },
    _computeNow: {
        value: co,
        writable: !0,
        configurable: !0
    },
    dispose: {
        value: ro,
        writable: !0,
        configurable: !0
    },
    module: {
        value: io,
        writable: !0,
        configurable: !0
    },
    fileAttachments: {
        value: Nr,
        writable: !0,
        configurable: !0
    }
});
function ro() {
    this._computing = Promise.resolve(),
    this._disposed = !0,
    this._variables.forEach(e=>{
        e._invalidate(),
        e._version = NaN
    }
    )
}
function io(e, t=$) {
    let n;
    if (e === void 0)
        return (n = this._init) ? (this._init = null,
        n) : new pe(this);
    if (n = this._modules.get(e),
    n)
        return n;
    this._init = n = new pe(this),
    this._modules.set(e, n);
    try {
        e(this, t)
    } finally {
        this._init = null
    }
    return n
}
function oo(e) {
    this._precomputes.push(e),
    this._compute()
}
function so() {
    return this._computing || (this._computing = this._computeSoon())
}
function ao() {
    return new Promise(no).then(()=>this._disposed ? void 0 : this._computeNow())
}
async function co() {
    var e = [], t, n, r = this._precomputes;
    if (r.length) {
        this._precomputes = [];
        for (const s of r)
            s();
        await lo(3)
    }
    t = new Set(this._dirty),
    t.forEach(function(s) {
        s._inputs.forEach(t.add, t);
        const o = wo(s);
        o > s._reachable ? this._updates.add(s) : o < s._reachable && s._invalidate(),
        s._reachable = o
    }, this),
    t = new Set(this._updates),
    t.forEach(function(s) {
        s._reachable ? (s._indegree = 0,
        s._outputs.forEach(t.add, t)) : (s._indegree = NaN,
        t.delete(s))
    }),
    this._computing = null,
    this._updates.clear(),
    this._dirty.clear(),
    t.forEach(function(s) {
        s._outputs.forEach(fo)
    });
    do {
        for (t.forEach(function(s) {
            s._indegree === 0 && e.push(s)
        }); n = e.pop(); )
            bo(n),
            n._outputs.forEach(i),
            t.delete(n);
        t.forEach(function(s) {
            uo(s) && (vo(s, new E("circular definition")),
            s._outputs.forEach(po),
            t.delete(s))
        })
    } while (t.size);
    function i(s) {
        --s._indegree === 0 && e.push(s)
    }
}
function lo(e=0) {
    let t = Promise.resolve();
    for (let n = 0; n < e; ++n)
        t = t.then(()=>{}
        );
    return t
}
function uo(e) {
    const t = new Set(e._inputs);
    for (const n of t) {
        if (n === e)
            return !0;
        n._inputs.forEach(t.add, t)
    }
    return !1
}
function fo(e) {
    ++e._indegree
}
function po(e) {
    --e._indegree
}
function ho(e) {
    return e._promise.catch(e._rejector)
}
function Ne(e) {
    return new Promise(function(t) {
        e._invalidate = t
    }
    )
}
function mo(e, t) {
    let n = typeof IntersectionObserver == "function" && t._observer && t._observer._node, r = !n, i = $, s = $, o, a;
    return n && (a = new IntersectionObserver(([l])=>(r = l.isIntersecting) && (o = null,
    i())),
    a.observe(n),
    e.then(()=>(a.disconnect(),
    a = null,
    s()))),
    function(l) {
        return r ? Promise.resolve(l) : a ? (o || (o = new Promise((c,u)=>(i = c,
        s = u))),
        o.then(()=>l)) : Promise.reject()
    }
}
function bo(e) {
    e._invalidate(),
    e._invalidate = $,
    e._pending();
    const t = e._value
      , n = ++e._version;
    let r = null;
    const i = e._promise = (e._inputs.length ? Promise.all(e._inputs.map(ho)).then(s) : new Promise(a=>a(e._definition.call(t)))).then(o);
    function s(a) {
        if (e._version !== n)
            throw S;
        for (var l = 0, c = a.length; l < c; ++l)
            switch (a[l]) {
            case Mt:
                {
                    a[l] = r = Ne(e);
                    break
                }
            case Pt:
                {
                    r || (r = Ne(e)),
                    a[l] = mo(r, e);
                    break
                }
            case Lt:
                {
                    a[l] = e;
                    break
                }
            }
        return e._definition.apply(t, a)
    }
    function o(a) {
        if (e._version !== n)
            throw S;
        return Li(a) ? ((r || Ne(e)).then(yo(a)),
        _o(e, n, a)) : a
    }
    i.then(a=>{
        e._value = a,
        e._fulfilled(a)
    }
    , a=>{
        a !== S && (e._value = void 0,
        e._rejected(a))
    }
    )
}
function _o(e, t, n) {
    const r = e._module._runtime;
    let i;
    function s(l) {
        return new Promise(c=>c(n.next(i))).then(({done: c, value: u})=>c ? void 0 : Promise.resolve(u).then(l))
    }
    function o() {
        const l = s(c=>{
            if (e._version !== t)
                throw S;
            return i = c,
            a(c, l).then(()=>r._precompute(o)),
            e._fulfilled(c),
            c
        }
        );
        l.catch(c=>{
            c === S || e._version !== t || (a(void 0, l),
            e._rejected(c))
        }
        )
    }
    function a(l, c) {
        return e._value = l,
        e._promise = c,
        e._outputs.forEach(r._updates.add, r._updates),
        r._compute()
    }
    return s(l=>{
        if (e._version !== t)
            throw S;
        return i = l,
        r._precompute(o),
        l
    }
    )
}
function vo(e, t) {
    e._invalidate(),
    e._invalidate = $,
    e._pending(),
    ++e._version,
    e._indegree = NaN,
    (e._promise = Promise.reject(t)).catch($),
    e._value = void 0,
    e._rejected(t)
}
function yo(e) {
    return function() {
        e.return()
    }
}
function wo(e) {
    if (e._observer !== J)
        return !0;
    var t = new Set(e._outputs);
    for (const n of t) {
        if (n._observer !== J)
            return !0;
        n._outputs.forEach(t.add, t)
    }
    return !1
}
function go(e) {
    return window[e]
}
export {Ve as I, Ot as L, Fe as R, Co as _, No as j};
