
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,o as a,a8 as l,F as o,b as r,f as m,h as u,w as s,a1 as t,H as d}from"./index.ec00d83b.js";import{v as i}from"./el-loading.c2b21edd.js";import{E as n,a as p}from"./el-form.ec27b2eb.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import{E as f}from"./el-input.16c29a96.js";import{E as c,a as b}from"./index2.8ce8a3fa.js";import"./isEqual.2baeb243.js";import"./event2.c09267d7.js";const g=t("保密"),v=t("男"),x=t("女"),_={__name:"index",props:{id:{type:[Number,String],default:""}},setup(t,{expose:_}){const V=t,{proxy:h}=d(),j=e({loading:!1,form:{id:V.id,account:"",name:"",mobile:"",sex:"2"},rules:{account:[{required:!0,message:"请输入帐号",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:(e,a,l)=>{let o={key:"mobile",value:a};""!=j.value.form.id&&(o.id=j.value.form.id),h.$api.get("pages_example/manager/check",{baseURL:"/mock/",params:o}).then((e=>{e.data.exist?l(new Error("手机号已存在")):l()}))},trigger:"blur"}]}});return a((()=>{""!=j.value.form.id&&(j.value.loading=!0,h.$api.get("pages_example/manager/detail",{baseURL:"/mock/",params:{id:j.value.form.id}}).then((e=>{j.value.loading=!1,j.value.form.account=e.data.account,j.value.form.name=e.data.name,j.value.form.mobile=e.data.mobile})))})),_({submit(e){""==j.value.form.id?h.$refs.form.validate((a=>{a&&h.$api.post("pages_example/manager/create",j.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟新增成功",center:!0}),e&&e()}))})):h.$refs.form.validate((a=>{a&&h.$api.post("pages_example/manager/edit",j.value.form,{baseURL:"/mock/"}).then((()=>{l.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=f,t=n,d=c,_=b,V=p,h=i;return o((r(),m("div",null,[u(V,{ref:"form",model:j.value.form,rules:j.value.rules,"label-width":"120px","label-suffix":"："},{default:s((()=>[u(t,{label:"帐号",prop:"account"},{default:s((()=>[u(l,{modelValue:j.value.form.account,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value.form.account=e),placeholder:"请输入帐号"},null,8,["modelValue"])])),_:1}),u(t,{label:"姓名",prop:"name"},{default:s((()=>[u(l,{modelValue:j.value.form.name,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value.form.name=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),u(t,{label:"手机号",prop:"mobile"},{default:s((()=>[u(l,{modelValue:j.value.form.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>j.value.form.mobile=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),u(t,{label:"性别",prop:"sex"},{default:s((()=>[u(_,{modelValue:j.value.form.sex,"onUpdate:modelValue":a[3]||(a[3]=e=>j.value.form.sex=e)},{default:s((()=>[u(d,{label:"2"},{default:s((()=>[g])),_:1}),u(d,{label:"1"},{default:s((()=>[v])),_:1}),u(d,{label:"0"},{default:s((()=>[x])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[h,j.value.loading]])}}};export{_ as default};