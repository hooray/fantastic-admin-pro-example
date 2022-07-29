
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,r as a,o as l,a5 as o,K as t,b as d,f as r,h as s,w as m,J as u,a2 as i,R as p,O as f,cp as n,cq as c}from"./index.252503d3.js";import{v}from"./el-loading.15847d8e.js";import{E as _,a as b}from"./el-form.0205599e.js";import{E as j}from"./el-card.f8ad1c19.js";/* empty css                       *//* empty css                        */import{_ as g}from"./index.a0905797.js";import"./el-form-item.2e22de35.js";import{E as V}from"./el-input.dc2b6950.js";import x from"./index.9e6661f4.js";import{E as y,a as h}from"./index.8fdffc68.js";import"./isEqual.30ea9237.js";/* empty css               */import"./el-checkbox.e9b15308.js";import"./event.d298a7ab.js";/* empty css                 */import"./aria.288df782.js";import"./arrays.21a21ad5.js";import"./_baseFlatten.61e5e347.js";import"./index.52fda3a3.js";import"./index.a7e8837e.js";import"./validator.52792d17.js";import"./el-dialog.32934006.js";import"./el-overlay.4ed61f02.js";import"./use-dialog.2b262b8e.js";import"./index.c0a7b230.js";/* empty css                          */import"./el-table-column.e5cb518b.js";import"./el-tooltip.89296c46.js";const U=i("按件数"),k=i("按重量"),E={class:"freight"},$=i("默认运费"),z=i("首费"),R=i("元"),q=i("续费"),w=i("元"),L=i("启用"),O=i("停用"),A=e({__name:"index",props:{id:{type:[Number,String],default:""}},setup(e,{expose:A}){const F=e,{proxy:I}=f(),J=a({loading:!1,form:{id:F.id,title:"",address:[],type:1,status:!0,first_step:"",first_price:"",continued_step:"",continued_price:"",infos:[]},rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}]}});return l((()=>{""!=J.value.form.id&&(J.value.loading=!0,I.$api.get("pages_example/delivery/detail",{baseURL:"/mock/",params:{id:J.value.form.id}}).then((e=>{J.value.loading=!1,Object.assign(J.value.form,e.data)})))})),A({submit(e){""==J.value.form.id?I.$refs.form.validate((a=>{a&&I.$api.post("pages_example/delivery/create",J.value.form,{baseURL:"/mock/"}).then((()=>{o.success({message:"模拟新增成功",center:!0}),e&&e()}))})):I.$refs.form.validate((a=>{a&&I.$api.post("pages_example/delivery/edit",J.value.form,{baseURL:"/mock/"}).then((()=>{o.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=V,o=_,f=g,A=y,F=h,I=n,K=c,N=j,S=b,B=v;return t((d(),r("div",null,[s(S,{ref:"form",model:J.value.form,rules:J.value.rules,"label-width":"120px","label-suffix":"："},{default:m((()=>[s(o,{label:"名称",prop:"title"},{default:m((()=>[s(l,{modelValue:J.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value.form.title=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1}),s(o,{label:"发货地址",prop:"address"},{default:m((()=>[s(f,{modelValue:J.value.form.address,"onUpdate:modelValue":a[1]||(a[1]=e=>J.value.form.address=e)},null,8,["modelValue"])])),_:1}),s(o,{label:"计价方式"},{default:m((()=>[s(F,{modelValue:J.value.form.type,"onUpdate:modelValue":a[2]||(a[2]=e=>J.value.form.type=e)},{default:m((()=>[s(A,{label:1},{default:m((()=>[U])),_:1}),s(A,{label:2},{default:m((()=>[k])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(o,{label:"运费模版"},{default:m((()=>[u("div",E,[s(N,{shadow:"never"},{header:m((()=>[$])),default:m((()=>[s(K,{gutter:20},{default:m((()=>[s(I,{md:6},{default:m((()=>[s(l,{modelValue:J.value.form.first_step,"onUpdate:modelValue":a[3]||(a[3]=e=>J.value.form.first_step=e),size:"small"},{prepend:m((()=>[i(p(1==J.value.form.type?"首件":"首重"),1)])),append:m((()=>[i(p(1==J.value.form.type?"件":"kg"),1)])),_:1},8,["modelValue"])])),_:1}),s(I,{md:6},{default:m((()=>[s(l,{modelValue:J.value.form.first_price,"onUpdate:modelValue":a[4]||(a[4]=e=>J.value.form.first_price=e),size:"small"},{prepend:m((()=>[z])),append:m((()=>[R])),_:1},8,["modelValue"])])),_:1}),s(I,{md:6},{default:m((()=>[s(l,{modelValue:J.value.form.continued_step,"onUpdate:modelValue":a[5]||(a[5]=e=>J.value.form.continued_step=e),size:"small"},{prepend:m((()=>[i(p(1==J.value.form.type?"续件":"续重"),1)])),append:m((()=>[i(p(1==J.value.form.type?"件":"kg"),1)])),_:1},8,["modelValue"])])),_:1}),s(I,{md:6},{default:m((()=>[s(l,{modelValue:J.value.form.continued_price,"onUpdate:modelValue":a[6]||(a[6]=e=>J.value.form.continued_price=e),size:"small"},{prepend:m((()=>[q])),append:m((()=>[w])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(K,null,{default:m((()=>[s(I,{span:24},{default:m((()=>[s(x,{data:J.value.form.infos,type:J.value.form.type},null,8,["data","type"])])),_:1})])),_:1})])])),_:1}),s(o,{label:"是否启用"},{default:m((()=>[s(F,{modelValue:J.value.form.status,"onUpdate:modelValue":a[7]||(a[7]=e=>J.value.form.status=e)},{default:m((()=>[s(A,{label:!0},{default:m((()=>[L])),_:1}),s(A,{label:!1},{default:m((()=>[O])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[B,J.value.loading]])}}},[["__scopeId","data-v-a606cb45"]]);export{A as default};