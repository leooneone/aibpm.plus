var o=Object.defineProperty;var r=(i,a,e)=>a in i?o(i,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[a]=e;var s=(i,a,e)=>(r(i,typeof a!="symbol"?a+"":a,e),e);import{J as h,K as d}from"./index-0ce5277f.js";class m extends h{constructor(){super(...arguments);s(this,"get",(e,t={})=>this.request({path:"/api/admin/view/get",method:"GET",query:e,secure:!0,format:"json",...t}));s(this,"getList",(e,t={})=>this.request({path:"/api/admin/view/get-list",method:"GET",query:e,secure:!0,format:"json",...t}));s(this,"add",(e,t={})=>this.request({path:"/api/admin/view/add",method:"POST",body:e,secure:!0,type:d.Json,format:"json",...t}));s(this,"update",(e,t={})=>this.request({path:"/api/admin/view/update",method:"PUT",body:e,secure:!0,type:d.Json,...t}));s(this,"delete",(e,t={})=>this.request({path:"/api/admin/view/delete",method:"DELETE",query:e,secure:!0,...t}));s(this,"batchDelete",(e,t={})=>this.request({path:"/api/admin/view/batch-delete",method:"PUT",body:e,secure:!0,type:d.Json,...t}));s(this,"softDelete",(e,t={})=>this.request({path:"/api/admin/view/soft-delete",method:"DELETE",query:e,secure:!0,...t}));s(this,"batchSoftDelete",(e,t={})=>this.request({path:"/api/admin/view/batch-soft-delete",method:"PUT",body:e,secure:!0,type:d.Json,...t}));s(this,"sync",(e,t={})=>this.request({path:"/api/admin/view/sync",method:"POST",body:e,secure:!0,type:d.Json,...t}))}}export{m as V};
