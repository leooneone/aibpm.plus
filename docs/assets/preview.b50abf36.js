import{_ as C}from"./preload-helper.101896b7.js";import{d as k,a6 as I,r as b,O as z,o as N,S as r,e as V,f as O,z as t,m as n,g as c,y as h,n as $,u as F,t as J,x as f,L as P,I as R}from"./vue.72f2672d.js";const B={key:0},E=["id"],A={style:{flex:"auto","background-color":"#eeeeee",padding:"5px 5px 5px 5px"}},D=f("提交"),L=f("取消"),j=k({__name:"preview",props:{},setup(M,{expose:m}){const u=I(()=>C(()=>import("./FormParser.2c0ec88e.js"),["assets/FormParser.2c0ec88e.js","assets/RenderPanel.vue_vue_type_script_setup_true_name_render-panel_lang.bbe8e092.js","assets/preload-helper.101896b7.js","assets/vue.72f2672d.js","assets/db.cba4b16a.js","assets/_plugin-vue_export-helper.c27b6911.js"])),l=b(),{proxy:_}=P(),d={id:void 0,data:[],model:{},activity:{}},e=z({drawerSize:"390px",title:"表单标题",isShow:!1,loading:!1,optional:[],conf:JSON.parse(JSON.stringify(d))}),p=i=>{l.value.submitForm(o=>{e.conf.workItemId,e.conf.instanceId,e.conf.templateId,e.conf.type,e.conf.activity.id,console.log(o),_.$modal.msgSuccess("模拟提交成功")})};R("submitForm",p);const v=async i=>{e.loading=!0,e.conf=JSON.parse(JSON.stringify(d)),e.conf.data=i,e.isShow=!0,e.loading=!1};return N(()=>{}),m({open:v}),(i,o)=>{const s=r("el-button"),y=r("el-button-group"),S=r("el-drawer");return e.isShow?(V(),O("section",B,[t(S,{modelValue:e.isShow,"onUpdate:modelValue":o[4]||(o[4]=a=>e.isShow=a),direction:"rtl",size:e.drawerSize},{header:n(({close:a,titleId:w,titleClass:g})=>[c("h4",{id:w,class:$(g)},h(e.title),11,E),t(y,null,{default:n(()=>[t(s,{onClick:o[0]||(o[0]=x=>e.drawerSize="390px"),icon:"ele-Cellphone",title:"手机"}),t(s,{onClick:o[1]||(o[1]=x=>e.drawerSize="100%"),icon:"ele-Monitor",title:"电脑"})]),_:1})]),footer:n(()=>[c("div",A,[t(s,{type:"primary",plain:"",onClick:o[2]||(o[2]=a=>p())},{default:n(()=>[D]),_:1}),t(s,{type:"info",plain:"",onClick:o[3]||(o[3]=a=>e.isShow=!1)},{default:n(()=>[L]),_:1})])]),default:n(()=>[t(F(u),{conf:e.conf,ref_key:"formRef",ref:l},null,8,["conf"])]),_:1},8,["modelValue","size"])])):J("",!0)}}});export{j as default};
