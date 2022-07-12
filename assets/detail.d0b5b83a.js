
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.840fde47.js";import{d as a,v as t,E as r,a6 as s,cn as l,co as i,f as n,h as o,w as u,bI as m,c6 as d,c7 as f,b as p,a2 as c,Q as b,I as g}from"./index.1be4fcb7.js";import j from"./index.c8a99730.js";import"./el-loading.a484b884.js";import"./el-form.1b6a5574.js";import"./isEqual.25fe4591.js";/* empty css                       *//* empty css                        */import"./el-form-item.e866842d.js";import"./el-input.94aad898.js";import"./event.6c7ea317.js";import"./index.198a7d9b.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),E=a({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(a){const{proxy:m}=g(),c=t();function E(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralManagerList"}):m.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const m=b,c=r,g=s,k=d,z=l,C=i,M=f,h=e;return p(),n("div",null,[o(k,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[o(g,{size:"default",round:"",onClick:y},{icon:u((()=>[o(c,null,{default:u((()=>[o(m,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[_])),_:1})])),_:1},8,["title"]),o(M,null,{default:u((()=>[o(C,null,{default:u((()=>[o(z,{md:24,lg:16},{default:u((()=>[o(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:u((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:u((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:u((()=>[$])),_:1})])),_:1})])}}});"function"==typeof m&&m(v);export{v as default};
