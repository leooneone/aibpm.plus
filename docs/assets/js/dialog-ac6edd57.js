import{k as _,e as T,l as U,m as i,o as I,c as z,p as l,y as o,a as b,G as c,v as B,S as R,T as P}from"./@vue-8306d5ee.js";import{_ as E}from"./index-0ce5277f.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-3baf0d65.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const G=s=>(R("data-v-97e8d6ad"),s=s(),P(),s),M={class:"system-role-dialog-container"},j=G(()=>b("span",null,"角色标识",-1)),q={class:"dialog-footer"},A=_({name:"example/systemRoleDialog"}),H=_({...A,emits:["refresh"],setup(s,{expose:f,emit:g}){const x=T(),e=U({ruleForm:{roleName:"",roleSign:"",sort:0,status:!0,describe:""},menuData:[],menuProps:{children:"children",label:"label"},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),h=(u,t)=>{u==="edit"?(e.ruleForm=t,e.dialog.title="修改角色",e.dialog.submitTxt="修 改"):(e.dialog.title="新增角色",e.dialog.submitTxt="新 增"),e.dialog.isShowDialog=!0,D()},n=()=>{e.dialog.isShowDialog=!1},V=()=>{n()},w=()=>{n(),g("refresh")},D=()=>{e.menuData=[{id:1,label:"系统管理",children:[{id:11,label:"菜单管理",children:[{id:111,label:"菜单新增"},{id:112,label:"菜单修改"},{id:113,label:"菜单删除"},{id:114,label:"菜单查询"}]},{id:12,label:"角色管理",children:[{id:121,label:"角色新增"},{id:122,label:"角色修改"},{id:123,label:"角色删除"},{id:124,label:"角色查询"}]},{id:13,label:"用户管理",children:[{id:131,label:"用户新增"},{id:132,label:"用户修改"},{id:133,label:"用户删除"},{id:134,label:"用户查询"}]}]},{id:2,label:"权限管理",children:[{id:21,label:"前端控制",children:[{id:211,label:"页面权限"},{id:212,label:"页面权限"}]},{id:22,label:"后端控制",children:[{id:221,label:"页面权限"}]}]}]};return f({openDialog:h}),(u,t)=>{const m=i("el-input"),r=i("el-form-item"),d=i("el-col"),F=i("el-tooltip"),S=i("el-input-number"),y=i("el-switch"),v=i("el-tree"),k=i("el-row"),C=i("el-form"),p=i("el-button"),N=i("el-dialog");return I(),z("div",M,[l(N,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":t[5]||(t[5]=a=>e.dialog.isShowDialog=a),width:"769px"},{footer:o(()=>[b("span",q,[l(p,{onClick:V,size:"default"},{default:o(()=>[c("取 消")]),_:1}),l(p,{type:"primary",onClick:w,size:"default"},{default:o(()=>[c(B(e.dialog.submitTxt),1)]),_:1})])]),default:o(()=>[l(C,{ref_key:"roleDialogFormRef",ref:x,model:e.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[l(k,{gutter:35},{default:o(()=>[l(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(r,{label:"角色名称"},{default:o(()=>[l(m,{modelValue:e.ruleForm.roleName,"onUpdate:modelValue":t[0]||(t[0]=a=>e.ruleForm.roleName=a),placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(r,{label:"角色标识"},{label:o(()=>[l(F,{effect:"dark",content:"用于 `router/route.ts` meta.roles",placement:"top-start"},{default:o(()=>[j]),_:1})]),default:o(()=>[l(m,{modelValue:e.ruleForm.roleSign,"onUpdate:modelValue":t[1]||(t[1]=a=>e.ruleForm.roleSign=a),placeholder:"请输入角色标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(r,{label:"排序"},{default:o(()=>[l(S,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":t[2]||(t[2]=a=>e.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(r,{label:"角色状态"},{default:o(()=>[l(y,{modelValue:e.ruleForm.status,"onUpdate:modelValue":t[3]||(t[3]=a=>e.ruleForm.status=a),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(r,{label:"角色描述"},{default:o(()=>[l(m,{modelValue:e.ruleForm.describe,"onUpdate:modelValue":t[4]||(t[4]=a=>e.ruleForm.describe=a),type:"textarea",placeholder:"请输入角色描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(r,{label:"菜单权限"},{default:o(()=>[l(v,{data:e.menuData,props:e.menuProps,"show-checkbox":"",class:"menu-data-tree"},null,8,["data","props"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});const fe=E(H,[["__scopeId","data-v-97e8d6ad"]]);export{fe as default};
