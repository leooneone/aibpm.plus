var d=Object.defineProperty;var o=(i,s,e)=>s in i?d(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e;var a=(i,s,e)=>(o(i,typeof s!="symbol"?s+"":s,e),e);import{J as r,K as p}from"./index-c27e5712.js";class m extends r{constructor(){super(...arguments);a(this,"get",(e,t={})=>this.request({path:"/api/admin/api/get",method:"GET",query:e,secure:!0,format:"json",...t}));a(this,"getList",(e,t={})=>this.request({path:"/api/admin/api/get-list",method:"GET",query:e,secure:!0,format:"json",...t}));a(this,"getPage",(e,t={})=>this.request({path:"/api/admin/api/get-page",method:"POST",body:e,secure:!0,type:p.Json,format:"json",...t}));a(this,"add",(e,t={})=>this.request({path:"/api/admin/api/add",method:"POST",body:e,secure:!0,type:p.Json,format:"json",...t}));a(this,"update",(e,t={})=>this.request({path:"/api/admin/api/update",method:"PUT",body:e,secure:!0,type:p.Json,...t}));a(this,"delete",(e,t={})=>this.request({path:"/api/admin/api/delete",method:"DELETE",query:e,secure:!0,...t}));a(this,"batchDelete",(e,t={})=>this.request({path:"/api/admin/api/batch-delete",method:"PUT",body:e,secure:!0,type:p.Json,...t}));a(this,"softDelete",(e,t={})=>this.request({path:"/api/admin/api/soft-delete",method:"DELETE",query:e,secure:!0,...t}));a(this,"batchSoftDelete",(e,t={})=>this.request({path:"/api/admin/api/batch-soft-delete",method:"PUT",body:e,secure:!0,type:p.Json,...t}));a(this,"sync",(e,t={})=>this.request({path:"/api/admin/api/sync",method:"POST",body:e,secure:!0,type:p.Json,...t}))}}export{m as A};
