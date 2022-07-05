
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a9 as l,G as t,b as r,f as s,h as o,w as m,I as i}from"./index.a9c2df36.js";import{v as d}from"./el-loading.6702a29c.js";import{E as u,a as p}from"./el-form.b9638204.js";import"./el-form-item.3d23d1d6.js";import{E as f}from"./el-input.c05163b3.js";import"./isEqual.bca6ded6.js";import"./event.a088884a.js";const n={__name:"index",props:{id:{type:[Number,String],default:""}},setup(n,{expose:c}){const v=n,{proxy:g}=i(),b=e({loading:!1,form:{id:v.id,title:""},rules:{title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]}});return a((()=>{""!=b.value.form.id&&(b.value.loading=!0,g.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:b.value.form.id}}).then((e=>{b.value.loading=!1,b.value.form.title=e.data.title})))})),c({submit(e){""==b.value.form.id?g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/department/create",b.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟新增成功",center:!0}),e&&e()}))})):g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/department/edit",b.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=f,i=u,n=p,c=d;return t((r(),s("div",null,[o(n,{ref:"form",model:b.value.form,rules:b.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[o(i,{label:"部门",prop:"title"},{default:m((()=>[o(l,{modelValue:b.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value.form.title=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[c,b.value.loading]])}}};export{n as default};
