import{_ as d}from"./preload-helper.101896b7.js";import{d as i,a6 as r,J as c,S as f,e as s,l as u,m as v,z as b,D as I,u as h,I as w}from"./vue.df334614.js";const x=i({name:"render-form-item"}),O=i({...x,props:{activeId:String||Number,item:Object,conf:Object},setup(e){const o=r(()=>d(()=>import("./RenderComponent.713afb7c.js"),["assets/RenderComponent.713afb7c.js","assets/preload-helper.101896b7.js","assets/vue.df334614.js"])),a=c("activeFormItem");return w("activeFormItem",a),(m,t)=>{const n=f("el-form-item");return s(),u(n,{"label-width":e.item.showLabel?`${e.item.labelWidth||100}px`:"0px",label:e.item.showLabel?e.item.label:"",prop:e.conf.mode==="designer"?void 0:e.item.vModel,required:e.item.required},{default:v(()=>[b(h(o),I({onOnInput:t[0]||(t[0]=l=>e.item.defaultValue=l),onUpdate:m.changeValue,"active-id":e.activeId},e.item,{item:e.item,conf:e.conf,class:"item-tool-box"}),null,16,["onUpdate","active-id","item","conf"])]),_:1},8,["label-width","label","prop","required"])}}});export{O as default};
