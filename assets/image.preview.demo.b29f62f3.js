
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,z as e,c as i,b as s,e as a,w as r,D as n,h as o,k as c,i as d,P as l,E as h,cP as p,f as u,bG as g,c5 as f,c4 as m}from"./index.f897cb43.js";const w={class:"image-slot"},v=t({name:"ImagePreview"});var y=e(Object.assign(v,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,u=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),g=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const f=l,m=h,v=p;return s(),a(v,{src:t.src,fit:"cover",style:c(`width:${d(u)};height:${d(g)};`),"preview-src-list":[t.src]},{error:r((()=>[n("div",w,[o(m,null,{default:r((()=>[o(f,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-1cef01d2"]]);const b={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof g&&g(b);var x=e(b,[["render",function(t,e,i,a,c,d){const l=m,h=y,p=f;return s(),u("div",null,[o(l,{title:"图片预览",content:"ImagePreview"}),o(p,null,{default:r((()=>[n("div",null,[o(h,{src:"https://hooray.gitee.io/fantastic-admin/logo.png",width:200},null,8,["src"])])])),_:1}),o(p,{title:"图片加载失败时"},{default:r((()=>[n("div",null,[o(h,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{x as default};
