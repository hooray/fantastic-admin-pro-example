
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,d7 as l,a4 as t,H as r,b as s,f as o,h as d,w as m}from"./index.45a1a0f2.js";import{v as i}from"./el-loading.bd194390.js";import{E as u,a as p}from"./el-form.2bf48993.js";import"./el-form-item.2e22de35.js";import{E as f}from"./el-input.ec9522af.js";import"./isEqual.e37d1fd8.js";import"./event.d298a7ab.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:v}){const b=n,g=e(),c=e({loading:!1,form:{id:b.id,department_id:b.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=c.value.form.id&&(c.value.loading=!0,l.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:c.value.form.id,department_id:c.value.form.department_id}}).then((e=>{c.value.loading=!1,c.value.form.title=e.data.title})))})),v({submit(e){""==c.value.form.id?g.value.validate((a=>{a&&l.post("pages_example/job/create",c.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):g.value.validate((a=>{a&&l.post("pages_example/job/edit",c.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=f,t=u,n=p,v=i;return r((s(),o("div",null,[d(n,{ref_key:"formRef",ref:g,model:c.value.form,rules:c.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[d(t,{label:"职位",prop:"title"},{default:m((()=>[d(l,{modelValue:c.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,c.value.loading]])}}};export{n as default};
