import{u as Se}from"./vue-i18n.cjs.d9dfdcc6.js";import{d as le,r as z,a8 as ke,O as Me,c as ze,o as Ue,H as Ae,P as Fe,S as v,e as De,f as Le,z as n,m as y,x as B,y as r,g as l,u as t,j as _,n as k,ab as Ee,ac as Ge}from"./vue.72f2672d.js";import{u as Pe}from"./themeConfig.598b93cc.js";import{aj as A}from"./index.0c380c40.js";import{a as He}from"./toolsValidate.7cb139e2.js";import{L as x,S as Re}from"./storage.6b2e7cd0.js";import{c as We}from"./commonFunction.9a87c7b0.js";import{o as Ne}from"./other.3aeebb6f.js";import{e as U}from"./mitt.7f99bbc0.js";import{_ as qe}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";import"./vue.runtime.esm-bundler.2c939456.js";import"./index.41e0794f.js";import"./formatTime.29ac8c52.js";import"./preload-helper.101896b7.js";import"./index.62438508.js";import"./index.41c8da86.js";import"./keepAliveNames.8ff91aac.js";import"./routesList.3cbee093.js";import"./userInfo.8056b3db.js";import"./http-client.193f2c5b.js";import"./index.57385bce.js";import"./loading.3dc30912.js";import"./tagsViewRoutes.1cd20f40.js";import"./tree.d5b28a07.js";import"./index.df3e82f5.js";function F(){return{hexToRgb:u=>{let C="";if(!/^\#?[0-9A-Fa-f]{6}$/.test(u))return A.warning("输入错误的hex"),"";u=u.replace("#",""),C=u.match(/../g);for(let m=0;m<3;m++)C[m]=parseInt(C[m],16);return C},rgbToHex:(u,C,I)=>{let m=/^\d{1,3}$/;if(!m.test(u)||!m.test(C)||!m.test(I))return A.warning("输入错误的rgb颜色值"),"";let c=[u.toString(16),C.toString(16),I.toString(16)];for(let M=0;M<3;M++)c[M].length==1&&(c[M]=`0${c[M]}`);return`#${c.join("")}`},getDarkColor:(u,C)=>{if(!/^\#?[0-9A-Fa-f]{6}$/.test(u))return A.warning("输入错误的hex颜色值"),"";let m=F().hexToRgb(u);for(let c=0;c<3;c++)m[c]=Math.floor(m[c]*(1-C));return F().rgbToHex(m[0],m[1],m[2])},getLightColor:(u,C)=>{if(!/^\#?[0-9A-Fa-f]{6}$/.test(u))return A.warning("输入错误的hex颜色值"),"";let m=F().hexToRgb(u);for(let c=0;c<3;c++)m[c]=Math.floor((255-m[c])*C+m[c]);return F().rgbToHex(m[0],m[1],m[2])}}}const ee=p=>{const V="1.23452384164.123412416";document.getElementById(V)!==null&&document.body.removeChild(document.getElementById(V));const h=document.createElement("canvas");h.width=200,h.height=130;const T=h.getContext("2d");T.rotate(-20*Math.PI/180),T.font="12px Vedana",T.fillStyle="rgba(200, 200, 200, 0.30)",T.textBaseline="middle",T.fillText(p,h.width/10,h.height/2);const u=document.createElement("div");return u.id=V,u.style.pointerEvents="none",u.style.top="0px",u.style.left="0px",u.style.position="fixed",u.style.zIndex="10000000",u.style.width=`${document.documentElement.clientWidth}px`,u.style.height=`${document.documentElement.clientHeight}px`,u.style.background=`url(${h.toDataURL("image/png")}) left top repeat`,document.body.appendChild(u),V},j={set:p=>{let V=ee(p);document.getElementById(V)===null&&(V=ee(p))},del:()=>{let p="1.23452384164.123412416";document.getElementById(p)!==null&&document.body.removeChild(document.getElementById(p))}},$=p=>(Ee("data-v-b810ec61"),p=p(),Ge(),p),Oe={class:"layout-breadcrumb-seting"},je={class:"layout-breadcrumb-seting-bar-flex"},Je={class:"layout-breadcrumb-seting-bar-flex-label"},Ke={class:"layout-breadcrumb-seting-bar-flex-value"},Qe={class:"layout-breadcrumb-seting-bar-flex mt15"},Xe={class:"layout-breadcrumb-seting-bar-flex-label"},Ye={class:"layout-breadcrumb-seting-bar-flex-value"},Ze={class:"layout-breadcrumb-seting-bar-flex"},el={class:"layout-breadcrumb-seting-bar-flex-label"},ll={class:"layout-breadcrumb-seting-bar-flex-value"},al={class:"layout-breadcrumb-seting-bar-flex"},tl={class:"layout-breadcrumb-seting-bar-flex-label"},sl={class:"layout-breadcrumb-seting-bar-flex-value"},ol={class:"layout-breadcrumb-seting-bar-flex mt10"},nl={class:"layout-breadcrumb-seting-bar-flex-label"},rl={class:"layout-breadcrumb-seting-bar-flex-value"},il={class:"layout-breadcrumb-seting-bar-flex"},ul={class:"layout-breadcrumb-seting-bar-flex-label"},dl={class:"layout-breadcrumb-seting-bar-flex-value"},ml={class:"layout-breadcrumb-seting-bar-flex"},cl={class:"layout-breadcrumb-seting-bar-flex-label"},bl={class:"layout-breadcrumb-seting-bar-flex-value"},yl={class:"layout-breadcrumb-seting-bar-flex"},gl={class:"layout-breadcrumb-seting-bar-flex-label"},fl={class:"layout-breadcrumb-seting-bar-flex-value"},vl={class:"layout-breadcrumb-seting-bar-flex mt14"},pl={class:"layout-breadcrumb-seting-bar-flex-label"},hl={class:"layout-breadcrumb-seting-bar-flex-value"},Cl={class:"layout-breadcrumb-seting-bar-flex-label"},_l={class:"layout-breadcrumb-seting-bar-flex-value"},xl={class:"layout-breadcrumb-seting-bar-flex-label"},Vl={class:"layout-breadcrumb-seting-bar-flex-value"},wl={class:"layout-breadcrumb-seting-bar-flex-label"},Bl={class:"layout-breadcrumb-seting-bar-flex-value"},$l={class:"layout-breadcrumb-seting-bar-flex-label"},Tl={class:"layout-breadcrumb-seting-bar-flex-value"},Il={class:"layout-breadcrumb-seting-bar-flex-label"},Sl={class:"layout-breadcrumb-seting-bar-flex-value"},kl={class:"layout-breadcrumb-seting-bar-flex-label"},Ml={class:"layout-breadcrumb-seting-bar-flex-value"},zl={class:"layout-breadcrumb-seting-bar-flex mt15"},Ul={class:"layout-breadcrumb-seting-bar-flex-label"},Al={class:"layout-breadcrumb-seting-bar-flex-value"},Fl={class:"layout-breadcrumb-seting-bar-flex-label"},Dl={class:"layout-breadcrumb-seting-bar-flex-value"},Ll={class:"layout-breadcrumb-seting-bar-flex mt15"},El={class:"layout-breadcrumb-seting-bar-flex-label"},Gl={class:"layout-breadcrumb-seting-bar-flex-value"},Pl={class:"layout-breadcrumb-seting-bar-flex mt11"},Hl={class:"layout-breadcrumb-seting-bar-flex-label"},Rl={class:"layout-breadcrumb-seting-bar-flex-value"},Wl={class:"layout-breadcrumb-seting-bar-flex mt15"},Nl={class:"layout-breadcrumb-seting-bar-flex-label"},ql={class:"layout-breadcrumb-seting-bar-flex-value"},Ol={class:"layout-breadcrumb-seting-bar-flex-label"},jl={class:"layout-breadcrumb-seting-bar-flex-value"},Jl={class:"layout-breadcrumb-seting-bar-flex mt15"},Kl={class:"layout-breadcrumb-seting-bar-flex-label"},Ql={class:"layout-breadcrumb-seting-bar-flex-value"},Xl={class:"layout-breadcrumb-seting-bar-flex mt15"},Yl={class:"layout-breadcrumb-seting-bar-flex-label"},Zl={class:"layout-breadcrumb-seting-bar-flex-value"},ea={class:"layout-breadcrumb-seting-bar-flex mt15"},la={class:"layout-breadcrumb-seting-bar-flex-label"},aa={class:"layout-breadcrumb-seting-bar-flex-value"},ta={class:"layout-breadcrumb-seting-bar-flex mt15"},sa={class:"layout-breadcrumb-seting-bar-flex-label"},oa={class:"layout-breadcrumb-seting-bar-flex-value"},na={class:"layout-breadcrumb-seting-bar-flex-label"},ra={class:"layout-breadcrumb-seting-bar-flex-value"},ia={class:"layout-breadcrumb-seting-bar-flex mt15"},ua={class:"layout-breadcrumb-seting-bar-flex-label"},da={class:"layout-breadcrumb-seting-bar-flex-value"},ma={class:"layout-breadcrumb-seting-bar-flex mt15"},ca={class:"layout-breadcrumb-seting-bar-flex-label"},ba={class:"layout-breadcrumb-seting-bar-flex-value"},ya={class:"layout-breadcrumb-seting-bar-flex mt15"},ga={class:"layout-breadcrumb-seting-bar-flex-label"},fa={class:"layout-breadcrumb-seting-bar-flex-value"},va={class:"layout-breadcrumb-seting-bar-flex mt15"},pa={class:"layout-breadcrumb-seting-bar-flex-label"},ha={class:"layout-breadcrumb-seting-bar-flex-value"},Ca={class:"layout-breadcrumb-seting-bar-flex mt15"},_a={class:"layout-breadcrumb-seting-bar-flex-label"},xa={class:"layout-breadcrumb-seting-bar-flex-value"},Va={class:"layout-breadcrumb-seting-bar-flex mt14"},wa={class:"layout-breadcrumb-seting-bar-flex-label"},Ba={class:"layout-breadcrumb-seting-bar-flex-value"},$a={class:"layout-breadcrumb-seting-bar-flex mt15"},Ta={class:"layout-breadcrumb-seting-bar-flex-label"},Ia={class:"layout-breadcrumb-seting-bar-flex-value"},Sa={class:"layout-breadcrumb-seting-bar-flex mt15"},ka={class:"layout-breadcrumb-seting-bar-flex-label"},Ma={class:"layout-breadcrumb-seting-bar-flex-value"},za={class:"layout-breadcrumb-seting-bar-flex-label"},Ua={class:"layout-breadcrumb-seting-bar-flex-value"},Aa={class:"layout-breadcrumb-seting-bar-flex-label"},Fa={class:"layout-breadcrumb-seting-bar-flex-value"},Da={class:"layout-drawer-content-flex"},La=$(()=>l("aside",{class:"el-aside",style:{width:"20px"}},null,-1)),Ea=$(()=>l("section",{class:"el-container is-vertical"},[l("header",{class:"el-header",style:{height:"10px"}}),l("main",{class:"el-main"})],-1)),Ga=[La,Ea],Pa={class:"layout-tips-box"},Ha={class:"layout-tips-txt"},Ra=$(()=>l("header",{class:"el-header",style:{height:"10px"}},null,-1)),Wa=$(()=>l("section",{class:"el-container"},[l("aside",{class:"el-aside",style:{width:"20px"}}),l("section",{class:"el-container is-vertical"},[l("main",{class:"el-main"})])],-1)),Na=[Ra,Wa],qa={class:"layout-tips-box"},Oa={class:"layout-tips-txt"},ja=$(()=>l("header",{class:"el-header",style:{height:"10px"}},null,-1)),Ja=$(()=>l("section",{class:"el-container"},[l("section",{class:"el-container is-vertical"},[l("main",{class:"el-main"})])],-1)),Ka=[ja,Ja],Qa={class:"layout-tips-box"},Xa={class:"layout-tips-txt"},Ya=$(()=>l("aside",{class:"el-aside-dark",style:{width:"10px"}},null,-1)),Za=$(()=>l("aside",{class:"el-aside",style:{width:"20px"}},null,-1)),et=$(()=>l("section",{class:"el-container is-vertical"},[l("header",{class:"el-header",style:{height:"10px"}}),l("main",{class:"el-main"})],-1)),lt=[Ya,Za,et],at={class:"layout-tips-box"},tt={class:"layout-tips-txt"},st={class:"copy-config"},ot=le({name:"layoutBreadcrumbSeting"}),nt=le({...ot,setup(p,{expose:V}){const h=z(["#F34D37","#409eff","#6954f0","#41b584"]),T=z(["#ffffff","#323233"]),u=z(["#ffffff","#252526"]),C=z(["#ffffff","#333333"]),I="#eaeaea",m="#606266",c=z([I,m]),{locale:M}=Se(),ae=Pe(),{themeConfig:G}=ke(ae),{copyText:te}=We(),{getLightColor:S,getDarkColor:se}=F(),P=Me({isMobile:!1}),J="rgba(0, 0, 0, 0.2)",oe=z([J,S(h.value[0],9/10),S(h.value[1],9/10),S(h.value[2],9/10),S(h.value[3],9/10)]),e=ze(()=>G.value),K=()=>{if(!e.value.primary)return A.warning("全局主题 primary 颜色值不能为空");document.documentElement.style.setProperty("--el-color-primary-dark-2",`${se(e.value.primary,.1)}`),document.documentElement.style.setProperty("--el-color-primary",e.value.primary);for(let s=1;s<=9;s++)document.documentElement.style.setProperty(`--el-color-primary-light-${s}`,`${S(e.value.primary,s/10)}`);O(),b("menuBar")},b=s=>{const a=G.value[s];if(document.documentElement.style.setProperty(`--next-bg-${s}`,a),s==="menuBar"&&document.documentElement.style.setProperty("--next-bg-menuBar-light-1",S(e.value.menuBar,.05)),H(),R(),W(),O(),s==="topBar"||s==="menuBar"||s==="columnsMenuBar"){const f=["#FFFFFF","#FFF","#fff","#ffffff"],g=s+"Color";if(f.includes(a)){if(s==="menuBar"){const i=s+"ActiveColor";e.value[i]=S(e.value.primary,9/10),b(i)}e.value[g]=m}else{if(s==="menuBar"){const i=s+"ActiveColor";e.value[i]=J,b(i)}e.value[g]=I}b(g)}},ne=s=>{document.documentElement.style.setProperty(`--next-color-${s}`,G.value[s])},H=()=>{N(".layout-navbars-breadcrumb-index",e.value.isTopBarColorGradual,e.value.topBar)},R=()=>{N(".layout-container .el-aside",e.value.isMenuBarColorGradual,e.value.menuBar)},W=()=>{N(".layout-container .layout-columns-aside",e.value.isColumnsMenuBarColorGradual,e.value.columnsMenuBar)},N=(s,a,f)=>{setTimeout(()=>{let g=document.querySelector(s);if(!g)return!1;document.documentElement.style.setProperty("--el-menu-bg-color",document.documentElement.style.getPropertyValue("--next-bg-menuBar")),a?g.setAttribute("style",`background:linear-gradient(to bottom left , ${f}, ${S(f,.6)}) !important;`):g.setAttribute("style",""),d()},200)},re=()=>{d()},ie=()=>{O()},ue=()=>{e.value.isFixedHeaderChange=!e.value.isFixedHeader,d()},de=()=>{d(),U.emit("getBreadcrumbIndexSetFilterRoutes")},me=()=>{e.value.isShowLogoChange=!e.value.isShowLogo,d()},ce=()=>{e.value.layout==="classic"&&(e.value.isClassicSplitMenu=!1),d()},be=()=>{U.emit("openOrCloseSortable"),d()},ye=()=>{U.emit("openShareTagsView"),d()},D=s=>{s==="grayscale"?e.value.isGrayscale&&(e.value.isInvert=!1):e.value.isInvert&&(e.value.isGrayscale=!1);const a=s==="grayscale"?`grayscale(${e.value.isGrayscale?1:0})`:`invert(${e.value.isInvert?"80%":"0%"})`;document.body.setAttribute("style",`filter: ${a}`),d()},Q=()=>{const s=document.documentElement;e.value.isIsDark?s.setAttribute("data-theme","dark"):s.setAttribute("data-theme","")},X=()=>{e.value.isWartermark?j.set(e.value.wartermarkText):j.del(),d()},ge=s=>{if(e.value.wartermarkText=He(s),e.value.wartermarkText==="")return!1;e.value.isWartermark&&j.set(e.value.wartermarkText),d()},L=s=>{if(x.set("oldLayout",s),e.value.layout===s)return!1;s==="transverse"&&(e.value.isCollapse=!1),e.value.layout=s,e.value.isDrawer=!1,q()},q=()=>{b("menuBar"),b("menuBarColor"),b("menuBarActiveColor"),b("topBar"),b("topBarColor"),b("columnsMenuBar"),b("columnsMenuBarColor"),ne("columnsMenuBarActiveColor")},fe=()=>{e.value.isFixedHeaderChange=!1,e.value.isShowLogoChange=!1,e.value.isDrawer=!1,d()},ve=()=>{e.value.isDrawer=!0},O=()=>{d(),pe()},d=()=>{x.remove("themeConfig"),x.set("themeConfig",e.value)},pe=()=>{x.set("themeConfigStyle",document.documentElement.style.cssText)},he=()=>{let s=x.get("themeConfig");s.isDrawer=!1,te(JSON.stringify(s)).then(()=>{e.value.isDrawer=!1})},Ce=()=>{x.clear(),Re.clear(),window.location.reload(),x.set("version","0.9.1")},_e=()=>{H(),R(),W()};return Ue(()=>{Ae(()=>{x.get("frequency")||q(),x.set("frequency",1),U.on("layoutMobileResize",s=>{e.value.layout=s.layout,e.value.isDrawer=!1,q(),P.isMobile=Ne.isMobile()}),setTimeout(()=>{K(),e.value.isGrayscale&&D("grayscale"),e.value.isInvert&&D("invert"),e.value.isIsDark&&Q(),X(),x.get("themeConfig")&&(M.value=x.get("themeConfig").globalI18n),_e()},100)})}),Fe(()=>{U.off("layoutMobileResize",()=>{})}),V({openDrawer:ve}),(s,a)=>{const f=v("el-divider"),g=v("el-color-picker"),i=v("el-switch"),xe=v("el-input-number"),Ve=v("el-input"),w=v("el-option"),E=v("el-select"),we=v("el-alert"),Be=v("ele-CopyDocument"),Y=v("el-icon"),Z=v("el-button"),$e=v("ele-RefreshRight"),Te=v("el-scrollbar"),Ie=v("el-drawer");return De(),Le("div",Oe,[n(Ie,{title:s.$t("message.layout.configTitle"),modelValue:t(e).isDrawer,"onUpdate:modelValue":a[49]||(a[49]=o=>t(e).isDrawer=o),direction:"rtl","destroy-on-close":"",size:"260px",onClose:fe},{default:y(()=>[n(Te,{class:"layout-breadcrumb-seting-bar"},{default:y(()=>[n(f,{"content-position":"left"},{default:y(()=>[B(r(s.$t("message.layout.oneTitle")),1)]),_:1}),l("div",je,[l("div",Je,r(s.$t("message.layout.primary")),1),l("div",Ke,[n(g,{modelValue:t(e).primary,"onUpdate:modelValue":a[0]||(a[0]=o=>t(e).primary=o),predefine:h.value,size:"default",onChange:K},null,8,["modelValue","predefine"])])]),l("div",Qe,[l("div",Xe,r(s.$t("message.layout.fourIsDark")),1),l("div",Ye,[n(i,{modelValue:t(e).isIsDark,"onUpdate:modelValue":a[1]||(a[1]=o=>t(e).isIsDark=o),size:"small",onChange:Q},null,8,["modelValue"])])]),n(f,{"content-position":"left"},{default:y(()=>[B(r(s.$t("message.layout.twoTopTitle")),1)]),_:1}),l("div",Ze,[l("div",el,r(s.$t("message.layout.twoTopBar")),1),l("div",ll,[n(g,{modelValue:t(e).topBar,"onUpdate:modelValue":a[2]||(a[2]=o=>t(e).topBar=o),predefine:T.value,size:"default",onChange:a[3]||(a[3]=o=>b("topBar"))},null,8,["modelValue","predefine"])])]),l("div",al,[l("div",tl,r(s.$t("message.layout.twoTopBarColor")),1),l("div",sl,[n(g,{modelValue:t(e).topBarColor,"onUpdate:modelValue":a[4]||(a[4]=o=>t(e).topBarColor=o),predefine:c.value,size:"default",onChange:a[5]||(a[5]=o=>b("topBarColor"))},null,8,["modelValue","predefine"])])]),l("div",ol,[l("div",nl,r(s.$t("message.layout.twoIsTopBarColorGradual")),1),l("div",rl,[n(i,{modelValue:t(e).isTopBarColorGradual,"onUpdate:modelValue":a[6]||(a[6]=o=>t(e).isTopBarColorGradual=o),size:"small",onChange:H},null,8,["modelValue"])])]),n(f,{"content-position":"left"},{default:y(()=>[B(r(s.$t("message.layout.twoMenuTitle")),1)]),_:1}),l("div",il,[l("div",ul,r(s.$t("message.layout.twoMenuBar")),1),l("div",dl,[n(g,{modelValue:t(e).menuBar,"onUpdate:modelValue":a[7]||(a[7]=o=>t(e).menuBar=o),predefine:u.value,size:"default",onChange:a[8]||(a[8]=o=>b("menuBar"))},null,8,["modelValue","predefine"])])]),l("div",ml,[l("div",cl,r(s.$t("message.layout.twoMenuBarColor")),1),l("div",bl,[n(g,{modelValue:t(e).menuBarColor,"onUpdate:modelValue":a[9]||(a[9]=o=>t(e).menuBarColor=o),predefine:c.value,size:"default",onChange:a[10]||(a[10]=o=>b("menuBarColor"))},null,8,["modelValue","predefine"])])]),l("div",yl,[l("div",gl,r(s.$t("message.layout.twoMenuBarActiveColor")),1),l("div",fl,[n(g,{modelValue:t(e).menuBarActiveColor,"onUpdate:modelValue":a[11]||(a[11]=o=>t(e).menuBarActiveColor=o),size:"default","show-alpha":"",predefine:oe.value,onChange:a[12]||(a[12]=o=>b("menuBarActiveColor"))},null,8,["modelValue","predefine"])])]),l("div",vl,[l("div",pl,r(s.$t("message.layout.twoIsMenuBarColorGradual")),1),l("div",hl,[n(i,{modelValue:t(e).isMenuBarColorGradual,"onUpdate:modelValue":a[13]||(a[13]=o=>t(e).isMenuBarColorGradual=o),size:"small",onChange:R},null,8,["modelValue"])])]),n(f,{"content-position":"left",style:_({opacity:t(e).layout!=="columns"?.5:1})},{default:y(()=>[B(r(s.$t("message.layout.twoColumnsTitle")),1)]),_:1},8,["style"]),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:_({opacity:t(e).layout!=="columns"?.5:1})},[l("div",Cl,r(s.$t("message.layout.twoColumnsMenuBar")),1),l("div",_l,[n(g,{modelValue:t(e).columnsMenuBar,"onUpdate:modelValue":a[14]||(a[14]=o=>t(e).columnsMenuBar=o),predefine:C.value,size:"default",onChange:a[15]||(a[15]=o=>b("columnsMenuBar")),disabled:t(e).layout!=="columns"},null,8,["modelValue","predefine","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:_({opacity:t(e).layout!=="columns"?.5:1})},[l("div",xl,r(s.$t("message.layout.twoColumnsMenuBarColor")),1),l("div",Vl,[n(g,{modelValue:t(e).columnsMenuBarColor,"onUpdate:modelValue":a[16]||(a[16]=o=>t(e).columnsMenuBarColor=o),predefine:c.value,size:"default",onChange:a[17]||(a[17]=o=>b("columnsMenuBarColor")),disabled:t(e).layout!=="columns"},null,8,["modelValue","predefine","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt14",style:_({opacity:t(e).layout!=="columns"?.5:1})},[l("div",wl,r(s.$t("message.layout.twoIsColumnsMenuBarColorGradual")),1),l("div",Bl,[n(i,{modelValue:t(e).isColumnsMenuBarColorGradual,"onUpdate:modelValue":a[18]||(a[18]=o=>t(e).isColumnsMenuBarColorGradual=o),size:"small",onChange:W,disabled:t(e).layout!=="columns"},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt14",style:_({opacity:t(e).layout!=="columns"?.5:1})},[l("div",$l,r(s.$t("message.layout.twoIsColumnsMenuHoverPreload")),1),l("div",Tl,[n(i,{modelValue:t(e).isColumnsMenuHoverPreload,"onUpdate:modelValue":a[19]||(a[19]=o=>t(e).isColumnsMenuHoverPreload=o),size:"small",onChange:re,disabled:t(e).layout!=="columns"},null,8,["modelValue","disabled"])])],4),n(f,{"content-position":"left"},{default:y(()=>[B(r(s.$t("message.layout.threeTitle")),1)]),_:1}),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:_({opacity:t(e).layout==="transverse"?.5:1})},[l("div",Il,r(s.$t("message.layout.threeIsCollapse")),1),l("div",Sl,[n(i,{modelValue:t(e).isCollapse,"onUpdate:modelValue":a[20]||(a[20]=o=>t(e).isCollapse=o),disabled:t(e).layout==="transverse",size:"small",onChange:ie},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:t(e).layout==="transverse"?.5:1})},[l("div",kl,r(s.$t("message.layout.threeIsUniqueOpened")),1),l("div",Ml,[n(i,{modelValue:t(e).isUniqueOpened,"onUpdate:modelValue":a[21]||(a[21]=o=>t(e).isUniqueOpened=o),disabled:t(e).layout==="transverse",size:"small",onChange:d},null,8,["modelValue","disabled"])])],4),l("div",zl,[l("div",Ul,r(s.$t("message.layout.threeIsFixedHeader")),1),l("div",Al,[n(i,{modelValue:t(e).isFixedHeader,"onUpdate:modelValue":a[22]||(a[22]=o=>t(e).isFixedHeader=o),size:"small",onChange:ue},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:t(e).layout!=="classic"?.5:1})},[l("div",Fl,r(s.$t("message.layout.threeIsClassicSplitMenu")),1),l("div",Dl,[n(i,{modelValue:t(e).isClassicSplitMenu,"onUpdate:modelValue":a[23]||(a[23]=o=>t(e).isClassicSplitMenu=o),disabled:t(e).layout!=="classic",size:"small",onChange:de},null,8,["modelValue","disabled"])])],4),l("div",Ll,[l("div",El,r(s.$t("message.layout.threeIsLockScreen")),1),l("div",Gl,[n(i,{modelValue:t(e).isLockScreen,"onUpdate:modelValue":a[24]||(a[24]=o=>t(e).isLockScreen=o),size:"small",onChange:d},null,8,["modelValue"])])]),l("div",Pl,[l("div",Hl,r(s.$t("message.layout.threeLockScreenTime")),1),l("div",Rl,[n(xe,{modelValue:t(e).lockScreenTime,"onUpdate:modelValue":a[25]||(a[25]=o=>t(e).lockScreenTime=o),"controls-position":"right",min:1,max:9999,onChange:d,size:"default",style:{width:"90px"}},null,8,["modelValue"])])]),n(f,{"content-position":"left"},{default:y(()=>[B(r(s.$t("message.layout.fourTitle")),1)]),_:1}),l("div",Wl,[l("div",Nl,r(s.$t("message.layout.fourIsShowLogo")),1),l("div",ql,[n(i,{modelValue:t(e).isShowLogo,"onUpdate:modelValue":a[26]||(a[26]=o=>t(e).isShowLogo=o),size:"small",onChange:me},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:t(e).layout==="classic"||t(e).layout==="transverse"?.5:1})},[l("div",Ol,r(s.$t("message.layout.fourIsBreadcrumb")),1),l("div",jl,[n(i,{modelValue:t(e).isBreadcrumb,"onUpdate:modelValue":a[27]||(a[27]=o=>t(e).isBreadcrumb=o),disabled:t(e).layout==="classic"||t(e).layout==="transverse",size:"small",onChange:ce},null,8,["modelValue","disabled"])])],4),l("div",Jl,[l("div",Kl,r(s.$t("message.layout.fourIsBreadcrumbIcon")),1),l("div",Ql,[n(i,{modelValue:t(e).isBreadcrumbIcon,"onUpdate:modelValue":a[28]||(a[28]=o=>t(e).isBreadcrumbIcon=o),size:"small",onChange:d},null,8,["modelValue"])])]),l("div",Xl,[l("div",Yl,r(s.$t("message.layout.fourIsTagsview")),1),l("div",Zl,[n(i,{modelValue:t(e).isTagsview,"onUpdate:modelValue":a[29]||(a[29]=o=>t(e).isTagsview=o),size:"small",onChange:d},null,8,["modelValue"])])]),l("div",ea,[l("div",la,r(s.$t("message.layout.fourIsTagsviewIcon")),1),l("div",aa,[n(i,{modelValue:t(e).isTagsviewIcon,"onUpdate:modelValue":a[30]||(a[30]=o=>t(e).isTagsviewIcon=o),size:"small",onChange:d},null,8,["modelValue"])])]),l("div",ta,[l("div",sa,r(s.$t("message.layout.fourIsCacheTagsView")),1),l("div",oa,[n(i,{modelValue:t(e).isCacheTagsView,"onUpdate:modelValue":a[31]||(a[31]=o=>t(e).isCacheTagsView=o),size:"small",onChange:d},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:P.isMobile?.5:1})},[l("div",na,r(s.$t("message.layout.fourIsSortableTagsView")),1),l("div",ra,[n(i,{modelValue:t(e).isSortableTagsView,"onUpdate:modelValue":a[32]||(a[32]=o=>t(e).isSortableTagsView=o),disabled:!!P.isMobile,size:"small",onChange:be},null,8,["modelValue","disabled"])])],4),l("div",ia,[l("div",ua,r(s.$t("message.layout.fourIsShareTagsView")),1),l("div",da,[n(i,{modelValue:t(e).isShareTagsView,"onUpdate:modelValue":a[33]||(a[33]=o=>t(e).isShareTagsView=o),size:"small",onChange:ye},null,8,["modelValue"])])]),l("div",ma,[l("div",ca,r(s.$t("message.layout.fourIsFooter")),1),l("div",ba,[n(i,{modelValue:t(e).isFooter,"onUpdate:modelValue":a[34]||(a[34]=o=>t(e).isFooter=o),size:"small",onChange:d},null,8,["modelValue"])])]),l("div",ya,[l("div",ga,r(s.$t("message.layout.fourIsGrayscale")),1),l("div",fa,[n(i,{modelValue:t(e).isGrayscale,"onUpdate:modelValue":a[35]||(a[35]=o=>t(e).isGrayscale=o),size:"small",onChange:a[36]||(a[36]=o=>D("grayscale"))},null,8,["modelValue"])])]),l("div",va,[l("div",pa,r(s.$t("message.layout.fourIsInvert")),1),l("div",ha,[n(i,{modelValue:t(e).isInvert,"onUpdate:modelValue":a[37]||(a[37]=o=>t(e).isInvert=o),size:"small",onChange:a[38]||(a[38]=o=>D("invert"))},null,8,["modelValue"])])]),l("div",Ca,[l("div",_a,r(s.$t("message.layout.fourIsWartermark")),1),l("div",xa,[n(i,{modelValue:t(e).isWartermark,"onUpdate:modelValue":a[39]||(a[39]=o=>t(e).isWartermark=o),size:"small",onChange:X},null,8,["modelValue"])])]),l("div",Va,[l("div",wa,r(s.$t("message.layout.fourWartermarkText")),1),l("div",Ba,[n(Ve,{modelValue:t(e).wartermarkText,"onUpdate:modelValue":a[40]||(a[40]=o=>t(e).wartermarkText=o),size:"default",style:{width:"90px"},onInput:ge},null,8,["modelValue"])])]),n(f,{"content-position":"left"},{default:y(()=>[B(r(s.$t("message.layout.fiveTitle")),1)]),_:1}),l("div",$a,[l("div",Ta,r(s.$t("message.layout.fiveTagsStyle")),1),l("div",Ia,[n(E,{modelValue:t(e).tagsStyle,"onUpdate:modelValue":a[41]||(a[41]=o=>t(e).tagsStyle=o),placeholder:"请选择",size:"default",style:{width:"90px"},onChange:d},{default:y(()=>[n(w,{label:"卡片",value:"tags-style-one"}),n(w,{label:"简约",value:"tags-style-four"}),n(w,{label:"圆滑",value:"tags-style-five"})]),_:1},8,["modelValue"])])]),l("div",Sa,[l("div",ka,r(s.$t("message.layout.fiveAnimation")),1),l("div",Ma,[n(E,{modelValue:t(e).animation,"onUpdate:modelValue":a[42]||(a[42]=o=>t(e).animation=o),placeholder:"请选择",placement:"bottom-end",size:"default",style:{width:"90px"},onChange:d},{default:y(()=>[n(w,{label:"右滑动",value:"slide-right"}),n(w,{label:"左滑动",value:"slide-left"}),n(w,{label:"淡入淡出",value:"opacitys"})]),_:1},8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:t(e).layout!=="columns"?.5:1})},[l("div",za,r(s.$t("message.layout.fiveColumnsAsideStyle")),1),l("div",Ua,[n(E,{modelValue:t(e).columnsAsideStyle,"onUpdate:modelValue":a[43]||(a[43]=o=>t(e).columnsAsideStyle=o),placeholder:"请选择",size:"default",style:{width:"90px"},disabled:t(e).layout!=="columns",onChange:d},{default:y(()=>[n(w,{label:"圆角",value:"columns-round"}),n(w,{label:"卡片",value:"columns-card"})]),_:1},8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15 mb27",style:_({opacity:t(e).layout!=="columns"?.5:1})},[l("div",Aa,r(s.$t("message.layout.fiveColumnsAsideLayout")),1),l("div",Fa,[n(E,{modelValue:t(e).columnsAsideLayout,"onUpdate:modelValue":a[44]||(a[44]=o=>t(e).columnsAsideLayout=o),placeholder:"请选择",size:"default",style:{width:"90px"},disabled:t(e).layout!=="columns",onChange:d},{default:y(()=>[n(w,{label:"水平",value:"columns-horizontal"}),n(w,{label:"垂直",value:"columns-vertical"})]),_:1},8,["modelValue","disabled"])])],4),n(f,{"content-position":"left"},{default:y(()=>[B(r(s.$t("message.layout.sixTitle")),1)]),_:1}),l("div",Da,[l("div",{class:"layout-drawer-content-item",onClick:a[45]||(a[45]=o=>L("defaults"))},[l("section",{class:k(["el-container el-circular",{"drawer-layout-active":t(e).layout==="defaults"}])},Ga,2),l("div",{class:k(["layout-tips-warp",{"layout-tips-warp-active":t(e).layout==="defaults"}])},[l("div",Pa,[l("p",Ha,r(s.$t("message.layout.sixDefaults")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:a[46]||(a[46]=o=>L("classic"))},[l("section",{class:k(["el-container is-vertical el-circular",{"drawer-layout-active":t(e).layout==="classic"}])},Na,2),l("div",{class:k(["layout-tips-warp",{"layout-tips-warp-active":t(e).layout==="classic"}])},[l("div",qa,[l("p",Oa,r(s.$t("message.layout.sixClassic")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:a[47]||(a[47]=o=>L("transverse"))},[l("section",{class:k(["el-container is-vertical el-circular",{"drawer-layout-active":t(e).layout==="transverse"}])},Ka,2),l("div",{class:k(["layout-tips-warp",{"layout-tips-warp-active":t(e).layout==="transverse"}])},[l("div",Qa,[l("p",Xa,r(s.$t("message.layout.sixTransverse")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:a[48]||(a[48]=o=>L("columns"))},[l("section",{class:k(["el-container el-circular",{"drawer-layout-active":t(e).layout==="columns"}])},lt,2),l("div",{class:k(["layout-tips-warp",{"layout-tips-warp-active":t(e).layout==="columns"}])},[l("div",at,[l("p",tt,r(s.$t("message.layout.sixColumns")),1)])],2)])]),l("div",st,[n(we,{title:s.$t("message.layout.tipText"),type:"warning",closable:!1},null,8,["title"]),n(Z,{size:"default",class:"copy-config-btn",type:"primary",ref:"copyConfigBtnRef",onClick:he},{default:y(()=>[n(Y,{class:"mr5"},{default:y(()=>[n(Be)]),_:1}),B(" "+r(s.$t("message.layout.copyText")),1)]),_:1},512),n(Z,{size:"default",class:"copy-config-btn-reset",type:"info",onClick:Ce},{default:y(()=>[n(Y,{class:"mr5"},{default:y(()=>[n($e)]),_:1}),B(" "+r(s.$t("message.layout.resetText")),1)]),_:1})])]),_:1})]),_:1},8,["title","modelValue"])])}}});const Ut=qe(nt,[["__scopeId","data-v-b810ec61"]]);export{Ut as default};
