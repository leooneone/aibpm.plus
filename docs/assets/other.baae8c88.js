import{_ as d}from"./preload-helper.101896b7.js";import{N}from"./index.4621962e.js";import{r as a}from"./index.ca899092.js";import{p as l}from"./index.10529e3b.js";import{a6 as b,a8 as c,H as p}from"./vue.df334614.js";import{u as m}from"./themeConfig.daf39624.js";import{i as u}from"./index.1b76e59f.js";import{L as C}from"./storage.6b2e7cd0.js";import{v as S}from"./toolsValidate.7cb139e2.js";const V=b(()=>d(()=>import("./index.59cd34f7.js"),["assets/index.59cd34f7.js","assets/vue.df334614.js"]));function T(t){const o=N;for(const e in o)t.component(`ele-${o[e].name}`,o[e]);t.component("SvgIcon",V)}function v(){const t=m(l),{themeConfig:o}=c(t);p(()=>{let e="",n=o.value.globalTitle;const{path:i,meta:s}=a.currentRoute.value;i==="/login"?e=s.title:e=w(a.currentRoute.value),document.title=`${e} - ${n}`||n})}function w(t){let o="";const{query:e,params:n,meta:i}=t;return e!=null&&e.tagsViewName||n!=null&&n.tagsViewName?/\/zh-cn|en|zh-tw\//.test(e==null?void 0:e.tagsViewName)||/\/zh-cn|en|zh-tw\//.test(n==null?void 0:n.tagsViewName)?o=((e==null?void 0:e.tagsViewName)&&JSON.parse(e==null?void 0:e.tagsViewName)||(n==null?void 0:n.tagsViewName)&&JSON.parse(n==null?void 0:n.tagsViewName))[u.global.locale.value]:o=(e==null?void 0:e.tagsViewName)||(n==null?void 0:n.tagsViewName):o=u.global.t(i.title),o}const z=(t,o)=>{const e=new IntersectionObserver(n=>{n.forEach(i=>{if(i.isIntersecting){const{img:s,key:r}=i.target.dataset;i.target.src=s,i.target.onload=()=>{e.unobserve(i.target),o[r].loading=!1}}})});p(()=>{document.querySelectorAll(t).forEach(n=>e.observe(n))})},I=()=>{var e,n;const t=m(l),{themeConfig:o}=c(t);return((e=C.get("themeConfig"))==null?void 0:e.globalComponentSize)||((n=o.value)==null?void 0:n.globalComponentSize)};function h(t){let o;try{o=t.push?[]:{}}catch{o={}}for(let e in t)t[e]&&typeof t[e]=="object"?o[e]=h(t[e]):o[e]=t[e];return o}function k(){return!!navigator.userAgent.match(/('phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone')/i)}function L(t){const o=[];for(const e in t){const n=[];for(const s in t[e])n.push(t[e][s]);n.filter(s=>s==="").length!==n.length&&o.push(t[e])}return o}function O(t){var s,r,g,f;const o=m(l),{themeConfig:e}=c(o),{origin:n,pathname:i}=window.location;a.push(t.path),S((s=t.meta)==null?void 0:s.isLink)?window.open((r=t.meta)==null?void 0:r.isLink):e.value.isCreateWebHistory?window.open(`${n}${(g=t.meta)==null?void 0:g.isLink}`):window.open(`${n}${i}#${(f=t.meta)==null?void 0:f.isLink}`)}const J={elSvg:t=>{T(t)},useTitle:()=>{v()},setTagsViewNameI18n(t){return w(t)},lazyImg:(t,o)=>{z(t,o)},globalComponentSize:()=>I(),deepClone:t=>h(t),isMobile:()=>k(),handleEmpty:t=>L(t),handleOpenLink:t=>{O(t)}};export{J as o};
