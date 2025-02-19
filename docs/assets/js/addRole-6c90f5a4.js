import{k as c,l as k,m as d,o as C,c as N,p as e,y as l,a as _,G as u,S as U,T as I}from"./@vue-8306d5ee.js";import{_ as z}from"./index-c27e5712.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-97a12f88.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const B=m=>(U("data-v-cd6d34c0"),m=m(),I(),m),R={class:"system-add-role-container"},P=B(()=>_("span",null,"角色标识",-1)),T={class:"dialog-footer"},A=c({name:"example/systemAddRole"}),E=c({...A,setup(m,{expose:b}){const o=k({isShowDialog:!1,ruleForm:{roleName:"",roleSign:"",sort:0,status:!0,describe:""},menuData:[],menuProps:{children:"children",label:"label"}}),f=()=>{o.isShowDialog=!0,h()},n=()=>{o.isShowDialog=!1},x=()=>{n()},g=()=>{n()},h=()=>{o.menuData=[{id:1,label:"系统管理",children:[{id:11,label:"菜单管理",children:[{id:111,label:"菜单新增"},{id:112,label:"菜单修改"},{id:113,label:"菜单删除"},{id:114,label:"菜单查询"}]},{id:12,label:"角色管理",children:[{id:121,label:"角色新增"},{id:122,label:"角色修改"},{id:123,label:"角色删除"},{id:124,label:"角色查询"}]},{id:13,label:"用户管理",children:[{id:131,label:"用户新增"},{id:132,label:"用户修改"},{id:133,label:"用户删除"},{id:134,label:"用户查询"}]}]},{id:2,label:"权限管理",children:[{id:21,label:"前端控制",children:[{id:211,label:"页面权限"},{id:212,label:"页面权限"}]},{id:22,label:"后端控制",children:[{id:221,label:"页面权限"}]}]}]};return b({openDialog:f}),(G,t)=>{const i=d("el-input"),r=d("el-form-item"),s=d("el-col"),V=d("el-tooltip"),w=d("el-input-number"),S=d("el-switch"),F=d("el-tree"),D=d("el-row"),v=d("el-form"),p=d("el-button"),y=d("el-dialog");return C(),N("div",R,[e(y,{title:"新增角色",modelValue:o.isShowDialog,"onUpdate:modelValue":t[5]||(t[5]=a=>o.isShowDialog=a),width:"769px"},{footer:l(()=>[_("span",T,[e(p,{onClick:x,size:"default"},{default:l(()=>[u("取 消")]),_:1}),e(p,{type:"primary",onClick:g,size:"default"},{default:l(()=>[u("新 增")]),_:1})])]),default:l(()=>[e(v,{model:o.ruleForm,size:"default","label-width":"90px"},{default:l(()=>[e(D,{gutter:35},{default:l(()=>[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(r,{label:"角色名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.roleName,"onUpdate:modelValue":t[0]||(t[0]=a=>o.ruleForm.roleName=a),placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(r,{label:"角色标识"},{label:l(()=>[e(V,{effect:"dark",content:"用于 `router/route.ts` meta.roles",placement:"top-start"},{default:l(()=>[P]),_:1})]),default:l(()=>[e(i,{modelValue:o.ruleForm.roleSign,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.roleSign=a),placeholder:"请输入角色标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(r,{label:"排序"},{default:l(()=>[e(w,{modelValue:o.ruleForm.sort,"onUpdate:modelValue":t[2]||(t[2]=a=>o.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(r,{label:"角色状态"},{default:l(()=>[e(S,{modelValue:o.ruleForm.status,"onUpdate:modelValue":t[3]||(t[3]=a=>o.ruleForm.status=a),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(r,{label:"角色描述"},{default:l(()=>[e(i,{modelValue:o.ruleForm.describe,"onUpdate:modelValue":t[4]||(t[4]=a=>o.ruleForm.describe=a),type:"textarea",placeholder:"请输入角色描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(r,{label:"菜单权限"},{default:l(()=>[e(F,{data:o.menuData,props:o.menuProps,"show-checkbox":"",class:"menu-data-tree"},null,8,["data","props"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});const ue=z(E,[["__scopeId","data-v-cd6d34c0"]]);export{ue as default};
