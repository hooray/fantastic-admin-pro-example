
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,d9 as l,a4 as t,H as r,b as s,f as o,h as m,w as d}from"./index.3b0b287f.js";import{v as i}from"./el-loading.55f30254.js";import{E as u,a as p}from"./el-form.1e0549a2.js";import"./el-form-item.2e22de35.js";import{E as f}from"./el-input.a46c7a98.js";import"./isEqual.0e04c4ea.js";import"./event.d298a7ab.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:v}){const b=n,c=e(),g=e({loading:!1,form:{id:b.id,department_id:b.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,l.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:g.value.form.id,department_id:g.value.form.department_id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),v({submit(e){""==g.value.form.id?c.value.validate((a=>{a&&l.post("pages_example/job/create",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):c.value.validate((a=>{a&&l.post("pages_example/job/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=f,t=u,n=p,v=i;return r((s(),o("div",null,[m(n,{ref_key:"formRef",ref:c,model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:d((()=>[m(t,{label:"职位",prop:"title"},{default:d((()=>[m(l,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,g.value.loading]])}}};export{n as default};
