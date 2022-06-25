
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.7ae1df28.js";import{d as a,v as t,E as s,a5 as r,cl as l,cm as i,f as o,h as d,w as n,bG as m,c4 as u,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.f70e8cdd.js";import g from"./index.2090928f.js";/* empty css                   */import"./el-form.ab4d30af.js";import"./isEqual.b5d5d58c.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.1638ccd8.js";import"./event2.c09267d7.js";import"./directive2.09f958e7.js";const x=c(" 返回 "),_=c("提交"),E=c("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:m}=j(),c=t();function $(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):m.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const m=b,c=s,j=r,C=u,F=l,G=i,M=f,k=e;return p(),o("div",null,[d(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:n((()=>[d(j,{size:"default",round:"",onClick:y},{icon:n((()=>[d(c,null,{default:n((()=>[d(m,{name:"i-ep:arrow-left"})])),_:1})])),default:n((()=>[x])),_:1})])),_:1},8,["title"]),d(M,null,{default:n((()=>[d(G,null,{default:n((()=>[d(F,{md:24,lg:16},{default:n((()=>[d(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),d(k,null,{default:n((()=>[d(j,{type:"primary",size:"large",onClick:$},{default:n((()=>[_])),_:1}),d(j,{size:"large",onClick:v},{default:n((()=>[E])),_:1})])),_:1})])}}});"function"==typeof m&&m(v);export{v as default};
