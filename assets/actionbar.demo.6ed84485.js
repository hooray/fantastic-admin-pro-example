
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.28106544.js";import{z as l,cl as a,cm as o,a5 as d,f as m,h as t,w as u,bG as r,c4 as f,c5 as n,b as p,D as s,a1 as i}from"./index.f897cb43.js";import{E as b,a as V}from"./el-form.56ec1c81.js";/* empty css                       *//* empty css                 *//* empty css                          */import{E as c,a as _}from"./el-checkbox.2aaa4b7c.js";import{E as y}from"./el-switch.99d6bbf0.js";import{E as j}from"./el-time-picker.caf61eac.js";/* empty css                 *//* empty css                     */import{E as h}from"./el-date-picker.2aa76fef.js";/* empty css               */import{E as U,b as g}from"./el-select.2a915073.js";import"./el-form-item.3d23d1d6.js";import{E as v}from"./index2.faa56537.js";import{b as x,a as w}from"./index2.92fb4303.js";import"./isEqual.93ba6ab4.js";import"./event2.c09267d7.js";import"./validator2.fb9fc88c.js";import"./panel-time-pick2.ed0a95f9.js";import"./index2.bdfb54d9.js";import"./_baseFlatten.51da63e8.js";import"./arrays2.9d0dd0a1.js";import"./index2.a7f5b385.js";import"./index2.04ee1fac.js";const E={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},k=s("p",null,"FixedActionBar",-1),z=s("p",{style:{"margin-bottom":"0"}},"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",-1),F=i("-"),q=i("-"),A=i("-"),B=i("立即创建"),D=i("取消");"function"==typeof r&&r(E);var G=l(E,[["render",function(l,r,s,i,E,G){const C=f,H=v,I=b,J=U,K=g,L=h,M=a,N=j,O=y,P=c,Q=_,R=x,S=w,T=V,W=o,X=n,Y=d,Z=e;return p(),m("div",null,[t(C,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页"},{content:u((()=>[k,z])),_:1}),t(X,null,{default:u((()=>[t(W,null,{default:u((()=>[t(M,{md:24,lg:12},{default:u((()=>[t(T,{ref:"form",model:E.form,"label-width":"120px"},{default:u((()=>[t(I,{label:"活动名称"},{default:u((()=>[t(H,{modelValue:E.form.name,"onUpdate:modelValue":r[0]||(r[0]=e=>E.form.name=e)},null,8,["modelValue"])])),_:1}),t(I,{label:"活动区域"},{default:u((()=>[t(K,{modelValue:E.form.region,"onUpdate:modelValue":r[1]||(r[1]=e=>E.form.region=e),placeholder:"请选择活动区域"},{default:u((()=>[t(J,{label:"区域一",value:"shanghai"}),t(J,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"活动时间"},{default:u((()=>[t(M,{span:11},{default:u((()=>[t(L,{modelValue:E.form.date1,"onUpdate:modelValue":r[2]||(r[2]=e=>E.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),t(M,{class:"line",span:2},{default:u((()=>[F])),_:1}),t(M,{span:11},{default:u((()=>[t(N,{modelValue:E.form.date2,"onUpdate:modelValue":r[3]||(r[3]=e=>E.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),t(I,{label:"即时配送"},{default:u((()=>[t(O,{modelValue:E.form.delivery,"onUpdate:modelValue":r[4]||(r[4]=e=>E.form.delivery=e)},null,8,["modelValue"])])),_:1}),t(I,{label:"活动性质"},{default:u((()=>[t(Q,{modelValue:E.form.type,"onUpdate:modelValue":r[5]||(r[5]=e=>E.form.type=e)},{default:u((()=>[t(P,{label:"美食/餐厅线上活动",name:"type"}),t(P,{label:"地推活动",name:"type"}),t(P,{label:"线下主题活动",name:"type"}),t(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"特殊资源"},{default:u((()=>[t(S,{modelValue:E.form.resource,"onUpdate:modelValue":r[6]||(r[6]=e=>E.form.resource=e)},{default:u((()=>[t(R,{label:"线上品牌商赞助"}),t(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"活动形式"},{default:u((()=>[t(H,{modelValue:E.form.desc,"onUpdate:modelValue":r[7]||(r[7]=e=>E.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),t(I,{label:"活动名称"},{default:u((()=>[t(H,{modelValue:E.form.name,"onUpdate:modelValue":r[8]||(r[8]=e=>E.form.name=e)},null,8,["modelValue"])])),_:1}),t(I,{label:"活动区域"},{default:u((()=>[t(K,{modelValue:E.form.region,"onUpdate:modelValue":r[9]||(r[9]=e=>E.form.region=e),placeholder:"请选择活动区域"},{default:u((()=>[t(J,{label:"区域一",value:"shanghai"}),t(J,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"活动时间"},{default:u((()=>[t(M,{span:11},{default:u((()=>[t(L,{modelValue:E.form.date1,"onUpdate:modelValue":r[10]||(r[10]=e=>E.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),t(M,{class:"line",span:2},{default:u((()=>[q])),_:1}),t(M,{span:11},{default:u((()=>[t(N,{modelValue:E.form.date2,"onUpdate:modelValue":r[11]||(r[11]=e=>E.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),t(I,{label:"即时配送"},{default:u((()=>[t(O,{modelValue:E.form.delivery,"onUpdate:modelValue":r[12]||(r[12]=e=>E.form.delivery=e)},null,8,["modelValue"])])),_:1}),t(I,{label:"活动性质"},{default:u((()=>[t(Q,{modelValue:E.form.type,"onUpdate:modelValue":r[13]||(r[13]=e=>E.form.type=e)},{default:u((()=>[t(P,{label:"美食/餐厅线上活动",name:"type"}),t(P,{label:"地推活动",name:"type"}),t(P,{label:"线下主题活动",name:"type"}),t(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"特殊资源"},{default:u((()=>[t(S,{modelValue:E.form.resource,"onUpdate:modelValue":r[14]||(r[14]=e=>E.form.resource=e)},{default:u((()=>[t(R,{label:"线上品牌商赞助"}),t(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"活动形式"},{default:u((()=>[t(H,{modelValue:E.form.desc,"onUpdate:modelValue":r[15]||(r[15]=e=>E.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),t(I,{label:"活动名称"},{default:u((()=>[t(H,{modelValue:E.form.name,"onUpdate:modelValue":r[16]||(r[16]=e=>E.form.name=e)},null,8,["modelValue"])])),_:1}),t(I,{label:"活动区域"},{default:u((()=>[t(K,{modelValue:E.form.region,"onUpdate:modelValue":r[17]||(r[17]=e=>E.form.region=e),placeholder:"请选择活动区域"},{default:u((()=>[t(J,{label:"区域一",value:"shanghai"}),t(J,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"活动时间"},{default:u((()=>[t(M,{span:11},{default:u((()=>[t(L,{modelValue:E.form.date1,"onUpdate:modelValue":r[18]||(r[18]=e=>E.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),t(M,{class:"line",span:2},{default:u((()=>[A])),_:1}),t(M,{span:11},{default:u((()=>[t(N,{modelValue:E.form.date2,"onUpdate:modelValue":r[19]||(r[19]=e=>E.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),t(I,{label:"即时配送"},{default:u((()=>[t(O,{modelValue:E.form.delivery,"onUpdate:modelValue":r[20]||(r[20]=e=>E.form.delivery=e)},null,8,["modelValue"])])),_:1}),t(I,{label:"活动性质"},{default:u((()=>[t(Q,{modelValue:E.form.type,"onUpdate:modelValue":r[21]||(r[21]=e=>E.form.type=e)},{default:u((()=>[t(P,{label:"美食/餐厅线上活动",name:"type"}),t(P,{label:"地推活动",name:"type"}),t(P,{label:"线下主题活动",name:"type"}),t(P,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"特殊资源"},{default:u((()=>[t(S,{modelValue:E.form.resource,"onUpdate:modelValue":r[22]||(r[22]=e=>E.form.resource=e)},{default:u((()=>[t(R,{label:"线上品牌商赞助"}),t(R,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),t(I,{label:"活动形式"},{default:u((()=>[t(H,{modelValue:E.form.desc,"onUpdate:modelValue":r[23]||(r[23]=e=>E.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1}),t(Z,null,{default:u((()=>[t(Y,{type:"primary",size:"large"},{default:u((()=>[B])),_:1}),t(Y,{size:"large"},{default:u((()=>[D])),_:1})])),_:1})])}]]);export{G as default};
