
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d3 as t,a6 as a,f as e,h as n,w as s,bI as i,c7 as l,b as o,F as u,R as d,i as c,a2 as f,c6 as r}from"./index.d45ed42d.js";const x=f("切换"),_=f("清空"),p={__name:"text",setup(i){const f=t();function p(){f.setText("热门"==f.text?"促销":"热门")}function b(){f.setText()}return(t,i)=>{const m=r,k=a,v=l;return o(),e("div",null,[n(m,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),n(v,null,{default:s((()=>[u("div",null,"当前 badge 值：'"+d(c(f).text)+"'",1),n(k,{onClick:p},{default:s((()=>[x])),_:1}),n(k,{onClick:b},{default:s((()=>[_])),_:1})])),_:1})])}}};"function"==typeof i&&i(p);export{p as default};
