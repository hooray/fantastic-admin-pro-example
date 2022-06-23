
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as a,a5 as i,f as n,h as s,w as t,bG as e,c5 as u,b as l,a1 as m,Q as o,i as c,D as f,c4 as r,H as x}from"./index.8f9b9927.js";const p=f("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),d=f("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),z={__name:"maximize",setup(e){const{proxy:f}=x(),z=a();function g(){z.mainPageMaximizeStatus?f.$mainPageMaximize(!1):f.$mainPageMaximize(!0)}return(a,e)=>{const f=r,x=i,M=u;return l(),n("div",null,[s(f,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),s(M,null,{default:t((()=>[p,d,s(x,{onClick:g},{default:t((()=>[m(o(c(z).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof e&&e(z);export{z as default};
