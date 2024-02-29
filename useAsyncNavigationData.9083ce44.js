import {h as i} from "./entry.d1b74521.js";
import {b as a, B as n} from "./usePageTransition.0d7a0e1d.js";
const o = ()=>{
    const {$twill: t} = i();
    return a("navigation", ()=>Promise.all([t.find("features").filter({
        bucketKey: n.join(",")
    }).sort("position").include(["featured.related-items.related", "featured.cta-links"]).fields("research-indices", ["title", "slug"]).fields("research-publications", ["title", "slug"]).fields("landings", ["title", "slug", "scope", "nestedSlug"]).fetch(), t.find("settings").filter({
        section: "social"
    }).fetch()]), {
        transform: ([e,s])=>({
            navigation: t.transform(e),
            social: t.transform(s)
        })
    })
}
;
export {o as u};
