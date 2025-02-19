import{d as k,r as L,O as M,S as a,e as r,f as c,z as l,m as t,F as h,B as V,u as E,g as S,x as q,p as G,v as H,l as n,t as w}from"./vue.72f2672d.js";import{aj as J}from"./index.0c380c40.js";import"./index.41e0794f.js";const U=[{label:"姓名",prop:"name",placeholder:"请输入姓名",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"邮箱",prop:"email",placeholder:"请输入用户邮箱",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"登陆时间",prop:"autograph",placeholder:"选择时间",clearable:!0,disabled:!1,required:!0,type:"date",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"职务",prop:"occupation",placeholder:"请选择职务",clearable:!0,disabled:!1,required:!0,type:"select",i18n:!1,i18nText:"",options:[{label:"计算机 / 互联网 / 通信",value:"1"},{label:"生产 / 工艺 / 制造",value:"2"},{label:"医疗 / 护理 / 制药",value:"3"}],isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"",prop:"",placeholder:"",clearable:!0,disabled:!1,required:!0,type:"",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24},{label:"备注",prop:"remarks",placeholder:"请输入",clearable:!0,disabled:!1,required:!0,type:"textarea",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24}],K={class:"dynamic-form-container layout-pd"},Q=S("span",{class:"ml10"},"年度",-1),W={class:"flex-margin"},X=q(" 重置表单 "),Y=q(" 验证表单 "),Z=k({name:"example/pagesDynamicForm"}),oe=k({...Z,setup(v){const y=L(),o=M({formData:U,form:{name:"",email:"",autograph:"",occupation:"",list:[{year:"",month:"",day:""}],remarks:""}}),R=()=>{o.form.list.push({year:"",month:"",day:""})},C=u=>{o.form.list.splice(u,1)},T=u=>{u&&u.validate(p=>{if(p)J.success("验证成功");else return!1})},$=u=>{u&&u.resetFields()};return(u,p)=>{const i=a("el-input"),z=a("el-date-picker"),D=a("el-option"),F=a("el-select"),_=a("el-form-item"),B=a("ele-Plus"),x=a("el-icon"),f=a("el-button"),N=a("ele-Delete"),b=a("el-col"),g=a("el-row"),O=a("el-form"),I=a("el-card"),P=a("ele-RefreshRight"),j=a("SvgIcon");return r(),c("div",K,[l(I,{shadow:"hover",header:"动态复杂表单"},{default:t(()=>[l(O,{model:o.form,ref_key:"formRulesOneRef",ref:y,size:"default","label-width":"100px",class:"mt35"},{default:t(()=>[l(g,{gutter:35},{default:t(()=>[(r(!0),c(h,null,V(E(U),(e,A)=>G((r(),n(b,{xs:e.xs,sm:e.sm,md:e.md,lg:e.md,xl:e.xl,class:"mb20",key:A},{default:t(()=>[e.type!==""?(r(),c(h,{key:0},[e.type!==""?(r(),n(_,{key:0,label:e.label,prop:e.prop,rules:[{required:e.required,message:`${e.label}不能为空`,trigger:e.type==="input"?"blur":"change"}]},{default:t(()=>[e.type==="input"?(r(),n(i,{key:0,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="date"?(r(),n(z,{key:1,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,type:"date",placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="select"?(r(),n(F,{key:2,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},{default:t(()=>[(r(!0),c(h,null,V(e.options,s=>(r(),n(D,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):w("",!0),e.type==="textarea"?(r(),n(i,{key:3,type:"textarea",modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):w("",!0)]),_:2},1032,["label","prop","rules"])):w("",!0)],64)):(r(!0),c(h,{key:1},V(o.form.list,(s,d)=>(r(),n(g,{gutter:35,key:d},{default:t(()=>[l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(_,{label:"年度",prop:`list[${d}].year`,rules:[{required:!0,message:"年度不能为空",trigger:"blur"}]},{label:t(()=>[d===0?(r(),n(f,{key:0,type:"primary",circle:"",size:"small",onClick:R},{default:t(()=>[l(x,null,{default:t(()=>[l(B)]),_:1})]),_:1})):(r(),n(f,{key:1,type:"danger",circle:"",size:"small",onClick:m=>C(d)},{default:t(()=>[l(x,null,{default:t(()=>[l(N)]),_:1})]),_:2},1032,["onClick"])),Q]),default:t(()=>[l(i,{modelValue:o.form.list[d].year,"onUpdate:modelValue":m=>o.form.list[d].year=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(_,{label:"月度",prop:`list[${d}].month`,rules:[{required:!0,message:"月度不能为空",trigger:"blur"}]},{default:t(()=>[l(i,{modelValue:o.form.list[d].month,"onUpdate:modelValue":m=>o.form.list[d].month=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(_,{label:"日度",prop:`list[${d}].day`,rules:[{required:!0,message:"日度不能为空",trigger:"blur"}]},{default:t(()=>[l(i,{modelValue:o.form.list[d].day,"onUpdate:modelValue":m=>o.form.list[d].day=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["xs","sm","md","lg","xl"])),[[H,e.isShow]])),128))]),_:1})]),_:1},8,["model"])]),_:1}),l(g,{class:"flex mt15"},{default:t(()=>[S("div",W,[l(f,{size:"default",onClick:p[0]||(p[0]=e=>$(y.value))},{default:t(()=>[l(x,null,{default:t(()=>[l(P)]),_:1}),X]),_:1}),l(f,{size:"default",type:"primary",onClick:p[1]||(p[1]=e=>T(y.value))},{default:t(()=>[l(j,{name:"iconfont icon-shuxing"}),Y]),_:1})])]),_:1})])}}});export{oe as default};
