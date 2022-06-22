
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.28106544.js";import{d as a,v as t,E as r,a5 as s,cl as i,cm as l,f as n,h as m,w as o,bG as d,c4 as u,c5 as p,b as f,a1 as c,P as b,H as j}from"./index.f897cb43.js";import _ from"./index.fc50097e.js";/* empty css                   */import"./el-form.56ec1c81.js";import"./isEqual.93ba6ab4.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.faa56537.js";import"./event2.c09267d7.js";import"./directive2.4531c015.js";const g=c(" 返回 "),x=c("提交"),$=c("取消"),v=a({name:"PagesExampleDepartmentJobDetail"}),E=Object.assign(v,{setup(a){const{proxy:d}=j(),c=t();function v(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):d.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const d=b,c=r,j=s,D=u,k=i,z=l,C=p,G=e;return f(),n("div",null,[m(D,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:o((()=>[m(j,{size:"default",round:"",onClick:y},{icon:o((()=>[m(c,null,{default:o((()=>[m(d,{name:"i-ep:arrow-left"})])),_:1})])),default:o((()=>[g])),_:1})])),_:1},8,["title"]),m(C,null,{default:o((()=>[m(z,null,{default:o((()=>[m(k,{md:24,lg:16},{default:o((()=>[m(_,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),m(G,null,{default:o((()=>[m(j,{type:"primary",size:"large",onClick:v},{default:o((()=>[x])),_:1}),m(j,{size:"large",onClick:E},{default:o((()=>[$])),_:1})])),_:1})])}}});"function"==typeof d&&d(E);export{E as default};
