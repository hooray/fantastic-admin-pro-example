
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.9ff85b0e.js";import{d as a,v as s,r as t,E as l,a7 as i,cD as r,bR as o,f as n,h as m,w as f,i as d,bP as u,B as p,ag as b,bT as c,bQ as g,b as j,Y as _,L as x}from"./index.45a1a0f2.js";import E from"./index.97a56bb4.js";import{e as v}from"./eventBus.193de119.js";import{u as k}from"./index.13395595.js";import"./el-loading.bd194390.js";import"./el-form.2bf48993.js";import"./isEqual.e37d1fd8.js";import"./el-form-item.2e22de35.js";import"./el-input.ec9522af.js";import"./event.d298a7ab.js";const y=_(" 返回 "),C=_("提交"),F=_("取消"),M=a({name:"PagesExampleFormModeDetail"}),z=Object.assign(M,{setup(a){const u=p(),_=b(),M=s(),z=t();function G(){z.value.submit((()=>{v.emit("get-data-list"),h()}))}function L(){h()}function h(){M.tabbar.enable&&!M.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralFormModeList"}):_.push({name:"pagesExampleGeneralFormModeList"})}return(a,s)=>{const t=x,p=l,b=i,_=c,v=r,k=o,M=g,w=e;return j(),n("div",null,[m(_,{title:"pagesExampleGeneralFormModeCreate"==d(u).name?"新增":"编辑"},{default:f((()=>[m(b,{size:"default",round:"",onClick:h},{icon:f((()=>[m(p,null,{default:f((()=>[m(t,{name:"i-ep:arrow-left"})])),_:1})])),default:f((()=>[y])),_:1})])),_:1},8,["title"]),m(M,null,{default:f((()=>[m(k,null,{default:f((()=>[m(v,{md:24,lg:16},{default:f((()=>[m(E,{id:d(u).params.id,ref_key:"formRef",ref:z},null,8,["id"])])),_:1})])),_:1})])),_:1}),m(w,null,{default:f((()=>[m(b,{type:"primary",size:"large",onClick:G},{default:f((()=>[C])),_:1}),m(b,{size:"large",onClick:L},{default:f((()=>[F])),_:1})])),_:1})])}}});"function"==typeof u&&u(z);export{z as default};
