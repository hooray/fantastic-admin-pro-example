
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,A as e,c as i,b as s,e as a,w as r,G as n,h as o,k as d,i as l,L as c,E as h,cW as p,f as u,bP as g,bR as f,bQ as m}from"./index.3b0b287f.js";const w={class:"image-slot"},b=t({name:"ImagePreview"}),v=e(Object.assign(b,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,u=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),g=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const f=c,m=h,b=p;return s(),a(b,{src:t.src,fit:"cover",style:d(`width:${l(u)};height:${l(g)};`),"preview-src-list":[t.src]},{error:r((()=>[n("div",w,[o(m,null,{default:r((()=>[o(f,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-22e0aef4"]]),y={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof g&&g(y);const x=e(y,[["render",function(t,e,i,a,d,l){const c=m,h=v,p=f;return s(),u("div",null,[o(c,{title:"图片预览",content:"ImagePreview"}),o(p,null,{default:r((()=>[n("div",null,[o(h,{src:"https://hooray.gitee.io/fantastic-admin/logo.png",width:200},null,8,["src"])])])),_:1}),o(p,{title:"图片加载失败时"},{default:r((()=>[n("div",null,[o(h,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{x as default};
