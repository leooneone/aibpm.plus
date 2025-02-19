import{aj as _}from"./index.390778f0.js";import{d as V,r as F,O as S,S as l,e as o,f as u,z as r,m as t,F as y,B as w,g as c,x as g,l as d,t as f,y as j}from"./vue.df334614.js";import"./index.4621962e.js";const A={class:"layout-pd"},E={key:0,class:"color-danger"},L={class:"pl5"},M=c("i",{class:"iconfont icon-quanxian"},null,-1),O=c("i",{class:"iconfont icon-shouye_dongtaihui"},null,-1),G={class:"flex-margin"},H=g("表格验证"),I=g("新增一行"),J=V({name:"example/pagesTableRules"}),X=V({...J,setup(K){const m=F(),p=S({tableData:{data:[],header:[{prop:"a1",width:"",label:"一级分类",isRequired:!0,type:"select"},{prop:"a2",width:"",label:"二级分类",isRequired:!0,type:"select"},{prop:"a3",width:"",label:"三级分类",isRequired:!0,type:"select"},{prop:"a4",width:"",label:"四级分类",isRequired:!0,type:"date"},{prop:"a5",width:"",label:"五级分类",isRequired:!0,type:"input"},{prop:"a6",width:"",label:"六级分类",isTooltip:!0,type:"dialog"},{prop:"a7",width:"",label:"演示级分类",type:"input"},{prop:"a8",width:"",label:"颜色是分类",type:"input"}],option:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"}]}}),k=i=>{if(p.tableData.data.length<=0)return _.warning("请先点击增加一行");i&&i.validate(s=>{if(!s)return _.warning("表格项必填未填");_.success("全部验证通过")})},v=()=>{p.tableData.data.push({a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:""})};return(i,s)=>{const R=l("el-tooltip"),x=l("el-option"),q=l("el-select"),D=l("el-date-picker"),b=l("el-input"),U=l("el-form-item"),C=l("el-table-column"),B=l("el-table"),$=l("el-form"),h=l("el-button"),z=l("el-row"),N=l("el-card");return o(),u("div",A,[r(N,{shadow:"hover",header:"表单表格验证"},{default:t(()=>[r($,{ref_key:"tableRulesRef",ref:m,model:p.tableData,size:"default"},{default:t(()=>[r(B,{data:p.tableData.data,border:"",class:"module-table-uncollected"},{default:t(()=>[(o(!0),u(y,null,w(p.tableData.header,(e,T)=>(o(),d(C,{key:T,"show-overflow-tooltip":"",prop:e.prop,width:e.width,label:e.label},{header:t(()=>[e.isRequired?(o(),u("span",E,"*")):f("",!0),c("span",L,j(e.label),1),e.isTooltip?(o(),d(R,{key:1,effect:"dark",content:"这是tooltip",placement:"top"},{default:t(()=>[M]),_:1})):f("",!0)]),default:t(n=>[r(U,{prop:`data.${n.$index}.${e.prop}`,rules:[{required:e.isRequired,message:"不能为空",trigger:`${e.type}`=="input"?"blur":"change"}]},{default:t(()=>[e.type==="select"?(o(),d(q,{key:0,modelValue:n.row[e.prop],"onUpdate:modelValue":a=>n.row[e.prop]=a,placeholder:"请选择"},{default:t(()=>[(o(!0),u(y,null,w(p.tableData.option,a=>(o(),d(x,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):e.type==="date"?(o(),d(D,{key:1,modelValue:n.row[e.prop],"onUpdate:modelValue":a=>n.row[e.prop]=a,type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):e.type==="input"?(o(),d(b,{key:2,modelValue:n.row[e.prop],"onUpdate:modelValue":a=>n.row[e.prop]=a,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])):e.type==="dialog"?(o(),d(b,{key:3,modelValue:n.row[e.prop],"onUpdate:modelValue":a=>n.row[e.prop]=a,readonly:"",placeholder:"请输入内容"},{suffix:t(()=>[O]),_:2},1032,["modelValue","onUpdate:modelValue"])):f("",!0)]),_:2},1032,["prop","rules"])]),_:2},1032,["prop","width","label"]))),128))]),_:1},8,["data"])]),_:1},8,["model"]),r(z,{class:"flex mt15"},{default:t(()=>[c("div",G,[r(h,{size:"default",type:"success",onClick:s[0]||(s[0]=e=>k(m.value))},{default:t(()=>[H]),_:1}),r(h,{size:"default",type:"primary",onClick:v},{default:t(()=>[I]),_:1})])]),_:1})]),_:1})])}}});export{X as default};
