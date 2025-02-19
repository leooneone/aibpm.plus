import{_ as z}from"./preload-helper.101896b7.js";import{P as c}from"./Permission.54b076e4.js";import{V as M}from"./View.329703ed.js";import{l as N}from"./tree.d5b28a07.js";import{e as O}from"./mitt.7f99bbc0.js";import{d as y,a6 as R,r as B,O as E,K as G,S as u,e as q,f as $,z as l,m as t,g as f,u as o,y as w,x as D,L as F}from"./vue.df334614.js";import"./http-client.28a8ff7a.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.6b2e7cd0.js";const K={class:"my-flex my-flex-between"},j=["title"],H={class:"dialog-footer"},J=D("取 消"),Q=D("确 定"),W=y({name:"admin/permission/permission-group-form"}),re=y({...W,props:{title:{type:String,default:""},permissionTreeData:{type:Array,default:()=>[]}},setup(g,{expose:I}){const v=R(()=>z(()=>import("./index.56bdeb3a.js"),["assets/index.56bdeb3a.js","assets/getStyleSheets.de5032d4.js","assets/index.4621962e.js","assets/vue.df334614.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/index.0e23bf1c.css"])),{proxy:V}=F(),b=B(),n=E({showDialog:!1,sureLoading:!1,form:{enabled:!0,opened:!0},viewTreeData:[]}),{form:d}=G(n),h=async()=>{const s=await new M().getList();s!=null&&s.success&&s.data&&s.data.length>0?n.viewTreeData=N(s.data):n.viewTreeData=[]},U=async(s={})=>{if(V.$modal.loading(),await h(),s.id>0){const e=await new c().getGroup({id:s.id});if(e!=null&&e.success){let i=e.data;i.parentId=i.parentId&&i.parentId>0?i.parentId:void 0,n.form=i}}else n.form={enabled:!0,opened:!0,icon:"ele-Memo"};V.$modal.closeLoading(),n.showDialog=!0},T=(s,e)=>{var i,r;return s?((i=e.label)==null?void 0:i.indexOf(s))!==-1||((r=e.path)==null?void 0:r.indexOf(s))!==-1:!0},k=()=>{n.showDialog=!1},C=()=>{b.value.validate(async s=>{if(!s)return;n.sureLoading=!0;let e={};n.form.parentId=n.form.parentId&&n.form.parentId>0?n.form.parentId:void 0,n.form.id!=null&&n.form.id>0?e=await new c().updateGroup(n.form,{showSuccessMessage:!0}):e=await new c().addGroup(n.form,{showSuccessMessage:!0}),n.sureLoading=!1,e!=null&&e.success&&(O.emit("refreshPermission"),n.showDialog=!1)})};return I({open:U}),(s,e)=>{const i=u("el-tree-select"),r=u("el-form-item"),m=u("el-col"),p=u("el-input"),L=u("el-input-number"),_=u("el-switch"),S=u("el-row"),A=u("el-form"),x=u("el-button"),P=u("el-dialog");return q(),$("div",null,[l(P,{modelValue:n.showDialog,"onUpdate:modelValue":e[11]||(e[11]=a=>n.showDialog=a),"destroy-on-close":"",title:g.title,draggable:"",width:"600px"},{footer:t(()=>[f("span",H,[l(x,{onClick:k,size:"default"},{default:t(()=>[J]),_:1}),l(x,{type:"primary",onClick:C,size:"default",loading:n.sureLoading},{default:t(()=>[Q]),_:1},8,["loading"])])]),default:t(()=>[l(A,{model:o(d),ref_key:"formRef",ref:b,size:"default","label-width":"80px"},{default:t(()=>[l(S,{gutter:35},{default:t(()=>[l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(r,{label:"上级分组"},{default:t(()=>[l(i,{modelValue:o(d).parentId,"onUpdate:modelValue":e[0]||(e[0]=a=>o(d).parentId=a),data:g.permissionTreeData,"node-key":"id","check-strictly":"","default-expand-all":"","render-after-expand":"","fit-input-width":"",clearable:"",class:"w100"},null,8,["modelValue","data"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(r,{label:"视图"},{default:t(()=>[l(i,{modelValue:o(d).viewId,"onUpdate:modelValue":e[1]||(e[1]=a=>o(d).viewId=a),data:n.viewTreeData,"node-key":"id",props:{label:"path"},"default-expand-all":"","render-after-expand":"","fit-input-width":"",clearable:"",filterable:"","filter-node-method":T,class:"w100"},{default:t(({data:a})=>[f("span",K,[f("span",null,w(a.label),1),f("span",{class:"my-line-1 my-ml-12",title:a.path},w(a.path),9,j)])]),_:1},8,["modelValue","data"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(r,{label:"名称",prop:"label",rules:[{required:!0,message:"请输入名称",trigger:["blur","change"]}]},{default:t(()=>[l(p,{modelValue:o(d).label,"onUpdate:modelValue":e[2]||(e[2]=a=>o(d).label=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(r,{label:"路由地址",prop:"path",rules:[{required:!0,message:"请输入路由地址",trigger:["blur","change"]}]},{default:t(()=>[l(p,{modelValue:o(d).path,"onUpdate:modelValue":e[3]||(e[3]=a=>o(d).path=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(r,{label:"路由命名"},{default:t(()=>[l(p,{modelValue:o(d).name,"onUpdate:modelValue":e[4]||(e[4]=a=>o(d).name=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(r,{label:"重定向"},{default:t(()=>[l(p,{modelValue:o(d).redirect,"onUpdate:modelValue":e[5]||(e[5]=a=>o(d).redirect=a),clearable:"",placeholder:"重定向地址"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(r,{label:"图标",prop:"icon"},{default:t(()=>[l(o(v),{modelValue:o(d).icon,"onUpdate:modelValue":e[6]||(e[6]=a=>o(d).icon=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(r,{label:"排序"},{default:t(()=>[l(L,{modelValue:o(d).sort,"onUpdate:modelValue":e[7]||(e[7]=a=>o(d).sort=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(r,{label:"启用"},{default:t(()=>[l(_,{modelValue:o(d).enabled,"onUpdate:modelValue":e[8]||(e[8]=a=>o(d).enabled=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(r,{label:"展开"},{default:t(()=>[l(_,{modelValue:o(d).opened,"onUpdate:modelValue":e[9]||(e[9]=a=>o(d).opened=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(r,{label:"隐藏"},{default:t(()=>[l(_,{modelValue:o(d).hidden,"onUpdate:modelValue":e[10]||(e[10]=a=>o(d).hidden=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{re as default};
