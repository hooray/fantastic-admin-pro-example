
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a8 as e,d as s,b5 as a,E as t,b6 as l,b7 as o,c as r,r as d,u as i,b8 as n,ad as f,_ as c,F as u,b,e as p,h as m,w as v,H as y,I as h,G as w,n as k,f as C,g as E,M as R,m as z,k as S,l as g,T as I,b9 as L,q as $}from"./index.3b0b287f.js";import{E as _}from"./el-overlay.12ffbf5c.js";import{d as x,a as A,u as B}from"./use-dialog.22735af1.js";const H=s({name:"ElDrawer",components:{ElOverlay:_,ElFocusTrap:a,ElIcon:t,Close:l},props:e({...x,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),emits:A,setup(e,{slots:s}){o({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},r((()=>!!s.title)));const a=d(),t=d(),l=i("drawer"),{t:c}=n(),u=r((()=>"rtl"===e.direction||"ltr"===e.direction)),b=r((()=>f(e.size)));return{...B(e,a),drawerRef:a,focusStartRef:t,isHorizontal:u,drawerSize:b,ns:l,t:c}}}),T=["aria-label","aria-labelledby","aria-describedby"],q=["id"],j=["aria-label"],D=["id"];const F=$(c(H,[["render",function(e,s,a,t,l,o){const r=u("close"),d=u("el-icon"),i=u("el-focus-trap"),n=u("el-overlay");return b(),p(L,{to:"body",disabled:!e.appendToBody},[m(I,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:v((()=>[y(m(n,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:v((()=>[m(i,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v((()=>[w("div",{ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId,class:k([e.ns.b(),e.direction,e.visible&&"open",e.customClass]),style:S(e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize),role:"dialog",onClick:s[1]||(s[1]=g((()=>{}),["stop"]))},[w("span",{ref:"focusStartRef",class:k(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(b(),C("header",{key:0,class:k(e.ns.e("header"))},[e.$slots.title?E(e.$slots,"title",{key:1},(()=>[z(" DEPRECATED SLOT ")])):E(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(()=>[e.$slots.title?z("v-if",!0):(b(),C("span",{key:0,id:e.titleId,role:"heading",class:k(e.ns.e("title"))},R(e.title),11,q))])),e.showClose?(b(),C("button",{key:2,"aria-label":e.t("el.drawer.close"),class:k(e.ns.e("close-btn")),type:"button",onClick:s[0]||(s[0]=(...s)=>e.handleClose&&e.handleClose(...s))},[m(d,{class:k(e.ns.e("close"))},{default:v((()=>[m(r)])),_:1},8,["class"])],10,j)):z("v-if",!0)],2)):z("v-if",!0),e.rendered?(b(),C("div",{key:1,id:e.bodyId,class:k(e.ns.e("body"))},[E(e.$slots,"default")],10,D)):z("v-if",!0),e.$slots.footer?(b(),C("div",{key:2,class:k(e.ns.e("footer"))},[E(e.$slots,"footer")],2)):z("v-if",!0)],14,T)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[h,e.visible]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]));export{F as E};
