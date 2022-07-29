
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.9ff85b0e.js";import{d as e,v as t,r as s,E as i,a7 as r,cD as l,bR as n,f as o,h as m,w as d,i as f,bP as u,B as p,ag as b,bT as c,bQ as g,b as j,Y as _,L as x}from"./index.45a1a0f2.js";import v from"./index.13717dc5.js";import{e as E}from"./eventBus.193de119.js";import{u as k}from"./index.13395595.js";import"./el-loading.bd194390.js";import"./el-form.2bf48993.js";import"./isEqual.e37d1fd8.js";/* empty css                       *//* empty css                        */import"./el-form-item.2e22de35.js";import"./el-input.ec9522af.js";import"./event.d298a7ab.js";import"./index.a8111417.js";const y=_(" 返回 "),z=_("提交"),C=_("取消"),L=e({name:"PagesExampleManagerDetail"}),M=Object.assign(L,{setup(e){const u=p(),_=b(),L=t(),M=s();function h(){M.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){L.tabbar.enable&&!L.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralManagerList"}):_.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const s=x,p=i,b=r,_=c,E=l,k=n,L=g,D=a;return j(),o("div",null,[m(_,{title:"routerName"==f(u).name?"新增管理员":"编辑管理员"},{default:d((()=>[m(b,{size:"default",round:"",onClick:B},{icon:d((()=>[m(p,null,{default:d((()=>[m(s,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[y])),_:1})])),_:1},8,["title"]),m(L,null,{default:d((()=>[m(k,null,{default:d((()=>[m(E,{md:24,lg:16},{default:d((()=>[m(v,{id:f(u).params.id,ref_key:"formRef",ref:M},null,8,["id"])])),_:1})])),_:1})])),_:1}),m(D,null,{default:d((()=>[m(b,{type:"primary",size:"large",onClick:h},{default:d((()=>[z])),_:1}),m(b,{size:"large",onClick:w},{default:d((()=>[C])),_:1})])),_:1})])}}});"function"==typeof u&&u(M);export{M as default};
