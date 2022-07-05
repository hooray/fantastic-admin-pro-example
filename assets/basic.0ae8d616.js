
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,E as t,a6 as a,cn as l,co as s,f as i,h as o,w as r,bI as d,c7 as n,b as c,a1 as m,a2 as p,c6 as u,Q as f}from"./index.8029e3e3.js";import{E as g}from"./el-pagination.29484a83.js";import{E as h}from"./el-input.636fea0c.js";/* empty css               */import"./el-select.08252aa4.js";/* empty css                     */import{E as b,a as j}from"./el-table-column.e11a9820.js";import"./el-checkbox.06080c83.js";import"./el-tooltip.0ca4bad9.js";import{_}from"./index.a2f5898e.js";import{E as y,a as x}from"./el-form.dfbe894a.js";import"./el-form-item.3d23d1d6.js";import"./isEqual.7dc35c5c.js";import"./event.a088884a.js";import"./index.373e7a2d.js";import"./index.e7b6630f.js";import"./validator.46eea287.js";const C={data:()=>({search:{title:""},dataList:[{id:1,title:"标题1"},{id:2,title:"标题2"},{id:3,title:"标题3"},{id:4,title:"标题4"},{id:5,title:"标题5"},{id:6,title:"标题6"},{id:7,title:"标题7"},{id:8,title:"标题8"},{id:9,title:"标题9"},{id:10,title:"标题10"}]}),methods:{getDataList(){this.$message.success({message:"你点击了筛选",center:!0})},onCreate(){this.$message.success({message:"你点击了新增",center:!0})},onEdit(){this.$message.success({message:"你点击了编辑",center:!0})},onDel(e){this.$confirm(`确认删除「${e.title}」吗？`,"确认信息").then((()=>{this.$message.success({message:"你点击了删除",center:!0})})).catch((()=>{}))}}},k=p(" 新增 "),w=p(" 筛选 "),E=p("编辑"),v=p("删除");"function"==typeof d&&d(C);var D=e(C,[["render",function(e,d,p,C,D,L){const $=u,z=f,V=t,I=a,K=h,q=y,A=l,Q=s,U=x,B=_,F=b,G=j,H=g,J=n;return c(),i("div",null,[o($,{title:"基础列表",content:"最常见的列表展示形式，包含增删改查等基础操作。"}),o(J,null,{default:r((()=>[o(I,{type:"primary",size:"large"},{icon:r((()=>[o(V,null,{default:r((()=>[o(z,{name:"i-ep:plus"})])),_:1})])),default:r((()=>[k])),_:1}),o(B,null,{default:r((()=>[o(U,{model:D.search,size:"default","label-width":"100px","label-suffix":"："},{default:r((()=>[o(Q,null,{default:r((()=>[o(A,{span:12},{default:r((()=>[o(q,{label:"名称"},{default:r((()=>[o(K,{modelValue:D.search.title,"onUpdate:modelValue":d[0]||(d[0]=e=>D.search.title=e),placeholder:"请输入名称，支持模糊查询",clearable:"",onKeydown:m(L.getDataList,["enter"]),onClear:L.getDataList},null,8,["modelValue","onKeydown","onClear"])])),_:1})])),_:1})])),_:1}),o(q,null,{default:r((()=>[o(I,{type:"primary",onClick:L.getDataList},{icon:r((()=>[o(V,null,{default:r((()=>[o(z,{name:"i-ep:search"})])),_:1})])),default:r((()=>[w])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1}),o(G,{ref:"table",class:"list-table",data:D.dataList,border:"",stripe:"","highlight-current-row":""},{default:r((()=>[o(F,{prop:"title",label:"名称"}),o(F,{label:"操作",width:"200",align:"center"},{default:r((e=>[o(I,{type:"primary",size:"small",plain:"",onClick:t=>L.onEdit(e.row)},{default:r((()=>[E])),_:2},1032,["onClick"]),o(I,{type:"danger",size:"small",plain:"",onClick:t=>L.onDel(e.row)},{default:r((()=>[v])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o(H,{total:100,layout:"total, sizes, ->, prev, pager, next, jumper",background:""})])),_:1})])}],["__scopeId","data-v-0d1e5882"]]);export{D as default};