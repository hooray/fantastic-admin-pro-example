
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.4b955742.js";import{d as a,v as t,E as r,a8 as s,co as l,cp as n,f as i,h as o,w as m,bM as u,bN as p,bO as d,b as f,a2 as b,Q as c,O as _}from"./index.14f3ec2e.js";import g from"./index.6a4ecb41.js";import"./el-loading.b73130c8.js";import"./el-form.516181b4.js";import"./isEqual.e7591419.js";import"./el-form-item.2e22de35.js";import"./el-input.36e45e3c.js";import"./event.d298a7ab.js";const j=b(" 返回 "),x=b("提交"),$=b("取消"),E=a({name:"PagesExampleDepartmentJobDetail"}),v=Object.assign(E,{setup(a){const{proxy:u}=_(),b=t();function E(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):u.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const u=c,b=r,_=s,D=p,k=l,z=n,C=d,O=e;return f(),i("div",null,[o(D,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:m((()=>[o(_,{size:"default",round:"",onClick:y},{icon:m((()=>[o(b,null,{default:m((()=>[o(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[j])),_:1})])),_:1},8,["title"]),o(C,null,{default:m((()=>[o(z,null,{default:m((()=>[o(k,{md:24,lg:16},{default:m((()=>[o(g,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),o(O,null,{default:m((()=>[o(_,{type:"primary",size:"large",onClick:E},{default:m((()=>[x])),_:1}),o(_,{size:"large",onClick:v},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof u&&u(v);export{v as default};
