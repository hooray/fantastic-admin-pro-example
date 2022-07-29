
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,C as l,r as t,bO as s,a7 as o,f as d,h as i,w as n,bP as c,ag as m,bQ as u,b as p,G as r,Y as v,bT as f}from"./index.45a1a0f2.js";import{E as b}from"./el-input-number.d4425a13.js";import"./el-input.ec9522af.js";import{E as k}from"./el-switch.aad8e22a.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";import"./validator.d7f5f1e8.js";const x={class:"block"},j={class:"block"},h={class:"block"},A=v("进入同级路由页面"),E=v("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),_=Object.assign(V,{setup(e){const a=m(),c=l(),v=t(!1),V=t(1);function _(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;v.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?c.add(l):c.remove(l)})),(e,a)=>{const l=f,t=k,s=b,c=o,m=u;return p(),d("div",null,[i(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),i(m,null,{default:n((()=>[r("div",x,[i(t,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),r("div",j,[i(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),r("div",h,[i(c,{onClick:a[2]||(a[2]=e=>_(1))},{default:n((()=>[A])),_:1}),i(c,{onClick:a[3]||(a[3]=e=>_(2))},{default:n((()=>[E])),_:1})])])),_:1})])}}});"function"==typeof c&&c(_);const g=e(_,[["__scopeId","data-v-d5d46add"]]);export{g as default};
