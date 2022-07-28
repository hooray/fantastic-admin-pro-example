
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,A as e,cW as l,r as o,o as a,b as s,f as r,K as i,L as n,k as u,R as p,m as c,O as d,h as f,w as v,bM as h,bO as b,bN as k}from"./index.14f3ec2e.js";function x(t,e,l,o){return parseFloat((e-o*e/t+l).toFixed(2))}function y(t){return t.value}function m(t,e){const l=document.createElementNS("http://www.w3.org/2000/svg",t);for(let o in e)l.setAttribute(o,e[o]);return l}const w={class:"sparkline"},g=["width","height","stroke-width","stroke","fill"],C=t({name:"Sparkline"}),A=e(Object.assign(C,{props:{value:{type:Array,require:!0},width:{type:Number,default:100},height:{type:Number,default:30},strokeWidth:{type:Number,default:3},strokeColor:{type:String,default:"#dc2b33"},fillColor:{type:String,default:"transparent"},cursorColor:{type:String,default:"#dc2b33"},spotColor:{type:String,default:"#dc2b33"},tooltip:{type:Boolean,default:!1}},setup(t){const e=t;l((e=>({bddc22be:t.cursorColor,"83353d16":t.spotColor})));const{proxy:f}=d(),v=o({show:!1,content:"",top:0,left:0});return a((()=>{!function(t,e,l){if(function(t){[...t.querySelectorAll("*")].forEach((e=>t.removeChild(e)))}(t),e.length<=1)return;l=l||{},"number"==typeof e[0]&&(e=e.map((t=>({value:t}))));const o=l.onmousemove,a=l.onmouseout,s="interactive"in l?l.interactive:!!o,r=l.spotRadius||2,i=2*r,n=l.cursorWidth||2,u=parseFloat(t.attributes["stroke-width"].value),p=l.fetch||y,c=e.map((t=>p(t))),d=parseFloat(t.attributes.width.value)-2*i,f=parseFloat(t.attributes.height.value),v=f-2*u-i,h=Math.max(...c),b=-1e3,k=c.length-1,w=d/k,g=[],C=x(h,v,u+r,c[0]);let A=`M${i} ${C}`;c.forEach(((t,l)=>{const o=l*w+i,a=x(h,v,u+r,t);g.push(Object.assign({},e[l],{index:l,x:o,y:a})),A+=` L ${o} ${a}`}));const $=m("path",{class:"sparkline--line",d:A,fill:"none"}),S=m("path",{class:"sparkline--fill",d:`${A} V ${f} L ${i} ${f} Z`,stroke:"none"});if(t.appendChild(S),t.appendChild($),!s)return;const E=m("line",{class:"sparkline--cursor",x1:b,x2:b,y1:0,y2:f,"stroke-width":n}),F=m("circle",{class:"sparkline--spot",cx:b,cy:b,r:r});t.appendChild(E),t.appendChild(F);const L=m("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(L),L.addEventListener("mouseout",(t=>{E.setAttribute("x1",b),E.setAttribute("x2",b),F.setAttribute("cx",b),a&&a(t)})),L.addEventListener("mousemove",(t=>{const e=t.offsetX;let l=g.find((t=>t.x>=e));l||(l=g[k]);let a,s,r=g[g.indexOf(l)-1];r?(s=r.x+(l.x-r.x)/2,a=e>=s?l:r):a=l;const i=a.x,n=a.y;F.setAttribute("cx",i),F.setAttribute("cy",n),E.setAttribute("x1",i),E.setAttribute("x2",i),o&&o(t,a)}))}(f.$refs.sparklineRef,e.value,e.tooltip&&{onmousemove:(t,e)=>{v.value.show=!0,v.value.content=e.tooltip,v.value.top=t.offsetY,v.value.left=t.offsetX+20},onmouseout:()=>{v.value.show=!1}})})),(e,l)=>(s(),r("div",w,[(s(),r("svg",{ref:"sparklineRef",width:t.width,height:t.height,"stroke-width":t.strokeWidth,stroke:t.strokeColor,fill:t.fillColor},null,8,g)),t.tooltip?i((s(),r("span",{key:0,class:"tooltip",style:u([`left: ${v.value.left}px`,`top: ${v.value.top}px`])},p(v.value.content),5)),[[n,v.value.show]]):c("v-if",!0)]))}}),[["__scopeId","data-v-135c3009"]]),$={data:()=>({value1:[1,5,2,4,8,3,7],value2:[{tooltip:"值：1",value:1},{tooltip:"值：3",value:3},{tooltip:"值：5",value:5},{tooltip:"值：8",value:8},{tooltip:"值：4",value:4},{tooltip:"值：6",value:6},{tooltip:"值：9",value:9}]})};"function"==typeof h&&h($);const S=e($,[["render",function(t,e,l,o,a,i){const n=k,u=A,p=b;return s(),r("div",null,[f(n,{title:"迷你图",content:"Sparkline"}),f(p,null,{default:v((()=>[f(u,{value:a.value1},null,8,["value"]),f(u,{value:a.value1,"stroke-color":"#409eff","fill-color":"#b3d8ff"},null,8,["value"]),f(u,{value:a.value2,tooltip:""},null,8,["value"]),f(u,{value:a.value2,tooltip:"","stroke-color":"#409eff","fill-color":"#b3d8ff","cursor-color":"#e6a23c","spot-color":"#909399"},null,8,["value"])])),_:1})])}]]);export{S as default};
