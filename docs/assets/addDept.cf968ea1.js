import{d as b,O as C,o as L,S as s,e as p,f as c,z as e,m as t,g as _,y as f,t as M,x as V}from"./vue.72f2672d.js";const k={class:"system-add-dept-container"},T={key:0},z={class:"dialog-footer"},B=V("取 消"),A=V("新 增"),E=b({name:"example/systemAddDept"}),q=b({...E,setup(I,{expose:x}){const l=C({isShowDialog:!1,ruleForm:{deptLevel:[],deptName:"",person:"",phone:"",email:"",sort:0,status:!0,describe:""},deptData:[]}),g=()=>{l.isShowDialog=!0},r=()=>{l.isShowDialog=!1},h=()=>{r()},F=()=>{r()},w=()=>{l.deptData.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"顶级部门",id:Math.random(),children:[{deptName:"IT外包服务",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"总部",id:Math.random()},{deptName:"资本控股",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"分部",id:Math.random()}]})};return L(()=>{w()}),x({openDialog:g}),(O,a)=>{const D=s("el-cascader"),d=s("el-form-item"),m=s("el-col"),n=s("el-input"),N=s("el-input-number"),S=s("el-switch"),v=s("el-row"),y=s("el-form"),u=s("el-button"),U=s("el-dialog");return p(),c("div",k,[e(U,{title:"新增部门",modelValue:l.isShowDialog,"onUpdate:modelValue":a[8]||(a[8]=o=>l.isShowDialog=o),width:"769px"},{footer:t(()=>[_("span",z,[e(u,{onClick:h,size:"default"},{default:t(()=>[B]),_:1}),e(u,{type:"primary",onClick:F,size:"default"},{default:t(()=>[A]),_:1})])]),default:t(()=>[e(y,{model:l.ruleForm,size:"default","label-width":"90px"},{default:t(()=>[e(v,{gutter:35},{default:t(()=>[e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[e(d,{label:"上级部门"},{default:t(()=>[e(D,{options:l.deptData,props:{checkStrictly:!0,value:"deptName",label:"deptName"},placeholder:"请选择部门",clearable:"",class:"w100",modelValue:l.ruleForm.deptLevel,"onUpdate:modelValue":a[0]||(a[0]=o=>l.ruleForm.deptLevel=o)},{default:t(({node:o,data:i})=>[_("span",null,f(i.deptName),1),o.isLeaf?M("",!0):(p(),c("span",T," ("+f(i.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[e(d,{label:"部门名称"},{default:t(()=>[e(n,{modelValue:l.ruleForm.deptName,"onUpdate:modelValue":a[1]||(a[1]=o=>l.ruleForm.deptName=o),placeholder:"请输入部门名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[e(d,{label:"负责人"},{default:t(()=>[e(n,{modelValue:l.ruleForm.person,"onUpdate:modelValue":a[2]||(a[2]=o=>l.ruleForm.person=o),placeholder:"请输入负责人",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[e(d,{label:"手机号"},{default:t(()=>[e(n,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":a[3]||(a[3]=o=>l.ruleForm.phone=o),placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[e(d,{label:"邮箱"},{default:t(()=>[e(n,{modelValue:l.ruleForm.email,"onUpdate:modelValue":a[4]||(a[4]=o=>l.ruleForm.email=o),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[e(d,{label:"排序"},{default:t(()=>[e(N,{modelValue:l.ruleForm.sort,"onUpdate:modelValue":a[5]||(a[5]=o=>l.ruleForm.sort=o),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[e(d,{label:"部门状态"},{default:t(()=>[e(S,{modelValue:l.ruleForm.status,"onUpdate:modelValue":a[6]||(a[6]=o=>l.ruleForm.status=o),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[e(d,{label:"部门描述"},{default:t(()=>[e(n,{modelValue:l.ruleForm.describe,"onUpdate:modelValue":a[7]||(a[7]=o=>l.ruleForm.describe=o),type:"textarea",placeholder:"请输入部门描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{q as default};
