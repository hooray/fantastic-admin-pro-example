
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,r as t,o as l,aw as o,E as i,a6 as s,cn as r,co as d,cp as n,f as m,h as p,w as u,e as c,m as f,bI as g,I as v,J as b,K as h,c6 as _,c7 as j,b as x,a1 as C,G as k,i as y,a2 as z,a9 as M,Q as w}from"./index.8029e3e3.js";import{v as E}from"./el-loading.862b49b1.js";import{E as L}from"./el-pagination.29484a83.js";import{E as $}from"./el-input.636fea0c.js";/* empty css               */import"./el-select.08252aa4.js";/* empty css                     */import{E as P,a as S}from"./el-table-column.e11a9820.js";import"./el-checkbox.06080c83.js";import"./el-tooltip.0ca4bad9.js";import{_ as V}from"./index.a277f02d.js";import{_ as U}from"./index.a2f5898e.js";import{E as D,a as J}from"./el-form.dfbe894a.js";import"./el-form-item.3d23d1d6.js";import{E as A}from"./el-message-box.c3b903c1.js";import"./el-overlay.35c60dd0.js";import{u as G}from"./index.98b3e6b4.js";import I from"./index.cc9c6851.js";import"./isEqual.7dc35c5c.js";import"./event.a088884a.js";import"./index.373e7a2d.js";import"./index.e7b6630f.js";import"./validator.46eea287.js";import"./aria.7c550f1b.js";import"./index.7445af2e.js";import"./el-drawer.ea0d5586.js";import"./use-dialog.28451234.js";import"./el-dialog.0cfcc171.js";import"./index.7d42249f.js";const R=z(" 返回 "),B=z(" 新增职位 "),K=z(" 筛选 "),q=z("单个批量操作按钮"),N=z("批量操作按钮组1"),O=z("批量操作按钮组2"),Q=z("编辑"),F=z("删除"),H=a({name:"PagesExampleDepartmentJobList"}),T=Object.assign(H,{setup(e){const{pagination:a,getParams:g,onSizeChange:z,onCurrentChange:H,onSortChange:T}=G(),{proxy:W}=v(),X=b(),Y=h(),Z=t({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[],department:""});function ee(){Z.value.loading=!0;let e=g();e.department_id=X.params.department_id,Z.value.search.title&&(e.title=Z.value.search.title),W.$api.get("pages_example/job/list",{baseURL:"/mock/",params:e}).then((e=>{Z.value.loading=!1,Z.value.dataList=e.data.list,a.value.total=e.data.total}))}function ae(e){z(e).then((()=>ee()))}function te(e=1){H(e).then((()=>ee()))}function le(e,a){T(e,a).then((()=>ee()))}function oe(){"router"===Z.value.formMode?Y.push({name:"pagesExampleGeneralJobCreate",params:{department_id:X.params.department_id}}):(Z.value.formModeProps.id="",Z.value.formModeProps.visible=!0)}return l((()=>{W.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:X.params.department_id}}).then((e=>{Z.value.department=e.data.title})),ee(),"router"===Z.value.formMode&&W.$eventBus.on("get-data-list",(()=>{ee()}))})),o((()=>{"router"===Z.value.formMode&&W.$eventBus.off("get-data-list")})),(e,t)=>{const l=w,o=i,g=s,v=_,b=$,h=D,z=r,G=d,H=J,T=U,ie=n,se=V,re=P,de=S,ne=L,me=j,pe=E;return x(),m("div",null,[p(v,{title:`「${Z.value.department}」职位管理`,content:"页面数据为 Mock 示例数据，非真实数据。"},{default:u((()=>[p(g,{size:"small",round:"",onClick:t[0]||(t[0]=a=>e.$router.go(-1))},{icon:u((()=>[p(o,null,{default:u((()=>[p(l,{name:"i-ep:arrow-left"})])),_:1})])),default:u((()=>[R])),_:1})])),_:1},8,["title"]),p(me,null,{default:u((()=>[p(g,{type:"primary",size:"large",onClick:oe},{icon:u((()=>[p(o,null,{default:u((()=>[p(l,{name:"i-ep:plus"})])),_:1})])),default:u((()=>[B])),_:1}),p(T,null,{default:u((()=>[p(H,{model:Z.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:u((()=>[p(G,null,{default:u((()=>[p(z,{span:12},{default:u((()=>[p(h,{label:"职位"},{default:u((()=>[p(b,{modelValue:Z.value.search.title,"onUpdate:modelValue":t[1]||(t[1]=e=>Z.value.search.title=e),placeholder:"请输入职位名称，支持模糊查询",clearable:"",onKeydown:t[2]||(t[2]=C((e=>te()),["enter"])),onClear:t[3]||(t[3]=e=>te())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),p(h,null,{default:u((()=>[p(g,{type:"primary",onClick:t[4]||(t[4]=e=>te())},{icon:u((()=>[p(o,null,{default:u((()=>[p(l,{name:"i-ep:search"})])),_:1})])),default:u((()=>[K])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),Z.value.batch.enable?(x(),c(se,{key:0,data:Z.value.dataList,"selection-data":Z.value.batch.selectionDataList,onCheckAll:t[5]||(t[5]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:t[6]||(t[6]=a=>e.$refs.table.clearSelection())},{default:u((()=>[p(g,{size:"default"},{default:u((()=>[q])),_:1}),p(ie,null,{default:u((()=>[p(g,{size:"default"},{default:u((()=>[N])),_:1}),p(g,{size:"default"},{default:u((()=>[O])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):f("v-if",!0),k((x(),c(de,{ref:"table",class:"list-table",data:Z.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:le,onSelectionChange:t[7]||(t[7]=e=>Z.value.batch.selectionDataList=e)},{default:u((()=>[Z.value.batch.enable?(x(),c(re,{key:0,type:"selection",width:"40"})):f("v-if",!0),p(re,{prop:"title",label:"职位"}),p(re,{label:"操作",width:"250",align:"center"},{default:u((e=>[p(g,{type:"primary",size:"small",plain:"",onClick:a=>{return t=e.row,void("router"===Z.value.formMode?Y.push({name:"pagesExampleGeneralJobEdit",params:{id:t.id,department_id:X.params.department_id}}):(Z.value.formModeProps.id=t.id,Z.value.formModeProps.visible=!0));var t}},{default:u((()=>[Q])),_:2},1032,["onClick"]),p(g,{type:"danger",size:"small",plain:"",onClick:a=>{return t=e.row,void A.confirm(`确认删除「${t.title}」吗？`,"确认信息").then((()=>{W.$api.post("pages_example/job/delete",{id:t.id},{baseURL:"/mock/"}).then((()=>{ee(),M.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var t}},{default:u((()=>[F])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[pe,Z.value.loading]]),p(ne,{"current-page":y(a).page,total:y(a).total,"page-size":y(a).size,"page-sizes":y(a).sizes,layout:y(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:ae,onCurrentChange:te},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(Z.value.formMode)?(x(),c(I,{key:0,id:Z.value.formModeProps.id,modelValue:Z.value.formModeProps.visible,"onUpdate:modelValue":t[8]||(t[8]=e=>Z.value.formModeProps.visible=e),"department-id":e.$route.params.department_id,mode:Z.value.formMode,onSuccess:ee},null,8,["id","modelValue","department-id","mode"])):f("v-if",!0)])}}});"function"==typeof g&&g(T);var W=e(T,[["__scopeId","data-v-7dc376f2"]]);export{W as default};
