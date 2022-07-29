
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,a7 as a,f as r,h as t,w as l,bP as o,bQ as s,b as m,Y as d,bT as i}from"./index.45a1a0f2.js";import{E as u,a as n}from"./el-form.2bf48993.js";import"./el-form-item.2e22de35.js";import{_ as p}from"./index.066cadb0.js";import"./isEqual.e37d1fd8.js";import"./el-input.ec9522af.js";import"./event.d298a7ab.js";/* empty css               */import"./el-checkbox.4bb145da.js";/* empty css                 */import"./index.a8111417.js";import"./aria.288df782.js";import"./arrays.21a21ad5.js";import"./_baseFlatten.441758d7.js";import"./index.476552b9.js";import"./index.d877313e.js";import"./validator.d7f5f1e8.js";const f={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},b=d("提交");"function"==typeof o&&o(f);const j=e(f,[["render",function(e,o,d,f,j,c){const F=i,x=p,_=s,y=u,V=a,g=n;return m(),r("div",null,[t(F,{title:"省市区联动",content:"CascaderArea"}),t(_,null,{default:l((()=>[t(x,{modelValue:j.area,"onUpdate:modelValue":o[0]||(o[0]=e=>j.area=e)},null,8,["modelValue"])])),_:1}),t(_,{title:"表单验证"},{default:l((()=>[t(g,{ref:"ruleForm",model:j.ruleForm,rules:j.rules},{default:l((()=>[t(y,{label:"地区",prop:"area"},{default:l((()=>[t(x,{modelValue:j.ruleForm.area,"onUpdate:modelValue":o[1]||(o[1]=e=>j.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),t(y,null,{default:l((()=>[t(V,{type:"primary",onClick:c.submitForm},{default:l((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}]]);export{j as default};
