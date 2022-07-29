
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,r as t,o as e,E as s,a8 as n,cn as l,co as c,f as d,h as i,w as o,bN as r,O as u,bO as m,b as f,J as _,a2 as v,Q as h,bP as g}from"./index.9587bc3d.js";const p=v(" node-qrcode 官网 "),q=["src"],y={ref:"canvas"},b=["src"],E=["src"],$={__name:"qrcode",setup(a){const{proxy:r}=u(),v=t(""),$=t(""),w=t("");return e((()=>{r.$qrcode.toDataURL("Fantastic-admin 真棒！").then((a=>{v.value=a})).catch((a=>{})),r.$qrcode.toCanvas(r.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((a=>{})),r.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((a=>{$.value=a})).catch((a=>{})),r.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((a=>{w.value=a})).catch((a=>{}))})),(a,t)=>{const e=h,r=s,u=n,x=m,F=g,k=l,D=c;return f(),d("div",null,[i(x,{title:"二维码"},{default:o((()=>[i(u,{onClick:t[0]||(t[0]=a=>{return t="https://github.com/soldair/node-qrcode",void window.open(t,"top");var t})},{icon:o((()=>[i(r,null,{default:o((()=>[i(e,{name:"i-ep:link"})])),_:1})])),default:o((()=>[p])),_:1})])),_:1}),i(D,{gutter:20,style:{margin:"0 10px"}},{default:o((()=>[i(k,{sm:6},{default:o((()=>[i(F,{title:"渲染成 img 标签",style:{margin:"0"}},{default:o((()=>[_("img",{src:v.value},null,8,q)])),_:1})])),_:1}),i(k,{sm:6},{default:o((()=>[i(F,{title:"渲染成 canvas 标签",style:{margin:"0"}},{default:o((()=>[_("canvas",y,null,512)])),_:1})])),_:1}),i(k,{sm:6},{default:o((()=>[i(F,{title:"自定义颜色",style:{margin:"0"}},{default:o((()=>[_("img",{src:$.value},null,8,b)])),_:1})])),_:1}),i(k,{sm:6},{default:o((()=>[i(F,{title:"指定宽度",style:{margin:"0"}},{default:o((()=>[_("img",{src:w.value},null,8,E)])),_:1})])),_:1})])),_:1})])}}};"function"==typeof r&&r($);const w=a($,[["__scopeId","data-v-4dc8a900"]]);export{w as default};
