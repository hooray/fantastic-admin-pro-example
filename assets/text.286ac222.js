
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d1 as t,a5 as a,f as e,h as n,w as s,bG as i,c5 as l,b as o,D as u,Q as c,i as f,a1 as d,c4 as r}from"./index.40e497bb.js";const x=d("切换"),b=d("清空"),_={__name:"text",setup(i){const d=t();function _(){d.setText("热门"==d.text?"促销":"热门")}function p(){d.setText()}return(t,i)=>{const m=r,k=a,v=l;return o(),e("div",null,[n(m,{title:"文字标记",content:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),n(v,null,{default:s((()=>[u("div",null,"当前 badge 值：'"+c(f(d).text)+"'",1),n(k,{onClick:_},{default:s((()=>[x])),_:1}),n(k,{onClick:p},{default:s((()=>[b])),_:1})])),_:1})])}}};"function"==typeof i&&i(_);export{_ as default};