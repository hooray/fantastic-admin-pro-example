
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d1 as n,E as a,a5 as e,f as s,h as u,w as t,bG as l,c5 as i,b as o,D as c,Q as r,i as d,a1 as f,c4 as m,P as b}from"./index.ec00d83b.js";const p=f(" 1 "),_=f(" 1 "),k={__name:"number",setup(l){const f=n();function k(){f.setNumber(f.number+1)}function v(){f.setNumber(f.number-1)}return(n,l)=>{const x=m,C=b,N=a,P=e,g=i;return o(),s("div",null,[u(x,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),u(g,null,{default:t((()=>[c("div",null,"当前 badge 值："+r(d(f).number),1),u(P,{onClick:k},{icon:t((()=>[u(N,null,{default:t((()=>[u(C,{name:"i-ep:plus"})])),_:1})])),default:t((()=>[p])),_:1}),u(P,{onClick:v},{icon:t((()=>[u(N,null,{default:t((()=>[u(C,{name:"i-ep:minus"})])),_:1})])),default:t((()=>[_])),_:1})])),_:1})])}}};"function"==typeof l&&l(k);export{k as default};