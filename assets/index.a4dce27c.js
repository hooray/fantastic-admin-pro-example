
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{x as a,E as t,a6 as n,f as o,h as e,w as s,bI as i,c6 as c,c7 as l,b as u,a2 as r,Q as f}from"./index.a82b8a9a.js";import{E as d}from"./el-notification.8015c006.js";const m=r(" Mock.js 官网 "),p=r("测试：获取用户权限"),k={__name:"index",setup(i){const r=a();function k(){r.getPermissions().then((a=>{d({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:a.map((a=>`<p>${a}</p>`)).join("")})}))}return(a,i)=>{const r=f,d=t,_=n,j=c,x=l;return u(),o("div",null,[e(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:s((()=>[e(_,{onClick:i[0]||(i[0]=a=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{icon:s((()=>[e(d,null,{default:s((()=>[e(r,{name:"i-ep:link"})])),_:1})])),default:s((()=>[m])),_:1})])),_:1}),e(x,null,{default:s((()=>[e(_,{onClick:k},{default:s((()=>[p])),_:1})])),_:1})])}}};"function"==typeof i&&i(k);export{k as default};
