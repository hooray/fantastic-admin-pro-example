
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as l,f as e,h as a,w as u,bG as o,L as t,c5 as d,b as s,R as v,W as b,e as i,c4 as n}from"./index.40e497bb.js";/* empty css                 *//* empty css               */import{E as m,b as p}from"./el-select.2aed3e23.js";/* empty css                     */import r from"./alert.7cd27156.js";import"./index2.06bc8164.js";import"./event2.c09267d7.js";import"./index2.93e14b62.js";import"./isEqual.ed3e7cee.js";import"./index2.f762a04f.js";import"./validator2.5d00b7e9.js";import"./el-alert.653cd6ad.js";import"./el-link.d3d9b68b.js";const c={components:{Alert:r},data:()=>({options1:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:"",options2:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶",disabled:!0},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value2:"",value3:[]})};"function"==typeof o&&o(c);var f=l(c,[["render",function(l,o,r,c,f,V){const j=t("Alert"),_=n,h=m,k=p,y=d;return s(),e("div",null,[a(j),a(_,{title:"选择器"}),a(y,{title:"基础用法",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[0]||(o[0]=l=>f.value1=l),placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"有禁用选项",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value2,"onUpdate:modelValue":o[1]||(o[1]=l=>f.value2=l),placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options2,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"禁用状态",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[2]||(o[2]=l=>f.value1=l),disabled:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"可清空单选",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[3]||(o[3]=l=>f.value1=l),clearable:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"基础多选",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value3,"onUpdate:modelValue":o[4]||(o[4]=l=>f.value3=l),multiple:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(y,{title:"可搜索",class:"demo"},{default:u((()=>[a(k,{modelValue:f.value1,"onUpdate:modelValue":o[5]||(o[5]=l=>f.value1=l),filterable:"",placeholder:"请选择"},{default:u((()=>[(s(!0),e(v,null,b(f.options1,(l=>(s(),i(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])}]]);export{f as default};