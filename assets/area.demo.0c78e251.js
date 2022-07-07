
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,a6 as a,f as r,h as l,w as o,bI as t,c7 as s,b as m,a2 as i,c6 as d}from"./index.6746a3d3.js";import{E as u,a as n}from"./el-form.65d9f06e.js";import"./el-form-item.3d23d1d6.js";import{_ as p}from"./index.064d0f17.js";import"./isEqual.09ccf48c.js";import"./el-input.a13ee31e.js";import"./event.a088884a.js";/* empty css               */import"./el-checkbox.023fa200.js";/* empty css                 *//* empty css                     */import"./index.3a869ca6.js";import"./aria.7c550f1b.js";import"./arrays.0b773881.js";import"./_baseFlatten.2f22bd4a.js";import"./index.56b6a42b.js";import"./index.66af64ac.js";import"./validator.2566d1ef.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},c=i("提交");"function"==typeof t&&t(f);var j=e(f,[["render",function(e,t,i,f,j,b){const F=d,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[l(F,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(x,{modelValue:j.area,"onUpdate:modelValue":t[0]||(t[0]=e=>j.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:j.ruleForm,rules:j.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(x,{modelValue:j.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>j.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:b.submitForm},{default:o((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{j as default};
