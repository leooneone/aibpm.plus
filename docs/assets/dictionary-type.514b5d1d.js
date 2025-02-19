import{_ as U}from"./preload-helper.101896b7.js";import{D as C}from"./DictionaryType.07541876.js";import{e as f}from"./mitt.7f99bbc0.js";import{d as k,a6 as $,r as b,O as N,o as O,P as j,H,S as l,a4 as D,e as r,f as Q,z as a,m as o,p as _,l as p,g as q,u as G,F as J,x as d,L as K}from"./vue.72f2672d.js";import"./http-client.3dda918f.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./index.41e0794f.js";import"./storage.6b2e7cd0.js";const W=d(" 查询 "),X=d(" 新增 "),Y=d("启用"),Z=d("禁用"),ee=d("编辑"),te=d("删除"),oe={class:"my-flex my-flex-end",style:{"margin-top":"20px"}},ae=k({name:"bpm/dictType"}),_e=k({...ae,setup(ne){const x=$(()=>U(()=>import("./dictionary-type-form.138d771a.js"),["assets/dictionary-type-form.138d771a.js","assets/DictionaryType.07541876.js","assets/http-client.3dda918f.js","assets/index.57385bce.js","assets/index.0c380c40.js","assets/vue.72f2672d.js","assets/index.41e0794f.js","assets/storage.6b2e7cd0.js","assets/mitt.7f99bbc0.js"])),{proxy:z}=K(),h=b(),g=b(),e=N({loading:!1,dictionaryTypeFormTitle:"",filterModel:{name:""},total:0,pageInput:{currentPage:1,pageSize:20},dictionaryTypeListData:[]});O(()=>{s(),f.on("refreshDictType",()=>{s()})}),j(()=>{f.off("refreshDictType")});const s=async()=>{var i,c;e.loading=!0,e.pageInput.filter=e.filterModel;const t=await new C().getPage(e.pageInput);e.dictionaryTypeListData=((i=t==null?void 0:t.data)==null?void 0:i.list)??[],e.total=((c=t.data)==null?void 0:c.total)??0,e.dictionaryTypeListData.length>0&&H(()=>{h.value.setCurrentRow(e.dictionaryTypeListData[0])}),e.loading=!1},P=()=>{e.dictionaryTypeFormTitle="新增字典分类",g.value.open()},I=t=>{e.dictionaryTypeFormTitle="编辑字典分类",g.value.open(t)},F=t=>{z.$modal.confirmDelete(`确定要删除【${t.name}】?`).then(async()=>{await new C().delete({id:t.id},{loading:!0,showSuccessMessage:!0}),s()}).catch(()=>{})},S=t=>{e.pageInput.pageSize=t,s()},L=t=>{e.pageInput.currentPage=t,s()},M=t=>{f.emit("refreshDict",t)};return(t,i)=>{const c=l("el-input"),T=l("el-form-item"),m=l("el-button"),V=l("el-form"),v=l("el-card"),u=l("el-table-column"),w=l("el-tag"),R=l("el-table"),B=l("el-pagination"),y=D("auth"),E=D("loading");return r(),Q(J,null,[a(v,{shadow:"never","body-style":{paddingBottom:"0"},style:{"margin-top":"8px"}},{default:o(()=>[a(V,{model:e.filterModel,inline:!0},{default:o(()=>[a(T,{prop:"name"},{default:o(()=>[a(c,{modelValue:e.filterModel.name,"onUpdate:modelValue":i[0]||(i[0]=n=>e.filterModel.name=n),placeholder:"名称或编码"},null,8,["modelValue"])]),_:1}),a(T,null,{default:o(()=>[a(m,{type:"primary",icon:"ele-Search",onClick:s},{default:o(()=>[W]),_:1}),_((r(),p(m,{type:"primary",icon:"ele-Plus",onClick:P},{default:o(()=>[X]),_:1})),[[y,"api:admin:dictionary:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),a(v,{shadow:"never",style:{"margin-top":"8px"}},{default:o(()=>[_((r(),p(R,{ref_key:"tableRef",ref:h,data:e.dictionaryTypeListData,"row-key":"id","highlight-current-row":"",style:{width:"100%"},onCurrentChange:M},{default:o(()=>[a(u,{prop:"name",label:"名称","min-width":"120","show-overflow-tooltip":""}),a(u,{prop:"code",label:"编码",width:"80","show-overflow-tooltip":""}),a(u,{label:"状态",width:"80",align:"center","show-overflow-tooltip":""},{default:o(({row:n})=>[n.enabled?(r(),p(w,{key:0,type:"success"},{default:o(()=>[Y]),_:1})):(r(),p(w,{key:1,type:"danger"},{default:o(()=>[Z]),_:1}))]),_:1}),a(u,{label:"操作",width:"140",fixed:"right","header-align":"center",align:"center"},{default:o(({row:n})=>[_((r(),p(m,{icon:"ele-EditPen",size:"small",text:"",type:"primary",onClick:A=>I(n)},{default:o(()=>[ee]),_:2},1032,["onClick"])),[[y,"api:admin:dictionary:update"]]),_((r(),p(m,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:A=>F(n)},{default:o(()=>[te]),_:2},1032,["onClick"])),[[y,"api:admin:dictionary:delete"]])]),_:1})]),_:1},8,["data"])),[[E,e.loading]]),q("div",oe,[a(B,{currentPage:e.pageInput.currentPage,"onUpdate:currentPage":i[1]||(i[1]=n=>e.pageInput.currentPage=n),"page-size":e.pageInput.pageSize,"onUpdate:page-size":i[2]||(i[2]=n=>e.pageInput.pageSize=n),total:e.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:S,onCurrentChange:L,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])])]),_:1}),a(G(x),{ref_key:"dictionaryTypeFormRef",ref:g,title:e.dictionaryTypeFormTitle},null,8,["title"])],64)}}});export{_e as default};
