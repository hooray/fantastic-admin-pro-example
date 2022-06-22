
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,r as t,o as l,at as o,E as i,a5 as s,cl as r,cm as n,cn as d,f as u,h as p,w as m,e as c,m as f,bG as v,H as g,J as b,c5 as h,b as j,a0 as _,F as x,i as C,a1 as y,a8 as k,c4 as z,P as M}from"./index.f897cb43.js";/* empty css                   */import{E}from"./el-pagination.7cd86563.js";/* empty css                 *//* empty css               */import"./el-select.2a915073.js";/* empty css                     */import{E as P,a as w}from"./el-table-column.d2f71437.js";import"./el-checkbox.2aaa4b7c.js";import"./el-tooltip.0ca4bad9.js";import{_ as L}from"./index.a0d26d69.js";import{_ as S}from"./index.d9ec7ecf.js";import{E as $,a as D}from"./el-form.56ec1c81.js";import"./el-form-item.3d23d1d6.js";import{u as V}from"./usePagination.02db5f33.js";import G from"./index.ad85c10a.js";import{E as U}from"./index2.faa56537.js";import{v as A}from"./directive2.4531c015.js";import{E as B}from"./index2.d936562d.js";import"./isEqual.93ba6ab4.js";import"./index2.04ee1fac.js";import"./event2.c09267d7.js";import"./index2.a7f5b385.js";import"./validator2.fb9fc88c.js";import"./el-drawer.3d9d58c5.js";import"./index2.3d9b0528.js";import"./el-overlay.804ef1d1.js";import"./el-dialog.59346779.js";import"./index2.5922f0d8.js";import"./index.b04832d4.js";import"./aria2.dceaa135.js";const J=y(" 新增部门 "),R=y(" 筛选 "),q=y("单个批量操作按钮"),F=y("批量操作按钮组1"),H=y("批量操作按钮组2"),I=y("查看职位"),K=y("编辑"),N=y("删除"),O=a({name:"PagesExampleDepartmentList"}),Q=Object.assign(O,{setup(e){const{pagination:a,getParams:v,onSizeChange:y,onCurrentChange:O,onSortChange:Q}=V(),{proxy:T}=g(),W=b(),X=t({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function Y(){X.value.loading=!0;let e=v();X.value.search.title&&(e.title=X.value.search.title),T.$api.get("pages_example/department/list",{baseURL:"/mock/",params:e}).then((e=>{X.value.loading=!1,X.value.dataList=e.data.list,a.value.total=e.data.total}))}function Z(e){y(e).then((()=>Y()))}function ee(e=1){O(e).then((()=>Y()))}function ae(e,a){Q(e,a).then((()=>Y()))}function te(){"router"===X.value.formMode?W.push({name:"pagesExampleGeneralDepartmentCreate"}):(X.value.formModeProps.id="",X.value.formModeProps.visible=!0)}return l((()=>{Y(),"router"===X.value.formMode&&T.$eventBus.on("get-data-list",(()=>{Y()}))})),o((()=>{"router"===X.value.formMode&&T.$eventBus.off("get-data-list")})),(e,t)=>{const l=z,o=M,v=i,g=s,b=U,y=$,V=r,O=n,Q=D,le=S,oe=d,ie=L,se=P,re=w,ne=E,de=h,ue=A;return j(),u("div",null,[p(l,{title:"部门管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),p(de,null,{default:m((()=>[p(g,{type:"primary",size:"large",onClick:te},{icon:m((()=>[p(v,null,{default:m((()=>[p(o,{name:"i-ep:plus"})])),_:1})])),default:m((()=>[J])),_:1}),p(le,null,{default:m((()=>[p(Q,{model:X.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:m((()=>[p(O,null,{default:m((()=>[p(V,{span:12},{default:m((()=>[p(y,{label:"部门"},{default:m((()=>[p(b,{modelValue:X.value.search.title,"onUpdate:modelValue":t[0]||(t[0]=e=>X.value.search.title=e),placeholder:"请输入部门，支持模糊查询",clearable:"",onKeydown:t[1]||(t[1]=_((e=>ee()),["enter"])),onClear:t[2]||(t[2]=e=>ee())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),p(y,null,{default:m((()=>[p(g,{type:"primary",onClick:t[3]||(t[3]=e=>ee())},{icon:m((()=>[p(v,null,{default:m((()=>[p(o,{name:"i-ep:search"})])),_:1})])),default:m((()=>[R])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),X.value.batch.enable?(j(),c(ie,{key:0,data:X.value.dataList,"selection-data":X.value.batch.selectionDataList,onCheckAll:t[4]||(t[4]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:t[5]||(t[5]=a=>e.$refs.table.clearSelection())},{default:m((()=>[p(g,{size:"default"},{default:m((()=>[q])),_:1}),p(oe,null,{default:m((()=>[p(g,{size:"default"},{default:m((()=>[F])),_:1}),p(g,{size:"default"},{default:m((()=>[H])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):f("v-if",!0),x((j(),c(re,{ref:"table",class:"list-table",data:X.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:ae,onSelectionChange:t[6]||(t[6]=e=>X.value.batch.selectionDataList=e)},{default:m((()=>[X.value.batch.enable?(j(),c(se,{key:0,type:"selection",width:"40"})):f("v-if",!0),p(se,{prop:"title",label:"部门"}),p(se,{label:"操作",width:"250",align:"center"},{default:m((e=>[p(g,{type:"info",size:"small",plain:"",onClick:a=>{return t=e.row,void W.push({name:"pagesExampleGeneralJobList",params:{department_id:t.id}});var t}},{default:m((()=>[I])),_:2},1032,["onClick"]),p(g,{type:"primary",size:"small",plain:"",onClick:a=>{return t=e.row,void("router"===X.value.formMode?W.push({name:"pagesExampleGeneralDepartmentEdit",params:{id:t.id}}):(X.value.formModeProps.id=t.id,X.value.formModeProps.visible=!0));var t}},{default:m((()=>[K])),_:2},1032,["onClick"]),p(g,{type:"danger",size:"small",plain:"",onClick:a=>{return t=e.row,void B.confirm(`确认删除「${t.title}」吗？`,"确认信息").then((()=>{T.$api.post("pages_example/department/delete",{id:t.id},{baseURL:"/mock/"}).then((()=>{Y(),k.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var t}},{default:m((()=>[N])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ue,X.value.loading]]),p(ne,{"current-page":C(a).page,total:C(a).total,"page-size":C(a).size,"page-sizes":C(a).sizes,layout:C(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:Z,onCurrentChange:ee},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(X.value.formMode)?(j(),c(G,{key:0,id:X.value.formModeProps.id,modelValue:X.value.formModeProps.visible,"onUpdate:modelValue":t[7]||(t[7]=e=>X.value.formModeProps.visible=e),mode:X.value.formMode,onSuccess:Y},null,8,["id","modelValue","mode"])):f("v-if",!0)])}}});"function"==typeof v&&v(Q);var T=e(Q,[["__scopeId","data-v-3a8d350a"]]);export{T as default};
