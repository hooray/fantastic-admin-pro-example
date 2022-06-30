
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{x as t,E as a,a5 as n,f as e,h as o,w as s,bG as i,c4 as c,c5 as l,b as f,a1 as u,P as r}from"./index.859d1f2f.js";import{E as d}from"./el-notification.aef98c1a.js";const m=u(" Mock.js 官网 "),p=u("测试：获取用户权限"),k={__name:"index",setup(i){const u=t();function k(){u.getPermissions().then((t=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((t=>`<p>${t}</p>`)).join("")})}))}return(t,i)=>{const u=r,d=a,_=n,j=c,x=l;return f(),e("div",null,[o(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:s((()=>[o(_,{onClick:i[0]||(i[0]=t=>{return a="http://mockjs.com/",void window.open(a,"top");var a})},{icon:s((()=>[o(d,null,{default:s((()=>[o(u,{name:"i-ep:link"})])),_:1})])),default:s((()=>[m])),_:1})])),_:1}),o(x,null,{default:s((()=>[o(_,{onClick:k},{default:s((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
