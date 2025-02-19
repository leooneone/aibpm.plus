import{_ as B}from"./preload-helper.101896b7.js";import{d as f,a6 as z,r as T,c as A,O as E,K as O,S as c,e as i,l as _,m as s,g as U,z as r,u as n,f as F,B as K,F as M,p as P,v as $,x as g}from"./vue.df334614.js";import{R as m}from"./Role.d52d88a4.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";import"./http-client.28a8ff7a.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.6b2e7cd0.js";const q={class:"dialog-footer"},G=g("取 消"),H=g("确 定"),J=f({name:"admin/role/components/set-role-data-scope"}),Q=f({...J,props:{title:{type:String,default:""}},setup(w,{expose:h}){const p=w,v=z(()=>B(()=>import("./org-menu.f0915618.js"),["assets/org-menu.f0915618.js","assets/org-menu.vue_vue_type_script_setup_true_lang.6d7eb461.js","assets/Org.791a1909.js","assets/http-client.28a8ff7a.js","assets/index.de963593.js","assets/index.390778f0.js","assets/vue.df334614.js","assets/index.4621962e.js","assets/storage.6b2e7cd0.js","assets/tree.d5b28a07.js","assets/index.6c5a2d2c.js","assets/index.7cba2d6b.js","assets/index.f4a20413.js","assets/_Uint8Array.2a02cf9e.js"])),b=T(),k=A(()=>p.title?p.title:e.roleName?`设置【${e.roleName}】数据权限`:"设置数据权限"),e=E({showDialog:!1,loading:!1,sureLoading:!1,permissionTreeData:[],roleId:0,roleName:"",checkedKeys:[],form:{},dataScopeList:[{label:"全部",value:1},{label:"本部门和下级部门",value:2},{label:"本部门",value:3},{label:"本人数据",value:4},{label:"指定部门",value:5}]}),{form:d}=O(e),y=async l=>{if(e.roleId=l.id,e.roleName=l.name,l.id>0){const o=await new m().get({id:l.id},{loading:!0});if(o!=null&&o.success){const t=o.data;e.form={roleId:t==null?void 0:t.id,dataScope:t==null?void 0:t.dataScope,orgIds:t==null?void 0:t.orgIds},e.showDialog=!0}}},S=()=>{e.showDialog=!1},D=()=>{e.showDialog=!1},V=async()=>{e.sureLoading=!0;const l=await new m().setDataScope(e.form,{showSuccessMessage:!0}).catch(()=>{e.sureLoading=!1});e.sureLoading=!1,l!=null&&l.success&&(e.showDialog=!1)};return h({open:y,close:S}),(l,o)=>{const t=c("el-option"),x=c("el-select"),I=c("el-form-item"),L=c("el-col"),R=c("el-row"),C=c("el-form"),u=c("el-button"),N=c("el-dialog");return i(),_(N,{modelValue:e.showDialog,"onUpdate:modelValue":o[2]||(o[2]=a=>e.showDialog=a),"destroy-on-close":"",title:n(k),"append-to-body":"",draggable:"",width:"780px"},{footer:s(()=>[U("span",q,[r(u,{onClick:D,size:"default"},{default:s(()=>[G]),_:1}),r(u,{type:"primary",onClick:V,size:"default",loading:e.sureLoading},{default:s(()=>[H]),_:1},8,["loading"])])]),default:s(()=>[r(C,{model:n(d),ref:"formRef",size:"default","label-width":"80px","label-position":"top"},{default:s(()=>[r(R,{gutter:35},{default:s(()=>[r(L,{xs:24,sm:24,md:24,lg:24,xl:24},{default:s(()=>[r(I,{label:"数据范围"},{default:s(()=>[r(x,{key:"dataScope",modelValue:n(d).dataScope,"onUpdate:modelValue":o[0]||(o[0]=a=>n(d).dataScope=a),placeholder:"请选择",class:"w100"},{default:s(()=>[(i(!0),F(M,null,K(e.dataScopeList,a=>(i(),_(t,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),P(r(n(v),{ref_key:"orgRef",ref:b,"show-checkbox":"","check-on-click-node":"",modelValue:n(d).orgIds,"onUpdate:modelValue":o[1]||(o[1]=a=>n(d).orgIds=a),"default-checked-keys":n(d).orgIds,class:"w100"},null,8,["modelValue","default-checked-keys"]),[[$,n(d).dataScope===5]])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}});const se=j(Q,[["__scopeId","data-v-55621938"]]);export{se as default};
