
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,cl as l,a5 as a,cm as o,f as t,h as d,w as m,bG as r,c5 as s,b as u,a1 as f,c4 as i}from"./index.8f9b9927.js";import{E as p,a as n}from"./el-form.d1eb6a69.js";/* empty css                       *//* empty css                 *//* empty css                          */import{E as c,a as b}from"./el-checkbox.a84b1e23.js";import{E as j}from"./el-switch.c0b6d08d.js";import{E as V}from"./el-time-picker.e5b5349a.js";/* empty css                 *//* empty css                     */import{E as _}from"./el-date-picker.1c10167a.js";/* empty css               */import{E as y,b as h}from"./el-select.79e69472.js";import"./el-form-item.3d23d1d6.js";import{E as x}from"./index2.55f6ed3f.js";import{b as v,a as g}from"./index2.f51c1a29.js";import"./isEqual.8a77112b.js";import"./event2.c09267d7.js";import"./validator2.aba95f91.js";import"./panel-time-pick2.aa2e7777.js";import"./index2.c2b00f39.js";import"./_baseFlatten.f4fa2c05.js";import"./arrays2.9d0dd0a1.js";import"./index2.563cac1c.js";import"./index2.e885f396.js";const E={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},U=f("-"),k=f("立即创建"),w=f("取消");"function"==typeof r&&r(E);var q=e(E,[["render",function(e,r,f,E,q,z){const F=i,G=x,A=p,B=y,C=h,D=_,H=l,I=V,J=j,K=c,L=b,M=v,N=g,O=a,P=n,Q=o,R=s;return u(),t("div",null,[d(F,{title:"基础表单",content:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。"}),d(R,null,{default:m((()=>[d(Q,{type:"flex",justify:"center"},{default:m((()=>[d(H,{md:12,sm:18},{default:m((()=>[d(P,{model:q.form,"label-width":"80px"},{default:m((()=>[d(A,{label:"活动名称"},{default:m((()=>[d(G,{modelValue:q.form.name,"onUpdate:modelValue":r[0]||(r[0]=e=>q.form.name=e)},null,8,["modelValue"])])),_:1}),d(A,{label:"活动区域"},{default:m((()=>[d(C,{modelValue:q.form.region,"onUpdate:modelValue":r[1]||(r[1]=e=>q.form.region=e),placeholder:"请选择活动区域"},{default:m((()=>[d(B,{label:"区域一",value:"shanghai"}),d(B,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),d(A,{label:"活动时间"},{default:m((()=>[d(H,{span:11},{default:m((()=>[d(D,{modelValue:q.form.date1,"onUpdate:modelValue":r[2]||(r[2]=e=>q.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),d(H,{class:"line",span:2},{default:m((()=>[U])),_:1}),d(H,{span:11},{default:m((()=>[d(I,{modelValue:q.form.date2,"onUpdate:modelValue":r[3]||(r[3]=e=>q.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),d(A,{label:"即时配送"},{default:m((()=>[d(J,{modelValue:q.form.delivery,"onUpdate:modelValue":r[4]||(r[4]=e=>q.form.delivery=e)},null,8,["modelValue"])])),_:1}),d(A,{label:"活动性质"},{default:m((()=>[d(L,{modelValue:q.form.type,"onUpdate:modelValue":r[5]||(r[5]=e=>q.form.type=e)},{default:m((()=>[d(K,{label:"美食/餐厅线上活动",name:"type"}),d(K,{label:"地推活动",name:"type"}),d(K,{label:"线下主题活动",name:"type"}),d(K,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),d(A,{label:"特殊资源"},{default:m((()=>[d(N,{modelValue:q.form.resource,"onUpdate:modelValue":r[6]||(r[6]=e=>q.form.resource=e)},{default:m((()=>[d(M,{label:"线上品牌商赞助"}),d(M,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),d(A,{label:"活动形式"},{default:m((()=>[d(G,{modelValue:q.form.desc,"onUpdate:modelValue":r[7]||(r[7]=e=>q.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),d(A,null,{default:m((()=>[d(O,{type:"primary"},{default:m((()=>[k])),_:1}),d(O,null,{default:m((()=>[w])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])}]]);export{q as default};
