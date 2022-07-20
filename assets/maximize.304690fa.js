
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as a,a6 as e,f as i,h as n,w as s,bI as t,c7 as m,b as u,a2 as l,R as o,i as c,F as d,c6 as f,I as r}from"./index.d45ed42d.js";const x=d("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),p=d("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),z={__name:"maximize",setup(t){const{proxy:d}=r(),z=a();function g(){z.mainPageMaximizeStatus?d.$mainPage.maximize(!1):d.$mainPage.maximize(!0)}return(a,t)=>{const d=f,r=e,P=m;return u(),i("div",null,[n(d,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(P,null,{default:s((()=>[x,p,n(r,{onClick:g},{default:s((()=>[l(o(c(z).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof t&&t(z);export{z as default};
