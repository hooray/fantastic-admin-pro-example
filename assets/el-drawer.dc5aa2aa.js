
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,i=(e,a)=>{for(var s in a||(a={}))l.call(a,s)&&o(e,s,a[s]);if(t)for(var s of t(a))r.call(a,s)&&o(e,s,a[s]);return e},n=(e,t)=>a(e,s(t));import{a9 as d,d as c,b3 as f,E as p,b4 as b,b5 as u,c as y,r as m,u as v,b6 as w,ae as h,_ as k,L as C,b as E,e as g,h as R,w as O,F as S,G as z,D as j,n as I,f as L,g as $,Q as _,m as x,k as P,l as A,T as B,b7 as D,q as T}from"./index.0358e322.js";import{E as q}from"./el-overlay.38c59f3e.js";import{d as H,a as F,u as G}from"./use-dialog.c96e9f11.js";const M=c({name:"ElDrawer",components:{ElOverlay:q,ElFocusTrap:f,ElIcon:p,Close:b},props:d(n(i({},H),{direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}})),emits:F,setup(e,{slots:a}){u({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},y((()=>!!a.title)));const s=m(),t=m(),l=v("drawer"),{t:r}=w(),o=y((()=>"rtl"===e.direction||"ltr"===e.direction)),d=y((()=>h(e.size)));return n(i({},G(e,s)),{drawerRef:s,focusStartRef:t,isHorizontal:o,drawerSize:d,ns:l,t:r})}}),N=["aria-label","aria-labelledby","aria-describedby"],Q=["id"],U=["aria-label"],J=["id"];const K=T(k(M,[["render",function(e,a,s,t,l,r){const o=C("close"),i=C("el-icon"),n=C("el-focus-trap"),d=C("el-overlay");return E(),g(D,{to:"body",disabled:!e.appendToBody},[R(B,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:O((()=>[S(R(d,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:O((()=>[R(n,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:O((()=>[j("div",{ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId,class:I([e.ns.b(),e.direction,e.visible&&"open",e.customClass]),style:P(e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize),role:"dialog",onClick:a[1]||(a[1]=A((()=>{}),["stop"]))},[j("span",{ref:"focusStartRef",class:I(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(E(),L("header",{key:0,class:I(e.ns.e("header"))},[e.$slots.title?$(e.$slots,"title",{key:1},(()=>[x(" DEPRECATED SLOT ")])):$(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(()=>[e.$slots.title?x("v-if",!0):(E(),L("span",{key:0,id:e.titleId,role:"heading",class:I(e.ns.e("title"))},_(e.title),11,Q))])),e.showClose?(E(),L("button",{key:2,"aria-label":e.t("el.drawer.close"),class:I(e.ns.e("close-btn")),type:"button",onClick:a[0]||(a[0]=(...a)=>e.handleClose&&e.handleClose(...a))},[R(i,{class:I(e.ns.e("close"))},{default:O((()=>[R(o)])),_:1},8,["class"])],10,U)):x("v-if",!0)],2)):x("v-if",!0),e.rendered?(E(),L("div",{key:1,id:e.bodyId,class:I(e.ns.e("body"))},[$(e.$slots,"default")],10,J)):x("v-if",!0),e.$slots.footer?(E(),L("div",{key:2,class:I(e.ns.e("footer"))},[$(e.$slots,"footer")],2)):x("v-if",!0)],14,N)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[z,e.visible]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]));export{K as E};
