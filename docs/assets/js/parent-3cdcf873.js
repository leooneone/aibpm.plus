import{_ as C}from"./ai-form-3baf0d65.js";import{k as K,l as I,j as u,E,n as v,i as P,A as x,f as B,m as D,o as l,c as M,p as i,y as f,af as h,D as _,M as d,N as w,O,aF as S,u as U,R as j}from"./@vue-8306d5ee.js";import{u as F,d as b}from"./vue-router-c9c3da21.js";import{s as R}from"./pinia-e84f6aa2.js";import{c as q,u as z,e as y,S as G}from"./index-1c0db287.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-demi-71ba0ef2.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const H={class:"layout-parent"},J=K({name:"layoutParentView"}),Ke=K({...J,setup(Q){const V=j(()=>C(()=>import("./iframes-6d4f6959.js"),["assets/js/iframes-6d4f6959.js","assets/js/@vue-8306d5ee.js","assets/js/vue-router-c9c3da21.js"])),a=F(),g=b(),A=q(),k=z(),{keepAliveNames:r,cachedViews:p}=R(A),{themeConfig:m}=R(k),e=I({refreshRouterViewKey:"",iframeRefreshKey:"",keepAliveNameList:[],iframeList:[]}),n=u(()=>m.value.animation),L=u(()=>m.value.isTagsview?p.value:e.keepAliveNameList),c=u(()=>a.meta.isIframe),N=async()=>{g.getRoutes().forEach(t=>{t.meta.isIframe&&(t.meta.isIframeOpen=!1,t.meta.loading=!0,e.iframeList.push({...t}))})};return E(()=>{e.keepAliveNameList=r.value,y.on("onTagsViewRefreshRouterView",t=>{e.keepAliveNameList=r.value.filter(s=>a.name!==s),e.refreshRouterViewKey="",e.iframeRefreshKey="",v(()=>{e.refreshRouterViewKey=t,e.iframeRefreshKey=t,e.keepAliveNameList=r.value})})}),P(()=>{N(),v(()=>{setTimeout(()=>{if(m.value.isCacheTagsView){let t=G.get("tagsViewList")||[];p.value=t.filter(s=>{var o;return(o=s.meta)==null?void 0:o.isKeepAlive}).map(s=>s.name)}},0)})}),x(()=>{y.off("onTagsViewRefreshRouterView",()=>{})}),B(()=>a.fullPath,()=>{e.refreshRouterViewKey=decodeURI(a.fullPath)},{immediate:!0}),(t,s)=>{const o=D("router-view");return l(),M("div",H,[i(o,null,{default:f(({Component:T})=>[i(h,{name:n.value,mode:"out-in"},{default:f(()=>[(l(),_(S,{include:L.value},[d((l(),_(O(T),{key:e.refreshRouterViewKey,class:"w100"})),[[w,!c.value]])],1032,["include"]))]),_:2},1032,["name"])]),_:1}),i(h,{name:n.value,mode:"out-in"},{default:f(()=>[d(i(U(V),{class:"w100",refreshKey:e.iframeRefreshKey,name:n.value,list:e.iframeList},null,8,["refreshKey","name","list"]),[[w,c.value]])]),_:1},8,["name"])])}}});export{Ke as default};
