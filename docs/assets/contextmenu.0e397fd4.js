import{d as m,O as g,c as k,o as y,P as v,w as L,S,e as n,l as b,m as I,p as V,v as M,f as a,g as r,F as d,B as E,z as B,y as O,t as T,j as W,u,T as $}from"./vue.72f2672d.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";const D={class:"el-dropdown-menu"},F=["onClick"],N=m({name:"layoutTagsViewContextmenu"}),z=m({...N,props:{dropdown:{type:Object,default:()=>({x:0,y:0})}},emits:["currentContextmenuClick"],setup(p,{expose:f,emit:x}){const o=p,e=g({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"message.tagsView.refresh",affix:!1,icon:"ele-RefreshRight"},{contextMenuClickId:1,txt:"message.tagsView.close",affix:!1,icon:"ele-Close"},{contextMenuClickId:2,txt:"message.tagsView.closeOther",affix:!1,icon:"ele-CircleClose"},{contextMenuClickId:3,txt:"message.tagsView.closeAll",affix:!1,icon:"ele-FolderDelete"},{contextMenuClickId:4,txt:"message.tagsView.fullscreen",affix:!1,icon:"iconfont icon-fullscreen"}],item:{},arrowLeft:10}),l=k(()=>o.dropdown.x+117>document.documentElement.clientWidth?{x:document.documentElement.clientWidth-117-5,y:o.dropdown.y}:o.dropdown),_=t=>{x("currentContextmenuClick",Object.assign({},{contextMenuClickId:t},e.item))},w=t=>{var i;e.item=t,(i=t.meta)!=null&&i.isAffix?e.dropdownList[1].affix=!0:e.dropdownList[1].affix=!1,c(),setTimeout(()=>{e.isShow=!0},10)},c=()=>{e.isShow=!1};return y(()=>{document.body.addEventListener("click",c)}),v(()=>{document.body.removeEventListener("click",c)}),L(()=>o.dropdown,({x:t})=>{t+117>document.documentElement.clientWidth?e.arrowLeft=117-(document.documentElement.clientWidth-t):e.arrowLeft=10},{deep:!0}),f({openContextmenu:w}),(t,i)=>{const C=S("SvgIcon");return n(),b($,{name:"el-fade-in"},{default:I(()=>[V((n(),a("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:W(`top: ${u(l).y+5}px;left: ${u(l).x}px;`),key:Math.random()},[r("ul",D,[(n(!0),a(d,null,E(e.dropdownList,(s,h)=>(n(),a(d,null,[s.affix?T("",!0):(n(),a("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:h,onClick:A=>_(s.contextMenuClickId)},[B(C,{name:s.icon},null,8,["name"]),r("span",null,O(t.$t(s.txt)),1)],8,F))],64))),256))])],4)),[[M,e.isShow]])]),_:1})}}});const U=j(z,[["__scopeId","data-v-96431b81"]]);export{U as default};
