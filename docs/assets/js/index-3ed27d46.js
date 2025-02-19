var I=Object.defineProperty;var q=(_,l,r)=>l in _?I(_,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):_[l]=r;var D=(_,l,r)=>(q(_,typeof l!="symbol"?l+"":l,r),r);import{_ as G}from"./ai-form-3baf0d65.js";import{k as j,h as J,e as z,l as N,i as H,E as Q,m as u,$ as R,o as h,c as U,p as i,y as o,Y as W,am as Y,G as w,M as x,D as v,u as X,R as Z}from"./@vue-8306d5ee.js";import{A as E}from"./Api-07b0f7dd.js";import{J as ee,M as te,e as L,O as ae,P as S}from"./index-1c0db287.js";import{j as $,q as oe}from"./lodash-es-f559e892.js";import"./element-plus-e21f9b5a.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";class M extends ee{constructor(){super(...arguments);D(this,"getSwaggerResources",(r,g={})=>this.request({path:r,method:"GET",secure:!0,format:"json",...g}));D(this,"getSwaggerJson",(r,g={})=>this.request({path:r,method:"GET",secure:!0,format:"json",...g}))}}const ne={class:"my-layout"},ie=j({name:"admin/api"}),je=j({...ie,setup(_){const l=Z(()=>G(()=>import("./api-form-07d75645.js"),["assets/js/api-form-07d75645.js","assets/js/Api-07b0f7dd.js","assets/js/index-1c0db287.js","assets/js/@vue-8306d5ee.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css"])),{proxy:r}=J(),g=z(),e=N({loading:!1,syncLoading:!1,apiFormTitle:"",filter:{name:""},apiTreeData:[],formApiTreeData:[],expandRowKeys:[]});H(async()=>{await b(),e.expandRowKeys=te($(e.apiTreeData)).filter(a=>a.parentId===0).map(a=>a.id+""),L.off("refreshApi"),L.on("refreshApi",async()=>{b()})}),Q(()=>{L.off("refreshApi")});const b=async()=>{e.loading=!0;const a=await new E().getList().catch(()=>{e.loading=!1});a&&a.data&&a.data.length>0?(e.apiTreeData=ae(S($(a.data)),e.filter.name,{filterWhere:(n,s)=>{var p,t;return((p=n.label)==null?void 0:p.toLocaleLowerCase().indexOf(s))>-1||((t=n.path)==null?void 0:t.toLocaleLowerCase().indexOf(s))>-1}}),e.formApiTreeData=S(a.data.filter(n=>n.parentId===0))):(e.apiTreeData=[],e.formApiTreeData=[]),e.loading=!1},F=()=>{e.apiFormTitle="新增接口",g.value.open()},O=a=>{e.apiFormTitle="编辑接口",g.value.open(a)},P=a=>{r.$modal.confirmDelete(`确定要删除接口【${a.label}】?`,{type:"info"}).then(async()=>{await new E().delete({id:a.id},{loading:!0}),b()}).catch(()=>{})},K=async a=>{const n=await new M().getSwaggerJson(a.url,{showErrorMessage:!1});if(!n)return;const s=n.tags,p=n.paths,t=[],d=a.url.split("/"),y=d.length>=2?d[d.length-2]:"";if(y!==""){if(t[t.length]={label:a.name,path:y},s&&s.length>0&&s.forEach(c=>{t[t.length]={label:c.description,path:c.name,parentPath:y}}),p)for(const[c,m]of Object.entries(p)){const A=Object.keys(m),k=Object.values(m),f=k&&k.length>0?k[0]:{},C=f.tags&&f.tags.length>0?f.tags[0]:"";t[t.length]={label:f.summary,path:c,parentPath:C,httpMethods:A.join(",")}}return await new E().sync({apis:t})}},V=()=>{e.syncLoading=!0;const a=["/admin/swagger-resources"],n=a.length-1;a.forEach(async(s,p)=>{const t=await new M().getSwaggerResources(s,{showErrorMessage:!1}).catch(()=>{e.syncLoading=!1});if(oe(t)&&(t==null?void 0:t.length)>0)for(let d=0,y=t.length;d<y;d++){const c=t[d];await K(c).catch(()=>{r.$modal.msgSuccess(`同步${c.name}失败`)})}p===n&&(e.syncLoading=!1,r.$modal.msgSuccess("同步完成"),b())})};return(a,n)=>{const s=u("el-input"),p=u("el-form-item"),t=u("el-button"),d=u("el-popconfirm"),y=u("el-form"),c=u("el-card"),m=u("el-table-column"),A=u("el-tag"),k=u("el-table"),f=R("auth"),C=R("loading");return h(),U("div",ne,[i(c,{class:"mt8",shadow:"never","body-style":{paddingBottom:"0"}},{default:o(()=>[i(y,{inline:!0,onSubmit:n[1]||(n[1]=W(()=>{},["stop","prevent"]))},{default:o(()=>[i(p,{label:"接口名称"},{default:o(()=>[i(s,{modelValue:e.filter.name,"onUpdate:modelValue":n[0]||(n[0]=T=>e.filter.name=T),placeholder:"接口名称",onKeyup:Y(b,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),i(p,null,{default:o(()=>[i(t,{type:"primary",icon:"ele-Search",onClick:b},{default:o(()=>[w(" 查询 ")]),_:1}),x((h(),v(t,{type:"primary",icon:"ele-Plus",onClick:F},{default:o(()=>[w(" 新增 ")]),_:1})),[[f,"api:admin:api:add"]]),i(d,{title:"确定要同步接口","hide-icon":"",width:"180","hide-after":"0",onConfirm:V},{reference:o(()=>[x((h(),v(t,{loading:e.syncLoading,type:"primary",icon:"ele-Refresh"},{default:o(()=>[w(" 同步 ")]),_:1},8,["loading"])),[[f,"api:admin:api:sync"]])]),_:1})]),_:1})]),_:1})]),_:1}),i(c,{class:"my-fill mt8",shadow:"never"},{default:o(()=>[x((h(),v(k,{data:e.apiTreeData,style:{width:"100%"},"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"},"expand-row-keys":e.expandRowKeys},{default:o(()=>[i(m,{prop:"label",label:"接口名称","min-width":"120","show-overflow-tooltip":""}),i(m,{prop:"path",label:"接口地址","min-width":"120","show-overflow-tooltip":""}),i(m,{prop:"description",label:"接口描述","min-width":"120","show-overflow-tooltip":""}),i(m,{prop:"sort",label:"排序",width:"80",align:"center","show-overflow-tooltip":""}),i(m,{label:"状态",width:"80",align:"center","show-overflow-tooltip":""},{default:o(({row:T})=>[T.enabled?(h(),v(A,{key:0,type:"success"},{default:o(()=>[w("启用")]),_:1})):(h(),v(A,{key:1,type:"danger"},{default:o(()=>[w("禁用")]),_:1}))]),_:1}),i(m,{label:"操作",width:"160",fixed:"right","header-align":"center",align:"center"},{default:o(({row:T})=>[x((h(),v(t,{icon:"ele-EditPen",size:"small",text:"",type:"primary",onClick:B=>O(T)},{default:o(()=>[w("编辑")]),_:2},1032,["onClick"])),[[f,"api:admin:api:update"]]),x((h(),v(t,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:B=>P(T)},{default:o(()=>[w("删除")]),_:2},1032,["onClick"])),[[f,"api:admin:api:delete"]])]),_:1})]),_:1},8,["data","expand-row-keys"])),[[C,e.loading]])]),_:1}),i(X(l),{ref_key:"apiFormRef",ref:g,title:e.apiFormTitle,"api-tree-data":e.formApiTreeData},null,8,["title","api-tree-data"])])}}});export{je as default};
