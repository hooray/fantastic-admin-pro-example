
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.7fe612a1.js";import{d as e,v as t,r as s,E as i,a7 as r,co as l,cp as n,f as o,h as m,w as d,i as f,bP as u,B as p,ag as b,bQ as c,bR as g,b as j,Y as _,L as x}from"./index.3b0b287f.js";import v from"./index.72825ad5.js";import{e as E}from"./eventBus.4bd846bd.js";import{u as k}from"./index.05efcaa3.js";import"./el-loading.55f30254.js";import"./el-form.1e0549a2.js";import"./isEqual.0e04c4ea.js";/* empty css                       *//* empty css                        */import"./el-form-item.2e22de35.js";import"./el-input.a46c7a98.js";import"./event.d298a7ab.js";import"./index.ad1f103b.js";const y=_(" 返回 "),z=_("提交"),C=_("取消"),L=e({name:"PagesExampleManagerDetail"}),M=Object.assign(L,{setup(e){const u=p(),_=b(),L=t(),M=s();function h(){M.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){L.tabbar.enable&&!L.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralManagerList"}):_.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const s=x,p=i,b=r,_=c,E=l,k=n,L=g,G=a;return j(),o("div",null,[m(_,{title:"routerName"==f(u).name?"新增管理员":"编辑管理员"},{default:d((()=>[m(b,{size:"default",round:"",onClick:B},{icon:d((()=>[m(p,null,{default:d((()=>[m(s,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[y])),_:1})])),_:1},8,["title"]),m(L,null,{default:d((()=>[m(k,null,{default:d((()=>[m(E,{md:24,lg:16},{default:d((()=>[m(v,{id:f(u).params.id,ref_key:"formRef",ref:M},null,8,["id"])])),_:1})])),_:1})])),_:1}),m(G,null,{default:d((()=>[m(b,{type:"primary",size:"large",onClick:h},{default:d((()=>[z])),_:1}),m(b,{size:"large",onClick:w},{default:d((()=>[C])),_:1})])),_:1})])}}});"function"==typeof u&&u(M);export{M as default};
