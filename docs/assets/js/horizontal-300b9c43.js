import{_ as T}from"./ai-form-3baf0d65.js";import{k as L,R as v,l as w,j as E,E as M,m as l,o as s,c as u,p as r,y as a,F as h,H as P,D as k,a as C,v as p,u as V,a0 as j,G as y,Y as F}from"./@vue-8306d5ee.js";import{u as N,o as O}from"./vue-router-c9c3da21.js";import{s as g}from"./pinia-e84f6aa2.js";import{d as G,u as U,o as Y,e as q,_ as J}from"./index-1c0db287.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-demi-71ba0ef2.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const K={class:"el-menu-horizontal-warp"},Q=L({name:"navMenuHorizontal"}),W=L({...Q,props:{menuList:{type:Array,default:()=>[]}},setup(S){const A=S,R=v(()=>T(()=>import("./subItem-e6a15b9a.js"),["assets/js/subItem-e6a15b9a.js","assets/js/@vue-8306d5ee.js","assets/js/index-1c0db287.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css"])),b=G(),x=U(),{routesList:B}=g(b),{themeConfig:d}=g(x),D=N(),c=w({defaultActive:""}),I=E(()=>A.menuList),_=o=>o.filter(t=>{var e;return!((e=t.meta)!=null&&e.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=_(t.children)),t)),$=o=>{const t=o.split("/");let e={children:[]};return _(B.value).map((i,m)=>{i.path===`/${t[1]}`&&(i.k=m,e.item={...i},e.children=[{...i}],i.children&&(e.children=i.children))}),e},f=o=>{const{path:t,meta:e}=o;if(d.value.layout==="classic")c.defaultActive=`/${t==null?void 0:t.split("/")[1]}`;else{const i=e!=null&&e.isDynamic?e.isDynamicPath.split("/"):t.split("/");i.length>=4&&(e!=null&&e.isHide)?c.defaultActive=i.splice(0,3).join("/"):c.defaultActive=t}},z=o=>{Y.handleOpenLink(o)};return M(()=>{f(D)}),O(o=>{f(o);let{layout:t,isClassicSplitMenu:e}=d.value;t==="classic"&&e&&q.emit("setSendClassicChildren",$(o.path))}),(o,t)=>{const e=l("SvgIcon"),i=l("el-sub-menu"),m=l("el-menu-item"),H=l("el-menu");return s(),u("div",K,[r(H,{router:"","default-active":c.defaultActive,"background-color":"transparent",mode:"horizontal"},{default:a(()=>[(s(!0),u(h,null,P(I.value,n=>(s(),u(h,null,[n.children&&n.children.length>0?(s(),k(i,{index:n.path,key:n.path},{title:a(()=>[r(e,{name:n.meta.icon},null,8,["name"]),C("span",null,p(o.$t(n.meta.title)),1)]),default:a(()=>[r(V(R),{chil:n.children},null,8,["chil"])]),_:2},1032,["index"])):(s(),k(m,{index:n.path,key:n.path},j({_:2},[!n.meta.isLink||n.meta.isLink&&n.meta.isIframe?{name:"title",fn:a(()=>[r(e,{name:n.meta.icon},null,8,["name"]),y(" "+p(o.$t(n.meta.title)),1)]),key:"0"}:{name:"title",fn:a(()=>[C("a",{class:"w100",onClick:F(X=>z(n),["prevent"])},[r(e,{name:n.meta.icon},null,8,["name"]),y(" "+p(o.$t(n.meta.title)),1)],8,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active"])])}}});const be=J(W,[["__scopeId","data-v-074623bf"]]);export{be as default};
