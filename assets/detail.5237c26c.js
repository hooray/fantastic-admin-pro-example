
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.d249749d.js";import{d as e,v as t,E as r,a6 as s,cn as l,co as i,f as n,h as o,w as u,bI as d,c6 as m,c7 as f,b as p,a2 as c,Q as b,I as g}from"./index.a9c2df36.js";import j from"./index.e14615e2.js";import"./el-loading.6702a29c.js";import"./el-form.b9638204.js";import"./isEqual.bca6ded6.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import"./el-input.c05163b3.js";import"./event.a088884a.js";import"./index.568d9538.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),E=e({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(e){const{proxy:d}=g(),c=t();function E(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralManagerList"}):d.$router.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const d=b,c=r,g=s,k=m,z=l,C=i,M=f,h=a;return p(),n("div",null,[o(k,{title:"routerName"==e.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[o(g,{size:"default",round:"",onClick:y},{icon:u((()=>[o(c,null,{default:u((()=>[o(d,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[_])),_:1})])),_:1},8,["title"]),o(M,null,{default:u((()=>[o(C,null,{default:u((()=>[o(z,{md:24,lg:16},{default:u((()=>[o(j,{id:e.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:u((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:u((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:u((()=>[$])),_:1})])),_:1})])}}});"function"==typeof d&&d(v);export{v as default};
