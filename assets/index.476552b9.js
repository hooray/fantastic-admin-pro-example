
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a8 as s,bA as a,d as e,aW as l,u as o,c as n,b as t,f as c,G as i,g as r,n as u,i as p,e as f,w as d,h as k,b6 as m,l as g,E as b,m as y,k as v,T as C,_ as h,q as _}from"./index.45a1a0f2.js";const E=s({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:a,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean});const B=_(h(e({name:"ElTag",props:E,emits:{close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},setup(s,{emit:a}){const e=s,h=l(),_=o("tag"),E=n((()=>{const{type:s,hit:a,effect:l,closable:o,round:n}=e;return[_.b(),_.is("closable",o),_.m(s),_.m(h.value),_.m(l),_.is("hit",a),_.is("round",n)]})),B=s=>{a("close",s)},S=s=>{a("click",s)};return(s,a)=>s.disableTransitions?(t(),c("span",{key:0,class:u(p(E)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(p(b),{key:0,class:u(p(_).e("close")),onClick:g(B,["stop"])},{default:d((()=>[k(p(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),f(C,{key:1,name:`${p(_).namespace.value}-zoom-in-center`,appear:""},{default:d((()=>[i("span",{class:u(p(E)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(p(b),{key:0,class:u(p(_).e("close")),onClick:g(B,["stop"])},{default:d((()=>[k(p(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{B as E,E as t};
