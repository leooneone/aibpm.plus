import{k as u,j as b,m as o,o as t,c as i,H as g,F as p,D as c,y as s,p as m,a as l,v as a,Y as x,G as L}from"./@vue-8306d5ee.js";import{o as B}from"./index-aa73a18b.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const I=["onClick"],S=u({name:"navMenuSubItem"}),te=u({...S,props:{chil:{type:Array,default:()=>[]}},setup(_){const d=_,h=b(()=>d.chil),k=n=>{B.handleOpenLink(n)};return(n,$)=>{const r=o("SvgIcon"),f=o("sub-item",!0),y=o("el-sub-menu"),C=o("el-menu-item");return t(!0),i(p,null,g(h.value,e=>(t(),i(p,null,[e.children&&e.children.length>0?(t(),c(y,{index:e.path,key:e.path},{title:s(()=>[m(r,{name:e.meta.icon},null,8,["name"]),l("span",null,a(n.$t(e.meta.title)),1)]),default:s(()=>[m(f,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(t(),c(C,{index:e.path,key:e.path},{default:s(()=>[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?(t(),i(p,{key:0},[m(r,{name:e.meta.icon},null,8,["name"]),l("span",null,a(n.$t(e.meta.title)),1)],64)):(t(),i("a",{key:1,class:"w100",onClick:x(w=>k(e),["prevent"])},[m(r,{name:e.meta.icon},null,8,["name"]),L(" "+a(n.$t(e.meta.title)),1)],8,I))]),_:2},1032,["index"]))],64))),256)}}});export{te as default};
