import{_ as D}from"./preload-helper.101896b7.js";import{d as j,a6 as T,r as y,O as fe,o as ue,P as ge,H as ye,S as i,a4 as F,e as s,f as he,z as l,m as a,G as N,E as w,p as f,l as d,t as I,u as p,x as r,y as z,L as ve}from"./vue.df334614.js";import{R as L}from"./Role.14cde0b3.js";import{l as G}from"./tree.d5b28a07.js";import{e as H}from"./mitt.7f99bbc0.js";import{a as U}from"./authFunction.44615e3c.js";import{c as Q}from"./cloneDeep.4b31f8c5.js";import{h as R}from"./index.e64efb6f.js";import"./http-client.ff22776c.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.08e609be.js";import"./js.cookie.cf83ad76.js";import"./userInfo.5b069101.js";import"./arrayOperation.b573dead.js";import"./_Uint8Array.2a02cf9e.js";import"./_initCloneObject.115dee92.js";import"./index.f4a20413.js";import"./index.7cba2d6b.js";import"./focus-trap.ccecd842.js";const ke={style:{padding:"0px 0px 8px 8px"}},De=r(" 查询 "),Te=r("新增"),Ie=r("新增分组"),Le=r("新增角色"),be=r("菜单权限"),xe=r("数据权限"),Se=r(" 查询 "),Ce=r(" 添加员工 "),Me=r(" 移除员工 "),$e=j({name:"admin/role"}),Ze=j({...$e,setup(Ee){const q=T(()=>D(()=>import("./role-form.895fcc4a.js"),["assets/role-form.895fcc4a.js","assets/Role.14cde0b3.js","assets/http-client.ff22776c.js","assets/index.de963593.js","assets/index.390778f0.js","assets/vue.df334614.js","assets/index.4621962e.js","assets/storage.08e609be.js","assets/js.cookie.cf83ad76.js","assets/mitt.7f99bbc0.js","assets/cloneDeep.4b31f8c5.js","assets/_Uint8Array.2a02cf9e.js","assets/_initCloneObject.115dee92.js"])),J=T(()=>D(()=>import("./set-role-menu.83439df3.js"),["assets/set-role-menu.83439df3.js","assets/Permission.b7f0ca93.js","assets/http-client.ff22776c.js","assets/index.de963593.js","assets/index.390778f0.js","assets/vue.df334614.js","assets/index.4621962e.js","assets/storage.08e609be.js","assets/js.cookie.cf83ad76.js","assets/tree.d5b28a07.js","assets/index.6c5a2d2c.js","assets/index.7cba2d6b.js","assets/index.f4a20413.js","assets/_Uint8Array.2a02cf9e.js","assets/cloneDeep.4b31f8c5.js","assets/_initCloneObject.115dee92.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/set-role-menu.f90e7382.css"])),X=T(()=>D(()=>import("./set-role-data-scope.d4e38ef7.js"),["assets/set-role-data-scope.d4e38ef7.js","assets/preload-helper.101896b7.js","assets/vue.df334614.js","assets/Role.14cde0b3.js","assets/http-client.ff22776c.js","assets/index.de963593.js","assets/index.390778f0.js","assets/index.4621962e.js","assets/storage.08e609be.js","assets/js.cookie.cf83ad76.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/set-role-data-scope.aa7e6dff.css"])),Y=T(()=>D(()=>import("./user-select.556c1906.js"),["assets/user-select.556c1906.js","assets/preload-helper.101896b7.js","assets/vue.df334614.js","assets/User.4679a863.js","assets/http-client.ff22776c.js","assets/index.de963593.js","assets/index.390778f0.js","assets/index.4621962e.js","assets/storage.08e609be.js","assets/js.cookie.cf83ad76.js","assets/index.e64efb6f.js","assets/index.f4a20413.js","assets/_Uint8Array.2a02cf9e.js","assets/_initCloneObject.115dee92.js","assets/index.7cba2d6b.js","assets/focus-trap.ccecd842.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/user-select.fe82260c.css"])),Z=T(()=>D(()=>import("./index.6c24773e.js"),["assets/index.6c24773e.js","assets/vue.df334614.js","assets/_plugin-vue_export-helper.c27b6911.js"])),{proxy:c}=ve(),b=y(),x=y(),E=y(),S=y(),A=y(),P=y(),t=fe({loading:!1,userListLoading:!1,sureLoading:!1,roleFormTitle:"",filterModel:{name:""},roleTreeData:[],roleFormTreeData:[],userListData:[],roleId:void 0});ue(()=>{h(),H.on("refreshRole",async()=>{h()})}),ge(()=>{H.off("refreshRole")});const h=async()=>{var o;t.loading=!0;const e=await new L().getList();e.data&&e.data.length>0?(t.roleTreeData=G(Q(e.data)),t.roleFormTreeData=G(Q(e.data).filter(m=>m.parentId===0)),((o=t.roleTreeData[0].children)==null?void 0:o.length)>0&&ye(()=>{b.value.setCurrentRow(t.roleTreeData[0].children[0])})):(t.roleTreeData=[],t.roleFormTreeData=[]),t.loading=!1},V=(e,o=void 0)=>{switch(e){case 1:t.roleFormTitle="新增分组",x.value.open({type:1});break;case 2:t.roleFormTitle="新增角色",x.value.open({type:2,parentId:o==null?void 0:o.id});break}},ee=e=>{switch(e.type){case 1:t.roleFormTitle="编辑分组";break;case 2:t.roleFormTitle="编辑角色";break}x.value.open(e)},te=e=>{c.$modal.confirmDelete(`确定要删除角色【${e.name}】?`).then(async()=>{await new L().delete({id:e.id},{loading:!0}),h()}).catch(()=>{})},v=async()=>{t.userListLoading=!0;const e=await new L().getRoleUserList({RoleId:t.roleId});t.userListLoading=!1,e!=null&&e.success&&(e.data&&e.data.length>0?t.userListData=e.data:t.userListData=[])},oe=(e,o)=>{e&&((e==null?void 0:e.id)!==(o==null?void 0:o.id)&&(o==null?void 0:o.id)>0?(e==null?void 0:e.parentId)===0&&b.value.setCurrentRow(o):(e==null?void 0:e.parentId)===0&&b.value.setCurrentRow(),(e==null?void 0:e.parentId)!==0&&(o==null?void 0:o.parentId)!==0&&(e==null?void 0:e.id)>0&&(t.roleId=e.id,v()))},le=e=>{E.value.toggleRowSelection(e,void 0)},ae=()=>{if(!(t.roleId>0)){c.$modal.msgWarning("请选择角色");return}S.value.open({roleId:t.roleId})},ne=()=>{if(!(t.roleId>0)){c.$modal.msgWarning("请选择角色");return}const e=E.value.getSelectionRows();if(!(e.length>0)){c.$modal.msgWarning("请选择员工");return}c.$modal.confirm("确定要移除吗?").then(async()=>{const o=e==null?void 0:e.map(_=>_.id),m={roleId:t.roleId,userIds:o};await new L().removeRoleUser(m,{loading:!0}),v()}).catch(()=>{})},ie=async e=>{if(!((e==null?void 0:e.length)>0)){S.value.close();return}t.sureLoading=!0;const o=e==null?void 0:e.map(_=>_.id),m={roleId:t.roleId,userIds:o};await new L().addRoleUser(m,{showSuccessMessage:!0}),t.sureLoading=!1,S.value.close(),v()},se=e=>{if(!((e==null?void 0:e.id)>0)){c.$modal.msgWarning("请选择角色");return}A.value.open(e)},de=e=>{if(!((e==null?void 0:e.id)>0)){c.$modal.msgWarning("请选择角色");return}P.value.open(e)};return(e,o)=>{const m=i("el-input"),_=i("el-form-item"),u=i("el-button"),re=i("ele-ArrowDown"),pe=i("el-icon"),g=i("el-dropdown-item"),O=i("el-dropdown-menu"),me=i("el-dropdown"),B=i("el-form"),C=i("el-card"),k=i("el-table-column"),K=i("el-col"),_e=i("el-row"),M=F("auth"),ce=F("auths"),W=F("loading");return s(),he("div",ke,[l(_e,{gutter:8,style:{width:"100%"}},{default:a(()=>[l(K,{xs:24,sm:12,md:12,lg:12,xl:12},{default:a(()=>[l(C,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:a(()=>[l(B,{model:t.filterModel,inline:!0,onSubmit:o[3]||(o[3]=N(()=>{},["stop","prevent"]))},{default:a(()=>[l(_,{label:"角色名称",prop:"name"},{default:a(()=>[l(m,{modelValue:t.filterModel.name,"onUpdate:modelValue":o[0]||(o[0]=n=>t.filterModel.name=n),placeholder:"角色名称",onKeyup:w(h,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(_,null,{default:a(()=>[l(u,{type:"primary",icon:"ele-Search",onClick:h},{default:a(()=>[De]),_:1}),f((s(),d(me,{style:{"margin-left":"12px"}},{dropdown:a(()=>[l(O,null,{default:a(()=>[l(g,{onClick:o[1]||(o[1]=n=>V(1))},{default:a(()=>[Ie]),_:1}),l(g,{onClick:o[2]||(o[2]=n=>V(2))},{default:a(()=>[Le]),_:1})]),_:1})]),default:a(()=>[l(u,{type:"primary"},{default:a(()=>[Te,l(pe,{class:"el-icon--right"},{default:a(()=>[l(re)]),_:1})]),_:1})]),_:1})),[[M,"api:admin:role:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),l(C,{shadow:"never",style:{"margin-top":"8px"}},{default:a(()=>[f((s(),d(p(R),{ref_key:"roleTableRef",ref:b,data:t.roleTreeData,"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},"highlight-current-row":"",style:{width:"100%"},onCurrentChange:oe},{default:a(()=>[l(k,{prop:"name",label:"角色名称","min-width":"120","show-overflow-tooltip":""}),l(k,{prop:"sort",label:"排序",width:"80",align:"center","show-overflow-tooltip":""}),l(k,{label:"操作",width:"100",fixed:"right","header-align":"center",align:"right"},{default:a(({row:n})=>[n.type===1?f((s(),d(u,{key:0,icon:"ele-Plus",size:"small",text:"",type:"primary",onClick:$=>V(2,n)},null,8,["onClick"])),[[M,"api:admin:role:add"]]):I("",!0),f((s(),d(p(Z),{"icon-only":""},{dropdown:a(()=>[l(O,null,{default:a(()=>[n.type===2&&p(U)("api:admin:permission:assign")?(s(),d(g,{key:0,onClick:$=>se(n)},{default:a(()=>[be]),_:2},1032,["onClick"])):I("",!0),n.type===2?(s(),d(g,{key:1,onClick:$=>de(n)},{default:a(()=>[xe]),_:2},1032,["onClick"])):I("",!0),p(U)("api:admin:role:update")?(s(),d(g,{key:2,onClick:$=>ee(n)},{default:a(()=>[r("编辑"+z(n.type===1?"分组":"角色"),1)]),_:2},1032,["onClick"])):I("",!0),p(U)("api:admin:role:delete")?(s(),d(g,{key:3,onClick:$=>te(n)},{default:a(()=>[r("删除"+z(n.type===1?"分组":"角色"),1)]),_:2},1032,["onClick"])):I("",!0)]),_:2},1024)]),_:2},1024)),[[ce,["api:admin:permission:assign","api:admin:role:update","api:admin:role:delete"]]])]),_:1})]),_:1},8,["data"])),[[W,t.loading]])]),_:1})]),_:1}),l(K,{xs:24,sm:12,md:12,lg:12,xl:12},{default:a(()=>[l(C,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:a(()=>[l(B,{model:t.filterModel,inline:!0,onSubmit:o[5]||(o[5]=N(()=>{},["stop","prevent"]))},{default:a(()=>[l(_,{label:"姓名",prop:"name"},{default:a(()=>[l(m,{modelValue:t.filterModel.name,"onUpdate:modelValue":o[4]||(o[4]=n=>t.filterModel.name=n),placeholder:"姓名",onKeyup:w(v,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(_,null,{default:a(()=>[l(u,{type:"primary",icon:"ele-Search",onClick:v},{default:a(()=>[Se]),_:1}),f((s(),d(u,{type:"primary",icon:"ele-Plus",onClick:ae},{default:a(()=>[Ce]),_:1})),[[M,"api:admin:role:add-role-user"]]),f((s(),d(u,{type:"danger",icon:"ele-Delete",onClick:ne},{default:a(()=>[Me]),_:1})),[[M,"api:admin:role:remove-role-user"]])]),_:1})]),_:1},8,["model"])]),_:1}),l(C,{shadow:"never",style:{"margin-top":"8px"}},{default:a(()=>[f((s(),d(p(R),{ref_key:"userTableRef",ref:E,data:t.userListData,"row-key":"id",style:{width:"100%"},onRowClick:le},{default:a(()=>[l(k,{type:"selection",width:"55"}),l(k,{prop:"name",label:"姓名","show-overflow-tooltip":""})]),_:1},8,["data"])),[[W,t.userListLoading]])]),_:1})]),_:1})]),_:1}),l(p(q),{ref_key:"roleFormRef",ref:x,title:t.roleFormTitle,"role-tree-data":t.roleFormTreeData},null,8,["title","role-tree-data"]),l(p(Y),{ref_key:"userSelectRef",ref:S,title:"添加员工",multiple:"","sure-loading":t.sureLoading,onSure:ie},null,8,["sure-loading"]),l(p(J),{ref_key:"setRoleMenuRef",ref:A},null,512),l(p(X),{ref_key:"setRoleDataScopeRef",ref:P},null,512)])}}});export{Ze as default};
