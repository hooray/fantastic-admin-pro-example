
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,A as i,r as t,c as a,aS as s,b as d,f as l,i as n,H as r,I as f,k as o,g as u,m as c,G as h,e as v,w as S,h as p,L as g,E as m}from"./index.b5d679a7.js";const y={class:"flex-container"},b={class:"main"},W={class:"main-container"},k=e({name:"ListLayout"}),x=i(Object.assign(k,{props:{enableLeftSide:{type:Boolean,default:!0},enableRightSide:{type:Boolean,default:!0},leftSideWidth:{type:[Number,String],default:300},rightSideWidth:{type:[Number,String],default:300}},setup(e){const i=e,k=t(!0),x=t(!0),L=a((()=>i.enableLeftSide&&!!s().leftSide)),$=a((()=>i.enableRightSide&&!!s().rightSide));return(i,t)=>{const a=g,s=m;return d(),l("div",y,[n(L)?r((d(),l("div",{key:0,class:"left-side",style:o({width:"number"==typeof e.leftSideWidth?`${e.leftSideWidth}px`:e.leftSideWidth})},[u(i.$slots,"leftSide",{},void 0,!0)],4)),[[f,k.value]]):c("v-if",!0),h("div",b,[n(L)?(d(),v(s,{key:0,class:"left-side-icon",onClick:t[0]||(t[0]=e=>k.value=!k.value)},{default:S((()=>[p(a,{name:k.value?"i-ep:caret-left":"i-ep:caret-right"},null,8,["name"])])),_:1})):c("v-if",!0),n($)?(d(),v(s,{key:1,class:"right-side-icon",onClick:t[1]||(t[1]=e=>x.value=!x.value)},{default:S((()=>[p(a,{name:x.value?"i-ep:caret-right":"i-ep:caret-left"},null,8,["name"])])),_:1})):c("v-if",!0),h("div",W,[u(i.$slots,"default",{},void 0,!0)])]),n($)?r((d(),l("div",{key:1,class:"right-side",style:o({width:"number"==typeof e.rightSideWidth?`${e.rightSideWidth}px`:e.rightSideWidth})},[u(i.$slots,"rightSide",{},void 0,!0)],4)),[[f,x.value]]):c("v-if",!0)])}}}),[["__scopeId","data-v-3719a281"]]);export{x as _};
