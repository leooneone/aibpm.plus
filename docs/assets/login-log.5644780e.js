var M=Object.defineProperty;var N=(d,e,a)=>e in d?M(d,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[e]=a;var u=(d,e,a)=>(N(d,typeof e!="symbol"?e+"":e,a),a);import{d as h,O as D,o as T,S as r,a4 as U,e as y,f as k,z as t,m as s,G as V,E as B,p as j,l as H,x as g,y as c,g as w}from"./vue.df334614.js";import{H as Y,C as b}from"./http-client.ff22776c.js";import{d as K}from"./dayjs.min.0acfa903.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.08e609be.js";import"./js.cookie.cf83ad76.js";import"./_commonjsHelpers.042e6b4d.js";class O extends Y{constructor(){super(...arguments);u(this,"getPage",(a,i={})=>this.request({path:"/api/admin/login-log/get-page",method:"POST",body:a,secure:!0,type:b.Json,format:"json",...i}));u(this,"add",(a,i={})=>this.request({path:"/api/admin/login-log/add",method:"POST",body:a,secure:!0,type:b.Json,format:"json",...i}))}}const q={style:{padding:"0px 0px 8px 8px"}},E=g(" 查询 "),J=w("br",null,null,-1),A={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},F=h({name:"admin/loginLog"}),ae=h({...F,setup(d){const e=D({loading:!1,loginLogFormTitle:"",filterModel:{createdUserName:""},total:0,pageInput:{currentPage:1,pageSize:20},loginLogListData:[],loginLogLogsTitle:""});T(()=>{i()});const a=(l,o,m)=>K(m).format("YYYY-MM-DD HH:mm:ss"),i=async()=>{var o,m;e.loading=!0,e.pageInput.filter=e.filterModel;const l=await new O().getPage(e.pageInput);e.loginLogListData=((o=l==null?void 0:l.data)==null?void 0:o.list)??[],e.total=((m=l.data)==null?void 0:m.total)??0,e.loading=!1},x=l=>{e.pageInput.pageSize=l,i()},v=l=>{e.pageInput.currentPage=l,i()};return(l,o)=>{const m=r("el-input"),_=r("el-form-item"),L=r("el-button"),P=r("el-form"),f=r("el-card"),p=r("el-table-column"),z=r("el-tag"),S=r("el-table"),C=r("el-pagination"),I=U("loading");return y(),k("div",q,[t(f,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:s(()=>[t(P,{model:e.filterModel,inline:!0,onSubmit:o[1]||(o[1]=V(()=>{},["stop","prevent"]))},{default:s(()=>[t(_,{prop:"name"},{default:s(()=>[t(m,{modelValue:e.filterModel.createdUserName,"onUpdate:modelValue":o[0]||(o[0]=n=>e.filterModel.createdUserName=n),placeholder:"登录账户",onKeyup:B(i,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(_,null,{default:s(()=>[t(L,{type:"primary",icon:"ele-Search",onClick:i},{default:s(()=>[E]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(f,{shadow:"never",style:{"margin-top":"8px"}},{default:s(()=>[j((y(),H(S,{data:e.loginLogListData,"row-key":"id",style:{width:"100%"}},{default:s(()=>[t(p,{prop:"createdUserName",label:"操作账号",width:"100"},{default:s(({row:n})=>[g(c(n.createdUserName),1),J,g(c(n.nickName),1)]),_:1}),t(p,{prop:"ip",label:"IP地址",width:"130"}),t(p,{prop:"browser",label:"浏览器",width:"100"}),t(p,{prop:"os",label:"操作系统",width:"100"}),t(p,{prop:"elapsedMilliseconds",label:"耗时(毫秒)",width:"100"}),t(p,{prop:"status",label:"登录状态",width:"80"},{default:s(({row:n})=>[t(z,{type:n.status?"success":"danger","disable-transitions":""},{default:s(()=>[g(c(n.status?"成功":"失败"),1)]),_:2},1032,["type"])]),_:1}),t(p,{prop:"createdTime",label:"登录时间",formatter:a,width:"160"}),t(p,{prop:"msg",label:"登录消息",width:""})]),_:1},8,["data"])),[[I,e.loading]]),w("div",A,[t(C,{currentPage:e.pageInput.currentPage,"onUpdate:currentPage":o[2]||(o[2]=n=>e.pageInput.currentPage=n),"page-size":e.pageInput.pageSize,"onUpdate:page-size":o[3]||(o[3]=n=>e.pageInput.pageSize=n),total:e.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:x,onCurrentChange:v,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1})])}}});export{ae as default};
