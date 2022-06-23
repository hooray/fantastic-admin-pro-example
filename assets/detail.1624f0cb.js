
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.ee06c9d7.js";import{d as a,v as t,E as r,a5 as s,cl as i,cm as l,f as o,h as n,w as d,bG as m,c4 as u,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.9bf5deda.js";import g from"./index.3a000f99.js";/* empty css                   */import"./el-form.e283294d.js";import"./isEqual.8409e679.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.2043e11a.js";import"./event2.c09267d7.js";import"./index2.dbf2e9f0.js";import"./directive2.09a87fdb.js";const x=c(" 返回 "),_=c("提交"),$=c("取消"),v=a({name:"PagesExampleManagerDetail"}),E=Object.assign(v,{setup(a){const{proxy:m}=j(),c=t();function v(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralManagerList"}):m.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const m=b,c=r,j=s,k=u,z=i,C=l,G=f,M=e;return p(),o("div",null,[n(k,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:d((()=>[n(j,{size:"default",round:"",onClick:y},{icon:d((()=>[n(c,null,{default:d((()=>[n(m,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[x])),_:1})])),_:1},8,["title"]),n(G,null,{default:d((()=>[n(C,null,{default:d((()=>[n(z,{md:24,lg:16},{default:d((()=>[n(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(M,null,{default:d((()=>[n(j,{type:"primary",size:"large",onClick:v},{default:d((()=>[_])),_:1}),n(j,{size:"large",onClick:E},{default:d((()=>[$])),_:1})])),_:1})])}}});"function"==typeof m&&m(E);export{E as default};
