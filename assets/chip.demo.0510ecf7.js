
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,b as l,f as s,G as t,g as n,h as o,w as u,m as d,n as i,L as f,E as c,bP as r,bQ as p,e as _,Y as m,bT as y}from"./index.503ec71c.js";import{E as h}from"./el-avatar.6d358700.js";import{i as b}from"./logo.951d255b.js";const v={class:"content"},g=a({name:"Chip"}),C=e(Object.assign(g,{props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(a,{emit:e})=>(r,p)=>{const _=f,m=c;return l(),s("div",{class:i(["chip",[a.type?`chip--${a.type}`:""]])},[t("div",v,[n(r.$slots,"default",{},void 0,!0),a.closable?(l(),s("span",{key:0,class:"closable",onClick:p[0]||(p[0]=a=>e("close"))},[o(m,null,{default:u((()=>[o(_,{name:"i-ep:close-bold"})])),_:1})])):d("v-if",!0)])],2)}}),[["__scopeId","data-v-97f38da6"]]),w={data:()=>({isShow:!0,avatar:b}),methods:{handleClose(){this.isShow=!1}}},S=m(" 基础纸片 "),j=m("Fa"),k=m(" 头像文字 "),x=m(" 头像图标 "),E=m(" 头像图片 "),I=m(" 关闭按钮 "),P=m(" Primary "),$=m(" Success "),A=m(" Info "),B=m(" Waning "),D=m(" Danger ");"function"==typeof r&&r(w);const F=e(w,[["render",function(a,e,t,n,i,r){const m=y,b=C,v=h,g=f,w=c,F=p;return l(),s("div",null,[o(m,{title:"纸片",content:"Chip"}),o(F,null,{default:u((()=>[o(b,null,{default:u((()=>[S])),_:1}),o(b,null,{default:u((()=>[o(v,null,{default:u((()=>[j])),_:1}),k])),_:1}),o(b,null,{default:u((()=>[o(v,null,{default:u((()=>[o(w,null,{default:u((()=>[o(g,{name:"i-ep:user-filled"})])),_:1})])),_:1}),x])),_:1}),o(b,null,{default:u((()=>[o(v,{src:i.avatar},null,8,["src"]),E])),_:1}),i.isShow?(l(),_(b,{key:0,closable:"",onClose:r.handleClose},{default:u((()=>[I])),_:1},8,["onClose"])):d("v-if",!0)])),_:1}),o(F,null,{default:u((()=>[o(b,{type:"primary"},{default:u((()=>[P])),_:1}),o(b,{type:"success"},{default:u((()=>[$])),_:1}),o(b,{type:"info"},{default:u((()=>[A])),_:1}),o(b,{type:"warning"},{default:u((()=>[B])),_:1}),o(b,{type:"danger"},{default:u((()=>[D])),_:1})])),_:1})])}]]);export{F as default};
