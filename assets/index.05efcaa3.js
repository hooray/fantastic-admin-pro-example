
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{v as t,aK as e,a0 as l,a4 as s}from"./index.3b0b287f.js";function u(){const u=t(),a=e();function n(){return u.tabbar.mergeTabs&&l.currentRoute.value.meta.activeMenu||l.currentRoute.value.fullPath}return{getId:n,closeById:function(t){let e=n();if(t==e&&a.list.length>1){let e=~~Object.keys(a.list).find((e=>a.list[e].tabId==t));e<a.list.length-1?l.push(a.list[e+1].fullPath):l.push(a.list[e-1].fullPath)}a.list.length>1?a.remove(t):s.error("当前只有一个标签页，已阻止关闭")},close:function(t){let e=n();a.remove(e),l.push(t)}}}export{u};
