
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,B as l,r as t,bH as s,a6 as i,f as o,h as n,w as d,bI as c,K as m,c7 as u,b as p,F as r,a2 as v,c6 as b}from"./index.d45ed42d.js";import{E as f}from"./el-input-number.d3662b88.js";import"./el-input.f0fe7b13.js";import{E as k}from"./el-switch.aa378926.js";import"./event.6c7ea317.js";import"./index.deb3bfb6.js";import"./validator.ad7588b1.js";const x={class:"block"},j={class:"block"},h={class:"block"},A=v("进入同级路由页面"),E=v("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),_=Object.assign(V,{setup(e){const a=m(),c=l(),v=t(!1),V=t(1);function _(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;v.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?c.add(l):c.remove(l)})),(e,a)=>{const l=b,t=k,s=f,c=i,m=u;return p(),o("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),n(m,null,{default:d((()=>[r("div",x,[n(t,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),r("div",j,[n(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),r("div",h,[n(c,{onClick:a[2]||(a[2]=e=>_(1))},{default:d((()=>[A])),_:1}),n(c,{onClick:a[3]||(a[3]=e=>_(2))},{default:d((()=>[E])),_:1})])])),_:1})])}}});"function"==typeof c&&c(_);var D=e(_,[["__scopeId","data-v-44a41434"]]);export{D as default};