
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.10ba0d1f.js";import{d as a,v as t,E as r,a5 as s,cl as l,cm as i,f as n,h as o,w as m,bG as u,c4 as d,c5 as f,b as p,a1 as b,P as c,H as g}from"./index.ec00d83b.js";import j from"./index.e190411a.js";import"./el-loading.c2b21edd.js";import"./el-form.ec27b2eb.js";import"./isEqual.2baeb243.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import"./el-input.16c29a96.js";import"./event2.c09267d7.js";import"./index2.8ce8a3fa.js";const _=b(" 返回 "),x=b("提交"),$=b("取消"),E=a({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(a){const{proxy:u}=g(),b=t();function E(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralManagerList"}):u.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const u=c,b=r,g=s,k=d,z=l,C=i,G=f,M=e;return p(),n("div",null,[o(k,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:m((()=>[o(g,{size:"default",round:"",onClick:y},{icon:m((()=>[o(b,null,{default:m((()=>[o(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),o(G,null,{default:m((()=>[o(C,null,{default:m((()=>[o(z,{md:24,lg:16},{default:m((()=>[o(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(M,null,{default:m((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:m((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof u&&u(v);export{v as default};
