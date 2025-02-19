var M=Object.defineProperty;var N=(d,e,l)=>e in d?M(d,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):d[e]=l;var g=(d,e,l)=>(N(d,typeof e!="symbol"?e+"":e,l),l);import{d as w,O as D,o as T,S as i,a4 as U,e as b,f as k,z as t,m as n,G as V,E as B,p as j,l as H,x as u,y as c,g as x}from"./vue.df334614.js";import{H as O,C as h}from"./http-client.ff22776c.js";import{d as Y}from"./dayjs.min.0acfa903.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.08e609be.js";import"./js.cookie.cf83ad76.js";import"./_commonjsHelpers.042e6b4d.js";class K extends O{constructor(){super(...arguments);g(this,"getPage",(l,p={})=>this.request({path:"/api/admin/opration-log/get-page",method:"POST",body:l,secure:!0,type:h.Json,format:"json",...p}));g(this,"add",(l,p={})=>this.request({path:"/api/admin/opration-log/add",method:"POST",body:l,secure:!0,type:h.Json,format:"json",...p}))}}const q={style:{padding:"0px 0px 8px 8px"}},E=u(" 查询 "),J=x("br",null,null,-1),A={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},F=w({name:"admin/oprationLog"}),oe=w({...F,setup(d){const e=D({loading:!1,oprationLogFormTitle:"",filterModel:{createdUserName:""},total:0,pageInput:{currentPage:1,pageSize:20},oprationLogListData:[],oprationLogLogsTitle:""});T(()=>{p()});const l=(s,o,m)=>Y(m).format("YYYY-MM-DD HH:mm:ss"),p=async()=>{var o,m;e.loading=!0,e.pageInput.filter=e.filterModel;const s=await new K().getPage(e.pageInput);e.oprationLogListData=((o=s==null?void 0:s.data)==null?void 0:o.list)??[],e.total=((m=s.data)==null?void 0:m.total)??0,e.loading=!1},P=s=>{e.pageInput.pageSize=s,p()},v=s=>{e.pageInput.currentPage=s,p()};return(s,o)=>{const m=i("el-input"),_=i("el-form-item"),L=i("el-button"),z=i("el-form"),f=i("el-card"),r=i("el-table-column"),y=i("el-tag"),S=i("el-table"),C=i("el-pagination"),I=U("loading");return b(),k("div",q,[t(f,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:n(()=>[t(z,{model:e.filterModel,inline:!0,onSubmit:o[1]||(o[1]=V(()=>{},["stop","prevent"]))},{default:n(()=>[t(_,{prop:"name"},{default:n(()=>[t(m,{modelValue:e.filterModel.createdUserName,"onUpdate:modelValue":o[0]||(o[0]=a=>e.filterModel.createdUserName=a),placeholder:"操作账号",onKeyup:B(p,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(_,null,{default:n(()=>[t(L,{type:"primary",icon:"ele-Search",onClick:p},{default:n(()=>[E]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(f,{shadow:"never",style:{"margin-top":"8px"}},{default:n(()=>[j((b(),H(S,{data:e.oprationLogListData,"row-key":"id",style:{width:"100%"}},{default:n(()=>[t(r,{prop:"createdUserName",label:"操作账号",width:"100"},{default:n(({row:a})=>[u(c(a.createdUserName),1),J,u(c(a.nickName),1)]),_:1}),t(r,{prop:"ip",label:"IP地址",width:"130"}),t(r,{prop:"apiLabel",label:"操作名称",width:""}),t(r,{prop:"apiPath",label:"操作接口",width:""}),t(r,{prop:"elapsedMilliseconds",label:"耗时(毫秒)",width:"100"}),t(r,{prop:"status",label:"操作状态",width:"80"},{default:n(({row:a})=>[t(y,{type:a.status?"success":"danger","disable-transitions":""},{default:n(()=>[u(c(a.status?"成功":"失败"),1)]),_:2},1032,["type"])]),_:1}),t(r,{prop:"status",label:"登录状态",width:"80"},{default:n(({row:a})=>[t(y,{type:a.status?"success":"danger","disable-transitions":""},{default:n(()=>[u(c(a.status?"成功":"失败"),1)]),_:2},1032,["type"])]),_:1}),t(r,{prop:"createdTime",label:"登录时间",formatter:l,width:"160"}),t(r,{prop:"msg",label:"登录消息",width:""})]),_:1},8,["data"])),[[I,e.loading]]),x("div",A,[t(C,{currentPage:e.pageInput.currentPage,"onUpdate:currentPage":o[2]||(o[2]=a=>e.pageInput.currentPage=a),"page-size":e.pageInput.pageSize,"onUpdate:page-size":o[3]||(o[3]=a=>e.pageInput.pageSize=a),total:e.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:P,onCurrentChange:v,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1})])}}});export{oe as default};
