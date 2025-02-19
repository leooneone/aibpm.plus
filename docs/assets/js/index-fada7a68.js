import{_ as g}from"./ai-form-3baf0d65.js";import{k as $,e as f,l as we,i as ge,A as ke,m as z,o as u,c as p,x as _e,a as r,p as c,u as b,y as je,F as C,H as D,P as A,v as P,I as q,Y as xe,R as k,n as _}from"./@vue-8306d5ee.js";import{j as B}from"./jsplumb-6d873755.js";import{S as ye}from"./sortablejs-0d19b1d3.js";import{s as Ie}from"./pinia-e84f6aa2.js";import{b as Le,u as Ce,_ as De}from"./index-1c0db287.js";import{c as Pe}from"./commonFunction-06d6b11f.js";import{a as h,b as Ee}from"./element-plus-e21f9b5a.js";import"./@intlify-869ec77a.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-c9c3da21.js";import"./vue-i18n-86a71ef1.js";import"./vue-27cbb85a.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-8ef115d9.js";import"./nprogress-b96aa312.js";import"./axios-21b846bc.js";import"./lodash-es-f559e892.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-9f938aef.js";import"./@vueuse-245b213e.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-97457aaf.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-e77024c3.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-c2863df3.js";import"./vue-clipboard3-6f6caaf2.js";import"./clipboard-1d5cbb20.js";import"./formatTime-29ac8c52.js";const Te=[{title:"工作流",icon:"iconfont icon-shouye",isOpen:!0,id:"1",children:[{icon:"iconfont icon-gongju",name:"引擎",id:"11",form:[{type:"input",label:"客户姓名",prop:"name",placeholder:"请输入客户姓名",required:!0,disabled:!1},{type:"select",label:"性别",prop:"sex",placeholder:"请选择性别",required:!0,disabled:!1,options:[{value:"0",label:"女"},{value:"1",label:"男"}]},{type:"input",label:"员工编号",prop:"number",placeholder:"请输入员工编号",required:!0,disabled:!1},{type:"input",label:"办公电话",prop:"mobile",placeholder:"请输入办公电话",required:!0,disabled:!1},{type:"select",label:"权限分配",prop:"role",placeholder:"请选择性别",required:!0,disabled:!1,options:[{value:"0",label:"编辑权限"},{value:"1",label:"删除权限"}]},{type:"checkbox",label:"模块选择",prop:"module",placeholder:"请选择模块",required:!0,disabled:!1}]},{icon:"iconfont icon-shouye_dongtaihui",name:"模版",id:"12",form:[{type:"input",label:"等级",prop:"grade",placeholder:"请输入等级",required:!0,disabled:!1},{type:"input",label:"登记密码",prop:"password",placeholder:"请输入登记密码",required:!0,disabled:!1}]},{icon:"iconfont icon-zhongduancanshuchaxun",name:"名称",id:"13",form:[{type:"input",label:"数据表",prop:"dataSheet",placeholder:"请输入数据表",required:!0,disabled:!1},{type:"input",label:"字段配置",prop:"field",placeholder:"请输入字段配置",required:!0,disabled:!1}]},{icon:"iconfont icon-zhongduancanshu",name:"版本",id:"14",form:[{type:"input",label:"发布模板",prop:"publish",placeholder:"请输入发布模板",required:!0,disabled:!1}]},{icon:"iconfont icon-bolangnengshiyanchang",name:"建模",id:"15",form:[{type:"input",label:"内容模板",prop:"content",placeholder:"请输入内容模板",required:!0,disabled:!1}]},{icon:"iconfont icon-xingqiu",name:"节点",id:"16",form:[{type:"input",label:"活动名称6",prop:"name16"}]}]},{title:"流程",isOpen:!0,icon:"iconfont icon-caijian",id:"2",children:[{icon:"iconfont icon-fuwenben",name:"实例",id:"21",form:[{type:"input",label:"活动名称7",prop:"name21"}]},{icon:"iconfont icon-fuwenbenkuang",name:"轨迹",id:"22",form:[{type:"input",label:"活动名称8",prop:"name22"}]},{icon:"iconfont icon-shangchuan",name:"数据",id:"23",form:[{type:"input",label:"活动名称9",prop:"name23"}]}]},{title:"任务",isOpen:!0,icon:"iconfont icon-shuju",id:"3",children:[{icon:"iconfont icon-icon-",name:"参与人",id:"31",form:[{type:"input",label:"活动名称1",prop:"name31"}]},{icon:"iconfont icon-gerenzhongxin",name:"执行人",id:"32",form:[{type:"input",label:"活动名称2",prop:"name32"}]},{icon:"iconfont icon-fangkuang",name:"工单",id:"33",form:[{type:"input",label:"活动名称3",prop:"name33"}]}]}],ve={Anchors:["Top","TopCenter","TopRight","TopLeft","Right","RightMiddle","Bottom","BottomCenter","BottomRight","BottomLeft","Left","LeftMiddle"],Container:"workflow-right",Connector:["Bezier",{curviness:100}],ConnectionsDetachable:!1,DeleteEndpointsOnDetach:!1,Endpoint:["Blank",{Overlays:""}],EndpointStyle:{fill:"#1879ffa1",outlineWidth:1},LogEnabled:!0,PaintStyle:{stroke:"#E0E3E7",strokeWidth:1,outlineStroke:"transparent",outlineWidth:10},DragOptions:{cursor:"pointer",zIndex:2e3},Overlays:[["Arrow",{width:10,length:8,location:1,direction:1,foldback:.623}],["Label",{label:"",location:.5,cssClass:"aLabel"}]],RenderMode:"svg",HoverPaintStyle:{stroke:"#b0b2b5",strokeWidth:1},EndpointHoverStyle:{fill:"red"},Scope:"jsPlumb_DefaultScope"},Se={filter:".workflow-icon-drag",filterExclude:!1,anchor:"Continuous",allowLoopback:!0,maxConnections:-1},Re={filter:".workflow-icon-drag",filterExclude:!1,anchor:"Continuous",allowLoopback:!0,dropOptions:{hoverClass:"ef-drop-hover"}},E={isSource:!0,isTarget:!0,anchor:"Continuous"},Ne={class:"workflow-container layout-padding"},Oe={key:0,class:"workflow-mask"},Me={class:"layout-padding-auto layout-padding-view workflow-warp"},ze={class:"workflow"},Ae={class:"workflow-content"},qe={class:"workflow-left"},Be=["onClick"],$e=["data-name","data-icon","data-id"],We={class:"workflow-left-item-icon"},Ve={class:"font10 pl5 name"},Fe=["id","data-node-id","onClick","onContextmenu"],He={class:"workflow-left-item-icon"},Ye={class:"font10 pl5 name"},Je=$({name:"example/pagesWorkflow"}),Xe=$({...Je,setup(Ue){const W=k(()=>g(()=>import("./index-ffacd662.js"),["assets/js/index-ffacd662.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/@vue-8306d5ee.js","assets/js/index-1c0db287.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/index-e550bd4d.css"])),T=k(()=>g(()=>import("./index-36fc84f1.js"),["assets/js/index-36fc84f1.js","assets/js/@vue-8306d5ee.js","assets/js/index-1c0db287.js","assets/js/pinia-e84f6aa2.js","assets/js/vue-demi-71ba0ef2.js","assets/js/ai-form-3baf0d65.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css","assets/js/vue-router-c9c3da21.js","assets/js/vue-i18n-86a71ef1.js","assets/js/vue-27cbb85a.js","assets/js/js-cookie-edb2da2a.js","assets/js/nprogress-b96aa312.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-21b846bc.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-9f938aef.js","assets/css/index-6baff94b.css","assets/css/index-c3139c4d.css"])),V=k(()=>g(()=>import("./index-fd567e77.js"),["assets/js/index-fd567e77.js","assets/js/ai-form-3baf0d65.js","assets/js/@vue-8306d5ee.js","assets/js/element-plus-e21f9b5a.js","assets/js/lodash-es-f559e892.js","assets/js/@vueuse-245b213e.js","assets/js/@element-plus-8ef115d9.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-97457aaf.js","assets/js/@intlify-869ec77a.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-e77024c3.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-c2863df3.js","assets/css/ai-form-078e22e0.css"])),F=k(()=>g(()=>import("./help-8bf514c0.js"),["assets/js/help-8bf514c0.js","assets/js/@vue-8306d5ee.js"])),v=f([]),S=f(),R=f(),N=f(),j=f(),O=f(),H=Le(),Y=Ce(),{themeConfig:J}=Ie(Y),{copyText:X}=Pe(),e=we({leftNavList:[],dropdownNode:{x:"",y:""},dropdownLine:{x:"",y:""},isShow:!1,jsPlumb:null,jsPlumbNodeIndex:null,jsplumbDefaults:ve,jsplumbMakeSource:Se,jsplumbMakeTarget:Re,jsplumbConnect:E,jsplumbData:{nodeList:[],lineList:[]}}),x=()=>{document.body.clientWidth<768?e.isShow=!0:e.isShow=!1},U=()=>{e.leftNavList=Te,e.jsplumbData={nodeList:[{nodeId:"huej738hbji",left:"148px",top:"93px",class:"workflow-right-clone",icon:"iconfont icon-gongju",name:"引擎",id:"11"},{nodeId:"52kcszzyxrd",left:"458px",top:"203px",class:"workflow-right-clone",icon:"iconfont icon-shouye_dongtaihui",name:"模版",id:"12"},{nodeId:"nltskl6k4me",left:"164px",top:"350px",class:"workflow-right-clone",icon:"iconfont icon-zhongduancanshuchaxun",name:"名称",id:"13"}],lineList:[{sourceId:"huej738hbji",targetId:"52kcszzyxrd",label:"传送"},{sourceId:"huej738hbji",targetId:"nltskl6k4me",label:""}]}},G=()=>{v.value.forEach(o=>{ye.create(o,{group:{name:"vue-next-admin-1",pull:"clone",put:!1},animation:0,sort:!1,draggable:".workflow-left-item",forceFallback:!0,onEnd:function(l){const{name:n,icon:s,id:t}=l.clone.dataset,{layerX:i,layerY:a,clientX:d,clientY:m}=l.originalEvent,me=S.value,{x:M,y,width:fe,height:be}=me.getBoundingClientRect();if(d<M||d>fe+M||m<y||y>y+be)h.warning("请把节点拖入到画布中");else{const w=Math.random().toString(36).substr(2,12),he={nodeId:w,left:`${i-40}px`,top:`${a-15}px`,class:"workflow-right-clone",name:n,icon:s,id:t};e.jsplumbData.nodeList.push(he),_(()=>{e.jsPlumb.makeSource(w,e.jsplumbMakeSource),e.jsPlumb.makeTarget(w,e.jsplumbMakeTarget,E),e.jsPlumb.draggable(w,{containment:"parent",stop:I=>{e.jsplumbData.nodeList.forEach(L=>{L.nodeId===I.el.id&&(L.left=`${I.pos[0]}px`,L.top=`${I.pos[1]}px`)})}})})}}})})},K=()=>{B.jsPlumb.ready(()=>{e.jsPlumb=B.jsPlumb.getInstance({detachable:!1,Container:"workflow-right"}),e.jsPlumb.fire("jsPlumbDemoLoaded",e.jsPlumb),e.jsPlumb.importDefaults(e.jsplumbDefaults),e.jsPlumb.setSuspendDrawing(!1,!0),Q(),e.jsPlumb.bind("contextmenu",(o,l)=>{l.preventDefault();const{sourceId:n,targetId:s}=o,{clientX:t,clientY:i}=l;e.dropdownLine.x=t,e.dropdownLine.y=i;const a=e.jsplumbData.nodeList.find(m=>m.nodeId===s),d=e.jsplumbData.lineList.find(m=>m.sourceId===n&&m.targetId===s);a.type="line",a.label=d.label,N.value.openContextmenu(a,o)}),e.jsPlumb.bind("beforeDrop",o=>{const{sourceId:l,targetId:n}=o;return e.jsplumbData.lineList.find(t=>t.sourceId===l&&t.targetId===n)?(h.warning("关系已存在，不可重复连接"),!1):!0}),e.jsPlumb.bind("connection",o=>{const{sourceId:l,targetId:n}=o;e.jsplumbData.lineList.push({sourceId:l,targetId:n,label:""})}),e.jsPlumb.bind("connectionDetached",o=>{const{sourceId:l,targetId:n}=o;e.jsplumbData.lineList=e.jsplumbData.lineList.filter(s=>!(s.sourceId==l&&s.targetId==n))})})},Q=()=>{e.jsplumbData.nodeList.forEach(o=>{e.jsPlumb.makeSource(o.nodeId,e.jsplumbMakeSource),e.jsPlumb.makeTarget(o.nodeId,e.jsplumbMakeTarget,E),e.jsPlumb.draggable(o.nodeId,{containment:"parent",stop:l=>{e.jsplumbData.nodeList.forEach(n=>{n.nodeId===l.el.id&&(n.left=`${l.pos[0]}px`,n.top=`${l.pos[1]}px`)})}})}),e.jsplumbData.lineList.forEach(o=>{e.jsPlumb.connect({source:o.sourceId,target:o.targetId,label:o.label},e.jsplumbConnect)})},Z=o=>{o.isOpen=!o.isOpen},ee=o=>{e.jsPlumbNodeIndex=o},oe=(o,l,n)=>{e.jsPlumbNodeIndex=l;const{clientX:s,clientY:t}=n;e.dropdownNode.x=s,e.dropdownNode.y=t,o.type="node",o.label="";let i={};e.leftNavList.forEach(a=>{a.children&&a.children.find(d=>d.id===o.id)&&(i=a.children.find(d=>d.id===o.id))}),o.from=i.form,R.value.openContextmenu(o)},te=o=>{const{contextMenuClickId:l,nodeId:n}=o;if(l===0){const s=e.jsplumbData.nodeList.findIndex(t=>t.nodeId===n);e.jsplumbData.nodeList.splice(s,1),e.jsPlumb.removeAllEndpoints(n),e.jsPlumbNodeIndex=null}else l===1&&j.value.open(o)},ne=(o,l)=>{const{contextMenuClickId:n}=o,{endpoints:s}=l,t=[];s.forEach(i=>{t.push({id:i.element.id,innerText:i.element.innerText})}),o.contact=`${t[0].innerText}(${t[0].id}) => ${t[1].innerText}(${t[1].id})`,n===0?e.jsPlumb.deleteConnection(l):n===1&&j.value.open(o,l)},le=o=>{const{sourceId:l,targetId:n,label:s}=o,t=e.jsPlumb.getConnections({source:l,target:n})[0];t.setLabel(s),!s||s===""?t.addClass("workflow-right-empty-label"):(t.removeClass("workflow-right-empty-label"),t.addClass("workflow-right-label")),e.jsplumbData.lineList.forEach(i=>{i.sourceId===l&&i.targetId===n&&(i.label=s)})},ie=o=>{const{nodeId:l,name:n,icon:s}=o;e.jsplumbData.nodeList.forEach(t=>{t.nodeId===l&&(t.name=n,t.icon=s)}),_(()=>{e.jsPlumb.setSuspendDrawing(!1,!0)})},se=o=>{switch(o){case"help":ae();break;case"download":re();break;case"submit":ce();break;case"copy":de();break;case"del":ue();break;case"fullscreen":pe();break}},ae=()=>{_(()=>{O.value.open()})},re=()=>{const{globalTitle:o}=J.value,l="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e.jsplumbData,null,"	")),n=document.createElement("a");n.setAttribute("href",l),n.setAttribute("download",`${o}工作流.json`),n.click(),n.remove(),h.success("下载成功")},ce=()=>{h.success("数据提交成功")},de=()=>{X(JSON.stringify(e.jsplumbData))},ue=()=>{Ee.confirm("此操作将清空画布，是否继续？","提示",{confirmButtonText:"清空",cancelButtonText:"取消"}).then(()=>{e.jsplumbData.nodeList.forEach(o=>{e.jsPlumb.removeAllEndpoints(o.nodeId)}),_(()=>{e.jsplumbData={nodeList:[],lineList:[]},h.success("清空画布成功")})}).catch(()=>{})},pe=()=>{H.setCurrenFullscreen(!0)};return ge(async()=>{await U(),G(),K(),x(),window.addEventListener("resize",x)}),ke(()=>{window.removeEventListener("resize",x)}),(o,l)=>{const n=z("SvgIcon"),s=z("el-scrollbar");return u(),p("div",Ne,[e.isShow?(u(),p("div",Oe)):_e("",!0),r("div",Me,[r("div",ze,[c(b(W),{onTool:se}),r("div",Ae,[r("div",qe,[c(s,null,{default:je(()=>[(u(!0),p(C,null,D(e.leftNavList,t=>(u(),p("div",{ref_for:!0,ref_key:"leftNavRefs",ref:v,key:t.id,style:A({height:t.isOpen?"auto":"50px",overflow:"hidden"}),class:"workflow-left-id"},[r("div",{class:"workflow-left-title",onClick:i=>Z(t)},[r("span",null,P(t.title),1),c(n,{name:t.isOpen?"ele-ArrowDown":"ele-ArrowRight"},null,8,["name"])],8,Be),(u(!0),p(C,null,D(t.children,(i,a)=>(u(),p("div",{class:"workflow-left-item",key:a,"data-name":i.name,"data-icon":i.icon,"data-id":i.id},[r("div",We,[c(n,{name:i.icon,class:"workflow-icon-drag"},null,8,["name"]),r("div",Ve,P(i.name),1)])],8,$e))),128))],4))),128))]),_:1})]),r("div",{class:"workflow-right",ref_key:"workflowRightRef",ref:S},[(u(!0),p(C,null,D(e.jsplumbData.nodeList,(t,i)=>(u(),p("div",{key:t.nodeId,id:t.nodeId,"data-node-id":t.nodeId,class:q(t.class),style:A({left:t.left,top:t.top}),onClick:a=>ee(i),onContextmenu:xe(a=>oe(t,i,a),["prevent"])},[r("div",{class:q(["workflow-right-box",{"workflow-right-active":e.jsPlumbNodeIndex===i}])},[r("div",He,[c(n,{name:t.icon,class:"workflow-icon-drag"},null,8,["name"]),r("div",Ye,P(t.name),1)])],2)],46,Fe))),128))],512)])])]),c(b(T),{dropdown:e.dropdownNode,ref_key:"contextmenuNodeRef",ref:R,onCurrent:te},null,8,["dropdown"]),c(b(T),{dropdown:e.dropdownLine,ref_key:"contextmenuLineRef",ref:N,onCurrent:ne},null,8,["dropdown"]),c(b(V),{ref_key:"drawerRef",ref:j,onLabel:le,onNode:ie},null,512),c(b(F),{ref_key:"helpRef",ref:O},null,512)])}}});const Eo=De(Xe,[["__scopeId","data-v-15c2f0a8"]]);export{Eo as default};
