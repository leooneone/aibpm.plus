var J=Object.defineProperty;var G=(c,s,o)=>s in c?J(c,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[s]=o;var g=(c,s,o)=>(G(c,typeof s!="symbol"?s+"":s,o),o);import{_ as Q}from"./ai-form-7f0c78d7.js";import{k as T,h as W,e as X,l as Z,j as ee,i as te,E as ie,m as r,$ as N,o as y,c as le,p as l,y as a,Y as ae,am as oe,G as d,M as b,D as v,a as f,u as D,x as ne,v as x,R as re}from"./@vue-8306d5ee.js";import{J as se,K as k,e as w,_ as pe}from"./index-aa73a18b.js";import{d as me}from"./dayjs-97457aaf.js";import{i as P}from"./test-160dfe48.js";import{c as de}from"./commonFunction-06d6b11f.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./@intlify-869ec77a.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";import"./vue-clipboard3-6f6caaf2.js";import"./clipboard-1d5cbb20.js";import"./formatTime-29ac8c52.js";class S extends se{constructor(){super(...arguments);g(this,"getPage",(o,p={})=>this.request({path:"/api/admin/file/get-page",method:"POST",body:o,secure:!0,type:k.Json,format:"json",...p}));g(this,"delete",(o,p={})=>this.request({path:"/api/admin/file/delete",method:"POST",body:o,secure:!0,type:k.Json,...p}));g(this,"uploadFile",(o,p,e={})=>this.request({path:"/api/admin/file/upload-file",method:"POST",query:p,body:o,secure:!0,type:k.FormData,format:"json",...e}));g(this,"uploadFiles",(o,p,e={})=>this.request({path:"/api/admin/file/upload-files",method:"POST",query:p,body:o,secure:!0,type:k.FormData,format:"json",...e}))}}const ce={class:"my-layout"},ue={class:"my-flex"},fe={class:"ml10 my-flex-fill my-flex-y-center"},_e={class:"mt10",style:{"text-align":"right",margin:"0"}},ge={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},ye=T({name:"admin/file"}),he=T({...ye,setup(c){const{proxy:s}=W(),o=re(()=>Q(()=>import("./file-upload-ec0230af.js"),["assets/js/file-upload-ec0230af.js","assets/js/index-aa73a18b.js","assets/js/@vue-8306d5ee.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-7f0c78d7.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/file-upload-40ef83c7.css"])),p=X(),e=Z({loading:!1,fileFormTitle:"",filterModel:{fileName:""},total:0,pageInput:{currentPage:1,pageSize:20},fileListData:[],fileLogsTitle:""}),{copyText:F}=de(),C=ee(()=>{let t=[];return e.fileListData.forEach(n=>{P(n.extension)&&n.linkUrl&&t.push(n.linkUrl)}),t});te(()=>{u(),w.off("refreshFile"),w.on("refreshFile",async()=>{u()})}),ie(()=>{w.off("refreshFile")});const M=t=>me(t).format("YYYY-MM-DD HH:mm:ss"),V=t=>C.value.indexOf(t),u=async()=>{var n,h;e.loading=!0;const t=await new S().getPage({...e.pageInput,filter:e.filterModel}).catch(()=>{e.loading=!1});e.fileListData=((n=t==null?void 0:t.data)==null?void 0:n.list)??[],e.total=((h=t==null?void 0:t.data)==null?void 0:h.total)??0,e.loading=!1},L=t=>{e.pageInput.pageSize=t,u()},j=t=>{e.pageInput.currentPage=t,u()},B=()=>{p.value.open()},O=t=>{s.$modal.confirmDelete(`确定要删除文件【${t.fileName}${t.extension}】?`).then(async()=>{await new S().delete({id:t.id},{loading:!0,showSuccessMessage:!0}),u()}).catch(()=>{})};return(t,n)=>{const h=r("el-input"),U=r("el-form-item"),_=r("el-button"),$=r("el-form"),z=r("el-card"),E=r("el-image"),m=r("el-table-column"),Y=r("el-popover"),q=r("el-link"),K=r("el-table"),R=r("el-pagination"),I=N("auth"),A=N("loading");return y(),le("div",ce,[l(z,{class:"mt8",shadow:"never","body-style":{paddingBottom:"0"}},{default:a(()=>[l($,{model:e.filterModel,inline:!0,onSubmit:n[1]||(n[1]=ae(()=>{},["stop","prevent"]))},{default:a(()=>[l(U,{prop:"name"},{default:a(()=>[l(h,{modelValue:e.filterModel.fileName,"onUpdate:modelValue":n[0]||(n[0]=i=>e.filterModel.fileName=i),placeholder:"文件名",onKeyup:oe(u,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(U,null,{default:a(()=>[l(_,{type:"primary",icon:"ele-Search",onClick:u},{default:a(()=>[d(" 查询 ")]),_:1}),b((y(),v(_,{type:"primary",icon:"ele-Upload",onClick:B},{default:a(()=>[d(" 上传 ")]),_:1})),[[I,"api:admin:file:upload-file"]])]),_:1})]),_:1},8,["model"])]),_:1}),l(z,{class:"my-fill mt8",shadow:"never"},{default:a(()=>[b((y(),v(K,{data:e.fileListData,"row-key":"id",style:{width:"100%"}},{default:a(()=>[l(m,{prop:"fileName",label:"文件名","min-width":"220"},{default:a(({row:i})=>[f("div",ue,[D(P)(i.extension)?(y(),v(E,{key:0,src:i.linkUrl,"preview-src-list":C.value,"initial-index":V(i.linkUrl),lazy:!0,"hide-on-click-modal":!0,fit:"scale-down","preview-teleported":"",style:{width:"80px",height:"80px"}},null,8,["src","preview-src-list","initial-index"])):ne("",!0),f("div",fe,[f("div",null,x((i.fileName||"")+(i.extension||"")),1)])])]),_:1}),l(m,{prop:"sizeFormat",label:"大小",width:"120"}),l(m,{prop:"createdUserName",label:"上传者",width:"80"},{default:a(({row:i})=>[d(x(i.modifiedUserName||i.createdUserName||""),1)]),_:1}),l(m,{prop:"createdTime",label:"更新时间",width:"100"},{default:a(({row:i})=>[d(x(M(i.modifiedTime||i.createdTime||"")),1)]),_:1}),l(m,{prop:"providerName",label:"供应商",width:"80"}),l(m,{prop:"bucketName",label:"存储桶","min-width":"120"}),l(m,{prop:"fileDirectory",label:"目录","min-width":"120"}),l(m,{label:"操作",width:"180",fixed:"right","header-align":"center",align:"center"},{default:a(({row:i})=>[l(Y,{width:220},{reference:a(()=>[l(_,{size:"small",text:"",type:"primary"},{default:a(()=>[d("地址")]),_:1})]),default:a(()=>[f("p",null,x(i.linkUrl),1),f("div",_e,[l(_,{icon:"ele-CopyDocument",size:"small",type:"primary",onClick:H=>D(F)(i.linkUrl)},{default:a(()=>[d("复制地址")]),_:2},1032,["onClick"])])]),_:2},1024),l(q,{class:"my-el-link mr12 ml12",href:i.linkUrl,type:"primary",icon:"ele-Download",size:"small",underline:!1,target:"_blank"},{default:a(()=>[d("下载")]),_:2},1032,["href"]),b((y(),v(_,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:H=>O(i)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"])),[[I,"api:admin:file:delete"]])]),_:1})]),_:1},8,["data"])),[[A,e.loading]]),f("div",ge,[l(R,{currentPage:e.pageInput.currentPage,"onUpdate:currentPage":n[2]||(n[2]=i=>e.pageInput.currentPage=i),"page-size":e.pageInput.pageSize,"onUpdate:pageSize":n[3]||(n[3]=i=>e.pageInput.pageSize=i),total:e.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:L,onCurrentChange:j,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1}),l(D(o),{ref_key:"fileUploadRef",ref:p,title:"上传文件"},null,512)])}}});const We=pe(he,[["__scopeId","data-v-e516a157"]]);export{We as default};
