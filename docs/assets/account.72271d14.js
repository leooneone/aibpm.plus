import{d as k,a7 as F,av as K,O as T,c as U,S as r,a4 as $,e as f,l as g,m as n,z as s,E as w,g as y,n as q,p as A,y as B}from"./vue.72f2672d.js";import{u as D}from"./vue-i18n.cjs.d9dfdcc6.js";import{i as z}from"./index.107055f5.js";import{L as h,S as v}from"./storage.6b2e7cd0.js";import{a as E}from"./formatTime.29ac8c52.js";import{N as L}from"./loading.3dc30912.js";import{A as O}from"./userInfo.8056b3db.js";import{a as x}from"./http-client.193f2c5b.js";import{aj as I}from"./index.0c380c40.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";import"./vue.runtime.esm-bundler.2c939456.js";import"./index.41c8da86.js";import"./keepAliveNames.8ff91aac.js";import"./routesList.3cbee093.js";import"./themeConfig.598b93cc.js";import"./preload-helper.101896b7.js";import"./tagsViewRoutes.1cd20f40.js";import"./tree.d5b28a07.js";import"./index.57385bce.js";import"./index.41e0794f.js";const j=k({name:"loginAccount"}),J=k({...j,setup(M){const{t:S}=D(),m=F(),_=K(),e=T({isShowPassword:!1,ruleForm:{userName:"admin",password:"111111"},loading:{signIn:!1}}),N=U(()=>E(new Date)),p=async()=>{var a;e.loading.signIn=!0;const t=await new O().login(e.ruleForm).catch(()=>{e.loading.signIn=!1});if(!(t!=null&&t.success)){e.loading.signIn=!1;return}const o=(a=t.data)==null?void 0:a.token;h.set(x,o),v.set("token",o);const i=await z();P(i)},P=t=>{var o,i,a,l;if(t)I.warning("抱歉，您没有分配权限，请联系管理员"),h.remove(x),v.clear();else{let c=N.value;(o=m.query)!=null&&o.redirect?_.push({path:(i=m.query)==null?void 0:i.redirect,query:Object.keys((a=m.query)==null?void 0:a.params).length>0?JSON.parse((l=m.query)==null?void 0:l.params):""}):_.push("/");const d=S("message.signInText");I.success(`${c}，${d}`),L.start()}e.loading.signIn=!1};return(t,o)=>{const i=r("ele-User"),a=r("el-icon"),l=r("el-input"),c=r("el-form-item"),d=r("ele-Unlock"),V=r("el-button"),b=r("el-form"),C=$("waves");return f(),g(b,{size:"large",class:"login-content-form"},{default:n(()=>[s(c,{class:"login-animation1"},{default:n(()=>[s(l,{text:"",placeholder:t.$t("message.account.accountPlaceholder1"),modelValue:e.ruleForm.userName,"onUpdate:modelValue":o[0]||(o[0]=u=>e.ruleForm.userName=u),clearable:"",autocomplete:"off",onKeyup:w(p,["enter"])},{prefix:n(()=>[s(a,{class:"el-input__icon"},{default:n(()=>[s(i)]),_:1})]),_:1},8,["placeholder","modelValue","onKeyup"])]),_:1}),s(c,{class:"login-animation2"},{default:n(()=>[s(l,{type:e.isShowPassword?"text":"password",placeholder:t.$t("message.account.accountPlaceholder2"),modelValue:e.ruleForm.password,"onUpdate:modelValue":o[2]||(o[2]=u=>e.ruleForm.password=u),autocomplete:"off",onKeyup:w(p,["enter"])},{prefix:n(()=>[s(a,{class:"el-input__icon"},{default:n(()=>[s(d)]),_:1})]),suffix:n(()=>[y("i",{class:q(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:o[1]||(o[1]=u=>e.isShowPassword=!e.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue","onKeyup"])]),_:1}),s(c,{class:"login-animation4"},{default:n(()=>[A((f(),g(V,{type:"primary",class:"login-content-submit",round:"",onClick:p,loading:e.loading.signIn},{default:n(()=>[y("span",null,B(t.$t("message.account.accountBtnText")),1)]),_:1},8,["loading"])),[[C]])]),_:1})]),_:1})}}});const _e=R(J,[["__scopeId","data-v-e6d05b5d"]]);export{_e as default};
