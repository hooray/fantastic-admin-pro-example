
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as l,f as e,h as a,w as o,bH as t,L as u,c6 as s,b as d,D as m,c5 as n}from"./index.5043a866.js";import{E as p}from"./el-slider.fae34941.js";import"./el-input-number.194074f2.js";import"./el-input.47be8b34.js";import"./el-tooltip.0ca4bad9.js";import i from"./alert.1113daed.js";import"./event.a088884a.js";import"./index.d24b3d36.js";import"./el-alert.47c85d12.js";import"./el-link.464fc682.js";const r={components:{Alert:i},data:()=>({value1:0,value2:50,value3:36,value4:48,value5:42,value6:0,value7:0,value8:[4,8],value9:0}),methods:{formatTooltip:l=>l/100}},v=m("span",{class:"demonstration"},"默认",-1),V=m("span",{class:"demonstration"},"自定义初始值",-1),c=m("span",{class:"demonstration"},"隐藏 Tooltip",-1),f=m("span",{class:"demonstration"},"格式化 Tooltip",-1),j=m("span",{class:"demonstration"},"禁用",-1),U=m("span",{class:"demonstration"},"不显示间断点",-1),b=m("span",{class:"demonstration"},"显示间断点",-1);"function"==typeof t&&t(r);var h=l(r,[["render",function(l,t,m,i,r,h){const w=u("Alert"),x=n,_=p,T=s;return d(),e("div",null,[a(w),a(x,{title:"滑块"}),a(T,{title:"基础用法",class:"demo"},{default:o((()=>[v,a(_,{modelValue:r.value1,"onUpdate:modelValue":t[0]||(t[0]=l=>r.value1=l)},null,8,["modelValue"]),V,a(_,{modelValue:r.value2,"onUpdate:modelValue":t[1]||(t[1]=l=>r.value2=l)},null,8,["modelValue"]),c,a(_,{modelValue:r.value3,"onUpdate:modelValue":t[2]||(t[2]=l=>r.value3=l),"show-tooltip":!1},null,8,["modelValue"]),f,a(_,{modelValue:r.value4,"onUpdate:modelValue":t[3]||(t[3]=l=>r.value4=l),"format-tooltip":h.formatTooltip},null,8,["modelValue","format-tooltip"]),j,a(_,{modelValue:r.value5,"onUpdate:modelValue":t[4]||(t[4]=l=>r.value5=l),disabled:""},null,8,["modelValue"])])),_:1}),a(T,{title:"离散值",class:"demo"},{default:o((()=>[U,a(_,{modelValue:r.value6,"onUpdate:modelValue":t[5]||(t[5]=l=>r.value6=l),step:10},null,8,["modelValue"]),b,a(_,{modelValue:r.value6,"onUpdate:modelValue":t[6]||(t[6]=l=>r.value6=l),step:10,"show-stops":""},null,8,["modelValue"])])),_:1}),a(T,{title:"带有输入框",class:"demo"},{default:o((()=>[a(_,{modelValue:r.value7,"onUpdate:modelValue":t[7]||(t[7]=l=>r.value7=l),"show-input":""},null,8,["modelValue"])])),_:1}),a(T,{title:"范围选择",class:"demo"},{default:o((()=>[a(_,{modelValue:r.value8,"onUpdate:modelValue":t[8]||(t[8]=l=>r.value8=l),range:"","show-stops":"",max:10},null,8,["modelValue"])])),_:1}),a(T,{title:"竖向模式",class:"demo"},{default:o((()=>[a(_,{modelValue:r.value9,"onUpdate:modelValue":t[9]||(t[9]=l=>r.value9=l),vertical:"",height:"200px"},null,8,["modelValue"])])),_:1})])}]]);export{h as default};
