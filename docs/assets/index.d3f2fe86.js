import{_ as W}from"./preload-helper.101896b7.js";import{i as x}from"./getStyleSheets.de5032d4.js";import{d as L,a6 as F,r as E,O as N,c as R,o as G,w as $,S as d,e as y,f as S,z as i,m as f,l as M,n as U,g as _,y as H,u as r,H as j}from"./vue.df334614.js";import"./index.4621962e.js";const q={class:"icon-selector w100 h100"},J={class:"icon-selector-warp"},K={class:"icon-selector-warp-title"},Q=L({name:"iconSelector"}),te=L({...Q,props:{prepend:{type:String,default:()=>"ele-Pointer"},placeholder:{type:String,default:()=>"请输入内容搜索图标或者选择图标"},size:{type:String,default:()=>"default"},title:{type:String,default:()=>"请选择图标"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"无相关图标"},modelValue:String},emits:["update:modelValue","get","clear"],setup(n,{emit:u}){const l=n,p=F(()=>W(()=>import("./list.640f34eb.js"),["assets/list.640f34eb.js","assets/vue.df334614.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/list.19fd3cbd.css"])),s=E(),e=N({fontIconPrefix:"",fontIconWidth:0,fontIconSearch:"",fontIconPlaceholder:"",fontIconTabActive:"ali",fontIconList:{ali:[],ele:[],awe:[]}}),C=()=>{if(!l.modelValue)return!1;e.fontIconSearch="",e.fontIconPlaceholder=l.modelValue},z=()=>{const t=P();setTimeout(()=>{t.filter(a=>a===e.fontIconSearch).length<=0&&(e.fontIconSearch="")},300)},I=R(()=>{const t=P();if(!e.fontIconSearch)return t;let o=e.fontIconSearch.trim().toLowerCase();return t.filter(a=>{if(a.toLowerCase().indexOf(o)!==-1)return a})}),P=()=>{let t=[];return e.fontIconTabActive==="ali"?t=e.fontIconList.ali:e.fontIconTabActive==="ele"?t=e.fontIconList.ele:e.fontIconTabActive==="awe"&&(t=e.fontIconList.awe),t},b=()=>{if(l.modelValue==="")return e.fontIconPlaceholder=l.placeholder;e.fontIconPlaceholder=l.modelValue,e.fontIconPrefix=l.modelValue},v=()=>{let t="ali";return l.modelValue.indexOf("iconfont")>-1?t="ali":l.modelValue.indexOf("ele-")>-1?t="ele":l.modelValue.indexOf("fa")>-1&&(t="awe"),e.fontIconTabActive=t,t},w=async t=>{if(t==="ali"){if(e.fontIconList.ali.length>0)return;await x.ali().then(o=>{e.fontIconList.ali=o.map(a=>`iconfont ${a}`)})}else if(t==="ele"){if(e.fontIconList.ele.length>0)return;await x.ele().then(o=>{e.fontIconList.ele=o})}else if(t==="awe"){if(e.fontIconList.awe.length>0)return;await x.awe().then(o=>{e.fontIconList.awe=o.map(a=>`fa ${a}`)})}e.fontIconPlaceholder=l.placeholder,b()},T=t=>{w(t.paneName),s.value.focus()},m=t=>{e.fontIconPlaceholder=t,e.fontIconPrefix=t,u("get",e.fontIconPrefix),u("update:modelValue",e.fontIconPrefix),s.value.focus()},k=()=>{e.fontIconPrefix="",u("clear",e.fontIconPrefix),u("update:modelValue",e.fontIconPrefix)},V=()=>{j(()=>{e.fontIconWidth=s.value.$el.offsetWidth})},A=()=>{window.addEventListener("resize",()=>{V()})};return G(()=>{w(v()),A(),V()}),$(()=>l.modelValue,()=>{b(),v()}),(t,o)=>{const a=d("SvgIcon"),B=d("el-input"),h=d("el-tab-pane"),O=d("el-tabs"),D=d("el-popover");return y(),S("div",q,[i(B,{modelValue:e.fontIconSearch,"onUpdate:modelValue":o[0]||(o[0]=c=>e.fontIconSearch=c),placeholder:e.fontIconPlaceholder,clearable:n.clearable,disabled:n.disabled,size:n.size,ref_key:"inputWidthRef",ref:s,onClear:k,onFocus:C,onBlur:z},{prepend:f(()=>{var c,g;return[(e.fontIconPrefix===""?((c=n.prepend)==null?void 0:c.indexOf("ele-"))>-1:((g=e.fontIconPrefix)==null?void 0:g.indexOf("ele-"))>-1)?(y(),M(a,{key:0,name:e.fontIconPrefix===""?n.prepend:e.fontIconPrefix,class:"font14"},null,8,["name"])):(y(),S("i",{key:1,class:U([e.fontIconPrefix===""?n.prepend:e.fontIconPrefix,"font14"])},null,2))]}),_:1},8,["modelValue","placeholder","clearable","disabled","size"]),i(D,{placement:"bottom",width:e.fontIconWidth,transition:"el-zoom-in-top","popper-class":"icon-selector-popper",trigger:"click","virtual-ref":s.value,"virtual-triggering":""},{default:f(()=>[_("div",J,[_("div",K,H(n.title),1),i(O,{modelValue:e.fontIconTabActive,"onUpdate:modelValue":o[1]||(o[1]=c=>e.fontIconTabActive=c),onTabClick:T},{default:f(()=>[i(h,{lazy:"",label:"ali",name:"ali"},{default:f(()=>[i(r(p),{list:r(I),empty:n.emptyDescription,prefix:e.fontIconPrefix,onGetIcon:m},null,8,["list","empty","prefix"])]),_:1}),i(h,{lazy:"",label:"ele",name:"ele"},{default:f(()=>[i(r(p),{list:r(I),empty:n.emptyDescription,prefix:e.fontIconPrefix,onGetIcon:m},null,8,["list","empty","prefix"])]),_:1}),i(h,{lazy:"",label:"awe",name:"awe"},{default:f(()=>[i(r(p),{list:r(I),empty:n.emptyDescription,prefix:e.fontIconPrefix,onGetIcon:m},null,8,["list","empty","prefix"])]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["width","virtual-ref"])])}}});export{te as default};
