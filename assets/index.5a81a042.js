
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as t,F as l,b as r,f as s,h as o,w as m,H as i}from"./index.61feeb3e.js";import{v as d}from"./el-loading.68825c60.js";import{E as u,a as p}from"./el-form.857b5237.js";import"./el-form-item.3d23d1d6.js";import{E as f}from"./el-input.b6838b68.js";import"./isEqual.af6f6594.js";import"./event.fa25aaef.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:v}){const b=n,{proxy:g}=i(),c=e({loading:!1,form:{id:b.id,department_id:b.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=c.value.form.id&&(c.value.loading=!0,g.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:c.value.form.id,department_id:c.value.form.department_id}}).then((e=>{c.value.loading=!1,c.value.form.title=e.data.title})))})),v({submit(e){""==c.value.form.id?g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/job/create",c.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/job/edit",c.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const t=f,i=u,n=p,v=d;return l((r(),s("div",null,[o(n,{ref:"form",model:c.value.form,rules:c.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[o(i,{label:"职位",prop:"title"},{default:m((()=>[o(t,{modelValue:c.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,c.value.loading]])}}};export{n as default};
