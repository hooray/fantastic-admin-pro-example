
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,r as l,o as t,aw as o,E as s,a6 as i,cn as r,co as d,cp as n,f as u,h as m,w as f,e as p,m as c,bI as b,I as v,K as g,c6 as h,c7 as j,b as _,a1 as x,G as M,i as C,U as y,V as z,a2 as k,a9 as E,Q as w,F as L}from"./index.6746a3d3.js";import{v as P}from"./el-loading.56024bc3.js";import{E as V}from"./el-pagination.31a2d6ab.js";import{E as S}from"./el-input.a13ee31e.js";/* empty css               */import"./el-select.dbce50f2.js";/* empty css                     */import{E as $,a as U}from"./el-table-column.e07b1484.js";import"./el-checkbox.023fa200.js";import"./el-tooltip.0ca4bad9.js";import{_ as F}from"./index.963bdaf4.js";import{_ as A}from"./index.71f9193b.js";import{E as D,a as G}from"./el-form.65d9f06e.js";import"./el-form-item.3d23d1d6.js";/* empty css                       *//* empty css                        */import{E as I}from"./el-message-box.5cc3fabd.js";import"./el-overlay.efabaf9a.js";import{u as B}from"./index.ab76e2d7.js";import K from"./index.3ac757cd.js";import{E as R,a as q}from"./index.3a869ca6.js";import"./isEqual.09ccf48c.js";import"./event.a088884a.js";import"./index.56b6a42b.js";import"./index.66af64ac.js";import"./validator.2566d1ef.js";import"./aria.7c550f1b.js";import"./index.59d17107.js";import"./el-drawer.342dac5f.js";import"./use-dialog.7ad3a367.js";import"./el-dialog.fa6edf36.js";import"./index.6477b1fe.js";const N=(e=>(y("data-v-63b7dff9"),e=e(),z(),e))((()=>L("p",null,"标准模块的优势之一就是，可根据表单内容量与关联性，快速切换表单展示模式，默认提供了以下三种常见模式",-1))),O=k("路由跳转"),Q=k("对话框"),H=k("抽屉"),J=k(" 新增 "),T=k(" 筛选 "),W=k("单个批量操作按钮"),X=k("批量操作按钮组1"),Y=k("批量操作按钮组2"),Z=k("编辑"),ee=k("删除"),ae=a({name:"PagesExampleFormModeList"}),le=Object.assign(ae,{setup(e){const{pagination:a,getParams:b,onSizeChange:y,onCurrentChange:z,onSortChange:k}=B(),{proxy:L}=v(),ae=g(),le=l({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function te(){le.value.loading=!0;let e=b();le.value.search.title&&(e.title=le.value.search.title),L.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:e}).then((e=>{le.value.loading=!1,le.value.dataList=e.data.list,a.value.total=e.data.total}))}function oe(e){y(e).then((()=>te()))}function se(e=1){z(e).then((()=>te()))}function ie(e,a){k(e,a).then((()=>te()))}function re(){"router"===le.value.formMode?ae.push({name:"pagesExampleGeneralFormModeCreate"}):(le.value.formModeProps.id="",le.value.formModeProps.visible=!0)}return t((()=>{te(),"router"===le.value.formMode&&L.$eventBus.on("get-data-list",(()=>{te()}))})),o((()=>{"router"===le.value.formMode&&L.$eventBus.off("get-data-list")})),(e,l)=>{const t=R,o=q,b=h,v=w,g=s,y=i,z=S,k=D,B=r,de=d,ne=G,ue=A,me=n,fe=F,pe=$,ce=U,be=V,ve=j,ge=P;return _(),u("div",null,[m(b,{title:"表单展示模式"},{content:f((()=>[N,m(o,{modelValue:le.value.formMode,"onUpdate:modelValue":l[0]||(l[0]=e=>le.value.formMode=e),size:"default"},{default:f((()=>[m(t,{label:"router"},{default:f((()=>[O])),_:1}),m(t,{label:"dialog"},{default:f((()=>[Q])),_:1}),m(t,{label:"drawer"},{default:f((()=>[H])),_:1})])),_:1},8,["modelValue"])])),_:1}),m(ve,null,{default:f((()=>[m(y,{type:"primary",size:"large",onClick:re},{icon:f((()=>[m(g,null,{default:f((()=>[m(v,{name:"i-ep:plus"})])),_:1})])),default:f((()=>[J])),_:1}),m(ue,null,{default:f((()=>[m(ne,{model:le.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:f((()=>[m(de,null,{default:f((()=>[m(B,{span:12},{default:f((()=>[m(k,{label:"标题"},{default:f((()=>[m(z,{modelValue:le.value.search.title,"onUpdate:modelValue":l[1]||(l[1]=e=>le.value.search.title=e),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:l[2]||(l[2]=x((e=>se()),["enter"])),onClear:l[3]||(l[3]=e=>se())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(k,null,{default:f((()=>[m(y,{type:"primary",onClick:l[4]||(l[4]=e=>se())},{icon:f((()=>[m(g,null,{default:f((()=>[m(v,{name:"i-ep:search"})])),_:1})])),default:f((()=>[T])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),le.value.batch.enable?(_(),p(fe,{key:0,data:le.value.dataList,"selection-data":le.value.batch.selectionDataList,onCheckAll:l[5]||(l[5]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[6]||(l[6]=a=>e.$refs.table.clearSelection())},{default:f((()=>[m(y,{size:"default"},{default:f((()=>[W])),_:1}),m(me,null,{default:f((()=>[m(y,{size:"default"},{default:f((()=>[X])),_:1}),m(y,{size:"default"},{default:f((()=>[Y])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):c("v-if",!0),M((_(),p(ce,{ref:"table",class:"list-table",data:le.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:ie,onSelectionChange:l[7]||(l[7]=e=>le.value.batch.selectionDataList=e)},{default:f((()=>[le.value.batch.enable?(_(),p(pe,{key:0,type:"selection",align:"center",fixed:""})):c("v-if",!0),m(pe,{prop:"title",label:"标题"}),m(pe,{label:"操作",width:"250",align:"center",fixed:"right"},{default:f((e=>[m(y,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,void("router"===le.value.formMode?ae.push({name:"pagesExampleGeneralFormModeEdit",params:{id:l.id}}):(le.value.formModeProps.id=l.id,le.value.formModeProps.visible=!0));var l}},{default:f((()=>[Z])),_:2},1032,["onClick"]),m(y,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void I.confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{L.$api.post("pages_example/form_mode/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{te(),E.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:f((()=>[ee])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ge,le.value.loading]]),m(be,{"current-page":C(a).page,total:C(a).total,"page-size":C(a).size,"page-sizes":C(a).sizes,layout:C(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:oe,onCurrentChange:se},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(le.value.formMode)?(_(),p(K,{key:0,id:le.value.formModeProps.id,modelValue:le.value.formModeProps.visible,"onUpdate:modelValue":l[8]||(l[8]=e=>le.value.formModeProps.visible=e),mode:le.value.formMode,onSuccess:te},null,8,["id","modelValue","mode"])):c("v-if",!0)])}}});"function"==typeof b&&b(le);var te=e(le,[["__scopeId","data-v-63b7dff9"]]);export{te as default};