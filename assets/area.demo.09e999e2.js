
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,a7 as a,f as r,h as t,w as l,bP as o,bR as s,b as m,Y as i,bQ as d}from"./index.3b0b287f.js";import{E as u,a as n}from"./el-form.1e0549a2.js";import"./el-form-item.2e22de35.js";import{_ as p}from"./index.86bb5b03.js";import"./isEqual.0e04c4ea.js";import"./el-input.a46c7a98.js";import"./event.d298a7ab.js";/* empty css               */import"./el-checkbox.583cc7e2.js";/* empty css                 */import"./index.ad1f103b.js";import"./aria.288df782.js";import"./arrays.21a21ad5.js";import"./_baseFlatten.b75f80cd.js";import"./index.b5881ee8.js";import"./index.4e3493cb.js";import"./validator.9bc318fa.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},b=i("提交");"function"==typeof o&&o(f);const c=e(f,[["render",function(e,o,i,f,c,j){const F=d,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[t(F,{title:"省市区联动",content:"CascaderArea"}),t(_,null,{default:l((()=>[t(x,{modelValue:c.area,"onUpdate:modelValue":o[0]||(o[0]=e=>c.area=e)},null,8,["modelValue"])])),_:1}),t(_,{title:"表单验证"},{default:l((()=>[t(g,{ref:"ruleForm",model:c.ruleForm,rules:c.rules},{default:l((()=>[t(y,{label:"地区",prop:"area"},{default:l((()=>[t(x,{modelValue:c.ruleForm.area,"onUpdate:modelValue":o[1]||(o[1]=e=>c.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),t(y,null,{default:l((()=>[t(V,{type:"primary",onClick:j.submitForm},{default:l((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{c as default};
