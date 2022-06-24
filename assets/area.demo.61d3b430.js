
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,a5 as a,f as r,h as l,w as o,bG as t,c5 as s,b as m,a1 as d,c4 as i}from"./index.40e497bb.js";import{E as u,a as n}from"./el-form.c2395b98.js";import"./el-form-item.3d23d1d6.js";import{_ as p}from"./index.2c365abc.js";import"./isEqual.ed3e7cee.js";/* empty css                 *//* empty css               */import"./el-checkbox.96f9428b.js";import"./event2.c09267d7.js";/* empty css                 *//* empty css                     */import"./index2.34d32a4c.js";import"./aria2.dceaa135.js";import"./arrays2.9d0dd0a1.js";import"./_baseFlatten.e2e8ba86.js";import"./index2.06bc8164.js";import"./index2.93e14b62.js";import"./index2.f762a04f.js";import"./validator2.5d00b7e9.js";const c={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},f=d("提交");"function"==typeof t&&t(c);var b=e(c,[["render",function(e,t,d,c,b,j){const x=i,F=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[l(x,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(F,{modelValue:b.area,"onUpdate:modelValue":t[0]||(t[0]=e=>b.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:b.ruleForm,rules:b.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(F,{modelValue:b.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>b.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:j.submitForm},{default:o((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{b as default};
