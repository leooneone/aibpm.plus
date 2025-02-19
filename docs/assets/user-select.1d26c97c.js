import{U as O}from"./User.3d01ec91.js";import{_ as H}from"./org-menu.vue_vue_type_script_setup_true_lang.cd7d218a.js";import{h as Q}from"./index.55c7ed79.js";import{d as b,r as $,O as j,S as i,a4 as q,e as m,f as F,z as o,m as s,g as x,p as G,l as D,t as J,u as K,x as W,H as v}from"./vue.72f2672d.js";import{_ as X}from"./_plugin-vue_export-helper.c27b6911.js";import"./http-client.3dda918f.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./index.41e0794f.js";import"./storage.6b2e7cd0.js";import"./Org.1b60eeb8.js";import"./tree.d5b28a07.js";import"./index.79e12c01.js";import"./index.1e09e151.js";import"./index.eead254e.js";import"./_Uint8Array.e4cf923d.js";import"./_initCloneObject.7b8933bc.js";import"./focus-trap.c8a23a9c.js";const Y={style:{padding:"0px 0px 8px 8px","background-color":"var(--ba-bg-color)"}},Z={class:"my-flex-column h100"},ee=W(" 查询 "),te={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},le=b({name:"bpm/components/user-select"}),oe=b({...le,props:{modelValue:{type:Array,default:[]},title:{type:String,default:""},multiple:{type:Boolean,default:!1},sureLoading:{type:Boolean,default:!1}},emits:["update:modelValue","sure"],setup(d,{expose:k,emit:f}){const w=d,c=$(),L=()=>{let t=e.selectedList.map(l=>l[e.UID]);e.userListData.forEach(l=>{t.includes(l[e.UID])&&v(()=>{c.value.toggleRowSelection(l)})})},C=(t,l)=>{t.length&&t.indexOf(l)!==-1?g(l):_(l),console.log("update:modelValue",e.selectedList),f("update:modelValue",e.selectedList)},U=t=>{let l=e.selectedList.map(n=>n[e.UID]),a=Array.isArray(t)?t.map(n=>n[e.UID]):[];e.userListData.forEach(n=>{a.includes(n[e.UID])?l.includes(n[e.UID])||g(n):l.includes(n[e.UID])&&_(n)}),console.log("update:modelValue",e.selectedList),f("update:modelValue",e.selectedList)},g=t=>{e.selectedList.push(t)},_=t=>{for(let[l,a]of e.selectedList.entries())if(a[e.UID]===t[e.UID]){h(l);break}},S=t=>{var l=e.selectedList.indexOf(t);h(l,t)},h=(t,l)=>{e.selectedList.splice(t,1),l&&v(()=>{c.value.toggleRowSelection(e.userListData.find(a=>a[e.UID]===l[e.UID]),!1)})},e=j({UID:"id",selectedList:w.modelValue,showDialog:!0,loading:!1,filterModel:{name:""},total:0,pageInput:{currentPage:1,pageSize:20,filter:{orgId:null}},userListData:[]}),V=()=>{e.showDialog=!0,e.pageInput.filter&&(e.pageInput.filter.orgId=null),r()},z=()=>{e.showDialog=!1},r=async()=>{var l,a;e.loading=!0;const t=await new O().getPage(e.pageInput);e.userListData=((l=t==null?void 0:t.data)==null?void 0:l.list)??[],e.total=((a=t.data)==null?void 0:a.total)??0,L(),e.loading=!1},B=t=>{e.pageInput.pageSize=t,r()},M=t=>{e.pageInput.currentPage=t,r()},P=t=>{e.pageInput.filter&&(e.pageInput.filter.orgId=t==null?void 0:t.id),r()};return k({open:V,close:z,removeTag:S,userTableRef:c}),(t,l)=>{const a=i("el-col"),n=i("el-input"),I=i("el-form-item"),R=i("el-button"),T=i("el-form"),y=i("el-card"),u=i("el-table-column"),A=i("el-pagination"),N=i("el-row"),E=q("loading");return m(),F("div",Y,[o(N,{gutter:8,style:{width:"100%"}},{default:s(()=>[o(a,{xs:24,sm:9},{default:s(()=>[x("div",Z,[o(H,{onNodeClick:P,class:"my-flex-fill"})])]),_:1}),o(a,{xs:24,sm:15},{default:s(()=>[o(y,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:s(()=>[o(T,{model:e.filterModel,inline:!0},{default:s(()=>[o(I,{label:"姓名",prop:"name"},{default:s(()=>[o(n,{modelValue:e.filterModel.name,"onUpdate:modelValue":l[0]||(l[0]=p=>e.filterModel.name=p),placeholder:"姓名"},null,8,["modelValue"])]),_:1}),o(I,null,{default:s(()=>[o(R,{type:"primary",icon:"ele-Search",onClick:r},{default:s(()=>[ee]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),o(y,{shadow:"never",style:{"margin-top":"8px"}},{default:s(()=>[G((m(),D(K(Q),{ref_key:"userTableRef",ref:c,data:e.userListData,style:{width:"100%"},"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},"highlight-current-row":!d.multiple,onRowClick:t.onRowClick,onRowDblclick:t.onRowDbClick,onSelect:C,onSelectAll:U},{default:s(()=>[d.multiple?(m(),D(u,{key:0,type:"selection",width:"55"})):J("",!0),o(u,{prop:"name",label:"姓名","min-width":"80","show-overflow-tooltip":""}),o(u,{prop:"mobile",label:"手机号","min-width":"120","show-overflow-tooltip":""})]),_:1},8,["data","highlight-current-row","onRowClick","onRowDblclick"])),[[E,e.loading]]),x("div",te,[o(A,{currentPage:e.pageInput.currentPage,"onUpdate:currentPage":l[1]||(l[1]=p=>e.pageInput.currentPage=p),"page-size":e.pageInput.pageSize,"onUpdate:page-size":l[2]||(l[2]=p=>e.pageInput.pageSize=p),total:e.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:B,onCurrentChange:M,layout:"total, sizes, prev, pager, next"},null,8,["currentPage","page-size","total"])])]),_:1})]),_:1})]),_:1})])}}});const ve=X(oe,[["__scopeId","data-v-62500b79"]]);export{ve as default};
