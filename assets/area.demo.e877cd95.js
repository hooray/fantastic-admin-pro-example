
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,a6 as a,f as r,h as l,w as o,bI as t,c7 as s,b as m,a2 as d,c6 as i}from"./index.d45ed42d.js";import{E as u,a as n}from"./el-form.58f5e381.js";import"./el-form-item.e866842d.js";import{_ as p}from"./index.7eb43312.js";import"./isEqual.02b698d2.js";import"./el-input.f0fe7b13.js";import"./event.6c7ea317.js";/* empty css               */import"./el-checkbox.42bf7022.js";/* empty css                 *//* empty css                     */import"./index.9fac6871.js";import"./aria.ca14fa17.js";import"./arrays.65a60b1b.js";import"./_baseFlatten.3fdddd1d.js";import"./index.f5abf247.js";import"./index.ad76f6b9.js";import"./validator.ad7588b1.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},c=d("提交");"function"==typeof t&&t(f);var j=e(f,[["render",function(e,t,d,f,j,b){const F=i,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[l(F,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(x,{modelValue:j.area,"onUpdate:modelValue":t[0]||(t[0]=e=>j.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:j.ruleForm,rules:j.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(x,{modelValue:j.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>j.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:b.submitForm},{default:o((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{j as default};
