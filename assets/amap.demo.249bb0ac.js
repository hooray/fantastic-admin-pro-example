
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{a9 as r,ay as u,b2 as i,ac as p,aB as c,aC as d,d as v,aR as g,aP as f,aV as m,u as h,r as b,c as y,cD as w,cc as $,cy as A,o as k,b as x,e as S,w as _,D as O,h as C,i as M,f as j,E,n as F,bc as P,W as B,g as V,a1 as I,Q as R,R as T,ce as U,k as K,a6 as D,af as N,a0 as W,l as q,b8 as H,a4 as L,_ as z,aD as Q,bP as G,t as J,q as X,z as Y,P as Z,bH as ee,c6 as ae,m as te}from"./index.0358e322.js";import{E as le}from"./el-input.88480f15.js";/* empty css                     */import{U as se,I as oe,C as ne}from"./event.fa25aaef.js";const re=r({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:u(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:u([Function,Array]),default:i},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},label:{type:String},teleported:p.teleported,highlightFirstItem:{type:Boolean,default:!1}}),ue={[se]:e=>c(e),[oe]:e=>c(e),[ne]:e=>c(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,select:e=>d(e)},ie=["aria-expanded","aria-owns"],pe={key:0},ce=["id","aria-selected","onClick"],de=v((ve=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&n(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&n(e,t,a[t]);return e})({},{name:"ElAutocomplete",inheritAttrs:!1}),a(ve,t({props:re,emits:ue,setup(e,{expose:a,emit:t}){const l=e,s=g(),o=f(),n=m(),r=h("autocomplete"),u=b(),i=b(),p=b(),c=b();let d=!1;const v=b([]),z=b(-1),X=b(""),Y=b(!1),Z=b(!1),ee=b(!1),ae=y((()=>r.b(String(w())))),te=y((()=>o.style)),re=y((()=>(v.value.length>0||ee.value)&&Y.value)),ue=y((()=>!l.hideLoading&&ee.value)),de=y((()=>u.value?Array.from(u.value.$el.querySelectorAll("input")):[])),ve=async()=>{await Q(),re.value&&(X.value=`${u.value.$el.offsetWidth}px`)},ge=()=>{d=!0},fe=()=>{d=!1,z.value=-1},me=$((async e=>{if(Z.value)return;const a=e=>{ee.value=!1,Z.value||(G(e)?(v.value=e,z.value=l.highlightFirstItem?0:-1):J("ElAutocomplete","autocomplete suggestions must be an array"))};if(ee.value=!0,G(l.fetchSuggestions))a(l.fetchSuggestions);else{const t=await l.fetchSuggestions(e,a);G(t)&&a(t)}}),l.debounce),he=e=>{const a=!!e;if(t(oe,e),t(se,e),Z.value=!1,Y.value||(Y.value=a),!l.triggerOnFocus&&!e)return Z.value=!0,void(v.value=[]);me(e)},be=e=>{var a;n.value||("INPUT"!==(null==(a=e.target)?void 0:a.tagName)||de.value.includes(document.activeElement))&&(Y.value=!0)},ye=e=>{t(ne,e)},we=e=>{d||(Y.value=!0,t("focus",e),l.triggerOnFocus&&me(String(l.modelValue)))},$e=e=>{d||t("blur",e)},Ae=()=>{Y.value=!1,t(se,""),t("clear")},ke=async()=>{re.value&&z.value>=0&&z.value<v.value.length?_e(v.value[z.value]):l.selectWhenUnmatched&&(t("select",{value:l.modelValue}),v.value=[],z.value=-1)},xe=e=>{re.value&&(e.preventDefault(),e.stopPropagation(),Se())},Se=()=>{Y.value=!1},_e=async e=>{t(oe,e[l.valueKey]),t(se,e[l.valueKey]),t("select",e),v.value=[],z.value=-1},Oe=e=>{if(!re.value||ee.value)return;if(e<0)return void(z.value=-1);e>=v.value.length&&(e=v.value.length-1);const a=i.value.querySelector(`.${r.be("suggestion","wrap")}`),t=a.querySelectorAll(`.${r.be("suggestion","list")} li`)[e],l=a.scrollTop,{offsetTop:s,scrollHeight:o}=t;s+o>l+a.clientHeight&&(a.scrollTop+=o),s<l&&(a.scrollTop-=o),z.value=e,u.value.ref.setAttribute("aria-activedescendant",`${ae.value}-item-${z.value}`)};return A(c,(()=>{re.value&&Se()})),k((()=>{u.value.ref.setAttribute("role","textbox"),u.value.ref.setAttribute("aria-autocomplete","list"),u.value.ref.setAttribute("aria-controls","id"),u.value.ref.setAttribute("aria-activedescendant",`${ae.value}-item-${z.value}`)})),a({highlightedIndex:z,activated:Y,loading:ee,inputRef:u,popperRef:p,suggestions:v,handleSelect:_e,handleKeyEnter:ke,focus:()=>{var e;null==(e=u.value)||e.focus()},blur:()=>{var e;null==(e=u.value)||e.blur()},close:Se,highlight:Oe}),(e,a)=>(x(),S(M(L),{ref_key:"popperRef",ref:p,visible:M(re),"onUpdate:visible":a[2]||(a[2]=e=>H(re)?re.value=e:null),placement:e.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[M(r).e("popper"),e.popperClass],teleported:e.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${M(r).namespace.value}-zoom-in-top`,persistent:"",onBeforeShow:ve,onShow:ge,onHide:fe},{content:_((()=>[O("div",{ref_key:"regionRef",ref:i,class:F([M(r).b("suggestion"),M(r).is("loading",M(ue))]),style:K({minWidth:X.value,outline:"none"}),role:"region"},[C(M(U),{id:M(ae),tag:"ul","wrap-class":M(r).be("suggestion","wrap"),"view-class":M(r).be("suggestion","list"),role:"listbox"},{default:_((()=>[M(ue)?(x(),j("li",pe,[C(M(E),{class:F(M(r).is("loading"))},{default:_((()=>[C(M(P))])),_:1},8,["class"])])):(x(!0),j(T,{key:1},B(v.value,((a,t)=>(x(),j("li",{id:`${M(ae)}-item-${t}`,key:t,class:F({highlighted:z.value===t}),role:"option","aria-selected":z.value===t,onClick:e=>_e(a)},[V(e.$slots,"default",{item:a},(()=>[I(R(a[e.valueKey]),1)]))],10,ce)))),128))])),_:3},8,["id","wrap-class","view-class"])],6)])),default:_((()=>[O("div",{ref_key:"listboxRef",ref:c,class:F([M(r).b(),e.$attrs.class]),style:K(M(te)),role:"combobox","aria-haspopup":"listbox","aria-expanded":M(re),"aria-owns":M(ae)},[C(M(le),N({ref_key:"inputRef",ref:u},M(s),{"model-value":e.modelValue,onInput:he,onChange:ye,onFocus:we,onBlur:$e,onClear:Ae,onKeydown:[a[0]||(a[0]=W(q((e=>Oe(z.value-1)),["prevent"]),["up"])),a[1]||(a[1]=W(q((e=>Oe(z.value+1)),["prevent"]),["down"])),W(ke,["enter"]),W(Se,["tab"]),W(xe,["esc"])],onMousedown:be}),D({_:2},[e.$slots.prepend?{name:"prepend",fn:_((()=>[V(e.$slots,"prepend")]))}:void 0,e.$slots.append?{name:"append",fn:_((()=>[V(e.$slots,"append")]))}:void 0,e.$slots.prefix?{name:"prefix",fn:_((()=>[V(e.$slots,"prefix")]))}:void 0,e.$slots.suffix?{name:"suffix",fn:_((()=>[V(e.$slots,"suffix")]))}:void 0]),1040,["model-value","onKeydown"])],14,ie)])),_:3},8,["visible","placement","popper-class","teleported","transition"]))}}))));var ve;const ge=X(z(de,[["__file","/home/runner/work/element-plus/element-plus/packages/components/autocomplete/src/autocomplete.vue"]]));const fe={class:"map"},me={class:"search-name"},he=["title"],be=v({name:"AmapMarker"});var ye=Y(Object.assign(be,{props:{v:{type:String,default:"1.4.15"},appkey:{type:String,default:""},height:{type:[Number,String],default:500},lnglat:{type:Array,default:()=>[]}},emits:["update:lnglat"],setup(e,{emit:a}){const t=e,l=b("");let s="",o="",n="";const r=y((()=>"string"==typeof t.height?t.height:`${t.height}px`));function u(){s=new AMap.Map("amap",{zoom:12}),AMap.plugin("AMap.ToolBar",(()=>{let e=new AMap.ToolBar;s.addControl(e)})),o=new AMap.Marker({draggable:!0,cursor:"move"}),o.on("dragend",(e=>{a("update:lnglat",[e.lnglat.lng,e.lnglat.lat])})),n=new AMap.Autocomplete,s.on("click",(e=>{i(e.lnglat.getLng(),e.lnglat.getLat())})),2==t.lnglat.length&&i(t.lnglat[0],t.lnglat[1])}function i(e,t){s.remove(o),o.setPosition([e,t]),s.add(o),s.setFitView(),a("update:lnglat",[e,t])}function p(e,a){n.search(e,((e,t)=>{a(t.tips)}))}function c(e){l.value=e.name,e.location?i(e.location.lng,e.location.lat):s.setCity(e.adcode)}return k((()=>{if("undefined"==typeof AMap){let e=document.createElement("script");e.charset="UTF-8",e.src=`https://webapi.amap.com/maps?v=${t.v}&key=${t.appkey}&plugin=AMap.Autocomplete`,document.head.appendChild(e),e.onload=()=>{u()}}else Q((()=>{u()}))})),(e,a)=>{const t=Z,s=E,o=ge;return x(),j("div",fe,[C(o,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),class:"search","fetch-suggestions":p,"trigger-on-focus":!1,clearable:"",placeholder:"请输入地址关键字",onSelect:c},{prefix:_((()=>[C(s,{class:"el-input__icon"},{default:_((()=>[C(t,{name:"i-ep:location-information"})])),_:1})])),default:_((({item:e})=>[O("div",me,R(e.name),1),O("span",{class:"search-address",title:e.district+e.address},R(e.district+e.address),9,he)])),_:1},8,["modelValue"]),O("div",{id:"amap",style:K(`height:${M(r)};`)},null,4)])}}}),[["__scopeId","data-v-63cdee0a"]]);const we={name:"ComponentExampleAmap",props:{},data:()=>({lnglat:[120.068384,30.290939]}),created(){},mounted(){},methods:{}};"function"==typeof ee&&ee(we);var $e=Y(we,[["render",function(e,a,t,l,s,o){const n=ye,r=ae;return x(),j("div",null,[C(r,null,{default:_((()=>[O("div",null,"经纬度："+R(s.lnglat),1),te(" 注意这里替换高德地图的appkey "),C(n,{lnglat:s.lnglat,"onUpdate:lnglat":a[0]||(a[0]=e=>s.lnglat=e),appkey:"8f7844cc502e17bb549c04c9aaadaf94",height:600},null,8,["lnglat"])])),_:1})])}]]);export{$e as default};
