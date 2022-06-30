
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.5b24d2fa.js";import{d as a,I as s,J as l,x as r,r as o,b as d,f as t,h as u,w as p,bG as n,a1 as m,a8 as i,c4 as f,cl as c,cm as w,c5 as g,a5 as h,H as v}from"./index.859d1f2f.js";import{E as b,a as _}from"./el-form.014673af.js";import"./el-form-item.3d23d1d6.js";import{E as y}from"./el-input.ef35f9c7.js";import"./isEqual.16f09498.js";import"./event2.c09267d7.js";const V=m("提交"),j=a({name:"PersonalEditPassword"}),x=Object.assign(j,{setup(a){const{proxy:n}=v(),m=s(),j=l(),x=r(),k=o({password:"",newpassword:"",checkpassword:""}),q=o({password:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:(e,a,s)=>{a!==k.value.newpassword?s(new Error("请确认新密码")):s()}}]});function E(){n.$refs.formRef.validate((e=>{e&&x.editPassword(k.value).then((()=>{i({type:"success",message:"模拟修改成功，请重新登录"}),x.logout().then((()=>{j.push({name:"login",query:{redirect:m.fullPath}})}))})).catch((()=>{}))}))}return(a,s)=>{const l=f,r=y,o=b,n=_,m=c,i=w,v=g,j=h,x=e;return d(),t("div",null,[u(l,{title:"修改密码",content:"定期修改密码可以提高帐号安全性噢~"}),u(v,null,{default:p((()=>[u(i,null,{default:p((()=>[u(m,{md:24,lg:12},{default:p((()=>[u(n,{ref:"formRef",model:k.value,rules:q.value,"label-width":"120px"},{default:p((()=>[u(o,{label:"原密码",prop:"password"},{default:p((()=>[u(r,{modelValue:k.value.password,"onUpdate:modelValue":s[0]||(s[0]=e=>k.value.password=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1}),u(o,{label:"新密码",prop:"newpassword"},{default:p((()=>[u(r,{modelValue:k.value.newpassword,"onUpdate:modelValue":s[1]||(s[1]=e=>k.value.newpassword=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1}),u(o,{label:"确认新密码",prop:"checkpassword"},{default:p((()=>[u(r,{modelValue:k.value.checkpassword,"onUpdate:modelValue":s[2]||(s[2]=e=>k.value.checkpassword=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1}),u(x,null,{default:p((()=>[u(j,{type:"primary",size:"large",onClick:E},{default:p((()=>[V])),_:1})])),_:1})])}}});"function"==typeof n&&n(x);export{x as default};
