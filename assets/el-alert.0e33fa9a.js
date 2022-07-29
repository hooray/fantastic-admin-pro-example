
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a9 as e,bf as s,bg as t,d as a,aQ as l,u as i,r as o,c as n,b as c,e as r,w as d,K as f,L as p,J as u,i as y,E as m,n as b,M as v,m as g,f as k,g as h,a2 as S,R as _,h as x,S as w,T as E,_ as T,bh as $,q as B}from"./index.9587bc3d.js";const C=B(T(a({name:"ElAlert",props:e({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:s(t),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),emits:{close:e=>e instanceof MouseEvent},setup(e,{emit:s}){const a=e,{Close:T}=$,B=l(),C=i("alert"),I=o(!0),M=n((()=>t[a.type])),j=n((()=>[C.e("icon"),{[C.is("big")]:!!a.description||!!B.default}])),q=n((()=>a.description||{[C.is("bold")]:B.default})),A=e=>{I.value=!1,s("close",e)};return(e,s)=>(c(),r(E,{name:y(C).b("fade"),persisted:""},{default:d((()=>[f(u("div",{class:b([y(C).b(),y(C).m(e.type),y(C).is("center",e.center),y(C).is(e.effect)]),role:"alert"},[e.showIcon&&y(M)?(c(),r(y(m),{key:0,class:b(y(j))},{default:d((()=>[(c(),r(v(y(M))))])),_:1},8,["class"])):g("v-if",!0),u("div",{class:b(y(C).e("content"))},[e.title||e.$slots.title?(c(),k("span",{key:0,class:b([y(C).e("title"),y(q)])},[h(e.$slots,"title",{},(()=>[S(_(e.title),1)]))],2)):g("v-if",!0),e.$slots.default||e.description?(c(),k("p",{key:1,class:b(y(C).e("description"))},[h(e.$slots,"default",{},(()=>[S(_(e.description),1)]))],2)):g("v-if",!0),e.closable?(c(),k(w,{key:2},[e.closeText?(c(),k("div",{key:0,class:b([y(C).e("close-btn"),y(C).is("customed")]),onClick:A},_(e.closeText),3)):(c(),r(y(m),{key:1,class:b(y(C).e("close-btn")),onClick:A},{default:d((()=>[x(y(T))])),_:1},8,["class"]))],64)):g("v-if",!0)],2)],2),[[p,I.value]])])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]));export{C as E};
