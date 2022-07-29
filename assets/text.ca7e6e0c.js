
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d6 as t,a7 as a,f as e,h as n,w as s,bP as i,bQ as l,b as o,G as u,M as f,i as c,Y as d,bT as r}from"./index.45a1a0f2.js";const x=d("切换"),b=d("清空"),_={__name:"text",setup(i){const d=t();function _(){d.setText("热门"==d.text?"促销":"热门")}function p(){d.setText()}return(t,i)=>{const m=r,T=a,k=l;return o(),e("div",null,[n(m,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),n(k,null,{default:s((()=>[u("div",null,"当前 badge 值：'"+f(c(d).text)+"'",1),n(T,{onClick:_},{default:s((()=>[x])),_:1}),n(T,{onClick:p},{default:s((()=>[b])),_:1})])),_:1})])}}};"function"==typeof i&&i(_);export{_ as default};
