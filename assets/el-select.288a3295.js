
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,i=(e,l)=>{for(var t in l||(l={}))a.call(l,t)&&s(e,t,l[t]);if(o)for(var t of o(l))n.call(l,t)&&s(e,t,l[t]);return e};import{c7 as r,V as u,c as p,c8 as c,y as d,c9 as v,i as h,H as m,d as b,u as f,au as g,aL as y,av as C,aD as S,_ as O,F as x,G as w,b as L,f as I,g as T,D as P,Q as V,n as M,l as k,r as E,o as D,a_ as q,k as z,b6 as B,s as W,bQ as F,bS as K,aU as A,a$ as j,ca as H,am as R,cb as _,cc as $,aC as Q,cd as N,an as G,ce as U,a4 as J,E as X,ac as Y,b1 as Z,cf as ee,K as le,L as te,cg as oe,h as ae,w as ne,e as se,R as ie,W as re,m as ue,T as pe,a0 as ce,ch as de,a6 as ve,M as he,q as me,aG as be}from"./index.0358e322.js";import{i as fe,E as ge}from"./el-input.88480f15.js";import{E as ye,t as Ce}from"./index.fe0afd4c.js";import{U as Se,C as Oe}from"./event.fa25aaef.js";import{l as xe}from"./isEqual.fb89c671.js";import{C as we}from"./index.11025292.js";import{i as Le}from"./validator.b337b744.js";const Ie=b({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=f("select"),t=g({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i}=function(e,l){const t=u("ElSelect"),o=u("ElSelectGroup",{disabled:!1}),a=p((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),n=p((()=>t.props.multiple?g(t.props.modelValue,e.value):y(e.value,t.props.modelValue))),s=p((()=>{if(t.props.multiple){const e=t.props.modelValue||[];return!n.value&&e.length>=t.props.multipleLimit&&t.props.multipleLimit>0}return!1})),i=p((()=>e.label||(a.value?"":e.value))),r=p((()=>e.value||e.label||"")),b=p((()=>e.disabled||l.groupDisabled||s.value)),f=m(),g=(e=[],l)=>{if(a.value){const o=t.props.valueKey;return e&&e.some((e=>c(e,o)===c(l,o)))}return e&&e.includes(l)},y=(e,l)=>{if(a.value){const{valueKey:o}=t.props;return c(e,o)===c(l,o)}return e===l};d((()=>i.value),(()=>{e.created||t.props.remote||t.setSelected()})),d((()=>e.value),((l,o)=>{const{remote:a,valueKey:n}=t.props;if(!e.created&&!a){if(n&&"object"==typeof l&&"object"==typeof o&&l[n]===o[n])return;t.setSelected()}})),d((()=>o.disabled),(()=>{l.groupDisabled=o.disabled}),{immediate:!0});const{queryChange:C}=v(t);return d(C,(o=>{const{query:a}=h(o),n=new RegExp(((e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"))(a),"i");l.visible=n.test(i.value)||e.created,l.visible||t.filteredOptionsCount--})),{select:t,currentLabel:i,currentValue:r,itemSelected:n,isDisabled:b,hoverItem:()=>{e.disabled||o.disabled||(t.hoverIndex=t.optionsArray.indexOf(f.proxy))}}}(e,t),{visible:r,hover:b}=y(t),O=m().proxy,x=O.value;return s.onOptionCreate(O),C((()=>{const{selected:e}=s,l=(s.props.multiple?e:[e]).some((e=>e.value===O.value));s.cachedOptions.get(x)!==O||l||S((()=>{s.cachedOptions.delete(x)})),s.onOptionDestroy(x,O)})),{ns:l,currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i,visible:r,hover:b,selectOptionClick:function(){!0!==e.disabled&&!0!==t.groupDisabled&&s.handleOptionSelect(O,!0)},states:t}}});var Te=O(Ie,[["render",function(e,l,t,o,a,n){return x((L(),I("li",{class:M([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:l[1]||(l[1]=k(((...l)=>e.selectOptionClick&&e.selectOptionClick(...l)),["stop"]))},[T(e.$slots,"default",{},(()=>[P("span",null,V(e.currentLabel),1)]))],34)),[[w,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Pe=b({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=u("ElSelect"),l=f("select"),t=p((()=>e.props.popperClass)),o=p((()=>e.props.multiple)),a=p((()=>e.props.fitInputWidth)),n=E("");function s(){var l;n.value=`${null==(l=e.selectWrapper)?void 0:l.offsetWidth}px`}return D((()=>{s(),q(e.selectWrapper,s)})),{ns:l,minWidth:n,popperClass:t,isMultiple:o,isFitInputWidth:a}}});const Ve=(e,l,t)=>{const{t:o}=B(),a=f("select"),n=E(null),s=E(null),i=E(null),v=E(null),h=E(null),m=E(null),b=E(-1),g=W({query:""}),y=W(""),C=u(F,{}),O=u(K,{}),x=p((()=>!e.filterable||e.multiple||!l.visible)),w=p((()=>e.disabled||C.disabled)),L=p((()=>{const t=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:void 0!==e.modelValue&&null!==e.modelValue&&""!==e.modelValue;return e.clearable&&!w.value&&l.inputHovering&&t})),I=p((()=>e.remote&&e.filterable?"":e.suffixIcon)),T=p((()=>a.is("reverse",I.value&&l.visible))),P=p((()=>e.remote?300:0)),V=p((()=>e.loading?e.loadingText||o("el.select.loading"):(!e.remote||""!==l.query||0!==l.options.size)&&(e.filterable&&l.query&&l.options.size>0&&0===l.filteredOptionsCount?e.noMatchText||o("el.select.noMatch"):0===l.options.size?e.noDataText||o("el.select.noData"):null))),M=p((()=>Array.from(l.options.values()))),k=p((()=>Array.from(l.cachedOptions.values()))),D=p((()=>{const t=M.value.filter((e=>!e.created)).some((e=>e.currentLabel===l.query));return e.filterable&&e.allowCreate&&""!==l.query&&!t})),q=A(),z=p((()=>["small"].includes(q.value)?"small":"default")),U=p({get:()=>l.visible&&!1!==V.value,set(e){l.visible=e}});d([()=>w.value,()=>q.value,()=>C.size],(()=>{S((()=>{J()}))})),d((()=>e.placeholder),(e=>{l.cachedPlaceHolder=l.currentPlaceholder=e})),d((()=>e.modelValue),((t,o)=>{var a;e.multiple&&(J(),t&&t.length>0||s.value&&""!==l.query?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",X(l.query))),ee(),e.filterable&&!e.multiple&&(l.inputLength=20),xe(t,o)||null==(a=O.validate)||a.call(O,"change").catch((e=>j()))}),{flush:"post",deep:!0}),d((()=>l.visible),(o=>{var a,n,r;o?(null==(n=null==(a=i.value)?void 0:a.updatePopper)||n.call(a),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?null==(r=s.value)||r.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),X(l.query),e.multiple||e.remote||(g.value.query="",H(g),H(y)))):(s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,te(),S((()=>{s.value&&""===s.value.value&&0===l.selected.length&&(l.currentPlaceholder=l.cachedPlaceHolder)})),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",o)})),d((()=>l.options.entries()),(()=>{var t,o,a;if(!R)return;null==(o=null==(t=i.value)?void 0:t.updatePopper)||o.call(t),e.multiple&&J();const n=(null==(a=h.value)?void 0:a.querySelectorAll("input"))||[];Array.from(n).includes(document.activeElement)||ee(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Z()}),{flush:"post"}),d((()=>l.hoverIndex),(e=>{"number"==typeof e&&e>-1&&(b.value=M.value[e]||{}),M.value.forEach((e=>{e.hover=b.value===e}))}));const J=()=>{e.collapseTags&&!e.filterable||S((()=>{var e,t;if(!n.value)return;const o=n.value.$el.querySelector("input"),a=v.value,s=(u=q.value||C.size,r[u||"default"]);var u;o.style.height=(0===l.selected.length?s:Math.max(a?a.clientHeight+(a.clientHeight>s?6:0):0,s))-2+"px",l.tagInMultiLine=Number.parseFloat(o.style.height)>=s,l.visible&&!1!==V.value&&(null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e))}))},X=t=>{l.previousQuery===t||l.isOnComposition||(null!==l.previousQuery||"function"!=typeof e.filterMethod&&"function"!=typeof e.remoteMethod?(l.previousQuery=t,S((()=>{var e,t;l.visible&&(null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e))})),l.hoverIndex=-1,e.multiple&&e.filterable&&S((()=>{const t=15*s.value.value.length+20;l.inputLength=e.collapseTags?Math.min(50,t):t,Y(),J()})),e.remote&&"function"==typeof e.remoteMethod?(l.hoverIndex=-1,e.remoteMethod(t)):"function"==typeof e.filterMethod?(e.filterMethod(t),H(y)):(l.filteredOptionsCount=l.optionsCount,g.value.query=t,H(g),H(y)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Z()):l.previousQuery=t)},Y=()=>{""!==l.currentPlaceholder&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},Z=()=>{const e=M.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),t=e.find((e=>e.created)),o=e[0];l.hoverIndex=ue(M.value,t||o)},ee=()=>{var t;if(!e.multiple){const o=le(e.modelValue);return(null==(t=o.props)?void 0:t.created)?(l.createdLabel=o.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=o.currentLabel,l.selected=o,void(e.filterable&&(l.query=l.selectedLabel))}l.selectedLabel="";const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach((e=>{o.push(le(e))})),l.selected=o,S((()=>{J()}))},le=t=>{let o;const a="object"===_(t).toLowerCase(),n="null"===_(t).toLowerCase(),s="undefined"===_(t).toLowerCase();for(let r=l.cachedOptions.size-1;r>=0;r--){const l=k.value[r];if(a?c(l.value,e.valueKey)===c(t,e.valueKey):l.value===t){o={value:t,currentLabel:l.currentLabel,isDisabled:l.isDisabled};break}}if(o)return o;const i={value:t,currentLabel:a?t.label:n||s?"":t};return e.multiple&&(i.hitState=!1),i},te=()=>{setTimeout((()=>{const t=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map((e=>M.value.findIndex((l=>c(l,t)===c(e,t)))))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex((e=>he(e)===he(l.selected)))}),300)},oe=()=>{var e;l.inputWidth=null==(e=n.value)?void 0:e.$el.getBoundingClientRect().width},ae=$((()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,X(l.query))}),P.value),ne=$((e=>{X(e.target.value)}),P.value),se=l=>{xe(e.modelValue,l)||t.emit(Oe,l)},ie=o=>{o.stopPropagation();const a=e.multiple?[]:"";if("string"!=typeof a)for(const e of l.selected)e.isDisabled&&a.push(e.value);t.emit(Se,a),se(a),l.visible=!1,t.emit("clear")},re=(o,a)=>{var n;if(e.multiple){const a=(e.modelValue||[]).slice(),i=ue(a,o.value);i>-1?a.splice(i,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(o.value),t.emit(Se,a),se(a),o.created&&(l.query="",X(""),l.inputLength=20),e.filterable&&(null==(n=s.value)||n.focus())}else t.emit(Se,o.value),se(o.value),l.visible=!1;l.isSilentBlur=a,pe(),l.visible||S((()=>{ce(o)}))},ue=(l=[],t)=>{if(!Q(t))return l.indexOf(t);const o=e.valueKey;let a=-1;return l.some(((e,l)=>c(e,o)===c(t,o)&&(a=l,!0))),a},pe=()=>{l.softFocus=!0;const e=s.value||n.value;e&&(null==e||e.focus())},ce=e=>{var l,t,o,n,s;const r=Array.isArray(e)?e[0]:e;let u=null;if(null==r?void 0:r.value){const e=M.value.filter((e=>e.value===r.value));e.length>0&&(u=e[0].$el)}if(i.value&&u){const e=null==(n=null==(o=null==(t=null==(l=i.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:o.querySelector)?void 0:n.call(o,`.${a.be("dropdown","wrap")}`);e&&N(e,u)}null==(s=m.value)||s.handleScroll()},de=e=>{if(!Array.isArray(l.selected))return;const t=l.selected[l.selected.length-1];return t?!0===e||!1===e?(t.hitState=e,e):(t.hitState=!t.hitState,t.hitState):void 0},ve=()=>{var t;e.automaticDropdown||w.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&(null==(t=s.value||n.value)||t.focus()))},he=l=>Q(l.value)?c(l.value,e.valueKey):l.value,me=p((()=>M.value.filter((e=>e.visible)).every((e=>e.disabled)))),be=e=>{if(l.visible){if(0!==l.options.size&&0!==l.filteredOptionsCount&&!l.isOnComposition&&!me.value){"next"===e?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):"prev"===e&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const t=M.value[l.hoverIndex];!0!==t.disabled&&!0!==t.states.groupDisabled&&t.visible||be(e),S((()=>ce(b.value)))}}else l.visible=!0};return{optionsArray:M,selectSize:q,handleResize:()=>{var l,t;oe(),null==(t=null==(l=i.value)?void 0:l.updatePopper)||t.call(l),e.multiple&&!e.filterable&&J()},debouncedOnInputChange:ae,debouncedQueryChange:ne,deletePrevTag:o=>{if(o.target.value.length<=0&&!de()){const l=e.modelValue.slice();l.pop(),t.emit(Se,l),se(l)}1===o.target.value.length&&0===e.modelValue.length&&(l.currentPlaceholder=l.cachedPlaceHolder)},deleteTag:(o,a)=>{const n=l.selected.indexOf(a);if(n>-1&&!w.value){const l=e.modelValue.slice();l.splice(n,1),t.emit(Se,l),se(l),t.emit("remove-tag",a.value)}o.stopPropagation()},deleteSelected:ie,handleOptionSelect:re,scrollToOption:ce,readonly:x,resetInputHeight:J,showClose:L,iconComponent:I,iconReverse:T,showNewOption:D,collapseTagSize:z,setSelected:ee,managePlaceholder:Y,selectDisabled:w,emptyText:V,toggleLastOptionHitState:de,resetInputState:e=>{e.code!==G.backspace&&de(!1),l.inputLength=15*s.value.value.length+20,J()},handleComposition:e=>{const t=e.target.value;if("compositionend"===e.type)l.isOnComposition=!1,S((()=>X(t)));else{const e=t[t.length-1]||"";l.isOnComposition=!fe(e)}},onOptionCreate:e=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(e.value,e),l.cachedOptions.set(e.value,e)},onOptionDestroy:(e,t)=>{l.options.get(e)===t&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(e))},handleMenuEnter:()=>{S((()=>ce(l.selected)))},handleFocus:o=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",o))},blur:()=>{var e;l.visible=!1,null==(e=n.value)||e.blur()},handleBlur:e=>{S((()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",e)})),l.softFocus=!1},handleClearClick:e=>{ie(e)},handleClose:()=>{l.visible=!1},handleKeydownEscape:e=>{l.visible&&(e.preventDefault(),e.stopPropagation(),l.visible=!1)},toggleMenu:ve,selectOption:()=>{l.visible?M.value[l.hoverIndex]&&re(M.value[l.hoverIndex],void 0):ve()},getValueKey:he,navigateOptions:be,dropMenuVisible:U,queryChange:g,groupQueryChange:y,reference:n,input:s,tooltipRef:i,tags:v,selectWrapper:h,scrollbar:m}},Me=b({name:"ElSelect",componentName:"ElSelect",components:{ElInput:ge,ElSelectMenu:O(Pe,[["render",function(e,l,t,o,a,n){return L(),I("div",{class:M([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:z({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[T(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]),ElOption:Te,ElTag:ye,ElScrollbar:U,ElTooltip:J,ElIcon:X},directives:{ClickOutside:we},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Le},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Y.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:Z},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:ee},tagType:(ke=i({},Ce.type),Ee={default:"info"},l(ke,t(Ee)))},emits:[Se,Oe,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=f("select"),o=f("input"),{t:a}=B(),n=function(e){const{t:l}=B();return g({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}(e),{optionsArray:s,selectSize:i,readonly:r,handleResize:u,collapseTagSize:c,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:m,deleteTag:b,deleteSelected:C,handleOptionSelect:O,scrollToOption:x,setSelected:w,resetInputHeight:L,managePlaceholder:I,showClose:T,selectDisabled:P,iconComponent:V,iconReverse:M,showNewOption:k,emptyText:E,toggleLastOptionHitState:z,resetInputState:W,handleComposition:F,onOptionCreate:K,onOptionDestroy:A,handleMenuEnter:j,handleFocus:H,blur:R,handleBlur:_,handleClearClick:$,handleClose:Q,handleKeydownEscape:N,toggleMenu:G,selectOption:U,getValueKey:J,navigateOptions:X,dropMenuVisible:Y,reference:Z,input:ee,tooltipRef:te,tags:oe,selectWrapper:ae,scrollbar:ne,queryChange:se,groupQueryChange:ie}=Ve(e,n,l),{focus:re}=(ue=Z,{focus:()=>{var e,l;null==(l=null==(e=ue.value)?void 0:e.focus)||l.call(e)}});var ue;const{inputWidth:pe,selected:ce,inputLength:de,filteredOptionsCount:ve,visible:he,softFocus:me,selectedLabel:be,hoverIndex:fe,query:ge,inputHovering:ye,currentPlaceholder:Ce,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Le,cachedOptions:Ie,optionsCount:Te,prefixWidth:Pe,tagInMultiLine:Me}=y(n),ke=p((()=>{const l=[t.b()],o=h(i);return o&&l.push(t.m(o)),e.disabled&&l.push(t.m("disabled")),l})),Ee=p((()=>({maxWidth:h(pe)-32+"px",width:"100%"})));le("ElSelect",g({props:e,options:Le,optionsArray:s,cachedOptions:Ie,optionsCount:Te,filteredOptionsCount:ve,hoverIndex:fe,handleOptionSelect:O,onOptionCreate:K,onOptionDestroy:A,selectWrapper:ae,selected:ce,setSelected:w,queryChange:se,groupQueryChange:ie})),D((()=>{n.cachedPlaceHolder=Ce.value=e.placeholder||a("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Ce.value=""),q(ae,u),e.remote&&e.multiple&&L(),S((()=>{const e=Z.value&&Z.value.$el;if(e&&(pe.value=e.getBoundingClientRect().width,l.slots.prefix)){const l=e.querySelector(`.${o.e("prefix")}`);Pe.value=Math.max(l.getBoundingClientRect().width+5,30)}})),w()})),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(Se,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(Se,"");const De=p((()=>{var e,l;return null==(l=null==(e=te.value)?void 0:e.popperRef)?void 0:l.contentRef}));return{tagInMultiLine:Me,prefixWidth:Pe,selectSize:i,readonly:r,handleResize:u,collapseTagSize:c,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:m,deleteTag:b,deleteSelected:C,handleOptionSelect:O,scrollToOption:x,inputWidth:pe,selected:ce,inputLength:de,filteredOptionsCount:ve,visible:he,softFocus:me,selectedLabel:be,hoverIndex:fe,query:ge,inputHovering:ye,currentPlaceholder:Ce,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Le,resetInputHeight:L,managePlaceholder:I,showClose:T,selectDisabled:P,iconComponent:V,iconReverse:M,showNewOption:k,emptyText:E,toggleLastOptionHitState:z,resetInputState:W,handleComposition:F,handleMenuEnter:j,handleFocus:H,blur:R,handleBlur:_,handleClearClick:$,handleClose:Q,handleKeydownEscape:N,toggleMenu:G,selectOption:U,getValueKey:J,navigateOptions:X,dropMenuVisible:Y,focus:re,reference:Z,input:ee,tooltipRef:te,popperPaneRef:De,tags:oe,selectWrapper:ae,scrollbar:ne,wrapperKls:ke,selectTagsStyle:Ee,nsSelect:t}}});var ke,Ee;const De={class:"select-trigger"},qe=["disabled","autocomplete"],ze={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var Be=O(Me,[["render",function(e,l,t,o,a,n){const s=te("el-tag"),i=te("el-tooltip"),r=te("el-icon"),u=te("el-input"),p=te("el-option"),c=te("el-scrollbar"),d=te("el-select-menu"),v=oe("click-outside");return x((L(),I("div",{ref:"selectWrapper",class:M(e.wrapperKls),onClick:l[23]||(l[23]=k(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["stop"]))},[ae(i,{ref:"tooltipRef",visible:e.dropMenuVisible,"onUpdate:visible":l[22]||(l[22]=l=>e.dropMenuVisible=l),placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:ne((()=>[P("div",De,[e.multiple?(L(),I("div",{key:0,ref:"tags",class:M(e.nsSelect.e("tags")),style:z(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(L(),I("span",{key:0,class:M([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[ae(s,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=l=>e.deleteTag(l,e.selected[0]))},{default:ne((()=>[P("span",{class:M(e.nsSelect.e("tags-text")),style:z({maxWidth:e.inputWidth-123+"px"})},V(e.selected[0].currentLabel),7)])),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(L(),se(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:ne((()=>[e.collapseTagsTooltip?(L(),se(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:!1},{default:ne((()=>[P("span",{class:M(e.nsSelect.e("tags-text"))},"+ "+V(e.selected.length-1),3)])),content:ne((()=>[P("div",{class:M(e.nsSelect.e("collapse-tags"))},[(L(!0),I(ie,null,re(e.selected.slice(1),((l,t)=>(L(),I("div",{key:t,class:M(e.nsSelect.e("collapse-tag"))},[(L(),se(s,{key:e.getValueKey(l),class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:t=>e.deleteTag(t,l)},{default:ne((()=>[P("span",{class:M(e.nsSelect.e("tags-text")),style:z({maxWidth:e.inputWidth-75+"px"})},V(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"]))],2)))),128))],2)])),_:1},8,["disabled","effect"])):(L(),I("span",{key:1,class:M(e.nsSelect.e("tags-text"))},"+ "+V(e.selected.length-1),3))])),_:1},8,["size","type"])):ue("v-if",!0)],2)):ue("v-if",!0),ue(" <div> "),e.collapseTags?ue("v-if",!0):(L(),se(pe,{key:1,onAfterLeave:e.resetInputHeight},{default:ne((()=>[P("span",{class:M([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(L(!0),I(ie,null,re(e.selected,(l=>(L(),se(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:ne((()=>[P("span",{class:M(e.nsSelect.e("tags-text")),style:z({maxWidth:e.inputWidth-75+"px"})},V(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),ue(" </div> "),e.filterable?x((L(),I("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=l=>e.query=l),type:"text",class:M([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:z({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:l[2]||(l[2]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:l[3]||(l[3]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onKeyup:l[4]||(l[4]=(...l)=>e.managePlaceholder&&e.managePlaceholder(...l)),onKeydown:[l[5]||(l[5]=(...l)=>e.resetInputState&&e.resetInputState(...l)),l[6]||(l[6]=ce(k((l=>e.navigateOptions("next")),["prevent"]),["down"])),l[7]||(l[7]=ce(k((l=>e.navigateOptions("prev")),["prevent"]),["up"])),l[8]||(l[8]=ce(((...l)=>e.handleKeydownEscape&&e.handleKeydownEscape(...l)),["esc"])),l[9]||(l[9]=ce(k(((...l)=>e.selectOption&&e.selectOption(...l)),["stop","prevent"]),["enter"])),l[10]||(l[10]=ce(((...l)=>e.deletePrevTag&&e.deletePrevTag(...l)),["delete"])),l[11]||(l[11]=ce((l=>e.visible=!1),["tab"]))],onCompositionstart:l[12]||(l[12]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:l[13]||(l[13]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:l[14]||(l[14]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onInput:l[15]||(l[15]=(...l)=>e.debouncedQueryChange&&e.debouncedQueryChange(...l))},null,46,qe)),[[de,e.query]]):ue("v-if",!0)],6)):ue("v-if",!0),ae(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=l=>e.selectedLabel=l),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:M([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=ce(k((l=>e.navigateOptions("next")),["stop","prevent"]),["down"])),l[18]||(l[18]=ce(k((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),ce(k(e.selectOption,["stop","prevent"]),["enter"]),ce(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=ce((l=>e.visible=!1),["tab"]))],onMouseenter:l[20]||(l[20]=l=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=l=>e.inputHovering=!1)},ve({suffix:ne((()=>[e.iconComponent&&!e.showClose?(L(),se(r,{key:0,class:M([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:ne((()=>[(L(),se(he(e.iconComponent)))])),_:1},8,["class"])):ue("v-if",!0),e.showClose&&e.clearIcon?(L(),se(r,{key:1,class:M([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:ne((()=>[(L(),se(he(e.clearIcon)))])),_:1},8,["class","onClick"])):ue("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:ne((()=>[P("div",ze,[T(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])])),content:ne((()=>[ae(d,null,{default:ne((()=>[x(ae(c,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:M([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:ne((()=>[e.showNewOption?(L(),se(p,{key:0,value:e.query,created:!0},null,8,["value"])):ue("v-if",!0),T(e.$slots,"default")])),_:3},8,["wrap-class","view-class","class"]),[[w,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(L(),I(ie,{key:0},[e.$slots.empty?T(e.$slots,"empty",{key:0}):(L(),I("p",{key:1,class:M(e.nsSelect.be("dropdown","empty"))},V(e.emptyText),3))],64)):ue("v-if",!0)])),_:3})])),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[v,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var We=O(b({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=f("select"),t=E(!0),o=m(),a=E([]);le("ElSelectGroup",g(i({},y(e))));const n=u("ElSelect");D((()=>{a.value=s(o.subTree)}));const s=e=>{const l=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var t;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?l.push(e.component.proxy):(null==(t=e.children)?void 0:t.length)&&l.push(...s(e))})),l},{groupQueryChange:r}=v(n);return d(r,(()=>{t.value=a.value.some((e=>!0===e.visible))})),{visible:t,ns:l}}}),[["render",function(e,l,t,o,a,n){return x((L(),I("ul",{class:M(e.ns.be("group","wrap"))},[P("li",{class:M(e.ns.be("group","title"))},V(e.label),3),P("li",null,[P("ul",{class:M(e.ns.b("group"))},[T(e.$slots,"default")],2)])],2)),[[w,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Fe=me(Be,{Option:Te,OptionGroup:We}),Ke=be(Te),Ae=be(We);export{Ke as E,Ae as a,Fe as b};
