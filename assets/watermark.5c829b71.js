
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as a,c as e,f as t,h as l,w as n,bG as o,c5 as s,b as r,i as u,bh as i,a1 as c,c4 as d}from"./index.8f9b9927.js";/* empty css                       *//* empty css                        */import{E as m,a as p}from"./index2.f51c1a29.js";import"./event2.c09267d7.js";const f=c("开启"),b=c("关闭"),_={__name:"watermark",setup(o){const c=a(),_=e({get:function(){return c.app.enableWatermark},set:function(a){c.$patch((e=>{e.app.enableWatermark=a}))}});return(a,e)=>{const o=d,c=m,j=p,v=s;return r(),t("div",null,[l(o,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),l(v,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:n((()=>[l(j,{modelValue:u(_),"onUpdate:modelValue":e[0]||(e[0]=a=>i(_)?_.value=a:null)},{default:n((()=>[l(c,{label:!0},{default:n((()=>[f])),_:1}),l(c,{label:!1},{default:n((()=>[b])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};"function"==typeof o&&o(_);export{_ as default};