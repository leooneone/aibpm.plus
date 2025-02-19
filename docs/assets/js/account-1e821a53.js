import{u as $,d as U}from"./vue-router-c9c3da21.js";import{v as b}from"./vue-i18n-86a71ef1.js";import{a as R}from"./js-cookie-edb2da2a.js";import{s as q}from"./pinia-e84f6aa2.js";import{u as B,a as D,$ as j,T as E,S as M,N as z,_ as A}from"./index-0ce5277f.js";import{a as O}from"./formatTime-29ac8c52.js";import{a as x}from"./element-plus-e21f9b5a.js";import{k as N,l as G,j as J,m as a,$ as L,o as _,D as f,y as e,p as o,a as y,I as H,M as I,G as K,v as Q}from"./@vue-8306d5ee.js";import"./@intlify-869ec77a.js";import"./vue-27cbb85a.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-3baf0d65.js";import"./@element-plus-8ef115d9.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./lodash-es-f559e892.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const W=N({name:"example/loginAccount"}),X=N({...W,setup(Y){const{t:P}=b.useI18n(),S=B(),{themeConfig:V}=q(S),m=$(),g=U(),t=G({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),C=J(()=>O(new Date)),T=async()=>{if(t.loading.signIn=!0,D().setToken(Math.random().toString(36).substr(0)),R.set("userName",t.ruleForm.userName),V.value.isRequestRoutes){const n=await E();w(n)}else{const n=await j();w(n)}},w=n=>{var s,u,l,r;if(n)x.warning("抱歉，您没有登录权限"),M.clear();else{let i=C.value;(s=m.query)!=null&&s.redirect?g.push({path:(u=m.query)==null?void 0:u.redirect,query:Object.keys((l=m.query)==null?void 0:l.params).length>0?JSON.parse((r=m.query)==null?void 0:r.params):""}):g.push("/");const p=P("message.signInText");x.success(`${i}，${p}`),z.start()}t.loading.signIn=!1};return(n,s)=>{const u=a("ele-User"),l=a("el-icon"),r=a("el-input"),i=a("el-form-item"),p=a("ele-Unlock"),k=a("ele-Position"),d=a("el-col"),h=a("el-button"),F=a("el-form"),v=L("waves");return _(),f(F,{size:"large",class:"login-content-form"},{default:e(()=>[o(i,{class:"login-animation1"},{default:e(()=>[o(r,{text:"",placeholder:n.$t("message.account.accountPlaceholder1"),modelValue:t.ruleForm.userName,"onUpdate:modelValue":s[0]||(s[0]=c=>t.ruleForm.userName=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(u)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation2"},{default:e(()=>[o(r,{type:t.isShowPassword?"text":"password",placeholder:n.$t("message.account.accountPlaceholder2"),modelValue:t.ruleForm.password,"onUpdate:modelValue":s[2]||(s[2]=c=>t.ruleForm.password=c),autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(p)]),_:1})]),suffix:e(()=>[y("i",{class:H(["iconfont el-input__icon login-content-password",t.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:s[1]||(s[1]=c=>t.isShowPassword=!t.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation3"},{default:e(()=>[o(d,{span:15},{default:e(()=>[o(r,{text:"",maxlength:"4",placeholder:n.$t("message.account.accountPlaceholder3"),modelValue:t.ruleForm.code,"onUpdate:modelValue":s[3]||(s[3]=c=>t.ruleForm.code=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(k)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(d,{span:1}),o(d,{span:8},{default:e(()=>[I((_(),f(h,{class:"login-content-code"},{default:e(()=>[K("1234")]),_:1})),[[v]])]),_:1})]),_:1}),o(i,{class:"login-animation4"},{default:e(()=>[I((_(),f(h,{type:"primary",class:"login-content-submit",round:"",onClick:T,loading:t.loading.signIn},{default:e(()=>[y("span",null,Q(n.$t("message.account.accountBtnText")),1)]),_:1},8,["loading"])),[[v]])]),_:1})]),_:1})}}});const Ve=A(X,[["__scopeId","data-v-14e8c787"]]);export{Ve as default};
