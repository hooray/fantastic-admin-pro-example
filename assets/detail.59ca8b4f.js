
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.ddae9190.js";import{d as a,v as t,r as s,E as l,a7 as i,cD as r,bR as n,f as m,h as o,w as f,i as d,bP as u,B as p,ag as c,bT as b,bQ as j,b as g,Y as _,L as x}from"./index.503ec71c.js";import v from"./index.0e6a23d2.js";import{e as D}from"./eventBus.193de119.js";import{u as E}from"./index.61a5f3ae.js";import"./el-loading.fc1c50fe.js";import"./el-form.b1df7afc.js";import"./isEqual.add373df.js";import"./el-form-item.2e22de35.js";import"./el-input.546a1988.js";import"./event.d298a7ab.js";const k=_(" 返回 "),y=_("提交"),z=_("取消"),C=a({name:"PagesExampleDepartmentDetail"}),L=Object.assign(C,{setup(a){const u=p(),_=c(),C=t(),L=s();function h(){L.value.submit((()=>{D.emit("get-data-list"),B()}))}function w(){B()}function B(){C.tabbar.enable&&!C.tabbar.mergeTabs?E().close({name:"pagesExampleGeneralDepartmentList"}):_.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=x,p=l,c=i,_=b,D=r,E=n,C=j,G=e;return g(),m("div",null,[o(_,{title:"routerName"==d(u).name?"新增部门":"编辑部门"},{default:f((()=>[o(c,{size:"default",round:"",onClick:B},{icon:f((()=>[o(p,null,{default:f((()=>[o(s,{name:"i-ep:arrow-left"})])),_:1})])),default:f((()=>[k])),_:1})])),_:1},8,["title"]),o(C,null,{default:f((()=>[o(E,null,{default:f((()=>[o(D,{md:24,lg:16},{default:f((()=>[o(v,{id:d(u).params.id,ref_key:"formRef",ref:L},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:f((()=>[o(c,{type:"primary",size:"large",onClick:h},{default:f((()=>[y])),_:1}),o(c,{size:"large",onClick:w},{default:f((()=>[z])),_:1})])),_:1})])}}});"function"==typeof u&&u(L);export{L as default};
