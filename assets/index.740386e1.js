
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as t,F as l,b as r,f as s,h as o,w as m,H as d}from"./index.859d1f2f.js";import{v as i}from"./el-loading.264180f4.js";import{E as u,a as f}from"./el-form.014673af.js";import"./el-form-item.3d23d1d6.js";import{E as p}from"./el-input.ef35f9c7.js";import"./isEqual.16f09498.js";import"./event2.c09267d7.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:v}){const c=n,{proxy:g}=d(),b=e({loading:!1,form:{id:c.id,department_id:c.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=b.value.form.id&&(b.value.loading=!0,g.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:b.value.form.id,department_id:b.value.form.department_id}}).then((e=>{b.value.loading=!1,b.value.form.title=e.data.title})))})),v({submit(e){""==b.value.form.id?g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/job/create",b.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/job/edit",b.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const t=p,d=u,n=f,v=i;return l((r(),s("div",null,[o(n,{ref:"form",model:b.value.form,rules:b.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[o(d,{label:"职位",prop:"title"},{default:m((()=>[o(t,{modelValue:b.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,b.value.loading]])}}};export{n as default};
