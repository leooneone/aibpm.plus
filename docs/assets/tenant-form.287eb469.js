import{T as f}from"./Tenant.eb1966d4.js";import{t as U,a as D}from"./test.dc379863.js";import{e as N}from"./mitt.7f99bbc0.js";import{d as c,r as k,O as S,K as q,S as n,e as z,f as T,z as l,m as o,g as B,u as a,x as _,L as M}from"./vue.df334614.js";import"./http-client.ff22776c.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.08e609be.js";import"./js.cookie.cf83ad76.js";import"./toolsValidate.7cb139e2.js";const R={class:"dialog-footer"},E=_("取 消"),A=_("确 定"),I=c({name:"admin/tenant/form"}),X=c({...I,props:{title:{type:String,default:""}},setup(V,{expose:x}){const{proxy:b}=M(),p=k(),t=S({showDialog:!1,sureLoading:!1,form:{}}),{form:s}=q(t),w=async(i={})=>{if(i.id>0){const e=await new f().get({id:i.id},{loading:!0}).catch(()=>{b.$modal.closeLoading()});e!=null&&e.success&&(t.form=e.data)}else t.form={};t.showDialog=!0},h=()=>{t.showDialog=!1},y=()=>{p.value.validate(async i=>{if(!i)return;t.sureLoading=!0;let e={};t.form.id!=null&&t.form.id>0?e=await new f().update(t.form,{showSuccessMessage:!0}).catch(()=>{t.sureLoading=!1}):e=await new f().add(t.form,{showSuccessMessage:!0}).catch(()=>{t.sureLoading=!1}),t.sureLoading=!1,e!=null&&e.success&&(N.emit("refreshTenant"),t.showDialog=!1)})};return x({open:w}),(i,e)=>{const d=n("el-input"),u=n("el-form-item"),m=n("el-col"),v=n("el-row"),L=n("el-form"),g=n("el-button"),C=n("el-dialog");return z(),T("div",null,[l(C,{modelValue:t.showDialog,"onUpdate:modelValue":e[6]||(e[6]=r=>t.showDialog=r),"destroy-on-close":"",title:V.title,draggable:"",width:"769px"},{footer:o(()=>[B("span",R,[l(g,{onClick:h,size:"default"},{default:o(()=>[E]),_:1}),l(g,{type:"primary",onClick:y,size:"default",loading:t.sureLoading},{default:o(()=>[A]),_:1},8,["loading"])])]),default:o(()=>[l(L,{ref_key:"formRef",ref:p,model:a(s),size:"default","label-width":"80px"},{default:o(()=>[l(v,{gutter:35},{default:o(()=>[l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[l(u,{label:"企业名称",prop:"name",rules:[{required:!0,message:"请输入企业名称",trigger:["blur","change"]}]},{default:o(()=>[l(d,{modelValue:a(s).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(s).name=r),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[l(u,{label:"企业编码",prop:"code",rules:[{required:!0,message:"请输入企业编码",trigger:["blur","change"]}]},{default:o(()=>[l(d,{modelValue:a(s).code,"onUpdate:modelValue":e[1]||(e[1]=r=>a(s).code=r),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[l(u,{label:"姓名",prop:"realName",rules:[{required:!0,message:"请输入姓名",trigger:["blur","change"]}]},{default:o(()=>[l(d,{modelValue:a(s).realName,"onUpdate:modelValue":e[2]||(e[2]=r=>a(s).realName=r),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[l(u,{label:"手机号",prop:"phone",rules:[{required:!0,message:"请输入手机号",trigger:["blur","change"]},{validator:a(U),trigger:["blur","change"]}]},{default:o(()=>[l(d,{modelValue:a(s).phone,"onUpdate:modelValue":e[3]||(e[3]=r=>a(s).phone=r),autocomplete:"off",maxlength:"11"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[l(u,{label:"邮箱",prop:"email",rules:[{validator:a(D),trigger:["blur","change"]}]},{default:o(()=>[l(d,{modelValue:a(s).email,"onUpdate:modelValue":e[4]||(e[4]=r=>a(s).email=r),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[l(u,{label:"说明"},{default:o(()=>[l(d,{modelValue:a(s).description,"onUpdate:modelValue":e[5]||(e[5]=r=>a(s).description=r),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{X as default};
