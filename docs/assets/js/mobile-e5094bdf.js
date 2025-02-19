import{_ as D}from"./ai-form-3baf0d65.js";import{k as x,e as v,l as N,j as A,m as l,$ as B,o as y,c as E,p as r,y as i,u as I,am as b,M as K,D as M,a as $,v as j,R as L}from"./@vue-8306d5ee.js";import{u as O,d as P}from"./vue-router-c9c3da21.js";import{t as U}from"./test-fb6d7fa5.js";import{R as z,a as h,T as J,S as G,N as H,_ as Q}from"./index-0ce5277f.js";import{v as W}from"./vue-i18n-86a71ef1.js";import{a as X}from"./formatTime-29ac8c52.js";import{a as w}from"./element-plus-e21f9b5a.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-8ef115d9.js";import"./nprogress-b96aa312.js";import"./@intlify-869ec77a.js";import"./axios-21b846bc.js";import"./lodash-es-f559e892.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";import"./vue-27cbb85a.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const Y=x({name:"loginMobile"}),Z=x({...Y,setup(ee){const F=L(()=>D(()=>import("./index-7c805e81.js"),["assets/js/index-7c805e81.js","assets/js/ai-form-3baf0d65.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/test-fb6d7fa5.js","assets/js/index-0ce5277f.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/js/Captcha-3d192d5e.js","assets/css/index-4edc30d1.css"])),{t:R}=W.useI18n(),u=O(),f=P(),c=v(),g=v(),o=N({ruleForm:{mobile:"",code:"",codeId:""},loading:{signIn:!1}}),k=t=>{c.value.validateField("mobile",e=>{var n;if(!e){(n=g.value)==null||n.focus();return}t==null||t()})},T=A(()=>X(new Date)),V=t=>{o.ruleForm.codeId=t},p=async()=>{c.value.validate(async t=>{var s;if(!t)return;o.loading.signIn=!0;const e=await new z().mobileLogin(o.ruleForm).catch(()=>{o.loading.signIn=!1});if(!(e!=null&&e.success)){o.loading.signIn=!1;return}const n=(s=e.data)==null?void 0:s.token;h().setToken(n);const a=await J();q(a)})},q=t=>{var e,n,a,s;if(t)w.warning("抱歉，您没有分配权限，请联系管理员"),h().removeToken(),G.clear();else{let m=T.value;(e=u.query)!=null&&e.redirect?f.push({path:(n=u.query)==null?void 0:n.redirect,query:Object.keys((a=u.query)==null?void 0:a.params).length>0?JSON.parse((s=u.query)==null?void 0:s.params):""}):f.push("/");const d=R("message.signInText");w.success(`${m}，${d}`),H.start()}o.loading.signIn=!1};return(t,e)=>{const n=l("ele-Iphone"),a=l("el-icon"),s=l("el-input"),m=l("el-form-item"),d=l("el-button"),C=l("el-form"),S=B("waves");return y(),E("div",null,[r(C,{ref_key:"formRef",ref:c,model:o.ruleForm,size:"large",class:"login-content-form"},{default:i(()=>[r(m,{class:"login-animation1",prop:"mobile",rules:[{required:!0,message:"请输入手机号",trigger:["blur","change"]},{validator:I(U),trigger:["blur","change"]}]},{default:i(()=>[r(s,{ref_key:"phoneRef",ref:g,text:"",placeholder:t.$t("message.mobile.placeholder1"),maxlength:"11",modelValue:o.ruleForm.mobile,"onUpdate:modelValue":e[0]||(e[0]=_=>o.ruleForm.mobile=_),clearable:"",autocomplete:"off",onKeyup:b(p,["enter"])},{prefix:i(()=>[r(a,{class:"el-input__icon"},{default:i(()=>[r(n)]),_:1})]),_:1},8,["placeholder","modelValue","onKeyup"])]),_:1},8,["rules"]),r(m,{class:"login-animation2",prop:"code",rules:[{required:!0,message:"请输入短信验证码",trigger:["blur","change"]}]},{default:i(()=>[r(I(F),{modelValue:o.ruleForm.code,"onUpdate:modelValue":e[1]||(e[1]=_=>o.ruleForm.code=_),onKeyup:b(p,["enter"]),mobile:o.ruleForm.mobile,validate:k,onSend:V},null,8,["modelValue","onKeyup","mobile"])]),_:1}),r(m,{class:"login-animation3"},{default:i(()=>[K((y(),M(d,{round:"",type:"primary",class:"login-content-submit",onClick:p,loading:o.loading.signIn},{default:i(()=>[$("span",null,j(t.$t("message.mobile.btnText")),1)]),_:1},8,["loading"])),[[S]])]),_:1})]),_:1},8,["model"])])}}});const qe=Q(Z,[["__scopeId","data-v-901f391c"]]);export{qe as default};
