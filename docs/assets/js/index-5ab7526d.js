import{k as d,e as h,l as k,j as C,i as S,A as b,m as I,o as s,D as g,y as L,M as E,N as M,c as i,a as p,F as B,H as D,p as j,v as m,P as N,af as T,S as $,T as z}from"./@vue-8306d5ee.js";import{_ as F}from"./index-aa73a18b.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const O=t=>($("data-v-7f192b37"),t=t(),z(),t),R={class:"el-dropdown-menu"},V=["onClick"],A=O(()=>p("div",{class:"el-popper__arrow",style:{left:"10px"}},null,-1)),H=d({name:"example/pagesWorkflowContextmenu"}),P=d({...H,props:{dropdown:{type:Object,default:()=>({x:"",y:""})}},emits:["current"],setup(t,{expose:l,emit:u}){const _=t,x=h(),e=k({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"删除",icon:"ele-Delete"},{contextMenuClickId:1,txt:"编辑",icon:"ele-Edit"}],item:{type:"node"},conn:{}}),c=C(()=>_.dropdown),f=n=>{u("current",Object.assign({},{contextMenuClickId:n},e.item),e.conn)},v=(n,a={})=>{e.item=n,e.conn=a,o(),setTimeout(()=>{e.isShow=!0},10)},o=()=>{e.isShow=!1};return S(()=>{document.body.addEventListener("click",o),document.body.addEventListener("contextmenu",o)}),b(()=>{document.body.removeEventListener("click",o),document.body.removeEventListener("contextmenu",o)}),l({openContextmenu:v}),(n,a)=>{const y=I("SvgIcon");return s(),g(T,{name:"el-zoom-in-center",ref_key:"contextmenuRef",ref:x},{default:L(()=>[E((s(),i("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:N(`top: ${c.value.y+5}px;left: ${c.value.x}px;`),key:Math.random()},[p("ul",R,[(s(!0),i(B,null,D(e.dropdownList,(r,w)=>(s(),i("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:w,onClick:U=>f(r.contextMenuClickId)},[j(y,{name:r.icon},null,8,["name"]),p("span",null,m(r.txt)+m(e.item.type==="line"?"线":"节点"),1)],8,V))),128))]),A],4)),[[M,e.isShow]])]),_:1},512)}}});const ve=F(P,[["__scopeId","data-v-7f192b37"]]);export{ve as default};
