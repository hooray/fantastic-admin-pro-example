
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a5 as a,f as n,h as s,w as t,bG as e,c5 as l,b as o,D as u,a1 as c,c4 as r,H as d}from"./index.95bdb5c1.js";const f=u("p",null,"访问侧边栏导航里的任意路由，都会在标签栏里自动创建一个标签。",-1),i=u("p",null,"除了在标签栏里操作关闭标签，你也可以使用全局方法关闭当前页面的标签。但如果当前只有一个标签时，则无法关闭。",-1),b=c("关闭当前标签页"),p={__name:"index",setup(e){const{proxy:u}=d();function c(){u.$tabbar.close("/dashboard")}return(e,u)=>{const d=r,p=a,x=l;return o(),n("div",null,[s(d,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),s(x,null,{default:t((()=>[f,i,s(p,{onClick:c},{default:t((()=>[b])),_:1})])),_:1})])}}};"function"==typeof e&&e(p);export{p as default};
