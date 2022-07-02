
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,r as t,o as l,av as o,E as i,a5 as s,cm as r,cn as d,co as n,f as m,h as u,w as p,e as f,m as c,bH as b,H as g,I as v,J as h,c5 as _,c6 as j,b as x,a0 as C,F as k,i as y,a1 as z,a8 as M,P}from"./index.5043a866.js";import{v as w}from"./el-loading.884e109c.js";import{E}from"./el-pagination.82327163.js";import{E as L}from"./el-input.47be8b34.js";/* empty css               */import"./el-select.475a3ba1.js";/* empty css                     */import{E as $,a as S}from"./el-table-column.405b0233.js";import"./el-checkbox.81ab801f.js";import"./el-tooltip.0ca4bad9.js";import{_ as V}from"./index.cac271ab.js";import{_ as U}from"./index.b3b26a1a.js";import{E as D,a as J}from"./el-form.90522072.js";import"./el-form-item.3d23d1d6.js";import{E as R}from"./el-message-box.10f119d9.js";import"./el-overlay.98ff6c7a.js";import{u as A}from"./usePagination.9156da6c.js";import B from"./index.a25f1864.js";import"./isEqual.4c229d6b.js";import"./event.a088884a.js";import"./index.0f8635d0.js";import"./index.96296712.js";import"./validator.d3f16460.js";import"./aria.7c550f1b.js";import"./index.72f397d2.js";import"./el-drawer.99160fcf.js";import"./use-dialog.fec8b844.js";import"./el-dialog.7e5f8960.js";import"./index.0b481f33.js";const G=z(" 返回 "),H=z(" 新增职位 "),I=z(" 筛选 "),q=z("单个批量操作按钮"),F=z("批量操作按钮组1"),K=z("批量操作按钮组2"),N=z("编辑"),O=z("删除"),Q=a({name:"PagesExampleDepartmentJobList"}),T=Object.assign(Q,{setup(e){const{pagination:a,getParams:b,onSizeChange:z,onCurrentChange:Q,onSortChange:T}=A(),{proxy:W}=g(),X=v(),Y=h(),Z=t({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[],department:""});function ee(){Z.value.loading=!0;let e=b();e.department_id=X.params.department_id,Z.value.search.title&&(e.title=Z.value.search.title),W.$api.get("pages_example/job/list",{baseURL:"/mock/",params:e}).then((e=>{Z.value.loading=!1,Z.value.dataList=e.data.list,a.value.total=e.data.total}))}function ae(e){z(e).then((()=>ee()))}function te(e=1){Q(e).then((()=>ee()))}function le(e,a){T(e,a).then((()=>ee()))}function oe(){"router"===Z.value.formMode?Y.push({name:"pagesExampleGeneralJobCreate",params:{department_id:X.params.department_id}}):(Z.value.formModeProps.id="",Z.value.formModeProps.visible=!0)}return l((()=>{W.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:X.params.department_id}}).then((e=>{Z.value.department=e.data.title})),ee(),"router"===Z.value.formMode&&W.$eventBus.on("get-data-list",(()=>{ee()}))})),o((()=>{"router"===Z.value.formMode&&W.$eventBus.off("get-data-list")})),(e,t)=>{const l=P,o=i,b=s,g=_,v=L,h=D,z=r,A=d,Q=J,T=U,ie=n,se=V,re=$,de=S,ne=E,me=j,ue=w;return x(),m("div",null,[u(g,{title:`「${Z.value.department}」职位管理`,content:"页面数据为 Mock 示例数据，非真实数据。"},{default:p((()=>[u(b,{size:"small",round:"",onClick:t[0]||(t[0]=a=>e.$router.go(-1))},{icon:p((()=>[u(o,null,{default:p((()=>[u(l,{name:"i-ep:arrow-left"})])),_:1})])),default:p((()=>[G])),_:1})])),_:1},8,["title"]),u(me,null,{default:p((()=>[u(b,{type:"primary",size:"large",onClick:oe},{icon:p((()=>[u(o,null,{default:p((()=>[u(l,{name:"i-ep:plus"})])),_:1})])),default:p((()=>[H])),_:1}),u(T,null,{default:p((()=>[u(Q,{model:Z.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:p((()=>[u(A,null,{default:p((()=>[u(z,{span:12},{default:p((()=>[u(h,{label:"职位"},{default:p((()=>[u(v,{modelValue:Z.value.search.title,"onUpdate:modelValue":t[1]||(t[1]=e=>Z.value.search.title=e),placeholder:"请输入职位名称，支持模糊查询",clearable:"",onKeydown:t[2]||(t[2]=C((e=>te()),["enter"])),onClear:t[3]||(t[3]=e=>te())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(h,null,{default:p((()=>[u(b,{type:"primary",onClick:t[4]||(t[4]=e=>te())},{icon:p((()=>[u(o,null,{default:p((()=>[u(l,{name:"i-ep:search"})])),_:1})])),default:p((()=>[I])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),Z.value.batch.enable?(x(),f(se,{key:0,data:Z.value.dataList,"selection-data":Z.value.batch.selectionDataList,onCheckAll:t[5]||(t[5]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:t[6]||(t[6]=a=>e.$refs.table.clearSelection())},{default:p((()=>[u(b,{size:"default"},{default:p((()=>[q])),_:1}),u(ie,null,{default:p((()=>[u(b,{size:"default"},{default:p((()=>[F])),_:1}),u(b,{size:"default"},{default:p((()=>[K])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):c("v-if",!0),k((x(),f(de,{ref:"table",class:"list-table",data:Z.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:le,onSelectionChange:t[7]||(t[7]=e=>Z.value.batch.selectionDataList=e)},{default:p((()=>[Z.value.batch.enable?(x(),f(re,{key:0,type:"selection",width:"40"})):c("v-if",!0),u(re,{prop:"title",label:"职位"}),u(re,{label:"操作",width:"250",align:"center"},{default:p((e=>[u(b,{type:"primary",size:"small",plain:"",onClick:a=>{return t=e.row,void("router"===Z.value.formMode?Y.push({name:"pagesExampleGeneralJobEdit",params:{id:t.id,department_id:X.params.department_id}}):(Z.value.formModeProps.id=t.id,Z.value.formModeProps.visible=!0));var t}},{default:p((()=>[N])),_:2},1032,["onClick"]),u(b,{type:"danger",size:"small",plain:"",onClick:a=>{return t=e.row,void R.confirm(`确认删除「${t.title}」吗？`,"确认信息").then((()=>{W.$api.post("pages_example/job/delete",{id:t.id},{baseURL:"/mock/"}).then((()=>{ee(),M.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var t}},{default:p((()=>[O])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ue,Z.value.loading]]),u(ne,{"current-page":y(a).page,total:y(a).total,"page-size":y(a).size,"page-sizes":y(a).sizes,layout:y(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:ae,onCurrentChange:te},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(Z.value.formMode)?(x(),f(B,{key:0,id:Z.value.formModeProps.id,modelValue:Z.value.formModeProps.visible,"onUpdate:modelValue":t[8]||(t[8]=e=>Z.value.formModeProps.visible=e),"department-id":e.$route.params.department_id,mode:Z.value.formMode,onSuccess:ee},null,8,["id","modelValue","department-id","mode"])):c("v-if",!0)])}}});"function"==typeof b&&b(T);var W=e(T,[["__scopeId","data-v-81e901b0"]]);export{W as default};