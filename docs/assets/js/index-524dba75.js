import{_ as u}from"./ai-form-97a12f88.js";import{k as i,l as b,m as r,o as f,c as h,p as a,y as o,u as g,R as w}from"./@vue-8306d5ee.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const v={class:"selector-container layout-pd"},I=i({name:"example/makeSelector"}),O=i({...I,setup(y){const c=w(()=>u(()=>import("./index-60bf3f24.js"),["assets/js/index-60bf3f24.js","assets/js/ai-form-97a12f88.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/getStyleSheets-a93480e6.js","assets/css/index-47b5c078.css"])),t=b({modelIcon:"",tableData:[{a1:"v-model",a2:"双向绑定值",a3:"string",a4:"",a5:""},{a1:"prepend",a2:"输入框前置内容，只能字体图标",a3:"string",a4:"",a5:"ele-Pointer"},{a1:"placeholder",a2:"输入框占位文本",a3:"string",a4:"",a5:"请输入内容搜索图标或者选择图标"},{a1:"size",a2:"尺寸",a3:"string",a4:"large / default / small",a5:"default"},{a1:"title",a2:"弹窗标题",a3:"string",a4:"",a5:"请选择图标"},{a1:"disabled",a2:"禁用",a3:"boolean",a4:"true",a5:"false"},{a1:"clearable",a2:"是否可清空",a3:"boolean",a4:"false",a5:"true"},{a1:"emptyDescription",a2:"自定义空状态描述文字",a3:"String",a4:"",a5:"无相关图标"}],tableData1:[{a1:"get",a2:"获取当前点击的 icon 图标",a3:"function",a4:"(icon: string)"},{a1:"clear",a2:"清空当前点击的 icon 图标",a3:"function",a4:"(icon: string)"}]}),d=l=>{window.console.log(l)},m=l=>{window.console.log(l)};return(l,s)=>{const n=r("el-card"),e=r("el-table-column"),p=r("el-table");return f(),h("div",v,[a(n,{shadow:"hover",header:"图标选择器(宽度自动)："},{default:o(()=>[a(g(c),{onGet:d,onClear:m,modelValue:t.modelIcon,"onUpdate:modelValue":s[0]||(s[0]=_=>t.modelIcon=_)},null,8,["modelValue"])]),_:1}),a(n,{shadow:"hover",header:"图标选择器(宽度自动)：参数",class:"mt15"},{default:o(()=>[a(p,{data:t.tableData,style:{width:"100%"}},{default:o(()=>[a(e,{prop:"a1",label:"参数"}),a(e,{prop:"a2",label:"说明"}),a(e,{prop:"a3",label:"类型"}),a(e,{prop:"a4",label:"可选值"}),a(e,{prop:"a5",label:"默认值"})]),_:1},8,["data"])]),_:1}),a(n,{shadow:"hover",header:"图标选择器(宽度自动)：事件",class:"mt15"},{default:o(()=>[a(p,{data:t.tableData1,style:{width:"100%"}},{default:o(()=>[a(e,{prop:"a1",label:"事件名称"}),a(e,{prop:"a2",label:"说明"}),a(e,{prop:"a3",label:"类型"}),a(e,{prop:"a4",label:"回调参数"})]),_:1},8,["data"])]),_:1})])}}});export{O as default};
