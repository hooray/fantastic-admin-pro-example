
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,a8 as a,f as r,h as t,w as l,bN as o,bP as s,b as m,a2 as d,bO as i}from"./index.9587bc3d.js";import{E as u,a as n}from"./el-form.569642f0.js";import"./el-form-item.2e22de35.js";import{_ as p}from"./index.c9d67c2a.js";import"./isEqual.f9b5563e.js";import"./el-input.54ba849c.js";import"./event.d298a7ab.js";/* empty css               */import"./el-checkbox.5dadaa98.js";/* empty css                 */import"./index.be7b8a6c.js";import"./aria.288df782.js";import"./arrays.21a21ad5.js";import"./_baseFlatten.4a5c03ef.js";import"./index.63666e97.js";import"./index.fe6bda03.js";import"./validator.85d9abfc.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},c=d("提交");"function"==typeof o&&o(f);const b=e(f,[["render",function(e,o,d,f,b,j){const F=i,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[t(F,{title:"省市区联动",content:"CascaderArea"}),t(_,null,{default:l((()=>[t(x,{modelValue:b.area,"onUpdate:modelValue":o[0]||(o[0]=e=>b.area=e)},null,8,["modelValue"])])),_:1}),t(_,{title:"表单验证"},{default:l((()=>[t(g,{ref:"ruleForm",model:b.ruleForm,rules:b.rules},{default:l((()=>[t(y,{label:"地区",prop:"area"},{default:l((()=>[t(x,{modelValue:b.ruleForm.area,"onUpdate:modelValue":o[1]||(o[1]=e=>b.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),t(y,null,{default:l((()=>[t(V,{type:"primary",onClick:j.submitForm},{default:l((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{b as default};
