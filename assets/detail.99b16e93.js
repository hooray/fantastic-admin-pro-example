
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.2e99e518.js";import{d as a,v as t,E as s,a5 as l,cm as r,cn as n,f as i,h as o,w as m,bH as f,c5 as u,c6 as d,b as p,a1 as c,P as b,H as g}from"./index.0358e322.js";import j from"./index.4d4e9f0c.js";import"./el-loading.5e88cf8a.js";import"./el-form.f74fc1bb.js";import"./isEqual.fb89c671.js";import"./el-form-item.3d23d1d6.js";import"./el-input.88480f15.js";import"./event.fa25aaef.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),E=a({name:"PagesExampleDepartmentDetail"}),v=Object.assign(E,{setup(a){const{proxy:f}=g(),c=t();function E(){f.$refs.form.submit((()=>{f.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?f.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):f.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const f=b,c=s,g=l,D=u,k=r,z=n,C=d,h=e;return p(),i("div",null,[o(D,{title:"routerName"==a.$route.name?"新增部门":"编辑部门"},{default:m((()=>[o(g,{size:"default",round:"",onClick:y},{icon:m((()=>[o(c,null,{default:m((()=>[o(f,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),o(C,null,{default:m((()=>[o(z,null,{default:m((()=>[o(k,{md:24,lg:16},{default:m((()=>[o(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:m((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:m((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof f&&f(v);export{v as default};
