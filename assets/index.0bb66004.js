
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.4e1ad584.js";import{A as a,r as l,c as t,E as s,a6 as u,f as i,h as d,F as o,w as n,bI as r,K as m,b as f,i as p,b9 as v,U as b,V as h,a2 as c,c6 as _,Q as g}from"./index.8029e3e3.js";/* empty css                       *//* empty css                        */import{E as j}from"./el-slider.2ff3163d.js";import"./el-input-number.950d9392.js";import"./el-input.636fea0c.js";import"./el-tooltip.0ca4bad9.js";import{E as x,a as V}from"./index.ffb0aaf3.js";import"./event.a088884a.js";import"./index.7fe682c4.js";const w=e=>(b("data-v-c9f13ba6"),e=e(),h(),e),y={class:"example"},E={class:"bottom"},U=w((()=>o("h2",null,"左侧栏",-1))),k=w((()=>o("p",null,"调整宽度",-1))),S={class:"right"},I=w((()=>o("h2",null,"右侧栏",-1))),A=w((()=>o("p",null,"调整宽度",-1))),C=w((()=>o("h2",null,"模式选择",-1))),F=c(" 三栏布局 "),K=c(" 左侧双栏布局 "),Q=c(" 右侧双栏布局 "),q=w((()=>o("h2",null,"示例页面",-1))),z=c("查看"),B={__name:"index",setup(a){const r=m(),b=l(!0),h=l(!0),c=l(300),w=l(300),B=t({get:()=>b.value&&h.value?"three":b.value&&!h.value?"left":!b.value&&h.value?"right":void 0,set(e){switch(e){case"three":b.value=!0,h.value=!0;break;case"left":b.value=!0,h.value=!1;break;case"right":b.value=!1,h.value=!0}}});return(a,l)=>{const t=_,m=j,D=g,G=s,H=x,J=V,L=u,M=e;return f(),i("div",y,[d(t,{title:"布局容器",content:"提供双栏、三栏布局，侧栏支持折叠。"}),o("div",E,[d(M,{"enable-left-side":b.value,"enable-right-side":h.value,"left-side-width":c.value,"right-side-width":w.value},{leftSide:n((()=>[U,k,d(m,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),step:10,min:250,max:350},null,8,["modelValue"])])),rightSide:n((()=>[o("div",S,[I,A,d(m,{modelValue:w.value,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value=e),step:10,min:250,max:350},null,8,["modelValue"])])])),default:n((()=>[C,d(J,{modelValue:p(B),"onUpdate:modelValue":l[2]||(l[2]=e=>v(B)?B.value=e:null)},{default:n((()=>[d(H,{label:"three"},{default:n((()=>[d(G,null,{default:n((()=>[d(D,{name:"i-bi:layout-three-columns"})])),_:1}),F])),_:1}),d(H,{label:"left"},{default:n((()=>[d(G,null,{default:n((()=>[d(D,{name:"i-bi:layout-sidebar"})])),_:1}),K])),_:1}),d(H,{label:"right"},{default:n((()=>[d(G,null,{default:n((()=>[d(D,{name:"i-bi:layout-sidebar-reverse"})])),_:1}),Q])),_:1})])),_:1},8,["modelValue"]),q,d(L,{onClick:l[3]||(l[3]=e=>p(r).push({name:"pagesExampleSidelayout"}))},{default:n((()=>[z])),_:1})])),_:1},8,["enable-left-side","enable-right-side","left-side-width","right-side-width"])])])}}};"function"==typeof r&&r(B);var D=a(B,[["__scopeId","data-v-c9f13ba6"]]);export{D as default};
