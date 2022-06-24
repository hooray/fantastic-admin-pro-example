
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.648104ba.js";import{d as a,v as t,E as r,a5 as s,cl as i,cm as l,f as o,h as n,w as m,bG as d,c4 as u,c5 as p,b as f,a1 as c,P as b,H as j}from"./index.40e497bb.js";import g from"./index.f8c26e2c.js";/* empty css                   */import"./el-form.c2395b98.js";import"./isEqual.ed3e7cee.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.06bc8164.js";import"./event2.c09267d7.js";import"./index2.34d32a4c.js";import"./directive2.da8a8c57.js";const x=c(" 返回 "),_=c("提交"),$=c("取消"),v=a({name:"PagesExampleManagerDetail"}),E=Object.assign(v,{setup(a){const{proxy:d}=j(),c=t();function v(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralManagerList"}):d.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const d=b,c=r,j=s,k=u,z=i,C=l,G=p,M=e;return f(),o("div",null,[n(k,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:m((()=>[n(j,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(d,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[x])),_:1})])),_:1},8,["title"]),n(G,null,{default:m((()=>[n(C,null,{default:m((()=>[n(z,{md:24,lg:16},{default:m((()=>[n(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(M,null,{default:m((()=>[n(j,{type:"primary",size:"large",onClick:v},{default:m((()=>[_])),_:1}),n(j,{size:"large",onClick:E},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof d&&d(E);export{E as default};
