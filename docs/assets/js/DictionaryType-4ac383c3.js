var d=Object.defineProperty;var r=(o,a,e)=>a in o?d(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e;var i=(o,a,e)=>(r(o,typeof a!="symbol"?a+"":a,e),e);import{J as p,K as s}from"./index-aa73a18b.js";class h extends p{constructor(){super(...arguments);i(this,"get",(e,t={})=>this.request({path:"/api/admin/dictionary-type/get",method:"GET",query:e,secure:!0,format:"json",...t}));i(this,"getPage",(e,t={})=>this.request({path:"/api/admin/dictionary-type/get-page",method:"POST",body:e,secure:!0,type:s.Json,format:"json",...t}));i(this,"add",(e,t={})=>this.request({path:"/api/admin/dictionary-type/add",method:"POST",body:e,secure:!0,type:s.Json,format:"json",...t}));i(this,"update",(e,t={})=>this.request({path:"/api/admin/dictionary-type/update",method:"PUT",body:e,secure:!0,type:s.Json,...t}));i(this,"delete",(e,t={})=>this.request({path:"/api/admin/dictionary-type/delete",method:"DELETE",query:e,secure:!0,...t}));i(this,"softDelete",(e,t={})=>this.request({path:"/api/admin/dictionary-type/soft-delete",method:"DELETE",query:e,secure:!0,...t}));i(this,"batchSoftDelete",(e,t={})=>this.request({path:"/api/admin/dictionary-type/batch-soft-delete",method:"PUT",body:e,secure:!0,type:s.Json,...t}))}}export{h as D};
