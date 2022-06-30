
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,r as t,o as e,E as s,a5 as l,cl as n,cm as c,f as r,h as d,w as i,bG as o,H as u,c4 as m,b as f,D as v,a1 as _,P as h,c5 as g}from"./index.ec00d83b.js";const p=_(" node-qrcode 官网 "),q=["src"],y={ref:"canvas"},E=["src"],$=["src"],b={__name:"qrcode",setup(a){const{proxy:o}=u(),_=t(""),b=t(""),w=t("");return e((()=>{o.$qrcode.toDataURL("Fantastic-admin 真棒！").then((a=>{_.value=a})).catch((a=>{})),o.$qrcode.toCanvas(o.$refs.canvas,"Fantastic-admin 真棒！").then((()=>{})).catch((a=>{})),o.$qrcode.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then((a=>{b.value=a})).catch((a=>{})),o.$qrcode.toDataURL("Fantastic-admin 真棒！",{width:100}).then((a=>{w.value=a})).catch((a=>{}))})),(a,t)=>{const e=h,o=s,u=l,x=m,D=g,F=n,k=c;return f(),r("div",null,[d(x,{title:"二维码"},{default:i((()=>[d(u,{onClick:t[0]||(t[0]=a=>{return t="https://github.com/soldair/node-qrcode",void window.open(t,"top");var t})},{icon:i((()=>[d(o,null,{default:i((()=>[d(e,{name:"i-ep:link"})])),_:1})])),default:i((()=>[p])),_:1})])),_:1}),d(k,{gutter:20,style:{margin:"0 10px"}},{default:i((()=>[d(F,{sm:6},{default:i((()=>[d(D,{title:"渲染成 img 标签",style:{margin:"0"}},{default:i((()=>[v("img",{src:_.value},null,8,q)])),_:1})])),_:1}),d(F,{sm:6},{default:i((()=>[d(D,{title:"渲染成 canvas 标签",style:{margin:"0"}},{default:i((()=>[v("canvas",y,null,512)])),_:1})])),_:1}),d(F,{sm:6},{default:i((()=>[d(D,{title:"自定义颜色",style:{margin:"0"}},{default:i((()=>[v("img",{src:b.value},null,8,E)])),_:1})])),_:1}),d(F,{sm:6},{default:i((()=>[d(D,{title:"指定宽度",style:{margin:"0"}},{default:i((()=>[v("img",{src:w.value},null,8,$)])),_:1})])),_:1})])),_:1})])}}};"function"==typeof o&&o(b);var w=a(b,[["__scopeId","data-v-2e631a4c"]]);export{w as default};
