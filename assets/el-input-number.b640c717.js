
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,u=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{a9 as i,aO as s,aN as o,aZ as m,d as c,b6 as p,u as d,r as b,au as v,aS as f,c as N,bu as y,aU as g,aV as V,y as h,o as I,b0 as x,b as S,f as w,F as O,i as j,n as A,a0 as F,h as E,w as k,e as P,as as _,cj as K,E as B,m as C,cf as M,bA as T,l as $,_ as z,aB as D,a$ as U,q as Y}from"./index.0358e322.js";import{E as q}from"./el-input.88480f15.js";import{C as G,I as Z,U as H}from"./event.fa25aaef.js";import{v as J}from"./index.00c65634.js";const L=i({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,disabled:Boolean,size:s,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||o(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)}}),Q={[G]:(e,a)=>e!==a,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[Z]:e=>o(e)||m(e),[H]:e=>o(e)||m(e)},R=["aria-label","onKeydown"],W=["aria-label","onKeydown"],X=c((ee=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&u(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&u(e,t,a[t]);return e})({},{name:"ElInputNumber"}),a(ee,t({props:L,emits:Q,setup(e,{expose:a,emit:t}){const l=e,{t:r}=p(),n=d("input-number"),u=b(),i=v({currentValue:l.modelValue,userInput:null}),{formItem:s}=f(),c=N((()=>o(l.modelValue)&&ee(l.modelValue,-1)<l.min)),z=N((()=>o(l.modelValue)&&ee(l.modelValue)>l.max)),Y=N((()=>{const e=X(l.step);return y(l.precision)?Math.max(X(l.modelValue),e):(l.precision,l.precision)})),G=N((()=>l.controls&&"right"===l.controlsPosition)),Z=g(),H=V(),L=N((()=>{if(null!==i.userInput)return i.userInput;let e=i.currentValue;if(m(e))return"";if(o(e)){if(Number.isNaN(e))return"";y(l.precision)||(e=e.toFixed(l.precision))}return e})),Q=(e,a)=>{if(y(a)&&(a=Y.value),0===a)return Math.round(e);let t=String(e);const l=t.indexOf(".");if(-1===l)return e;if(!t.replace(".","").split("")[l+a])return e;const r=t.length;return"5"===t.charAt(r-1)&&(t=`${t.slice(0,Math.max(0,r-1))}6`),Number.parseFloat(Number(t).toFixed(a))},X=e=>{if(m(e))return 0;const a=e.toString(),t=a.indexOf(".");let l=0;return-1!==t&&(l=a.length-t-1),l},ee=(e,a=1)=>o(e)?Q(e+l.step*a):i.currentValue,ae=()=>{if(H.value||z.value)return;const e=l.modelValue||0,a=ee(e);re(a)},te=()=>{if(H.value||c.value)return;const e=l.modelValue||0,a=ee(e,-1);re(a)},le=(e,a)=>{const{max:r,min:n,step:u,precision:i,stepStrictly:s,valueOnClear:o}=l;let c=Number(e);if(m(e)||Number.isNaN(c))return null;if(""===e){if(null===o)return null;c=D(o)?{min:n,max:r}[o]:o}return s&&(c=Math.round(c/u)*u),y(i)||(c=Q(c,i)),(c>r||c<n)&&(c=c>r?r:n,a&&t("update:modelValue",c)),c},re=e=>{var a;const l=i.currentValue,r=le(e);l!==r&&(i.userInput=null,t("update:modelValue",r),t("input",r),t("change",r,l),null==(a=null==s?void 0:s.validate)||a.call(s,"change").catch((e=>U())),i.currentValue=r)},ne=e=>i.userInput=e,ue=e=>{const a=""!==e?Number(e):"";(o(a)&&!Number.isNaN(a)||""===e)&&re(a),i.userInput=null},ie=e=>{t("focus",e)},se=e=>{var a;t("blur",e),null==(a=null==s?void 0:s.validate)||a.call(s,"blur").catch((e=>U()))};return h((()=>l.modelValue),(e=>{i.currentValue=le(e,!0),i.userInput=null}),{immediate:!0}),I((()=>{var e;const{min:a,max:r,modelValue:n}=l,s=null==(e=u.value)?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(r)?s.setAttribute("aria-valuemax",String(r)):s.removeAttribute("aria-valuemax"),Number.isFinite(a)?s.setAttribute("aria-valuemin",String(a)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",String(i.currentValue)),s.setAttribute("aria-disabled",String(H.value)),!o(n)&&null!=n){let e=Number(n);Number.isNaN(e)&&(e=null),t("update:modelValue",e)}})),x((()=>{var e;const a=null==(e=u.value)?void 0:e.input;null==a||a.setAttribute("aria-valuenow",`${i.currentValue}`)})),a({focus:()=>{var e,a;null==(a=null==(e=u.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=u.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(S(),w("div",{class:A([j(n).b(),j(n).m(j(Z)),j(n).is("disabled",j(H)),j(n).is("without-controls",!e.controls),j(n).is("controls-right",j(G))]),onDragstart:a[0]||(a[0]=$((()=>{}),["prevent"]))},[e.controls?O((S(),w("span",{key:0,role:"button","aria-label":j(r)("el.inputNumber.decrease"),class:A([j(n).e("decrease"),j(n).is("disabled",j(c))]),onKeydown:F(te,["enter"])},[E(j(B),null,{default:k((()=>[j(G)?(S(),P(j(_),{key:0})):(S(),P(j(K),{key:1}))])),_:1})],42,R)),[[j(J),te]]):C("v-if",!0),e.controls?O((S(),w("span",{key:1,role:"button","aria-label":j(r)("el.inputNumber.increase"),class:A([j(n).e("increase"),j(n).is("disabled",j(z))]),onKeydown:F(ae,["enter"])},[E(j(B),null,{default:k((()=>[j(G)?(S(),P(j(M),{key:0})):(S(),P(j(T),{key:1}))])),_:1})],42,W)),[[j(J),ae]]):C("v-if",!0),E(j(q),{id:e.id,ref_key:"input",ref:u,type:"number",step:e.step,"model-value":j(L),placeholder:e.placeholder,disabled:j(H),size:j(Z),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[F($(ae,["prevent"]),["up"]),F($(te,["prevent"]),["down"])],onBlur:se,onFocus:ie,onInput:ne,onChange:ue},null,8,["id","step","model-value","placeholder","disabled","size","max","min","name","label","onKeydown"])],34))}}))));var ee;const ae=Y(z(X,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{ae as E};
