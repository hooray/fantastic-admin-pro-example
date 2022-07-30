
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{al as e,d as t,u as a,_ as l,am as n,an as o,ao as s,b as i,e as u,w as r,g as d,ae as c,T as p,c as m,ap as v,a8 as h,U as b,t as f,r as y,aq as x,ar as g,as as M,y as k,at as S,o as I,au as C,av as E,E as P,a6 as w,H as A,I as T,N as _,aw as $,ax as O,ay as z,az as B,aA as N,aB as j,aC as L,aD as q,aE as W,aF as R,aG as D,aH as F,F as G,f as H,G as J,n as U,Y as V,M as K,q as Y,aI as Z,A as Q,v as X,i as ee,h as te,m as ae,Z as le,aJ as ne,$ as oe,L as se}from"./index.503ec71c.js";import{t as ie}from"./aria.288df782.js";import{_ as ue}from"./index.757d8951.js";class re{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const t=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(a=>{a.addEventListener("keydown",(a=>{let l=!1;switch(a.code){case e.down:this.gotoSubIndex(this.subIndex+1),l=!0;break;case e.up:this.gotoSubIndex(this.subIndex-1),l=!0;break;case e.tab:ie(t,"mouseleave");break;case e.enter:case e.space:l=!0,a.currentTarget.click()}return l&&(a.preventDefault(),a.stopPropagation()),!1}))}))}}class de{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${e}-menu`);t&&(this.submenu=new re(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(t=>{let a=!1;switch(t.code){case e.down:ie(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),a=!0;break;case e.up:ie(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),a=!0;break;case e.tab:ie(t.currentTarget,"mouseleave");break;case e.enter:case e.space:a=!0,t.currentTarget.click()}a&&t.preventDefault()}))}}class ce{constructor(e,t){this.domNode=e,this.init(t)}init(e){const t=this.domNode.childNodes;Array.from(t).forEach((t=>{1===t.nodeType&&new de(t,e)}))}}var pe=l(t({name:"ElMenuCollapseTransition",setup(){const e=a("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,a){n(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",a()},onAfterEnter(t){o(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),s(t,e.m("collapse"))?(o(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),n(t,e.m("collapse"))):(n(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),o(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(e){n(e,"horizontal-collapse-transition"),e.style.width=`${e.dataset.scrollWidth}px`}}}}}),[["render",function(e,t,a,l,n,o){return i(),u(p,c({mode:"out-in"},e.listeners),{default:r((()=>[d(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function me(e,t){const a=m((()=>{let a=e.parent;const l=[t.value];for(;"ElMenu"!==a.type.name;)a.props.index&&l.unshift(a.props.index),a=a.parent;return l}));return{parentMenu:m((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:a}}function ve(e){return m((()=>{const t=e.backgroundColor;return t?new v(t).shade(20).toString():""}))}const he=(e,t)=>{const l=a("menu");return m((()=>l.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":ve(e).value||"","active-color":e.activeTextColor||"",level:`${t}`})))},be=h({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6}});var fe=t({name:"ElSubMenu",props:be,setup(e,{slots:t,expose:l}){const n=$(),{indexPath:o,parentMenu:s}=me(n,m((()=>e.index))),i=a("menu"),u=a("sub-menu"),r=b("rootMenu");r||f("ElSubMenu","can not inject root menu");const d=b(`subMenu:${s.value.uid}`);d||f("ElSubMenu","can not inject sub menu");const c=y({}),p=y({});let v;const h=y(!1),z=y(),B=y(null),N=m((()=>"horizontal"===U.value&&L.value?"bottom-start":"right-start")),j=m((()=>"horizontal"===U.value&&L.value||"vertical"===U.value&&!r.props.collapse?x:g)),L=m((()=>0===d.level)),q=m((()=>void 0===e.popperAppendToBody?L.value:Boolean(e.popperAppendToBody))),W=m((()=>r.props.collapse?`${i.namespace.value}-zoom-in-left`:`${i.namespace.value}-zoom-in-top`)),R=m((()=>"horizontal"===U.value&&L.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"])),D=m((()=>r.openedMenus.includes(e.index))),F=m((()=>{let e=!1;return Object.values(c.value).forEach((t=>{t.active&&(e=!0)})),Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),e})),G=m((()=>r.props.backgroundColor||"")),H=m((()=>r.props.activeTextColor||"")),J=m((()=>r.props.textColor||"")),U=m((()=>r.props.mode)),V=M({index:e.index,indexPath:o,active:F}),K=m((()=>"horizontal"!==U.value?{color:J.value}:{borderBottomColor:F.value?r.props.activeTextColor?H.value:"":"transparent",color:F.value?H.value:J.value})),Y=e=>{var t,a,l;e||null==(l=null==(a=null==(t=B.value)?void 0:t.popperRef)?void 0:a.popperInstanceRef)||l.destroy()},Z=()=>{"hover"===r.props.menuTrigger&&"horizontal"===r.props.mode||r.props.collapse&&"vertical"===r.props.mode||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:o.value,active:F.value})},Q=(t,a=e.showTimeout)=>{var l;"focus"!==t.type&&("click"===r.props.menuTrigger&&"horizontal"===r.props.mode||!r.props.collapse&&"vertical"===r.props.mode||e.disabled||(d.mouseInChild.value=!0,null==v||v(),({stop:v}=O((()=>{r.openMenu(e.index,o.value)}),a)),q.value&&(null==(l=s.value.vnode.el)||l.dispatchEvent(new MouseEvent("mouseenter")))))},X=(t=!1)=>{var a,l;"click"===r.props.menuTrigger&&"horizontal"===r.props.mode||!r.props.collapse&&"vertical"===r.props.mode||(null==v||v(),d.mouseInChild.value=!1,({stop:v}=O((()=>!h.value&&r.closeMenu(e.index,o.value)),e.hideTimeout)),q.value&&t&&"ElSubMenu"===(null==(a=n.parent)?void 0:a.type.name)&&(null==(l=d.handleMouseleave)||l.call(d,!0)))};k((()=>r.props.collapse),(e=>Y(Boolean(e))));{const e=e=>{p.value[e.index]=e},t=e=>{delete p.value[e.index]};S(`subMenu:${n.uid}`,{addSubMenu:e,removeSubMenu:t,handleMouseleave:X,mouseInChild:h,level:d.level+1})}return l({opened:D}),I((()=>{r.addSubMenu(V),d.addSubMenu(V)})),C((()=>{d.removeSubMenu(V),r.removeSubMenu(V)})),()=>{var a;const l=[null==(a=t.title)?void 0:a.call(t),E(P,{class:u.e("icon-arrow")},{default:()=>E(j.value)})],n=he(r.props,d.level+1),o=r.isMenuPopup?E(w,{ref:B,visible:D.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:N.value,teleported:q.value,fallbackPlacements:R.value,transition:W.value,gpuAcceleration:!1},{content:()=>{var a;return E("div",{class:[i.m(U.value),i.m("popup-container"),e.popperClass],onMouseenter:e=>Q(e,100),onMouseleave:()=>X(!0),onFocus:e=>Q(e,100)},[E("ul",{class:[i.b(),i.m("popup"),i.m(`popup-${N.value}`)],style:n.value},[null==(a=t.default)?void 0:a.call(t)])])},default:()=>E("div",{class:u.e("title"),style:[K.value,{backgroundColor:G.value}],onClick:Z},l)}):E(_,{},[E("div",{class:u.e("title"),style:[K.value,{backgroundColor:G.value}],ref:z,onClick:Z},l),E(ue,{},{default:()=>{var e;return A(E("ul",{role:"menu",class:[i.b(),i.m("inline")],style:n.value},[null==(e=t.default)?void 0:e.call(t)]),[[T,D.value]])}})]);return E("li",{class:[u.b(),u.is("active",F.value),u.is("opened",D.value),u.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:D.value,onMouseenter:Q,onMouseleave:()=>X(!0),onFocus:Q},[o])}}});const ye=h({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:z(Array),default:()=>B([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),xe=e=>Array.isArray(e)&&e.every((e=>q(e)));var ge=t({name:"ElMenu",props:ye,emits:{close:(e,t)=>q(e)&&xe(t),open:(e,t)=>q(e)&&xe(t),select:(e,t,a,l)=>q(e)&&xe(t)&&W(a)&&(void 0===l||l instanceof Promise)},setup(e,{emit:t,slots:l,expose:n}){const o=$(),s=o.appContext.config.globalProperties.$router,i=y(),u=a("menu"),r=a("sub-menu"),d=y(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),c=y(e.defaultActive),p=y({}),v=y({}),h=m((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),b=()=>{const t=c.value&&p.value[c.value];if(!t||"horizontal"===e.mode||e.collapse)return;t.indexPath.forEach((e=>{const t=v.value[e];t&&f(e,t.indexPath)}))},f=(a,l)=>{d.value.includes(a)||(e.uniqueOpened&&(d.value=d.value.filter((e=>l.includes(e)))),d.value.push(a),t("open",a,l))},x=(e,a)=>{const l=d.value.indexOf(e);-1!==l&&d.value.splice(l,1),t("close",e,a)},g=({index:e,indexPath:t})=>{d.value.includes(e)?x(e,t):f(e,t)},C=a=>{("horizontal"===e.mode||e.collapse)&&(d.value=[]);const{index:l,indexPath:n}=a;if(void 0!==l&&void 0!==n)if(e.router&&s){const e=a.route||l,o=s.push(e).then((e=>(e||(c.value=l),e)));t("select",l,n,{index:l,indexPath:n,route:e},o)}else c.value=l,t("select",l,n,{index:l,indexPath:n})},w=()=>{R((()=>o.proxy.$forceUpdate()))};let A;k((()=>e.defaultActive),(t=>{p.value[t]||(c.value=""),(t=>{const a=p.value,l=a[t]||c.value&&a[c.value]||a[e.defaultActive];l?(c.value=l.index,b()):c.value=t})(t)})),k((()=>e.collapse),(e=>{e&&(d.value=[])})),N((()=>{"horizontal"===e.mode&&e.ellipsis?A=j(i,w).stop:null==A||A()}));{const t=e=>{v.value[e.index]=e},a=e=>{delete v.value[e.index]},l=e=>{p.value[e.index]=e},n=e=>{delete p.value[e.index]};S("rootMenu",M({props:e,openedMenus:d,items:p,subMenus:v,activeIndex:c,isMenuPopup:h,addMenuItem:l,removeMenuItem:n,addSubMenu:t,removeSubMenu:a,openMenu:f,closeMenu:x,handleMenuItemClick:C,handleSubMenuClick:g})),S(`subMenu:${o.uid}`,{addSubMenu:t,removeSubMenu:a,mouseInChild:y(!1),level:0})}I((()=>{b(),"horizontal"===e.mode&&new ce(o.vnode.el,u.namespace.value)}));n({open:e=>{const{indexPath:t}=v.value[e];t.forEach((e=>f(e,t)))},close:x,handleResize:w});const T=e=>{const t=Array.isArray(e)?e:[e],a=[];return t.forEach((e=>{Array.isArray(e.children)?a.push(...T(e.children)):a.push(e)})),a};return()=>{var t,a,n,o;let s=null!=(a=null==(t=l.default)?void 0:t.call(l))?a:[];const d=[];if("horizontal"===e.mode&&i.value){const t=Array.from(null!=(o=null==(n=i.value)?void 0:n.childNodes)?o:[]).filter((e=>"#text"!==e.nodeName||e.nodeValue)),a=T(s),l=64,u=Number.parseInt(getComputedStyle(i.value).paddingLeft,10),c=Number.parseInt(getComputedStyle(i.value).paddingRight,10),p=i.value.clientWidth-u-c;let m=0,v=0;t.forEach(((e,t)=>{m+=e.offsetWidth||0,m<=p-l&&(v=t+1)}));const h=a.slice(0,v),b=a.slice(v);(null==b?void 0:b.length)&&e.ellipsis&&(s=h,d.push(E(fe,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>E(P,{class:r.e("icon-more")},{default:()=>E(L)}),default:()=>b})))}const c=he(e,0),p=E("ul",{key:String(e.collapse),role:"menubar",ref:i,style:c.value,class:{[u.b()]:!0,[u.m(e.mode)]:!0,[u.m("collapse")]:e.collapse}},[...s,...d]);return e.collapseTransition&&"vertical"===e.mode?E(pe,(()=>p)):p}}});const Me=h({index:{type:z([String,null]),default:null},route:{type:z([String,Object])},disabled:Boolean});var ke=l(t({name:"ElMenuItem",components:{ElTooltip:w},props:Me,emits:{click:e=>q(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const l=$(),n=b("rootMenu"),o=a("menu"),s=a("menu-item");n||f("ElMenuItem","can not inject root menu");const{parentMenu:i,indexPath:u}=me(l,D(e,"index")),r=b(`subMenu:${i.value.uid}`);r||f("ElMenuItem","can not inject sub menu");const d=m((()=>e.index===n.activeIndex)),c=M({index:e.index,indexPath:u,active:d});return I((()=>{r.addSubMenu(c),n.addMenuItem(c)})),C((()=>{r.removeSubMenu(c),n.removeMenuItem(c)})),{Effect:F,parentMenu:i,rootMenu:n,active:d,nsMenu:o,nsMenuItem:s,handleClick:()=>{e.disabled||(n.handleMenuItemClick({index:e.index,indexPath:u.value,route:e.route}),t("click",c))}}}}),[["render",function(e,t,a,l,n,o){const s=G("el-tooltip");return i(),H("li",{class:U([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(i(),u(s,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:r((()=>[d(e.$slots,"title")])),default:r((()=>[J("div",{class:U(e.nsMenu.be("tooltip","trigger"))},[d(e.$slots,"default")],2)])),_:3},8,["effect"])):(i(),H(_,{key:1},[d(e.$slots,"default"),d(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);var Se=l(t({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:a("menu-item-group")})}),[["render",function(e,t,a,l,n,o){return i(),H("li",{class:U(e.ns.b())},[J("div",{class:U(e.ns.e("title"))},[e.$slots.title?d(e.$slots,"title",{key:1}):(i(),H(_,{key:0},[V(K(e.title),1)],64))],2),J("ul",null,[d(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Ie=Y(ge,{MenuItem:ke,MenuItemGroup:Se,SubMenu:fe}),Ce=Z(ke);Z(Se);const Ee=Z(fe),Pe={class:"sidebar-item"},we={class:"item"},Ae={class:"title"},Te=["href","target","onClick"],_e={class:"title"},$e={class:"title"},Oe=t({name:"SidebarItem"}),ze=Q(Object.assign(Oe,{props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=X(),l=b("generateI18nTitle"),n=m((()=>{let e=!0;return t.item.children?t.item.children.every((e=>!1===e.meta.sidebar))&&(e=!1):e=!1,e}));function o(e,t,a){let l="";return!e&&t||e&&!a?l=t:e&&a&&(l=a),l}function s(e){let t={type:"",value:"",visible:!1};return e&&(t.visible=!0,t.value="function"==typeof e?e():e,"boolean"==typeof t.value?(t.type="dot",t.value||(t.visible=!1)):"number"==typeof t.value?(t.type="text",t.value<=0&&(t.visible=!1)):(t.type="text",t.value||(t.visible=!1))),t}return(t,d)=>{const c=se,p=P,m=Ee,v=Ce,h=G("router-link");return i(),H("div",Pe,["filesystem"!==ee(a).app.routeBaseOn&&null==e.item.path?(i(),u(m,{key:0,title:ee(l)(e.item.meta.i18n,e.item.meta.title),index:JSON.stringify(e.item)},{title:r((()=>[J("div",we,[e.item.meta.icon?(i(),u(p,{key:0,class:"title-icon"},{default:r((()=>[te(c,{name:e.item.meta.icon},null,8,["name"])])),_:1})):ae("v-if",!0),J("span",Ae,K(ee(l)(e.item.meta.i18n,e.item.meta.title)),1)])])),default:r((()=>[(i(!0),H(_,null,le(e.item.children,(e=>(i(),H(_,null,[!1!==e.meta.sidebar?(i(),u(ze,{key:e.path,item:e},null,8,["item"])):ae("v-if",!0)],64)))),256))])),_:1},8,["title","index"])):ee(n)?(i(),u(m,{key:2,title:ee(l)(e.item.meta.i18n,e.item.meta.title),index:"filesystem"!==ee(a).app.routeBaseOn?ee(ne)(e.basePath,e.item.path):JSON.stringify(e.item)},{title:r((()=>[e.item.meta.icon?(i(),u(p,{key:0,class:"title-icon unactive"},{default:r((()=>[te(c,{name:e.item.meta.icon},null,8,["name"])])),_:1})):ae("v-if",!0),e.item.meta.activeIcon||e.item.meta.icon?(i(),u(p,{key:1,class:"title-icon active"},{default:r((()=>[te(c,{name:e.item.meta.activeIcon||e.item.meta.icon},null,8,["name"])])),_:1})):ae("v-if",!0),J("span",$e,K(ee(l)(e.item.meta.i18n,e.item.meta.title)),1),s(e.item.meta.badge).visible?(i(),H("span",{key:2,class:U({badge:!0,"badge-dot":"dot"===s(e.item.meta.badge).type,"badge-text":"text"===s(e.item.meta.badge).type})},K("text"===s(e.item.meta.badge).type?s(e.item.meta.badge).value:""),3)):ae("v-if",!0)])),default:r((()=>[(i(!0),H(_,null,le(e.item.children,(t=>(i(),H(_,null,[!1!==t.meta.sidebar?(i(),u(ze,{key:t.path,item:t,"base-path":ee(ne)(e.basePath,e.item.path||"")},null,8,["item","base-path"])):ae("v-if",!0)],64)))),256))])),_:1},8,["title","index"])):(i(),u(h,{key:1,custom:"",to:ee(ne)(e.basePath,e.item.path)},{default:r((({href:t,navigate:a,isActive:n,isExactActive:d})=>[J("a",{href:ee(oe)(ee(ne)(e.basePath,e.item.path))?ee(ne)(e.basePath,e.item.path):t,class:U([n&&"router-link-active",d&&"router-link-exact-active"]),target:ee(oe)(ee(ne)(e.basePath,e.item.path))?"_blank":"_self",onClick:a},[te(v,{title:ee(l)(e.item.meta.i18n,e.item.meta.title),index:ee(ne)(e.basePath,e.item.path)},{default:r((()=>[o(n||d,e.item.meta.icon,e.item.meta.activeIcon)?(i(),u(p,{key:0,class:"title-icon"},{default:r((()=>[te(c,{name:o(n||d,e.item.meta.icon,e.item.meta.activeIcon)},null,8,["name"])])),_:2},1024)):ae("v-if",!0),J("span",_e,K(ee(l)(e.item.meta.i18n,e.item.meta.title)),1),s(e.item.meta.badge).visible?(i(),H("span",{key:1,class:U({badge:!0,"badge-dot":"dot"===s(e.item.meta.badge).type,"badge-text":"text"===s(e.item.meta.badge).type})},K("text"===s(e.item.meta.badge).type?s(e.item.meta.badge).value:""),3)):ae("v-if",!0)])),_:2},1032,["title","index"])],10,Te)])),_:1},8,["to"]))])}}}),[["__scopeId","data-v-824b4f8f"]]),Be=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{Ie as E,ze as S,Be as i};