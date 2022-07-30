
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as a,a7 as s,f as t,h as n,w as e,bP as i,bQ as u,b as l,Y as m,M as o,i as c,G as f,bT as r}from"./index.503ec71c.js";import{u as p}from"./index.708c63a1.js";const x=f("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),d=f("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),b={__name:"maximize",setup(i){const f=a();function b(){p().maximize(!f.mainPageMaximizeStatus)}return(a,i)=>{const p=r,z=s,_=u;return l(),t("div",null,[n(p,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(_,null,{default:e((()=>[x,d,n(z,{onClick:b},{default:e((()=>[m(o(c(f).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof i&&i(b);export{b as default};
