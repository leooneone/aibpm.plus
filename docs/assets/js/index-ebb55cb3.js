import{_ as h}from"./ai-form-3baf0d65.js";import{k as d,l as f,m as l,o as i,c as m,p as a,y as e,u as s,F as b,H as g,D as v,G as x,v as y,R as k}from"./@vue-8306d5ee.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";const I={class:"notice-bar-container layout-pd"},w=d({name:"example/makeNoticeBar"}),j=d({...w,setup(A){const r=k(()=>h(()=>import("./index-d0bdeb23.js"),["assets/js/index-d0bdeb23.js","assets/js/@vue-8306d5ee.js","assets/js/index-0ce5277f.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/index-e5670023.css"])),n=f({noticeList:["🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等","适配手机、平板、pc的后台开源免费模板库（vue2.x请切换Admin.UI仓库）","仓库地址：https://gitee.com/zhontai/Admin.UI","演示地址：https://admin.zhontai.net/login"],tableData:[{a1:"mode",a2:"通知栏模式，用于右侧 icon 图标点击",a3:"string",a4:"closeable / link",a5:""},{a1:"text",a2:"通知文本内容，scrollable 为 false 时生效",a3:"string",a4:"",a5:""},{a1:"color",a2:"通知文本颜色",a3:"string",a4:"",a5:"#e6a23c"},{a1:"background",a2:"通知背景色",a3:"string",a4:"",a5:"#fdf6ec"},{a1:"size",a2:"字体大小，单位px",a3:"number / string",a4:"",a5:"14"},{a1:"height",a2:"通知栏高度，单位px",a3:"number / string",a4:"",a5:"40"},{a1:"delay",a2:"动画延迟时间 (s)",a3:"number / string",a4:"",a5:"1"},{a1:"speed",a2:"滚动速率 (px/s)",a3:"number / string",a4:"",a5:"100"},{a1:"scrollable",a2:"是否开启垂直滚动",a3:"boolean",a4:"true",a5:"false"},{a1:"leftIcon",a2:"自定义左侧图标",a3:"string",a4:"",a5:""},{a1:"rightIcon",a2:"自定义右侧图标",a3:"string",a4:"",a5:""}],tableData1:[{a1:"close",a2:"通知栏模式（mode）closeable 时回调事件",a3:"function",a4:""},{a1:"link",a2:"通知栏模式（mode）link 时回调事件",a3:"function",a4:""}]});return(D,z)=>{const o=l("el-card"),u=l("el-carousel-item"),_=l("el-carousel"),t=l("el-table-column"),c=l("el-table");return i(),m("div",I,[a(o,{shadow:"hover",header:"滚动通知栏：默认"},{default:e(()=>[a(s(r),{text:`🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc
				的后台开源免费模板库（vue2.x请切换Admin.UI仓库），仓库地址：https://gitee.com/zhontai/Admin.UI`})]),_:1}),a(o,{shadow:"hover",header:"滚动通知栏：设置样式",class:"mt15"},{default:e(()=>[a(s(r),{text:`🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc
				的后台开源免费模板库（vue2.x请切换Admin.UI分支），仓库地址：https://gitee.com/zhontai/Admin.UI`,leftIcon:"iconfont icon-tongzhi2",rightIcon:"ele-ArrowRight",background:"#ecf5ff",color:"#409eff"})]),_:1}),a(o,{shadow:"hover",header:"滚动通知栏：搭配 NoticeBar 和 Carousel 走马灯 组件可以实现垂直滚动的效果",class:"mt15"},{default:e(()=>[a(s(r),{scrollable:!0},{default:e(()=>[a(_,{height:"40px",direction:"vertical",autoplay:!0,"indicator-position":"none",interval:3e3},{default:e(()=>[(i(!0),m(b,null,g(n.noticeList,p=>(i(),v(u,{key:p},{default:e(()=>[x(y(p),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),a(o,{shadow:"hover",header:"滚动通知栏：参数",class:"mt15"},{default:e(()=>[a(c,{data:n.tableData,style:{width:"100%"}},{default:e(()=>[a(t,{prop:"a1",label:"参数"}),a(t,{prop:"a2",label:"说明"}),a(t,{prop:"a3",label:"类型"}),a(t,{prop:"a4",label:"可选值"}),a(t,{prop:"a5",label:"默认值"})]),_:1},8,["data"])]),_:1}),a(o,{shadow:"hover",header:"图标选择器(宽度自动)：事件",class:"mt15"},{default:e(()=>[a(c,{data:n.tableData1,style:{width:"100%"}},{default:e(()=>[a(t,{prop:"a1",label:"事件名称"}),a(t,{prop:"a2",label:"说明"}),a(t,{prop:"a3",label:"类型"}),a(t,{prop:"a4",label:"回调参数"})]),_:1},8,["data"])]),_:1})])}}});export{j as default};
