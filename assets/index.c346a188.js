
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a9 as e,aa as a,ab as t,ac as l,ad as o,d as s,c as r,u as n,r as i,i as p,ae as d,b as f,e as u,w as c,f as b,R as m,n as v,m as g,g as h,a2 as w,af as _,a7 as y,_ as k,ag as C,q as S,A as x,W as j,C as A,v as N,x as R,Z as B,ah as $,J as O,h as U,Q as E,E as F,ai as z,aj as H,ak as I}from"./index.14f3ec2e.js";import{E as P}from"./el-avatar.b738680f.js";import{_ as T}from"./index.824c117b.js";/* empty css                   */import{a as q}from"./index.04a74d21.js";import J from"./index.f17e8816.js";import"./el-tab-pane.dc1a8bdb.js";import"./event.d298a7ab.js";const Q=e({trigger:a.trigger,placement:t.placement,disabled:a.disabled,visible:l.visible,transition:l.transition,popperOptions:t.popperOptions,tabindex:t.tabindex,content:l.content,popperStyle:l.popperStyle,popperClass:l.popperClass,enterable:{...l.enterable,default:!0},effect:{...l.effect,default:"light"},teleported:l.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}});const W=(e,a)=>{const t=a.arg||a.value,l=null==t?void 0:t.popperRef;l&&(l.triggerRef=e)};const Z=S(k(s({name:"ElPopover",props:Q,emits:{"update:visible":e=>o(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},setup(e,{expose:a,emit:t}){const l=e,o=r((()=>l["onUpdate:visible"])),s=n("popover"),k=i(),C=r((()=>{var e;return null==(e=p(k))?void 0:e.popperRef})),S=r((()=>[{width:d(l.width)},l.popperStyle])),x=r((()=>[s.b(),l.popperClass,{[s.m("plain")]:!!l.content}])),j=r((()=>"el-fade-in-linear"===l.transition)),A=()=>{t("before-enter")},N=()=>{t("before-leave")},R=()=>{t("after-enter")},B=()=>{t("update:visible",!1),t("after-leave")};return a({popperRef:C,hide:()=>{var e;null==(e=k.value)||e.hide()}}),(e,a)=>(f(),u(p(y),_({ref_key:"tooltipRef",ref:k},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(x),"popper-style":p(S),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(j),"onUpdate:visible":p(o),onBeforeShow:A,onBeforeHide:N,onShow:R,onHide:B}),{content:c((()=>[e.title?(f(),b("div",{key:0,class:v(p(s).e("title")),role:"title"},m(e.title),3)):g("v-if",!0),h(e.$slots,"default",{},(()=>[w(m(e.content),1)]))])),default:c((()=>[e.$slots.reference?h(e.$slots,"reference",{key:0}):g("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]),{directive:C({mounted(e,a){W(e,a)},updated(e,a){W(e,a)}},"popover")}),D={class:"tools"},G={class:"buttons"},K={class:"item"},L={class:"item"},M={class:"user-wrapper"},V=s({name:"Tools"}),X=x(Object.assign(V,{setup(e){const a=j("reload"),t=A(),l=N(),o=R(),{t:s}=B(),r=j("generateI18nTitle"),{isFullscreen:n,toggle:i}=q();function d(e){switch(e){case"dashboard":t.push({name:"dashboard"});break;case"setting":t.push({name:"personalSetting"});break;case"logout":o.logout().then((()=>{t.push({name:"login"})}))}}return(e,t)=>{const v=E,h=F,_=$,y=Z,k=T,C=P,S=z,x=H,j=I;return f(),b("div",D,[O("div",G,[p(l).toolbar.enableNavSearch?(f(),b("span",{key:0,class:"item",onClick:t[0]||(t[0]=a=>e.$eventBus.emit("global-search-toggle"))},[U(h,null,{default:c((()=>[U(v,{name:"i-ri:search-line"})])),_:1})])):g("v-if",!0),p(l).toolbar.enableNotification?(f(),u(y,{key:1,trigger:"hover","show-after":200,placement:"bottom",width:350},{reference:c((()=>[O("span",K,[U(_,{type:"primary",value:5},{default:c((()=>[U(h,null,{default:c((()=>[U(v,{name:"i-ri:notification-3-line"})])),_:1})])),_:1})])])),default:c((()=>[U(J,{ref:"tabs"},null,512)])),_:1})):g("v-if",!0),U(k,null,{default:c((()=>[O("span",L,[U(h,null,{default:c((()=>[U(v,{name:"i-ri:translate"})])),_:1})])])),_:1}),"pc"===p(l).mode&&p(l).toolbar.enableFullscreen?(f(),b("span",{key:2,class:"item",onClick:t[1]||(t[1]=(...e)=>p(i)&&p(i)(...e))},[U(h,null,{default:c((()=>[U(v,{name:p(n)?"i-ri:fullscreen-exit-line":"i-ri:fullscreen-line"},null,8,["name"])])),_:1})])):g("v-if",!0),p(l).toolbar.enablePageReload?(f(),b("span",{key:3,class:"item",onClick:t[2]||(t[2]=e=>p(a)())},[U(h,null,{default:c((()=>[U(v,{name:"i-iconoir:refresh-double"})])),_:1})])):g("v-if",!0),p(l).toolbar.enableColorScheme?(f(),b("span",{key:4,class:"item",onClick:t[3]||(t[3]=e=>p(l).setColorScheme("dark"===p(l).app.colorScheme?"light":"dark"))},[U(h,null,{default:c((()=>[U(v,{name:"light"===p(l).app.colorScheme?"i-ri:sun-line":"i-ri:moon-line"},null,8,["name"])])),_:1})])):g("v-if",!0),p(l).toolbar.enableAppSetting?(f(),b("span",{key:5,class:"item",onClick:t[4]||(t[4]=a=>e.$eventBus.emit("global-app-setting-toggle"))},[U(h,null,{default:c((()=>[U(v,{name:"i-uiw:setting-o"})])),_:1})])):g("v-if",!0)]),U(j,{class:"user-container",size:"default",onCommand:d},{dropdown:c((()=>[U(x,{class:"user-dropdown"},{default:c((()=>[p(l).dashboard.enable?(f(),u(S,{key:0,command:"dashboard"},{default:c((()=>[w(m(p(r)("route.dashboard",p(l).dashboard.title)),1)])),_:1})):g("v-if",!0),U(S,{command:"setting"},{default:c((()=>[w(m(p(s)("app.profile")),1)])),_:1}),U(S,{divided:"",command:"logout"},{default:c((()=>[w(m(p(s)("app.logout")),1)])),_:1})])),_:1})])),default:c((()=>[O("div",M,[U(C,{size:"small"},{default:c((()=>[U(h,null,{default:c((()=>[U(v,{name:"i-ep:user-filled"})])),_:1})])),_:1}),w(" "+m(p(o).account)+" ",1),U(h,null,{default:c((()=>[U(v,{name:"i-ep:caret-bottom"})])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-5159ae8b"]]);export{X as default};
