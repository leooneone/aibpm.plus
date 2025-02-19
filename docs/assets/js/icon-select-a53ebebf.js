import{i as g}from"./getStyleSheets-a93480e6.js";import{k as S,l as E,j as U,i as j,m as a,o as r,D as m,y as p,a as o,p as f,G as I,v,c as x,I as u,x as y,H as G,F as H}from"./@vue-8306d5ee.js";import{_ as M}from"./index-aa73a18b.js";import"./@element-plus-8ef115d9.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const q={style:{padding:"0px 0px 8px 8px","background-color":"var(--ba-bg-color)"}},A={class:"icon-selector-popper"},J={class:"icon-selector-warp"},K={class:"icon-selector-warp-title flex"},Q={class:"flex-auto"},R={key:0,class:"icon-selector-warp-title-tab"},W={class:"icon-selector-warp-row"},X={class:"flex-margin"},Y={class:"icon-selector-warp-item-value my-flex-column my-flex-items-center"},Z=["title"],ee={class:"dialog-footer"},te=S({name:"my-icon-select"}),oe=S({...te,props:{title:{type:String,default:""},sureLoading:{type:Boolean,default:!1},type:{type:String,default:()=>"all"},emptyDescription:{type:String,default:()=>"无相关图标"},modelValue:{type:String,default:()=>""}},emits:["update:modelValue","get","clear","sure"],setup(c,{expose:k,emit:C}){const d=c,e=E({showDialog:!1,loading:!1,fontIconPrefix:d.modelValue,fontIconSearch:"",fontIconSheetsList:[],fontIconType:"ele"}),V=()=>{d.modelValue.indexOf("iconfont")>-1?s("ali"):d.modelValue.indexOf("ele-")>-1?s("ele"):d.modelValue.indexOf("fa")>-1?s("awe"):s("ele")},_=U(()=>{if(!e.fontIconSearch)return e.fontIconSheetsList;let l=e.fontIconSearch.trim().toLowerCase();return e.fontIconSheetsList.filter(t=>{var i;if(((i=t.toLowerCase())==null?void 0:i.indexOf(l))!==-1)return t})}),L=async l=>{e.fontIconSheetsList=[],l==="ali"?await g.ali().then(t=>{e.fontIconSheetsList=t.map(i=>`iconfont ${i}`)}):l==="ele"?await g.ele().then(t=>{e.fontIconSheetsList=t}):l==="awe"&&await g.awe().then(t=>{e.fontIconSheetsList=t.map(i=>`fa ${i}`)})},s=l=>{e.fontIconType=l,L(l)},D=l=>{e.fontIconPrefix=l};j(()=>{});const b=async()=>{await V(),e.showDialog=!0},T=()=>{e.showDialog=!1},$=()=>{e.showDialog=!1},h=()=>{C("sure",e.fontIconPrefix)};return k({open:b,close:T}),(l,t)=>{const i=a("el-input"),B=a("SvgIcon"),F=a("el-col"),P=a("el-row"),z=a("el-empty"),w=a("el-button"),N=a("el-dialog");return r(),m(N,{modelValue:e.showDialog,"onUpdate:modelValue":t[4]||(t[4]=n=>e.showDialog=n),"destroy-on-close":"",title:c.title,"append-to-body":"",draggable:"",width:"780px"},{footer:p(()=>[o("span",ee,[f(w,{onClick:$,size:"default"},{default:p(()=>[I("取 消")]),_:1}),f(w,{type:"primary",onClick:h,size:"default",loading:c.sureLoading},{default:p(()=>[I("确 定")]),_:1},8,["loading"])])]),default:p(()=>[o("div",q,[o("div",null,[f(i,{modelValue:e.fontIconSearch,"onUpdate:modelValue":t[0]||(t[0]=n=>e.fontIconSearch=n),placeholder:"筛选图标",clearable:""},null,8,["modelValue"])]),o("div",A,[o("div",J,[o("div",K,[o("div",Q,v(c.title),1),c.type==="all"?(r(),x("div",R,[o("span",{class:u([{"span-active":e.fontIconType==="ali"},"ml10"]),onClick:t[1]||(t[1]=n=>s("ali")),title:"iconfont 图标"}," ali ",2),o("span",{class:u([{"span-active":e.fontIconType==="ele"},"ml10"]),onClick:t[2]||(t[2]=n=>s("ele")),title:"elementPlus 图标"}," ele ",2),o("span",{class:u([{"span-active":e.fontIconType==="awe"},"ml10"]),onClick:t[3]||(t[3]=n=>s("awe")),title:"fontawesome 图标"}," awe ",2)])):y("",!0)]),o("div",W,[_.value.length>0?(r(),m(P,{key:0},{default:p(()=>[(r(!0),x(H,null,G(_.value,(n,O)=>(r(),m(F,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:ne=>D(n),key:O},{default:p(()=>[o("div",{class:u(["icon-selector-warp-item",{"icon-selector-active":e.fontIconPrefix===n}]),onDblclick:h},[o("div",X,[o("div",Y,[f(B,{name:n},null,8,["name"]),o("div",{class:"icon-name my-line-1",title:n},v(n),9,Z)])])],34)]),_:2},1032,["onClick"]))),128))]),_:1})):y("",!0),_.value.length<=0?(r(),m(z,{key:1,"image-size":100,description:c.emptyDescription},null,8,["description"])):y("",!0)])])])])]),_:1},8,["modelValue","title"])}}});const $e=M(oe,[["__scopeId","data-v-9aed9d62"]]);export{$e as default};
