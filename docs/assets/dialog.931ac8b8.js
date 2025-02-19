import{d as V,r as $,O as E,S as s,e as r,f as x,z as e,m as l,g as h,x as F,y as O,F as P,B as A,l as p}from"./vue.72f2672d.js";const I={class:"system-dic-dialog-container"},L=h("span",{class:"ml10"},"字段",-1),Y={class:"dialog-footer"},j=F("取 消"),q=V({name:"example/systemDicDialog"}),J=V({...q,emits:["refresh"],setup(G,{expose:y,emit:D}){const w=$(),o=E({ruleForm:{dicName:"",fieldName:"",status:!0,list:[],describe:""},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),v=(u,t)=>{u==="edit"?(t.fieldName==="SYS_UERINFO"?t.list=[{id:Math.random(),label:"sex",value:"1"},{id:Math.random(),label:"sex",value:"0"}]:t.list=[{id:Math.random(),label:"role",value:"admin"},{id:Math.random(),label:"role",value:"common"},{id:Math.random(),label:"roleName",value:"超级管理员"},{id:Math.random(),label:"roleName",value:"普通用户"}],o.ruleForm=t,o.dialog.title="修改字典",o.dialog.submitTxt="修 改"):(o.dialog.title="新增字典",o.dialog.submitTxt="新 增"),o.dialog.isShowDialog=!0},f=()=>{o.dialog.isShowDialog=!1},N=()=>{f()},S=()=>{f(),D("refresh")},U=()=>{o.ruleForm.list.push({id:Math.random(),label:"",value:""})},C=u=>{o.ruleForm.list.splice(u,1)};return y({openDialog:v}),(u,t)=>{const k=s("el-alert"),i=s("el-input"),m=s("el-form-item"),d=s("el-col"),M=s("el-switch"),z=s("ele-Plus"),g=s("el-icon"),c=s("el-button"),B=s("ele-Delete"),b=s("el-row"),R=s("el-form"),T=s("el-dialog");return r(),x("div",I,[e(T,{title:o.dialog.title,modelValue:o.dialog.isShowDialog,"onUpdate:modelValue":t[4]||(t[4]=a=>o.dialog.isShowDialog=a),width:"769px"},{footer:l(()=>[h("span",Y,[e(c,{onClick:N,size:"default"},{default:l(()=>[j]),_:1}),e(c,{type:"primary",onClick:S,size:"default"},{default:l(()=>[F(O(o.dialog.submitTxt),1)]),_:1})])]),default:l(()=>[e(k,{title:"半成品，交互过于复杂，请自行扩展！",type:"warning",closable:!1,class:"mb20"}),e(R,{ref_key:"dicDialogFormRef",ref:w,model:o.ruleForm,size:"default","label-width":"90px"},{default:l(()=>[e(b,{gutter:35},{default:l(()=>[e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"字典名称"},{default:l(()=>[e(i,{modelValue:o.ruleForm.dicName,"onUpdate:modelValue":t[0]||(t[0]=a=>o.ruleForm.dicName=a),placeholder:"请输入字典名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"字段名"},{default:l(()=>[e(i,{modelValue:o.ruleForm.fieldName,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.fieldName=a),placeholder:"请输入字段名，拼接 ruleForm.list",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"字典状态"},{default:l(()=>[e(M,{modelValue:o.ruleForm.status,"onUpdate:modelValue":t[2]||(t[2]=a=>o.ruleForm.status=a),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[(r(!0),x(P,null,A(o.ruleForm.list,(a,n)=>(r(),p(b,{gutter:35,key:n},{default:l(()=>[e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{prop:`list[${n}].label`},{label:l(()=>[n===0?(r(),p(c,{key:0,type:"primary",circle:"",size:"small",onClick:U},{default:l(()=>[e(g,null,{default:l(()=>[e(z)]),_:1})]),_:1})):(r(),p(c,{key:1,type:"danger",circle:"",size:"small",onClick:_=>C(n)},{default:l(()=>[e(g,null,{default:l(()=>[e(B)]),_:1})]),_:2},1032,["onClick"])),L]),default:l(()=>[e(i,{modelValue:a.label,"onUpdate:modelValue":_=>a.label=_,style:{width:"100%"},placeholder:"请输入字段名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"属性",prop:`list[${n}].value`},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":_=>a.value=_,style:{width:"100%"},placeholder:"请输入属性值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"字典描述"},{default:l(()=>[e(i,{modelValue:o.ruleForm.describe,"onUpdate:modelValue":t[3]||(t[3]=a=>o.ruleForm.describe=a),type:"textarea",placeholder:"请输入字典描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{J as default};
