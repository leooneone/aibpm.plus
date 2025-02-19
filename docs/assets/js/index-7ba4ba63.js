var C=Object.defineProperty;var D=(a,t,e)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var s=(a,t,e)=>(D(a,typeof t!="symbol"?t+"":t,e),e);import{J as k}from"./index-aa73a18b.js";import{k as _,h as L,l as B,i as E,m as r,$ as m,o as p,c as $,p as i,y as l,M as d,D as h,G as M}from"./@vue-8306d5ee.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";class u extends k{constructor(){super(...arguments);s(this,"getList",(e={})=>this.request({path:"/api/admin/cache/get-list",method:"GET",secure:!0,format:"json",...e}));s(this,"clear",(e,n={})=>this.request({path:"/api/admin/cache/clear",method:"DELETE",query:e,secure:!0,...n}))}}const T={class:"my-layout"},q=_({name:"admin/cache"}),le=_({...q,props:{title:{type:String,default:""}},setup(a){const{proxy:t}=L(),e=B({loading:!1,cacheListData:[]});E(()=>{n()});const n=async()=>{e.loading=!0;const o=await new u().getList().catch(()=>{e.loading=!1});e.cacheListData=(o==null?void 0:o.data)??[],e.loading=!1},f=o=>{t.$modal.confirmDelete(`确定要清除【${o.description}】缓存?`,{icon:"ele-Brush"}).then(async()=>{await new u().clear({cacheKey:o.value},{loading:!0,showSuccessMessage:!0}),n()}).catch(()=>{})};return(o,G)=>{const c=r("el-table-column"),g=r("el-button"),y=r("el-table"),v=r("el-card"),b=m("auth"),w=m("loading");return p(),$("div",T,[i(v,{class:"my-fill mt8",shadow:"never"},{default:l(()=>[d((p(),h(y,{data:e.cacheListData,"row-key":"id",style:{width:"100%"}},{default:l(()=>[i(c,{type:"index",width:"80",label:"#"}),i(c,{prop:"description",label:"缓存名"}),i(c,{prop:"name",label:"键名"}),i(c,{prop:"value",label:"键值"}),i(c,{label:"操作",width:"180",fixed:"right","header-align":"center",align:"center"},{default:l(({row:x})=>[d((p(),h(g,{icon:"ele-Brush",size:"small",text:"",type:"danger",onClick:N=>f(x)},{default:l(()=>[M("清除")]),_:2},1032,["onClick"])),[[b,"api:admin:cache:clear"]])]),_:1})]),_:1},8,["data"])),[[w,e.loading]])]),_:1})])}}});export{le as default};
