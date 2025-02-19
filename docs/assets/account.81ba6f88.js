import{d as P,a8 as R,a7 as U,av as $,O as q,c as B,S as a,a4 as D,e as _,l as f,m as e,z as o,g as y,n as z,p as v,y as E,x as O}from"./vue.72f2672d.js";import{u as j}from"./vue-i18n.cjs.d9dfdcc6.js";import{S as N,a as A}from"./storage.6b2e7cd0.js";import{u as M}from"./themeConfig.598b93cc.js";import{b as J,i as L}from"./index.27bbff98.js";import{a as G}from"./formatTime.29ac8c52.js";import{N as H}from"./loading.3dc30912.js";import{aj as S}from"./index.0c380c40.js";import{_ as K}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";import"./vue.runtime.esm-bundler.2c939456.js";import"./index.41c8da86.js";import"./keepAliveNames.8ff91aac.js";import"./routesList.3cbee093.js";import"./preload-helper.101896b7.js";import"./userInfo.6e870420.js";import"./http-client.3dda918f.js";import"./index.57385bce.js";import"./tagsViewRoutes.1cd20f40.js";import"./tree.d5b28a07.js";import"./index.41e0794f.js";const Q=O("1234"),W=P({name:"example/loginAccount"}),X=P({...W,setup(Y){const{t:V}=j(),C=M(),{themeConfig:I}=R(C),m=U(),g=$(),t=q({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),k=B(()=>G(new Date)),F=async()=>{if(t.loading.signIn=!0,N.set("token",Math.random().toString(36).substr(0)),A.set("userName",t.ruleForm.userName),I.value.isRequestRoutes){const n=await L();w(n)}else{const n=await J();w(n)}},w=n=>{var s,u,l,r;if(n)S.warning("抱歉，您没有登录权限"),N.clear();else{let i=k.value;(s=m.query)!=null&&s.redirect?g.push({path:(u=m.query)==null?void 0:u.redirect,query:Object.keys((l=m.query)==null?void 0:l.params).length>0?JSON.parse((r=m.query)==null?void 0:r.params):""}):g.push("/");const p=V("message.signInText");S.success(`${i}，${p}`),H.start()}t.loading.signIn=!1};return(n,s)=>{const u=a("ele-User"),l=a("el-icon"),r=a("el-input"),i=a("el-form-item"),p=a("ele-Unlock"),T=a("ele-Position"),d=a("el-col"),h=a("el-button"),b=a("el-form"),x=D("waves");return _(),f(b,{size:"large",class:"login-content-form"},{default:e(()=>[o(i,{class:"login-animation1"},{default:e(()=>[o(r,{text:"",placeholder:n.$t("message.account.accountPlaceholder1"),modelValue:t.ruleForm.userName,"onUpdate:modelValue":s[0]||(s[0]=c=>t.ruleForm.userName=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(u)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation2"},{default:e(()=>[o(r,{type:t.isShowPassword?"text":"password",placeholder:n.$t("message.account.accountPlaceholder2"),modelValue:t.ruleForm.password,"onUpdate:modelValue":s[2]||(s[2]=c=>t.ruleForm.password=c),autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(p)]),_:1})]),suffix:e(()=>[y("i",{class:z(["iconfont el-input__icon login-content-password",t.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:s[1]||(s[1]=c=>t.isShowPassword=!t.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation3"},{default:e(()=>[o(d,{span:15},{default:e(()=>[o(r,{text:"",maxlength:"4",placeholder:n.$t("message.account.accountPlaceholder3"),modelValue:t.ruleForm.code,"onUpdate:modelValue":s[3]||(s[3]=c=>t.ruleForm.code=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(T)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(d,{span:1}),o(d,{span:8},{default:e(()=>[v((_(),f(h,{class:"login-content-code"},{default:e(()=>[Q]),_:1})),[[x]])]),_:1})]),_:1}),o(i,{class:"login-animation4"},{default:e(()=>[v((_(),f(h,{type:"primary",class:"login-content-submit",round:"",onClick:F,loading:t.loading.signIn},{default:e(()=>[y("span",null,E(n.$t("message.account.accountBtnText")),1)]),_:1},8,["loading"])),[[x]])]),_:1})]),_:1})}}});const ye=K(X,[["__scopeId","data-v-24fca638"]]);export{ye as default};
