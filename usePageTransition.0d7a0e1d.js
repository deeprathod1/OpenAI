import {h as p, r as y, a8 as g, al as O, am as w, S as k, A as x, b as L, V as h} from "./entry.d1b74521.js";
const K = ()=>null;
function A(...n) {
    var v;
    const s = typeof n[n.length - 1] == "string" ? n.pop() : void 0;
    typeof n[0] != "string" && n.unshift(s);
    let[e,i,t={}] = n;
    if (typeof e != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof i != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    t.server = t.server ?? !0,
    t.default = t.default ?? K,
    t.lazy = t.lazy ?? !1,
    t.immediate = t.immediate ?? !0;
    const a = p()
      , l = ()=>a.isHydrating ? a.payload.data[e] : a.static.data[e]
      , u = ()=>l() !== void 0;
    a._asyncData[e] || (a._asyncData[e] = {
        data: y(l() ?? ((v = t.default) == null ? void 0 : v.call(t)) ?? null),
        pending: y(!u()),
        error: y(a.payload._errors[e] ? g(a.payload._errors[e]) : null)
    });
    const o = {
        ...a._asyncData[e]
    };
    o.refresh = o.execute = (c={})=>{
        if (a._asyncDataPromises[e]) {
            if (c.dedupe === !1)
                return a._asyncDataPromises[e];
            a._asyncDataPromises[e].cancelled = !0
        }
        if (c._initial && u())
            return l();
        o.pending.value = !0;
        const f = new Promise((r,d)=>{
            try {
                r(i(a))
            } catch (S) {
                d(S)
            }
        }
        ).then(r=>{
            if (f.cancelled)
                return a._asyncDataPromises[e];
            t.transform && (r = t.transform(r)),
            t.pick && (r = B(r, t.pick)),
            o.data.value = r,
            o.error.value = null
        }
        ).catch(r=>{
            var d;
            if (f.cancelled)
                return a._asyncDataPromises[e];
            o.error.value = r,
            o.data.value = L(((d = t.default) == null ? void 0 : d.call(t)) ?? null)
        }
        ).finally(()=>{
            f.cancelled || (o.pending.value = !1,
            a.payload.data[e] = o.data.value,
            o.error.value && (a.payload._errors[e] = g(o.error.value)),
            delete a._asyncDataPromises[e])
        }
        );
        return a._asyncDataPromises[e] = f,
        a._asyncDataPromises[e]
    }
    ;
    const _ = ()=>o.refresh({
        _initial: !0
    })
      , C = t.server !== !1 && a.payload.serverRendered;
    {
        const c = O();
        if (c && !c._nuxtOnBeforeMountCbs) {
            c._nuxtOnBeforeMountCbs = [];
            const r = c._nuxtOnBeforeMountCbs;
            c && (w(()=>{
                r.forEach(d=>{
                    d()
                }
                ),
                r.splice(0, r.length)
            }
            ),
            k(()=>r.splice(0, r.length)))
        }
        C && a.isHydrating && u() ? o.pending.value = !1 : c && (a.payload.serverRendered && a.isHydrating || t.lazy) && t.immediate ? c._nuxtOnBeforeMountCbs.push(_) : t.immediate && _(),
        t.watch && x(t.watch, ()=>o.refresh());
        const f = a.hook("app:data:refresh", r=>{
            if (!r || r.includes(e))
                return o.refresh()
        }
        );
        c && k(f)
    }
    const m = Promise.resolve(a._asyncDataPromises[e]).then(()=>o);
    return Object.assign(m, o),
    m
}
function H(...n) {
    const s = typeof n[n.length - 1] == "string" ? n.pop() : void 0;
    typeof n[0] != "string" && n.unshift(s);
    const [e,i,t] = n;
    return A(e, i, {
        ...t,
        lazy: !0
    }, null)
}
function B(n, s) {
    const e = {};
    for (const i of s)
        e[i] = n[i];
    return e
}
const M = (n,s)=>{
    const e = n.__vccOpts || n;
    for (const [i,t] of s)
        e[i] = t;
    return e
}
  , E = ["header_research", "header_api", "header_chatgpt", "header_safety", "header_company", "header_quicklinks"]
  , T = ["footer_research", "footer_api", "footer_chatgpt", "footer_company", "footer_additional"]
  , F = [...E, ...T]
  , I = ["Research", "API", "ChatGPT", "Safety", "Company"]
  , R = ["Research", "API", "ChatGPT", "Company"]
  , b = {
    twitter: "Twitter",
    youtube: "YouTube",
    github: "GitHub",
    soundcloud: "SoundCloud",
    linkedin: "LinkedIn",
    facebook: "Facebook"
}
  , P = ()=>h("navigation", ()=>({}));
function D(n, s=!1) {
    const {$helpers: e} = p()
      , i = s ? I : R;
    return n.map((t,a)=>{
        var l;
        return s && e.buckets.navigationLinks(t).length === 1 ? {
            title: i[a],
            url: (l = e.buckets.navigationLink(t[0])) == null ? void 0 : l.url,
            items: []
        } : {
            title: i[a],
            items: e.buckets.navigationLinks(t)
        }
    }
    )
}
const U = n=>{
    const s = P()
      , {$helpers: e} = p();
    let i, t, a, l;
    try {
        i = E.map(u=>e.buckets.byKey(n, u)),
        t = T.map(u=>e.buckets.byKey(n, u)),
        a = i.pop(),
        l = t.pop(),
        s.value.header = D(i, !0),
        s.value.footer = D(t),
        s.value.quicklinks = e.buckets.navigationLinks(a),
        s.value.tertiary = e.buckets.navigationLinks(l)
    } catch (u) {
        console.log("Error deserializing navigation items.", u)
    }
}
  , Y = n=>{
    const s = P();
    s.value.social = n.map(e=>b[e.key] && {
        text: b[e.key],
        url: e.value
    }).filter(e=>e !== null && e.url !== null)
}
  , q = ()=>h("page-theme", ()=>"light-gray")
  , G = ()=>h("page-transition", ()=>"simple");
export {F as B, M as _, Y as a, A as b, H as c, G as d, q as e, U as s, P as u};
