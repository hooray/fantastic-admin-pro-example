
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a7 as a,f as n,h as s,w as t,bP as e,bQ as l,b as o,G as u,Y as f,bT as i}from"./index.503ec71c.js";import{u as r}from"./index.61a5f3ae.js";const c=u("p",null,"访问侧边栏导航里的任意路由，都会在标签栏里自动创建一个标签。",-1),d=u("p",null,"除了在标签栏里操作关闭标签，你也可以使用全局方法关闭当前页面的标签。但如果当前只有一个标签时，则无法关闭。",-1),p=f("关闭当前标签页"),b={__name:"index",setup(e){function u(){r().close("/dashboard")}return(e,f)=>{const r=i,b=a,m=l;return o(),n("div",null,[s(r,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),s(m,null,{default:t((()=>[c,d,s(b,{onClick:u},{default:t((()=>[p])),_:1})])),_:1})])}}};"function"==typeof e&&e(b);export{b as default};
