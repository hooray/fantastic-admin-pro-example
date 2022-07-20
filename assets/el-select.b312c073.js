
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,i=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&s(e,l,t[l]);if(o)for(var l of o(t))n.call(t,l)&&s(e,l,t[l]);return e};import{c8 as r,W as u,c as p,c9 as c,y as d,ca as v,i as h,I as m,d as b,u as f,av as g,aM as y,aw as C,aE as S,_ as O,G as x,H as w,b as L,f as I,g as T,F as P,R as E,n as V,l as M,r as k,o as B,a$ as D,k as q,b7 as z,s as W,bR as F,bT as K,aV as A,b0 as H,cb as j,an as R,cc as $,cd as _,aD as Q,ce as N,ao as G,cf as U,a5 as X,E as J,ad as Y,b2 as Z,cg as ee,L as te,M as le,ch as oe,h as ae,w as ne,e as se,S as ie,X as re,m as ue,T as pe,a1 as ce,ci as de,a7 as ve,N as he,q as me,aH as be}from"./index.d45ed42d.js";import{i as fe,E as ge}from"./el-input.f0fe7b13.js";import{E as ye,t as Ce}from"./index.f5abf247.js";import{U as Se,C as Oe}from"./event.6c7ea317.js";import{l as xe}from"./isEqual.02b698d2.js";import{C as we}from"./index.ad76f6b9.js";import{i as Le}from"./validator.ad7588b1.js";const Ie=b({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const t=f("select"),l=g({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i}=function(e,t){const l=u("ElSelect"),o=u("ElSelectGroup",{disabled:!1}),a=p((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),n=p((()=>l.props.multiple?g(l.props.modelValue,e.value):y(e.value,l.props.modelValue))),s=p((()=>{if(l.props.multiple){const e=l.props.modelValue||[];return!n.value&&e.length>=l.props.multipleLimit&&l.props.multipleLimit>0}return!1})),i=p((()=>e.label||(a.value?"":e.value))),r=p((()=>e.value||e.label||"")),b=p((()=>e.disabled||t.groupDisabled||s.value)),f=m(),g=(e=[],t)=>{if(a.value){const o=l.props.valueKey;return e&&e.some((e=>c(e,o)===c(t,o)))}return e&&e.includes(t)},y=(e,t)=>{if(a.value){const{valueKey:o}=l.props;return c(e,o)===c(t,o)}return e===t};d((()=>i.value),(()=>{e.created||l.props.remote||l.setSelected()})),d((()=>e.value),((t,o)=>{const{remote:a,valueKey:n}=l.props;if(!e.created&&!a){if(n&&"object"==typeof t&&"object"==typeof o&&t[n]===o[n])return;l.setSelected()}})),d((()=>o.disabled),(()=>{t.groupDisabled=o.disabled}),{immediate:!0});const{queryChange:C}=v(l);return d(C,(o=>{const{query:a}=h(o),n=new RegExp(((e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"))(a),"i");t.visible=n.test(i.value)||e.created,t.visible||l.filteredOptionsCount--})),{select:l,currentLabel:i,currentValue:r,itemSelected:n,isDisabled:b,hoverItem:()=>{e.disabled||o.disabled||(l.hoverIndex=l.optionsArray.indexOf(f.proxy))}}}(e,l),{visible:r,hover:b}=y(l),O=m().proxy,x=O.value;return s.onOptionCreate(O),C((()=>{const{selected:e}=s,t=(s.props.multiple?e:[e]).some((e=>e.value===O.value));s.cachedOptions.get(x)!==O||t||S((()=>{s.cachedOptions.delete(x)})),s.onOptionDestroy(x,O)})),{ns:t,currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i,visible:r,hover:b,selectOptionClick:function(){!0!==e.disabled&&!0!==l.groupDisabled&&s.handleOptionSelect(O,!0)},states:l}}});var Te=O(Ie,[["render",function(e,t,l,o,a,n){return x((L(),I("li",{class:V([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:t[0]||(t[0]=(...t)=>e.hoverItem&&e.hoverItem(...t)),onClick:t[1]||(t[1]=M(((...t)=>e.selectOptionClick&&e.selectOptionClick(...t)),["stop"]))},[T(e.$slots,"default",{},(()=>[P("span",null,E(e.currentLabel),1)]))],34)),[[w,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Pe=b({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=u("ElSelect"),t=f("select"),l=p((()=>e.props.popperClass)),o=p((()=>e.props.multiple)),a=p((()=>e.props.fitInputWidth)),n=k("");function s(){var t;n.value=`${null==(t=e.selectWrapper)?void 0:t.offsetWidth}px`}return B((()=>{s(),D(e.selectWrapper,s)})),{ns:t,minWidth:n,popperClass:l,isMultiple:o,isFitInputWidth:a}}});const Ee=(e,t,l)=>{const{t:o}=z(),a=f("select"),n=k(null),s=k(null),i=k(null),v=k(null),h=k(null),m=k(null),b=k(-1),g=W({query:""}),y=W(""),C=u(F,{}),O=u(K,{}),x=p((()=>!e.filterable||e.multiple||!t.visible)),w=p((()=>e.disabled||C.disabled)),L=p((()=>{const l=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:void 0!==e.modelValue&&null!==e.modelValue&&""!==e.modelValue;return e.clearable&&!w.value&&t.inputHovering&&l})),I=p((()=>e.remote&&e.filterable?"":e.suffixIcon)),T=p((()=>a.is("reverse",I.value&&t.visible))),P=p((()=>e.remote?300:0)),E=p((()=>e.loading?e.loadingText||o("el.select.loading"):(!e.remote||""!==t.query||0!==t.options.size)&&(e.filterable&&t.query&&t.options.size>0&&0===t.filteredOptionsCount?e.noMatchText||o("el.select.noMatch"):0===t.options.size?e.noDataText||o("el.select.noData"):null))),V=p((()=>Array.from(t.options.values()))),M=p((()=>Array.from(t.cachedOptions.values()))),B=p((()=>{const l=V.value.filter((e=>!e.created)).some((e=>e.currentLabel===t.query));return e.filterable&&e.allowCreate&&""!==t.query&&!l})),D=A(),q=p((()=>["small"].includes(D.value)?"small":"default")),U=p({get:()=>t.visible&&!1!==E.value,set(e){t.visible=e}});d([()=>w.value,()=>D.value,()=>C.size],(()=>{S((()=>{X()}))})),d((()=>e.placeholder),(e=>{t.cachedPlaceHolder=t.currentPlaceholder=e})),d((()=>e.modelValue),((l,o)=>{var a;e.multiple&&(X(),l&&l.length>0||s.value&&""!==t.query?t.currentPlaceholder="":t.currentPlaceholder=t.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(t.query="",J(t.query))),ee(),e.filterable&&!e.multiple&&(t.inputLength=20),!xe(l,o)&&e.validateEvent&&(null==(a=O.validate)||a.call(O,"change").catch((e=>H())))}),{flush:"post",deep:!0}),d((()=>t.visible),(o=>{var a,n,r;o?(null==(n=null==(a=i.value)?void 0:a.updatePopper)||n.call(a),e.filterable&&(t.filteredOptionsCount=t.optionsCount,t.query=e.remote?"":t.selectedLabel,e.multiple?null==(r=s.value)||r.focus():t.selectedLabel&&(t.currentPlaceholder=`${t.selectedLabel}`,t.selectedLabel=""),J(t.query),e.multiple||e.remote||(g.value.query="",j(g),j(y)))):(s.value&&s.value.blur(),t.query="",t.previousQuery=null,t.selectedLabel="",t.inputLength=20,t.menuVisibleOnFocus=!1,le(),S((()=>{s.value&&""===s.value.value&&0===t.selected.length&&(t.currentPlaceholder=t.cachedPlaceHolder)})),e.multiple||(t.selected&&(e.filterable&&e.allowCreate&&t.createdSelected&&t.createdLabel?t.selectedLabel=t.createdLabel:t.selectedLabel=t.selected.currentLabel,e.filterable&&(t.query=t.selectedLabel)),e.filterable&&(t.currentPlaceholder=t.cachedPlaceHolder))),l.emit("visible-change",o)})),d((()=>t.options.entries()),(()=>{var l,o,a;if(!R)return;null==(o=null==(l=i.value)?void 0:l.updatePopper)||o.call(l),e.multiple&&X();const n=(null==(a=h.value)?void 0:a.querySelectorAll("input"))||[];Array.from(n).includes(document.activeElement)||ee(),e.defaultFirstOption&&(e.filterable||e.remote)&&t.filteredOptionsCount&&Z()}),{flush:"post"}),d((()=>t.hoverIndex),(e=>{"number"==typeof e&&e>-1&&(b.value=V.value[e]||{}),V.value.forEach((e=>{e.hover=b.value===e}))}));const X=()=>{e.collapseTags&&!e.filterable||S((()=>{var e,l;if(!n.value)return;const o=n.value.$el.querySelector("input"),a=v.value,s=(u=D.value||C.size,r[u||"default"]);var u;o.style.height=(0===t.selected.length?s:Math.max(a?a.clientHeight+(a.clientHeight>s?6:0):0,s))-2+"px",t.tagInMultiLine=Number.parseFloat(o.style.height)>=s,t.visible&&!1!==E.value&&(null==(l=null==(e=i.value)?void 0:e.updatePopper)||l.call(e))}))},J=l=>{t.previousQuery===l||t.isOnComposition||(null!==t.previousQuery||"function"!=typeof e.filterMethod&&"function"!=typeof e.remoteMethod?(t.previousQuery=l,S((()=>{var e,l;t.visible&&(null==(l=null==(e=i.value)?void 0:e.updatePopper)||l.call(e))})),t.hoverIndex=-1,e.multiple&&e.filterable&&S((()=>{const l=15*s.value.value.length+20;t.inputLength=e.collapseTags?Math.min(50,l):l,Y(),X()})),e.remote&&"function"==typeof e.remoteMethod?(t.hoverIndex=-1,e.remoteMethod(l)):"function"==typeof e.filterMethod?(e.filterMethod(l),j(y)):(t.filteredOptionsCount=t.optionsCount,g.value.query=l,j(g),j(y)),e.defaultFirstOption&&(e.filterable||e.remote)&&t.filteredOptionsCount&&Z()):t.previousQuery=l)},Y=()=>{""!==t.currentPlaceholder&&(t.currentPlaceholder=s.value.value?"":t.cachedPlaceHolder)},Z=()=>{const e=V.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),o=e[0];t.hoverIndex=ue(V.value,l||o)},ee=()=>{var l;if(!e.multiple){const o=te(e.modelValue);return(null==(l=o.props)?void 0:l.created)?(t.createdLabel=o.props.value,t.createdSelected=!0):t.createdSelected=!1,t.selectedLabel=o.currentLabel,t.selected=o,void(e.filterable&&(t.query=t.selectedLabel))}t.selectedLabel="";const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach((e=>{o.push(te(e))})),t.selected=o,S((()=>{X()}))},te=l=>{let o;const a="object"===$(l).toLowerCase(),n="null"===$(l).toLowerCase(),s="undefined"===$(l).toLowerCase();for(let r=t.cachedOptions.size-1;r>=0;r--){const t=M.value[r];if(a?c(t.value,e.valueKey)===c(l,e.valueKey):t.value===l){o={value:l,currentLabel:t.currentLabel,isDisabled:t.isDisabled};break}}if(o)return o;const i={value:l,currentLabel:a?l.label:n||s?"":l};return e.multiple&&(i.hitState=!1),i},le=()=>{setTimeout((()=>{const l=e.valueKey;e.multiple?t.selected.length>0?t.hoverIndex=Math.min.apply(null,t.selected.map((e=>V.value.findIndex((t=>c(t,l)===c(e,l)))))):t.hoverIndex=-1:t.hoverIndex=V.value.findIndex((e=>he(e)===he(t.selected)))}),300)},oe=()=>{var e;t.inputWidth=null==(e=n.value)?void 0:e.$el.getBoundingClientRect().width},ae=_((()=>{e.filterable&&t.query!==t.selectedLabel&&(t.query=t.selectedLabel,J(t.query))}),P.value),ne=_((e=>{J(e.target.value)}),P.value),se=t=>{xe(e.modelValue,t)||l.emit(Oe,t)},ie=o=>{o.stopPropagation();const a=e.multiple?[]:"";if("string"!=typeof a)for(const e of t.selected)e.isDisabled&&a.push(e.value);l.emit(Se,a),se(a),t.visible=!1,l.emit("clear")},re=(o,a)=>{var n;if(e.multiple){const a=(e.modelValue||[]).slice(),i=ue(a,o.value);i>-1?a.splice(i,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(o.value),l.emit(Se,a),se(a),o.created&&(t.query="",J(""),t.inputLength=20),e.filterable&&(null==(n=s.value)||n.focus())}else l.emit(Se,o.value),se(o.value),t.visible=!1;t.isSilentBlur=a,pe(),t.visible||S((()=>{ce(o)}))},ue=(t=[],l)=>{if(!Q(l))return t.indexOf(l);const o=e.valueKey;let a=-1;return t.some(((e,t)=>c(e,o)===c(l,o)&&(a=t,!0))),a},pe=()=>{t.softFocus=!0;const e=s.value||n.value;e&&(null==e||e.focus())},ce=e=>{var t,l,o,n,s;const r=Array.isArray(e)?e[0]:e;let u=null;if(null==r?void 0:r.value){const e=V.value.filter((e=>e.value===r.value));e.length>0&&(u=e[0].$el)}if(i.value&&u){const e=null==(n=null==(o=null==(l=null==(t=i.value)?void 0:t.popperRef)?void 0:l.contentRef)?void 0:o.querySelector)?void 0:n.call(o,`.${a.be("dropdown","wrap")}`);e&&N(e,u)}null==(s=m.value)||s.handleScroll()},de=e=>{if(!Array.isArray(t.selected))return;const l=t.selected[t.selected.length-1];return l?!0===e||!1===e?(l.hitState=e,e):(l.hitState=!l.hitState,l.hitState):void 0},ve=()=>{var l;e.automaticDropdown||w.value||(t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:t.visible=!t.visible,t.visible&&(null==(l=s.value||n.value)||l.focus()))},he=t=>Q(t.value)?c(t.value,e.valueKey):t.value,me=p((()=>V.value.filter((e=>e.visible)).every((e=>e.disabled)))),be=e=>{if(t.visible){if(0!==t.options.size&&0!==t.filteredOptionsCount&&!t.isOnComposition&&!me.value){"next"===e?(t.hoverIndex++,t.hoverIndex===t.options.size&&(t.hoverIndex=0)):"prev"===e&&(t.hoverIndex--,t.hoverIndex<0&&(t.hoverIndex=t.options.size-1));const l=V.value[t.hoverIndex];!0!==l.disabled&&!0!==l.states.groupDisabled&&l.visible||be(e),S((()=>ce(b.value)))}}else t.visible=!0};return{optionsArray:V,selectSize:D,handleResize:()=>{var t,l;oe(),null==(l=null==(t=i.value)?void 0:t.updatePopper)||l.call(t),e.multiple&&!e.filterable&&X()},debouncedOnInputChange:ae,debouncedQueryChange:ne,deletePrevTag:o=>{if(o.target.value.length<=0&&!de()){const t=e.modelValue.slice();t.pop(),l.emit(Se,t),se(t)}1===o.target.value.length&&0===e.modelValue.length&&(t.currentPlaceholder=t.cachedPlaceHolder)},deleteTag:(o,a)=>{const n=t.selected.indexOf(a);if(n>-1&&!w.value){const t=e.modelValue.slice();t.splice(n,1),l.emit(Se,t),se(t),l.emit("remove-tag",a.value)}o.stopPropagation()},deleteSelected:ie,handleOptionSelect:re,scrollToOption:ce,readonly:x,resetInputHeight:X,showClose:L,iconComponent:I,iconReverse:T,showNewOption:B,collapseTagSize:q,setSelected:ee,managePlaceholder:Y,selectDisabled:w,emptyText:E,toggleLastOptionHitState:de,resetInputState:e=>{e.code!==G.backspace&&de(!1),t.inputLength=15*s.value.value.length+20,X()},handleComposition:e=>{const l=e.target.value;if("compositionend"===e.type)t.isOnComposition=!1,S((()=>J(l)));else{const e=l[l.length-1]||"";t.isOnComposition=!fe(e)}},onOptionCreate:e=>{t.optionsCount++,t.filteredOptionsCount++,t.options.set(e.value,e),t.cachedOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{t.options.get(e)===l&&(t.optionsCount--,t.filteredOptionsCount--,t.options.delete(e))},handleMenuEnter:()=>{S((()=>ce(t.selected)))},handleFocus:o=>{t.softFocus?t.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!t.visible&&(t.menuVisibleOnFocus=!0),t.visible=!0),l.emit("focus",o))},blur:()=>{var e;t.visible=!1,null==(e=n.value)||e.blur()},handleBlur:e=>{S((()=>{t.isSilentBlur?t.isSilentBlur=!1:l.emit("blur",e)})),t.softFocus=!1},handleClearClick:e=>{ie(e)},handleClose:()=>{t.visible=!1},handleKeydownEscape:e=>{t.visible&&(e.preventDefault(),e.stopPropagation(),t.visible=!1)},toggleMenu:ve,selectOption:()=>{t.visible?V.value[t.hoverIndex]&&re(V.value[t.hoverIndex],void 0):ve()},getValueKey:he,navigateOptions:be,dropMenuVisible:U,queryChange:g,groupQueryChange:y,reference:n,input:s,tooltipRef:i,tags:v,selectWrapper:h,scrollbar:m}},Ve=b({name:"ElSelect",componentName:"ElSelect",components:{ElInput:ge,ElSelectMenu:O(Pe,[["render",function(e,t,l,o,a,n){return L(),I("div",{class:V([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:q({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[T(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]),ElOption:Te,ElTag:ye,ElScrollbar:U,ElTooltip:X,ElIcon:J},directives:{ClickOutside:we},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Le},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Y.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:Z},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:ee},tagType:(Me=i({},Ce.type),ke={default:"info"},t(Me,l(ke))),validateEvent:{type:Boolean,default:!0}},emits:[Se,Oe,"remove-tag","clear","visible-change","focus","blur"],setup(e,t){const l=f("select"),o=f("input"),{t:a}=z(),n=function(e){const{t:t}=z();return g({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:t("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}(e),{optionsArray:s,selectSize:i,readonly:r,handleResize:u,collapseTagSize:c,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:m,deleteTag:b,deleteSelected:C,handleOptionSelect:O,scrollToOption:x,setSelected:w,resetInputHeight:L,managePlaceholder:I,showClose:T,selectDisabled:P,iconComponent:E,iconReverse:V,showNewOption:M,emptyText:k,toggleLastOptionHitState:q,resetInputState:W,handleComposition:F,onOptionCreate:K,onOptionDestroy:A,handleMenuEnter:H,handleFocus:j,blur:R,handleBlur:$,handleClearClick:_,handleClose:Q,handleKeydownEscape:N,toggleMenu:G,selectOption:U,getValueKey:X,navigateOptions:J,dropMenuVisible:Y,reference:Z,input:ee,tooltipRef:le,tags:oe,selectWrapper:ae,scrollbar:ne,queryChange:se,groupQueryChange:ie}=Ee(e,n,t),{focus:re}=(ue=Z,{focus:()=>{var e,t;null==(t=null==(e=ue.value)?void 0:e.focus)||t.call(e)}});var ue;const{inputWidth:pe,selected:ce,inputLength:de,filteredOptionsCount:ve,visible:he,softFocus:me,selectedLabel:be,hoverIndex:fe,query:ge,inputHovering:ye,currentPlaceholder:Ce,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Le,cachedOptions:Ie,optionsCount:Te,prefixWidth:Pe,tagInMultiLine:Ve}=y(n),Me=p((()=>{const t=[l.b()],o=h(i);return o&&t.push(l.m(o)),e.disabled&&t.push(l.m("disabled")),t})),ke=p((()=>({maxWidth:h(pe)-32+"px",width:"100%"})));te("ElSelect",g({props:e,options:Le,optionsArray:s,cachedOptions:Ie,optionsCount:Te,filteredOptionsCount:ve,hoverIndex:fe,handleOptionSelect:O,onOptionCreate:K,onOptionDestroy:A,selectWrapper:ae,selected:ce,setSelected:w,queryChange:se,groupQueryChange:ie})),B((()=>{n.cachedPlaceHolder=Ce.value=e.placeholder||a("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Ce.value=""),D(ae,u),e.remote&&e.multiple&&L(),S((()=>{const e=Z.value&&Z.value.$el;if(e&&(pe.value=e.getBoundingClientRect().width,t.slots.prefix)){const t=e.querySelector(`.${o.e("prefix")}`);Pe.value=Math.max(t.getBoundingClientRect().width+5,30)}})),w()})),e.multiple&&!Array.isArray(e.modelValue)&&t.emit(Se,[]),!e.multiple&&Array.isArray(e.modelValue)&&t.emit(Se,"");const Be=p((()=>{var e,t;return null==(t=null==(e=le.value)?void 0:e.popperRef)?void 0:t.contentRef}));return{tagInMultiLine:Ve,prefixWidth:Pe,selectSize:i,readonly:r,handleResize:u,collapseTagSize:c,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:m,deleteTag:b,deleteSelected:C,handleOptionSelect:O,scrollToOption:x,inputWidth:pe,selected:ce,inputLength:de,filteredOptionsCount:ve,visible:he,softFocus:me,selectedLabel:be,hoverIndex:fe,query:ge,inputHovering:ye,currentPlaceholder:Ce,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Le,resetInputHeight:L,managePlaceholder:I,showClose:T,selectDisabled:P,iconComponent:E,iconReverse:V,showNewOption:M,emptyText:k,toggleLastOptionHitState:q,resetInputState:W,handleComposition:F,handleMenuEnter:H,handleFocus:j,blur:R,handleBlur:$,handleClearClick:_,handleClose:Q,handleKeydownEscape:N,toggleMenu:G,selectOption:U,getValueKey:X,navigateOptions:J,dropMenuVisible:Y,focus:re,reference:Z,input:ee,tooltipRef:le,popperPaneRef:Be,tags:oe,selectWrapper:ae,scrollbar:ne,wrapperKls:Me,selectTagsStyle:ke,nsSelect:l}}});var Me,ke;const Be={class:"select-trigger"},De=["disabled","autocomplete"],qe={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var ze=O(Ve,[["render",function(e,t,l,o,a,n){const s=le("el-tag"),i=le("el-tooltip"),r=le("el-icon"),u=le("el-input"),p=le("el-option"),c=le("el-scrollbar"),d=le("el-select-menu"),v=oe("click-outside");return x((L(),I("div",{ref:"selectWrapper",class:V(e.wrapperKls),onClick:t[23]||(t[23]=M(((...t)=>e.toggleMenu&&e.toggleMenu(...t)),["stop"]))},[ae(i,{ref:"tooltipRef",visible:e.dropMenuVisible,"onUpdate:visible":t[22]||(t[22]=t=>e.dropMenuVisible=t),placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:ne((()=>[P("div",Be,[e.multiple?(L(),I("div",{key:0,ref:"tags",class:V(e.nsSelect.e("tags")),style:q(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(L(),I("span",{key:0,class:V([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[ae(s,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:t[0]||(t[0]=t=>e.deleteTag(t,e.selected[0]))},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text")),style:q({maxWidth:e.inputWidth-123+"px"})},E(e.selected[0].currentLabel),7)])),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(L(),se(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:ne((()=>[e.collapseTagsTooltip?(L(),se(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:!1},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text"))},"+ "+E(e.selected.length-1),3)])),content:ne((()=>[P("div",{class:V(e.nsSelect.e("collapse-tags"))},[(L(!0),I(ie,null,re(e.selected.slice(1),((t,l)=>(L(),I("div",{key:l,class:V(e.nsSelect.e("collapse-tag"))},[(L(),se(s,{key:e.getValueKey(t),class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:l=>e.deleteTag(l,t)},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text")),style:q({maxWidth:e.inputWidth-75+"px"})},E(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"]))],2)))),128))],2)])),_:1},8,["disabled","effect"])):(L(),I("span",{key:1,class:V(e.nsSelect.e("tags-text"))},"+ "+E(e.selected.length-1),3))])),_:1},8,["size","type"])):ue("v-if",!0)],2)):ue("v-if",!0),ue(" <div> "),e.collapseTags?ue("v-if",!0):(L(),se(pe,{key:1,onAfterLeave:e.resetInputHeight},{default:ne((()=>[P("span",{class:V([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(L(!0),I(ie,null,re(e.selected,(t=>(L(),se(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:l=>e.deleteTag(l,t)},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text")),style:q({maxWidth:e.inputWidth-75+"px"})},E(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),ue(" </div> "),e.filterable?x((L(),I("input",{key:2,ref:"input","onUpdate:modelValue":t[1]||(t[1]=t=>e.query=t),type:"text",class:V([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:q({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:t[2]||(t[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:t[3]||(t[3]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:t[4]||(t[4]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[t[5]||(t[5]=(...t)=>e.resetInputState&&e.resetInputState(...t)),t[6]||(t[6]=ce(M((t=>e.navigateOptions("next")),["prevent"]),["down"])),t[7]||(t[7]=ce(M((t=>e.navigateOptions("prev")),["prevent"]),["up"])),t[8]||(t[8]=ce(((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t)),["esc"])),t[9]||(t[9]=ce(M(((...t)=>e.selectOption&&e.selectOption(...t)),["stop","prevent"]),["enter"])),t[10]||(t[10]=ce(((...t)=>e.deletePrevTag&&e.deletePrevTag(...t)),["delete"])),t[11]||(t[11]=ce((t=>e.visible=!1),["tab"]))],onCompositionstart:t[12]||(t[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:t[13]||(t[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:t[14]||(t[14]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:t[15]||(t[15]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,De)),[[de,e.query]]):ue("v-if",!0)],6)):ue("v-if",!0),ae(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":t[16]||(t[16]=t=>e.selectedLabel=t),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:V([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[t[17]||(t[17]=ce(M((t=>e.navigateOptions("next")),["stop","prevent"]),["down"])),t[18]||(t[18]=ce(M((t=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),ce(M(e.selectOption,["stop","prevent"]),["enter"]),ce(e.handleKeydownEscape,["esc"]),t[19]||(t[19]=ce((t=>e.visible=!1),["tab"]))],onMouseenter:t[20]||(t[20]=t=>e.inputHovering=!0),onMouseleave:t[21]||(t[21]=t=>e.inputHovering=!1)},ve({suffix:ne((()=>[e.iconComponent&&!e.showClose?(L(),se(r,{key:0,class:V([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:ne((()=>[(L(),se(he(e.iconComponent)))])),_:1},8,["class"])):ue("v-if",!0),e.showClose&&e.clearIcon?(L(),se(r,{key:1,class:V([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:ne((()=>[(L(),se(he(e.clearIcon)))])),_:1},8,["class","onClick"])):ue("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:ne((()=>[P("div",qe,[T(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])])),content:ne((()=>[ae(d,null,{default:ne((()=>[x(ae(c,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:V([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:ne((()=>[e.showNewOption?(L(),se(p,{key:0,value:e.query,created:!0},null,8,["value"])):ue("v-if",!0),T(e.$slots,"default")])),_:3},8,["wrap-class","view-class","class"]),[[w,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(L(),I(ie,{key:0},[e.$slots.empty?T(e.$slots,"empty",{key:0}):(L(),I("p",{key:1,class:V(e.nsSelect.be("dropdown","empty"))},E(e.emptyText),3))],64)):ue("v-if",!0)])),_:3})])),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[v,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var We=O(b({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const t=f("select"),l=k(!0),o=m(),a=k([]);te("ElSelectGroup",g(i({},y(e))));const n=u("ElSelect");B((()=>{a.value=s(o.subTree)}));const s=e=>{const t=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var l;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?t.push(e.component.proxy):(null==(l=e.children)?void 0:l.length)&&t.push(...s(e))})),t},{groupQueryChange:r}=v(n);return d(r,(()=>{l.value=a.value.some((e=>!0===e.visible))})),{visible:l,ns:t}}}),[["render",function(e,t,l,o,a,n){return x((L(),I("ul",{class:V(e.ns.be("group","wrap"))},[P("li",{class:V(e.ns.be("group","title"))},E(e.label),3),P("li",null,[P("ul",{class:V(e.ns.b("group"))},[T(e.$slots,"default")],2)])],2)),[[w,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Fe=me(ze,{Option:Te,OptionGroup:We}),Ke=be(Te),Ae=be(We);export{Ke as E,Ae as a,Fe as b};