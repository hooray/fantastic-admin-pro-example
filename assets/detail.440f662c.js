
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.5b24d2fa.js";import{d as a,v as t,E as s,a5 as l,cl as r,cm as o,f as i,h as n,w as m,bG as f,c4 as d,c5 as u,b as p,a1 as c,P as b,H as g}from"./index.859d1f2f.js";import j from"./index.2fa7e357.js";import"./el-loading.264180f4.js";import"./el-form.014673af.js";import"./isEqual.16f09498.js";import"./el-form-item.3d23d1d6.js";import"./el-input.ef35f9c7.js";import"./event2.c09267d7.js";const _=c(" 返回 "),x=c("提交"),E=c("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:f}=g(),c=t();function $(){f.$refs.form.submit((()=>{f.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?f.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):f.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const f=b,c=s,g=l,C=d,F=r,G=o,M=u,k=e;return p(),i("div",null,[n(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:m((()=>[n(g,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(f,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),n(M,null,{default:m((()=>[n(G,null,{default:m((()=>[n(F,{md:24,lg:16},{default:m((()=>[n(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(k,null,{default:m((()=>[n(g,{type:"primary",size:"large",onClick:$},{default:m((()=>[x])),_:1}),n(g,{size:"large",onClick:v},{default:m((()=>[E])),_:1})])),_:1})])}}});"function"==typeof f&&f(v);export{v as default};
