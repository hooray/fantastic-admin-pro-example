
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{Y as e,r as a,f as n,h as r,i as t,w as o,bH as l,c5 as u,c6 as s,b as i,b8 as m}from"./index.0358e322.js";import{E as c,a as g}from"./el-form.f74fc1bb.js";import"./el-form-item.3d23d1d6.js";import{E as p}from"./el-input.88480f15.js";import{E as f}from"./el-pagination.4508e004.js";/* empty css               */import"./el-select.288a3295.js";/* empty css                     */import"./isEqual.fb89c671.js";import"./event.fa25aaef.js";import"./index.fe0afd4c.js";import"./index.11025292.js";import"./validator.b337b744.js";function d(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"zh-cn":{intro:e=>{const{normalize:a}=e;return a(["除了支持全局多语言切换，还支持 Vue 单文件模式语言切换，你可以尝试在这个页面点击右上角的语言切换试试"])},form:{name:e=>{const{normalize:a}=e;return a(["姓名"])},age:e=>{const{normalize:a}=e;return a(["年龄"])}},formRules:{name:e=>{const{normalize:a}=e;return a(["请输入姓名"])},age:e=>{const{normalize:a}=e;return a(["请输入年龄"])}}},"zh-tw":{intro:e=>{const{normalize:a}=e;return a(["除了支持全局多語言切換，還支持 Vue 單文件模式語言切換，你可以嘗試在這個頁面點擊右上角的語言切換試試"])},form:{name:e=>{const{normalize:a}=e;return a(["姓名"])},age:e=>{const{normalize:a}=e;return a(["年齡"])}},formRules:{name:e=>{const{normalize:a}=e;return a(["請輸入姓名"])},age:e=>{const{normalize:a}=e;return a(["請輸入年齡"])}}},en:{intro:e=>{const{normalize:a}=e;return a(["In addition to global multi-language switch, also support Vue single file mode language switch, you can try to click on the top right corner of the page to switch language"])},form:{name:e=>{const{normalize:a}=e;return a(["Name"])},age:e=>{const{normalize:a}=e;return a(["Age"])}},formRules:{name:e=>{const{normalize:a}=e;return a(["Please enter name"])},age:e=>{const{normalize:a}=e;return a(["Please enter age"])}}}}})}const z={__name:"i18n",setup(l){const{t:d}=e.exports.useI18n();let z=a(1),b=a(100);function j(e){}function h(e){}const _=a({name:"",age:""});return(e,a)=>{const l=u,v=f,V=s,x=p,w=c,E=g;return i(),n("div",null,[r(l,{title:t(d)("route.feature.i18n"),content:t(d)("intro")},null,8,["title","content"]),r(V,{title:"Element 组件"},{default:o((()=>[r(v,{currentPage:t(z),"onUpdate:currentPage":a[0]||(a[0]=e=>m(z)?z.value=e:z=e),"page-size":t(b),"onUpdate:page-size":a[1]||(a[1]=e=>m(b)?b.value=e:b=e),"page-sizes":[100,200,300,400],layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:j,onCurrentChange:h},null,8,["currentPage","page-size"])])),_:1}),r(V,{title:"表单验证"},{default:o((()=>[r(E,{modelValue:_.value,"onUpdate:modelValue":a[4]||(a[4]=e=>_.value=e),"label-width":"100px"},{default:o((()=>[r(w,{label:t(d)("form.name"),prop:"name",rules:[{required:!0,message:t(d)("formRules.name"),trigger:"blur"}]},{default:o((()=>[r(x,{modelValue:_.value.name,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value.name=e)},null,8,["modelValue"])])),_:1},8,["label","rules"]),r(w,{label:t(d)("form.age"),prop:"age",rules:[{required:!0,message:t(d)("formRules.age"),trigger:"blur"}]},{default:o((()=>[r(x,{modelValue:_.value.age,"onUpdate:modelValue":a[3]||(a[3]=e=>_.value.age=e)},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["modelValue"])])),_:1})])}}};"function"==typeof l&&l(z),d(z);export{z as default};