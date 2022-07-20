
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a6 as e,f as a,h as t,w as n,bI as s,c7 as l,b as o,i as u,F as c,a2 as d,d0 as i,d1 as f,c6 as r,a9 as _}from"./index.d45ed42d.js";const k=c("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),p=d("连续点击我，只会执行最后一次点击事件，立即执行"),C=d("连续点击我，只会执行最后一次点击事件，延后执行"),b=c("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),m=d("连续点击我，每一秒只会执行一次点击事件"),h={__name:"debounce",setup(s){function c(){_.success({message:"恭喜你，这是一条成功消息"})}let d=i((()=>{c()}),1e3),h=i((()=>{c()}),1e3,!1),x=f((()=>{c()}),1e3);return(s,c)=>{const i=r,f=e,_=l;return o(),a("div",null,[t(i,{title:"防抖节流"}),t(_,{title:"防抖：debounce"},{default:n((()=>[k,t(f,{onClick:u(d)},{default:n((()=>[p])),_:1},8,["onClick"]),t(f,{onClick:u(h)},{default:n((()=>[C])),_:1},8,["onClick"])])),_:1}),t(_,{title:"节流：throttle"},{default:n((()=>[b,t(f,{onClick:u(x)},{default:n((()=>[m])),_:1},8,["onClick"])])),_:1})])}}};"function"==typeof s&&s(h);export{h as default};
