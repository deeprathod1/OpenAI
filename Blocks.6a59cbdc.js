import {d as me, i as Te, e as N, j as _e, h as De, g as ee, b as X, f as Wt, k as Kt} from "./Footer.e612ddc8.js";
import {_ as le, c as he} from "./usePageTransition.0d7a0e1d.js";
import {V as Jt, y as x, r as D, g as te, S as xe, o, c as r, d as a, b as e, t as L, J as se, a as w, m as p, W as Fe, X as ve, Y as ce, Z as Ce, _ as Yt, $ as Xt, F as S, G as A, I as ke, k as y, j as Z, h as V, i as T, e as ne, v as Re, a0 as Qt, a1 as m, A as lt, Q as U, x as ct, p as we, a2 as ye, C as ut, H as dt, a3 as Zt, w as pt, O as mt, a4 as eo, a5 as to, a6 as oo, f as io, q as no, a7 as ro} from "./entry.d1b74521.js";
import {_ as _t} from "./BlockTimedTabs.vue.683bc8fd.js";
import {_ as oe, a as ht} from "./Listing.f43f6a93.js";
import {s as gt} from "./slugify.068b7bc9.js";
import {u as ao, _ as so} from "./useResourceIndexData.df29b123.js";
import {a as lo} from "./useHeadSeo.47db476e.js";
const co = "footnote"
  , uo = "reference"
  , po = ()=>{
    const t = Jt("citations", ()=>({
        resources: [],
        footnotes: {},
        references: {}
    }))
      , i = u=>{
        t.value.resources = u,
        t.value.footnotes = {},
        t.value.references = {}
    }
      , n = u=>t.value.resources.find(d=>d.selector === u)
      , s = u=>{
        var g, b;
        const d = n(u);
        if (!d)
            return !1;
        t.value.footnotes = t.value.footnotes || {},
        t.value.references = t.value.references || {};
        let _, h;
        if (d.scope === co) {
            const v = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            _ = v[Object.keys(t.value.footnotes).length % v.length],
            h = ((g = t.value.footnotes[_]) == null ? void 0 : g.backlinks) || [],
            h.push(_),
            t.value.footnotes[_] = {
                footnote: d,
                backlinks: h
            }
        }
        return d.scope === uo && (_ = Object.keys(t.value.references).find(v=>{
            var k;
            return ((k = t.value.references[v].footnote) == null ? void 0 : k.id) === d.id
        }
        ),
        typeof _ > "u" && (_ = Object.keys(t.value.references).length + 1),
        h = ((b = t.value.references[_]) == null ? void 0 : b.backlinks) || [],
        h.push(_ + "-" + h.length),
        t.value.references[_] = {
            footnote: d,
            backlinks: h
        }),
        {
            footnote: d,
            id: _,
            backlink: h[h.length - 1]
        }
    }
      , c = x(()=>{
        const u = t.value.footnotes || {};
        return Object.keys(u).length === 0 && u.constructor === Object ? [] : Object.keys(u).map(d=>({
            id: d,
            text: u[d].footnote.description,
            richText: u[d].footnote.richTextDescription,
            backlinks: u[d].backlinks
        }))
    }
    )
      , l = x(()=>{
        const u = t.value.references || {};
        return Object.keys(u).length === 0 && u.constructor === Object ? [] : Object.keys(u).map(d=>({
            id: d,
            text: u[d].footnote.description,
            richText: u[d].footnote.richTextDescription,
            backlinks: u[d].backlinks
        }))
    }
    );
    return {
        citations: t,
        footnotes: c,
        references: l,
        addFootnote: s,
        setCitations: i
    }
}
;
function mo(t, i, n=96) {
    if (i) {
        let s;
        try {
            s = document.querySelector(i)
        } catch {
            return
        }
        if (s) {
            const c = document.documentElement.scrollTop + s.getBoundingClientRect().top;
            location.hash === i && (t.preventDefault(),
            window.dispatchEvent(new Event("hashchange"))),
            window.addEventListener("hashchange", l=>{
                window.scrollTo({
                    top: c - n,
                    behavior: "smooth"
                })
            }
            )
        }
    }
}
const _o = ["data-footnote"]
  , ho = {
    class: "inline-block min-w-[1.5ch] indent-0 not-italic [em_&]:indent-2"
}
  , go = ["aria-describedby", "href", "id"]
  , bo = {
    key: 1,
    class: "error"
}
  , vo = {
    class: "pl-32 lg:pl-48 relative block not-italic"
}
  , yo = {
    "aria-hidden": "true",
    class: "absolute top-0 left-0 block"
}
  , fo = {
    __name: "Footnote",
    props: {
        selector: String,
        uuid: String
    },
    setup(t) {
        const i = t
          , {addFootnote: n} = po()
          , s = n(i.selector)
          , c = D(null)
          , l = D(null)
          , u = D(null);
        function d() {
            l.value && (u.value = l.value.offsetHeight)
        }
        return te(()=>{
            let _ = Array.from(c.value.parentNode.childNodes);
            _ = _.filter(b=>b.nodeValue || b.nodeType === 1);
            const h = _.indexOf(c.value)
              , g = _[h + 1];
            if (c.value && g && g instanceof Element && g.classList.contains("ui-fn") && c.value.querySelector("sup").insertAdjacentText("beforeend", ","),
            c.value) {
                const b = Array.from(c.value.closest(".ui-block").querySelectorAll("[data-footnote]")).at(-1);
                b && b === c.value && l.value && l.value.classList.add("mb-[var(--mb)]")
            }
            d(),
            window.addEventListener("resize", d)
        }
        ),
        xe(()=>{
            window.removeEventListener("resize", d)
        }
        ),
        (_,h)=>{
            const g = me;
            return o(),
            r("span", {
                class: "ui-fn",
                "data-footnote": e(s) && e(s).footnote && e(s).footnote.scope === "footnote" ? "" : null,
                ref_key: "footnote",
                ref: c
            }, [a("sup", ho, [e(s) && e(s).footnote ? (o(),
            r("a", {
                key: 0,
                "aria-describedby": `${e(s).footnote.scope}sTitle`,
                href: `#fn-${e(s).id}`,
                id: `ref-${e(s).backlink}`,
                class: "target:bg-[color:var(--background-interactive-primary-hover)] decoration-transparent",
                onClick: h[0] || (h[0] = b=>e(mo)(b, `#fn-${e(s).backlink}`))
            }, L(e(s).id), 9, go)) : (o(),
            r("span", bo, "[^" + L(t.selector) + "]", 1))]), e(s) && e(s).footnote && e(s).footnote.description && e(s).footnote.scope === "footnote" ? (o(),
            r("span", {
                key: 0,
                "aria-hidden": "true",
                class: "f-reference-1 xs:hidden md:block float-right clear-right md:w-2-cols md:-mr-2-cols lg:pl-1-cols lg:w-4-cols lg:-mr-4-cols pt-[calc(-1.4em_-_2px)] pb-16",
                ref_key: "content",
                ref: l,
                style: se(`--mb:-${e(u)}px`)
            }, [a("span", vo, [a("span", yo, "[" + L(e(s).id) + "]", 1), w(g, {
                class: "ui-richtext block",
                content: e(s).footnote.richTextDescription,
                options: e(bt)
            }, null, 8, ["content", "options"])])], 4)) : p("", !0)], 8, _o)
        }
    }
}
  , ko = ["innerHTML"]
  , wo = {
    __name: "Math",
    props: {
        math: String
    },
    setup(t) {
        const i = t;
        let n;
        try {
            n = Fe.renderToString(i.math)
        } catch (s) {
            if (s instanceof Fe.ParseError)
                n = ("Error in LaTeX '" + i.math + "': " + s.message).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            else
                throw s
        }
        return (s,c)=>e(n) ? (o(),
        r("span", {
            key: 0,
            innerHTML: e(n)
        }, null, 8, ko)) : p("", !0)
    }
}
  , bt = {
    a: ({props: t={}, children: i=[]})=>({
        type: "a",
        props: {
            ...t
        },
        children: i
    }),
    "shortcode-footnote": ({props: t={}, children: i=[]})=>({
        type: fo,
        props: {
            ...t
        },
        children: i
    }),
    "shortcode-math": ({props: t={}, children: i=[]})=>({
        type: wo,
        props: {
            ...t
        },
        children: i
    })
};
function vt(t) {
    var i = typeof t;
    return t != null && (i == "object" || i == "function")
}
var To = "[object AsyncFunction]"
  , xo = "[object Function]"
  , Eo = "[object GeneratorFunction]"
  , So = "[object Proxy]";
function yt(t) {
    if (!vt(t))
        return !1;
    var i = ve(t);
    return i == xo || i == Eo || i == To || i == So
}
var Io = ce["__core-js_shared__"];
const Se = Io;
var Ne = function() {
    var t = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : ""
}();
function Lo(t) {
    return !!Ne && Ne in t
}
var Po = Function.prototype
  , $o = Po.toString;
function ue(t) {
    if (t != null) {
        try {
            return $o.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Ao = /[\\^$.*+?()[\]{}|]/g
  , Oo = /^\[object .+?Constructor\]$/
  , Do = Function.prototype
  , Co = Object.prototype
  , Ro = Do.toString
  , Vo = Co.hasOwnProperty
  , qo = RegExp("^" + Ro.call(Vo).replace(Ao, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Mo(t) {
    if (!vt(t) || Lo(t))
        return !1;
    var i = yt(t) ? qo : Oo;
    return i.test(ue(t))
}
function Bo(t, i) {
    return t == null ? void 0 : t[i]
}
function fe(t, i) {
    var n = Bo(t, i);
    return Mo(n) ? n : void 0
}
var jo = fe(ce, "WeakMap");
const Le = jo;
var Go = 9007199254740991;
function ft(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Go
}
function Fo(t) {
    return t != null && ft(t.length) && !yt(t)
}
var No = Object.prototype;
function kt(t) {
    var i = t && t.constructor
      , n = typeof i == "function" && i.prototype || No;
    return t === n
}
var Ho = "[object Arguments]";
function He(t) {
    return Ce(t) && ve(t) == Ho
}
var wt = Object.prototype
  , zo = wt.hasOwnProperty
  , Uo = wt.propertyIsEnumerable
  , Wo = He(function() {
    return arguments
}()) ? He : function(t) {
    return Ce(t) && zo.call(t, "callee") && !Uo.call(t, "callee")
}
;
const Ko = Wo;
function Jo() {
    return !1
}
var Tt = typeof exports == "object" && exports && !exports.nodeType && exports
  , ze = Tt && typeof module == "object" && module && !module.nodeType && module
  , Yo = ze && ze.exports === Tt
  , Ue = Yo ? ce.Buffer : void 0
  , Xo = Ue ? Ue.isBuffer : void 0
  , Qo = Xo || Jo;
const Zo = Qo;
var ei = "[object Arguments]"
  , ti = "[object Array]"
  , oi = "[object Boolean]"
  , ii = "[object Date]"
  , ni = "[object Error]"
  , ri = "[object Function]"
  , ai = "[object Map]"
  , si = "[object Number]"
  , li = "[object Object]"
  , ci = "[object RegExp]"
  , ui = "[object Set]"
  , di = "[object String]"
  , pi = "[object WeakMap]"
  , mi = "[object ArrayBuffer]"
  , _i = "[object DataView]"
  , hi = "[object Float32Array]"
  , gi = "[object Float64Array]"
  , bi = "[object Int8Array]"
  , vi = "[object Int16Array]"
  , yi = "[object Int32Array]"
  , fi = "[object Uint8Array]"
  , ki = "[object Uint8ClampedArray]"
  , wi = "[object Uint16Array]"
  , Ti = "[object Uint32Array]"
  , G = {};
G[hi] = G[gi] = G[bi] = G[vi] = G[yi] = G[fi] = G[ki] = G[wi] = G[Ti] = !0;
G[ei] = G[ti] = G[mi] = G[oi] = G[_i] = G[ii] = G[ni] = G[ri] = G[ai] = G[si] = G[li] = G[ci] = G[ui] = G[di] = G[pi] = !1;
function xi(t) {
    return Ce(t) && ft(t.length) && !!G[ve(t)]
}
function Ei(t) {
    return function(i) {
        return t(i)
    }
}
var xt = typeof exports == "object" && exports && !exports.nodeType && exports
  , be = xt && typeof module == "object" && module && !module.nodeType && module
  , Si = be && be.exports === xt
  , Ie = Si && Yt.process
  , Ii = function() {
    try {
        var t = be && be.require && be.require("util").types;
        return t || Ie && Ie.binding && Ie.binding("util")
    } catch {}
}();
const We = Ii;
var Ke = We && We.isTypedArray
  , Li = Ke ? Ei(Ke) : xi;
const Pi = Li;
function $i(t, i) {
    return function(n) {
        return t(i(n))
    }
}
var Ai = $i(Object.keys, Object);
const Oi = Ai;
var Di = Object.prototype
  , Ci = Di.hasOwnProperty;
function Ri(t) {
    if (!kt(t))
        return Oi(t);
    var i = [];
    for (var n in Object(t))
        Ci.call(t, n) && n != "constructor" && i.push(n);
    return i
}
var Vi = fe(ce, "Map");
const Pe = Vi;
var qi = fe(ce, "DataView");
const $e = qi;
var Mi = fe(ce, "Promise");
const Ae = Mi;
var Bi = fe(ce, "Set");
const Oe = Bi;
var Je = "[object Map]"
  , ji = "[object Object]"
  , Ye = "[object Promise]"
  , Xe = "[object Set]"
  , Qe = "[object WeakMap]"
  , Ze = "[object DataView]"
  , Gi = ue($e)
  , Fi = ue(Pe)
  , Ni = ue(Ae)
  , Hi = ue(Oe)
  , zi = ue(Le)
  , ae = ve;
($e && ae(new $e(new ArrayBuffer(1))) != Ze || Pe && ae(new Pe) != Je || Ae && ae(Ae.resolve()) != Ye || Oe && ae(new Oe) != Xe || Le && ae(new Le) != Qe) && (ae = function(t) {
    var i = ve(t)
      , n = i == ji ? t.constructor : void 0
      , s = n ? ue(n) : "";
    if (s)
        switch (s) {
        case Gi:
            return Ze;
        case Fi:
            return Je;
        case Ni:
            return Ye;
        case Hi:
            return Xe;
        case zi:
            return Qe
        }
    return i
}
);
const Ui = ae;
var Wi = "[object Map]"
  , Ki = "[object Set]"
  , Ji = Object.prototype
  , Yi = Ji.hasOwnProperty;
function et(t) {
    if (t == null)
        return !0;
    if (Fo(t) && (Xt(t) || typeof t == "string" || typeof t.splice == "function" || Zo(t) || Pi(t) || Ko(t)))
        return !t.length;
    var i = Ui(t);
    if (i == Wi || i == Ki)
        return !t.size;
    if (kt(t))
        return !Ri(t).length;
    for (var n in t)
        if (Yi.call(t, n))
            return !1;
    return !0
}
const Xi = {
    name: "Accordion",
    props: {
        bold: {
            type: Boolean,
            default: !1
        },
        items: {
            type: Array,
            default: ()=>[]
        },
        large: {
            type: Boolean,
            default: !1
        },
        richtext: {
            type: Boolean,
            default: !0
        },
        spacing: {
            type: Boolean,
            default: !0
        }
    }
}
  , Qi = ["role"];
function Zi(t, i, n, s, c, l) {
    const u = Te;
    return n.items.length ? (o(),
    r("ul", {
        key: 0,
        class: y(["list-none", {
            "mt-[42px]": n.spacing
        }, {
            "border-b": !n.large
        }]),
        role: n.items.length === 1 ? "presentation" : null
    }, [(o(!0),
    r(S, null, A(n.items, (d,_)=>(o(),
    r("li", {
        key: _
    }, [w(u, ke(d, {
        bold: n.bold,
        index: _,
        itemsCount: n.items.length,
        large: n.large,
        richtext: n.richtext
    }), null, 16, ["bold", "index", "itemsCount", "large", "richtext"])]))), 128))], 10, Qi)) : p("", !0)
}
const Et = le(Xi, [["render", Zi]])
  , pe = t=>{
    let i = t == null ? void 0 : t.blockType;
    return i != null && i.endsWith("_tr") && (i = i.slice(0, -3)),
    i
}
;
function de(t, i) {
    const n = pe(i)
      , s = t.find(l=>l.position === i.position - 1)
      , c = pe(s);
    if (s && c === "heading")
        switch (s.content.level) {
        case 1:
            return "mt-spacing-6";
        case 2:
            return "mt-spacing-5";
        case 3:
            return "mt-spacing-4";
        default:
            return "mt-spacing-7"
        }
    else
        return s && c === "text" ? s.content.html.replaceAll(/<\/?[^>]+(>|$)/gi, "").slice(-1) === "​" ? "mt-spacing-6" : "mt-spacing-7" : s && (c === "image" || c === "video") && (n === "image" || n === "video") ? "mt-spacing-6" : "mt-spacing-7"
}
const en = "accordion"
  , tn = "accordion_tr"
  , on = "accordion-item"
  , nn = "accordion-item_tr"
  , rn = "carousel"
  , an = "carousel_tr"
  , sn = "code-example"
  , ln = "code-example-simple"
  , tt = "code-snippet"
  , cn = "demo-with-tabs"
  , un = "faq"
  , dn = "faq-item"
  , pn = "focus-areas"
  , mn = "focus-area"
  , _n = "focus-area-listing-item"
  , hn = "feature-1up"
  , gn = "feature-1up-article"
  , bn = "feature-link"
  , vn = "form"
  , yn = "form_tr"
  , fn = "heading"
  , kn = "heading_tr"
  , wn = "heading-with-text"
  , Tn = "heading-with-text_tr"
  , xn = "image"
  , En = "interactive"
  , Sn = "links"
  , In = "links_tr"
  , Ln = "listing"
  , Pn = "listing-card"
  , $n = "listing-card-item"
  , An = "listing-customer-stories"
  , On = "listing-latest"
  , Dn = "listing-latest-publications"
  , Cn = "listing-jobs"
  , Rn = "listing-mixed"
  , Vn = "listing-mixed-item"
  , qn = "listing-products"
  , Mn = "listing-research"
  , Bn = "listing-series"
  , jn = "listing-bullets"
  , Gn = "listing-bullets-item"
  , Fn = "logo-suite"
  , Nn = "logo-carousel"
  , Hn = "math"
  , zn = "quote"
  , Un = "quote_tr"
  , Wn = "pre-footer"
  , Kn = "pricing"
  , Jn = "pricing-plan-comparison"
  , Yn = "pricing-plan-comparison-item"
  , Xn = "pricing-item"
  , Qn = "pricing-table"
  , Zn = "pricing-table-row"
  , er = "series-index"
  , tr = "statement"
  , or = "statement_tr"
  , ir = "statistics"
  , nr = "statistics-item"
  , rr = "table_tr"
  , ar = "table-row_tr"
  , sr = "table"
  , lr = "table-row"
  , cr = "text"
  , ur = "text_tr"
  , dr = "text-with-title"
  , pr = "text-with-title_tr"
  , mr = "testimonial"
  , _r = "testimonial_tr"
  , hr = "testimonial-cards"
  , gr = "testimonial-card"
  , br = "timed-tabs"
  , vr = "timed-tab-item"
  , yr = "timeline"
  , fr = "timeline_tr"
  , kr = "two-up-description"
  , wr = "video"
  , Tr = "video_tr"
  , xr = {
    class: "container"
}
  , Er = {
    class: "cols-container"
}
  , Sr = {
    class: "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-6-cols"
}
  , Ir = {
    __name: "BlockAccordion",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>{
            var s;
            return (s = i.block.blocks) == null ? void 0 : s.default.filter(c=>c.blockType === on || c.blockType === nn).map(c=>({
                title: c.content.title,
                content: c.content.text
            }))
        }
        );
        return (s,c)=>{
            const l = Et;
            return o(),
            r("div", {
                class: y(e(de)(t.blocks, t.block))
            }, [a("div", xr, [a("div", Er, [a("div", Sr, [w(l, {
                items: e(n),
                large: !1,
                richtext: !0,
                spacing: !1
            }, null, 8, ["items"])])])])], 2)
        }
    }
};
function Lr(t) {
    return 1 - Math.pow(1 - t, 3)
}
const Pr = 250
  , ot = ({el: t, offset: i, duration: n=Pr, callback: s=()=>{}
})=>{
    const c = t.scrollLeft
      , l = i - c
      , u = getComputedStyle(t).scrollSnapType;
    t.style.scrollSnapType = "none";
    let d;
    const _ = h=>{
        d || (d = h);
        const g = (h - d) / n
          , b = Lr(g) * l + c;
        t.scrollLeft = b,
        g < 1 ? requestAnimationFrame(_) : (s(),
        t.style.scrollSnapType = u)
    }
    ;
    requestAnimationFrame(_)
}
;
let it = 0;
const $r = {
    props: {
        items: {
            type: Array,
            required: !0,
            default: ()=>[]
        },
        modifier: {
            type: String,
            default: "default",
            validator(t) {
                return ["default", "full", "multi"].includes(t)
            }
        },
        ratio: {
            type: String,
            default: "1x1",
            validator(t) {
                return ["1x1", "16x9", "3x2", "3x4", "4x5"].includes(t)
            }
        },
        title: {
            type: [null, String],
            default: null,
            required: !0
        }
    },
    data() {
        return it += 1,
        {
            currentIndex: 0,
            scrollTimeout: null,
            nextEnabled: !0,
            prevEnabled: !1,
            containerWidth: null,
            visibleScrollArea: 0,
            scrollProgress: 0,
            scrollWidth: null,
            mouseDown: !1
        }
    },
    mounted() {
        window.addEventListener("keydown", this.handleKeydown),
        this.isMulti && (this.resizeObserver = new ResizeObserver(t=>{
            requestAnimationFrame(()=>{
                this.containerWidth = t[0].contentRect.width;
                const {offsetWidth: i, scrollWidth: n} = this.$refs.scrollRef;
                this.visibleScrollArea = i / n,
                this.scrollWidth = n
            }
            )
        }
        ),
        this.resizeObserver.observe(this.$refs.scrollRef))
    },
    beforeUnmount() {
        var t;
        window.removeEventListener("keydown", this.handleKeydown),
        (t = this.resizeObserver) == null || t.disconnect()
    },
    computed: {
        isFullWidth() {
            return this.modifier !== "default"
        },
        isMulti() {
            return this.modifier === "multi"
        },
        headingId() {
            return `carouselHeading-${it}`
        },
        hasCaption() {
            return this.items.some(t=>t.caption)
        }
    },
    methods: {
        handlePrevious() {
            this.prevEnabled && this.goToIndex(this.currentIndex - 1)
        },
        handleNext() {
            this.nextEnabled && this.goToIndex(this.currentIndex + 1)
        },
        goToIndex(t) {
            const i = Math.min(Math.max(t, 0), this.items.length - 1);
            if (this.currentIndex === i)
                return;
            this.currentIndex = i;
            let n;
            this.isMulti ? n = Math.min(this.$refs.items[i].offsetLeft, this.scrollWidth - this.containerWidth) : n = this.$refs.items[i].offsetLeft,
            ot({
                el: this.$refs.scrollRef,
                offset: n,
                duration: 400
            })
        },
        handleScroll() {
            if (this.scrollTimeout && clearTimeout(this.scrollTimeout),
            this.isMulti) {
                const {scrollLeft: t, scrollWidth: i, offsetWidth: n} = this.$refs.scrollRef;
                this.scrollProgress = t / (i - n)
            }
            this.scrollTimeout = setTimeout(()=>{
                if (this.isMulti) {
                    this.prevEnabled = this.$refs.scrollRef.scrollLeft > 0,
                    this.nextEnabled = this.$refs.scrollRef.scrollLeft < this.$refs.scrollRef.scrollWidth - this.$refs.scrollRef.clientWidth;
                    const t = this.$refs.items.findIndex(i=>i.offsetLeft >= this.$refs.scrollRef.scrollLeft && i.offsetLeft <= this.$refs.scrollRef.scrollLeft + this.$refs.items[0].offsetWidth);
                    this.currentIndex = t
                } else {
                    const {scrollLeft: t, clientWidth: i} = this.$refs.scrollRef
                      , n = Math.round(t / i);
                    this.currentIndex = n,
                    this.prevEnabled = n > 0,
                    this.nextEnabled = n < this.$refs.items.length - 1
                }
            }
            , 100)
        },
        handleKeydown(t) {
            t.key === "ArrowLeft" ? this.handlePrevious() : t.key === "ArrowRight" && this.handleNext()
        },
        handleMouseDown(t) {
            t.button === 0 && (this.mouseDown = !0,
            this.mouseDownX = t.clientX)
        },
        handleMouseLeave() {
            this.mouseDown && this.scrollToClosestSlide()
        },
        handleMouseMove(t) {
            if (!this.mouseDown)
                return;
            const {scrollLeft: i} = this.$refs.scrollRef
              , {clientX: n} = t
              , s = this.mouseDownX - n;
            this.$refs.scrollRef.scrollLeft = i + s,
            this.mouseDownX = n
        },
        handleMouseUp() {
            this.scrollToClosestSlide()
        },
        scrollToClosestSlide() {
            const t = this.$refs.scrollRef.scrollLeft;
            let i = -1
              , n = 1 / 0;
            this.$refs.items.forEach((s,c)=>{
                const l = Math.abs(s.offsetLeft - t);
                l < n && (n = l,
                i = c)
            }
            ),
            i === -1 ? this.mouseDown = !1 : ot({
                el: this.$refs.scrollRef,
                offset: this.$refs.items[i].offsetLeft,
                duration: 400,
                callback: ()=>{
                    this.mouseDown = !1
                }
            })
        }
    }
}
  , Ar = {
    key: 0,
    class: "w-full select-none"
}
  , Or = {
    class: "relative"
}
  , Dr = {
    class: "bg-[#000]"
}
  , Cr = ["innerHTML"]
  , Rr = {
    key: 0,
    class: "h-2 bg-[var(--border-secondary)] mt-24 w-full relative overflow-hidden"
}
  , Vr = {
    key: 1,
    class: "absolute bottom-0 right-0 left-0 h-full pointer-events-none"
}
  , qr = {
    class: "relative z-40 ml-auto mt-12 xs:w-2-cols md:w-2-cols lg:w-2-cols"
}
  , Mr = ["aria-labelledby"]
  , Br = ["onClick"]
  , jr = {
    class: "sr-only"
};
function Gr(t, i, n, s, c, l) {
    const u = N
      , d = _e
      , _ = De
      , h = ee;
    return n.items.length ? (o(),
    r("div", Ar, [a("div", {
        class: y({
            "cols-container": !l.isFullWidth
        })
    }, [a("div", {
        class: y(["group relative", {
            "w-6-cols lg:ml-2-cols": !l.isFullWidth
        }]),
        onMouseleave: i[4] || (i[4] = (...g)=>l.handleMouseLeave && l.handleMouseLeave(...g))
    }, [w(u, {
        id: l.headingId,
        level: "2",
        title: n.title,
        class: "sr-only"
    }, null, 8, ["id", "title"]), a("div", Or, [a("div", {
        class: y(["absolute top-1/2 z-30 h-44 w-48", {
            "opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100": l.isMulti,
            "translate-y-[calc(-50%-12px)]": l.hasCaption,
            "-translate-y-1/2": !l.hasCaption
        }])
    }, [w(_, {
        ref: "prevBtn",
        "aria-label": "Previous slide",
        isDisabled: !c.prevEnabled,
        classes: `flex justify-center items-center h-full w-full f-ui-1 !rounded-l-none ${c.prevEnabled ? "transition-opacity" : "disabled pointer-events-none opacity-0 focus-visible:opacity-100"}`,
        onClick: l.handlePrevious
    }, {
        default: Z(()=>[w(d, {
            name: "ChevronLeft400",
            size: "text",
            "aria-hidden": "true",
            class: "a-icon--no-align flex justify-center items-center"
        })]),
        _: 1
    }, 8, ["isDisabled", "classes", "onClick"])], 2), a("div", {
        class: y(["relative w-full overflow-auto no-scrollbar", {
            "snap-x snap-mandatory": !c.mouseDown
        }]),
        onScroll: i[0] || (i[0] = (...g)=>l.handleScroll && l.handleScroll(...g)),
        onMousedown: i[1] || (i[1] = (...g)=>l.handleMouseDown && l.handleMouseDown(...g)),
        onMousemove: i[2] || (i[2] = (...g)=>l.handleMouseMove && l.handleMouseMove(...g)),
        onMouseup: i[3] || (i[3] = (...g)=>l.handleMouseUp && l.handleMouseUp(...g)),
        ref: "scrollRef"
    }, [a("ul", {
        class: y(["flex relative", {
            "pointer-events-none": c.mouseDown
        }]),
        ref: "listRef",
        style: se({
            width: l.isMulti ? c.scrollWidth + "px" : "auto"
        })
    }, [(o(!0),
    r(S, null, A(n.items, (g,b)=>(o(),
    r("li", {
        class: y(["shrink-0 w-full flex flex-col snap-start snap-always", {
            "max-w-[66.66667vw] md:max-w-[calc(0.4*(100vw-72px))]": l.isMulti,
            "mr-16 lg:mr-24": l.isMulti && b !== n.items.length - 1,
            "snap-mandatory": !l.isMulti
        }]),
        ref_for: !0,
        ref: "items"
    }, [a("div", Dr, [w(h, {
        image: g.image,
        ratio: n.ratio,
        class: "block",
        objectContain: ""
    }, null, 8, ["image", "ratio"])]), g.caption ? (o(),
    r("div", {
        key: 0,
        class: y(["f-caption-1 mt-8 ui-richtext transition-opacity duration-300 pointer-events-auto", {
            "opacity-0": !l.isMulti && c.currentIndex !== b,
            "opacity-100": !l.isMulti && c.currentIndex === b
        }]),
        innerHTML: g.caption
    }, null, 10, Cr)) : p("", !0)], 2))), 256))], 6)], 34), a("div", {
        class: y(["absolute right-0 z-30 m-0 h-44 w-48 top-1/2", {
            "opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100": l.isMulti,
            "translate-y-[calc(-50%-12px)]": l.hasCaption,
            "-translate-y-1/2": !l.hasCaption
        }])
    }, [w(_, {
        ref: "nextBtn",
        "aria-label": "Next slide",
        isDisabled: !c.nextEnabled,
        classes: `
              h-full w-full flex justify-center items-center f-ui-1 !rounded-r-none ${c.nextEnabled ? "transition-opacity" : "disabled pointer-events-none opacity-0 focus-visible:opacity-100"}
            `,
        onClick: l.handleNext
    }, {
        default: Z(()=>[w(d, {
            name: "ChevronRight400",
            size: "text",
            "aria-hidden": "true",
            class: "a-icon--no-align flex justify-center items-center"
        })]),
        _: 1
    }, 8, ["isDisabled", "classes", "onClick"])], 2)]), l.isMulti ? (o(),
    r("div", Rr, [a("div", {
        class: "bg-[#000] h-full absolute top-0 left-0",
        style: se({
            width: `${c.visibleScrollArea * 100}%`,
            transform: `translateX(${c.scrollProgress * ((1 - c.visibleScrollArea) * c.containerWidth)}px)`
        })
    }, null, 4)])) : (o(),
    r("div", Vr, [a("div", {
        class: y(["h-full ratio xs:overflow-visible", `ratio-${n.ratio}`])
    }, [a("div", qr, [w(u, {
        id: `dots_${l.headingId}`,
        ref: "dots",
        level: "2",
        title: `${n.title} Navigation`,
        class: "sr-only"
    }, null, 8, ["id", "title"]), a("ul", {
        "aria-labelledby": `dots_${l.headingId}`,
        class: "flex flex-row justify-end pointer-events-auto"
    }, [(o(!0),
    r(S, null, A(n.items, (g,b)=>(o(),
    r("li", {
        key: b,
        class: "ml-8"
    }, [a("button", {
        class: y(`ui-button relative m-0 block h-8 w-8 rounded-full border border-primary p-0 after:absolute after:left-0 after:top-0 after:block after:h-16 after:w-16 after:-translate-x-4 after:-translate-y-5 after:content-[''] before:rounded-full ${c.currentIndex === b ? "bg-inverse" : "bg-primary"}`),
        onClick: v=>l.goToIndex(b)
    }, [a("span", jr, "Go to slide " + L(b + 1), 1)], 10, Br)]))), 128))], 8, Mr)])], 2)]))], 34)], 2)])) : p("", !0)
}
const Ee = le($r, [["render", Gr]])
  , Fr = {
    class: "container"
}
  , Nr = {
    __name: "BlockCarousel",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>i.block.content.aspectRatio)
          , s = x(()=>{
            var c, l;
            return (l = (c = i.block.media) == null ? void 0 : c.carousel) == null ? void 0 : l.map(u=>u.default).map(u=>({
                image: {
                    src: u.src,
                    alt: u.alt
                },
                caption: u.caption
            }))
        }
        );
        return (c,l)=>{
            const u = Ee;
            return o(),
            r("div", Fr, [w(u, {
                items: e(s),
                modifier: t.block.content.display !== "single-item" ? "multi" : void 0,
                ratio: e(n) ? e(n).replace(":", "x") : "1x1",
                title: t.block.content.title,
                class: "mt-spacing-7"
            }, null, 8, ["items", "modifier", "ratio", "title"])])
        }
    }
}
  , Hr = {
    class: "mt-spacing-7"
}
  , zr = {
    class: "container"
}
  , Ur = {
    class: "cols-container"
}
  , Wr = {
    class: "xs:w-6-cols md:w-4-cols lg:w-3-cols"
}
  , Kr = {
    key: 1,
    class: "f-body-1 mt-spacing-3 first:mt-0"
}
  , Jr = {
    key: 2,
    class: "mt-spacing-4"
}
  , Yr = ["aria-label"]
  , Xr = {
    key: 0,
    class: "mt-40 md:mt-0 xs:w-6-cols md:w-4-cols lg:w-6-cols lg:ml-3-cols"
}
  , Qr = {
    __name: "BlockCodeExample",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>i.block.content.lang ?? null)
          , c = x(()=>{
            var l, u;
            return (u = (l = i.block.blocks) == null ? void 0 : l.default) == null ? void 0 : u.filter(d=>d.childKey === "code-link").map(d=>n.blocks.listingLink(d))
        }
        );
        return (l,u)=>{
            const d = N
              , _ = X;
            return o(),
            r("div", Hr, [a("div", zr, [a("div", Ur, [a("div", Wr, [t.block.content.title ? (o(),
            T(d, {
                key: 0,
                class: "f-heading-3",
                title: t.block.content.title
            }, null, 8, ["title"])) : p("", !0), t.block.content.blurb ? (o(),
            r("div", Kr, L(t.block.content.blurb), 1)) : p("", !0), e(c) && e(c).length ? (o(),
            r("div", Jr, [a("ul", {
                "aria-label": `${t.block.content.title} links`
            }, [(o(!0),
            r(S, null, A(e(c), (h,g)=>(o(),
            r("li", {
                key: g,
                class: "mt-4 first:mt-0"
            }, [w(_, {
                label: h.text || h.label,
                url: h.url,
                modifier: "underline"
            }, null, 8, ["label", "url"])]))), 128))], 8, Yr)])) : p("", !0)]), t.block.content.code ? (o(),
            r("div", Xr, [a("div", {
                class: y([{
                    "border border-secondary": t.block.content.colorTheme && t.block.content.colorTheme !== "none" && t.block.content.colorTheme !== "light-gray"
                }])
            }, [a("pre", null, [a("code", {
                class: y(["no-scrollbar f-code-1", e(s) ? e(s).toLowerCase() : null, "transition-opacity duration-300 opacity-0"])
            }, L(t.block.content.code), 3)])], 2)])) : p("", !0)])])])
        }
    }
}
  , Zr = {
    class: "container"
}
  , ea = {
    class: "cols-container"
}
  , ta = {
    class: "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-6-cols relative"
}
  , oa = {
    key: 1,
    class: "f-body-1 mt-8 lg:mt-12 text-secondary"
}
  , ia = ["innerHTML"]
  , na = ["innerHTML"]
  , ra = {
    __name: "BlockCodeExampleSimple",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>i.block.content.code ?? null)
          , s = x(()=>{
            const l = i.block.content.lang === "none" ? "text" : i.block.content.lang;
            return l ? l.toLowerCase() : null
        }
        )
          , c = D(null);
        return te(()=>{
            c.value = !0
        }
        ),
        (l,u)=>{
            const d = N;
            return e(n) ? (o(),
            r("div", {
                key: 0,
                class: y(e(de)(t.blocks, t.block))
            }, [a("div", Zr, [a("div", ea, [a("div", ta, [t.block.content.title ? (o(),
            T(d, {
                key: 0,
                title: t.block.content.title,
                "heading-level": 3,
                class: "f-heading-5"
            }, null, 8, ["title"])) : p("", !0), t.block.content.primaryText ? (o(),
            r("p", oa, L(t.block.content.primaryText), 1)) : p("", !0), t.block.content.secondaryText ? (o(),
            r("p", {
                key: 2,
                class: y(["f-body-1 text-primary", {
                    "mt-8 lg:mt-12": !t.block.content.primaryText
                }])
            }, L(t.block.content.secondaryText), 3)) : p("", !0), a("div", {
                class: y(["transition-opacity duration-300 f-code-1", {
                    "opacity-100": e(c)
                }, {
                    "opacity-0": !e(c)
                }, {
                    "mt-spacing-4": t.block.content.title || t.block.content.primaryText || t.block.content.secondaryText
                }])
            }, [a("div", {
                class: y([{
                    "border border-secondary": t.block.content.colorTheme && t.block.content.colorTheme !== "none" && t.block.content.colorTheme !== "light-gray"
                }])
            }, [a("pre", null, [a("code", {
                class: y(["no-scrollbar f-code-1 whitespace-pre", e(s)]),
                innerHTML: e(n)
            }, null, 10, ia)])], 2)], 2), a("div", {
                class: "f-caption-1 ui-richtext relative mt-8",
                innerHTML: t.block.content.caption
            }, null, 8, na)])])])], 2)) : p("", !0)
        }
    }
}
  , aa = {
    class: "overflow-x-auto"
}
  , sa = {
    class: "w-full border-t border-t-primary block max-w-[calc(100vw_-_(var(--outer-gutter)*2))] overflow-x-auto md:table"
}
  , la = {
    key: 0,
    class: "border-b border-secondary"
}
  , ca = ["innerHTML"]
  , ua = {
    key: 1,
    class: "f-heading-5 text-secondary"
}
  , da = {
    key: 0
}
  , pa = {
    key: 1,
    class: "border-b border-secondary"
}
  , ma = ["innerHTML"]
  , _a = {
    key: 1,
    class: "f-body-1 text-secondary"
}
  , ha = {
    key: 0
}
  , ga = {
    __name: "Table",
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        return (i,n)=>(o(),
        r("div", aa, [a("table", sa, [a("tbody", null, [(o(!0),
        r(S, null, A(t.data.rows, s=>(o(),
        r(S, null, [s.type === "heading" ? (o(),
        r("tr", la, [(o(!0),
        r(S, null, A(s.columns, (c,l)=>(o(),
        r("td", {
            class: y(["pb-4 pt-4 pr-[1em] align-top xs:min-w-[calc(50vw_-_var(--inner-gutter))] sm:min-w-0", {
                "xs:w-auto": s.columns.length <= 3 && l === 0
            }])
        }, [c.primary ? (o(),
        r("span", {
            key: 0,
            class: "f-heading-5",
            innerHTML: c.primary
        }, null, 8, ca)) : p("", !0), c.secondary ? (o(),
        r("span", ua, [c.primary ? (o(),
        r("span", da, " ")) : p("", !0), ne(L(c.secondary), 1)])) : p("", !0)], 2))), 256))])) : (o(),
        r("tr", pa, [(o(!0),
        r(S, null, A(s.columns, c=>(o(),
        r("td", {
            class: y(["pb-4 pt-4 pr-[1em] align-top xs:min-w-[calc(50vw_-_var(--inner-gutter))] sm:min-w-0"])
        }, [c.primary ? (o(),
        r("span", {
            key: 0,
            class: "f-body-1 whitespace-pre-line ui-richtext",
            innerHTML: c.primary
        }, null, 8, ma)) : p("", !0), c.secondary ? (o(),
        r("span", _a, [c.primary ? (o(),
        r("span", ha, " ")) : p("", !0), ne(L(c.secondary), 1)])) : p("", !0)], 2))), 256))]))], 64))), 256))])])]))
    }
}
  , ba = {
    SnippetFibonacci: "Fibonacci",
    SnippetInlineVideo: "InlineVideo",
    SnippetImageGalleryCaption: "ImageGalleryCaption",
    SnippetVideoGalleryCaption: "VideoGalleryCaption",
    SnippetGist: "Gist",
    SnippetObservableNotebook: "ObservableNotebook",
    SnippetRichTextTable: "RichTextTable",
    SnippetIframe: "Iframe",
    SnippetTweet: "Tweet",
    SnippetLazyAutoPausingVimeo: "LazyAutoPausingVimeo",
    SnippetResponsiveImage: "ResponsiveImage",
    SnippetComparisonBarChart: "ComparisonBarChart",
    SnippetPeopleGrid: "PeopleGrid",
    SnippetScholar: "Scholar",
    SnippetScholarList: "ScholarList",
    SnippetDALLEImagePrompt: "DALLEImagePrompt",
    SnippetAudioPlayer: "AudioPlayer",
    SnippetIconList: "IconList",
    SnippetLearningToCommunicateAgentSignals: "blog/learning-to-communicate/AgentSignals",
    SnippetNewAndImprovedEmbeddingModelTextAsVector: "blog/new-and-improved-embedding-model/TextAsVector",
    SnippetNewAndImprovedEmbeddingModelImprovements: "blog/new-and-improved-embedding-model/Improvements",
    SnippetNewAndImprovedEmbeddingModelQueryCode: "blog/new-and-improved-embedding-model/QueryCode",
    SnippetDALLEAPINowAvailableInPublicBeta: "blog/dall-e-api-no-available-in-public-beta/Samples",
    SnippetDALLEIntroducingOutpaintingSample: "blog/dall-e-introducing-outpainting/Sample",
    SnippetNewAndImprovedContentModerationToolingAnimation: "blog/new-and-improved-content-moderation-tooling/Animation",
    SnippetDALLE2ExtendingCreativityOrrigos: "blog/dall-e-2-extending-creativity/Orrigos",
    SnippetDALLE2ExtendingCreativityKutzenberger: "blog/dall-e-2-extending-creativity/Kutzenberger",
    SnippetDALLE2ExtendingCreativityCheng: "blog/dall-e-2-extending-creativity/Cheng",
    SnippetDALLE2ExtendingCreativityAviv: "blog/dall-e-2-extending-creativity/Aviv",
    SnippetDALLE2ExtendingCreativityStevenson: "blog/dall-e-2-extending-creativity/Stevenson",
    SnippetDALLE2ExtendingCreativityBaskin: "blog/dall-e-2-extending-creativity/Baskin",
    SnippetDALLE2ExtendingCreativityKamp: "blog/dall-e-2-extending-creativity/Kamp",
    SnippetDALLE2ExtendingCreativityNelson: "blog/dall-e-2-extending-creativity/Nelson",
    SnippetGPT3EditInsertIntroSample: "blog/gpt-3-edit-insert/IntroSample",
    SnippetGPT3EditInsertInsertText: "blog/gpt-3-edit-insert/InsertText",
    SnippetGPT3EditInsertInsertCode: "blog/gpt-3-edit-insert/InsertCode",
    SnippetGPT3EditInsertEditText: "blog/gpt-3-edit-insert/EditText",
    SnippetGPT3EditInsertEditData: "blog/gpt-3-edit-insert/EditData",
    SnippetIntroducingTextAndCodeEmbeddingsTextAsVector: "blog/introducing-text-and-code-embeddings/TextAsVector",
    SnippetIntroducingTextAndCodeEmbeddingsEmbeddingsCode: "blog/introducing-text-and-code-embeddings/EmbeddingsCode",
    SnippetIntroducingTextAndCodeEmbeddings3DChart: "blog/introducing-text-and-code-embeddings/3DChart",
    SnippetCustomizedGPT3Chart: "blog/customized-gpt-3/Chart",
    SnippetCustomizedGPT3OneCommand: "blog/customized-gpt-3/OneCommand",
    SnippetCustomizedGPT3Example: "blog/customized-gpt-3/Example",
    SnippetOpenAICodexVideoCarousel: "blog/openai-codex/VideoCarousel",
    SnippetOpenAIScholars2018MeetOurScholars: "blog/openai-scholars-2018-meet-our-scholars/Scholars",
    SnippetOpenAIScholars2019MeetOurScholars: "blog/openai-scholars-2019-meet-our-scholars/Scholars",
    SnippetOpenAIFellowsSummer2018FinalProjects: "blog/openai-summer-fellows-2018/FinalProjects",
    SnippetOpenAIFellowsFall2018FinalProjects: "blog/openai-fellows-fall-2018/FinalProjects",
    SnippetOpenAIScholars2018FinalProjects: "blog/openai-scholars-2018-final-projects/FinalProjects",
    SnippetOpenAIScholars2019FinalProjects: "blog/openai-scholars-2019-final-projects/FinalProjects",
    SnippetOpenAIScholars2020FinalProjects: "blog/openai-scholars-2020-final-projects/FinalProjects",
    SnippetOpenAIScholars2021FinalProjects: "blog/openai-scholars-2021-final-projects/FinalProjects",
    SnippetRoboticsSymposium2019Talks: "blog/symposium-2019/Talks",
    SnippetLearningDayBackstory: "blog/learning-day/Backstory",
    SnippetLearningDayHowItWorks: "blog/learning-day/HowItWorks",
    SnippetChatGPTSamples: "blog/chatgpt/Samples",
    SnippetChatGPTIterativeDeployment: "blog/chatgpt/IterativeDeployment",
    SnippetReducingBiasAndImprovingSafetyInDALLE2Examples: "blog/reducing-bias-and-improving-safety-in-dall-e-2/Examples",
    SnippetProcgenMineRLCompetitionsProcgenCompetition: "blog/procgen-minerl-competitions/ProcgenCompetition",
    SnippetProcgenMineRLCompetitionsMineRLCompetition: "blog/procgen-minerl-competitions/MineRLCompetition",
    SnippetSpring2023APIUpdatesChatGPT: "blog/spring-2023-api-updates/ChatGPT",
    SnippetSpring2023APIUpdatesWhisper: "blog/spring-2023-api-updates/Whisper",
    SnippetChatPluginsPluginTitle: "blog/chat-plugins/PluginTitle",
    SnippetChatPluginsPluginCard: "blog/chat-plugins/PluginCard",
    SnippetChatPluginsClickFailed: "blog/chat-plugins/ClickFailed",
    SnippetChatPluginsPluginList: "blog/chat-plugins/PluginList",
    SnippetChatPluginsBrowsingDemo: "blog/chat-plugins/BrowsingDemo",
    SnippetChatPluginsInterpreterDemo: "blog/chat-plugins/InterpreterDemo",
    SnippetChatPluginsLaunchPlugins: "blog/chat-plugins/LaunchPlugins",
    SnippetNewWaysToManageYourDataInChatGPTUI: "blog/new-ways-to-manage-your-data-in-chatgpt/UI",
    SnippetDesigningDemocraticProcessesExample: "blog/designing-democratic-processes/Example",
    SnippetFunctionCallingDemo: "blog/function-calling/Demo",
    SnippetGPT4APIGeneralAvailabilityChatCompletionsExample: "blog/gpt-4-api-general-availability/ChatCompletionsExample",
    SnippetGPT4APIGeneralAvailabilityEditsDeprecationExample: "blog/gpt-4-api-general-availability/EditsDeprecationExample",
    SnippetANewWayToControlChatGPTExamples: "blog/a-new-way-to-control-chatgpt/Examples",
    SnippetFactFactoryDemo: "blog/fact-factory/Demo",
    SnippetFineTuningGPT35TurboSteps: "blog/fine-tuning-for-gpt-35-turbo/Steps",
    SnippetFineTuningGPT35TurboPricing: "blog/fine-tuning-for-gpt-35-turbo/Pricing",
    SnippetNewVoiceAndImageCapabilitiesInChatGPTAudioDemo: "blog/new-voice-and-image-capabilities-in-chatgpt/AudioDemo",
    SnippetDemocraticInputsToAIProcessBox: "blog/democratic-inputs-to-ai/ProcessBox",
    SnippetDALLEInChatGPTUseCases: "blog/dall-e-in-chatgpt/UseCases",
    SnippetNewModelsAndDeveloperProductsAnnouncedAtDevDayAudioDemo: "blog/new-models-and-developer-products-announced-at-devday/AudioDemo",
    SnippetNewEmbeddingsModelsAndAPIUpdatesSizeScoreComparison: "blog/new-embeddings-models-and-api-updates/SizeScoreComparison",
    SnippetRoboschoolTable: "research/roboschool/Table",
    SnippetUnsupervisedSentimentNeuronTables: "research/unsupervised-sentiment-neuron/Tables",
    SnippetDiscoveringTypesHeroExample: "research/discovering-types-for-entity-disambiguation/HeroExample",
    SnippetDiscoveringTypesDeepTypesExample: "research/discovering-types-for-entity-disambiguation/DeepTypesExample",
    SnippetDiscoveringTypesAnaphoraDiagram: "research/discovering-types-for-entity-disambiguation/AnaphoraDiagram",
    SnippetDiscoveringTypesRocDiagram: "research/discovering-types-for-entity-disambiguation/RocDiagram",
    SnippetDiscoveringTypesWindowClassifierDiagram: "research/discovering-types-for-entity-disambiguation/WindowClassifierDiagram",
    SnippetDiscoveringTypesWindowTypeDiscovery: "research/discovering-types-for-entity-disambiguation/WindowTypeDiscovery",
    SnippetDiscoveringTypesWindowTypeDiscoveryHuman: "research/discovering-types-for-entity-disambiguation/WindowTypeDiscoveryHuman",
    SnippetIngredientsForRoboticsResearchEnvironments: "research/ingredients-for-robotics-research/Environments",
    SnippetReptileDemo: "research/reptile/Demo",
    SnippetReptileCode: "research/reptile/Code",
    SnippetDebateDemo: "research/debate/Demo",
    SnippetAIAndComputeComputeIncrease: "research/ai-and-compute/ComputeIncrease",
    SnippetAIAndComputeComputeUsage: "research/ai-and-compute/ComputeUsage",
    SnippetAIAndComputeAppendix: "research/ai-and-compute/Appendix",
    SnippetOpenAIFiveDemo: "research/openai-five/Demo",
    SnippetGlowDemo: "research/glow/Demo",
    SnippetReinforcementLearningWithPredictionBasedRewardsDemo: "research/reinforcement-learning-with-prediction-based-rewards/Demo",
    SnippetScienceOfAITradeoffExperience: "research/science-of-ai/TradeoffExperience",
    SnippetBetterLanguageModelsSamples: "research/better-language-models/Samples",
    SnippetBetterLanguageModelsTasks: "research/better-language-models/Tasks",
    SnippetEnergyBasedModelsImageCompletions: "research/energy-based-models/ImageCompletions",
    SnippetEnergyBasedModelsCrossClassSampling: "research/energy-based-models/CrossClassSampling",
    SnippetEnergyBasedModelsRobotHand: "research/energy-based-models/RobotHand",
    SnippetSparseTransformerAttentionMatrix: "research/sparse-transformer/AttentionMatrix",
    SnippetMusenetSample: "research/musenet/Sample",
    SnippetMusenetDemo: "research/musenet/Demo",
    SnippetMusenetNotebook: "research/musenet/Notebook",
    SnippetTestingRobustnessSwans: "research/testing-robustness/Swans",
    SnippetEmergentToolUseAbilities: "research/emergent-tool-use/Abilities",
    SnippetEmergentToolUseExplorations: "research/emergent-tool-use/Explorations",
    SnippetEmergentToolUseSkillCharts: "research/emergent-tool-use/SkillCharts",
    SnippetEmergentToolUseInteractiveEmergence: "research/emergent-tool-use/InteractiveEmergence",
    SnippetEmergentToolUseSurprisingBehaviors: "research/emergent-tool-use/SurprisingBehaviors",
    SnippetFineTuningGPT2SampleTextContinuationSentiment: "research/fine-tuning-gpt-2/SampleTextContinuationSentiment",
    SnippetFineTuningGPT2SampleNewsTldr: "research/fine-tuning-gpt-2/SampleSummarizationTldr",
    SnippetFineTuningGPT2CopySources: "research/fine-tuning-gpt-2/CopySources",
    SnippetSolvingRubiksCubePerbutations: "research/solving-rubiks-cube/Perbutations",
    SnippetSolvingRubiksCubeTimeToSuccess: "research/solving-rubiks-cube/TimeToSuccess",
    SnippetSolvingRubiksCubeHiddenStateVisualization: "research/solving-rubiks-cube/HiddenStateVisualization",
    SnippetGPT215BReleaseTable: "research/gpt-2-1-5b-release/Table",
    SnippetSafetyGymNotebook: "research/safety-gym/Notebook",
    SnippetProcgenBenchmarkCarousel: "research/procgen-benchmark/Carousel",
    SnippetProcgenBenchmarkLevels: "research/procgen-benchmark/Levels",
    SnippetProcgenBenchmarkAblation: "research/procgen-benchmark/Ablation",
    SnippetJukeboxSamples: "research/jukebox/Samples",
    SnippetJukeboxOverview: "research/jukebox/Overview",
    SnippetJukeboxVqvae: "research/jukebox/Vqvae",
    SnippetJukeboxArtistCluster: "research/jukebox/ArtistCluster",
    SnippetAIAndEfficiencyCompute: "research/ai-and-efficiency/Compute",
    SnippetAIAndEfficiencyLeaderboard: "research/ai-and-efficiency/Leaderboard",
    SnippetImageGPTCompletions: "research/image-gpt/Completions",
    SnippetImageGPTAccuracyCharts: "research/image-gpt/AccuracyCharts",
    SnippetLearningToSummarizeWithHumanFeedbackTLDRSamples: "research/learning-to-summarize-with-human-feedback/TLDRSamples",
    SnippetLearningToSummarizeWithHumanFeedbackTransferResults: "research/learning-to-summarize-with-human-feedback/TransferResults",
    SnippetLearningToSummarizeWithHumanFeedbackCNNDMSamples: "research/learning-to-summarize-with-human-feedback/CNNDMSamples",
    SnippetLearningToSummarizeWithHumanFeedbackOptimSample: "research/learning-to-summarize-with-human-feedback/OptimSample",
    SnippetClipPerformanceTable: "research/clip/PerformanceTable",
    SnippetClipZeroShotGrid: "research/clip/ZeroShotGrid",
    SnippetClipProbeAccuracy: "research/clip/ProbeAccuracy",
    SnippetDalleSamples: "research/dall-e/Samples",
    SnippetDallePromptCard: "research/dall-e/PromptCard",
    SnippetMultimodalNeuronsComparisonGrid: "research/multimodal-neurons/ComparisonGrid",
    SnippetMultimodalNeuronsByComparison: "research/multimodal-neurons/ByComparison",
    SnippetMultimodalNeuronsComposition: "research/multimodal-neurons/Composition",
    SnippetMultimodalNeuronsAlgebra: "research/multimodal-neurons/Algebra",
    SnippetMultimodalNeuronsFinance: "research/multimodal-neurons/Finance",
    SnippetMultimodalNeuronsApple: "research/multimodal-neurons/Apple",
    SnippetImprovingLanguageModelBehaviorConversation: "research/improving-language-model-behavior/Conversation",
    SnippetTritonVectorAddition: "research/triton/VectorAddition",
    SnippetTritonV100Chart: "research/triton/V100Chart",
    SnippetTritonArchitecture: "research/triton/Architecture",
    SnippetTritonCompilerMemory: "research/triton/CompilerMemory",
    SnippetTritonParallelizationDiagram: "research/triton/ParallelizationDiagram",
    SnippetGradeSchoolMathSamples: "research/grade-school-math/Samples",
    SnippetGradeSchoolMathCharts: "research/grade-school-math/Charts",
    SnippetWebGPTSamples: "research/webgpt/Samples",
    SnippetWebGPTELI5Results: "research/webgpt/ELI5Results",
    SnippetWebGPTTruthfulQAResult: "research/webgpt/TruthfulQAResults",
    SnippetInstructionFollowingSamples: "research/instruction-following/Samples",
    SnippetInstructionFollowingResultComparisonCharts: "research/instruction-following/ResultComparisonCharts",
    SnippetInstructionFollowingMethods: "research/instruction-following/Methods",
    SnippetFormalMathProblemCard: "research/formal-math/ProblemCard",
    SnippetMeasuringGoodhartsLawWebGPTPerformance: "research/measuring-goodharts-law/WebGPTPerformance",
    SnippetTechniquesForTrainingLargeNeuralNetworksParallelism: "research/techniques-for-training-large-neural-networks/Parallelism",
    SnippetTechniquesForTrainingLargeNeuralNetworksNaiveSetup: "research/techniques-for-training-large-neural-networks/NaiveSetup",
    SnippetTechniquesForTrainingLargeNeuralNetworksPipeliningSchemas: "research/techniques-for-training-large-neural-networks/PipeliningSchemas",
    SnippetCritiquesSample: "research/critiques/Sample",
    SnippetVPTCraftingTableSequence: "research/vpt/CraftingTableSequence",
    SnippetVPTOtherSkills: "research/vpt/OtherSkills",
    SnippetVPTStonePickAxeSequence: "research/vpt/StonePickAxeSequence",
    SnippetVPTTasks: "research/vpt/Tasks",
    SnippetVPTDiamondPickAxeSequence: "research/vpt/DiamondPickAxeSequence",
    SnippetWhisperSamples: "research/whisper/Samples",
    SnippetSummarizingBooksSamples: "research/summarizing-books/Samples",
    SnippetQuantifyingGeneralizationInReinforcementLearningGrid: "research/quantifying-generalization-in-reinforcement-learning/Grid",
    SnippetGPT4SteerabilitySamples: "research/gpt-4/SteerabilitySamples",
    SnippetGPT4VisualSamples: "research/gpt-4/VisualSamples",
    SnippetLanguageModelsCanExplainNeuronsAlgorithm: "research/language-models-can-explain-neurons/Algorithm",
    SnippetLanguageModelsCanExplainNeuronsLayers: "research/language-models-can-explain-neurons/Layers",
    SnippetProcessSupervisionCarousels: "research/process-supervision/Carousels",
    SnippetSoraMadlib: "research/sora/Madlib",
    SnippetSoraNoise: "research/sora/Noise",
    SnippetSoraSync: "research/sora/Sync",
    SnippetSoraVideoTwoUpSync: "research/sora/VideoTwoUpSync",
    SnippetSoraVideoGrid: "research/sora/VideoGrid",
    SnippetSoraTurtles: "research/sora/Turtles",
    SnippetLandingGPT4Demo: "landing/gpt-4/Demo",
    SnippetLandingGPT4Stats: "landing/gpt-4/Stats",
    SnippetLandingBrandGuidelinesLanguageCards: "landing/brand-guidelines/LanguageCards",
    SnippetLandingBrandGuidelinesLogos: "landing/brand-guidelines/Logos",
    SnippetLandingBrandGuidelinesSpacingAndSizingGuidance: "landing/brand-guidelines/SpacingAndSizingGuidance",
    SnippetLandingBrandGuidelinesThingsToAvoid: "landing/brand-guidelines/ThingsToAvoid",
    SnippetLandingBrandGuidelinesBadges: "landing/brand-guidelines/Badges",
    SnippetLandingSecurityCompliance: "landing/security/Compliance",
    SnippetLandingChatGPTEnterpriseContent: "landing/chatgpt-enterprise/Content",
    SnippetLandingDALLE3FourUp: "landing/dall-e-3/FourUp",
    SnippetLandingDALLE3MasonryGallery: "landing/dall-e-3/MasonryGallery",
    SnippetLandingChatGPTOverviewAskMeAnything: "landing/chatgpt-overview/AskMeAnything",
    SnippetLandingChatGPTOverviewGPTs: "landing/chatgpt-overview/GPTs",
    SnippetLandingPricingGPTVPricingCalculator: "landing/pricing/GPTVPricingCalculator",
    SnippetLandingChatGPTTeamGetStarted: "landing/chatgpt-team/GetStarted",
    SnippetLandingChatGPTPricingPlans: "landing/chatgpt-pricing/Plans",
    SnippetLandingchatGPTPricingFeatureComparison: "landing/chatgpt-pricing/FeatureComparison",
    SnippetLandingSoraPage: "landing/sora/Page"
}
  , ge = {
    __name: "Snippet",
    props: {
        resource: {
            type: Object,
            required: !0
        },
        data: {
            type: Object,
            required: !1
        },
        images: {
            type: Array,
            required: !1
        },
        layout: {
            type: String,
            required: !1
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>{
            var u, d;
            return {
                images: (d = (u = i.resource.media) == null ? void 0 : u.images) == null ? void 0 : d.map(_=>_.default ?? []),
                data: i.resource.data,
                layout: i.resource.display
            }
        }
        )
          , s = x(()=>{
            var u;
            return i.data && !et(i.data) ? i.data : (u = n.value) == null ? void 0 : u.data
        }
        )
          , c = x(()=>{
            var u;
            return i.images && !et(i.images) ? i.images : (u = n.value) == null ? void 0 : u.images
        }
        )
          , l = Qt(()=>new Promise((u,d)=>{
            const h = Object.assign({
                "../snippets/AudioPlayer.vue": ()=>m(()=>import("./AudioPlayer.15b5d3ad.js"), ["./AudioPlayer.15b5d3ad.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css"], import.meta.url),
                "../snippets/ChatGPTMessage.vue": ()=>m(()=>import("./ChatGPTMessage.140bf518.js"), ["./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/ComparisonBarChart.vue": ()=>m(()=>import("./ComparisonBarChart.a7852015.js"), ["./ComparisonBarChart.a7852015.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/DALLEImagePrompt.vue": ()=>m(()=>import("./DALLEImagePrompt.ec804857.js"), ["./DALLEImagePrompt.ec804857.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/Fibonacci.vue": ()=>m(()=>import("./Fibonacci.05546f61.js"), ["./Fibonacci.05546f61.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/Gist.vue": ()=>m(()=>import("./Gist.9750fa16.js"), ["./Gist.9750fa16.js", "./BlockTimedTabs.vue.683bc8fd.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.b12ff6e9.css", "./GistCore.9765bcff.js", "./usePageTransition.0d7a0e1d.js"], import.meta.url),
                "../snippets/GistCore.vue": ()=>m(()=>import("./GistCore.9765bcff.js"), ["./GistCore.9765bcff.js", "./BlockTimedTabs.vue.683bc8fd.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.b12ff6e9.css", "./usePageTransition.0d7a0e1d.js"], import.meta.url),
                "../snippets/IconList.vue": ()=>m(()=>import("./IconList.e907fe5c.js"), ["./IconList.e907fe5c.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/Iframe.vue": ()=>m(()=>import("./Iframe.cdba4ac9.js"), ["./Iframe.cdba4ac9.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/ImageGalleryCaption.vue": ()=>m(()=>import("./ImageGalleryCaption.0c814002.js"), ["./ImageGalleryCaption.0c814002.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/ImageModal.vue": ()=>m(()=>import("./ImageModal.b830758a.js"), ["./ImageModal.b830758a.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./ImageModal.f84fffe6.css"], import.meta.url),
                "../snippets/InlineVideo.vue": ()=>m(()=>import("./InlineVideo.f1cced25.js"), ["./InlineVideo.f1cced25.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/LazyAutoPausingVimeo.vue": ()=>m(()=>import("./LazyAutoPausingVimeo.5708878c.js"), ["./LazyAutoPausingVimeo.5708878c.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/ObservableNotebook.vue": ()=>m(()=>import("./ObservableNotebook.df97a0a9.js"), ["./ObservableNotebook.df97a0a9.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./usePageTransition.0d7a0e1d.js"], import.meta.url),
                "../snippets/PeopleGrid.vue": ()=>m(()=>import("./PeopleGrid.4866dfa3.js"), ["./PeopleGrid.4866dfa3.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/ResponsiveImage.vue": ()=>m(()=>import("./ResponsiveImage.07a7e97c.js"), ["./ResponsiveImage.07a7e97c.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/RichTextTable.vue": ()=>m(()=>import("./RichTextTable.969533c8.js"), ["./RichTextTable.969533c8.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/Scholar.vue": ()=>m(()=>import("./Scholar.4d8fd1be.js"), ["./Scholar.4d8fd1be.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/ScholarList.vue": ()=>m(()=>import("./ScholarList.a4fcb2f2.js"), ["./ScholarList.a4fcb2f2.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/TimeTable.vue": ()=>m(()=>import("./TimeTable.5efe1afc.js"), ["./TimeTable.5efe1afc.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/Tweet.vue": ()=>m(()=>import("./Tweet.7375f234.js"), ["./Tweet.7375f234.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/VideoGalleryCaption.vue": ()=>m(()=>import("./VideoGalleryCaption.778ddbda.js"), ["./VideoGalleryCaption.778ddbda.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/blog/a-new-way-to-control-chatgpt/Examples.vue": ()=>m(()=>import("./Examples.70cf6ee0.js"), ["./Examples.70cf6ee0.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Instructions.282d8037.js", "./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/blog/a-new-way-to-control-chatgpt/Instructions.vue": ()=>m(()=>import("./Instructions.282d8037.js"), ["./Instructions.282d8037.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chat-plugins/ActionList.vue": ()=>m(()=>import("./ActionList.d9e4c9ad.js"), ["./ActionList.d9e4c9ad.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/chat-plugins/BrowsingDemo.vue": ()=>m(()=>import("./BrowsingDemo.03cf3d71.js"), ["./BrowsingDemo.03cf3d71.js", "./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./ActionList.d9e4c9ad.js"], import.meta.url),
                "../snippets/blog/chat-plugins/ClickFailed.vue": ()=>m(()=>import("./ClickFailed.025cf4f3.js"), ["./ClickFailed.025cf4f3.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chat-plugins/InterpreterDemo.vue": ()=>m(()=>import("./InterpreterDemo.6cc3bd16.js"), ["./InterpreterDemo.6cc3bd16.js", "./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./ActionList.d9e4c9ad.js"], import.meta.url),
                "../snippets/blog/chat-plugins/LaunchPlugins.vue": ()=>m(()=>import("./LaunchPlugins.6cb4f5d5.js"), ["./LaunchPlugins.6cb4f5d5.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chat-plugins/PluginCard.vue": ()=>m(()=>import("./PluginCard.8155a06f.js"), ["./PluginCard.8155a06f.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chat-plugins/PluginList.vue": ()=>m(()=>import("./PluginList.f25a5741.js"), ["./PluginList.f25a5741.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./PluginCard.8155a06f.js"], import.meta.url),
                "../snippets/blog/chat-plugins/PluginTitle.vue": ()=>m(()=>import("./PluginTitle.863f2eb2.js"), ["./PluginTitle.863f2eb2.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./slugify.068b7bc9.js"], import.meta.url),
                "../snippets/blog/chatgpt/Carousel.vue": ()=>m(()=>import("./Carousel.fa3209e0.js"), ["./Carousel.fa3209e0.js", "./CarouselNav.1f14cf69.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chatgpt/CarouselMessage.vue": ()=>m(()=>import("./CarouselMessage.a897eb68.js"), ["./CarouselMessage.a897eb68.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chatgpt/CarouselNav.vue": ()=>m(()=>import("./CarouselNav.1f14cf69.js"), ["./CarouselNav.1f14cf69.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chatgpt/CarouselSlide.vue": ()=>m(()=>import("./CarouselSlide.64ea47e4.js"), ["./CarouselSlide.64ea47e4.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/chatgpt/IterativeDeployment.vue": ()=>m(()=>import("./IterativeDeployment.ecb6831a.js"), ["./IterativeDeployment.ecb6831a.js", "./Carousel.fa3209e0.js", "./CarouselNav.1f14cf69.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./CarouselSlide.64ea47e4.js", "./usePageTransition.0d7a0e1d.js", "./CarouselMessage.a897eb68.js"], import.meta.url),
                "../snippets/blog/chatgpt/Samples.vue": ()=>m(()=>import("./Samples.340a75cf.js"), ["./Samples.340a75cf.js", "./Carousel.fa3209e0.js", "./CarouselNav.1f14cf69.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./CarouselSlide.64ea47e4.js", "./usePageTransition.0d7a0e1d.js", "./CarouselMessage.a897eb68.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Samples.03259f5f.css"], import.meta.url),
                "../snippets/blog/customized-gpt-3/Chart.vue": ()=>m(()=>import("./Chart.f062e652.js"), ["./Chart.f062e652.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/customized-gpt-3/Example.vue": ()=>m(()=>import("./Example.da859e05.js"), ["./Example.da859e05.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/customized-gpt-3/OneCommand.vue": ()=>m(()=>import("./OneCommand.1a76653a.js"), ["./OneCommand.1a76653a.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Aviv.vue": ()=>m(()=>import("./Aviv.7cbeef8f.js"), ["./Aviv.7cbeef8f.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Aviv.c8e6193b.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Baskin.vue": ()=>m(()=>import("./Baskin.5f613664.js"), ["./Baskin.5f613664.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Baskin.b40dfd84.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Cheng.vue": ()=>m(()=>import("./Cheng.44710669.js"), ["./Cheng.44710669.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Cheng.79f1fe2f.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Kamp.vue": ()=>m(()=>import("./Kamp.d8a62aaa.js"), ["./Kamp.d8a62aaa.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Kamp.0b50a459.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Kutzenberger.vue": ()=>m(()=>import("./Kutzenberger.1d278111.js"), ["./Kutzenberger.1d278111.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Kutzenberger.a435961b.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Nelson.vue": ()=>m(()=>import("./Nelson.e73ea3cd.js"), ["./Nelson.e73ea3cd.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Nelson.43b78a15.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Orrigos.vue": ()=>m(()=>import("./Orrigos.879a75fe.js"), ["./Orrigos.879a75fe.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Orrigos.2ba8ce72.css"], import.meta.url),
                "../snippets/blog/dall-e-2-extending-creativity/Stevenson.vue": ()=>m(()=>import("./Stevenson.3086550a.js"), ["./Stevenson.3086550a.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Stevenson.c0a67bed.css"], import.meta.url),
                "../snippets/blog/dall-e-api-no-available-in-public-beta/Samples.vue": ()=>m(()=>import("./Samples.a1ffa745.js"), ["./Samples.a1ffa745.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/blog/dall-e-in-chatgpt/UseCases.vue": ()=>m(()=>import("./UseCases.63e7211e.js"), ["./UseCases.63e7211e.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./ChatGPTMessage.140bf518.js", "./ImageModal.b830758a.js", "./ImageModal.f84fffe6.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/blog/dall-e-introducing-outpainting/Sample.vue": ()=>m(()=>import("./Sample.d0901b53.js"), ["./Sample.d0901b53.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/blog/democratic-inputs-to-ai/ProcessBox.vue": ()=>m(()=>import("./ProcessBox.0fbe4aaf.js"), ["./ProcessBox.0fbe4aaf.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/designing-democratic-processes/Example.vue": ()=>m(()=>import("./Example.ae9e8a7a.js"), ["./Example.ae9e8a7a.js", "./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/fact-factory/Demo.vue": ()=>m(()=>import("./Demo.e718c783.js"), ["./Demo.e718c783.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./ChatGPTMessage.140bf518.js"], import.meta.url),
                "../snippets/blog/fine-tuning-for-gpt-35-turbo/Pricing.vue": ()=>m(()=>import("./Pricing.19149490.js"), ["./Pricing.19149490.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/fine-tuning-for-gpt-35-turbo/Steps.vue": ()=>m(()=>import("./Steps.2f7427ca.js"), ["./Steps.2f7427ca.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/function-calling/Demo.vue": ()=>m(()=>import("./Demo.e1713b5f.js"), ["./Demo.e1713b5f.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/blog/gpt-3-edit-insert/Demo.vue": ()=>m(()=>import("./Demo.82061961.js"), ["./Demo.82061961.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Demo.058e0678.css"], import.meta.url),
                "../snippets/blog/gpt-3-edit-insert/EditData.vue": ()=>m(()=>import("./EditData.277105ec.js"), ["./EditData.277105ec.js", "./Demo.82061961.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Demo.058e0678.css"], import.meta.url),
                "../snippets/blog/gpt-3-edit-insert/EditText.vue": ()=>m(()=>import("./EditText.4ee091ac.js"), ["./EditText.4ee091ac.js", "./Demo.82061961.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Demo.058e0678.css"], import.meta.url),
                "../snippets/blog/gpt-3-edit-insert/InsertCode.vue": ()=>m(()=>import("./InsertCode.fb668a09.js"), ["./InsertCode.fb668a09.js", "./Demo.82061961.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Demo.058e0678.css"], import.meta.url),
                "../snippets/blog/gpt-3-edit-insert/InsertText.vue": ()=>m(()=>import("./InsertText.3d784b91.js"), ["./InsertText.3d784b91.js", "./Demo.82061961.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Demo.058e0678.css"], import.meta.url),
                "../snippets/blog/gpt-3-edit-insert/IntroSample.vue": ()=>m(()=>import("./IntroSample.fba4b720.js"), ["./IntroSample.fba4b720.js", "./Demo.82061961.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Demo.058e0678.css"], import.meta.url),
                "../snippets/blog/gpt-4-api-general-availability/ChatCompletionsExample.vue": ()=>m(()=>import("./ChatCompletionsExample.e81e5c80.js"), ["./ChatCompletionsExample.e81e5c80.js", "./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/gpt-4-api-general-availability/EditsDeprecationExample.vue": ()=>m(()=>import("./EditsDeprecationExample.3b1735dd.js"), ["./EditsDeprecationExample.3b1735dd.js", "./ChatGPTMessage.140bf518.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/introducing-text-and-code-embeddings/3DChart.vue": ()=>m(()=>import("./3DChart.92a92a03.js"), ["./3DChart.92a92a03.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/introducing-text-and-code-embeddings/EmbeddingsCode.vue": ()=>m(()=>import("./EmbeddingsCode.00a66ac9.js"), ["./EmbeddingsCode.00a66ac9.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/introducing-text-and-code-embeddings/TextAsVector.vue": ()=>m(()=>import("./TextAsVector.d497ec43.js"), ["./TextAsVector.d497ec43.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./ResponsiveImage.07a7e97c.js"], import.meta.url),
                "../snippets/blog/learning-day/Backstory.vue": ()=>m(()=>import("./Backstory.577bc8be.js"), ["./Backstory.577bc8be.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/learning-day/HowItWorks.vue": ()=>m(()=>import("./HowItWorks.946c767f.js"), ["./HowItWorks.946c767f.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/learning-to-communicate/AgentSignals.vue": ()=>m(()=>import("./AgentSignals.e3fef8bb.js"), ["./AgentSignals.e3fef8bb.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/new-and-improved-content-moderation-tooling/Animation.vue": ()=>m(()=>import("./Animation.59fdbfe1.js"), ["./Animation.59fdbfe1.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Animation.3853da55.css"], import.meta.url),
                "../snippets/blog/new-and-improved-embedding-model/Improvements.vue": ()=>m(()=>import("./Improvements.b2344e93.js"), ["./Improvements.b2344e93.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Improvements.98a97614.css"], import.meta.url),
                "../snippets/blog/new-and-improved-embedding-model/QueryCode.vue": ()=>m(()=>import("./QueryCode.37628669.js"), ["./QueryCode.37628669.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/new-and-improved-embedding-model/TextAsVector.vue": ()=>m(()=>import("./TextAsVector.16217dd9.js"), ["./TextAsVector.16217dd9.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./ResponsiveImage.07a7e97c.js"], import.meta.url),
                "../snippets/blog/new-embeddings-models-and-api-updates/SizeScoreComparison.vue": ()=>m(()=>import("./SizeScoreComparison.c1fe1021.js"), ["./SizeScoreComparison.c1fe1021.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./SizeScoreComparison.7ea7a9a9.css"], import.meta.url),
                "../snippets/blog/new-models-and-developer-products-announced-at-devday/AudioDemo.vue": ()=>m(()=>import("./AudioDemo.01b5884f.js"), ["./AudioDemo.01b5884f.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-voice-and-image-capabilities-in-chatgpt/AudioDemo.vue": ()=>m(()=>import("./AudioDemo.6f7a90c2.js"), ["./AudioDemo.6f7a90c2.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/UI.vue": ()=>m(()=>import("./UI.8a494079.js"), ["./UI.8a494079.js", "./Plus.fdc79b2a.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Chat.ca2fb76e.js", "./Trash.5997bd1c.js", "./Edit.d674d1df.js", "./More.5bacc924.js", "./Send.5ad2dd14.js", "./ChatFeedbackButtons.87e2899b.js", "./User.356691b0.js", "./Help.28da6f82.js", "./Settings.59fe58b6.js", "./Close.c38d0b6a.js", "./Logout.aaa281da.js", "./Clear.2b5bd3e7.js", "./Enable.8994f5ba.js"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Chat.vue": ()=>m(()=>import("./Chat.ca2fb76e.js"), ["./Chat.ca2fb76e.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/ChatFeedbackButtons.vue": ()=>m(()=>import("./ChatFeedbackButtons.87e2899b.js"), ["./ChatFeedbackButtons.87e2899b.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Clear.vue": ()=>m(()=>import("./Clear.2b5bd3e7.js"), ["./Clear.2b5bd3e7.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Close.vue": ()=>m(()=>import("./Close.c38d0b6a.js"), ["./Close.c38d0b6a.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Edit.vue": ()=>m(()=>import("./Edit.d674d1df.js"), ["./Edit.d674d1df.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Enable.vue": ()=>m(()=>import("./Enable.8994f5ba.js"), ["./Enable.8994f5ba.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Help.vue": ()=>m(()=>import("./Help.28da6f82.js"), ["./Help.28da6f82.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Logout.vue": ()=>m(()=>import("./Logout.aaa281da.js"), ["./Logout.aaa281da.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/More.vue": ()=>m(()=>import("./More.5bacc924.js"), ["./More.5bacc924.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Plus.vue": ()=>m(()=>import("./Plus.fdc79b2a.js"), ["./Plus.fdc79b2a.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Send.vue": ()=>m(()=>import("./Send.5ad2dd14.js"), ["./Send.5ad2dd14.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Settings.vue": ()=>m(()=>import("./Settings.59fe58b6.js"), ["./Settings.59fe58b6.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/Trash.vue": ()=>m(()=>import("./Trash.5997bd1c.js"), ["./Trash.5997bd1c.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/new-ways-to-manage-your-data-in-chatgpt/icons/User.vue": ()=>m(()=>import("./User.356691b0.js"), ["./User.356691b0.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/blog/openai-codex/VideoCarousel.vue": ()=>m(()=>import("./VideoCarousel.f58b3623.js"), ["./VideoCarousel.f58b3623.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/openai-fellows-fall-2018/FinalProjects.vue": ()=>m(()=>import("./FinalProjects.6428621d.js"), ["./FinalProjects.6428621d.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js"], import.meta.url),
                "../snippets/blog/openai-scholars-2018-final-projects/FinalProjects.vue": ()=>m(()=>import("./FinalProjects.970af814.js"), ["./FinalProjects.970af814.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js"], import.meta.url),
                "../snippets/blog/openai-scholars-2018-meet-our-scholars/Scholars.vue": ()=>m(()=>import("./Scholars.e89c6cc0.js"), ["./Scholars.e89c6cc0.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js"], import.meta.url),
                "../snippets/blog/openai-scholars-2019-final-projects/FinalProjects.vue": ()=>m(()=>import("./FinalProjects.5da6a41b.js"), ["./FinalProjects.5da6a41b.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js"], import.meta.url),
                "../snippets/blog/openai-scholars-2019-meet-our-scholars/Scholars.vue": ()=>m(()=>import("./Scholars.035ab33c.js"), ["./Scholars.035ab33c.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js"], import.meta.url),
                "../snippets/blog/openai-scholars-2020-final-projects/FinalProjects.vue": ()=>m(()=>import("./FinalProjects.0df789f9.js"), ["./FinalProjects.0df789f9.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js"], import.meta.url),
                "../snippets/blog/openai-scholars-2021-final-projects/FinalProjects.vue": ()=>m(()=>import("./FinalProjects.fcf42a8b.js"), ["./FinalProjects.fcf42a8b.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js"], import.meta.url),
                "../snippets/blog/openai-summer-fellows-2018/FinalProjects.vue": ()=>m(()=>import("./FinalProjects.c13c74e4.js"), ["./FinalProjects.c13c74e4.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Scholar.4d8fd1be.js", "./ScholarList.a4fcb2f2.js", "./FinalProjects.de9114f4.css"], import.meta.url),
                "../snippets/blog/procgen-minerl-competitions/MineRLCompetition.vue": ()=>m(()=>import("./MineRLCompetition.a4451c64.js"), ["./MineRLCompetition.a4451c64.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/blog/procgen-minerl-competitions/ProcgenCompetition.vue": ()=>m(()=>import("./ProcgenCompetition.82548a51.js"), ["./ProcgenCompetition.82548a51.js", "./InlineVideo.f1cced25.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/blog/reducing-bias-and-improving-safety-in-dall-e-2/Examples.vue": ()=>m(()=>import("./Examples.d06ad39e.js"), ["./Examples.d06ad39e.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Examples.113e69fc.css"], import.meta.url),
                "../snippets/blog/spring-2023-api-updates/ChatGPT.vue": ()=>m(()=>import("./ChatGPT.2b29f579.js"), ["./ChatGPT.2b29f579.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/blog/spring-2023-api-updates/Whisper.vue": ()=>m(()=>import("./Whisper.1411ad2d.js"), ["./Whisper.1411ad2d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/blog/symposium-2019/Talks.vue": ()=>m(()=>import("./Talks.4d139cd1.js"), ["./Talks.4d139cd1.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/brand-guidelines/Badges.vue": ()=>m(()=>import("./Badges.58e2ddc9.js"), ["./Badges.58e2ddc9.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/brand-guidelines/LanguageCards.vue": ()=>m(()=>import("./LanguageCards.7705c49e.js"), ["./LanguageCards.7705c49e.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/brand-guidelines/Logos.vue": ()=>m(()=>import("./Logos.aaf27f22.js"), ["./Logos.aaf27f22.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/brand-guidelines/SpacingAndSizingGuidance.vue": ()=>m(()=>import("./SpacingAndSizingGuidance.bd62b041.js"), ["./SpacingAndSizingGuidance.bd62b041.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/brand-guidelines/ThingsToAvoid.vue": ()=>m(()=>import("./ThingsToAvoid.b7b095ad.js"), ["./ThingsToAvoid.b7b095ad.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/chatgpt-enterprise/Content.vue": ()=>m(()=>import("./Content.e158609e.js"), ["./Content.e158609e.js", "./FeatureSection.60e8ce06.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./Testimonial.2ce00a44.js", "./PricingCard.fa888e36.js", "./GraphicManagement.7705b027.js", "./GraphicSecurity.1ff55f41.js", "./GraphicSpeed.1752aa46.js"], import.meta.url),
                "../snippets/landing/chatgpt-enterprise/FeatureSection.vue": ()=>m(()=>import("./FeatureSection.60e8ce06.js"), ["./FeatureSection.60e8ce06.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/chatgpt-enterprise/GraphicManagement.vue": ()=>m(()=>import("./GraphicManagement.7705b027.js"), ["./GraphicManagement.7705b027.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/chatgpt-enterprise/GraphicSecurity.vue": ()=>m(()=>import("./GraphicSecurity.1ff55f41.js"), ["./GraphicSecurity.1ff55f41.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/chatgpt-enterprise/GraphicSpeed.vue": ()=>m(()=>import("./GraphicSpeed.1752aa46.js"), ["./GraphicSpeed.1752aa46.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/chatgpt-enterprise/PricingCard.vue": ()=>m(()=>import("./PricingCard.fa888e36.js"), ["./PricingCard.fa888e36.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/chatgpt-enterprise/Testimonial.vue": ()=>m(()=>import("./Testimonial.2ce00a44.js"), ["./Testimonial.2ce00a44.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/chatgpt-overview/AskMeAnything.vue": ()=>m(()=>import("./AskMeAnything.3e2c9350.js"), ["./AskMeAnything.3e2c9350.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/chatgpt-overview/GPTs.vue": ()=>m(()=>import("./GPTs.1b9866b0.js"), ["./GPTs.1b9866b0.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/chatgpt-pricing/FeatureComparison.vue": ()=>m(()=>import("./FeatureComparison.4f10c2b2.js"), ["./FeatureComparison.4f10c2b2.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/chatgpt-pricing/Plans.vue": ()=>m(()=>import("./Plans.b08341d8.js"), ["./Plans.b08341d8.js", "./PricingCard.c7c56917.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./PricingCategoryTitle.3d4e41ee.js"], import.meta.url),
                "../snippets/landing/chatgpt-pricing/PricingCard.vue": ()=>m(()=>import("./PricingCard.c7c56917.js"), ["./PricingCard.c7c56917.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/chatgpt-pricing/PricingCategoryTitle.vue": ()=>m(()=>import("./PricingCategoryTitle.3d4e41ee.js"), ["./PricingCategoryTitle.3d4e41ee.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/chatgpt-team/GetStarted.vue": ()=>m(()=>import("./GetStarted.d9c9b593.js"), ["./GetStarted.d9c9b593.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/dall-e-3/FourUp.vue": ()=>m(()=>import("./FourUp.77673abd.js"), ["./FourUp.77673abd.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./ImageModal.b830758a.js", "./ImageModal.f84fffe6.css"], import.meta.url),
                "../snippets/landing/dall-e-3/MasonryGallery.vue": ()=>m(()=>import("./MasonryGallery.a3d20269.js"), ["./MasonryGallery.a3d20269.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ImageModal.b830758a.js", "./ImageModal.f84fffe6.css"], import.meta.url),
                "../snippets/landing/gpt-4/Demo.vue": ()=>m(()=>import("./Demo.7f723544.js"), ["./Demo.7f723544.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/landing/gpt-4/Stats.vue": ()=>m(()=>import("./Stats.1a8f4a73.js"), ["./Stats.1a8f4a73.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/landing/pricing/GPTVPricingCalculator.vue": ()=>m(()=>import("./GPTVPricingCalculator.e99b4880.js"), ["./GPTVPricingCalculator.e99b4880.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./GPTVPricingCalculator.34feaa7e.css"], import.meta.url),
                "../snippets/landing/security/Compliance.vue": ()=>m(()=>import("./Compliance.860acb3a.js"), ["./Compliance.860acb3a.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/landing/sora/Canvas.vue": ()=>m(()=>import("./Canvas.db18e8a6.js"), ["./Canvas.db18e8a6.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/sora/Capability.vue": ()=>m(()=>import("./Capability.029dd25c.js"), ["./Capability.029dd25c.js", "./Video.bc72cd15.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./VideoDetails.04ef670e.js"], import.meta.url),
                "../snippets/landing/sora/Credits.vue": ()=>m(()=>import("./Credits.62928db1.js"), ["./Credits.62928db1.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/sora/Hero.vue": ()=>m(()=>import("./Hero.35e0763b.js"), ["./Hero.35e0763b.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/sora/Page.vue": ()=>m(()=>import("./Page.72314bda.js"), ["./Page.72314bda.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Hero.35e0763b.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./Subnav.88b36fce.js", "./Capability.029dd25c.js", "./Video.bc72cd15.js", "./VideoDetails.04ef670e.js", "./Research.53686f75.js", "./Safety.13bf6479.js", "./Credits.62928db1.js", "./VideoModal.48308df3.js", "./VideoModal.0a658823.css"], import.meta.url),
                "../snippets/landing/sora/Research.vue": ()=>m(()=>import("./Research.53686f75.js"), ["./Research.53686f75.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/sora/Safety.vue": ()=>m(()=>import("./Safety.13bf6479.js"), ["./Safety.13bf6479.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/sora/SteppedProcess.vue": ()=>m(()=>import("./SteppedProcess.ee8416d4.js"), ["./SteppedProcess.ee8416d4.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./SteppedProcess.91a81973.css"], import.meta.url),
                "../snippets/landing/sora/Subnav.vue": ()=>m(()=>import("./Subnav.88b36fce.js"), ["./Subnav.88b36fce.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/landing/sora/Video.vue": ()=>m(()=>import("./Video.bc72cd15.js"), ["./Video.bc72cd15.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./VideoDetails.04ef670e.js"], import.meta.url),
                "../snippets/landing/sora/VideoDetails.vue": ()=>m(()=>import("./VideoDetails.04ef670e.js"), ["./VideoDetails.04ef670e.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/landing/sora/VideoModal.vue": ()=>m(()=>import("./VideoModal.48308df3.js"), ["./VideoModal.48308df3.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./VideoDetails.04ef670e.js", "./VideoModal.0a658823.css"], import.meta.url),
                "../snippets/research/ai-and-compute/Appendix.vue": ()=>m(()=>import("./Appendix.b639f080.js"), ["./Appendix.b639f080.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/ai-and-compute/ComputeIncrease.vue": ()=>m(()=>import("./ComputeIncrease.fe038c26.js"), ["./ComputeIncrease.fe038c26.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./ComputeIncrease.366cc533.css"], import.meta.url),
                "../snippets/research/ai-and-compute/ComputeUsage.vue": ()=>m(()=>import("./ComputeUsage.5d29e788.js"), ["./ComputeUsage.5d29e788.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./ComputeUsage.f49a5001.css"], import.meta.url),
                "../snippets/research/ai-and-efficiency/Compute.vue": ()=>m(()=>import("./Compute.f9c41ef0.js"), ["./Compute.f9c41ef0.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Compute.40a16777.css"], import.meta.url),
                "../snippets/research/ai-and-efficiency/Leaderboard.vue": ()=>m(()=>import("./Leaderboard.35a959b0.js"), ["./Leaderboard.35a959b0.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Leaderboard.926bbb0e.css"], import.meta.url),
                "../snippets/research/better-language-models/Carousel.vue": ()=>m(()=>import("./Carousel.ee4f2afb.js"), ["./Carousel.ee4f2afb.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Carousel.a1975f57.css"], import.meta.url),
                "../snippets/research/better-language-models/Samples.vue": ()=>m(()=>import("./Samples.7dc5b2d8.js"), ["./Samples.7dc5b2d8.js", "./Carousel.ee4f2afb.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Carousel.a1975f57.css"], import.meta.url),
                "../snippets/research/better-language-models/Tasks.vue": ()=>m(()=>import("./Tasks.eb83a49a.js"), ["./Tasks.eb83a49a.js", "./Carousel.ee4f2afb.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Carousel.a1975f57.css", "./Tasks.3757b179.css"], import.meta.url),
                "../snippets/research/clip/PerformanceTable.vue": ()=>m(()=>import("./PerformanceTable.d527da1d.js"), ["./PerformanceTable.d527da1d.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./PerformanceTable.b75e393c.css"], import.meta.url),
                "../snippets/research/clip/ProbeAccuracy.vue": ()=>m(()=>import("./ProbeAccuracy.6e181fcf.js"), ["./ProbeAccuracy.6e181fcf.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/clip/ZeroShotGrid.vue": ()=>m(()=>import("./ZeroShotGrid.9632eaa7.js"), ["./ZeroShotGrid.9632eaa7.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/critiques/Sample.vue": ()=>m(()=>import("./Sample.db99db9d.js"), ["./Sample.db99db9d.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./shuffle.4daab733.js", "./smarten.a0ad438b.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/dall-e/PromptCard.vue": ()=>m(()=>import("./PromptCard.810d9536.js"), ["./PromptCard.810d9536.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./PromptCard.9c60e6f4.css"], import.meta.url),
                "../snippets/research/dall-e/Samples.vue": ()=>m(()=>import("./Samples.1630a0f9.js"), ["./Samples.1630a0f9.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./Samples.ce44e1cb.css"], import.meta.url),
                "../snippets/research/debate/Demo.vue": ()=>m(()=>import("./Demo.332a8687.js"), ["./Demo.332a8687.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Demo.8142541e.css"], import.meta.url),
                "../snippets/research/discovering-types-for-entity-disambiguation/AnaphoraDiagram.vue": ()=>m(()=>import("./AnaphoraDiagram.e6e51d38.js"), ["./AnaphoraDiagram.e6e51d38.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./AnaphoraDiagram.ed0600d8.css"], import.meta.url),
                "../snippets/research/discovering-types-for-entity-disambiguation/DeepTypesExample.vue": ()=>m(()=>import("./DeepTypesExample.9414744b.js"), ["./DeepTypesExample.9414744b.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./DeepTypesExample.33f97b69.css"], import.meta.url),
                "../snippets/research/discovering-types-for-entity-disambiguation/HeroExample.vue": ()=>m(()=>import("./HeroExample.750c5359.js"), ["./HeroExample.750c5359.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./HeroExample.e51bdedb.css"], import.meta.url),
                "../snippets/research/discovering-types-for-entity-disambiguation/RocDiagram.vue": ()=>m(()=>import("./RocDiagram.9c471abe.js"), ["./RocDiagram.9c471abe.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./RocDiagram.81319d09.css"], import.meta.url),
                "../snippets/research/discovering-types-for-entity-disambiguation/WindowClassifierDiagram.vue": ()=>m(()=>import("./WindowClassifierDiagram.8a5a0274.js"), ["./WindowClassifierDiagram.8a5a0274.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./WindowClassifierDiagram.305c2962.css"], import.meta.url),
                "../snippets/research/discovering-types-for-entity-disambiguation/WindowTypeDiscovery.vue": ()=>m(()=>import("./WindowTypeDiscovery.55192b3f.js"), ["./WindowTypeDiscovery.55192b3f.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./WindowTypeDiscovery.3eb76728.css"], import.meta.url),
                "../snippets/research/discovering-types-for-entity-disambiguation/WindowTypeDiscoveryHuman.vue": ()=>m(()=>import("./WindowTypeDiscoveryHuman.3b786ef1.js"), ["./WindowTypeDiscoveryHuman.3b786ef1.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./WindowTypeDiscoveryHuman.69d1e531.css"], import.meta.url),
                "../snippets/research/emergent-tool-use/Abilities.vue": ()=>m(()=>import("./Abilities.daa7e8cd.js"), ["./Abilities.daa7e8cd.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/emergent-tool-use/Explorations.vue": ()=>m(()=>import("./Explorations.2ae11ae9.js"), ["./Explorations.2ae11ae9.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/emergent-tool-use/InteractiveEmergence.vue": ()=>m(()=>import("./InteractiveEmergence.72e94664.js"), ["./InteractiveEmergence.72e94664.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./InteractiveEmergence.3745dc12.css"], import.meta.url),
                "../snippets/research/emergent-tool-use/SkillCharts.vue": ()=>m(()=>import("./SkillCharts.7d4972d0.js"), ["./SkillCharts.7d4972d0.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/emergent-tool-use/SurprisingBehaviors.vue": ()=>m(()=>import("./SurprisingBehaviors.51464a12.js"), ["./SurprisingBehaviors.51464a12.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/energy-based-models/CrossClassSampling.vue": ()=>m(()=>import("./CrossClassSampling.059670e8.js"), ["./CrossClassSampling.059670e8.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/energy-based-models/ImageCompletions.vue": ()=>m(()=>import("./ImageCompletions.17887e6c.js"), ["./ImageCompletions.17887e6c.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/energy-based-models/RobotHand.vue": ()=>m(()=>import("./RobotHand.31d40d17.js"), ["./RobotHand.31d40d17.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/fine-tuning-gpt-2/CopySources.vue": ()=>m(()=>import("./CopySources.d365637a.js"), ["./CopySources.d365637a.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./CopySources.beaae78d.css"], import.meta.url),
                "../snippets/research/fine-tuning-gpt-2/SampleSummarizationTldr.vue": ()=>m(()=>import("./SampleSummarizationTldr.ebd6a195.js"), ["./SampleSummarizationTldr.ebd6a195.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./smarten.a0ad438b.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/fine-tuning-gpt-2/SampleTextContinuationSentiment.vue": ()=>m(()=>import("./SampleTextContinuationSentiment.0504053d.js"), ["./SampleTextContinuationSentiment.0504053d.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./smarten.a0ad438b.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/formal-math/ProblemCard.vue": ()=>m(()=>import("./ProblemCard.f83d651c.js"), ["./ProblemCard.f83d651c.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./ProblemCard.8a6cc032.css"], import.meta.url),
                "../snippets/research/glow/Demo.vue": ()=>m(()=>import("./Demo.02ca58da.js"), ["./Demo.02ca58da.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/gpt-2-1-5b-release/Table.vue": ()=>m(()=>import("./Table.6fe5e168.js"), ["./Table.6fe5e168.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./Table.58d9e0be.css"], import.meta.url),
                "../snippets/research/gpt-4/SteerabilitySamples.vue": ()=>m(()=>import("./SteerabilitySamples.5a730986.js"), ["./SteerabilitySamples.5a730986.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/gpt-4/VisualSamples.vue": ()=>m(()=>import("./VisualSamples.8b28b34d.js"), ["./VisualSamples.8b28b34d.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/grade-school-math/Charts.vue": ()=>m(()=>import("./Charts.1f16dbf2.js"), ["./Charts.1f16dbf2.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/grade-school-math/Samples.vue": ()=>m(()=>import("./Samples.0e6ae416.js"), ["./Samples.0e6ae416.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/image-gpt/AccuracyCharts.vue": ()=>m(()=>import("./AccuracyCharts.e1c5064c.js"), ["./AccuracyCharts.e1c5064c.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/image-gpt/Completions.vue": ()=>m(()=>import("./Completions.07522e00.js"), ["./Completions.07522e00.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./shuffle.4daab733.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/improving-language-model-behavior/Conversation.vue": ()=>m(()=>import("./Conversation.3a895469.js"), ["./Conversation.3a895469.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/ingredients-for-robotics-research/Environments.vue": ()=>m(()=>import("./Environments.9f5e937c.js"), ["./Environments.9f5e937c.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/instruction-following/Methods.vue": ()=>m(()=>import("./Methods.f2ae3691.js"), ["./Methods.f2ae3691.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/instruction-following/ResultComparisonCharts.vue": ()=>m(()=>import("./ResultComparisonCharts.0d222cc0.js"), ["./ResultComparisonCharts.0d222cc0.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/instruction-following/Samples.vue": ()=>m(()=>import("./Samples.c85986eb.js"), ["./Samples.c85986eb.js", "./Carousel.ee4f2afb.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Carousel.a1975f57.css"], import.meta.url),
                "../snippets/research/jukebox/ArtistCluster.vue": ()=>m(()=>import("./ArtistCluster.09df75f7.js"), ["./ArtistCluster.09df75f7.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./ArtistCluster.49e4a19e.css"], import.meta.url),
                "../snippets/research/jukebox/Overview.vue": ()=>m(()=>import("./Overview.3cb3e5f9.js"), ["./Overview.3cb3e5f9.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/jukebox/Samples.vue": ()=>m(()=>import("./Samples.251f38ae.js"), ["./Samples.251f38ae.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Samples.f1ccf6d1.css"], import.meta.url),
                "../snippets/research/jukebox/Vqvae.vue": ()=>m(()=>import("./Vqvae.676da0b1.js"), ["./Vqvae.676da0b1.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Vqvae.3af6266e.css"], import.meta.url),
                "../snippets/research/language-models-can-explain-neurons/Algorithm.vue": ()=>m(()=>import("./Algorithm.15eb1a9b.js"), ["./Algorithm.15eb1a9b.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./AnimatedNeuronParagraph.469524a0.js", "./HighlightedWord.b4c0feee.js", "./Algorithm.22ff07b3.css"], import.meta.url),
                "../snippets/research/language-models-can-explain-neurons/AnimatedNeuronParagraph.vue": ()=>m(()=>import("./AnimatedNeuronParagraph.469524a0.js"), ["./AnimatedNeuronParagraph.469524a0.js", "./HighlightedWord.b4c0feee.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/language-models-can-explain-neurons/HighlightedWord.vue": ()=>m(()=>import("./HighlightedWord.b4c0feee.js"), ["./HighlightedWord.b4c0feee.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/language-models-can-explain-neurons/Layers.vue": ()=>m(()=>import("./Layers.efc645e6.js"), ["./Layers.efc645e6.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/learning-to-summarize-with-human-feedback/CNNDMSamples.vue": ()=>m(()=>import("./CNNDMSamples.0b0094b1.js"), ["./CNNDMSamples.0b0094b1.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./shuffle.4daab733.js", "./smarten.a0ad438b.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./CNNDMSamples.1a76fc2f.css"], import.meta.url),
                "../snippets/research/learning-to-summarize-with-human-feedback/OptimSample.vue": ()=>m(()=>import("./OptimSample.b991d323.js"), ["./OptimSample.b991d323.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/learning-to-summarize-with-human-feedback/TLDRSamples.vue": ()=>m(()=>import("./TLDRSamples.181d3dcf.js"), ["./TLDRSamples.181d3dcf.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./shuffle.4daab733.js", "./smarten.a0ad438b.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/learning-to-summarize-with-human-feedback/TransferResults.vue": ()=>m(()=>import("./TransferResults.b5e4cfc8.js"), ["./TransferResults.b5e4cfc8.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/measuring-goodharts-law/WebGPTPerformance.vue": ()=>m(()=>import("./WebGPTPerformance.12e08876.js"), ["./WebGPTPerformance.12e08876.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/multimodal-neurons/Algebra.vue": ()=>m(()=>import("./Algebra.3dabf3ff.js"), ["./Algebra.3dabf3ff.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/multimodal-neurons/Apple.vue": ()=>m(()=>import("./Apple.89e3d341.js"), ["./Apple.89e3d341.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Apple.4ba376c8.css"], import.meta.url),
                "../snippets/research/multimodal-neurons/ByComparison.vue": ()=>m(()=>import("./ByComparison.834934b2.js"), ["./ByComparison.834934b2.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/multimodal-neurons/ComparisonGrid.vue": ()=>m(()=>import("./ComparisonGrid.287252d9.js"), ["./ComparisonGrid.287252d9.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/multimodal-neurons/Composition.vue": ()=>m(()=>import("./Composition.26e4356f.js"), ["./Composition.26e4356f.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/multimodal-neurons/Finance.vue": ()=>m(()=>import("./Finance.575eb90d.js"), ["./Finance.575eb90d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Finance.693aed6d.css"], import.meta.url),
                "../snippets/research/musenet/Demo.vue": ()=>m(()=>import("./Demo.b2f006d6.js"), ["./Demo.b2f006d6.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Demo.9183359a.css"], import.meta.url),
                "../snippets/research/musenet/Notebook.vue": ()=>m(()=>import("./Notebook.48b4ec30.js"), ["./Notebook.48b4ec30.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Notebook.61c6f7d5.css"], import.meta.url),
                "../snippets/research/musenet/Sample.vue": ()=>m(()=>import("./Sample.4d7a5e50.js"), ["./Sample.4d7a5e50.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/openai-five/Demo.vue": ()=>m(()=>import("./Demo.27cad25b.js"), ["./Demo.27cad25b.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/process-supervision/Carousels.vue": ()=>m(()=>import("./Carousels.459c77ca.js"), ["./Carousels.459c77ca.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./Carousels.7bd956b5.css"], import.meta.url),
                "../snippets/research/procgen-benchmark/Ablation.vue": ()=>m(()=>import("./Ablation.358b2005.js"), ["./Ablation.358b2005.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/procgen-benchmark/Carousel.vue": ()=>m(()=>import("./Carousel.494d6133.js"), ["./Carousel.494d6133.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Carousel.f02f7e19.css"], import.meta.url),
                "../snippets/research/procgen-benchmark/Levels.vue": ()=>m(()=>import("./Levels.4bbb751e.js"), ["./Levels.4bbb751e.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/quantifying-generalization-in-reinforcement-learning/Grid.vue": ()=>m(()=>import("./Grid.24affa84.js"), ["./Grid.24affa84.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/reinforcement-learning-with-prediction-based-rewards/Demo.vue": ()=>m(()=>import("./Demo.b57b52fc.js"), ["./Demo.b57b52fc.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Demo.ceeba6f7.css"], import.meta.url),
                "../snippets/research/reptile/Code.vue": ()=>m(()=>import("./Code.ef628bba.js"), ["./Code.ef628bba.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/reptile/Demo.vue": ()=>m(()=>import("./Demo.5080a5cb.js"), ["./Demo.5080a5cb.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./Demo.fa12b627.css"], import.meta.url),
                "../snippets/research/roboschool/Table.vue": ()=>m(()=>import("./Table.850c3467.js"), ["./Table.850c3467.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/safety-gym/Notebook.vue": ()=>m(()=>import("./Notebook.c04728d7.js"), ["./Notebook.c04728d7.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/science-of-ai/TradeoffExperience.vue": ()=>m(()=>import("./TradeoffExperience.8312c3f9.js"), ["./TradeoffExperience.8312c3f9.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./usePageTransition.0d7a0e1d.js", "./TradeoffExperience.c9ab2f3b.css"], import.meta.url),
                "../snippets/research/solving-rubiks-cube/HiddenStateVisualization.vue": ()=>m(()=>import("./HiddenStateVisualization.12422f3a.js"), ["./HiddenStateVisualization.12422f3a.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./HiddenStateVisualization.a0bac433.css"], import.meta.url),
                "../snippets/research/solving-rubiks-cube/Perbutations.vue": ()=>m(()=>import("./Perbutations.982306cd.js"), ["./Perbutations.982306cd.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/research/solving-rubiks-cube/TimeToSuccess.vue": ()=>m(()=>import("./TimeToSuccess.47229c49.js"), ["./TimeToSuccess.47229c49.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./usePageTransition.0d7a0e1d.js", "./Footer.e612ddc8.js", "./Footer.6cdd2dae.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/sora/Madlib.vue": ()=>m(()=>import("./Madlib.76632dc0.js"), ["./Madlib.76632dc0.js", "./InlineVideo.f1cced25.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/research/sora/Noise.vue": ()=>m(()=>import("./Noise.c1addab1.js"), ["./Noise.c1addab1.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/sora/Sync.vue": ()=>m(()=>import("./Sync.edf72d20.js"), ["./Sync.edf72d20.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/sora/Turtles.vue": ()=>m(()=>import("./Turtles.aefef698.js"), ["./Turtles.aefef698.js", "./InlineVideo.f1cced25.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/research/sora/VideoGrid.vue": ()=>m(()=>import("./VideoGrid.0c18bbee.js"), ["./VideoGrid.0c18bbee.js", "./InlineVideo.f1cced25.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/research/sora/VideoTwoUpSync.vue": ()=>m(()=>import("./VideoTwoUpSync.f9f75dcc.js"), ["./VideoTwoUpSync.f9f75dcc.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/sparse-transformer/AttentionMatrix.vue": ()=>m(()=>import("./AttentionMatrix.c85736c1.js"), ["./AttentionMatrix.c85736c1.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/summarizing-books/BookCoverCarousel.vue": ()=>m(()=>import("./BookCoverCarousel.90089040.js"), ["./BookCoverCarousel.90089040.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./Page.46789725.js", "./Page.2c57cd21.css", "./PreviousButton.6d107e8d.js", "./NextButton.3789a8f2.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/summarizing-books/NextButton.vue": ()=>m(()=>import("./NextButton.3789a8f2.js"), ["./NextButton.3789a8f2.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/summarizing-books/Page.vue": ()=>m(()=>import("./Page.46789725.js"), ["./Page.46789725.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./Page.2c57cd21.css"], import.meta.url),
                "../snippets/research/summarizing-books/PagesCarousel.vue": ()=>m(()=>import("./PagesCarousel.3ce4ad31.js"), ["./PagesCarousel.3ce4ad31.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Page.46789725.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./Page.2c57cd21.css", "./NextButton.3789a8f2.js", "./PreviousButton.6d107e8d.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/summarizing-books/PreviousButton.vue": ()=>m(()=>import("./PreviousButton.6d107e8d.js"), ["./PreviousButton.6d107e8d.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css"], import.meta.url),
                "../snippets/research/summarizing-books/Samples.vue": ()=>m(()=>import("./Samples.54dbfe47.js"), ["./Samples.54dbfe47.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./BookCoverCarousel.90089040.js", "./Page.46789725.js", "./Page.2c57cd21.css", "./PreviousButton.6d107e8d.js", "./NextButton.3789a8f2.js", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js", "./PagesCarousel.3ce4ad31.js"], import.meta.url),
                "../snippets/research/techniques-for-training-large-neural-networks/NaiveSetup.vue": ()=>m(()=>import("./NaiveSetup.bf3d028c.js"), ["./NaiveSetup.bf3d028c.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/techniques-for-training-large-neural-networks/Parallelism.vue": ()=>m(()=>import("./Parallelism.62a3c720.js"), ["./Parallelism.62a3c720.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/techniques-for-training-large-neural-networks/PipeliningSchemas.vue": ()=>m(()=>import("./PipeliningSchemas.c9e4c548.js"), ["./PipeliningSchemas.c9e4c548.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/testing-robustness/Swans.vue": ()=>m(()=>import("./Swans.9f49ddff.js"), ["./Swans.9f49ddff.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/triton/Architecture.vue": ()=>m(()=>import("./Architecture.e1d45c94.js"), ["./Architecture.e1d45c94.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/triton/CompilerMemory.vue": ()=>m(()=>import("./CompilerMemory.4fb542e2.js"), ["./CompilerMemory.4fb542e2.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/triton/ParallelizationDiagram.vue": ()=>m(()=>import("./ParallelizationDiagram.839070bd.js"), ["./ParallelizationDiagram.839070bd.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/triton/V100Chart.vue": ()=>m(()=>import("./V100Chart.da56d88a.js"), ["./V100Chart.da56d88a.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./ObservableNotebook.df97a0a9.js", "./Listing.f43f6a93.js", "./slugify.068b7bc9.js", "./useResourceIndexData.df29b123.js", "./useHeadSeo.47db476e.js", "./usePageLoading.e8799f9d.js"], import.meta.url),
                "../snippets/research/triton/VectorAddition.vue": ()=>m(()=>import("./VectorAddition.cc6aa52a.js"), ["./VectorAddition.cc6aa52a.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/unsupervised-sentiment-neuron/Tables.vue": ()=>m(()=>import("./Tables.10e0bd78.js"), ["./Tables.10e0bd78.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/vpt/CraftingTableSequence.vue": ()=>m(()=>import("./CraftingTableSequence.d48103e0.js"), ["./CraftingTableSequence.d48103e0.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/vpt/DiamondPickAxeSequence.vue": ()=>m(()=>import("./DiamondPickAxeSequence.9117431a.js"), ["./DiamondPickAxeSequence.9117431a.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/vpt/OtherSkills.vue": ()=>m(()=>import("./OtherSkills.ae2b33f8.js"), ["./OtherSkills.ae2b33f8.js", "./InlineVideo.f1cced25.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/research/vpt/StonePickAxeSequence.vue": ()=>m(()=>import("./StonePickAxeSequence.5f021dd3.js"), ["./StonePickAxeSequence.5f021dd3.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/vpt/Tasks.vue": ()=>m(()=>import("./Tasks.31add8a7.js"), ["./Tasks.31add8a7.js", "./InlineVideo.f1cced25.js", "./snippets.3042dd9d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./BlockTimedTabs.vue.683bc8fd.js", "./BlockTimedTabs.b12ff6e9.css", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./Footer.6cdd2dae.css", "./LazyAutoPausingVimeo.5708878c.js"], import.meta.url),
                "../snippets/research/webgpt/ELI5Results.vue": ()=>m(()=>import("./ELI5Results.ee1b7b79.js"), ["./ELI5Results.ee1b7b79.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/webgpt/Samples.vue": ()=>m(()=>import("./Samples.e71f8a8e.js"), ["./Samples.e71f8a8e.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/webgpt/TruthfulQAResults.vue": ()=>m(()=>import("./TruthfulQAResults.5adab393.js"), ["./TruthfulQAResults.5adab393.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url),
                "../snippets/research/whisper/Samples.vue": ()=>m(()=>import("./Samples.5fccadc9.js"), ["./Samples.5fccadc9.js", "./Footer.e612ddc8.js", "./usePageTransition.0d7a0e1d.js", "./entry.d1b74521.js", "./entry.08e0417e.css", "./Footer.6cdd2dae.css", "./smarten.a0ad438b.js", "./Samples.731adce7.css"], import.meta.url)
            })[`../snippets/${ba[`Snippet${i.resource.component}`]}.vue`]
              , g = typeof h == "function" ? h() : null;
            g || d(new Error(`Snippet ${i.resource.component} not found`)),
            u(g)
        }
        ).catch(u=>{
            console.error(u)
        }
        ));
        return (u,d)=>e(l) ? (o(),
        T(Re(e(l)), {
            key: 0,
            images: e(c),
            data: e(s),
            layout: t.layout
        }, null, 8, ["images", "data", "layout"])) : p("", !0)
    }
}
  , va = {
    __name: "BlockCodeSnippet",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>{
            var u, d;
            return ((d = (u = i.block.relatedItems) == null ? void 0 : u.snippet) == null ? void 0 : d[0]) ?? null
        }
        )
          , s = x(()=>{
            var u, d;
            return ((d = (u = i.block.media) == null ? void 0 : u.images) == null ? void 0 : d.map(_=>_.default)) ?? []
        }
        )
          , c = x(()=>i.block.content.data)
          , l = x(()=>i.block.content.display);
        return (u,d)=>{
            const _ = ge;
            return e(n) ? (o(),
            r("div", {
                key: 0,
                class: y(e(de)(t.blocks, t.block))
            }, [a("div", {
                class: y([{
                    container: e(l) ? e(l) !== "full-bleed" : u.layout !== "full-bleed"
                }])
            }, [a("div", {
                class: y(e(l) !== "full-grid" && e(l) !== "full-bleed" ? "md:w-6-cols lg:ml-2-cols lg:w-6-cols relative" : "w-full")
            }, [w(_, {
                resource: e(n),
                images: e(s),
                data: e(c),
                layout: e(l) ? e(l) : u.layout
            }, null, 8, ["resource", "images", "data", "layout"])], 2)], 2)], 2)) : p("", !0)
        }
    }
}
  , ya = {
    class: "flex flex-col"
}
  , fa = {
    class: "overflow-auto no-scrollbar"
}
  , ka = {
    class: "min-w-max relative"
}
  , wa = ["aria-labelledby"]
  , Ta = ["id", "aria-selected", "onClick", "onKeydown", "onMouseenter"]
  , xa = {
    class: "absolute w-full min-w-max h-1 bottom-0 left-0 bg-[var(--border-secondary)]"
}
  , Ea = {
    __name: "Tabs",
    props: {
        tabs: {
            type: Array,
            required: !0
        },
        id: {
            type: String,
            required: !0
        },
        selected: {
            type: Number,
            required: !0
        },
        title: {
            type: String,
            required: !1
        }
    },
    emits: ["change", "tab-mouseenter"],
    setup(t, {emit: i}) {
        const n = t
          , s = D(0)
          , c = D(0)
          , l = D([])
          , u = h=>{
            i("change", h)
        }
          , d = h=>{
            if (typeof h > "u")
                return;
            const g = l.value[h];
            g.offsetWidth === 0 ? setTimeout(()=>{
                d(h)
            }
            , 50) : (s.value = g.offsetWidth,
            c.value = g.offsetLeft)
        }
        ;
        lt(()=>n.selected, h=>{
            d(h)
        }
        ),
        te(()=>{
            d(n.selected)
        }
        );
        const _ = (h,g)=>{
            const b = l.value;
            h.keyCode === 37 && b.value[g - 1] && (b.value[g - 1].focus(),
            selected.value = g - 1),
            h.keyCode === 39 && b.value[g + 1] && (b.value[g + 1].focus(),
            selected.value = g + 1),
            setTimeout(()=>{
                window.dispatchEvent(new Event("resize"))
            }
            , 10)
        }
        ;
        return (h,g)=>{
            const b = N;
            return o(),
            r("div", ya, [t.title ? (o(),
            T(b, {
                key: 0,
                id: t.id,
                level: 2,
                title: t.title,
                class: "sr-only"
            }, null, 8, ["id", "title"])) : p("", !0), a("div", fa, [a("div", ka, [a("ul", {
                "aria-labelledby": t.id,
                role: "tablist",
                class: "flex flex-row min-w-max"
            }, [(o(!0),
            r(S, null, A(t.tabs, (v,k)=>(o(),
            r("li", {
                key: v.id,
                class: "mr-16 lg:mr-24 last:mr-0",
                role: "presentation"
            }, [a("a", {
                id: `${t.id}tab${v.id}`,
                ref_for: !0,
                ref_key: "tabRefs",
                ref: l,
                href: "#",
                class: y(`ui-link f-ui-1 relative block pb-8 lg:pb-12 whitespace-nowrap ${k === t.selected ? "text-primary" : "text-secondary"}`),
                role: "tab",
                "aria-selected": k === t.selected,
                onClick: U(I=>u(k), ["prevent"]),
                onKeydown: I=>_(I, k),
                onMouseenter: I=>i("tab-mouseenter", k)
            }, L(v.label), 43, Ta)]))), 128))], 8, wa), a("div", xa, [a("div", {
                class: "bg-[var(--text-primary)] h-1 w-[200px] absolute bottom-0 left-0 transition-500 transition-all origin-left",
                style: se({
                    transform: `translateX(${e(c)}px) scaleX(${e(s) / 200})`
                })
            }, null, 4)])])]), ct(h.$slots, "default")])
        }
    }
};
let nt = 0;
const Sa = {
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    data() {
        return nt += 1,
        {
            selected: 0,
            theme: this.block.content.colorTheme
        }
    },
    computed: {
        id() {
            return `Demo${nt}`
        },
        tabs() {
            return (this.block.blocks.default || []).map(n=>{
                var c, l;
                const s = {
                    input: null,
                    output: null
                };
                switch (n.content.contentTypeInput) {
                case "text":
                    s.input = n.content.textInput;
                    break;
                case "image":
                    s.input = this.$helpers.media.imagesByRole(n, "imageInput", "default") ?? null;
                    break;
                case "code":
                    s.input = n.content.codeInput,
                    s.inputLang = n.content.codeInputLang;
                    break;
                case "snippet":
                    const u = ((c = n.relatedItems) == null ? void 0 : c.snippetInput[0]) ?? null;
                    u && (s.input = {
                        resource: u,
                        images: this.$helpers.media.imagesByRole(n, "snippetInputImages", "default"),
                        data: n.content.snippetInputData
                    })
                }
                switch (n.content.contentTypeOutput) {
                case "text":
                    s.output = n.content.textOutput;
                    break;
                case "image":
                    s.output = this.$helpers.media.imagesByRole(n, "imageOutput", "default") ?? null;
                    break;
                case "code":
                    s.output = n.content.codeOutput,
                    s.outputLang = n.content.codeOutputLang;
                    break;
                case "snippet":
                    const u = ((l = n.relatedItems) == null ? void 0 : l.snippetOutput[0]) ?? null;
                    u && (s.output = {
                        resource: u,
                        images: this.$helpers.media.imagesByRole(n, "snippetOutputImages", "default"),
                        data: n.content.snippetOutputData
                    })
                }
                return {
                    content: s,
                    link: this.$helpers.blocks.listingLink(n),
                    text: n.content.text,
                    title: n.content.title,
                    inputType: n.content.contentTypeInput,
                    outputType: n.content.contentTypeOutput
                }
            }
            )
        }
    },
    mounted() {
        this.onElementObserved()
    },
    methods: {
        handleClick(t) {
            this.selected = t,
            setTimeout(()=>{
                window.dispatchEvent(new Event("resize"))
            }
            , 10)
        },
        onElementObserved() {
            const t = new IntersectionObserver(i=>{
                i.forEach(n=>{
                    n.intersectionRatio > 0 && (n.target.tagName !== "CODE" && n.target.classList.contains("opacity-0") ? n.target.classList.remove("opacity-0") : n.target.dispatchEvent(new Event("observed")),
                    t.unobserve(n.target))
                }
                )
            }
            );
            this.$refs.observe && this.$refs.observe.forEach(i=>{
                t.observe(i)
            }
            )
        },
        switchFocus(t, i) {
            const n = this.$refs.tab;
            t.keyCode === 37 && n[i - 1] && (n[i - 1].focus(),
            this.selected = i - 1),
            t.keyCode === 39 && n[i + 1] && (n[i + 1].focus(),
            this.selected = i + 1),
            setTimeout(()=>{
                window.dispatchEvent(new Event("resize"))
            }
            , 10)
        },
        typeWriter(t, i) {
            let n = 0
              , s = 20;
            const c = this.$refs[i][0];
            function l() {
                n < t.length ? (c.innerHTML += t.charAt(n),
                n++,
                setTimeout(l, s)) : c.classList.add("animate-[cursorBlink_600ms_ease-in-out_infinite_alternate]")
            }
            l()
        },
        typeCode(t, i) {
            setTimeout(()=>{
                const n = t.target
                  , s = Object.values(n.childNodes);
                n.innerHTML = '<span class="bg-[color:rgba(255,255,255,0.2)]"></span>';
                function c(u, d) {
                    return Math.floor(Math.random() * (d - u) + u)
                }
                function l(u) {
                    u === 0 && (n.style.visibility = "visible"),
                    s.hasOwnProperty(u) && (n.querySelector("span").appendChild(s[u]),
                    n.scrollTop = n.scrollHeight),
                    u >= s.length && n.classList.add("after:animate-[codeCursorBlink_600ms_ease-in-out_infinite_alternate_100ms]"),
                    u++,
                    setTimeout(function() {
                        l(u)
                    }, c(50, 150))
                }
                l(i)
            }
            , 300)
        }
    }
}
  , Ia = {
    class: "mt-spacing-6"
}
  , La = {
    class: "container"
}
  , Pa = ["id", "aria-labelledby", "tabindex", "hidden"]
  , $a = {
    class: "cols-container"
}
  , Aa = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , Oa = ["innerHTML"]
  , Da = {
    key: 1,
    class: "mt-spacing-4"
}
  , Ca = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols mt-96 md:mt-0"
}
  , Ra = {
    key: 0,
    class: "ui-demo w-full border border-secondary"
}
  , Va = {
    key: 0,
    class: "text-secondary pt-8 px-16 pb-32 lg:pt-14"
}
  , qa = a("span", {
    class: "f-subhead-2"
}, "Input", -1)
  , Ma = {
    class: "mt-spacing-4"
}
  , Ba = {
    key: 1,
    class: "f-code-1"
}
  , ja = ["innerHTML"]
  , Ga = {
    key: 1,
    class: "pt-8 px-16 pb-32 lg:pt-14 border-t border-secondary"
}
  , Fa = a("span", {
    class: "f-subhead-2"
}, "Output", -1)
  , Na = {
    class: "mt-spacing-4"
}
  , Ha = {
    key: 0,
    class: "grid"
}
  , za = {
    class: "row-start-1 col-start-1"
}
  , Ua = ["innerHTML"]
  , Wa = ["onObserved"]
  , Ka = {
    key: 1,
    class: "bg-[color:rgba(var(--text-primary-rgb),0.1)] relative"
}
  , Ja = {
    class: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
}
  , Ya = {
    class: "animate-spin",
    "aria-hidden": "true"
}
  , Xa = {
    key: 2,
    class: "grid"
}
  , Qa = {
    class: "row-start-1 col-start-1 min-w-0"
}
  , Za = {
    class: "f-code-1 pointer-events-none hide-content hljs"
}
  , es = {
    class: "leading-[1.5em] invisible padding-[1em]"
}
  , ts = {
    class: "invisible"
}
  , os = {
    class: "row-start-1 col-start-1 min-w-0"
}
  , is = {
    class: "f-code-1",
    "aria-hidden": "true"
};
function ns(t, i, n, s, c, l) {
    const u = Ea
      , d = X
      , _ = ge
      , h = ee
      , g = Ee
      , b = _e;
    return o(),
    r("div", Ia, [a("div", La, [l.tabs ? (o(),
    r(S, {
        key: 0
    }, [l.tabs.length > 1 ? (o(),
    T(u, {
        key: 0,
        tabs: l.tabs.map((v,k)=>({
            label: v.title,
            id: `${l.id}tab${k}`
        })),
        selected: c.selected,
        id: `${l.id}_tabs`,
        title: "Tabs",
        class: "mb-40 md:mb-48",
        onChange: i[0] || (i[0] = v=>l.handleClick(v))
    }, null, 8, ["tabs", "selected", "id"])) : p("", !0), a("div", null, [(o(!0),
    r(S, null, A(l.tabs, (v,k)=>(o(),
    r("section", {
        key: k,
        id: `demo${l.id}section${k}`,
        role: "tabpanel",
        "aria-labelledby": `#demo${l.id}dropdown${k}`,
        tabindex: k === c.selected ? null : "-1",
        hidden: k !== c.selected
    }, [a("div", $a, [a("div", Aa, [v.text ? (o(),
    r("div", {
        key: 0,
        class: "md:pr-36 lg:pr-0 lg:w-3-cols f-body-1 ui-richtext",
        innerHTML: v.text
    }, null, 8, Oa)) : p("", !0), v.link ? (o(),
    r("div", Da, [w(d, {
        modifier: "underline",
        label: v.link.text,
        url: v.link.url
    }, null, 8, ["label", "url"])])) : p("", !0)]), a("div", Ca, [v.content ? (o(),
    r("div", Ra, [v.content.input ? (o(),
    r("div", Va, [qa, a("div", Ma, [v.inputType === "snippet" ? (o(),
    r(S, {
        key: 0
    }, [v.content.input ? (o(),
    T(_, we(ke({
        key: 0
    }, v.content.input)), null, 16)) : p("", !0)], 64)) : p("", !0), v.inputType === "code" ? (o(),
    r("pre", Ba, [a("code", {
        class: y(["h-full f-code-1 whitespace-pre transition-opacity duration-300 opacity-0", v.content.inputLang ? `language-${v.content.inputLang}` : ""])
    }, L(v.content.input), 3)])) : p("", !0), v.inputType === "image" ? (o(),
    r(S, {
        key: 2
    }, [v.content.input.length === 1 ? (o(),
    T(h, {
        key: 0,
        image: v.content.input[0],
        caption: v.content.input[0].caption,
        classes: "text-right"
    }, null, 8, ["image", "caption"])) : (o(),
    T(g, {
        key: 1,
        items: v.content.input.map(I=>({
            image: I,
            caption: I.caption
        })),
        ratio: "1x1",
        title: "Output",
        modifier: "full"
    }, null, 8, ["items"]))], 64)) : p("", !0), v.inputType === "text" ? (o(),
    r("div", {
        key: 3,
        innerHTML: v.content.input,
        class: "f-body-1 whitespace-pre-wrap"
    }, null, 8, ja)) : p("", !0)])])) : p("", !0), v.content.output ? (o(),
    r("div", Ga, [Fa, a("div", Na, [v.outputType === "text" ? (o(),
    r("div", Ha, [a("div", za, [a("span", {
        innerHTML: v.content.output,
        class: "f-body-1 invisible pointer-events-none"
    }, null, 8, Ua)]), a("div", {
        class: "row-start-1 col-start-1 whitespace-pre-wrap",
        ref_for: !0,
        ref: "observe",
        onObserved: I=>l.typeWriter(v.content.output, `demoText${k}`)
    }, [a("span", {
        ref_for: !0,
        ref: `demoText${k}`,
        "aria-hidden": "true",
        class: "f-body-1 bg-[color:var(--border-secondary)] border-r-[12px] whitespace-pre-wrap"
    }, null, 512)], 40, Wa)])) : p("", !0), v.outputType === "image" ? (o(),
    r("div", Ka, [a("div", Ja, [a("div", Ya, [w(b, {
        name: "Loader400",
        class: "f-subhead-1 a-icon--no-align flex text-secondary a-icon--no-align",
        size: "text"
    })])]), a("div", {
        ref_for: !0,
        ref: "observe",
        class: "opacity-0 transition-opacity delay-[300ms] relative duration-300"
    }, [v.content.output.length === 1 ? (o(),
    T(h, {
        key: 0,
        image: v.content.output[0],
        caption: v.content.output[0].caption,
        classes: "text-right"
    }, null, 8, ["image", "caption"])) : (o(),
    T(g, {
        key: 1,
        items: v.content.output.map(I=>({
            image: I,
            caption: I.caption
        })),
        ratio: "1x1",
        title: "Output",
        modifier: "full"
    }, null, 8, ["items"]))], 512)])) : p("", !0), v.outputType === "code" ? (o(),
    r("div", Xa, [a("div", Qa, [a("pre", Za, [a("code", es, [a("span", ts, L(v.content.output), 1)])])]), a("div", os, [a("pre", is, [a("code", {
        ref_for: !0,
        ref: "observe",
        onObserved: i[1] || (i[1] = I=>l.typeCode(I, 0)),
        class: y(["leading-[1.5em] after:content-[''] after:w-12 after:h-[1.25em] after:inline-block after:bg-[color:white] after:align-text-bottom transition-opacity duration-300 opacity-0", v.content.outputLang ? `language-${v.content.outputLang}` : ""])
    }, L(v.content.output), 35)])])])) : p("", !0), v.outputType === "snippet" ? (o(),
    r("div", {
        key: 3,
        ref_for: !0,
        ref: "observe",
        class: "opacity-0 transition-opacity delay-[300ms] relative duration-300"
    }, [v.content.output ? (o(),
    T(_, we(ke({
        key: 0
    }, v.content.output)), null, 16)) : p("", !0)], 512)) : p("", !0)])])) : p("", !0)])) : p("", !0)])])], 8, Pa))), 128))])], 64)) : p("", !0)])])
}
const rs = le(Sa, [["render", ns]])
  , as = {
    class: "mt-spacing-7"
}
  , ss = {
    class: "container"
}
  , ls = {
    class: "pt-spacing-3 w-full border-t border-[currentColor]"
}
  , cs = {
    class: "cols-container"
}
  , us = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols md:pr-spacing-4"
}
  , ds = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols"
}
  , ps = {
    __name: "BlockFAQ",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>n.blocks.listingLink(i.block))
          , c = x(()=>{
            var l, u;
            return (u = (l = i.block.blocks) == null ? void 0 : l.default) == null ? void 0 : u.filter(d=>d.blockType === dn).map(d=>({
                title: d.content.title,
                content: d.content.text
            }))
        }
        );
        return (l,u)=>{
            const d = N
              , _ = X
              , h = Et;
            return o(),
            r("div", as, [a("div", ss, [a("div", ls, [a("div", cs, [a("div", us, [t.block.content.title ? (o(),
            T(d, {
                key: 0,
                headingLevel: 2,
                class: "f-display-1",
                title: t.block.content.title
            }, null, 8, ["title"])) : p("", !0), e(s) ? (o(),
            T(_, {
                key: 1,
                label: e(s).text,
                url: e(s).url,
                modifier: "underline",
                class: "block xs:mt-24 md:mt-4 md:ml-auto lg:mt-16"
            }, null, 8, ["label", "url"])) : p("", !0)]), a("div", ds, [w(h, {
                items: e(c),
                large: !0,
                richtext: !0,
                spacing: !1,
                class: "mt-spacing-5 md:-mt-spacing-3"
            }, null, 8, ["items"])])])])])])
        }
    }
}
  , ms = {
    class: "mt-spacing-7"
}
  , _s = {
    class: "container"
}
  , hs = {
    class: "pt-spacing-3 mt-spacing-7 w-full border-t border-secondary"
}
  , gs = {
    class: "cols-container"
}
  , bs = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , vs = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols mt-16 md:mt-0"
}
  , ys = ["innerHTML"]
  , St = {
    __name: "BlockFocusArea",
    props: {
        block: {
            type: Object,
            required: !0
        },
        theme: {
            type: String,
            default: null
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            var l, u;
            return {
                title: i.block.content.title,
                description: i.block.content.description,
                items: (u = (l = i.block.blocks) == null ? void 0 : l.default) == null ? void 0 : u.filter(d=>d.blockType === _n).sort((d,_)=>d.position - _.position).map(d=>n.blocks.listingMixedItem(d))
            }
        }
        )
          , c = x(()=>n.blocks.listingLink(i.block));
        return (l,u)=>{
            var g, b, v, k, I, P;
            const d = N
              , _ = X
              , h = oe;
            return o(),
            r("div", ms, [a("div", _s, [a("div", hs, [a("div", gs, [a("div", bs, [(g = e(s)) != null && g.title ? (o(),
            T(d, {
                key: 0,
                "heading-level": 3,
                title: (b = e(s)) == null ? void 0 : b.title,
                class: "f-heading-3"
            }, null, 8, ["title"])) : p("", !0)]), a("div", vs, [(v = e(s)) != null && v.description ? (o(),
            r(S, {
                key: 0
            }, [(k = e(s)) != null && k.description ? (o(),
            r("div", {
                key: 0,
                class: "f-body-1",
                innerHTML: (I = e(s)) == null ? void 0 : I.description
            }, null, 8, ys)) : p("", !0)], 64)) : p("", !0), e(c) ? (o(),
            r("div", {
                key: 1,
                class: y(`block ${(P = e(s)) != null && P.description ? "mt-spacing-4" : "xs:mt-24 md:mt-4 md:ml-auto lg:mt-8"}`)
            }, [w(_, {
                label: e(c).text,
                url: e(c).url,
                modifier: "underline"
            }, null, 8, ["label", "url"])], 2)) : p("", !0)])])]), w(h, {
                blockLink: !0,
                items: e(s).items,
                retainListSpacing: !0,
                theme: t.theme
            }, null, 8, ["items", "theme"])])])
        }
    }
}
  , fs = {
    class: "mt-spacing-7"
}
  , ks = {
    class: "container"
}
  , ws = {
    class: "pt-spacing-3 w-full border-t border-primary"
}
  , Ts = {
    class: "cols-container"
}
  , xs = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , Es = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols mt-16 md:mt-0"
}
  , Ss = ["innerHTML"]
  , Is = {
    __name: "BlockFocusAreas",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>i.block.colorTheme);
        return (s,c)=>{
            var d, _;
            const l = N
              , u = St;
            return o(),
            r("div", fs, [a("div", ks, [a("div", ws, [a("div", Ts, [a("div", xs, [t.block.content.title ? (o(),
            T(l, {
                key: 0,
                "heading-level": 2,
                title: t.block.content.title,
                class: "f-heading-1"
            }, null, 8, ["title"])) : p("", !0)]), a("div", Es, [t.block.content.description ? (o(),
            r(S, {
                key: 0
            }, [t.block.content.description ? (o(),
            r("div", {
                key: 0,
                class: "f-subhead-1",
                innerHTML: t.block.content.description
            }, null, 8, Ss)) : p("", !0)], 64)) : p("", !0)])])])]), (d = t.block.blocks) != null && d.default ? (o(!0),
            r(S, {
                key: 0
            }, A((_ = t.block.blocks) == null ? void 0 : _.default, h=>(o(),
            T(u, {
                block: h,
                theme: e(n)
            }, null, 8, ["block", "theme"]))), 256)) : p("", !0)])
        }
    }
}
  , Ls = {
    class: "mt-spacing-7"
}
  , Ps = {
    class: "cols-container"
}
  , $s = {
    __name: "BlockFeature1Up",
    props: {
        block: {
            type: Object,
            required: !0
        },
        headingLevel: {
            type: Number,
            default: 3
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            var d, _, h;
            return (h = (_ = (d = i.block) == null ? void 0 : d.blocks) == null ? void 0 : _.default) == null ? void 0 : h.filter(g=>g.childKey === bn).map(g=>n.blocks.featureLink(g))
        }
        )
          , c = i.block.content.display ?? "image-right"
          , l = x(()=>n.media.imageByRole(i.block, "feature_1up"))
          , u = i.block.content.variant !== "wayfinding";
        return (d,_)=>{
            const h = ee
              , g = N
              , b = ht;
            return o(),
            r("div", Ls, [a("div", {
                class: y(["container", {
                    "border-t border-primary xs:pt-8 md:pt-12": u
                }])
            }, [a("div", Ps, [e(c) === "image-left" ? (o(),
            r("div", {
                key: 0,
                class: y(["xs:w-6-cols md:w-4-cols lg:w-6-cols", {
                    "xs:order-2 md:order-1 mt-40 md:mt-10": u
                }])
            }, [e(l) ? (o(),
            T(h, {
                key: 0,
                ratio: "1x1",
                image: e(l).default
            }, null, 8, ["image"])) : p("", !0)], 2)) : p("", !0), a("div", {
                class: y(["xs:w-6-cols md:w-4-cols lg:w-6-cols", {
                    "xs:order-2 md:order-1": e(c) === "image-right" && !u
                }, {
                    "xs:order-1 md:order-2": e(c) === "image-left" && u
                }])
            }, [a("div", {
                class: y(["md:pr-36 lg:pr-0 lg:w-4-cols", {
                    "mt-8 md:mt-0": !u
                }])
            }, [u ? (o(),
            T(g, {
                key: 0,
                title: t.block.content.title,
                "heading-level": i.headingLevel,
                class: "f-heading-1"
            }, null, 8, ["title", "heading-level"])) : p("", !0), a("div", {
                class: y(u ? "mt-16 block" : "")
            }, [w(b, {
                title: u ? null : t.block.content.title,
                links: e(s),
                largeTitle: !0,
                subtitle: t.block.content.body
            }, null, 8, ["title", "links", "subtitle"])], 2)], 2)], 2), e(c) === "image-right" ? (o(),
            r("div", {
                key: 1,
                class: y(["xs:w-6-cols xs:order-1 md:w-4-cols md:order-2 lg:w-6-cols", {
                    "mt-40 md:mt-10": u
                }, {
                    "md:mt-10": !u
                }])
            }, [e(l) ? (o(),
            T(h, {
                key: 0,
                ratio: "1x1",
                image: e(l).default
            }, null, 8, ["image"])) : p("", !0)], 2)) : p("", !0)])], 2)])
        }
    }
}
  , As = {
    class: "mt-spacing-7"
}
  , Os = {
    class: "cols-container"
}
  , Ds = {
    __name: "BlockFeature1UpArticle",
    props: {
        block: {
            type: Object,
            required: !0
        },
        headingLevel: {
            type: Number,
            default: 3
        }
    },
    setup(t) {
        var v, k;
        const i = t
          , {$helpers: n} = V()
          , s = i.block.content.display ?? "image-right"
          , c = x(()=>n.relatedItems.firstBrowserItem(i.block, "feature"))
          , l = x(()=>c.value && n.card(c.value))
          , u = i.block.content.inheritance ?? []
          , d = x(()=>{
            let I = i.block.content.title;
            return c && u.includes("title") && (I = c.value.title),
            I
        }
        )
          , _ = x(()=>{
            let I = i.block.content.blurb;
            return c && u.includes("blurb") && (I = c.value.description),
            I
        }
        )
          , h = x(()=>{
            let I = n.media.imageByRole(i.block, "feature_1up", "default");
            return c && u.includes("image") && (I = l.value.image),
            I
        }
        )
          , g = x(()=>c && {
            text: "Read blog post",
            url: n.route(c.value)
        });
        (v = c.value) == null || v.publicationDateFormatted,
        (k = l.value) == null || k.meta.tags;
        const b = i.block.content.variant !== "wayfinding";
        return (I,P)=>{
            const $ = ee
              , C = N
              , q = ht
              , E = _t;
            return o(),
            r("div", As, [a("div", {
                class: y(["container", {
                    "border-t border-primary xs:pt-8 md:pt-12": b
                }])
            }, [a("div", Os, [e(s) === "image-left" ? (o(),
            r("div", {
                key: 0,
                class: y(["xs:w-6-cols md:w-4-cols lg:w-6-cols", {
                    "xs:order-2 md:order-1 mt-40 md:mt-0": b
                }])
            }, [e(h) ? (o(),
            T($, {
                key: 0,
                ratio: "1x1",
                image: e(h)
            }, null, 8, ["image"])) : p("", !0)], 2)) : p("", !0), a("div", {
                class: y(["xs:w-6-cols md:w-4-cols lg:w-6-cols", {
                    "xs:order-2 md:order-1": e(s) === "image-right" && !b
                }, {
                    "xs:order-1 md:order-2": e(s) === "image-left" && b
                }])
            }, [w(E, null, {
                default: Z(()=>[a("div", {
                    class: y(["md:pr-36 lg:pr-0 lg:w-4-cols", {
                        "mt-8 md:mt-0": !b
                    }])
                }, [b ? (o(),
                T(C, {
                    key: 0,
                    title: e(d),
                    "heading-level": i.headingLevel,
                    class: "f-heading-1"
                }, null, 8, ["title", "heading-level"])) : p("", !0), a("div", {
                    class: y(b ? "mt-8 block" : "")
                }, [w(q, {
                    title: b ? null : e(d),
                    links: I.links,
                    link: e(g),
                    subtitle: e(_)
                }, null, 8, ["title", "links", "link", "subtitle"])], 2)], 2)]),
                _: 1
            })], 2), e(s) === "image-right" ? (o(),
            r("div", {
                key: 1,
                class: y(["xs:w-6-cols xs:order-1 md:w-4-cols md:order-2 lg:w-6-cols", {
                    "mt-40 md:mt-0": b
                }])
            }, [e(h) ? (o(),
            T($, {
                key: 0,
                ratio: "1x1",
                image: e(h)
            }, null, 8, ["image"])) : p("", !0)], 2)) : p("", !0)])], 2)])
        }
    }
}
  , Cs = {
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    data() {
        return {
            response: null,
            success: !1,
            error: !1,
            disabled: !1
        }
    },
    methods: {
        async handleSubmit(t) {
            if (t.preventDefault(),
            !this.endpoint)
                return;
            this.disabled = !0;
            const i = new FormData(t.target);
            this.response = await $fetch(this.endpoint, {
                method: "post",
                body: i,
                headers: {
                    Accept: "application/json"
                }
            }).then(n=>{
                this.success = !0,
                this.error = !1,
                this.disabled = !0
            }
            ).catch(n=>{
                console.log("Form error", n),
                this.success = !1,
                this.error = !0,
                this.disabled = !1
            }
            )
        },
        toggle(t, i) {
            t && (i ? document.querySelector(`#${t}`).classList.remove("hidden") : document.querySelector(`#${t}`).classList.add("hidden"))
        },
        validate() {
            this.$el.querySelectorAll("input, textarea").forEach(i=>{
                i.classList.add("validate")
            }
            )
        }
    }
}
  , Rs = ye('<h3>Contact</h3><label for="name">Name (main contact)</label><input type="text" name="name" id="name" required><label for="email">Email</label><input type="email" name="_replyto" id="email" required><label for="phone">Phone number</label><input type="tel" name="phone" id="phone" required><label for="who">Who are the founders?</label><textarea rows="3" name="who" id="who" aria-describedby="whoText" required></textarea><span id="whoText">Please list each founder (Name, Email, Personal Website, GitHub, LinkedIn, Twitter) on separate lines with main contact first</span><label for="location"> Where are the founders located? Where will the company be located after any investment is received? </label><textarea rows="3" maxlength="250" name="location" id="location" aria-describedby="locationText" required></textarea><span id="locationText">Country, State/Province/Territory, City</span><div>Are you using, or have applied to use, the OpenAI API?</div>', 14)
  , Vs = {
    class: "flex mt-8"
}
  , qs = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , Ms = a("label", {
    for: "api_yes"
}, "Yes", -1)
  , Bs = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , js = a("label", {
    for: "api_no"
}, "No", -1)
  , Gs = ye('<input type="email" name="api_email" id="api_email" placeholder="Email address associated with API account" class="hidden mt-8"><h3>Idea</h3><label for="intro_video"> Please link (Vimeo, YouTube) to a one-minute video introducing yourself and telling us about your company or idea. Demos, music and effects are not necessary.</label><input type="url" name="video_url" id="video_url" pattern="https://.*" placeholder="https://" required><label for="build">What do you plan to build?</label><textarea rows="3" maxlength="250" name="build" id="build" required></textarea><div>Which area does your idea target?</div>', 7)
  , Fs = {
    class: "mt-8 flex flex-col"
}
  , Ns = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , Hs = a("label", {
    for: "target_education"
}, "Education", -1)
  , zs = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , Us = a("label", {
    for: "target_health"
}, "Healthcare", -1)
  , Ws = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , Ks = a("label", {
    for: "target_climate"
}, "Climate & Energy", -1)
  , Js = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , Ys = a("label", {
    for: "target_professional"
}, "Professional Services (e.g., Financial, Legal, Real Estate)", -1)
  , Xs = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , Qs = a("label", {
    for: "target_interfaces"
}, "Search, Virtual Assistants & New Interfaces", -1)
  , Zs = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , el = a("label", {
    for: "target_other"
}, "Other (Please describe below)", -1)
  , tl = ye('<div class="hidden mt-8" id="target_other_field"><label for="target_otherdesc">Please describe in a few words</label><input id="target_otherdesc" type="text" maxlength="25" name="target_otherdesc"></div><label for="mission"> How does your idea fit OpenAI’s <a href="https://openai.com/charter">mission</a>? </label><textarea rows="3" maxlength="250" name="mission" id="mission" required></textarea><label for="excitement"> Why are you excited about this idea? What insights do you bring to the project that you feel will make it successful? </label><textarea rows="3" maxlength="250" name="excitement" id="excitement" required></textarea><label for="change"> How would your idea change the field you’re targeting? What are the societal implications of your success? </label><textarea rows="3" maxlength="250" name="change" id="change" required></textarea><label for="challenge"> What is the biggest challenge to building your company? </label><textarea rows="3" maxlength="250" name="challenge" id="challenge" required></textarea>', 9)
  , ol = a("h3", null, "Other", -1)
  , il = a("div", null, "Have you incorporated or are you ready to incorporate?", -1)
  , nl = {
    class: "mt-8 flex flex-col"
}
  , rl = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , al = a("label", {
    for: "inc_yes"
}, "Incorporated", -1)
  , sl = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , ll = a("label", {
    for: "inc_ready"
}, "Ready to incorporate", -1)
  , cl = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , ul = a("label", {
    for: "inc_no"
}, "Neither", -1)
  , dl = {
    class: "hidden",
    id: "incorp_fields"
}
  , pl = ye('<div>Have you taken any outside investment?</div><div class="flex mt-8"><div class="f-ui-1 relative pl-20 mr-8"><input id="investment_yes" type="radio" name="investment" value="yes" class="absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse"><label for="investment_yes">Yes</label></div><div class="f-ui-1 relative pl-20 mr-8"><input id="investment_no" type="radio" name="investment" value="no" class="absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse"><label for="investment_no">No</label></div></div><div class="mt-spacing-4"> Are any of the founders covered by noncompete or intellectual property agreements that overlap with your project? </div>', 3)
  , ml = {
    class: "flex mt-8"
}
  , _l = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , hl = a("label", {
    for: "conflict_yes"
}, "Yes", -1)
  , gl = {
    class: "f-ui-1 relative pl-20 mr-8"
}
  , bl = a("label", {
    for: "conflict_no"
}, "No", -1)
  , vl = ye('<div class="hidden mt-spacing-4" id="conflict_yes_explanation"><label for="onflict_explanation">Please explain</label><textarea rows="3" maxlength="250" name="conflict_explanation" class="mt-8"></textarea></div><input type="text" name="_gotcha" hidden class="hidden"><label for="anything_else" class="mt-spacing-4"> Is there anything else we should know about your company? </label><textarea rows="3" aria-describedby="anythingElseText" maxlength="250" name="anything_else" id="anything_else"></textarea><span id="anythingElseText">e.g., pending lawsuits, cofounders who have left</span>', 5)
  , yl = ["disabled"]
  , fl = {
    key: 0
}
  , kl = {
    key: 1
};
function wl(t, i, n, s, c, l) {
    return o(),
    r("form", {
        onSubmit: i[14] || (i[14] = U((...u)=>l.handleSubmit && l.handleSubmit(...u), ["prevent"])),
        ref: "form"
    }, [Rs, a("div", Vs, [a("div", qs, [a("input", {
        id: "api_yes",
        type: "radio",
        name: "api",
        value: "yes",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[0] || (i[0] = u=>l.toggle("api_email", !0))
    }), Ms]), a("div", Bs, [a("input", {
        id: "api_no",
        type: "radio",
        name: "api",
        value: "no",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[1] || (i[1] = u=>l.toggle("api_email", !1))
    }), js])]), Gs, a("div", Fs, [a("div", Ns, [a("input", {
        id: "target_education",
        type: "radio",
        name: "target",
        value: "education",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[2] || (i[2] = u=>l.toggle("target_other_field", !1))
    }), Hs]), a("div", zs, [a("input", {
        id: "target_health",
        type: "radio",
        name: "target",
        value: "health",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[3] || (i[3] = u=>l.toggle("target_other_field", !1))
    }), Us]), a("div", Ws, [a("input", {
        id: "target_climate",
        type: "radio",
        name: "target",
        value: "climate-and-energy",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[4] || (i[4] = u=>l.toggle("target_other_field", !1))
    }), Ks]), a("div", Js, [a("input", {
        id: "target_professional",
        type: "radio",
        name: "target",
        value: "professional-services",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[5] || (i[5] = u=>l.toggle("target_other_field", !1))
    }), Ys]), a("div", Xs, [a("input", {
        id: "target_interfaces",
        type: "radio",
        name: "target",
        value: "interfaces",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[6] || (i[6] = u=>l.toggle("target_other_field", !1))
    }), Qs]), a("div", Zs, [a("input", {
        id: "target_other",
        type: "radio",
        name: "target",
        value: "other",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[7] || (i[7] = u=>l.toggle("target_other_field", !0))
    }), el])]), tl, a("section", null, [ol, il, a("div", nl, [a("div", rl, [a("input", {
        id: "inc_yes",
        type: "radio",
        name: "incorporated",
        value: "incorporated",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[8] || (i[8] = u=>l.toggle("incorp_fields", !0))
    }), al]), a("div", sl, [a("input", {
        id: "inc_ready",
        type: "radio",
        name: "incorporated",
        value: "ready-to-incorporate",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[9] || (i[9] = u=>l.toggle("incorp_fields", !0))
    }), ll]), a("div", cl, [a("input", {
        id: "inc_no",
        type: "radio",
        name: "incorporated",
        value: "neither",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[10] || (i[10] = u=>l.toggle("incorp_fields", !1))
    }), ul])]), a("div", dl, [pl, a("div", ml, [a("div", _l, [a("input", {
        id: "conflict_yes",
        type: "radio",
        name: "conflict",
        value: "yes",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[11] || (i[11] = u=>l.toggle("conflict_yes_explanation", !0))
    }), hl]), a("div", gl, [a("input", {
        id: "conflict_no",
        type: "radio",
        name: "conflict",
        value: "no",
        class: "absolute top-1/2 transform -translate-y-1/2 left-0 mr-6 h-[14px] w-[14px] appearance-none rounded-full border-2 border-primary checked:bg-inverse",
        onClick: i[12] || (i[12] = u=>l.toggle("conflict_yes_explanation", !1))
    }), bl])]), vl])]), a("button", {
        type: "submit",
        disabled: c.disabled,
        onClick: i[13] || (i[13] = u=>l.validate())
    }, " Submit application ", 8, yl), c.error ? (o(),
    r("div", fl, "There was a problem submitting your application.")) : p("", !0), c.success ? (o(),
    r("div", kl, " Thank you for applying to the OpenAI Startup Fund. We review every application, but due to the large volume it may take us some time to get back to you. We appreciate your patience. ")) : p("", !0)], 544)
}
const Tl = le(Cs, [["render", wl]])
  , xl = ["name", "id", "value"]
  , El = ["role", "aria-labelledby"]
  , Sl = ["for", "id"]
  , Il = ["innerHTML"]
  , Ll = {
    key: 0
}
  , Pl = {
    key: 1,
    class: "grid grid-flow-row gap-4 radio-group"
}
  , $l = {
    class: "flex items-start"
}
  , Al = ["name", "required", "value", "disabled", "selected", "id"]
  , Ol = ["for"]
  , Dl = ["innerHTML"]
  , Cl = {
    key: 0,
    class: "block f-caption-1 text-secondary"
}
  , Rl = ["data-required"]
  , Vl = ["name", "value", "disabled", "selected", "id"]
  , ql = ["for"]
  , Ml = ["innerHTML"]
  , Bl = {
    key: 0,
    class: "block f-caption-1 text-secondary"
}
  , jl = ["placeholder", "required", "name", "id", "rows", "maxlength"]
  , Gl = ["name", "id", "required"]
  , Fl = ["value", "disabled", "selected"]
  , Nl = ["type", "pattern", "name", "id", "required", "placeholder", "autocomplete"]
  , Hl = ["innerHTML"]
  , K = {
    __name: "FieldRenderer",
    props: {
        fields: {
            type: Array,
            required: !0
        }
    },
    setup(t) {
        return (i,n)=>(o(!0),
        r(S, null, A(t.fields, s=>(o(),
        r(S, null, [s.type === "hidden" ? (o(),
        r("input", {
            key: 0,
            type: "hidden",
            name: s.name,
            id: s.id,
            value: s.value
        }, null, 8, xl)) : ut((o(),
        r("div", {
            key: 1,
            role: s.type === "radio" || s.type === "checkbox" ? "group" : void 0,
            "aria-labelledby": s.type === "radio" || s.type === "checkbox" ? s.id : void 0,
            class: y([{
                "!my-spacing-5": s.pad === !0
            }])
        }, [s.label ? (o(),
        r("label", {
            key: 0,
            class: "block ui-richtext lg:max-w-[70%]",
            for: s.type === "radio" || s.type === "checkbox" ? void 0 : s.id,
            id: s.type === "radio" || s.type === "checkbox" ? s.id : void 0
        }, [a("span", {
            innerHTML: s.label
        }, null, 8, Il), s.required ? (o(),
        r("span", Ll, " *")) : p("", !0)], 8, Sl)) : p("", !0), s.type === "radio" ? (o(),
        r("div", Pl, [(o(!0),
        r(S, null, A(s.options, c=>(o(),
        r("div", $l, [a("input", {
            type: "radio",
            name: s.name,
            required: s.required,
            value: c.value,
            disabled: c.disabled,
            selected: c.selected,
            id: c.value,
            class: "mr-6 mt-6"
        }, null, 8, Al), a("label", {
            for: c.value,
            class: "cursor-pointer"
        }, [a("span", {
            class: "block ui-richtext",
            innerHTML: c.label
        }, null, 8, Dl), c.helpText ? (o(),
        r("span", Cl, L(c.helpText), 1)) : p("", !0)], 8, Ol)]))), 256))])) : s.type === "checkbox" ? (o(),
        r("div", {
            key: 2,
            class: "grid grid-flow-row gap-4 checkbox-group",
            "data-required": s.required
        }, [(o(!0),
        r(S, null, A(s.options, c=>(o(),
        r("div", {
            class: y(["flex items-start", {
                "my-4": s.innerPad
            }])
        }, [a("input", {
            type: "checkbox",
            name: `${s.name}[]`,
            value: c.value,
            disabled: c.disabled,
            selected: c.selected,
            id: `${s.name}-${c.value}`,
            class: "mr-6 mt-[5px] h-[14px] w-[14px] appearance-none rounded-none border-2 border-primary checked:bg-inverse outline outline-4 outline-offset-4 outline-[color:var(--border-primary)] shrink-0"
        }, null, 8, Vl), a("label", {
            for: `${s.name}-${c.value}`,
            class: "cursor-pointer select-none"
        }, [a("span", {
            class: "block ui-richtext",
            innerHTML: c.label
        }, null, 8, Ml), c.helpText ? (o(),
        r("span", Bl, L(c.helpText), 1)) : p("", !0)], 8, ql)], 2))), 256))], 8, Rl)) : s.type === "textarea" ? (o(),
        r("textarea", {
            key: 3,
            placeholder: s.placeholder,
            required: s.required,
            name: s.name,
            id: s.id,
            rows: s.rows,
            maxlength: s.maxlength,
            class: y({
                "!h-auto !min-h-0": s.rows
            })
        }, null, 10, jl)) : s.type === "select" ? (o(),
        r("select", {
            key: 4,
            name: s.name,
            id: s.id,
            required: s.required
        }, [(o(!0),
        r(S, null, A(s.options, c=>(o(),
        r("option", {
            value: c.value,
            disabled: c.disabled,
            selected: c.selected
        }, L(c.label), 9, Fl))), 256))], 8, Gl)) : (o(),
        r("input", {
            key: 5,
            type: s.type || "text",
            pattern: s.pattern,
            name: s.name,
            id: s.id,
            required: s.required,
            placeholder: s.placeholder,
            autocomplete: s.autocomplete
        }, null, 8, Nl)), s.helpText ? (o(),
        r("p", {
            key: 6,
            innerHTML: s.helpText,
            class: "f-caption-1 mt-6 ui-richtext text-secondary"
        }, null, 8, Hl)) : p("", !0)], 10, El)), [[dt, !s.hidden]])], 64))), 256))
    }
};
function Q({form: t, endpoint: i, disableSubmitOnSuccess: n=!1}) {
    const s = D("idle")
      , c = x(()=>n ? ["submitting", "success"].includes(s.value) : ["submitting"].includes(s.value))
      , l = d=>{
        let _ = !0;
        return Array.from(t.value.querySelectorAll('textarea, select, input:not([type="checkbox])')).filter(b=>b.offsetParent !== null).forEach(b=>{
            b.classList.add("validate"),
            b.validity.valid || (_ = !1)
        }
        ),
        Array.from(t.value.querySelectorAll('.checkbox-group[data-required="true"]')).filter(b=>b.offsetParent !== null).forEach(b=>{
            b.querySelectorAll('input[type="checkbox"]:checked').length === 0 && (d == null || d.preventDefault(),
            b.previousElementSibling.nodeName === "LABEL" && (b.previousElementSibling.style.color = "var(--red-700)"),
            _ = !1)
        }
        ),
        _
    }
    ;
    return te(()=>{
        t.value.querySelectorAll(".checkbox-group").forEach(_=>{
            _.querySelectorAll('input[type="checkbox"]').forEach(g=>{
                g.addEventListener("change", b=>{
                    _.previousElementSibling.nodeName === "LABEL" && (_.previousElementSibling.style.color = "var(--gray-900)")
                }
                )
            }
            )
        }
        )
    }
    ),
    {
        state: s,
        disabled: c,
        validate: l,
        submit: async()=>{
            s.value = "submitting";
            const d = new FormData(t.value)
              , _ = {
                fields: [],
                context: {
                    pageUri: window.location.href,
                    pageName: document.title
                }
            };
            d.forEach((h,g)=>{
                if (g.includes("[]")) {
                    const b = g.replace("[]", "")
                      , v = _.fields.find(k=>k.name === b);
                    v ? v.value += `; ${h}` : _.fields.push({
                        name: b,
                        value: h,
                        objectTypeId: "0-1"
                    })
                } else
                    _.fields.push({
                        name: g,
                        value: h,
                        objectTypeId: "0-1"
                    })
            }
            );
            try {
                const g = await (await fetch(i, {
                    method: "post",
                    body: JSON.stringify(_),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                })).json();
                if (g.status === "error")
                    throw console.log(JSON.stringify(g, null, 2)),
                    new Error(g.message);
                s.value = "success",
                Zt(()=>{
                    const b = t.value.querySelector("[data-success]");
                    b && b.scrollIntoView({
                        behavior: "smooth",
                        block: "end"
                    })
                }
                )
            } catch (h) {
                console.log(h),
                s.value = "error"
            }
        }
    }
}
const zl = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (formerly Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See (Vatican City)", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste (East Timor)", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
  , re = [{
    label: "Select a country…",
    value: "",
    selected: !0,
    disabled: !0
}, ...zl.map(t=>({
    label: t,
    value: t
}))]
  , Ul = ["disabled"]
  , Wl = {
    key: 0
}
  , Kl = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , Jl = {
    __name: "MicrosoftForStartups",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "referrer",
            type: "hidden",
            name: "referrer"
        }, {
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Business email",
            autocomplete: "email",
            required: !0,
            helpText: "Ensure this email belongs to the organization you’re requesting credits for."
        }, {
            id: "company",
            type: "text",
            name: "company",
            label: "Company name",
            autocomplete: "organization",
            required: !0
        }, {
            id: "country",
            type: "select",
            name: "country",
            label: "Country of residence",
            autocomplete: "country-name",
            required: !0,
            helpText: '<a href="https://platform.openai.com/docs/supported-countries" target="_blank">Supported countries and territories</a>',
            options: re
        }, {
            id: "existingWork",
            name: "existing_work",
            label: "Please describe what your company does and how you plan on using this API.",
            type: "textarea",
            placeholder: "We have created an internal pipeline using the Completions endpoint",
            required: !0
        }, {
            id: "organizationId",
            type: "text",
            name: "openai_api_organization_id",
            label: "Organization ID",
            placeholder: "org-abc123",
            helpText: 'You can find your Org ID in your <a href="https://platform.openai.com/account/org-settings" target="_blank">account settings</a>. Note: we cannot grant access without a valid Org ID.',
            required: !0
        }]);
        return te(()=>{
            const _ = document.referrer || "none"
              , h = n.value.querySelector('input[name="referrer"]');
            h.value = _
        }
        ),
        (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = g=>e(l)())
        }, " Claim offer ", 8, Ul), e(s) === "error" ? (o(),
        r("div", Wl, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", Kl, " Thank you for your submission. ")) : p("", !0)], 544))
    }
}
  , Yl = ["disabled"]
  , Xl = {
    key: 0
}
  , Ql = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , Zl = {
    __name: "ContactSales",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint,
            disableSubmitOnSuccess: !0
        })
          , d = D(void 0)
          , _ = g=>{
            g.target.name === "openai_products" && (d.value = g.target.value)
        }
          , h = x(()=>{
            const g = d.value === "ChatGPT" ? [{
                id: "numLicenses",
                type: "select",
                name: "number_of_chatgpt_business_licenses",
                label: "Estimate number of ChatGPT licenses needed",
                options: [{
                    label: "Select a number…",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, {
                    label: "1-50",
                    value: "1-50"
                }, {
                    label: "51-150",
                    value: "51-150"
                }, {
                    label: "151-500",
                    value: "151-500"
                }, {
                    label: "501-1,000",
                    value: "501-1000"
                }, {
                    label: "1,001-5,000",
                    value: "1001-5000"
                }, {
                    label: "5,001+",
                    value: "5001+"
                }],
                required: !0
            }, {
                id: "anythingElseChatGPT",
                type: "textarea",
                name: "extra_details",
                label: "Please share a bit more context on your needs and how you’re hoping to use ChatGPT Enterprise.",
                autocomplete: "off",
                required: !0
            }] : d.value === "API" ? [{
                id: "organizationId",
                type: "text",
                name: "organization_id",
                label: "Organization ID",
                placeholder: "org-abc123",
                helpText: 'We need a valid Organization ID, found in your API <a href="https://platform.openai.com/account/org-settings" target="_blank">account settings</a>, to grant access.',
                required: !0
            }, {
                id: "anythingElseAPI",
                type: "textarea",
                name: "extra_details",
                label: "Please share a bit more context on what you are building and what you would like to discuss with our sales team.",
                autocomplete: "off",
                required: !0
            }] : [];
            return [{
                id: "firstname",
                type: "text",
                name: "firstname",
                label: "First name",
                autocomplete: "given-name",
                required: !0
            }, {
                id: "lastname",
                type: "text",
                name: "lastname",
                label: "Last name",
                autocomplete: "family-name",
                required: !0
            }, {
                id: "email",
                type: "email",
                name: "email",
                label: "Business email",
                autocomplete: "email",
                required: !0
            }, {
                id: "company",
                type: "text",
                name: "company",
                label: "Company name",
                autocomplete: "organization",
                required: !0
            }, {
                id: "jobTitle",
                type: "text",
                name: "jobtitle",
                label: "Job title",
                autocomplete: "organization-title",
                required: !0
            }, {
                id: "websiteUrl",
                name: "website",
                type: "text",
                pattern: "(https?://)?(www.)?[^.]+.[^.]+(.[^.]+)*",
                inputmode: "url",
                label: "Company website",
                required: !0
            }, {
                id: "companySize",
                type: "select",
                name: "nb___number_of_employees",
                label: "Company size",
                required: !0,
                options: [{
                    label: "Select a size…",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, {
                    label: "1-50",
                    value: "1-50"
                }, {
                    label: "51-150",
                    value: "51-150"
                }, {
                    label: "151-500",
                    value: "151-500"
                }, {
                    label: "501-1,000",
                    value: "501-1,000"
                }, {
                    label: "1,001-5,000",
                    value: "1,001-5,000"
                }, {
                    label: "5,001-20,000",
                    value: "5,001-20,000"
                }, {
                    label: "20,001+",
                    value: "20,001+"
                }]
            }, {
                id: "industry",
                type: "select",
                name: "industry_v2",
                label: "Industry",
                required: !0,
                options: [{
                    label: "Select an industry…",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, {
                    label: "Biotechnology",
                    value: "Biotechnology"
                }, {
                    label: "Consulting",
                    value: "Consulting"
                }, {
                    label: "Education",
                    value: "Education"
                }, {
                    label: "Finance",
                    value: "Finance"
                }, {
                    label: "Food & beverage",
                    value: "Food & Beverage"
                }, {
                    label: "Government",
                    value: "Government"
                }, {
                    label: "Healthcare",
                    value: "Healthcare"
                }, {
                    label: "Insurance",
                    value: "Insurance"
                }, {
                    label: "Law",
                    value: "Law"
                }, {
                    label: "Manufacturing",
                    value: "Manufacturing"
                }, {
                    label: "Media",
                    value: "Media"
                }, {
                    label: "Nonprofit Organization",
                    value: "Nonprofit Organization"
                }, {
                    label: "Technology",
                    value: "Technology"
                }, {
                    label: "Telecom",
                    value: "Telecom"
                }, {
                    label: "Other",
                    value: "Other"
                }, {
                    label: "Sports",
                    value: "Sports"
                }, {
                    label: "Real estate",
                    value: "Real estate"
                }, {
                    label: "Retail",
                    value: "Retail"
                }]
            }, {
                id: "country",
                type: "select",
                name: "country",
                label: "Company HQ location",
                autocomplete: "country-name",
                required: !0,
                helpText: '<a href="https://platform.openai.com/docs/supported-countries" target="_blank">Supported countries and territories</a>',
                options: re
            }, {
                id: "products",
                type: "select",
                name: "openai_products",
                label: "Which of our products or services are you interested in?",
                required: !0,
                options: [{
                    label: "Select a product…",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, {
                    label: "ChatGPT Enterprise",
                    value: "ChatGPT"
                }, {
                    label: "API for Enterprise",
                    value: "API"
                }]
            }, ...g]
        }
        );
        return (g,b)=>(o(),
        r("form", {
            onChange: _,
            onSubmit: b[1] || (b[1] = U((...v)=>e(u) && e(u)(...v), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(h)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: b[0] || (b[0] = v=>e(l)())
        }, " Submit ", 8, Yl), e(s) === "error" ? (o(),
        r("div", Xl, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", Ql, " Thank you. Our sales team is looking forward to connecting with you. You’ll hear from us soon! ")) : p("", !0)], 544))
    }
}
  , ec = ["disabled"]
  , tc = {
    key: 0
}
  , oc = {
    key: 1,
    class: "ui-richtext scroll-mb-24",
    "data-success": ""
}
  , ic = a("a", {
    href: "https://platform.openai.com/docs/models"
}, "gpt-3.5-turbo", -1)
  , nc = {
    __name: "GPT4",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D(null)
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            required: !0
        }, {
            id: "company",
            type: "text",
            name: "company",
            label: "Company name",
            autocomplete: "organization"
        }, {
            id: "organizationId",
            type: "text",
            name: "openai_api_organization_id",
            label: "Organization ID",
            helpText: 'We need a valid Organization ID, found in your API <a href="https://platform.openai.com/account/org-settings" target="_blank">account settings</a>, to grant access.',
            required: !0
        }, {
            id: "primaryUse",
            type: "radio",
            name: "codex_primary_use",
            label: "How do you primarily plan to use GPT-4?",
            options: [{
                label: "Build a new product",
                value: "Build a new product / application"
            }, {
                label: "Integrate into an existing product",
                value: "Integrate into an existing product"
            }, {
                label: "General exploration of capabilities",
                value: "General exploration of capabilities"
            }, {
                label: "Academic research",
                value: "Academic research"
            }],
            required: !0
        }, {
            id: "ideas",
            name: "codex_ideas",
            label: "Are there specific ideas you’re excited to build with GPT-4? We are particularly excited about use cases that were not previously possible with our other models.",
            type: "textarea",
            placeholder: "For use cases we tried, GPT-3.5 did not reliably handle multi-language text. We hope to explore GPT-4 for this use case.",
            required: !0,
            helpText: 'Note that API access does not mean this is an approved use case. Please refer to our <a href="/policies/usage-policies">safety policies</a> if access is granted.'
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = (...g)=>e(l) && e(l)(...g))
        }, " Join waitlist ", 8, ec), e(s) === "error" ? (o(),
        r("div", tc, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", oc, [ne(" Thank you. You’ll hear from us soon! In the meantime, we encourage you to check out our previous best performing and cost effective model, "), ic, ne(". ")])) : p("", !0)], 544))
    }
}
  , rc = ["disabled"]
  , ac = {
    key: 0
}
  , sc = {
    key: 1,
    class: "ui-richtext scroll-mb-24",
    "data-success": ""
}
  , lc = {
    __name: "ResearcherAccessProgram",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D(null)
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            required: !0
        }, {
            id: "company",
            type: "text",
            name: "name_of_your_institution_if_applicable_",
            label: "Institution or organization",
            autocomplete: "organization",
            required: !0
        }, {
            id: "codexOrSubsidizedAccess",
            type: "checkbox",
            name: "research_models_application",
            label: "Which models available for researchers, if any, are you applying for access to?",
            helpText: "We currently have two models that are only available to a limited subset of researchers. The Codex models are currently being made available to a limited subset of researchers who were relying on these models for research purposes. The GPT-4 base model is currently being made available to a limited subset of researchers who are studying alignment or the risks and impact of AI systems.",
            options: [{
                label: "GPT-4 Base Model Access",
                name: "GPT-4 Base Model Access",
                value: "GPT-4 Base Model Access"
            }, {
                label: "Codex Access",
                name: "Codex Access",
                value: "Codex Access"
            }]
        }, {
            id: "country",
            type: "select",
            name: "country",
            label: "Country or region",
            autocomplete: "country-name",
            required: !0,
            helpText: '<a href="https://platform.openai.com/docs/supported-countries" target="_blank">Supported countries and territories</a>',
            options: re
        }, {
            id: "researchArea",
            type: "checkbox",
            label: "Research area(s)",
            required: !0,
            pad: !0,
            innerPad: !0,
            name: "research_area_we_re_initially_scoping_our_research_collaborations_to_the_following_areas_though_we_",
            helpText: "We’re initially scoping to these areas, but welcome suggestions for future focus areas. The questions under each area are illustrative and we’d be delighted for research proposals that address different questions.",
            options: [{
                value: "Alignment: How can we understand what objective, if any, a model is best understood as pursuing? How do we increase the extent to which that objective is aligned with human preferences, such as via prompt design or fine-tuning?",
                name: "Alignment: How can we understand what objective, if any, a model is best understood as pursuing? How do we increase the extent to which that objective is aligned with human preferences, such as via prompt design or fine-tuning?",
                label: 'Alignment<br><span class="text-secondary">How can we understand what objective, if any, a model is best understood as pursuing? How do we increase the extent to which that objective is aligned with human preferences, such as via prompt design or fine-tuning?</span>'
            }, {
                value: "Fairness and Representation",
                name: "-Fairness and Representation",
                label: 'Fairness & representation<br><span class="text-secondary">How should performance criteria be established for fairness and representation in language models? How can language models be improved in order to effectively support the goals of fairness and representation in specific, deployed contexts?</span>'
            }, {
                value: "Interdisciplinary Research",
                name: "-Interdisciplinary Research",
                label: 'Interdisciplinary research<br><span class="text-secondary">How can AI development draw on insights from other disciplines such as philosophy, cognitive science, and sociolinguistics?</span>',
                helpText: ""
            }, {
                value: "Interpretability / Transparency",
                name: "-Interpretability / Transparency",
                label: 'Interpretability/transparency<br><span class="text-secondary">How do these models work, mechanistically? Can we identify what concepts they’re using, extract latent knowledge from the model, make inferences about the training procedure, or predict surprising future behavior?</span>'
            }, {
                value: "Misuses Potential",
                name: "-Misuses Potential",
                label: 'Misuse potential<br><span class="text-secondary">How can systems like the API be misused? What sorts of “red teaming” approaches can we develop to help AI developers think about responsibly deploying technologies like this?</span>'
            }, {
                value: "Model Exploration",
                name: "-Model Exploration",
                label: 'Model exploration<br><span class="text-secondary">Models like those served by the API have a variety of capabilities which we’ve yet to explore. We’re excited by investigations in many areas including model limitations, linguistic properties, commonsense reasoning, and potential uses for many other problems.</span>'
            }, {
                value: "Robustness",
                name: "-Robustness",
                label: 'Robustness<br><span class="text-secondary">Generative models have uneven capability surfaces, with the potential for surprisingly strong or weak areas of capability. How robust are large generative models to “natural” perturbations in the prompt, such as phrasing the same idea in different ways or with typos? Can we predict the kinds of domains and tasks for which large generative models are more likely to be robust or not, and how does this relate to the training data? Are there techniques we can use to predict and mitigate worst-case behavior? How can robustness be measured in the context of few-shot learning (e.g., across variations in prompts)? Can we train models so that they satisfy safety properties with a very high level of reliability, even under adversarial inputs?</span>'
            }, {
                value: "Other",
                name: "-Other",
                label: "Other"
            }]
        }, {
            type: "textarea",
            id: "projectDescription",
            name: "within_the_research_area_selected_above_please_describe_the_type_of_work_you_plan_on_doing_with_the",
            label: "Project description",
            helpText: "Within the research area selected above, please describe the type of work you plan on doing with the API and your approach. Include your proposed research question(s), hypotheses if applicable, brief research design, and how the API will support your work.",
            required: !0
        }, {
            id: "primaryUse",
            type: "checkbox",
            name: "research_models_use",
            label: "Model types to be used",
            options: [{
                label: "Natural language generation",
                name: "natural_language",
                value: "natural_language"
            }, {
                label: "Code generation",
                name: "code_generation",
                value: "code_generation"
            }, {
                label: "Image generation",
                name: "image_generation",
                value: "image_generation"
            }],
            required: !0
        }, {
            id: "timeline",
            name: "what_is_the_anticipated_timeline_for_completing_this_research_i_e_3_months_6_months_",
            label: "What is the anticipated timeline for completing this research?",
            type: "text",
            required: !0,
            helpText: "(e.g., 3 months, 6 months)?"
        }, {
            id: "researchBudget",
            name: "research_budget",
            label: "What is the anticipated budget for this research?",
            type: "text",
            required: !0
        }, {
            id: "investigators",
            name: "would_you_be_the_sole_investigator_on_this_project_or_would_you_require_technical_access_for_multip",
            label: "Number of investigators",
            type: "text",
            required: !0,
            helpText: "Would you be the sole investigator or would you require technical access for multiple individuals?"
        }, {
            id: "pastResearch",
            name: "what_past_research_by_you_would_you_like_us_to_read_as_we_consider_your_submission_if_applicable_",
            label: "What past research by you would you like us to read as we consider your submission?",
            type: "textarea"
        }, {
            id: "anyOtherComments",
            name: "any_other_comments_",
            label: "Any other comments?",
            type: "textarea"
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = (...g)=>e(l) && e(l)(...g))
        }, "Submit", 8, rc), e(s) === "error" ? (o(),
        r("div", ac, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", sc, " Thank you for applying. Please note that due to a high volume of requests, it takes time for us to review applications and not all research will be prioritized for subsidy. We will be in touch if your application is selected for subsidy. ")) : p("", !0)], 544))
    }
}
  , cc = ["disabled"]
  , uc = {
    key: 0
}
  , dc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , pc = {
    __name: "ChatModelFeedback",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            placeholder: "jane@example.com",
            autocomplete: "email",
            required: !0
        }, {
            id: "modelUsed",
            type: "select",
            name: "chat_model_dropdown",
            label: "Which model did you use?",
            required: !0,
            options: [{
                label: "Select an option",
                value: "",
                disabled: !0,
                selected: !0
            }, {
                label: "gpt-3.5-turbo",
                value: "GPT-3.5-Turbo"
            }, {
                label: "gpt-3.5-turbo-0301",
                value: "GPT-3.5-Turbo-0301"
            }, {
                label: "gpt-4",
                value: "GPT-4"
            }, {
                label: "gpt-4-0314",
                value: "GPT-4-0314"
            }, {
                label: "gpt-4-32k",
                value: "GPT-4-32K"
            }, {
                label: "gpt-4-32k-0314",
                value: "GPT-4=32k-0314"
            }]
        }, {
            id: "systemMessage",
            type: "textarea",
            name: "chat_feedback",
            required: !0,
            label: "System message and chat log",
            helpText: "You can copy your conversation by clicking “Copy to clipboard” in the dialog window for submitting feedback in Playground."
        }, {
            id: "systemMessage",
            type: "textarea",
            name: "what_were_you_expecting_",
            required: !0,
            label: "What were you expecting from the completion?",
            helpText: "Please share either the ideal output or characteristics that would make an ideal output."
        }, {
            id: "whyNotIdeal",
            type: "checkbox",
            label: "Why is the model output not ideal?",
            required: !0,
            name: "why_is_the_model_output_not_ideal_",
            options: [{
                value: "The model isn’t adhering to the System message.",
                name: "why_is_the_model_output_not_ideal_-The model isn’t adhering to the System message.",
                label: "The model isn’t adhering to the system message"
            }, {
                value: "The model's response is inaccurate.",
                name: "why_is_the_model_output_not_ideal_-The model's response is inaccurate.",
                label: "The model’s response is inaccurate"
            }, {
                value: "The model's response is not useful.",
                name: "why_is_the_model_output_not_ideal_-The model's response is not useful.",
                label: "The model’s response is not useful"
            }, {
                value: "The model's response is harmful.",
                name: "why_is_the_model_output_not_ideal_-The model's response is harmful.",
                label: "The model’s response is harmful"
            }, {
                value: "Other",
                name: "why_is_the_model_output_not_ideal_-Other",
                label: "Other"
            }]
        }, {
            id: "whyNotIdealFreeform",
            type: "textarea",
            required: !0,
            name: "why_was_input_not_ideal_",
            label: "Please provide more details of why the output is not ideal. For instance, what is inaccurate or harmful about the response?"
        }, {
            id: "contacted",
            type: "radio",
            name: "contact_by_research_team_",
            label: "Would you be interested in being contacted for further collaboration with our research team?",
            options: [{
                label: "Yes",
                value: "Yes"
            }, {
                label: "No",
                value: "no"
            }],
            required: !0
        }, {
            id: "anythingElse",
            type: "textarea",
            name: "is_there_anything_else_you_d_like_to_share_about_your_experience_",
            label: "Is there anything else you’d like to share about your experience?"
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = g=>e(l)())
        }, " Submit ", 8, cc), e(s) === "error" ? (o(),
        r("div", uc, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", dc, " Thank you for your feedback! ")) : p("", !0)], 544))
    }
}
  , mc = ["disabled"]
  , _c = {
    key: 0
}
  , hc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , gc = {
    __name: "ModelBehaviorFeedback",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            placeholder: "jane@example.com",
            autocomplete: "email",
            required: !0
        }, {
            id: "modelUsed",
            type: "text",
            name: "chat_model",
            label: "Which model did you use?",
            placeholder: "gpt-4",
            required: !0
        }, {
            id: "prompt",
            type: "textarea",
            name: "prompt_used",
            required: !0,
            label: "Prompt"
        }, {
            id: "completion",
            type: "textarea",
            name: "completion",
            required: !0,
            label: "Completion"
        }, {
            id: "systemMessage",
            type: "textarea",
            name: "what_were_you_expecting_",
            required: !0,
            label: "What were you expecting from the completion?",
            helpText: "Please share either the ideal output or characteristics that would make an ideal output."
        }, {
            id: "whyNotIdeal",
            type: "checkbox",
            label: "Why is the model output not ideal?",
            required: !0,
            name: "why_is_the_model_output_not_ideal_",
            options: [{
                value: "The model's response is inaccurate.",
                name: "why_is_the_model_output_not_ideal_-The model's response is inaccurate.",
                label: "The model’s response is inaccurate"
            }, {
                value: "The model's response is not useful.",
                name: "why_is_the_model_output_not_ideal_-The model's response is not useful.",
                label: "The model’s response is not useful"
            }, {
                value: "The model's response is harmful.",
                name: "why_is_the_model_output_not_ideal_-The model's response is harmful.",
                label: "The model’s response is harmful"
            }, {
                value: "Other",
                name: "why_is_the_model_output_not_ideal_-Other",
                label: "Other"
            }]
        }, {
            id: "whyNotIdealFreeform",
            type: "textarea",
            required: !0,
            name: "why_was_input_not_ideal_",
            label: "Please provide more details of why the output is not ideal. For instance, what is inaccurate or harmful about the response?"
        }, {
            id: "completionId",
            type: "text",
            name: "completion_id",
            label: "Completion ID or conversation ID",
            placeholder: "2e583125-78cf-472e-b34a-51ee0789bc92"
        }, {
            id: "anythingElse",
            type: "textarea",
            name: "is_there_anything_else_you_d_like_to_share_about_your_experience_",
            label: "Is there anything else you’d like to share about your experience?"
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = g=>e(l)())
        }, " Submit ", 8, mc), e(s) === "error" ? (o(),
        r("div", _c, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", hc, " Thank you for your feedback! ")) : p("", !0)], 544))
    }
}
  , bc = ["onSubmit"]
  , vc = {
    class: "flex flex-col items-start"
}
  , yc = {
    key: 0,
    class: "flex items-baseline"
}
  , fc = a("span", {
    class: "block f-heading-4"
}, "Application information", -1)
  , kc = a("span", {
    class: "f-caption-1 ml-8"
}, "(step 1 of 2)", -1)
  , wc = [fc, kc]
  , Tc = a("div", {
    class: "flex items-baseline mb-8"
}, [a("span", {
    class: "block f-heading-4"
}, "Project proposal"), a("span", {
    class: "f-caption-1 ml-8"
}, "(step 2 of 2)")], -1)
  , xc = a("span", {
    class: "f-body-1"
}, "Tell us more about your project.", -1)
  , Ec = a("span", null, "Go back to step 1", -1)
  , Sc = ["disabled"]
  , Ic = {
    key: 0
}
  , Lc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , Pc = {
    __name: "CybersecurityGrantProgram",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint,
            disableSubmitOnSuccess: !0
        })
          , d = D(0)
          , _ = g=>{
            g.preventDefault();
            const b = l();
            d.value === 0 && b ? (d.value = 1,
            n.value.scrollIntoView({
                behavior: "smooth"
            })) : d.value === 1 && b && u()
        }
          , h = x(()=>[{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0,
            hidden: d.value === 1
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0,
            hidden: d.value === 1
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            autocomplete: "email",
            required: !0,
            hidden: d.value === 1
        }, {
            id: "jobTitle",
            type: "text",
            name: "jobtitle",
            label: "Current role",
            autocomplete: "organization-title",
            required: !0,
            hidden: d.value === 1
        }, {
            id: "resume",
            name: "linkedin_url",
            type: "text",
            pattern: "(https?://)?(www.)?[^.]+.[^.]+(.[^.]+)*(.[^.]+)*",
            inputmode: "url",
            label: "LinkedIn / resume URL",
            required: !0,
            hidden: d.value === 1
        }, {
            id: "otherStakeholders",
            type: "textarea",
            name: "other_stakeholders",
            label: "If there are other people working with you on this project, please list their names here, and what role they will play in the project",
            autocomplete: "off",
            hidden: d.value === 1
        }, {
            id: "otherSites",
            name: "other_sites",
            type: "textarea",
            label: "Other website(s)",
            helpText: "Link to professional website, or link to relevant projects, etc...",
            hidden: d.value === 1
        }, {
            id: "projectTitle",
            name: "project_title",
            type: "text",
            label: "Title",
            required: !0,
            hidden: d.value === 0
        }, {
            id: "projectSummary",
            name: "project_summary",
            type: "textarea",
            label: "Summary of your project",
            required: !0,
            hidden: d.value === 0
        }, {
            id: "proposal",
            name: "project_proposal",
            type: "text",
            pattern: "(https?://)?(www.)?[^.]+.[^.]+(.[^.]+)*",
            inputmode: "url",
            label: "Project proposal URL",
            helpText: "Your proposal should include:<br /><br />1. Set of questions or problems you hope your project will answer or address<br/>2. Description of methodologies and approaches used in the project<br/>3. Expected results of the project<br/><br/>No more than 10 pages, using 10-pt font and 1-inch margins.",
            required: !0,
            hidden: d.value === 0
        }, {
            id: "completionDate",
            name: "project_completion_date",
            type: "text",
            label: "Proposed completion date",
            placeholder: "MM/DD/YYYY",
            pattern: "\\d{2}/\\d{2}/\\d{4}",
            helpText: "We are looking for projects that can be completed within 6-8 months, with additional funding after review in progress",
            required: !0,
            hidden: d.value === 0
        }, {
            id: "credits",
            name: "credits",
            type: "text",
            label: "OpenAI will provide funding and/or API credits for the research. How much of either will you need?",
            required: !0,
            hidden: d.value === 0
        }, {
            id: "howWillFundsBeUsed",
            name: "how_will_funds_be_used",
            type: "textarea",
            label: "Please describe how the funds will be used for your project, and outline how you arrived at the value",
            required: !0,
            hidden: d.value === 0
        }, {
            id: "roadmap",
            name: "project_roadmap",
            type: "textarea",
            label: "Please provide a roadmap for the project on a one year time horizon",
            required: !0,
            hidden: d.value === 0
        }]);
        return (g,b)=>{
            const v = _e;
            return o(),
            r("form", {
                onSubmit: U(_, ["prevent"]),
                ref_key: "form",
                ref: n
            }, [a("div", vc, [e(d) === 0 ? (o(),
            r("div", yc, wc)) : (o(),
            r(S, {
                key: 1
            }, [Tc, xc, a("button", {
                type: "button",
                class: "flex items-center mt-12 hover:opacity-60",
                onClick: b[0] || (b[0] = k=>d.value = 0)
            }, [w(v, {
                name: "ArrowLeft400",
                class: "mr-4"
            }), Ec])], 64))]), w(K, {
                fields: e(h)
            }, null, 8, ["fields"]), a("button", {
                type: "button",
                onClick: _,
                disabled: e(c),
                class: "submit"
            }, L(e(d) === 0 ? "Next" : "Submit"), 9, Sc), e(s) === "error" ? (o(),
            r("div", Ic, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
            r("div", Lc, " Thank you. Our team is looking forward to connecting with you. You’ll hear from us soon! ")) : p("", !0)], 40, bc)
        }
    }
}
  , $c = ["disabled"]
  , Ac = {
    key: 0
}
  , Oc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , Dc = {
    __name: "ForGoodUseCases",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D(null)
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "apiUse",
            type: "radio",
            name: "do_you_use_our_apis_",
            label: "Do you use our APIs?",
            options: [{
                label: "Yes",
                value: "Yes"
            }, {
                label: "No",
                value: "No"
            }],
            required: !1
        }, {
            id: "tools",
            type: "checkbox",
            name: "which_tools_are_you_using_",
            label: "Which tools are you using?",
            options: [{
                label: "GPT (i.e., ChatGPT or GPT-4)",
                name: "GPT (i.e. ChatGPT or GPT-4)",
                value: "GPT (i.e. ChatGPT or GPT-4)"
            }, {
                label: "DALL·E",
                name: "DALL·E",
                value: "DALL·E"
            }, {
                label: "Whisper",
                name: "Whisper",
                value: "Whisper"
            }, {
                label: "Embeddings",
                name: "Embeddings",
                value: "Embeddings"
            }],
            required: !1
        }, {
            id: "industry",
            type: "checkbox",
            name: "what_industry_or_problem_are_you_hoping_to_impact_with_your_project_",
            label: "What industry or problem are you hoping to impact with your project?",
            options: [{
                label: "Accessibility",
                name: "Accessibility",
                value: "Accessibility"
            }, {
                label: "Advocacy",
                name: "Advocacy",
                value: "Advocacy"
            }, {
                label: "Climate change",
                name: "Climate change",
                value: "Climate change"
            }, {
                label: "Creativity and the arts",
                name: "Creativity and the arts",
                value: "Creativity and the arts"
            }, {
                label: "Bias and misinformation",
                name: "Bias and misinformation",
                value: "Bias and misinformation"
            }, {
                label: "Education",
                name: "Education",
                value: "Education"
            }, {
                label: "Direct services",
                name: "Direct services",
                value: "Direct services"
            }, {
                label: "Food insecurity",
                name: "Food insecurity",
                value: "Food insecurity"
            }, {
                label: "Government services",
                name: "Government services",
                value: "Government services"
            }, {
                label: "Healthcare/medicine",
                name: "Healthcare/medicine",
                value: "Healthcare/medicine"
            }, {
                label: "Job displacement",
                name: "Job displacement",
                value: "Job displacement"
            }, {
                label: "Legal services",
                name: "Legal services",
                value: "Legal services"
            }, {
                label: "Low-resource languages",
                name: "Low-resource languages",
                value: "Low-resource languages"
            }, {
                label: "Poverty alleviation",
                name: "Poverty alleviation",
                value: "Poverty alleviation"
            }, {
                label: "Scientific research",
                name: "Scientific research",
                value: "Scientific research"
            }, {
                label: "Social good",
                name: "Social good",
                value: "Social good"
            }, {
                label: "Translation",
                name: "Translation",
                value: "Translation"
            }],
            required: !1
        }, {
            id: "numPeople",
            type: "radio",
            name: "how_many_people_are_working_on_this_project_with_you_",
            label: "How many people are working on this project with you?",
            options: [{
                label: "Just me",
                value: "Just me"
            }, {
                label: "2–5",
                value: "2-5"
            }, {
                label: "6–10",
                value: "6-10"
            }, {
                label: "11+",
                value: "11+"
            }],
            required: !1
        }, {
            id: "modelRole",
            type: "checkbox",
            name: "what_role_does_openai_s_models_play_in_your_use_case_",
            label: "What role does OpenAI’s models play in your use case?",
            options: [{
                label: "Making us more resource-efficient",
                name: "Making us more resource-efficient",
                value: "Making us more resource-efficient"
            }, {
                label: "Researching audiences we wouldn’t otherwise",
                name: "Researching audiences we wouldn't otherwise",
                value: "Researching audiences we wouldn't otherwise"
            }, {
                label: "Scaling up existing work",
                name: "Scaling up existing work",
                value: "Scaling up existing work"
            }],
            required: !1
        }, {
            id: "problem",
            type: "textarea",
            name: "please_tell_us_more_about_the_for_good_problem_you_are_trying_to_solve_",
            label: "Please tell us more about the for-good problem you are trying to solve.",
            required: !1
        }, {
            id: "toolsHelped",
            type: "textarea",
            name: "please_tell_us_more_about_how_openai_tools_have_helped_you_address_this_problem_",
            label: "Please tell us more about how OpenAI tools have helped you address this problem.",
            required: !1
        }, {
            id: "impact",
            type: "textarea",
            name: "what_impact_are_you_hoping_this_project_will_have_",
            label: "What impact are you hoping this project will have?",
            required: !1
        }, {
            id: "country",
            type: "select",
            name: "country",
            label: "Country or region",
            autocomplete: "country-name",
            required: !1,
            options: re
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Please list your email if we can contact you to learn more.",
            required: !1
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = (...g)=>e(l) && e(l)(...g))
        }, "Submit", 8, $c), e(s) === "error" ? (o(),
        r("div", Ac, " There was a problem submitting your form. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", Oc, " Thank you for contacting us. ")) : p("", !0)], 544))
    }
}
  , Cc = ["disabled"]
  , Rc = {
    key: 0
}
  , Vc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , qc = {
    __name: "FineTuningTurboAndGPT4",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D(null)
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            required: !0
        }, {
            id: "company",
            type: "text",
            name: "0-2/name",
            label: "Company name",
            autocomplete: "organization",
            required: !0
        }, {
            id: "organizationId",
            type: "text",
            name: "organization_id",
            label: "Organization ID",
            helpText: 'We need a valid Organization ID, found in your API <a href="https://platform.openai.com/account/org-settings" target="_blank">account settings</a>, to grant access.',
            required: !0
        }, {
            id: "currentFine",
            type: "textarea",
            name: "if_you_currently_have_fine_tuned_model_s___share_the_model_name_below",
            label: "If you currently have fine-tuned model(s), share the model name below",
            required: !1
        }, {
            id: "ideas",
            name: "use_cases_finetuning",
            label: "What are you trying to build and how will fine-tuning help?",
            type: "textarea",
            required: !0
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = (...g)=>e(l) && e(l)(...g))
        }, " Join waitlist ", 8, Cc), e(s) === "error" ? (o(),
        r("div", Rc, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", Vc, " Thank you. You’ve been added to the waitlist for GPT-3.5 Turbo and GPT-4 fine-tuning. We’ll be in touch soon. ")) : p("", !0)], 544))
    }
}
  , Mc = ["disabled"]
  , Bc = {
    key: 0
}
  , jc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , Gc = {
    __name: "RedTeamingNetwork",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = D([])
          , _ = g=>{
            g.target.name === "expertise_areas[]" && g.target.value === "Other" && (g.target.checked ? d.value.push(g.target.value) : d.value = d.value.filter(b=>b !== g.target.value))
        }
          , h = x(()=>{
            const g = d.value.includes("Other") ? [{
                id: "other_expertise_area",
                type: "text",
                name: "other_expertise_area",
                label: "Other expertise area",
                required: !0,
                helpText: "e.g. Mathematics, Philosophy, etc."
            }] : [];
            return [{
                id: "firstname",
                type: "text",
                name: "firstname",
                label: "First name",
                autocomplete: "given-name",
                required: !0
            }, {
                id: "lastname",
                type: "text",
                name: "lastname",
                label: "Last name",
                autocomplete: "family-name",
                required: !0
            }, {
                id: "email",
                type: "email",
                name: "email",
                label: "Email",
                autocomplete: "email",
                required: !0
            }, {
                id: "country",
                type: "select",
                name: "country",
                label: "Country of residence",
                autocomplete: "country-name",
                required: !0,
                options: re
            }, {
                id: "company",
                type: "text",
                name: "company",
                label: "Organizational Affiliation (if any)",
                autocomplete: "organization"
            }, {
                id: "highest_level_of_education_completed",
                type: "select",
                name: "highest_level_of_education_completed",
                label: "Highest level of Education completed",
                required: !0,
                options: [{
                    label: "Select a level...",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, {
                    label: "Less than High School",
                    value: "Less than High School"
                }, {
                    label: "Some High School",
                    value: "Some High School"
                }, {
                    label: "High School Diploma or Equivalent (e.g., GED)",
                    value: "High School Diploma or Equivalent (e.g., GED)"
                }, {
                    label: "Vocational/Technical Certificate",
                    value: "Vocational/Technical Certificate"
                }, {
                    label: "Some College, No Degree",
                    value: "Some College, No Degree"
                }, {
                    label: "Associate Degree",
                    value: "Associate Degree"
                }, {
                    label: "Bachelor’s Degree",
                    value: "Bachelor’s Degree"
                }, {
                    label: "Postgraduate Certificate",
                    value: "Postgraduate Certificate"
                }, {
                    label: "Master’s Degree",
                    value: "Master’s Degree"
                }, {
                    label: "Professional Degree (e.g., JD, MD, DVM)",
                    value: "Professional Degree (e.g., JD, MD, DVM)"
                }, {
                    label: "Doctorate Degree (e.g., Ph.D.)",
                    value: "Doctorate Degree (e.g., Ph.D.)"
                }, {
                    label: "Prefer not to say",
                    value: "Prefer not to say"
                }, {
                    label: "Other",
                    value: "Other"
                }]
            }, {
                id: "degree_field",
                type: "text",
                name: "degree_field",
                label: "If you have a degree, in which field is it?"
            }, {
                id: "expertise_areas",
                type: "checkbox",
                name: "expertise_areas",
                label: "Areas you consider yourself to have expertise",
                options: ["Cognitive Science", "Chemistry", "Biology", "Physics", "Computer Science", "Political Science", "Psychology", "Economics", "Anthropology", "Sociology", "HCI", "Fairness / Bias ", "Alignment", "Education", "Healthcare", "Law", "Child Safety", "Cybersecurity", "Finance", "Mis/disinformation", "Political Use", "Privacy", "Biometrics", "Languages and Linguistics", "Other"].map(b=>({
                    label: b,
                    value: b
                })),
                required: !0
            }, ...g, {
                id: "why_interested_in_red_teaming",
                type: "textarea",
                name: "why_interested_in_red_teaming",
                label: "Why are you interested in joining the OpenAI Red Teaming Network?",
                required: !0,
                maxlength: 1300
            }, {
                id: "monthly_time_investment",
                type: "select",
                name: "monthly_time_investment",
                label: "How much time do you expect to be able to spend red teaming new systems or models in a given month? (Note that you would not be expected to be contributing every month)",
                required: !0,
                options: [{
                    label: "Select a level...",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, {
                    label: "1-5 hours",
                    value: "1-5 hours"
                }, {
                    label: "5-10 hours",
                    value: "5-10 hours"
                }, {
                    label: "10-15 hours",
                    value: "10-15 hours"
                }, {
                    label: "20+ hours",
                    value: "20+ hours"
                }]
            }, {
                id: "red_teaming_important_area",
                type: "textarea",
                name: "red_teaming_important_area",
                label: "What do you think is an important area for OpenAI to be red teaming?",
                required: !0,
                maxlength: 1300
            }, {
                id: "fluent_languages",
                type: "text",
                name: "fluent_languages",
                label: "What languages are you fluent in?",
                required: !0,
                helpText: "e.g. English, Spanish, Mandarin, Dutch"
            }, {
                id: "product_experience",
                type: "checkbox",
                name: "product_experience",
                label: "I have previously used the following",
                options: ["OpenAI API", "OpenAI Playground", "ChatGPT", "DALL·E", "Fine-Tuning"].map(b=>({
                    label: b,
                    value: b
                })),
                required: !0
            }, {
                id: "twitterhandle",
                type: "text",
                name: "twitterhandle",
                label: "Twitter profile URL",
                helpText: "Please include the full link to your profile.",
                placeholder: "https://twitter.com/openai",
                pattern: "^(https?://)?(www.)?(twitter.com/.+|x.com/.+)$",
                inputmode: "url"
            }, {
                id: "resume",
                name: "linkedin_url",
                type: "text",
                placeholder: "https://linkedin.com/in/yourname",
                inputmode: "url",
                label: "LinkedIn / resume URL",
                helpText: "Please include the full link to your profile."
            }]
        }
        );
        return (g,b)=>(o(),
        r("form", {
            onSubmit: b[1] || (b[1] = U((...v)=>e(u) && e(u)(...v), ["prevent"])),
            onChange: _,
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(h)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: b[0] || (b[0] = (...v)=>e(l) && e(l)(...v))
        }, "Submit", 8, Mc), e(s) === "error" ? (o(),
        r("div", Bc, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", jc, " Thank you for your application, we’ll be in touch soon! ")) : p("", !0)], 544))
    }
}
  , Fc = ["disabled"]
  , Nc = {
    key: 0
}
  , Hc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , zc = {
    __name: "CustomModels",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint,
            disableSubmitOnSuccess: !0
        })
          , d = [{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Business email",
            autocomplete: "email",
            required: !0
        }, {
            id: "country",
            type: "select",
            name: "country",
            label: "Company HQ location",
            autocomplete: "country-name",
            required: !0,
            helpText: '<a href="https://platform.openai.com/docs/supported-countries" target="_blank">Supported countries and territories</a>',
            options: re
        }, {
            id: "company",
            type: "text",
            name: "company",
            label: "Company name",
            autocomplete: "organization",
            required: !0
        }, {
            id: "industry",
            type: "select",
            name: "industry_v2",
            label: "Industry",
            required: !0,
            options: [{
                label: "Select an industry…",
                value: "",
                disabled: !0,
                selected: !0
            }, {
                label: "Consulting",
                value: "Consulting"
            }, {
                label: "Education",
                value: "Education"
            }, {
                label: "Finance",
                value: "Finance"
            }, {
                label: "Food & beverage",
                value: "Food & Beverage"
            }, {
                label: "Government",
                value: "Government"
            }, {
                label: "Healthcare",
                value: "Healthcare"
            }, {
                label: "Insurance",
                value: "Insurance"
            }, {
                label: "Law",
                value: "Law"
            }, {
                label: "Manufacturing",
                value: "Manufacturing"
            }, {
                label: "Media",
                value: "Media"
            }, {
                label: "Technology",
                value: "Technology"
            }, {
                label: "Telecom",
                value: "Telecom"
            }, {
                label: "Other",
                value: "Other"
            }, {
                label: "Sports",
                value: "Sports"
            }, {
                label: "Real estate",
                value: "Real estate"
            }, {
                label: "Retail",
                value: "Retail"
            }]
        }, {
            id: "custom_models_train_what",
            type: "textarea",
            name: "custom_models_train_what",
            label: "What do you want to train a custom model to do?",
            autocomplete: "off",
            required: !0
        }, {
            id: "datasets",
            type: "textarea",
            name: "custom_models_datasets",
            label: "What datasets (or types of data) do you expect to train the model on?",
            autocomplete: "off",
            required: !0
        }, {
            id: "acknowledge",
            type: "checkbox",
            name: "custom_models_acknowledge",
            options: [{
                label: "I acknowledge that it may take several months to train custom models, and that pricing starts at $2–3 million",
                name: "yes",
                value: "yes"
            }],
            required: !0
        }];
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: d
        }), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = g=>e(l)())
        }, " Submit ", 8, Fc), e(s) === "error" ? (o(),
        r("div", Nc, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", Hc, " Thank you. Our team is looking forward to connecting with you. You’ll hear from us soon! ")) : p("", !0)], 544))
    }
}
  , Uc = a("div", {
    class: "ui-richtext"
}, [a("p", {
    class: "f-body-1"
}, " Responses will be accepted on a rolling basis through December 31, 2023. We will offer $25,000 each in API credits to up to 10 top submissions, publish novel ideas and entries, and look for candidates for Preparedness from among the top contenders in this challenge. "), a("p", {
    class: "f-body-1"
}, " Note: Participants are responsible for ensuring that they are authorized to share any information provided to OpenAI as part of this challenge. Please do not submit any sensitive information, including confidential information, government classified information, or any information that would require a government license for release or export. ")], -1)
  , Wc = a("p", {
    class: "f-body-1 mt-spacing-5"
}, " Imagine we gave you unrestricted access to OpenAI's Whisper (transcription), Voice (text-to-speech), GPT-4V, and DALLE·3 models, and you were a malicious actor. Consider the most unique, while still being probable, potentially catastrophic misuse of the model. You might consider misuse related to the categories discussed in the blog post, or another category. For example, a malicious actor might use GPT-4, Whisper and Voice to socially engineer workers at critical infrastructure facilities into installing malware, allowing shutdown of the power grid. ", -1)
  , Kc = a("p", {
    class: "f-body-1 mt-spacing-5"
}, " Now, imagine you have joined the Preparedness team. ", -1)
  , Jc = ["disabled"]
  , Yc = {
    key: 0
}
  , Xc = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , Qc = {
    __name: "FrontierPreparedness",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint,
            disableSubmitOnSuccess: !0
        })
          , d = [{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            autocomplete: "email",
            required: !0
        }, {
            id: "resume",
            name: "linkedin_url",
            type: "text",
            pattern: "(https?://)?(www.)?[^.]+.[^.]+(.[^.]+)*(.[^.]+)*",
            inputmode: "url",
            placeholder: "https://linkedin.com/in/yourname",
            label: "LinkedIn / resume URL",
            required: !0
        }, {
            id: "what_misuse",
            type: "textarea",
            name: "what_misuse",
            label: "What is the misuse you’ll be writing about?",
            helpText: "Maximum 20 words",
            required: !0,
            rows: 2,
            maxWords: 20
        }, {
            id: "describe_misuse",
            type: "textarea",
            name: "describe_misuse",
            label: "Describe this misuse. Why might it lead to catastrophic harm and what would the harm be?",
            helpText: "Maximum 100 words",
            required: !0,
            maxWords: 100
        }, {
            id: "proof_of_concept",
            type: "text",
            name: "proof_of_concept",
            pattern: "(https?://)?(www.)?[^.]+.[^.]+(.[^.]+)*",
            inputmode: "url",
            placeholder: "https://filehost.com/proof_of_concept.pdf",
            label: "Outline how you envision someone executing such a misuse in the real world assuming you have unrestricted access to our models. Please be specific (e.g., provide proof of concept, detailed step by step instructions).",
            helpText: "Link directly to a 3 page max PDF. Links to download a PDF will not be accepted.",
            required: !0
        }, {
            id: "experiment_plan",
            type: "textarea",
            name: "experiment_plan",
            label: "Outline an experiment plan to (ethically and legally) measure the true feasibility and potential severity of the misuse scenario you described above assuming you have a broad range of resources at your disposal, including an ability to perform human-AI evaluations.",
            helpText: "Maximum 300 words",
            required: !0,
            maxWords: 300
        }, {
            id: "potential_mitigation_actions",
            type: "textarea",
            name: "potential_mitigation_actions",
            label: "Detail potential actions that might mitigate the risk you identified.",
            helpText: "Maximum 150 words",
            required: !0,
            maxWords: 150
        }]
          , _ = h=>{
            const g = d.find(b=>b.name === h.target.name);
            g.maxWords && h.target.value.split(" ").length >= g.maxWords && (h.preventDefault(),
            h.target.value = h.target.value.split(" ").slice(0, g.maxWords - 1).join(" "))
        }
        ;
        return (h,g)=>(o(),
        r("form", {
            onSubmit: g[1] || (g[1] = U((...b)=>e(u) && e(u)(...b), ["prevent"])),
            onKeyup: _,
            ref_key: "form",
            ref: n
        }, [Uc, w(K, {
            fields: d.slice(0, 4)
        }, null, 8, ["fields"]), Wc, w(K, {
            fields: d.slice(4, 7)
        }, null, 8, ["fields"]), Kc, w(K, {
            fields: d.slice(7)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: g[0] || (g[0] = (...b)=>e(l) && e(l)(...b))
        }, "Submit", 8, Jc), e(s) === "error" ? (o(),
        r("div", Yc, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", Xc, " Thank you for your application, we’ll be in touch soon! ")) : p("", !0)], 544))
    }
}
  , Zc = ["disabled"]
  , eu = {
    key: 0
}
  , tu = {
    key: 1,
    class: "ui-richtext scroll-mb-24",
    "data-success": ""
}
  , ou = a("p", null, " Thank you for submitting! We appreciate your interest in contributing to the future of AI research. ", -1)
  , iu = a("p", null, " We will reach out to you if we think there is an opportunity to partner in the near term. We have a small team and may not be able to respond to all submissions. ", -1)
  , nu = [ou, iu]
  , ru = {
    __name: "DataPartnership",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint,
            disableSubmitOnSuccess: !0
        })
          , d = x(()=>[{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            autocomplete: "email",
            required: !0
        }, {
            id: "company",
            type: "text",
            name: "company",
            label: "Organization name",
            autocomplete: "organization",
            required: !0
        }, {
            id: "country",
            type: "select",
            name: "country",
            label: "Organization country",
            autocomplete: "country-name",
            required: !0,
            options: re
        }, {
            id: "organization_type",
            type: "select",
            name: "organization_type",
            label: "Organization type",
            required: !0,
            options: [{
                label: "Academic institution",
                value: "Academic Institution"
            }, {
                label: "Research organization",
                value: "Research Organization"
            }, {
                label: "Religious organization",
                value: "Religious Organization"
            }, {
                label: "Government organization",
                value: "Government Organization"
            }, {
                label: "Political organization",
                value: "Political Organization"
            }, {
                label: "Media organization",
                value: "Media organization"
            }, {
                label: "For-profit public company",
                value: "For-Profit Public Company"
            }, {
                label: "For-profit private company",
                value: "For-Profit Private Company"
            }, {
                label: "Non-profit",
                value: "Non-profit"
            }, {
                label: "Grassroots community",
                value: "Grassroots Community"
            }, {
                label: "Individual",
                value: "Individual"
            }, {
                label: "Other",
                value: "Other"
            }]
        }, {
            id: "data_type",
            type: "select",
            name: "data_type",
            label: "Data type",
            required: !0,
            options: [{
                label: "Written text",
                value: "Written text"
            }, {
                label: "Spoken language",
                value: "Spoken language"
            }, {
                label: "Music",
                value: "Music"
            }, {
                label: "Images",
                value: "Images"
            }, {
                label: "Numeric",
                value: "Numeric"
            }, {
                label: "Video",
                value: "Video"
            }, {
                label: "Other",
                value: "Other"
            }]
        }, {
            id: "estimated_data_size",
            type: "textarea",
            name: "estimated_data_size",
            label: "Estimated data size",
            helpText: "E.g. number of words, hours of content. Please specify units",
            autocomplete: "off",
            required: !0
        }, {
            id: "data_format",
            type: "select",
            name: "data_format",
            label: "Please let us know what format your data is in: digital or print",
            autocomplete: "off",
            required: !0,
            options: [{
                label: "Print or other physical medium",
                value: "Print or other physical medium"
            }, {
                label: "Digital",
                value: "Digital"
            }]
        }, {
            id: "data_description",
            type: "textarea",
            name: "data_description",
            label: "Please briefly describe your data",
            autocomplete: "off",
            required: !0
        }, {
            id: "data_rights",
            type: "textarea",
            name: "data_rights",
            label: "Do you have the rights to share this data?",
            autocomplete: "off",
            required: !0
        }, {
            id: "help_to_clean_and_deliver_data",
            type: "textarea",
            name: "help_to_clean_and_deliver_data",
            label: "What help do you need to clean and deliver your data?",
            autocomplete: "off",
            required: !0
        }, {
            id: "data_contribution_type",
            type: "select",
            name: "data_contribution_type",
            label: "Are you interested in exploring contributing your data publicly, privately, or open to discussing both?",
            required: !0,
            options: [{
                label: "Interested in the open source, public archive only",
                value: "Interested in the open source, public archive only"
            }, {
                label: "Interested in private datasets only",
                value: "Interested in private datasets only"
            }, {
                label: "Interested in discussing both",
                value: "Interested in discussing both"
            }]
        }, {
            id: "extra_details",
            type: "textarea",
            name: "extra_details",
            label: "Anything else?",
            autocomplete: "off"
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = g=>e(l)())
        }, " Submit ", 8, Zc), e(s) === "error" ? (o(),
        r("div", eu, " There was a problem submitting your application. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", tu, nu)) : p("", !0)], 544))
    }
}
  , au = ["disabled"]
  , su = {
    key: 0
}
  , lu = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , cu = {
    __name: "FeatureGPT",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint,
            disableSubmitOnSuccess: !0
        })
          , d = x(()=>[{
            id: "firstname",
            type: "text",
            name: "firstname",
            label: "First name",
            autocomplete: "given-name",
            required: !0
        }, {
            id: "lastname",
            type: "text",
            name: "lastname",
            label: "Last name",
            autocomplete: "family-name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Email",
            autocomplete: "email",
            required: !0,
            helpText: "Ensure this email belongs to the organization you’re requesting credits for."
        }, {
            id: "link",
            type: "url",
            name: "gpt_url",
            label: "Link to GPT",
            required: !0,
            placeholder: "https://chat.openai.com/g/",
            pattern: "^https://chat.openai.com/g/.*"
        }, {
            id: "category",
            type: "select",
            name: "gpt_category",
            label: "GPT category",
            required: !0,
            options: [{
                label: "Select a category…",
                value: "",
                disabled: !0,
                selected: !0
            }, {
                label: "DALL·E",
                value: "DALL-E"
            }, {
                label: "Education",
                value: "Education"
            }, {
                label: "Lifestyle & Fun",
                value: "Lifestyle & Fun"
            }, {
                label: "Productivity",
                value: "Productivity"
            }, {
                label: "Programming",
                value: "Programming"
            }, {
                label: "Research & Analysis",
                value: "Research & Analysis"
            }, {
                label: "Writing",
                value: "Writing"
            }, {
                label: "Other",
                value: "Other"
            }]
        }]);
        return (_,h)=>(o(),
        r("form", {
            ref_key: "form",
            ref: n,
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"]))
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = g=>e(l)())
        }, " Submit ", 8, au), e(s) === "error" ? (o(),
        r("div", su, " There was a problem submitting your form. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", lu, " Thanks for submitting the form. We’ll review your nomination and reach out if we choose to feature your GPT. ")) : p("", !0)], 544))
    }
}
  , uu = ["disabled"]
  , du = {
    key: 0
}
  , pu = {
    key: 1,
    class: "ui-richtext scroll-mb-24",
    "data-success": ""
}
  , mu = {
    __name: "TrademarkDispute",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D(null)
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint
        })
          , d = x(()=>[{
            id: "relationship",
            type: "radio",
            name: "trademark_relationship",
            label: "Describe your relationship to the rights owner",
            options: [{
                label: "I am the rights owner",
                value: "I am the rights owner"
            }, {
                label: "I am reporting on behalf of my organization or client",
                value: "I am reporting on behalf of my organization or client"
            }, {
                label: "I am reporting on behalf of someone else.",
                value: "I am reporting on behalf of someone else."
            }],
            required: !0
        }, {
            id: "full-name",
            type: "text",
            name: "full_name",
            label: "Full name",
            autocomplete: "name",
            required: !0
        }, {
            id: "email",
            type: "email",
            name: "email",
            label: "Business email",
            autocomplete: "email",
            required: !0
        }, {
            id: "tradermark-holders-name",
            type: "text",
            name: "trademark_holders_name",
            label: "Trademark holder’s name",
            autocomplete: "off",
            required: !0
        }, {
            id: "tradermark-holders-address",
            type: "text",
            name: "trademark_holders_address",
            label: "Trademark holder’s address",
            autocomplete: "off",
            required: !0
        }, {
            id: "trademark-holders-country",
            type: "select",
            name: "trademark_holders_country",
            label: "Trademark holder’s country",
            required: !0,
            options: re
        }, {
            id: "trademark-holders-website",
            type: "text",
            name: "trademark_holders_website",
            label: "Trademark holder’s website",
            required: !0,
            pattern: "(https?://)?(www.)?[^.]+.[^.]+(.[^.]+)*",
            inputmode: "url"
        }, {
            id: "trademark-details",
            type: "textarea",
            name: "trademark_details",
            label: "What is the trademark?",
            required: !0,
            rows: 2
        }, {
            id: "tradermark-registration-location",
            type: "text",
            name: "trademark_registration_location",
            label: "Where is the trademark registered?",
            autocomplete: "off",
            required: !0
        }, {
            id: "trademark-registration-number",
            type: "textarea",
            name: "trademark_registration_number",
            label: "What is the trademark registration number? Include a link (URL) to the trademark registration, if possible.",
            required: !0,
            rows: 2
        }, {
            id: "trademark-infringement-details",
            type: "textarea",
            name: "trademark_infringement_details",
            label: "What material on OpenAI’s platform do you believe is infringing your trademark? Please provide a link to the content, if possible.",
            required: !0,
            rows: 4
        }, {
            id: "trademark-additional-details",
            type: "textarea",
            name: "trademark_additional_details",
            label: "Please provide any additional information that will help us understand your request.",
            required: !0,
            rows: 4
        }, {
            id: "declaration",
            type: "text",
            name: "declaration",
            label: "<strong>Declaration Statement</strong><br/>By submitting this notice, you state that you have a good faith belief that the reported use described above, in the manner you have complained of, is not authorized by the intellectual property rights owner, its agent, or the law; that the information contained in this notice is accurate; and, under penalty of perjury, that you are authorized to act on behalf of the owner of the intellectual property rights at issue.<br/><br/>Your name",
            autocomplete: "name",
            placeholder: "Jane Diaz",
            required: !0
        }]);
        return (_,h)=>(o(),
        r("form", {
            onSubmit: h[1] || (h[1] = U((...g)=>e(u) && e(u)(...g), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(d)
        }, null, 8, ["fields"]), a("button", {
            type: "submit",
            disabled: e(c),
            onClick: h[0] || (h[0] = (...g)=>e(l) && e(l)(...g))
        }, "Submit", 8, uu), e(s) === "error" ? (o(),
        r("div", du, " There was a problem submitting your form. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", pu, " Thank you for submitting your dispute. ")) : p("", !0)], 544))
    }
}
  , _u = ["innerHTML"]
  , hu = a("p", null, " By clicking submit, you attest that the information in this form is accurate under penalty of perjury. ", -1)
  , gu = ["disabled"]
  , bu = {
    key: 0
}
  , vu = {
    key: 1,
    class: "scroll-mb-24",
    "data-success": ""
}
  , yu = {
    __name: "ReportIllegalContent",
    props: {
        endpoint: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = D()
          , {state: s, disabled: c, validate: l, submit: u} = Q({
            form: n,
            endpoint: i.endpoint,
            disableSubmitOnSuccess: !0
        })
          , d = D("")
          , _ = D("")
          , h = I=>{
            switch (I.target.name) {
            case "dsa_report_category":
                d.value = I.target.value,
                _.value = "";
                break;
            case "dsa_report_subcategory":
                _.value = I.target.value;
                break
            }
        }
          , g = [{
            name: "Animal welfare",
            subcategories: ["Animal harm", "Unlawful sale of animals", "Other"]
        }, {
            name: "Data protection and privacy violations"
        }, {
            name: "Illegal or harmful speech",
            subcategories: ["Defamation", "Discrimination", "Illegal hate speech", "Other"]
        }, {
            name: "Intellectual property infringements",
            subcategories: ["Copyright infringements", "Trademark infringements"]
        }, {
            name: "Negative effects on civic discourse or elections",
            subcategories: ["Violation of EU law relevant to civic discourse or elections", "Violation of national law relevant to civic discourse or elections", "Misinformation, disinformation, foreign information manipulation and interference", "Other"]
        }, {
            name: "Non-consensual behaviour",
            subcategories: ["Non-consensual image sharing", "Non-consensual items containing deepfake or similar technology using a third party’s features", "Online bullying/intimidation", "Stalking", "Other"]
        }, {
            name: "Pornography or sexualized content",
            subcategories: ["Adult sexual material", "Image-based sexual abuse (excluding content depicting minors)", "Other"]
        }, {
            name: "Protection of minors",
            subcategories: ["Age-specific restrictions concerning minors", "Child sexual abuse material", "Grooming/sexual enticement of minors", "Unsafe challenges", "Other"]
        }, {
            name: "Risk for public security",
            subcategories: ["Illegal organizations", "Risk for environmental damage", "Risk for public health", "Terrorist content", "Other"]
        }, {
            name: "Scams and/or fraud",
            subcategories: ["Inauthentic accounts", "Inauthentic listings", "Inauthentic user reviews", "Impersonation or account hijacking", "Phishing", "Pyramid schemes", "Other"]
        }, {
            name: "Self-harm",
            subcategories: ["Content promoting eating disorders", "Self-mutilation", "Suicide", "Other"]
        }, {
            name: "Unsafe, non-compliant or prohibited products",
            subcategories: ["Prohibited or restricted products", "Unsafe or non-compliant products", "Other"]
        }, {
            name: "Violence",
            subcategories: ["Coordinated harm", "Gender-based violence", "Human exploitation", "Human trafficking", "General calls or incitement to violence and/or hatred", "Other"]
        }]
          , b = (I,P)=>I.map($=>({
            label: $,
            value: $,
            selected: $ === P
        }))
          , v = x(()=>d.value === "Data protection and privacy violations" ? 'To report a privacy violation, please contact <a href="mailto:privacy@openai.com">privacy@openai.com</a>.' : _.value === "Copyright infringements" ? 'To report a copyright infringement, please use <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSq2JNu9g8skmUCXh9968brvVftNa2lNInG_KyNJlBPEuZJw/viewform" target="_blank">this form</a>.' : _.value === "Trademark infringements" ? 'To report a trademark infringement, please use <a href="https://openai.com/form/trademark-dispute" target="_blank">this form</a>.' : null)
          , k = x(()=>{
            const I = [{
                id: "dsa_report_product",
                type: "select",
                name: "dsa_report_product",
                label: "Which product does this relate to?",
                required: !0,
                options: [{
                    label: "Select a product…",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, {
                    label: "OpenAI Developer Forum",
                    value: "OpenAI Developer Forum"
                }, {
                    label: "OpenAI Forum",
                    value: "OpenAI Forum"
                }, {
                    label: "Labs",
                    value: "Labs"
                }]
            }, {
                id: "dsa_report_url",
                type: "text",
                pattern: "(https?://)?(www.)?[^.]+.[^.]+(.[^.]+)*",
                inputmode: "url",
                name: "dsa_report_url",
                label: "The URL of the content you are reporting",
                required: !0,
                helpText: 'See our <a href="https://help.openai.com/articles/8940836-how-to-report-content" target="_blank">Help Center</a> if you need help finding the URL you are reporting.'
            }, {
                id: "dsa_report_category",
                type: "select",
                name: "dsa_report_category",
                required: !0,
                label: "Select the category of illegal content you are reporting",
                options: [{
                    label: "Select a category…",
                    value: "",
                    disabled: !0,
                    selected: !0
                }, ...g.map($=>({
                    label: $.name,
                    value: $.name
                }))]
            }]
              , P = d.value && g.find($=>$.name === d.value).subcategories || [];
            return P != null && P.length && I.push({
                id: "dsa_report_subcategory",
                type: "select",
                name: "dsa_report_subcategory",
                required: !0,
                options: [{
                    label: "Select a subcategory…",
                    value: "",
                    disabled: !0,
                    selected: !_.value
                }, ...b(P, _.value)]
            }),
            v.value || I.push({
                id: "full_name",
                type: "text",
                name: "full_name",
                label: "Your name",
                autocomplete: "name",
                required: d.value !== "Protection of minors"
            }, {
                id: "email",
                type: "email",
                name: "email",
                label: "Email",
                placeholder: "jane@example.com",
                autocomplete: "email",
                required: d.value !== "Protection of minors"
            }),
            I
        }
        );
        return (I,P)=>(o(),
        r("form", {
            onChange: h,
            onSubmit: P[1] || (P[1] = U((...$)=>e(u) && e(u)(...$), ["prevent"])),
            ref_key: "form",
            ref: n
        }, [w(K, {
            fields: e(k)
        }, null, 8, ["fields"]), a("div", null, [e(v) ? (o(),
        r("p", {
            key: 0,
            class: "ui-richtext",
            innerHTML: e(v)
        }, null, 8, _u)) : (o(),
        r(S, {
            key: 1
        }, [hu, a("button", {
            type: "submit",
            disabled: e(c),
            onClick: P[0] || (P[0] = $=>e(l)())
        }, " Submit ", 8, gu)], 64))]), e(s) === "error" ? (o(),
        r("div", bu, " There was a problem submitting your report. ")) : p("", !0), e(s) === "success" ? (o(),
        r("div", vu, " Your report has been submitted. Thank you for helping to keep our products safe. ")) : p("", !0)], 544))
    }
}
  , fu = {}
  , rt = Object.freeze(Object.defineProperty({
    __proto__: null,
    FormChatModelFeedback: pc,
    FormContactSales: Zl,
    FormCustomModels: zc,
    FormCybersecurityGrantProgram: Pc,
    FormDataPartnership: ru,
    FormFeatureGPT: cu,
    FormFineTuningTurboAndGPT4: qc,
    FormForGoodUseCases: Dc,
    FormFrontierPreparedness: Qc,
    FormFund: Tl,
    FormGPT4: nc,
    FormMicrosoftForStartups: Jl,
    FormModelBehaviorFeedback: gc,
    FormRedTeamingNetwork: Gc,
    FormReportIllegalContent: yu,
    FormResearcherAccessProgram: lc,
    FormTrademarkDispute: mu,
    default: fu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ku = {
    class: "mt-spacing-7"
}
  , wu = {
    class: "container"
}
  , Tu = {
    class: "pt-spacing-3 w-full border-t border-primary"
}
  , xu = {
    class: "cols-container"
}
  , Eu = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , Su = {
    class: "xs:w-6-cols md:w-8-cols md:flex md:flex-col lg:w-6-cols mt-40 md:mt-48 lg:mt-4"
}
  , Iu = {
    __name: "BlockForm",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>{
            const d = i.block.content.form;
            return typeof d == "string" ? rt[`Form${d}`] && rt[`Form${d}`] : null
        }
        )
          , s = D()
          , c = D(null);
        function l(d) {
            (d.keyCode == 9 || d.key === "Tab") && (c.value = !0)
        }
        function u(d) {
            c.value = !1
        }
        return te(()=>{
            s.value && (window.addEventListener("keyup", d=>{
                l(d)
            }
            ),
            window.addEventListener("click", d=>{
                u()
            }
            ))
        }
        ),
        xe(()=>{
            s.value && (window.removeEventListener("keyup", d=>{
                l(d)
            }
            ),
            window.removeEventListener("click", d=>{
                u()
            }
            ))
        }
        ),
        (d,_)=>{
            const h = N;
            return o(),
            r("div", ku, [a("div", wu, [a("div", Tu, [a("div", xu, [a("div", Eu, [t.block.content.title ? (o(),
            T(h, {
                key: 0,
                headingLevel: 2,
                class: "f-heading-1",
                title: t.block.content.title
            }, null, 8, ["title"])) : p("", !0)]), a("div", Su, [e(n) ? (o(),
            T(Re(e(n)), {
                key: 0,
                class: y(["ui-form", {
                    "ui-form--keyboard": e(c)
                }]),
                ref_key: "form",
                ref: s,
                endpoint: t.block.content.formspreeEndpoint
            }, null, 8, ["class", "endpoint"])) : p("", !0)])])])])])
        }
    }
}
  , Lu = ["id"]
  , Pu = {
    class: "container"
}
  , $u = {
    class: "cols-container"
}
  , Au = {
    class: "md:w-6-cols lg:ml-2-cols lg:w-6-cols"
}
  , Ou = {
    __name: "BlockHeading",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        function i(n, s) {
            const c = n.find(u=>u.position === s.position - 1)
              , l = pe(c);
            return c && (l === "image" || l === "video" || l === "table" || l === "code-snippet") || s.content.level === 1 ? "mt-spacing-7" : "mt-spacing-6"
        }
        return (n,s)=>{
            const c = N;
            return o(),
            r("div", {
                class: y(i(t.blocks, t.block)),
                id: e(gt)(t.block.content.heading),
                "data-heading": ""
            }, [a("div", Pu, [a("div", $u, [a("div", Au, [w(c, {
                class: y(`f-heading-${t.block.content.level + 2}`),
                "heading-level": t.block.content.level + 1,
                title: t.block.content.heading
            }, null, 8, ["class", "heading-level", "title"])])])])], 10, Lu)
        }
    }
}
  , Du = {
    class: "mt-spacing-7"
}
  , Cu = {
    class: "container"
}
  , Ru = {
    class: "cols-container"
}
  , Vu = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , qu = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols"
}
  , Mu = ["innerHTML"]
  , It = {
    __name: "BlockHeadingWithText",
    props: {
        block: {
            type: Object,
            required: !0
        },
        contentLeft: {
            type: Boolean,
            default: !1
        },
        headingLevel: {
            type: Number,
            default: 2
        }
    },
    setup(t) {
        var h;
        const i = t
          , {$helpers: n} = V()
          , {title: s, body: c, level: l} = (h = i.block) == null ? void 0 : h.content
          , u = x(()=>n.blocks.listingLink(i.block));
        function d() {
            return l === 1 ? "f-subhead-1 xs:mt-16 md:mt-0 ui-richtext" : "f-body-1 xs:mt-16 md:mt-0 ui-richtext"
        }
        function _() {
            return l === 2 ? "f-heading-3" : l === 3 ? "f-heading-5" : "f-heading-1"
        }
        return (g,b)=>{
            const v = N
              , k = X;
            return o(),
            r("div", Du, [a("div", Cu, [a("div", {
                class: y(`pt-spacing-3 w-full border-t ${e(l) === 1 ? "border-primary" : "border-secondary"}`)
            }, [a("div", Ru, [a("div", Vu, [e(s) ? (o(),
            T(v, {
                key: 0,
                title: e(s),
                "heading-level": t.headingLevel,
                class: y(`${_()} md:pr-36 lg:pr-44`)
            }, null, 8, ["title", "heading-level", "class"])) : p("", !0)]), a("div", qu, [e(c) || e(u) && Object.keys(e(u)).length ? (o(),
            r(S, {
                key: 0
            }, [e(c) ? (o(),
            r("div", {
                key: 0,
                class: y(d()),
                innerHTML: e(c)
            }, null, 10, Mu)) : p("", !0), e(u) ? (o(),
            r("div", {
                key: 1,
                class: y(`block ${e(c) ? "mt-spacing-4" : "xs:mt-24 md:mt-4 md:ml-auto lg:mt-8"}`)
            }, [w(k, {
                label: e(u).text,
                url: e(u).url,
                download: e(u).download,
                modifier: "underline"
            }, null, 8, ["label", "url", "download"])], 2)) : p("", !0)], 64)) : ct(g.$slots, "content", {
                key: 1
            })])])], 2)])])
        }
    }
}
  , Bu = {
    key: 0,
    class: "cols-container"
}
  , ju = ["innerHTML"]
  , Gu = {
    __name: "BlockImage",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>n.media.imagesByRole(i.block, "images", "default"))
          , c = i.block.content.display;
        return (l,u)=>{
            const d = ee;
            return e(s) ? (o(),
            r("div", {
                key: 0,
                class: y(e(de)(t.blocks, t.block))
            }, [a("div", {
                class: y([{
                    container: e(c) !== "full-bleed",
                    "full-bleed-container": e(c) === "full-bleed"
                }])
            }, [a("div", {
                class: y(e(c) === "text-column" ? "md:w-6-cols lg:ml-2-cols lg:w-6-cols relative" : "w-full")
            }, [e(s).length > 1 ? (o(),
            r("div", Bu, [(o(!0),
            r(S, null, A(e(s), _=>(o(),
            r("div", {
                class: y(["md:mt-0 xs:w-6-cols", {
                    "md:w-1/2-cols": e(s).length === 2
                }, {
                    "md:w-1/3-cols": e(s).length === 3
                }, {
                    "md:w-1/4-cols": e(s).length === 4
                }, {
                    "first:mt-0 xs:mt-16": e(c) !== "full-bleed"
                }])
            }, [w(d, {
                image: _,
                caption: _.caption,
                sizes: "sm:100vw md:100vw lg:100vw xl:100vw"
            }, null, 8, ["image", "caption"])], 2))), 256))])) : e(s) && e(s).length ? (o(),
            T(d, {
                key: 1,
                image: e(s)[0],
                caption: e(c) !== "full-bleed" ? e(s)[0].caption : null,
                sizes: e(c) !== "text-column" ? "sm:100vw md:100vw lg:100vw xl:100vw" : null
            }, {
                default: Z(()=>[e(c) === "full-bleed" && e(s)[0].caption ? (o(),
                r("div", {
                    key: 0,
                    class: "container text-right ui-richtext",
                    innerHTML: e(s)[0].caption
                }, null, 8, ju)) : p("", !0)]),
                _: 1
            }, 8, ["image", "caption", "sizes"])) : p("", !0)], 2)], 2)], 2)) : p("", !0)
        }
    }
};
let at = 0;
const Fu = {
    props: {
        content: {
            type: String,
            default: null
        },
        headingLevel: {
            type: Number,
            default: 2
        },
        spacing: {
            type: Boolean,
            default: !0
        },
        tabs: {
            type: Array,
            default() {
                return []
            }
        },
        title: {
            type: String,
            default: null
        }
    },
    data() {
        return at += 1,
        {
            selected: 0
        }
    },
    computed: {
        id() {
            return `tabs${at}`
        }
    },
    setup() {
        const t = D(null);
        return te(()=>{
            t.value = !0
        }
        ),
        {
            codeVisible: t
        }
    },
    methods: {
        handleClick(t) {
            this.selected = t,
            setTimeout(()=>{
                window.dispatchEvent(new Event("resize"))
            }
            , 10)
        },
        switchFocus(t, i) {
            const n = this.$refs.tab;
            t.keyCode === 37 && n[i - 1] && (n[i - 1].focus(),
            this.selected = i - 1),
            t.keyCode === 39 && n[i + 1] && (n[i + 1].focus(),
            this.selected = i + 1),
            setTimeout(()=>{
                window.dispatchEvent(new Event("resize"))
            }
            , 10)
        }
    }
}
  , Nu = {
    key: 0,
    class: "cols-container"
}
  , Hu = {
    class: "xs:w-6-cols md:w-8-cols lg:w-6-cols"
}
  , zu = {
    class: "w-full"
}
  , Uu = ["aria-labelledby"]
  , Wu = ["id", "href", "aria-selected", "onClick", "onKeydown"]
  , Ku = {
    key: 2,
    class: "mt-spacing-4"
}
  , Ju = ["id", "aria-labelledby", "tabindex", "hidden"]
  , Yu = {
    class: "cols-container"
}
  , Xu = {
    key: 1,
    class: "f-body-1"
}
  , Qu = {
    key: 0,
    class: "text-right ui-richtext"
}
  , Zu = ["innerHTML"]
  , ed = a("br", null, null, -1)
  , td = {
    class: "text-secondary"
}
  , od = {
    key: 1,
    class: "pt-gutter"
}
  , id = {
    key: 0
}
  , nd = {
    class: "mt-spacing-4 ratio ratio-1x1 md:ratio-3x2 border border-secondary"
}
  , rd = ["innerHTML"]
  , ad = ["innerHTML"]
  , sd = {
    key: 4,
    class: "mt-spacing-4 f-body-1 first:mt-0"
}
  , ld = {
    class: "h-full"
}
  , cd = {
    key: 3,
    class: "mt-24 md:mt-40 lg:mt-48"
}
  , ud = ["innerHTML"];
function dd(t, i, n, s, c, l) {
    const u = N
      , d = ee
      , _ = Ee
      , h = _t
      , g = ge;
    return o(),
    r("div", {
        class: y([{
            "mt-spacing-7": n.spacing
        }])
    }, [n.title ? (o(),
    r("div", Nu, [a("div", Hu, [w(u, {
        level: n.headingLevel,
        title: n.title,
        class: "f-heading-3"
    }, null, 8, ["level", "title"])])])) : p("", !0), n.tabs && n.tabs.length ? (o(),
    r("div", {
        key: 1,
        class: y(n.title ? "mt-24 md:mt-40 lg:mt-48" : "pt-spacing-6")
    }, [w(u, {
        id: `${l.id}_tabs`,
        level: n.headingLevel + 1,
        title: "Tabs",
        class: "sr-only"
    }, null, 8, ["id", "level"]), a("div", zu, [a("ul", {
        "aria-labelledby": `${l.id}_tabs`,
        role: "tablist",
        class: "flex flex-row border-b border-secondary"
    }, [(o(!0),
    r(S, null, A(n.tabs, (b,v)=>(o(),
    r("li", {
        key: v,
        class: "mr-16 lg:mr-24",
        role: "presentation"
    }, [a("a", {
        id: `${l.id}tab${v}`,
        ref_for: !0,
        ref: "tab",
        href: `#${l.id}section${v}`,
        class: y(`ui-link f-ui-1 relative block pb-8 lg:pb-12 ${v === c.selected ? "-mb-1 border-b text-primary" : "text-secondary"}`),
        role: "tab",
        "aria-selected": v === c.selected,
        onClick: U(k=>l.handleClick(v), ["prevent"]),
        onKeydown: k=>l.switchFocus(k, v)
    }, L(b.title), 43, Wu)]))), 128))], 8, Uu)])], 2)) : p("", !0), n.tabs && n.tabs.length ? (o(),
    r("div", Ku, [(o(!0),
    r(S, null, A(n.tabs, (b,v)=>(o(),
    r("section", {
        key: v,
        id: `demo${l.id}section${v}`,
        role: "tabpanel",
        "aria-labelledby": `#demo${l.id}dropdown${v}`,
        tabindex: v === c.selected ? null : "-1",
        hidden: v !== c.selected
    }, [a("div", Yu, [(o(!0),
    r(S, null, A(b.content, (k,I)=>(o(),
    r("div", {
        key: I,
        class: "only:mt-0 xs:w-6-cols xs:mt-16 md:w-4-cols md:mt-0 only:md:w-8-cols lg:w-6-cols only:lg:w-12-cols"
    }, [k.subtitle ? (o(),
    T(u, {
        key: 0,
        level: 3,
        title: k.subtitle,
        class: "f-subhead-2",
        "aria-live": "polite"
    }, null, 8, ["title"])) : p("", !0), k.label ? (o(),
    r("span", Xu, L(k.label), 1)) : p("", !0), k.contentType === "image" ? (o(),
    r(S, {
        key: 2
    }, [k.images && k.images.length === 1 ? (o(),
    T(d, {
        key: 0,
        image: k.images[0],
        class: "mt-gutter first:mt-0"
    }, {
        default: Z(()=>[k.images[0].caption || k.images[0].credit ? (o(),
        r("div", Qu, [a("span", {
            innerHTML: k.images[0].caption
        }, null, 8, Zu), k.images[0].credit ? (o(),
        r(S, {
            key: 0
        }, [ed, a("span", td, L(k.images[0].credit), 1)], 64)) : p("", !0)])) : p("", !0)]),
        _: 2
    }, 1032, ["image"])) : p("", !0), k.images && k.images.length > 1 ? (o(),
    r("div", od, [w(h, null, {
        default: Z(()=>[w(_, {
            items: k.images,
            title: `${k.subtitle} images`,
            ratio: "1x1",
            modifier: "full"
        }, null, 8, ["items", "title"])]),
        _: 2
    }, 1024)])) : p("", !0)], 64)) : k.contentType === "rich_text" && k.content ? (o(),
    r(S, {
        key: 3
    }, [b.content.find(P=>P.contentType === "code") ? (o(),
    r("div", id, [a("div", nd, [a("div", {
        class: "ratio-content p-gutter f-body-1",
        innerHTML: k.content
    }, null, 8, rd)])])) : (o(),
    r("div", {
        key: 1,
        class: "mt-spacing-4 f-body-1 first:mt-0",
        innerHTML: k.content
    }, null, 8, ad))], 64)) : k.contentType === "snippet" && k.snippet ? (o(),
    r("div", sd, [w(g, {
        resource: k.snippet
    }, null, 8, ["resource"])])) : k.contentType === "code" && k.code ? (o(),
    r("div", {
        key: 5,
        class: y([{
            "md:w-6-cols lg:w-6-cols": b.content.length === 1
        }])
    }, [k.code ? (o(),
    r("div", {
        key: 0,
        class: y(["mt-spacing-4", {
            "ratio ratio-1x1 md:ratio-3x2": b.content.find(P=>P.contentType === "rich_text")
        }])
    }, [a("div", {
        class: y(["border border-secondary", {
            "ratio-content": b.content.find(P=>P.contentType === "rich_text")
        }])
    }, [a("pre", ld, [a("code", {
        class: y(["h-full f-code-1 whitespace-pre transition-opacity duration-300 opacity-0", k.lang ? k.lang.toLowerCase() : null])
    }, L(k.code), 3)])], 2)], 2)) : p("", !0)], 2)) : p("", !0)]))), 128))])], 8, Ju))), 128))])) : n.content ? (o(),
    r("div", cd, [a("div", {
        innerHTML: n.content
    }, null, 8, ud)])) : p("", !0)], 2)
}
const pd = le(Fu, [["render", dd]])
  , md = {
    key: 0,
    class: "mt-spacing-7"
}
  , _d = {
    class: "container"
}
  , hd = {
    key: 0,
    class: "cols-container"
}
  , gd = {
    class: "xs:w-6-cols md:w-8-cols lg:w-6-cols"
}
  , bd = {
    key: 1,
    class: "mt-24 md:mt-40 lg:mt-47"
}
  , vd = {
    class: "f-ui-1 relative"
}
  , yd = {
    "aria-hidden": "true"
}
  , fd = ["for"]
  , kd = ["id"]
  , wd = ["value", "id"]
  , Td = {
    key: 1,
    "aria-hidden": "true"
}
  , xd = {
    class: "mt-spacing-4"
}
  , Ed = ["id", "aria-labelledby", "tabindex", "hidden"]
  , Sd = {
    class: "cols-container"
}
  , Id = {
    key: 1,
    class: "f-body-1"
}
  , Ld = {
    key: 0,
    class: "text-right ui-richtext"
}
  , Pd = ["innerHTML"]
  , $d = a("br", null, null, -1)
  , Ad = {
    class: "text-secondary"
}
  , Od = {
    key: 1,
    class: "pt-gutter"
}
  , Dd = {
    key: 0
}
  , Cd = {
    class: "mt-spacing-4 ratio ratio-1x1 md:ratio-3x2 border border-secondary"
}
  , Rd = ["innerHTML"]
  , Vd = ["innerHTML"]
  , qd = {
    key: 4,
    class: "mt-spacing-4 f-body-1 first:mt-0"
}
  , Md = {
    class: "h-full"
}
  , Bd = {
    __name: "BlockInteractive",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    async setup(t) {
        var $, C, q;
        let i, n;
        const s = t
          , {$api: c, $helpers: l} = V()
          , u = ((C = ($ = s.block.relatedItems) == null ? void 0 : $.interactive) == null ? void 0 : C.length) && ((q = s.block.relatedItems) == null ? void 0 : q.interactive[0])
          , {data: d, error: _, pending: h} = ([i,n] = pt(()=>he(`block-interactive-${s.block.id}`, ()=>c.interactiveTabs(u), {
            server: !1,
            transform: E=>l.interactives.tabs({
                resource: u,
                tabs: E
            })
        })),
        i = await i,
        n(),
        i);
        let g = D(0);
        const b = s.block.id
          , v = D(null);
        function k() {
            v.value.dispatchEvent(new Event("change"))
        }
        te(()=>{
            g.value = 0,
            v.value && (k(),
            window.addEventListener("resize", ()=>{
                k()
            }
            ))
        }
        ),
        xe(()=>{
            v.value && window.removeEventListener("resize", ()=>{
                k()
            }
            )
        }
        );
        function I(E, F) {
            let J = document.createElement("select")
              , H = document.createElement("option");
            H.textContent = E.target.options[E.target.selectedIndex].text,
            J.style.cssText += `
      visibility: hidden;
      position: fixed;
      `,
            J.appendChild(H),
            E.target.after(J);
            const Y = J.getBoundingClientRect().width;
            E.target.style.width = `${Y}px`,
            J.remove(),
            g.value = parseInt(E.target.value, 10);
            const M = setTimeout(()=>{
                window.dispatchEvent(new Event("resize"))
            }
            , 10);
            clearTimeout(M)
        }
        const P = D(null);
        return te(()=>{
            P.value = !0
        }
        ),
        (E,F)=>{
            const J = pd
              , H = N
              , Y = ee
              , M = Ee
              , B = ge;
            return !e(_) && !e(h) ? (o(),
            r("div", md, [a("div", _d, [e(d).interactiveType === "tabs" && e(d).tabs.length ? (o(),
            T(J, {
                key: 0,
                title: e(d).title,
                tabs: e(d).tabs,
                spacing: !1
            }, null, 8, ["title", "tabs"])) : (o(),
            r(S, {
                key: 1
            }, [e(d).title ? (o(),
            r("div", hd, [a("div", gd, [w(H, {
                title: e(d).title,
                class: "f-heading-3"
            }, null, 8, ["title"])])])) : p("", !0), e(d).interactiveType === "dropdown" ? (o(),
            r("div", bd, [a("div", vd, [e(d).textBeforeDropdown ? (o(),
            r(S, {
                key: 0
            }, [a("span", yd, L(e(d).textBeforeDropdown), 1), a("label", {
                for: `${e(b)}dd`,
                class: "sr-only"
            }, L(`${e(d).textBeforeDropdown} ${e(d).tabs[e(g)].title} ${e(d).textAfterDropdown}`), 9, fd), e(d).tabs.length ? (o(),
            r("select", {
                key: 0,
                id: `${e(b)}dd`,
                ref_key: "dropdownSelect",
                ref: v,
                onChange: F[0] || (F[0] = z=>I(z))
            }, [(o(!0),
            r(S, null, A(e(d).tabs, (z,W)=>(o(),
            r("option", {
                value: W,
                id: `#demo${e(b)}dropdown${W}`
            }, L(z.title), 9, wd))), 256))], 40, kd)) : p("", !0)], 64)) : p("", !0), e(d).textAfterDropdown ? (o(),
            r("span", Td, " " + L(e(d).textAfterDropdown), 1)) : p("", !0)])])) : p("", !0), a("div", xd, [(o(!0),
            r(S, null, A(e(d).tabs, (z,W)=>(o(),
            r("section", {
                key: W,
                id: `demo${e(b)}section${W}`,
                role: "tabpanel",
                "aria-labelledby": `#demo${e(b)}dropdown${W}`,
                tabindex: W === e(g) ? null : "-1",
                hidden: W !== e(g)
            }, [a("div", Sd, [(o(!0),
            r(S, null, A(z.content, (R,ie)=>(o(),
            r("div", {
                key: ie,
                class: "only:mt-0 xs:w-6-cols xs:mt-16 md:w-4-cols md:mt-0 only:md:w-8-cols lg:w-6-cols only:lg:w-12-cols"
            }, [R.subtitle ? (o(),
            T(H, {
                key: 0,
                level: 3,
                title: R.subtitle,
                class: "f-subhead-2",
                "aria-live": "polite"
            }, null, 8, ["title"])) : p("", !0), R.label ? (o(),
            r("span", Id, L(R.label), 1)) : p("", !0), R.contentType === "image" ? (o(),
            r(S, {
                key: 2
            }, [R.images && R.images.length === 1 ? (o(),
            T(Y, {
                key: 0,
                image: R.images[0],
                class: "mt-gutter first:mt-0"
            }, {
                default: Z(()=>[R.images[0].caption || R.images[0].credit ? (o(),
                r("div", Ld, [a("span", {
                    innerHTML: R.images[0].caption
                }, null, 8, Pd), R.images[0].credit ? (o(),
                r(S, {
                    key: 0
                }, [$d, a("span", Ad, L(R.images[0].credit), 1)], 64)) : p("", !0)])) : p("", !0)]),
                _: 2
            }, 1032, ["image"])) : p("", !0), R.images && R.images.length > 1 ? (o(),
            r("div", Od, [w(M, {
                items: R.images,
                title: `${R.subtitle} images`,
                ratio: "1x1",
                modifier: "full"
            }, null, 8, ["items", "title"])])) : p("", !0)], 64)) : R.contentType === "rich_text" && R.content ? (o(),
            r(S, {
                key: 3
            }, [z.content.find(O=>O.contentType === "code") ? (o(),
            r("div", Dd, [a("div", Cd, [a("div", {
                class: "ratio-content p-gutter f-body-1",
                innerHTML: R.content
            }, null, 8, Rd)])])) : (o(),
            r("div", {
                key: 1,
                class: "mt-spacing-4 f-body-1 first:mt-0",
                innerHTML: R.content
            }, null, 8, Vd))], 64)) : R.contentType === "snippet" && R.snippet ? (o(),
            r("div", qd, [w(B, {
                resource: R.snippet
            }, null, 8, ["resource"])])) : R.contentType === "code" && R.code ? (o(),
            r("div", {
                key: 5,
                class: y([{
                    "md:w-6-cols lg:w-6-cols": z.content.length === 1
                }])
            }, [R.code ? (o(),
            r("div", {
                key: 0,
                class: y(["mt-spacing-4", {
                    "ratio ratio-1x1 md:ratio-3x2": z.content.find(O=>O.contentType === "rich_text")
                }])
            }, [a("div", {
                class: y(["border border-secondary", {
                    "ratio-content": z.content.find(O=>O.contentType === "rich_text")
                }])
            }, [a("pre", Md, [a("code", {
                class: y(["h-full f-code-1 whitespace-pre transition-opacity duration-300 opacity-0", R.lang ? R.lang.toLowerCase() : null])
            }, L(R.code), 3)])], 2)], 2)) : p("", !0)], 2)) : p("", !0)]))), 128))])], 8, Ed))), 128))])], 64))])])) : (o(),
            r(S, {
                key: 1
            }, [ne(L(e(_)), 1)], 64))
        }
    }
}
  , jd = {
    key: 0,
    class: "mt-spacing-6"
}
  , Gd = {
    class: "container"
}
  , Fd = {
    class: "flex flex-row items-center"
}
  , Nd = {
    __name: "BlockLinks",
    props: {
        block: {
            type: Object,
            required: !0
        },
        bodyText: {
            type: Boolean,
            default: !0
        }
    },
    setup(t) {
        const i = t;
        function n(c) {
            return c.style === "bounding-box" ? "outline" : c.style
        }
        const s = x(()=>{
            var c, l;
            return (l = (c = i.block.blocks) == null ? void 0 : c.default) == null ? void 0 : l.filter(u=>{
                var d;
                return (d = u.content) == null ? void 0 : d.url
            }
            ).map(({content: u})=>u)
        }
        );
        return (c,l)=>{
            const u = De
              , d = X;
            return e(s).length ? (o(),
            r("div", jd, [a("div", Gd, [a("div", {
                class: y([{
                    "cols-container": i.bodyText
                }])
            }, [a("div", {
                class: y([{
                    "md:w-6-cols lg:ml-2-cols lg:w-6-cols": i.bodyText
                }])
            }, [a("div", Fd, [(o(!0),
            r(S, null, A(e(s), _=>(o(),
            r(S, null, [_.style === "bounding-box" ? (o(),
            T(u, {
                key: 0,
                url: _.url,
                label: _.label,
                modifier: n(_),
                download: _.download ? "" : null,
                "is-disabled": _.disabled ?? !1,
                class: "ml-16 first:ml-0"
            }, null, 8, ["url", "label", "modifier", "download", "is-disabled"])) : (o(),
            T(d, {
                key: 1,
                url: _.url,
                label: _.label,
                modifier: n(_),
                download: _.download ? "" : null,
                "is-disabled": _.disabled ?? !1,
                class: "ml-16 first:ml-0"
            }, null, 8, ["url", "label", "modifier", "download", "is-disabled"]))], 64))), 256))])], 2)], 2)])])) : p("", !0)
        }
    }
}
  , Hd = {
    key: 0,
    class: "container"
}
  , zd = {
    __name: "BlockListing",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            var u;
            const l = (u = i.block.relatedItems) == null ? void 0 : u.items;
            return l && n.searchCardItems(l)
        }
        )
          , c = x(()=>n.blocks.listingLink(i.block));
        return (l,u)=>{
            const d = oe;
            return e(s) ? (o(),
            r("div", Hd, [w(d, {
                blockLink: !0,
                items: e(s),
                itemsPerRow: e(s).length === 6 ? 3 : void 0,
                link: e(c),
                title: t.block.content.title,
                theme: t.block.content.colorTheme
            }, null, 8, ["items", "itemsPerRow", "link", "title", "theme"])])) : p("", !0)
        }
    }
}
  , Ud = {
    key: 0,
    class: "container"
}
  , Wd = {
    __name: "BlockListingResearch",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        var h, g, b;
        const i = t
          , {$api: n, $helpers: s} = V()
          , {data: c, pending: l, error: u} = he(`block-${(h = i.block) == null ? void 0 : h.id}`, ()=>n.researchPublicationsByTopics(), {
            immediate: !((b = (g = i.block.relatedItems) == null ? void 0 : g.items) != null && b.length)
        })
          , d = x(()=>s.blocks.listingLink(i.block, {
            defaultText: "View all research",
            defaultUrl: s.route({
                type: mt
            })
        }))
          , _ = x(()=>{
            var k;
            const v = ((k = i.block.relatedItems) == null ? void 0 : k.items) ?? c.value;
            return s.researchPublicationCardItems(v)
        }
        );
        return (v,k)=>{
            const I = oe;
            return e(_) || !e(u) && !e(l) ? (o(),
            r("div", Ud, [w(I, {
                blockLink: !0,
                title: t.block.content.title,
                link: e(d),
                items: e(_),
                theme: t.block.content.colorTheme
            }, null, 8, ["title", "link", "items", "theme"])])) : p("", !0)
        }
    }
}
  , Kd = {
    key: 0,
    class: "container"
}
  , Jd = {
    __name: "BlockListingSeries",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        var h, g, b;
        const i = t
          , {$api: n, $helpers: s} = V()
          , {data: c, pending: l, error: u} = he(`block-${(h = i.block) == null ? void 0 : h.id}`, ()=>n.blogSeriesLatest(), {
            immediate: !((b = (g = i.block.relatedItems) == null ? void 0 : g.items) != null && b.length)
        })
          , d = x(()=>s.blocks.listingLink(i.block, {
            defaultText: "View all series",
            defaultUrl: s.route({
                type: eo
            })
        }))
          , _ = x(()=>{
            var k;
            const v = ((k = i.block.relatedItems) == null ? void 0 : k.items) ?? c.value;
            return s.searchCardItems(v)
        }
        );
        return (v,k)=>{
            const I = oe;
            return e(_) || !e(u) && !e(l) ? (o(),
            r("div", Kd, [w(I, {
                blockLink: !0,
                items: e(_),
                itemsPerRow: 3,
                link: e(d),
                title: t.block.content.title,
                theme: t.block.content.colorTheme
            }, null, 8, ["items", "link", "title", "theme"])])) : p("", !0)
        }
    }
}
  , Yd = {
    key: 0,
    class: "container"
}
  , Xd = {
    key: 1,
    class: "mt-spacing-7"
}
  , Qd = {
    class: "container"
}
  , Zd = {
    class: "cols-container"
}
  , ep = {
    class: "w-6-cols md:w-4-cols lg:w-5-cols"
}
  , tp = {
    class: "f-heading-1-sans"
}
  , op = {
    key: 1,
    class: "w-6-cols mt-spacing-4 md:mt-0 md:w-4-cols lg:w-6-cols lg:ml-1-cols flex flex-col"
}
  , ip = {
    class: "cols-container"
}
  , np = ["role"]
  , rp = ["innerHTML"]
  , ap = {
    key: 0,
    class: "cols-container mt-spacing-5"
}
  , sp = {
    class: "w-6-cols md:w-8-cols lg:w-12-cols"
}
  , lp = {
    __name: "BlockListingBullets",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , {variant: s, border: c, title: l, type: u} = i.block.content
          , d = x(()=>n.blocks.listingLink(i.block))
          , _ = x(()=>{
            var g, b;
            return (b = (g = i.block.blocks) == null ? void 0 : g.default) == null ? void 0 : b.filter(v=>v.blockType === Gn).map(v=>({
                id: v.id,
                title: v.content.title,
                image: n.media.imageByRole(v, "listingBulletsItemImage", "default"),
                items: v.content.items
            }))
        }
        )
          , h = x(()=>{
            const g = _.value.length
              , b = ["w-6-cols"];
            return g === 2 ? b.push("md:w-4-cols lg:w-6-cols") : g === 3 ? b.push("md:w-4-cols lg:w-4-cols") : g === 4 && b.push("md:w-4-cols lg:w-3-cols"),
            b
        }
        );
        return (g,b)=>{
            const v = oe
              , k = X
              , I = _e;
            return e(s) === "default" ? (o(),
            r("div", Yd, [w(v, {
                title: e(l),
                link: e(d),
                listMarker: e(u),
                items: e(_),
                theme: t.block.content.colorTheme
            }, null, 8, ["title", "link", "listMarker", "items", "theme"])])) : (o(),
            r("div", Xd, [a("div", Qd, [a("div", Zd, [e(c) && e(c) !== "none" ? (o(),
            r("div", {
                key: 0,
                class: y(["bg-[currentColor] h-1 w-6-cols md:w-8-cols lg:w-12-cols mb-spacing-3", {
                    "opacity-20": e(c) === "secondary"
                }])
            }, null, 2)) : p("", !0), a("div", ep, [a("h2", tp, L(e(l)), 1)]), e(d) && Object.keys(e(d)).length && e(l) ? (o(),
            r("div", op, [w(k, {
                label: e(d).text,
                url: e(d).url,
                download: e(d).download,
                modifier: "underline",
                class: "md:ml-auto",
                inheritColor: ""
            }, null, 8, ["label", "url", "download"])])) : p("", !0)]), a("div", ip, [(o(!0),
            r(S, null, A(e(_), P=>(o(),
            r("div", {
                class: y([e(h), "f-body-1 mt-spacing-5 first:mt-0 md:mt-0 mb-spacing-4 md:mb-spacing-5 md:mb-0"]),
                key: P.id
            }, [(o(),
            T(Re(e(l) ? "h3" : "h2"), {
                class: "f-heading-4 mb-spacing-3"
            }, {
                default: Z(()=>[ne(L(P.title), 1)]),
                _: 2
            }, 1024)), a("ul", {
                role: P.items.length === 1 ? "presentation" : null
            }, [(o(!0),
            r(S, null, A(P.items, ($,C)=>(o(),
            r("li", {
                key: `${$.id}-feature-${C}`,
                class: "relative pl-[1em] md:pr-16 before:content-[''] before:h-1 before:w-full before:bg-[currentColor] before:left-0 before:top-0 before:opacity-20 first:before:opacity-0 before:absolute py-12"
            }, [w(I, {
                name: "Check400",
                size: "text",
                class: "f-body-1 absolute left-0 top-[14px] a-icon--no-align"
            }), a("div", {
                class: "ml-8 block",
                innerHTML: $
            }, null, 8, rp)]))), 128))], 8, np)], 2))), 128))]), e(d) && Object.keys(e(d)).length && !e(l) ? (o(),
            r("div", ap, [a("div", sp, [w(k, {
                label: e(d).text,
                url: e(d).url,
                download: e(d).download,
                modifier: "underline",
                inheritColor: ""
            }, null, 8, ["label", "url", "download"])])])) : p("", !0)])]))
        }
    }
}
  , cp = {
    key: 0,
    class: "mt-spacing-7"
}
  , up = {
    class: "container"
}
  , dp = {
    class: "pt-spacing-3 w-full border-t border-primary"
}
  , pp = {
    class: "cols-container"
}
  , mp = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , _p = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols"
}
  , hp = ["innerHTML"]
  , gp = {
    key: 0,
    class: "mt-spacing-7"
}
  , bp = {
    class: "container"
}
  , vp = ["aria-label"]
  , yp = {
    class: "pt-16 pb-24 md:py-16 lg:py-24 border-t border-secondary"
}
  , fp = {
    class: "cols-container"
}
  , kp = {
    class: "xs:w-6-cols md:w-6-cols lg:w-10-cols"
}
  , wp = {
    class: "f-body-1"
}
  , Tp = {
    class: "xs:w-6-cols md:w-2-cols lg:w-2-cols mt-spacing-4 md:mt-0 md:text-right"
}
  , xp = {
    __name: "BlockListingJobs",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        var g, b;
        const i = t
          , {$api: n, $helpers: s} = V()
          , c = x(()=>s.relatedItems.browser(i.block, "jobs"))
          , {data: l, pending: u, error: d} = he(`block-${(g = i.block) == null ? void 0 : g.id}`, ()=>n.greenhouseJobsLatest(), {
            immediate: !((b = c.value) != null && b.length)
        })
          , _ = x(()=>s.blocks.listingLink(i.block, {
            defaultText: "View all careers",
            defaultUrl: s.route({
                type: to
            })
        }))
          , h = x(()=>{
            var k;
            const v = (k = c.value) != null && k.length ? c.value : l.value;
            return v == null ? void 0 : v.map(I=>({
                title: I.title,
                subtitle: I.location,
                tag: I.departmentName,
                url: s.route(I),
                link: {
                    text: "Apply now",
                    url: I.url + "#app"
                }
            }))
        }
        );
        return (v,k)=>{
            const I = N
              , P = X
              , $ = Wt;
            return e(h) || !e(d) && !e(u) ? (o(),
            r("div", cp, [a("div", up, [a("div", dp, [a("div", pp, [a("div", mp, [t.block.content.title ? (o(),
            T(I, {
                key: 0,
                title: t.block.content.title,
                "heading-level": 2,
                class: "f-heading-1 md:pr-36 lg:pr-44"
            }, null, 8, ["title"])) : p("", !0)]), a("div", _p, [t.block.content.blurb || e(_) ? (o(),
            r(S, {
                key: 0
            }, [t.block.content.blurb ? (o(),
            r("div", {
                key: 0,
                class: "f-subhead-1 xs:mt-16 md:mt-0",
                innerHTML: t.block.content.blurb
            }, null, 8, hp)) : p("", !0), e(_) ? (o(),
            r("div", {
                key: 1,
                class: y(`block ${t.block.content.blurb ? "mt-spacing-4" : "xs:mt-24 md:mt-4 md:ml-auto lg:mt-8"}`)
            }, [w(P, {
                label: e(_).text,
                url: e(_).url,
                modifier: "underline"
            }, null, 8, ["label", "url"])], 2)) : p("", !0)], 64)) : p("", !0)])])])]), e(h) || !e(d) && !e(u) ? (o(),
            r("div", gp, [a("div", bp, [a("ul", {
                "aria-label": t.block.content.title
            }, [(o(!0),
            r(S, null, A(e(h), C=>(o(),
            r("li", yp, [a("div", fp, [a("div", kp, [w($, {
                to: C.url,
                class: "ui-link relative group inline-block"
            }, {
                default: Z(()=>[C.title ? (o(),
                T(I, {
                    key: 0,
                    class: "f-subhead-2 group-hover:underline underline-transparent underline-thickness-1 underline-offset-2 group-hover:underline-text-primary",
                    title: C.title,
                    "heading-level": 3
                }, null, 8, ["title"])) : p("", !0), a("span", wp, [C.subtitle ? (o(),
                r(S, {
                    key: 0
                }, [ne(L(C.subtitle), 1)], 64)) : p("", !0), C.tag ? (o(),
                r(S, {
                    key: 1
                }, [ne(" — " + L(C.tag), 1)], 64)) : p("", !0)])]),
                _: 2
            }, 1032, ["to"])]), a("div", Tp, [C.link ? (o(),
            T(P, {
                key: 0,
                label: C.link.text,
                modifier: "underline",
                url: C.link.url
            }, null, 8, ["label", "url"])) : p("", !0)])])]))), 256))], 8, vp)])])) : p("", !0)])) : p("", !0)
        }
    }
}
  , Ep = {
    key: 0,
    class: "container"
}
  , Sp = {
    __name: "BlockListingCard",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            var u, d;
            return ((d = (u = i.block.blocks) == null ? void 0 : u.default) == null ? void 0 : d.filter(_=>_.blockType === $n)).map(_=>{
                const {item_date: h, item_link_download: g, item_blurb: b, item_link_type: v, item_link_url: k, item_title: I} = _.content
                  , P = {
                    url: k
                };
                if (v === "internal") {
                    const $ = n.relatedItems.firstBrowserItem(_, "item");
                    v === "internal" && $ && (P.url = n.route($))
                }
                return {
                    title: I,
                    content: b,
                    url: P.url,
                    meta: {
                        date: h
                    }
                }
            }
            )
        }
        )
          , c = x(()=>n.blocks.listingLink(i.block));
        return (l,u)=>{
            const d = oe;
            return e(s) ? (o(),
            r("div", Ep, [w(d, {
                title: t.block.content.title,
                link: e(c),
                items: e(s),
                itemType: "Card",
                theme: t.block.content.colorTheme,
                appearance: t.block.content.appearance
            }, null, 8, ["title", "link", "items", "theme", "appearance"])])) : p("", !0)
        }
    }
}
  , Ip = {
    key: 0,
    class: "container"
}
  , Lp = {
    __name: "BlockListingLatest",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$api: n, $helpers: s} = V()
          , c = i.block.content.topicSlug ? [i.block.content.topicSlug] : []
          , {data: l, pending: u, error: d} = he(`block-${i.block.id}`, ()=>n.blogDetailsLatest({
            topics: c
        }), {
            server: !1
        })
          , _ = x(()=>s.searchCardItems(l.value))
          , h = x(()=>s.blocks.listingLink(i.block, {
            defaultText: "View all updates",
            defaultUrl: s.route({
                type: oo
            })
        }));
        return (g,b)=>{
            const v = oe;
            return !e(d) && !e(u) ? (o(),
            r("div", Ip, [w(v, {
                blockLink: !0,
                title: t.block.content.title,
                link: e(h),
                items: e(_),
                theme: t.block.content.colorTheme
            }, null, 8, ["title", "link", "items", "theme"])])) : p("", !0)
        }
    }
}
  , Pp = {
    key: 0,
    class: "container"
}
  , $p = {
    __name: "BlockListingLatestPublications",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$api: n, $helpers: s} = V()
          , {data: c, error: l, pending: u} = he(`block-${i.block.id}`, ()=>n.researchPublicationsByTopics({
            topics: i.block.content.topicSlug ? [i.block.content.topicSlug] : []
        }), {
            server: !1
        })
          , d = x(()=>s.blocks.listingLink(i.block, {
            defaultText: "View all research",
            defaultUrl: s.route({
                type: mt
            })
        }))
          , _ = x(()=>s.researchPublicationCardItems(c.value));
        return (h,g)=>{
            const b = oe;
            return !e(l) && !e(u) ? (o(),
            r("div", Pp, [w(b, {
                blockLink: !0,
                title: t.block.content.title,
                link: e(d),
                items: e(_),
                theme: t.block.content.colorTheme
            }, null, 8, ["title", "link", "items", "theme"])])) : p("", !0)
        }
    }
}
  , Ap = {
    class: "container"
}
  , Op = {
    __name: "BlockListingMixed",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        var u;
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            var _;
            const d = (_ = i.block.blocks.default) == null ? void 0 : _.filter(h=>h.blockType === Vn);
            return d == null ? void 0 : d.map(h=>n.blocks.listingMixedItem(h))
        }
        )
          , c = x(()=>n.blocks.listingLink(i.block))
          , {border: l} = (u = i.block) == null ? void 0 : u.content;
        return (d,_)=>{
            const h = oe;
            return o(),
            r("div", Ap, [e(l) && e(l) !== "none" ? (o(),
            r("div", {
                key: 0,
                class: y(["bg-[currentColor] h-1 w-full mb-spacing-6", {
                    "opacity-20": e(l) === "secondary"
                }])
            }, null, 2)) : p("", !0), w(h, {
                blockLink: e(s).length && e(s).some(g=>g.link.url),
                title: t.block.content.title,
                link: e(c),
                items: e(s),
                theme: t.block.content.colorTheme,
                variant: t.block.content.variant
            }, null, 8, ["blockLink", "title", "link", "items", "theme", "variant"])])
        }
    }
}
  , Dp = {
    class: "mt-spacing-7"
}
  , Cp = {
    class: "container"
}
  , Rp = {
    key: 1,
    class: "cols-container"
}
  , Vp = ["innerHTML"]
  , qp = ["aria-hidden"]
  , Mp = ["alt", "src"]
  , Bp = {
    key: 2,
    class: "mt-spacing-5 f-caption-1"
}
  , jp = ["innerHTML"]
  , Gp = {
    __name: "BlockLogoCarousel",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        var g;
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>n.blocks.listingLink(i.block))
          , {border: c, size: l, font: u, body: d, footnote: _} = (g = i.block) == null ? void 0 : g.content
          , h = x(()=>{
            const b = n.media.imagesByRole(i.block, "carousel_logos", "default");
            return b && b.map(({src: v, alt: k})=>({
                src: v,
                alt: k
            }))
        }
        );
        return (b,v)=>{
            const k = X;
            return o(),
            r("div", Dp, [a("div", Cp, [e(c) && e(c) !== "none" ? (o(),
            r("div", {
                key: 0,
                class: y(["bg-[currentColor] h-1 w-full mb-spacing-3", {
                    "opacity-20": e(c) === "secondary"
                }])
            }, null, 2)) : p("", !0), e(d) || e(s) ? (o(),
            r("div", Rp, [e(d) ? (o(),
            r("div", {
                key: 0,
                class: y(["xs:w-6-cols md:w-4-cols lg:w-6-cols", {
                    "font-sans": e(u) === "sans",
                    "f-body-2": e(u) === "serif",
                    "f-ui-1": e(l) === "default" && e(u) === "sans",
                    "f-subhead-1 text-balance": e(l) === "large"
                }])
            }, [a("div", {
                innerHTML: e(d)
            }, null, 8, Vp)], 2)) : p("", !0), e(s) && Object.keys(e(s)).length ? (o(),
            r("div", {
                key: 1,
                class: y(["xs:w-6-cols md:w-4-cols lg:w-6-cols flex flex-col", {
                    "lg:ml-6-cols": !e(d),
                    "mt-spacing-4 md:mt-0": e(d)
                }])
            }, [w(k, {
                label: e(s).text,
                url: e(s).url,
                download: e(s).download,
                modifier: "underline",
                class: "md:ml-auto",
                inheritColor: ""
            }, null, 8, ["label", "url", "download"])], 2)) : p("", !0)])) : p("", !0), a("div", {
                class: y(["overflow-hidden -ml-[var(--outer-gutter)] xl:ml-0 w-[calc(100%+(var(--outer-gutter)*2))] relative", {
                    "mt-spacing-5": e(d) || e(s)
                }]),
                style: se({
                    "mask-image": "linear-gradient(to right, transparent, white var(--outer-gutter), white calc(100% - var(--outer-gutter)), transparent)",
                    "-webkit-mask-image": "linear-gradient(to right, transparent, white var(--outer-gutter), white calc(100% - var(--outer-gutter)), transparent)"
                })
            }, [a("div", {
                class: "min-w-max flex animate-marquee",
                style: se({
                    "animation-duration": `${e(h).length * 3}s`
                })
            }, [(o(),
            r(S, null, A(2, I=>a("div", {
                class: "flex justify-between",
                key: I,
                "aria-hidden": I === 2
            }, [(o(!0),
            r(S, null, A(e(h), (P,$)=>(o(),
            r("img", {
                class: "h-[80px] md:h-[100px] w-auto flex-1 relative",
                key: $,
                alt: P.alt,
                src: P.src
            }, null, 8, Mp))), 128))], 8, qp)), 64))], 4)], 6), e(_) ? (o(),
            r("div", Bp, [a("div", {
                class: "inline",
                innerHTML: e(_)
            }, null, 8, jp)])) : p("", !0)])])
        }
    }
}
  , Fp = ["row", "grid"]
  , Np = {
    props: {
        animationDelay: {
            type: Number,
            default: 5e3
        },
        items: {
            type: Array,
            default() {
                return []
            }
        },
        layout: {
            type: String,
            default: "row",
            validator: t=>Fp.includes(t)
        },
        listTitle: {
            type: String
        }
    },
    data() {
        return {
            isMobile: null,
            dynamic: !1,
            imageIndex: 0,
            nextIndex: 0,
            visibilityStates: [],
            imageStates: []
        }
    },
    computed: {
        numVisibleItems() {
            return this.layout === "row" ? this.isMobile ? 2 : 4 : this.isMobile ? 4 : 8
        }
    },
    mounted() {
        this.isMobile = window.innerWidth < 744,
        this.initializeState(),
        this.dynamic = !0,
        this.resizeObserver = new ResizeObserver(t=>{
            requestAnimationFrame(()=>{
                this.isMobile = t[0].contentRect.width < 744
            }
            )
        }
        ),
        this.$nextTick(()=>{
            this.resizeObserver.observe(this.$refs.root)
        }
        ),
        this.interval = setInterval(()=>{
            this.swapLogo()
        }
        , this.animationDelay),
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    },
    beforeDestroy() {
        var t;
        clearInterval(this.interval),
        (t = this.resizeObserver) == null || t.disconnect(),
        document.removeEventListener("visibilitychange", this.handleVisibilityChange)
    },
    watch: {
        numVisibleItems() {
            this.initializeState()
        }
    },
    methods: {
        initializeState() {
            this.nextIndex = 0,
            this.imageIndex = this.numVisibleItems,
            this.visibilityStates = Array(this.numVisibleItems).fill(0),
            this.imageStates = Array(this.numVisibleItems).fill([]).map((t,i)=>[this.items[i], this.items[(i + this.numVisibleItems) % this.items.length]])
        },
        handleVisibilityChange() {
            clearInterval(this.interval),
            document.visibilityState === "visible" && (this.interval = setInterval(()=>{
                this.swapLogo()
            }
            , this.animationDelay))
        },
        swapLogo() {
            const t = this.nextIndex
              , i = (this.nextIndex + 1) % this.numVisibleItems
              , n = (this.imageIndex + 1) % this.items.length
              , s = this.items[n];
            this.visibilityStates[i] === 1 ? this.imageStates[i][0] = s : this.imageStates[i][1] = s,
            this.visibilityStates[t] = this.visibilityStates[t] === 0 ? 1 : 0,
            this.nextIndex = i,
            this.imageIndex = n
        }
    }
}
  , Hp = ["aria-label"]
  , zp = {
    class: "ratio ratio-1x1"
}
  , Up = {
    class: "ratio-content flex items-center justify-center"
}
  , Wp = ["aria-label"]
  , Kp = {
    class: "ratio ratio-1x1 relative"
}
  , Jp = ["aria-hidden"];
function Yp(t, i, n, s, c, l) {
    const u = ee;
    return o(),
    r("div", null, [c.dynamic ? (o(),
    r("ul", {
        key: 1,
        class: "ui-logos grid border border-secondary grid-cols-2 md:grid-cols-4",
        ref: "root",
        "aria-label": n.listTitle || "Clients"
    }, [(o(!0),
    r(S, null, A(l.numVisibleItems, (d,_)=>(o(),
    r("li", {
        class: y([{
            "border-b border-secondary": n.layout === "grid" && _ < 2
        }, {
            "md:border-b md:border-secondary": n.layout === "grid" && _ > 1 && _ < 4
        }])
    }, [a("div", Kp, [(o(),
    r(S, null, A(2, h=>a("div", {
        class: y(["ratio-content flex items-center justify-center transition-opacity duration-500 absolute top-0 left-0 w-full", {
            "opacity-0": c.visibilityStates[_] === (h === 1 ? 1 : 0)
        }]),
        "aria-hidden": c.visibilityStates[_] === (h === 1 ? 1 : 0)
    }, [w(u, {
        image: c.imageStates[_][h - 1],
        class: "h-8/12 w-8/12 sm:h-7/12 sm:w-7/12 object-contain"
    }, null, 8, ["image"])], 10, Jp)), 64))])], 2))), 256))], 8, Wp)) : (o(),
    r("ul", {
        key: 0,
        "aria-label": n.listTitle || "Clients",
        class: "ui-logos grid border border-secondary grid-cols-2 md:grid-cols-4"
    }, [(o(!0),
    r(S, null, A(n.items.slice(0, n.layout === "row" ? 2 : 4), (d,_)=>(o(),
    r("li", {
        key: _,
        class: y([{
            "border-b border-secondary md:border-b-0": n.layout === "grid" && _ < 2
        }])
    }, [a("div", zp, [a("div", Up, [w(u, {
        image: d,
        class: "h-8/12 w-8/12 sm:h-7/12 sm:w-7/12 object-contain"
    }, null, 8, ["image"])])])], 2))), 128))], 8, Hp))])
}
const Xp = le(Np, [["render", Yp]])
  , Qp = {
    class: "mt-spacing-7"
}
  , Zp = {
    __name: "BlockLogoSuite",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            const c = n.media.imagesByRole(i.block, "logos", "default");
            return c && c.map(({src: l, alt: u})=>({
                src: l,
                alt: u,
                ratio: "1x1"
            }))
        }
        );
        return (c,l)=>{
            const u = It
              , d = Xp;
            return o(),
            r("div", Qp, [t.block.content.showTitle ? (o(),
            T(u, {
                key: 0,
                block: {
                    content: {
                        title: t.block.content.title
                    }
                }
            }, null, 8, ["block"])) : p("", !0), a("div", {
                class: y(["container", {
                    "mt-spacing-6": t.block.content.showTitle
                }])
            }, [w(d, {
                items: e(s),
                "list-title": t.block.content.title,
                layout: t.block.content.display
            }, null, 8, ["items", "list-title", "layout"])], 2)])
        }
    }
}
  , em = {
    class: "container"
}
  , tm = {
    class: "cols-container"
}
  , om = {
    class: y(["md:w-6-cols lg:ml-2-cols lg:w-6-cols relative"])
}
  , im = ["innerHTML"]
  , nm = {
    __name: "BlockMath",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    async setup(t) {
        var d;
        let i, n;
        const s = t
          , l = ([i,n] = pt(()=>m(()=>import("./entry.d1b74521.js").then(_=>_.av), ["./entry.d1b74521.js", "./entry.08e0417e.css"], import.meta.url)),
        i = await i,
        n(),
        i).default;
        let u;
        try {
            u = l.renderToString((d = s.block.content) == null ? void 0 : d.math)
        } catch (_) {
            _ instanceof l.ParseError ? u = ("Error in LaTeX '" + s.block.content.math + "': " + _.message).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : console.error(_)
        }
        return (_,h)=>(o(),
        r("div", {
            class: y(e(de)(t.blocks, t.block))
        }, [a("div", em, [a("div", tm, [a("div", om, [e(u) ? (o(),
        r("div", {
            key: 0,
            innerHTML: e(u)
        }, null, 8, im)) : p("", !0)])])])], 2))
    }
}
  , rm = {
    class: "mt-spacing-7"
}
  , am = {
    class: "container"
}
  , sm = {
    key: 0,
    class: "cols-container"
}
  , lm = {
    __name: "BlockPreFooter",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            var c, l;
            return (l = (c = i.block.blocks) == null ? void 0 : c.default) == null ? void 0 : l.filter(u=>u.childKey === "pre-footer-link").sort((u,d)=>u.position - d.position).map(u=>n.blocks.featureLink(u))
        }
        );
        return (c,l)=>{
            const u = De;
            return o(),
            r("div", rm, [a("div", am, [e(s) ? (o(),
            r("div", sm, [(o(!0),
            r(S, null, A(e(s), (d,_)=>(o(),
            r("div", {
                key: _,
                class: y([{
                    "xs:mt-16 md:mt-0": _ === 1
                }, {
                    "xs:w-6-cols md:w-4-cols lg:w-6-cols": e(s).length > 1
                }, {
                    "xs:w-12-cols": e(s).length === 1
                }])
            }, [w(u, {
                label: d.text,
                url: d.url,
                modifier: "outline",
                size: "large"
            }, null, 8, ["label", "url"])], 2))), 128))])) : p("", !0)])])
        }
    }
}
  , cm = {
    class: "mt-spacing-7"
}
  , um = {
    class: "container"
}
  , dm = {
    class: "cols-container"
}
  , pm = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , mm = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols"
}
  , _m = {
    class: y("pt-spacing-3 w-full border-t border-secondary")
}
  , hm = {
    class: "cols-container"
}
  , gm = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , bm = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols mt-spacing-3 md:mt-0"
}
  , vm = ["innerHTML"]
  , ym = {
    class: "container"
}
  , fm = {
    __name: "BlockPricing",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>{
            var u, d;
            return (d = (u = i.block.blocks) == null ? void 0 : u.default) == null ? void 0 : d.filter(_=>_.blockType === Xn).map(_=>({
                title: _.content.title,
                subtitle: _.content.subtitle,
                content: _.content.price,
                contentSecondary: ` / ${_.content.unit}`,
                staticCard: !0,
                ratio: null
            }))
        }
        )
          , c = x(()=>n.blocks.listingLink(i.block, {
            namePrefix: "content"
        }))
          , l = x(()=>n.blocks.listingLink(i.block));
        return (u,d)=>{
            const _ = N
              , h = X
              , g = oe;
            return o(),
            r("div", cm, [a("div", um, [a("div", {
                class: y(["w-full", {
                    "pt-spacing-3 border-t border-primary": t.block.content.title
                }])
            }, [a("div", dm, [a("div", pm, [t.block.content.title ? (o(),
            T(_, {
                key: 0,
                title: t.block.content.title,
                "heading-level": 2,
                class: "f-heading-1"
            }, null, 8, ["title"])) : p("", !0)]), a("div", mm, [e(l) ? (o(),
            r(S, {
                key: 0
            }, [e(l) ? (o(),
            T(h, {
                key: 0,
                label: e(l).text,
                url: e(l).url,
                modifier: "underline",
                class: y("xs:mt-24 md:mt-4 md:ml-auto lg:mt-8")
            }, null, 8, ["label", "url"])) : p("", !0)], 64)) : p("", !0)])])], 2), t.block.content.contentTitle || t.block.content.contentDescription || e(c) ? (o(),
            r("div", {
                key: 0,
                class: y({
                    "mt-spacing-7": t.block.content.title
                })
            }, [a("div", _m, [a("div", hm, [a("div", gm, [t.block.content.contentTitle ? (o(),
            T(_, {
                key: 0,
                title: t.block.content.contentTitle,
                "heading-level": 3,
                class: "f-heading-3"
            }, null, 8, ["title"])) : p("", !0)]), a("div", bm, [t.block.content.contentDescription || e(c) ? (o(),
            r(S, {
                key: 0
            }, [t.block.content.contentDescription ? (o(),
            r("div", {
                key: 0,
                class: "f-body-1",
                innerHTML: t.block.content.contentDescription
            }, null, 8, vm)) : p("", !0), e(c) ? (o(),
            r("div", {
                key: 1,
                class: y(`block ${t.block.content.contentDescription ? "mt-spacing-4" : "xs:mt-24 md:mt-4 md:ml-auto lg:mt-8"}`)
            }, [w(h, {
                label: e(c).text,
                url: e(c).url,
                modifier: "underline"
            }, null, 8, ["label", "url"])], 2)) : p("", !0)], 64)) : p("", !0)])])])], 2)) : p("", !0)]), a("div", ym, [w(g, {
                items: e(s),
                itemType: "Card",
                staticCard: !0,
                theme: t.block.content.colorTheme
            }, null, 8, ["items", "theme"])])])
        }
    }
}
  , km = {
    class: "mt-spacing-7"
}
  , wm = {
    class: "container grid-layout pt-spacing-3 border-t border-inherit"
}
  , Tm = {
    class: "col-span-full md:col-span-2 lg:col-span-4 w-full"
}
  , xm = {
    class: "container mt-spacing-6 grid grid-flow-row md:grid-flow-col md:auto-cols-fr gap-24"
}
  , Em = {
    class: "border border-inherit rounded-[0.2em] p-20"
}
  , Sm = {
    key: 0,
    class: "mt-8"
}
  , Im = {
    class: "f-heading-4"
}
  , Lm = {
    key: 0,
    class: "f-body-1"
}
  , Pm = {
    key: 2
}
  , $m = {
    class: "f-body-1 mt-spacing-4"
}
  , Am = ["role", "aria-labelledby"]
  , Om = {
    class: "ml-8 block ui-richtext"
}
  , Dm = {
    key: 0,
    class: "container mt-spacing-5"
}
  , Cm = {
    __name: "BlockPricingPlanComparison",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>{
            var s, c;
            return (c = (s = i.block.blocks) == null ? void 0 : s.default) == null ? void 0 : c.filter(l=>l.blockType === Yn).map(l=>({
                id: l.id,
                title: l.content.plan_title,
                price: l.content.plan_price,
                frequency: l.content.plan_frequency,
                features: l.content.plan_features,
                linkLabel: l.content.linkLabel,
                linkUrl: l.content.linkUrl
            }))
        }
        );
        return (s,c)=>{
            const l = N
              , u = X
              , d = _e;
            return o(),
            r("div", km, [a("div", wm, [a("div", Tm, [w(l, {
                headingLevel: 2,
                class: "f-heading-1-sans",
                title: t.block.content.title
            }, null, 8, ["title"])])]), a("div", xm, [(o(!0),
            r(S, null, A(e(n), _=>(o(),
            r("div", Em, [w(l, {
                headingLevel: 3,
                title: _.title,
                class: "f-heading-1"
            }, null, 8, ["title"]), _.price ? (o(),
            r("div", Sm, [a("span", Im, L(_.price), 1), _.frequency ? (o(),
            r("span", Lm, " " + L(_.frequency), 1)) : p("", !0)])) : p("", !0), _.linkLabel && _.linkUrl ? (o(),
            T(u, {
                key: 1,
                class: "mt-16",
                url: _.linkUrl,
                label: _.linkLabel,
                modifier: "outline",
                inheritColor: ""
            }, null, 8, ["url", "label"])) : p("", !0), _.features ? (o(),
            r("div", Pm, [w(l, {
                id: `${_.id}-features`,
                level: 4,
                title: `${_.title} plan features`,
                class: "sr-only"
            }, null, 8, ["id", "title"]), a("div", $m, [a("ul", {
                role: _.features.length === 1 ? "presentation" : null,
                "aria-labelledby": `${_.id}-features`
            }, [(o(!0),
            r(S, null, A(_.features, (h,g)=>(o(),
            r("li", {
                key: `${_.id}-feature-${g}`,
                class: "relative pl-[1em] md:pr-16 before:content-[''] before:h-1 before:w-full before:bg-[currentColor] before:left-0 before:top-0 before:opacity-20 first:before:opacity-100 before:absolute py-12"
            }, [w(d, {
                name: "Check400",
                size: "text",
                class: "f-body-1 absolute left-0 top-[14px] a-icon--no-align"
            }), a("span", Om, L(h), 1)]))), 128))], 8, Am)])])) : p("", !0)]))), 256))]), i.block.content.contentLinkLabel && i.block.content.contentLinkUrl ? (o(),
            r("div", Dm, [w(u, {
                url: i.block.content.contentLinkUrl,
                label: i.block.content.contentLinkLabel,
                modifier: "underline",
                "inherit-color": !0
            }, null, 8, ["url", "label"])])) : p("", !0)])
        }
    }
}
  , Rm = {
    class: "mt-spacing-7"
}
  , Vm = {
    class: "container"
}
  , qm = {
    class: "pt-spacing-3 w-full border-t border-secondary"
}
  , Mm = {
    class: "cols-container"
}
  , Bm = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , jm = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols mt-spacing-3 md:mt-0"
}
  , Gm = {
    key: 0,
    class: "f-body-1 ui-richtext"
}
  , Fm = {
    key: 0,
    class: "xs:mt-40 md:mt-48 lg:mt-60"
}
  , Nm = {
    class: "cols-container justify-end"
}
  , Hm = {
    class: "xs:w-full md:w-8-cols lg:w-6-cols"
}
  , zm = {
    class: "overflow-hidden"
}
  , Um = {
    class: "w-full border-t border-t-primary xs:hidden md:table md:w-[calc(100%+var(--inner-gutter))]"
}
  , Wm = {
    key: 0,
    class: "border-b border-secondary"
}
  , Km = {
    key: 0,
    class: "f-heading-5"
}
  , Jm = {
    key: 1,
    class: "f-heading-5 text-secondary"
}
  , Ym = {
    key: 1,
    class: "border-b border-secondary"
}
  , Xm = {
    class: y(["pt-8 pb-8"])
}
  , Qm = {
    key: 0,
    class: "f-body-1"
}
  , Zm = {
    key: 1,
    class: "f-body-1 text-secondary"
}
  , e_ = {
    class: "xs:block md:hidden"
}
  , t_ = {
    key: 0,
    class: "cols-container pb-24"
}
  , o_ = {
    key: 0,
    class: "w-1/2-cols"
}
  , i_ = {
    key: 0,
    class: "f-heading-5 block"
}
  , n_ = {
    class: "mt-8 block"
}
  , r_ = {
    key: 0,
    class: "f-body-1"
}
  , a_ = {
    key: 1,
    class: "f-body-1 text-secondary"
}
  , s_ = ["innerHTML"]
  , l_ = {
    key: 1,
    class: "mt-40 md:mt-48 lg:mt-60"
}
  , c_ = {
    __name: "BlockPricingTable",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>{
            var _, h;
            return ((h = (_ = i.block.relatedItems) == null ? void 0 : _.snippet) == null ? void 0 : h[0]) ?? null
        }
        )
          , s = x(()=>{
            var _, h;
            return ((h = (_ = i.block.media) == null ? void 0 : _.images) == null ? void 0 : h.map(g=>g.default)) ?? []
        }
        )
          , c = x(()=>i.block.content.data)
          , {$helpers: l} = V()
          , u = x(()=>{
            var _, h;
            return (h = (_ = i.block.blocks) == null ? void 0 : _.default) == null ? void 0 : h.filter(g=>g.blockType === Zn).map(g=>g.content)
        }
        )
          , d = x(()=>l.blocks.listingLink(i.block));
        return (_,h)=>{
            var P;
            const g = N
              , b = me
              , v = X
              , k = Te
              , I = ge;
            return o(),
            r("div", Rm, [a("div", Vm, [a("div", qm, [a("div", Mm, [a("div", Bm, [t.block.content.title ? (o(),
            T(g, {
                key: 0,
                title: t.block.content.title,
                "heading-level": 3,
                class: "f-heading-3"
            }, null, 8, ["title"])) : p("", !0)]), a("div", jm, [t.block.content.description || e(d) ? (o(),
            r(S, {
                key: 0
            }, [t.block.content.description ? (o(),
            r("div", Gm, [w(b, {
                content: t.block.content.description
            }, null, 8, ["content"])])) : p("", !0), e(d) ? (o(),
            r("div", {
                key: 1,
                class: y(`block ${t.block.content.description ? "mt-spacing-4" : "xs:mt-24 md:mt-4 md:ml-auto lg:mt-8"}`)
            }, [w(v, {
                label: e(d).text,
                url: e(d).url,
                modifier: "underline"
            }, null, 8, ["label", "url"])], 2)) : p("", !0)], 64)) : p("", !0)])])]), e(u) ? (o(),
            r("div", Fm, [a("div", Nm, [a("div", Hm, [a("div", zm, [a("table", Um, [a("tbody", null, [(o(!0),
            r(S, null, A(e(u), $=>(o(),
            r(S, null, [$.type === "heading" ? (o(),
            r("tr", Wm, [(o(!0),
            r(S, null, A($.columns, (C,q)=>(o(),
            r("td", {
                class: y(["pt-8 pb-8", {
                    "xs:w-auto md:w-1/2 lg:w-1/3": $.columns.length <= 3 && q === 0
                }])
            }, [C.primary ? (o(),
            r("span", Km, L(C.primary), 1)) : p("", !0), C.secondary ? (o(),
            r("span", Jm, " " + L(C.secondary), 1)) : p("", !0)], 2))), 256))])) : (o(),
            r("tr", Ym, [(o(!0),
            r(S, null, A($.columns, C=>(o(),
            r("td", Xm, [C.primary ? (o(),
            r("span", Qm, L(C.primary), 1)) : p("", !0), C.secondary ? (o(),
            r("span", Zm, " " + L(C.secondary), 1)) : p("", !0)]))), 256))]))], 64))), 256))])])]), a("div", e_, [(o(!0),
            r(S, null, A(e(u), ($,C)=>(o(),
            r(S, null, [$.type !== "heading" ? (o(),
            T(k, {
                key: 0,
                "class-override": "w-full border-t border-secondary text-primary",
                title: $.columns.length ? $.columns[0].primary : null,
                index: C,
                "items-count": e(u).length
            }, {
                default: Z(()=>[$.columns.length ? (o(),
                r("div", t_, [(o(!0),
                r(S, null, A($.columns, (q,E)=>(o(),
                r(S, null, [E !== 0 ? (o(),
                r("div", o_, [e(u).some(F=>F.type === "heading") ? (o(),
                r(S, {
                    key: 0
                }, [e(u).filter(F=>F.type === "heading")[0].columns.length && e(u).filter(F=>F.type === "heading")[0].columns[E] && e(u).filter(F=>F.type === "heading")[0].columns[E].primary ? (o(),
                r("span", i_, L(e(u).filter(F=>F.type === "heading")[0].columns[E].primary), 1)) : p("", !0)], 64)) : p("", !0), a("div", n_, [q.primary ? (o(),
                r("span", r_, L(q.primary), 1)) : p("", !0), q.secondary ? (o(),
                r("span", a_, " " + L(q.secondary), 1)) : p("", !0)])])) : p("", !0)], 64))), 256))])) : p("", !0)]),
                _: 2
            }, 1032, ["title", "index", "items-count"])) : p("", !0)], 64))), 256))]), (P = i.block.content) != null && P.caption ? (o(),
            r("div", {
                key: 0,
                innerHTML: i.block.content.caption,
                class: "f-caption-1 mt-spacing-3 ui-richtext"
            }, null, 8, s_)) : p("", !0), e(n) ? (o(),
            r("div", l_, [w(I, {
                resource: e(n),
                images: e(s),
                data: e(c)
            }, null, 8, ["resource", "images", "data"])])) : p("", !0)])])])) : p("", !0)])])
        }
    }
}
  , u_ = {
    class: "mt-spacing-7"
}
  , d_ = {
    class: "container"
}
  , p_ = {
    class: "cols-container"
}
  , m_ = {
    class: "f-body-1 md:w-6-cols lg:ml-2-cols lg:w-10-cols"
}
  , __ = {
    key: 0,
    class: "f-quote-1"
}
  , h_ = {
    key: 1,
    class: "f-subhead-2 mt-spacing-4"
}
  , g_ = {
    __name: "BlockQuote",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        return (i,n)=>(o(),
        r("div", u_, [a("div", d_, [a("div", p_, [a("div", m_, [a("figure", null, [t.block.content.quote ? (o(),
        r("blockquote", __, [a("p", {
            class: y(["relative before:absolute before:left-0 before:-translate-x-full", {
                "before:content-['“'] after:content-['”']": t.block.content.attribution
            }])
        }, [a("span", null, L(t.block.content.quote), 1)], 2)])) : p("", !0), t.block.content.attribution ? (o(),
        r("figcaption", h_, L(t.block.content.attribution), 1)) : p("", !0)])])])])]))
    }
}
  , b_ = {
    class: "container"
}
  , v_ = {
    __name: "BlockSeriesIndex",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const {$api: i, $helpers: n} = V()
          , s = io()
          , c = ao()
          , {data: l, pending: u, page: d, currentPage: _, setCurrentPage: h} = c({
            fetchCallback: i.blogDetailsByBlogSeriesSlug,
            fetchCallbackOptions: {
                slug: s.params.slug
            },
            sorts: [{
                label: "Date: newest",
                value: "-publicationDate,-createdAt",
                query: "newest"
            }, {
                label: "Date: oldest",
                value: "publicationDate,createdAt",
                query: "oldest"
            }]
        })
          , g = x(()=>{
            var b;
            return ((b = l == null ? void 0 : l.value) == null ? void 0 : b.resources) && n.cards(l.value.resources)
        }
        );
        return (b,v)=>{
            const k = oe
              , I = so;
            return o(),
            r("div", b_, [w(k, {
                items: e(g),
                blockLink: !0,
                theme: t.block.content.colorTheme,
                pending: e(u)
            }, null, 8, ["items", "theme", "pending"]), e(d) && e(d).total ? (o(),
            T(I, {
                key: 0,
                "total-results": e(d).total,
                "current-page": e(_),
                "from-value": e(d).from,
                pages: e(d).lastPage,
                "size-value": e(d).perPage,
                onPageChange: e(h)
            }, null, 8, ["total-results", "current-page", "from-value", "pages", "size-value", "onPageChange"])) : p("", !0)])
        }
    }
}
  , y_ = {
    class: "mt-spacing-7"
}
  , f_ = {
    class: "container"
}
  , k_ = {
    class: "w-full"
}
  , w_ = a("div", {
    class: "bg-[currentColor] h-1 w-full mb-spacing-3"
}, null, -1)
  , T_ = ["innerHTML"]
  , x_ = {
    key: 1,
    class: "mt-spacing-5"
}
  , E_ = {
    key: 2,
    class: "mt-spacing-7 f-caption-1"
}
  , S_ = ["innerHTML"]
  , I_ = {
    __name: "BlockStatement",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , {quote: s, footnote: c} = i.block.content
          , l = x(()=>n.blocks.listingLink(i.block));
        return (u,d)=>{
            const _ = X;
            return o(),
            r("div", y_, [a("div", f_, [a("div", k_, [w_, e(s) ? (o(),
            r("div", {
                key: 0,
                class: "f-display-3",
                innerHTML: e(s)
            }, null, 8, T_)) : p("", !0), e(l) ? (o(),
            r("div", x_, [w(_, {
                label: e(l).text,
                url: e(l).url,
                modifier: "underline"
            }, null, 8, ["label", "url"])])) : p("", !0), e(c) ? (o(),
            r("div", E_, [a("div", {
                class: "inline",
                innerHTML: e(c)
            }, null, 8, S_)])) : p("", !0)])])])
        }
    }
}
  , L_ = {
    class: "mt-spacing-7"
}
  , P_ = {
    class: "container"
}
  , $_ = {
    class: "pt-spacing-3 w-full"
}
  , A_ = a("div", {
    class: "bg-[currentColor] h-1 w-6-cols md:w-8-cols lg:w-12-cols mb-spacing-3"
}, null, -1)
  , O_ = {
    class: "cols-container"
}
  , D_ = {
    class: "xs:w-6-cols md:w-4-cols lg:w-5-cols text-balance"
}
  , C_ = {
    class: "cols-container"
}
  , R_ = {
    key: 0,
    class: "f-display-2 md:w-4-cols lg:w-full"
}
  , V_ = {
    key: 1,
    class: "mt-8 md:mt-0 lg:mt-8 f-body-1 md:w-4-cols lg:w-full md:ml-gutter lg:ml-0"
}
  , q_ = {
    key: 0,
    class: "cols-container mt-spacing-7"
}
  , M_ = ["innerHTML"]
  , B_ = {
    __name: "BlockStatistics",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {title: n, footnote: s, variant: c} = i.block.content
          , l = x(()=>{
            var u, d;
            return (d = (u = i.block.blocks) == null ? void 0 : u.default) == null ? void 0 : d.filter(_=>_.blockType === nr).map(_=>({
                statistic: _.content.statistic,
                blurb: _.content.blurb
            }))
        }
        );
        return (u,d)=>{
            const _ = N;
            return o(),
            r("div", L_, [a("div", P_, [a("div", $_, [A_, a("div", O_, [a("div", D_, [e(n) ? (o(),
            T(_, {
                key: 0,
                headingLevel: 2,
                class: y(["text-balance", e(c) === "default" ? "f-heading-1" : "f-heading-1-sans"]),
                title: e(n)
            }, null, 8, ["class", "title"])) : p("", !0)])])]), a("div", C_, [(o(!0),
            r(S, null, A(e(l), (h,g)=>(o(),
            r("div", {
                class: y([{
                    "lg:w-6-cols": e(l).length === 2
                }, {
                    "lg:w-1/3-cols": e(l).length === 3
                }, {
                    "lg:w-3-cols": e(l).length > 3 || e(l).length === 1
                }, "first:mt-40 md:first:mt-48 lg:first:mt-60 mt-24 md:flex lg:block md:mt-40 lg:mt-60 md:w-8-cols xs:w-6-cols"])
            }, [h.statistic ? (o(),
            r("span", R_, L(h.statistic), 1)) : p("", !0), h.blurb ? (o(),
            r("p", V_, L(h.blurb), 1)) : p("", !0)], 2))), 256))]), e(s) ? (o(),
            r("div", q_, [a("div", {
                class: "f-caption-1 w-6-cols md:w-8-cols lg:w-12-cols ui-richtext",
                innerHTML: e(s)
            }, null, 8, M_)])) : p("", !0)])])
        }
    }
}
  , j_ = {
    class: "container"
}
  , G_ = {
    class: "cols-container"
}
  , F_ = {
    key: 0,
    class: "ui-richtext f-caption-1 mt-8"
}
  , N_ = {
    __name: "BlockTable",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const i = t
          , n = x(()=>{
            var c, l;
            return {
                rows: (l = (c = i.block.blocks) == null ? void 0 : c.default) == null ? void 0 : l.filter(u=>u.blockType === lr || u.blockType === ar).map(u=>u.content)
            }
        }
        )
          , s = D(null);
        return te(()=>{
            s.value && s.value.forEach(c=>{
                c.bold = !1
            }
            )
        }
        ),
        (c,l)=>{
            const u = ga
              , d = me;
            return e(n).rows ? (o(),
            r("div", {
                key: 0,
                class: y(e(de)(t.blocks, t.block))
            }, [a("div", j_, [a("div", G_, [a("div", {
                class: y(["overflow-hidden xs:w-6-cols relative", {
                    "md:w-6-cols lg:ml-2-cols lg:w-6-cols": t.block.content.display === "text-column",
                    "md:w-8-cols lg:w-12-cols": t.block.content.display === "full-grid"
                }])
            }, [w(u, {
                data: e(n)
            }, null, 8, ["data"]), t.block.content.caption ? (o(),
            r("div", F_, [w(d, {
                content: t.block.content.caption
            }, null, 8, ["content"])])) : p("", !0)], 2)])])], 2)) : p("", !0)
        }
    }
}
  , H_ = {
    class: "container"
}
  , z_ = {
    class: "cols-container"
}
  , U_ = {
    class: "ui-richtext"
}
  , W_ = {
    __name: "BlockText",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        },
        layout: {
            type: String,
            default: null
        },
        modifier: {
            type: String,
            default: "primary"
        }
    },
    setup(t) {
        const i = t;
        function n(s, c) {
            const l = s.find(d=>d.position === c.position - 1)
              , u = pe(l);
            if (l && u === "heading") {
                if (i.layout && i.layout === "detail")
                    return "mt-spacing-4";
                switch (l.content.level) {
                case 1:
                    return "mt-spacing-4";
                case 2:
                    return "mt-spacing-3";
                case 3:
                    return "mt-spacing-3";
                default:
                    return "mt-spacing-7"
                }
            } else
                return c.content.html.replaceAll(/<\/?[^>]+(>|$)/gi, "").slice(0, 1) === "​" ? "mt-spacing-6" : "mt-spacing-7"
        }
        return (s,c)=>{
            const l = me;
            return o(),
            r("div", {
                class: y(n(t.blocks, t.block))
            }, [a("div", H_, [a("div", z_, [a("div", {
                class: y(["xs:w-12-cols md:w-6-cols lg:ml-2-cols lg:w-6-cols relative", t.modifier !== "primary" ? "f-body-1" : "f-body-2"])
            }, [a("div", U_, [t.block.content.richText ? (o(),
            T(l, {
                key: 0,
                content: t.block.content.richText,
                options: e(bt)
            }, null, 8, ["content", "options"])) : p("", !0)])], 2)])])], 2)
        }
    }
}
  , K_ = {
    class: "mt-spacing-7"
}
  , J_ = {
    class: "container"
}
  , Y_ = {
    class: y("pt-spacing-3 w-full border-t border-primary")
}
  , X_ = {
    class: "cols-container"
}
  , Q_ = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , Z_ = {
    key: 0,
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols mt-16 md:mt-0"
}
  , eh = {
    __name: "BlockTextWithTitle",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const n = t.block.content.textSize;
        return (s,c)=>{
            const l = N
              , u = me;
            return o(),
            r("div", K_, [a("div", J_, [a("div", Y_, [a("div", X_, [a("div", Q_, [t.block.content.title ? (o(),
            T(l, {
                key: 0,
                "heading-level": 2,
                title: t.block.content.title,
                class: "f-heading-1 md:-mt-[0.09em] md:pr-36 lg:pr-44"
            }, null, 8, ["title"])) : p("", !0)]), t.block.content.richText ? (o(),
            r("div", Z_, [a("div", {
                class: y(["ui-richtext", e(n) === "large" ? "f-subhead-1" : "f-body-1"])
            }, [w(u, {
                content: t.block.content.richText
            }, null, 8, ["content"])], 2)])) : p("", !0)])])])])
        }
    }
}
  , th = {
    class: "mt-spacing-7"
}
  , oh = {
    class: y(["container border-t border-secondary xs:pt-8 md:pt-12"])
}
  , ih = {
    class: "cols-container"
}
  , nh = {
    class: "relative lg:pl-24"
}
  , rh = {
    key: 0,
    class: "f-display-3"
}
  , ah = {
    class: "after:content-['”'] lg:before:absolute before:left-0 before:content-['“']"
}
  , sh = {
    key: 1,
    class: "mt-spacing-4"
}
  , lh = {
    class: "f-subhead-2 block"
}
  , ch = {
    key: 0,
    class: "f-body-1 block"
}
  , uh = {
    key: 0,
    class: "xs:w-6-cols xs:order-1 md:w-4-cols md:order-2 lg:w-6-cols mt-8 md:mt-10"
}
  , dh = {
    __name: "BlockTestimonial",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = x(()=>n.media.imageByRole(i.block, "image", "default"));
        return (c,l)=>{
            const u = ee;
            return o(),
            r("div", th, [a("div", oh, [a("div", ih, [a("div", {
                class: y([{
                    "xs:w-6-cols md:w-4-cols lg:w-6-cols mt-40 md:mt-0 xs:order-2 md:order-1": e(s)
                }, {
                    "xs:w-6-cols md:w-8-cols lg:w-12-cols lg:pr-44": !e(s)
                }])
            }, [a("figure", nh, [t.block.content.quote ? (o(),
            r("blockquote", rh, [a("p", ah, L(t.block.content.quote), 1)])) : p("", !0), t.block.content.name ? (o(),
            r("figcaption", sh, [a("span", lh, L(t.block.content.name), 1), t.block.content.title ? (o(),
            r("span", ch, L(t.block.content.title), 1)) : p("", !0)])) : p("", !0)])], 2), e(s) ? (o(),
            r("div", uh, [w(u, {
                ratio: "1x1",
                image: e(s),
                caption: e(s).caption
            }, null, 8, ["image", "caption"])])) : p("", !0)])])])
        }
    }
}
  , ph = {
    class: "mt-spacing-7"
}
  , mh = {
    class: "container"
}
  , _h = {
    class: "cols-container"
}
  , hh = {
    class: "w-6-cols md:w-4-cols lg:w-5-cols"
}
  , gh = {
    class: "f-heading-1-sans"
}
  , bh = {
    key: 1,
    class: "w-6-cols mt-spacing-4 md:mt-0 md:w-4-cols lg:w-6-cols lg:ml-1-cols flex flex-col"
}
  , vh = {
    class: "grid-layout mt-spacing-5"
}
  , yh = a("div", {
    class: "border border-[currentColor] rounded opacity-20 pointer-events-none absolute inset-0"
}, null, -1)
  , fh = {
    key: 1,
    class: "mt-auto f-ui-1 flex flex-col"
}
  , kh = {
    key: 0,
    class: "font-bold"
}
  , wh = {
    key: 1
}
  , Th = {
    __name: "BlockTestimonialCards",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        var _;
        const i = t
          , {$helpers: n} = V()
          , {border: s, logoHeight: c, title: l} = i.block.content
          , u = x(()=>n.blocks.listingLink(i.block))
          , d = (_ = i.block.blocks.default) == null ? void 0 : _.filter(h=>h.blockType === gr).map(h=>{
            const g = n.media.imageByRole(h, "image", "default");
            return {
                id: h.id,
                ...h.content,
                logo: g
            }
        }
        );
        return (h,g)=>{
            const b = X
              , v = ee;
            return o(),
            r("div", ph, [a("div", mh, [a("div", _h, [e(s) && e(s) !== "none" ? (o(),
            r("div", {
                key: 0,
                class: y(["bg-[currentColor] h-1 w-6-cols md:w-8-cols lg:w-12-cols", {
                    "opacity-20": e(s) === "secondary",
                    "mb-spacing-3": e(l)
                }])
            }, null, 2)) : p("", !0), a("div", hh, [a("h2", gh, L(e(l)), 1)]), e(u) && Object.keys(e(u)).length ? (o(),
            r("div", bh, [w(b, {
                label: e(u).text,
                url: e(u).url,
                download: e(u).download,
                modifier: "underline",
                class: "md:ml-auto",
                inheritColor: ""
            }, null, 8, ["label", "url", "download"])])) : p("", !0)]), a("div", vh, [(o(!0),
            r(S, null, A(e(d), k=>(o(),
            r("div", {
                class: "col-span-6 md:col-span-4 lg:col-span-6 relative px-20 py-32 flex flex-col",
                key: k.id
            }, [yh, k.logo ? (o(),
            r("div", {
                key: 0,
                class: y(["flex w-full mb-spacing-5", {
                    "h-28 lg:h-36": !e(c) || e(c) === "default",
                    "h-48 lg:h-64": e(c) === "tall"
                }])
            }, [w(v, {
                image: k.logo,
                ratioClasses: "!h-full !w-auto flex"
            }, null, 8, ["image"])], 2)) : p("", !0), a("div", {
                class: y(["f-subhead-1-serif", {
                    "mb-spacing-5": k.name || k.title
                }])
            }, L(k.quote), 3), k.name || k.title ? (o(),
            r("div", fh, [k.name ? (o(),
            r("span", kh, L(k.name), 1)) : p("", !0), k.title ? (o(),
            r("span", wh, L(k.title), 1)) : p("", !0)])) : p("", !0)]))), 128))])])])
        }
    }
}
  , xh = {
    class: "container"
}
  , Eh = {
    class: "cols-container"
}
  , Sh = {
    class: "w-6-cols md:w-4-cols lg:w-5-cols"
}
  , Ih = {
    key: 1,
    class: "w-6-cols mt-spacing-4 md:mt-0 md:w-4-cols lg:w-6-cols lg:ml-1-cols flex flex-col"
}
  , Lh = {
    class: "w-full md:hidden mt-spacing-7"
}
  , Ph = {
    key: 0
}
  , $h = {
    key: 1
}
  , Ah = {
    key: 0,
    class: "f-body-1"
}
  , Oh = {
    class: "cols-container hidden md:flex mt-spacing-6"
}
  , Dh = {
    class: "w-3-cols lg:w-5-cols"
}
  , Ch = {
    role: "tablist",
    class: "sm:pr-[1.5em] lg:pr-0 flex flex-col"
}
  , Rh = ["aria-selected", "onClick"]
  , Vh = a("div", {
    class: "h-1 absolute top-0 left-0 w-full bg-[currentColor] opacity-20"
}, null, -1)
  , qh = {
    class: "flex flex-col"
}
  , Mh = {
    class: "w-5-cols lg:w-6-cols lg:ml-1-cols"
}
  , Bh = {
    key: 0
}
  , jh = {
    key: 1
}
  , Gh = {
    __name: "BlockTimedTabs",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        var Y;
        const i = t
          , {$helpers: n} = V()
          , {border: s, title: c, level: l, disableAnimation: u, prefixNumbers: d} = (Y = i.block) == null ? void 0 : Y.content
          , _ = x(()=>n.blocks.listingLink(i.block))
          , h = x(()=>{
            var M;
            return (M = i.block.blocks.default) == null ? void 0 : M.filter(B=>B.blockType === vr).map(B=>{
                var W, R, ie;
                const z = {
                    id: B.id,
                    title: B.content.title,
                    body: B.content.body,
                    media: B.content.media
                };
                if (B.content.media === "image") {
                    const O = n.media.imageByRole(B, "timedTabImage", "default");
                    O && (z.image = {
                        src: O.src,
                        alt: O.alt,
                        caption: O.caption
                    })
                } else if (B.content.media === "snippet") {
                    const O = (R = (W = B.relatedItems) == null ? void 0 : W.mediaSnippet) != null && R.length ? (ie = B.relatedItems) == null ? void 0 : ie.mediaSnippet[0] : null;
                    O && (z.snippet = {
                        resource: O,
                        images: n.media.imagesByRole(B, "snippetImages", "default"),
                        data: B.content.snippetData
                    })
                }
                return z
            }
            )
        }
        )
          , g = D(0)
          , b = D(null)
          , v = D(null)
          , k = D(!1)
          , I = D({})
          , P = D(u ? "manual" : "idle")
          , $ = D(null)
          , C = D(null)
          , q = D([])
          , E = (M,B,z,W=0,R=()=>{}
        )=>new Promise(ie=>{
            if (!M)
                return;
            const O = Math.random().toString(36).substring(2, 9)
              , j = M.animate(B, z);
            j.onfinish = ()=>{
                delete I.value[O],
                ie()
            }
            ,
            I.value[O] = j,
            clearTimeout(b.value),
            b.value = setTimeout(()=>{
                P.value === "manual" || !k.value || (j.play(),
                R())
            }
            , W)
        }
        )
          , F = async()=>{
            const M = (g.value + 1) % h.value.length
              , B = q.value[g.value]
              , z = q.value[M];
            await E(B, [{
                opacity: 1
            }, {
                opacity: 0
            }], {
                duration: 0,
                fill: "forwards",
                delay: 0
            }, 0, ()=>{
                P.value = "auto"
            }
            ),
            await E(B, [{
                transform: "scaleX(1)"
            }, {
                transform: "scaleX(0)"
            }], {
                duration: 0,
                fill: "forwards",
                delay: 1e3
            }),
            await E(B, [{
                opacity: 1,
                transform: "scaleX(0)"
            }, {
                opacity: 1,
                transform: "scaleX(1)"
            }], {
                duration: 6e3,
                fill: "both",
                delay: 100,
                easing: "linear"
            }),
            await Promise.all([E(B, [{
                opacity: 1
            }, {
                opacity: 0
            }], {
                duration: 300,
                delay: 500,
                fill: "forwards"
            }), E(z, [{
                opacity: 0
            }, {
                opacity: 1
            }], {
                duration: 300,
                delay: 500,
                fill: "forwards"
            })]),
            g.value = M,
            F()
        }
          , J = ()=>{
            q.value.forEach(M=>{
                M.getAnimations().forEach(B=>B.cancel())
            }
            ),
            Object.keys(I.value).forEach(M=>{
                I.value[M].cancel(),
                delete I.value[M]
            }
            ),
            clearTimeout(b.value)
        }
          , H = M=>{
            P.value = "manual",
            J(),
            g.value = M
        }
        ;
        return lt(()=>P.value, M=>{
            M === "manual" && (clearTimeout(v.value),
            v.value = setTimeout(()=>{
                k.value && (P.value = "idle",
                F())
            }
            , 8e3))
        }
        ),
        te(()=>{
            !C.value || u || ($.value = new IntersectionObserver(([M])=>{
                k.value = M.isIntersecting,
                M.isIntersecting ? (clearTimeout(b.value),
                b.value = setTimeout(()=>{
                    u || (P.value = "idle",
                    F())
                }
                , 1500)) : (J(),
                !u && P.value !== "idle" && (P.value = "idle"))
            }
            ,{
                rootMargin: "0px",
                threshold: .3
            }),
            $.value.observe(C.value))
        }
        ),
        xe(()=>{
            $.value && $.value.disconnect()
        }
        ),
        (M,B)=>{
            const z = X
              , W = ee
              , R = ge
              , ie = Te;
            return o(),
            r("div", {
                class: "mt-spacing-7 BlockTimedTabs",
                ref_key: "root",
                ref: C
            }, [a("div", xh, [a("div", Eh, [e(s) && e(s) !== "none" ? (o(),
            r("div", {
                key: 0,
                class: y(["bg-[currentColor] h-1 w-6-cols md:w-8-cols lg:w-12-cols mb-spacing-3", {
                    "opacity-20": e(s) === "secondary"
                }])
            }, null, 2)) : p("", !0), a("div", Sh, [a("h2", {
                class: y({
                    "f-heading-1-sans text-balance": e(l) === 1,
                    "font-sans text-[21px] leading-[1.3] font-semibold": e(l) === 2
                })
            }, L(e(c)), 3)]), e(_) && Object.keys(e(_)).length ? (o(),
            r("div", Ih, [w(z, {
                label: e(_).text,
                url: e(_).url,
                download: e(_).download,
                modifier: "underline",
                class: "md:ml-auto",
                inheritColor: ""
            }, null, 8, ["label", "url", "download"])])) : p("", !0)]), a("div", Lh, [(o(!0),
            r(S, null, A(e(h), (O,j)=>(o(),
            T(ie, {
                key: j,
                initialActiveState: j === 0,
                index: j
            }, {
                title: Z(()=>[e(d) ? (o(),
                r("span", Ph, L(String(j + 1).padStart(2, "0")) + "   " + L(O.title), 1)) : (o(),
                r("span", $h, L(O.title), 1))]),
                default: Z(()=>[O.body ? (o(),
                r("p", Ah, L(O.body), 1)) : p("", !0), O.media ? (o(),
                r("div", {
                    key: 1,
                    class: y(["mb-spacing-5", `${O.body ? "mt-spacing-5" : "my-spacing-3"}`])
                }, [O.media === "image" && O.image ? (o(),
                T(W, {
                    key: 0,
                    image: O.image,
                    caption: O.image.caption
                }, null, 8, ["image", "caption"])) : O.media === "snippet" ? (o(),
                r(S, {
                    key: 1
                }, [O.snippet ? (o(),
                T(R, we(ke({
                    key: 0
                }, O.snippet)), null, 16)) : p("", !0)], 64)) : p("", !0)], 2)) : p("", !0)]),
                _: 2
            }, 1032, ["initialActiveState", "index"]))), 128))]), a("div", Oh, [a("div", Dh, [a("ul", Ch, [(o(!0),
            r(S, null, A(e(h), (O,j)=>(o(),
            r("li", {
                key: O.id,
                role: "presentation"
            }, [a("button", {
                role: "tab",
                class: "ui-link f-ui-1 relative py-8 lg:py-12 text-inherit w-full text-left flex",
                "aria-selected": j === e(g),
                onClick: ()=>H(j)
            }, [Vh, a("div", {
                class: y(["h-1 absolute top-0 left-0 w-full bg-[currentColor] origin-left", {
                    "opacity-0": j !== e(g),
                    "opacity-100 scale-x-100": j === e(g) && e(P) === "manual",
                    "opacity-100 scale-x-100": e(P) === "idle" && j === e(g),
                    "transition-opacity duration-300": e(P) === "manual"
                }]),
                ref_for: !0,
                ref_key: "lines",
                ref: q
            }, null, 2), e(d) ? (o(),
            r("div", {
                key: 0,
                class: y(["w-[2em] shrink-0 transition-opacity duration-300", {
                    "opacity-50": j !== e(g)
                }])
            }, L(String(j + 1).padStart(2, "0")), 3)) : p("", !0), a("div", qh, [a("span", {
                class: y(["transition-opacity duration-300 text-balance", {
                    "opacity-50": j !== e(g)
                }])
            }, L(O.title), 3), O.body ? (o(),
            r("div", {
                key: 0,
                class: y(["overflow-hidden", {
                    "max-h-0": j !== e(g),
                    "max-h-none": j === e(g)
                }])
            }, [a("p", {
                class: y(["max-w-[500px] py-12 transition-[opacity,transform] duration-500 text-balance", {
                    "opacity-100": j === e(g),
                    "opacity-0 translate-x-4": j !== e(g)
                }])
            }, L(O.body), 3)], 2)) : p("", !0)])], 8, Rh)]))), 128))])]), a("div", Mh, [w(ro, {
                mode: "out-in",
                name: "fade"
            }, {
                default: Z(()=>[(o(),
                r("div", {
                    key: `graphic-${e(h)[e(g)].id}`,
                    class: "-mt-1"
                }, [(o(!0),
                r(S, null, A(e(h), (O,j)=>ut((o(),
                r("div", {
                    key: `tab-${O.id}`
                }, [O.media === "image" && O.image ? (o(),
                r("div", Bh, [w(W, {
                    image: O.image,
                    caption: O.image.caption
                }, null, 8, ["image", "caption"])])) : O.media === "snippet" && O.snippet ? (o(),
                r("div", jh, [w(R, we(no(O.snippet)), null, 16)])) : p("", !0)])), [[dt, j === e(g)]])), 128))]))]),
                _: 1
            })])])])], 512)
        }
    }
};
let st = 0;
const Fh = {
    props: {
        headingLevel: {
            type: Number,
            default: 3
        },
        items: {
            type: Array,
            default() {
                return []
            }
        },
        title: {
            type: [String, Number],
            default: null
        }
    },
    data() {
        return st += 1,
        {}
    },
    computed: {
        id() {
            return `timeline_${st}`
        },
        soundcloudItems() {
            return this.items.map(t=>t.soundcloudItems ? t.soundcloudItems.filter(i=>i) : [])
        }
    },
    methods: {
        isFirstDate(t, i) {
            return this.items.length ? this.items.filter(s=>s.date === i)[0] === t : null
        }
    }
}
  , Nh = {
    class: "mt-spacing-7 w-full"
}
  , Hh = {
    key: 0,
    class: "cols-container"
}
  , zh = {
    class: "xs:w-6-cols md:w-4-cols lg:ml-2-cols lg:w-6-cols"
}
  , Uh = {
    key: 1,
    class: "mt-spacing-6 first:mt-0"
}
  , Wh = ["aria-labelledby"]
  , Kh = {
    class: "cols-container"
}
  , Jh = {
    class: "cols-container"
}
  , Yh = {
    class: "mt-16 group-last:pb-0 xs:w-6-cols md:w-3-cols md:mt-0 md:pb-48 lg:w-5-cols lg:pb-60"
}
  , Xh = {
    key: 0,
    class: "f-body-1 ui-richtext"
}
  , Qh = {
    key: 1,
    class: "f-caption-1 mt-16 border-t border-secondary md:mt-40 lg:mt-48"
}
  , Zh = ["innerHTML"]
  , eg = {
    key: 0,
    class: "mt-40 group-last:pb-0 xs:w-6-cols md:w-3-cols md:mt-0 md:pb-48 lg:w-5-cols lg:pb-60"
};
function tg(t, i, n, s, c, l) {
    const u = N
      , d = me
      , _ = ee;
    return o(),
    r("div", Nh, [n.title ? (o(),
    r("div", Hh, [a("div", zh, [w(u, {
        id: l.id,
        "heading-level": n.headingLevel,
        title: n.title,
        class: "f-heading-3"
    }, null, 8, ["id", "heading-level", "title"])])])) : p("", !0), n.items ? (o(),
    r("div", Uh, [a("ul", {
        "aria-labelledby": l.id
    }, [(o(!0),
    r(S, null, A(n.items, (h,g)=>(o(),
    r("li", {
        key: g,
        class: "group pb-40 md:pb-0"
    }, [a("div", Kh, [a("div", {
        class: y(["border-r-primary group-first:border-0 xs:w-6-cols md:w-2-cols md:border-r lg:w-2-cols lg:pr-gutter lg:text-right", l.isFirstDate(h, h.date) ? "" : "sr-only"])
    }, [w(u, {
        title: h.date,
        "heading-level": n.headingLevel + 1,
        class: "f-heading-5"
    }, null, 8, ["title", "heading-level"])], 2)]), a("div", Jh, [a("div", {
        class: y(["relative group-last:pb-0 xs:w-6-cols md:w-2-cols md:border-r md:pb-48 lg:w-2-cols lg:pr-gutter lg:pb-60 lg:text-right", g + 1 === n.items.length ? "border-r-[color:transparent]" : "border-r-primary"])
    }, [a("span", {
        class: y(["f-body-1 block w-full after:absolute after:top-[0.5em] after:right-0 after:z-20 after:mr-[-0.5px] after:hidden after:h-9 after:w-9 after:translate-x-1/2 after:transform after:rounded-full after:bg-inverse after:content-[''] group-first:before:absolute group-first:before:top-0 group-first:before:right-0 group-first:before:z-10 group-first:before:block group-first:before:h-16 group-first:before:w-10 group-first:before:translate-x-1/2 group-first:before:transform group-first:before:bg-primary group-first:before:content-[''] md:after:block", {
            "before:absolute before:-right-1 before:hidden before:h-[0.5em] before:w-1 before:bg-inverse before:content-[''] md:before:block": g + 1 === n.items.length
        }, {
            "before:absolute before:-right-1 before:hidden before:h-[0.5em] before:w-1 before:bg-primary before:content-[''] md:before:block": g === 0
        }])
    }, L(h.title), 3)], 2), a("div", Yh, [h.content ? (o(),
    r("div", Xh, [w(d, {
        content: h.content
    }, null, 8, ["content"])])) : p("", !0), l.soundcloudItems[g].length ? (o(),
    r("div", Qh, [(o(!0),
    r(S, null, A(l.soundcloudItems[g], (b,v)=>(o(),
    r("div", {
        key: v,
        class: "border-b border-secondary py-12",
        innerHTML: b
    }, null, 8, Zh))), 128))])) : p("", !0)]), h.image ? (o(),
    r("div", eg, [w(_, {
        image: h.image
    }, null, 8, ["image"])])) : p("", !0)])]))), 128))], 8, Wh)])) : p("", !0)])
}
const og = le(Fh, [["render", tg]])
  , ig = {
    class: "container"
}
  , ng = {
    __name: "BlockTimeline",
    props: {
        block: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = l=>{
            const u = n.media.imageByRole(l, "timeline");
            return u ? {
                src: u.default.src,
                ratio: u.default.ratio ? u.default.ratio.replace(":", "x") : "1x1",
                alt: u.default.alt,
                caption: u.default.caption,
                classes: "text-right"
            } : null
        }
          , c = x(()=>{
            var l, u;
            return (u = (l = i.block.blocks) == null ? void 0 : l.default) == null ? void 0 : u.map(d=>{
                var _, h;
                return {
                    content: d.content.body,
                    date: d.content.date ? new Date(d.content.date).getFullYear() : null,
                    formattedDate: d.content.formattedDate,
                    title: d.content.title,
                    image: s(d),
                    soundcloudItems: (h = (_ = d.blocks) == null ? void 0 : _.default) == null ? void 0 : h.map(g=>g.content.soundcloudCode)
                }
            }
            )
        }
        );
        return (l,u)=>{
            const d = og;
            return o(),
            r("div", ig, [w(d, {
                items: e(c),
                title: t.block.content.title
            }, null, 8, ["items", "title"])])
        }
    }
}
  , rg = {
    class: "mt-spacing-7"
}
  , ag = {
    class: "container"
}
  , sg = {
    class: "pt-spacing-3 w-full border-t border-inherit"
}
  , lg = {
    key: 0,
    class: "cols-container"
}
  , cg = {
    key: 0,
    class: "xs:w-6-cols md:w-8-cols lg:w-12-cols f-body-1 mb-6 pt-8"
}
  , ug = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols flex flex-col"
}
  , dg = ["innerHTML"]
  , pg = {
    class: "xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols"
}
  , mg = ["innerHTML"]
  , _g = ["role"]
  , hg = ["innerHTML"]
  , gg = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols"
}
  , bg = {
    class: "xs:w-6-cols md:w-4-cols lg:w-6-cols mt-spacing-5 md:mt-0"
}
  , vg = {
    key: 0,
    class: "block f-body-1 mb-6"
}
  , yg = ["innerHTML"]
  , fg = ["role"]
  , kg = ["innerHTML"]
  , wg = ["innerHTML"]
  , Tg = {
    __name: "BlockTwoUpDescription",
    props: {
        block: {
            type: Object
        }
    },
    setup(t) {
        var P;
        const i = t
          , {id: n, variant: s, eyebrow: c, title: l, body: u, footnote: d, bullets: _, display: h} = (P = i.block) == null ? void 0 : P.content
          , {$helpers: g} = V()
          , b = x(()=>{
            var $, C, q;
            return (q = (C = ($ = i.block) == null ? void 0 : $.blocks) == null ? void 0 : C.default) == null ? void 0 : q.filter(E=>E.blockType === "feature-link").map(E=>E.content)
        }
        )
          , v = x(()=>g.media.imageByRole(i.block, "images"))
          , k = `block-${n}-links-heading`
          , I = x(()=>!v.value && (!_ || !_.length));
        return ($,C)=>{
            const q = N
              , E = _e
              , F = X
              , J = ee;
            return o(),
            r("div", rg, [a("div", ag, [a("div", sg, [e(v) ? (o(),
            r("div", {
                key: 1,
                class: y(["cols-container", {
                    "md:flex-row-reverse": e(h) === "image-right"
                }])
            }, [a("div", gg, [w(J, {
                image: e(v).default,
                class: "w-full mt-[0.5em]"
            }, null, 8, ["image"])]), a("div", bg, [a("div", {
                class: y(["flex flex-col", {
                    "lg:pl-1-cols": e(h) === "image-left",
                    "lg:pr-1-cols": e(h) === "image-right"
                }])
            }, [e(c) ? (o(),
            r("span", vg, L(e(c)), 1)) : p("", !0), e(l) ? (o(),
            T(q, {
                key: 1,
                title: e(l),
                "heading-level": 1,
                class: y(["md:pr-[2em] max-w-[14em] text-balance", {
                    "f-heading-1": e(s) === "default",
                    "f-heading-1-sans": e(s) === "neo"
                }])
            }, null, 8, ["title", "class"])) : p("", !0), e(u) ? (o(),
            r("div", {
                key: 2,
                class: y(["mt-spacing-4", {
                    "f-body-1": e(s) === "default",
                    "f-body-2": e(s) === "neo"
                }]),
                innerHTML: e(u)
            }, null, 10, yg)) : p("", !0), a("ul", {
                class: y(["f-body-1", {
                    "mt-spacing-4": e(u),
                    "mt-spacing-4": !e(u)
                }]),
                role: e(_).length === 1 ? "presentation" : null
            }, [(o(!0),
            r(S, null, A(e(_), (H,Y)=>(o(),
            r("li", {
                key: `${H.id}-feature-${Y}`,
                class: "relative pl-[1em] md:pr-16 before:content-[''] before:h-1 before:w-full before:bg-[currentColor] before:left-0 before:top-0 before:opacity-20 first:before:opacity-0 before:absolute py-12"
            }, [w(E, {
                name: "Check400",
                size: "text",
                class: "f-body-1 absolute left-0 top-[14px] a-icon--no-align"
            }), a("div", {
                class: "ml-8 block",
                innerHTML: H
            }, null, 8, kg)]))), 128))], 10, fg), w(q, {
                id: k,
                level: 2,
                title: `${e(l)} links`,
                class: "sr-only"
            }, null, 8, ["title"]), e(b) && e(b).length ? (o(),
            r("ul", {
                key: 3,
                "aria-labelledby": k,
                class: "mt-spacing-4"
            }, [(o(!0),
            r(S, null, A(e(b), (H,Y)=>(o(),
            r("li", {
                key: Y,
                class: "mt-4 first:mt-0"
            }, [w(F, {
                label: H.linkLabel,
                url: H.linkUrl,
                modifier: "underline",
                "inherit-color": !0
            }, null, 8, ["label", "url"])]))), 128))])) : p("", !0), e(d) ? (o(),
            r("span", {
                key: 4,
                class: "f-caption-1 ui-richtext pt-spacing-5 md:mt-auto block",
                innerHTML: e(d)
            }, null, 8, wg)) : p("", !0)], 2)])], 2)) : (o(),
            r("div", lg, [e(c) ? (o(),
            r("div", cg, L(e(c)), 1)) : p("", !0), a("div", ug, [e(l) ? (o(),
            T(q, {
                key: 0,
                title: e(l),
                "heading-level": 1,
                class: y(["md:pr-[2em] max-w-[14em] text-balance", {
                    "f-heading-1": e(s) === "default",
                    "f-heading-1-sans": e(s) === "neo"
                }])
            }, null, 8, ["title", "class"])) : p("", !0), e(d) ? (o(),
            r("span", {
                key: 1,
                class: "f-caption-1 ui-richtext mt-auto block",
                innerHTML: e(d)
            }, null, 8, dg)) : p("", !0)]), a("div", pg, [e(u) ? (o(),
            r("div", {
                key: 0,
                class: y(["mt-spacing-5 md:mt-[0.1em]", {
                    "f-subhead-1": e(I) && e(s) === "default",
                    "f-subhead-1-serif": e(I) && e(s) === "neo",
                    "f-body-1": !e(I) && e(s) === "default",
                    "f-body-2": !e(I) && e(s) === "neo"
                }]),
                innerHTML: e(u)
            }, null, 10, mg)) : p("", !0), e(_) && e(_).length ? (o(),
            r("ul", {
                key: 1,
                role: e(_).length === 1 ? "presentation" : null,
                class: y({
                    "mt-spacing-4": e(u)
                })
            }, [(o(!0),
            r(S, null, A(e(_), (H,Y)=>(o(),
            r("li", {
                key: `${H.id}-feature-${Y}`,
                class: "relative pl-[1em] md:pr-16 before:content-[''] before:h-1 before:w-full before:bg-[currentColor] before:left-0 before:top-0 before:opacity-20 first:before:opacity-0 before:absolute py-12"
            }, [w(E, {
                name: "Check400",
                size: "text",
                class: "f-body-1 absolute left-0 top-[14px] a-icon--no-align"
            }), a("div", {
                class: "ml-8 block",
                innerHTML: H
            }, null, 8, hg)]))), 128))], 10, _g)) : p("", !0), w(q, {
                id: k,
                level: 2,
                title: `${e(l)} links`,
                class: "sr-only"
            }, null, 8, ["title"]), e(b) && e(b).length ? (o(),
            r("ul", {
                key: 2,
                class: y(["f-body-1", {
                    "mt-spacing-4": e(u)
                }]),
                "aria-labelledby": k
            }, [(o(!0),
            r(S, null, A(e(b), (H,Y)=>(o(),
            r("li", {
                key: Y,
                class: "mt-4 first:mt-0"
            }, [w(F, {
                label: H.linkLabel,
                url: H.linkUrl,
                modifier: "underline",
                "inherit-color": !0
            }, null, 8, ["label", "url"])]))), 128))], 2)) : p("", !0)])]))])])])
        }
    }
}
  , xg = {
    class: "container"
}
  , Eg = {
    key: 0,
    class: "cols-container"
}
  , Sg = ["innerHTML"]
  , Ig = {
    __name: "BlockVideo",
    props: {
        block: {
            type: Object,
            required: !0
        },
        blocks: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const i = t
          , {$helpers: n} = V()
          , s = D(null)
          , c = x(()=>({
            code: i.block.content.code,
            display: i.block.content.display,
            duration: i.block.content.duration,
            poster: n.media.imageByRole(i.block, "poster"),
            title: i.block.content.title,
            caption: i.block.content.caption,
            captionSize: i.block.content.captionSize || "small",
            transcript: i.block.content.transcript
        }));
        return (l,u)=>{
            const d = Kt
              , _ = Te;
            return o(),
            r("div", {
                class: y(e(de)(t.blocks, t.block))
            }, [a("div", xg, [a("div", {
                class: y([{
                    "cols-container": e(c).display !== "full-grid"
                }])
            }, [a("div", {
                class: y([{
                    "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-6-cols": e(c).display === "text-column",
                    "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-10-cols": e(c).display === "offset-grid"
                }])
            }, [w(d, {
                title: e(c).title,
                duration: e(c).duration,
                code: e(c).code,
                poster: e(c).poster ? e(c).poster.default : null,
                ratio: e(c).ratio,
                spacing: !1,
                ref_key: "video",
                ref: s
            }, null, 8, ["title", "duration", "code", "poster", "ratio"])], 2)], 2), e(c).transcript || e(c).caption ? (o(),
            r("div", Eg, [e(c).caption ? (o(),
            r("div", {
                key: 0,
                class: y(["xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-6-cols", {
                    "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-6-cols": e(c).display === "text-column",
                    "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-10-cols xl:w-8-cols": e(c).display === "offset-grid"
                }])
            }, [a("div", {
                class: y(["ui-richtext relative", {
                    "f-caption-1 mt-8": e(c).captionSize === "small",
                    "f-quote-1 mt-32": e(c).captionSize === "large"
                }]),
                innerHTML: e(c).caption
            }, null, 10, Sg)], 2)) : p("", !0), e(c).transcript ? (o(),
            r("div", {
                key: 1,
                class: y({
                    "mt-[-32px]": !e(c).caption,
                    "mt-24": e(c).caption,
                    "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-6-cols": e(c).display === "text-column",
                    "xs:w-6-cols md:w-6-cols lg:ml-2-cols lg:w-10-cols": e(c).display === "offset-grid"
                })
            }, [w(_, {
                title: "Transcript",
                content: e(c).transcript,
                index: "1"
            }, null, 8, ["content"])], 2)) : p("", !0)])) : p("", !0)])], 2)
        }
    }
};
function Lg(t, i) {
    var I, P, $, C, q;
    let n = ["ui-block"];
    const s = t.content.colorTheme
      , c = t.content.colorBackground
      , l = t.content.colorForeground;
    (c !== null || l !== null) && [{
        value: c,
        type: "bg"
    }, {
        value: l,
        type: "text"
    }].forEach(({type: E, value: F})=>{
        switch (F) {
        case "white-core":
            n.push(E === "bg" ? "bg-[color:var(--white-core)]" : "text-[color:var(--white-core)]");
            break;
        case "white-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--white-tint-dark)]" : "text-[color:var(--white-tint-dark)]");
            break;
        case "white-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--white-tint-muted)]" : "text-[color:var(--white-tint-muted)]");
            break;
        case "white-highlight":
            n.push(E === "bg" ? "bg-[color:var(--white-highlight)]" : "text-[color:var(--white-highlight)]");
            break;
        case "white-neon":
            n.push(E === "bg" ? "bg-[color:var(--white-neon)]" : "text-[color:var(--white-neon)]");
            break;
        case "black-core":
            n.push(E === "bg" ? "bg-[color:var(--black-core)]" : "text-[color:var(--black-core)]");
            break;
        case "black-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--black-tint-dark)]" : "text-[color:var(--black-tint-dark)]");
            break;
        case "black-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--black-tint-muted)]" : "text-[color:var(--black-tint-muted)]");
            break;
        case "black-highlight":
            n.push(E === "bg" ? "bg-[color:var(--black-highlight)]" : "text-[color:var(--black-highlight)]");
            break;
        case "black-neon":
            n.push(E === "bg" ? "bg-[color:var(--black-neon)]" : "text-[color:var(--black-neon)]");
            break;
        case "plum-core":
            n.push(E === "bg" ? "bg-[color:var(--plum-core)]" : "text-[color:var(--plum-core)]");
            break;
        case "plum-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--plum-tint-dark)]" : "text-[color:var(--plum-tint-dark)]");
            break;
        case "plum-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--plum-tint-muted)]" : "text-[color:var(--plum-tint-muted)]");
            break;
        case "plum-highlight":
            n.push(E === "bg" ? "bg-[color:var(--plum-highlight)]" : "text-[color:var(--plum-highlight)]");
            break;
        case "plum-neon":
            n.push(E === "bg" ? "bg-[color:var(--plum-neon)]" : "text-[color:var(--plum-neon)]");
            break;
        case "blue-core":
            n.push(E === "bg" ? "bg-[color:var(--blue-core)]" : "text-[color:var(--blue-core)]");
            break;
        case "blue-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--blue-tint-dark)]" : "text-[color:var(--blue-tint-dark)]");
            break;
        case "blue-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--blue-tint-muted)]" : "text-[color:var(--blue-tint-muted)]");
            break;
        case "blue-highlight":
            n.push(E === "bg" ? "bg-[color:var(--blue-highlight)]" : "text-[color:var(--blue-highlight)]");
            break;
        case "blue-neon":
            n.push(E === "bg" ? "bg-[color:var(--blue-neon)]" : "text-[color:var(--blue-neon)]");
            break;
        case "teal-core":
            n.push(E === "bg" ? "bg-[color:var(--teal-core)]" : "text-[color:var(--teal-core)]");
            break;
        case "teal-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--teal-tint-dark)]" : "text-[color:var(--teal-tint-dark)]");
            break;
        case "teal-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--teal-tint-muted)]" : "text-[color:var(--teal-tint-muted)]");
            break;
        case "teal-highlight":
            n.push(E === "bg" ? "bg-[color:var(--teal-highlight)]" : "text-[color:var(--teal-highlight)]");
            break;
        case "teal-neon":
            n.push(E === "bg" ? "bg-[color:var(--teal-neon)]" : "text-[color:var(--teal-neon)]");
            break;
        case "green-core":
            n.push(E === "bg" ? "bg-[color:var(--green-core)]" : "text-[color:var(--green-core)]");
            break;
        case "green-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--green-tint-dark)]" : "text-[color:var(--green-tint-dark)]");
            break;
        case "green-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--green-tint-muted)]" : "text-[color:var(--green-tint-muted)]");
            break;
        case "green-highlight":
            n.push(E === "bg" ? "bg-[color:var(--green-highlight)]" : "text-[color:var(--green-highlight)]");
            break;
        case "green-neon":
            n.push(E === "bg" ? "bg-[color:var(--green-neon)]" : "text-[color:var(--green-neon)]");
            break;
        case "olive-core":
            n.push(E === "bg" ? "bg-[color:var(--olive-core)]" : "text-[color:var(--olive-core)]");
            break;
        case "olive-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--olive-tint-dark)]" : "text-[color:var(--olive-tint-dark)]");
            break;
        case "olive-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--olive-tint-muted)]" : "text-[color:var(--olive-tint-muted)]");
            break;
        case "olive-highlight":
            n.push(E === "bg" ? "bg-[color:var(--olive-highlight)]" : "text-[color:var(--olive-highlight)]");
            break;
        case "olive-neon":
            n.push(E === "bg" ? "bg-[color:var(--olive-neon)]" : "text-[color:var(--olive-neon)]");
            break;
        case "yellow-core":
            n.push(E === "bg" ? "bg-[color:var(--yellow-core)]" : "text-[color:var(--yellow-core)]");
            break;
        case "yellow-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--yellow-tint-dark)]" : "text-[color:var(--yellow-tint-dark)]");
            break;
        case "yellow-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--yellow-tint-muted)]" : "text-[color:var(--yellow-tint-muted)]");
            break;
        case "yellow-highlight":
            n.push(E === "bg" ? "bg-[color:var(--yellow-highlight)]" : "text-[color:var(--yellow-highlight)]");
            break;
        case "yellow-neon":
            n.push(E === "bg" ? "bg-[color:var(--yellow-neon)]" : "text-[color:var(--yellow-neon)]");
            break;
        case "orange-core":
            n.push(E === "bg" ? "bg-[color:var(--orange-core)]" : "text-[color:var(--orange-core)]");
            break;
        case "orange-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--orange-tint-dark)]" : "text-[color:var(--orange-tint-dark)]");
            break;
        case "orange-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--orange-tint-muted)]" : "text-[color:var(--orange-tint-muted)]");
            break;
        case "orange-highlight":
            n.push(E === "bg" ? "bg-[color:var(--orange-highlight)]" : "text-[color:var(--orange-highlight)]");
            break;
        case "orange-neon":
            n.push(E === "bg" ? "bg-[color:var(--orange-neon)]" : "text-[color:var(--orange-neon)]");
            break;
        case "red-core":
            n.push(E === "bg" ? "bg-[color:var(--red-core)]" : "text-[color:var(--red-core)]");
            break;
        case "red-tint-dark":
            n.push(E === "bg" ? "bg-[color:var(--red-tint-dark)]" : "text-[color:var(--red-tint-dark)]");
            break;
        case "red-tint-muted":
            n.push(E === "bg" ? "bg-[color:var(--red-tint-muted)]" : "text-[color:var(--red-tint-muted)]");
            break;
        case "red-highlight":
            n.push(E === "bg" ? "bg-[color:var(--red-highlight)]" : "text-[color:var(--red-highlight)]");
            break;
        case "red-neon":
            n.push(E === "bg" ? "bg-[color:var(--red-neon)]" : "text-[color:var(--red-neon)]")
        }
    }
    );
    const d = i.find(E=>E.position === t.position - 1)
      , _ = i.find(E=>E.position === t.position + 1)
      , h = pe(t);
    n.push(`ui-block--${h}`);
    const g = i.find(E=>E.position === t.position + 1)
      , b = pe(d)
      , v = h === "code-snippet" && ((I = t.content.data) == null ? void 0 : I.snug)
      , k = g && b === "code-snippet" && ((P = g.content.data) == null ? void 0 : P.snug);
    return s && s !== "light-gray" && s !== "none" ? (n.push(`theme-${s}`),
    d && d.content.colorTheme === s && s !== "neo" && n.push("ui-adj"),
    _ && _.content.colorTheme !== s && n.push("no-ui-adj"),
    h === "heading" && g && b === "text" && g.content.colorTheme === s && n.push("no-pb")) : h === "feature-1up" && t.blocks && (($ = t.blocks[0]) != null && $.relatedItems) && ((C = t.blocks[0]) != null && C.relatedItems[0]) && ((q = t.blocks[0]) != null && q.relatedItems[0].related.colorTheme) ? (n.push(`theme-${t.blocks[0].relatedItems[0].related.colorTheme}`),
    d && d.content.colorTheme === s && n.push("ui-adj")) : h === "feature-1up-article" && t && t.relatedItems && t.relatedItems[0] && t.relatedItems[0].related.colorTheme && (n.push(`theme-${t.relatedItems[0].related.colorTheme}`),
    d && d.content.colorTheme === s && n.push("ui-adj")),
    v && n.push("ui-block--snug"),
    k && n.push("ui-block--next-snug"),
    n
}
const Pg = ["id"]
  , Mg = {
    __name: "Blocks",
    props: {
        blocks: {
            type: Array,
            default: []
        },
        brand: {
            type: Boolean,
            default: !1
        },
        layout: {
            type: String,
            default: null
        },
        modifier: {
            type: String,
            default: "primary"
        },
        padded: {
            type: Boolean,
            default: !1
        }
    },
    setup(t) {
        const i = lo();
        return (n,s)=>{
            const c = Ir
              , l = Nr
              , u = Qr
              , d = ra
              , _ = va
              , h = rs
              , g = ps
              , b = Is
              , v = St
              , k = $s
              , I = Ds
              , P = Iu
              , $ = Ou
              , C = It
              , q = Gu
              , E = Bd
              , F = Nd
              , J = zd
              , H = Wd
              , Y = Jd
              , M = lp
              , B = xp
              , z = Sp
              , W = Lp
              , R = $p
              , ie = Op
              , O = Gp
              , j = Zp
              , Lt = nm
              , Pt = lm
              , $t = fm
              , At = Cm
              , Ot = c_
              , Dt = g_
              , Ct = v_
              , Rt = I_
              , Vt = B_
              , qt = N_
              , Mt = W_
              , Bt = eh
              , jt = dh
              , Gt = Th
              , Ft = Gh
              , Nt = ng
              , Ht = Tg
              , zt = Ig;
            return o(),
            r("div", {
                id: "content",
                class: y(["ui-blocks", {
                    "ui-blocks--padded": e(i) || t.padded
                }])
            }, [(o(!0),
            r(S, null, A(t.blocks, (f,Ut)=>{
                var Ve, qe, Me, Be, je, Ge;
                return o(),
                r(S, null, [Object.keys(f.content).length ? (o(),
                r("div", {
                    key: 0,
                    class: y([e(Lg)(f, t.blocks), (qe = (Ve = f == null ? void 0 : f.content) == null ? void 0 : Ve.data) != null && qe.class ? f.content.data.class : void 0]),
                    id: f.blockType === tt ? `${(Be = (Me = f.relatedItems) == null ? void 0 : Me.snippet) == null ? void 0 : Be[0].component}-${Ut}` : f.content && f.content.title ? e(gt)(f.content.title.toLowerCase()) : null,
                    style: se({
                        "--bg": (je = f == null ? void 0 : f.content) != null && je.colorForeground ? `var(--${f.content.colorBackground})` : void 0,
                        "--fg": (Ge = f == null ? void 0 : f.content) != null && Ge.colorForeground ? `var(--${f.content.colorForeground})` : void 0
                    })
                }, [f.blockType === en || f.blockType === tn ? (o(),
                T(c, {
                    key: 0,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === rn || f.blockType === an ? (o(),
                T(l, {
                    key: 1,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === sn ? (o(),
                T(u, {
                    key: 2,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === ln ? (o(),
                T(d, {
                    key: 3,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === tt ? (o(),
                T(_, {
                    key: 4,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === cn ? (o(),
                T(h, {
                    key: 5,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === un ? (o(),
                T(g, {
                    key: 6,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === pn ? (o(),
                T(b, {
                    key: 7,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === mn ? (o(),
                T(v, {
                    key: 8,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === hn ? (o(),
                T(k, {
                    key: 9,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === gn ? (o(),
                T(I, {
                    key: 10,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === vn || f.blockType === yn ? (o(),
                T(P, {
                    key: 11,
                    block: f,
                    brand: t.brand
                }, null, 8, ["block", "brand"])) : p("", !0), f.blockType === fn || f.blockType === kn ? (o(),
                T($, {
                    key: 12,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === wn || f.blockType === Tn ? (o(),
                T(C, {
                    key: 13,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === xn ? (o(),
                T(q, {
                    key: 14,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === En ? (o(),
                T(E, {
                    key: 15,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Sn || f.blockType === In ? (o(),
                T(F, {
                    key: 16,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Ln ? (o(),
                T(J, {
                    key: 17,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === qn ? (o(),
                T(J, {
                    key: 18,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === An ? (o(),
                T(J, {
                    key: 19,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Mn ? (o(),
                T(H, {
                    key: 20,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Bn ? (o(),
                T(Y, {
                    key: 21,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === jn ? (o(),
                T(M, {
                    key: 22,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Cn ? (o(),
                T(B, {
                    key: 23,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Pn ? (o(),
                T(z, {
                    key: 24,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === On ? (o(),
                T(W, {
                    key: 25,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Dn ? (o(),
                T(R, {
                    key: 26,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Rn ? (o(),
                T(ie, {
                    key: 27,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Nn ? (o(),
                T(O, {
                    key: 28,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Fn ? (o(),
                T(j, {
                    key: 29,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Hn ? (o(),
                T(Lt, {
                    key: 30,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === Wn ? (o(),
                T(Pt, {
                    key: 31,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Kn ? (o(),
                T($t, {
                    key: 32,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Jn ? (o(),
                T(At, {
                    key: 33,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === Qn ? (o(),
                T(Ot, {
                    key: 34,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === zn || f.blockType === Un ? (o(),
                T(Dt, {
                    key: 35,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === er ? (o(),
                T(Ct, {
                    key: 36,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === tr || f.blockType === or ? (o(),
                T(Rt, {
                    key: 37,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === ir ? (o(),
                T(Vt, {
                    key: 38,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === sr || f.blockType === rr ? (o(),
                T(qt, {
                    key: 39,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === cr || f.blockType === ur ? (o(),
                T(Mt, {
                    key: 40,
                    block: f,
                    blocks: t.blocks,
                    modifier: t.modifier
                }, null, 8, ["block", "blocks", "modifier"])) : p("", !0), f.blockType === dr || f.blockType === pr ? (o(),
                T(Bt, {
                    key: 41,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === mr || f.blockType === _r ? (o(),
                T(jt, {
                    key: 42,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0), f.blockType === hr ? (o(),
                T(Gt, {
                    key: 43,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === br ? (o(),
                T(Ft, {
                    key: 44,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === yr || f.blockType === fr ? (o(),
                T(Nt, {
                    key: 45,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === kr ? (o(),
                T(Ht, {
                    key: 46,
                    block: f
                }, null, 8, ["block"])) : p("", !0), f.blockType === wr || f.blockType === Tr ? (o(),
                T(zt, {
                    key: 47,
                    block: f,
                    blocks: t.blocks
                }, null, 8, ["block", "blocks"])) : p("", !0)], 14, Pg)) : p("", !0)], 64)
            }
            ), 256))], 2)
        }
    }
};
export {fn as H, Mg as _, $s as a, Lg as b, ga as c, Ea as d, wo as e, eh as f, It as g, Zo as h, Ko as i, Pi as j, Fo as k, Ri as l, ot as m, bt as o, mo as s, po as u};
