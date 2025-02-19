import{_ as H}from"./ai-form-7f0c78d7.js";import{s as K}from"./pinia-e84f6aa2.js";import{d as O,a0 as J}from"./index-aa73a18b.js";import{k as D,e as G,l as j,i as q,m as s,o as _,c as b,p as e,y as l,a as S,G as u,v as V,x as c,F as U,u as Q,D as W,R as X}from"./@vue-8306d5ee.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const Y={class:"system-menu-dialog-container"},Z={key:0},$={class:"dialog-footer"},ee=D({name:"example/systemMenuDialog"}),Le=D({...ee,emits:["refresh"],setup(le,{expose:w,emit:T}){const L=X(()=>H(()=>import("./index-4a394948.js"),["assets/js/index-4a394948.js","assets/js/ai-form-7f0c78d7.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/getStyleSheets-a93480e6.js","assets/css/index-47b5c078.css"])),A=G(),C=O(),{routesList:v}=K(C),o=j({ruleForm:{menuSuperior:[],menuType:"menu",name:"",componentAlias:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),g=f=>{const a=[];return f.map(n=>{var m;n.title=J.global.t((m=n.meta)==null?void 0:m.title),a.push({...n}),n.children&&g(n.children)}),a},I=(f,a)=>{f==="edit"?(a.menuType="menu",a.menuSort=Math.floor(Math.random()*100),o.ruleForm=JSON.parse(JSON.stringify(a)),o.dialog.title="修改菜单",o.dialog.submitTxt="修 改"):(o.dialog.title="新增菜单",o.dialog.submitTxt="新 增"),o.dialog.type=f,o.dialog.isShowDialog=!0},x=()=>{o.dialog.isShowDialog=!1},h=()=>{o.ruleForm.meta.isIframe?o.ruleForm.isLink=!0:o.ruleForm.isLink=!1},N=()=>{x()},R=()=>{x(),T("refresh")};return q(()=>{o.menuData=g(v.value)}),w({openDialog:I}),(f,a)=>{const n=s("el-cascader"),m=s("el-form-item"),r=s("el-col"),d=s("el-radio"),p=s("el-radio-group"),i=s("el-input"),F=s("el-option"),M=s("el-select"),P=s("el-input-number"),B=s("el-row"),z=s("el-form"),y=s("el-button"),E=s("el-dialog");return _(),b("div",Y,[e(E,{title:o.dialog.title,modelValue:o.dialog.isShowDialog,"onUpdate:modelValue":a[17]||(a[17]=t=>o.dialog.isShowDialog=t),width:"769px"},{footer:l(()=>[S("span",$,[e(y,{onClick:N,size:"default"},{default:l(()=>[u("取 消")]),_:1}),e(y,{type:"primary",onClick:R,size:"default"},{default:l(()=>[u(V(o.dialog.submitTxt),1)]),_:1})])]),default:l(()=>[e(z,{ref_key:"menuDialogFormRef",ref:A,model:o.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(B,{gutter:35},{default:l(()=>[e(r,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"上级菜单"},{default:l(()=>[e(n,{options:o.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"请选择上级菜单",clearable:"",class:"w100",modelValue:o.ruleForm.menuSuperior,"onUpdate:modelValue":a[0]||(a[0]=t=>o.ruleForm.menuSuperior=t)},{default:l(({node:t,data:k})=>[S("span",null,V(k.title),1),t.isLeaf?c("",!0):(_(),b("span",Z," ("+V(k.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"菜单类型"},{default:l(()=>[e(p,{modelValue:o.ruleForm.menuType,"onUpdate:modelValue":a[1]||(a[1]=t=>o.ruleForm.menuType=t)},{default:l(()=>[e(d,{label:"menu"},{default:l(()=>[u("菜单")]),_:1}),e(d,{label:"btn"},{default:l(()=>[u("按钮")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.meta.title,"onUpdate:modelValue":a[2]||(a[2]=t=>o.ruleForm.meta.title=t),placeholder:"格式：message.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(_(),b(U,{key:0},[e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.name,"onUpdate:modelValue":a[3]||(a[3]=t=>o.ruleForm.name=t),placeholder:"路由中的 name 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由路径"},{default:l(()=>[e(i,{modelValue:o.ruleForm.path,"onUpdate:modelValue":a[4]||(a[4]=t=>o.ruleForm.path=t),placeholder:"路由中的 path 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"重定向"},{default:l(()=>[e(i,{modelValue:o.ruleForm.redirect,"onUpdate:modelValue":a[5]||(a[5]=t=>o.ruleForm.redirect=t),placeholder:"请输入路由重定向",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单图标"},{default:l(()=>[e(Q(L),{placeholder:"请输入菜单图标",modelValue:o.ruleForm.meta.icon,"onUpdate:modelValue":a[6]||(a[6]=t=>o.ruleForm.meta.icon=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"组件路径"},{default:l(()=>[e(i,{modelValue:o.ruleForm.componentAlias,"onUpdate:modelValue":a[7]||(a[7]=t=>o.ruleForm.componentAlias=t),placeholder:"组件路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"链接地址"},{default:l(()=>[e(i,{modelValue:o.ruleForm.meta.isLink,"onUpdate:modelValue":a[8]||(a[8]=t=>o.ruleForm.meta.isLink=t),placeholder:"外链/内嵌时链接地址（http:xxx.com）",clearable:"",disabled:!o.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(M,{modelValue:o.ruleForm.meta.roles,"onUpdate:modelValue":a[9]||(a[9]=t=>o.ruleForm.meta.roles=t),multiple:"",placeholder:"取角色管理",clearable:"",class:"w100"},{default:l(()=>[e(F,{label:"admin",value:"admin"}),e(F,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0),o.ruleForm.menuType==="btn"?(_(),W(r,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(i,{modelValue:o.ruleForm.btnPower,"onUpdate:modelValue":a[10]||(a[10]=t=>o.ruleForm.btnPower=t),placeholder:"请输入权限标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):c("",!0),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单排序"},{default:l(()=>[e(P,{modelValue:o.ruleForm.menuSort,"onUpdate:modelValue":a[11]||(a[11]=t=>o.ruleForm.menuSort=t),"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(_(),b(U,{key:2},[e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否隐藏"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isHide,"onUpdate:modelValue":a[12]||(a[12]=t=>o.ruleForm.meta.isHide=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("隐藏")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"页面缓存"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":a[13]||(a[13]=t=>o.ruleForm.meta.isKeepAlive=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("缓存")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不缓存")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否固定"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isAffix,"onUpdate:modelValue":a[14]||(a[14]=t=>o.ruleForm.meta.isAffix=t)},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("固定")]),_:1}),e(d,{label:!1},{default:l(()=>[u("不固定")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否外链"},{default:l(()=>[e(p,{modelValue:o.ruleForm.isLink,"onUpdate:modelValue":a[15]||(a[15]=t=>o.ruleForm.isLink=t),disabled:o.ruleForm.meta.isIframe},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("是")]),_:1}),e(d,{label:!1},{default:l(()=>[u("否")]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否内嵌"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isIframe,"onUpdate:modelValue":a[16]||(a[16]=t=>o.ruleForm.meta.isIframe=t),onChange:h},{default:l(()=>[e(d,{label:!0},{default:l(()=>[u("是")]),_:1}),e(d,{label:!1},{default:l(()=>[u("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):c("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{Le as default};
