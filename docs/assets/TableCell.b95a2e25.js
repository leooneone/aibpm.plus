import{_ as W}from"./preload-helper.101896b7.js";import{d as g,a6 as j,O as B,J as h,c as s,S as m,e as _,f as w,z as l,u as i,m as o,t as b,n as k,j as E,x as r}from"./vue.72f2672d.js";const z=["config","colspan","rowspan"],T={key:0,class:"table-cell-command"},V=r("向左插入1列"),P=r("向右插入1列"),L=r("向上插入1行"),H=r("向下插入1行"),J=r("合并右侧单元格"),q=r("合并下方单元格"),F=r("合并整行"),G=r("合并整列"),K=r("拆分成单元格"),Q=r("删除整行"),U=r("删除整列"),X=g({name:"table-cell"}),$=g({...X,props:{activeId:String||Number,item:Object,conf:Object,rowIndex:Number,colIndex:Number,tableData:Object,index:String||Number},setup(d){const e=d,v=j(()=>W(()=>import("./RenderPanel.031fd28e.js"),["assets/RenderPanel.031fd28e.js","assets/RenderPanel.vue_vue_type_script_setup_true_name_render-panel_lang.bbe8e092.js","assets/preload-helper.101896b7.js","assets/vue.72f2672d.js"]));B({isShowMenu:!1});const x=h("onActiveCell"),I=()=>{x(e.rowIndex,e.colIndex)},C=h("IsActiveCell"),p=s(()=>C(e.rowIndex,e.colIndex)),S=s(()=>{var t=e.tableData.children,n=t[e.rowIndex].children[e.colIndex];if(n.colSpan+e.colIndex>=t[e.rowIndex].children.length)return!1;var a=t[e.rowIndex].children[e.colIndex+n.colSpan];return(n.state&2)===(a.state&2)}),R=s(()=>{var t=e.tableData.children,n=t[e.rowIndex].children[e.colIndex];if(n.rowSpan+e.rowIndex>=t.length)return!1;var a=t[e.rowIndex+n.rowSpan].children[e.colIndex];return a.colSpan===n.colSpan}),A=s(()=>{var t=e.tableData.children[e.rowIndex].children[e.colIndex];return t.colSpan>1||t.rowSpan>1}),u=s(()=>{var t=e.tableData.children;if(t[0].children[e.colIndex].rowSpan===t.length)return!1;for(var n=0;n<t.length;n++){var a=t[n].children[e.colIndex];if((a.state&4)!==(t[0].children[e.colIndex].state&4))return!1}return!0}),f=s(()=>{var t=e.tableData.children,n=t[e.rowIndex];if(n.children[0].colSpan===n.children.length)return!1;for(var a=1;a<n.children.length;a++)if((n.children[a].state&2)!==(n.children[0].state&2))return!1;return!0}),y=h("cellOperate"),D=t=>{y(e.rowIndex,e.colIndex,t)};return(t,n)=>{const a=m("ele-Edit"),M=m("el-icon"),c=m("el-dropdown-item"),N=m("el-dropdown-menu"),O=m("el-dropdown");return d.item.state&1?b("",!0):(_(),w("td",{key:0,onClick:I,config:d.item,class:k(d.conf.mode==="designer"?"table-cell-designer":"table-cell"),colspan:d.item.colSpan||1,rowspan:d.item.rowSpan||1,style:E({width:d.item.cellWidth+" !important"||"",height:d.item.cellHeight+" !important"||"","word-break":d.item.wordBreak?"break-all":"normal"})},[l(i(v),{"active-id":d.activeId,list:d.item.children,tag:"div",conf:d.conf,gutter:d.item.gutter,justify:"left"},null,8,["active-id","list","conf","gutter"]),d.conf.mode==="designer"&&i(p)?(_(),w("div",T,[l(O,{trigger:"click",onCommand:D,size:"small"},{dropdown:o(()=>[l(N,null,{default:o(()=>[l(c,{command:"insertLeftCol"},{default:o(()=>[V]),_:1}),l(c,{command:"insertRightCol"},{default:o(()=>[P]),_:1}),l(c,{command:"insertAboveRow"},{default:o(()=>[L]),_:1}),l(c,{command:"insertBelowRow"},{default:o(()=>[H]),_:1}),l(c,{command:"mergeRightCol",disabled:!i(S),divided:""},{default:o(()=>[J]),_:1},8,["disabled"]),l(c,{command:"mergeBelowRow",disabled:!i(R)},{default:o(()=>[q]),_:1},8,["disabled"]),l(c,{command:"mergeWholeRow",disabled:!i(f)},{default:o(()=>[F]),_:1},8,["disabled"]),l(c,{command:"mergeWholeCol",disabled:!i(u)},{default:o(()=>[G]),_:1},8,["disabled"]),l(c,{command:"splitMerged",disabled:!i(A),divided:""},{default:o(()=>[K]),_:1},8,["disabled"]),l(c,{command:"deleteWholeRow",disabled:!i(f),divided:""},{default:o(()=>[Q]),_:1},8,["disabled"]),l(c,{command:"deleteWholeCol",disabled:!i(u)},{default:o(()=>[U]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[l(M,{title:"操作"},{default:o(()=>[l(a)]),_:1})]),_:1})])):b("",!0)],14,z))}}});export{$ as default};
