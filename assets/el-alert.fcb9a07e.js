
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a8 as e,bh as s,bi as t,d as a,aS as l,u as i,r as o,c,b as n,e as r,w as d,H as f,I as p,G as u,i as y,E as m,n as v,J as b,m as k,f as g,g as h,Y as S,M as _,h as x,N as w,T as E,_ as T,bj as $,q as B}from"./index.503ec71c.js";const C=B(T(a({name:"ElAlert",props:e({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:s(t),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),emits:{close:e=>e instanceof MouseEvent},setup(e,{emit:s}){const a=e,{Close:T}=$,B=l(),C=i("alert"),I=o(!0),j=c((()=>t[a.type])),M=c((()=>[C.e("icon"),{[C.is("big")]:!!a.description||!!B.default}])),q=c((()=>a.description||{[C.is("bold")]:B.default})),A=e=>{I.value=!1,s("close",e)};return(e,s)=>(n(),r(E,{name:y(C).b("fade"),persisted:""},{default:d((()=>[f(u("div",{class:v([y(C).b(),y(C).m(e.type),y(C).is("center",e.center),y(C).is(e.effect)]),role:"alert"},[e.showIcon&&y(j)?(n(),r(y(m),{key:0,class:v(y(M))},{default:d((()=>[(n(),r(b(y(j))))])),_:1},8,["class"])):k("v-if",!0),u("div",{class:v(y(C).e("content"))},[e.title||e.$slots.title?(n(),g("span",{key:0,class:v([y(C).e("title"),y(q)])},[h(e.$slots,"title",{},(()=>[S(_(e.title),1)]))],2)):k("v-if",!0),e.$slots.default||e.description?(n(),g("p",{key:1,class:v(y(C).e("description"))},[h(e.$slots,"default",{},(()=>[S(_(e.description),1)]))],2)):k("v-if",!0),e.closable?(n(),g(w,{key:2},[e.closeText?(n(),g("div",{key:0,class:v([y(C).e("close-btn"),y(C).is("customed")]),onClick:A},_(e.closeText),3)):(n(),r(y(m),{key:1,class:v(y(C).e("close-btn")),onClick:A},{default:d((()=>[x(y(T))])),_:1},8,["class"]))],64)):k("v-if",!0)],2)],2),[[p,I.value]])])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]));export{C as E};
