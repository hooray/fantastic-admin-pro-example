
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as a,a6 as e,f as i,h as n,w as s,bI as t,c7 as m,b as u,a2 as l,R as o,i as c,F as f,c6 as r,I as x}from"./index.1be4fcb7.js";const p=f("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),d=f("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),z={__name:"maximize",setup(t){const{proxy:f}=x(),z=a();function b(){z.mainPageMaximizeStatus?f.$mainPage.maximize(!1):f.$mainPage.maximize(!0)}return(a,t)=>{const f=r,x=e,g=m;return u(),i("div",null,[n(f,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(g,null,{default:s((()=>[p,d,n(x,{onClick:b},{default:s((()=>[l(o(c(z).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof t&&t(z);export{z as default};
