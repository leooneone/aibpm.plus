import{k as d,l as c,m as s,o as i,c as b,p as e,y as l}from"./@vue-8306d5ee.js";const x={class:"form-rules-two-container"},g=d({name:"example/pagesFormRulesTwo"}),v=d({...g,setup(w){const o=c({form:{phone:"",sex:"",password:"",auth:""},rules:{phone:{required:!0,message:"请输入手机",trigger:"blur"},password:{required:!0,message:"请输入登录密码",trigger:"blur"},auth:{required:!0,message:"请输入权限角色",trigger:"blur"}}});return(V,a)=>{const u=s("el-input"),r=s("el-form-item"),m=s("el-col"),n=s("el-option"),p=s("el-select"),_=s("el-row"),f=s("el-form");return i(),b("div",x,[e(f,{model:o.form,rules:o.rules,ref:"formRulesTwoRef",size:"default","label-width":"100px",class:"mt35"},{default:l(()=>[e(_,{gutter:35},{default:l(()=>[e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(r,{label:"手机",prop:"phone"},{default:l(()=>[e(u,{modelValue:o.form.phone,"onUpdate:modelValue":a[0]||(a[0]=t=>o.form.phone=t),placeholder:"请输入手机",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(r,{label:"性别"},{default:l(()=>[e(p,{modelValue:o.form.sex,"onUpdate:modelValue":a[1]||(a[1]=t=>o.form.sex=t),placeholder:"请选择性别",clearable:"",class:"w100"},{default:l(()=>[e(n,{label:"男",value:"1"}),e(n,{label:"女",value:"2"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(r,{label:"登录密码",prop:"password"},{default:l(()=>[e(u,{modelValue:o.form.password,"onUpdate:modelValue":a[2]||(a[2]=t=>o.form.password=t),placeholder:"请输入登录密码",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(r,{label:"权限角色",prop:"auth"},{default:l(()=>[e(u,{modelValue:o.form.auth,"onUpdate:modelValue":a[3]||(a[3]=t=>o.form.auth=t),placeholder:"请输入权限角色",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{v as default};
