import{P as i}from"./Permission-5cf8226b.js";import{P as L,_ as P}from"./index-0ce5277f.js";import{g as V}from"./element-plus-e21f9b5a.js";import{j as b}from"./lodash-es-f559e892.js";import{k as f,j as I,l as K,h as N,e as B,m as p,o as M,D as S,y as n,a as m,p as r,G as u,u as $}from"./@vue-8306d5ee.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-3baf0d65.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./@intlify-869ec77a.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-8ef115d9.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const j={class:"dialog-footer"},z=f({name:"admin/tenant/components/set-tenant-menu"}),R=f({...z,props:{title:{type:String,default:""}},setup(g,{expose:_}){const l=g,h=I(()=>l.title?l.title:e.name?`设置【${e.name}】菜单权限`:"设置菜单权限"),e=K({showDialog:!1,loading:!1,sureLoading:!1,permissionTreeData:[],id:0,name:"",checkedKeys:[]}),{proxy:c}=N(),d=B(),y=async()=>{const o=await new i().getTenantPermissionList({tenantId:e.id});e.checkedKeys=o!=null&&o.success?o.data:[]},k=async o=>{e.id=o.id,e.name=o.name,c.$modal.loading(),await T(),await y(),c.$modal.closeLoading(),e.showDialog=!0},w=()=>{e.showDialog=!1},T=async()=>{e.loading=!0;const o=await new i().getPermissionList().catch(()=>{e.loading=!1});o&&o.data&&o.data.length>0?e.permissionTreeData=L(b(o.data)):e.permissionTreeData=[],e.loading=!1},D=o=>o.row?"is-penultimate":"",x=()=>{e.showDialog=!1},v=async()=>{var a;e.sureLoading=!0;const o=(a=d.value)==null?void 0:a.getCheckedKeys(!0),s={tenantId:e.id,permissionIds:o},t=await new i().saveTenantPermissions(s,{showSuccessMessage:!0}).catch(()=>{e.sureLoading=!1});e.sureLoading=!1,t!=null&&t.success&&(e.showDialog=!1)};return _({open:k,close:w}),(o,s)=>{const t=p("el-button"),a=p("el-dialog");return M(),S(a,{modelValue:e.showDialog,"onUpdate:modelValue":s[0]||(s[0]=C=>e.showDialog=C),"destroy-on-close":"",title:h.value,"append-to-body":"",draggable:"","close-on-click-modal":!1,"close-on-press-escape":!1,width:"780px"},{footer:n(()=>[m("span",j,[r(t,{onClick:x,size:"default"},{default:n(()=>[u("取 消")]),_:1}),r(t,{type:"primary",onClick:v,size:"default",loading:e.sureLoading},{default:n(()=>[u("确 定")]),_:1},8,["loading"])])]),default:n(()=>[m("div",null,[r($(V),{ref_key:"permissionTreeRef",ref:d,data:e.permissionTreeData,"node-key":"id","show-checkbox":"","highlight-current":"","default-expand-all":"","check-on-click-node":"","expand-on-click-node":!1,props:{class:D},"default-checked-keys":e.checkedKeys},null,8,["data","props","default-checked-keys"])])]),_:1},8,["modelValue","title"])}}});const ue=P(R,[["__scopeId","data-v-249d34c6"]]);export{ue as default};
