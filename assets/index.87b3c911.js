
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,d7 as l,a4 as t,H as s,b as r,f as o,h as m,w as d}from"./index.45a1a0f2.js";import{v as i}from"./el-loading.bd194390.js";import{E as u,a as p}from"./el-form.2bf48993.js";import"./el-form-item.2e22de35.js";import{E as f}from"./el-input.ec9522af.js";import"./isEqual.e37d1fd8.js";import"./event.d298a7ab.js";const n={__name:"index",props:{id:{type:[Number,String],default:""}},setup(n,{expose:v}){const c=n,g=e(),b=e({loading:!1,form:{id:c.id,title:""},rules:{title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]}});return a((()=>{""!=b.value.form.id&&(b.value.loading=!0,l.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:b.value.form.id}}).then((e=>{b.value.loading=!1,b.value.form.title=e.data.title})))})),v({submit(e){""==b.value.form.id?g.value.validate((a=>{a&&l.post("pages_example/department/create",b.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):g.value.validate((a=>{a&&l.post("pages_example/department/edit",b.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=f,t=u,n=p,v=i;return s((r(),o("div",null,[m(n,{ref:"form",model:b.value.form,rules:b.value.rules,"label-width":"120px","label-suffix":"："},{default:d((()=>[m(t,{label:"部门",prop:"title"},{default:d((()=>[m(l,{modelValue:b.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value.form.title=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,b.value.loading]])}}};export{n as default};
