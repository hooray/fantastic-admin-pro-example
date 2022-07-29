
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,r as l,c as a,cL as t,b as i,f as d,H as o,I as s,e as n,w as u,h as r,m as p,N as c,Z as f,Y as m,M as b,G as y,i as _,a4 as v,co as k,a7 as h,cp as g,O as w,P as V}from"./index.3b0b287f.js";import{E as x}from"./el-dialog.72e8f0e2.js";import"./el-overlay.12ffbf5c.js";/* empty css                          */import{E as j,a as L}from"./el-checkbox.583cc7e2.js";/* empty css                       *//* empty css                        */import{E as C,a as U}from"./el-table-column.d3b3c922.js";/* empty css               */import"./el-tooltip.89296c46.js";import{E as z}from"./el-input.a46c7a98.js";import{E}from"./index.b5881ee8.js";import{E as R,a as $}from"./index.ad1f103b.js";import"./use-dialog.22735af1.js";import"./event.d298a7ab.js";import"./index.76b99d0a.js";import"./index.4e3493cb.js";const A=e=>(w("data-v-632c9598"),e=e(),V(),e),I={key:0},N=m("编 辑"),O={key:0},B={key:0},G={key:0},H={key:0},M=m("删 除"),P=A((()=>y("span",null,null,-1))),Y={key:0,style:{padding:"10px"}},Z=m("新增一条运费模版"),q=m("为指定地区设置运费模版"),D={class:"filter"},F=m("全部"),J=m("华北地区"),K=m("东北地区"),Q=m("华东地区"),S=m("华中地区"),T=m("华南地区"),W=m("西南地区"),X=m("西北地区"),ee=m("自治区"),le=m("直辖市"),ae=m("确 定"),te=e({__name:"index",props:{readonly:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},type:{type:Number,default:1}},emits:["update:data"],setup(e,{emit:w}){const V=e,A=l({index:"",visible:!1,filter:"",checkList:[],disableList:[]}),te=a((()=>{let e;switch(A.value.filter){case"":e=t;break;case"autonomousRegion":e=t.filter((e=>e.autonomousRegion));break;case"provinceLevelCity":e=t.filter((e=>e.provinceLevelCity));break;default:e=t.filter((e=>e.region==A.value.filter))}return e}));function ie(){A.value.index="",A.value.checkList=[],A.value.disableList=oe(),A.value.visible=!0}function de(e){let l="";for(const a in t)t[a].code===e&&(l=t[a].name);return l}function oe(e){let l=[];for(let a=0;a<V.data.length;a++)e!==a&&(l=l.concat(V.data[a].list));return l}return(l,a)=>{const t=E,se=k,ne=h,ue=g,re=C,pe=z,ce=U,fe=R,me=$,be=j,ye=L,_e=x;return i(),d("div",null,[e.readonly&&0==e.data.length?p("v-if",!0):o((i(),n(ce,{key:0,data:e.data,border:"",class:"freight"},{empty:u((()=>[P])),append:u((()=>[e.readonly?p("v-if",!0):(i(),d("div",Y,[r(ne,{type:"primary",size:"small",plain:"",style:{width:"100%"},onClick:ie},{default:u((()=>[Z])),_:1})]))])),default:u((()=>[r(re,{label:"运送到"},{default:u((l=>[e.readonly?(i(),d("div",I,[(i(!0),d(c,null,f(l.row.list,((e,l)=>(i(),n(t,{key:l,type:"info"},{default:u((()=>[m(b(de(e)),1)])),_:2},1024)))),128))])):(i(),n(ue,{key:1,type:"flex",align:"middle",justify:"space-between"},{default:u((()=>[r(se,null,{default:u((()=>[(i(!0),d(c,null,f(l.row.list,((e,a)=>(i(),n(t,{key:a,"disable-transitions":!0,type:"info",closable:"",onClose:a=>function(e,l){let a=V.data;a[e].list.splice(a[e].list.indexOf(l),1),0===a[e].list.length&&a.splice(e,1),w("update:data",a)}(l.$index,e)},{default:u((()=>[m(b(de(e)),1)])),_:2},1032,["onClose"])))),128))])),_:2},1024),r(se,{style:{width:"100px","text-align":"right"}},{default:u((()=>[r(ne,{size:"small",plain:"",onClick:e=>{return a=l.$index,A.value.index=a,A.value.checkList=V.data[a].list,A.value.disableList=oe(a),void(A.value.visible=!0);var a}},{default:u((()=>[N])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024))])),_:1}),r(re,{label:1==e.type?"首件数（件）":"首重量（kg）",width:"150",align:"center"},{default:u((l=>[e.readonly?(i(),d("span",O,b(l.row.first_step),1)):(i(),n(pe,{key:1,modelValue:l.row.first_step,"onUpdate:modelValue":e=>l.row.first_step=e,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1},8,["label"]),r(re,{label:"首费（元）",width:"150",align:"center"},{default:u((l=>[e.readonly?(i(),d("span",B,b(l.row.first_price),1)):(i(),n(pe,{key:1,modelValue:l.row.first_price,"onUpdate:modelValue":e=>l.row.first_price=e,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1}),r(re,{label:1==e.type?"续件数（件）":"续重量（kg）",width:"150",align:"center"},{default:u((l=>[e.readonly?(i(),d("span",G,b(l.row.continued_step),1)):(i(),n(pe,{key:1,modelValue:l.row.continued_step,"onUpdate:modelValue":e=>l.row.continued_step=e,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1},8,["label"]),r(re,{label:"续费（元）",width:"150",align:"center"},{default:u((l=>[e.readonly?(i(),d("span",H,b(l.row.continued_price),1)):(i(),n(pe,{key:1,modelValue:l.row.continued_price,"onUpdate:modelValue":e=>l.row.continued_price=e,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1}),e.readonly?p("v-if",!0):(i(),n(re,{key:0,label:"操作",width:"100",align:"center"},{default:u((e=>[r(ne,{type:"danger",size:"small",plain:"",onClick:l=>function(e){let l=V.data;l.splice(e,1),w("update:data",l)}(e.$index)},{default:u((()=>[M])),_:2},1032,["onClick"])])),_:1}))])),_:1},8,["data"])),[[s,0!=e.data.length]]),e.readonly?p("v-if",!0):o((i(),n(ne,{key:1,type:"primary",size:"default",plain:"",onClick:ie},{default:u((()=>[q])),_:1},512)),[[s,0==e.data.length]]),r(_e,{modelValue:A.value.visible,"onUpdate:modelValue":a[3]||(a[3]=e=>A.value.visible=e),title:"选择地区",width:"800px","custom-class":"freight-dialog","append-to-body":"",onClosed:a[4]||(a[4]=e=>A.value.filter="")},{footer:u((()=>[r(ne,{type:"primary",onClick:a[2]||(a[2]=e=>function(e){if(0===A.value.checkList.length)v({message:"请勾选区域",type:"warning"});else{let l=V.data;""!==e?l[e].list=A.value.checkList:l.push({list:A.value.checkList,first_step:"",first_price:"",continued_step:"",continued_price:""}),w("update:data",l),A.value.visible=!1}}(A.value.index))},{default:u((()=>[ae])),_:1})])),default:u((()=>[y("div",D,[r(me,{modelValue:A.value.filter,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value.filter=e),size:"small"},{default:u((()=>[r(fe,{label:""},{default:u((()=>[F])),_:1}),r(fe,{label:"north"},{default:u((()=>[J])),_:1}),r(fe,{label:"northeast"},{default:u((()=>[K])),_:1}),r(fe,{label:"east"},{default:u((()=>[Q])),_:1}),r(fe,{label:"central"},{default:u((()=>[S])),_:1}),r(fe,{label:"south"},{default:u((()=>[T])),_:1}),r(fe,{label:"southwest"},{default:u((()=>[W])),_:1}),r(fe,{label:"northwest"},{default:u((()=>[X])),_:1}),r(fe,{label:"autonomousRegion"},{default:u((()=>[ee])),_:1}),r(fe,{label:"provinceLevelCity"},{default:u((()=>[le])),_:1})])),_:1},8,["modelValue"])]),r(ye,{modelValue:A.value.checkList,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value.checkList=e),style:{"margin-left":"50px"}},{default:u((()=>[r(ue,null,{default:u((()=>[(i(!0),d(c,null,f(_(te),((e,l)=>(i(),n(se,{key:l,span:6},{default:u((()=>[r(be,{label:e.code,disabled:A.value.disableList.includes(e.code)},{default:u((()=>[m(b(e.name),1)])),_:2},1032,["label","disabled"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-632c9598"]]);export{te as default};
