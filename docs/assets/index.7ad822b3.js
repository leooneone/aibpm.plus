import{_ as c}from"./_plugin-vue_export-helper.c27b6911.js";import{e as t,f as a,D as n,aa as r,g as l}from"./vue.df334614.js";function i(e){return/^(https?:|mailto:|tel:)/.test(e)}const o={name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""}},computed:{isExternal(){return i(this.iconClass)},iconName(){return`#icon-${this.iconClass}`},svgClass(){return this.className?`svg-icon ${this.className}`:"svg-icon"},styleExternalIcon(){return{mask:`url(${this.iconClass}) no-repeat 50% 50%`,"-webkit-mask":`url(${this.iconClass}) no-repeat 50% 50%`}}}},u=["xlink:href"];function _(e,d,m,p,f,s){return s.isExternal?(t(),a("div",n({key:0,style:s.styleExternalIcon,class:"svg-external-icon svg-icon"},r(e.$listeners)),null,16)):(t(),a("svg",n({key:1,class:s.svgClass,"aria-hidden":"true"},r(e.$listeners)),[l("use",{"xlink:href":s.iconName},null,8,u)],16))}const v=c(o,[["render",_],["__scopeId","data-v-28cacc1c"]]);export{v as default};
