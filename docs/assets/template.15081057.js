import{_ as O}from"./preload-helper.101896b7.js";import{b as W,v as j}from"./data-contracts.9d84138f.js";import{W as I}from"./WorkflowTemplate.8c5ea799.js";import{d as F}from"./dayjs.min.0acfa903.js";import{d as M,a6 as R,O as Q,o as q,S as r,a4 as D,e as m,f as P,z as e,m as n,F as G,B as J,u as y,p as v,l as f,x as p,y as h,g as K,L as X}from"./vue.72f2672d.js";import"./http-client.180deef4.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./index.41e0794f.js";import"./storage.6b2e7cd0.js";import"./_commonjsHelpers.042e6b4d.js";const Z={style:{padding:"0px 0px 8px 8px"}},ee=p(" 查询 "),te=p(" 新增 "),oe=p("进入"),ae=p("编辑"),ne=p("删除"),le={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},ie=M({name:"bpm/template"}),ve=M({...ie,setup(re){R(()=>O(()=>import("./iframes.c2c4c37f.js"),["assets/iframes.c2c4c37f.js","assets/vue.72f2672d.js"]));const{proxy:w}=X(),{dic_bpm_group:S}=w.$dict("bpm-group"),t=Q({loading:!1,filterModel:{name:"",states:["0","1"]},total:0,pageInput:{currentPage:1,pageSize:10},listData:[]});q(()=>{c()});const x=l=>{var a=0,i=document.createElement("iframe");i.style.zIndex="9999",i.style.position="absolute",i.style.top=a+"px",i.style.left=a+"px",i.setAttribute("frameborder","0");var d=function(){i.setAttribute("width",document.body.clientWidth-2*a),i.setAttribute("height",document.body.clientHeight-2*a)};window.addEventListener("resize",d),d();var g=function(b){b.data==="close"&&(window.removeEventListener("resize",d),window.removeEventListener("message",g),document.body.removeChild(i))};window.addEventListener("message",g),i.setAttribute("src",l),document.body.appendChild(i)},C=l=>{const a="/bpm/designer?id="+l.id;x(a)},E=()=>{x("/bpm/designer")},V=(l,a,i)=>F(i).format("YYYY-MM-DD HH:mm:ss"),c=async()=>{var a,i;t.loading=!0,t.pageInput.filter=t.filterModel;const l=await new I().getPage(t.pageInput);t.listData=((a=l==null?void 0:l.data)==null?void 0:a.list)??[],t.total=((i=l.data)==null?void 0:i.total)??0,t.loading=!1},A=l=>{w.$modal.confirmDelete(`确定要删除【${l.name}】模板?`).then(async()=>{await new I().delete({id:l.id},{loading:!0,showSuccessMessage:!0}),c()}).catch(()=>{})},B=l=>{t.pageInput.pageSize=l,c()},L=l=>{t.pageInput.currentPage=l,c()};return(l,a)=>{const i=r("el-input"),d=r("el-form-item"),g=r("el-option"),b=r("el-select"),u=r("el-button"),T=r("el-form"),k=r("el-card"),s=r("el-table-column"),$=r("el-link"),N=r("el-tag"),U=r("el-table"),Y=r("el-pagination"),z=D("auth"),H=D("loading");return m(),P("div",Z,[e(k,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:n(()=>[e(T,{model:t.filterModel,inline:!0},{default:n(()=>[e(d,{prop:"name"},{default:n(()=>[e(i,{modelValue:t.filterModel.name,"onUpdate:modelValue":a[0]||(a[0]=o=>t.filterModel.name=o),placeholder:"模板名称"},null,8,["modelValue"])]),_:1}),e(d,{prop:"name"},{default:n(()=>[e(b,{modelValue:t.filterModel.states,"onUpdate:modelValue":a[1]||(a[1]=o=>t.filterModel.states=o),clearable:"",multiple:"","collapse-tags":"","collapse-tags-tooltip":""},{default:n(()=>[(m(!0),P(G,null,J(y(W),(o,_)=>(m(),f(g,{key:o,label:_,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:n(()=>[e(u,{type:"primary",icon:"ele-Search",onClick:c},{default:n(()=>[ee]),_:1}),e(u,{type:"success",icon:"ele-Plus",onClick:E},{default:n(()=>[te]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(k,{shadow:"never",style:{"margin-top":"8px"}},{default:n(()=>[v((m(),f(U,{data:t.listData,"row-key":"id",style:{width:"100%"},border:""},{default:n(()=>[e(s,{type:"index",width:"60",label:"序号"}),e(s,{prop:"name",label:"模板名称","min-width":"120","show-overflow-tooltip":""},{default:n(({row:o})=>[e($,{onClick:_=>C(o)},{default:n(()=>[p(h(o.name),1)]),_:2},1032,["onClick"])]),_:1}),e(s,{prop:"groupId",label:"流程分组","show-overflow-tooltip":"",width:"120"},{default:n(({row:o})=>[p(h(y(S)[o.groupId]),1)]),_:1}),e(s,{prop:"version",width:"60",label:"版本"}),e(s,{prop:"state",label:"模板状态",width:"100"},{default:n(({row:o})=>[e(N,{type:"primary","disable-transitions":""},{default:n(()=>[p(h(y(j)[o.state]),1)]),_:2},1024)]),_:1}),e(s,{prop:"userName",label:"创建人","show-overflow-tooltip":"",width:"120"}),e(s,{prop:"createdTime",label:"创建时间",formatter:V,width:"180"}),e(s,{label:"操作",width:"180",fixed:"right","header-align":"center",align:"center"},{default:n(({row:o})=>[e(u,{icon:"ele-CaretRight",size:"small",text:"",type:"primary",onClick:_=>C(o)},{default:n(()=>[oe]),_:2},1032,["onClick"]),v((m(),f(u,{icon:"ele-EditPen",size:"small",text:"",type:"primary",onClick:_=>l.onEdit(o)},{default:n(()=>[ae]),_:2},1032,["onClick"])),[[z,"api:bpm:template:control"]]),v((m(),f(u,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:_=>A(o)},{default:n(()=>[ne]),_:2},1032,["onClick"])),[[z,"api:bpm:template:control"]])]),_:1})]),_:1},8,["data"])),[[H,t.loading]]),K("div",le,[e(Y,{currentPage:t.pageInput.currentPage,"onUpdate:currentPage":a[2]||(a[2]=o=>t.pageInput.currentPage=o),"page-size":t.pageInput.pageSize,"onUpdate:page-size":a[3]||(a[3]=o=>t.pageInput.pageSize=o),total:t.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:B,onCurrentChange:L,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1})])}}});export{ve as default};
