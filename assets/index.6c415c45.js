
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.8746269c.js";import{A as a,r as l,c as t,E as s,a8 as u,f as i,h as d,J as o,w as n,bM as r,C as m,b as p,i as f,b8 as v,a2 as b,bN as h,Q as c,U as _,V as g}from"./index.14f3ec2e.js";/* empty css                       *//* empty css                        */import{E as j}from"./el-slider.62932bf8.js";import"./el-input-number.806ad54a.js";import"./el-input.36e45e3c.js";import"./el-tooltip.89296c46.js";import{E as x,a as V}from"./index.6a6be2fd.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";const w=e=>(_("data-v-4a7d5d79"),e=e(),g(),e),y={class:"example"},E={class:"bottom"},U=w((()=>o("h2",null,"左侧栏",-1))),k=w((()=>o("p",null,"调整宽度",-1))),S={class:"right"},C=w((()=>o("h2",null,"右侧栏",-1))),A=w((()=>o("p",null,"调整宽度",-1))),I=w((()=>o("h2",null,"模式选择",-1))),J=b(" 三栏布局 "),M=b(" 左侧双栏布局 "),N=b(" 右侧双栏布局 "),Q=w((()=>o("h2",null,"示例页面",-1))),q=b("查看"),z={__name:"index",setup(a){const r=m(),b=l(!0),_=l(!0),g=l(300),w=l(300),z=t({get:()=>b.value&&_.value?"three":b.value&&!_.value?"left":!b.value&&_.value?"right":void 0,set(e){switch(e){case"three":b.value=!0,_.value=!0;break;case"left":b.value=!0,_.value=!1;break;case"right":b.value=!1,_.value=!0}}});return(a,l)=>{const t=h,m=j,B=c,D=s,F=x,G=V,H=u,K=e;return p(),i("div",y,[d(t,{title:"布局容器",content:"提供双栏、三栏布局，侧栏支持折叠。"}),o("div",E,[d(K,{"enable-left-side":b.value,"enable-right-side":_.value,"left-side-width":g.value,"right-side-width":w.value},{leftSide:n((()=>[U,k,d(m,{modelValue:g.value,"onUpdate:modelValue":l[0]||(l[0]=e=>g.value=e),step:10,min:250,max:350},null,8,["modelValue"])])),rightSide:n((()=>[o("div",S,[C,A,d(m,{modelValue:w.value,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value=e),step:10,min:250,max:350},null,8,["modelValue"])])])),default:n((()=>[I,d(G,{modelValue:f(z),"onUpdate:modelValue":l[2]||(l[2]=e=>v(z)?z.value=e:null)},{default:n((()=>[d(F,{label:"three"},{default:n((()=>[d(D,null,{default:n((()=>[d(B,{name:"i-bi:layout-three-columns"})])),_:1}),J])),_:1}),d(F,{label:"left"},{default:n((()=>[d(D,null,{default:n((()=>[d(B,{name:"i-bi:layout-sidebar"})])),_:1}),M])),_:1}),d(F,{label:"right"},{default:n((()=>[d(D,null,{default:n((()=>[d(B,{name:"i-bi:layout-sidebar-reverse"})])),_:1}),N])),_:1})])),_:1},8,["modelValue"]),Q,d(H,{onClick:l[3]||(l[3]=e=>f(r).push({name:"pagesExampleSidelayout"}))},{default:n((()=>[q])),_:1})])),_:1},8,["enable-left-side","enable-right-side","left-side-width","right-side-width"])])])}}};"function"==typeof r&&r(z);const B=a(z,[["__scopeId","data-v-4a7d5d79"]]);export{B as default};
