import{_ as p}from"./ai-form-7f0c78d7.js";import{k as C,e as i,l as g,m,o as t,c as w,p as _,y as c,D as d,u,R as f,n as E}from"./@vue-8306d5ee.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const P=C({name:"example/pagesWorkflowDrawer"}),H=C({...P,emits:["label","node"],setup(j,{expose:b,emit:l}){const k=f(()=>p(()=>import("./line-4fc7dc4c.js"),["assets/js/line-4fc7dc4c.js","assets/js/@vue-8306d5ee.js"])),y=f(()=>p(()=>import("./node-395327da.js"),["assets/js/node-395327da.js","assets/js/echarts-09ad0ed1.js","assets/js/zrender-067bc3d8.js","assets/js/tslib-54e39b60.js","assets/js/element-plus-e21f9b5a.js","assets/js/@vue-8306d5ee.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/js/index-aa73a18b.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-7f0c78d7.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/node-fdedbca6.css"])),a=i(),s=i(),e=g({isOpen:!1,nodeData:{type:"node"},jsplumbConn:{}}),D=(o,n)=>{e.isOpen=!0,e.jsplumbConn=n,e.nodeData=o,E(()=>{setTimeout(()=>{o.type==="line"?a.value.getParentData(o):s.value.getParentData(o)},300)})},r=()=>{e.isOpen=!1},v=o=>{e.jsplumbConn.label=o,l("label",e.jsplumbConn)},x=o=>{l("node",o)};return b({open:D}),(o,n)=>{const O=m("el-scrollbar"),R=m("el-drawer");return t(),w("div",null,[_(R,{title:`${e.nodeData.type==="line"?"线":"节点"}操作`,modelValue:e.isOpen,"onUpdate:modelValue":n[0]||(n[0]=V=>e.isOpen=V),size:"320px"},{default:c(()=>[_(O,null,{default:c(()=>[e.nodeData.type==="line"?(t(),d(u(k),{key:0,onChange:v,onClose:r,ref_key:"lineRef",ref:a},null,512)):(t(),d(u(y),{key:1,onSubmit:x,onClose:r,ref_key:"nodeRef",ref:s},null,512))]),_:1})]),_:1},8,["title","modelValue"])])}}});export{H as default};
