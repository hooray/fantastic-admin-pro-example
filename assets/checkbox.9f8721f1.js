
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,f as l,h as a,w as d,bG as c,L as o,c5 as t,b as s,R as u,W as m,e as i,a1 as b,Q as k,c4 as r}from"./index.f897cb43.js";/* empty css                          */import{E as h,a as n,b as f}from"./el-checkbox.2aaa4b7c.js";import V from"./alert.c6428673.js";import"./event2.c09267d7.js";import"./el-alert.c1ba8334.js";import"./el-link.9db5f952.js";const p=["上海","北京","广州","深圳"],_={components:{Alert:V},data:()=>({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:p,checkboxGroup1:["上海"],checked3:!0,checked4:!1})},x=b("备选项"),U=b("备选项1"),j=b("备选项");"function"==typeof c&&c(_);var A=e(_,[["render",function(e,c,V,p,_,A){const C=o("Alert"),G=r,L=h,v=t,y=n,g=f;return s(),l("div",null,[a(C),a(G,{title:"多选框"}),a(v,{title:"基础用法",class:"demo"},{default:d((()=>[a(L,{modelValue:_.checked,"onUpdate:modelValue":c[0]||(c[0]=e=>_.checked=e)},{default:d((()=>[x])),_:1},8,["modelValue"])])),_:1}),a(v,{title:"禁用状态",class:"demo"},{default:d((()=>[a(L,{modelValue:_.checked1,"onUpdate:modelValue":c[1]||(c[1]=e=>_.checked1=e),disabled:""},{default:d((()=>[U])),_:1},8,["modelValue"]),a(L,{modelValue:_.checked2,"onUpdate:modelValue":c[2]||(c[2]=e=>_.checked2=e),disabled:""},{default:d((()=>[j])),_:1},8,["modelValue"])])),_:1}),a(v,{title:"多选框组",class:"demo"},{default:d((()=>[a(y,{modelValue:_.checkList,"onUpdate:modelValue":c[3]||(c[3]=e=>_.checkList=e)},{default:d((()=>[a(L,{label:"复选框 A"}),a(L,{label:"复选框 B"}),a(L,{label:"复选框 C"}),a(L,{label:"禁用",disabled:""}),a(L,{label:"选中且禁用",disabled:""})])),_:1},8,["modelValue"])])),_:1}),a(v,{title:"可选项目数量的限制",class:"demo"},{default:d((()=>[a(y,{modelValue:_.checkedCities,"onUpdate:modelValue":c[4]||(c[4]=e=>_.checkedCities=e),min:1,max:2},{default:d((()=>[(s(!0),l(u,null,m(_.cities,(e=>(s(),i(L,{key:e,label:e},{default:d((()=>[b(k(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(v,{title:"按钮样式",class:"demo"},{default:d((()=>[a(y,{modelValue:_.checkboxGroup1,"onUpdate:modelValue":c[5]||(c[5]=e=>_.checkboxGroup1=e)},{default:d((()=>[(s(!0),l(u,null,m(_.cities,(e=>(s(),i(g,{key:e,label:e},{default:d((()=>[b(k(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(v,{title:"带有边框",class:"demo"},{default:d((()=>[a(L,{modelValue:_.checked3,"onUpdate:modelValue":c[6]||(c[6]=e=>_.checked3=e),label:"备选项1",border:""},null,8,["modelValue"]),a(L,{modelValue:_.checked4,"onUpdate:modelValue":c[7]||(c[7]=e=>_.checked4=e),label:"备选项2",border:""},null,8,["modelValue"])])),_:1})])}]]);export{A as default};
