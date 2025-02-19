import{k as _,l as C,m as r,o as N,c as U,p as e,y as l,a as b,G as c,S as I,T as z}from"./@vue-8306d5ee.js";import{_ as B}from"./index-c27e5712.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-97a12f88.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const R=m=>(I("data-v-34137c01"),m=m(),z(),m),E={class:"system-edit-role-container"},P=R(()=>b("span",null,"角色标识",-1)),T={class:"dialog-footer"},G=_({name:"example/systemEditRole"}),M=_({...G,setup(m,{expose:f}){const o=C({isShowDialog:!1,ruleForm:{roleName:"",roleSign:"",sort:0,status:!0,describe:""},menuData:[],menuProps:{children:"children",label:"label"}}),x=p=>{o.ruleForm=p,o.isShowDialog=!0,V()},n=()=>{o.isShowDialog=!1},g=()=>{n()},h=()=>{n()},V=()=>{o.menuData=[{id:1,label:"系统管理",children:[{id:11,label:"菜单管理",children:[{id:111,label:"菜单新增"},{id:112,label:"菜单修改"},{id:113,label:"菜单删除"},{id:114,label:"菜单查询"}]},{id:12,label:"角色管理",children:[{id:121,label:"角色新增"},{id:122,label:"角色修改"},{id:123,label:"角色删除"},{id:124,label:"角色查询"}]},{id:13,label:"用户管理",children:[{id:131,label:"用户新增"},{id:132,label:"用户修改"},{id:133,label:"用户删除"},{id:134,label:"用户查询"}]}]},{id:2,label:"权限管理",children:[{id:21,label:"前端控制",children:[{id:211,label:"页面权限"},{id:212,label:"页面权限"}]},{id:22,label:"后端控制",children:[{id:221,label:"页面权限"}]}]}]};return f({openDialog:x}),(p,t)=>{const i=r("el-input"),s=r("el-form-item"),d=r("el-col"),w=r("el-tooltip"),F=r("el-input-number"),S=r("el-switch"),D=r("el-tree"),k=r("el-row"),y=r("el-form"),u=r("el-button"),v=r("el-dialog");return N(),U("div",E,[e(v,{title:"修改角色",modelValue:o.isShowDialog,"onUpdate:modelValue":t[5]||(t[5]=a=>o.isShowDialog=a),width:"769px"},{footer:l(()=>[b("span",T,[e(u,{onClick:g,size:"default"},{default:l(()=>[c("取 消")]),_:1}),e(u,{type:"primary",onClick:h,size:"default"},{default:l(()=>[c("修 改")]),_:1})])]),default:l(()=>[e(y,{model:o.ruleForm,size:"default","label-width":"90px"},{default:l(()=>[e(k,{gutter:35},{default:l(()=>[e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(s,{label:"角色名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.roleName,"onUpdate:modelValue":t[0]||(t[0]=a=>o.ruleForm.roleName=a),placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(s,{label:"角色标识"},{label:l(()=>[e(w,{effect:"dark",content:"用于 `router/route.ts` meta.roles",placement:"top-start"},{default:l(()=>[P]),_:1})]),default:l(()=>[e(i,{modelValue:o.ruleForm.roleSign,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.roleSign=a),placeholder:"请输入角色标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(s,{label:"排序"},{default:l(()=>[e(F,{modelValue:o.ruleForm.sort,"onUpdate:modelValue":t[2]||(t[2]=a=>o.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(s,{label:"角色状态"},{default:l(()=>[e(S,{modelValue:o.ruleForm.status,"onUpdate:modelValue":t[3]||(t[3]=a=>o.ruleForm.status=a),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(s,{label:"角色描述"},{default:l(()=>[e(i,{modelValue:o.ruleForm.describe,"onUpdate:modelValue":t[4]||(t[4]=a=>o.ruleForm.describe=a),type:"textarea",placeholder:"请输入角色描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(s,{label:"菜单权限"},{default:l(()=>[e(D,{data:o.menuData,props:o.menuProps,"default-checked-keys":[112,113],"node-key":"id","show-checkbox":"",class:"menu-data-tree"},null,8,["data","props"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});const ue=B(M,[["__scopeId","data-v-34137c01"]]);export{ue as default};
