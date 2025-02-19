import{a as B,e as F,_ as T}from"./index-aa73a18b.js";import{a as E}from"./element-plus-e21f9b5a.js";import{k as g,e as L,l as M,j as f,m as l,o as A,c as j,p as o,y as a,a as i,G as d,u as G,S as H,T as J}from"./@vue-8306d5ee.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./@intlify-869ec77a.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-8ef115d9.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./lodash-es-f559e892.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const O=n=>(H("data-v-0532559e"),n=n(),J(),n),q={class:"mb15"},K={class:"mt5"},P=O(()=>i("div",{class:"el-upload__text"},[d("拖拽上传或"),i("em",null,"点击上传")],-1)),Q={class:"dialog-footer"},W=g({name:"admin/file/upload"}),X=g({...W,props:{title:{type:String,default:""}},setup(n,{expose:y}){const _=B(),p=L(),e=M({showDialog:!1,sureLoading:!1,fileDirectory:"",fileReName:!0,fileList:[],token:_.getToken()}),h=f(()=>"//api/admin/file/upload-file"),v=f(()=>({Authorization:"Bearer "+e.token})),x=async()=>{e.showDialog=!0},k=s=>{var c;let t="";if(s.message)try{t=(c=JSON.parse(s.message))==null?void 0:c.msg}catch{t=s.message||""}t&&E({message:t,type:"error"})},w=s=>{s!=null&&s.success&&F.emit("refreshFile")},V=async()=>{p.value.clearFiles(["success","fail"])},D=()=>{e.showDialog=!1},b=async()=>{p.value.submit()};return y({open:x}),(s,t)=>{const c=l("el-input"),m=l("el-col"),N=l("el-switch"),U=l("el-row"),C=l("el-alert"),S=l("ele-UploadFilled"),R=l("el-icon"),I=l("el-upload"),u=l("el-button"),z=l("el-dialog");return A(),j("div",null,[o(z,{modelValue:e.showDialog,"onUpdate:modelValue":t[2]||(t[2]=r=>e.showDialog=r),title:n.title,draggable:"","close-on-click-modal":!1,"close-on-press-escape":!1,width:"600px"},{footer:a(()=>[i("span",Q,[o(u,{onClick:V,size:"default"},{default:a(()=>[d("清空已上传")]),_:1}),o(u,{onClick:D,size:"default"},{default:a(()=>[d("取 消")]),_:1}),o(u,{type:"primary",onClick:b,size:"default",loading:e.sureLoading},{default:a(()=>[d("确 定")]),_:1},8,["loading"])])]),default:a(()=>[i("div",q,[o(U,{gutter:35},{default:a(()=>[o(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:a(()=>[o(c,{modelValue:e.fileDirectory,"onUpdate:modelValue":t[0]||(t[0]=r=>e.fileDirectory=r),placeholder:"文件目录",clearable:""},null,8,["modelValue"])]),_:1}),o(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:a(()=>[o(N,{modelValue:e.fileReName,"onUpdate:modelValue":t[1]||(t[1]=r=>e.fileReName=r),"active-text":"文件自动重命名"},null,8,["modelValue"])]),_:1})]),_:1}),i("div",K,[o(C,{class:"my-el-alert",title:"文件目录不填则默认使用本地上传格式：upload/yyyy/MM/dd",type:"info",closable:!1})])]),i("div",null,[o(I,{ref_key:"uploadRef",ref:p,action:h.value,headers:v.value,data:{fileDirectory:e.fileDirectory,fileReName:e.fileReName},drag:"",multiple:"","auto-upload":!1,"before-upload":()=>{e.token=G(_).getToken()},"on-success":w,"on-error":k},{default:a(()=>[o(R,{class:"el-icon--upload"},{default:a(()=>[o(S)]),_:1}),P]),_:1},8,["action","headers","data","before-upload"])])]),_:1},8,["modelValue","title"])])}}});const Ve=T(X,[["__scopeId","data-v-0532559e"]]);export{Ve as default};
