import{_ as V}from"./_plugin-vue_export-helper.c27b6911.js";import{S as s,e as D,l as h,m as t,g as C,z as e,x as f}from"./vue.72f2672d.js";const u={required:!0,message:"请输入",trigger:"change"},y={required:!0,message:"请选择",trigger:"change"},k={name:[u],type:[u],neType:[y],relateNe:[u]},x={name:"saveEdit",props:{isVisible:Boolean||!1,detailData:Object||{}},data(){return{formData:{},actionDialogRules:k}},watch:{isVisible(r){r||this.$refs.dialogForm.resetFields()},detailData(r){if(this.isVisible)if(r.value){const l={};r.value.getAttributeNames().forEach(n=>{l[n]=r.value.getAttribute(n)}),this.formData=l}else this.formData={}}},methods:{dialogClose(){this.$emit("onDialogClose")},dialogConfirm(){this.$refs.dialogForm.validate(r=>{r&&(this.$message.success("保存成功"),this.$emit("onDialogConfirm",this.formData))})}}},v=f("BMW"),N={class:"dialog-footer"},B=f("取 消"),w=f("确 定");function T(r,l,n,U,o,d){const m=s("el-input"),i=s("el-form-item"),c=s("el-option"),_=s("el-select"),g=s("el-form"),p=s("el-button"),b=s("el-dialog");return D(),h(b,{title:"设备属性",class:"odialog","model-value":n.isVisible,"before-close":d.dialogClose,"close-on-click-modal":!1,width:"500px"},{footer:t(()=>[C("span",N,[e(p,{onClick:d.dialogClose,size:"small"},{default:t(()=>[B]),_:1},8,["onClick"]),e(p,{type:"primary",onClick:d.dialogConfirm,size:"small"},{default:t(()=>[w]),_:1},8,["onClick"])])]),default:t(()=>[e(g,{ref:"dialogForm",model:o.formData,"label-position":"right","label-width":"110px",rules:o.actionDialogRules},{default:t(()=>[e(i,{label:"设备名称",prop:"name"},{default:t(()=>[e(m,{modelValue:o.formData.name,"onUpdate:modelValue":l[0]||(l[0]=a=>o.formData.name=a),clearable:"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(i,{label:"模板类型",prop:"type"},{default:t(()=>[e(m,{modelValue:o.formData.type,"onUpdate:modelValue":l[1]||(l[1]=a=>o.formData.type=a),clearable:"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(i,{label:"显示参数",prop:"neType"},{default:t(()=>[e(_,{modelValue:o.formData.neType,"onUpdate:modelValue":l[2]||(l[2]=a=>o.formData.neType=a),style:{width:"100%"},placeholder:"请选择",clearable:"",filterable:""},{default:t(()=>[e(c,{value:"BMW",label:"BMW"},{default:t(()=>[v]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"关联网元名称",prop:"relateNe"},{default:t(()=>[e(m,{modelValue:o.formData.relateNe,"onUpdate:modelValue":l[3]||(l[3]=a=>o.formData.relateNe=a),clearable:"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(i,{label:"备注",prop:"remark"},{default:t(()=>[e(m,{modelValue:o.formData.remark,"onUpdate:modelValue":l[4]||(l[4]=a=>o.formData.remark=a),type:"textarea",rows:2,placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value","before-close"])}const R=V(x,[["render",T]]);export{R as default};
