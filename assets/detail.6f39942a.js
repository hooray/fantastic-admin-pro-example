
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.b8f12ef2.js";import{d as a,v as t,E as r,a5 as s,cm as l,cn as n,f as i,h as m,w as o,bH as u,c5 as f,c6 as d,b as p,a1 as b,P as c,H as _}from"./index.61feeb3e.js";import g from"./index.5a81a042.js";import"./el-loading.68825c60.js";import"./el-form.857b5237.js";import"./isEqual.af6f6594.js";import"./el-form-item.3d23d1d6.js";import"./el-input.b6838b68.js";import"./event.fa25aaef.js";const j=b(" 返回 "),x=b("提交"),$=b("取消"),E=a({name:"PagesExampleDepartmentJobDetail"}),v=Object.assign(E,{setup(a){const{proxy:u}=_(),b=t();function E(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):u.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const u=c,b=r,_=s,D=f,k=l,z=n,C=d,h=e;return p(),i("div",null,[m(D,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:o((()=>[m(_,{size:"default",round:"",onClick:y},{icon:o((()=>[m(b,null,{default:o((()=>[m(u,{name:"i-ep:arrow-left"})])),_:1})])),default:o((()=>[j])),_:1})])),_:1},8,["title"]),m(C,null,{default:o((()=>[m(z,null,{default:o((()=>[m(k,{md:24,lg:16},{default:o((()=>[m(g,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:o((()=>[m(_,{type:"primary",size:"large",onClick:E},{default:o((()=>[x])),_:1}),m(_,{size:"large",onClick:v},{default:o((()=>[$])),_:1})])),_:1})])}}});"function"==typeof u&&u(v);export{v as default};
