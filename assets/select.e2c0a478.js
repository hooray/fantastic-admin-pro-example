
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as l,f as e,h as a,w as u,bI as o,M as t,c7 as d,b as s,S as v,X as n,e as i,c6 as m}from"./index.a82b8a9a.js";import"./el-input.20be2c8d.js";/* empty css               */import{E as b,b as p}from"./el-select.5a0f1171.js";/* empty css                     */import r from"./alert.25d07254.js";import"./event.6c7ea317.js";import"./index.148252b1.js";import"./isEqual.8b04b388.js";import"./index.cc17a194.js";import"./validator.a1e990c7.js";import"./el-alert.404e2052.js";import"./el-link.60e5287d.js";const c={components:{Alert:r},data:()=>({options1:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:"",options2:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶",disabled:!0},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value2:"",value3:[]})};"function"==typeof o&&o(c);var f=l(c,[["render",function(l,o,r,c,f,V){const j=t("Alert"),_=m,h=b,k=p,y=d;return s(),e("div",null,[a(j),a(_,{title:"选择器"}),a(y,{title:"基础用法",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[0]||(o[0]=l=>f.value1=l),placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,n(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"有禁用选项",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value2,"onUpdate:modelValue":o[1]||(o[1]=l=>f.value2=l),placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,n(f.options2,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"禁用状态",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[2]||(o[2]=l=>f.value1=l),disabled:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,n(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"可清空单选",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[3]||(o[3]=l=>f.value1=l),clearable:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,n(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"基础多选",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value3,"onUpdate:modelValue":o[4]||(o[4]=l=>f.value3=l),multiple:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,n(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"可搜索",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[5]||(o[5]=l=>f.value1=l),filterable:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,n(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])}]]);export{f as default};
