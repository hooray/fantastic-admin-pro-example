
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a}from"./index.ddae9190.js";import{d as e,v as t,r as s,E as i,a7 as r,cD as l,bR as n,f as o,h as d,w as f,i as m,bP as u,B as p,ag as c,bT as b,bQ as g,b as j,Y as _,L as x}from"./index.503ec71c.js";import v from"./index.3d5bc044.js";import{e as E}from"./eventBus.193de119.js";import{u as k}from"./index.61a5f3ae.js";import"./el-loading.fc1c50fe.js";import"./el-form.b1df7afc.js";import"./isEqual.add373df.js";/* empty css                       *//* empty css                        */import"./el-form-item.2e22de35.js";import"./el-input.546a1988.js";import"./event.d298a7ab.js";import"./index.2ef741fb.js";const y=_(" 返回 "),z=_("提交"),C=_("取消"),L=e({name:"PagesExampleManagerDetail"}),M=Object.assign(L,{setup(e){const u=p(),_=c(),L=t(),M=s();function h(){M.value.submit((()=>{E.emit("get-data-list"),B()}))}function w(){B()}function B(){L.tabbar.enable&&!L.tabbar.mergeTabs?k().close({name:"pagesExampleGeneralManagerList"}):_.push({name:"pagesExampleGeneralManagerList"})}return(e,t)=>{const s=x,p=i,c=r,_=b,E=l,k=n,L=g,D=a;return j(),o("div",null,[d(_,{title:"routerName"==m(u).name?"新增管理员":"编辑管理员"},{default:f((()=>[d(c,{size:"default",round:"",onClick:B},{icon:f((()=>[d(p,null,{default:f((()=>[d(s,{name:"i-ep:arrow-left"})])),_:1})])),default:f((()=>[y])),_:1})])),_:1},8,["title"]),d(L,null,{default:f((()=>[d(k,null,{default:f((()=>[d(E,{md:24,lg:16},{default:f((()=>[d(v,{id:m(u).params.id,ref_key:"formRef",ref:M},null,8,["id"])])),_:1})])),_:1})])),_:1}),d(D,null,{default:f((()=>[d(c,{type:"primary",size:"large",onClick:h},{default:f((()=>[z])),_:1}),d(c,{size:"large",onClick:w},{default:f((()=>[C])),_:1})])),_:1})])}}});"function"==typeof u&&u(M);export{M as default};
