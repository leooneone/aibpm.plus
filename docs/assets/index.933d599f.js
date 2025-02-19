import{_ as g}from"./preload-helper.101896b7.js";import{d as D,a6 as b,r as O,O as U,w as B,S as m,e as n,f as V,z as o,m as l,F as E,B as F,u as p,l as d,t as q,x as L,L as N}from"./vue.72f2672d.js";import{_ as P}from"./_plugin-vue_export-helper.c27b6911.js";const j={class:"setting-container"},z=L(" 默认所有人"),A=D({name:"basice-setting"}),T=D({...A,props:{tabName:String,initiators:{},conf:{type:Object}},setup(y,{expose:v}){const c=y,w=b(()=>g(()=>import("./index.eb3154c3.js"),["assets/index.eb3154c3.js","assets/icon-select.ec973300.js","assets/getStyleSheets.5514b9fa.js","assets/index.41e0794f.js","assets/vue.72f2672d.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/icon-select.3edacd64.css"])),x=b(()=>g(()=>import("./index.972b8136.js"),["assets/index.972b8136.js","assets/user-select.3de4c006.js","assets/User.7b8f477f.js","assets/http-client.193f2c5b.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/vue.72f2672d.js","assets/index.41e0794f.js","assets/storage.6b2e7cd0.js","assets/org-menu.vue_vue_type_script_setup_true_lang.44f66112.js","assets/Org.a1ce8cb9.js","assets/tree.d5b28a07.js","assets/index.79e12c01.js","assets/index.1e09e151.js","assets/index.eead254e.js","assets/_Uint8Array.e4cf923d.js","assets/index.55c7ed79.js","assets/_initCloneObject.7b8933bc.js","assets/focus-trap.c8a23a9c.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/user-select.9baf66be.css","assets/org-select.vue_vue_type_script_setup_true_lang.940de93a.js","assets/role-select.vue_vue_type_script_setup_true_lang.2c88811a.js","assets/Role.ffc550a0.js","assets/index.c0eb9a2b.css"])),{proxy:k}=N(),{bpm_group:I}=k.$dict("bpm-group"),S={name:"",icon:"",groupId:void 0,remark:"",range:0,initiators:{}},f=O(),e=U({dialogVisible:!1,formData:Object.assign({},S,c.conf),rules:{name:[{required:!0,message:"请输入审批名称",trigger:"blur"}],range:[{required:!0,message:"请选择谁可以发起审批",trigger:"change"}],icon:[{required:!0,message:"请选择图标",trigger:"change"}],groupId:[{required:!0,message:"请选择选择分组",trigger:"change"}]}}),h=async()=>new Promise((r,t)=>{f.value.validate(i=>{i?r(e.formData):t({msg:"",target:"basicSetting"})})});return B(()=>c.conf,r=>{typeof r=="object"&&r!==null&&(e.formData=r,e.formData.icon=r.icon)}),v({getSetting:h}),(r,t)=>{const i=m("el-input"),s=m("el-form-item"),u=m("el-option"),_=m("el-select"),R=m("el-form");return n(),V("div",j,[o(R,{ref_key:"elFormRef",ref:f,model:e.formData,rules:e.rules,size:"medium","label-width":"100px","label-position":"top"},{default:l(()=>[o(s,{label:"流程名称",prop:"name"},{default:l(()=>[o(i,{modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.formData.name=a),placeholder:"请输入流程名称",clearable:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),o(s,{label:"选择分组",prop:"groupId"},{default:l(()=>[o(_,{modelValue:e.formData.groupId,"onUpdate:modelValue":t[1]||(t[1]=a=>e.formData.groupId=a),placeholder:"请选择选择分组",clearable:"",style:{width:"100%"}},{default:l(()=>[(n(!0),V(E,null,F(p(I),(a,C)=>(n(),d(u,{key:C,label:a.label,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"谁可以发起审批",prop:"range"},{default:l(()=>[o(_,{modelValue:e.formData.range,"onUpdate:modelValue":t[2]||(t[2]=a=>e.formData.range=a),style:{width:"100%"},placeholder:"请选择范围"},{default:l(()=>[(n(),d(u,{key:0,label:"所有人",value:0})),(n(),d(u,{key:1,label:"指定范围",value:1}))]),_:1},8,["modelValue"]),e.formData.range===1?(n(),d(p(x),{key:0,ref:"ouSelectRef",modelValue:e.formData.initiators,"onUpdate:modelValue":t[3]||(t[3]=a=>e.formData.initiators=a),tabs:["user","role","org"],multiple:""},{default:l(()=>[z]),_:1},8,["modelValue"])):q("",!0)]),_:1}),o(s,{label:"模板图标",prop:"icon"},{default:l(()=>[o(p(w),{modelValue:e.formData.icon,"onUpdate:modelValue":t[4]||(t[4]=a=>e.formData.icon=a),clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"审批说明",prop:"remark"},{default:l(()=>[o(i,{modelValue:e.formData.remark,"onUpdate:modelValue":t[5]||(t[5]=a=>e.formData.remark=a),type:"textarea",placeholder:"请输入审批说明",maxlength:100,"show-word-limit":"",autosize:{minRows:4,maxRows:4},style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])}}});const H=P(T,[["__scopeId","data-v-ea9cc60f"]]);export{H as default};
