
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.fe64f5e4.js";import{d as a,v as t,r as s,E as i,a7 as r,co as l,cp as n,f as o,h as m,w as d,i as u,bP as f,B as p,ag as b,bQ as c,bR as g,b as j,Y as _,L as x}from"./index.b5d679a7.js";import v from"./index.1210e410.js";import{e as E}from"./eventBus.193de119.js";import{u as k}from"./index.7c239e76.js";import"./el-loading.b20870c1.js";import"./el-form.093c6194.js";import"./isEqual.982bf403.js";/* empty css                       *//* empty css                        */import"./el-form-item.2e22de35.js";import"./el-input.d18d887e.js";import"./event.d298a7ab.js";import"./index.1b222401.js";const y=_(" 返回 "),z=_("提交"),C=_("取消"),L=a({name:"PagesExampleManagerDetail"}),M=Object.assign(L,{setup(a){const f=p(),_=b(),L=t(),M=s();function h(){M.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){L.tabbar.enable&&!L.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralManagerList"}):_.push({name:"pagesExampleGeneralManagerList"})}return(a,t)=>{const s=x,p=i,b=r,_=c,E=l,k=n,L=g,G=e;return j(),o("div",null,[m(_,{title:"routerName"==u(f).name?"新增管理员":"编辑管理员"},{default:d((()=>[m(b,{size:"default",round:"",onClick:B},{icon:d((()=>[m(p,null,{default:d((()=>[m(s,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[y])),_:1})])),_:1},8,["title"]),m(L,null,{default:d((()=>[m(k,null,{default:d((()=>[m(E,{md:24,lg:16},{default:d((()=>[m(v,{id:u(f).params.id,ref_key:"formRef",ref:M},null,8,["id"])])),_:1})])),_:1})])),_:1}),m(G,null,{default:d((()=>[m(b,{type:"primary",size:"large",onClick:h},{default:d((()=>[z])),_:1}),m(b,{size:"large",onClick:w},{default:d((()=>[C])),_:1})])),_:1})])}}});"function"==typeof f&&f(M);export{M as default};
