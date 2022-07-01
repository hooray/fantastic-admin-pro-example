
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,r as e,E as l,a5 as t,f as n,h as i,w as u,bH as o,c5 as _,c6 as b,b as m,R as f,W as v,e as d,a1 as s,Q as p,T as I,m as g,P as O}from"./index.0358e322.js";import{E as c,a as r}from"./el-form.f74fc1bb.js";import"./el-form-item.3d23d1d6.js";import"./el-input.88480f15.js";/* empty css               */import{E as h,a as R,b as L}from"./el-select.288a3295.js";/* empty css                     */import"./isEqual.fb89c671.js";import"./event.fa25aaef.js";import"./index.fe0afd4c.js";import"./index.11025292.js";import"./validator.b337b744.js";const w=s(" Animate.css 官网 "),k={key:0,class:"box"},B={__name:"index",setup(a){const o=e([{label:"Attention seekers",options:[{label:"bounce",value:"animate__bounce"},{label:"flash",value:"animate__flash"},{label:"pulse",value:"animate__pulse"},{label:"rubberBand",value:"animate__rubberBand"},{label:"shakeX",value:"animate__shakeX"},{label:"shakeY",value:"animate__shakeY"},{label:"headShake",value:"animate__headShake"},{label:"swing",value:"animate__swing"},{label:"tada",value:"animate__tada"},{label:"wobble",value:"animate__wobble"},{label:"jello",value:"animate__jello"},{label:"heartBeat",value:"animate__heartBeat"}]},{label:"Back entrances",options:[{label:"backInDown",value:"animate__backInDown"},{label:"backInLeft",value:"animate__backInLeft"},{label:"backInRight",value:"animate__backInRight"},{label:"backInUp",value:"animate__backInUp"}]},{label:"Back exits",options:[{label:"backOutDown",value:"animate__backOutDown"},{label:"backOutLeft",value:"animate__backOutLeft"},{label:"backOutRight",value:"animate__backOutRight"},{label:"backOutUp",value:"animate__backOutUp"}]},{label:"Bouncing entrances",options:[{label:"bounceIn",value:"animate__bounceIn"},{label:"bounceInDown",value:"animate__bounceInDown"},{label:"bounceInLeft",value:"animate__bounceInLeft"},{label:"bounceInRight",value:"animate__bounceInRight"},{label:"bounceInUp",value:"animate__bounceInUp"}]},{label:"Bouncing exits",options:[{label:"bounceOut",value:"animate__bounceOut"},{label:"bounceOutDown",value:"animate__bounceOutDown"},{label:"bounceOutLeft",value:"animate__bounceOutLeft"},{label:"bounceOutRight",value:"animate__bounceOutRight"},{label:"bounceOutUp",value:"animate__bounceOutUp"}]},{label:"Fading entrances",options:[{label:"fadeIn",value:"animate__fadeIn"},{label:"fadeInDown",value:"animate__fadeInDown"},{label:"fadeInDownBig",value:"animate__fadeInDownBig"},{label:"fadeInLeft",value:"animate__fadeInLeft"},{label:"fadeInLeftBig",value:"animate__fadeInLeftBig"},{label:"fadeInRight",value:"animate__fadeInRight"},{label:"fadeInRightBig",value:"animate__fadeInRightBig"},{label:"fadeInUp",value:"animate__fadeInUp"},{label:"fadeInUpBig",value:"animate__fadeInUpBig"},{label:"fadeInTopLeft",value:"animate__fadeInTopLeft"},{label:"fadeInTopRight",value:"animate__fadeInTopRight"},{label:"fadeInBottomLeft",value:"animate__fadeInBottomLeft"},{label:"fadeInBottomRight",value:"animate__fadeInBottomRight"}]},{label:"Fading exits",options:[{label:"fadeOut",value:"animate__fadeOut"},{label:"fadeOutDown",value:"animate__fadeOutDown"},{label:"fadeOutDownBig",value:"animate__fadeOutDownBig"},{label:"fadeOutLeft",value:"animate__fadeOutLeft"},{label:"fadeOutLeftBig",value:"animate__fadeOutLeftBig"},{label:"fadeOutRight",value:"animate__fadeOutRight"},{label:"fadeOutRightBig",value:"animate__fadeOutRightBig"},{label:"fadeOutUp",value:"animate__fadeOutUp"},{label:"fadeOutUpBig",value:"animate__fadeOutUpBig"},{label:"fadeOutTopLeft",value:"animate__fadeOutTopLeft"},{label:"fadeOutTopRight",value:"animate__fadeOutTopRight"},{label:"fadeOutBottomLeft",value:"animate__fadeOutBottomLeft"},{label:"fadeOutBottomRight",value:"animate__fadeOutBottomRight"}]},{label:"Flippers",options:[{label:"flip",value:"animate__flip"},{label:"flipInX",value:"animate__flipInX"},{label:"flipInY",value:"animate__flipInY"},{label:"flipOutX",value:"animate__flipOutX"},{label:"flipOutY",value:"animate__flipOutY"}]},{label:"Lightspeed",options:[{label:"lightSpeedInRight",value:"animate__lightSpeedInRight"},{label:"lightSpeedInLeft",value:"animate__lightSpeedInLeft"},{label:"lightSpeedOutRight",value:"animate__lightSpeedOutRight"},{label:"lightSpeedOutLeft",value:"animate__lightSpeedOutLeft"}]},{label:"Rotating entrances",options:[{label:"rotateIn",value:"animate__rotateIn"},{label:"rotateInDownLeft",value:"animate__rotateInDownLeft"},{label:"rotateInDownRight",value:"animate__rotateInDownRight"},{label:"rotateInUpLeft",value:"animate__rotateInUpLeft"},{label:"rotateInUpRight",value:"animate__rotateInUpRight"}]},{label:"Rotating exits",options:[{label:"rotateOut",value:"animate__rotateOut"},{label:"rotateOutDownLeft",value:"animate__rotateOutDownLeft"},{label:"rotateOutDownRight",value:"animate__rotateOutDownRight"},{label:"rotateOutUpLeft",value:"animate__rotateOutUpLeft"},{label:"rotateOutUpRight",value:"animate__rotateOutUpRight"}]},{label:"Specials",options:[{label:"hinge",value:"animate__hinge"},{label:"jackInTheBox",value:"animate__jackInTheBox"},{label:"rollIn",value:"animate__rollIn"},{label:"rollOut",value:"animate__rollOut"}]},{label:"Zooming entrances",options:[{label:"zoomIn",value:"animate__zoomIn"},{label:"zoomInDown",value:"animate__zoomInDown"},{label:"zoomInLeft",value:"animate__zoomInLeft"},{label:"zoomInRight",value:"animate__zoomInRight"},{label:"zoomInUp",value:"animate__zoomInUp"}]},{label:"Zooming exits",options:[{label:"zoomOut",value:"animate__zoomOut"},{label:"zoomOutDown",value:"animate__zoomOutDown"},{label:"zoomOutLeft",value:"animate__zoomOutLeft"},{label:"zoomOutRight",value:"animate__zoomOutRight"},{label:"zoomOutUp",value:"animate__zoomOutUp"}]},{label:"Sliding entrances",options:[{label:"slideInDown",value:"animate__slideInDown"},{label:"slideInLeft",value:"animate__slideInLeft"},{label:"slideInRight",value:"animate__slideInRight"},{label:"slideInUp",value:"animate__slideInUp"}]},{label:"Sliding exits",options:[{label:"slideOutDown",value:"animate__slideOutDown"},{label:"slideOutLeft",value:"animate__slideOutLeft"},{label:"slideOutRight",value:"animate__slideOutRight"},{label:"slideOutUp",value:"animate__slideOutUp"}]}]),B=e("animate__bounce"),U=e("animate__bounce"),D=e(!0);return(a,e)=>{const z=O,j=l,x=t,S=_,T=h,y=R,V=L,X=c,Y=r,E=b;return m(),n("div",null,[i(S,{title:"过渡动画",content:"基于 Animate.css 并结合 <transition> 组件使用"},{default:u((()=>[i(x,{onClick:e[0]||(e[0]=a=>{return e="https://animate.style/",void window.open(e,"top");var e})},{icon:u((()=>[i(j,null,{default:u((()=>[i(z,{name:"i-ep:link"})])),_:1})])),default:u((()=>[w])),_:1})])),_:1}),i(E,null,{default:u((()=>[i(Y,null,{default:u((()=>[i(X,{label:"进入动画（显示）"},{default:u((()=>[i(V,{modelValue:B.value,"onUpdate:modelValue":e[1]||(e[1]=a=>B.value=a),filterable:""},{default:u((()=>[(m(!0),n(f,null,v(o.value,(a=>(m(),d(y,{key:a.label,label:a.label},{default:u((()=>[(m(!0),n(f,null,v(a.options,(a=>(m(),d(T,{key:a.label,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(X,{label:"离开动画（隐藏）"},{default:u((()=>[i(V,{modelValue:U.value,"onUpdate:modelValue":e[2]||(e[2]=a=>U.value=a),filterable:""},{default:u((()=>[(m(!0),n(f,null,v(o.value,(a=>(m(),d(y,{key:a.label,label:a.label},{default:u((()=>[(m(!0),n(f,null,v(a.options,(a=>(m(),d(T,{key:a.label,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(X,null,{default:u((()=>[i(x,{onClick:e[3]||(e[3]=a=>D.value=!D.value)},{default:u((()=>[s(p(D.value?"隐藏":"显示"),1)])),_:1})])),_:1})])),_:1}),i(I,{"enter-active-class":`animate__animated ${B.value}`,"leave-active-class":`animate__animated ${U.value}`},{default:u((()=>[D.value?(m(),n("div",k)):g("v-if",!0)])),_:1},8,["enter-active-class","leave-active-class"])])),_:1})])}}};"function"==typeof o&&o(B);var U=a(B,[["__scopeId","data-v-a2738f88"]]);export{U as default};
