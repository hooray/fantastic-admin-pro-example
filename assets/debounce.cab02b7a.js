
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a7 as e,f as t,h as a,w as n,bP as s,bQ as l,b as o,i as u,G as c,Y as i,d4 as d,d5 as f,bT as r,a4 as _}from"./index.503ec71c.js";const b=c("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),k=i("连续点击我，只会执行最后一次点击事件，立即执行"),p=i("连续点击我，只会执行最后一次点击事件，延后执行"),C=c("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),m=i("连续点击我，每一秒只会执行一次点击事件"),h={__name:"debounce",setup(s){function c(){_.success({message:"恭喜你，这是一条成功消息"})}let i=d((()=>{c()}),1e3),h=d((()=>{c()}),1e3,!1),x=f((()=>{c()}),1e3);return(s,c)=>{const d=r,f=e,_=l;return o(),t("div",null,[a(d,{title:"防抖节流"}),a(_,{title:"防抖：debounce"},{default:n((()=>[b,a(f,{onClick:u(i)},{default:n((()=>[k])),_:1},8,["onClick"]),a(f,{onClick:u(h)},{default:n((()=>[p])),_:1},8,["onClick"])])),_:1}),a(_,{title:"节流：throttle"},{default:n((()=>[C,a(f,{onClick:u(x)},{default:n((()=>[m])),_:1},8,["onClick"])])),_:1})])}}};"function"==typeof s&&s(h);export{h as default};
