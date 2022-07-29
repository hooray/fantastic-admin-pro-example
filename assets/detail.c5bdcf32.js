
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.7fe612a1.js";import{d as a,v as t,r as s,E as l,a7 as i,co as r,cp as n,f as m,h as o,w as f,i as u,bP as p,B as d,ag as b,bQ as c,bR as j,b as g,Y as _,L as x}from"./index.3b0b287f.js";import v from"./index.0ab820f7.js";import{e as E}from"./eventBus.4bd846bd.js";import{u as k}from"./index.05efcaa3.js";import"./el-loading.55f30254.js";import"./el-form.1e0549a2.js";import"./isEqual.0e04c4ea.js";import"./el-form-item.2e22de35.js";import"./el-input.a46c7a98.js";import"./event.d298a7ab.js";const y=_(" 返回 "),D=_("提交"),z=_("取消"),C=a({name:"PagesExampleDepartmentDetail"}),L=Object.assign(C,{setup(a){const p=d(),_=b(),C=t(),L=s();function h(){L.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){C.tabbar.enable&&!C.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralDepartmentList"}):_.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=x,d=l,b=i,_=c,E=r,k=n,C=j,G=e;return g(),m("div",null,[o(_,{title:"routerName"==u(p).name?"新增部门":"编辑部门"},{default:f((()=>[o(b,{size:"default",round:"",onClick:B},{icon:f((()=>[o(d,null,{default:f((()=>[o(s,{name:"i-ep:arrow-left"})])),_:1})])),default:f((()=>[y])),_:1})])),_:1},8,["title"]),o(C,null,{default:f((()=>[o(k,null,{default:f((()=>[o(E,{md:24,lg:16},{default:f((()=>[o(v,{id:u(p).params.id,ref_key:"formRef",ref:L},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:f((()=>[o(b,{type:"primary",size:"large",onClick:h},{default:f((()=>[D])),_:1}),o(b,{size:"large",onClick:w},{default:f((()=>[z])),_:1})])),_:1})])}}});"function"==typeof p&&p(L);export{L as default};
