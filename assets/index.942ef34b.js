
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as l,F as o,b as r,f as s,h as t,w as m,H as i}from"./index.ec00d83b.js";import{v as d}from"./el-loading.c2b21edd.js";import{E as u,a as f}from"./el-form.ec27b2eb.js";import"./el-form-item.3d23d1d6.js";import{E as p}from"./el-input.16c29a96.js";import"./isEqual.2baeb243.js";import"./event2.c09267d7.js";const n={__name:"index",props:{id:{type:[Number,String],default:""}},setup(n,{expose:c}){const v=n,{proxy:b}=i(),g=e({loading:!1,form:{id:v.id,title:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,b.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:g.value.form.id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),c({submit(e){""==g.value.form.id?b.$refs.form.validate((a=>{a&&b.$api.post("pages_example/form_mode/create",g.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟新增成功",center:!0}),e&&e()}))})):b.$refs.form.validate((a=>{a&&b.$api.post("pages_example/form_mode/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=p,i=u,n=f,c=d;return o((r(),s("div",null,[t(n,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[t(i,{label:"标题",prop:"title"},{default:m((()=>[t(l,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[c,g.value.loading]])}}};export{n as default};
