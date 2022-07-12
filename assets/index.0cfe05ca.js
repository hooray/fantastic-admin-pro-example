
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{x as t,E as n,a6 as a,f as e,h as o,w as s,bI as i,c6 as c,c7 as l,b as u,a2 as d,Q as r}from"./index.1be4fcb7.js";import{E as f}from"./el-notification.bad2dd0b.js";const m=d(" Mock.js 官网 "),p=d("测试：获取用户权限"),k={__name:"index",setup(i){const d=t();function k(){d.getPermissions().then((t=>{f({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((t=>`<p>${t}</p>`)).join("")})}))}return(t,i)=>{const d=r,f=n,_=a,b=c,j=l;return u(),e("div",null,[o(b,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:s((()=>[o(_,{onClick:i[0]||(i[0]=t=>{return n="http://mockjs.com/",void window.open(n,"top");var n})},{icon:s((()=>[o(f,null,{default:s((()=>[o(d,{name:"i-ep:link"})])),_:1})])),default:s((()=>[m])),_:1})])),_:1}),o(j,null,{default:s((()=>[o(_,{onClick:k},{default:s((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
