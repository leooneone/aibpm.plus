import{_ as _sfc_main$1}from"./RenderPanel.vue_vue_type_script_setup_true_name_render-panel_lang.f444906d.js";import{g as getFormConf}from"./db.bf0a0f00.js";import{_ as _export_sfc}from"./_plugin-vue_export-helper.c27b6911.js";import{S as resolveComponent,e as openBlock,l as createBlock,m as withCtx,z as createVNode}from"./vue.df334614.js";import"./preload-helper.101896b7.js";const trigger={"el-input":"blur","el-input-number":"blur","el-select":"change","el-radio-group":"change","el-slider":"change","el-color-picker":"change","el-upload":"change","el-checkbox-group":"change","el-cascader":"change","el-time-picker":"change","el-date-picker":"change","el-rate":"change","fc-amount":"change","fc-time-duration":"change","fc-date-duration":"change","ai-ou-select":"input"},formConfInDB=getFormConf(),_sfc_main={components:{RenderPanel:_sfc_main$1},props:["conf","loading"],data(){return{formConf:{tableRefs:{},model:JSON.parse(JSON.stringify(this.conf.model))},formRules:{},labelWidth:100,drawerVisible:!1}},watch:{},created(){typeof this.conf=="object"&&this.conf!==null?Object.assign(this.formConf,this.conf):formConfInDB&&(this.formConf=formConfInDB),this.formConf.mode="parser",this.getFields(this.formConf.data),this.$nextTick(r=>{})},computed:{bpm(){return{processConditions:[]}}},methods:{getFields(r){Array.isArray(r)&&r.forEach(e=>(e.children&&this.getFields(e.children),e.vModel&&(this.formRules[e.vModel]=this.buildRules(e)),e))},checkTableData(){let r=!0;return Object.keys(this.formConf.tableRefs).forEach(e=>{const i=this.formConf.tableRefs[e].submit();i?this.formConf.model[e]=i:r=!1}),r},submitForm(r){let e=this.$refs.myForm;if(!e)return;const o=this.checkTableData();e.validate(i=>{if(i){if(!o)return!1;r&&r(this.formConf.model)}else return this.$message.error("验证失败"),!1})},setOUSelectRule(r){return{validator:(e,o,i)=>{var t=o;if(Object.keys(t||{}).length===0){i();return}var n=0;r.tabs.forEach(s=>{t&&Array.isArray(t[s])&&(n+=t[s].length)}),i(n?void 0:new Error(`${r.title}不能为空`))},trigger:trigger[r.tag],type:"object",required:!0}},buildRules(item){if(item.vModel===void 0||!trigger[item.tag])return;const rules=[];if(item.disabled&&(item.required=!1),item.required){const r=Array.isArray(item.defaultValue)?"array":void 0;let e=Array.isArray(item.defaultValue)?"请至少选择一个":item.placeholder;if(e===void 0&&(e=`${item.label}不能为空`),item.tag==="ai-ou-select")rules.push(this.setOUSelectRule(item));else{let o={required:!0,message:e,trigger:trigger[item.tag]};r&&(o.type=r),rules.push(o)}}return item.regList&&Array.isArray(item.regList)&&item.regList.forEach(item=>{item.pattern&&rules.push({pattern:eval(item.pattern),message:item.message,trigger:trigger[item.tag]})}),rules}}};function _sfc_render(r,e,o,i,t,n){const s=resolveComponent("render-panel"),l=resolveComponent("el-form");return openBlock(),createBlock(l,{model:t.formConf.model,ref:"myForm",size:t.formConf.size,"label-position":t.formConf.labelPosition,disabled:o.loading||t.formConf.disabled,"label-width":t.formConf.labelWidth+"px",gutter:t.formConf.gutter,rules:t.formRules},{default:withCtx(()=>[createVNode(s,{list:o.conf.data,animation:200,group:"componentsGroup",tag:"el-row",conf:t.formConf,style:{marginLeft:0,alignContent:"start",height:"100%"},gutter:o.conf.gutter},null,8,["list","conf","gutter"])]),_:1},8,["model","size","label-position","disabled","label-width","gutter","rules"])}const FormParser=_export_sfc(_sfc_main,[["render",_sfc_render]]);export{FormParser as default};
