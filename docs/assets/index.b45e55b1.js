import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{S as t,e as p,l as u,m as s,z as a,g as h,x as l}from"./vue.72f2672d.js";const f={name:"importFile",emits:["onDialogClose","onDialogConfirm"],props:{isVisible:Boolean||!1},data(){return{}},methods:{onUploadChange(e){if(e.status!=="ready")if(e&&e.raw){const o=new FileReader;o.readAsText(e.raw),o.onload=()=>{this.$emit("onDialogConfirm",o.result)},this.dialogVisible=!1}else this.$message.error("文件解析失败")},handleClose(){this.$emit("onDialogClose")}}},g=l("导入"),x={class:"note"},C=l("(*当前"),b=l("画布将被合并"),v=l("，暂时只支持导入xml文件)");function w(e,o,i,y,V,n){const d=t("el-button"),_=t("el-upload"),c=t("el-link"),r=t("el-dialog");return p(),u(r,{title:"导入文件","model-value":i.isVisible,width:"400px","before-close":n.handleClose},{default:s(()=>[a(_,{action:"#",accept:".xml","show-file-list":!1,"on-change":n.onUploadChange,style:{display:"inline-block"}},{default:s(()=>[a(d,{class:"obutton ml10",size:"small",icon:"el-icon-download",plain:""},{default:s(()=>[g]),_:1})]),_:1},8,["on-change"]),h("div",x,[C,a(c,{type:"danger"},{default:s(()=>[b]),_:1}),v])]),_:1},8,["model-value","before-close"])}const D=m(f,[["render",w],["__scopeId","data-v-d4284319"]]);export{D as default};
