
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{x as n,E as t,a5 as a,f as e,h as s,w as o,bG as i,c4 as c,c5 as l,b as u,a1 as r,P as d}from"./index.8f9b9927.js";import{E as f}from"./index2.c80bbb39.js";const m=r(" Mock.js 官网 "),p=r("测试：获取用户权限"),k={__name:"index",setup(i){const r=n();function k(){r.getPermissions().then((n=>{f({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:n.map((n=>`<p>${n}</p>`)).join("")})}))}return(n,i)=>{const r=d,f=t,_=a,b=c,j=l;return u(),e("div",null,[s(b,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:o((()=>[s(_,{onClick:i[0]||(i[0]=n=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{icon:o((()=>[s(f,null,{default:o((()=>[s(r,{name:"i-ep:link"})])),_:1})])),default:o((()=>[m])),_:1})])),_:1}),s(j,null,{default:o((()=>[s(_,{onClick:k},{default:o((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
