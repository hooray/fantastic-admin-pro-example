
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d1 as t,a5 as a,f as e,h as n,w as s,bG as c,c5 as i,b as l,D as o,Q as u,i as f,a1 as d,c4 as r}from"./index.fcc8a9ae.js";const x=d("切换"),_=d("清空"),p={__name:"text",setup(c){const d=t();function p(){d.setText("热门"==d.text?"促销":"热门")}function b(){d.setText()}return(t,c)=>{const m=r,k=a,v=i;return l(),e("div",null,[n(m,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),n(v,null,{default:s((()=>[o("div",null,"当前 badge 值：'"+u(f(d).text)+"'",1),n(k,{onClick:p},{default:s((()=>[x])),_:1}),n(k,{onClick:b},{default:s((()=>[_])),_:1})])),_:1})])}}};"function"==typeof c&&c(p);export{p as default};
