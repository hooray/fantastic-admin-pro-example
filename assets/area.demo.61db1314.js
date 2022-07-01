
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,a5 as a,f as r,h as l,w as o,bH as t,c6 as s,b as m,a1 as i,c5 as d}from"./index.0358e322.js";import{E as u,a as n}from"./el-form.f74fc1bb.js";import"./el-form-item.3d23d1d6.js";import{_ as p}from"./index.d441cfb0.js";import"./isEqual.fb89c671.js";import"./el-input.88480f15.js";import"./event.fa25aaef.js";/* empty css               */import"./el-checkbox.3cad90b1.js";/* empty css                 *//* empty css                     */import"./index.a1e5346e.js";import"./aria.1f702b5f.js";import"./arrays.7864a962.js";import"./_baseFlatten.68da3c29.js";import"./index.fe0afd4c.js";import"./index.11025292.js";import"./validator.b337b744.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},c=i("提交");"function"==typeof t&&t(f);var j=e(f,[["render",function(e,t,i,f,j,b){const F=d,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[l(F,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(x,{modelValue:j.area,"onUpdate:modelValue":t[0]||(t[0]=e=>j.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:j.ruleForm,rules:j.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(x,{modelValue:j.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>j.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:b.submitForm},{default:o((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{j as default};
