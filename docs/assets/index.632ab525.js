import{i as k}from"./getStyleSheets.5514b9fa.js";import{d as h,O as F,c as j,o as q,S as s,e as p,l as v,m as d,g as t,z as u,y as T,f as D,n as y,t as L,u as b,B as A,F as O,x as P,r as G,w as H,D as B}from"./vue.72f2672d.js";import{_ as J}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.41e0794f.js";const K={style:{padding:"0px 0px 8px 8px","background-color":"var(--ba-bg-color)"}},Q={class:"icon-selector-popper"},W={class:"icon-selector-warp"},X={class:"icon-selector-warp-title flex"},Y={class:"flex-auto"},Z={key:0,class:"icon-selector-warp-title-tab"},ee={class:"icon-selector-warp-row"},oe={class:"flex-margin"},te={class:"icon-selector-warp-item-value my-flex-column my-flex-items-center"},ne=["title"],le={class:"dialog-footer"},ae=P("取 消"),se=P("确 定"),ce=h({name:"my-icon-select"}),ie=h({...ce,props:{title:{type:String,default:""},sureLoading:{type:Boolean,default:!1},type:{type:String,default:()=>"all"},emptyDescription:{type:String,default:()=>"无相关图标"},modelValue:{type:String,default:()=>""}},emits:["update:modelValue","get","clear","sure"],setup(c,{expose:_,emit:w}){const i=c,e=F({showDialog:!1,loading:!1,fontIconPrefix:i.modelValue,fontIconSearch:"",fontIconSheetsList:[],fontIconType:"ele"}),I=()=>{i.modelValue.indexOf("iconfont")>-1?n("ali"):i.modelValue.indexOf("ele-")>-1?n("ele"):i.modelValue.indexOf("fa")>-1?n("awe"):n("ele")},g=j(()=>{if(!e.fontIconSearch)return e.fontIconSheetsList;let a=e.fontIconSearch.trim().toLowerCase();return e.fontIconSheetsList.filter(o=>{var r;if(((r=o.toLowerCase())==null?void 0:r.indexOf(a))!==-1)return o})}),S=async a=>{e.fontIconSheetsList=[],a==="ali"?await k.ali().then(o=>{e.fontIconSheetsList=o.map(r=>`iconfont ${r}`)}):a==="ele"?await k.ele().then(o=>{e.fontIconSheetsList=o}):a==="awe"&&await k.awe().then(o=>{e.fontIconSheetsList=o.map(r=>`fa ${r}`)})},n=a=>{e.fontIconType=a,S(a)},f=a=>{e.fontIconPrefix=a};q(()=>{});const V=async()=>{await I(),e.showDialog=!0},x=()=>{e.showDialog=!1},C=()=>{e.showDialog=!1},m=()=>{w("sure",e.fontIconPrefix)};return _({open:V,close:x}),(a,o)=>{const r=s("el-input"),z=s("SvgIcon"),N=s("el-col"),U=s("el-row"),E=s("el-empty"),$=s("el-button"),M=s("el-dialog");return p(),v(M,{modelValue:e.showDialog,"onUpdate:modelValue":o[4]||(o[4]=l=>e.showDialog=l),"destroy-on-close":"",title:c.title,"append-to-body":"",draggable:"",width:"780px"},{footer:d(()=>[t("span",le,[u($,{onClick:C,size:"default"},{default:d(()=>[ae]),_:1}),u($,{type:"primary",onClick:m,size:"default",loading:c.sureLoading},{default:d(()=>[se]),_:1},8,["loading"])])]),default:d(()=>[t("div",K,[t("div",null,[u(r,{modelValue:e.fontIconSearch,"onUpdate:modelValue":o[0]||(o[0]=l=>e.fontIconSearch=l),placeholder:"筛选图标",clearable:""},null,8,["modelValue"])]),t("div",Q,[t("div",W,[t("div",X,[t("div",Y,T(c.title),1),c.type==="all"?(p(),D("div",Z,[t("span",{class:y([{"span-active":e.fontIconType==="ali"},"ml10"]),onClick:o[1]||(o[1]=l=>n("ali")),title:"iconfont 图标"}," ali ",2),t("span",{class:y([{"span-active":e.fontIconType==="ele"},"ml10"]),onClick:o[2]||(o[2]=l=>n("ele")),title:"elementPlus 图标"}," ele ",2),t("span",{class:y([{"span-active":e.fontIconType==="awe"},"ml10"]),onClick:o[3]||(o[3]=l=>n("awe")),title:"fontawesome 图标"}," awe ",2)])):L("",!0)]),t("div",ee,[b(g).length>0?(p(),v(U,{key:0},{default:d(()=>[(p(!0),D(O,null,A(b(g),(l,R)=>(p(),v(N,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:ue=>f(l),key:R},{default:d(()=>[t("div",{class:y(["icon-selector-warp-item",{"icon-selector-active":e.fontIconPrefix===l}]),onDblclick:m},[t("div",oe,[t("div",te,[u(z,{name:l},null,8,["name"]),t("div",{class:"icon-name my-line-1",title:l},T(l),9,ne)])])],34)]),_:2},1032,["onClick"]))),128))]),_:1})):L("",!0),b(g).length<=0?(p(),v(E,{key:1,"image-size":100,description:c.emptyDescription},null,8,["description"])):L("",!0)])])])])]),_:1},8,["modelValue","title"])}}});const re=J(ie,[["__scopeId","data-v-dcf45fc0"]]),de=h({name:"my-select-icon"}),ge=h({...de,props:{modelValue:String},emits:["update:modelValue"],setup(c,{emit:_}){const w=c,i=G(),e=F({value:w.modelValue}),I=()=>{i.value.open()},g=()=>{_("update:modelValue",void 0)},S=async n=>{i.value.close(),n&&(e.value=n,_("update:modelValue",n))};return H(()=>e.value,()=>{_("update:modelValue",e.value)}),(n,f)=>{const V=s("SvgIcon"),x=s("el-button"),C=s("el-input");return p(),D(O,null,[u(C,B({modelValue:e.value,"onUpdate:modelValue":f[0]||(f[0]=m=>e.value=m),placeholder:"请选择图标",class:"w100",onClear:g},n.$attrs),{prepend:d(()=>[u(V,{name:e.value},null,8,["name"])]),append:d(()=>[u(x,{icon:"ele-MoreFilled",onClick:I})]),_:1},16,["modelValue"]),u(re,B({ref_key:"iconSelectRef",ref:i,title:"选择图标",modal:!0,onSure:S,modelValue:e.value,"onUpdate:modelValue":f[1]||(f[1]=m=>e.value=m)},n.$attrs),null,16,["modelValue"])],64)}}});export{ge as default};
