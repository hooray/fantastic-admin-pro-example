
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d2 as t,a5 as e,f as a,h as n,w as s,bH as i,c6 as l,b as o,D as u,Q as c,i as f,a1 as d,c5 as r}from"./index.61feeb3e.js";const x=d("切换"),_=d("清空"),b={__name:"text",setup(i){const d=t();function b(){d.setText("热门"==d.text?"促销":"热门")}function p(){d.setText()}return(t,i)=>{const m=r,k=e,v=l;return o(),a("div",null,[n(m,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),n(v,null,{default:s((()=>[u("div",null,"当前 badge 值：'"+c(f(d).text)+"'",1),n(k,{onClick:b},{default:s((()=>[x])),_:1}),n(k,{onClick:p},{default:s((()=>[_])),_:1})])),_:1})])}}};"function"==typeof i&&i(b);export{b as default};
