import{g as z}from"./http-client.3dda918f.js";import{e as B}from"./mitt.7f99bbc0.js";import{d as g,r as I,O as L,c as f,S as l,e as A,f as M,z as e,m as t,g as s,u as m,x as c,ab as T,ac as E}from"./vue.72f2672d.js";import{_ as H}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./index.41e0794f.js";import"./storage.6b2e7cd0.js";const O=i=>(T("data-v-f454425d"),i=i(),E(),i),j={class:"mb15"},q={class:"mt5"},G=O(()=>s("div",{class:"el-upload__text"},[c("拖拽上传或"),s("em",null,"点击上传")],-1)),J={class:"dialog-footer"},K=c("清空已上传"),P=c("取 消"),Q=c("确 定"),W=g({name:"admin/file/upload"}),X=g({...W,props:{title:{type:String,default:""}},setup(i,{expose:y}){const u=I(),o=L({showDialog:!1,sureLoading:!1,fileDirectory:"",fileReName:!0,fileList:[]}),h=f(()=>"//api/admin/file/upload-file"),v=f(()=>({Authorization:"Bearer "+z()})),x=async(n={})=>{o.showDialog=!0},w=(n,a,r)=>{n!=null&&n.success&&B.emit("refreshFile")},V=async()=>{u.value.clearFiles(["success","fail"])},D=()=>{o.showDialog=!1},b=async()=>{u.value.submit()};return y({open:x}),(n,a)=>{const r=l("el-input"),p=l("el-col"),C=l("el-switch"),N=l("el-row"),k=l("el-alert"),R=l("ele-UploadFilled"),S=l("el-icon"),U=l("el-upload"),_=l("el-button"),F=l("el-dialog");return A(),M("div",null,[e(F,{modelValue:o.showDialog,"onUpdate:modelValue":a[2]||(a[2]=d=>o.showDialog=d),title:i.title,draggable:"",width:"600px"},{footer:t(()=>[s("span",J,[e(_,{onClick:V,size:"default"},{default:t(()=>[K]),_:1}),e(_,{onClick:D,size:"default"},{default:t(()=>[P]),_:1}),e(_,{type:"primary",onClick:b,size:"default",loading:o.sureLoading},{default:t(()=>[Q]),_:1},8,["loading"])])]),default:t(()=>[s("div",j,[e(N,{gutter:35},{default:t(()=>[e(p,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[e(r,{modelValue:o.fileDirectory,"onUpdate:modelValue":a[0]||(a[0]=d=>o.fileDirectory=d),placeholder:"文件目录",clearable:""},null,8,["modelValue"])]),_:1}),e(p,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[e(C,{modelValue:o.fileReName,"onUpdate:modelValue":a[1]||(a[1]=d=>o.fileReName=d),"active-text":"文件自动重命名"},null,8,["modelValue"])]),_:1})]),_:1}),s("div",q,[e(k,{class:"my-el-alert",title:"文件目录不填则默认使用本地上传格式：upload/yyyy/MM/dd",type:"info",closable:!1})])]),s("div",null,[e(U,{ref_key:"uploadRef",ref:u,action:m(h),headers:m(v),data:{fileDirectory:o.fileDirectory,fileReName:o.fileReName},drag:"",multiple:"","auto-upload":!1,"on-success":w},{default:t(()=>[e(S,{class:"el-icon--upload"},{default:t(()=>[e(R)]),_:1}),G]),_:1},8,["action","headers","data"])])]),_:1},8,["modelValue","title"])])}}});const se=H(X,[["__scopeId","data-v-f454425d"]]);export{se as default};
