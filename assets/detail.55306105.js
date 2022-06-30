
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.10ba0d1f.js";import{d as a,v as t,E as r,a5 as s,cl as l,cm as n,f as i,h as m,w as o,bG as d,c4 as u,c5 as p,b as f,a1 as b,P as c,H as _}from"./index.ec00d83b.js";import g from"./index.296db74b.js";import"./el-loading.c2b21edd.js";import"./el-form.ec27b2eb.js";import"./isEqual.2baeb243.js";import"./el-form-item.3d23d1d6.js";import"./el-input.16c29a96.js";import"./event2.c09267d7.js";const j=b(" 返回 "),x=b("提交"),$=b("取消"),E=a({name:"PagesExampleDepartmentJobDetail"}),v=Object.assign(E,{setup(a){const{proxy:d}=_(),b=t();function E(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):d.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const d=c,b=r,_=s,D=u,k=l,z=n,C=p,G=e;return f(),i("div",null,[m(D,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:o((()=>[m(_,{size:"default",round:"",onClick:y},{icon:o((()=>[m(b,null,{default:o((()=>[m(d,{name:"i-ep:arrow-left"})])),_:1})])),default:o((()=>[j])),_:1})])),_:1},8,["title"]),m(C,null,{default:o((()=>[m(z,null,{default:o((()=>[m(k,{md:24,lg:16},{default:o((()=>[m(g,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),m(G,null,{default:o((()=>[m(_,{type:"primary",size:"large",onClick:E},{default:o((()=>[x])),_:1}),m(_,{size:"large",onClick:v},{default:o((()=>[$])),_:1})])),_:1})])}}});"function"==typeof d&&d(v);export{v as default};
