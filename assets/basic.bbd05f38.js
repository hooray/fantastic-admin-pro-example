
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,E as t,a7 as a,cD as l,bR as s,f as i,h as o,w as r,bP as d,bQ as n,b as c,X as m,Y as p,bT as u,L as f}from"./index.503ec71c.js";import{E as b}from"./el-pagination.84ff9815.js";import{E as g}from"./el-input.546a1988.js";/* empty css               */import"./el-select.4f8133b7.js";import{E as h,a as _}from"./el-table-column.94c15b7c.js";import"./el-checkbox.3039836e.js";import"./el-tooltip.89296c46.js";import{_ as j}from"./index.1510164b.js";import{E as y,a as x}from"./el-form.b1df7afc.js";import"./el-form-item.2e22de35.js";import"./isEqual.add373df.js";import"./event.d298a7ab.js";import"./index.5948ef3f.js";import"./index.7447623d.js";import"./validator.efd22e96.js";const C={data:()=>({search:{title:""},dataList:[{id:1,title:"标题1"},{id:2,title:"标题2"},{id:3,title:"标题3"},{id:4,title:"标题4"},{id:5,title:"标题5"},{id:6,title:"标题6"},{id:7,title:"标题7"},{id:8,title:"标题8"},{id:9,title:"标题9"},{id:10,title:"标题10"}]}),methods:{getDataList(){this.$message.success({message:"你点击了筛选",center:!0})},onCreate(){this.$message.success({message:"你点击了新增",center:!0})},onEdit(){this.$message.success({message:"你点击了编辑",center:!0})},onDel(e){this.$confirm(`确认删除「${e.title}」吗？`,"确认信息").then((()=>{this.$message.success({message:"你点击了删除",center:!0})})).catch((()=>{}))}}},k=p(" 新增 "),w=p(" 筛选 "),E=p("编辑"),D=p("删除");"function"==typeof d&&d(C);const L=e(C,[["render",function(e,d,p,C,L,$){const v=u,z=f,V=t,K=a,q=g,A=y,I=l,P=s,Q=x,R=j,T=h,U=_,X=b,Y=n;return c(),i("div",null,[o(v,{title:"基础列表",content:"最常见的列表展示形式，包含增删改查等基础操作。"}),o(Y,null,{default:r((()=>[o(K,{type:"primary",size:"large"},{icon:r((()=>[o(V,null,{default:r((()=>[o(z,{name:"i-ep:plus"})])),_:1})])),default:r((()=>[k])),_:1}),o(R,null,{default:r((()=>[o(Q,{model:L.search,size:"default","label-width":"100px","label-suffix":"："},{default:r((()=>[o(P,null,{default:r((()=>[o(I,{span:12},{default:r((()=>[o(A,{label:"名称"},{default:r((()=>[o(q,{modelValue:L.search.title,"onUpdate:modelValue":d[0]||(d[0]=e=>L.search.title=e),placeholder:"请输入名称，支持模糊查询",clearable:"",onKeydown:m($.getDataList,["enter"]),onClear:$.getDataList},null,8,["modelValue","onKeydown","onClear"])])),_:1})])),_:1})])),_:1}),o(A,null,{default:r((()=>[o(K,{type:"primary",onClick:$.getDataList},{icon:r((()=>[o(V,null,{default:r((()=>[o(z,{name:"i-ep:search"})])),_:1})])),default:r((()=>[w])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1}),o(U,{ref:"table",class:"list-table",data:L.dataList,border:"",stripe:"","highlight-current-row":""},{default:r((()=>[o(T,{prop:"title",label:"名称"}),o(T,{label:"操作",width:"200",align:"center"},{default:r((e=>[o(K,{type:"primary",size:"small",plain:"",onClick:t=>$.onEdit(e.row)},{default:r((()=>[E])),_:2},1032,["onClick"]),o(K,{type:"danger",size:"small",plain:"",onClick:t=>$.onDel(e.row)},{default:r((()=>[D])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o(X,{total:100,layout:"total, sizes, ->, prev, pager, next, jumper",background:""})])),_:1})])}],["__scopeId","data-v-384ba7b1"]]);export{L as default};