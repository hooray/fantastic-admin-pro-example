
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,c as a,cp as l,cq as o,f as t,h as u,w as i,bN as m,bP as n,b as d,i as r,a2 as s,R as h,S as f,X as p,e as _,bO as b}from"./index.252503d3.js";import{E as c,a as v}from"./el-form.0205599e.js";import{E as z,a as g}from"./el-table-column.e5cb518b.js";import{E as $,a as w}from"./el-checkbox.e9b15308.js";/* empty css               */import"./el-tooltip.89296c46.js";/* empty css                          */import"./el-form-item.2e22de35.js";import{E as x}from"./el-input.dc2b6950.js";import"./isEqual.30ea9237.js";import"./index.a7e8837e.js";import"./event.d298a7ab.js";const j={__name:"index",setup(m){const j=e([{name:"站点管理",module:"station",authorization_list:[{name:"查看列表",module:"list"},{name:"查看详情",module:"info"},{name:"停用",module:"disabled"},{name:"编辑",module:"edit"},{name:"启用",module:"enable"}]},{name:"部门管理",module:"department",authorization_list:[{name:"查看列表",module:"list"},{name:"查看详情",module:"info"},{name:"删除",module:"delete"},{name:"编辑",module:"edit"},{name:"新增",module:"new"}]},{name:"职位管理",module:"department_job",authorization_list:[{name:"查看列表",module:"list"},{name:"查看详情",module:"info"},{name:"新增",module:"new"},{name:"编辑",module:"edit"},{name:"删除",module:"delete"}]},{name:"角色管理",module:"role",authorization_list:[{name:"查看列表",module:"list"},{name:"查看详情",module:"info"},{name:"删除",module:"delete"},{name:"编辑",module:"edit"},{name:"新增",module:"new"}]},{name:"管理员管理",module:"admin_manager",authorization_list:[{name:"查看列表",module:"list"},{name:"查看详情",module:"info"},{name:"编辑权限",module:"authorization_edit"},{name:"查看权限详情",module:"authorization_info"},{name:"删除",module:"delete"},{name:"停用",module:"disabled"},{name:"编辑",module:"edit"},{name:"启用",module:"enable"},{name:"新增",module:"new"},{name:"重置密码",module:"reset"}]}]),V=e({name:"",brief:"",authorization_list:[]}),E=e({name:[{required:!0,message:"请输入名称",trigger:"blur"}],authorization_list:[{validator:(e,a,l)=>{0==a.length?l(new Error("至少选择一个权限")):l()},trigger:"change"}]}),k=a((()=>{let e=[];return j.value.forEach((a=>{let l=[];a.authorization_list.forEach((e=>{V.value.authorization_list.includes(`${a.module}.${e.module}`)&&l.push(`${a.module}.${e.module}`)})),e.push({checkAll:l.length==a.authorization_list.length,indeterminate:l.length>0&&l.length<a.authorization_list.length})})),e}));return(e,a)=>{const m=b,U=x,y=c,q=$,A=z,R=w,C=g,N=v,O=l,P=o,S=n;return d(),t("div",null,[u(m,{title:"权限",content:"该页面生成的权限格式，可直接用于本项目的权限模式"}),u(S,null,{default:i((()=>[u(P,null,{default:i((()=>[u(O,{md:24,lg:18},{default:i((()=>[u(N,{model:V.value,rules:E.value,"label-width":"120px","label-suffix":"："},{default:i((()=>[u(y,{label:"名称",prop:"name"},{default:i((()=>[u(U,{modelValue:V.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value.name=e),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),u(y,{label:"简介"},{default:i((()=>[u(U,{modelValue:V.value.brief,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value.brief=e),type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"请输入角色简介"},null,8,["modelValue"])])),_:1}),u(y,{label:"权限",prop:"authorization_list"},{default:i((()=>[u(C,{data:j.value,border:"",stripe:"","highlight-current-row":"",style:{"line-height":"normal"}},{default:i((()=>[u(A,{prop:"name",width:"200",label:"模块"},{default:i((e=>[u(q,{modelValue:r(k)[e.$index].checkAll,"onUpdate:modelValue":a=>r(k)[e.$index].checkAll=a,indeterminate:r(k)[e.$index].indeterminate,onChange:a=>{return l=a,o=e.$index,void(l?j.value[o].authorization_list.forEach((e=>{V.value.authorization_list.includes(`${j.value[o].module}.${e.module}`)||V.value.authorization_list.push(`${j.value[o].module}.${e.module}`)})):j.value[o].authorization_list.forEach((e=>{V.value.authorization_list=V.value.authorization_list.filter((a=>a!=`${j.value[o].module}.${e.module}`))})));var l,o}},{default:i((()=>[s(h(e.row.name),1)])),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"])])),_:1}),u(A,{label:"权限"},{default:i((e=>[u(R,{modelValue:V.value.authorization_list,"onUpdate:modelValue":a[2]||(a[2]=e=>V.value.authorization_list=e)},{default:i((()=>[(d(!0),t(f,null,p(e.row.authorization_list,(a=>(d(),_(q,{key:`${e.row.module}.${a.module}`,label:`${e.row.module}.${a.module}`},{default:i((()=>[s(h(a.name),1)])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue"])])),_:1})])),_:1},8,["data"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1})])}}};"function"==typeof m&&m(j);export{j as default};