import{_ as I}from"./preload-helper.101896b7.js";import{d as M,a6 as $,av as W,a8 as B,r as X,O as Y,c as x,o as Z,S as d,e as ee,f as te,z as t,m as o,x as m,y as b,g as a,u as w,n as oe,j as ne}from"./vue.df334614.js";import{u as se}from"./vue-i18n.cjs.89c19b83.js";import{u as le}from"./userInfo.fd51b0f3.js";import{u as re}from"./themeConfig.daf39624.js";import{o as ae}from"./other.baae8c88.js";import{e as ie}from"./mitt.7f99bbc0.js";import{L as v}from"./storage.6b2e7cd0.js";import{c as ce}from"./http-client.28a8ff7a.js";import{aj as ue}from"./index.390778f0.js";import{x as de}from"./index.c6652de1.js";import{_ as me}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";import"./vue.runtime.esm-bundler.7d88586f.js";import"./index.4621962e.js";import"./index.ca899092.js";import"./index.10529e3b.js";import"./keepAliveNames.ba28b324.js";import"./routesList.80280d49.js";import"./loading.4205d903.js";import"./tagsViewRoutes.b87c241a.js";import"./tree.d5b28a07.js";import"./index.1b76e59f.js";import"./toolsValidate.7cb139e2.js";import"./index.de963593.js";import"./index.f4a20413.js";import"./focus-trap.ccecd842.js";const O=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],f=(()=>{if(typeof document>"u")return!1;const s=O[0],r={};for(const n of O)if((n==null?void 0:n[1])in document){for(const[c,h]of n.entries())r[s[c]]=h;return r}return!1})(),T={change:f.fullscreenchange,error:f.fullscreenerror};let i={request(s=document.documentElement,r){return new Promise((n,p)=>{const c=()=>{i.off("change",c),n()};i.on("change",c);const h=s[f.requestFullscreen](r);h instanceof Promise&&h.then(c).catch(p)})},exit(){return new Promise((s,r)=>{if(!i.isFullscreen){s();return}const n=()=>{i.off("change",n),s()};i.on("change",n);const p=document[f.exitFullscreen]();p instanceof Promise&&p.then(n).catch(r)})},toggle(s,r){return i.isFullscreen?i.exit():i.request(s,r)},onchange(s){i.on("change",s)},onerror(s){i.on("error",s)},on(s,r){const n=T[s];n&&document.addEventListener(n,r,!1)},off(s,r){const n=T[s];n&&document.removeEventListener(n,r,!1)},raw:f};Object.defineProperties(i,{isFullscreen:{get:()=>Boolean(document[f.fullscreenElement])},element:{enumerable:!0,get:()=>document[f.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[f.fullscreenEnabled])}});f||(i={isEnabled:!1});const k=i,fe={class:"layout-navbars-breadcrumb-user-icon"},pe=["title"],_e={class:"layout-navbars-breadcrumb-user-icon"},ge=["title"],be=m("简体中文"),he=m("English"),we=m("繁體中文"),ve=["title"],Ce={class:"layout-navbars-breadcrumb-user-icon"},Se=["title"],Ee={class:"layout-navbars-breadcrumb-user-link"},ke=["src"],Fe={class:"layout-navbars-breadcrumb-user-link-name"},ze=M({name:"layoutBreadcrumbUser"}),ye=M({...ze,setup(s){const r=$(()=>I(()=>import("./userNews.01edffcb.js"),["assets/userNews.01edffcb.js","assets/vue.df334614.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/userNews.96b41f95.css"])),n=$(()=>I(()=>import("./search.a7bab028.js"),["assets/search.a7bab028.js","assets/vue.df334614.js","assets/vue-i18n.cjs.89c19b83.js","assets/_commonjsHelpers.042e6b4d.js","assets/vue.runtime.esm-bundler.7d88586f.js","assets/tagsViewRoutes.b87c241a.js","assets/storage.6b2e7cd0.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/search.6c96958c.css"])),{locale:p,t:c}=se(),h=W(),P=le(),q=re(),{userInfos:S}=B(P),{themeConfig:C}=B(q),y=X(),u=Y({isScreenfull:!1,disabledI18n:"zh-cn",disabledSize:"large"}),L=x(()=>S.value.photo&&`https://demo.aibpm.ailicloud.com/upload/admin/avatar/${S.value.photo}`||"https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500"),N=x(()=>{let e="";const{layout:_,isClassicSplitMenu:l}=C.value;return["defaults","columns"].includes(_)||_==="classic"&&!l?e="1":e="",e}),R=()=>{if(!k.isEnabled)return ue.warning("暂不不支持全屏"),!1;k.toggle(),k.on("change",()=>{k.isFullscreen?u.isScreenfull=!0:u.isScreenfull=!1})},A=()=>{ie.emit("openSetingsDrawer")},D=e=>{e==="logOut"?de({closeOnClickModal:!1,closeOnPressEscape:!1,title:c("message.user.logOutTitle"),message:c("message.user.logOutMessage"),showCancelButton:!0,confirmButtonText:c("message.user.logOutConfirm"),cancelButtonText:c("message.user.logOutCancel"),buttonSize:"default",beforeClose:(_,l,g)=>{_==="confirm"?(l.confirmButtonLoading=!0,l.confirmButtonText=c("message.user.logOutExit"),setTimeout(()=>{g(),setTimeout(()=>{l.confirmButtonLoading=!1},300)},700)):g()}}).then(async()=>{ce()}).catch(()=>{}):e==="wareHouse"?window.open("https://gitee.com/lyt-top/vue-next-admin"):h.push(e)},V=()=>{y.value.openSearch()},U=e=>{v.remove("themeConfig"),C.value.globalComponentSize=e,v.set("themeConfig",C.value),E("globalComponentSize","disabledSize"),window.location.reload()},j=e=>{v.remove("themeConfig"),C.value.globalI18n=e,v.set("themeConfig",C.value),p.value=e,ae.useTitle(),E("globalI18n","disabledI18n")},E=(e,_)=>{u[_]=v.get("themeConfig")[e]};return Z(()=>{v.get("themeConfig")&&(E("globalComponentSize","disabledSize"),E("globalI18n","disabledI18n"))}),(e,_)=>{const l=d("el-dropdown-item"),g=d("el-dropdown-menu"),F=d("el-dropdown"),H=d("ele-Search"),z=d("el-icon"),G=d("ele-Bell"),J=d("el-badge"),K=d("el-popover"),Q=d("ele-ArrowDown");return ee(),te("div",{class:"layout-navbars-breadcrumb-user pr15",style:ne({flex:w(N)})},[t(F,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:U},{dropdown:o(()=>[t(g,null,{default:o(()=>[t(l,{command:"large",disabled:u.disabledSize==="large"},{default:o(()=>[m(b(e.$t("message.user.dropdownLarge")),1)]),_:1},8,["disabled"]),t(l,{command:"default",disabled:u.disabledSize==="default"},{default:o(()=>[m(b(e.$t("message.user.dropdownDefault")),1)]),_:1},8,["disabled"]),t(l,{command:"small",disabled:u.disabledSize==="small"},{default:o(()=>[m(b(e.$t("message.user.dropdownSmall")),1)]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[a("div",fe,[a("i",{class:"iconfont icon-ziti",title:e.$t("message.user.title0")},null,8,pe)])]),_:1}),t(F,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:j},{dropdown:o(()=>[t(g,null,{default:o(()=>[t(l,{command:"zh-cn",disabled:u.disabledI18n==="zh-cn"},{default:o(()=>[be]),_:1},8,["disabled"]),t(l,{command:"en",disabled:u.disabledI18n==="en"},{default:o(()=>[he]),_:1},8,["disabled"]),t(l,{command:"zh-tw",disabled:u.disabledI18n==="zh-tw"},{default:o(()=>[we]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[a("div",_e,[a("i",{class:"iconfont icon-diqiu",title:e.$t("message.user.title1")},null,8,ge)])]),_:1}),a("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:V},[t(z,{title:e.$t("message.user.title2")},{default:o(()=>[t(H)]),_:1},8,["title"])]),a("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:A},[a("i",{class:"icon-skin iconfont",title:e.$t("message.user.title3")},null,8,ve)]),a("div",Ce,[t(K,{placement:"bottom",trigger:"click",transition:"el-zoom-in-top",width:300,persistent:!1},{reference:o(()=>[t(J,{"is-dot":!0},{default:o(()=>[t(z,{title:e.$t("message.user.title4")},{default:o(()=>[t(G)]),_:1},8,["title"])]),_:1})]),default:o(()=>[t(w(r))]),_:1})]),a("div",{class:"layout-navbars-breadcrumb-user-icon mr10",onClick:R},[a("i",{class:oe(["iconfont",u.isScreenfull?"icon-tuichuquanping":"icon-fullscreen"]),title:u.isScreenfull?e.$t("message.user.title6"):e.$t("message.user.title5")},null,10,Se)]),t(F,{"show-timeout":70,"hide-timeout":50,onCommand:D},{dropdown:o(()=>[t(g,null,{default:o(()=>[t(l,{command:"/platform/workbench"},{default:o(()=>[m(b(e.$t("工作台")),1)]),_:1}),t(l,{command:"/personal"},{default:o(()=>[m(b(e.$t("message.user.dropdown2")),1)]),_:1}),t(l,{divided:"",command:"logOut"},{default:o(()=>[m(b(e.$t("message.user.dropdown5")),1)]),_:1})]),_:1})]),default:o(()=>[a("span",Ee,[a("img",{src:w(L),class:"layout-navbars-breadcrumb-user-link-photo mr5"},null,8,ke),a("span",Fe,b(w(S).userName?w(S).userName:""),1),t(z,{class:"el-icon--right"},{default:o(()=>[t(Q)]),_:1})])]),_:1}),t(w(n),{ref_key:"searchRef",ref:y},null,512)],4)}}});const tt=me(ye,[["__scopeId","data-v-6ddc85d8"]]);export{tt as default};
