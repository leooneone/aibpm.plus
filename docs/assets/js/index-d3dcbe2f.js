import{_ as I}from"./ai-form-97a12f88.js";import{k as m,R as M,e as S,l as V,j as N,m as s,o as E,c as R,p as n,y as i,M as c,Y as A,G as P,v as z,N as p,q as B,u as G}from"./@vue-8306d5ee.js";import{b as O}from"./test-2ccce389.js";import{C as j}from"./Captcha-d011ecf7.js";import{a as q}from"./element-plus-e21f9b5a.js";import{_ as F}from"./index-c27e5712.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const L={class:"w100"},U=m({name:"my-input-code"}),Y=m({...U,props:{maxlength:{type:Number,default:6},seconds:{type:Number,default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"s秒后重发"},endText:{type:String,default:"重新发送验证码"},mobile:{type:String,default:""},validate:{type:Function,default:null}},emits:["send"],setup(u,{emit:_}){const e=u,f=M(()=>I(()=>import("./dialog-68bc937f.js"),["assets/js/dialog-68bc937f.js","assets/js/ai-form-97a12f88.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css"])),l=S(),r=Date.now(),t=V({status:"ready",startText:e.startText,changeText:e.changeText,endText:e.endText,countdown:r,showDialog:!1,codeId:"",loading:{getCode:!1}}),g=N(()=>t.status==="ready"?t.startText:t.endText),x=()=>{t.status="countdown",t.countdown=Date.now()+(e.seconds+1)*1e3},h=()=>{t.status!=="countdown"&&(e.validate?e.validate(d):d())},w=o=>{t.countdown!=r&&o<1e3&&(t.status="finish")},y=async o=>{t.showDialog=!1,t.loading.getCode=!0;const a=await new j().sendSmsCode({mobile:e.mobile,captchaId:o.captchaId,track:o.track,codeId:t.codeId}).catch(()=>{}).finally(()=>{t.loading.getCode=!1});a!=null&&a.success&&a.data&&(t.codeId=a.data,_("send",a.data),x())},d=()=>{var o;if(!O(e.mobile)){q.warning({message:"请输入正确的手机号码",grouping:!0});return}t.showDialog=!0,(o=l.value)==null||o.refresh()};return(o,a)=>{const v=s("ele-Message"),C=s("el-icon"),b=s("el-button"),T=s("el-countdown"),D=s("el-input");return E(),R("div",L,[n(D,B({text:"",maxlength:e.maxlength,placeholder:"请输入验证码",autocomplete:"off"},o.$attrs),{prefix:i(()=>[n(C,{class:"el-input__icon"},{default:i(()=>[n(v)]),_:1})]),suffix:i(()=>[c(n(b,{loading:t.loading.getCode,type:"primary",link:"",disabled:t.status==="countdown",onClick:A(h,["prevent","stop"])},{default:i(()=>[P(z(g.value),1)]),_:1},8,["loading","disabled","onClick"]),[[p,t.status!=="countdown"]]),c(n(T,{format:t.changeText,value:t.countdown,"value-style":"font-size:var(--el-font-size-base);color:var(--el-color-primary)",onChange:w},null,8,["format","value"]),[[p,t.status==="countdown"]])]),_:1},16,["maxlength"]),n(G(f),{ref_key:"myCaptchaDialogRef",ref:l,modelValue:t.showDialog,"onUpdate:modelValue":a[0]||(a[0]=k=>t.showDialog=k),onOk:y},null,8,["modelValue"])])}}});const yt=F(Y,[["__scopeId","data-v-1f1b9b49"]]);export{yt as default};
