
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,a5 as a,f as r,h as l,w as o,bG as t,c5 as s,b as d,a1 as m,c4 as i}from"./index.9bf5deda.js";import{E as u,a as n}from"./el-form.e283294d.js";import"./el-form-item.3d23d1d6.js";import{_ as p}from"./index.e7555a98.js";import"./isEqual.8409e679.js";/* empty css                 *//* empty css               */import"./el-checkbox.8db63b03.js";import"./event2.c09267d7.js";/* empty css                 *//* empty css                     */import"./index2.dbf2e9f0.js";import"./aria2.dceaa135.js";import"./arrays2.9d0dd0a1.js";import"./_baseFlatten.f964c888.js";import"./index2.2043e11a.js";import"./index2.3f9e7bbd.js";import"./index2.e5f7e931.js";import"./validator2.7d32b2c9.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},c=m("提交");"function"==typeof t&&t(f);var j=e(f,[["render",function(e,t,m,f,j,b){const x=i,F=p,_=s,y=u,V=a,g=n;return d(),r("div",null,[l(x,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(F,{modelValue:j.area,"onUpdate:modelValue":t[0]||(t[0]=e=>j.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:j.ruleForm,rules:j.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(F,{modelValue:j.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>j.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:b.submitForm},{default:o((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{j as default};
