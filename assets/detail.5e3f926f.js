
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.840fde47.js";import{d as a,v as t,E as i,a6 as r,f as o,h as s,w as l,bI as m,c6 as p,c7 as d,b as n,a2 as c,Q as u,I as f}from"./index.1be4fcb7.js";import j from"./index.ad3d5914.js";import"./el-loading.a484b884.js";import"./el-form.1b6a5574.js";import"./isEqual.25fe4591.js";import"./el-card.23d4ae8c.js";/* empty css                       *//* empty css                        */import"./index.212360b2.js";import"./el-input.94aad898.js";import"./event.6c7ea317.js";/* empty css               */import"./el-checkbox.950e7e3a.js";/* empty css                 *//* empty css                     */import"./index.198a7d9b.js";import"./aria.ca14fa17.js";import"./arrays.65a60b1b.js";import"./_baseFlatten.deaf0da8.js";import"./index.3c2aeb3d.js";import"./index.e49a9783.js";import"./validator.4a0c273f.js";import"./el-form-item.e866842d.js";import"./index.a2072fc7.js";import"./el-dialog.1955d5bc.js";import"./el-overlay.117f78cc.js";import"./use-dialog.d524bc87.js";import"./index.6a7205e4.js";/* empty css                          */import"./el-table-column.37443d20.js";import"./el-tooltip.586473e3.js";const b=c(" 返回 "),x=c("提交"),g=c("取消"),v=a({name:"PagesExampleDeliveryDetail"}),y=Object.assign(v,{setup(a){const{proxy:m}=f(),c=t();function v(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),_()}))}function y(){_()}function _(){c.tabbar.enable&&!c.tabbar.mergeTabs?m.$tabbar.close({name:"pagesExampleShopDeliveryList"}):m.$router.push({name:"pagesExampleShopDeliveryList"})}return(a,t)=>{const m=u,c=i,f=r,h=p,E=d,$=e;return n(),o("div",null,[s(h,{title:"pagesExampleShopDeliveryCreate"==a.$route.name?"新增运费模版":"编辑运费模版"},{default:l((()=>[s(f,{size:"default",round:"",onClick:_},{icon:l((()=>[s(c,null,{default:l((()=>[s(m,{name:"i-ep:arrow-left"})])),_:1})])),default:l((()=>[b])),_:1})])),_:1},8,["title"]),s(E,null,{default:l((()=>[s(j,{id:a.$route.params.id,ref:"form"},null,8,["id"])])),_:1}),s($,null,{default:l((()=>[s(f,{type:"primary",size:"large",onClick:v},{default:l((()=>[x])),_:1}),s(f,{size:"large",onClick:y},{default:l((()=>[g])),_:1})])),_:1})])}}});"function"==typeof m&&m(y);export{y as default};
