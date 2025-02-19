import{k as R,e as H,l as U,j as z,i as E,A as q,f as G,m as I,M as J,N as K,u as a,o as u,c as m,a as c,x as Q,p as v,y as W,F as X,H as Y,I as C,v as $,n as Z}from"./@vue-8306d5ee.js";import{u as ee,d as te,o as se}from"./vue-router-c9c3da21.js";import{s as _}from"./pinia-e84f6aa2.js";import{d as oe,u as ne,b as le,e as r,p as ie,_ as re}from"./index-c27e5712.js";import{l as ae}from"./logo-mini-7320876a.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-97a12f88.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const ue={class:"layout-columns-aside my-flex-column"},me={key:0,class:"layout-logo"},ce=["src"],de=["onClick","onMouseenter","title"],fe={class:"columns-vertical-title font12"},pe=["href"],he={class:"columns-vertical-title font12"},Ce=R({name:"layoutColumnsAside"}),ve=R({...Ce,setup(_e){const g=H([]),y=H(),p=oe(),k=ne(),x=le(),{routesList:O,isColumnsMenuHover:w,isColumnsNavHover:T}=_(p),{themeConfig:l}=_(k),{isTagsViewCurrenFull:b}=_(x),A=ee(),S=te(),s=U({columnsAsideList:[],liIndex:0,liOldIndex:null,liHoverIndex:null,liOldPath:null,difference:0,routeSplit:[]}),D=z(()=>{let{layout:e,isShowLogo:t}=l.value;return t&&e==="defaults"||t&&e==="columns"}),N=e=>{if(e===void 0)return!1;s.liIndex=e,y.value.style.top=`${g.value[e].offsetTop+s.difference}px`},P=async e=>{let{path:t,redirect:n}=e;n?S.push(n):S.push(t)},F=(e,t)=>{if(!l.value.isColumnsMenuHoverPreload)return!1;let{path:n}=e;s.liOldPath=n,s.liOldIndex=t,s.liHoverIndex=t,r.emit("setSendColumnsChildren",d(n)),p.setColumnsMenuHover(!1),p.setColumnsNavHover(!0)},V=async()=>{if(!l.value.isColumnsMenuHoverPreload)return!1;await p.setColumnsNavHover(!1),setTimeout(()=>{!w&&!T&&r.emit("restoreDefault")},100)},L=e=>{Z(()=>{N(e)})},B=()=>{var t;s.columnsAsideList=M(O.value);const e=d(A.path);if(Object.keys(e).length<=0)return!1;L((t=e.item)==null?void 0:t.k),!e.children||e.children.length<1?l.value.isCollapse=!0:l.value.isCollapse=!1,r.emit("setSendColumnsChildren",e)},d=e=>{const t=e.split("/");let n={children:[]};return s.columnsAsideList.map((i,o)=>{i.path===`/${t[1]}`&&(i.k=o,n.item={...i},n.children=[{...i}],i.children&&(n.children=i.children))}),n},M=e=>e.filter(t=>{var n;return!((n=t.meta)!=null&&n.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=M(t.children)),t)),j=e=>{s.routeSplit=e.split("/"),s.routeSplit.shift();const t=`/${s.routeSplit[0]}`,n=s.columnsAsideList.find(i=>i.path===t);if(!n)return!1;setTimeout(()=>{L(n.k)},0)};return E(()=>{B(),r.on("restoreDefault",()=>{s.liOldIndex=null,s.liOldPath=null})}),q(()=>{r.off("restoreDefault",()=>{})}),se(e=>{j(e.path),r.emit("setSendColumnsChildren",d(e.path))}),G(ie.state,e=>{if(e.themeConfig.themeConfig.columnsAsideStyle==="columnsRound"?s.difference=3:s.difference=0,!e.routesList.isColumnsMenuHover&&!e.routesList.isColumnsNavHover)s.liHoverIndex=null,r.emit("setSendColumnsChildren",d(A.path));else{if(s.liHoverIndex=s.liOldIndex,!s.liOldPath)return!1;r.emit("setSendColumnsChildren",d(s.liOldPath))}},{deep:!0}),(e,t)=>{const n=I("SvgIcon"),i=I("el-scrollbar");return J((u(),m("div",ue,[D.value?(u(),m("div",me,[c("img",{src:a(ae),class:"layout-logo-medium-img"},null,8,ce)])):Q("",!0),v(i,{class:"my-flex-fill"},{default:W(()=>[c("ul",{onMouseleave:t[0]||(t[0]=o=>V())},[(u(!0),m(X,null,Y(s.columnsAsideList,(o,f)=>(u(),m("li",{key:f,onClick:h=>P(o),onMouseenter:h=>F(o,f),ref_for:!0,ref:h=>{h&&(g.value[f]=h)},class:C({"layout-columns-active":s.liIndex===f,"layout-columns-hover":s.liHoverIndex===f}),title:e.$t(o.meta.title)},[!o.meta.isLink||o.meta.isLink&&o.meta.isIframe?(u(),m("div",{key:0,class:C(a(l).columnsAsideLayout)},[v(n,{name:o.meta.icon},null,8,["name"]),c("div",fe,$(e.$t(o.meta.title)&&e.$t(o.meta.title).length>=4?e.$t(o.meta.title).substr(0,a(l).columnsAsideLayout==="columns-vertical"?4:3):e.$t(o.meta.title)),1)],2)):(u(),m("div",{key:1,class:C(a(l).columnsAsideLayout)},[c("a",{href:o.meta.isLink,target:"_blank"},[v(n,{name:o.meta.icon},null,8,["name"]),c("div",he,$(e.$t(o.meta.title)&&e.$t(o.meta.title).length>=4?e.$t(o.meta.title).substr(0,a(l).columnsAsideLayout==="columns-vertical"?4:3):e.$t(o.meta.title)),1)],8,pe)],2))],42,de))),128)),c("div",{ref_key:"columnsAsideActiveRef",ref:y,class:C(a(l).columnsAsideStyle)},null,2)],32)]),_:1})],512)),[[K,!a(b)]])}}});const Ge=re(ve,[["__scopeId","data-v-a2483824"]]);export{Ge as default};
