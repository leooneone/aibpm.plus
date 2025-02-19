import L from"./index.e0ad165c.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";import{S as m,e as t,l as d,m as a,g as p,z as i,f as n,B as y,F as g,x as u,y as f,t as T,ab as S,ac as w}from"./vue.df334614.js";import"./user-select.0622e36c.js";import"./User.4679a863.js";import"./http-client.ff22776c.js";import"./index.de963593.js";import"./index.390778f0.js";import"./index.4621962e.js";import"./storage.08e609be.js";import"./js.cookie.cf83ad76.js";import"./org-menu.vue_vue_type_script_setup_true_lang.2abc46e4.js";import"./Org.95a10495.js";import"./tree.d5b28a07.js";import"./index.6c5a2d2c.js";import"./index.7cba2d6b.js";import"./index.f4a20413.js";import"./_Uint8Array.2a02cf9e.js";import"./index.e64efb6f.js";import"./_initCloneObject.115dee92.js";import"./focus-trap.ccecd842.js";import"./org-select.vue_vue_type_script_setup_true_lang.c26e97f7.js";import"./role-select.vue_vue_type_script_setup_true_lang.d0b8f7bd.js";import"./Role.14cde0b3.js";const F={participants:{user:[],role:[],org:[]},ouType:"0",level:0,isDirectorIn:!1,assigneeType:"user",formOperates:[],SignType:"string",optionalMultiUser:!1,optionalRange:"ALL"},U={props:{fields:{type:Array,default(){return[]}},data:{type:Object,default:()=>{}}},components:{OuSelect:L},data(){return{approverForm:JSON.parse(JSON.stringify(F)),orgCollection:{org:[],role:[],user:[]},type:"approver",ouTypeList:[],ouTypeLabels:{},fcOrgTabList:["org","role","user"],visible:!1,globalFormOperate:null,rangeOptions:[{label:"所有人",value:"all"},{label:"指定范围",value:"range"}],assigneeTypeOptions:[{label:"指定成员",value:"user"},{label:"发起人自己",value:"myself"},{label:"表单内的联系人",value:"form"},{label:"组织负责人",value:"director"},{label:"上级主管",value:"supervisor"},{label:"指定角色",value:"role"},{label:"发起人自选",value:"optional"}]}},computed:{contactors(){return window.leo=this.fields,this.fields.filter(l=>l.tag==="ai-ou-select")},approveNode(){let l=Object.assign({},F);return Object.assign(l,this.data),(l===void 0||l.assigneeType===void 0||l.participants===void 0)&&(l=JSON.parse(JSON.stringify(F))),this.approverForm=l,l}},mounted(){var l=this.$dict("ou-type");this.ouTypeList=l.ou_type,this.ouTypeLabels=l.dic_ou_type},methods:{resetOrgColl(){for(let l in this.approverForm.participants)this.approverForm.participants[l]=[]},onConfirm(){return this.approverForm},getAssignTypeLabel(){const l=this.assigneeTypeOptions.find(r=>r.value===this.approverForm.assigneeType);return l?l.label:""},getFormOperates(){return[]}}},v=l=>(S("data-v-73a255a4"),l=l(),w(),l),A={class:"my-row"},C={class:"my-row-title"},I={class:"my-row-detail"},z={key:0,class:"option-box",style:{color:"#a5a5a5"}},B={key:1,class:"option-box"},D=v(()=>p("p",null,"使用表单中的联系人作为审批人",-1)),J={key:2,class:"option-box"},R=v(()=>p("p",null,"选择范围",-1)),j={key:3},M={style:{"font-size":"14px","padding-left":"1rem"}},P=u(" 内，发起人 "),E=u(" 审批 "),q=v(()=>p("br",null,null,-1)),G={key:4},H={style:{"font-size":"14px","padding-left":"1rem"}},K=u(" 发起人所属 "),Q=u("负责人 "),W=v(()=>p("div",{style:{"border-bottom":"1px solid #e5e5e5","padding-bottom":"1rem"}},null,-1)),X={key:0,class:"option-box",style:{"border-bottom":"1px solid #e5e5e5"}},Y=v(()=>p("p",null,"多人审批时采用的审批方式",-1)),Z=u("串签（逐个审批，须所有审批人同意）"),$=v(()=>p("br",null,null,-1)),ee=u("会签（须所有审批人同意）"),oe=v(()=>p("br",null,null,-1)),le=u("或签（一名审批人同意或拒绝即可）");function re(l,r,te,se,o,s){const b=m("el-radio"),h=m("el-radio-group"),_=m("el-option"),c=m("el-select"),O=m("ou-select"),N=m("el-switch"),k=m("el-main");return t(),d(k,null,{default:a(()=>[p("div",A,[p("div",null,[p("div",C,[i(h,{modelValue:o.approverForm.assigneeType,"onUpdate:modelValue":r[0]||(r[0]=e=>o.approverForm.assigneeType=e),style:{"line-height":"32px"},onChange:s.resetOrgColl},{default:a(()=>[(t(!0),n(g,null,y(o.assigneeTypeOptions,e=>(t(),d(b,{label:e.value,key:e.value,class:"radio-item"},{default:a(()=>[u(f(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])]),p("div",I,[s.approveNode.assigneeType==="myself"?(t(),n("div",z,"发起人自己将作为审批人处理审批单")):s.approveNode.assigneeType==="form"?(t(),n("div",B,[D,i(c,{modelValue:o.approverForm.fieldId,"onUpdate:modelValue":r[1]||(r[1]=e=>o.approverForm.fieldId=e),size:"mini"},{default:a(()=>[(t(!0),n(g,null,y(s.contactors,(e,V)=>(t(),d(_,{key:V,label:e.label,value:e.vModel,disabled:e.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])])):s.approveNode.assigneeType==="optional"?(t(),n("div",J,[R,i(c,{modelValue:o.approverForm.optionalRange,"onUpdate:modelValue":r[2]||(r[2]=e=>o.approverForm.optionalRange=e),size:"mini"},{default:a(()=>[(t(!0),n(g,null,y(o.rangeOptions,(e,V)=>(t(),d(_,{key:V,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"]),["range"].includes(s.approveNode.optionalRange)?(t(),d(O,{key:0,title:s.getAssignTypeLabel(),ref:"approver-org",modelValue:o.approverForm.participants,"onUpdate:modelValue":r[3]||(r[3]=e=>o.approverForm.participants=e),tabs:["user","role","org"],multiple:""},{default:a(()=>[u(f(s.getAssignTypeLabel()),1)]),_:1},8,["title","modelValue"])):T("",!0)])):s.approveNode.assigneeType==="supervisor"?(t(),n("div",j,[p("div",M,[i(c,{modelValue:o.approverForm.ouType,"onUpdate:modelValue":r[4]||(r[4]=e=>o.approverForm.ouType=e),size:"small"},{default:a(()=>[(t(!0),n(g,null,y(o.ouTypeList,e=>(t(),d(_,{key:e.value,label:`${e.label}`,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),P,i(c,{modelValue:o.approverForm.level,"onUpdate:modelValue":r[5]||(r[5]=e=>o.approverForm.level=e),size:"small"},{default:a(()=>[(t(),d(_,{key:0,label:"主管逐级",value:0})),(t(),d(_,{key:0,label:"直接主管",value:1}))]),_:1},8,["modelValue"]),E,q,u(" 包含所在"+f(o.ouTypeLabels[o.approverForm.ouType])+"负责人 ",1),i(N,{modelValue:o.approverForm.isDirectorIn,"onUpdate:modelValue":r[6]||(r[6]=e=>o.approverForm.isDirectorIn=e),style:{"margin-top":"1rem"}},null,8,["modelValue"])])])):s.approveNode.assigneeType==="director"?(t(),n("div",G,[p("div",H,[K,i(c,{modelValue:o.approverForm.ouType,"onUpdate:modelValue":r[7]||(r[7]=e=>o.approverForm.ouType=e),size:"small"},{default:a(()=>[(t(!0),n(g,null,y(o.ouTypeList,e=>(t(),d(_,{key:e.value,label:`${e.label}`,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Q])])):T("",!0),["user","role"].includes(s.approveNode.assigneeType)?(t(),d(O,{key:5,title:s.getAssignTypeLabel(),ref:"approver-org",modelValue:o.approverForm.participants,"onUpdate:modelValue":r[8]||(r[8]=e=>o.approverForm.participants=e),tabs:o.fcOrgTabList.includes(s.approveNode.assigneeType)?[s.approveNode.assigneeType]:["org"],multiple:""},{default:a(()=>[u(f(s.getAssignTypeLabel()),1)]),_:1},8,["title","modelValue","tabs"])):T("",!0)]),W,s.approveNode.participants[s.approveNode.assigneeType]?(t(),n("div",X,[Y,i(h,{modelValue:o.approverForm.SignType,"onUpdate:modelValue":r[9]||(r[9]=e=>o.approverForm.SignType=e),class:"ml-4"},{default:a(()=>[i(b,{label:"string",class:"radio-item radio-item-row"},{default:a(()=>[Z]),_:1}),$,i(b,{label:"counterAnd",class:"radio-item radio-item-row"},{default:a(()=>[ee]),_:1}),oe,i(b,{label:"counterOr",class:"radio-item radio-item-row"},{default:a(()=>[le]),_:1})]),_:1},8,["modelValue"])])):T("",!0)])])]),_:1})}const we=x(U,[["render",re],["__scopeId","data-v-73a255a4"]]);export{we as default};
