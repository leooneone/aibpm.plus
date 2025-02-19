import{_ as R}from"./preload-helper.101896b7.js";import{O as f}from"./Org.a1ce8cb9.js";import{e as T}from"./mitt.7f99bbc0.js";import{d as x,a6 as E,r as M,O as F,K as P,S as r,e as _,f as V,z as l,m as t,g as q,u as a,F as K,B as $,x as w,L as j,l as G}from"./vue.72f2672d.js";import"./http-client.193f2c5b.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./index.41e0794f.js";import"./storage.6b2e7cd0.js";const H={class:"dialog-footer"},J=w("取 消"),Q=w("确 定"),W=x({name:"admin/org/form"}),ne=x({...W,props:{title:{type:String,default:""},orgTreeData:{type:Array,default:()=>[]}},setup(c,{expose:y}){const I=E(()=>R(()=>import("./my-select-user.3c599b20.js"),["assets/my-select-user.3c599b20.js","assets/preload-helper.101896b7.js","assets/vue.72f2672d.js"])),{proxy:v}=j(),{ou_type:D}=v.$dict("ou-type"),g=M(),d=F({showDialog:!1,sureLoading:!1,form:{enabled:!0}}),{form:n}=P(d),U=async(i={})=>{if(i.id>0){const e=await new f().get({id:i.id},{loading:!0});if(e!=null&&e.success){let m=e.data;m.parentId=m.parentId&&m.parentId>0?m.parentId:void 0,d.form=m}}else d.form={enabled:!0};d.showDialog=!0},k=()=>{d.showDialog=!1},C=()=>{g.value.validate(async i=>{if(!i)return;d.sureLoading=!0;let e={};d.form.parentId=d.form.parentId&&d.form.parentId>0?d.form.parentId:void 0,d.form.id!=null&&d.form.id>0?e=await new f().update(d.form,{showSuccessMessage:!0}):e=await new f().add(d.form,{showSuccessMessage:!0}),d.sureLoading=!1,e!=null&&e.success&&(T.emit("refreshOrg"),d.showDialog=!1)})};return y({open:U}),(i,e)=>{const m=r("el-tree-select"),s=r("el-form-item"),u=r("el-col"),p=r("el-input"),L=r("el-option"),S=r("el-select"),h=r("el-input-number"),B=r("el-switch"),O=r("el-row"),z=r("el-form"),b=r("el-button"),A=r("el-dialog");return _(),V("div",null,[l(A,{modelValue:d.showDialog,"onUpdate:modelValue":e[8]||(e[8]=o=>d.showDialog=o),"destroy-on-close":"",title:c.title,draggable:"",width:"600px"},{footer:t(()=>[q("span",H,[l(b,{onClick:k,size:"default"},{default:t(()=>[J]),_:1}),l(b,{type:"primary",onClick:C,size:"default",loading:d.sureLoading},{default:t(()=>[Q]),_:1},8,["loading"])])]),default:t(()=>[l(z,{model:a(n),ref_key:"formRef",ref:g,size:"default","label-width":"80px"},{default:t(()=>[l(O,{gutter:35},{default:t(()=>[l(u,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(s,{label:"上级组织"},{default:t(()=>[l(m,{modelValue:a(n).parentId,"onUpdate:modelValue":e[0]||(e[0]=o=>a(n).parentId=o),data:c.orgTreeData,"node-key":"id",props:{label:"name"},"check-strictly":"","default-expand-all":"","render-after-expand":"","fit-input-width":"",clearable:"",class:"w100"},null,8,["modelValue","data"])]),_:1})]),_:1}),l(u,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(s,{label:"组织名称",prop:"name",rules:[{required:!0,message:"请输入组织名称",trigger:["blur","change"]}]},{default:t(()=>[l(p,{modelValue:a(n).name,"onUpdate:modelValue":e[1]||(e[1]=o=>a(n).name=o),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(s,{label:"组织编码",prop:"code"},{default:t(()=>[l(p,{modelValue:a(n).code,"onUpdate:modelValue":e[2]||(e[2]=o=>a(n).code=o),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(s,{label:"组织类型",prop:"type"},{default:t(()=>[l(S,{modelValue:a(n).type,"onUpdate:modelValue":e[3]||(e[3]=o=>a(n).type=o),placeholder:"请选择组织类型",clearable:"",style:{width:"100%"}},{default:t(()=>[(_(!0),V(K,null,$(a(D),(o,N)=>(_(),G(L,{key:N,label:o.label,value:parseInt(o.value),disabled:o.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(u,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(s,{label:"主管",prop:"directorId"},{default:t(()=>[l(a(I),{modelValue:a(n).directorId,"onUpdate:modelValue":e[4]||(e[4]=o=>a(n).directorId=o),name:a(n).directorName,clearable:""},null,8,["modelValue","name"])]),_:1})]),_:1}),l(u,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(s,{label:"排序"},{default:t(()=>[l(h,{modelValue:a(n).sort,"onUpdate:modelValue":e[5]||(e[5]=o=>a(n).sort=o)},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(s,{label:"启用"},{default:t(()=>[l(B,{modelValue:a(n).enabled,"onUpdate:modelValue":e[6]||(e[6]=o=>a(n).enabled=o)},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(s,{label:"说明"},{default:t(()=>[l(p,{modelValue:a(n).description,"onUpdate:modelValue":e[7]||(e[7]=o=>a(n).description=o),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{ne as default};
