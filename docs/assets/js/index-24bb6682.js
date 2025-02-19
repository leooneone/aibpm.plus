var M=Object.defineProperty;var E=(s,i,t)=>i in s?M(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t;var u=(s,i,t)=>(E(s,typeof i!="symbol"?i+"":i,t),t);import{_ as A}from"./ai-form-3baf0d65.js";import{H as G,C as j}from"./http-client-2f8e2141.js";import{k as v,h as H,l as z,ah as J,e as y,i as O,m as a,$,M as K,o as _,c as Q,p as e,y as o,u as r,D as g,a as w,v as W,x as X,G as x,R as Y,S as Z,T as ee}from"./@vue-8306d5ee.js";import{_ as te}from"./index-1c0db287.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./axios-21b846bc.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";class S extends G{constructor(){super(...arguments);u(this,"getSetting",(t={})=>this.request({path:"/api/bpm/bpm-setting/get-setting",method:"GET",secure:!0,format:"json",...t}));u(this,"get",(t={})=>this.request({path:"/api/bpm/bpm-setting/get",method:"GET",secure:!0,format:"json",...t}));u(this,"update",(t,n={})=>this.request({path:"/api/bpm/bpm-setting/update",method:"PUT",body:t,secure:!0,type:j.Json,...n}))}}const oe=s=>(Z("data-v-6fa761ac"),s=s(),ee(),s),ae={class:"personal layout-pd"},ne=oe(()=>w("div",{class:"personal-edit-title"},"流水号设置",-1)),le={class:"personal-edit-title mb15"},re=v({name:"personal"}),se=v({...re,setup(s){const i=Y(()=>A(()=>import("./my-select-user-1f8dd33a.js"),["assets/js/my-select-user-1f8dd33a.js","assets/js/ai-form-3baf0d65.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css"]));H();const t=z({loading:!1,updateLoading:!1,bpmSettingForm:{referenceNoSetting:{type:0,length:10,dateFormat:"yyyyMMdd"},adminId:null,adminName:""}}),{bpmSettingForm:n}=J(t),N=y(),h=y();O(()=>{V()});const V=async()=>{t.loading=!0;const m=await new S().get();m!=null&&m.success&&(t.bpmSettingForm=m.data),t.loading=!1},C=async()=>{h.value.validate(async m=>{if(!m)return;t.updateLoading=!0;const l=await new S().update(t.bpmSettingForm,{showSuccessMessage:!0}).catch(()=>{t.updateLoading=!1});t.updateLoading=!1,l!=null&&l.success})};return(m,l)=>{const b=a("el-option"),F=a("el-select"),c=a("el-form-item"),d=a("el-col"),I=a("el-input"),k=a("el-input-number"),f=a("el-row"),q=a("ele-Position"),P=a("el-icon"),R=a("el-button"),T=a("el-popconfirm"),U=a("el-form"),B=a("el-card"),D=a("change-password-form"),L=$("loading");return K((_(),Q("div",ae,[e(f,null,{default:o(()=>[e(d,{span:24},{default:o(()=>[e(B,{shadow:"hover",class:"mt15 personal-edit",header:"工作流设置"},{default:o(()=>[e(U,{ref_key:"formRef",ref:h,model:r(n),size:"default","label-width":"120px",class:"mt35 mb35"},{default:o(()=>[ne,e(f,{gutter:35},{default:o(()=>[e(d,{xs:24,sm:12,md:8,lg:6,xl:4},{default:o(()=>[e(c,{label:"模式",prop:"referenceNoSetting.type",rules:[{required:!0,message:"请选择模式",trigger:["blur","change"]}]},{default:o(()=>[e(F,{modelValue:r(n).referenceNoSetting.type,"onUpdate:modelValue":l[0]||(l[0]=p=>r(n).referenceNoSetting.type=p)},{default:o(()=>[(_(),g(b,{key:0,value:0,label:"全局"})),(_(),g(b,{key:1,value:1,label:"按模板"}))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:8,lg:6,xl:4},{default:o(()=>[e(c,{label:"日期格式",prop:"referenceNoSetting.dateFormat",rules:[{required:!0,message:"请输入日期格式",trigger:["blur","change"]}]},{default:o(()=>[e(I,{modelValue:r(n).referenceNoSetting.dateFormat,"onUpdate:modelValue":l[1]||(l[1]=p=>r(n).referenceNoSetting.dateFormat=p),placeholder:"请输入姓名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:8,lg:6,xl:4},{default:o(()=>[e(c,{label:"长度",prop:"referenceNoSetting.length",rules:[{required:!0,message:"请输入长度",trigger:["blur","change"]}]},{default:o(()=>[e(k,{min:"10",max:"20",modelValue:r(n).referenceNoSetting.length,"onUpdate:modelValue":l[2]||(l[2]=p=>r(n).referenceNoSetting.length=p)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),w("div",le," 异常管理员"+W(r(n).adminName),1),e(f,{gutter:35},{default:o(()=>[t.loading?X("",!0):(_(),g(d,{key:0,xs:24,sm:12,md:8,lg:6,xl:4},{default:o(()=>[e(c,{label:"异常管理员",prop:"adminId",rules:[{required:!0,message:"请选择异常管理员",trigger:["blur","change"]}]},{default:o(()=>[e(r(i),{modelValue:r(n).adminId,"onUpdate:modelValue":l[3]||(l[3]=p=>r(n).adminId=p),name:r(n).adminName,placeholder:"请选择异常管理员"},null,8,["modelValue","name"])]),_:1})]),_:1})),e(d,{xs:24,sm:12,md:16,lg:18,xl:20},{default:o(()=>[x(" 当某个任务没有找到合适的人员来执行（比如：以前设计的人员已离职等），则将该任务发送给异常管理员 ")]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(c,null,{default:o(()=>[e(T,{title:"确定要更新信息吗？","hide-icon":"","hide-after":"0",width:"180",onConfirm:C},{reference:o(()=>[e(R,{loading:t.updateLoading,type:"primary"},{default:o(()=>[e(P,null,{default:o(()=>[e(q)]),_:1}),x(" 更新 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(D,{ref_key:"changePasswordFormRef",ref:N,title:"修改密码"},null,512)])),[[L,t.loading]])}}});const De=te(se,[["__scopeId","data-v-6fa761ac"]]);export{De as default};
