
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.4b955742.js";import{d as a,v as t,E as r,a8 as s,co as l,cp as i,f as o,h as n,w as u,bM as m,bN as d,bO as f,b as p,a2 as b,Q as c,O as g}from"./index.14f3ec2e.js";import j from"./index.fa23407d.js";import"./el-loading.b73130c8.js";import"./el-form.516181b4.js";import"./isEqual.e7591419.js";/* empty css                       *//* empty css                        */import"./el-form-item.2e22de35.js";import"./el-input.36e45e3c.js";import"./event.d298a7ab.js";import"./index.6a6be2fd.js";const _=b(" 返回 "),x=b("提交"),$=b("取消"),E=a({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(a){const{proxy:m}=g(),b=t();function E(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleGeneralManagerList"}):m.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const m=c,b=r,g=s,M=d,k=l,z=i,C=f,O=e;return p(),o("div",null,[n(M,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[n(g,{size:"default",round:"",onClick:y},{icon:u((()=>[n(b,null,{default:u((()=>[n(m,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[_])),_:1})])),_:1},8,["title"]),n(C,null,{default:u((()=>[n(z,null,{default:u((()=>[n(k,{md:24,lg:16},{default:u((()=>[n(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(O,null,{default:u((()=>[n(g,{type:"primary",size:"large",onClick:E},{default:u((()=>[x])),_:1}),n(g,{size:"large",onClick:v},{default:u((()=>[$])),_:1})])),_:1})])}}});"function"==typeof m&&m(v);export{v as default};
