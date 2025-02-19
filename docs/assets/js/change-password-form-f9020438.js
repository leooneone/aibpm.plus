import{V as k}from"./index-1c0db287.js";import{k as w,e as D,l as L,ah as U,m as n,o as N,c as q,p as o,y as l,a as z,G as c,u as i}from"./@vue-8306d5ee.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-3baf0d65.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const B={class:"dialog-footer"},R=w({name:"admin/personal/change-password-form"}),ne=w({...R,props:{title:{type:String,default:""}},setup(g,{expose:_}){const m=D(),t=L({showDialog:!1,sureLoading:!1,form:{}}),{form:a}=U(t),h=(d,e,r)=>{e&&(t.form.confirmPassword!==""&&m.value.validateField("confirmPassword"),r())},V=(d,e,r)=>{e&&(e!==t.form.newPassword?r(new Error("新密码和确认密码不一致!")):r())},b=async()=>{t.showDialog=!0},P=()=>{t.showDialog=!1},v=()=>{m.value.validate(async d=>{if(!d)return;t.sureLoading=!0;const e=await new k().changePassword(t.form,{showSuccessMessage:!0}).catch(()=>{t.sureLoading=!1});t.sureLoading=!1,e!=null&&e.success&&(t.showDialog=!1)})};return _({open:b}),(d,e)=>{const r=n("el-input"),u=n("el-form-item"),p=n("el-col"),y=n("el-row"),x=n("el-form"),f=n("el-button"),C=n("el-dialog");return N(),q("div",null,[o(C,{modelValue:t.showDialog,"onUpdate:modelValue":e[3]||(e[3]=s=>t.showDialog=s),"destroy-on-close":"",title:g.title,draggable:"","close-on-click-modal":!1,"close-on-press-escape":!1,width:"475px"},{footer:l(()=>[z("span",B,[o(f,{onClick:P,size:"default"},{default:l(()=>[c("取 消")]),_:1}),o(f,{type:"primary",onClick:v,size:"default",loading:t.sureLoading},{default:l(()=>[c("确 定")]),_:1},8,["loading"])])]),default:l(()=>[o(x,{ref_key:"formRef",ref:m,model:i(a),size:"default","label-width":"80px","label-position":"left"},{default:l(()=>[o(y,{gutter:35},{default:l(()=>[o(p,{span:24},{default:l(()=>[o(u,{label:"旧密码",prop:"oldPassword",rules:[{required:!0,message:"请输入旧密码",trigger:["blur","change"]}]},{default:l(()=>[o(r,{modelValue:i(a).oldPassword,"onUpdate:modelValue":e[0]||(e[0]=s=>i(a).oldPassword=s),"show-password":"",autocomplete:"off",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(p,{span:24},{default:l(()=>[o(u,{label:"新密码",prop:"newPassword",rules:[{required:!0,message:"请输入新密码",trigger:["blur","change"]},{validator:h,trigger:["blur","change"]}]},{default:l(()=>[o(r,{modelValue:i(a).newPassword,"onUpdate:modelValue":e[1]||(e[1]=s=>i(a).newPassword=s),"show-password":"",autocomplete:"off",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),o(p,{span:24},{default:l(()=>[o(u,{label:"确认密码",prop:"confirmPassword",rules:[{required:!0,message:"请输入确认密码",trigger:["blur","change"]},{validator:V,trigger:["blur","change"]}]},{default:l(()=>[o(r,{modelValue:i(a).confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=s=>i(a).confirmPassword=s),"show-password":"",autocomplete:"off",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{ne as default};
