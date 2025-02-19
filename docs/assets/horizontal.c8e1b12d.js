import{_ as P}from"./preload-helper.101896b7.js";import{d as b,a6 as V,r as F,a8 as k,a7 as N,O as j,c as W,a9 as q,o as G,ay as U,S as l,e as a,f as p,z as i,m as r,F as y,B as Y,l as C,g as L,y as f,u as g,C as J,x as S,G as R,H as K}from"./vue.72f2672d.js";import{u as Q}from"./routesList.3cbee093.js";import{u as X}from"./themeConfig.598b93cc.js";import{o as Z}from"./other.3aeebb6f.js";import{e as ee}from"./mitt.7f99bbc0.js";import{_ as te}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.41e0794f.js";import"./index.62438508.js";import"./_commonjsHelpers.042e6b4d.js";import"./index.41c8da86.js";import"./keepAliveNames.8ff91aac.js";import"./storage.6b2e7cd0.js";import"./userInfo.8056b3db.js";import"./http-client.193f2c5b.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./loading.3dc30912.js";import"./tagsViewRoutes.1cd20f40.js";import"./tree.d5b28a07.js";import"./index.df3e82f5.js";import"./vue-i18n.cjs.d9dfdcc6.js";import"./vue.runtime.esm-bundler.2c939456.js";import"./toolsValidate.7cb139e2.js";const ne={class:"el-menu-horizontal-warp"},oe=b({name:"navMenuHorizontal"}),se=b({...oe,props:{menuList:{type:Array,default:()=>[]}},setup(z){const x=z,A=V(()=>P(()=>import("./subItem.e5a123e6.js"),["assets/subItem.e5a123e6.js","assets/vue.72f2672d.js","assets/other.3aeebb6f.js","assets/preload-helper.101896b7.js","assets/index.41e0794f.js","assets/index.62438508.js","assets/_commonjsHelpers.042e6b4d.js","assets/index.41c8da86.js","assets/keepAliveNames.8ff91aac.js","assets/routesList.3cbee093.js","assets/themeConfig.598b93cc.js","assets/storage.6b2e7cd0.js","assets/userInfo.8056b3db.js","assets/http-client.193f2c5b.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/loading.3dc30912.js","assets/loading.62a39020.css","assets/tagsViewRoutes.1cd20f40.js","assets/tree.d5b28a07.js","assets/index.8b89e2e0.css","assets/index.df3e82f5.js","assets/vue-i18n.cjs.d9dfdcc6.js","assets/vue.runtime.esm-bundler.2c939456.js","assets/toolsValidate.7cb139e2.js"])),c=F(),M=Q(),$=X(),{routesList:v}=k(M),{themeConfig:d}=k($),w=N(),u=j({defaultActive:""}),H=W(()=>x.menuList),B=n=>{const e=n.wheelDelta||-n.deltaY*40;c.value.$refs.wrapRef.scrollLeft=c.value.$refs.wrapRef.scrollLeft+e/4},D=()=>{K(()=>{let n=document.querySelector(".el-menu.el-menu--horizontal li.is-active");if(!n)return!1;c.value.$refs.wrapRef.scrollLeft=n.offsetLeft})},_=n=>n.filter(e=>{var t;return!((t=e.meta)!=null&&t.isHide)}).map(e=>(e=Object.assign({},e),e.children&&(e.children=_(e.children)),e)),I=n=>{const e=n.split("/");let t={children:[]};return _(v.value).map((s,m)=>{s.path===`/${e[1]}`&&(s.k=m,t.item={...s},t.children=[{...s}],s.children&&(t.children=s.children))}),t},h=n=>{const{path:e,meta:t}=n;if(d.value.layout==="classic")u.defaultActive=`/${e==null?void 0:e.split("/")[1]}`;else{const s=t!=null&&t.isDynamic?t.isDynamicPath.split("/"):e.split("/");s.length>=4&&(t!=null&&t.isHide)?u.defaultActive=s.splice(0,3).join("/"):u.defaultActive=e}},T=n=>{Z.handleOpenLink(n)};return q(()=>{h(w)}),G(()=>{D()}),U(n=>{h(n);let{layout:e,isClassicSplitMenu:t}=d.value;e==="classic"&&t&&ee.emit("setSendClassicChildren",I(n.path))}),(n,e)=>{const t=l("SvgIcon"),s=l("el-sub-menu"),m=l("el-menu-item"),E=l("el-menu"),O=l("el-scrollbar");return a(),p("div",ne,[i(O,{onWheel:R(B,["prevent"]),ref_key:"elMenuHorizontalScrollRef",ref:c},{default:r(()=>[i(E,{router:"","default-active":u.defaultActive,ellipsis:!1,"background-color":"transparent",mode:"horizontal"},{default:r(()=>[(a(!0),p(y,null,Y(g(H),o=>(a(),p(y,null,[o.children&&o.children.length>0?(a(),C(s,{index:o.path,key:o.path},{title:r(()=>[i(t,{name:o.meta.icon},null,8,["name"]),L("span",null,f(n.$t(o.meta.title)),1)]),default:r(()=>[i(g(A),{chil:o.children},null,8,["chil"])]),_:2},1032,["index"])):(a(),C(m,{index:o.path,key:o.path},J({_:2},[!o.meta.isLink||o.meta.isLink&&o.meta.isIframe?{name:"title",fn:r(()=>[i(t,{name:o.meta.icon},null,8,["name"]),S(" "+f(n.$t(o.meta.title)),1)]),key:"0"}:{name:"title",fn:r(()=>[L("a",{class:"w100",onClick:R(ie=>T(o),["prevent"])},[i(t,{name:o.meta.icon},null,8,["name"]),S(" "+f(n.$t(o.meta.title)),1)],8,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active"])]),_:1},8,["onWheel"])])}}});const ve=te(se,[["__scopeId","data-v-10bb07cc"]]);export{ve as default};
