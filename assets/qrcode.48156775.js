
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,r as t,o as e,E as s,a8 as n,cp as l,cq as c,f as d,h as i,w as r,bN as o,O as u,bO as m,b as f,J as _,a2 as v,Q as h,bP as g}from"./index.252503d3.js";const p=v(" node-qrcode 官网 "),q=["src"],y={ref:"canvas"},E=["src"],b=["src"],$={__name:"qrcode",setup(a){const{proxy:o}=u(),v=t(""),$=t(""),w=t("");return e((()=>{o.$qrcode.toDataURL("Fantastic-admin 真棒！").then((a=>{v.value=a})).catch((a=>{})),o.$qrcode.toCanvas(o.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((a=>{})),o.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((a=>{$.value=a})).catch((a=>{})),o.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((a=>{w.value=a})).catch((a=>{}))})),(a,t)=>{const e=h,o=s,u=n,x=m,F=g,k=l,D=c;return f(),d("div",null,[i(x,{title:"二维码"},{default:r((()=>[i(u,{onClick:t[0]||(t[0]=a=>{return t="https://github.com/soldair/node-qrcode",void window.open(t,"top");var t})},{icon:r((()=>[i(o,null,{default:r((()=>[i(e,{name:"i-ep:link"})])),_:1})])),default:r((()=>[p])),_:1})])),_:1}),i(D,{gutter:20,style:{margin:"0 10px"}},{default:r((()=>[i(k,{sm:6},{default:r((()=>[i(F,{title:"渲染成 img 标签",style:{margin:"0"}},{default:r((()=>[_("img",{src:v.value},null,8,q)])),_:1})])),_:1}),i(k,{sm:6},{default:r((()=>[i(F,{title:"渲染成 canvas 标签",style:{margin:"0"}},{default:r((()=>[_("canvas",y,null,512)])),_:1})])),_:1}),i(k,{sm:6},{default:r((()=>[i(F,{title:"自定义颜色",style:{margin:"0"}},{default:r((()=>[_("img",{src:$.value},null,8,E)])),_:1})])),_:1}),i(k,{sm:6},{default:r((()=>[i(F,{title:"指定宽度",style:{margin:"0"}},{default:r((()=>[_("img",{src:w.value},null,8,b)])),_:1})])),_:1})])),_:1})])}}};"function"==typeof o&&o($);const w=a($,[["__scopeId","data-v-4dc8a900"]]);export{w as default};
