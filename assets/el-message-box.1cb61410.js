
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&l(e,n,t[n]);return e};import{y as i,b5 as c,br as u,aA as d,bs as p,al as f,d as m,a5 as v,b0 as b,E as g,bf as y,b3 as h,u as C,r as E,bj as x,as as w,c as B,be as k,bh as M,aR as I,o as T,at as O,aI as P,_,L as j,b as R,e as S,w as A,F as z,G as V,h as $,D as L,n as D,k as H,l as K,f as q,M as F,m as U,Q as G,a0 as Q,g as W,a1 as Z,T as J,ak as N,ad as X,bi as Y,az as ee,bt as te,bl as ne,bu as oe,au as ae}from"./index.ec00d83b.js";import{E as se}from"./el-input.16c29a96.js";import{E as le,u as re,a as ie}from"./el-overlay.e52ea400.js";import{o as ce}from"./aria2.dceaa135.js";import{i as ue}from"./validator2.20071a9a.js";import{u as de}from"./index2.c6b10787.js";const pe=[],fe=e=>{if(0===pe.length)return;const t=pe[pe.length-1]["_trap-focus-children"];if(t.length>0&&e.code===f.tab){if(1===t.length)return e.preventDefault(),void(document.activeElement!==t[0]&&t[0].focus());const n=e.shiftKey,o=e.target===t[0],a=e.target===t[t.length-1];o&&n&&(e.preventDefault(),t[t.length-1].focus()),a&&!n&&(e.preventDefault(),t[0].focus())}},me=m({name:"ElMessageBox",directives:{TrapFocus:{beforeMount(e){e["_trap-focus-children"]=ce(e),pe.push(e),pe.length<=1&&u(document,"keydown",fe)},updated(e){d((()=>{e["_trap-focus-children"]=ce(e)}))},unmounted(){pe.shift(),0===pe.length&&p(document,"keydown",fe)}}},components:r({ElButton:v,ElFocusTrap:b,ElInput:se,ElOverlay:le,ElIcon:g},y),inheritAttrs:!1,props:{buttonSize:{type:String,validator:ue},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:o}){const{t:a}=h(),s=C("message-box"),l=E(!1),{nextZIndex:f}=x(),m=w({beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:f()}),v=B((()=>{const e=m.type;return{[s.bm("icon",e)]:e&&k[e]}})),b=M(),g=M(),y=I(B((()=>e.buttonSize)),{prop:!0,form:!0,formItem:!0}),_=B((()=>m.icon||k[m.type]||"")),j=B((()=>!!m.message)),R=E(),S=E(),A=E(),z=E(),V=E(),$=B((()=>m.confirmButtonClass));i((()=>m.inputValue),(async t=>{await d(),"prompt"===e.boxType&&null!==t&&F()}),{immediate:!0}),i((()=>l.value),(t=>{var n,o;t&&("alert"!==e.boxType&&"confirm"!==e.boxType||(A.value=null!=(o=null==(n=V.value)?void 0:n.$el)?o:R.value),m.zIndex=f()),"prompt"===e.boxType&&(t?d().then((()=>{var e;z.value&&z.value.$el&&(A.value=null!=(e=U())?e:R.value)})):(m.editorErrorMessage="",m.validateError=!1))}));const L=B((()=>e.draggable));function D(){l.value&&(l.value=!1,d((()=>{m.action&&o("action",m.action)})))}de(R,S,L),T((async()=>{await d(),e.closeOnHashChange&&u(window,"hashchange",D)})),O((()=>{e.closeOnHashChange&&p(window,"hashchange",D)}));const H=()=>{e.closeOnClickModal&&q(m.distinguishCancelAndClose?"close":"cancel")},K=ie(H),q=t=>{var n;("prompt"!==e.boxType||"confirm"!==t||F())&&(m.action=t,m.beforeClose?null==(n=m.beforeClose)||n.call(m,t,m,D):D())},F=()=>{if("prompt"===e.boxType){const e=m.inputPattern;if(e&&!e.test(m.inputValue||""))return m.editorErrorMessage=m.inputErrorMessage||a("el.messagebox.error"),m.validateError=!0,!1;const t=m.inputValidator;if("function"==typeof t){const e=t(m.inputValue);if(!1===e)return m.editorErrorMessage=m.inputErrorMessage||a("el.messagebox.error"),m.validateError=!0,!1;if("string"==typeof e)return m.editorErrorMessage=e,m.validateError=!0,!1}}return m.editorErrorMessage="",m.validateError=!1,!0},U=()=>{const e=z.value.$refs;return e.input||e.textarea},G=()=>{q("close")};return e.lockScroll&&re(l),((e,t)=>{let n;i((()=>e.value),(e=>{var o,a;e?(n=document.activeElement,c(t)&&(null==(a=(o=t.value).focus)||a.call(o))):n.focus()}))})(l),Q=r({},P(m)),t(Q,n({ns:s,overlayEvent:K,visible:l,hasMessage:j,typeClass:v,contentId:b,inputId:g,btnSize:y,iconComponent:_,confirmButtonClasses:$,rootRef:R,focusStartRef:A,headerRef:S,inputRef:z,confirmRef:V,doClose:D,handleClose:G,onCloseRequested:()=>{e.closeOnPressEscape&&G()},handleWrapperClick:H,handleInputEnter:e=>{if("textarea"!==m.inputType)return e.preventDefault(),q("confirm")},handleAction:q,t:a}));var Q}}),ve=["aria-label","aria-describedby"],be=["aria-label"],ge=["id"];var ye=_(me,[["render",function(e,t,n,o,a,s){const l=j("el-icon"),r=j("close"),i=j("el-input"),c=j("el-button"),u=j("el-focus-trap"),d=j("el-overlay");return R(),S(J,{name:"fade-in-linear",onAfterLeave:t[11]||(t[11]=t=>e.$emit("vanish")),persisted:""},{default:A((()=>[z($(d,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:A((()=>[L("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:D(`${e.ns.namespace.value}-overlay-message-box`),onClick:t[8]||(t[8]=(...t)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...t)),onMousedown:t[9]||(t[9]=(...t)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...t)),onMouseup:t[10]||(t[10]=(...t)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...t))},[$(u,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:A((()=>[L("div",{ref:"rootRef",class:D([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:H(e.customStyle),tabindex:"-1",onClick:t[7]||(t[7]=K((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(R(),q("div",{key:0,ref:"headerRef",class:D(e.ns.e("header"))},[L("div",{class:D(e.ns.e("title"))},[e.iconComponent&&e.center?(R(),S(l,{key:0,class:D([e.ns.e("status"),e.typeClass])},{default:A((()=>[(R(),S(F(e.iconComponent)))])),_:1},8,["class"])):U("v-if",!0),L("span",null,G(e.title),1)],2),e.showClose?(R(),q("button",{key:0,type:"button",class:D(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:t[0]||(t[0]=t=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:t[1]||(t[1]=Q(K((t=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[$(l,{class:D(e.ns.e("close"))},{default:A((()=>[$(r)])),_:1},8,["class"])],42,be)):U("v-if",!0)],2)):U("v-if",!0),L("div",{id:e.contentId,class:D(e.ns.e("content"))},[L("div",{class:D(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(R(),S(l,{key:0,class:D([e.ns.e("status"),e.typeClass])},{default:A((()=>[(R(),S(F(e.iconComponent)))])),_:1},8,["class"])):U("v-if",!0),e.hasMessage?(R(),q("div",{key:1,class:D(e.ns.e("message"))},[W(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(R(),S(F(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(R(),S(F(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:A((()=>[Z(G(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):U("v-if",!0)],2),z(L("div",{class:D(e.ns.e("input"))},[$(i,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.inputValue=t),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:D({invalid:e.validateError}),onKeydown:Q(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),L("div",{class:D(e.ns.e("errormsg")),style:H({visibility:e.editorErrorMessage?"visible":"hidden"})},G(e.editorErrorMessage),7)],2),[[V,e.showInput]])],10,ge),L("div",{class:D(e.ns.e("btns"))},[e.showCancelButton?(R(),S(c,{key:0,loading:e.cancelButtonLoading,class:D([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:t[3]||(t[3]=t=>e.handleAction("cancel")),onKeydown:t[4]||(t[4]=Q(K((t=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:A((()=>[Z(G(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):U("v-if",!0),z($(c,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:D([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:t[5]||(t[5]=t=>e.handleAction("confirm")),onKeydown:t[6]||(t[6]=Q(K((t=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:A((()=>[Z(G(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[V,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,ve)])),_:3},8,["z-index","overlay-class","mask"]),[[V,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const he=new Map,Ce=(e,t)=>{const n=document.createElement("div");e.onVanish=()=>{ne(null,n),he.delete(a)},e.onAction=t=>{const n=he.get(a);let s;s=e.showInput?{value:a.inputValue,action:t}:t,e.callback?e.callback(s,o.proxy):"cancel"===t||"close"===t?e.distinguishCancelAndClose&&"cancel"!==t?n.reject("close"):n.reject("cancel"):n.resolve(s)};const o=((e,t,n=null)=>{const o=ae(ye,e);return o.appContext=n,ne(o,t),document.body.appendChild(t.firstElementChild),o.component})(e,n,t),a=o.proxy;for(const s in e)oe(e,s)&&!oe(a.$props,s)&&(a[s]=e[s]);return i((()=>a.message),((e,t)=>{Y(e)?o.slots.default=()=>[e]:Y(t)&&!Y(e)&&delete o.slots.default}),{immediate:!0}),a.visible=!0,a};function Ee(e,t=null){if(!N)return Promise.reject();let n;return X(e)||Y(e)?e={message:e}:n=e.callback,new Promise(((o,a)=>{const s=Ce(e,null!=t?t:Ee._context);he.set(s,{options:e,callback:n,resolve:o,reject:a})}))}const xe={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{Ee[e]=function(e){return(t,n,o,a)=>{let s;return ee(n)?(o=n,s=""):s=te(n)?"":n,Ee(Object.assign(r({title:s,message:t,type:""},xe[e]),o,{boxType:e}),a)}}(e)})),Ee.close=()=>{he.forEach(((e,t)=>{t.doClose()})),he.clear()},Ee._context=null;const we=Ee;we.install=e=>{we._context=e._context,e.config.globalProperties.$msgbox=we,e.config.globalProperties.$messageBox=we,e.config.globalProperties.$alert=we.alert,e.config.globalProperties.$confirm=we.confirm,e.config.globalProperties.$prompt=we.prompt};const Be=we;export{Be as E};