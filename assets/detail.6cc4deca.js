
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.fa5d7c32.js";import{d as a,v as t,E as r,a5 as s,cl as i,cm as l,f as o,h as n,w as m,bG as u,c4 as d,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.7b80eec3.js";import g from"./index.c8a518e9.js";/* empty css                   */import"./el-form.31a22a6c.js";import"./isEqual.085c2344.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.58f47f0e.js";import"./event2.c09267d7.js";import"./index2.ef9bbe68.js";import"./directive2.c8b0c8aa.js";const x=c(" 返回 "),_=c("提交"),$=c("取消"),v=a({name:"PagesExampleManagerDetail"}),E=Object.assign(v,{setup(a){const{proxy:u}=j(),c=t();function v(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralManagerList"}):u.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const u=b,c=r,j=s,k=d,z=i,C=l,G=f,M=e;return p(),o("div",null,[n(k,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:m((()=>[n(j,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[x])),_:1})])),_:1},8,["title"]),n(G,null,{default:m((()=>[n(C,null,{default:m((()=>[n(z,{md:24,lg:16},{default:m((()=>[n(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(M,null,{default:m((()=>[n(j,{type:"primary",size:"large",onClick:v},{default:m((()=>[_])),_:1}),n(j,{size:"large",onClick:E},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof u&&u(E);export{E as default};
