
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{c as e,b as o,f as l,e as a,w as t,h as s,af as d,i,b8 as r,J as m,m as u,a2 as n,a8 as p,O as f}from"./index.252503d3.js";import{E as c}from"./el-drawer.c0d48fcd.js";import"./el-overlay.4ed61f02.js";import{E as j}from"./el-dialog.32934006.js";import g from"./index.eecf9232.js";import"./use-dialog.2b262b8e.js";import"./event.d298a7ab.js";import"./index.c0a7b230.js";import"./el-loading.15847d8e.js";import"./el-form.0205599e.js";import"./isEqual.30ea9237.js";/* empty css                       *//* empty css                        */import"./el-form-item.2e22de35.js";import"./el-input.dc2b6950.js";import"./index.8fdffc68.js";const y=n("取 消"),b=n("确 定"),V={class:"buttons"},v=n("取 消"),x=n("确 定"),k={__name:"index",props:{...g.props,modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},emits:["update:modelValue","success"],setup(n,{emit:k}){const _=n,{proxy:w}=f();let z=e({get:function(){return _.modelValue},set:function(e){k("update:modelValue",e)}});const C=e((()=>""==_.id?"新增管理员":"编辑管理员"));function E(){w.$refs.form.submit((()=>{k("success"),$()}))}function $(){z.value=!1}return(e,n)=>{const f=p,k=j,w=c;return o(),l("div",null,["dialog"===_.mode?(o(),a(k,{key:0,modelValue:i(z),"onUpdate:modelValue":n[0]||(n[0]=e=>r(z)?z.value=e:z=e),title:i(C),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:t((()=>[s(f,{size:"large",onClick:$},{default:t((()=>[y])),_:1}),s(f,{type:"primary",size:"large",onClick:E},{default:t((()=>[b])),_:1})])),default:t((()=>[s(g,d({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===_.mode?(o(),a(w,{key:1,modelValue:i(z),"onUpdate:modelValue":n[1]||(n[1]=e=>r(z)?z.value=e:z=e),title:i(C),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:t((()=>[s(g,d({ref:"form"},e.$props),null,16),m("div",V,[s(f,{size:"large",onClick:$},{default:t((()=>[v])),_:1}),s(f,{type:"primary",size:"large",onClick:E},{default:t((()=>[x])),_:1})])])),_:1},8,["modelValue","title"])):u("v-if",!0)])}}};export{k as default};