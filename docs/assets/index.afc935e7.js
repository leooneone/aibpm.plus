import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";import{S as a,e as g,l as h,m as e,g as C,z as o,x as c}from"./vue.df334614.js";const V={name:[{required:!0,message:"请输入",trigger:"change"}]},b={name:"saveEdit",props:{isVisible:Boolean||!1},data(){return{formData:{},actionDialogRules:V}},watch:{isVisible(t){t||this.$refs.dialogForm.resetFields()}},methods:{dialogClose(){this.$emit("onDialogClose")},dialogConfirm(){this.$refs.dialogForm.validate(t=>{t&&this.$emit("onDialogConfirm",this.formData)})}}},D={class:"dialog-footer"},k=c("取 消"),x=c("确 定");function v(t,s,f,w,l,i){const n=a("el-input"),m=a("el-form-item"),_=a("el-form"),d=a("el-button"),u=a("el-dialog");return g(),h(u,{title:"保存拓扑",class:"odialog","model-value":f.isVisible,"before-close":i.dialogClose,"close-on-click-modal":!1,width:"420px"},{footer:e(()=>[C("span",D,[o(d,{onClick:i.dialogClose,size:"small"},{default:e(()=>[k]),_:1},8,["onClick"]),o(d,{type:"primary",onClick:i.dialogConfirm,size:"small"},{default:e(()=>[x]),_:1},8,["onClick"])])]),default:e(()=>[o(_,{ref:"dialogForm",model:l.formData,"label-position":"right","label-width":"80px",rules:l.actionDialogRules},{default:e(()=>[o(m,{label:"拓扑名称",prop:"name"},{default:e(()=>[o(n,{modelValue:l.formData.name,"onUpdate:modelValue":s[0]||(s[0]=r=>l.formData.name=r),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),o(m,{label:"备注",prop:"remark"},{default:e(()=>[o(n,{modelValue:l.formData.remark,"onUpdate:modelValue":s[1]||(s[1]=r=>l.formData.remark=r),type:"textarea",rows:2,placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value","before-close"])}const F=p(b,[["render",v]]);export{F as default};
