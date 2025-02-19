import{Q as h}from"./echarts-09ad0ed1.js";import"./echarts-gl-de903279.js";import{f as z}from"./formatTime-29ac8c52.js";import{N as Z,_ as G}from"./index-aa73a18b.js";import{k as M,e as p,l as P,i as j,A as U,m as y,o as c,c as v,a as t,p as r,v as l,y as b,F as _,H as f,D as K,G as E,I as g,b as R,S as X,T as $}from"./@vue-8306d5ee.js";import{X as S}from"./zrender-067bc3d8.js";import"./tslib-54e39b60.js";import"./claygl-642beadb.js";import"./pinia-e84f6aa2.js";import"./vue-demi-71ba0ef2.js";import"./ai-form-7f0c78d7.js";import"./element-plus-e21f9b5a.js";import"./lodash-es-f559e892.js";import"./@vueuse-245b213e.js";import"./@element-plus-8ef115d9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./@intlify-869ec77a.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";const q=[{label:"广东省农业农村厅"},{label:"广西省农业农村厅"},{label:"四川省农业农村厅"},{label:"湖北省农业农村厅"},{label:"福建省农业农村厅"},{label:"山东省农业农村厅"},{label:"江西省农业农村厅"}],J=[{v1:"时间",v2:"天气",v3:"温度",v4:"湿度",v5:"降水概率",v6:"风向",v7:"风力",type:"title"},{v1:"今天",v2:"ele-Sunny",v3:"20°/26°",v4:"80%",v5:"50%",v6:"东南风",v7:"13m/s"},{v1:"明天",v2:"ele-Lightning",v3:"20°/26°",v4:"80%",v5:"50%",v6:"东南风",v7:"13m/s"},{v1:"后天",v2:"ele-Sunny",v3:"20°/26°",v4:"80%",v5:"50%",v6:"东南风",v7:"13m/s"}],tt=[{v1:"地块A-灌溉",v2:"阳光玫瑰种植",v3:"126天",v4:"设备在线"},{v1:"地块B-收割",v2:"阳光玫瑰种植",v3:"360天",v4:"设备预警"}],et=[{label:"温度"},{label:"光照"},{label:"湿度"},{label:"风力"},{label:"张力"},{label:"气压"}],st=[{topLevelClass:"fixed-top",icon:"ele-MagicStick",label:"环境监测",type:0},{topLevelClass:"fixed-right",icon:"ele-MoonNight",label:"精准管理",type:1},{topLevelClass:"fixed-bottom",icon:"ele-TrendCharts",label:"数据报表",type:2},{topLevelClass:"fixed-left",icon:"ele-Van",label:"产品追溯",type:3}],o=x=>(X("data-v-7274321e"),x=x(),$(),x),at={class:"visualizing-demo2"},it={class:"big-data-up"},lt={class:"up-left"},ot=o(()=>t("div",{class:"up-center"},[t("span",null,"智慧农业系统平台")],-1)),nt={class:"up-right"},dt={class:"el-dropdown-link"},ct={class:"ml15"},rt=o(()=>t("span",null,"消息",-1)),vt={class:"ml15"},mt=o(()=>t("span",null,"个人",-1)),ht={class:"ml15"},pt=o(()=>t("span",null,"返回",-1)),_t={class:"big-data-down"},ft={class:"big-data-down-left"},ut={class:"flex-warp-item"},xt={class:"flex-warp-item-box"},yt=o(()=>t("div",{class:"flex-title"},"天气预报",-1)),bt={class:"flex-content flex-content-overflow"},gt={class:"sky"},wt=R('<div class="sky-center" data-v-7274321e><div class="mb2" data-v-7274321e><span class="font" data-v-7274321e>多云转晴</span><span class="font" data-v-7274321e>东南风</span><span data-v-7274321e>良</span></div><div class="sky-tip" data-v-7274321e>温馨提示：多云转晴，南风转北风风力3级</div></div><div class="sky-right" data-v-7274321e><span data-v-7274321e>25</span><span class="font" data-v-7274321e>°C</span></div>',2),kt={class:"sky-dd"},St={key:0},Ct={key:1},Lt={class:"tip"},Dt={class:"flex-warp-item"},At={class:"flex-warp-item-box"},Bt=o(()=>t("div",{class:"flex-title"},"当前设备状态",-1)),Tt={class:"flex-content flex-content-overflow"},It={class:"d-states"},zt={class:"d-states-item"},Et=o(()=>t("div",{class:"d-states-flex"},[t("div",{class:"d-states-item-label"},"园区设备数"),t("div",{class:"d-states-item-value"},"99")],-1)),Mt={class:"d-states-item"},Rt=o(()=>t("div",{class:"d-states-flex"},[t("div",{class:"d-states-item-label"},"预警设备数"),t("div",{class:"d-states-item-value"},"10")],-1)),Ft={class:"d-states-item"},Qt=o(()=>t("div",{class:"d-states-flex"},[t("div",{class:"d-states-item-label"},"运行设备数"),t("div",{class:"d-states-item-value"},"20")],-1)),Wt={class:"d-btn"},Yt={class:"d-btn-item-center"},Nt={class:"d-btn-item-eight"},Ot={class:"flex-warp-item"},Ht={class:"flex-warp-item-box"},Vt=o(()=>t("div",{class:"flex-title"},"近30天预警总数",-1)),Zt={class:"big-data-down-center"},Gt={class:"big-data-down-center-one"},Pt=o(()=>t("div",{id:"3DEarth"},null,-1)),jt={class:"text-box"},Ut={class:"text"},Kt={class:"big-data-down-center-two"},Xt={class:"flex-warp-item-box"},$t=o(()=>t("div",{class:"flex-title"},[t("span",null,"当前设备监测"),t("span",{class:"flex-title-small"},"单位：次")],-1)),qt={class:"flex-content"},Jt={class:"flex-content-left"},te={class:"monitor-z-index"},ee={class:"monitor-item-label"},se={class:"big-data-down-right"},ae={class:"flex-warp-item"},ie={class:"flex-warp-item-box"},le=o(()=>t("div",{class:"flex-title"},[t("span",null,"近7天产品追溯扫码统计"),t("span",{class:"flex-title-small"},"单位：次")],-1)),oe={class:"flex-warp-item"},ne={class:"flex-warp-item-box"},de=o(()=>t("div",{class:"flex-title"},"当前任务统计",-1)),ce={class:"flex-content"},re=R('<div class="task" data-v-7274321e><div class="task-item task-first-item" data-v-7274321e><div class="task-item-value task-first" data-v-7274321e>25</div><div class="task-item-label" data-v-7274321e>待办任务</div></div><div class="task-item" data-v-7274321e><div class="task-item-box task1" data-v-7274321e><div class="task-item-value" data-v-7274321e>12</div><div class="task-item-label" data-v-7274321e>施肥</div></div></div><div class="task-item" data-v-7274321e><div class="task-item-box task2" data-v-7274321e><div class="task-item-value" data-v-7274321e>3</div><div class="task-item-label" data-v-7274321e>施药</div></div></div><div class="task-item" data-v-7274321e><div class="task-item-box task3" data-v-7274321e><div class="task-item-value" data-v-7274321e>5</div><div class="task-item-label" data-v-7274321e>农事</div></div></div><div class="task-item" data-v-7274321e><div class="task-item-box task4" data-v-7274321e><div class="task-item-value" data-v-7274321e>3</div><div class="task-item-label" data-v-7274321e>巡园</div></div></div><div class="task-item" data-v-7274321e><div class="task-item-box task5" data-v-7274321e><div class="task-item-value" data-v-7274321e>2</div><div class="task-item-label" data-v-7274321e>采集</div></div></div></div>',1),ve={class:"flex-warp-item"},me={class:"flex-warp-item-box"},he=o(()=>t("div",{class:"flex-title"},[t("span",null,"近7天投入品记录"),t("span",{class:"flex-title-small"},"单位：件")],-1)),pe=M({name:"example/visualizingLinkDemo2"}),_e=M({...pe,setup(x){const C=p(),L=p(),D=p(),A=p(),B=p(),T=p(),a=P({time:{txt:"",fun:0},dropdownList:q,dropdownActive:"请选择",skyList:J,dBtnList:tt,chartData4Index:0,dBtnActive:0,earth3DBtnList:st,chartData4List:et,myCharts:[]}),F=()=>{a.time.txt=z(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ"),a.time.fun=window.setInterval(()=>{a.time.txt=z(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ")},1e3)},Q=()=>{const e=h(C.value),i={tooltip:{trigger:"item"},series:[{name:"面积模式",type:"pie",radius:[10,60],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:5},data:[{name:"天气预警",value:100},{name:"病虫害预警",value:50},{name:"任务预警",value:130},{name:"监测设备预警",value:62}],label:{color:"#c0d1f2"}}]};e.setOption(i),a.myCharts.push(e)},W=()=>{const e=h(A.value),i={grid:{top:10,right:10,bottom:20,left:30},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:["1月","2月","3月","4月","5月","6月"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.1)",width:1}},axisTick:{show:!1},axisLabel:{interval:0,color:"#c0d1f2",textStyle:{fontSize:10}}},yAxis:[{type:"value",axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"温度",type:"line",smooth:!0,lineStyle:{width:0},areaStyle:{opacity:.8,color:new S(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,70]}]};e.setOption(i),a.myCharts.push(e)},Y=()=>{const e=h(D.value),i={grid:{top:10,right:0,bottom:20,left:30},tooltip:{trigger:"axis"},xAxis:{data:["1月","2月","3月","4月","5月","6月"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.1)",width:1}},axisTick:{show:!1},axisLabel:{color:"#c0d1f2"}},yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.1)"}},axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"预购队列",type:"line",data:[200,85,112,275,305,415],itemStyle:{color:"#16cfd0"}},{name:"最新成交价",type:"line",data:[50,85,22,155,170,25],itemStyle:{color:"#febb50"}}]};e.setOption(i),a.myCharts.push(e)},N=()=>{const e=h(T.value),i={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:20,right:50,bottom:0,left:80},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},inverse:!0,data:["施肥任务完成率","施药任务完成率","农事任务完成率"],axisLabel:{color:"#A7D6F4",fontSize:12}}],series:[{name:"标准化",type:"bar",barWidth:10,label:{show:!0,position:"right",color:"#A7D6F4",fontSize:12,distance:15,formatter:"{c}%"},itemStyle:{barBorderRadius:[0,20,20,0],color:new S(1,0,0,0,[{offset:0,color:"#51C5FD"},{offset:1,color:"#005BB1"}],!1)},data:[75,100,60]}]};e.setOption(i),a.myCharts.push(e)},O=()=>{const e=h(L.value),i={grid:{top:10,right:0,bottom:20,left:30},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{data:["1月","2月","3月","4月","5月","6月"],axisLine:{lineStyle:{color:"rgba(22, 207, 208, 0.5)",width:1}},axisTick:{show:!1},axisLabel:{color:"#c0d1f2"}},yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.1)"}},axisLabel:{color:"#c0d1f2"},splitLine:{show:!0,lineStyle:{color:"rgba(22, 207, 208, 0.3)"}},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}},{type:"value",position:"right",axisLine:{show:!1},axisLabel:{show:!0,formatter:"{value}%",textStyle:{color:"#16cfd0"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:"rgba(22, 207, 208, 0.02)"}},nameTextStyle:{color:"#16cfd0"}}],series:[{name:"销售水量",type:"line",yAxisIndex:1,smooth:!0,showAllSymbol:!0,symbol:"circle",itemStyle:{color:"#058cff"},lineStyle:{color:"#058cff"},areaStyle:{color:"rgba(5,140,255, 0.2)"},data:[4.2,3.8,4.8,3.5,2.9,2.8]},{name:"主营业务",type:"bar",barWidth:15,itemStyle:{normal:{color:new S(0,0,0,1,[{offset:0,color:"#00FFE3"},{offset:1,color:"#4693EC"}])}},data:[4.2,3.8,4.8,3.5,2.9,2.8]}]};e.setOption(i),a.myCharts.push(e)},H=e=>{let i=document.getElementById("3DEarth");i.style.height=`${B.value.offsetHeight}px`;const n=h(i),u={globe:{baseTexture:"https://i.hd-r.cn/4d572a171eb475da0c2e731d15b63aea.jpg",heightTexture:"https://i.hd-r.cn/52356e8d906c84c5e23390f829dec7a3.jpg",shading:"realistic",light:{ambient:{intensity:.4},main:{intensity:.4}},viewControl:{autoRotate:!0},postEffect:{enable:!0,bloom:{enable:!0}},globeRadius:e},series:{type:"lines3D",coordinateSystem:"globe",blendMode:"lighter",lineStyle:{width:1,color:"rgb(50, 50, 150)",opacity:.1},data:[]}};let w=function(){let m=105.18,s=Math.random()*360-180,d=37.51,k=Math.random()*180-90;return{coords:[[s,k],[m,d]],value:(Math.random()*3e3).toFixed(2)}};for(let m=0;m<150;m++)u.series.data=u.series.data.concat(w());n.setOption(u)},I=()=>{let e=document.body.clientWidth,i=0;e>=1920?i=100:e>1200&&e<1920?i=70:e>992&&e<1200?i=60:e>768&&e<992?i=40:e<768&&(i=20),H(i)},V=()=>{I(),window.addEventListener("resize",()=>{for(let e=0;e<a.myCharts.length;e++)a.myCharts[e].resize();I()})};return j(async()=>{Z.done(),F(),await Q(),await W(),await Y(),await O(),await N(),await V()}),U(()=>{window.clearInterval(a.time.fun)}),(e,i)=>{const n=y("SvgIcon"),u=y("el-dropdown-item"),w=y("el-dropdown-menu"),m=y("el-dropdown");return c(),v("div",at,[t("div",it,[t("div",lt,[r(n,{name:"ele-Timer",class:"mr5"}),t("span",null,l(a.time.txt),1)]),ot,t("div",nt,[r(m,{size:"small"},{dropdown:b(()=>[r(w,null,{default:b(()=>[(c(!0),v(_,null,f(a.dropdownList,(s,d)=>(c(),K(u,{key:d},{default:b(()=>[E(l(s.label),1)]),_:2},1024))),128))]),_:1})]),default:b(()=>[t("span",dt,[E(l(a.dropdownActive)+" ",1),r(n,{name:"ele-ArrowDown",class:"el-icon--right"})])]),_:1}),t("div",ct,[r(n,{name:"ele-Bell",class:"mr5"}),rt]),t("div",vt,[r(n,{name:"ele-User",class:"mr5"}),mt]),t("div",ht,[r(n,{name:"ele-SwitchButton",class:"mr5"}),pt])])]),t("div",_t,[t("div",ft,[t("div",ut,[t("div",xt,[yt,t("div",bt,[t("div",gt,[r(n,{name:"ele-Sunny",class:"sky-left"}),wt]),t("div",kt,[(c(!0),v(_,null,f(a.skyList,(s,d)=>(c(),v("div",{class:g(["sky-dl",{"sky-dl-first":d===1}]),key:d},[t("div",null,l(s.v1),1),s.type==="title"?(c(),v("div",St,l(s.v2),1)):(c(),v("div",Ct,[r(n,{name:s.v2},null,8,["name"])])),t("div",null,l(s.v3),1),t("div",null,l(s.v4),1),t("div",Lt,l(s.v5),1),t("div",null,l(s.v6),1),t("div",null,l(s.v7),1)],2))),128))])])])]),t("div",Dt,[t("div",At,[Bt,t("div",Tt,[t("div",It,[t("div",zt,[r(n,{name:"ele-Odometer",class:"i-bg1"}),Et]),t("div",Mt,[r(n,{name:"ele-FirstAidKit",class:"i-bg2"}),Rt]),t("div",Ft,[r(n,{name:"ele-VideoPlay",class:"i-bg3"}),Qt])]),t("div",Wt,[(c(!0),v(_,null,f(a.dBtnList,(s,d)=>(c(),v("div",{class:g(["d-btn-item",{"d-btn-active":a.dBtnActive===d}]),key:d},[r(n,{name:"ele-Money",class:"d-btn-item-left"}),t("div",Yt,[t("div",null,l(s.v1),1),t("div",null,l(s.v2)+"|"+l(s.v3),1)]),t("div",Nt,l(s.v4),1)],2))),128))])])])]),t("div",Ot,[t("div",Ht,[Vt,t("div",{class:"flex-content",ref_key:"rightChartData1",ref:C},null,512)])])]),t("div",Zt,[t("div",Gt,[t("div",{class:"big-data-down-center-one-content",ref_key:"rightChartData5",ref:B},[Pt,(c(!0),v(_,null,f(a.earth3DBtnList,(s,d)=>(c(),v("div",{class:g(s.topLevelClass),key:d},[(c(),v(_,null,f(4,k=>t("div",{class:"circle",key:k})),64)),t("div",jt,[r(n,{name:s.icon,size:22},null,8,["name"]),t("div",Ut,l(s.label),1)])],2))),128))],512)]),t("div",Kt,[t("div",Xt,[$t,t("div",qt,[t("div",Jt,[(c(!0),v(_,null,f(a.chartData4List,(s,d)=>(c(),v("div",{class:"monitor-item",key:d},[t("div",{class:g(["monitor-wave",{"monitor-active":d===a.chartData4Index}])},[t("div",te,[t("div",ee,l(s.label),1)])],2)]))),128))]),t("div",{class:"flex-content-right",ref_key:"rightChartData4",ref:A},null,512)])])])]),t("div",se,[t("div",ae,[t("div",ie,[le,t("div",{class:"flex-content",ref_key:"rightChartData3",ref:D},null,512)])]),t("div",oe,[t("div",ne,[de,t("div",ce,[re,t("div",{ref_key:"rightChartData6",ref:T,class:"progress"},null,512)])])]),t("div",ve,[t("div",me,[he,t("div",{class:"flex-content",ref_key:"rightChartData2",ref:L},null,512)])])])])])}}});const Ue=G(_e,[["__scopeId","data-v-7274321e"]]);export{Ue as default};
