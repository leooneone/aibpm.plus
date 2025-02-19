import{U as f,e as C}from"./index-aa73a18b.js";import{k as b,e as L,l as S,ah as z,m as n,o as B,c as N,p as l,y as t,a as R,G as V,u as d}from"./@vue-8306d5ee.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const T={class:"dialog-footer"},q=b({name:"admin/org/form"}),me=b({...q,props:{title:{type:String,default:""},orgTreeData:{type:Array,default:()=>[]}},setup(c,{expose:x}){const g=L(),o=S({showDialog:!1,sureLoading:!1,form:{enabled:!0}}),{form:a}=z(o),w=async(u={})=>{if(u.id>0){const e=await new f().get({id:u.id},{loading:!0});if(e!=null&&e.success){let s=e.data;s.parentId=s.parentId&&s.parentId>0?s.parentId:void 0,o.form=s}}else o.form={enabled:!0};o.showDialog=!0},y=()=>{o.showDialog=!1},v=()=>{g.value.validate(async u=>{if(!u)return;o.sureLoading=!0;let e={};o.form.parentId=o.form.parentId&&o.form.parentId>0?o.form.parentId:void 0,o.form.id!=null&&o.form.id>0?e=await new f().update(o.form,{showSuccessMessage:!0}).catch(()=>{o.sureLoading=!1}):e=await new f().add(o.form,{showSuccessMessage:!0}).catch(()=>{o.sureLoading=!1}),o.sureLoading=!1,e!=null&&e.success&&(C.emit("refreshOrg"),o.showDialog=!1)})};return x({open:w}),(u,e)=>{const s=n("el-tree-select"),m=n("el-form-item"),i=n("el-col"),p=n("el-input"),I=n("el-input-number"),k=n("el-switch"),D=n("el-row"),U=n("el-form"),_=n("el-button"),h=n("el-dialog");return B(),N("div",null,[l(h,{modelValue:o.showDialog,"onUpdate:modelValue":e[7]||(e[7]=r=>o.showDialog=r),"destroy-on-close":"",title:c.title,draggable:"","close-on-click-modal":!1,"close-on-press-escape":!1,width:"600px"},{footer:t(()=>[R("span",T,[l(_,{onClick:y,size:"default"},{default:t(()=>[V("取 消")]),_:1}),l(_,{type:"primary",onClick:v,size:"default",loading:o.sureLoading},{default:t(()=>[V("确 定")]),_:1},8,["loading"])])]),default:t(()=>[l(U,{model:d(a),ref_key:"formRef",ref:g,size:"default","label-width":"80px"},{default:t(()=>[l(D,{gutter:35},{default:t(()=>[l(i,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(m,{label:"上级部门",prop:"parentId",rules:[{required:!0,message:"请输入上级部门",trigger:["change"]}]},{default:t(()=>[l(s,{modelValue:d(a).parentId,"onUpdate:modelValue":e[0]||(e[0]=r=>d(a).parentId=r),data:c.orgTreeData,"node-key":"id",props:{label:"name"},"check-strictly":"","default-expand-all":"","render-after-expand":"","fit-input-width":"",clearable:"",class:"w100"},null,8,["modelValue","data"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(m,{label:"部门名称",prop:"name",rules:[{required:!0,message:"请输入部门名称",trigger:["blur","change"]}]},{default:t(()=>[l(p,{modelValue:d(a).name,"onUpdate:modelValue":e[1]||(e[1]=r=>d(a).name=r),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(m,{label:"部门编码",prop:"code"},{default:t(()=>[l(p,{modelValue:d(a).code,"onUpdate:modelValue":e[2]||(e[2]=r=>d(a).code=r),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(m,{label:"部门值",prop:"value"},{default:t(()=>[l(p,{modelValue:d(a).value,"onUpdate:modelValue":e[3]||(e[3]=r=>d(a).value=r),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(m,{label:"排序"},{default:t(()=>[l(I,{modelValue:d(a).sort,"onUpdate:modelValue":e[4]||(e[4]=r=>d(a).sort=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[l(m,{label:"启用"},{default:t(()=>[l(k,{modelValue:d(a).enabled,"onUpdate:modelValue":e[5]||(e[5]=r=>d(a).enabled=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[l(m,{label:"说明"},{default:t(()=>[l(p,{modelValue:d(a).description,"onUpdate:modelValue":e[6]||(e[6]=r=>d(a).description=r),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{me as default};
