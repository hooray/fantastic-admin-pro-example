
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as t,F as l,b as r,f as s,h as o,w as i,H as m}from"./index.7b80eec3.js";/* empty css                   */import{E as d,a as u}from"./el-form.31a22a6c.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import{E as p}from"./index2.58f47f0e.js";import{v as f}from"./directive2.c8b0c8aa.js";import"./isEqual.085c2344.js";import"./event2.c09267d7.js";const n={__name:"index",props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(n,{expose:c}){const v=n,{proxy:b}=m(),g=e({loading:!1,form:{id:v.id,department_id:v.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return a((()=>{""!=g.value.form.id&&(g.value.loading=!0,b.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:g.value.form.id,department_id:g.value.form.department_id}}).then((e=>{g.value.loading=!1,g.value.form.title=e.data.title})))})),c({submit(e){""==g.value.form.id?b.$refs.form.validate((a=>{a&&b.$api.post("pages_example/job/create",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟新增成功",center:!0}),e&&e()}))})):b.$refs.form.validate((a=>{a&&b.$api.post("pages_example/job/edit",g.value.form,{baseURL:"/mock/"}).then((()=>{t.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const t=p,m=d,n=u,c=f;return l((r(),s("div",null,[o(n,{ref:"form",model:g.value.form,rules:g.value.rules,"label-width":"120px","label-suffix":"："},{default:i((()=>[o(m,{label:"职位",prop:"title"},{default:i((()=>[o(t,{modelValue:g.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[c,g.value.loading]])}}};export{n as default};
