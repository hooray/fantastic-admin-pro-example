
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as t,aK as e,a0 as l,a4 as a}from"./index.45a1a0f2.js";function s(){const s=t(),u=e();function n(){return s.tabbar.mergeTabs&&l.currentRoute.value.meta.activeMenu||l.currentRoute.value.fullPath}return{getId:n,closeById:function(t){let e=n();if(t==e&&u.list.length>1){let e=~~Object.keys(u.list).find((e=>u.list[e].tabId==t));e<u.list.length-1?l.push(u.list[e+1].fullPath):l.push(u.list[e-1].fullPath)}u.list.length>1?u.remove(t):a.error("当前只有一个标签页，已阻止关闭")},close:function(t){let e=n();u.remove(e),l.push(t)}}}export{s as u};
