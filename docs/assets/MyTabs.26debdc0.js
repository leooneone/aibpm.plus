import{_ as d}from"./preload-helper.101896b7.js";import{d as s,a6 as f,c as b,S as n,e as a,l as o,m as r,f as _,B as v,F as g,D as V,z as p,u as y}from"./vue.72f2672d.js";const j=s({name:"my-tabs"}),O=s({...j,props:{parent:Object,activeId:String||Number,item:Object,conf:Object},setup(e){const c=e,m=f(()=>d(()=>import("./RenderPanel.031fd28e.js"),["assets/RenderPanel.031fd28e.js","assets/RenderPanel.vue_vue_type_script_setup_true_name_render-panel_lang.bbe8e092.js","assets/preload-helper.101896b7.js","assets/vue.72f2672d.js"]));return b(()=>c.item.tabpanes),(k,l)=>{const u=n("el-tab-pane"),i=n("el-tabs");return a(),o(i,V(e.item,{modelValue:e.item.defaultValue,"onUpdate:modelValue":l[0]||(l[0]=t=>e.item.defaultValue=t),class:"drawing-layout-item"}),{default:r(()=>[(a(!0),_(g,null,v(e.item.children,t=>(a(),o(u,{key:t.value,label:t.label,name:t.value},{default:r(()=>[p(y(m),{"active-id":e.activeId,list:t.children,tag:"el-row",conf:e.conf,gutter:t.gutter,justify:"left"},null,8,["active-id","list","conf","gutter"])]),_:2},1032,["label","name"]))),128))]),_:1},16,["modelValue"])}}});export{O as default};
