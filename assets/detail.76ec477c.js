
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.2e99e518.js";import{d as a,v as t,E as i,a5 as r,f as o,h as s,w as l,bH as m,c5 as p,c6 as n,b as d,a1 as f,P as c,H as u}from"./index.0358e322.js";import b from"./index.99a0521b.js";import"./el-loading.5e88cf8a.js";import"./el-form.f74fc1bb.js";import"./isEqual.fb89c671.js";import"./el-card.c47b8f3f.js";/* empty css                       *//* empty css                        */import"./index.d441cfb0.js";import"./el-input.88480f15.js";import"./event.fa25aaef.js";/* empty css               */import"./el-checkbox.3cad90b1.js";/* empty css                 *//* empty css                     */import"./index.a1e5346e.js";import"./aria.1f702b5f.js";import"./arrays.7864a962.js";import"./_baseFlatten.68da3c29.js";import"./index.fe0afd4c.js";import"./index.11025292.js";import"./validator.b337b744.js";import"./el-form-item.3d23d1d6.js";import"./index.d1d576f8.js";import"./el-dialog.c4d25952.js";import"./el-overlay.38c59f3e.js";import"./use-dialog.c96e9f11.js";import"./index.e7a09739.js";/* empty css                          */import"./el-table-column.278c1623.js";import"./el-tooltip.0ca4bad9.js";const j=f(" 返回 "),x=f("提交"),g=f("取消"),v=a({name:"PagesExampleDeliveryDetail"}),y=Object.assign(v,{setup(a){const{proxy:m}=u(),f=t();function v(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),_()}))}function y(){_()}function _(){f.tabbar.enable&&!f.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleShopDeliveryList"}):m.$router.push({name:"pagesExampleShopDeliveryList"})}return(a,t)=>{const m=c,f=i,u=r,h=p,E=n,$=e;return d(),o("div",null,[s(h,{title:"pagesExampleShopDeliveryCreate"==a.$route.name?"新增运费模版":"编辑运费模版"},{default:l((()=>[s(u,{size:"default",round:"",onClick:_},{icon:l((()=>[s(f,null,{default:l((()=>[s(m,{name:"i-ep:arrow-left"})])),_:1})])),default:l((()=>[j])),_:1})])),_:1},8,["title"]),s(E,null,{default:l((()=>[s(b,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1}),s($,null,{default:l((()=>[s(u,{type:"primary",size:"large",onClick:v},{default:l((()=>[x])),_:1}),s(u,{size:"large",onClick:y},{default:l((()=>[g])),_:1})])),_:1})])}}});"function"==typeof m&&m(y);export{y as default};