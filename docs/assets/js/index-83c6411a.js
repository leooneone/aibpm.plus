import{Q as l}from"./qrcodejs2-fixes-e998e170.js";import{k as c,e as f,i as u,m as e,o as h,c as v,p as o,y as r,a as s,G as x}from"./@vue-8306d5ee.js";import{_ as q}from"./index-aa73a18b.js";import"./@intlify-869ec77a.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const g={class:"qrcode-container layout-pd"},y={class:"qrcode-img-warp"},b={class:"mb30 mt30 qrcode-img"},k=c({name:"example/funQrcode"}),w=c({...k,setup(C){const t=f(),i=()=>{new l(t.value,{text:`https://admin.zhontai.net/login?t=${new Date().getTime()}`,width:125,height:125,colorDark:"#000000",colorLight:"#ffffff"})},n=()=>{t.value.innerHTML="",i()};return u(()=>{i()}),(Q,R)=>{const a=e("el-alert"),m=e("ele-Refresh"),p=e("el-icon"),_=e("el-button"),d=e("el-card");return h(),v("div",g,[o(d,{shadow:"hover",header:"qrcodejs2 二维码生成"},{default:r(()=>[o(a,{title:"感谢优秀的 `qrcodejs2`，项目地址：https://github.com/davidshimjs/qrcodejs",type:"success",closable:!1,class:"mb15"}),s("div",y,[s("div",b,[s("div",{class:"qrcode",ref_key:"qrcodeRef",ref:t},null,512)]),o(_,{type:"primary",size:"default",onClick:n},{default:r(()=>[o(p,null,{default:r(()=>[o(m)]),_:1}),x(" 重新生成 ")]),_:1})])]),_:1})])}}});const oe=q(w,[["__scopeId","data-v-f7084996"]]);export{oe as default};
