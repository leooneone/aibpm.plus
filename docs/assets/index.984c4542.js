import{_ as i}from"./preload-helper.101896b7.js";import{n as u,a as s}from"./data-contracts.9d84138f.js";import{d,a6 as c,O as b,o as v,S as r,e as V,l as y,m as a,z as e,u as t}from"./vue.72f2672d.js";const I=d({name:"bpm/template"}),N=d({...I,setup(k){const o=c(()=>i(()=>import("./workItem.0c7caad6.js"),["assets/workItem.0c7caad6.js","assets/preload-helper.101896b7.js","assets/data-contracts.9d84138f.js","assets/http-client.e9da71d4.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/vue.72f2672d.js","assets/index.41e0794f.js","assets/storage.6b2e7cd0.js","assets/dayjs.min.0acfa903.js","assets/_commonjsHelpers.042e6b4d.js"])),l=c(()=>i(()=>import("./instance.809543cc.js"),["assets/instance.809543cc.js","assets/preload-helper.101896b7.js","assets/data-contracts.9d84138f.js","assets/http-client.e9da71d4.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/vue.72f2672d.js","assets/index.41e0794f.js","assets/storage.6b2e7cd0.js","assets/dayjs.min.0acfa903.js","assets/_commonjsHelpers.042e6b4d.js"])),m=b({activeName:"todo-item"});return v(()=>{}),(x,_)=>{const n=r("el-tab-pane"),p=r("el-tabs");return V(),y(p,{class:"workflow",modelValue:m.activeName,"onUpdate:modelValue":_[0]||(_[0]=f=>m.activeName=f),type:"border-card",style:{height:"100%"}},{default:a(()=>[e(n,{label:"待办任务",name:"todo-item"},{default:a(()=>[e(t(o),{state:t(u).待办,"is-myself":!1},null,8,["state"])]),_:1}),e(n,{label:"超时任务",name:"timeout-item"},{default:a(()=>[e(t(o),{state:t(u).超时},null,8,["state"])]),_:1}),e(n,{label:"已完成的流程",name:"finshed-instance"},{default:a(()=>[e(t(l),{state:t(s).已完成},null,8,["state"])]),_:1}),e(n,{label:"进行中的流程",name:"runing-instance"},{default:a(()=>[e(t(l),{state:t(s).运行中},null,8,["state"])]),_:1}),e(n,{label:"超时的流程",name:"timout-instance"},{default:a(()=>[e(t(l),{state:t(s).超时},null,8,["state"])]),_:1}),e(n,{label:"异常的流程",name:"exception-instance"},{default:a(()=>[e(t(l),{state:t(s).异常},null,8,["state"])]),_:1})]),_:1},8,["modelValue"])}}});export{N as default};
