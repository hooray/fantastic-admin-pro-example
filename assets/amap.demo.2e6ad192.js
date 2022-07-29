
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a9 as e,aw as a,b1 as t,ac as l,aB as s,aC as o,d as n,aR as u,aP as i,aV as r,u as p,r as c,c as d,cI as v,c6 as g,cB as f,o as m,b as h,e as y,w as b,J as w,h as A,i as $,f as k,E as x,n as S,bd as _,X as C,g as M,a2 as B,R as F,S as E,c8 as I,k as V,a3 as R,af as T,a1 as K,l as U,a7 as N,_ as W,aD as P,bX as j,t as q,q as L,A as O,Q as H,bN as z,bP as D,m as X}from"./index.9587bc3d.js";import{E as J}from"./el-input.54ba849c.js";import{U as Q,I as G,C as Y}from"./event.d298a7ab.js";const Z=e({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:a(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:a([Function,Array]),default:t},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},label:{type:String},teleported:l.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1}}),ee=["aria-expanded","aria-owns"],ae={key:0},te=["id","aria-selected","onClick"];const le=L(W(n({name:"ElAutocomplete",inheritAttrs:!1,props:Z,emits:{[Q]:e=>s(e),[G]:e=>s(e),[Y]:e=>s(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,select:e=>o(e)},setup(e,{expose:a,emit:t}){const l=e,s=u(),o=i(),n=r(),W=p("autocomplete"),L=c(),O=c(),H=c(),z=c();let D=!1;const X=c([]),Z=c(-1),le=c(""),se=c(!1),oe=c(!1),ne=c(!1),ue=d((()=>W.b(String(v())))),ie=d((()=>o.style)),re=d((()=>(X.value.length>0||ne.value)&&se.value)),pe=d((()=>!l.hideLoading&&ne.value)),ce=d((()=>L.value?Array.from(L.value.$el.querySelectorAll("input")):[])),de=async()=>{await P(),re.value&&(le.value=`${L.value.$el.offsetWidth}px`)},ve=()=>{D=!0},ge=()=>{D=!1,Z.value=-1},fe=g((async e=>{if(oe.value)return;const a=e=>{ne.value=!1,oe.value||(j(e)?(X.value=e,Z.value=l.highlightFirstItem?0:-1):q("ElAutocomplete","autocomplete suggestions must be an array"))};if(ne.value=!0,j(l.fetchSuggestions))a(l.fetchSuggestions);else{const t=await l.fetchSuggestions(e,a);j(t)&&a(t)}}),l.debounce),me=e=>{const a=!!e;if(t(G,e),t(Q,e),oe.value=!1,se.value||(se.value=a),!l.triggerOnFocus&&!e)return oe.value=!0,void(X.value=[]);fe(e)},he=e=>{var a;n.value||("INPUT"!==(null==(a=e.target)?void 0:a.tagName)||ce.value.includes(document.activeElement))&&(se.value=!0)},ye=e=>{t(Y,e)},be=e=>{D||(se.value=!0,t("focus",e),l.triggerOnFocus&&fe(String(l.modelValue)))},we=e=>{D||t("blur",e)},Ae=()=>{se.value=!1,t(Q,""),t("clear")},$e=async()=>{re.value&&Z.value>=0&&Z.value<X.value.length?Se(X.value[Z.value]):l.selectWhenUnmatched&&(t("select",{value:l.modelValue}),X.value=[],Z.value=-1)},ke=e=>{re.value&&(e.preventDefault(),e.stopPropagation(),xe())},xe=()=>{se.value=!1},Se=async e=>{t(G,e[l.valueKey]),t(Q,e[l.valueKey]),t("select",e),X.value=[],Z.value=-1},_e=e=>{if(!re.value||ne.value)return;if(e<0)return void(Z.value=-1);e>=X.value.length&&(e=X.value.length-1);const a=O.value.querySelector(`.${W.be("suggestion","wrap")}`),t=a.querySelectorAll(`.${W.be("suggestion","list")} li`)[e],l=a.scrollTop,{offsetTop:s,scrollHeight:o}=t;s+o>l+a.clientHeight&&(a.scrollTop+=o),s<l&&(a.scrollTop-=o),Z.value=e,L.value.ref.setAttribute("aria-activedescendant",`${ue.value}-item-${Z.value}`)};return f(z,(()=>{re.value&&xe()})),m((()=>{L.value.ref.setAttribute("role","textbox"),L.value.ref.setAttribute("aria-autocomplete","list"),L.value.ref.setAttribute("aria-controls","id"),L.value.ref.setAttribute("aria-activedescendant",`${ue.value}-item-${Z.value}`)})),a({highlightedIndex:Z,activated:se,loading:ne,inputRef:L,popperRef:H,suggestions:X,handleSelect:Se,handleKeyEnter:$e,focus:()=>{var e;null==(e=L.value)||e.focus()},blur:()=>{var e;null==(e=L.value)||e.blur()},close:xe,highlight:_e}),(e,a)=>(h(),y($(N),{ref_key:"popperRef",ref:H,visible:$(re),placement:e.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[$(W).e("popper"),e.popperClass],teleported:e.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${$(W).namespace.value}-zoom-in-top`,persistent:"",onBeforeShow:de,onShow:ve,onHide:ge},{content:b((()=>[w("div",{ref_key:"regionRef",ref:O,class:S([$(W).b("suggestion"),$(W).is("loading",$(pe))]),style:V({[e.fitInputWidth?"width":"minWidth"]:le.value,outline:"none"}),role:"region"},[A($(I),{id:$(ue),tag:"ul","wrap-class":$(W).be("suggestion","wrap"),"view-class":$(W).be("suggestion","list"),role:"listbox"},{default:b((()=>[$(pe)?(h(),k("li",ae,[A($(x),{class:S($(W).is("loading"))},{default:b((()=>[A($(_))])),_:1},8,["class"])])):(h(!0),k(E,{key:1},C(X.value,((a,t)=>(h(),k("li",{id:`${$(ue)}-item-${t}`,key:t,class:S({highlighted:Z.value===t}),role:"option","aria-selected":Z.value===t,onClick:e=>Se(a)},[M(e.$slots,"default",{item:a},(()=>[B(F(a[e.valueKey]),1)]))],10,te)))),128))])),_:3},8,["id","wrap-class","view-class"])],6)])),default:b((()=>[w("div",{ref_key:"listboxRef",ref:z,class:S([$(W).b(),e.$attrs.class]),style:V($(ie)),role:"combobox","aria-haspopup":"listbox","aria-expanded":$(re),"aria-owns":$(ue)},[A($(J),T({ref_key:"inputRef",ref:L},$(s),{"model-value":e.modelValue,onInput:me,onChange:ye,onFocus:be,onBlur:we,onClear:Ae,onKeydown:[a[0]||(a[0]=K(U((e=>_e(Z.value-1)),["prevent"]),["up"])),a[1]||(a[1]=K(U((e=>_e(Z.value+1)),["prevent"]),["down"])),K($e,["enter"]),K(xe,["tab"]),K(ke,["esc"])],onMousedown:he}),R({_:2},[e.$slots.prepend?{name:"prepend",fn:b((()=>[M(e.$slots,"prepend")]))}:void 0,e.$slots.append?{name:"append",fn:b((()=>[M(e.$slots,"append")]))}:void 0,e.$slots.prefix?{name:"prefix",fn:b((()=>[M(e.$slots,"prefix")]))}:void 0,e.$slots.suffix?{name:"suffix",fn:b((()=>[M(e.$slots,"suffix")]))}:void 0]),1040,["model-value","onKeydown"])],14,ee)])),_:3},8,["visible","placement","popper-class","teleported","transition"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/autocomplete/src/autocomplete.vue"]])),se={class:"map"},oe={class:"search-name"},ne=["title"],ue=n({name:"AmapMarker"}),ie=O(Object.assign(ue,{props:{v:{type:String,default:"1.4.15"},appkey:{type:String,default:""},height:{type:[Number,String],default:500},lnglat:{type:Array,default:()=>[]}},emits:["update:lnglat"],setup(e,{emit:a}){const t=e,l=c("");let s="",o="",n="";const u=d((()=>"string"==typeof t.height?t.height:`${t.height}px`));function i(){s=new AMap.Map("amap",{zoom:12}),AMap.plugin("AMap.ToolBar",(()=>{let e=new AMap.ToolBar;s.addControl(e)})),o=new AMap.Marker({draggable:!0,cursor:"move"}),o.on("dragend",(e=>{a("update:lnglat",[e.lnglat.lng,e.lnglat.lat])})),n=new AMap.Autocomplete,s.on("click",(e=>{r(e.lnglat.getLng(),e.lnglat.getLat())})),2==t.lnglat.length&&r(t.lnglat[0],t.lnglat[1])}function r(e,t){s.remove(o),o.setPosition([e,t]),s.add(o),s.setFitView(),a("update:lnglat",[e,t])}function p(e,a){n.search(e,((e,t)=>{a(t.tips)}))}function v(e){l.value=e.name,e.location?r(e.location.lng,e.location.lat):s.setCity(e.adcode)}return m((()=>{if("undefined"==typeof AMap){let e=document.createElement("script");e.charset="UTF-8",e.src=`https://webapi.amap.com/maps?v=${t.v}&key=${t.appkey}&plugin=AMap.Autocomplete`,document.head.appendChild(e),e.onload=()=>{i()}}else P((()=>{i()}))})),(e,a)=>{const t=H,s=x,o=le;return h(),k("div",se,[A(o,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),class:"search","fetch-suggestions":p,"trigger-on-focus":!1,clearable:"",placeholder:"请输入地址关键字",onSelect:v},{prefix:b((()=>[A(s,{class:"el-input__icon"},{default:b((()=>[A(t,{name:"i-ep:location-information"})])),_:1})])),default:b((({item:e})=>[w("div",oe,F(e.name),1),w("span",{class:"search-address",title:e.district+e.address},F(e.district+e.address),9,ne)])),_:1},8,["modelValue"]),w("div",{id:"amap",style:V(`height:${$(u)};`)},null,4)])}}}),[["__scopeId","data-v-cce91c25"]]),re={name:"ComponentExampleAmap",props:{},data:()=>({lnglat:[120.068384,30.290939]}),created(){},mounted(){},methods:{}};"function"==typeof z&&z(re);const pe=O(re,[["render",function(e,a,t,l,s,o){const n=ie,u=D;return h(),k("div",null,[A(u,null,{default:b((()=>[w("div",null,"经纬度："+F(s.lnglat),1),X(" 注意这里替换高德地图的appkey "),A(n,{lnglat:s.lnglat,"onUpdate:lnglat":a[0]||(a[0]=e=>s.lnglat=e),appkey:"8f7844cc502e17bb549c04c9aaadaf94",height:600},null,8,["lnglat"])])),_:1})])}]]);export{pe as default};