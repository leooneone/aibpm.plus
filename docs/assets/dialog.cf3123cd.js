import{_ as H}from"./preload-helper.101896b7.js";import{d as U,a6 as K,r as O,a8 as j,O as $,o as q,S as d,e as p,f as c,z as e,m as l,g as h,x as u,y as V,t as b,F as S,u as G,l as J}from"./vue.72f2672d.js";import{u as Q}from"./routesList.3cbee093.js";import{i as W}from"./index.df3e82f5.js";import"./vue-i18n.cjs.d9dfdcc6.js";import"./_commonjsHelpers.042e6b4d.js";import"./vue.runtime.esm-bundler.2c939456.js";import"./index.41c8da86.js";import"./themeConfig.598b93cc.js";const X={class:"system-menu-dialog-container"},Y={key:0},Z=u("菜单"),ee=u("按钮"),le=u("隐藏"),oe=u("不隐藏"),te=u("缓存"),ae=u("不缓存"),me=u("固定"),se=u("不固定"),ue=u("是"),de=u("否"),re=u("是"),ne=u("否"),ie={class:"dialog-footer"},_e=u("取 消"),fe=U({name:"example/systemMenuDialog"}),Se=U({...fe,emits:["refresh"],setup(pe,{expose:D,emit:T}){const L=K(()=>H(()=>import("./index.b28d1055.js"),["assets/index.b28d1055.js","assets/preload-helper.101896b7.js","assets/getStyleSheets.5514b9fa.js","assets/index.41e0794f.js","assets/vue.72f2672d.js","assets/index.47b5c078.css"])),w=O(),C=Q(),{routesList:v}=j(C),o=$({ruleForm:{menuSuperior:[],menuType:"menu",name:"",component:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),g=f=>{const t=[];return f.map(n=>{var m;n.title=W.global.t((m=n.meta)==null?void 0:m.title),t.push({...n}),n.children&&g(n.children)}),t},A=(f,t)=>{var n;f==="edit"?(t.menuType="menu",t.menuSort=Math.random(),t.component=(n=`${t.component} `.match(/\'(.+)\'/g))==null?void 0:n.join("").replace(/\'/g,""),o.ruleForm=t,o.dialog.title="修改菜单",o.dialog.submitTxt="修 改"):(o.dialog.title="新增菜单",o.dialog.submitTxt="新 增"),o.dialog.type=f,o.dialog.isShowDialog=!0},x=()=>{o.dialog.isShowDialog=!1},I=()=>{o.ruleForm.meta.isIframe?o.ruleForm.isLink=!0:o.ruleForm.isLink=!1},P=()=>{x()},R=()=>{x(),T("refresh")};return q(()=>{o.menuData=g(v.value)}),D({openDialog:A}),(f,t)=>{const n=d("el-cascader"),m=d("el-form-item"),s=d("el-col"),r=d("el-radio"),_=d("el-radio-group"),i=d("el-input"),F=d("el-option"),z=d("el-select"),B=d("el-input-number"),M=d("el-row"),N=d("el-form"),y=d("el-button"),E=d("el-dialog");return p(),c("div",X,[e(E,{title:o.dialog.title,modelValue:o.dialog.isShowDialog,"onUpdate:modelValue":t[17]||(t[17]=a=>o.dialog.isShowDialog=a),width:"769px"},{footer:l(()=>[h("span",ie,[e(y,{onClick:P,size:"default"},{default:l(()=>[_e]),_:1}),e(y,{type:"primary",onClick:R,size:"default"},{default:l(()=>[u(V(o.dialog.submitTxt),1)]),_:1})])]),default:l(()=>[e(N,{ref_key:"menuDialogFormRef",ref:w,model:o.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(M,{gutter:35},{default:l(()=>[e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"上级菜单"},{default:l(()=>[e(n,{options:o.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"请选择上级菜单",clearable:"",class:"w100",modelValue:o.ruleForm.menuSuperior,"onUpdate:modelValue":t[0]||(t[0]=a=>o.ruleForm.menuSuperior=a)},{default:l(({node:a,data:k})=>[h("span",null,V(k.title),1),a.isLeaf?b("",!0):(p(),c("span",Y," ("+V(k.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"菜单类型"},{default:l(()=>[e(_,{modelValue:o.ruleForm.menuType,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.menuType=a)},{default:l(()=>[e(r,{label:"menu"},{default:l(()=>[Z]),_:1}),e(r,{label:"btn"},{default:l(()=>[ee]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.meta.title,"onUpdate:modelValue":t[2]||(t[2]=a=>o.ruleForm.meta.title=a),placeholder:"格式：message.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(p(),c(S,{key:0},[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.name,"onUpdate:modelValue":t[3]||(t[3]=a=>o.ruleForm.name=a),placeholder:"路由中的 name 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由路径"},{default:l(()=>[e(i,{modelValue:o.ruleForm.path,"onUpdate:modelValue":t[4]||(t[4]=a=>o.ruleForm.path=a),placeholder:"路由中的 path 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"重定向"},{default:l(()=>[e(i,{modelValue:o.ruleForm.redirect,"onUpdate:modelValue":t[5]||(t[5]=a=>o.ruleForm.redirect=a),placeholder:"请输入路由重定向",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单图标"},{default:l(()=>[e(G(L),{placeholder:"请输入菜单图标",modelValue:o.ruleForm.meta.icon,"onUpdate:modelValue":t[6]||(t[6]=a=>o.ruleForm.meta.icon=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"组件路径"},{default:l(()=>[e(i,{modelValue:o.ruleForm.component,"onUpdate:modelValue":t[7]||(t[7]=a=>o.ruleForm.component=a),placeholder:"组件路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"链接地址"},{default:l(()=>[e(i,{modelValue:o.ruleForm.meta.isLink,"onUpdate:modelValue":t[8]||(t[8]=a=>o.ruleForm.meta.isLink=a),placeholder:"外链/内嵌时链接地址（http:xxx.com）",clearable:"",disabled:!o.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(z,{modelValue:o.ruleForm.meta.roles,"onUpdate:modelValue":t[9]||(t[9]=a=>o.ruleForm.meta.roles=a),multiple:"",placeholder:"取角色管理",clearable:"",class:"w100"},{default:l(()=>[e(F,{label:"admin",value:"admin"}),e(F,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):b("",!0),o.ruleForm.menuType==="btn"?(p(),J(s,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(i,{modelValue:o.ruleForm.btnPower,"onUpdate:modelValue":t[10]||(t[10]=a=>o.ruleForm.btnPower=a),placeholder:"请输入权限标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):b("",!0),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单排序"},{default:l(()=>[e(B,{modelValue:o.ruleForm.menuSort,"onUpdate:modelValue":t[11]||(t[11]=a=>o.ruleForm.menuSort=a),"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(p(),c(S,{key:2},[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否隐藏"},{default:l(()=>[e(_,{modelValue:o.ruleForm.meta.isHide,"onUpdate:modelValue":t[12]||(t[12]=a=>o.ruleForm.meta.isHide=a)},{default:l(()=>[e(r,{label:!0},{default:l(()=>[le]),_:1}),e(r,{label:!1},{default:l(()=>[oe]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"页面缓存"},{default:l(()=>[e(_,{modelValue:o.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":t[13]||(t[13]=a=>o.ruleForm.meta.isKeepAlive=a)},{default:l(()=>[e(r,{label:!0},{default:l(()=>[te]),_:1}),e(r,{label:!1},{default:l(()=>[ae]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否固定"},{default:l(()=>[e(_,{modelValue:o.ruleForm.meta.isAffix,"onUpdate:modelValue":t[14]||(t[14]=a=>o.ruleForm.meta.isAffix=a)},{default:l(()=>[e(r,{label:!0},{default:l(()=>[me]),_:1}),e(r,{label:!1},{default:l(()=>[se]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否外链"},{default:l(()=>[e(_,{modelValue:o.ruleForm.isLink,"onUpdate:modelValue":t[15]||(t[15]=a=>o.ruleForm.isLink=a),disabled:o.ruleForm.meta.isIframe},{default:l(()=>[e(r,{label:!0},{default:l(()=>[ue]),_:1}),e(r,{label:!1},{default:l(()=>[de]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否内嵌"},{default:l(()=>[e(_,{modelValue:o.ruleForm.meta.isIframe,"onUpdate:modelValue":t[16]||(t[16]=a=>o.ruleForm.meta.isIframe=a),onChange:I},{default:l(()=>[e(r,{label:!0},{default:l(()=>[re]),_:1}),e(r,{label:!1},{default:l(()=>[ne]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):b("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{Se as default};
