import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import{S as s,e as x,f as b,z as e,m as l,x as r}from"./vue.72f2672d.js";const v={components:{},props:["conf"],data(){return{formData:Object.assign(JSON.parse(JSON.stringify(this.conf)),{autoRepeat:!1,myAuditAutoPass:!1,approve:{remarkTip:"",remarkRequired:!1,notVisibleForSponsor:!1}}),rules:{autoRepeat:[{required:!0,message:"请选择选择分组",trigger:"change"}]},autoRepeatOptions:[{label:"启用自动去重",value:!0},{label:"不启用自动去重",value:!1}]}},created(){typeof this.conf=="object"&&this.conf},methods:{getSetting(){return new Promise((n,o)=>{this.$refs.elFormRef.validate(u=>{u?n(this.formData):o({msg:"",target:"advancedSetting"})})})},setSetting(n){Object.assign(this.formData,n)}},watch:{conf(n){Object.assign(this.formData,n)}}},V={class:"setting-container"},h=r(" 审批流程中审批人重复出现时，只需审批一次其余自动通过 "),D=r("审批人自动去重"),R=r("发起人审批时自动通过"),k=r(" 设置审批功能是否必填、评语可见范围、是否允许他们代提交 "),y=r("必填"),w=r("启用废话文学");function O(n,o,u,S,t,A){const m=s("el-checkbox"),i=s("el-form-item"),d=s("el-card"),_=s("el-col"),p=s("el-input"),f=s("el-row"),c=s("el-form");return x(),b("div",V,[e(c,{ref:"elFormRef",model:t.formData,rules:t.rules,size:"medium","label-width":"100px","label-position":"top"},{default:l(()=>[e(f,{gutter:15,class:"home-card-one mb15"},{default:l(()=>[e(_,{xs:24,sm:12,md:12,lg:12,xl:12},{default:l(()=>[e(d,null,{default:l(()=>[e(i,{label:"自动去重"},{default:l(()=>[h,e(m,{class:"button",modelValue:t.formData.autoRepeat,"onUpdate:modelValue":o[0]||(o[0]=a=>t.formData.autoRepeat=a)},{default:l(()=>[D]),_:1},8,["modelValue"]),e(m,{modelValue:t.formData.myAuditAutoPass,"onUpdate:modelValue":o[1]||(o[1]=a=>t.formData.myAuditAutoPass=a)},{default:l(()=>[R]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(_,{xs:24,sm:12,md:12,lg:12,xl:12},{default:l(()=>[e(d,null,{default:l(()=>[e(i,{label:"审批意见"},{default:l(()=>[k,e(m,{class:"button",modelValue:t.formData.approve.remarkRequired,"onUpdate:modelValue":o[2]||(o[2]=a=>t.formData.approve.remarkRequired=a)},{default:l(()=>[y]),_:1},8,["modelValue"]),e(p,{modelValue:t.formData.approve.RemarkTip,"onUpdate:modelValue":o[3]||(o[3]=a=>t.formData.approve.RemarkTip=a),placeholder:"请输入提示",maxlength:100,"show-word-limit":"",style:{width:"100%"}},null,8,["modelValue"]),e(m,{modelValue:t.formData.approve.uselessOpinion,"onUpdate:modelValue":o[4]||(o[4]=a=>t.formData.approve.uselessOpinion=a)},{default:l(()=>[w]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])}const q=g(v,[["render",O],["__scopeId","data-v-928408b4"]]);export{q as default};
