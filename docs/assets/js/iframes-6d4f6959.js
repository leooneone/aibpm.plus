import{k as p,e as y,j as d,f as m,$ as _,o as n,c as o,a as I,F as k,H as w,M as c,p as O,y as v,N as x,X as L,n as R}from"./@vue-8306d5ee.js";import{u as b}from"./vue-router-c9c3da21.js";const B={class:"layout-padding layout-padding-unset layout-iframe"},N={class:"layout-padding-auto layout-padding-view"},P=["src","data-url"],S=p({name:"layoutIframeView"}),C=p({...S,props:{refreshKey:{type:String,default:()=>""},name:{type:String,default:()=>"slide-right"},list:{type:Array,default:()=>[]}},setup(f){const s=f,l=y(),i=b(),h=d(()=>s.list.filter(e=>{var t;return(t=e.meta)==null?void 0:t.isIframeOpen})),g=d(()=>i.path),u=(e,t)=>{R(()=>{if(!l.value)return!1;l.value.forEach(r=>{r.dataset.url===e&&(r.onload=()=>{var a;(a=t.meta)!=null&&a.isIframeOpen&&t.meta.loading&&(t.meta.loading=!1)})})})};return m(()=>i.fullPath,e=>{const t=s.list.find(r=>r.path===e);if(!t)return!1;t.meta.isIframeOpen||(t.meta.isIframeOpen=!0),u(e,t)},{immediate:!0}),m(()=>s.refreshKey,()=>{const e=s.list.find(t=>t.path===i.path);if(!e)return!1;e.meta.isIframeOpen&&(e.meta.isIframeOpen=!1),setTimeout(()=>{e.meta.isIframeOpen=!0,e.meta.loading=!0,u(i.fullPath,e)})},{deep:!0}),(e,t)=>{const r=_("loading");return n(),o("div",B,[I("div",N,[(n(!0),o(k,null,w(h.value,a=>c((n(),o("div",{class:"w100",key:a.path,"element-loading-background":"white"},[O(L,{name:f.name,mode:"out-in"},{default:v(()=>[c((n(),o("iframe",{src:a.meta.isLink,key:a.path,frameborder:"0",height:"100%",width:"100%",style:{position:"absolute"},"data-url":a.path,ref_for:!0,ref_key:"iframeRef",ref:l},null,8,P)),[[x,g.value===a.path]])]),_:2},1032,["name"])])),[[r,a.meta.loading]])),128))])])}}});export{C as default};
