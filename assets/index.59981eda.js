
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))r.call(t,a)&&s(e,a,t[a]);return e},i=(e,o)=>t(e,a(o));import{aa as p,ab as d,ac as f,ad as c,ae as u,d as b,u as m,r as v,c as g,i as h,af as y,b as w,e as _,w as k,f as j,R as S,n as C,m as O,g as x,a2 as A,ag as N,a5 as P,_ as R,ah as B,q as $,A as E,v as F,x as I,Z as z,ai as H,E as T,aj as q,ak as D,al as K,am as Q,F as W,h as Z,W as G,K as J,Q as L}from"./index.1be4fcb7.js";import{E as M}from"./el-avatar.6b66cd7f.js";import{_ as U}from"./index.50da501c.js";/* empty css                   */import V from"./index.deaae29c.js";import"./el-tab-pane.aff5c2b7.js";import"./event.6c7ea317.js";const X=p({trigger:d.trigger,placement:f.placement,disabled:d.disabled,visible:c.visible,transition:c.transition,popperOptions:f.popperOptions,tabindex:f.tabindex,content:c.content,popperStyle:c.popperStyle,popperClass:c.popperClass,enterable:i(n({},c.enterable),{default:!0}),effect:i(n({},c.effect),{default:"light"}),teleported:c.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0}}),Y={"update:visible":e=>u(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},ee=b(i(n({},{name:"ElPopover"}),{props:X,emits:Y,setup(e,{expose:t,emit:a}){const o=e,l=m("popover"),r=v(),s=g((()=>{var e;return null==(e=h(r))?void 0:e.popperRef})),n=g((()=>[{width:y(o.width)},o.popperStyle])),i=g((()=>[l.b(),o.popperClass,{[l.m("plain")]:!!o.content}])),p=g((()=>"el-fade-in-linear"===o.transition)),d=()=>{a("before-enter")},f=()=>{a("before-leave")},c=()=>{a("after-enter")},u=()=>{a("update:visible",!1),a("after-leave")};return t({popperRef:s,hide:()=>{var e;null==(e=r.value)||e.hide()}}),(e,t)=>(w(),_(h(P),N({ref_key:"tooltipRef",ref:r},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":h(i),"popper-style":h(n),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":h(p),onBeforeShow:d,onBeforeHide:f,onShow:c,onHide:u}),{content:k((()=>[e.title?(w(),j("div",{key:0,class:C(h(l).e("title")),role:"title"},S(e.title),3)):O("v-if",!0),x(e.$slots,"default",{},(()=>[A(S(e.content),1)]))])),default:k((()=>[e.$slots.reference?x(e.$slots,"reference",{key:0}):O("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration"]))}}));const te=(e,t)=>{const a=t.arg||t.value,o=null==a?void 0:a.popperRef;o&&(o.triggerRef=e)};const ae=$(R(ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]),{directive:B({mounted(e,t){te(e,t)},updated(e,t){te(e,t)}},"popover")});const oe={class:"tools"},le={class:"buttons"},re={class:"item"},se={class:"item"},ne={class:"user-wrapper"},ie=b({name:"Tools"});var pe=E(Object.assign(ie,{setup(e){const t=G("reload"),a=J(),o=F(),l=I(),{t:r}=z(),s=G("generateI18nTitle"),{isFullscreen:n,toggle:i}=H();function p(e){switch(e){case"dashboard":a.push({name:"dashboard"});break;case"setting":a.push({name:"personalSetting"});break;case"logout":l.logout().then((()=>{a.push({name:"login"})}))}}return(e,a)=>{const d=L,f=T,c=q,u=ae,b=U,m=M,v=D,g=K,y=Q;return w(),j("div",oe,[W("div",le,[h(o).toolbar.enableNavSearch?(w(),j("span",{key:0,class:"item",onClick:a[0]||(a[0]=t=>e.$eventBus.emit("global-search-toggle"))},[Z(f,null,{default:k((()=>[Z(d,{name:"i-ri:search-line"})])),_:1})])):O("v-if",!0),h(o).toolbar.enableNotification?(w(),_(u,{key:1,trigger:"hover","show-after":200,placement:"bottom",width:350},{reference:k((()=>[W("span",re,[Z(c,{type:"primary",value:5},{default:k((()=>[Z(f,null,{default:k((()=>[Z(d,{name:"i-ri:notification-3-line"})])),_:1})])),_:1})])])),default:k((()=>[Z(V,{ref:"tabs"},null,512)])),_:1})):O("v-if",!0),Z(b,null,{default:k((()=>[W("span",se,[Z(f,null,{default:k((()=>[Z(d,{name:"i-ri:translate"})])),_:1})])])),_:1}),"pc"===h(o).mode&&h(o).toolbar.enableFullscreen?(w(),j("span",{key:2,class:"item",onClick:a[1]||(a[1]=(...e)=>h(i)&&h(i)(...e))},[Z(f,null,{default:k((()=>[Z(d,{name:h(n)?"i-ri:fullscreen-exit-line":"i-ri:fullscreen-line"},null,8,["name"])])),_:1})])):O("v-if",!0),h(o).toolbar.enablePageReload?(w(),j("span",{key:3,class:"item",onClick:a[2]||(a[2]=e=>h(t)())},[Z(f,null,{default:k((()=>[Z(d,{name:"i-iconoir:refresh-double"})])),_:1})])):O("v-if",!0),h(o).toolbar.enableColorScheme?(w(),j("span",{key:4,class:"item",onClick:a[3]||(a[3]=e=>h(o).setColorScheme("dark"===h(o).app.colorScheme?"light":"dark"))},[Z(f,null,{default:k((()=>[Z(d,{name:"light"===h(o).app.colorScheme?"i-ri:sun-line":"i-ri:moon-line"},null,8,["name"])])),_:1})])):O("v-if",!0),h(o).toolbar.enableAppSetting?(w(),j("span",{key:5,class:"item",onClick:a[4]||(a[4]=t=>e.$eventBus.emit("global-app-setting-toggle"))},[Z(f,null,{default:k((()=>[Z(d,{name:"i-uiw:setting-o"})])),_:1})])):O("v-if",!0)]),Z(y,{class:"user-container",size:"default",onCommand:p},{dropdown:k((()=>[Z(g,{class:"user-dropdown"},{default:k((()=>[h(o).dashboard.enable?(w(),_(v,{key:0,command:"dashboard"},{default:k((()=>[A(S(h(s)("route.dashboard",h(o).dashboard.title)),1)])),_:1})):O("v-if",!0),Z(v,{command:"setting"},{default:k((()=>[A(S(h(r)("app.profile")),1)])),_:1}),Z(v,{divided:"",command:"logout"},{default:k((()=>[A(S(h(r)("app.logout")),1)])),_:1})])),_:1})])),default:k((()=>[W("div",ne,[Z(m,{size:"small"},{default:k((()=>[Z(f,null,{default:k((()=>[Z(d,{name:"i-ep:user-filled"})])),_:1})])),_:1}),A(" "+S(h(l).account)+" ",1),Z(f,null,{default:k((()=>[Z(d,{name:"i-ep:caret-bottom"})])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-5d56f206"]]);export{pe as default};
