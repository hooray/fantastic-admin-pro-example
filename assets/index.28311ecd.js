
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,d9 as l,a4 as o,H as s,b as t,f as r,h as m,w as i}from"./index.3b0b287f.js";import{v as u}from"./el-loading.55f30254.js";import{E as d,a as f}from"./el-form.1e0549a2.js";import"./el-form-item.2e22de35.js";import{E as p}from"./el-input.a46c7a98.js";import"./isEqual.0e04c4ea.js";import"./event.d298a7ab.js";const n={__name:"index",props:{id:{type:[Number,String],default:""}},setup(n,{expose:v}){const c=n,g=e(),b=e({loading:!1,form:{id:c.id,title:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}});return a((()=>{""!=b.value.form.id&&(b.value.loading=!0,l.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:b.value.form.id}}).then((e=>{b.value.loading=!1,b.value.form.title=e.data.title})))})),v({submit(e){""==b.value.form.id?g.value.validate((a=>{a&&l.post("pages_example/form_mode/create",b.value.form,{baseURL:"/mock/"}).then((()=>{o.success({message:"模拟新增成功",center:!0}),e&&e()}))})):g.value.validate((a=>{a&&l.post("pages_example/form_mode/edit",b.value.form,{baseURL:"/mock/"}).then((()=>{o.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=p,o=d,n=f,v=u;return s((t(),r("div",null,[m(n,{ref_key:"formRef",ref:g,model:b.value.form,rules:b.value.rules,"label-width":"120px","label-suffix":"："},{default:i((()=>[m(o,{label:"标题",prop:"title"},{default:i((()=>[m(l,{modelValue:b.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value.form.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[v,b.value.loading]])}}};export{n as default};
