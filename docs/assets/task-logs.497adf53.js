var L=Object.defineProperty;var P=(n,o,e)=>o in n?L(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e;var y=(n,o,e)=>(P(n,typeof o!="symbol"?o+"":o,e),e);import{H as S,C as T}from"./http-client.28a8ff7a.js";import{d as V}from"./dayjs.min.0acfa903.js";import{d as w,O as H,S as r,a4 as Y,e as d,l as c,m as p,g as _,z as l,p as j,x as m}from"./vue.df334614.js";import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.6b2e7cd0.js";import"./_commonjsHelpers.042e6b4d.js";class M extends S{constructor(){super(...arguments);y(this,"getPage",(e,g={})=>this.request({path:"/api/admin/task-log/get-page",method:"POST",body:e,secure:!0,type:T.Json,format:"json",...g}))}}const N={class:"my-drawer-body-padding"},U=m("失败"),O=m("成功"),q={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},A={style:{flex:"auto",padding:"20px !important"}},F=m("取 消"),J=w({name:"admin/taskLog"}),Q=w({...J,props:{title:{type:String,default:""}},setup(n,{expose:o}){const e=H({showDialog:!1,loading:!1,taskLogFormTitle:"",total:0,pageInput:{currentPage:1,pageSize:20,filter:{taskId:null}},taskLogListData:[]}),g=(t,s,a)=>V(a).format("YYYY-MM-DD HH:mm:ss"),u=async()=>{var s,a;e.loading=!0;const t=await new M().getPage(e.pageInput);e.taskLogListData=((s=t==null?void 0:t.data)==null?void 0:s.list)??[],e.total=((a=t.data)==null?void 0:a.total)??0,e.loading=!1},h=t=>{e.pageInput.pageSize=t,u()},k=t=>{e.pageInput.currentPage=t,u()},b=t=>{e.pageInput.filter&&(e.pageInput.filter.taskId=t.id),u(),e.showDialog=!0},x=()=>{e.showDialog=!1};return o({open:b}),(t,s)=>{const a=r("el-table-column"),f=r("el-tag"),v=r("el-table"),z=r("el-pagination"),I=r("el-button"),D=r("el-drawer"),C=Y("loading");return d(),c(D,{modelValue:e.showDialog,"onUpdate:modelValue":s[2]||(s[2]=i=>e.showDialog=i),title:n.title,direction:"ltr",size:"780"},{footer:p(()=>[_("div",A,[l(I,{onClick:x,size:"default"},{default:p(()=>[F]),_:1})])]),default:p(()=>[_("div",N,[j((d(),c(v,{data:e.taskLogListData,"row-key":"id",style:{width:"100%"}},{default:p(()=>[l(a,{prop:"round",label:"当前次数",width:"80"}),l(a,{prop:"success",label:"状态",width:"80"},{default:p(({row:i})=>[i.success?(d(),c(f,{key:1,type:"success","disable-transitions":""},{default:p(()=>[O]),_:1})):(d(),c(f,{key:0,type:"danger","disable-transitions":""},{default:p(()=>[U]),_:1}))]),_:1}),l(a,{prop:"elapsedMilliseconds",label:"耗时(ms)",width:"100"}),l(a,{prop:"exception",label:"异常","min-width":"180"}),l(a,{prop:"createTime",label:"创建时间",formatter:g,width:"160"}),l(a,{prop:"Remark",label:"备注","min-width":"180"})]),_:1},8,["data"])),[[C,e.loading]]),_("div",q,[l(z,{currentPage:e.pageInput.currentPage,"onUpdate:currentPage":s[0]||(s[0]=i=>e.pageInput.currentPage=i),"page-size":e.pageInput.pageSize,"onUpdate:page-size":s[1]||(s[1]=i=>e.pageInput.pageSize=i),total:e.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:h,onCurrentChange:k,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])])]),_:1},8,["modelValue","title"])}}});const ae=B(Q,[["__scopeId","data-v-4da3cffa"]]);export{ae as default};
