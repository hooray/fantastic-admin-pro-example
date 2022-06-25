
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.7ae1df28.js";import{d as a,v as t,E as r,a5 as s,cl as i,cm as l,f as n,h as d,w as m,bG as o,c4 as u,c5 as p,b as f,a1 as c,P as b,H as j}from"./index.f70e8cdd.js";import _ from"./index.6e995867.js";/* empty css                   */import"./el-form.ab4d30af.js";import"./isEqual.b5d5d58c.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.1638ccd8.js";import"./event2.c09267d7.js";import"./directive2.09f958e7.js";const g=c(" 返回 "),x=c("提交"),$=c("取消"),v=a({name:"PagesExampleDepartmentJobDetail"}),E=Object.assign(v,{setup(a){const{proxy:o}=j(),c=t();function v(){o.$refs.form.submit((()=>{o.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?o.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):o.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const o=b,c=r,j=s,D=u,k=i,z=l,C=p,G=e;return f(),n("div",null,[d(D,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:m((()=>[d(j,{size:"default",round:"",onClick:y},{icon:m((()=>[d(c,null,{default:m((()=>[d(o,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[g])),_:1})])),_:1},8,["title"]),d(C,null,{default:m((()=>[d(z,null,{default:m((()=>[d(k,{md:24,lg:16},{default:m((()=>[d(_,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),d(G,null,{default:m((()=>[d(j,{type:"primary",size:"large",onClick:v},{default:m((()=>[x])),_:1}),d(j,{size:"large",onClick:E},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof o&&o(E);export{E as default};
