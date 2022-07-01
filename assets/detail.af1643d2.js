
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.b8f12ef2.js";import{d as a,v as t,E as r,a5 as s,cm as l,cn as i,f as n,h as o,w as m,bH as u,c5 as f,c6 as d,b as p,a1 as b,P as c,H as g}from"./index.61feeb3e.js";import j from"./index.0a6be067.js";import"./el-loading.68825c60.js";import"./el-form.857b5237.js";import"./isEqual.af6f6594.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import"./el-input.b6838b68.js";import"./event.fa25aaef.js";import"./index.392386ee.js";const _=b(" 返回 "),x=b("提交"),$=b("取消"),E=a({name:"PagesExampleManagerDetail"}),v=Object.assign(E,{setup(a){const{proxy:u}=g(),b=t();function E(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),y()}))}function v(){y()}function y(){b.tabbar.enable&&!b.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralManagerList"}):u.$router.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const u=c,b=r,g=s,k=f,z=l,C=i,M=d,h=e;return p(),n("div",null,[o(k,{title:"routerName"==a.$route.name?"新增管理员":"编辑管理员"},{default:m((()=>[o(g,{size:"default",round:"",onClick:y},{icon:m((()=>[o(b,null,{default:m((()=>[o(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),o(M,null,{default:m((()=>[o(C,null,{default:m((()=>[o(z,{md:24,lg:16},{default:m((()=>[o(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:m((()=>[o(g,{type:"primary",size:"large",onClick:E},{default:m((()=>[x])),_:1}),o(g,{size:"large",onClick:v},{default:m((()=>[$])),_:1})])),_:1})])}}});"function"==typeof u&&u(v);export{v as default};
