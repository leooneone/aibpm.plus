import{_ as i}from"./preload-helper.101896b7.js";import{d as V,a6 as u,r as v,e as d,l as a,D as n,u as f,C as k,B as E,q as D,m as O,x as C,y as P}from"./vue.df334614.js";const T=V({name:"render-component"}),A=V({...T,props:{item:Object,attrs:Object,conf:Object},setup(e){const o=e,r=u(()=>i(()=>import("./index.7fe679e0.js"),["assets/index.7fe679e0.js","assets/vue.df334614.js"])),c=u(()=>i(()=>import("./index.72fbc262.js"),["assets/index.72fbc262.js","assets/preload-helper.101896b7.js","assets/dayjs.min.0acfa903.js","assets/_commonjsHelpers.042e6b4d.js","assets/mitt.7f99bbc0.js","assets/test.dc379863.js","assets/toolsValidate.7cb139e2.js","assets/vue.df334614.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/index.e7fb0a47.css"])),M=u(()=>i(()=>import("./index.797b6116.js"),["assets/index.797b6116.js","assets/vue.df334614.js"])),s=u(()=>i(()=>import("./index.7dc236e1.js"),["assets/index.7dc236e1.js","assets/vue.df334614.js"]));let y=v(o.item.defaultValue);return o.conf!==void 0&&(o.conf.model[o.item.vModel]===void 0&&(o.conf.model[o.item.vModel]=v(o.item.defaultValue)),y.value=o.conf.model[o.item.vModel]),(m,l)=>e.item.tag==="el-select"?(d(),a(f(r),n({key:0},m.$attrs,{modelValue:e.conf.model[e.item.vModel],"onUpdate:modelValue":l[0]||(l[0]=t=>e.conf.model[e.item.vModel]=t)}),null,16,["modelValue"])):e.item.tag==="el-upload"?(d(),a(f(c),n({key:1},m.$attrs,{modelValue:e.conf.model[e.item.vModel],"onUpdate:modelValue":l[1]||(l[1]=t=>e.conf.model[e.item.vModel]=t)}),null,16,["modelValue"])):e.item.tag==="el-radio-group"?(d(),a(f(M),n({key:2},m.$attrs,{modelValue:e.conf.model[e.item.vModel],"onUpdate:modelValue":l[2]||(l[2]=t=>e.conf.model[e.item.vModel]=t)}),null,16,["modelValue"])):e.item.tag==="el-checkbox-group"?(d(),a(f(s),n({key:3},m.$attrs,{modelValue:e.conf.model[e.item.vModel],"onUpdate:modelValue":l[3]||(l[3]=t=>e.conf.model[e.item.vModel]=t)}),null,16,["modelValue"])):(d(),a(D(e.item.disTag??e.item.tag),n({key:4},m.$attrs,{"form-data":e.conf.model,modelValue:e.conf.model[e.item.vModel],"onUpdate:modelValue":l[4]||(l[4]=t=>e.conf.model[e.item.vModel]=t)}),k({_:2},[E(e.item.__slot__,(t,g)=>({name:g,fn:O(()=>[C(P(t),1)])}))]),1040,["form-data","modelValue"]))}});export{A as default};
