import{T as c,E as p}from"./@wangeditor-5ee57fcd.js";import{k as u,s as h,l as C,ac as y,f as r,o as V,c as x,p as i,u as s,P as v}from"./@vue-8306d5ee.js";const H={class:"editor-container"},S=u({name:"wngEditor"}),B=u({...S,props:{disable:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>"请输入内容..."},mode:{type:String,default:()=>"default"},height:{type:String,default:()=>"310px"},getHtml:String,getText:String},emits:["update:getHtml","update:getText"],setup(o,{emit:n}){const a=o,l=h(),d=C({editorConfig:{placeholder:a.placeholder},editorVal:a.getHtml}),m=e=>{l.value=e},f=e=>{n("update:getHtml",e.getHtml()),n("update:getText",e.getText())};return y(()=>{const e=l.value;e!=null&&e.destroy()}),r(()=>a.disable,e=>{const t=l.value;t!=null&&(e?t.disable():t.enable())},{deep:!0}),r(()=>a.getHtml,e=>{d.editorVal=e},{deep:!0}),(e,t)=>(V(),x("div",H,[i(s(c),{editor:l.value,mode:o.mode},null,8,["editor","mode"]),i(s(p),{mode:o.mode,defaultConfig:d.editorConfig,style:v({height:o.height}),modelValue:d.editorVal,"onUpdate:modelValue":t[0]||(t[0]=g=>d.editorVal=g),onOnCreated:m,onOnChange:f},null,8,["mode","defaultConfig","style","modelValue"])]))}});export{B as default};
