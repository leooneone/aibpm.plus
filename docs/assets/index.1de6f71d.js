import{_ as M}from"./preload-helper.101896b7.js";import{x as z}from"./index.c6652de1.js";import{aj as S}from"./index.390778f0.js";import{d as w,a6 as B,r as $,O as A,o as E,S as a,a4 as R,e as c,f as L,z as e,m as t,g as O,p as V,l as m,x as n,y as F,u as I}from"./vue.df334614.js";import"./index.f4a20413.js";import"./index.4621962e.js";import"./focus-trap.ccecd842.js";const P={class:"system-dept-container layout-padding"},j={class:"system-dept-search mb15"},q=n(" 查询 "),G=n(" 新增部门 "),H=n("启用"),J=n("禁用"),K=n("新增"),Q=n("修改"),U=n("删除"),W=w({name:"example/systemDept"}),se=w({...W,setup(X){const g=B(()=>M(()=>import("./dialog.6e21e2eb.js"),["assets/dialog.6e21e2eb.js","assets/vue.df334614.js"])),p=$(),o=A({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),_=()=>{o.tableData.loading=!0,o.tableData.data=[],o.tableData.data.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"顶级部门",id:Math.random(),children:[{deptName:"IT外包服务",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"总部",id:Math.random()},{deptName:"资本控股",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"分部",id:Math.random()}]}),o.tableData.total=o.tableData.data.length,setTimeout(()=>{o.tableData.loading=!1},500)},u=d=>{p.value.openDialog(d)},D=(d,l)=>{p.value.openDialog(d,l)},y=d=>{z.confirm(`此操作将永久删除部门：${d.deptName}, 是否继续?`,"提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{_(),S.success("删除成功")}).catch(()=>{})};return E(()=>{_()}),(d,l)=>{const v=a("el-input"),x=a("ele-Search"),f=a("el-icon"),r=a("el-button"),k=a("ele-FolderAdd"),i=a("el-table-column"),h=a("el-tag"),C=a("el-table"),T=a("el-card"),N=R("loading");return c(),L("div",P,[e(T,{shadow:"hover",class:"layout-padding-auto"},{default:t(()=>[O("div",j,[e(v,{size:"default",placeholder:"请输入部门名称",style:{"max-width":"180px"}}),e(r,{size:"default",type:"primary",class:"ml10"},{default:t(()=>[e(f,null,{default:t(()=>[e(x)]),_:1}),q]),_:1}),e(r,{size:"default",type:"success",class:"ml10",onClick:l[0]||(l[0]=s=>u("add"))},{default:t(()=>[e(f,null,{default:t(()=>[e(k)]),_:1}),G]),_:1})]),V((c(),m(C,{data:o.tableData.data,style:{width:"100%"},"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(i,{prop:"deptName",label:"部门名称","show-overflow-tooltip":""}),e(i,{label:"排序","show-overflow-tooltip":"",width:"80"},{default:t(s=>[n(F(s.$index),1)]),_:1}),e(i,{prop:"status",label:"部门状态","show-overflow-tooltip":""},{default:t(s=>[s.row.status?(c(),m(h,{key:0,type:"success"},{default:t(()=>[H]),_:1})):(c(),m(h,{key:1,type:"info"},{default:t(()=>[J]),_:1}))]),_:1}),e(i,{prop:"describe",label:"部门描述","show-overflow-tooltip":""}),e(i,{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}),e(i,{label:"操作","show-overflow-tooltip":"",width:"140"},{default:t(s=>[e(r,{size:"small",text:"",type:"primary",onClick:l[1]||(l[1]=b=>u("add"))},{default:t(()=>[K]),_:1}),e(r,{size:"small",text:"",type:"primary",onClick:b=>D("edit",s.row)},{default:t(()=>[Q]),_:2},1032,["onClick"]),e(r,{size:"small",text:"",type:"primary",onClick:b=>y(s.row)},{default:t(()=>[U]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[N,o.tableData.loading]])]),_:1}),e(I(g),{ref_key:"deptDialogRef",ref:p,onRefresh:l[2]||(l[2]=s=>_())},null,512)])}}});export{se as default};
