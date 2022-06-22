
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.28106544.js";import{d as a,v as t,E as s,a5 as r,cl as l,cm as i,f as o,h as n,w as m,bG as d,c4 as u,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.f897cb43.js";import g from"./index.5009ace2.js";/* empty css                   */import"./el-form.56ec1c81.js";import"./isEqual.93ba6ab4.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.faa56537.js";import"./event2.c09267d7.js";import"./directive2.4531c015.js";const x=c(" 返回 "),_=c("提交"),E=c("取消"),$=a({name:"PagesExampleFormModeDetail"}),v=Object.assign($,{setup(a){const{proxy:d}=j(),c=t();function $(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):d.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const d=b,c=s,j=r,C=u,F=l,G=i,M=f,k=e;return p(),o("div",null,[n(C,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:m((()=>[n(j,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(d,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[x])),_:1})])),_:1},8,["title"]),n(M,null,{default:m((()=>[n(G,null,{default:m((()=>[n(F,{md:24,lg:16},{default:m((()=>[n(g,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(k,null,{default:m((()=>[n(j,{type:"primary",size:"large",onClick:$},{default:m((()=>[_])),_:1}),n(j,{size:"large",onClick:v},{default:m((()=>[E])),_:1})])),_:1})])}}});"function"==typeof d&&d(v);export{v as default};
