var o=Object.defineProperty;var r=(n,s,e)=>s in n?o(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e;var a=(n,s,e)=>(r(n,typeof s!="symbol"?s+"":s,e),e);import{J as p,K as d}from"./index-0ce5277f.js";class u extends p{constructor(){super(...arguments);a(this,"get",(e,t={})=>this.request({path:"/api/admin/tenant/get",method:"GET",query:e,secure:!0,format:"json",...t}));a(this,"getPage",(e,t={})=>this.request({path:"/api/admin/tenant/get-page",method:"POST",body:e,secure:!0,type:d.Json,format:"json",...t}));a(this,"add",(e,t={})=>this.request({path:"/api/admin/tenant/add",method:"POST",body:e,secure:!0,type:d.Json,format:"json",...t}));a(this,"update",(e,t={})=>this.request({path:"/api/admin/tenant/update",method:"PUT",body:e,secure:!0,type:d.Json,...t}));a(this,"delete",(e,t={})=>this.request({path:"/api/admin/tenant/delete",method:"DELETE",query:e,secure:!0,...t}));a(this,"softDelete",(e,t={})=>this.request({path:"/api/admin/tenant/soft-delete",method:"DELETE",query:e,secure:!0,...t}));a(this,"batchSoftDelete",(e,t={})=>this.request({path:"/api/admin/tenant/batch-soft-delete",method:"PUT",body:e,secure:!0,type:d.Json,...t}));a(this,"setEnable",(e,t={})=>this.request({path:"/api/admin/tenant/set-enable",method:"POST",body:e,secure:!0,type:d.Json,...t}))}}export{u as T};
