
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.ead637fc.js";import{d as a,v as t,E as s,a5 as r,cl as l,cm as i,f as o,h as n,w as d,bG as m,c4 as u,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.21d85186.js";import g from"./index.4c3a863a.js";/* empty css                   */import"./el-form.b99ad83d.js";import"./isEqual.d160c593.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.4f62e624.js";import"./event2.c09267d7.js";import"./directive2.e5ece35e.js";const x=c(" 返回 "),_=c("提交"),E=c("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:m}=j(),c=t();function $(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):m.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const m=b,c=s,j=r,C=u,F=l,G=i,M=f,k=e;return p(),o("div",null,[n(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:d((()=>[n(j,{size:"default",round:"",onClick:y},{icon:d((()=>[n(c,null,{default:d((()=>[n(m,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[x])),_:1})])),_:1},8,["title"]),n(M,null,{default:d((()=>[n(G,null,{default:d((()=>[n(F,{md:24,lg:16},{default:d((()=>[n(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(k,null,{default:d((()=>[n(j,{type:"primary",size:"large",onClick:$},{default:d((()=>[_])),_:1}),n(j,{size:"large",onClick:v},{default:d((()=>[E])),_:1})])),_:1})])}}});"function"==typeof m&&m(v);export{v as default};
