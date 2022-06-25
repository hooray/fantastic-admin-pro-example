
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.7ae1df28.js";import{d as a,v as t,E as s,a5 as r,cl as l,cm as i,f as n,h as o,w as d,bG as m,c4 as u,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.f70e8cdd.js";import g from"./index.861d8f11.js";/* empty css                   */import"./el-form.ab4d30af.js";import"./isEqual.b5d5d58c.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.1638ccd8.js";import"./event2.c09267d7.js";import"./directive2.09f958e7.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),v=a({name:"PagesExampleDepartmentDetail"}),E=Object.assign(v,{setup(a){const{proxy:m}=j(),c=t();function v(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):m.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const m=b,c=s,j=r,D=u,k=l,z=i,C=f,G=e;return p(),n("div",null,[o(D,{title:"routerName"==a.$route.name?"新增部门":"编辑部门"},{default:d((()=>[o(j,{size:"default",round:"",onClick:y},{icon:d((()=>[o(c,null,{default:d((()=>[o(m,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[_])),_:1})])),_:1},8,["title"]),o(C,null,{default:d((()=>[o(z,null,{default:d((()=>[o(k,{md:24,lg:16},{default:d((()=>[o(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:d((()=>[o(j,{type:"primary",size:"large",onClick:v},{default:d((()=>[x])),_:1}),o(j,{size:"large",onClick:E},{default:d((()=>[$])),_:1})])),_:1})])}}});"function"==typeof m&&m(E);export{E as default};
