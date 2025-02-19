import{_ as i}from"./preload-helper.101896b7.js";import{d as L,a6 as c,a8 as p,a7 as D,O,c as d,o as V,P as A,e as _,f as z,u as o,l as h,t as b,z as v,n as M}from"./vue.72f2672d.js";import{u as w}from"./routesList.3cbee093.js";import{u as H}from"./themeConfig.598b93cc.js";import{e as m}from"./mitt.7f99bbc0.js";import{_ as N}from"./_plugin-vue_export-helper.c27b6911.js";const U=L({name:"layoutBreadcrumbIndex"}),j=L({...U,setup($){const C=c(()=>i(()=>import("./breadcrumb.ffb0b00c.js"),["assets/breadcrumb.ffb0b00c.js","assets/vue.72f2672d.js","assets/storage.6b2e7cd0.js","assets/other.5cfa67ff.js","assets/preload-helper.101896b7.js","assets/index.41e0794f.js","assets/index.9dfac91a.js","assets/_commonjsHelpers.042e6b4d.js","assets/index.41c8da86.js","assets/keepAliveNames.8ff91aac.js","assets/routesList.3cbee093.js","assets/themeConfig.598b93cc.js","assets/userInfo.8056b3db.js","assets/http-client.193f2c5b.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/loading.3dc30912.js","assets/loading.62a39020.css","assets/tagsViewRoutes.1cd20f40.js","assets/tree.d5b28a07.js","assets/index.8b89e2e0.css","assets/index.df3e82f5.js","assets/vue-i18n.cjs.d9dfdcc6.js","assets/vue.runtime.esm-bundler.2c939456.js","assets/toolsValidate.7cb139e2.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/breadcrumb.8c953ca4.css"])),y=c(()=>i(()=>import("./user.b33af2f6.js"),["assets/user.b33af2f6.js","assets/preload-helper.101896b7.js","assets/vue.72f2672d.js","assets/vue-i18n.cjs.d9dfdcc6.js","assets/_commonjsHelpers.042e6b4d.js","assets/vue.runtime.esm-bundler.2c939456.js","assets/userInfo.8056b3db.js","assets/storage.6b2e7cd0.js","assets/http-client.193f2c5b.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/index.41e0794f.js","assets/themeConfig.598b93cc.js","assets/other.5cfa67ff.js","assets/index.9dfac91a.js","assets/index.41c8da86.js","assets/keepAliveNames.8ff91aac.js","assets/routesList.3cbee093.js","assets/loading.3dc30912.js","assets/loading.62a39020.css","assets/tagsViewRoutes.1cd20f40.js","assets/tree.d5b28a07.js","assets/index.8b89e2e0.css","assets/index.df3e82f5.js","assets/toolsValidate.7cb139e2.js","assets/mitt.7f99bbc0.js","assets/index.bcf39767.js","assets/index.eead254e.js","assets/focus-trap.c8a23a9c.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/user.fe613b98.css"])),F=c(()=>i(()=>import("./index.a567c299.js"),["assets/index.a567c299.js","assets/vue.72f2672d.js","assets/themeConfig.598b93cc.js","assets/logo-mini.2186a579.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/index.a7c9f5f1.css"])),g=c(()=>i(()=>import("./horizontal.c4be2e06.js"),["assets/horizontal.c4be2e06.js","assets/preload-helper.101896b7.js","assets/vue.72f2672d.js","assets/routesList.3cbee093.js","assets/themeConfig.598b93cc.js","assets/other.5cfa67ff.js","assets/index.41e0794f.js","assets/index.9dfac91a.js","assets/_commonjsHelpers.042e6b4d.js","assets/index.41c8da86.js","assets/keepAliveNames.8ff91aac.js","assets/storage.6b2e7cd0.js","assets/userInfo.8056b3db.js","assets/http-client.193f2c5b.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/loading.3dc30912.js","assets/loading.62a39020.css","assets/tagsViewRoutes.1cd20f40.js","assets/tree.d5b28a07.js","assets/index.8b89e2e0.css","assets/index.df3e82f5.js","assets/vue-i18n.cjs.d9dfdcc6.js","assets/vue.runtime.esm-bundler.2c939456.js","assets/toolsValidate.7cb139e2.js","assets/mitt.7f99bbc0.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/horizontal.1f655cd1.css"])),x=w(),R=H(),{themeConfig:r}=p(R),{routesList:u}=p(x),S=D(),l=O({menuList:[]}),T=d(()=>{const{topBar:t}=r.value;return[["#FFFFFF","#FFF","#fff","#ffffff"].includes(t)?"":"layout-navbars-breadcrumb-index-no-bb"]}),B=d(()=>{let{isShowLogo:t,layout:e}=r.value;return t&&e==="classic"||t&&e==="transverse"}),E=d(()=>{let{layout:t,isClassicSplitMenu:e}=r.value;return t==="transverse"||e&&t==="classic"}),f=()=>{let{layout:t,isClassicSplitMenu:e}=r.value;if(t==="classic"&&e){l.menuList=I(a(u.value));const s=P(S.path);m.emit("setSendClassicChildren",s)}else l.menuList=a(u.value)},I=t=>(t.map(e=>{e.children&&delete e.children}),t),a=t=>t.filter(e=>{var s;return!((s=e.meta)!=null&&s.isHide)}).map(e=>(e=Object.assign({},e),e.children&&(e.children=a(e.children)),e)),P=t=>{const e=t.split("/");let s={children:[]};return a(u.value).map((n,k)=>{n.path===`/${e[1]}`&&(n.k=k,s.item={...n},s.children=[{...n}],n.children&&(s.children=n.children))}),s};return V(()=>{f(),m.on("getBreadcrumbIndexSetFilterRoutes",()=>{f()})}),A(()=>{m.off("getBreadcrumbIndexSetFilterRoutes",()=>{})}),(t,e)=>(_(),z("div",{class:M(["layout-navbars-breadcrumb-index",o(T)])},[o(B)?(_(),h(o(F),{key:0})):b("",!0),v(o(C)),o(E)?(_(),h(o(g),{key:1,menuList:l.menuList},null,8,["menuList"])):b("",!0),v(o(y))],2))}});const X=N(j,[["__scopeId","data-v-43279932"]]);export{X as default};
