
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.ce4ab227.js";import{d as e,v as t,E as r,a5 as s,cl as i,cm as l,f as o,h as n,w as m,bG as d,c4 as u,c5 as f,b as p,a1 as c,P as b,H as j}from"./index.8f9b9927.js";import g from"./index.77faf722.js";/* empty css                   */import"./el-form.d1eb6a69.js";import"./isEqual.8a77112b.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.55f6ed3f.js";import"./event2.c09267d7.js";import"./index2.f51c1a29.js";import"./directive2.faacd7ba.js";const x=c(" 返回 "),_=c("提交"),$=c("取消"),v=e({name:"PagesExampleManagerDetail"}),E=Object.assign(v,{setup(e){const{proxy:d}=j(),c=t();function v(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),y()}))}function E(){y()}function y(){c.tabbar.enable&&!c.tabbar.mergeTabs?d.$tabbar.close({name:"pagesExampleGeneralManagerList"}):d.$router.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const d=b,c=r,j=s,k=u,z=i,C=l,G=f,M=a;return p(),o("div",null,[n(k,{title:"routerName"==e.$route.name?"新增管理员":"编辑管理员"},{default:m((()=>[n(j,{size:"default",round:"",onClick:y},{icon:m((()=>[n(c,null,{default:m((()=>[n(d,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[x])),_:1})])),_:1},8,["title"]),n(G,null,{default:m((()=>[n(C,null,{default:m((()=>[n(z,{md:24,lg:16},{default:m((()=>[n(g,{id:e.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(M,null,{default:m((()=>[n(j,{type:"primary",size:"large",onClick:v},{default:m((()=>[_])),_:1}),n(j,{size:"large",onClick:E},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof d&&d(E);export{E as default};
