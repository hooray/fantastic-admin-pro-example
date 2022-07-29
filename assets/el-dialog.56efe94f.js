
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,b6 as s,W as o,cR as a,c as l,b as t,f as n,J as r,g as d,n as i,i as c,R as f,h as u,w as p,e as m,M as b,E as g,m as y,k as v,l as h,_ as k,cS as C,cT as R,aQ as $,b5 as _,u as w,r as A,H as I,K as x,L as E,b3 as M,a3 as L,T as F,b7 as T,q as j}from"./index.9587bc3d.js";import{a as q,E as z}from"./el-overlay.3a21a8d0.js";import{b as B,c as S,d as D,a as K,u as H}from"./use-dialog.50a4d896.js";import{u as J}from"./index.7b171845.js";const O=Symbol("dialogInjectionKey"),Q=["aria-label"],U=["id"];var W=k(e({name:"ElDialogContent",props:B,emits:S,setup(e){const k=e,{t:$}=s(),{Close:_}=C,{dialogRef:w,headerRef:A,bodyId:I,ns:x,style:E}=o(O),{focusTrapRef:M}=o(a),L=R(M,w),F=l((()=>k.draggable));return J(w,A,F),(e,s)=>(t(),n("div",{ref:c(L),class:i([c(x).b(),c(x).is("fullscreen",e.fullscreen),c(x).is("draggable",c(F)),{[c(x).m("center")]:e.center},e.customClass]),style:v(c(E)),tabindex:"-1",onClick:s[1]||(s[1]=h((()=>{}),["stop"]))},[r("header",{ref_key:"headerRef",ref:A,class:i(c(x).e("header"))},[d(e.$slots,"header",{},(()=>[r("span",{role:"heading",class:i(c(x).e("title"))},f(e.title),3)])),e.showClose?(t(),n("button",{key:0,"aria-label":c($)("el.dialog.close"),class:i(c(x).e("headerbtn")),type:"button",onClick:s[0]||(s[0]=s=>e.$emit("close"))},[u(c(g),{class:i(c(x).e("close"))},{default:p((()=>[(t(),m(b(e.closeIcon||c(_))))])),_:1},8,["class"])],10,Q)):y("v-if",!0)],2),r("div",{id:c(I),class:i(c(x).e("body"))},[d(e.$slots,"default")],10,U),e.$slots.footer?(t(),n("footer",{key:0,class:i(c(x).e("footer"))},[d(e.$slots,"footer")],2)):y("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const G=["aria-label","aria-labelledby","aria-describedby"];const N=j(k(e({name:"ElDialog",props:D,emits:K,setup(e,{expose:s}){const o=e,a=$();_({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},l((()=>!!a.title)));const n=w("dialog"),f=A(),b=A(),g=A(),{visible:v,titleId:h,bodyId:k,style:C,rendered:R,zIndex:j,afterEnter:B,afterLeave:S,beforeLeave:D,handleClose:K,onModalClick:J,onOpenAutoFocus:Q,onCloseAutoFocus:U,onCloseRequested:N}=H(o,f);I(O,{dialogRef:f,headerRef:b,bodyId:k,ns:n,rendered:R,style:C});const P=q(J),V=l((()=>o.draggable&&!o.fullscreen));return s({visible:v,dialogContentRef:g}),(e,s)=>(t(),m(T,{to:"body",disabled:!e.appendToBody},[u(F,{name:"dialog-fade",onAfterEnter:c(B),onAfterLeave:c(S),onBeforeLeave:c(D),persisted:""},{default:p((()=>[x(u(c(z),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":c(j)},{default:p((()=>[r("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:c(h),"aria-describedby":c(k),class:i(`${c(n).namespace.value}-overlay-dialog`),onClick:s[0]||(s[0]=(...e)=>c(P).onClick&&c(P).onClick(...e)),onMousedown:s[1]||(s[1]=(...e)=>c(P).onMousedown&&c(P).onMousedown(...e)),onMouseup:s[2]||(s[2]=(...e)=>c(P).onMouseup&&c(P).onMouseup(...e))},[u(c(M),{loop:"",trapped:c(v),"focus-start-el":"container",onFocusAfterTrapped:c(Q),onFocusAfterReleased:c(U),onReleaseRequested:c(N)},{default:p((()=>[c(R)?(t(),m(W,{key:0,ref_key:"dialogContentRef",ref:g,"custom-class":e.customClass,center:e.center,"close-icon":e.closeIcon,draggable:c(V),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,onClose:c(K)},L({header:p((()=>[e.$slots.title?d(e.$slots,"title",{key:1}):d(e.$slots,"header",{key:0,close:c(K),titleId:c(h),titleClass:c(n).e("title")})])),default:p((()=>[d(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:p((()=>[d(e.$slots,"footer")]))}:void 0]),1032,["custom-class","center","close-icon","draggable","fullscreen","show-close","title","onClose"])):y("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onReleaseRequested"])],42,G)])),_:3},8,["mask","overlay-class","z-index"]),[[E,c(v)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]));export{N as E};