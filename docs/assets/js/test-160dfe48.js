import{E as s}from"./index-aa73a18b.js";function o(i){return/^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(i)}const f=(i,r,e)=>{r||e(),o(r)?e():e(new Error("请输入正确的手机号码"))},n=(i,r,e)=>{r||e(),s(r)?e():e(new Error("请输入正确的邮箱"))};function p(i){return[".png",".jpg",".jpeg",".bmp",".gif",".webp",".psd",".svg",".tiff"].indexOf(i==null?void 0:i.toLowerCase())>-1}export{n as a,o as b,p as i,f as t};
