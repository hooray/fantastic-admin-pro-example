
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,b as l,f as s,F as t,g as n,h as o,w as u,m as d,n as i,Q as f,E as c,bI as r,c7 as p,e as _,a2 as m,c6 as y}from"./index.6746a3d3.js";import{E as h}from"./el-avatar.a6bf1a20.js";import{i as v}from"./logo.3c3b2e9b.js";const b={class:"content"},g=a({name:"Chip"});var C=e(Object.assign(g,{props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(a,{emit:e})=>(r,p)=>{const _=f,m=c;return l(),s("div",{class:i(["chip",[a.type?`chip--${a.type}`:""]])},[t("div",b,[n(r.$slots,"default",{},void 0,!0),a.closable?(l(),s("span",{key:0,class:"closable",onClick:p[0]||(p[0]=a=>e("close"))},[o(m,null,{default:u((()=>[o(_,{name:"i-ep:close-bold"})])),_:1})])):d("v-if",!0)])],2)}}),[["__scopeId","data-v-9d007394"]]);const w={data:()=>({isShow:!0,avatar:v}),methods:{handleClose(){this.isShow=!1}}},S=m(" 基础纸片 "),j=m("Fa"),k=m(" 头像文字 "),I=m(" 头像图标 "),x=m(" 头像图片 "),E=m(" 关闭按钮 "),F=m(" Primary "),$=m(" Success "),A=m(" Info "),B=m(" Waning "),D=m(" Danger ");"function"==typeof r&&r(w);var O=e(w,[["render",function(a,e,t,n,i,r){const m=y,v=C,b=h,g=f,w=c,O=p;return l(),s("div",null,[o(m,{title:"纸片",content:"Chip"}),o(O,null,{default:u((()=>[o(v,null,{default:u((()=>[S])),_:1}),o(v,null,{default:u((()=>[o(b,null,{default:u((()=>[j])),_:1}),k])),_:1}),o(v,null,{default:u((()=>[o(b,null,{default:u((()=>[o(w,null,{default:u((()=>[o(g,{name:"i-ep:user-filled"})])),_:1})])),_:1}),I])),_:1}),o(v,null,{default:u((()=>[o(b,{src:i.avatar},null,8,["src"]),x])),_:1}),i.isShow?(l(),_(v,{key:0,closable:"",onClose:r.handleClose},{default:u((()=>[E])),_:1},8,["onClose"])):d("v-if",!0)])),_:1}),o(O,null,{default:u((()=>[o(v,{type:"primary"},{default:u((()=>[F])),_:1}),o(v,{type:"success"},{default:u((()=>[$])),_:1}),o(v,{type:"info"},{default:u((()=>[A])),_:1}),o(v,{type:"warning"},{default:u((()=>[B])),_:1}),o(v,{type:"danger"},{default:u((()=>[D])),_:1})])),_:1})])}]]);export{O as default};
