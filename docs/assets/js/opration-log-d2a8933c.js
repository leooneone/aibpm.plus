var C=Object.defineProperty;var D=(s,n,e)=>n in s?C(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var g=(s,n,e)=>(D(s,typeof n!="symbol"?n+"":n,e),e);import{k as w,e as N,l as T,i as U,m as i,$ as V,o as b,c as B,p as t,y as r,Y,am as j,G as u,M as K,D as H,v as _,a as v}from"./@vue-8306d5ee.js";import{J,K as h}from"./index-1c0db287.js";import{d as O}from"./dayjs-97457aaf.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-3baf0d65.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./@intlify-869ec77a.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";class q extends J{constructor(){super(...arguments);g(this,"getPage",(e,d={})=>this.request({path:"/api/admin/opration-log/get-page",method:"POST",body:e,secure:!0,type:h.Json,format:"json",...d}));g(this,"add",(e,d={})=>this.request({path:"/api/admin/opration-log/add",method:"POST",body:e,secure:!0,type:h.Json,format:"json",...d}))}}const R={class:"my-layout"},A=v("br",null,null,-1),E={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},F=w({name:"admin/oprationLog"}),ve=w({...F,setup(s){const n=N(),e=T({loading:!1,oprationLogFormTitle:"",filterModel:{createdUserName:""},total:0,pageInput:{currentPage:1,pageSize:20},oprationLogListData:[],oprationLogLogsTitle:""});U(()=>{c()});const d=(a,o,m)=>O(m).format("YYYY-MM-DD HH:mm:ss"),c=async()=>{var o,m;e.loading=!0,e.pageInput.filter=e.filterModel;const a=await new q().getPage(e.pageInput).catch(()=>{e.loading=!1});e.oprationLogListData=((o=a==null?void 0:a.data)==null?void 0:o.list)??[],e.total=((m=a==null?void 0:a.data)==null?void 0:m.total)??0,e.loading=!1},P=a=>{e.pageInput.pageSize=a,c()},L=async a=>{var o;e.pageInput.currentPage=a,await c(),(o=n.value)==null||o.setScrollTop(0)};return(a,o)=>{const m=i("el-input"),f=i("el-form-item"),S=i("el-button"),M=i("el-form"),y=i("el-card"),p=i("el-table-column"),z=i("el-tag"),I=i("el-table"),k=i("el-pagination"),x=V("loading");return b(),B("div",R,[t(y,{class:"mt8",shadow:"never","body-style":{paddingBottom:"0"}},{default:r(()=>[t(M,{model:e.filterModel,inline:!0,onSubmit:o[1]||(o[1]=Y(()=>{},["stop","prevent"]))},{default:r(()=>[t(f,{prop:"name"},{default:r(()=>[t(m,{modelValue:e.filterModel.createdUserName,"onUpdate:modelValue":o[0]||(o[0]=l=>e.filterModel.createdUserName=l),placeholder:"操作账号",onKeyup:j(c,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(f,null,{default:r(()=>[t(S,{type:"primary",icon:"ele-Search",onClick:c},{default:r(()=>[u(" 查询 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(y,{class:"my-fill mt8",shadow:"never"},{default:r(()=>[K((b(),H(I,{ref_key:"tableRef",ref:n,data:e.oprationLogListData,"row-key":"id",style:{width:"100%"}},{default:r(()=>[t(p,{prop:"createdUserName",label:"操作账号",width:"100"},{default:r(({row:l})=>[u(_(l.createdUserName),1),A,u(_(l.nickName),1)]),_:1}),t(p,{prop:"ip",label:"IP地址",width:"130"}),t(p,{prop:"apiLabel",label:"操作名称","min-width":"220"}),t(p,{prop:"apiPath",label:"操作接口","min-width":"260"}),t(p,{prop:"elapsedMilliseconds",label:"耗时(毫秒)",width:"100"}),t(p,{prop:"status",label:"操作状态",width:"80"},{default:r(({row:l})=>[t(z,{type:l.status?"success":"danger","disable-transitions":""},{default:r(()=>[u(_(l.status?"成功":"失败"),1)]),_:2},1032,["type"])]),_:1}),t(p,{prop:"createdTime",label:"操作时间",formatter:d,width:"160"}),t(p,{prop:"msg",label:"操作消息",width:""})]),_:1},8,["data"])),[[x,e.loading]]),v("div",E,[t(k,{currentPage:e.pageInput.currentPage,"onUpdate:currentPage":o[2]||(o[2]=l=>e.pageInput.currentPage=l),"page-size":e.pageInput.pageSize,"onUpdate:pageSize":o[3]||(o[3]=l=>e.pageInput.pageSize=l),total:e.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:P,onCurrentChange:L,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1})])}}});export{ve as default};
