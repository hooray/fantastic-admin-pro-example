
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.6904eb91.js";import{d as a,v as t,E as s,a8 as l,cn as r,co as o,f as i,h as n,w as m,bN as u,bO as d,bP as f,b as p,a2 as b,Q as c,O as g}from"./index.9587bc3d.js";import j from"./index.a69b484e.js";import"./el-loading.7b1b970a.js";import"./el-form.569642f0.js";import"./isEqual.f9b5563e.js";import"./el-form-item.2e22de35.js";import"./el-input.54ba849c.js";import"./event.d298a7ab.js";const _=b(" 返回 "),x=b("提交"),E=b("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:u}=g(),b=t();function $(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):u.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const u=c,b=s,g=l,C=d,F=r,M=o,k=f,z=e;return p(),i("div",null,[n(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:m((()=>[n(g,{size:"default",round:"",onClick:y},{icon:m((()=>[n(b,null,{default:m((()=>[n(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),n(k,null,{default:m((()=>[n(M,null,{default:m((()=>[n(F,{md:24,lg:16},{default:m((()=>[n(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:m((()=>[n(g,{type:"primary",size:"large",onClick:$},{default:m((()=>[x])),_:1}),n(g,{size:"large",onClick:v},{default:m((()=>[E])),_:1})])),_:1})])}}});"function"==typeof u&&u(v);export{v as default};
