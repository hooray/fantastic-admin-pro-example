
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as t,b as e,f as a,R as l,E as i,a8 as r,h as s,w as o,bM as n,bN as u,I as d,bO as m,a2 as f,Q as p}from"./index.14f3ec2e.js";import{E as c,a as h}from"./el-form.516181b4.js";import{E as V}from"./el-input.36e45e3c.js";import"./el-form-item.2e22de35.js";import{E as b}from"./el-input-number.806ad54a.js";import"./isEqual.e7591419.js";import"./event.d298a7ab.js";import"./index.358b0b8c.js";let y=0;const w="webkit moz ms o".split(" ");let x,g;if("undefined"==typeof window)x=function(){},g=function(){};else{let t;x=window.requestAnimationFrame,g=window.cancelAnimationFrame;for(let e=0;e<w.length&&(!x||!g);e++)t=w[e],x=x||window[t+"RequestAnimationFrame"],g=g||window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];x&&g||(x=function(t){const e=(new Date).getTime(),a=Math.max(0,16-(e-y)),l=window.setTimeout((()=>{t(e+a)}),a);return y=e+a,l},g=function(t){window.clearTimeout(t)})}const j=t({props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:t=>t>=0},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:(t,e,a,l)=>a*(1-Math.pow(2,-10*t/l))*1024/1023+e}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=x(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){g(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,x(this.count)},reset(){this.startTime=null,g(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(t){this.startTime||(this.startTime=t),this.timestamp=t;const e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=x(this.count):this.$emit("callback")},isNumber:t=>!isNaN(parseFloat(t)),formatNumber(t){t=t.toFixed(this.decimals);const e=(t+="").split(".");let a=e[0];const l=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+l+this.suffix}},destroyed(){g(this.rAF)}},[["render",function(t,i,r,s,o,n){return e(),a("span",null,l(o.displayValue),1)}]]);function O(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}j.unmounted=j.destroyed,Reflect.deleteProperty(j,"destroyed");const F={components:{CountTo:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){O(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({name:"CountTo",emits:["callback","mountedCallback"]},j)},data:()=>({form:{startVal:0,endVal:2017,duration:4e3,decimals:0,separator:",",prefix:"¥ ",suffix:" 元"}}),methods:{start(){this.$refs["count-to"].start()},pause(){this.$refs["count-to"].pauseResume()},open(t){window.open(t,"top")}}},S=f(" 组件仓库地址 "),_=f("开始"),q=f("暂停");"function"==typeof n&&n(F);const v=t(F,[["render",function(t,l,n,f,y,w){const x=p,g=i,j=r,O=u,D=d("count-to"),F=b,v=c,N=V,T=h,k=m;return e(),a("div",null,[s(O,{title:"计数器",content:"CountTo 三方组件"},{default:o((()=>[s(j,{onClick:l[0]||(l[0]=t=>w.open("https://github.com/xiaofan9/vue-count-to"))},{icon:o((()=>[s(g,null,{default:o((()=>[s(x,{name:"i-ep:link"})])),_:1})])),default:o((()=>[S])),_:1})])),_:1}),s(k,null,{default:o((()=>[s(D,{ref:"count-to",class:"count-to","start-val":y.form.startVal,"end-val":y.form.endVal,duration:y.form.duration,decimals:y.form.decimals,separator:y.form.separator,prefix:y.form.prefix,suffix:y.form.suffix,autoplay:!1},null,8,["start-val","end-val","duration","decimals","separator","prefix","suffix"]),s(T,{ref:"form",model:y.form,size:"default","label-width":"80px",style:{width:"300px"}},{default:o((()=>[s(v,{label:"startVal"},{default:o((()=>[s(F,{modelValue:y.form.startVal,"onUpdate:modelValue":l[1]||(l[1]=t=>y.form.startVal=t)},null,8,["modelValue"])])),_:1}),s(v,{label:"endVal"},{default:o((()=>[s(F,{modelValue:y.form.endVal,"onUpdate:modelValue":l[2]||(l[2]=t=>y.form.endVal=t)},null,8,["modelValue"])])),_:1}),s(v,{label:"duration"},{default:o((()=>[s(F,{modelValue:y.form.duration,"onUpdate:modelValue":l[3]||(l[3]=t=>y.form.duration=t)},null,8,["modelValue"])])),_:1}),s(v,{label:"decimals"},{default:o((()=>[s(F,{modelValue:y.form.decimals,"onUpdate:modelValue":l[4]||(l[4]=t=>y.form.decimals=t)},null,8,["modelValue"])])),_:1}),s(v,{label:"separator"},{default:o((()=>[s(N,{modelValue:y.form.separator,"onUpdate:modelValue":l[5]||(l[5]=t=>y.form.separator=t)},null,8,["modelValue"])])),_:1}),s(v,{label:"prefix"},{default:o((()=>[s(N,{modelValue:y.form.prefix,"onUpdate:modelValue":l[6]||(l[6]=t=>y.form.prefix=t)},null,8,["modelValue"])])),_:1}),s(v,{label:"suffix"},{default:o((()=>[s(N,{modelValue:y.form.suffix,"onUpdate:modelValue":l[7]||(l[7]=t=>y.form.suffix=t)},null,8,["modelValue"])])),_:1}),s(v,null,{default:o((()=>[s(j,{type:"primary",onClick:w.start},{default:o((()=>[_])),_:1},8,["onClick"]),s(j,{onClick:w.pause},{default:o((()=>[q])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])}],["__scopeId","data-v-eaf3e41b"]]);export{v as default};
