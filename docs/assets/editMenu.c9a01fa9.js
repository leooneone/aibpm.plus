import{_ as N}from"./preload-helper.101896b7.js";import{d as U,a6 as H,a8 as K,O as R,o as O,S as d,e as f,f as c,z as e,m as l,g as k,y as h,t as b,F as S,u as j,l as $,x as u}from"./vue.df334614.js";import{u as q}from"./routesList.80280d49.js";import{i as G}from"./index.1b76e59f.js";import"./vue-i18n.cjs.89c19b83.js";import"./_commonjsHelpers.042e6b4d.js";import"./vue.runtime.esm-bundler.7d88586f.js";import"./index.10529e3b.js";import"./themeConfig.daf39624.js";const J={class:"system-edit-menu-container"},Q={key:0},W=u("菜单"),X=u("按钮"),Y=u("隐藏"),Z=u("不隐藏"),ee=u("缓存"),le=u("不缓存"),oe=u("固定"),te=u("不固定"),ae=u("是"),me=u("否"),se=u("是"),ue=u("否"),de={class:"dialog-footer"},re=u("取 消"),ne=u("修 改"),ie=U({name:"example/systemEditMenu"}),ke=U({...ie,setup(_e,{expose:D}){const L=H(()=>N(()=>import("./index.d3f2fe86.js"),["assets/index.d3f2fe86.js","assets/preload-helper.101896b7.js","assets/getStyleSheets.de5032d4.js","assets/index.4621962e.js","assets/vue.df334614.js","assets/index.47b5c078.css"])),w=q(),{routesList:C}=K(w),o=R({isShowDialog:!1,ruleForm:{menuSuperior:[],menuType:"menu",name:"",component:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[]}),V=n=>{const t=[];return n.map(i=>{var m;i.title=G.global.t((m=i.meta)==null?void 0:m.title),t.push({...i}),i.children&&V(i.children)}),t},T=n=>{var t;n.menuType="menu",n.menuSort=Math.random(),n.component=(t=`${n.component} `.match(/\'(.+)\'/g))==null?void 0:t.join("").replace(/\'/g,""),o.ruleForm=n,o.isShowDialog=!0},x=()=>{o.isShowDialog=!1},v=()=>{o.ruleForm.meta.isIframe?o.ruleForm.isLink=!0:o.ruleForm.isLink=!1},A=()=>{x()},I=()=>{x()};return O(()=>{o.menuData=V(C.value)}),D({openDialog:T}),(n,t)=>{const i=d("el-cascader"),m=d("el-form-item"),s=d("el-col"),r=d("el-radio"),p=d("el-radio-group"),_=d("el-input"),F=d("el-option"),P=d("el-select"),z=d("el-input-number"),B=d("el-row"),E=d("el-form"),g=d("el-button"),M=d("el-dialog");return f(),c("div",J,[e(M,{title:"修改菜单",modelValue:o.isShowDialog,"onUpdate:modelValue":t[17]||(t[17]=a=>o.isShowDialog=a),width:"769px"},{footer:l(()=>[k("span",de,[e(g,{onClick:A,size:"default"},{default:l(()=>[re]),_:1}),e(g,{type:"primary",onClick:I,size:"default"},{default:l(()=>[ne]),_:1})])]),default:l(()=>[e(E,{model:o.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(B,{gutter:35},{default:l(()=>[e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"上级菜单"},{default:l(()=>[e(i,{options:o.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"请选择上级菜单",clearable:"",class:"w100",modelValue:o.ruleForm.menuSuperior,"onUpdate:modelValue":t[0]||(t[0]=a=>o.ruleForm.menuSuperior=a)},{default:l(({node:a,data:y})=>[k("span",null,h(y.title),1),a.isLeaf?b("",!0):(f(),c("span",Q," ("+h(y.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"菜单类型"},{default:l(()=>[e(p,{modelValue:o.ruleForm.menuType,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.menuType=a)},{default:l(()=>[e(r,{label:"menu"},{default:l(()=>[W]),_:1}),e(r,{label:"btn"},{default:l(()=>[X]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单名称"},{default:l(()=>[e(_,{modelValue:o.ruleForm.meta.title,"onUpdate:modelValue":t[2]||(t[2]=a=>o.ruleForm.meta.title=a),placeholder:"格式：message.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(f(),c(S,{key:0},[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由名称"},{default:l(()=>[e(_,{modelValue:o.ruleForm.name,"onUpdate:modelValue":t[3]||(t[3]=a=>o.ruleForm.name=a),placeholder:"路由中的 name 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"路由路径"},{default:l(()=>[e(_,{modelValue:o.ruleForm.path,"onUpdate:modelValue":t[4]||(t[4]=a=>o.ruleForm.path=a),placeholder:"路由中的 path 值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"重定向"},{default:l(()=>[e(_,{modelValue:o.ruleForm.redirect,"onUpdate:modelValue":t[5]||(t[5]=a=>o.ruleForm.redirect=a),placeholder:"请输入路由重定向",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单图标"},{default:l(()=>[e(j(L),{placeholder:"请输入菜单图标",modelValue:o.ruleForm.meta.icon,"onUpdate:modelValue":t[6]||(t[6]=a=>o.ruleForm.meta.icon=a),type:"all"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"组件路径"},{default:l(()=>[e(_,{modelValue:o.ruleForm.component,"onUpdate:modelValue":t[7]||(t[7]=a=>o.ruleForm.component=a),placeholder:"组件路径",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"链接地址"},{default:l(()=>[e(_,{modelValue:o.ruleForm.meta.isLink,"onUpdate:modelValue":t[8]||(t[8]=a=>o.ruleForm.meta.isLink=a),placeholder:"外链/内嵌时链接地址（http:xxx.com）",clearable:"",disabled:!o.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(P,{modelValue:o.ruleForm.meta.roles,"onUpdate:modelValue":t[9]||(t[9]=a=>o.ruleForm.meta.roles=a),multiple:"",placeholder:"取角色管理",clearable:"",class:"w100"},{default:l(()=>[e(F,{label:"admin",value:"admin"}),e(F,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):b("",!0),o.ruleForm.menuType==="btn"?(f(),$(s,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"权限标识"},{default:l(()=>[e(_,{modelValue:o.ruleForm.btnPower,"onUpdate:modelValue":t[10]||(t[10]=a=>o.ruleForm.btnPower=a),placeholder:"请输入权限标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):b("",!0),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"菜单排序"},{default:l(()=>[e(z,{modelValue:o.ruleForm.menuSort,"onUpdate:modelValue":t[11]||(t[11]=a=>o.ruleForm.menuSort=a),"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.menuType==="menu"?(f(),c(S,{key:2},[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否隐藏"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isHide,"onUpdate:modelValue":t[12]||(t[12]=a=>o.ruleForm.meta.isHide=a)},{default:l(()=>[e(r,{label:!0},{default:l(()=>[Y]),_:1}),e(r,{label:!1},{default:l(()=>[Z]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"页面缓存"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":t[13]||(t[13]=a=>o.ruleForm.meta.isKeepAlive=a)},{default:l(()=>[e(r,{label:!0},{default:l(()=>[ee]),_:1}),e(r,{label:!1},{default:l(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否固定"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isAffix,"onUpdate:modelValue":t[14]||(t[14]=a=>o.ruleForm.meta.isAffix=a)},{default:l(()=>[e(r,{label:!0},{default:l(()=>[oe]),_:1}),e(r,{label:!1},{default:l(()=>[te]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否外链"},{default:l(()=>[e(p,{modelValue:o.ruleForm.isLink,"onUpdate:modelValue":t[15]||(t[15]=a=>o.ruleForm.isLink=a),disabled:o.ruleForm.meta.isIframe},{default:l(()=>[e(r,{label:!0},{default:l(()=>[ae]),_:1}),e(r,{label:!1},{default:l(()=>[me]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"是否内嵌"},{default:l(()=>[e(p,{modelValue:o.ruleForm.meta.isIframe,"onUpdate:modelValue":t[16]||(t[16]=a=>o.ruleForm.meta.isIframe=a),onChange:v},{default:l(()=>[e(r,{label:!0},{default:l(()=>[se]),_:1}),e(r,{label:!1},{default:l(()=>[ue]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):b("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{ke as default};
