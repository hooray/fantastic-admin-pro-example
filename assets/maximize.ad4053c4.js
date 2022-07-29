
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as a,a7 as s,f as t,h as n,w as i,bP as e,bR as u,b as l,Y as m,M as o,i as f,G as r,bQ as b}from"./index.3b0b287f.js";import{u as c}from"./index.17bd3715.js";const d=r("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),p=r("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),x={__name:"maximize",setup(e){const r=a();function x(){c().maximize(!r.mainPageMaximizeStatus)}return(a,e)=>{const c=b,z=s,_=u;return l(),t("div",null,[n(c,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(_,null,{default:i((()=>[d,p,n(z,{onClick:x},{default:i((()=>[m(o(f(r).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof e&&e(x);export{x as default};
