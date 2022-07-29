
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a5 as l,K as o,b as r,f as s,h as t,w as m,O as i}from"./index.9587bc3d.js";import{v as d}from"./el-loading.7b1b970a.js";import{E as u,a as f}from"./el-form.569642f0.js";import"./el-form-item.2e22de35.js";import{E as p}from"./el-input.54ba849c.js";import"./isEqual.f9b5563e.js";import"./event.d298a7ab.js";const n={__name:"index",props:{id:{type:[Number,String],default:""}},setup(n,{expose:v}){const b=n,{proxy:c}=i(),g=e({loading:!1,form:{id:b.id,title:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,c.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:g.value.form.id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),v({submit(e){""==g.value.form.id?c.$refs.form.validate((a=>{a&&c.$api.post("pages_example/form_mode/create",g.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟新增成功",center:!0}),e&&e()}))})):c.$refs.form.validate((a=>{a&&c.$api.post("pages_example/form_mode/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=p,i=u,n=f,v=d;return o((r(),s("div",null,[t(n,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[t(i,{label:"标题",prop:"title"},{default:m((()=>[t(l,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,g.value.loading]])}}};export{n as default};
