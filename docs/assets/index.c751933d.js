import{_ as z}from"./preload-helper.101896b7.js";import{d as x,a6 as K,r as L,O as R,o as S,P as I,S as l,a4 as y,e as n,f as N,z as e,m as t,G as O,E as U,p as _,l as s,u as G,x as d,L as Q}from"./vue.df334614.js";import{V as g}from"./View.5aae7c90.js";import{l as j}from"./tree.d5b28a07.js";import{e as b}from"./mitt.7f99bbc0.js";import{c as q}from"./cloneDeep.4b31f8c5.js";import"./http-client.ff22776c.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.08e609be.js";import"./js.cookie.cf83ad76.js";import"./_Uint8Array.2a02cf9e.js";import"./_initCloneObject.115dee92.js";const H={style:{padding:"0px 0px 8px 8px"}},J=d(" 查询 "),W=d(" 新增 "),X=d("启用"),Y=d("禁用"),Z=d("编辑"),ee=d("删除"),te=x({name:"admin/view"}),he=x({...te,setup(oe){const T=K(()=>z(()=>import("./view-form.57dd4b05.js"),["assets/view-form.57dd4b05.js","assets/View.5aae7c90.js","assets/http-client.ff22776c.js","assets/index.de963593.js","assets/index.390778f0.js","assets/vue.df334614.js","assets/index.4621962e.js","assets/storage.08e609be.js","assets/js.cookie.cf83ad76.js","assets/mitt.7f99bbc0.js"])),f=L(),{proxy:D}=Q(),o=R({loading:!1,viewFormTitle:"",filterModel:{name:""},viewTreeData:[],formViewTreeData:[]});S(()=>{p(),b.on("refreshView",async()=>{p()})}),I(()=>{b.off("refreshView")});const p=async()=>{o.loading=!0;const a=await new g().getList();a.data&&a.data.length>0?o.viewTreeData=j(q(a.data)):(o.viewTreeData=[],o.formViewTreeData=[]),o.loading=!1},k=()=>{o.viewFormTitle="新增视图",f.value.open()},C=a=>{o.viewFormTitle="编辑视图",f.value.open(a)},V=a=>{D.$modal.confirmDelete(`确定要删除视图【${a.label}】?`).then(async()=>{await new g().delete({id:a.id},{loading:!0}),p()}).catch(()=>{})};return(a,m)=>{const F=l("el-input"),w=l("el-form-item"),c=l("el-button"),E=l("el-form"),h=l("el-card"),i=l("el-table-column"),v=l("el-tag"),M=l("el-table"),P=l("el-col"),A=l("el-row"),u=y("auth"),B=y("loading");return n(),N("div",H,[e(A,{gutter:8,style:{width:"100%"}},{default:t(()=>[e(P,{span:24,xs:24},{default:t(()=>[e(h,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:t(()=>[e(E,{model:o.filterModel,inline:!0,onSubmit:m[1]||(m[1]=O(()=>{},["stop","prevent"]))},{default:t(()=>[e(w,{label:"视图名称",prop:"name"},{default:t(()=>[e(F,{modelValue:o.filterModel.name,"onUpdate:modelValue":m[0]||(m[0]=r=>o.filterModel.name=r),placeholder:"视图名称",onKeyup:U(p,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,null,{default:t(()=>[e(c,{type:"primary",icon:"ele-Search",onClick:p},{default:t(()=>[J]),_:1}),_((n(),s(c,{type:"primary",icon:"ele-Plus",onClick:k},{default:t(()=>[W]),_:1})),[[u,"api:admin:view:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),e(h,{shadow:"never",style:{"margin-top":"8px"}},{default:t(()=>[_((n(),s(M,{data:o.viewTreeData,style:{width:"100%"},"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(i,{prop:"label",label:"视图名称","min-width":"120","show-overflow-tooltip":""}),e(i,{prop:"name",label:"视图命名","min-width":"120","show-overflow-tooltip":""}),e(i,{prop:"path",label:"视图地址","min-width":"120","show-overflow-tooltip":""}),e(i,{prop:"sort",label:"排序",width:"80",align:"center","show-overflow-tooltip":""}),e(i,{label:"状态",width:"80",align:"center","show-overflow-tooltip":""},{default:t(({row:r})=>[r.enabled?(n(),s(v,{key:0,type:"success"},{default:t(()=>[X]),_:1})):(n(),s(v,{key:1,type:"danger"},{default:t(()=>[Y]),_:1}))]),_:1}),e(i,{label:"操作",width:"160",fixed:"right","header-align":"center",align:"center"},{default:t(({row:r})=>[_((n(),s(c,{icon:"ele-EditPen",size:"small",text:"",type:"primary",onClick:$=>C(r)},{default:t(()=>[Z]),_:2},1032,["onClick"])),[[u,"api:admin:view:update"]]),_((n(),s(c,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:$=>V(r)},{default:t(()=>[ee]),_:2},1032,["onClick"])),[[u,"api:admin:view:delete"]])]),_:1})]),_:1},8,["data"])),[[B,o.loading]])]),_:1})]),_:1})]),_:1}),e(G(T),{ref_key:"viewFormRef",ref:f,title:o.viewFormTitle,"view-tree-data":o.viewTreeData},null,8,["title","view-tree-data"])])}}});export{he as default};
