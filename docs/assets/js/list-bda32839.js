import{k as a,m as e,o,c,p as s,y as i,D as n,F as C,H as v,a as w,I as S,x as m}from"./@vue-8306d5ee.js";import{_ as h}from"./index-c27e5712.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-97a12f88.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const B={class:"icon-selector-warp-row"},I=a({name:"iconSelectorList"}),b=a({...I,props:{list:{type:Array,default:()=>[]},empty:{type:String,default:()=>"无相关图标"},prefix:{type:String,default:()=>""}},emits:["get-icon"],setup(t,{emit:p}){const _=t,d=l=>{p("get-icon",l)};return(l,N)=>{const u=e("SvgIcon"),f=e("el-col"),y=e("el-row"),g=e("el-empty"),k=e("el-scrollbar");return o(),c("div",B,[s(k,{ref:"selectorScrollbarRef"},{default:i(()=>[_.list.length>0?(o(),n(y,{key:0,gutter:10},{default:i(()=>[(o(!0),c(C,null,v(t.list,(r,x)=>(o(),n(f,{xs:6,sm:4,md:4,lg:4,xl:4,key:x,onClick:V=>d(r)},{default:i(()=>[w("div",{class:S(["icon-selector-warp-item",{"icon-selector-active":t.prefix===r}])},[s(u,{name:r},null,8,["name"])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):m("",!0),t.list.length<=0?(o(),n(g,{key:1,"image-size":100,description:t.empty},null,8,["description"])):m("",!0)]),_:1},512)])}}});const ot=h(b,[["__scopeId","data-v-ef1ad333"]]);export{ot as default};
