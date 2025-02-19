var S=Object.defineProperty;var D=(i,t,e)=>t in i?S(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>(D(i,typeof t!="symbol"?t+"":t,e),e);import{a as m,E as R}from"./index.57385bce.js";import{L as p,S as J}from"./storage.6b2e7cd0.js";import{aj as g}from"./index.0c380c40.js";const w="admin-token",y=()=>p.get(w),K=i=>p.set(w,i),k=()=>{p.remove(w),J.remove("token"),window.requests=[],window.location.reload()};var N=(i=>(i.Json="application/json",i.FormData="multipart/form-data",i.UrlEncoded="application/x-www-form-urlencoded",i.Text="text/plain",i))(N||{});const d=new Map,u={target:null,count:0};class A{constructor({securityWorker:t,secure:e,format:s,...r}={}){c(this,"instance");c(this,"securityData",null);c(this,"securityWorker");c(this,"secure");c(this,"format");c(this,"setSecurityData",t=>{this.securityData=t});c(this,"request",async({secure:t,path:e,type:s,query:r,format:l,body:n,showErrorMessage:f=!0,showSuccessMessage:q=!1,login:T=!0,loading:h=!1,loadingOptions:b={},cancelRepeatRequest:j=!1,...v})=>{const L=(typeof t=="boolean"?t:this.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},P=this.mergeRequestParams(v,L),F=l||this.format||void 0;return s==="multipart/form-data"&&n&&n!==null&&typeof n=="object"&&(n=this.createFormData(n)),s==="text/plain"&&n&&n!==null&&typeof n!="string"&&(n=JSON.stringify(n)),this.instance.interceptors.request.use(a=>{this.removePending(a),j&&this.addPending(a),h&&(u.count++,u.count===1&&(u.target=R.service(b)));const o=y();return a.headers.Authorization=`Bearer ${o}`,a},a=>Promise.reject(a)),this.instance.interceptors.response.use(a=>{this.removePending(a.config),h&&this.closeLoading(h);const o=a.data;return o.success?q&&g.success({message:o.msg?o.msg:"操作成功"}):f&&g.error({message:o.msg?o.msg:"操作失败"}),a},async a=>{var o;return a.config&&this.removePending(a.config),h&&this.closeLoading(h),T&&((o=a==null?void 0:a.response)==null?void 0:o.status)===401?this.refreshToken(a.config):(f&&this.errorHandle(a),Promise.reject(a))}),this.instance.request({...P,headers:{...P.headers||{},...s&&s!=="multipart/form-data"?{"Content-Type":s}:{}},params:r,responseType:F,data:n,url:e}).then(a=>a.data)});this.instance=m.create({...r,timeout:6e4,baseURL:r.baseURL||"https://demo.aibpm.ailicloud.com"}),this.secure=e,this.format=s,this.securityWorker=t}mergeRequestParams(t,e){const s=t.method||e&&e.method;return{...this.instance.defaults,...t,...e||{},headers:{...s&&this.instance.defaults.headers[s.toLowerCase()]||{},...t.headers||{},...e&&e.headers||{}}}}stringifyFormItem(t){return typeof t=="object"&&t!==null?JSON.stringify(t):`${t}`}createFormData(t){return Object.keys(t||{}).reduce((e,s)=>{const r=t[s],l=r instanceof Array?r:[r];for(const n of l){const f=n instanceof Blob||n instanceof File;e.append(s,f?n:this.stringifyFormItem(n))}return e},new FormData)}errorHandle(t){if(!t)return;if(m.isCancel(t))return console.error("请求重复已被自动取消："+t.message);let e="";if(t.response)switch(t.response.status){case 302:e="接口重定向";break;case 400:e="参数不正确";break;case 401:e="您还没有登录";break;case 403:e="您没有权限操作";break;case 404:e="请求地址出错："+t.response.config.url;break;case 408:e="请求超时";break;case 409:e="系统已存在相同数据";break;case 500:e="服务器内部错误";break;case 501:e="服务未实现";break;case 502:e="网关错误";break;case 503:e="服务不可用";break;case 504:e="服务暂时无法访问，请稍后再试";break;case 505:e="HTTP版本不受支持";break;default:e="异常问题，请联系网站管理员";break}t.message.includes("timeout")&&(e="请求超时"),t.message.includes("Network")&&(e=window.navigator.onLine?"服务端异常":"您已断网"),e&&g.error({message:e})}async refreshToken(t){const e=y();return e?window.tokenRefreshing?(window.requests=window.requests?window.requests:[],new Promise(s=>{window.requests.push(()=>{s(this.instance(t))})})):(window.tokenRefreshing=!0,this.request({path:"/api/admin/auth/refresh",method:"GET",secure:!0,format:"json",login:!1,query:{token:e}}).then(s=>{var r;if(s!=null&&s.success){const l=s.data.token;return K(l),((r=window.requests)==null?void 0:r.length)>0&&(window.requests.forEach(n=>n()),window.requests=[]),this.instance(t)}else return k(),Promise.reject(s)}).catch(s=>(k(),Promise.reject(s))).finally(()=>{window.tokenRefreshing=!1})):(k(),Promise.reject(t))}addPending(t){const e=this.getPendingKey(t);t.cancelToken=t.cancelToken||new m.CancelToken(s=>{d.has(e)||d.set(e,s)})}removePending(t){const e=this.getPendingKey(t);d.has(e)&&(d.get(e)(e),d.delete(e))}getPendingKey(t){let{data:e}=t;const{url:s,method:r,params:l,headers:n}=t;return typeof e=="string"&&(e=JSON.parse(e)),[s,r,n&&n.Authorization?n.Authorization:"",JSON.stringify(l),JSON.stringify(e)].join("&")}closeLoading(t=!1){t&&u.count>0&&u.count--,u.count===0&&(u.target.close(),u.target=null)}}export{N as C,A as H};
