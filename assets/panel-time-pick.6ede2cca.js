
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{bZ as e,c3 as a,b_ as t,c4 as n,bW as l,a8 as o,ay as s,b2 as r,aQ as i,_ as u,d as c,b8 as d,u as p,U as v,bU as m,bV as f,r as h,y as g,aF as b,b0 as y,c as M,c5 as k,c6 as w,aW as Y,i as D,c7 as S,at as _,b as A,e as P,w as C,n as V,k as $,l as x,E as L,J as T,m as H,f as E,G as I,g as R,M as F,ae as B,a6 as O,al as W,c8 as Z,o as j,N as z,Z as U,Y as K,c9 as N,H as q,h as X,ca as G,aq as J,bE as Q,T as ee}from"./index.503ec71c.js";import{E as ae}from"./el-input.546a1988.js";import{i as te}from"./isEqual.add373df.js";import{R as ne}from"./index.358b0b8c.js";var le={exports:{}};const oe=le.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,l=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},r=function(e){return function(a){this[e]=+a}},i=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var a=e.match(/([+-]|\d\d)/g),t=60*a[1]+(+a[2]||0);return 0===t?0:"+"===a[0]?-t:t}(e)}],u=function(e){var a=o[e];return a&&(a.indexOf?a:a.s.concat(a.f))},c=function(e,a){var t,n=o.meridiem;if(n){for(var l=1;l<=24;l+=1)if(e.indexOf(n(l,0,a))>-1){t=l>12;break}}else t=e===(a?"pm":"PM");return t},d={A:[l,function(e){this.afternoon=c(e,!1)}],a:[l,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,r("seconds")],ss:[n,r("seconds")],m:[n,r("minutes")],mm:[n,r("minutes")],H:[n,r("hours")],h:[n,r("hours")],HH:[n,r("hours")],hh:[n,r("hours")],D:[n,r("day")],DD:[t,r("day")],Do:[l,function(e){var a=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],a)for(var n=1;n<=31;n+=1)a(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,r("month")],MM:[t,r("month")],MMM:[l,function(e){var a=u("months"),t=(u("monthsShort")||a.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[l,function(e){var a=u("months").indexOf(e)+1;if(a<1)throw new Error;this.month=a%12||a}],Y:[/[+-]?\d+/,r("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,r("year")],Z:i,ZZ:i};function p(t){var n,l;n=t,l=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(a,t,n){var o=n&&n.toUpperCase();return t||l[n]||e[n]||l[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,a,t){return a||t.slice(1)}))}))).match(a),r=s.length,i=0;i<r;i+=1){var u=s[i],c=d[u],p=c&&c[0],v=c&&c[1];s[i]=v?{regex:p,parser:v}:u.replace(/^\[|\]$/g,"")}return function(e){for(var a={},t=0,n=0;t<r;t+=1){var l=s[t];if("string"==typeof l)n+=l.length;else{var o=l.regex,i=l.parser,u=e.slice(n),c=o.exec(u)[0];i.call(a,c),e=e.replace(c,"")}}return function(e){var a=e.afternoon;if(void 0!==a){var t=e.hours;a?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(a),a}}return function(e,a,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=a.prototype,l=n.parse;n.parse=function(e){var a=e.date,n=e.utc,s=e.args;this.$u=n;var r=s[1];if("string"==typeof r){var i=!0===s[2],u=!0===s[3],c=i||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!i&&d&&(o=t.Ls[d]),this.$d=function(e,a,t){try{if(["x","X"].indexOf(a)>-1)return new Date(("X"===a?1e3:1)*e);var n=p(a)(e),l=n.year,o=n.month,s=n.day,r=n.hours,i=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,v=new Date,m=s||(l||o?1:v.getDate()),f=l||v.getFullYear(),h=0;l&&!o||(h=o>0?o-1:v.getMonth());var g=r||0,b=i||0,y=u||0,M=c||0;return d?new Date(Date.UTC(f,h,m,g,b,y,M+60*d.offset*1e3)):t?new Date(Date.UTC(f,h,m,g,b,y,M)):new Date(f,h,m,g,b,y,M)}catch(k){return new Date("")}}(a,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&a!=this.format(r)&&(this.$d=new Date("")),o={}}else if(r instanceof Array)for(var v=r.length,m=1;m<=v;m+=1){s[1]=r[m-1];var f=t.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===v&&(this.$d=new Date(""))}else l.call(this,e)}}}(),se=["hours","minutes","seconds"],re="HH:mm:ss",ie="YYYY-MM-DD",ue={date:"YYYY-MM-DD",dates:"YYYY-MM-DD",week:"gggg[w]ww",year:"YYYY",month:"YYYY-MM",datetime:"YYYY-MM-DD HH:mm:ss",monthrange:"YYYY-MM",daterange:"YYYY-MM-DD",datetimerange:"YYYY-MM-DD HH:mm:ss"},ce=(e,a)=>[e>0?e-1:void 0,e,e<a?e+1:void 0],de=e=>Array.from(Array.from({length:e}).keys()),pe=e=>e.replace(/\W?m{1,2}|\W?ZZ/g,"").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi,"").trim(),ve=e=>e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g,"").trim(),me=function(e,a){const t=n(e),l=n(a);return t&&l?e.getTime()===a.getTime():!t&&!l&&e===a},fe=function(e,a){const t=l(e),n=l(a);return t&&n?e.length===a.length&&e.every(((e,t)=>me(e,a[t]))):!t&&!n&&me(e,a)},he=function(e,n,l){const o=a(n)||"x"===n?t(e).locale(l):t(e,n).locale(l);return o.isValid()?o:void 0},ge=function(e,n,l){return a(n)?e:"x"===n?+e:t(e).locale(l).format(n)},be=(e,a)=>{var t;const n=[],l=null==a?void 0:a();for(let o=0;o<e;o++)n.push(null!=(t=null==l?void 0:l.includes(o))&&t);return n},ye=o({disabledHours:{type:s(Function)},disabledMinutes:{type:s(Function)},disabledSeconds:{type:s(Function)}}),Me=o({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),ke=o({id:{type:s([Array,String])},name:{type:s([Array,String]),default:""},popperClass:{type:String,default:""},format:String,valueFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:s([String,Object]),default:r},editable:{type:Boolean,default:!0},prefixIcon:{type:s([String,Object]),default:""},size:i,readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""},popperOptions:{type:s(Object),default:()=>({})},modelValue:{type:s([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:s([Date,Array])},defaultTime:{type:s([Date,Array])},isRange:{type:Boolean,default:!1},...ye,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:{type:Boolean,default:!1},label:{type:String,default:void 0},tabindex:{type:s([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean}),we=["id","name","placeholder","value","disabled","readonly"],Ye=["id","name","placeholder","value","disabled","readonly"];var De=u(c({name:"Picker",props:ke,emits:["update:modelValue","change","focus","blur","calendar-change","panel-change","visible-change","keydown"],setup(e,{expose:a,emit:t}){const n=e,{lang:o}=d(),s=p("date"),r=p("input"),i=p("range"),u=v(m,{}),c=v(f,{}),Z=v("ElPopperOptions",{}),j=h(),z=h(),U=h(!1),K=h(!1),N=h(null);let q=!1,X=!1;g(U,(e=>{e?N.value=n.modelValue:(Ee.value=null,b((()=>{G(n.modelValue)})))}));const G=(e,a)=>{var l;!a&&fe(e,N.value)||(t("change",e),n.validateEvent&&(null==(l=c.validate)||l.call(c,"change").catch((e=>y()))))},J=e=>{if(!fe(n.modelValue,e)){let a;l(e)?a=e.map((e=>ge(e,n.valueFormat,o.value))):e&&(a=ge(e,n.valueFormat,o.value)),t("update:modelValue",e?a:e,o.value)}},Q=M((()=>{if(z.value){const e=xe.value?z.value:z.value.$el;return Array.from(e.querySelectorAll("input"))}return[]})),ee=(e,a,t)=>{const n=Q.value;n.length&&(t&&"min"!==t?"max"===t&&(n[1].setSelectionRange(e,a),n[1].focus()):(n[0].setSelectionRange(e,a),n[0].focus()))},ne=()=>{ue(!0,!0),b((()=>{X=!1}))},le=(e="",a=!1)=>{let t;a||ne(),U.value=a,t=l(e)?e.map((e=>e.toDate())):e?e.toDate():e,Ee.value=null,J(t)},oe=()=>{K.value=!0},se=()=>{t("visible-change",!0)},re=e=>{(null==e?void 0:e.key)===W.esc&&ue(!0,!0)},ie=()=>{K.value=!1,X=!1,t("visible-change",!1)},ue=(e=!0,a=!1)=>{X=a;const[t,n]=D(Q);let l=t;!e&&xe.value&&(l=n),l&&l.focus()},ce=e=>{n.readonly||ve.value||U.value||X||(U.value=!0,t("focus",e))};let de;const pe=e=>{const a=async()=>{setTimeout((()=>{var l,o;de===a&&((null==(l=j.value)?void 0:l.isFocusInsideContent())&&!q||0!==Q.value.filter((e=>e.contains(document.activeElement))).length||(Ie(),U.value=!1,t("blur",e),n.validateEvent&&(null==(o=c.validate)||o.call(c,"blur").catch((e=>y())))),q=!1)}),0)};de=a,a()},ve=M((()=>n.disabled||u.disabled)),me=M((()=>{let e;if(Ae.value?Ke.value.getDefaultValue&&(e=Ke.value.getDefaultValue()):e=l(n.modelValue)?n.modelValue.map((e=>he(e,n.valueFormat,o.value))):he(n.modelValue,n.valueFormat,o.value),Ke.value.getRangeAvailableTime){const a=Ke.value.getRangeAvailableTime(e);te(a,e)||(e=a,J(l(e)?e.map((e=>e.toDate())):e.toDate()))}return l(e)&&e.some((e=>!e))&&(e=[]),e})),be=M((()=>{if(!Ke.value.panelReady)return"";const e=Fe(me.value);return l(Ee.value)?[Ee.value[0]||e&&e[0]||"",Ee.value[1]||e&&e[1]||""]:null!==Ee.value?Ee.value:!Me.value&&Ae.value||!U.value&&Ae.value?"":e?ke.value?e.join(", "):e:""})),ye=M((()=>n.type.includes("time"))),Me=M((()=>n.type.startsWith("time"))),ke=M((()=>"dates"===n.type)),De=M((()=>n.prefixIcon||(ye.value?k:w))),Se=h(!1),_e=e=>{n.readonly||ve.value||Se.value&&(e.stopPropagation(),ne(),J(null),G(null,!0),Se.value=!1,U.value=!1,Ke.value.handleClear&&Ke.value.handleClear())},Ae=M((()=>{const{modelValue:e}=n;return!e||l(e)&&!e.filter(Boolean).length})),Pe=async e=>{var a;n.readonly||ve.value||("INPUT"!==(null==(a=e.target)?void 0:a.tagName)||Q.value.includes(document.activeElement))&&(U.value=!0)},Ce=()=>{n.readonly||ve.value||!Ae.value&&n.clearable&&(Se.value=!0)},Ve=()=>{Se.value=!1},$e=e=>{var a;("INPUT"!==(null==(a=e.touches[0].target)?void 0:a.tagName)||Q.value.includes(document.activeElement))&&(U.value=!0)},xe=M((()=>n.type.includes("range"))),Le=Y(),Te=M((()=>{var e,a;return null==(a=null==(e=D(j))?void 0:e.popperRef)?void 0:a.contentRef})),He=M((()=>{var e;return D(xe)?D(z):null==(e=D(z))?void 0:e.$el}));S(He,(e=>{const a=D(Te),t=D(He);a&&(e.target===a||e.composedPath().includes(a))||e.target===t||e.composedPath().includes(t)||(U.value=!1)}));const Ee=h(null),Ie=()=>{if(Ee.value){const e=Re(be.value);e&&Be(e)&&(J(l(e)?e.map((e=>e.toDate())):e.toDate()),Ee.value=null)}""===Ee.value&&(J(null),G(null),Ee.value=null)},Re=e=>e?Ke.value.parseUserInput(e):null,Fe=e=>e?Ke.value.formatToString(e):null,Be=e=>Ke.value.isValidValue(e),Oe=async e=>{if(n.readonly||ve.value)return;const{code:a}=e;if(t("keydown",e),a!==W.esc)if(a===W.down&&(Ke.value.handleFocusPicker&&(e.preventDefault(),e.stopPropagation()),!1===U.value&&(U.value=!0,await b()),Ke.value.handleFocusPicker))Ke.value.handleFocusPicker();else{if(a!==W.tab)return a===W.enter||a===W.numpadEnter?((null===Ee.value||""===Ee.value||Be(Re(be.value)))&&(Ie(),U.value=!1),void e.stopPropagation()):void(Ee.value?e.stopPropagation():Ke.value.handleKeydownInput&&Ke.value.handleKeydownInput(e));q=!0}else!0===U.value&&(U.value=!1,e.preventDefault(),e.stopPropagation())},We=e=>{Ee.value=e,U.value||(U.value=!0)},Ze=e=>{const a=e.target;Ee.value?Ee.value=[a.value,Ee.value[1]]:Ee.value=[a.value,null]},je=e=>{const a=e.target;Ee.value?Ee.value=[Ee.value[0],a.value]:Ee.value=[null,a.value]},ze=()=>{var e;const a=Ee.value,t=Re(a&&a[0]),n=D(me);if(t&&t.isValid()){Ee.value=[Fe(t),(null==(e=be.value)?void 0:e[1])||null];const a=[t,n&&(n[1]||null)];Be(a)&&(J(a),Ee.value=null)}},Ue=()=>{var e;const a=D(Ee),t=Re(a&&a[1]),n=D(me);if(t&&t.isValid()){Ee.value=[(null==(e=D(be))?void 0:e[0])||null,Fe(t)];const a=[n&&n[0],t];Be(a)&&(J(a),Ee.value=null)}},Ke=h({}),Ne=e=>{Ke.value[e[0]]=e[1],Ke.value.panelReady=!0},qe=e=>{t("calendar-change",e)},Xe=(e,a,n)=>{t("panel-change",e,a,n)};return _("EP_PICKER_BASE",{props:n}),a({focus:ue,handleFocusInput:ce,handleBlurInput:pe,onPick:le}),(e,a)=>(A(),P(D(O),B({ref_key:"refPopper",ref:j,visible:U.value,effect:"light",pure:"",trigger:"click"},e.$attrs,{role:"dialog",teleported:"",transition:`${D(s).namespace.value}-zoom-in-top`,"popper-class":[`${D(s).namespace.value}-picker__popper`,e.popperClass],"popper-options":D(Z),"fallback-placements":["bottom","top","right","left"],"gpu-acceleration":!1,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:oe,onShow:se,onHide:ie}),{default:C((()=>[D(xe)?(A(),E("div",{key:1,ref_key:"inputRef",ref:z,class:V([D(s).b("editor"),D(s).bm("editor",e.type),D(r).e("wrapper"),D(s).is("disabled",D(ve)),D(s).is("active",U.value),D(i).b("editor"),D(Le)?D(i).bm("editor",D(Le)):"",e.$attrs.class]),style:$(e.$attrs.style),onClick:ce,onMouseenter:Ce,onMouseleave:Ve,onTouchstart:$e,onKeydown:Oe},[D(De)?(A(),P(D(L),{key:0,class:V([D(r).e("icon"),D(i).e("icon")]),onMousedown:x(Pe,["prevent"]),onTouchstart:$e},{default:C((()=>[(A(),P(T(D(De))))])),_:1},8,["class","onMousedown"])):H("v-if",!0),I("input",{id:e.id&&e.id[0],autocomplete:"off",name:e.name&&e.name[0],placeholder:e.startPlaceholder,value:D(be)&&D(be)[0],disabled:D(ve),readonly:!e.editable||e.readonly,class:V(D(i).b("input")),onMousedown:Pe,onInput:Ze,onChange:ze,onFocus:ce,onBlur:pe},null,42,we),R(e.$slots,"range-separator",{},(()=>[I("span",{class:V(D(i).b("separator"))},F(e.rangeSeparator),3)])),I("input",{id:e.id&&e.id[1],autocomplete:"off",name:e.name&&e.name[1],placeholder:e.endPlaceholder,value:D(be)&&D(be)[1],disabled:D(ve),readonly:!e.editable||e.readonly,class:V(D(i).b("input")),onMousedown:Pe,onFocus:ce,onBlur:pe,onInput:je,onChange:Ue},null,42,Ye),e.clearIcon?(A(),P(D(L),{key:1,class:V([D(r).e("icon"),D(i).e("close-icon"),{[D(i).e("close-icon--hidden")]:!Se.value}]),onClick:_e},{default:C((()=>[(A(),P(T(e.clearIcon)))])),_:1},8,["class"])):H("v-if",!0)],38)):(A(),P(D(ae),{key:0,id:e.id,ref_key:"inputRef",ref:z,"container-role":"combobox","model-value":D(be),name:e.name,size:D(Le),disabled:D(ve),placeholder:e.placeholder,class:V([D(s).b("editor"),D(s).bm("editor",e.type),e.$attrs.class]),style:$(e.$attrs.style),readonly:!e.editable||e.readonly||D(ke)||"week"===e.type,label:e.label,tabindex:e.tabindex,"validate-event":e.validateEvent,onInput:We,onFocus:ce,onBlur:pe,onKeydown:Oe,onChange:Ie,onMousedown:Pe,onMouseenter:Ce,onMouseleave:Ve,onTouchstart:$e,onClick:a[0]||(a[0]=x((()=>{}),["stop"]))},{prefix:C((()=>[D(De)?(A(),P(D(L),{key:0,class:V(D(r).e("icon")),onMousedown:x(Pe,["prevent"]),onTouchstart:$e},{default:C((()=>[(A(),P(T(D(De))))])),_:1},8,["class","onMousedown"])):H("v-if",!0)])),suffix:C((()=>[Se.value&&e.clearIcon?(A(),P(D(L),{key:0,class:V(`${D(r).e("icon")} clear-icon`),onClick:x(_e,["stop"])},{default:C((()=>[(A(),P(T(e.clearIcon)))])),_:1},8,["class","onClick"])):H("v-if",!0)])),_:1},8,["id","model-value","name","size","disabled","placeholder","class","style","readonly","label","tabindex","validate-event","onKeydown"]))])),content:C((()=>[R(e.$slots,"default",{visible:U.value,actualVisible:K.value,parsedValue:D(me),format:e.format,unlinkPanels:e.unlinkPanels,type:e.type,defaultValue:e.defaultValue,onPick:le,onSelectRange:ee,onSetPickerOption:Ne,onCalendarChange:qe,onPanelChange:Xe,onKeydown:re,onMousedown:a[1]||(a[1]=x((()=>{}),["stop"]))})])),_:3},16,["visible","transition","popper-class","popper-options"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);const Se=o({...Me,datetimeRole:String,parsedValue:{type:s(Object)}}),_e=({getAvailableHours:e,getAvailableMinutes:a,getAvailableSeconds:t})=>{const n={};return{timePickerOptions:n,getAvailableTime:(n,l,o,s)=>{const r={hour:e,minute:a,second:t};let i=n;return["hour","minute","second"].forEach((e=>{if(r[e]){let a;const t=r[e];switch(e){case"minute":a=t(i.hour(),l,s);break;case"second":a=t(i.hour(),i.minute(),l,s);break;default:a=t(l,s)}if((null==a?void 0:a.length)&&!a.includes(i[e]())){const t=o?0:a.length-1;i=i[e](a[t])}}})),i},onSetOption:([e,a])=>{n[e]=a}}},Ae=e=>e.map(((e,a)=>e||a)).filter((e=>!0!==e)),Pe=(e,a,t)=>({getHoursList:(a,t)=>be(24,e&&(()=>null==e?void 0:e(a,t))),getMinutesList:(e,t,n)=>be(60,a&&(()=>null==a?void 0:a(e,t,n))),getSecondsList:(e,a,n,l)=>be(60,t&&(()=>null==t?void 0:t(e,a,n,l)))}),Ce=(e,a,t)=>{const{getHoursList:n,getMinutesList:l,getSecondsList:o}=Pe(e,a,t);return{getAvailableHours:(e,a)=>Ae(n(e,a)),getAvailableMinutes:(e,a,t)=>Ae(l(e,a,t)),getAvailableSeconds:(e,a,t,n)=>Ae(o(e,a,t,n))}},Ve=e=>{const a=h(e.parsedValue);return g((()=>e.visible),(t=>{t||(a.value=e.parsedValue)})),a},$e=o({role:{type:String,required:!0},spinnerDate:{type:s(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:s(String),default:""},...ye}),xe=["onClick"],Le=["onMouseenter"];var Te=u(c({__name:"basic-time-spinner",props:$e,emits:["change","select-range","set-option"],setup(e,{emit:a}){const t=e,n=p("time"),{getHoursList:l,getMinutesList:o,getSecondsList:s}=Pe(t.disabledHours,t.disabledMinutes,t.disabledSeconds);let r=!1;const i=h(),u={hours:h(),minutes:h(),seconds:h()},c=M((()=>t.showSeconds?se:se.slice(0,2))),d=M((()=>{const{spinnerDate:e}=t;return{hours:e.hour(),minutes:e.minute(),seconds:e.second()}})),v=M((()=>{const{hours:e,minutes:a}=D(d);return{hours:l(t.role),minutes:o(e,t.role),seconds:s(e,a,t.role)}})),m=M((()=>{const{hours:e,minutes:a,seconds:t}=D(d);return{hours:ce(e,23),minutes:ce(a,59),seconds:ce(t,59)}})),f=Z((e=>{r=!1,w(e)}),200),y=e=>{if(!!!t.amPmMode)return"";let a=e<12?" am":" pm";return"A"===t.amPmMode&&(a=a.toUpperCase()),a},k=e=>{let t;switch(e){case"hours":t=[0,2];break;case"minutes":t=[3,5];break;case"seconds":t=[6,8]}const[n,l]=t;a("select-range",n,l),i.value=e},w=e=>{_(e,D(d)[e])},Y=()=>{w("hours"),w("minutes"),w("seconds")},S=e=>e.querySelector(`.${n.namespace.value}-scrollbar__wrap`),_=(e,a)=>{if(t.arrowControl)return;const n=D(u[e]);n&&n.$el&&(S(n.$el).scrollTop=Math.max(0,a*$(e)))},$=e=>{const a=D(u[e]);return(null==a?void 0:a.$el.querySelector("li").offsetHeight)||0},x=()=>{R(1)},T=()=>{R(-1)},R=e=>{i.value||k("hours");const a=i.value;let t=D(d)[a];const n="hours"===i.value?24:60;t=(t+e+n)%n,B(a,t),_(a,t),b((()=>k(a)))},B=(e,n)=>{if(D(v)[e][n])return;const{hours:l,minutes:o,seconds:s}=D(d);let r;switch(e){case"hours":r=t.spinnerDate.hour(n).minute(o).second(s);break;case"minutes":r=t.spinnerDate.hour(l).minute(n).second(s);break;case"seconds":r=t.spinnerDate.hour(l).minute(o).second(n)}a("change",r)},O=e=>D(u[e]).$el.offsetHeight,W=()=>{const e=e=>{const a=D(u[e]);a&&a.$el&&(S(a.$el).onscroll=()=>{(e=>{r=!0,f(e);const a=Math.min(Math.round((S(D(u[e]).$el).scrollTop-(.5*O(e)-10)/$(e)+3)/$(e)),"hours"===e?23:59);B(e,a)})(e)})};e("hours"),e("minutes"),e("seconds")};j((()=>{b((()=>{!t.arrowControl&&W(),Y(),"start"===t.role&&k("hours")}))}));return a("set-option",[`${t.role}_scrollDown`,R]),a("set-option",[`${t.role}_emitSelectRange`,k]),g((()=>t.spinnerDate),(()=>{r||Y()})),(e,a)=>(A(),E("div",{class:V([D(n).b("spinner"),{"has-seconds":e.showSeconds}])},[e.arrowControl?H("v-if",!0):(A(!0),E(z,{key:0},U(D(c),(a=>(A(),P(D(N),{key:a,ref_for:!0,ref:e=>{return t=e,void(u[a].value=t);var t},class:V(D(n).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":D(n).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:e=>k(a),onMousemove:e=>w(a)},{default:C((()=>[(A(!0),E(z,null,U(D(v)[a],((t,l)=>(A(),E("li",{key:l,class:V([D(n).be("spinner","item"),D(n).is("active",l===D(d)[a]),D(n).is("disabled",t)]),onClick:e=>((e,{value:a,disabled:t})=>{t||(B(e,a),k(e),_(e,a))})(a,{value:l,disabled:t})},["hours"===a?(A(),E(z,{key:0},[K(F(("0"+(e.amPmMode?l%12||12:l)).slice(-2))+F(y(l)),1)],64)):(A(),E(z,{key:1},[K(F(("0"+l).slice(-2)),1)],64))],10,xe)))),128))])),_:2},1032,["class","view-class","onMouseenter","onMousemove"])))),128)),e.arrowControl?(A(!0),E(z,{key:1},U(D(c),(a=>(A(),E("div",{key:a,class:V([D(n).be("spinner","wrapper"),D(n).is("arrow")]),onMouseenter:e=>k(a)},[q((A(),P(D(L),{class:V(["arrow-up",D(n).be("spinner","arrow")])},{default:C((()=>[X(D(G))])),_:1},8,["class"])),[[D(ne),T]]),q((A(),P(D(L),{class:V(["arrow-down",D(n).be("spinner","arrow")])},{default:C((()=>[X(D(J))])),_:1},8,["class"])),[[D(ne),x]]),I("ul",{class:V(D(n).be("spinner","list"))},[(A(!0),E(z,null,U(D(m)[a],((t,l)=>(A(),E("li",{key:l,class:V([D(n).be("spinner","item"),D(n).is("active",t===D(d)[a]),D(n).is("disabled",D(v)[a][t])])},["number"==typeof t?(A(),E(z,{key:0},["hours"===a?(A(),E(z,{key:0},[K(F(("0"+(e.amPmMode?t%12||12:t)).slice(-2))+F(y(t)),1)],64)):(A(),E(z,{key:1},[K(F(("0"+t).slice(-2)),1)],64))],64)):H("v-if",!0)],2)))),128))],2)],42,Le)))),128)):H("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);var He=u(c({__name:"panel-time-pick",props:Se,emits:["pick","select-range","set-picker-option"],setup(e,{emit:a}){const n=e,l=v("EP_PICKER_BASE"),{arrowControl:o,disabledHours:s,disabledMinutes:r,disabledSeconds:i,defaultValue:u}=l.props,{getAvailableHours:c,getAvailableMinutes:m,getAvailableSeconds:f}=Ce(s,r,i),g=p("time"),{t:b,lang:y}=d(),k=h([0,2]),w=Ve(n),Y=M((()=>Q(n.actualVisible)?`${g.namespace.value}-zoom-in-top`:"")),S=M((()=>n.format.includes("ss"))),_=M((()=>n.format.includes("A")?"A":n.format.includes("a")?"a":"")),$=()=>{a("pick",w.value,!1)},x=e=>{if(!n.visible)return;const t=O(e).millisecond(0);a("pick",t,!0)},L=(e,t)=>{a("select-range",e,t),k.value=[e,t]},{timePickerOptions:T,onSetOption:R,getAvailableTime:B}=_e({getAvailableHours:c,getAvailableMinutes:m,getAvailableSeconds:f}),O=e=>B(e,n.datetimeRole||"",!0);return a("set-picker-option",["isValidValue",e=>{const a=t(e).locale(y.value),n=O(a);return a.isSame(n)}]),a("set-picker-option",["formatToString",e=>e?e.format(n.format):null]),a("set-picker-option",["parseUserInput",e=>e?t(e,n.format).locale(y.value):null]),a("set-picker-option",["handleKeydownInput",e=>{const a=e.code,{left:t,right:n,up:l,down:o}=W;if([t,n].includes(a)){return(e=>{const a=[0,3].concat(S.value?[6]:[]),t=["hours","minutes"].concat(S.value?["seconds"]:[]),n=(a.indexOf(k.value[0])+e+a.length)%a.length;T.start_emitSelectRange(t[n])})(a===t?-1:1),void e.preventDefault()}if([l,o].includes(a)){const t=a===l?-1:1;return T.start_scrollDown(t),void e.preventDefault()}}]),a("set-picker-option",["getRangeAvailableTime",O]),a("set-picker-option",["getDefaultValue",()=>t(u).locale(y.value)]),(e,t)=>(A(),P(ee,{name:D(Y)},{default:C((()=>[e.actualVisible||e.visible?(A(),E("div",{key:0,class:V(D(g).b("panel"))},[I("div",{class:V([D(g).be("panel","content"),{"has-seconds":D(S)}])},[X(Te,{ref:"spinner",role:e.datetimeRole||"start","arrow-control":D(o),"show-seconds":D(S),"am-pm-mode":D(_),"spinner-date":e.parsedValue,"disabled-hours":D(s),"disabled-minutes":D(r),"disabled-seconds":D(i),onChange:x,onSetOption:D(R),onSelectRange:L},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),I("div",{class:V(D(g).be("panel","footer"))},[I("button",{type:"button",class:V([D(g).be("panel","btn"),"cancel"]),onClick:$},F(D(b)("el.datepicker.cancel")),3),I("button",{type:"button",class:V([D(g).be("panel","btn"),"confirm"]),onClick:t[0]||(t[0]=e=>((e=!1,t=!1)=>{t||a("pick",n.parsedValue,e)})())},F(D(b)("el.datepicker.confirm")),3)],2)],2)):H("v-if",!0)])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);export{De as C,ue as D,He as T,pe as a,ie as b,oe as c,Me as d,ve as e,Ce as f,_e as g,Te as h,re as i,de as r,ke as t,Ve as u};