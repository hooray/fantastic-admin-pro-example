
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,A as l,r as t,bG as s,a5 as i,f as o,h as n,w as d,bH as c,J as m,c6 as u,b as p,D as r,a1 as v,c5 as f}from"./index.5043a866.js";import{E as b}from"./el-input-number.194074f2.js";import"./el-input.47be8b34.js";import{E as k}from"./el-switch.c0125537.js";import"./event.a088884a.js";import"./index.d24b3d36.js";import"./validator.d3f16460.js";const x={class:"block"},j={class:"block"},h={class:"block"},A=v("进入同级路由页面"),E=v("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),D=Object.assign(V,{setup(e){const a=m(),c=l(),v=t(!1),V=t(1);function D(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;v.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?c.add(l):c.remove(l)})),(e,a)=>{const l=f,t=k,s=b,c=i,m=u;return p(),o("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),n(m,null,{default:d((()=>[r("div",x,[n(t,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),r("div",j,[n(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),r("div",h,[n(c,{onClick:a[2]||(a[2]=e=>D(1))},{default:d((()=>[A])),_:1}),n(c,{onClick:a[3]||(a[3]=e=>D(2))},{default:d((()=>[E])),_:1})])])),_:1})])}}});"function"==typeof c&&c(D);var _=e(D,[["__scopeId","data-v-44a41434"]]);export{_ as default};