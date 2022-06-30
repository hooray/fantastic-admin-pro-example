
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.5b24d2fa.js";import{d as a,v as t,E as r,a5 as s,cl as l,cm as i,f as n,h as o,w as f,bG as m,c4 as u,c5 as d,b as p,a1 as c,P as b,H as g}from"./index.859d1f2f.js";import j from"./index.f0548820.js";import"./el-loading.264180f4.js";import"./el-form.014673af.js";import"./isEqual.16f09498.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import"./el-input.ef35f9c7.js";import"./event2.c09267d7.js";import"./index2.060e065c.js";const _=c(" 返回 "),x=c("提交"),$=c("取消"),E=a({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(a){const{proxy:m}=g(),c=t();function E(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralManagerList"}):m.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const m=b,c=r,g=s,k=u,z=l,C=i,G=d,M=e;return p(),n("div",null,[o(k,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:f((()=>[o(g,{size:"default",round:"",onClick:y},{icon:f((()=>[o(c,null,{default:f((()=>[o(m,{name:"i-ep:arrow-left"})])),_:1})])),default:f((()=>[_])),_:1})])),_:1},8,["title"]),o(G,null,{default:f((()=>[o(C,null,{default:f((()=>[o(z,{md:24,lg:16},{default:f((()=>[o(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(M,null,{default:f((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:f((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:f((()=>[$])),_:1})])),_:1})])}}});"function"==typeof m&&m(v);export{v as default};
