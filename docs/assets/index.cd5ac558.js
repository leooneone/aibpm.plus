import{d as s,a8 as p,O as u,c as g,S as h,e as t,f as n,g as l,y as k,u as v,F as C,B as w,z as N}from"./vue.df334614.js";import{u as T}from"./themeConfig.8c27057c.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";const y={class:"workflow-tool"},S={class:"pl15"},B={class:"workflow-tool-right"},D=["title","onClick"],F=s({name:"example/pagesWorkflowTool"}),I=s({...F,emits:["tool"],setup(L,{emit:c}){const a=T(),{themeConfig:i}=p(a),r=u({toolList:[{icon:"ele-Help",title:"帮助",fnName:"help"},{icon:"ele-Download",title:"下载",fnName:"download"},{icon:"ele-Check",title:"提交",fnName:"submit"},{icon:"ele-DocumentCopy",title:"复制",fnName:"copy"},{icon:"ele-Delete",title:"删除",fnName:"del"},{icon:"ele-FullScreen",title:"全屏",fnName:"fullscreen"}]}),_=g(()=>{let{globalTitle:e}=i.value;return`${e}工作流`}),m=e=>{c("tool",e)};return(e,b)=>{const f=h("SvgIcon");return t(),n("div",y,[l("div",S,k(v(_)),1),l("div",B,[(t(!0),n(C,null,w(r.toolList,(o,d)=>(t(),n("div",{class:"workflow-tool-icon",key:d,title:o.title,onClick:V=>m(o.fnName)},[N(f,{name:o.icon},null,8,["name"])],8,D))),128))])])}}});const H=x(I,[["__scopeId","data-v-200cfc1a"]]);export{H as default};
