
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a5 as e,f as a,h as t,w as n,bG as s,c5 as l,b as c,i as o,D as u,a1 as i,c_ as d,c$ as f,c4 as r,a8 as _}from"./index.21d85186.js";const k=u("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),p=i("连续点击我，只会执行最后一次点击事件，立即执行"),C=i("连续点击我，只会执行最后一次点击事件，延后执行"),b=u("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),m=i("连续点击我，每一秒只会执行一次点击事件"),h={__name:"debounce",setup(s){function u(){_.success({message:"恭喜你，这是一条成功消息"})}let i=d((()=>{u()}),1e3),h=d((()=>{u()}),1e3,!1),x=f((()=>{u()}),1e3);return(s,u)=>{const d=r,f=e,_=l;return c(),a("div",null,[t(d,{title:"防抖节流"}),t(_,{title:"防抖：debounce"},{default:n((()=>[k,t(f,{onClick:o(i)},{default:n((()=>[p])),_:1},8,["onClick"]),t(f,{onClick:o(h)},{default:n((()=>[C])),_:1},8,["onClick"])])),_:1}),t(_,{title:"节流：throttle"},{default:n((()=>[b,t(f,{onClick:o(x)},{default:n((()=>[m])),_:1},8,["onClick"])])),_:1})])}}};"function"==typeof s&&s(h);export{h as default};
