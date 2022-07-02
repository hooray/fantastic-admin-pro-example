
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,a5 as a,f as r,h as l,w as o,bH as t,c6 as s,b as m,a1 as i,c5 as d}from"./index.5043a866.js";import{E as u,a as n}from"./el-form.90522072.js";import"./el-form-item.3d23d1d6.js";import{_ as p}from"./index.9b362c25.js";import"./isEqual.4c229d6b.js";import"./el-input.47be8b34.js";import"./event.a088884a.js";/* empty css               */import"./el-checkbox.81ab801f.js";/* empty css                 *//* empty css                     */import"./index.4d68e359.js";import"./aria.7c550f1b.js";import"./arrays.0b773881.js";import"./_baseFlatten.30ed1a4a.js";import"./index.0f8635d0.js";import"./index.96296712.js";import"./validator.d3f16460.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},c=i("提交");"function"==typeof t&&t(f);var j=e(f,[["render",function(e,t,i,f,j,b){const F=d,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[l(F,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(x,{modelValue:j.area,"onUpdate:modelValue":t[0]||(t[0]=e=>j.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:j.ruleForm,rules:j.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(x,{modelValue:j.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>j.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:b.submitForm},{default:o((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{j as default};
