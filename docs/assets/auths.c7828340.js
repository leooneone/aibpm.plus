import{d as s,a8 as m,c as f,u as c,h as i,t as l}from"./vue.72f2672d.js";import{u as d}from"./userInfo.8056b3db.js";import"./storage.6b2e7cd0.js";import"./http-client.193f2c5b.js";import"./index.57385bce.js";import"./index.0c380c40.js";import"./index.41e0794f.js";const _=s({name:"auths"}),I=s({..._,props:{value:{type:Array,default:()=>[]}},setup(r){const o=r,a=d(),{userInfos:u}=m(a),n=f(()=>{let t=!1;return u.value.authBtnList.map(e=>{o.value.map(p=>{e===p&&(t=!0)})}),t});return(t,e)=>c(n)?i(t.$slots,"default",{key:0}):l("",!0)}});export{I as default};
