import{_ as J}from"./preload-helper.101896b7.js";import"./dayjs.min.0acfa903.js";import{e as g}from"./mitt.7f99bbc0.js";import{i as k}from"./test.dc379863.js";import{d as L,a6 as T,r as A,O as P,c as R,w as M,o as $,P as j,S as a,a4 as v,e as n,f as q,p,l as o,m as s,z as r,g as b,u as _,t as d,x as f,y as D}from"./vue.df334614.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";import"./toolsValidate.7cb139e2.js";const H={style:{padding:"0px 0px 8px 8px",width:"100%"}},K={class:"my-flex"},Q={class:"ml10 my-flex-fill my-flex-y-center"},W=f(" 上传 "),X=L({name:"admin/file"}),Y=L({...X,props:{modelValue:Array,disabled:Boolean},emits:["sure","update:modelValue"],setup(U,{emit:N}){const c=U,w=T(()=>J(()=>import("./file-upload.54c8fdb4.js"),["assets/file-upload.54c8fdb4.js","assets/http-client.28a8ff7a.js","assets/index.de963593.js","assets/index.390778f0.js","assets/vue.df334614.js","assets/index.4621962e.js","assets/storage.6b2e7cd0.js","assets/mitt.7f99bbc0.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/file-upload.6d96abac.css"])),m=A(),l=P({loading:!1,fileFormTitle:"",fileListData:JSON.parse(JSON.stringify(c.modelValue))||[],fileLogsTitle:""}),V=e=>{l.fileListData.push(e)},u=R(()=>{let e=[];return l.fileListData.forEach(i=>{k(i.extension)&&i.linkUrl&&e.push(i.linkUrl)}),e});M(()=>l.fileListData,e=>{N("update:modelValue",JSON.parse(JSON.stringify(e)))},{deep:!0}),$(()=>{g.on("refreshFile",async e=>{l.fileListData.push(e)})});const C=(e,i)=>{l.fileListData.splice(i,1)};j(()=>{g.off("refreshFile")});const O=e=>u.value.indexOf(e),S=()=>{m.value.open()};return(e,i)=>{const I=a("el-image"),z=a("el-link"),h=a("el-table-column"),y=a("el-button"),B=a("el-table"),x=v("auth"),F=v("loading");return n(),q("div",H,[l.fileListData.length>0?p((n(),o(B,{key:0,data:l.fileListData,"row-key":"id",style:{width:"100%"},"show-header":!1},{default:s(()=>[r(h,{prop:"fileName",label:"文件名"},{default:s(({row:t})=>[b("div",K,[_(k)(t.extension)?(n(),o(I,{key:0,src:t.linkUrl,"preview-src-list":_(u),"initial-index":O(t.linkUrl),lazy:!0,"hide-on-click-modal":!0,fit:"scale-down","preview-teleported":"",style:{height:"30px"}},null,8,["src","preview-src-list","initial-index"])):d("",!0),b("div",Q,[r(z,{class:"my-el-link mr12 ml12",href:t.linkUrl,type:"primary",size:"small",underline:!1,target:"_blank"},{default:s(()=>[f(D((t.fileName||"")+(t.extension||"")),1)]),_:2},1032,["href"]),f(" "+D(t.sizeFormat),1)])])]),_:1}),c.disabled?d("",!0):(n(),o(h,{key:0,label:"操作",fixed:"right","header-align":"center",align:"center",width:"35"},{default:s(({row:t,$index:E})=>[p(r(y,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:Z=>C(t,E)},null,8,["onClick"]),[[x,"api:admin:file:delete"]])]),_:1}))]),_:1},8,["data"])),[[F,l.loading]]):d("",!0),c.disabled?d("",!0):p((n(),o(y,{key:1,type:"primary",icon:"ele-Upload",onClick:S},{default:s(()=>[W]),_:1})),[[x,"api:admin:file:upload-file"]]),r(_(w),{ref_key:"fileUploadRef",ref:m,title:"上传文件",onSuccess:V},null,512)])}}});const re=G(Y,[["__scopeId","data-v-f460e24b"]]);export{re as default};
