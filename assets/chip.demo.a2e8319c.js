
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,z as e,b as l,f as s,D as t,g as n,h as o,w as d,m as u,n as i,P as f,E as c,bG as r,c5 as p,e as _,a1 as m,c4 as y}from"./index.f70e8cdd.js";import{E as h}from"./el-avatar.0d20f445.js";import{i as v}from"./logo.3c3b2e9b.js";const b={class:"content"},g=a({name:"Chip"});var C=e(Object.assign(g,{props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(a,{emit:e})=>(r,p)=>{const _=f,m=c;return l(),s("div",{class:i(["chip",[a.type?`chip--${a.type}`:""]])},[t("div",b,[n(r.$slots,"default",{},void 0,!0),a.closable?(l(),s("span",{key:0,class:"closable",onClick:p[0]||(p[0]=a=>e("close"))},[o(m,null,{default:d((()=>[o(_,{name:"i-ep:close-bold"})])),_:1})])):u("v-if",!0)])],2)}}),[["__scopeId","data-v-9d007394"]]);const w={data:()=>({isShow:!0,avatar:v}),methods:{handleClose(){this.isShow=!1}}},S=m(" 基础纸片 "),j=m("Fa"),k=m(" 头像文字 "),x=m(" 头像图标 "),D=m(" 头像图片 "),E=m(" 关闭按钮 "),I=m(" Primary "),P=m(" Success "),$=m(" Info "),z=m(" Waning "),B=m(" Danger ");"function"==typeof r&&r(w);var F=e(w,[["render",function(a,e,t,n,i,r){const m=y,v=C,b=h,g=f,w=c,F=p;return l(),s("div",null,[o(m,{title:"纸片",content:"Chip"}),o(F,null,{default:d((()=>[o(v,null,{default:d((()=>[S])),_:1}),o(v,null,{default:d((()=>[o(b,null,{default:d((()=>[j])),_:1}),k])),_:1}),o(v,null,{default:d((()=>[o(b,null,{default:d((()=>[o(w,null,{default:d((()=>[o(g,{name:"i-ep:user-filled"})])),_:1})])),_:1}),x])),_:1}),o(v,null,{default:d((()=>[o(b,{src:i.avatar},null,8,["src"]),D])),_:1}),i.isShow?(l(),_(v,{key:0,closable:"",onClose:r.handleClose},{default:d((()=>[E])),_:1},8,["onClose"])):u("v-if",!0)])),_:1}),o(F,null,{default:d((()=>[o(v,{type:"primary"},{default:d((()=>[I])),_:1}),o(v,{type:"success"},{default:d((()=>[P])),_:1}),o(v,{type:"info"},{default:d((()=>[$])),_:1}),o(v,{type:"warning"},{default:d((()=>[z])),_:1}),o(v,{type:"danger"},{default:d((()=>[B])),_:1})])),_:1})])}]]);export{F as default};
