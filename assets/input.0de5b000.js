
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,E as l,f as a,h as t,w as o,bP as d,F as u,bR as n,b as p,bQ as s,L as i}from"./index.3b0b287f.js";import{E as m}from"./el-input.a46c7a98.js";import r from"./alert.f5970c8a.js";import"./event.d298a7ab.js";import"./el-alert.80189291.js";import"./el-link.69577395.js";const c={components:{Alert:r},data:()=>({input:"",input1:"",input2:"",textarea:""})};"function"==typeof d&&d(c);const f=e(c,[["render",function(e,d,r,c,f,V){const _=u("Alert"),h=s,b=m,x=n,U=i,j=l;return p(),a("div",null,[t(_),t(h,{title:"输入框"}),t(x,{title:"基础用法",class:"demo"},{default:o((()=>[t(b,{modelValue:f.input,"onUpdate:modelValue":d[0]||(d[0]=e=>f.input=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),t(x,{title:"禁用状态",class:"demo"},{default:o((()=>[t(b,{modelValue:f.input,"onUpdate:modelValue":d[1]||(d[1]=e=>f.input=e),placeholder:"请输入内容",disabled:!0},null,8,["modelValue"])])),_:1}),t(x,{title:"可清空",class:"demo"},{default:o((()=>[t(b,{modelValue:f.input,"onUpdate:modelValue":d[2]||(d[2]=e=>f.input=e),placeholder:"请输入内容",clearable:""},null,8,["modelValue"])])),_:1}),t(x,{title:"密码框",class:"demo"},{default:o((()=>[t(b,{modelValue:f.input,"onUpdate:modelValue":d[3]||(d[3]=e=>f.input=e),placeholder:"请输入内容","show-password":""},null,8,["modelValue"])])),_:1}),t(x,{title:"带 icon 的输入框",class:"demo"},{default:o((()=>[t(b,{modelValue:f.input1,"onUpdate:modelValue":d[4]||(d[4]=e=>f.input1=e),placeholder:"请选择日期"},{suffix:o((()=>[t(j,{class:"el-input__icon"},{default:o((()=>[t(U,{name:"i-ep:calendar"})])),_:1})])),_:1},8,["modelValue"]),t(b,{modelValue:f.input2,"onUpdate:modelValue":d[5]||(d[5]=e=>f.input2=e),placeholder:"请输入内容"},{prefix:o((()=>[t(j,{class:"el-input__icon"},{default:o((()=>[t(U,{name:"i-ep:search"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(x,{title:"文本域",class:"demo"},{default:o((()=>[t(b,{modelValue:f.textarea,"onUpdate:modelValue":d[6]||(d[6]=e=>f.textarea=e),type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"])])),_:1})])}]]);export{f as default};
