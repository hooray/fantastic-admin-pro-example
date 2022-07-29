
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.fe64f5e4.js";import{d as a,v as t,r as s,E as l,a7 as i,co as r,cp as n,f as m,h as o,w as u,i as f,bP as d,B as p,ag as c,bQ as b,bR as j,b as g,Y as _,L as x}from"./index.b5d679a7.js";import v from"./index.e228e760.js";import{e as E}from"./eventBus.193de119.js";import{u as k}from"./index.7c239e76.js";import"./el-loading.b20870c1.js";import"./el-form.093c6194.js";import"./isEqual.982bf403.js";import"./el-form-item.2e22de35.js";import"./el-input.d18d887e.js";import"./event.d298a7ab.js";const y=_(" 返回 "),D=_("提交"),z=_("取消"),C=a({name:"PagesExampleDepartmentDetail"}),L=Object.assign(C,{setup(a){const d=p(),_=c(),C=t(),L=s();function h(){L.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){C.tabbar.enable&&!C.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralDepartmentList"}):_.push({name:"pagesExampleGeneralDepartmentList"})}return(a,t)=>{const s=x,p=l,c=i,_=b,E=r,k=n,C=j,G=e;return g(),m("div",null,[o(_,{title:"routerName"==f(d).name?"新增部门":"编辑部门"},{default:u((()=>[o(c,{size:"default",round:"",onClick:B},{icon:u((()=>[o(p,null,{default:u((()=>[o(s,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[y])),_:1})])),_:1},8,["title"]),o(C,null,{default:u((()=>[o(k,null,{default:u((()=>[o(E,{md:24,lg:16},{default:u((()=>[o(v,{id:f(d).params.id,ref_key:"formRef",ref:L},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(G,null,{default:u((()=>[o(c,{type:"primary",size:"large",onClick:h},{default:u((()=>[D])),_:1}),o(c,{size:"large",onClick:w},{default:u((()=>[z])),_:1})])),_:1})])}}});"function"==typeof d&&d(L);export{L as default};
