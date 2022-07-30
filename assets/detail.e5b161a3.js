
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.ddae9190.js";import{d as a,v as s,r as t,E as l,a7 as i,cD as r,bR as o,f as n,h as m,w as d,i as f,bP as u,B as p,ag as c,bT as b,bQ as g,b as j,Y as _,L as x}from"./index.503ec71c.js";import E from"./index.9cc6e876.js";import{e as v}from"./eventBus.193de119.js";import{u as k}from"./index.61a5f3ae.js";import"./el-loading.fc1c50fe.js";import"./el-form.b1df7afc.js";import"./isEqual.add373df.js";import"./el-form-item.2e22de35.js";import"./el-input.546a1988.js";import"./event.d298a7ab.js";const y=_(" 返回 "),C=_("提交"),F=_("取消"),M=a({name:"PagesExampleFormModeDetail"}),z=Object.assign(M,{setup(a){const u=p(),_=c(),M=s(),z=t();function G(){z.value.submit((()=>{v.emit("get-data-list"),h()}))}function L(){h()}function h(){M.tabbar.enable&&!M.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralFormModeList"}):_.push({name:"pagesExampleGeneralFormModeList"})}return(a,s)=>{const t=x,p=l,c=i,_=b,v=r,k=o,M=g,w=e;return j(),n("div",null,[m(_,{title:"pagesExampleGeneralFormModeCreate"==f(u).name?"新增":"编辑"},{default:d((()=>[m(c,{size:"default",round:"",onClick:h},{icon:d((()=>[m(p,null,{default:d((()=>[m(t,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[y])),_:1})])),_:1},8,["title"]),m(M,null,{default:d((()=>[m(k,null,{default:d((()=>[m(v,{md:24,lg:16},{default:d((()=>[m(E,{id:f(u).params.id,ref_key:"formRef",ref:z},null,8,["id"])])),_:1})])),_:1})])),_:1}),m(w,null,{default:d((()=>[m(c,{type:"primary",size:"large",onClick:G},{default:d((()=>[C])),_:1}),m(c,{size:"large",onClick:L},{default:d((()=>[F])),_:1})])),_:1})])}}});"function"==typeof u&&u(z);export{z as default};
