
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,r=(e,a)=>{for(var t in a||(a={}))n.call(a,t)&&s(e,t,a[t]);if(o)for(var t of o(a))l.call(a,t)&&s(e,t,a[t]);return e};import{r as i,aK as u,a9 as p,aL as d,aw as c,aH as f,ax as v,ad as m,d as y,aM as x,aN as b,c as g,aO as h,aP as w,aQ as S,aR as k,aS as $,u as z,s as I,aT as C,aU as E,aV as P,aW as O,aX as j,y as F,aA as M,aY as V,o as _,aZ as A,aB as B,F as N,G as R,b as H,f as T,m as W,R as K,n as q,i as D,g as L,D as Q,e as U,w as X,M as G,E as Y,ae as Z,h as J,a_ as ee,l as ae,a$ as te,Q as oe,k as ne,_ as le,ak as se,az as re,H as ie,q as ue}from"./index.8f9b9927.js";import{U as pe}from"./event2.c09267d7.js";const de=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);let ce;const fe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ve(e,a=1,t){var o;ce||(ce=document.createElement("textarea"),document.body.appendChild(ce));const{paddingSize:n,borderSize:l,boxSizing:s,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),n=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:fe.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:t}}(e);ce.setAttribute("style",`${r};\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`),ce.value=e.value||e.placeholder||"";let i=ce.scrollHeight;const p={};"border-box"===s?i+=l:"content-box"===s&&(i-=n),ce.value="";const d=ce.scrollHeight-n;if(u(a)){let e=d*a;"border-box"===s&&(e=e+n+l),i=Math.max(e,i),p.minHeight=`${e}px`}if(u(t)){let e=d*t;"border-box"===s&&(e=e+n+l),i=Math.min(e,i)}return p.height=`${i}px`,null==(o=ce.parentNode)||o.removeChild(ce),ce=void 0,p}const me=p({id:{type:String,default:void 0},size:d,disabled:Boolean,modelValue:{type:c([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:c([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:f,default:""},prefixIcon:{type:f,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:c([Object,Array,String]),default:()=>v({})}}),ye={[pe]:e=>m(e),input:e=>m(e),change:e=>m(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},xe=["role"],be=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],ge=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"];var he;const we=ue(le(y((he=r({},{name:"ElInput",inheritAttrs:!1}),a(he,t({props:me,emits:ye,setup(e,{expose:a,emit:t}){const o=e,n={suffix:"append",prefix:"prepend"},l=ie(),s=x(),u=b(),p=g((()=>{const e={};return"combobox"===o.containerRole&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e})),d=h({excludeKeys:g((()=>Object.keys(p.value)))}),{form:c,formItem:f}=w(),{inputId:v}=S(o,{formItemContext:f}),m=k(),y=$(),le=z("input"),ue=z("textarea"),ce=I(),fe=I(),me=i(!1),ye=i(!1),he=i(!1),we=i(!1),Se=i(),ke=I(o.inputStyle),$e=g((()=>ce.value||fe.value)),ze=g((()=>{var e;return null!=(e=null==c?void 0:c.statusIcon)&&e})),Ie=g((()=>(null==f?void 0:f.validateState)||"")),Ce=g((()=>Ie.value&&C[Ie.value])),Ee=g((()=>we.value?E:P)),Pe=g((()=>[s.style,o.inputStyle])),Oe=g((()=>[o.inputStyle,ke.value,{resize:o.resize}])),je=g((()=>O(o.modelValue)?"":String(o.modelValue))),Fe=g((()=>o.clearable&&!y.value&&!o.readonly&&!!je.value&&(me.value||ye.value))),Me=g((()=>o.showPassword&&!y.value&&!o.readonly&&!!je.value&&(!!je.value||me.value))),Ve=g((()=>o.showWordLimit&&!!d.value.maxlength&&("text"===o.type||"textarea"===o.type)&&!y.value&&!o.readonly&&!o.showPassword)),_e=g((()=>Array.from(je.value).length)),Ae=g((()=>!!Ve.value&&_e.value>Number(d.value.maxlength))),Be=g((()=>!!u.suffix||!!o.suffixIcon||Fe.value||o.showPassword||Ve.value||!!Ie.value&&ze.value)),[Ne,Re]=function(e){const a=i();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:n}=e.value;if(null==t||null==o)return;const l=n.slice(0,Math.max(0,t)),s=n.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:n,beforeTxt:l,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:n,selectionStart:l}=a.value;if(null==o||null==n||null==l)return;let s=t.length;if(t.endsWith(n))s=t.length-n.length;else if(t.startsWith(o))s=o.length;else{const e=o[l-1],a=t.indexOf(e,l-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(ce);j(fe,(e=>{if(!Ve.value||"both"!==o.resize)return;const a=e[0],{width:t}=a.contentRect;Se.value={right:`calc(100% - ${t+15+6}px)`}}));const He=()=>{const{type:e,autosize:a}=o;if(se&&"textarea"===e)if(a){const e=re(a)?a.minRows:void 0,t=re(a)?a.maxRows:void 0;ke.value=r({},ve(fe.value,e,t))}else ke.value={minHeight:ve(fe.value).minHeight}},Te=()=>{const e=$e.value;e&&e.value!==je.value&&(e.value=je.value)},We=e=>{const{el:a}=l.vnode;if(!a)return;const t=Array.from(a.querySelectorAll(`.${le.e(e)}`)).find((e=>e.parentNode===a));if(!t)return;const o=n[e];u[o]?t.style.transform=`translateX(${"suffix"===e?"-":""}${a.querySelector(`.${le.be("group",o)}`).offsetWidth}px)`:t.removeAttribute("style")},Ke=()=>{We("prefix"),We("suffix")},qe=async e=>{Ne();let{value:a}=e.target;o.formatter&&(a=o.parser?o.parser(a):a,a=o.formatter(a)),he.value||a!==je.value&&(t(pe,a),t("input",a),await M(),Te(),Re())},De=e=>{t("change",e.target.value)},Le=e=>{t("compositionstart",e),he.value=!0},Qe=e=>{var a;t("compositionupdate",e);const o=null==(a=e.target)?void 0:a.value,n=o[o.length-1]||"";he.value=!de(n)},Ue=e=>{t("compositionend",e),he.value&&(he.value=!1,qe(e))},Xe=()=>{we.value=!we.value,Ge()},Ge=async()=>{var e;await M(),null==(e=$e.value)||e.focus()},Ye=e=>{me.value=!0,t("focus",e)},Ze=e=>{var a;me.value=!1,t("blur",e),o.validateEvent&&(null==(a=null==f?void 0:f.validate)||a.call(f,"blur").catch((e=>V())))},Je=e=>{ye.value=!1,t("mouseleave",e)},ea=e=>{ye.value=!0,t("mouseenter",e)},aa=e=>{t("keydown",e)},ta=()=>{t(pe,""),t("change",""),t("clear"),t("input","")};return F((()=>o.modelValue),(()=>{var e;M((()=>He())),o.validateEvent&&(null==(e=null==f?void 0:f.validate)||e.call(f,"change").catch((e=>V())))})),F(je,(()=>Te())),F((()=>o.type),(async()=>{await M(),Te(),He(),Ke()})),_((async()=>{!o.formatter&&o.parser,Te(),Ke(),await M(),He()})),A((async()=>{await M(),Ke()})),a({input:ce,textarea:fe,ref:$e,textareaStyle:Oe,autosize:B(o,"autosize"),focus:Ge,blur:()=>{var e;return null==(e=$e.value)?void 0:e.blur()},select:()=>{var e;null==(e=$e.value)||e.select()},clear:ta,resizeTextarea:He}),(e,a)=>N((H(),T("div",Z(D(p),{class:["textarea"===e.type?D(ue).b():D(le).b(),D(le).m(D(m)),D(le).is("disabled",D(y)),D(le).is("exceed",D(Ae)),{[D(le).b("group")]:e.$slots.prepend||e.$slots.append,[D(le).bm("group","append")]:e.$slots.append,[D(le).bm("group","prepend")]:e.$slots.prepend,[D(le).m("prefix")]:e.$slots.prefix||e.prefixIcon,[D(le).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[D(le).bm("suffix","password-clear")]:D(Fe)&&D(Me)},e.$attrs.class],style:D(Pe),role:e.containerRole,onMouseenter:ea,onMouseleave:Je}),[W(" input "),"textarea"!==e.type?(H(),T(K,{key:0},[W(" prepend slot "),e.$slots.prepend?(H(),T("div",{key:0,class:q(D(le).be("group","prepend"))},[L(e.$slots,"prepend")],2)):W("v-if",!0),Q("div",{class:q([D(le).e("wrapper"),D(le).is("focus",me.value)])},[W(" prefix slot "),e.$slots.prefix||e.prefixIcon?(H(),T("span",{key:0,class:q(D(le).e("prefix"))},[Q("span",{class:q(D(le).e("prefix-inner"))},[L(e.$slots,"prefix"),e.prefixIcon?(H(),U(D(Y),{key:0,class:q(D(le).e("icon"))},{default:X((()=>[(H(),U(G(e.prefixIcon)))])),_:1},8,["class"])):W("v-if",!0)],2)],2)):W("v-if",!0),Q("input",Z({id:D(v),ref_key:"input",ref:ce,class:D(le).e("inner")},D(d),{type:e.showPassword?we.value?"text":"password":e.type,disabled:D(y),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:Le,onCompositionupdate:Qe,onCompositionend:Ue,onInput:qe,onFocus:Ye,onBlur:Ze,onChange:De,onKeydown:aa}),null,16,be),W(" suffix slot "),D(Be)?(H(),T("span",{key:1,class:q(D(le).e("suffix"))},[Q("span",{class:q(D(le).e("suffix-inner"))},[D(Fe)&&D(Me)&&D(Ve)?W("v-if",!0):(H(),T(K,{key:0},[L(e.$slots,"suffix"),e.suffixIcon?(H(),U(D(Y),{key:0,class:q(D(le).e("icon"))},{default:X((()=>[(H(),U(G(e.suffixIcon)))])),_:1},8,["class"])):W("v-if",!0)],64)),D(Fe)?(H(),U(D(Y),{key:1,class:q([D(le).e("icon"),D(le).e("clear")]),onMousedown:ae(D(te),["prevent"]),onClick:ta},{default:X((()=>[J(D(ee))])),_:1},8,["class","onMousedown"])):W("v-if",!0),D(Me)?(H(),U(D(Y),{key:2,class:q([D(le).e("icon"),D(le).e("password")]),onClick:Xe},{default:X((()=>[(H(),U(G(D(Ee))))])),_:1},8,["class"])):W("v-if",!0),D(Ve)?(H(),T("span",{key:3,class:q(D(le).e("count"))},[Q("span",{class:q(D(le).e("count-inner"))},oe(D(_e))+" / "+oe(D(d).maxlength),3)],2)):W("v-if",!0),D(Ie)&&D(Ce)&&D(ze)?(H(),U(D(Y),{key:4,class:q([D(le).e("icon"),D(le).e("validateIcon"),D(le).is("loading","validating"===D(Ie))])},{default:X((()=>[(H(),U(G(D(Ce))))])),_:1},8,["class"])):W("v-if",!0)],2)],2)):W("v-if",!0)],2),W(" append slot "),e.$slots.append?(H(),T("div",{key:1,class:q(D(le).be("group","append"))},[L(e.$slots,"append")],2)):W("v-if",!0)],64)):(H(),T(K,{key:1},[W(" textarea "),Q("textarea",Z({id:D(v),ref_key:"textarea",ref:fe,class:D(ue).e("inner")},D(d),{tabindex:e.tabindex,disabled:D(y),readonly:e.readonly,autocomplete:e.autocomplete,style:D(Oe),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:Le,onCompositionupdate:Qe,onCompositionend:Ue,onInput:qe,onFocus:Ye,onBlur:Ze,onChange:De,onKeydown:aa}),null,16,ge),D(Ve)?(H(),T("span",{key:0,style:ne(Se.value),class:q(D(le).e("count"))},oe(D(_e))+" / "+oe(D(d).maxlength),7)):W("v-if",!0)],64))],16,xe)),[[R,"hidden"!==e.type]])}})))),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{we as E,de as i};