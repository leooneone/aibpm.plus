import{_ as R}from"./ai-form-3baf0d65.js";import{P as V}from"./Permission-0387a68f.js";import{V as K}from"./View-add566c5.js";import{e as N,P as z,_ as B}from"./index-1c0db287.js";import{k as v,h as E,e as F,l as O,ah as $,m as u,o as q,c as W,p as e,y as o,a as _,G as w,u as t,v as y,R as G}from"./@vue-8306d5ee.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const j={class:"my-flex my-flex-between"},H=["title"],J={class:"dialog-footer"},Q=v({name:"admin/permission/permission-menu-form"}),X=v({...Q,props:{title:{type:String,default:""},permissionTreeData:{type:Array,default:()=>[]}},setup(c,{expose:I}){const U=G(()=>R(()=>import("./index-6f6637f0.js"),["assets/js/index-6f6637f0.js","assets/js/getStyleSheets-a93480e6.js","assets/js/@element-plus-8ef115d9.js","assets/js/@vue-8306d5ee.js","assets/js/index-1c0db287.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/index-0e23bf1c.css"])),{proxy:g}=E(),x=F(),n=O({showDialog:!1,sureLoading:!1,form:{enabled:!0,isKeepAlive:!0},viewTreeData:[]}),{form:d}=$(n),D=async()=>{const s=await new K().getList();s!=null&&s.success&&s.data&&s.data.length>0?n.viewTreeData=z(s.data):n.viewTreeData=[]},h=async(s={})=>{if(g.$modal.loading(),await D(),s.id>0){const l=await new V().getMenu({id:s.id}).catch(()=>{g.$modal.closeLoading()});if(l!=null&&l.success){let i=l.data;i.parentId=i.parentId&&i.parentId>0?i.parentId:void 0,n.form=i}}else n.form={enabled:!0,isKeepAlive:!0,icon:"ele-Memo"};g.$modal.closeLoading(),n.showDialog=!0},k=(s,l)=>{var i,m;return s?((i=l.label)==null?void 0:i.indexOf(s))!==-1||((m=l.path)==null?void 0:m.indexOf(s))!==-1:!0},C=s=>{s&&(n.form.label||(n.form.label=s.label),n.form.path||(n.form.path="/"+s.path))},A=()=>{n.showDialog=!1},L=()=>{x.value.validate(async s=>{if(!s)return;n.sureLoading=!0;let l={};n.form.parentId=n.form.parentId&&n.form.parentId>0?n.form.parentId:void 0,n.form.id!=null&&n.form.id>0?l=await new V().updateMenu(n.form,{showSuccessMessage:!0}).catch(()=>{n.sureLoading=!1}):l=await new V().addMenu(n.form,{showSuccessMessage:!0}).catch(()=>{n.sureLoading=!1}),n.sureLoading=!1,l!=null&&l.success&&(N.emit("refreshPermission"),n.showDialog=!1)})};return I({open:h}),(s,l)=>{const i=u("el-tree-select"),m=u("el-form-item"),r=u("el-col"),f=u("el-input"),T=u("el-input-number"),p=u("el-switch"),M=u("el-row"),P=u("el-form"),b=u("el-button"),S=u("el-dialog");return q(),W("div",null,[e(S,{modelValue:n.showDialog,"onUpdate:modelValue":l[15]||(l[15]=a=>n.showDialog=a),"destroy-on-close":"",title:c.title,draggable:"","close-on-click-modal":!1,"close-on-press-escape":!1,width:"600px"},{footer:o(()=>[_("span",J,[e(b,{onClick:A,size:"default"},{default:o(()=>[w("取 消")]),_:1}),e(b,{type:"primary",onClick:L,size:"default",loading:n.sureLoading},{default:o(()=>[w("确 定")]),_:1},8,["loading"])])]),default:o(()=>[e(P,{model:t(d),ref_key:"formRef",ref:x,size:"default","label-width":"80px"},{default:o(()=>[e(M,{gutter:35},{default:o(()=>[e(r,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(m,{label:"上级分组"},{default:o(()=>[e(i,{modelValue:t(d).parentId,"onUpdate:modelValue":l[0]||(l[0]=a=>t(d).parentId=a),data:c.permissionTreeData,"node-key":"id","check-strictly":"","default-expand-all":"","render-after-expand":"","fit-input-width":"",clearable:"",class:"w100"},null,8,["modelValue","data"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(m,{label:"视图"},{default:o(()=>[e(i,{modelValue:t(d).viewId,"onUpdate:modelValue":l[1]||(l[1]=a=>t(d).viewId=a),data:n.viewTreeData,"node-key":"id",props:{label:"path"},"default-expand-all":"","render-after-expand":"","fit-input-width":"",clearable:"",filterable:"","filter-node-method":k,class:"w100",onCurrentChange:C},{default:o(({data:a})=>[_("span",j,[_("span",null,y(a.label),1),_("span",{class:"my-line-1 my-ml-12",title:a.path},y(a.path),9,H)])]),_:1},8,["modelValue","data"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(m,{label:"名称",prop:"label",rules:[{required:!0,message:"请输入名称",trigger:["blur","change"]}]},{default:o(()=>[e(f,{modelValue:t(d).label,"onUpdate:modelValue":l[2]||(l[2]=a=>t(d).label=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(m,{label:"路由地址",prop:"path",rules:[{required:!0,message:"请输入路由地址",trigger:["blur","change"]}]},{default:o(()=>[e(f,{modelValue:t(d).path,"onUpdate:modelValue":l[3]||(l[3]=a=>t(d).path=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(m,{label:"路由命名"},{default:o(()=>[e(f,{modelValue:t(d).name,"onUpdate:modelValue":l[4]||(l[4]=a=>t(d).name=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(m,{label:"图标",prop:"icon"},{default:o(()=>[e(t(U),{modelValue:t(d).icon,"onUpdate:modelValue":l[5]||(l[5]=a=>t(d).icon=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"排序"},{default:o(()=>[e(T,{modelValue:t(d).sort,"onUpdate:modelValue":l[6]||(l[6]=a=>t(d).sort=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"启用"},{default:o(()=>[e(p,{modelValue:t(d).enabled,"onUpdate:modelValue":l[7]||(l[7]=a=>t(d).enabled=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:24,md:24,lg:24,xl:24},{default:o(()=>[e(m,{label:"链接地址"},{default:o(()=>[e(f,{modelValue:t(d).link,"onUpdate:modelValue":l[8]||(l[8]=a=>t(d).link=a),clearable:"",placeholder:"内嵌/外链链接地址"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"内嵌窗口"},{default:o(()=>[e(p,{modelValue:t(d).isIframe,"onUpdate:modelValue":l[9]||(l[9]=a=>t(d).isIframe=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"缓存"},{default:o(()=>[e(p,{modelValue:t(d).isKeepAlive,"onUpdate:modelValue":l[10]||(l[10]=a=>t(d).isKeepAlive=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"固定"},{default:o(()=>[e(p,{modelValue:t(d).isAffix,"onUpdate:modelValue":l[11]||(l[11]=a=>t(d).isAffix=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"隐藏"},{default:o(()=>[e(p,{modelValue:t(d).hidden,"onUpdate:modelValue":l[12]||(l[12]=a=>t(d).hidden=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"新窗口"},{default:o(()=>[e(p,{modelValue:t(d).newWindow,"onUpdate:modelValue":l[13]||(l[13]=a=>t(d).newWindow=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{xs:24,sm:12,md:12,lg:12,xl:12},{default:o(()=>[e(m,{label:"链接外显"},{default:o(()=>[e(p,{modelValue:t(d).external,"onUpdate:modelValue":l[14]||(l[14]=a=>t(d).external=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});const he=B(X,[["__scopeId","data-v-10829b94"]]);export{he as default};
