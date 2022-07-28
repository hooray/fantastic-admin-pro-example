
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.4b955742.js";import{d as a,v as t,E as s,a8 as l,co as r,cp as o,f as i,h as n,w as m,bM as u,bN as d,bO as f,b as p,a2 as b,Q as c,O as g}from"./index.14f3ec2e.js";import j from"./index.0d873d11.js";import"./el-loading.b73130c8.js";import"./el-form.516181b4.js";import"./isEqual.e7591419.js";import"./el-form-item.2e22de35.js";import"./el-input.36e45e3c.js";import"./event.d298a7ab.js";const _=b(" 返回 "),x=b("提交"),E=b("取消"),$=a({name:"PagesExampleFormModeDetail"}),M=Object.assign($,{setup(a){const{proxy:u}=g(),b=t();function $(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),v()}))}function M(){v()}function v(){b.tabbar.enable&&!b.tabbar.mergeTabs?u.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):u.$router.push({name:"pagesExampleGeneralFormModeList"})}return(a,t)=>{const u=c,b=s,g=l,y=d,C=r,F=o,k=f,z=e;return p(),i("div",null,[n(y,{title:"pagesExampleGeneralFormModeCreate"==a.$route.name?"新增":"编辑"},{default:m((()=>[n(g,{size:"default",round:"",onClick:v},{icon:m((()=>[n(b,null,{default:m((()=>[n(u,{name:"i-ep:arrow-left"})])),_:1})])),default:m((()=>[_])),_:1})])),_:1},8,["title"]),n(k,null,{default:m((()=>[n(F,null,{default:m((()=>[n(C,{md:24,lg:16},{default:m((()=>[n(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),n(z,null,{default:m((()=>[n(g,{type:"primary",size:"large",onClick:$},{default:m((()=>[x])),_:1}),n(g,{size:"large",onClick:M},{default:m((()=>[E])),_:1})])),_:1})])}}});"function"==typeof u&&u(M);export{M as default};
