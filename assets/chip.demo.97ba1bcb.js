
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,b as l,f as s,J as t,g as n,h as o,w as u,m as d,n as f,Q as i,E as c,bM as r,bO as p,e as _,a2 as m,bN as y}from"./index.14f3ec2e.js";import{E as b}from"./el-avatar.b738680f.js";import{i as h}from"./logo.951d255b.js";const v={class:"content"},g=a({name:"Chip"}),C=e(Object.assign(g,{props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(a,{emit:e})=>(r,p)=>{const _=i,m=c;return l(),s("div",{class:f(["chip",[a.type?`chip--${a.type}`:""]])},[t("div",v,[n(r.$slots,"default",{},void 0,!0),a.closable?(l(),s("span",{key:0,class:"closable",onClick:p[0]||(p[0]=a=>e("close"))},[o(m,null,{default:u((()=>[o(_,{name:"i-ep:close-bold"})])),_:1})])):d("v-if",!0)])],2)}}),[["__scopeId","data-v-97f38da6"]]),w={data:()=>({isShow:!0,avatar:h}),methods:{handleClose(){this.isShow=!1}}},S=m(" 基础纸片 "),j=m("Fa"),k=m(" 头像文字 "),x=m(" 头像图标 "),E=m(" 头像图片 "),I=m(" 关闭按钮 "),O=m(" Primary "),$=m(" Success "),A=m(" Info "),B=m(" Waning "),D=m(" Danger ");"function"==typeof r&&r(w);const F=e(w,[["render",function(a,e,t,n,f,r){const m=y,h=C,v=b,g=i,w=c,F=p;return l(),s("div",null,[o(m,{title:"纸片",content:"Chip"}),o(F,null,{default:u((()=>[o(h,null,{default:u((()=>[S])),_:1}),o(h,null,{default:u((()=>[o(v,null,{default:u((()=>[j])),_:1}),k])),_:1}),o(h,null,{default:u((()=>[o(v,null,{default:u((()=>[o(w,null,{default:u((()=>[o(g,{name:"i-ep:user-filled"})])),_:1})])),_:1}),x])),_:1}),o(h,null,{default:u((()=>[o(v,{src:f.avatar},null,8,["src"]),E])),_:1}),f.isShow?(l(),_(h,{key:0,closable:"",onClose:r.handleClose},{default:u((()=>[I])),_:1},8,["onClose"])):d("v-if",!0)])),_:1}),o(F,null,{default:u((()=>[o(h,{type:"primary"},{default:u((()=>[O])),_:1}),o(h,{type:"success"},{default:u((()=>[$])),_:1}),o(h,{type:"info"},{default:u((()=>[A])),_:1}),o(h,{type:"warning"},{default:u((()=>[B])),_:1}),o(h,{type:"danger"},{default:u((()=>[D])),_:1})])),_:1})])}]]);export{F as default};
