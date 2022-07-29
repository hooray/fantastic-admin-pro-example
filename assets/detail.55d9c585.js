
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.9ff85b0e.js";import{d as a,v as t,r as s,E as i,a7 as r,cD as l,bR as n,f as m,h as o,w as d,i as f,bP as u,B as p,ag as b,bT as c,bQ as j,b as _,Y as g,L as x}from"./index.45a1a0f2.js";import v from"./index.6f689630.js";import{e as D}from"./eventBus.193de119.js";import{u as E}from"./index.13395595.js";import"./el-loading.bd194390.js";import"./el-form.2bf48993.js";import"./isEqual.e37d1fd8.js";import"./el-form-item.2e22de35.js";import"./el-input.ec9522af.js";import"./event.d298a7ab.js";const k=g(" 返回 "),y=g("提交"),z=g("取消"),C=a({name:"PagesExampleDepartmentJobDetail"}),L=Object.assign(C,{setup(a){const u=p(),g=b(),C=t(),L=s();function h(){L.value.submit((()=>{D.emit("get-data-list"),B()}))}function w(){B()}function B(){C.tabbar.enable&&!C.tabbar.mergeTabs?E().close({name:"pagesExampleGeneralDepartmentList"}):g.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=x,p=i,b=r,g=c,D=l,E=n,C=j,G=e;return _(),m("div",null,[o(g,{title:"routerName"==f(u).name?"新增职位":"编辑职位"},{default:d((()=>[o(b,{size:"default",round:"",onClick:B},{icon:d((()=>[o(p,null,{default:d((()=>[o(s,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[k])),_:1})])),_:1},8,["title"]),o(C,null,{default:d((()=>[o(E,null,{default:d((()=>[o(D,{md:24,lg:16},{default:d((()=>[o(v,{id:f(u).params.id,ref_key:"formRef",ref:L,"department-id":f(u).params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:d((()=>[o(b,{type:"primary",size:"large",onClick:h},{default:d((()=>[y])),_:1}),o(b,{size:"large",onClick:w},{default:d((()=>[z])),_:1})])),_:1})])}}});"function"==typeof u&&u(L);export{L as default};
