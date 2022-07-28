
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.53f0c69b.js";import{d as a,v as t,E as s,a6 as l,cn as r,co as o,f as i,h as n,w as m,bI as u,c6 as d,c7 as f,b as p,a2 as c,Q as b,I as g}from"./index.a82b8a9a.js";import j from"./index.197d2368.js";import"./el-loading.57736668.js";import"./el-form.da8f4f40.js";import"./isEqual.8b04b388.js";import"./el-form-item.e866842d.js";import"./el-input.20be2c8d.js";import"./event.6c7ea317.js";const _=c(" 返回 "),x=c("提交"),E=c("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:u}=g(),c=t();function $(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):u.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const u=b,c=s,g=l,C=d,F=r,M=o,k=f,z=e;return p(),i("div",null,[n(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:m((()=>[n(g,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),n(k,null,{default:m((()=>[n(M,null,{default:m((()=>[n(F,{md:24,lg:16},{default:m((()=>[n(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:m((()=>[n(g,{type:"primary",size:"large",onClick:$},{default:m((()=>[x])),_:1}),n(g,{size:"large",onClick:v},{default:m((()=>[E])),_:1})])),_:1})])}}});"function"==typeof u&&u(v);export{v as default};
