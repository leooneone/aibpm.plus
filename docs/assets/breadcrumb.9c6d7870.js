import{d as L,a8 as C,a7 as T,av as R,O as $,c as E,o as z,ay as G,S as p,u as c,e as o,f as n,z as d,m as b,$ as M,F as D,B as O,l as f,t as _,y as h,G as U,x as j}from"./vue.df334614.js";import{L as S}from"./storage.6b2e7cd0.js";import{o as q}from"./other.baae8c88.js";import{u as A}from"./themeConfig.daf39624.js";import{u as H}from"./routesList.80280d49.js";import{_ as J}from"./_plugin-vue_export-helper.c27b6911.js";import"./preload-helper.101896b7.js";import"./index.4621962e.js";import"./index.ca899092.js";import"./_commonjsHelpers.042e6b4d.js";import"./index.10529e3b.js";import"./keepAliveNames.ba28b324.js";import"./userInfo.fd51b0f3.js";import"./http-client.28a8ff7a.js";import"./index.de963593.js";import"./index.390778f0.js";import"./loading.4205d903.js";import"./tagsViewRoutes.b87c241a.js";import"./tree.d5b28a07.js";import"./index.1b76e59f.js";import"./vue-i18n.cjs.89c19b83.js";import"./vue.runtime.esm-bundler.7d88586f.js";import"./toolsValidate.7cb139e2.js";const K={key:0,class:"layout-navbars-breadcrumb"},P={key:0,class:"layout-navbars-breadcrumb-span"},Q={key:1},W={key:2},X=["onClick"],Y=L({name:"layoutBreadcrumb"}),Z=L({...Y,setup(ee){const k=H(),B=A(),{themeConfig:s}=C(B),{routesList:x}=C(k),m=T(),g=R(),e=$({breadcrumbList:[],routeSplit:[],routeSplitFirst:"",routeSplitIndex:1}),I=E(()=>{u(m.path);const{layout:t,isBreadcrumb:a}=s.value;return t==="classic"||t==="transverse"?!1:!!a}),w=t=>{const{redirect:a,path:i}=t;a?g.push(a):g.push(i)},N=()=>{s.value.isCollapse=!s.value.isCollapse,V()},V=()=>{S.remove("themeConfig"),S.set("themeConfig",s.value)},y=t=>{t.forEach(a=>{e.routeSplit.forEach((i,v,l)=>{e.routeSplitFirst===a.path&&(e.routeSplitFirst+=`/${l[e.routeSplitIndex]}`,e.breadcrumbList.push(a),e.routeSplitIndex++,a.children&&y(a.children))})})},u=t=>{if(!s.value.isBreadcrumb)return!1;e.breadcrumbList=[],e.routeSplit=t.split("/"),e.routeSplit.shift(),e.routeSplitFirst=`/${e.routeSplit[0]}`,e.routeSplitIndex=1,y(x.value),(m.name==="home"||m.name==="notFound"&&e.breadcrumbList.length>1)&&e.breadcrumbList.shift(),e.breadcrumbList.length>0&&(e.breadcrumbList[e.breadcrumbList.length-1].meta.tagsViewName=q.setTagsViewNameI18n(m))};return z(()=>{u(m.path)}),G(t=>{u(t.path)}),(t,a)=>{const i=p("SvgIcon"),v=p("el-breadcrumb-item"),l=p("el-breadcrumb");return c(I)?(o(),n("div",K,[d(i,{class:"layout-navbars-breadcrumb-icon",name:c(s).isCollapse?"ele-Expand":"ele-Fold",size:16,onClick:N},null,8,["name"]),d(l,{class:"layout-navbars-breadcrumb-hide"},{default:b(()=>[d(M,{name:"breadcrumb"},{default:b(()=>[(o(!0),n(D,null,O(e.breadcrumbList,(r,F)=>(o(),f(v,{key:r.meta.tagsViewName?r.meta.tagsViewName:r.meta.title},{default:b(()=>[F===e.breadcrumbList.length-1?(o(),n("span",P,[c(s).isBreadcrumbIcon?(o(),f(i,{key:0,name:r.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):_("",!0),r.meta.tagsViewName?(o(),n("div",W,h(r.meta.tagsViewName),1)):(o(),n("div",Q,h(t.$t(r.meta.title)),1))])):(o(),n("a",{key:1,onClick:U(te=>w(r),["prevent"])},[c(s).isBreadcrumbIcon?(o(),f(i,{key:0,name:r.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):_("",!0),j(h(t.$t(r.meta.title)),1)],8,X))]),_:2},1024))),128))]),_:1})]),_:1})])):_("",!0)}}});const Be=J(Z,[["__scopeId","data-v-f7692345"]]);export{Be as default};
