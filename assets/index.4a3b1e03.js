
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,d7 as l,a4 as t,H as r,b as s,f as o,h as d,w as m}from"./index.503ec71c.js";import{v as i}from"./el-loading.fc1c50fe.js";import{E as u,a as f}from"./el-form.b1df7afc.js";import"./el-form-item.2e22de35.js";import{E as p}from"./el-input.546a1988.js";import"./isEqual.add373df.js";import"./event.d298a7ab.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:v}){const c=n,b=e(),g=e({loading:!1,form:{id:c.id,department_id:c.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,l.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:g.value.form.id,department_id:g.value.form.department_id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),v({submit(e){""==g.value.form.id?b.value.validate((a=>{a&&l.post("pages_example/job/create",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):b.value.validate((a=>{a&&l.post("pages_example/job/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=p,t=u,n=f,v=i;return r((s(),o("div",null,[d(n,{ref_key:"formRef",ref:b,model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[d(t,{label:"职位",prop:"title"},{default:m((()=>[d(l,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,g.value.loading]])}}};export{n as default};
