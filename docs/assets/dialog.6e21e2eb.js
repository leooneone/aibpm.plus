import{d as b,r as C,O as M,S as s,e as _,f,z as l,m as o,g,x,y as n,t as z}from"./vue.df334614.js";const A={class:"system-dept-dialog-container"},B={key:0},R={class:"dialog-footer"},E=x("取 消"),I=b({name:"example/systemDeptDialog"}),q=b({...I,emits:["refresh"],setup(O,{expose:V,emit:h}){const F=C(),e=M({ruleForm:{deptLevel:[],deptName:"",person:"",phone:"",email:"",sort:0,status:!0,describe:""},deptData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),D=(i,t)=>{i==="edit"?(t.deptLevel=["vueNextAdmin"],t.person="lyt",t.phone="12345678910",t.email="vueNextAdmin@123.com",e.ruleForm=t,e.dialog.title="修改部门",e.dialog.submitTxt="修 改"):(e.dialog.title="新增部门",e.dialog.submitTxt="新 增"),e.dialog.isShowDialog=!0,w()},u=()=>{e.dialog.isShowDialog=!1},N=()=>{u()},v=()=>{u(),h("refresh")},w=()=>{e.deptData.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"顶级部门",id:Math.random(),children:[{deptName:"IT外包服务",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"总部",id:Math.random()},{deptName:"资本控股",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"分部",id:Math.random()}]})};return V({openDialog:D}),(i,t)=>{const y=s("el-cascader"),d=s("el-form-item"),m=s("el-col"),r=s("el-input"),S=s("el-input-number"),T=s("el-switch"),U=s("el-row"),L=s("el-form"),p=s("el-button"),k=s("el-dialog");return _(),f("div",A,[l(k,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":t[8]||(t[8]=a=>e.dialog.isShowDialog=a),width:"769px"},{footer:o(()=>[g("span",R,[l(p,{onClick:N,size:"default"},{default:o(()=>[E]),_:1}),l(p,{type:"primary",onClick:v,size:"default"},{default:o(()=>[x(n(e.dialog.submitTxt),1)]),_:1})])]),default:o(()=>[l(L,{ref_key:"deptDialogFormRef",ref:F,model:e.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[l(U,{gutter:35},{default:o(()=>[l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"上级部门"},{default:o(()=>[l(y,{options:e.deptData,props:{checkStrictly:!0,value:"deptName",label:"deptName"},placeholder:"请选择部门",clearable:"",class:"w100",modelValue:e.ruleForm.deptLevel,"onUpdate:modelValue":t[0]||(t[0]=a=>e.ruleForm.deptLevel=a)},{default:o(({node:a,data:c})=>[g("span",null,n(c.deptName),1),a.isLeaf?z("",!0):(_(),f("span",B," ("+n(c.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"部门名称"},{default:o(()=>[l(r,{modelValue:e.ruleForm.deptName,"onUpdate:modelValue":t[1]||(t[1]=a=>e.ruleForm.deptName=a),placeholder:"请输入部门名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"负责人"},{default:o(()=>[l(r,{modelValue:e.ruleForm.person,"onUpdate:modelValue":t[2]||(t[2]=a=>e.ruleForm.person=a),placeholder:"请输入负责人",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"手机号"},{default:o(()=>[l(r,{modelValue:e.ruleForm.phone,"onUpdate:modelValue":t[3]||(t[3]=a=>e.ruleForm.phone=a),placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"邮箱"},{default:o(()=>[l(r,{modelValue:e.ruleForm.email,"onUpdate:modelValue":t[4]||(t[4]=a=>e.ruleForm.email=a),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"排序"},{default:o(()=>[l(S,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":t[5]||(t[5]=a=>e.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"部门状态"},{default:o(()=>[l(T,{modelValue:e.ruleForm.status,"onUpdate:modelValue":t[6]||(t[6]=a=>e.ruleForm.status=a),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"部门描述"},{default:o(()=>[l(r,{modelValue:e.ruleForm.describe,"onUpdate:modelValue":t[7]||(t[7]=a=>e.ruleForm.describe=a),type:"textarea",placeholder:"请输入部门描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{q as default};
