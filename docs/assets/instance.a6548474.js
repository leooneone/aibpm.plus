var Y=Object.defineProperty;var A=(c,i,e)=>i in c?Y(c,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[i]=e;var d=(c,i,e)=>(A(c,typeof i!="symbol"?i+"":i,e),e);import{_ as F}from"./preload-helper.101896b7.js";import{c as G,d as D}from"./data-contracts.9d84138f.js";import{H as Q,C as h}from"./http-client.1087bc02.js";import{d as K}from"./dayjs.min.0acfa903.js";import{d as M,a6 as W,r as X,O as Z,o as ee,S as p,a4 as P,e as b,f as te,g as S,z as t,m as l,p as T,l as z,x as _,y as w,u as g,t as ae,L as oe}from"./vue.df334614.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.08e609be.js";import"./js.cookie.cf83ad76.js";import"./_commonjsHelpers.042e6b4d.js";class E extends Q{constructor(){super(...arguments);d(this,"get",(e,o={})=>this.request({path:"/api/bpm/instance/get",method:"GET",query:e,secure:!0,format:"json",...o}));d(this,"page",(e,o={})=>this.request({path:"/api/bpm/instance/page",method:"POST",body:e,secure:!0,type:h.Json,format:"json",...o}));d(this,"start",(e,o={})=>this.request({path:"/api/bpm/instance/start",method:"POST",query:e,secure:!0,format:"json",...o}));d(this,"add",(e,o={})=>this.request({path:"/api/bpm/instance/add",method:"POST",body:e,secure:!0,type:h.Json,...o}));d(this,"update",(e,o={})=>this.request({path:"/api/bpm/instance/update",method:"PUT",body:e,secure:!0,type:h.Json,...o}));d(this,"delete",(e,o={})=>this.request({path:"/api/bpm/instance/delete",method:"DELETE",query:e,secure:!0,...o}));d(this,"softDelete",(e,o={})=>this.request({path:"/api/bpm/instance/soft-delete",method:"DELETE",query:e,secure:!0,...o}));d(this,"batchSoftDelete",(e,o={})=>this.request({path:"/api/bpm/instance/batch-soft-delete",method:"PUT",body:e,secure:!0,type:h.Json,...o}))}}const ne={style:{padding:"0px 0px 8px 8px"}},se=_(" 查询 "),le=_("进入"),ie=_("撤回"),re={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},pe=M({name:"bpm/instance"}),Ce=M({...pe,props:{state:String,isHandled:Boolean},setup(c){const i=c,e=W(()=>F(()=>import("./myForm.d9e8d408.js"),["assets/myForm.d9e8d408.js","assets/preload-helper.101896b7.js","assets/data-contracts.9d84138f.js","assets/http-client.1087bc02.js","assets/index.de963593.js","assets/index.390778f0.js","assets/vue.df334614.js","assets/index.4621962e.js","assets/storage.08e609be.js","assets/js.cookie.cf83ad76.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/myForm.8bf82b27.css"])),{proxy:o}=oe(),{dic_bpm_group:q}=o.$dict("bpm-group"),v=X(),a=Z({loading:!1,filterModel:{name:""},total:0,pageInput:{currentPage:1,pageSize:20,filter:{}},listData:[]});ee(()=>{f()});const V=(s,r,u)=>K(u).format("YYYY-MM-DD HH:mm:ss"),f=async()=>{var r,u;a.loading=!0,i.state&&(a.pageInput.filter.state=i.state),i.isHandled&&(a.pageInput.filter.isHandled=!0);const s=await new E().page(a.pageInput);a.listData=((r=s==null?void 0:s.data)==null?void 0:r.list)??[],a.total=((u=s.data)==null?void 0:u.total)??0,a.loading=!1},H=s=>{o.$modal.confirmDelete(`确定要取消【${s.name}】流程?`).then(async()=>{await new E().delete({id:s.id},{loading:!0,showSuccessMessage:!0}),f()}).catch(()=>{})},B=s=>{a.pageInput.pageSize=s,f()},$=s=>{a.pageInput.currentPage=s,f()},C=s=>{v.value.open({type:3,instanceId:s.id,templateId:s.workflowTemplateId})};return(s,r)=>{const u=p("el-input"),x=p("el-form-item"),y=p("el-button"),j=p("el-form"),I=p("el-card"),m=p("el-table-column"),L=p("el-link"),N=p("el-tag"),O=p("el-table"),U=p("el-pagination"),J=P("auth"),R=P("loading");return b(),te("section",null,[S("div",ne,[t(I,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:l(()=>[t(j,{model:a.filterModel,inline:!0},{default:l(()=>[t(x,{prop:"name"},{default:l(()=>[t(u,{modelValue:a.filterModel.name,"onUpdate:modelValue":r[0]||(r[0]=n=>a.filterModel.name=n),placeholder:"流程名称"},null,8,["modelValue"])]),_:1}),t(x,null,{default:l(()=>[t(y,{type:"primary",icon:"ele-Search",onClick:f},{default:l(()=>[se]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(I,{shadow:"never",style:{"margin-top":"8px"}},{default:l(()=>[T((b(),z(O,{data:a.listData,"row-key":"id",style:{width:"100%"},border:""},{default:l(()=>[t(m,{type:"index",width:"60",label:"序号"}),t(m,{prop:"referenceNo",label:"单号","show-overflow-tooltip":"",width:"120"}),t(m,{prop:"name",label:"流程名称","min-width":"120","show-overflow-tooltip":""},{default:l(({row:n})=>[t(L,{onClick:k=>C(n)},{default:l(()=>[_(w(n.name),1)]),_:2},1032,["onClick"])]),_:1}),t(m,{prop:"groupId",label:"流程分组","show-overflow-tooltip":"",width:"120"},{default:l(({row:n})=>[_(w(g(q)[n.groupId]),1)]),_:1}),t(m,{prop:"state",label:"流程状态",width:"100"},{default:l(({row:n})=>[t(N,{"disable-transitions":"",type:g(G)[n.state&127].toLowerCase()},{default:l(()=>[_(w(g(D)[n.state]),1)]),_:2},1032,["type"])]),_:1}),t(m,{prop:"initiator",label:"创建人","show-overflow-tooltip":"",width:"120"}),t(m,{prop:"createdTime",label:"创建时间",formatter:V,width:"180"}),t(m,{label:"操作",width:"180",fixed:"right","header-align":"center",align:"center"},{default:l(({row:n})=>[t(y,{icon:"ele-CaretRight",size:"small",text:"",type:"primary",onClick:k=>C(n)},{default:l(()=>[le]),_:2},1032,["onClick"]),g(D)[n.state]==="运行中"?T((b(),z(y,{key:0,icon:"ele-Promotion",size:"small",text:"",type:"primary",onClick:k=>H(n)},{default:l(()=>[ie]),_:2},1032,["onClick"])),[[J,"api:bpm:template:cancel"]]):ae("",!0)]),_:1})]),_:1},8,["data"])),[[R,a.loading]]),S("div",re,[t(U,{currentPage:a.pageInput.currentPage,"onUpdate:currentPage":r[1]||(r[1]=n=>a.pageInput.currentPage=n),"page-size":a.pageInput.pageSize,"onUpdate:page-size":r[2]||(r[2]=n=>a.pageInput.pageSize=n),total:a.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:B,onCurrentChange:$,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1})]),t(g(e),{ref_key:"formRef",ref:v},null,512)])}}});export{Ce as default};
