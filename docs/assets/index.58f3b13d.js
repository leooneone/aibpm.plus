import C from"./icon-select.22f9d3c3.js";import{d as c,r as k,O as w,w as r,S as s,e as y,f as F,z as t,m as p,D as d,F as b}from"./vue.df334614.js";import"./getStyleSheets.de5032d4.js";import"./index.4621962e.js";import"./_plugin-vue_export-helper.c27b6911.js";const B=c({name:"my-select-icon"}),x=c({...B,props:{modelValue:String},emits:["update:modelValue"],setup(i,{emit:a}){const n=i,u=k(),e=w({value:n.modelValue}),v=()=>{u.value.open()},V=()=>{a("update:modelValue",void 0)},f=async o=>{u.value.close(),o&&(e.value=o,a("update:modelValue",o))};return r(()=>n.modelValue,()=>{e.value=n.modelValue}),r(()=>e.value,()=>{a("update:modelValue",e.value)}),(o,l)=>{const _=s("SvgIcon"),S=s("el-button"),g=s("el-input");return y(),F(b,null,[t(g,d({modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=m=>e.value=m),placeholder:"请选择图标",class:"w100",onClear:V},o.$attrs),{prepend:p(()=>[t(_,{name:e.value},null,8,["name"])]),append:p(()=>[t(S,{icon:"ele-MoreFilled",onClick:v})]),_:1},16,["modelValue"]),t(C,d({ref_key:"iconSelectRef",ref:u,title:"选择图标",modal:!0,onSure:f,modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=m=>e.value=m)},o.$attrs),null,16,["modelValue"])],64)}}});export{x as default};
