
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.4f9673db.js";import{d as a,v as t,E as s,a6 as l,cn as r,co as o,f as i,h as n,w as m,bI as d,c6 as u,c7 as f,b as p,a2 as c,Q as b,I as g}from"./index.d45ed42d.js";import j from"./index.65b4470a.js";import"./el-loading.9641417f.js";import"./el-form.58f5e381.js";import"./isEqual.02b698d2.js";import"./el-form-item.e866842d.js";import"./el-input.f0fe7b13.js";import"./event.6c7ea317.js";const _=c(" 返回 "),x=c("提交"),E=c("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:d}=g(),c=t();function $(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):d.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const d=b,c=s,g=l,C=u,F=r,M=o,k=f,z=e;return p(),i("div",null,[n(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:m((()=>[n(g,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(d,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),n(k,null,{default:m((()=>[n(M,null,{default:m((()=>[n(F,{md:24,lg:16},{default:m((()=>[n(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:m((()=>[n(g,{type:"primary",size:"large",onClick:$},{default:m((()=>[x])),_:1}),n(g,{size:"large",onClick:v},{default:m((()=>[E])),_:1})])),_:1})])}}});"function"==typeof d&&d(v);export{v as default};
