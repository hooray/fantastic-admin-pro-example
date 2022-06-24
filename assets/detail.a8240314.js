
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.648104ba.js";import{d as a,v as t,E as s,a5 as r,cl as l,cm as i,f as o,h as n,w as m,bG as d,c4 as u,c5 as p,b as f,a1 as c,P as b,H as j}from"./index.40e497bb.js";import g from"./index.5dbb6615.js";/* empty css                   */import"./el-form.c2395b98.js";import"./isEqual.ed3e7cee.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.06bc8164.js";import"./event2.c09267d7.js";import"./directive2.da8a8c57.js";const x=c(" 返回 "),_=c("提交"),E=c("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:d}=j(),c=t();function $(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):d.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const d=b,c=s,j=r,C=u,F=l,G=i,M=p,k=e;return f(),o("div",null,[n(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:m((()=>[n(j,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(d,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[x])),_:1})])),_:1},8,["title"]),n(M,null,{default:m((()=>[n(G,null,{default:m((()=>[n(F,{md:24,lg:16},{default:m((()=>[n(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(k,null,{default:m((()=>[n(j,{type:"primary",size:"large",onClick:$},{default:m((()=>[_])),_:1}),n(j,{size:"large",onClick:v},{default:m((()=>[E])),_:1})])),_:1})])}}});"function"==typeof d&&d(v);export{v as default};
