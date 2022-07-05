
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,r as l,o as t,aw as o,E as i,a6 as s,cn as r,co as n,cp as d,f as u,h as p,w as m,e as c,m as f,bI as v,I as g,K as b,c7 as h,b as j,a1 as _,G as x,i as C,a2 as y,a9 as k,c6 as z,Q as M}from"./index.8029e3e3.js";import{v as w}from"./el-loading.862b49b1.js";import{E}from"./el-pagination.29484a83.js";import{E as L}from"./el-input.636fea0c.js";/* empty css               */import"./el-select.08252aa4.js";/* empty css                     */import{E as P,a as S}from"./el-table-column.e11a9820.js";import"./el-checkbox.06080c83.js";import"./el-tooltip.0ca4bad9.js";import{_ as $}from"./index.a277f02d.js";import{_ as D}from"./index.a2f5898e.js";import{E as V,a as G}from"./el-form.dfbe894a.js";import"./el-form-item.3d23d1d6.js";import{E as U}from"./el-message-box.c3b903c1.js";import"./el-overlay.35c60dd0.js";import{u as A}from"./index.98b3e6b4.js";import I from"./index.e3345302.js";import"./isEqual.7dc35c5c.js";import"./event.a088884a.js";import"./index.373e7a2d.js";import"./index.e7b6630f.js";import"./validator.46eea287.js";import"./aria.7c550f1b.js";import"./index.7445af2e.js";import"./el-drawer.ea0d5586.js";import"./use-dialog.28451234.js";import"./el-dialog.0cfcc171.js";import"./index.6e8dee34.js";const B=y(" 新增部门 "),K=y(" 筛选 "),R=y("单个批量操作按钮"),q=y("批量操作按钮组1"),J=y("批量操作按钮组2"),N=y("查看职位"),O=y("编辑"),Q=y("删除"),F=a({name:"PagesExampleDepartmentList"}),H=Object.assign(F,{setup(e){const{pagination:a,getParams:v,onSizeChange:y,onCurrentChange:F,onSortChange:H}=A(),{proxy:T}=g(),W=b(),X=l({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function Y(){X.value.loading=!0;let e=v();X.value.search.title&&(e.title=X.value.search.title),T.$api.get("pages_example/department/list",{baseURL:"/mock/",params:e}).then((e=>{X.value.loading=!1,X.value.dataList=e.data.list,a.value.total=e.data.total}))}function Z(e){y(e).then((()=>Y()))}function ee(e=1){F(e).then((()=>Y()))}function ae(e,a){H(e,a).then((()=>Y()))}function le(){"router"===X.value.formMode?W.push({name:"pagesExampleGeneralDepartmentCreate"}):(X.value.formModeProps.id="",X.value.formModeProps.visible=!0)}return t((()=>{Y(),"router"===X.value.formMode&&T.$eventBus.on("get-data-list",(()=>{Y()}))})),o((()=>{"router"===X.value.formMode&&T.$eventBus.off("get-data-list")})),(e,l)=>{const t=z,o=M,v=i,g=s,b=L,y=V,A=r,F=n,H=G,te=D,oe=d,ie=$,se=P,re=S,ne=E,de=h,ue=w;return j(),u("div",null,[p(t,{title:"部门管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),p(de,null,{default:m((()=>[p(g,{type:"primary",size:"large",onClick:le},{icon:m((()=>[p(v,null,{default:m((()=>[p(o,{name:"i-ep:plus"})])),_:1})])),default:m((()=>[B])),_:1}),p(te,null,{default:m((()=>[p(H,{model:X.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:m((()=>[p(F,null,{default:m((()=>[p(A,{span:12},{default:m((()=>[p(y,{label:"部门"},{default:m((()=>[p(b,{modelValue:X.value.search.title,"onUpdate:modelValue":l[0]||(l[0]=e=>X.value.search.title=e),placeholder:"请输入部门，支持模糊查询",clearable:"",onKeydown:l[1]||(l[1]=_((e=>ee()),["enter"])),onClear:l[2]||(l[2]=e=>ee())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),p(y,null,{default:m((()=>[p(g,{type:"primary",onClick:l[3]||(l[3]=e=>ee())},{icon:m((()=>[p(v,null,{default:m((()=>[p(o,{name:"i-ep:search"})])),_:1})])),default:m((()=>[K])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),X.value.batch.enable?(j(),c(ie,{key:0,data:X.value.dataList,"selection-data":X.value.batch.selectionDataList,onCheckAll:l[4]||(l[4]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[5]||(l[5]=a=>e.$refs.table.clearSelection())},{default:m((()=>[p(g,{size:"default"},{default:m((()=>[R])),_:1}),p(oe,null,{default:m((()=>[p(g,{size:"default"},{default:m((()=>[q])),_:1}),p(g,{size:"default"},{default:m((()=>[J])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):f("v-if",!0),x((j(),c(re,{ref:"table",class:"list-table",data:X.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:ae,onSelectionChange:l[6]||(l[6]=e=>X.value.batch.selectionDataList=e)},{default:m((()=>[X.value.batch.enable?(j(),c(se,{key:0,type:"selection",width:"40"})):f("v-if",!0),p(se,{prop:"title",label:"部门"}),p(se,{label:"操作",width:"250",align:"center"},{default:m((e=>[p(g,{type:"info",size:"small",plain:"",onClick:a=>{return l=e.row,void W.push({name:"pagesExampleGeneralJobList",params:{department_id:l.id}});var l}},{default:m((()=>[N])),_:2},1032,["onClick"]),p(g,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,void("router"===X.value.formMode?W.push({name:"pagesExampleGeneralDepartmentEdit",params:{id:l.id}}):(X.value.formModeProps.id=l.id,X.value.formModeProps.visible=!0));var l}},{default:m((()=>[O])),_:2},1032,["onClick"]),p(g,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void U.confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{T.$api.post("pages_example/department/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{Y(),k.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:m((()=>[Q])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ue,X.value.loading]]),p(ne,{"current-page":C(a).page,total:C(a).total,"page-size":C(a).size,"page-sizes":C(a).sizes,layout:C(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:Z,onCurrentChange:ee},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(X.value.formMode)?(j(),c(I,{key:0,id:X.value.formModeProps.id,modelValue:X.value.formModeProps.visible,"onUpdate:modelValue":l[7]||(l[7]=e=>X.value.formModeProps.visible=e),mode:X.value.formMode,onSuccess:Y},null,8,["id","modelValue","mode"])):f("v-if",!0)])}}});"function"==typeof v&&v(H);var T=e(H,[["__scopeId","data-v-740b3c0c"]]);export{T as default};
