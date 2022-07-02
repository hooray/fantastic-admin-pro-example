
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,a2 as a,y as l,E as t,a5 as s,f as u,h as o,w as d,i,m as n,bH as p,c5 as r,c6 as c,b as m,a1 as f,a8 as v,P as _}from"./index.5043a866.js";import{E as b}from"./el-input.47be8b34.js";import"./event.a088884a.js";const V=f(" VueUse 官网 useClipboard "),k={key:0},y=f("复制"),C={__name:"clipboard",setup(p){const f=e(""),C=e(""),{text:j,copy:w,copied:x,isSupported:U}=a();return l(x,(e=>{e&&v.success(`复制成功：${j.value}`)})),(e,a)=>{const l=_,p=t,v=s,j=r,x=b,h=c;return m(),u("div",null,[o(j,{title:"剪贴板"},{default:d((()=>[o(v,{onClick:a[0]||(a[0]=e=>{return a="https://vueuse.org/core/useClipboard/",void window.open(a,"top");var a})},{icon:d((()=>[o(p,null,{default:d((()=>[o(l,{name:"i-ep:link"})])),_:1})])),default:d((()=>[V])),_:1})])),_:1}),i(U)?(m(),u("div",k,[o(h,{title:"输入内容，并点击复制按钮"},{default:d((()=>[o(x,{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=e=>f.value=e)},{append:d((()=>[o(v,{onClick:a[1]||(a[1]=e=>i(w)(f.value))},{default:d((()=>[y])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(h,{title:"复制成功后可在这粘贴测试"},{default:d((()=>[o(x,{modelValue:C.value,"onUpdate:modelValue":a[3]||(a[3]=e=>C.value=e)},null,8,["modelValue"])])),_:1})])):n("v-if",!0)])}}};"function"==typeof p&&p(C);export{C as default};
