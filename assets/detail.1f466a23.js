
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.d249749d.js";import{d as a,v as t,E as r,a6 as s,cn as l,co as n,f as i,h as o,w as m,bI as d,c6 as u,c7 as p,b as f,a2 as c,Q as b,I as _}from"./index.a9c2df36.js";import g from"./index.483163e3.js";import"./el-loading.6702a29c.js";import"./el-form.b9638204.js";import"./isEqual.bca6ded6.js";import"./el-form-item.3d23d1d6.js";import"./el-input.c05163b3.js";import"./event.a088884a.js";const j=c(" 返回 "),x=c("提交"),$=c("取消"),E=a({name:"PagesExampleDepartmentJobDetail"}),v=Object.assign(E,{setup(a){const{proxy:d}=_(),c=t();function E(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):d.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const d=b,c=r,_=s,D=u,k=l,z=n,C=p,h=e;return f(),i("div",null,[o(D,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:m((()=>[o(_,{size:"default",round:"",onClick:y},{icon:m((()=>[o(c,null,{default:m((()=>[o(d,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[j])),_:1})])),_:1},8,["title"]),o(C,null,{default:m((()=>[o(z,null,{default:m((()=>[o(k,{md:24,lg:16},{default:m((()=>[o(g,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:m((()=>[o(_,{type:"primary",size:"large",onClick:E},{default:m((()=>[x])),_:1}),o(_,{size:"large",onClick:v},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof d&&d(v);export{v as default};
