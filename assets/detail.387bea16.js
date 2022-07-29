
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.6904eb91.js";import{d as e,v as t,E as r,a8 as s,cn as l,co as i,f as n,h as o,w as u,bN as m,bO as d,bP as f,b as p,a2 as b,Q as c,O as g}from"./index.9587bc3d.js";import j from"./index.a4adeb03.js";import"./el-loading.7b1b970a.js";import"./el-form.569642f0.js";import"./isEqual.f9b5563e.js";/* empty css                       *//* empty css                        */import"./el-form-item.2e22de35.js";import"./el-input.54ba849c.js";import"./event.d298a7ab.js";import"./index.be7b8a6c.js";const _=b(" 返回 "),x=b("提交"),$=b("取消"),E=e({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(e){const{proxy:m}=g(),b=t();function E(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralManagerList"}):m.$router.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const m=c,b=r,g=s,k=d,z=l,C=i,M=f,O=a;return p(),n("div",null,[o(k,{title:"routerName"==e.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[o(g,{size:"default",round:"",onClick:y},{icon:u((()=>[o(b,null,{default:u((()=>[o(m,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[_])),_:1})])),_:1},8,["title"]),o(M,null,{default:u((()=>[o(C,null,{default:u((()=>[o(z,{md:24,lg:16},{default:u((()=>[o(j,{id:e.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(O,null,{default:u((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:u((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:u((()=>[$])),_:1})])),_:1})])}}});"function"==typeof m&&m(v);export{v as default};
