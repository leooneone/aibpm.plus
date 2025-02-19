import{_ as C}from"./preload-helper.101896b7.js";import{d as V,a6 as M,r as Z,O as ee,o as te,P as oe,S as i,a4 as P,e as d,f as ae,z as a,m as o,g as D,u as c,G as ne,E as le,p as f,l as u,x as p,y as b,t as h,L as se}from"./vue.72f2672d.js";import{U as y}from"./User.7b8f477f.js";import{e as E}from"./mitt.7f99bbc0.js";import{a as $}from"./authFunction.274c84b3.js";import"./http-client.193f2c5b.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./index.41e0794f.js";import"./storage.6b2e7cd0.js";import"./userInfo.8056b3db.js";import"./arrayOperation.b573dead.js";const ie={style:{padding:"0px 0px 8px 8px"}},re={class:"my-flex-column h100"},de=p(" 查询 "),pe=p(" 新增 "),ue=p("主管"),ce=p("编辑"),me=p("重置密码"),_e=p("删除用户"),ge={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},fe=V({name:"admin/user"}),ze=V({...fe,setup(he){const N=M(()=>C(()=>import("./user-form.d58a8675.js"),["assets/user-form.d58a8675.js","assets/preload-helper.101896b7.js","assets/User.7b8f477f.js","assets/http-client.193f2c5b.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/vue.72f2672d.js","assets/index.41e0794f.js","assets/storage.6b2e7cd0.js","assets/Org.a1ce8cb9.js","assets/Role.ffc550a0.js","assets/tree.d5b28a07.js","assets/test.dc379863.js","assets/toolsValidate.7cb139e2.js","assets/mitt.7f99bbc0.js","assets/cloneDeep.d5c086cd.js","assets/_Uint8Array.e4cf923d.js","assets/_initCloneObject.7b8933bc.js"])),U=M(()=>C(()=>import("./org-menu.42d0a1ed.js"),["assets/org-menu.42d0a1ed.js","assets/org-menu.vue_vue_type_script_setup_true_lang.44f66112.js","assets/Org.a1ce8cb9.js","assets/http-client.193f2c5b.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/vue.72f2672d.js","assets/index.41e0794f.js","assets/storage.6b2e7cd0.js","assets/tree.d5b28a07.js","assets/index.79e12c01.js","assets/index.1e09e151.js","assets/index.eead254e.js","assets/_Uint8Array.e4cf923d.js"])),T=M(()=>C(()=>import("./index.a14f9e97.js"),["assets/index.a14f9e97.js","assets/vue.72f2672d.js","assets/_plugin-vue_export-helper.c27b6911.js"])),{proxy:m}=se(),w=Z(),t=ee({loading:!1,userFormTitle:"",filterModel:{name:""},total:0,pageInput:{currentPage:1,pageSize:20,filter:{orgId:null}},userListData:[]});te(()=>{E.on("refreshUser",async()=>{r()})}),oe(()=>{E.off("refreshUser")});const r=async()=>{var l,s;t.loading=!0;const e=await new y().getPage(t.pageInput);t.userListData=((l=e==null?void 0:e.data)==null?void 0:l.list)??[],t.total=((s=e.data)==null?void 0:s.total)??0,t.loading=!1},F=()=>{t.userFormTitle="新增用户",w.value.open()},L=e=>{t.userFormTitle="编辑用户",w.value.open(e)},A=e=>{m.$modal.confirmDelete(`确定要删除【${e.name}】?`).then(async()=>{await new y().delete({id:e.id},{loading:!0,showSuccessMessage:!0}),r()}).catch(()=>{})},O=e=>{m.$modal.prompt(`确定要给【${e.name}】重置密码?`,{inputPlaceholder:"选填，不填则使用系统默认密码",autofocus:!1}).then(async({value:l})=>{const s=await new y().resetPassword({id:e.id,password:l},{loading:!0});s!=null&&s.success&&m.$modal.msgSuccess(`重置密码成功，密码为：${s.data}`),r()}).catch(()=>{})},R=e=>{var s;if(!(((s=t.pageInput.filter)==null?void 0:s.orgId)>0)){m.$modal.msgWarning("请选择部门");return}const l=e.isManager?`确定要取消【${e.name}】的主管?`:`确定要设置【${e.name}】为主管?`;m.$modal.confirm(l).then(async()=>{var _;const v={userId:e.id,orgId:(_=t.pageInput.filter)==null?void 0:_.orgId,isManager:!e.isManager};await new y().setManager(v,{loading:!0,showSuccessMessage:!0}),r()}).catch(()=>{})},B=e=>{t.pageInput.pageSize=e,r()},K=e=>{t.pageInput.currentPage=e,r()},j=e=>{t.pageInput.filter&&(t.pageInput.filter.orgId=e==null?void 0:e.id),r()};return(e,l)=>{const s=i("el-col"),v=i("el-input"),_=i("el-form-item"),x=i("el-button"),G=i("el-form"),S=i("el-card"),Q=i("el-tag"),g=i("el-table-column"),k=i("el-dropdown-item"),W=i("el-dropdown-menu"),q=i("el-table"),H=i("el-pagination"),J=i("el-row"),z=P("auth"),X=P("auths"),Y=P("loading");return d(),ae("div",ie,[a(J,{gutter:8,style:{width:"100%"}},{default:o(()=>[a(s,{xs:24,sm:8,md:8,lg:6,xl:4},{default:o(()=>[D("div",re,[a(c(U),{onNodeClick:j,class:"my-flex-fill","select-first-node":""})])]),_:1}),a(s,{xs:24,sm:16,md:16,lg:18,xl:20},{default:o(()=>[a(S,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:o(()=>[a(G,{model:t.filterModel,inline:!0,onSubmit:l[1]||(l[1]=ne(()=>{},["stop","prevent"]))},{default:o(()=>[a(_,{label:"姓名",prop:"name"},{default:o(()=>[a(v,{modelValue:t.filterModel.name,"onUpdate:modelValue":l[0]||(l[0]=n=>t.filterModel.name=n),placeholder:"姓名",onKeyup:le(r,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),a(_,null,{default:o(()=>[a(x,{type:"primary",icon:"ele-Search",onClick:r},{default:o(()=>[de]),_:1}),f((d(),u(x,{type:"primary",icon:"ele-Plus",onClick:F},{default:o(()=>[pe]),_:1})),[[z,"api:admin:user:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),a(S,{shadow:"never",style:{"margin-top":"8px"}},{default:o(()=>[f((d(),u(q,{data:t.userListData,"row-key":"id",style:{width:"100%"}},{default:o(()=>[a(g,{prop:"name",label:"姓名",width:"120","show-overflow-tooltip":""},{default:o(({row:n})=>[p(b(n.name)+" ",1),n.isManager?(d(),u(Q,{key:0,type:"success"},{default:o(()=>[ue]),_:1})):h("",!0)]),_:1}),a(g,{prop:"mobile",label:"手机号",width:"120","show-overflow-tooltip":""}),a(g,{prop:"email",label:"邮箱","min-width":"120","show-overflow-tooltip":""}),a(g,{prop:"roleNames",label:"角色","min-width":"120","show-overflow-tooltip":""},{default:o(({row:n})=>[p(b(n.roleNames?n.roleNames.join(","):""),1)]),_:1}),a(g,{label:"操作",width:"160",fixed:"right","header-align":"center",align:"center"},{default:o(({row:n})=>[f((d(),u(x,{icon:"ele-EditPen",size:"small",text:"",type:"primary",onClick:I=>L(n)},{default:o(()=>[ce]),_:2},1032,["onClick"])),[[z,"api:admin:user:update"]]),f((d(),u(c(T),null,{dropdown:o(()=>[a(W,null,{default:o(()=>[c($)("api:admin:user:set-manager")?(d(),u(k,{key:0,onClick:I=>R(n)},{default:o(()=>[p(b(n.isManager?"取消":"设置")+"主管",1)]),_:2},1032,["onClick"])):h("",!0),c($)("api:admin:user:reset-password")?(d(),u(k,{key:1,onClick:I=>O(n)},{default:o(()=>[me]),_:2},1032,["onClick"])):h("",!0),c($)("api:admin:user:delete")?(d(),u(k,{key:2,onClick:I=>A(n)},{default:o(()=>[_e]),_:2},1032,["onClick"])):h("",!0)]),_:2},1024)]),_:2},1024)),[[X,["api:admin:user:set-manager","api:admin:user:reset-password","api:admin:user:delete"]]])]),_:1})]),_:1},8,["data"])),[[Y,t.loading]]),D("div",ge,[a(H,{currentPage:t.pageInput.currentPage,"onUpdate:currentPage":l[2]||(l[2]=n=>t.pageInput.currentPage=n),"page-size":t.pageInput.pageSize,"onUpdate:page-size":l[3]||(l[3]=n=>t.pageInput.pageSize=n),total:t.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:B,onCurrentChange:K,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1})]),_:1})]),_:1}),a(c(N),{ref_key:"userFormRef",ref:w,title:t.userFormTitle},null,8,["title"])])}}});export{ze as default};
