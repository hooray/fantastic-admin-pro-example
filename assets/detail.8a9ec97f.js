
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.5b24d2fa.js";import{d as a,v as t,E as r,a5 as s,cl as l,cm as n,f as i,h as m,w as o,bG as d,c4 as f,c5 as u,b as p,a1 as c,P as b,H as _}from"./index.859d1f2f.js";import g from"./index.740386e1.js";import"./el-loading.264180f4.js";import"./el-form.014673af.js";import"./isEqual.16f09498.js";import"./el-form-item.3d23d1d6.js";import"./el-input.ef35f9c7.js";import"./event2.c09267d7.js";const j=c(" 返回 "),x=c("提交"),$=c("取消"),E=a({name:"PagesExampleDepartmentJobDetail"}),v=Object.assign(E,{setup(a){const{proxy:d}=_(),c=t();function E(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):d.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const d=b,c=r,_=s,D=f,k=l,z=n,C=u,G=e;return p(),i("div",null,[m(D,{title:"routerName"==a.$route.name?"新增职位":"编辑职位"},{default:o((()=>[m(_,{size:"default",round:"",onClick:y},{icon:o((()=>[m(c,null,{default:o((()=>[m(d,{name:"i-ep:arrow-left"})])),_:1})])),default:o((()=>[j])),_:1})])),_:1},8,["title"]),m(C,null,{default:o((()=>[m(z,null,{default:o((()=>[m(k,{md:24,lg:16},{default:o((()=>[m(g,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),m(G,null,{default:o((()=>[m(_,{type:"primary",size:"large",onClick:E},{default:o((()=>[x])),_:1}),m(_,{size:"large",onClick:v},{default:o((()=>[$])),_:1})])),_:1})])}}});"function"==typeof d&&d(v);export{v as default};
