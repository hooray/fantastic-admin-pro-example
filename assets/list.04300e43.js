
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,r as t,o as l,at as o,E as i,a5 as s,cl as r,cm as d,cn as n,f as u,h as m,w as p,e as c,m as f,bG as b,H as v,J as g,c5 as h,b as j,a0 as _,F as x,i as y,a1 as C,a8 as k,c4 as z,P as w}from"./index.f897cb43.js";/* empty css                   */import{E as M}from"./el-pagination.7cd86563.js";/* empty css                 *//* empty css               */import"./el-select.2a915073.js";/* empty css                     */import{E,a as P}from"./el-table-column.d2f71437.js";import"./el-checkbox.2aaa4b7c.js";import"./el-tooltip.0ca4bad9.js";import{E as L}from"./el-switch.99d6bbf0.js";import{_ as $}from"./index.a0d26d69.js";import{_ as S}from"./index.d9ec7ecf.js";import{E as V,a as U}from"./el-form.56ec1c81.js";import"./el-form-item.3d23d1d6.js";import"./el-overlay.804ef1d1.js";import{u as D}from"./usePagination.02db5f33.js";import R from"./index.0b457366.js";import{E as A}from"./index2.faa56537.js";import{v as B}from"./directive2.4531c015.js";import{E as F}from"./index2.d936562d.js";import"./isEqual.93ba6ab4.js";import"./index2.04ee1fac.js";import"./event2.c09267d7.js";import"./index2.a7f5b385.js";import"./validator2.fb9fc88c.js";import"./index2.3d9b0528.js";import"./el-drawer.3d9d58c5.js";import"./el-dialog.59346779.js";import"./index2.5922f0d8.js";import"./index.ec7d5ff6.js";import"./el-card.d871f845.js";/* empty css                       *//* empty css                        */import"./index.cecb6f38.js";/* empty css                 */import"./index2.92fb4303.js";import"./aria2.dceaa135.js";import"./arrays2.9d0dd0a1.js";import"./_baseFlatten.51da63e8.js";import"./index.e2fb50d7.js";/* empty css                          */const q=C(" 新增运费模版 "),G=C(" 筛选 "),H=C("单个批量操作按钮"),I=C("批量操作按钮组1"),J=C("批量操作按钮组2"),K=C("编辑"),N=C("删除"),O=a({name:"PagesExampleDeliveryList"}),Q=Object.assign(O,{setup(e){const{pagination:a,getParams:b,onSizeChange:C,onCurrentChange:O,onSortChange:Q}=D(),{proxy:T}=v(),W=g(),X=t({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function Y(){X.value.loading=!0;let e=b();X.value.search.title&&(e.title=X.value.search.title),T.$api.get("pages_example/delivery/list",{baseURL:"/mock/",params:e}).then((e=>{X.value.loading=!1,X.value.dataList=e.data.list,a.value.total=e.data.total}))}function Z(e){C(e).then((()=>Y()))}function ee(e=1){O(e).then((()=>Y()))}function ae(e,a){Q(e,a).then((()=>Y()))}function te(){"router"===X.value.formMode?W.push({name:"pagesExampleShopDeliveryCreate"}):(X.value.formModeProps.id="",X.value.formModeProps.visible=!0)}return l((()=>{Y(),"router"===X.value.formMode&&T.$eventBus.on("get-data-list",(()=>{Y()}))})),o((()=>{"router"===X.value.formMode&&T.$eventBus.off("get-data-list")})),(e,t)=>{const l=z,o=w,b=i,v=s,g=A,C=V,D=r,O=d,Q=U,le=S,oe=n,ie=$,se=E,re=L,de=P,ne=M,ue=h,me=B;return j(),u("div",null,[m(l,{title:"运费模版管理"}),m(ue,null,{default:p((()=>[m(v,{type:"primary",size:"large",onClick:te},{icon:p((()=>[m(b,null,{default:p((()=>[m(o,{name:"i-ep:plus"})])),_:1})])),default:p((()=>[q])),_:1}),m(le,null,{default:p((()=>[m(Q,{model:X.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:p((()=>[m(O,null,{default:p((()=>[m(D,{span:12},{default:p((()=>[m(C,{label:"模版名称"},{default:p((()=>[m(g,{modelValue:X.value.search.title,"onUpdate:modelValue":t[0]||(t[0]=e=>X.value.search.title=e),placeholder:"请输入模版名称，支持模糊查询",clearable:"",onKeydown:t[1]||(t[1]=_((e=>ee()),["enter"])),onClear:t[2]||(t[2]=e=>ee())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(C,null,{default:p((()=>[m(v,{type:"primary",onClick:t[3]||(t[3]=e=>ee())},{icon:p((()=>[m(b,null,{default:p((()=>[m(o,{name:"i-ep:search"})])),_:1})])),default:p((()=>[G])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),X.value.batch.enable?(j(),c(ie,{key:0,data:e.dataList,"selection-data":X.value.batch.selectionDataList,onCheckAll:t[4]||(t[4]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:t[5]||(t[5]=a=>e.$refs.table.clearSelection())},{default:p((()=>[m(v,{size:"default"},{default:p((()=>[H])),_:1}),m(oe,null,{default:p((()=>[m(v,{size:"default"},{default:p((()=>[I])),_:1}),m(v,{size:"default"},{default:p((()=>[J])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):f("v-if",!0),x((j(),c(de,{ref:"table",class:"list-table",data:X.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:ae,onSelectionChange:t[6]||(t[6]=e=>X.value.batch.selectionDataList=e)},{default:p((()=>[X.value.batch.enable?(j(),c(se,{key:0,type:"selection",width:"40"})):f("v-if",!0),m(se,{prop:"title",label:"模版名称"}),m(se,{label:"开启状态",width:"100",align:"center"},{default:p((e=>[m(re,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,onChange:a=>{return t=a,l=e.row,void F.confirm(`确认${t?"启用":"停用"}「${l.title}」运费模版吗？`,"确认信息").then((()=>{T.$api.post("pages_example/delivery/change/status",{id:l.id,status:t},{baseURL:"/mock/"}).then((()=>{k.success({message:`模拟${t?"启用":"停用"}成功`,center:!0})}))})).catch((()=>{l.status=!t}));var t,l}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),m(se,{label:"操作",width:"250",align:"center"},{default:p((e=>[m(v,{type:"primary",size:"small",plain:"",onClick:a=>{return t=e.row,void("router"===X.value.formMode?W.push({name:"pagesExampleShopDeliveryEdit",params:{id:t.id}}):(X.value.formModeProps.id=t.id,X.value.formModeProps.visible=!0));var t}},{default:p((()=>[K])),_:2},1032,["onClick"]),m(v,{type:"danger",size:"small",plain:"",onClick:a=>{return t=e.row,void F.confirm(`确认删除「${t.title}」吗？`,"确认信息").then((()=>{T.$api.post("pages_example/delivery/delete",{id:t.id},{baseURL:"/mock/"}).then((()=>{Y(),k.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var t}},{default:p((()=>[N])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[me,X.value.loading]]),m(ne,{"current-page":y(a).page,total:y(a).total,"page-size":y(a).size,"page-sizes":y(a).sizes,layout:y(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:Z,onCurrentChange:ee},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(X.value.formMode)?(j(),c(R,{key:0,id:X.value.formModeProps.id,modelValue:X.value.formModeProps.visible,"onUpdate:modelValue":t[7]||(t[7]=e=>X.value.formModeProps.visible=e),mode:X.value.formMode,onSuccess:Y},null,8,["id","modelValue","mode"])):f("v-if",!0)])}}});"function"==typeof b&&b(Q);var T=e(Q,[["__scopeId","data-v-b5a89b6c"]]);export{T as default};
