var i=Object.defineProperty;var o=(d,s,e)=>s in d?i(d,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[s]=e;var a=(d,s,e)=>(o(d,typeof s!="symbol"?s+"":s,e),e);import{J as r,K as p}from"./index-aa73a18b.js";class m extends r{constructor(){super(...arguments);a(this,"get",(e,t={})=>this.request({path:"/api/admin/dict-type/get",method:"GET",query:e,secure:!0,format:"json",...t}));a(this,"getPage",(e,t={})=>this.request({path:"/api/admin/dict-type/get-page",method:"POST",body:e,secure:!0,type:p.Json,format:"json",...t}));a(this,"add",(e,t={})=>this.request({path:"/api/admin/dict-type/add",method:"POST",body:e,secure:!0,type:p.Json,format:"json",...t}));a(this,"update",(e,t={})=>this.request({path:"/api/admin/dict-type/update",method:"PUT",body:e,secure:!0,type:p.Json,...t}));a(this,"delete",(e,t={})=>this.request({path:"/api/admin/dict-type/delete",method:"DELETE",query:e,secure:!0,...t}));a(this,"softDelete",(e,t={})=>this.request({path:"/api/admin/dict-type/soft-delete",method:"DELETE",query:e,secure:!0,...t}));a(this,"batchSoftDelete",(e,t={})=>this.request({path:"/api/admin/dict-type/batch-soft-delete",method:"PUT",body:e,secure:!0,type:p.Json,...t}))}}export{m as D};
