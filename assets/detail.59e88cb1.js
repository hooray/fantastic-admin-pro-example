
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.7fe612a1.js";import{d as a,v as t,r as s,E as i,a7 as r,co as l,cp as n,f as m,h as o,w as d,i as f,bP as p,B as u,ag as c,bQ as b,bR as j,b as _,Y as g,L as x}from"./index.3b0b287f.js";import v from"./index.e6fd1c08.js";import{e as E}from"./eventBus.4bd846bd.js";import{u as k}from"./index.05efcaa3.js";import"./el-loading.55f30254.js";import"./el-form.1e0549a2.js";import"./isEqual.0e04c4ea.js";import"./el-form-item.2e22de35.js";import"./el-input.a46c7a98.js";import"./event.d298a7ab.js";const y=g(" 返回 "),D=g("提交"),z=g("取消"),C=a({name:"PagesExampleDepartmentJobDetail"}),L=Object.assign(C,{setup(a){const p=u(),g=c(),C=t(),L=s();function h(){L.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){C.tabbar.enable&&!C.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralDepartmentList"}):g.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=x,u=i,c=r,g=b,E=l,k=n,C=j,G=e;return _(),m("div",null,[o(g,{title:"routerName"==f(p).name?"新增职位":"编辑职位"},{default:d((()=>[o(c,{size:"default",round:"",onClick:B},{icon:d((()=>[o(u,null,{default:d((()=>[o(s,{name:"i-ep:arrow-left"})])),_:1})])),default:d((()=>[y])),_:1})])),_:1},8,["title"]),o(C,null,{default:d((()=>[o(k,null,{default:d((()=>[o(E,{md:24,lg:16},{default:d((()=>[o(v,{id:f(p).params.id,ref_key:"formRef",ref:L,"department-id":f(p).params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:d((()=>[o(c,{type:"primary",size:"large",onClick:h},{default:d((()=>[D])),_:1}),o(c,{size:"large",onClick:w},{default:d((()=>[z])),_:1})])),_:1})])}}});"function"==typeof p&&p(L);export{L as default};
