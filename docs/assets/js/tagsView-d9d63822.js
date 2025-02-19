import{_ as Re}from"./ai-form-3baf0d65.js";import{k as ie,R as Te,e as S,l as be,j as $,E as _e,A as xe,aq as qe,i as Se,f as De,m as Q,o as d,c as C,p as O,y as Ae,a as Z,I as E,F as ee,H as Ie,Y as R,x as T,D as M,v as ke,u as Pe,n as j}from"./@vue-8306d5ee.js";import{u as Ue,d as $e,o as Oe}from"./vue-router-c9c3da21.js";import{S as Ee}from"./sortablejs-0d19b1d3.js";import{s as N}from"./pinia-e84f6aa2.js";import{b as se,u as Me,d as je,c as Ne,o as ae,e as y,S as V,a1 as te,_ as ve}from"./index-0ce5277f.js";import{a as Be}from"./element-plus-e21f9b5a.js";import"./vue-demi-71ba0ef2.js";import"./vue-i18n-86a71ef1.js";import"./@intlify-869ec77a.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-8ef115d9.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./lodash-es-f559e892.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const He=["data-url","onContextmenu","onMousedown","onClick"],Fe={key:0,class:"iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"},We=ie({name:"layoutTagsView"}),ze=ie({...We,setup(Ke){const ne=Te(()=>Re(()=>import("./contextmenu-6e5a351f.js"),["assets/js/contextmenu-6e5a351f.js","assets/js/@vue-8306d5ee.js","assets/js/index-0ce5277f.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/contextmenu-b2e8059a.css"])),p=S([]),b=S(),v=S(),re=S(),le=se(),ue=Me(),ce=se(),oe=je(),{themeConfig:B}=N(ue),{tagsViewRoutes:H}=N(ce),{routesList:me}=N(oe),h=Ne(),m=Ue(),o=$e(),t=be({routeActive:"",routePath:m.path,dropdown:{x:"",y:""},sortable:"",tagsRefsIndex:0,tagsViewList:[],tagsViewRoutesList:[]}),fe=$(()=>B.value.tagsStyle),u=$(()=>B.value),pe=$(()=>s=>ae.setTagsViewNameI18n(s)),_=s=>u.value.isShareTagsView?s.path===t.routePath:s.query&&Object.keys(s.query).length||s.params&&Object.keys(s.params).length?s.url?s.url===t.routeActive:s.path===t.routeActive:s.path===t.routePath,g=s=>{V.set("tagsViewList",s)},F=async()=>{t.routeActive=await w(m),t.routePath=await m.meta.isDynamic?m.meta.isDynamicPath:m.path,t.tagsViewList=[],t.tagsViewRoutesList=H.value,ge()},ge=async()=>{V.get("tagsViewList")&&u.value.isCacheTagsView?t.tagsViewList=await V.get("tagsViewList"):(await t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}),h.addCachedView(s))}),await D(m.path,m)),G(u.value.isShareTagsView?t.routePath:t.routeActive)},W=async(s,e)=>{var n,l;let a=(n=e==null?void 0:e.meta)!=null&&n.isDynamic?e.meta.isDynamicPath:s;if(t.tagsViewList.filter(r=>{var c,f;return r.path===a&&te((c=e==null?void 0:e.meta)!=null&&c.isDynamic?r.params?r.params:null:r.query?r.query:null,(f=e==null?void 0:e.meta)!=null&&f.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)}).length<=0){let r=t.tagsViewRoutesList.find(c=>c.path===a);if(!r||r.meta.isAffix||r.meta.isLink&&!r.meta.isIframe)return!1;(l=e==null?void 0:e.meta)!=null&&l.isDynamic?r.params=e.params:r.query=e==null?void 0:e.query,r.url=w(r),t.tagsViewList.push({...r}),await h.addCachedView(r),g(t.tagsViewList)}},z=(s,e)=>{var i;let a=(i=e==null?void 0:e.meta)!=null&&i.isDynamic?e.meta.isDynamicPath:s;t.tagsViewList.forEach(n=>{var l,r,c;n.path===a&&!te((l=e==null?void 0:e.meta)!=null&&l.isDynamic?n.params?n.params:null:n.query?n.query:null,(r=e==null?void 0:e.meta)!=null&&r.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)&&((c=e==null?void 0:e.meta)!=null&&c.isDynamic?n.params=e.params:n.query=e==null?void 0:e.query,n.url=w(n),g(t.tagsViewList))})},D=(s,e)=>{var a;(a=e==null?void 0:e.meta)!=null&&a.isDir||j(async()=>{var n,l,r;let i;if((n=e==null?void 0:e.meta)!=null&&n.isDynamic){if(u.value.isShareTagsView?await z(s,e):await W(s,e),t.tagsViewList.some(c=>{var f;return c.path===((f=e==null?void 0:e.meta)==null?void 0:f.isDynamicPath)}))return g(t.tagsViewList),!1;i=t.tagsViewRoutesList.find(c=>{var f;return c.path===((f=e==null?void 0:e.meta)==null?void 0:f.isDynamicPath)})}else{if(u.value.isShareTagsView?await z(s,e):await W(s,e),t.tagsViewList.some(c=>c.path===s))return g(t.tagsViewList),!1;i=t.tagsViewRoutesList.find(c=>c.path===s)}if(!i||(l=i==null?void 0:i.meta)!=null&&l.isLink&&!i.meta.isIframe)return!1;(r=e==null?void 0:e.meta)!=null&&r.isDynamic?i.params=e!=null&&e.params?e==null?void 0:e.params:m.params:i.query=e!=null&&e.query?e==null?void 0:e.query:m.query,i.url=w(i),await h.addCachedView(i),await t.tagsViewList.push({...i}),await g(t.tagsViewList)})},K=async s=>{var i;const e=decodeURI(s);let a={};if(t.tagsViewList.forEach(n=>{n.transUrl=L(n),n.transUrl?n.transUrl===L(n)&&(a=n):n.path===e&&(a=n)}),!a)return!1;await h.delCachedView(a),y.emit("onTagsViewRefreshRouterView",s),(i=a.meta)!=null&&i.isKeepAlive&&h.addCachedView(a)},A=s=>{t.tagsViewList.map((e,a,i)=>{var n;(n=e.meta)!=null&&n.isAffix||(u.value.isShareTagsView?e.path===s:e.url===s)&&(h.delCachedView(e),t.tagsViewList.splice(a,1),setTimeout(()=>{(t.tagsViewList.length===a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)?i[i.length-1].meta.isDynamic?a!==i.length?o.push({name:i[a].name,params:i[a].params}):o.push({name:i[i.length-1].name,params:i[i.length-1].params}):a!==i.length?o.push({path:i[a].path,query:i[a].query}):o.push({path:i[i.length-1].path,query:i[i.length-1].query}):(t.tagsViewList.length!==a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)&&(i[a].meta.isDynamic?o.push({name:i[a].name,params:i[a].params}):o.push({path:i[a].path,query:i[a].query}))},0))}),g(t.tagsViewList)},we=s=>{V.get("tagsViewList")&&(t.tagsViewList=[],V.get("tagsViewList").map(e=>{var a;(a=e.meta)!=null&&a.isAffix&&!e.meta.isHide&&(e.url=w(e),h.delOthersCachedViews(e),t.tagsViewList.push({...e}))}),D(s,m),g(t.tagsViewList))},he=()=>{V.get("tagsViewList")&&(h.delAllCachedViews(),t.tagsViewList=[],V.get("tagsViewList").map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}),o.push({path:t.tagsViewList[t.tagsViewList.length-1].path}))}),g(t.tagsViewList))},de=async s=>{const e=t.tagsViewList.find(a=>u.value.isShareTagsView?a.path===s:a.url===s);e.meta.isDynamic?await o.push({name:e.name,params:e.params}):await o.push({name:e.name,query:e.query}),le.setCurrenFullscreen(!0)},Y=s=>{let e={};return t.tagsViewList.forEach(a=>{a.transUrl=L(a),a.transUrl?a.transUrl===L(a)&&a.transUrl===s.commonUrl&&(e=a):a.path===decodeURI(s.path)&&(e=a)}),e||null},I=async s=>{if(s.commonUrl=L(s),!Y(s))return Be({type:"warning",message:"请正确输入路径及完整参数（query、params）"});const{path:e,name:a,params:i,query:n,meta:l,url:r}=Y(s);switch(s.contextMenuClickId){case 0:l.isDynamic?await o.push({name:a,params:i}):await o.push({path:e,query:n}),K(m.fullPath);break;case 1:A(u.value.isShareTagsView?e:r);break;case 2:l.isDynamic?await o.push({name:a,params:i}):await o.push({path:e,query:n}),we(e);break;case 3:he();break;case 4:de(u.value.isShareTagsView?e:r);break}},ye=(s,e)=>{const{clientX:a,clientY:i}=e;t.dropdown.x=a,t.dropdown.y=i,v.value.openContextmenu(s)},Ve=(s,e)=>{var a;if(!((a=s.meta)!=null&&a.isAffix)&&e.button===1){const i=Object.assign({},{contextMenuClickId:1,...s});I(i)}},Le=(s,e)=>{var a;t.tagsRefsIndex=e,o.push(s),u.value.layout==="columns"&&((a=me.value.find(n=>n.path.indexOf(`/${s.path.split("/")[1]}`)>-1).meta)!=null&&a.isHide?u.value.isCollapse=!0:u.value.isCollapse=!1)},L=s=>{var i,n;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e)return"";let a="";for(let[l,r]of Object.entries(e))(i=s.meta)!=null&&i.isDynamic?a+=`/${r}`:a+=`&${l}=${r}`;return(n=s.meta)!=null&&n.isDynamic?s.isFnClick?decodeURI(s.path):`${s.path.split(":")[0]}${a.replace(/^\//,"")}`:`${s.path}${a.replace(/^&/,"?")}`},w=s=>{var i;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e||Object.keys(e).length<=0)return s.path;let a="";for(let n in e)a+=e[n];return`${(i=s.meta)!=null&&i.isDynamic?s.meta.isDynamicPath:s.path}-${a}`},Ce=s=>{b.value.$refs.wrapRef.scrollLeft+=s.wheelDelta/4},X=()=>{j(()=>{if(p.value.length<=0)return!1;let s=p.value[t.tagsRefsIndex],e=t.tagsRefsIndex,a=p.value.length,i=p.value[0],n=p.value[p.value.length-1],l=b.value.$refs.wrapRef,r=l.scrollWidth,c=l.offsetWidth,f=l.scrollLeft,U=p.value[t.tagsRefsIndex-1],J=p.value[t.tagsRefsIndex+1],x=0,q=0;s===i?l.scrollLeft=0:s===n?l.scrollLeft=r-c:(e===0?x=i.offsetLeft-5:x=(U==null?void 0:U.offsetLeft)-5,e===a?q=n.offsetLeft+n.offsetWidth+5:q=J.offsetLeft+J.offsetWidth+5,q>f+c?l.scrollLeft=q-c:x<f&&(l.scrollLeft=x)),b.value.update()})},G=s=>{j(async()=>{let e=await t.tagsViewList;t.tagsRefsIndex=e.findIndex(a=>u.value.isShareTagsView?a.path===s:a.url===s),X()})},k=async()=>{const s=document.querySelector(".layout-navbars-tagsview-ul");if(!s)return!1;t.sortable.el&&t.sortable.destroy(),t.sortable=Ee.create(s,{animation:300,dataIdAttr:"data-url",disabled:!u.value.isSortableTagsView,onEnd:()=>{const e=[];t.sortable.toArray().map(a=>{t.tagsViewList.map(i=>{i.url===a&&e.push({...i})})}),g(e)}})},P=async()=>{await k(),ae.isMobile()&&t.sortable.el&&t.sortable.destroy()};return _e(()=>{P(),window.addEventListener("resize",P),y.on("onCurrentContextmenuClick",s=>{s.isFnClick=!0,I(s)}),y.on("openOrCloseSortable",()=>{k()}),y.on("openShareTagsView",()=>{u.value.isShareTagsView&&(o.push("/"),t.tagsViewList=[],t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}))}))})}),xe(()=>{y.off("onCurrentContextmenuClick",()=>{}),y.off("openOrCloseSortable",()=>{}),y.off("openShareTagsView",()=>{}),window.removeEventListener("resize",P)}),qe(()=>{p.value=[]}),Se(()=>{F(),k()}),Oe(async s=>{t.routeActive=w(s),t.routePath=s.meta.isDynamic?s.meta.isDynamicPath:s.path,await D(s.path,s),G(u.value.isShareTagsView?t.routePath:t.routeActive)}),De(()=>H.value,s=>{if(s.length===t.tagsViewRoutesList.length)return X(),!1;F()},{deep:!0}),(s,e)=>{const a=Q("SvgIcon"),i=Q("el-scrollbar");return d(),C("div",{class:E(["layout-navbars-tagsview",{"layout-navbars-tagsview-shadow":u.value.layout==="classic"}])},[O(i,{ref_key:"scrollbarRef",ref:b,onWheel:R(Ce,["prevent"])},{default:Ae(()=>[Z("ul",{class:E(["layout-navbars-tagsview-ul",fe.value]),ref_key:"tagsUlRef",ref:re},[(d(!0),C(ee,null,Ie(t.tagsViewList,(n,l)=>(d(),C("li",{key:l,class:E(["layout-navbars-tagsview-ul-li",{"is-active":_(n)}]),"data-url":n.url,onContextmenu:R(r=>ye(n,r),["prevent"]),onMousedown:r=>Ve(n,r),onClick:r=>Le(n,l),ref_for:!0,ref:r=>{r&&(p.value[l]=r)}},[_(n)?(d(),C("i",Fe)):T("",!0),!_(n)&&u.value.isTagsviewIcon?(d(),M(a,{key:1,name:n.meta.icon,class:"pr5"},null,8,["name"])):T("",!0),Z("span",null,ke(pe.value(n)),1),_(n)?(d(),C(ee,{key:2},[O(a,{name:"ele-RefreshRight",class:"ml5 layout-navbars-tagsview-ul-li-refresh",onClick:e[0]||(e[0]=R(r=>K(s.$route.fullPath),["stop"]))}),n.meta.isAffix?T("",!0):(d(),M(a,{key:0,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-active",onClick:R(r=>A(u.value.isShareTagsView?n.path:n.url),["stop"])},null,8,["onClick"]))],64)):T("",!0),n.meta.isAffix?T("",!0):(d(),M(a,{key:3,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-three",onClick:R(r=>A(u.value.isShareTagsView?n.path:n.url),["stop"])},null,8,["onClick"]))],42,He))),128))],2)]),_:1},8,["onWheel"]),O(Pe(ne),{dropdown:t.dropdown,ref_key:"contextmenuRef",ref:v,onCurrentContextmenuClick:I},null,8,["dropdown"])],2)}}});const Cs=ve(ze,[["__scopeId","data-v-57efd619"]]);export{Cs as default};
