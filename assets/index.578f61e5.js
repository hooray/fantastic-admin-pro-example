
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a9 as e,aK as a,d as s,u as r,r as t,H as l,o as n,b as o,f as i,g as u,n as d,i as b,_ as c,aw as p,W as m,aL as f,J as h,e as v,w as g,M as y,E as k,R as _,O as j,q as x,aG as M,A as B,B as S,v as C,F as I,c as O,h as $,m as w,S as A,X as E,a2 as q,Y as F,aM as H,Q as K}from"./index.252503d3.js";import N from"./index.572705f8.js";import"./el-avatar.4fba27e7.js";import"./index.76104d08.js";/* empty css                   */import"./index.2f12ca1c.js";import"./index.2568bbb3.js";import"./el-tab-pane.f4ff0abd.js";import"./event.d298a7ab.js";const T=Symbol("breadcrumbKey");var G=c(s({name:"ElBreadcrumb",props:e({separator:{type:String,default:"/"},separatorIcon:{type:a,default:""}}),setup(e){const a=e,s=r("breadcrumb"),c=t();return l(T,a),n((()=>{const e=c.value.querySelectorAll(`.${s.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")})),(e,a)=>(o(),i("div",{ref_key:"breadcrumb",ref:c,class:d(b(s).b()),"aria-label":"Breadcrumb",role:"navigation"},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);var J=c(s({name:"ElBreadcrumbItem",props:e({to:{type:p([String,Object]),default:""},replace:{type:Boolean,default:!1}}),setup(e){const a=e,s=j(),l=m(T,void 0),n=r("breadcrumb"),{separator:c,separatorIcon:p}=f(l),x=s.appContext.config.globalProperties.$router,M=t(),B=()=>{a.to&&x&&(a.replace?x.replace(a.to):x.push(a.to))};return(e,a)=>(o(),i("span",{class:d(b(n).e("item"))},[h("span",{ref_key:"link",ref:M,class:d([b(n).e("inner"),b(n).is("link",!!e.to)]),role:"link",onClick:B},[u(e.$slots,"default")],2),b(p)?(o(),v(b(k),{key:0,class:d(b(n).e("separator"))},{default:g((()=>[(o(),v(y(b(p))))])),_:1},8,["class"])):(o(),i("span",{key:1,class:d(b(n).e("separator")),role:"presentation"},_(b(c)),3))],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const L=x(G,{BreadcrumbItem:J}),P=M(J),Q={class:"toolbar-container"},R={class:"left-box"},W=s({name:"Toolbar"}),X=B(Object.assign(W,{setup(e){const a=S(),s=C(),r=I(),t=m("generateI18nTitle"),l=O((()=>{var e;return"mobile"===s.mode||["side","head","single"].includes(s.menu.menuMode)&&s.toolbar.enableSidebarCollapse&&!(s.menu.subMenuOnylOneHide&&1===r.sidebarMenus.length&&(!r.sidebarMenus[0].children||(null==(e=r.sidebarMenus[0])?void 0:e.children.every((e=>!1===e.meta.sidebar)))))})),n=O((()=>{let e=[];return s.dashboard.enable&&e.push({path:"/dashboard",title:s.dashboard.title,i18n:"route.dashboard"}),a.meta.breadcrumbNeste&&e.push(...a.meta.breadcrumbNeste.filter((e=>!1===e.hide))),e}));return(e,r)=>{const u=K,c=k,p=P,m=L;return o(),i("div",Q,[h("div",R,[b(l)?(o(),i("div",{key:0,class:d(["sidebar-collapse",{"is-collapse":b(s).menu.subMenuCollapse}]),onClick:r[0]||(r[0]=e=>b(s).toggleSidebarCollapse())},[$(c,null,{default:g((()=>[$(u,{name:"toolbar-collapse"})])),_:1})],2)):w("v-if",!0),b(s).breadcrumb.enable&&"pc"===b(s).mode&&"filesystem"!==b(s).app.routeBaseOn?(o(),v(m,{key:1,class:d(["breadcrumb",{[`breadcrumb-${b(s).breadcrumb.style}`]:""!==b(s).breadcrumb.style}])},{default:g((()=>[$(F,{name:"breadcrumb"},{default:g((()=>[(o(!0),i(A,null,E(b(n),((e,r)=>{return o(),v(p,{key:e.path,to:r<b(n).length-1?(l=e.path,H(l)(a.params)):""},{default:g((()=>[q(_(r<b(n).length-1?b(t)(e.i18n,e.title):b(s).titleFirst?b(s).title:b(t)(e.i18n,e.title)),1)])),_:2},1032,["to"]);var l})),128))])),_:1})])),_:1},8,["class"])):w("v-if",!0)]),$(N)])}}}),[["__scopeId","data-v-3c6ea20f"]]);export{X as default};