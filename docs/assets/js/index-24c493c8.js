import{_ as r}from"./ai-form-97a12f88.js";import{a as _}from"./element-plus-e21f9b5a.js";import{k as s,e as b,l as f,i as g,o as y,c as D,a as k,p as i,u as l,q as v,R as p}from"./@vue-8306d5ee.js";import{_ as x}from"./index-c27e5712.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const S={class:"table-demo-container layout-padding"},C={class:"table-demo-padding layout-padding-view layout-padding-auto"},T=s({name:"example/makeTableDemo"}),q=s({...T,setup(N){const n=p(()=>r(()=>import("./index-510049e4.js"),["assets/js/index-510049e4.js","assets/js/print-js-02dcfbfa.js","assets/js/@intlify-869ec77a.js","assets/js/js-table2excel-af15f470.js","assets/js/sortablejs-0d19b1d3.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/@vue-8306d5ee.js","assets/js/index-c27e5712.js","assets/js/ai-form-97a12f88.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/index-cb0ccc8d.css"])),d=p(()=>r(()=>import("./search-d7faee09.js"),["assets/js/search-d7faee09.js","assets/js/@vue-8306d5ee.js","assets/js/index-c27e5712.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-97a12f88.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/search-1ffaa992.css"])),o=b(),t=f({tableData:{data:[],header:[{key:"name",colWidth:"",title:"应检尽检核酸采样点名称",type:"text",isCheck:!0},{key:"address",colWidth:"",title:"详细地址",type:"text",isCheck:!0},{key:"phone",colWidth:"",title:"采样点联系电话",type:"text",isCheck:!0},{key:"time",colWidth:"",title:"开放时间",type:"text",isCheck:!0},{key:"isSupport",colWidth:"",title:"是否支持24小时核酸检测",type:"text",isCheck:!0},{key:"image",colWidth:"",width:"70",height:"40",title:"图片描述",type:"image",isCheck:!0}],config:{total:0,loading:!0,isBorder:!1,isSerialNo:!0,isSelection:!0,isOperate:!0},search:[{label:"采样点名称",prop:"name",placeholder:"请输入应检尽检核酸采样点名称",required:!0,type:"input"},{label:"详细地址",prop:"address",placeholder:"请输入详细地址",required:!1,type:"input"},{label:"联系电话",prop:"phone",placeholder:"请输入采样点联系电话",required:!1,type:"input"},{label:"开放时间",prop:"time",placeholder:"请选择",required:!1,type:"date"},{label:"支持24小时",prop:"isSupport",placeholder:"请选择",required:!1,type:"select",options:[{label:"是",value:1},{label:"否",value:0}]},{label:"图片描述",prop:"image",placeholder:"请输入图片描述",required:!1,type:"input"},{label:"核酸机构",prop:"mechanism",placeholder:"请输入核酸机构",required:!1,type:"input"}],param:{pageNum:1,pageSize:10},printName:"vueNextAdmin 表格打印演示"}}),a=()=>{t.tableData.config.loading=!0,t.tableData.data=[];for(let e=0;e<20;e++)t.tableData.data.push({id:`123456789${e+1}`,name:`莲塘别墅广场${e+1}`,address:`中沧公寓中庭榕树下${e+1}`,phone:`0592-6081259${e+1}`,time:"6:00 ~ 24:00",isSupport:`${e%2===0?"是":"否"}`,image:"https://img2.baidu.com/it/u=417454395,2713356475&fm=253&fmt=auto?w=200&h=200"});t.tableData.config.total=t.tableData.data.length,setTimeout(()=>{t.tableData.config.loading=!1},500)},c=e=>{t.tableData.param=Object.assign({},t.tableData.param,{...e}),o.value.pageReset()},m=e=>{_.success(`删除${e.name}成功！`),a()},u=e=>{t.tableData.param.pageNum=e.pageNum,t.tableData.param.pageSize=e.pageSize,a()},h=e=>{t.tableData.header=e};return g(()=>{a()}),(e,R)=>(y(),D("div",S,[k("div",C,[i(l(d),{search:t.tableData.search,onSearch:c},null,8,["search"]),i(l(n),v({ref_key:"tableRef",ref:o},t.tableData,{class:"table-demo",onDelRow:m,onPageChange:u,onSortHeader:h}),null,16)])]))}});const ae=x(q,[["__scopeId","data-v-af64d8c8"]]);export{ae as default};
