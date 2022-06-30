
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as t,F as l,b as r,f as s,h as o,w as m,H as d}from"./index.ec00d83b.js";import{v as i}from"./el-loading.c2b21edd.js";import{E as u,a as p}from"./el-form.ec27b2eb.js";import"./el-form-item.3d23d1d6.js";import{E as f}from"./el-input.16c29a96.js";import"./isEqual.2baeb243.js";import"./event2.c09267d7.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:b}){const c=n,{proxy:v}=d(),g=e({loading:!1,form:{id:c.id,department_id:c.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,v.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:g.value.form.id,department_id:g.value.form.department_id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),b({submit(e){""==g.value.form.id?v.$refs.form.validate((a=>{a&&v.$api.post("pages_example/job/create",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):v.$refs.form.validate((a=>{a&&v.$api.post("pages_example/job/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const t=f,d=u,n=p,b=i;return l((r(),s("div",null,[o(n,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[o(d,{label:"职位",prop:"title"},{default:m((()=>[o(t,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[b,g.value.loading]])}}};export{n as default};
