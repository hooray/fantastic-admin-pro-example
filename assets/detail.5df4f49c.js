
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.c17d19ad.js";import{d as e,v as t,E as r,a6 as s,cn as l,co as i,f as n,h as o,w as u,bI as m,c6 as d,c7 as f,b as p,a2 as c,Q as b,I as g}from"./index.6746a3d3.js";import j from"./index.351083c4.js";import"./el-loading.56024bc3.js";import"./el-form.65d9f06e.js";import"./isEqual.09ccf48c.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import"./el-input.a13ee31e.js";import"./event.a088884a.js";import"./index.3a869ca6.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),E=e({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(e){const{proxy:m}=g(),c=t();function E(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralManagerList"}):m.$router.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const m=b,c=r,g=s,k=d,z=l,C=i,M=f,h=a;return p(),n("div",null,[o(k,{title:"routerName"==e.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[o(g,{size:"default",round:"",onClick:y},{icon:u((()=>[o(c,null,{default:u((()=>[o(m,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[_])),_:1})])),_:1},8,["title"]),o(M,null,{default:u((()=>[o(C,null,{default:u((()=>[o(z,{md:24,lg:16},{default:u((()=>[o(j,{id:e.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:u((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:u((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:u((()=>[$])),_:1})])),_:1})])}}});"function"==typeof m&&m(v);export{v as default};
