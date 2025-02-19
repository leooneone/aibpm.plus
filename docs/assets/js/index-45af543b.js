import{_ as $}from"./ai-form-3baf0d65.js";import{k as C,e as A,h as M,l as O,i as R,E as K,m as i,$ as b,o as r,c as z,p as t,y as o,Y as I,am as N,G as d,M as u,D as p,u as S,R as j}from"./@vue-8306d5ee.js";import{V as T}from"./View-4d5a7440.js";import{e as v,O as G,P as Q}from"./index-0ce5277f.js";import{j as U}from"./lodash-es-f559e892.js";import"./element-plus-e21f9b5a.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const W={class:"my-layout"},Y=C({name:"admin/view"}),Ce=C({...Y,setup(q){const D=j(()=>$(()=>import("./view-form-204e6d7f.js"),["assets/js/view-form-204e6d7f.js","assets/js/View-4d5a7440.js","assets/js/index-0ce5277f.js","assets/js/@vue-8306d5ee.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css"])),w=A(),{proxy:V}=M(),e=O({loading:!1,viewFormTitle:"",filter:{name:""},viewTreeData:[],formViewTreeData:[]});R(()=>{c(),v.off("refreshView"),v.on("refreshView",async()=>{c()})}),K(()=>{v.off("refreshView")});const c=async()=>{e.loading=!0;const a=await new T().getList().catch(()=>{e.loading=!1});a&&a.data&&a.data.length>0?e.viewTreeData=G(Q(U(a.data)),e.filter.name,{filterWhere:(l,_)=>{var f,n;return((f=l.label)==null?void 0:f.toLocaleLowerCase().indexOf(_))>-1||((n=l.path)==null?void 0:n.toLocaleLowerCase().indexOf(_))>-1}}):(e.viewTreeData=[],e.formViewTreeData=[]),e.loading=!1},k=()=>{e.viewFormTitle="新增视图",w.value.open()},x=a=>{e.viewFormTitle="编辑视图",w.value.open(a)},F=a=>{V.$modal.confirmDelete(`确定要删除视图【${a.label}】?`).then(async()=>{await new T().delete({id:a.id},{loading:!0}),c()}).catch(()=>{})};return(a,l)=>{const _=i("el-input"),f=i("el-form-item"),n=i("el-button"),E=i("el-form"),y=i("el-card"),s=i("el-table-column"),g=i("el-tag"),L=i("el-table"),h=b("auth"),B=b("loading");return r(),z("div",W,[t(y,{class:"mt8",shadow:"never","body-style":{paddingBottom:"0"}},{default:o(()=>[t(E,{inline:!0,onSubmit:l[1]||(l[1]=I(()=>{},["stop","prevent"]))},{default:o(()=>[t(f,{label:"视图名称"},{default:o(()=>[t(_,{modelValue:e.filter.name,"onUpdate:modelValue":l[0]||(l[0]=m=>e.filter.name=m),placeholder:"视图名称",onKeyup:N(c,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(f,null,{default:o(()=>[t(n,{type:"primary",icon:"ele-Search",onClick:c},{default:o(()=>[d(" 查询 ")]),_:1}),u((r(),p(n,{type:"primary",icon:"ele-Plus",onClick:k},{default:o(()=>[d(" 新增 ")]),_:1})),[[h,"api:admin:view:add"]])]),_:1})]),_:1})]),_:1}),t(y,{class:"my-fill mt8",shadow:"never"},{default:o(()=>[u((r(),p(L,{data:e.viewTreeData,style:{width:"100%"},"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:o(()=>[t(s,{prop:"label",label:"视图名称","min-width":"120","show-overflow-tooltip":""}),t(s,{prop:"name",label:"视图命名","min-width":"120","show-overflow-tooltip":""}),t(s,{prop:"path",label:"视图地址","min-width":"120","show-overflow-tooltip":""}),t(s,{prop:"sort",label:"排序",width:"80",align:"center","show-overflow-tooltip":""}),t(s,{label:"状态",width:"80",align:"center","show-overflow-tooltip":""},{default:o(({row:m})=>[m.enabled?(r(),p(g,{key:0,type:"success"},{default:o(()=>[d("启用")]),_:1})):(r(),p(g,{key:1,type:"danger"},{default:o(()=>[d("禁用")]),_:1}))]),_:1}),t(s,{label:"操作",width:"160",fixed:"right","header-align":"center",align:"center"},{default:o(({row:m})=>[u((r(),p(n,{icon:"ele-EditPen",size:"small",text:"",type:"primary",onClick:P=>x(m)},{default:o(()=>[d("编辑")]),_:2},1032,["onClick"])),[[h,"api:admin:view:update"]]),u((r(),p(n,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:P=>F(m)},{default:o(()=>[d("删除")]),_:2},1032,["onClick"])),[[h,"api:admin:view:delete"]])]),_:1})]),_:1},8,["data"])),[[B,e.loading]])]),_:1}),t(S(D),{ref_key:"viewFormRef",ref:w,title:e.viewFormTitle,"view-tree-data":e.viewTreeData},null,8,["title","view-tree-data"])])}}});export{Ce as default};
