
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,Z as t,v as l,$ as s,C as n,r,c as i,y as u,o,a0 as c,E as d,f as p,F as h,l as m,h as v,w as f,i as b,a1 as $,a2 as g,R as y,m as k,n as _,S as w,X as x,U as B,V as S,I as T,W as I,P as j,M as C,b as P,e as O,Q as V}from"./index.8029e3e3.js";import{E}from"./el-input.636fea0c.js";import"./event.a088884a.js";const M=e=>(B("data-v-4218a312"),e=e(),S(),e),q={class:"container"},A={key:0,class:"tips"},D={class:"tip"},H=M((()=>h("span",null,"Alt",-1))),K=g("+"),L=M((()=>h("span",null,"S",-1))),N={class:"tip"},U={class:"tip"},F={class:"tip"},Q=M((()=>h("span",null,"ESC",-1))),R=["href","target","onClick","onMouseover"],W={class:"icon"},X={class:"info"},Z={class:"title"},z={class:"breadcrumb"},G={class:"path"},J=a({name:"Search"});var Y=e(Object.assign(J,{setup(e){const{proxy:a}=T(),{t:B}=t.exports.useI18n(),S=l(),M=s(),J=n(),Y=I("generateI18nTitle"),ee=r(!1),ae=r(""),te=r([]),le=r(-1),se=i((()=>{let e=[];return e=te.value.filter((e=>{let a=!1;return Y(e.i18n,e.title).indexOf(ae.value)>=0&&(a=!0),e.path.indexOf(ae.value)>=0&&(a=!0),e.breadcrumb.some((e=>Y(e.i18n,e.title).indexOf(ae.value)>=0))&&(a=!0),a})),e}));function ne(e){e.map((e=>{if(!1!==e.meta.sidebar)if(function(e){let a=!0;return e.children?e.children.every((e=>!1===e.meta.sidebar))&&(a=!1):a=!1,a}(e)){let a=e.meta.baseBreadcrumb?c(e.meta.baseBreadcrumb):[];a.push({title:e.meta.title,i18n:e.meta.i18n});let t=c(e.children);t.map((t=>{t.meta.baseIcon=e.meta.icon||e.meta.baseIcon,t.meta.baseBreadcrumb=a,t.meta.basePath=e.meta.basePath?[e.meta.basePath,e.path].join("/"):e.path})),ne(t)}else{let a=[];e.meta.baseBreadcrumb&&(a=c(e.meta.baseBreadcrumb)),a.push({title:e.meta.title,i18n:e.meta.i18n});let t="";t=j(e.path)?e.path:e.meta.basePath?[e.meta.basePath,e.path].join("/"):e.path,te.value.push({icon:e.meta.icon||e.meta.baseIcon,title:e.meta.title,i18n:e.meta.i18n,breadcrumb:a,path:t})}}))}function re(){se.value.length&&(le.value-=1,le.value<0&&(le.value=se.value.length-1),oe())}function ie(){se.value.length&&(le.value+=1,le.value>se.value.length-1&&(le.value=0),oe())}function ue(){-1!==le.value&&a.$refs[`search-item-${le.value}`][0].click()}function oe(){let e=0;if(-1!==le.value){e=a.$refs.search.scrollTop;const t=a.$refs[`search-item-${le.value}`][0].offsetTop,l=a.$refs[`search-item-${le.value}`][0].clientHeight,s=a.$refs.search.scrollTop,n=a.$refs.search.clientHeight;t+l>s+n?e=t+l-n:t<=s&&(e=t)}a.$refs.search.scrollTo({top:e})}return u((()=>ee.value),(e=>{e?(document.querySelector("body").classList.add("hidden"),a.$refs.search.scrollTop=0,a.$hotkeys("up",re),a.$hotkeys("down",ie),a.$hotkeys("enter",ue),setTimeout((()=>{a.$refs.input.focus()}),500)):(document.querySelector("body").classList.remove("hidden"),a.$hotkeys.unbind("up",re),a.$hotkeys.unbind("down",ie),a.$hotkeys.unbind("enter",ue),setTimeout((()=>{ae.value="",le.value=-1}),500))})),u((()=>se.value),(()=>{le.value=-1,oe()})),o((()=>{a.$eventBus.on("global-search-toggle",(()=>{ee.value=!ee.value})),a.$hotkeys("alt+s",(e=>{S.toolbar.enableNavSearch&&(e.preventDefault(),ee.value=!0)})),a.$hotkeys("esc",(e=>{S.toolbar.enableNavSearch&&(e.preventDefault(),ee.value=!1)})),"filesystem"!==S.app.routeBaseOn?M.routes.map((e=>{ne(e.children)})):J.menus.map((e=>{ne(e.children)}))})),(e,a)=>{const t=V,l=d,s=E,n=C("router-link");return P(),p("div",{id:"search",class:_({searching:ee.value}),onClick:a[3]||(a[3]=a=>ee.value&&e.$eventBus.emit("global-search-toggle"))},[h("div",q,[h("div",{class:"search-box",onClick:a[2]||(a[2]=m((()=>{}),["stop"]))},[v(s,{ref:"input",modelValue:ae.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ae.value=e),placeholder:b(B)("app.search.input"),clearable:"",onKeydown:[a[1]||(a[1]=$((a=>e.$eventBus.emit("global-search-toggle")),["esc"])),$(m(re,["prevent"]),["up"]),$(m(ie,["prevent"]),["down"]),$(m(ue,["prevent"]),["enter"])]},{prefix:f((()=>[v(l,null,{default:f((()=>[v(t,{name:"i-ep:search"})])),_:1})])),_:1},8,["modelValue","placeholder","onKeydown"]),"pc"===b(S).mode?(P(),p("div",A,[h("div",D,[H,K,L,g(" "+y(b(B)("app.search.alt_s")),1)]),h("div",N,[h("span",null,[v(l,null,{default:f((()=>[v(t,{name:"i-ant-design:caret-up-filled"})])),_:1})]),h("span",null,[v(l,null,{default:f((()=>[v(t,{name:"i-ant-design:caret-down-filled"})])),_:1})]),g(" "+y(b(B)("app.search.up_down")),1)]),h("div",U,[h("span",null,[v(l,null,{default:f((()=>[v(t,{name:"i-ion:md-return-left"})])),_:1})]),g(" "+y(b(B)("app.search.enter")),1)]),h("div",F,[Q,g(" "+y(b(B)("app.search.esc")),1)])])):k("v-if",!0)]),h("div",{ref:"search",class:_(["result",{mobile:"mobile"===b(S).mode}])},[(P(!0),p(w,null,x(b(se),((e,a)=>(P(),O(n,{key:e.path,custom:"",to:ee.value?e.path:""},{default:f((({href:s,navigate:n})=>[h("a",{ref_for:!0,ref:`search-item-${a}`,href:b(j)(e.path)?e.path:s,class:_(["item",{actived:a===le.value}]),target:b(j)(e.path)?"_blank":"_self",onClick:n,onMouseover:e=>le.value=a},[h("div",W,[e.icon?(P(),O(l,{key:0},{default:f((()=>[v(t,{name:e.icon},null,8,["name"])])),_:2},1024)):k("v-if",!0)]),h("div",X,[h("div",Z,y(b(Y)(e.i18n,e.title)),1),h("div",z,[(P(!0),p(w,null,x(e.breadcrumb,((e,a)=>(P(),p("span",{key:a},[g(y(b(Y)(e.i18n,e.title))+" ",1),v(l,null,{default:f((()=>[v(t,{name:"i-ep:arrow-right"})])),_:1})])))),128))]),h("div",G,y(e.path),1)])],42,R)])),_:2},1032,["to"])))),128))],2)])],2)}}}),[["__scopeId","data-v-4218a312"]]);export{Y as default};
