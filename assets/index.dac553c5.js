
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as l,F as t,b as r,f as s,h as o,w as i,H as m}from"./index.7b80eec3.js";/* empty css                   */import{E as d,a as u}from"./el-form.31a22a6c.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import{E as p}from"./index2.58f47f0e.js";import{v as f}from"./directive2.c8b0c8aa.js";import"./isEqual.085c2344.js";import"./event2.c09267d7.js";const n={__name:"index",props:{id:{type:[Number,String],default:""}},setup(n,{expose:c}){const v=n,{proxy:g}=m(),b=e({loading:!1,form:{id:v.id,title:""},rules:{title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]}});return a((()=>{""!=b.value.form.id&&(b.value.loading=!0,g.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:b.value.form.id}}).then((e=>{b.value.loading=!1,b.value.form.title=e.data.title})))})),c({submit(e){""==b.value.form.id?g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/department/create",b.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟新增成功",center:!0}),e&&e()}))})):g.$refs.form.validate((a=>{a&&g.$api.post("pages_example/department/edit",b.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=p,m=d,n=u,c=f;return t((r(),s("div",null,[o(n,{ref:"form",model:b.value.form,rules:b.value.rules,"label-width":"120px","label-suffix":"："},{default:i((()=>[o(m,{label:"部门",prop:"title"},{default:i((()=>[o(l,{modelValue:b.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value.form.title=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[c,b.value.loading]])}}};export{n as default};
