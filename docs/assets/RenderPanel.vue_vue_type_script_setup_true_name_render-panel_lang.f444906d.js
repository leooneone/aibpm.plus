import{_ as d}from"./preload-helper.101896b7.js";import{d as h,a6 as m,c as w,S as g,e as a,l as r,m as o,z as l,u as n,f as x,B as I,F as b,j as k}from"./vue.df334614.js";const C=h({name:"render-panel"}),O=h({...C,props:{tag:String,gutter:Number,list:Object,activeId:String||Number,conf:Object},setup(e){const s=e,_=m(()=>d(()=>import("./vuedraggable.umd.13ffdc0e.js").then(f=>f.v),["assets/vuedraggable.umd.13ffdc0e.js","assets/_commonjsHelpers.042e6b4d.js","assets/vue.runtime.esm-bundler.7d88586f.js","assets/vue.df334614.js"])),u=m(()=>d(()=>import("./RenderItem.a92b1627.js"),["assets/RenderItem.a92b1627.js","assets/preload-helper.101896b7.js","assets/vue.df334614.js"])),v={name:"componentsGroup"},c=w(()=>(console.log("space:",s.tag,s.space),{gutter:s.gutter??5,justify:"left",style:{"margin-left":0,"min-height":"150px",width:"100%",alignContent:"start",height:"100%"}}));return(f,E)=>{const p=g("el-col"),y=g("el-row");return e.conf.mode==="designer"?(a(),r(n(_),{key:0,list:e.list,animation:200,group:v,tag:"el-row","component-data":n(c),class:"drag-wrapper"},{item:o(({element:t,index:i})=>[l(p,{span:t.span,offset:t.offset,push:t.push,pull:t.pull},{default:o(()=>[l(n(u),{index:i,"active-id":e.activeId,parent:e.list,item:t,conf:e.conf},null,8,["index","active-id","parent","item","conf"])]),_:2},1032,["span","offset","push","pull"])]),_:1},8,["list","component-data"])):(a(),r(y,{key:1,gutter:n(c).gutter,style:k(n(c).style)},{default:o(()=>[(a(!0),x(b,null,I(e.list,(t,i)=>(a(),r(p,{span:t.span,offset:t.offset,push:t.push,pull:t.pull},{default:o(()=>[l(n(u),{index:i,"active-id":e.activeId,parent:e.list,item:t,conf:e.conf},null,8,["index","active-id","parent","item","conf"])]),_:2},1032,["span","offset","push","pull"]))),256))]),_:1},8,["gutter","style"]))}}});export{O as _};
