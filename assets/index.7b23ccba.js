
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{x as a,E as t,a7 as n,f as e,h as o,w as s,bP as i,bT as l,bQ as c,b as u,Y as f,L as r}from"./index.45a1a0f2.js";import{E as d}from"./el-notification.5a6f07ae.js";const m=f(" Mock.js 官网 "),p=f("测试：获取用户权限"),k={__name:"index",setup(i){const f=a();function k(){f.getPermissions().then((a=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:a.map((a=>`<p>${a}</p>`)).join("")})}))}return(a,i)=>{const f=r,d=t,_=n,j=l,x=c;return u(),e("div",null,[o(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:s((()=>[o(_,{onClick:i[0]||(i[0]=a=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{icon:s((()=>[o(d,null,{default:s((()=>[o(f,{name:"i-ep:link"})])),_:1})])),default:s((()=>[m])),_:1})])),_:1}),o(x,null,{default:s((()=>[o(_,{onClick:k},{default:s((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
