
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a6 as a,f as n,h as s,w as t,bI as e,c7 as l,b as o,F as u,a2 as d,c6 as c,I as r}from"./index.d45ed42d.js";const f=u("p",null,"访问侧边栏导航里的任意路由，都会在标签栏里自动创建一个标签。",-1),i=u("p",null,"除了在标签栏里操作关闭标签，你也可以使用全局方法关闭当前页面的标签。但如果当前只有一个标签时，则无法关闭。",-1),p=d("关闭当前标签页"),b={__name:"index",setup(e){const{proxy:u}=r();function d(){u.$tabbar.close("/dashboard")}return(e,u)=>{const r=c,b=a,x=l;return o(),n("div",null,[s(r,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),s(x,null,{default:t((()=>[f,i,s(b,{onClick:d},{default:t((()=>[p])),_:1})])),_:1})])}}};"function"==typeof e&&e(b);export{b as default};