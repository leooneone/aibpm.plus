// 工作流
var bpm = [{iconName:'start',title:'开始'},
{iconName:'deal',title:'人工'},
{iconName:'approve',title:'审批'},
{iconName:'end',title:'结束'}]; 
 
 var sidebarSeries=['ailicloud','azure']
// 工作流列表
 
window.sidebarBPMList ={}

sidebarSeries.forEach(series=>{

  window.sidebarBPMList[series]= [
    ...bpm.map(v => ({ iconName: v.iconName, title: v.title, fileType: 'svg' })), 
  ]

}) 