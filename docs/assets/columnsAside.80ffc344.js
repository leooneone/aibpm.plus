import{d as k,r as I,a8 as M,a7 as V,av as j,O as z,c as U,o as E,P as q,ay as G,w as J,S as $,e as c,f as m,u,g as d,t as K,z as _,m as Q,F as W,B as X,n as C,y as O,H as Y}from"./vue.72f2672d.js";import{p as Z}from"./index.41c8da86.js";import{u as ee}from"./routesList.3cbee093.js";import{u as te}from"./themeConfig.598b93cc.js";import{e as i}from"./mitt.7f99bbc0.js";import{l as se}from"./logo-mini.2186a579.js";import{_ as oe}from"./_plugin-vue_export-helper.c27b6911.js";const ne={class:"layout-columns-aside my-flex-column"},le={key:0,class:"layout-logo"},ie=["src"],ae=["onClick","onMouseenter","title"],ue={class:"columns-vertical-title font12"},re=["href"],ce={class:"columns-vertical-title font12"},me=k({name:"layoutColumnsAside"}),de=k({...me,setup(fe){const v=I([]),y=I(),h=ee(),x=te(),{routesList:R,isColumnsMenuHover:P,isColumnsNavHover:T}=M(h),{themeConfig:a}=M(x),g=V(),A=j(),s=z({columnsAsideList:[],liIndex:0,liOldIndex:null,liHoverIndex:null,liOldPath:null,difference:0,routeSplit:[]}),b=U(()=>{let{layout:e,isShowLogo:t}=a.value;return t&&e==="defaults"||t&&e==="columns"}),S=e=>{s.liIndex=e,y.value.style.top=`${v.value[e].offsetTop+s.difference}px`},w=(e,t)=>{S(t);let{path:n,redirect:l}=e;l?A.push(l):A.push(n)},D=(e,t)=>{if(!a.value.isColumnsMenuHoverPreload)return!1;let{path:n}=e;s.liOldPath=n,s.liOldIndex=t,s.liHoverIndex=t,i.emit("setSendColumnsChildren",f(n)),h.setColumnsMenuHover(!1),h.setColumnsNavHover(!0)},N=async()=>{await h.setColumnsNavHover(!1),setTimeout(()=>{!P&&!T&&i.emit("restoreDefault")},100)},L=e=>{Y(()=>{S(e)})},B=()=>{var t;s.columnsAsideList=H(R.value);const e=f(g.path);if(Object.keys(e).length<=0)return!1;L((t=e.item)==null?void 0:t.k),i.emit("setSendColumnsChildren",e)},f=e=>{const t=e.split("/");let n={children:[]};return s.columnsAsideList.map((l,o)=>{l.path===`/${t[1]}`&&(l.k=o,n.item={...l},n.children=[{...l}],l.children&&(n.children=l.children))}),n},H=e=>e.filter(t=>{var n;return!((n=t.meta)!=null&&n.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=H(t.children)),t)),F=e=>{s.routeSplit=e.split("/"),s.routeSplit.shift();const t=`/${s.routeSplit[0]}`,n=s.columnsAsideList.find(l=>l.path===t);if(!n)return!1;setTimeout(()=>{L(n.k)},0)};return E(()=>{B(),i.on("restoreDefault",()=>{s.liOldIndex=null,s.liOldPath=null})}),q(()=>{i.off("restoreDefault",()=>{})}),G(e=>{F(e.path),i.emit("setSendColumnsChildren",f(e.path))}),J(Z.state,e=>{if(e.themeConfig.themeConfig.columnsAsideStyle==="columnsRound"?s.difference=3:s.difference=0,!e.routesList.isColumnsMenuHover&&!e.routesList.isColumnsNavHover)s.liHoverIndex=null,i.emit("setSendColumnsChildren",f(g.path));else{if(s.liHoverIndex=s.liOldIndex,!s.liOldPath)return!1;i.emit("setSendColumnsChildren",f(s.liOldPath))}},{deep:!0}),(e,t)=>{const n=$("SvgIcon"),l=$("el-scrollbar");return c(),m("div",ne,[u(b)?(c(),m("div",le,[d("img",{src:u(se),class:"layout-logo-medium-img"},null,8,ie)])):K("",!0),_(l,{class:"my-flex-fill"},{default:Q(()=>[d("ul",{onMouseleave:t[0]||(t[0]=o=>N())},[(c(!0),m(W,null,X(s.columnsAsideList,(o,r)=>(c(),m("li",{key:r,onClick:p=>w(o,r),onMouseenter:p=>D(o,r),ref_for:!0,ref:p=>{p&&(v.value[r]=p)},class:C({"layout-columns-active":s.liIndex===r,"layout-columns-hover":s.liHoverIndex===r}),title:e.$t(o.meta.title)},[!o.meta.isLink||o.meta.isLink&&o.meta.isIframe?(c(),m("div",{key:0,class:C(u(a).columnsAsideLayout)},[_(n,{name:o.meta.icon},null,8,["name"]),d("div",ue,O(e.$t(o.meta.title)&&e.$t(o.meta.title).length>=4?e.$t(o.meta.title).substr(0,u(a).columnsAsideLayout==="columns-vertical"?4:3):e.$t(o.meta.title)),1)],2)):(c(),m("div",{key:1,class:C(u(a).columnsAsideLayout)},[d("a",{href:o.meta.isLink,target:"_blank"},[_(n,{name:o.meta.icon},null,8,["name"]),d("div",ce,O(e.$t(o.meta.title)&&e.$t(o.meta.title).length>=4?e.$t(o.meta.title).substr(0,u(a).columnsAsideLayout==="columns-vertical"?4:3):e.$t(o.meta.title)),1)],8,re)],2))],42,ae))),128)),d("div",{ref_key:"columnsAsideActiveRef",ref:y,class:C(u(a).columnsAsideStyle)},null,2)],32)]),_:1})])}}});const Ae=oe(de,[["__scopeId","data-v-34a60942"]]);export{Ae as default};
