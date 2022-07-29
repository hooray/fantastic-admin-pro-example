
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a5 as t,K as l,b as r,f as s,h as o,w as m,O as i}from"./index.9587bc3d.js";import{v as d}from"./el-loading.7b1b970a.js";import{E as u,a as p}from"./el-form.569642f0.js";import"./el-form-item.2e22de35.js";import{E as f}from"./el-input.54ba849c.js";import"./isEqual.f9b5563e.js";import"./event.d298a7ab.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:b}){const v=n,{proxy:c}=i(),g=e({loading:!1,form:{id:v.id,department_id:v.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,c.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:g.value.form.id,department_id:g.value.form.department_id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),b({submit(e){""==g.value.form.id?c.$refs.form.validate((a=>{a&&c.$api.post("pages_example/job/create",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):c.$refs.form.validate((a=>{a&&c.$api.post("pages_example/job/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const t=f,i=u,n=p,b=d;return l((r(),s("div",null,[o(n,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[o(i,{label:"职位",prop:"title"},{default:m((()=>[o(t,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[b,g.value.loading]])}}};export{n as default};
