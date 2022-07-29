
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,a8 as a,f as r,h as t,w as l,bN as o,bP as s,b as m,a2 as d,bO as i}from"./index.252503d3.js";import{E as u,a as n}from"./el-form.0205599e.js";import"./el-form-item.2e22de35.js";import{_ as p}from"./index.a0905797.js";import"./isEqual.30ea9237.js";import"./el-input.dc2b6950.js";import"./event.d298a7ab.js";/* empty css               */import"./el-checkbox.e9b15308.js";/* empty css                 */import"./index.8fdffc68.js";import"./aria.288df782.js";import"./arrays.21a21ad5.js";import"./_baseFlatten.61e5e347.js";import"./index.52fda3a3.js";import"./index.a7e8837e.js";import"./validator.52792d17.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},j=d("提交");"function"==typeof o&&o(f);const c=e(f,[["render",function(e,o,d,f,c,b){const F=i,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[t(F,{title:"省市区联动",content:"CascaderArea"}),t(_,null,{default:l((()=>[t(x,{modelValue:c.area,"onUpdate:modelValue":o[0]||(o[0]=e=>c.area=e)},null,8,["modelValue"])])),_:1}),t(_,{title:"表单验证"},{default:l((()=>[t(g,{ref:"ruleForm",model:c.ruleForm,rules:c.rules},{default:l((()=>[t(y,{label:"地区",prop:"area"},{default:l((()=>[t(x,{modelValue:c.ruleForm.area,"onUpdate:modelValue":o[1]||(o[1]=e=>c.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),t(y,null,{default:l((()=>[t(V,{type:"primary",onClick:b.submitForm},{default:l((()=>[j])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{c as default};
