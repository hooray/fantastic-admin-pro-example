
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.f3fd87a8.js";import{d as e,v as t,E as r,a6 as s,cn as l,co as i,f as n,h as o,w as u,bI as f,c6 as m,c7 as d,b as p,a2 as b,Q as c,I as g}from"./index.8029e3e3.js";import j from"./index.eb321023.js";import"./el-loading.862b49b1.js";import"./el-form.dfbe894a.js";import"./isEqual.7dc35c5c.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import"./el-input.636fea0c.js";import"./event.a088884a.js";import"./index.ffb0aaf3.js";const _=b(" 返回 "),x=b("提交"),$=b("取消"),E=e({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(e){const{proxy:f}=g(),b=t();function E(){f.$refs.form.submit((()=>{f.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?f.$tabbar.close({name:"pagesExampleGeneralManagerList"}):f.$router.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const f=c,b=r,g=s,k=m,z=l,C=i,M=d,h=a;return p(),n("div",null,[o(k,{title:"routerName"==e.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[o(g,{size:"default",round:"",onClick:y},{icon:u((()=>[o(b,null,{default:u((()=>[o(f,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[_])),_:1})])),_:1},8,["title"]),o(M,null,{default:u((()=>[o(C,null,{default:u((()=>[o(z,{md:24,lg:16},{default:u((()=>[o(j,{id:e.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:u((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:u((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:u((()=>[$])),_:1})])),_:1})])}}});"function"==typeof f&&f(v);export{v as default};
