var H=Object.defineProperty;var Y=(c,l,e)=>l in c?H(c,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[l]=e;var p=(c,l,e)=>(Y(c,typeof l!="symbol"?l+"":l,e),e);import{_ as G}from"./ai-form-7f0c78d7.js";import{c as U,e as J}from"./data-contracts-a56545c2.js";import{H as L,C as P}from"./http-client-ae6371dd.js";import{d as Q}from"./dayjs-97457aaf.js";import{k as z,e as W,h as K,l as X,i as Z,m as u,$ as T,o as g,c as ee,a as I,p as o,y as n,G as f,M as w,D as b,v as D,u as k,F as te,R as oe}from"./@vue-8306d5ee.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./@intlify-869ec77a.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./axios-21b846bc.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./index-aa73a18b.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";class q extends L{constructor(){super(...arguments);p(this,"activate",(e,t={})=>this.request({path:"/api/bpm/work-item/activate",method:"POST",query:e,secure:!0,...t}));p(this,"suspend",(e,t={})=>this.request({path:"/api/bpm/work-item/suspend",method:"POST",query:e,secure:!0,...t}));p(this,"cancel",(e,t={})=>this.request({path:"/api/bpm/work-item/cancel",method:"POST",query:e,secure:!0,...t}));p(this,"cancelInstance",(e,t={})=>this.request({path:"/api/bpm/work-item/cancel-instance",method:"POST",query:e,secure:!0,...t}));p(this,"resume",(e,t={})=>this.request({path:"/api/bpm/work-item/resume",method:"POST",query:e,secure:!0,...t}));p(this,"adustify",(e,t={})=>this.request({path:"/api/bpm/work-item/adustify",method:"POST",query:e,secure:!0,...t}));p(this,"urge",(e,t={})=>this.request({path:"/api/bpm/work-item/urge",method:"POST",query:e,secure:!0,...t}));p(this,"get",(e,t={})=>this.request({path:"/api/bpm/work-item/get",method:"GET",query:e,secure:!0,format:"json",...t}));p(this,"statstics",(e={})=>this.request({path:"/api/bpm/work-item/statstics",method:"POST",secure:!0,format:"json",...e}));p(this,"page",(e,t={})=>this.request({path:"/api/bpm/work-item/page",method:"POST",body:e,secure:!0,type:P.Json,format:"json",...t}));p(this,"start",(e,t={})=>this.request({path:"/api/bpm/work-item/start",method:"POST",query:e,secure:!0,format:"json",...t}));p(this,"getInstance",(e,t={})=>this.request({path:"/api/bpm/work-item/get-instance",method:"GET",query:e,secure:!0,format:"json",...t}));p(this,"submit",(e,t={})=>this.request({path:"/api/bpm/work-item/submit",method:"POST",body:e,secure:!0,type:P.Json,...t}))}}const ae={style:{padding:"0px 0px 8px 8px"}},ie={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},re=z({name:"bpm/template"}),je=z({...re,props:{state:{type:String,default:null},isMyself:{type:Boolean,default:!0},abc:{type:Boolean,default:!0}},setup(c){const l=c,e=oe(()=>G(()=>import("./myForm-f0da250c.js"),["assets/js/myForm-f0da250c.js","assets/js/ai-form-7f0c78d7.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/data-contracts-a56545c2.js","assets/js/http-client-ae6371dd.js","assets/js/axios-21b846bc.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/index-aa73a18b.js","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/js/WorkflowTemplate-0cd3c059.js","assets/css/myForm-024936cc.css"])),t=W(),{proxy:M}=K(),a=X({loading:!1,filterModel:{name:""},total:0,pageInput:{currentPage:1,pageSize:20,Filter:{State:l.state,isMyself:l.isMyself,Name:""}},listData:[]});Z(()=>{h()});const v=i=>{t.value.open({type:1,workItemId:i.id,templateId:i.workflowTemplateId})},O=(i,s,d)=>Q(d).format("YYYY-MM-DD HH:mm:ss"),h=async()=>{var s,d;a.loading=!0;const i=await new q().page(a.pageInput);a.listData=((s=i==null?void 0:i.data)==null?void 0:s.list)??[],a.total=((d=i.data)==null?void 0:d.total)??0,a.loading=!1},N=i=>{M.$modal.confirmDelete(`确定要删除【${i.name}】工作项?`).then(async()=>{await new q().delete({id:i.id},{loading:!0,showSuccessMessage:!0}),h()}).catch(()=>{})},j=i=>{a.pageInput.pageSize=i,h()},B=i=>{a.pageInput.currentPage=i,h()};return(i,s)=>{const d=u("el-input"),S=u("el-form-item"),_=u("el-button"),V=u("el-form"),C=u("el-card"),m=u("el-table-column"),$=u("el-link"),R=u("el-tag"),E=u("el-table"),A=u("el-pagination"),x=T("auth"),F=T("loading");return g(),ee(te,null,[I("div",ae,[o(C,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:n(()=>[o(V,{model:a.filterModel,inline:!0},{default:n(()=>[o(S,{prop:"name"},{default:n(()=>[o(d,{modelValue:a.filterModel.name,"onUpdate:modelValue":s[0]||(s[0]=r=>a.filterModel.name=r),placeholder:"工作项名称"},null,8,["modelValue"])]),_:1}),o(S,null,{default:n(()=>[o(_,{type:"primary",icon:"ele-Search",onClick:h},{default:n(()=>[f(" 查询 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),o(C,{shadow:"never",style:{"margin-top":"8px"}},{default:n(()=>[w((g(),b(E,{data:a.listData,"row-key":"id",style:{width:"100%"},border:""},{default:n(()=>[o(m,{type:"index",width:"60",label:"序号"}),o(m,{prop:"activityName",label:"工作项名称","min-width":"120","show-overflow-tooltip":""},{default:n(({row:r})=>[o($,{onClick:y=>v(r)},{default:n(()=>[f(D(r.activityName),1)]),_:2},1032,["onClick"])]),_:1}),o(m,{prop:"referenceNo",label:"单号","show-overflow-tooltip":"",width:"120"}),o(m,{prop:"instanceName",label:"流程名称","show-overflow-tooltip":"",width:"120"}),o(m,{prop:"state",label:"工作项状态",width:"100"},{default:n(({row:r})=>[o(R,{"disable-transitions":"",type:k(U)[r.state&127].toLowerCase()},{default:n(()=>[f(D(k(J)[r.state]),1)]),_:2},1032,["type"])]),_:1}),o(m,{prop:"initiator",label:"创建人","show-overflow-tooltip":"",width:"120"}),o(m,{prop:"participant",label:"审核人","show-overflow-tooltip":"",width:"120"}),o(m,{prop:"executor",label:"处理人","show-overflow-tooltip":"",width:"120"}),o(m,{prop:"startTime",label:"创建时间",formatter:O,width:"180"}),o(m,{label:"操作",width:"180",fixed:"right","header-align":"center",align:"center"},{default:n(({row:r})=>[o(_,{icon:"ele-CaretRight",size:"small",text:"",type:"primary",onClick:y=>v(r)},{default:n(()=>[f("进入")]),_:2},1032,["onClick"]),w((g(),b(_,{icon:"ele-Promotion",size:"small",text:"",type:"primary",onClick:y=>i.onRun(r)},{default:n(()=>[f("执行")]),_:2},1032,["onClick"])),[[x,"api:bpm:template:run"]]),w((g(),b(_,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:y=>N(r)},{default:n(()=>[f("删除")]),_:2},1032,["onClick"])),[[x,"api:bpm:template:delete"]])]),_:1})]),_:1},8,["data"])),[[F,a.loading]]),I("div",ie,[o(A,{currentPage:a.pageInput.currentPage,"onUpdate:currentPage":s[1]||(s[1]=r=>a.pageInput.currentPage=r),"page-size":a.pageInput.pageSize,"onUpdate:pageSize":s[2]||(s[2]=r=>a.pageInput.pageSize=r),total:a.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:j,onCurrentChange:B,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1})]),o(k(e),{ref_key:"formRef",ref:t},null,512)],64)}}});export{je as default};
