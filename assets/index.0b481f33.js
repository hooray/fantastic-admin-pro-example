
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as t,F as l,b as r,f as s,h as o,w as m,H as i}from"./index.5043a866.js";import{v as d}from"./el-loading.884e109c.js";import{E as u,a as p}from"./el-form.90522072.js";import"./el-form-item.3d23d1d6.js";import{E as f}from"./el-input.47be8b34.js";import"./isEqual.4c229d6b.js";import"./event.a088884a.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:v}){const b=n,{proxy:c}=i(),g=e({loading:!1,form:{id:b.id,department_id:b.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,c.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:g.value.form.id,department_id:g.value.form.department_id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),v({submit(e){""==g.value.form.id?c.$refs.form.validate((a=>{a&&c.$api.post("pages_example/job/create",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):c.$refs.form.validate((a=>{a&&c.$api.post("pages_example/job/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const t=f,i=u,n=p,v=d;return l((r(),s("div",null,[o(n,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[o(i,{label:"职位",prop:"title"},{default:m((()=>[o(t,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,g.value.loading]])}}};export{n as default};