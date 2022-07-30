
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.ddae9190.js";import{d as a,v as t,r as s,E as i,a7 as r,cD as l,bR as n,f as m,h as d,w as o,i as f,bP as u,B as p,ag as c,bT as b,bQ as j,b as _,Y as g,L as x}from"./index.503ec71c.js";import v from"./index.4a3b1e03.js";import{e as D}from"./eventBus.193de119.js";import{u as E}from"./index.61a5f3ae.js";import"./el-loading.fc1c50fe.js";import"./el-form.b1df7afc.js";import"./isEqual.add373df.js";import"./el-form-item.2e22de35.js";import"./el-input.546a1988.js";import"./event.d298a7ab.js";const k=g(" 返回 "),y=g("提交"),z=g("取消"),C=a({name:"PagesExampleDepartmentJobDetail"}),L=Object.assign(C,{setup(a){const u=p(),g=c(),C=t(),L=s();function h(){L.value.submit((()=>{D.emit("get-data-list"),B()}))}function w(){B()}function B(){C.tabbar.enable&&!C.tabbar.mergeTabs?E().close({name:"pagesExampleGeneralDepartmentList"}):g.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=x,p=i,c=r,g=b,D=l,E=n,C=j,G=e;return _(),m("div",null,[d(g,{title:"routerName"==f(u).name?"新增职位":"编辑职位"},{default:o((()=>[d(c,{size:"default",round:"",onClick:B},{icon:o((()=>[d(p,null,{default:o((()=>[d(s,{name:"i-ep:arrow-left"})])),_:1})])),default:o((()=>[k])),_:1})])),_:1},8,["title"]),d(C,null,{default:o((()=>[d(E,null,{default:o((()=>[d(D,{md:24,lg:16},{default:o((()=>[d(v,{id:f(u).params.id,ref_key:"formRef",ref:L,"department-id":f(u).params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),d(G,null,{default:o((()=>[d(c,{type:"primary",size:"large",onClick:h},{default:o((()=>[y])),_:1}),d(c,{size:"large",onClick:w},{default:o((()=>[z])),_:1})])),_:1})])}}});"function"==typeof u&&u(L);export{L as default};
