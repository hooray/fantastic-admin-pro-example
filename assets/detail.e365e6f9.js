
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.b82b2794.js";import{d as a,v as t,E as s,a5 as r,cl as l,cm as i,f as n,h as o,w as m,bG as u,c4 as d,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.95bdb5c1.js";import g from"./index.51b51ffc.js";/* empty css                   */import"./el-form.93ee5587.js";import"./isEqual.b26dc892.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.3c86b1b9.js";import"./event2.c09267d7.js";import"./directive2.ffeec753.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),v=a({name:"PagesExampleDepartmentDetail"}),E=Object.assign(v,{setup(a){const{proxy:u}=j(),c=t();function v(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):u.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const u=b,c=s,j=r,D=d,k=l,z=i,C=f,G=e;return p(),n("div",null,[o(D,{title:"routerName"==a.$route.name?"新增部门":"编辑部门"},{default:m((()=>[o(j,{size:"default",round:"",onClick:y},{icon:m((()=>[o(c,null,{default:m((()=>[o(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),o(C,null,{default:m((()=>[o(z,null,{default:m((()=>[o(k,{md:24,lg:16},{default:m((()=>[o(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:m((()=>[o(j,{type:"primary",size:"large",onClick:v},{default:m((()=>[x])),_:1}),o(j,{size:"large",onClick:E},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof u&&u(E);export{E as default};
