import{i as p}from"./countup.js-e47208de.js";import{k as d,e as I,l as S,i as R,m as o,o as s,c as m,p as e,y as c,F as B,H as j,D as q,a as t,v as u,I as z,P as _,G as L,n as M,S as T,T as V}from"./@vue-8306d5ee.js";import{_ as D}from"./index-1c0db287.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-3baf0d65.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const f=n=>(T("data-v-778868b5"),n=n(),V(),n),E={class:"layout-pd"},F={class:"countup-card-item-title pb3"},U=f(()=>t("div",{class:"countup-card-item-title-num pb6"},null,-1)),A={class:"countup-card-item-tip pb3"},G=f(()=>t("div",{class:"countup-card-item-tip-num"},null,-1)),H={class:"flex-warp"},P={class:"flex-warp-item"},$={class:"flex-warp-item-box"},J=d({name:"example/funCountup"}),K=d({...J,setup(n){const a=I([]),h=S({topCardItemList:[{title:"今日访问人数",titleNum:"123",tip:"在场人数",tipNum:"911",color:"--el-color-primary",iconColor:"#ffcb47",icon:"iconfont icon-jinridaiban"},{title:"实验室总数",titleNum:"123",tip:"使用中",tipNum:"611",color:"--el-color-success",iconColor:"#70cf41",icon:"iconfont icon-AIshiyanshi"},{title:"申请人数（月）",titleNum:"123",tip:"通过人数",tipNum:"911",color:"--el-color-warning",iconColor:"#dfae64",icon:"iconfont icon-shenqingkaiban"},{title:"销售情况",titleNum:"123",tip:"销售数",tipNum:"911",color:"--el-color-danger",iconColor:"#e56565",icon:"iconfont icon-ditu"}]}),l=()=>{M(()=>{a.value.forEach(r=>{new p(r.querySelector(".countup-card-item-title-num"),Math.random()*1e4).start(),new p(r.querySelector(".countup-card-item-tip-num"),Math.random()*1e3).start()})})},b=()=>{l()};return R(()=>{l()}),(r,O)=>{const y=o("el-alert"),C=o("el-col"),x=o("el-row"),v=o("ele-RefreshRight"),g=o("el-icon"),N=o("el-button"),k=o("el-card");return s(),m("div",E,[e(k,{shadow:"hover",header:"数字滚动演示"},{default:c(()=>[e(y,{title:"感谢优秀的 `countup.js`，项目地址：https://github.com/inorganik/countUp.js",type:"success",closable:!1,class:"mb15"}),e(x,{gutter:20},{default:c(()=>[(s(!0),m(B,null,j(h.topCardItemList,(i,w)=>(s(),q(C,{sm:6,class:"mb15",key:w},{default:c(()=>[t("div",{class:"countup-card-item countup-card-item-box",style:_({background:`var(${i.color})`})},[t("div",{class:"countup-card-item-flex",ref_for:!0,ref_key:"topCardItemRefs",ref:a},[t("div",F,u(i.title),1),U,t("div",A,u(i.tip),1),G],512),t("i",{class:z(i.icon),style:_({color:i.iconColor})},null,6)],4)]),_:2},1024))),128))]),_:1}),t("div",H,[t("div",P,[t("div",$,[e(N,{type:"primary",size:"default",onClick:b},{default:c(()=>[e(g,null,{default:c(()=>[e(v)]),_:1}),L(" 重置/刷新数值 ")]),_:1})])])])]),_:1})])}}});const gt=D(K,[["__scopeId","data-v-778868b5"]]);export{gt as default};
