
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.fe64f5e4.js";import{d as a,v as t,r as s,E as i,a7 as r,co as l,cp as n,f as m,h as o,w as d,i as p,bP as u,B as f,ag as b,bQ as c,bR as j,b as _,Y as g,L as x}from"./index.b5d679a7.js";import v from"./index.b6e22969.js";import{e as E}from"./eventBus.193de119.js";import{u as k}from"./index.7c239e76.js";import"./el-loading.b20870c1.js";import"./el-form.093c6194.js";import"./isEqual.982bf403.js";import"./el-form-item.2e22de35.js";import"./el-input.d18d887e.js";import"./event.d298a7ab.js";const y=g(" 返回 "),D=g("提交"),z=g("取消"),C=a({name:"PagesExampleDepartmentJobDetail"}),L=Object.assign(C,{setup(a){const u=f(),g=b(),C=t(),L=s();function h(){L.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){C.tabbar.enable&&!C.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralDepartmentList"}):g.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=x,f=i,b=r,g=c,E=l,k=n,C=j,G=e;return _(),m("div",null,[o(g,{title:"routerName"==p(u).name?"新增职位":"编辑职位"},{default:d((()=>[o(b,{size:"default",round:"",onClick:B},{icon:d((()=>[o(f,null,{default:d((()=>[o(s,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[y])),_:1})])),_:1},8,["title"]),o(C,null,{default:d((()=>[o(k,null,{default:d((()=>[o(E,{md:24,lg:16},{default:d((()=>[o(v,{id:p(u).params.id,ref_key:"formRef",ref:L,"department-id":p(u).params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:d((()=>[o(b,{type:"primary",size:"large",onClick:h},{default:d((()=>[D])),_:1}),o(b,{size:"large",onClick:w},{default:d((()=>[z])),_:1})])),_:1})])}}});"function"==typeof u&&u(L);export{L as default};
