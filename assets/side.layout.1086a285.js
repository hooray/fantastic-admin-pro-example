
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e}from"./index.9237ba69.js";import{br as t,as as n,d,u as o,V as a,au as r,_ as s,K as l,r as i,an as c,am as h,E as u,ba as p,y as f,aA as g,d5 as y,H as v,bQ as k,ad as N,L as C,F as b,G as m,b as x,f as E,D,e as K,w,M as S,n as A,l as _,m as L,h as j,k as B,R as T,W as O,s as $,o as z,bo as M,at as q,bp as I,aZ as F,al as R,b3 as H,c as P,bR as U,Q as V,z as W,cl as Q,cm as G,a5 as Y,a1 as Z,a8 as J,P as X}from"./index.f897cb43.js";import{E as ee}from"./el-pagination.7cd86563.js";/* empty css                 *//* empty css               */import"./el-select.2a915073.js";/* empty css                     */import{E as te,a as ne}from"./el-table-column.d2f71437.js";import{E as de}from"./el-checkbox.2aaa4b7c.js";import"./el-tooltip.0ca4bad9.js";import{_ as oe}from"./index.d9ec7ecf.js";import{E as ae,a as re}from"./el-form.56ec1c81.js";import"./el-form-item.3d23d1d6.js";import{_ as se}from"./index2.c00a302d.js";import{E as le}from"./index2.faa56537.js";import"./isEqual.93ba6ab4.js";import"./index2.04ee1fac.js";import"./event2.c09267d7.js";import"./index2.a7f5b385.js";import"./validator2.fb9fc88c.js";const ie="$treeNodeId",ce=function(e,t){t&&!t[ie]&&Object.defineProperty(t,ie,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},he=function(e,t){return e?t[e]:t[ie]},ue=e=>{let t=!0,n=!0,d=!0;for(let o=0,a=e.length;o<a;o++){const a=e[o];(!0!==a.checked||a.indeterminate)&&(t=!1,a.disabled||(d=!1)),(!1!==a.checked||a.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:d,half:!t&&!n}},pe=function(e){if(0===e.childNodes.length)return;const{all:t,none:n,half:d}=ue(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):d?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const o=e.parent;o&&0!==o.level&&(e.store.checkStrictly||pe(o))},fe=function(e,t){const n=e.store.props,d=e.data||{},o=n[t];if("function"==typeof o)return o(d,e);if("string"==typeof o)return d[o];if(void 0===o){const e=d[t];return void 0===e?"":e}};let ge=0;class ye{constructor(e){this.id=ge++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)t(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const t=e.props;if(t&&void 0!==t.isLeaf){const e=fe(this,"isLeaf");"boolean"==typeof e&&(this.isLeafByUser=e)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||ce(this,this.data),!this.data)return;const n=e.defaultExpandedKeys,d=e.key;d&&n&&n.includes(this.key)&&this.expand(null,e.autoExpandParent),d&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}setData(e){let t;Array.isArray(e)||ce(this,e),this.data=e,this.childNodes=[],t=0===this.level&&Array.isArray(this.data)?this.data:fe(this,"children")||[];for(let n=0,d=t.length;n<d;n++)this.insertChild({data:t[n]})}get label(){return fe(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return fe(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){return(this.childNodes||[]).some((n=>n===e||t&&n.contains(e)))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,t,d){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof ye)){if(!d){const n=this.getChildren(!0);n.includes(e.data)||(void 0===t||t<0?n.push(e.data):n.splice(t,0,e.data))}Object.assign(e,{parent:this,store:this.store}),(e=n(new ye(e)))instanceof ye&&e.initialize()}e.level=this.level+1,void 0===t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),this.updateLeafState()}insertBefore(e,t){let n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}insertAfter(e,t){let n;t&&(n=this.childNodes.indexOf(t),-1!==n&&(n+=1)),this.insertChild(e,n)}removeChild(e){const t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);const d=this.childNodes.indexOf(e);d>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(d,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){t=this.childNodes[n];break}t&&this.removeChild(t)}expand(e,t){const n=()=>{if(t){let e=this.parent;for(;e.level>0;)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e(),this.childNodes.forEach((e=>{e.canFocus=!0}))};this.shouldLoadData()?this.loadData((e=>{Array.isArray(e)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||pe(this),n())})):n()}doCreateChildren(e,t={}){e.forEach((e=>{this.insertChild(Object.assign({data:e},t),void 0,!0)}))}collapse(){this.expanded=!1,this.childNodes.forEach((e=>{e.canFocus=!1}))}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&void 0!==this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,n,d){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){const{all:n,allWithoutDisable:o}=ue(this.childNodes);this.isLeaf||n||!o||(this.checked=!1,e=!1);const a=()=>{if(t){const n=this.childNodes;for(let r=0,s=n.length;r<s;r++){const o=n[r];d=d||!1!==e;const a=o.disabled?o.checked:d;o.setChecked(a,t,!0,d)}const{half:o,all:a}=ue(n);a||(this.checked=a,this.indeterminate=o)}};if(this.shouldLoadData())return void this.loadData((()=>{a(),pe(this)}),{checked:!1!==e});a()}const o=this.parent;o&&0!==o.level&&(n||pe(o))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const n=this.store.props;let d="children";return n&&(d=n.children||"children"),void 0===t[d]&&(t[d]=null),e&&!t[d]&&(t[d]=[]),t[d]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map((e=>e.data)),n={},d=[];e.forEach(((e,o)=>{const a=e[ie];!!a&&t.findIndex((e=>e[ie]===a))>=0?n[a]={index:o,data:e}:d.push({index:o,data:e})})),this.store.lazy||t.forEach((e=>{n[e[ie]]||this.removeChildByData(e)})),d.forEach((({index:e,data:t})=>{this.insertChild({data:t},e)})),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const n=n=>{this.loaded=!0,this.loading=!1,this.childNodes=[],this.doCreateChildren(n,t),this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,n)}}}class ve{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)t(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new ye({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){(0,this.load)(this.root,(e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()}))}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,n=this.lazy,d=function(o){const a=o.root?o.root.childNodes:o.childNodes;if(a.forEach((n=>{n.visible=t.call(n,e,n.data,n),d(n)})),!o.visible&&a.length){let e=!0;e=!a.some((e=>e.visible)),o.root?o.root.visible=!1===e:o.visible=!1===e}e&&(!o.visible||o.isLeaf||n||o.expand())};d(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof ye)return e;const t="object"!=typeof e?e:he(this.key,e);return this.nodesMap[t]||null}insertBefore(e,t){const n=this.getNode(t);n.parent.insertBefore({data:e},n)}insertAfter(e,t){const n=this.getNode(t);n.parent.insertAfter({data:e},n)}remove(e){const t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}append(e,t){const n=t?this.getNode(t):this.root;n&&n.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach((e=>{const n=t[e];n&&n.setChecked(!0,!this.checkStrictly)}))}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(e&&e.data)if(t){void 0!==e.key&&(this.nodesMap[e.key]=e)}else this.nodesMap[e.id]=e}deregisterNode(e){this.key&&e&&e.data&&(e.childNodes.forEach((e=>{this.deregisterNode(e)})),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1){const n=[],d=function(o){(o.root?o.root.childNodes:o.childNodes).forEach((o=>{(o.checked||t&&o.indeterminate)&&(!e||e&&o.isLeaf)&&n.push(o.data),d(o)}))};return d(this),n}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map((e=>(e||{})[this.key]))}getHalfCheckedNodes(){const e=[],t=function(n){(n.root?n.root.childNodes:n.childNodes).forEach((n=>{n.indeterminate&&e.push(n.data),t(n)}))};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map((e=>(e||{})[this.key]))}_getAllNodes(){const e=[],n=this.nodesMap;for(const d in n)t(n,d)&&e.push(n[d]);return e}updateChildren(e,t){const n=this.nodesMap[e];if(!n)return;const d=n.childNodes;for(let o=d.length-1;o>=0;o--){const e=d[o];this.remove(e.data)}for(let o=0,a=t.length;o<a;o++){const e=t[o];this.append(e,n.data)}}_setCheckedKeys(e,t=!1,n){const d=this._getAllNodes().sort(((e,t)=>t.level-e.level)),o=Object.create(null),a=Object.keys(n);d.forEach((e=>e.setChecked(!1,!1)));for(let r=0,s=d.length;r<s;r++){const n=d[r],s=n.data[e].toString();if(!a.includes(s)){n.checked&&!o[s]&&n.setChecked(!1,!1);continue}let l=n.parent;for(;l&&l.level>0;)o[l.data[e]]=!0,l=l.parent;if(n.isLeaf||this.checkStrictly)n.setChecked(!0,!1);else if(n.setChecked(!0,!0),t){n.setChecked(!1,!1);const e=function(t){t.childNodes.forEach((t=>{t.isLeaf||t.setChecked(!1,!1),e(t)}))};e(n)}}}setCheckedNodes(e,t=!1){const n=this.key,d={};e.forEach((e=>{d[(e||{})[n]]=!0})),this._setCheckedKeys(n,t,d)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const n=this.key,d={};e.forEach((e=>{d[e]=!0})),this._setCheckedKeys(n,t,d)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach((e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)}))}setChecked(e,t,n){const d=this.getNode(e);d&&d.setChecked(!!t,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,t=!0){const n=e[this.key],d=this.nodesMap[n];this.setCurrentNode(d),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,t=!0){if(null==e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);const n=this.getNode(e);n&&(this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}var ke=s(d({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const t=o("tree"),n=a("NodeInstance"),d=a("RootTree");return()=>{const o=e.node,{data:a,store:s}=o;return e.renderContent?e.renderContent(r,{_self:n,node:o,data:a,store:s}):d.ctx.slots.default?d.ctx.slots.default({node:o,data:a}):r("span",{class:t.be("node","label")},[o.label])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function Ne(e){const t=a("TreeNodeMap",null),n={treeNodeExpand:t=>{e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(n),l("TreeNodeMap",n),{broadcastExpanded:t=>{if(e.accordion)for(const e of n.children)e.treeNodeExpand(t)}}}const Ce=Symbol("dragEvents");const be=d({name:"ElTreeNode",components:{ElCollapseTransition:se,ElCheckbox:de,NodeContent:ke,ElIcon:u,Loading:p},props:{node:{type:ye,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,t){const n=o("tree"),{broadcastExpanded:d}=Ne(e),r=a("RootTree"),s=i(!1),c=i(!1),h=i(null),u=i(null),p=i(null),C=a(Ce),b=v();l("NodeInstance",b),e.node.expanded&&(s.value=!0,c.value=!0);const m=r.props.children||"children";f((()=>{const t=e.node.data[m];return t&&[...t]}),(()=>{e.node.updateChildren()})),f((()=>e.node.indeterminate),(t=>{x(e.node.checked,t)})),f((()=>e.node.checked),(t=>{x(t,e.node.indeterminate)})),f((()=>e.node.expanded),(e=>{g((()=>s.value=e)),e&&(c.value=!0)}));const x=(t,n)=>{h.value===t&&u.value===n||r.ctx.emit("check-change",e.node.data,t,n),h.value=t,u.value=n},E=()=>{e.node.isLeaf||(s.value?(r.ctx.emit("node-collapse",e.node.data,e.node,b),e.node.collapse()):(e.node.expand(),t.emit("node-expand",e.node.data,e.node,b)))},D=(t,n)=>{e.node.setChecked(n.target.checked,!r.props.checkStrictly),g((()=>{const t=r.store.value;r.ctx.emit("check",e.node.data,{checkedNodes:t.getCheckedNodes(),checkedKeys:t.getCheckedKeys(),halfCheckedNodes:t.getHalfCheckedNodes(),halfCheckedKeys:t.getHalfCheckedKeys()})}))};return{ns:n,node$:p,tree:r,expanded:s,childNodeRendered:c,oldChecked:h,oldIndeterminate:u,getNodeKey:e=>he(r.props.nodeKey,e.data),getNodeClass:t=>{const n=e.props.class;if(!n)return{};let d;if(k(n)){const{data:e}=t;d=n(e,t)}else d=n;return N(d)?{[d]:!0}:d},handleSelectChange:x,handleClick:t=>{const n=r.store.value;n.setCurrentNode(e.node),r.ctx.emit("current-change",n.currentNode?n.currentNode.data:null,n.currentNode),r.currentNode.value=e.node,r.props.expandOnClickNode&&E(),r.props.checkOnClickNode&&!e.node.disabled&&D(null,{target:{checked:!e.node.checked}}),r.ctx.emit("node-click",e.node.data,e.node,b,t)},handleContextMenu:t=>{r.instance.vnode.props.onNodeContextmenu&&(t.stopPropagation(),t.preventDefault()),r.ctx.emit("node-contextmenu",t,e.node.data,e.node,b)},handleExpandIconClick:E,handleCheckChange:D,handleChildNodeExpand:(e,t,n)=>{d(t),r.ctx.emit("node-expand",e,t,n)},handleDragStart:t=>{r.props.draggable&&C.treeNodeDragStart({event:t,treeNode:e})},handleDragOver:t=>{t.preventDefault(),r.props.draggable&&C.treeNodeDragOver({event:t,treeNode:{$el:p.value,node:e.node}})},handleDrop:e=>{e.preventDefault()},handleDragEnd:e=>{r.props.draggable&&C.treeNodeDragEnd(e)},CaretRight:y}}}),me=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],xe=["aria-expanded"];var Ee=s(d({name:"ElTree",components:{ElTreeNode:s(be,[["render",function(e,t,n,d,o,a){const r=C("el-icon"),s=C("el-checkbox"),l=C("loading"),i=C("node-content"),c=C("el-tree-node"),h=C("el-collapse-transition");return b((x(),E("div",{ref:"node$",class:A([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=_(((...t)=>e.handleClick&&e.handleClick(...t)),["stop"])),onContextmenu:t[2]||(t[2]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t)),onDragstart:t[3]||(t[3]=_(((...t)=>e.handleDragStart&&e.handleDragStart(...t)),["stop"])),onDragover:t[4]||(t[4]=_(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["stop"])),onDragend:t[5]||(t[5]=_(((...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),["stop"])),onDrop:t[6]||(t[6]=_(((...t)=>e.handleDrop&&e.handleDrop(...t)),["stop"]))},[D("div",{class:A(e.ns.be("node","content")),style:B({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?(x(),K(r,{key:0,class:A([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:_(e.handleExpandIconClick,["stop"])},{default:w((()=>[(x(),K(S(e.tree.props.icon||e.CaretRight)))])),_:1},8,["class","onClick"])):L("v-if",!0),e.showCheckbox?(x(),K(s,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=_((()=>{}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):L("v-if",!0),e.node.loading?(x(),K(r,{key:2,class:A([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:w((()=>[j(l)])),_:1},8,["class"])):L("v-if",!0),j(i,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),j(h,null,{default:w((()=>[!e.renderAfterExpand||e.childNodeRendered?b((x(),E("div",{key:0,class:A(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[(x(!0),E(T,null,O(e.node.childNodes,(t=>(x(),K(c,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])))),128))],10,xe)),[[m,e.expanded]]):L("v-if",!0)])),_:1})],42,me)),[[m,e.node.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]])},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:[String,Object]},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,t){const{t:n}=H(),d=o("tree"),a=i(new ve({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));a.value.initialize();const r=i(a.value.root),s=i(null),u=i(null),p=i(null),{broadcastExpanded:g}=Ne(e),{dragState:y}=function({props:e,ctx:t,el$:n,dropIndicator$:d,store:a}){const r=o("tree"),s=i({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return l(Ce,{treeNodeDragStart:({event:n,treeNode:d})=>{if("function"==typeof e.allowDrag&&!e.allowDrag(d.node))return n.preventDefault(),!1;n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain","")}catch(o){}s.value.draggingNode=d,t.emit("node-drag-start",d.node,n)},treeNodeDragOver:({event:o,treeNode:a})=>{const l=a,i=s.value.dropNode;i&&i!==l&&c(i.$el,r.is("drop-inner"));const u=s.value.draggingNode;if(!u||!l)return;let p=!0,f=!0,g=!0,y=!0;"function"==typeof e.allowDrop&&(p=e.allowDrop(u.node,l.node,"prev"),y=f=e.allowDrop(u.node,l.node,"inner"),g=e.allowDrop(u.node,l.node,"next")),o.dataTransfer.dropEffect=f||p||g?"move":"none",(p||f||g)&&i!==l&&(i&&t.emit("node-drag-leave",u.node,i.node,o),t.emit("node-drag-enter",u.node,l.node,o)),(p||f||g)&&(s.value.dropNode=l),l.node.nextSibling===u.node&&(g=!1),l.node.previousSibling===u.node&&(p=!1),l.node.contains(u.node,!1)&&(f=!1),(u.node===l.node||u.node.contains(l.node))&&(p=!1,f=!1,g=!1);const v=l.$el.getBoundingClientRect(),k=n.value.getBoundingClientRect();let N;const C=p?f?.25:g?.45:1:-1,b=g?f?.75:p?.55:0:1;let m=-9999;const x=o.clientY-v.top;N=x<v.height*C?"before":x>v.height*b?"after":f?"inner":"none";const E=l.$el.querySelector(`.${r.be("node","expand-icon")}`).getBoundingClientRect(),D=d.value;"before"===N?m=E.top-k.top:"after"===N&&(m=E.bottom-k.top),D.style.top=`${m}px`,D.style.left=E.right-k.left+"px","inner"===N?h(l.$el,r.is("drop-inner")):c(l.$el,r.is("drop-inner")),s.value.showDropIndicator="before"===N||"after"===N,s.value.allowDrop=s.value.showDropIndicator||y,s.value.dropType=N,t.emit("node-drag-over",u.node,l.node,o)},treeNodeDragEnd:e=>{const{draggingNode:n,dropType:d,dropNode:o}=s.value;if(e.preventDefault(),e.dataTransfer.dropEffect="move",n&&o){const s={data:n.node.data};"none"!==d&&n.node.remove(),"before"===d?o.node.parent.insertBefore(s,o.node):"after"===d?o.node.parent.insertAfter(s,o.node):"inner"===d&&o.node.insertChild(s),"none"!==d&&a.value.registerNode(s),c(o.$el,r.is("drop-inner")),t.emit("node-drag-end",n.node,o.node,d,e),"none"!==d&&t.emit("node-drop",n.node,o.node,d,e)}n&&!o&&t.emit("node-drag-end",n.node,null,d,e),s.value.showDropIndicator=!1,s.value.draggingNode=null,s.value.dropNode=null,s.value.allowDrop=!0}}),{dragState:s}}({props:e,ctx:t,el$:u,dropIndicator$:p,store:a});!function({el$:e},t){const n=o("tree"),d=$([]),a=$([]);z((()=>{s(),M(e.value,"keydown",r)})),q((()=>{I(e.value,"keydown",r)})),F((()=>{d.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))})),f(a,(e=>{e.forEach((e=>{e.setAttribute("tabindex","-1")}))}));const r=o=>{const a=o.target;if(!a.className.includes(n.b("node")))return;const r=o.code;d.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const s=d.value.indexOf(a);let l;if([R.up,R.down].includes(r)){if(o.preventDefault(),r===R.up){l=-1===s?0:0!==s?s-1:d.value.length-1;const e=l;for(;!t.value.getNode(d.value[l].dataset.key).canFocus;){if(l--,l===e){l=-1;break}l<0&&(l=d.value.length-1)}}else{l=-1===s?0:s<d.value.length-1?s+1:0;const e=l;for(;!t.value.getNode(d.value[l].dataset.key).canFocus;){if(l++,l===e){l=-1;break}l>=d.value.length&&(l=0)}}-1!==l&&d.value[l].focus()}[R.left,R.right].includes(r)&&(o.preventDefault(),a.click());const i=a.querySelector('[type="checkbox"]');[R.enter,R.space].includes(r)&&i&&(o.preventDefault(),i.click())},s=()=>{var t;d.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const o=e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);o.length?o[0].setAttribute("tabindex","0"):null==(t=d.value[0])||t.setAttribute("tabindex","0")}}({el$:u},a);const k=P((()=>{const{childNodes:e}=r.value;return!e||0===e.length||e.every((({visible:e})=>!e))}));f((()=>e.defaultCheckedKeys),(e=>{a.value.setDefaultCheckedKey(e)})),f((()=>e.defaultExpandedKeys),(e=>{a.value.setDefaultExpandedKeys(e)})),f((()=>e.data),(e=>{a.value.setData(e)}),{deep:!0}),f((()=>e.checkStrictly),(e=>{a.value.checkStrictly=e}));const N=()=>{const e=a.value.getCurrentNode();return e?e.data:null};return l("RootTree",{ctx:t,props:e,store:a,root:r,currentNode:s,instance:v()}),l(U,void 0),{ns:d,store:a,root:r,currentNode:s,dragState:y,el$:u,dropIndicator$:p,isEmpty:k,filter:t=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");a.value.filter(t)},getNodeKey:t=>he(e.nodeKey,t.data),getNodePath:t=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const n=a.value.getNode(t);if(!n)return[];const d=[n.data];let o=n.parent;for(;o&&o!==r.value;)d.push(o.data),o=o.parent;return d.reverse()},getCheckedNodes:(e,t)=>a.value.getCheckedNodes(e,t),getCheckedKeys:e=>a.value.getCheckedKeys(e),getCurrentNode:N,getCurrentKey:()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const t=N();return t?t[e.nodeKey]:null},setCheckedNodes:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");a.value.setCheckedNodes(t,n)},setCheckedKeys:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");a.value.setCheckedKeys(t,n)},setChecked:(e,t,n)=>{a.value.setChecked(e,t,n)},getHalfCheckedNodes:()=>a.value.getHalfCheckedNodes(),getHalfCheckedKeys:()=>a.value.getHalfCheckedKeys(),setCurrentNode:(t,n=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");a.value.setUserCurrentNode(t,n)},setCurrentKey:(t,n=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");a.value.setCurrentNodeKey(t,n)},t:n,getNode:e=>a.value.getNode(e),remove:e=>{a.value.remove(e)},append:(e,t)=>{a.value.append(e,t)},insertBefore:(e,t)=>{a.value.insertBefore(e,t)},insertAfter:(e,t)=>{a.value.insertAfter(e,t)},handleNodeExpand:(e,n,d)=>{g(n),t.emit("node-expand",e,n,d)},updateKeyChildren:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");a.value.updateChildren(t,n)}}}}),[["render",function(e,t,n,d,o,a){var r;const s=C("el-tree-node");return x(),E("div",{ref:"el$",class:A([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner","inner"===e.dragState.dropType),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[(x(!0),E(T,null,O(e.root.childNodes,(t=>(x(),K(s,{key:e.getNodeKey(t),node:t,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])))),128)),e.isEmpty?(x(),E("div",{key:0,class:A(e.ns.e("empty-block"))},[D("span",{class:A(e.ns.e("empty-text"))},V(null!=(r=e.emptyText)?r:e.t("el.tree.emptyText")),3)],2)):L("v-if",!0),b(D("div",{ref:"dropIndicator$",class:A(e.ns.e("drop-indicator"))},null,2),[[m,e.dragState.showDropIndicator]])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);Ee.install=e=>{e.component(Ee.name,Ee)};const De=Ee;const Ke={class:"container"},we=Z(" 筛选 "),Se=Z("编辑"),Ae=Z("删除");var _e=W({__name:"side.layout",setup(t){const n=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}];function d(e){J(e.label)}const o=i({title:""}),a=[{id:1,title:"标题1"},{id:2,title:"标题2"},{id:3,title:"标题3"},{id:4,title:"标题4"},{id:5,title:"标题5"},{id:6,title:"标题6"},{id:7,title:"标题7"},{id:8,title:"标题8"},{id:9,title:"标题9"},{id:10,title:"标题10"},{id:11,title:"标题11"},{id:12,title:"标题12"},{id:13,title:"标题13"},{id:14,title:"标题14"},{id:15,title:"标题15"},{id:16,title:"标题16"},{id:17,title:"标题17"},{id:18,title:"标题18"},{id:19,title:"标题19"},{id:20,title:"标题20"}],r=i(3);return(t,s)=>{const l=De,i=le,c=ae,h=Q,p=G,f=X,g=u,y=Y,v=re,k=oe,N=te,C=ne,b=ee,m=e;return x(),E("div",null,[j(m,null,{leftSide:w((()=>[j(l,{data:n,"default-expand-all":"","highlight-current":"",onNodeClick:d})])),default:w((()=>[D("div",Ke,[j(k,{style:{"margin-bottom":"0"}},{default:w((()=>[j(v,{model:o.value,size:"default","label-width":"100px","label-suffix":"："},{default:w((()=>[j(p,null,{default:w((()=>[j(h,{span:12},{default:w((()=>[j(c,{label:"名称"},{default:w((()=>[j(i,{modelValue:o.value.title,"onUpdate:modelValue":s[0]||(s[0]=e=>o.value.title=e),placeholder:"请输入名称，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),j(c,null,{default:w((()=>[j(y,{type:"primary"},{icon:w((()=>[j(g,null,{default:w((()=>[j(f,{name:"i-ep:search"})])),_:1})])),default:w((()=>[we])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),j(C,{ref:"table",class:"list-table",data:a,border:"",stripe:"","highlight-current-row":"",height:"100%"},{default:w((()=>[j(N,{prop:"title",label:"名称"}),j(N,{label:"操作",width:"200",align:"center"},{default:w((e=>[j(y,{type:"primary",size:"small",plain:"",onClick:n=>t.onEdit(e.row)},{default:w((()=>[Se])),_:2},1032,["onClick"]),j(y,{type:"danger",size:"small",plain:"",onClick:n=>t.onDel(e.row)},{default:w((()=>[Ae])),_:2},1032,["onClick"])])),_:1})])),_:1},512),j(b,{"current-page":r.value.value,total:100,layout:"total, sizes, ->, prev, pager, next, jumper",background:""},null,8,["current-page"])])])),_:1})])}}},[["__scopeId","data-v-c3f1cc92"]]);export{_e as default};
