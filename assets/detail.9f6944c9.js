
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.4302c321.js";import{d as a,v as t,E as s,a5 as l,cm as r,cn as n,f as i,h as o,w as m,bH as u,c5 as d,c6 as f,b as p,a1 as c,P as b,H as g}from"./index.5043a866.js";import j from"./index.da5f131b.js";import"./el-loading.884e109c.js";import"./el-form.90522072.js";import"./isEqual.4c229d6b.js";import"./el-form-item.3d23d1d6.js";import"./el-input.47be8b34.js";import"./event.a088884a.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),E=a({name:"PagesExampleDepartmentDetail"}),v=Object.assign(E,{setup(a){const{proxy:u}=g(),c=t();function E(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):u.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const u=b,c=s,g=l,D=d,k=r,z=n,C=f,h=e;return p(),i("div",null,[o(D,{title:"routerName"==a.$route.name?"新增部门":"编辑部门"},{default:m((()=>[o(g,{size:"default",round:"",onClick:y},{icon:m((()=>[o(c,null,{default:m((()=>[o(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),o(C,null,{default:m((()=>[o(z,null,{default:m((()=>[o(k,{md:24,lg:16},{default:m((()=>[o(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:m((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:m((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof u&&u(v);export{v as default};
