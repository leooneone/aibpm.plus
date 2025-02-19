import{i as C}from"./getStyleSheets-a93480e6.js";import{k as w,l as P,j as R,i as j,m as s,o as m,D as g,y as p,a as t,p as d,G as $,v as T,c as b,I as y,x as L,F as B,H as q,e as G,f as H,q as F}from"./@vue-8306d5ee.js";import{_ as A}from"./index-aa73a18b.js";import"./@element-plus-8ef115d9.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const J={style:{padding:"0px 0px 8px 8px","background-color":"var(--ba-bg-color)"}},K={class:"icon-selector-popper"},Q={class:"icon-selector-warp"},W={class:"icon-selector-warp-title flex"},X={class:"flex-auto"},Y={key:0,class:"icon-selector-warp-title-tab"},Z={class:"icon-selector-warp-row"},ee={class:"flex-margin"},oe={class:"icon-selector-warp-item-value my-flex-column my-flex-items-center"},te=["title"],ne={class:"dialog-footer"},le=w({name:"my-icon-select"}),ae=w({...le,props:{title:{type:String,default:""},sureLoading:{type:Boolean,default:!1},type:{type:String,default:()=>"all"},emptyDescription:{type:String,default:()=>"无相关图标"},modelValue:{type:String,default:()=>""}},emits:["update:modelValue","get","clear","sure"],setup(i,{expose:_,emit:I}){const c=i,e=P({showDialog:!1,loading:!1,fontIconPrefix:c.modelValue,fontIconSearch:"",fontIconSheetsList:[],fontIconType:"ele"}),h=()=>{c.modelValue.indexOf("iconfont")>-1?n("ali"):c.modelValue.indexOf("ele-")>-1?n("ele"):c.modelValue.indexOf("fa")>-1?n("awe"):n("ele")},v=R(()=>{if(!e.fontIconSearch)return e.fontIconSheetsList;let a=e.fontIconSearch.trim().toLowerCase();return e.fontIconSheetsList.filter(o=>{var r;if(((r=o.toLowerCase())==null?void 0:r.indexOf(a))!==-1)return o})}),S=async a=>{e.fontIconSheetsList=[],a==="ali"?await C.ali().then(o=>{e.fontIconSheetsList=o.map(r=>`iconfont ${r}`)}):a==="ele"?await C.ele().then(o=>{e.fontIconSheetsList=o}):a==="awe"&&await C.awe().then(o=>{e.fontIconSheetsList=o.map(r=>`fa ${r}`)})},n=a=>{e.fontIconType=a,S(a)},u=a=>{e.fontIconPrefix=a};j(()=>{});const V=async()=>{await h(),e.showDialog=!0},x=()=>{e.showDialog=!1},k=()=>{e.showDialog=!1},f=()=>{I("sure",e.fontIconPrefix)};return _({open:V,close:x}),(a,o)=>{const r=s("el-input"),O=s("SvgIcon"),z=s("el-col"),N=s("el-row"),U=s("el-empty"),D=s("el-button"),E=s("el-dialog");return m(),g(E,{modelValue:e.showDialog,"onUpdate:modelValue":o[4]||(o[4]=l=>e.showDialog=l),"destroy-on-close":"",title:i.title,"append-to-body":"",draggable:"",width:"780px"},{footer:p(()=>[t("span",ne,[d(D,{onClick:k,size:"default"},{default:p(()=>[$("取 消")]),_:1}),d(D,{type:"primary",onClick:f,size:"default",loading:i.sureLoading},{default:p(()=>[$("确 定")]),_:1},8,["loading"])])]),default:p(()=>[t("div",J,[t("div",null,[d(r,{modelValue:e.fontIconSearch,"onUpdate:modelValue":o[0]||(o[0]=l=>e.fontIconSearch=l),placeholder:"筛选图标",clearable:""},null,8,["modelValue"])]),t("div",K,[t("div",Q,[t("div",W,[t("div",X,T(i.title),1),i.type==="all"?(m(),b("div",Y,[t("span",{class:y([{"span-active":e.fontIconType==="ali"},"ml10"]),onClick:o[1]||(o[1]=l=>n("ali")),title:"iconfont 图标"}," ali ",2),t("span",{class:y([{"span-active":e.fontIconType==="ele"},"ml10"]),onClick:o[2]||(o[2]=l=>n("ele")),title:"elementPlus 图标"}," ele ",2),t("span",{class:y([{"span-active":e.fontIconType==="awe"},"ml10"]),onClick:o[3]||(o[3]=l=>n("awe")),title:"fontawesome 图标"}," awe ",2)])):L("",!0)]),t("div",Z,[v.value.length>0?(m(),g(N,{key:0},{default:p(()=>[(m(!0),b(B,null,q(v.value,(l,M)=>(m(),g(z,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:ce=>u(l),key:M},{default:p(()=>[t("div",{class:y(["icon-selector-warp-item",{"icon-selector-active":e.fontIconPrefix===l}]),onDblclick:f},[t("div",ee,[t("div",oe,[d(O,{name:l},null,8,["name"]),t("div",{class:"icon-name my-line-1",title:l},T(l),9,te)])])],34)]),_:2},1032,["onClick"]))),128))]),_:1})):L("",!0),v.value.length<=0?(m(),g(U,{key:1,"image-size":100,description:i.emptyDescription},null,8,["description"])):L("",!0)])])])])]),_:1},8,["modelValue","title"])}}});const se=A(ae,[["__scopeId","data-v-dcf45fc0"]]),ie=w({name:"my-select-icon"}),ze=w({...ie,props:{modelValue:String},emits:["update:modelValue"],setup(i,{emit:_}){const I=i,c=G(),e=P({value:I.modelValue}),h=()=>{c.value.open()},v=()=>{_("update:modelValue",void 0)},S=async n=>{c.value.close(),n&&(e.value=n,_("update:modelValue",n))};return H(()=>e.value,()=>{_("update:modelValue",e.value)}),(n,u)=>{const V=s("SvgIcon"),x=s("el-button"),k=s("el-input");return m(),b(B,null,[d(k,F({modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),placeholder:"请选择图标",class:"w100",onClear:v},n.$attrs),{prepend:p(()=>[d(V,{name:e.value},null,8,["name"])]),append:p(()=>[d(x,{icon:"ele-MoreFilled",onClick:h})]),_:1},16,["modelValue"]),d(se,F({ref_key:"iconSelectRef",ref:c,title:"选择图标",modal:!0,onSure:S,modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=f=>e.value=f)},n.$attrs),null,16,["modelValue"])],64)}}});export{ze as default};
