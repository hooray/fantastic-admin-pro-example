
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,a5 as a,f as r,h as l,w as o,bG as t,c5 as s,b as m,a1 as d,c4 as i}from"./index.ec00d83b.js";import{E as u,a as n}from"./el-form.ec27b2eb.js";import"./el-form-item.3d23d1d6.js";import{_ as p}from"./index.75ba8887.js";import"./isEqual.2baeb243.js";import"./el-input.16c29a96.js";import"./event2.c09267d7.js";/* empty css               */import"./el-checkbox.b2d30f3f.js";/* empty css                 *//* empty css                     */import"./index2.8ce8a3fa.js";import"./aria2.dceaa135.js";import"./arrays2.9d0dd0a1.js";import"./_baseFlatten.45720a33.js";import"./index2.cbd2f674.js";import"./index2.31ee39e0.js";import"./validator2.20071a9a.js";const c={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},f=d("提交");"function"==typeof t&&t(c);var j=e(c,[["render",function(e,t,d,c,j,b){const F=i,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[l(F,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(x,{modelValue:j.area,"onUpdate:modelValue":t[0]||(t[0]=e=>j.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:j.ruleForm,rules:j.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(x,{modelValue:j.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>j.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:b.submitForm},{default:o((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{j as default};
