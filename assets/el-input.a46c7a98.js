
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{r as e,aP as a,a8 as t,aQ as o,ay as n,aM as l,az as s,aD as i,d as r,aR as u,aS as p,c as d,aT as c,aU as f,aV as v,aW as m,aX as y,u as x,s as b,aY as g,aZ as h,a_ as w,a$ as S,aB as $,y as k,aF as z,b0 as I,o as C,b1 as E,aG as F,H as P,I as M,b as V,f as _,m as B,N,n as A,i as R,g as j,G as H,e as T,w as W,J as O,E as q,ae as K,h as D,b2 as G,l as L,b3 as U,M as X,k as J,_ as Q,b4 as Y,aE as Z,aw as ee,q as ae}from"./index.3b0b287f.js";import{U as te}from"./event.d298a7ab.js";const oe=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);let ne;const le=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function se(e,t=1,o){var n;ne||(ne=document.createElement("textarea"),document.body.appendChild(ne));const{paddingSize:l,borderSize:s,boxSizing:i,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),n=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:le.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:t}}(e);ne.setAttribute("style",`${r};\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`),ne.value=e.value||e.placeholder||"";let u=ne.scrollHeight;const p={};"border-box"===i?u+=s:"content-box"===i&&(u-=l),ne.value="";const d=ne.scrollHeight-l;if(a(t)){let e=d*t;"border-box"===i&&(e=e+l+s),u=Math.max(e,u),p.minHeight=`${e}px`}if(a(o)){let e=d*o;"border-box"===i&&(e=e+l+s),u=Math.min(e,u)}return p.height=`${u}px`,null==(n=ne.parentNode)||n.removeChild(ne),ne=void 0,p}const ie=t({id:{type:String,default:void 0},size:o,disabled:Boolean,modelValue:{type:n([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:n([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:l,default:""},prefixIcon:{type:l,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:n([Object,Array,String]),default:()=>s({})}}),re=["role"],ue=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],pe=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"];const de=ae(Q(r({name:"ElInput",inheritAttrs:!1,props:ie,emits:{[te]:e=>i(e),input:e=>i(e),change:e=>i(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},setup(a,{expose:t,emit:o}){const n=a,l={suffix:"append",prefix:"prepend"},s=ee(),i=u(),r=p(),Q=d((()=>{const e={};return"combobox"===n.containerRole&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e})),ae=c({excludeKeys:d((()=>Object.keys(Q.value)))}),{form:ne,formItem:le}=f(),{inputId:ie}=v(n,{formItemContext:le}),de=m(),ce=y(),fe=x("input"),ve=x("textarea"),me=b(),ye=b(),xe=e(!1),be=e(!1),ge=e(!1),he=e(!1),we=e(),Se=b(n.inputStyle),$e=d((()=>me.value||ye.value)),ke=d((()=>{var e;return null!=(e=null==ne?void 0:ne.statusIcon)&&e})),ze=d((()=>(null==le?void 0:le.validateState)||"")),Ie=d((()=>ze.value&&g[ze.value])),Ce=d((()=>he.value?h:w)),Ee=d((()=>[i.style,n.inputStyle])),Fe=d((()=>[n.inputStyle,Se.value,{resize:n.resize}])),Pe=d((()=>S(n.modelValue)?"":String(n.modelValue))),Me=d((()=>n.clearable&&!ce.value&&!n.readonly&&!!Pe.value&&(xe.value||be.value))),Ve=d((()=>n.showPassword&&!ce.value&&!n.readonly&&!!Pe.value&&(!!Pe.value||xe.value))),_e=d((()=>n.showWordLimit&&!!ae.value.maxlength&&("text"===n.type||"textarea"===n.type)&&!ce.value&&!n.readonly&&!n.showPassword)),Be=d((()=>Array.from(Pe.value).length)),Ne=d((()=>!!_e.value&&Be.value>Number(ae.value.maxlength))),Ae=d((()=>!!r.suffix||!!n.suffixIcon||Me.value||n.showPassword||_e.value||!!ze.value&&ke.value)),[Re,je]=function(a){const t=e();return[function(){if(null==a.value)return;const{selectionStart:e,selectionEnd:o,value:n}=a.value;if(null==e||null==o)return;const l=n.slice(0,Math.max(0,e)),s=n.slice(Math.max(0,o));t.value={selectionStart:e,selectionEnd:o,value:n,beforeTxt:l,afterTxt:s}},function(){if(null==a.value||null==t.value)return;const{value:e}=a.value,{beforeTxt:o,afterTxt:n,selectionStart:l}=t.value;if(null==o||null==n||null==l)return;let s=e.length;if(e.endsWith(n))s=e.length-n.length;else if(e.startsWith(o))s=o.length;else{const a=o[l-1],t=e.indexOf(a,l-1);-1!==t&&(s=t+1)}a.value.setSelectionRange(s,s)}]}(me);$(ye,(e=>{if(!_e.value||"both"!==n.resize)return;const a=e[0],{width:t}=a.contentRect;we.value={right:`calc(100% - ${t+15+6}px)`}}));const He=()=>{const{type:e,autosize:a}=n;if(Y&&"textarea"===e)if(a){const e=Z(a)?a.minRows:void 0,t=Z(a)?a.maxRows:void 0;Se.value={...se(ye.value,e,t)}}else Se.value={minHeight:se(ye.value).minHeight}},Te=()=>{const e=$e.value;e&&e.value!==Pe.value&&(e.value=Pe.value)},We=e=>{const{el:a}=s.vnode;if(!a)return;const t=Array.from(a.querySelectorAll(`.${fe.e(e)}`)).find((e=>e.parentNode===a));if(!t)return;const o=l[e];r[o]?t.style.transform=`translateX(${"suffix"===e?"-":""}${a.querySelector(`.${fe.be("group",o)}`).offsetWidth}px)`:t.removeAttribute("style")},Oe=()=>{We("prefix"),We("suffix")},qe=async e=>{Re();let{value:a}=e.target;n.formatter&&(a=n.parser?n.parser(a):a,a=n.formatter(a)),ge.value||a!==Pe.value&&(o(te,a),o("input",a),await z(),Te(),je())},Ke=e=>{o("change",e.target.value)},De=e=>{o("compositionstart",e),ge.value=!0},Ge=e=>{var a;o("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,n=t[t.length-1]||"";ge.value=!oe(n)},Le=e=>{o("compositionend",e),ge.value&&(ge.value=!1,qe(e))},Ue=()=>{he.value=!he.value,Xe()},Xe=async()=>{var e;await z(),null==(e=$e.value)||e.focus()},Je=e=>{xe.value=!0,o("focus",e)},Qe=e=>{var a;xe.value=!1,o("blur",e),n.validateEvent&&(null==(a=null==le?void 0:le.validate)||a.call(le,"blur").catch((e=>I())))},Ye=e=>{be.value=!1,o("mouseleave",e)},Ze=e=>{be.value=!0,o("mouseenter",e)},ea=e=>{o("keydown",e)},aa=()=>{o(te,""),o("change",""),o("clear"),o("input","")};return k((()=>n.modelValue),(()=>{var e;z((()=>He())),n.validateEvent&&(null==(e=null==le?void 0:le.validate)||e.call(le,"change").catch((e=>I())))})),k(Pe,(()=>Te())),k((()=>n.type),(async()=>{await z(),Te(),He(),Oe()})),C((async()=>{!n.formatter&&n.parser,Te(),Oe(),await z(),He()})),E((async()=>{await z(),Oe()})),t({input:me,textarea:ye,ref:$e,textareaStyle:Fe,autosize:F(n,"autosize"),focus:Xe,blur:()=>{var e;return null==(e=$e.value)?void 0:e.blur()},select:()=>{var e;null==(e=$e.value)||e.select()},clear:aa,resizeTextarea:He}),(e,a)=>P((V(),_("div",K(R(Q),{class:["textarea"===e.type?R(ve).b():R(fe).b(),R(fe).m(R(de)),R(fe).is("disabled",R(ce)),R(fe).is("exceed",R(Ne)),{[R(fe).b("group")]:e.$slots.prepend||e.$slots.append,[R(fe).bm("group","append")]:e.$slots.append,[R(fe).bm("group","prepend")]:e.$slots.prepend,[R(fe).m("prefix")]:e.$slots.prefix||e.prefixIcon,[R(fe).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[R(fe).bm("suffix","password-clear")]:R(Me)&&R(Ve)},e.$attrs.class],style:R(Ee),role:e.containerRole,onMouseenter:Ze,onMouseleave:Ye}),[B(" input "),"textarea"!==e.type?(V(),_(N,{key:0},[B(" prepend slot "),e.$slots.prepend?(V(),_("div",{key:0,class:A(R(fe).be("group","prepend"))},[j(e.$slots,"prepend")],2)):B("v-if",!0),H("div",{class:A([R(fe).e("wrapper"),R(fe).is("focus",xe.value)])},[B(" prefix slot "),e.$slots.prefix||e.prefixIcon?(V(),_("span",{key:0,class:A(R(fe).e("prefix"))},[H("span",{class:A(R(fe).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(V(),T(R(q),{key:0,class:A(R(fe).e("icon"))},{default:W((()=>[(V(),T(O(e.prefixIcon)))])),_:1},8,["class"])):B("v-if",!0)],2)],2)):B("v-if",!0),H("input",K({id:R(ie),ref_key:"input",ref:me,class:R(fe).e("inner")},R(ae),{type:e.showPassword?he.value?"text":"password":e.type,disabled:R(ce),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:De,onCompositionupdate:Ge,onCompositionend:Le,onInput:qe,onFocus:Je,onBlur:Qe,onChange:Ke,onKeydown:ea}),null,16,ue),B(" suffix slot "),R(Ae)?(V(),_("span",{key:1,class:A(R(fe).e("suffix"))},[H("span",{class:A(R(fe).e("suffix-inner"))},[R(Me)&&R(Ve)&&R(_e)?B("v-if",!0):(V(),_(N,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(V(),T(R(q),{key:0,class:A(R(fe).e("icon"))},{default:W((()=>[(V(),T(O(e.suffixIcon)))])),_:1},8,["class"])):B("v-if",!0)],64)),R(Me)?(V(),T(R(q),{key:1,class:A([R(fe).e("icon"),R(fe).e("clear")]),onMousedown:L(R(U),["prevent"]),onClick:aa},{default:W((()=>[D(R(G))])),_:1},8,["class","onMousedown"])):B("v-if",!0),R(Ve)?(V(),T(R(q),{key:2,class:A([R(fe).e("icon"),R(fe).e("password")]),onClick:Ue},{default:W((()=>[(V(),T(O(R(Ce))))])),_:1},8,["class"])):B("v-if",!0),R(_e)?(V(),_("span",{key:3,class:A(R(fe).e("count"))},[H("span",{class:A(R(fe).e("count-inner"))},X(R(Be))+" / "+X(R(ae).maxlength),3)],2)):B("v-if",!0),R(ze)&&R(Ie)&&R(ke)?(V(),T(R(q),{key:4,class:A([R(fe).e("icon"),R(fe).e("validateIcon"),R(fe).is("loading","validating"===R(ze))])},{default:W((()=>[(V(),T(O(R(Ie))))])),_:1},8,["class"])):B("v-if",!0)],2)],2)):B("v-if",!0)],2),B(" append slot "),e.$slots.append?(V(),_("div",{key:1,class:A(R(fe).be("group","append"))},[j(e.$slots,"append")],2)):B("v-if",!0)],64)):(V(),_(N,{key:1},[B(" textarea "),H("textarea",K({id:R(ie),ref_key:"textarea",ref:ye,class:R(ve).e("inner")},R(ae),{tabindex:e.tabindex,disabled:R(ce),readonly:e.readonly,autocomplete:e.autocomplete,style:R(Fe),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:De,onCompositionupdate:Ge,onCompositionend:Le,onInput:qe,onFocus:Je,onBlur:Qe,onChange:Ke,onKeydown:ea}),null,16,pe),R(_e)?(V(),_("span",{key:0,style:J(we.value),class:A(R(fe).e("count"))},X(R(Be))+" / "+X(R(ae).maxlength),7)):B("v-if",!0)],64))],16,re)),[[M,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{de as E,oe as i};
