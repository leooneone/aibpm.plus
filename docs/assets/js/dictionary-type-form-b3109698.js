import{D as p}from"./DictionaryType-90385326.js";import{e as k}from"./index-c27e5712.js";import{k as _,h as U,e as S,l as T,ah as q,m,o as z,c as B,p as o,y as l,a as N,G as g,u as s}from"./@vue-8306d5ee.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-97a12f88.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const R={class:"dialog-footer"},M=_({name:"bpm/dictionaryType/typeForm"}),de=_({...M,props:{title:{type:String,default:""}},setup(V,{expose:w}){const{proxy:x}=U(),f=S(),t=T({showDialog:!1,sureLoading:!1,form:{}}),{form:a}=q(t),b=async(i={})=>{if(i.id>0){const e=await new p().get({id:i.id},{loading:!0}).catch(()=>{x.$modal.closeLoading()});e!=null&&e.success&&(t.form=e.data)}else t.form={};t.showDialog=!0},y=()=>{t.showDialog=!1},h=()=>{f.value.validate(async i=>{if(!i)return;t.sureLoading=!0;let e={};t.form.id!=null&&t.form.id>0?e=await new p().update(t.form,{showSuccessMessage:!0}).catch(()=>{t.sureLoading=!1}):e=await new p().add(t.form,{showSuccessMessage:!0}).catch(()=>{t.sureLoading=!1}),t.sureLoading=!1,e!=null&&e.success&&(k.emit("refreshDictType"),t.showDialog=!1)})};return w({open:b}),(i,e)=>{const u=m("el-input"),n=m("el-form-item"),d=m("el-col"),v=m("el-switch"),D=m("el-row"),C=m("el-form"),c=m("el-button"),L=m("el-dialog");return z(),B("div",null,[o(L,{modelValue:t.showDialog,"onUpdate:modelValue":e[5]||(e[5]=r=>t.showDialog=r),"destroy-on-close":"",title:V.title,draggable:"",width:"769px"},{footer:l(()=>[N("span",R,[o(c,{onClick:y,size:"default"},{default:l(()=>[g("取 消")]),_:1}),o(c,{type:"primary",onClick:h,size:"default",loading:t.sureLoading},{default:l(()=>[g("确 定")]),_:1},8,["loading"])])]),default:l(()=>[o(C,{ref_key:"formRef",ref:f,model:s(a),size:"default","label-width":"80px"},{default:l(()=>[o(D,{gutter:35},{default:l(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24},{default:l(()=>[o(n,{label:"名称",prop:"name",rules:[{required:!0,message:"请输入企业名称",trigger:["blur","change"]}]},{default:l(()=>[o(u,{modelValue:s(a).name,"onUpdate:modelValue":e[0]||(e[0]=r=>s(a).name=r),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:24,md:24,lg:24,xl:24},{default:l(()=>[o(n,{label:"编码",prop:"code",rules:[{required:!0,message:"请输入企业编码",trigger:["blur","change"]}]},{default:l(()=>[o(u,{modelValue:s(a).code,"onUpdate:modelValue":e[1]||(e[1]=r=>s(a).code=r),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:24,md:24,lg:24,xl:24},{default:l(()=>[o(n,{label:"值",prop:"value",rules:[{required:!0,message:"请输入值",trigger:["blur","change"]}]},{default:l(()=>[o(u,{modelValue:s(a).value,"onUpdate:modelValue":e[2]||(e[2]=r=>s(a).value=r),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:12,md:12,lg:12,xl:12},{default:l(()=>[o(n,{label:"启用"},{default:l(()=>[o(v,{modelValue:s(a).enabled,"onUpdate:modelValue":e[3]||(e[3]=r=>s(a).enabled=r)},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:24,md:24,lg:24,xl:24},{default:l(()=>[o(n,{label:"说明"},{default:l(()=>[o(u,{modelValue:s(a).description,"onUpdate:modelValue":e[4]||(e[4]=r=>s(a).description=r),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{de as default};
