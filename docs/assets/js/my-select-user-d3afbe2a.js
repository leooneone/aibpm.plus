import{_ as V}from"./ai-form-3baf0d65.js";import{k as m,e as v,l as S,m as b,o as k,c as C,p as n,q as r,u as y,F as R,R as g}from"./@vue-8306d5ee.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const E=m({name:"admin/user/components/my-select-user"}),T=m({...E,props:{name:String,modelValue:Number},emits:["update:modelValue"],setup(s,{emit:l}){const i=s,p=g(()=>V(()=>import("./user-select-a3f559d9.js"),["assets/js/user-select-a3f559d9.js","assets/js/ai-form-3baf0d65.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/index-0ce5277f.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/user-select-8a375a06.css"])),o=v(),t=S({label:i.name}),c=()=>{o.value.open()},u=()=>{l("update:modelValue",void 0)},d=async e=>{o.value.close(),(e==null?void 0:e.id)>0&&(t.label=e.name,l("update:modelValue",e.id))};return(e,a)=>{const f=b("el-select");return k(),C(R,null,[n(f,r({modelValue:t.label,"onUpdate:modelValue":a[0]||(a[0]=_=>t.label=_),placeholder:"请选择直属主管",remote:"","suffix-transition":!1,"suffix-icon":"ele-MoreFilled",class:"w100"},e.$attrs,{onClick:c,onClear:u}),null,16,["modelValue"]),n(y(p),r({ref_key:"userSelectRef",ref:o,title:"选择直属主管",modal:!0,onSure:d},e.$attrs),null,16)],64)}}});export{T as default};
