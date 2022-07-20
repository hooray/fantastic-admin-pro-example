
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,A as e,c as i,b as s,e as a,w as r,F as n,h as d,k as o,i as c,Q as l,E as h,cS as p,f as u,bI as g,c7 as f,c6 as m}from"./index.d45ed42d.js";const w={class:"image-slot"},v=t({name:"ImagePreview"});var y=e(Object.assign(v,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,u=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),g=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const f=l,m=h,v=p;return s(),a(v,{src:t.src,fit:"cover",style:o(`width:${c(u)};height:${c(g)};`),"preview-src-list":[t.src]},{error:r((()=>[n("div",w,[d(m,null,{default:r((()=>[d(f,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-1cef01d2"]]);const b={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof g&&g(b);var x=e(b,[["render",function(t,e,i,a,o,c){const l=m,h=y,p=f;return s(),u("div",null,[d(l,{title:"图片预览",content:"ImagePreview"}),d(p,null,{default:r((()=>[n("div",null,[d(h,{src:"https://hooray.gitee.io/fantastic-admin/logo.png",width:200},null,8,["src"])])])),_:1}),d(p,{title:"图片加载失败时"},{default:r((()=>[n("div",null,[d(h,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{x as default};
