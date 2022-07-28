
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,D as l,r as t,bL as s,a8 as o,f as i,h as n,w as d,bM as c,C as m,bO as u,b as p,J as r,a2 as v,bN as b}from"./index.14f3ec2e.js";import{E as f}from"./el-input-number.806ad54a.js";import"./el-input.36e45e3c.js";import{E as k}from"./el-switch.3a769c21.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";import"./validator.4254e813.js";const x={class:"block"},j={class:"block"},h={class:"block"},A=v("进入同级路由页面"),E=v("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),D=Object.assign(V,{setup(e){const a=m(),c=l(),v=t(!1),V=t(1);function D(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;v.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?c.add(l):c.remove(l)})),(e,a)=>{const l=b,t=k,s=f,c=o,m=u;return p(),i("div",null,[n(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),n(m,null,{default:d((()=>[r("div",x,[n(t,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),r("div",j,[n(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),r("div",h,[n(c,{onClick:a[2]||(a[2]=e=>D(1))},{default:d((()=>[A])),_:1}),n(c,{onClick:a[3]||(a[3]=e=>D(2))},{default:d((()=>[E])),_:1})])])),_:1})])}}});"function"==typeof c&&c(D);const _=e(D,[["__scopeId","data-v-d5d46add"]]);export{_ as default};
