
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,a5 as a,f as r,h as l,w as o,bH as t,c6 as s,b as m,a1 as i,c5 as d}from"./index.61feeb3e.js";import{E as u,a as n}from"./el-form.857b5237.js";import"./el-form-item.3d23d1d6.js";import{_ as p}from"./index.b5a222a5.js";import"./isEqual.af6f6594.js";import"./el-input.b6838b68.js";import"./event.fa25aaef.js";/* empty css               */import"./el-checkbox.96dd2709.js";/* empty css                 *//* empty css                     */import"./index.392386ee.js";import"./aria.1f702b5f.js";import"./arrays.7864a962.js";import"./_baseFlatten.6aed46e6.js";import"./index.e337c259.js";import"./index.dd458a8a.js";import"./validator.39d2a3bb.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},j=i("提交");"function"==typeof t&&t(f);var b=e(f,[["render",function(e,t,i,f,b,c){const F=d,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[l(F,{title:"省市区联动",content:"CascaderArea"}),l(_,null,{default:o((()=>[l(x,{modelValue:b.area,"onUpdate:modelValue":t[0]||(t[0]=e=>b.area=e)},null,8,["modelValue"])])),_:1}),l(_,{title:"表单验证"},{default:o((()=>[l(g,{ref:"ruleForm",model:b.ruleForm,rules:b.rules},{default:o((()=>[l(y,{label:"地区",prop:"area"},{default:o((()=>[l(x,{modelValue:b.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=e=>b.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),l(y,null,{default:o((()=>[l(V,{type:"primary",onClick:c.submitForm},{default:o((()=>[j])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{b as default};
