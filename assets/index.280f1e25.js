
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,c as o,b as a,f as l,e as t,w as s,h as i,ae as d,i as r,ba as m,G as u,m as n,Y as p,a7 as f}from"./index.b5d679a7.js";import{E as c}from"./el-drawer.f404e0ab.js";import"./el-overlay.aa9d497b.js";import{E as b}from"./el-dialog.39c18945.js";import y from"./index.b6e22969.js";import"./use-dialog.ab21eb90.js";import"./event.d298a7ab.js";import"./index.60220f41.js";import"./el-loading.b20870c1.js";import"./el-form.093c6194.js";import"./isEqual.982bf403.js";import"./el-form-item.2e22de35.js";import"./el-input.d18d887e.js";const j=p("取 消"),g=p("确 定"),k={class:"buttons"},v=p("取 消"),V=p("确 定"),_={__name:"index",props:{...y.props,modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},emits:["update:modelValue","success"],setup(p,{emit:_}){const x=p,w=e();let z=o({get:function(){return x.modelValue},set:function(e){_("update:modelValue",e)}});const C=o((()=>""==x.id?"新增职位":"编辑职位"));function E(){w.value.submit((()=>{_("success"),h()}))}function h(){z.value=!1}return(e,o)=>{const p=f,_=b,R=c;return a(),l("div",null,["dialog"===x.mode?(a(),t(_,{key:0,modelValue:r(z),"onUpdate:modelValue":o[0]||(o[0]=e=>m(z)?z.value=e:z=e),title:r(C),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:s((()=>[i(p,{size:"large",onClick:h},{default:s((()=>[j])),_:1}),i(p,{type:"primary",size:"large",onClick:E},{default:s((()=>[g])),_:1})])),default:s((()=>[i(y,d({ref_key:"formRef",ref:w},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===x.mode?(a(),t(R,{key:1,modelValue:r(z),"onUpdate:modelValue":o[1]||(o[1]=e=>m(z)?z.value=e:z=e),title:r(C),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:s((()=>[i(y,d({ref_key:"formRef",ref:w},e.$props),null,16),u("div",k,[i(p,{size:"large",onClick:h},{default:s((()=>[v])),_:1}),i(p,{type:"primary",size:"large",onClick:E},{default:s((()=>[V])),_:1})])])),_:1},8,["modelValue","title"])):n("v-if",!0)])}}};export{_ as default};
