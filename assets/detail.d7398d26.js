
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.7fe612a1.js";import{d as a,v as s,r as t,E as l,a7 as i,co as r,cp as o,f as n,h as m,w as d,i as f,bP as u,B as p,ag as c,bQ as b,bR as g,b as j,Y as _,L as x}from"./index.3b0b287f.js";import E from"./index.28311ecd.js";import{e as v}from"./eventBus.4bd846bd.js";import{u as k}from"./index.05efcaa3.js";import"./el-loading.55f30254.js";import"./el-form.1e0549a2.js";import"./isEqual.0e04c4ea.js";import"./el-form-item.2e22de35.js";import"./el-input.a46c7a98.js";import"./event.d298a7ab.js";const y=_(" 返回 "),C=_("提交"),F=_("取消"),M=a({name:"PagesExampleFormModeDetail"}),z=Object.assign(M,{setup(a){const u=p(),_=c(),M=s(),z=t();function G(){z.value.submit((()=>{v.emit("get-data-list"),h()}))}function L(){h()}function h(){M.tabbar.enable&&!M.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralFormModeList"}):_.push({name:"pagesExampleGeneralFormModeList"})}return(a,s)=>{const t=x,p=l,c=i,_=b,v=r,k=o,M=g,w=e;return j(),n("div",null,[m(_,{title:"pagesExampleGeneralFormModeCreate"==f(u).name?"新增":"编辑"},{default:d((()=>[m(c,{size:"default",round:"",onClick:h},{icon:d((()=>[m(p,null,{default:d((()=>[m(t,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[y])),_:1})])),_:1},8,["title"]),m(M,null,{default:d((()=>[m(k,null,{default:d((()=>[m(v,{md:24,lg:16},{default:d((()=>[m(E,{id:f(u).params.id,ref_key:"formRef",ref:z},null,8,["id"])])),_:1})])),_:1})])),_:1}),m(w,null,{default:d((()=>[m(c,{type:"primary",size:"large",onClick:G},{default:d((()=>[C])),_:1}),m(c,{size:"large",onClick:L},{default:d((()=>[F])),_:1})])),_:1})])}}});"function"==typeof u&&u(z);export{z as default};
