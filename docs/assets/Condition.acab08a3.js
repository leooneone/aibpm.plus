import"./js.cookie.cf83ad76.js";import{S as p,e as a,f as d,z as c,l as s,m as i,t as W,F as m,B as b,p as N,v as G,x as g,y as Y}from"./vue.df334614.js";import{_ as M}from"./_plugin-vue_export-helper.c27b6911.js";const R={name:"MySearchFilter",props:{fields:{type:Array,default(){return[]}},data:{type:Object,default(){return{isDefault:!0}}}},data(){const l={equal:{label:"等于",value:"Equal"},notEqual:{label:"不等于",value:"NotEqual"},contains:{label:"包含",value:"Contains"},notContains:{label:"不包含",value:"NotContains"},startsWith:{label:"开始以",value:"StartsWith"},notStartsWith:{label:"开始不是以",value:"NotStartsWith"},endsWith:{label:"结束以",value:"EndsWith"},notEndsWith:{label:"结束不是以",value:"NotEndsWith"},lessThan:{label:"小于",value:"LessThan"},lessThanOrEqual:{label:"小于等于",value:"LessThanOrEqual"},greaterThan:{label:"大于",value:"GreaterThan"},greaterThanOrEqual:{label:"大于等于",value:"GreaterThanOrEqual"},dateRange:{label:"时间段",value:"dateRange"},any:{label:"在列表",value:"Any"},notAny:{label:"不在列表",value:"NotAny"}},t={default:[l.equal],string:[l.equal,l.notEqual,l.contains,l.notContains,l.startsWith,l.notStartsWith,l.endsWith,l.notEndsWith],date:[l.equal,l.notEqual,l.lessThan,l.lessThanOrEqual,l.greaterThan,l.greaterThanOrEqual,l.dateRange],number:[l.equal,l.notEqual,l.lessThan,l.lessThanOrEqual,l.greaterThan,l.greaterThanOrEqual],bool:[l.equal]};let n={field:"",label:""};if(this.fields&&this.fields.length>0){const f=this.fields.find(r=>r.default===!0);f?n=f:n=this.fields[0]}return{loading:!1,key:1,dataTree:{},defaultProps:{label:"",children:"filters"},operatorGroups:t,firstField:n,datePickerOptions:{disabledDate(f){return f.getTime()>Date.now()}}}},computed:{},watch:{data:{handler(l){this.dataTree=l.root===void 0?{root:!0,logic:"And",filters:[]}:l},deep:!0,immediate:!0}},mounted(){},methods:{onConfirm(){if(this.data.isDefault||!this.dataTree.filters||this.dataTree.filters.length==0)return{isDefault:!0};var l={...this.dataTree,isDefault:this.data.isDefault};return l},getOperators(l){const t=this.operatorGroups[l||""];return t&&t.length>0?t:this.operatorGroups.default},onChangeField(l,t){if(this.fields===void 0)return;const n=this.fields.find(u=>u.vModel===l);t.value="",t.label=n.label,t.tag=n.tag,t.type=n.dataType?n.dataType:"",t.options=n.options;const f=this.getOperators(t.type);let r="";if(n.operator&&(r=f.findIndex(h=>h.value===n.operator)>=0?n.operator:""),r||(r=f[0].value),t.operator=r,t.config={...n.config},t.type==="date"){let u="date";t.operator==="dateRange"&&(u=u+"range"),t.config.type=t.config.type?t.config.type:u,t.config.type.indexOf("range")>=0&&(t.operator="dateRange"),t.config.format=t.config.format?t.config.format:"YYYY-MM-DD",t.config.valueFormat=t.config.valueFormat?t.config.valueFormat:"YYYY-MM-DD",t.config.defaultTime=t.config.defaultTime?t.config.defaultTime:["00:00:00","00:00:00"]}},onChangeOperator(l,t){t.type==="date"&&(this.key++,l==="dateRange"?(t.value="",t.config.type=t.config.type+"range"):t.config.type.indexOf("range")>=0&&(t.value="",t.config.type=t.config.type.replace(/range$/,"")))},onAddGroup(l){const t={logic:"And"};l.filters||(l.filters=[]),l.filters.push(t)},onAddCondition(l){const t=this.getOperators(l.type)[0],n={field:this.firstField.field,label:this.firstField.label,operator:t.value,config:{...this.firstField.config},value:this.firstField.value};l.filters||(l.filters=[]);const f=l.filters.findIndex(r=>r.logic&&!r.field);f>=0?l.filters.splice(f,0,n):l.filters.push(n)},onDelete(l,t){const n=l.parent,f=n.data.filters||n.data,r=f.findIndex(u=>u===t);f.splice(r,1)},reset(){this.dataTree.filters=[]},getDynamicFilter(){return _.cloneDeep(this.dataTree)},type(l){return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(l)]}}},I={key:0},B=g("并且"),P=g("或者"),L=g("分组"),z=g("条件");function H(l,t,n,f,r,u){const h=p("el-switch"),F=p("el-empty"),V=p("el-radio"),C=p("el-radio-group"),O=p("el-button"),U=p("ele-Delete"),D=p("el-icon"),k=p("el-option"),T=p("el-select"),y=p("el-col"),j=p("ai-ou-select"),E=p("el-input-number"),q=p("el-date-picker"),w=p("el-input"),A=p("el-row"),S=p("el-tree");return a(),d("section",null,[c(h,{modelValue:n.data.isDefault,"onUpdate:modelValue":t[0]||(t[0]=v=>n.data.isDefault=v),"active-text":"默认/其他条件","inactive-text":"指定条件"},null,8,["modelValue"]),n.data.isDefault?(a(),s(F,{key:0,description:"无需配置条件"})):(a(),s(S,{key:1,data:[r.dataTree],props:r.defaultProps,"expand-on-click-node":!1,"default-expand-all":!0,indent:16,class:"my-search-filter"},{default:i(({node:v,data:e})=>[e.logic&&!e.field?(a(),d("span",I,[c(C,{modelValue:e.logic,"onUpdate:modelValue":o=>e.logic=o},{default:i(()=>[c(V,{label:"And"},{default:i(()=>[B]),_:1}),c(V,{label:"Or"},{default:i(()=>[P]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"]),c(O,{type:"text",icon:"el-icon-plus",onClick:o=>u.onAddGroup(e)},{default:i(()=>[L]),_:2},1032,["onClick"]),c(O,{type:"text",icon:"el-icon-plus",onClick:o=>u.onAddCondition(e)},{default:i(()=>[z]),_:2},1032,["onClick"]),e.root?W("",!0):(a(),s(D,{key:0,onClick:o=>u.onDelete(v,e),style:{"margin-left":"8px"}},{default:i(()=>[c(U)]),_:2},1032,["onClick"]))])):(a(),s(A,{key:1,gutter:5},{default:i(()=>[c(y,{span:8},{default:i(()=>[c(T,{modelValue:e.field,"onUpdate:modelValue":o=>e.field=o,loading:r.loading,filterable:"",onChange:o=>u.onChangeField(o,e)},{default:i(()=>[(a(!0),d(m,null,b(n.fields.filter(o=>o.proCondition),(o,x)=>(a(),s(k,{key:x,label:o.label,value:o.vModel},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","loading","onChange"])]),_:2},1024),N(c(y,{span:4},{default:i(()=>[c(T,{modelValue:e.operator,"onUpdate:modelValue":o=>e.operator=o,onChange:o=>u.onChangeOperator(o,e)},{default:i(()=>[(a(!0),d(m,null,b(u.getOperators(e.type),(o,x)=>(a(),s(k,{key:x,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1536),[[G,u.getOperators(e.type).length>1]]),c(y,{span:11},{default:i(()=>[e.tag==="ai-ou-select"?(a(),s(j,{key:0,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,tabList:["user"]},null,8,["modelValue","onUpdate:modelValue"])):e.tag==="fc-amount"||e.tag==="el-input-number"?(a(),s(E,{key:1,style:{"margin-left":"5px"},modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null,8,["modelValue","onUpdate:modelValue"])):e.tag==="el-select"?(a(),s(T,{key:2,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,placeholder:"请选择"},{default:i(()=>[(a(!0),d(m,null,b(e.options,o=>(a(),s(k,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):e.tag==="el-radio-group"?(a(),s(C,{key:3,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,class:"radio-group"},{default:i(()=>[(a(!0),d(m,null,b(e.options,o=>(a(),s(V,{label:o.label,key:o.label},{default:i(()=>[g(Y(o.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):e.type==="date"?(a(),d(m,{key:4},[e.config.type.indexOf("range")>=0?(a(),s(q,{key:r.key,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:e.config.type,"unlink-panels":"","start-placeholder":"开始时间","end-placeholder":"结束时间","default-time":e.config.defaultTime,format:e.config.format,"value-format":e.config.valueFormat,"picker-options":r.datePickerOptions,style:{"margin-left":"5px"}},null,8,["modelValue","onUpdate:modelValue","type","default-time","format","value-format","picker-options"])):(a(),s(q,{key:r.key,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:e.config.type,format:e.config.format,"value-format":e.config.valueFormat,"picker-options":r.datePickerOptions,style:{"margin-left":"5px"}},null,8,["modelValue","onUpdate:modelValue","type","format","value-format","picker-options"]))],64)):e.type==="number"?(a(),s(E,{key:5,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,"controls-position":"right",style:{width:"120px","margin-left":"5px"}},null,8,["modelValue","onUpdate:modelValue"])):e.type==="bool"?(a(),s(h,{key:6,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null,8,["modelValue","onUpdate:modelValue"])):(a(),s(w,{key:7,modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1024),c(y,{span:1},{default:i(()=>[c(D,{onClick:o=>u.onDelete(v,e),style:{"margin-left":"5px"}},{default:i(()=>[c(U)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))]),_:1},8,["data","props"]))])}const X=M(R,[["render",H],["__scopeId","data-v-8493f5be"]]);export{X as default};
