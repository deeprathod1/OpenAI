import {_ as w, a as M} from "./Footer.e612ddc8.js";
import {_ as B} from "./Blocks.6a59cbdc.js";
import {u as N, s as P, _ as q} from "./useHeadSeo.47db476e.js";
import {h as T, w as V, y as C, g as H, b as s, o as S, i as $, j as A, m as G, a as m, I, d as R} from "./entry.d1b74521.js";
import {d as j, u as D, b as E} from "./usePageTransition.0d7a0e1d.js";
import {u as b} from "./usePreviewToken.6c04ce29.js";
import {u as z} from "./useErrorPage.1562c747.js";
import "./BlockTimedTabs.vue.683bc8fd.js";
import "./Listing.f43f6a93.js";
import "./slugify.068b7bc9.js";
import "./useResourceIndexData.df29b123.js";
import "./usePageLoading.e8799f9d.js";
import "./lang.4a9029fb.js";
const F = {
    class: "home-blocks"
}
  , ne = {
    __name: "index",
    async setup(J) {
        var d, h;
        let t, c;
        const {$twill: u, $helpers: p} = T()
          , y = j()
          , _ = D()
          , {data: e, error: f} = ([t,c] = V(()=>E("homepage", ()=>{
            const o = u.find("homepages");
            return b().value && o.query("preview", b().value),
            o.fetch()
        }
        , {
            transform: o=>u.transform(o).pop()
        })),
        t = await t,
        c(),
        t);
        z({
            data: e,
            error: f
        }),
        y.value = "simple";
        const i = C(()=>{
            var o, l, n, r, a;
            return {
                blendMode: ((o = e == null ? void 0 : e.value) == null ? void 0 : o.hero.blendMode) ?? "default",
                image: p.media.imageByRole(e == null ? void 0 : e.value, "heroImage", "default"),
                links: (l = e == null ? void 0 : e.value) == null ? void 0 : l.links,
                poster: p.media.imageByRole(e == null ? void 0 : e.value, "heroPoster", "default"),
                title: (n = e == null ? void 0 : e.value) == null ? void 0 : n.description,
                type: (r = e == null ? void 0 : e.value) == null ? void 0 : r.hero.assetType,
                video: ((a = e.value.files.heroVideoSrc) == null ? void 0 : a.length) && e.value.files.heroVideoSrc[0].originalSrc
            }
        }
        );
        return N({
            title: (d = e.value) == null ? void 0 : d.title,
            seo: (h = e.value) == null ? void 0 : h.seo
        }),
        H(()=>{
            P(e == null ? void 0 : e.value)
        }
        ),
        (o,l)=>{
            const n = w
              , r = M
              , a = B
              , x = q;
            return s(f) ? G("", !0) : (S(),
            $(x, {
                key: 0,
                id: "home"
            }, {
                default: A(()=>{
                    var v, g, k;
                    return [m(n, {
                        navigation: (v = s(_)) == null ? void 0 : v.header,
                        quicklinks: ((g = s(_)) == null ? void 0 : g.quicklinks) || [],
                        theme: "dark-gray"
                    }, null, 8, ["navigation", "quicklinks"]), m(r, I({
                        name: "Home"
                    }, s(i), {
                        differenceMode: s(i).blendMode && s(i).blendMode === "difference",
                        template: "Home",
                        theme: s(e).colorTheme
                    }), null, 16, ["differenceMode", "theme"]), R("div", F, [m(a, {
                        blocks: (k = s(e).blocks) == null ? void 0 : k.default,
                        brand: !0
                    }, null, 8, ["blocks"])])]
                }
                ),
                _: 1
            }))
        }
    }
};
export {ne as default};
