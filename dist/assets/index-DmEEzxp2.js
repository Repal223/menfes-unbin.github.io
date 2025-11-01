const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-oMc-67ew.js","assets/time-90eS6vHA.js","assets/Skeletons-bPoLD281.js","assets/clean-BY0QpW96.js","assets/AddPost-XphxfDBr.js","assets/Stats-j8sAfzwS.js","assets/AdminPanel-RwCuih6S.js","assets/About-dkZkJSsA.js","assets/PostDetail-q9-M0YSA.js"])))=>i.map(i=>d[i]);
function qR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function GR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gw={exports:{}},kc={},Hw={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),HR=Symbol.for("react.portal"),KR=Symbol.for("react.fragment"),WR=Symbol.for("react.strict_mode"),QR=Symbol.for("react.profiler"),XR=Symbol.for("react.provider"),YR=Symbol.for("react.context"),JR=Symbol.for("react.forward_ref"),ZR=Symbol.for("react.suspense"),eP=Symbol.for("react.memo"),tP=Symbol.for("react.lazy"),R_=Symbol.iterator;function nP(t){return t===null||typeof t!="object"?null:(t=R_&&t[R_]||t["@@iterator"],typeof t=="function"?t:null)}var Kw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ww=Object.assign,Qw={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=Qw,this.updater=n||Kw}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xw(){}Xw.prototype=Zs.prototype;function pp(t,e,n){this.props=t,this.context=e,this.refs=Qw,this.updater=n||Kw}var mp=pp.prototype=new Xw;mp.constructor=pp;Ww(mp,Zs.prototype);mp.isPureReactComponent=!0;var P_=Array.isArray,Yw=Object.prototype.hasOwnProperty,gp={current:null},Jw={key:!0,ref:!0,__self:!0,__source:!0};function Zw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yw.call(e,r)&&!Jw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),h=0;h<a;h++)l[h]=arguments[h+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ka,type:t,key:s,ref:o,props:i,_owner:gp.current}}function rP(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function iP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var k_=/\/+/g;function Gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iP(""+t.key):e.toString(36)}function au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case HR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gh(o,0):r,P_(i)?(n="",t!=null&&(n=t.replace(k_,"$&/")+"/"),au(i,e,n,"",function(h){return h})):i!=null&&(_p(i)&&(i=rP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(k_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",P_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gh(s,a);o+=au(s,e,n,l,i)}else if(l=nP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gh(s,a++),o+=au(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vl(t,e,n){if(t==null)return t;var r=[],i=0;return au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},lu={transition:null},oP={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:lu,ReactCurrentOwner:gp};function eE(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!_p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Zs;ne.Fragment=KR;ne.Profiler=QR;ne.PureComponent=pp;ne.StrictMode=WR;ne.Suspense=ZR;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oP;ne.act=eE;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ww({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yw.call(e,l)&&!Jw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var h=0;h<l;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:Ka,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:YR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XR,_context:t},t.Consumer=t};ne.createElement=Zw;ne.createFactory=function(t){var e=Zw.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:JR,render:t}};ne.isValidElement=_p;ne.lazy=function(t){return{$$typeof:tP,_payload:{_status:-1,_result:t},_init:sP}};ne.memo=function(t,e){return{$$typeof:eP,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=lu.transition;lu.transition={};try{t()}finally{lu.transition=e}};ne.unstable_act=eE;ne.useCallback=function(t,e){return wt.current.useCallback(t,e)};ne.useContext=function(t){return wt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return wt.current.useEffect(t,e)};ne.useId=function(){return wt.current.useId()};ne.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return wt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};ne.useRef=function(t){return wt.current.useRef(t)};ne.useState=function(t){return wt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return wt.current.useTransition()};ne.version="18.3.1";Hw.exports=ne;var F=Hw.exports;const Zn=GR(F),aP=qR({__proto__:null,default:Zn},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lP=F,uP=Symbol.for("react.element"),cP=Symbol.for("react.fragment"),hP=Object.prototype.hasOwnProperty,dP=lP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fP={key:!0,ref:!0,__self:!0,__source:!0};function tE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hP.call(e,r)&&!fP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uP,type:t,key:s,ref:o,props:i,_owner:dP.current}}kc.Fragment=cP;kc.jsx=tE;kc.jsxs=tE;Gw.exports=kc;var $=Gw.exports,nE={exports:{}},Bt={},rE={exports:{}},iE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,Y){var ee=G.length;G.push(Y);e:for(;0<ee;){var Te=ee-1>>>1,de=G[Te];if(0<i(de,Y))G[Te]=Y,G[ee]=de,ee=Te;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var Y=G[0],ee=G.pop();if(ee!==Y){G[0]=ee;e:for(var Te=0,de=G.length,Oe=de>>>1;Te<Oe;){var Rn=2*(Te+1)-1,Pn=G[Rn],kn=Rn+1,Cn=G[kn];if(0>i(Pn,ee))kn<de&&0>i(Cn,Pn)?(G[Te]=Cn,G[kn]=ee,Te=kn):(G[Te]=Pn,G[Rn]=ee,Te=Rn);else if(kn<de&&0>i(Cn,ee))G[Te]=Cn,G[kn]=ee,Te=kn;else break e}}return Y}function i(G,Y){var ee=G.sortIndex-Y.sortIndex;return ee!==0?ee:G.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],h=[],p=1,c=null,d=3,m=!1,y=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(G){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=G)r(h),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(h)}}function b(G){if(E=!1,A(G),!y)if(n(l)!==null)y=!0,uo(L);else{var Y=n(h);Y!==null&&Sn(b,Y.startTime-G)}}function L(G,Y){y=!1,E&&(E=!1,_(T),T=-1),m=!0;var ee=d;try{for(A(Y),c=n(l);c!==null&&(!(c.expirationTime>Y)||G&&!C());){var Te=c.callback;if(typeof Te=="function"){c.callback=null,d=c.priorityLevel;var de=Te(c.expirationTime<=Y);Y=t.unstable_now(),typeof de=="function"?c.callback=de:c===n(l)&&r(l),A(Y)}else r(l);c=n(l)}if(c!==null)var Oe=!0;else{var Rn=n(h);Rn!==null&&Sn(b,Rn.startTime-Y),Oe=!1}return Oe}finally{c=null,d=ee,m=!1}}var M=!1,R=null,T=-1,S=5,P=-1;function C(){return!(t.unstable_now()-P<S)}function x(){if(R!==null){var G=t.unstable_now();P=G;var Y=!0;try{Y=R(!0,G)}finally{Y?k():(M=!1,R=null)}}else M=!1}var k;if(typeof v=="function")k=function(){v(x)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,An=Ue.port2;Ue.port1.onmessage=x,k=function(){An.postMessage(null)}}else k=function(){I(x,0)};function uo(G){R=G,M||(M=!0,k())}function Sn(G,Y){T=I(function(){G(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,uo(L))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var ee=d;d=Y;try{return G()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,Y){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ee=d;d=G;try{return Y()}finally{d=ee}},t.unstable_scheduleCallback=function(G,Y,ee){var Te=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Te+ee:Te):ee=Te,G){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,G={id:p++,callback:Y,priorityLevel:G,startTime:ee,expirationTime:de,sortIndex:-1},ee>Te?(G.sortIndex=ee,e(h,G),n(l)===null&&G===n(h)&&(E?(_(T),T=-1):E=!0,Sn(b,ee-Te))):(G.sortIndex=de,e(l,G),y||m||(y=!0,uo(L))),G},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(G){var Y=d;return function(){var ee=d;d=Y;try{return G.apply(this,arguments)}finally{d=ee}}}})(iE);rE.exports=iE;var pP=rE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mP=F,Ft=pP;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sE=new Set,fa={};function Ui(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(fa[t]=e,t=0;t<e.length;t++)sE.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,gP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C_={},b_={};function _P(t){return Ud.call(b_,t)?!0:Ud.call(C_,t)?!1:gP.test(t)?b_[t]=!0:(C_[t]=!0,!1)}function yP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vP(t,e,n,r){if(e===null||typeof e>"u"||yP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yp,vp);Je[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yp,vp);Je[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yp,vp);Je[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function wp(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vP(e,n,i,r)&&(n=null),r||i===null?_P(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=mP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),Bd=Symbol.for("react.profiler"),oE=Symbol.for("react.provider"),aE=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),lE=Symbol.for("react.offscreen"),x_=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=x_&&t[x_]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Hh;function Uo(t){if(Hh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hh=e&&e[1]||""}return`
`+Hh+t}var Kh=!1;function Wh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function wP(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=Wh(t.type,!1),t;case 11:return t=Wh(t.type.render,!1),t;case 1:return t=Wh(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case hs:return"Portal";case Bd:return"Profiler";case Ep:return"StrictMode";case jd:return"Suspense";case zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case aE:return(t.displayName||"Context")+".Consumer";case oE:return(t._context.displayName||"Context")+".Provider";case Tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function EP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===Ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TP(t){var e=uE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ml(t){t._valueTracker||(t._valueTracker=TP(t))}function cE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function D_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hE(t,e){e=e.checked,e!=null&&wp(t,"checked",e,!1)}function Gd(t,e){hE(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hd(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function N_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hd(t,e,n){(e!=="number"||Du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function As(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function O_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Bo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function dE(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function V_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,pE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IP=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){IP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function mE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function gE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AP=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(AP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function Ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jd=null,Ss=null,Rs=null;function L_(t){if(t=Xa(t)){if(typeof Jd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Nc(e),Jd(t.stateNode,t.type,e))}}function _E(t){Ss?Rs?Rs.push(t):Rs=[t]:Ss=t}function yE(){if(Ss){var t=Ss,e=Rs;if(Rs=Ss=null,L_(t),e)for(t=0;t<e.length;t++)L_(e[t])}}function vE(t,e){return t(e)}function wE(){}var Qh=!1;function EE(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return vE(t,e,n)}finally{Qh=!1,(Ss!==null||Rs!==null)&&(wE(),yE())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Zd=!1;if(Gn)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Zd=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Zd=!1}function SP(t,e,n,r,i,s,o,a,l){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Yo=!1,Nu=null,Ou=!1,ef=null,RP={onError:function(t){Yo=!0,Nu=t}};function PP(t,e,n,r,i,s,o,a,l){Yo=!1,Nu=null,SP.apply(RP,arguments)}function kP(t,e,n,r,i,s,o,a,l){if(PP.apply(this,arguments),Yo){if(Yo){var h=Nu;Yo=!1,Nu=null}else throw Error(B(198));Ou||(Ou=!0,ef=h)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function TE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function M_(t){if(Bi(t)!==t)throw Error(B(188))}function CP(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return M_(i),t;if(s===r)return M_(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function IE(t){return t=CP(t),t!==null?AE(t):null}function AE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=AE(t);if(e!==null)return e;t=t.sibling}return null}var SE=Ft.unstable_scheduleCallback,F_=Ft.unstable_cancelCallback,bP=Ft.unstable_shouldYield,xP=Ft.unstable_requestPaint,Ve=Ft.unstable_now,DP=Ft.unstable_getCurrentPriorityLevel,Sp=Ft.unstable_ImmediatePriority,RE=Ft.unstable_UserBlockingPriority,Vu=Ft.unstable_NormalPriority,NP=Ft.unstable_LowPriority,PE=Ft.unstable_IdlePriority,Cc=null,gn=null;function OP(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:MP,VP=Math.log,LP=Math.LN2;function MP(t){return t>>>=0,t===0?32:31-(VP(t)/LP|0)|0}var Ul=64,Bl=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jo(a):(s&=o,s!==0&&(r=jo(s)))}else o=n&~i,o!==0?r=jo(o):s!==0&&(r=jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function FP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=FP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kE(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function BP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function CE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bE,Pp,xE,DE,NE,nf=!1,jl=[],Pr=null,kr=null,Cr=null,ga=new Map,_a=new Map,mr=[],jP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U_(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Po(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&Pp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zP(t,e,n,r,i){switch(e){case"focusin":return Pr=Po(Pr,t,e,n,r,i),!0;case"dragenter":return kr=Po(kr,t,e,n,r,i),!0;case"mouseover":return Cr=Po(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,Po(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_a.set(s,Po(_a.get(s)||null,t,e,n,r,i)),!0}return!1}function OE(t){var e=fi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=TE(n),e!==null){t.blockedOn=e,NE(t.priority,function(){xE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yd=r,n.target.dispatchEvent(r),Yd=null}else return e=Xa(n),e!==null&&Pp(e),t.blockedOn=n,!1;e.shift()}return!0}function B_(t,e,n){uu(t)&&n.delete(e)}function $P(){nf=!1,Pr!==null&&uu(Pr)&&(Pr=null),kr!==null&&uu(kr)&&(kr=null),Cr!==null&&uu(Cr)&&(Cr=null),ga.forEach(B_),_a.forEach(B_)}function ko(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,$P)))}function ya(t){function e(i){return ko(i,t)}if(0<jl.length){ko(jl[0],t);for(var n=1;n<jl.length;n++){var r=jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&ko(Pr,t),kr!==null&&ko(kr,t),Cr!==null&&ko(Cr,t),ga.forEach(e),_a.forEach(e),n=0;n<mr.length;n++)r=mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)OE(n),n.blockedOn===null&&mr.shift()}var Ps=er.ReactCurrentBatchConfig,Mu=!0;function qP(t,e,n,r){var i=ce,s=Ps.transition;Ps.transition=null;try{ce=1,kp(t,e,n,r)}finally{ce=i,Ps.transition=s}}function GP(t,e,n,r){var i=ce,s=Ps.transition;Ps.transition=null;try{ce=4,kp(t,e,n,r)}finally{ce=i,Ps.transition=s}}function kp(t,e,n,r){if(Mu){var i=rf(t,e,n,r);if(i===null)od(t,e,r,Fu,n),U_(t,r);else if(zP(i,t,e,n,r))r.stopPropagation();else if(U_(t,r),e&4&&-1<jP.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&bE(s),s=rf(t,e,n,r),s===null&&od(t,e,r,Fu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else od(t,e,r,null,n)}}var Fu=null;function rf(t,e,n,r){if(Fu=null,t=Ap(r),t=fi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=TE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fu=t,null}function VE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DP()){case Sp:return 1;case RE:return 4;case Vu:case NP:return 16;case PE:return 536870912;default:return 16}default:return 16}}var Ir=null,Cp=null,cu=null;function LE(){if(cu)return cu;var t,e=Cp,n=e.length,r,i="value"in Ir?Ir.value:Ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cu=i.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function j_(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:j_,this.isPropagationStopped=j_,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bp=jt(eo),Qa=Pe({},eo,{view:0,detail:0}),HP=jt(Qa),Yh,Jh,Co,bc=Pe({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(Yh=t.screenX-Co.screenX,Jh=t.screenY-Co.screenY):Jh=Yh=0,Co=t),Yh)},movementY:function(t){return"movementY"in t?t.movementY:Jh}}),z_=jt(bc),KP=Pe({},bc,{dataTransfer:0}),WP=jt(KP),QP=Pe({},Qa,{relatedTarget:0}),Zh=jt(QP),XP=Pe({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),YP=jt(XP),JP=Pe({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZP=jt(JP),ek=Pe({},eo,{data:0}),$_=jt(ek),tk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rk[t])?!!e[t]:!1}function xp(){return ik}var sk=Pe({},Qa,{key:function(t){if(t.key){var e=tk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ok=jt(sk),ak=Pe({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q_=jt(ak),lk=Pe({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),uk=jt(lk),ck=Pe({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hk=jt(ck),dk=Pe({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fk=jt(dk),pk=[9,13,27,32],Dp=Gn&&"CompositionEvent"in window,Jo=null;Gn&&"documentMode"in document&&(Jo=document.documentMode);var mk=Gn&&"TextEvent"in window&&!Jo,ME=Gn&&(!Dp||Jo&&8<Jo&&11>=Jo),G_=" ",H_=!1;function FE(t,e){switch(t){case"keyup":return pk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function UE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function gk(t,e){switch(t){case"compositionend":return UE(e);case"keypress":return e.which!==32?null:(H_=!0,G_);case"textInput":return t=e.data,t===G_&&H_?null:t;default:return null}}function _k(t,e){if(fs)return t==="compositionend"||!Dp&&FE(t,e)?(t=LE(),cu=Cp=Ir=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ME&&e.locale!=="ko"?null:e.data;default:return null}}var yk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yk[t.type]:e==="textarea"}function BE(t,e,n,r){_E(r),e=Uu(e,"onChange"),0<e.length&&(n=new bp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zo=null,va=null;function vk(t){YE(t,0)}function xc(t){var e=gs(t);if(cE(e))return t}function wk(t,e){if(t==="change")return e}var jE=!1;if(Gn){var ed;if(Gn){var td="oninput"in document;if(!td){var W_=document.createElement("div");W_.setAttribute("oninput","return;"),td=typeof W_.oninput=="function"}ed=td}else ed=!1;jE=ed&&(!document.documentMode||9<document.documentMode)}function Q_(){Zo&&(Zo.detachEvent("onpropertychange",zE),va=Zo=null)}function zE(t){if(t.propertyName==="value"&&xc(va)){var e=[];BE(e,va,t,Ap(t)),EE(vk,e)}}function Ek(t,e,n){t==="focusin"?(Q_(),Zo=e,va=n,Zo.attachEvent("onpropertychange",zE)):t==="focusout"&&Q_()}function Tk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(va)}function Ik(t,e){if(t==="click")return xc(e)}function Ak(t,e){if(t==="input"||t==="change")return xc(e)}function Sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:Sk;function wa(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ud.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function X_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Y_(t,e){var n=X_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=X_(n)}}function $E(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$E(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qE(){for(var t=window,e=Du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Du(t.document)}return e}function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rk(t){var e=qE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$E(n.ownerDocument.documentElement,n)){if(r!==null&&Np(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Y_(n,s);var o=Y_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pk=Gn&&"documentMode"in document&&11>=document.documentMode,ps=null,sf=null,ea=null,of=!1;function J_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||ps==null||ps!==Du(r)||(r=ps,"selectionStart"in r&&Np(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&wa(ea,r)||(ea=r,r=Uu(sf,"onSelect"),0<r.length&&(e=new bp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ps)))}function $l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},nd={},GE={};Gn&&(GE=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Dc(t){if(nd[t])return nd[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in GE)return nd[t]=e[n];return t}var HE=Dc("animationend"),KE=Dc("animationiteration"),WE=Dc("animationstart"),QE=Dc("transitionend"),XE=new Map,Z_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){XE.set(t,e),Ui(e,[t])}for(var rd=0;rd<Z_.length;rd++){var id=Z_[rd],kk=id.toLowerCase(),Ck=id[0].toUpperCase()+id.slice(1);Gr(kk,"on"+Ck)}Gr(HE,"onAnimationEnd");Gr(KE,"onAnimationIteration");Gr(WE,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(QE,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bk=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function ey(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kP(r,e,void 0,t),t.currentTarget=null}function YE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,h=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ey(i,a,h),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,h=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ey(i,a,h),s=l}}}if(Ou)throw t=ef,Ou=!1,ef=null,t}function ge(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var r=t+"__bubble";n.has(r)||(JE(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),JE(n,t,r,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[ql]){t[ql]=!0,sE.forEach(function(n){n!=="selectionchange"&&(bk.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,sd("selectionchange",!1,e))}}function JE(t,e,n,r){switch(VE(e)){case 1:var i=qP;break;case 4:i=GP;break;default:i=kp}n=i.bind(null,e,n,t),i=void 0,!Zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}EE(function(){var h=s,p=Ap(n),c=[];e:{var d=XE.get(t);if(d!==void 0){var m=bp,y=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":m=ok;break;case"focusin":y="focus",m=Zh;break;case"focusout":y="blur",m=Zh;break;case"beforeblur":case"afterblur":m=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=WP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=uk;break;case HE:case KE:case WE:m=YP;break;case QE:m=hk;break;case"scroll":m=HP;break;case"wheel":m=fk;break;case"copy":case"cut":case"paste":m=ZP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=q_}var E=(e&4)!==0,I=!E&&t==="scroll",_=E?d!==null?d+"Capture":null:d;E=[];for(var v=h,A;v!==null;){A=v;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,_!==null&&(b=ma(v,_),b!=null&&E.push(Ta(v,b,A)))),I)break;v=v.return}0<E.length&&(d=new m(d,y,null,n,p),c.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Yd&&(y=n.relatedTarget||n.fromElement)&&(fi(y)||y[Hn]))break e;if((m||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=h,y=y?fi(y):null,y!==null&&(I=Bi(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=h),m!==y)){if(E=z_,b="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=q_,b="onPointerLeave",_="onPointerEnter",v="pointer"),I=m==null?d:gs(m),A=y==null?d:gs(y),d=new E(b,v+"leave",m,n,p),d.target=I,d.relatedTarget=A,b=null,fi(p)===h&&(E=new E(_,v+"enter",y,n,p),E.target=A,E.relatedTarget=I,b=E),I=b,m&&y)t:{for(E=m,_=y,v=0,A=E;A;A=Ji(A))v++;for(A=0,b=_;b;b=Ji(b))A++;for(;0<v-A;)E=Ji(E),v--;for(;0<A-v;)_=Ji(_),A--;for(;v--;){if(E===_||_!==null&&E===_.alternate)break t;E=Ji(E),_=Ji(_)}E=null}else E=null;m!==null&&ty(c,d,m,E,!1),y!==null&&I!==null&&ty(c,I,y,E,!0)}}e:{if(d=h?gs(h):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var L=wk;else if(K_(d))if(jE)L=Ak;else{L=Tk;var M=Ek}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(L=Ik);if(L&&(L=L(t,h))){BE(c,L,n,p);break e}M&&M(t,d,h),t==="focusout"&&(M=d._wrapperState)&&M.controlled&&d.type==="number"&&Hd(d,"number",d.value)}switch(M=h?gs(h):window,t){case"focusin":(K_(M)||M.contentEditable==="true")&&(ps=M,sf=h,ea=null);break;case"focusout":ea=sf=ps=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,J_(c,n,p);break;case"selectionchange":if(Pk)break;case"keydown":case"keyup":J_(c,n,p)}var R;if(Dp)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else fs?FE(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ME&&n.locale!=="ko"&&(fs||T!=="onCompositionStart"?T==="onCompositionEnd"&&fs&&(R=LE()):(Ir=p,Cp="value"in Ir?Ir.value:Ir.textContent,fs=!0)),M=Uu(h,T),0<M.length&&(T=new $_(T,t,null,n,p),c.push({event:T,listeners:M}),R?T.data=R:(R=UE(n),R!==null&&(T.data=R)))),(R=mk?gk(t,n):_k(t,n))&&(h=Uu(h,"onBeforeInput"),0<h.length&&(p=new $_("onBeforeInput","beforeinput",null,n,p),c.push({event:p,listeners:h}),p.data=R))}YE(c,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ta(t,s,i)),s=ma(t,e),s!=null&&r.push(Ta(t,s,i))),t=t.return}return r}function Ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ty(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,h=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&h!==null&&(a=h,i?(l=ma(n,s),l!=null&&o.unshift(Ta(n,l,a))):i||(l=ma(n,s),l!=null&&o.push(Ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xk=/\r\n?/g,Dk=/\u0000|\uFFFD/g;function ny(t){return(typeof t=="string"?t:""+t).replace(xk,`
`).replace(Dk,"")}function Gl(t,e,n){if(e=ny(e),ny(t)!==e&&n)throw Error(B(425))}function Bu(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,Nk=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,Ok=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(t){return ry.resolve(null).then(t).catch(Vk)}:cf;function Vk(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),hn="__reactFiber$"+to,Ia="__reactProps$"+to,Hn="__reactContainer$"+to,hf="__reactEvents$"+to,Lk="__reactListeners$"+to,Mk="__reactHandles$"+to;function fi(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iy(t);t!==null;){if(n=t[hn])return n;t=iy(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[hn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Nc(t){return t[Ia]||null}var df=[],_s=-1;function Hr(t){return{current:t}}function _e(t){0>_s||(t.current=df[_s],df[_s]=null,_s--)}function pe(t,e){_s++,df[_s]=t.current,t.current=e}var Br={},ct=Hr(Br),Pt=Hr(!1),Ti=Br;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function ju(){_e(Pt),_e(ct)}function sy(t,e,n){if(ct.current!==Br)throw Error(B(168));pe(ct,e),pe(Pt,n)}function ZE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,EP(t)||"Unknown",i));return Pe({},n,r)}function zu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,Ti=ct.current,pe(ct,t),pe(Pt,Pt.current),!0}function oy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=ZE(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,_e(Pt),_e(ct),pe(ct,t)):_e(Pt),pe(Pt,n)}var On=null,Oc=!1,ld=!1;function eT(t){On===null?On=[t]:On.push(t)}function Fk(t){Oc=!0,eT(t)}function Kr(){if(!ld&&On!==null){ld=!0;var t=0,e=ce;try{var n=On;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,Oc=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),SE(Sp,Kr),i}finally{ce=e,ld=!1}}return null}var ys=[],vs=0,$u=null,qu=0,zt=[],$t=0,Ii=null,Vn=1,Ln="";function si(t,e){ys[vs++]=qu,ys[vs++]=$u,$u=t,qu=e}function tT(t,e,n){zt[$t++]=Vn,zt[$t++]=Ln,zt[$t++]=Ii,Ii=t;var r=Vn;t=Ln;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-nn(e)+i|n<<i|r,Ln=s+t}else Vn=1<<s|n<<i|r,Ln=t}function Op(t){t.return!==null&&(si(t,1),tT(t,1,0))}function Vp(t){for(;t===$u;)$u=ys[--vs],ys[vs]=null,qu=ys[--vs],ys[vs]=null;for(;t===Ii;)Ii=zt[--$t],zt[$t]=null,Ln=zt[--$t],zt[$t]=null,Vn=zt[--$t],zt[$t]=null}var Mt=null,Ot=null,we=!1,tn=null;function nT(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ay(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ii!==null?{id:Vn,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Ot=null,!0):!1;default:return!1}}function ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(we){var e=Ot;if(e){var n=e;if(!ay(t,e)){if(ff(t))throw Error(B(418));e=br(n.nextSibling);var r=Mt;e&&ay(t,e)?nT(r,n):(t.flags=t.flags&-4097|2,we=!1,Mt=t)}}else{if(ff(t))throw Error(B(418));t.flags=t.flags&-4097|2,we=!1,Mt=t}}}function ly(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Hl(t){if(t!==Mt)return!1;if(!we)return ly(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Ot)){if(ff(t))throw rT(),Error(B(418));for(;e;)nT(t,e),e=br(e.nextSibling)}if(ly(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Mt?br(t.stateNode.nextSibling):null;return!0}function rT(){for(var t=Ot;t;)t=br(t.nextSibling)}function Ls(){Ot=Mt=null,we=!1}function Lp(t){tn===null?tn=[t]:tn.push(t)}var Uk=er.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Kl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uy(t){var e=t._init;return e(t._payload)}function iT(t){function e(_,v){if(t){var A=_.deletions;A===null?(_.deletions=[v],_.flags|=16):A.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=Or(_,v),_.index=0,_.sibling=null,_}function s(_,v,A){return _.index=A,t?(A=_.alternate,A!==null?(A=A.index,A<v?(_.flags|=2,v):A):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,v,A,b){return v===null||v.tag!==6?(v=md(A,_.mode,b),v.return=_,v):(v=i(v,A),v.return=_,v)}function l(_,v,A,b){var L=A.type;return L===ds?p(_,v,A.props.children,b,A.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fr&&uy(L)===v.type)?(b=i(v,A.props),b.ref=bo(_,v,A),b.return=_,b):(b=yu(A.type,A.key,A.props,null,_.mode,b),b.ref=bo(_,v,A),b.return=_,b)}function h(_,v,A,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=gd(A,_.mode,b),v.return=_,v):(v=i(v,A.children||[]),v.return=_,v)}function p(_,v,A,b,L){return v===null||v.tag!==7?(v=yi(A,_.mode,b,L),v.return=_,v):(v=i(v,A),v.return=_,v)}function c(_,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=md(""+v,_.mode,A),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ll:return A=yu(v.type,v.key,v.props,null,_.mode,A),A.ref=bo(_,null,v),A.return=_,A;case hs:return v=gd(v,_.mode,A),v.return=_,v;case fr:var b=v._init;return c(_,b(v._payload),A)}if(Bo(v)||So(v))return v=yi(v,_.mode,A,null),v.return=_,v;Kl(_,v)}return null}function d(_,v,A,b){var L=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return L!==null?null:a(_,v,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ll:return A.key===L?l(_,v,A,b):null;case hs:return A.key===L?h(_,v,A,b):null;case fr:return L=A._init,d(_,v,L(A._payload),b)}if(Bo(A)||So(A))return L!==null?null:p(_,v,A,b,null);Kl(_,A)}return null}function m(_,v,A,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(A)||null,a(v,_,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ll:return _=_.get(b.key===null?A:b.key)||null,l(v,_,b,L);case hs:return _=_.get(b.key===null?A:b.key)||null,h(v,_,b,L);case fr:var M=b._init;return m(_,v,A,M(b._payload),L)}if(Bo(b)||So(b))return _=_.get(A)||null,p(v,_,b,L,null);Kl(v,b)}return null}function y(_,v,A,b){for(var L=null,M=null,R=v,T=v=0,S=null;R!==null&&T<A.length;T++){R.index>T?(S=R,R=null):S=R.sibling;var P=d(_,R,A[T],b);if(P===null){R===null&&(R=S);break}t&&R&&P.alternate===null&&e(_,R),v=s(P,v,T),M===null?L=P:M.sibling=P,M=P,R=S}if(T===A.length)return n(_,R),we&&si(_,T),L;if(R===null){for(;T<A.length;T++)R=c(_,A[T],b),R!==null&&(v=s(R,v,T),M===null?L=R:M.sibling=R,M=R);return we&&si(_,T),L}for(R=r(_,R);T<A.length;T++)S=m(R,_,T,A[T],b),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?T:S.key),v=s(S,v,T),M===null?L=S:M.sibling=S,M=S);return t&&R.forEach(function(C){return e(_,C)}),we&&si(_,T),L}function E(_,v,A,b){var L=So(A);if(typeof L!="function")throw Error(B(150));if(A=L.call(A),A==null)throw Error(B(151));for(var M=L=null,R=v,T=v=0,S=null,P=A.next();R!==null&&!P.done;T++,P=A.next()){R.index>T?(S=R,R=null):S=R.sibling;var C=d(_,R,P.value,b);if(C===null){R===null&&(R=S);break}t&&R&&C.alternate===null&&e(_,R),v=s(C,v,T),M===null?L=C:M.sibling=C,M=C,R=S}if(P.done)return n(_,R),we&&si(_,T),L;if(R===null){for(;!P.done;T++,P=A.next())P=c(_,P.value,b),P!==null&&(v=s(P,v,T),M===null?L=P:M.sibling=P,M=P);return we&&si(_,T),L}for(R=r(_,R);!P.done;T++,P=A.next())P=m(R,_,T,P.value,b),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?T:P.key),v=s(P,v,T),M===null?L=P:M.sibling=P,M=P);return t&&R.forEach(function(x){return e(_,x)}),we&&si(_,T),L}function I(_,v,A,b){if(typeof A=="object"&&A!==null&&A.type===ds&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ll:e:{for(var L=A.key,M=v;M!==null;){if(M.key===L){if(L=A.type,L===ds){if(M.tag===7){n(_,M.sibling),v=i(M,A.props.children),v.return=_,_=v;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fr&&uy(L)===M.type){n(_,M.sibling),v=i(M,A.props),v.ref=bo(_,M,A),v.return=_,_=v;break e}n(_,M);break}else e(_,M);M=M.sibling}A.type===ds?(v=yi(A.props.children,_.mode,b,A.key),v.return=_,_=v):(b=yu(A.type,A.key,A.props,null,_.mode,b),b.ref=bo(_,v,A),b.return=_,_=b)}return o(_);case hs:e:{for(M=A.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(_,v.sibling),v=i(v,A.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=gd(A,_.mode,b),v.return=_,_=v}return o(_);case fr:return M=A._init,I(_,v,M(A._payload),b)}if(Bo(A))return y(_,v,A,b);if(So(A))return E(_,v,A,b);Kl(_,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,A),v.return=_,_=v):(n(_,v),v=md(A,_.mode,b),v.return=_,_=v),o(_)):n(_,v)}return I}var Ms=iT(!0),sT=iT(!1),Gu=Hr(null),Hu=null,ws=null,Mp=null;function Fp(){Mp=ws=Hu=null}function Up(t){var e=Gu.current;_e(Gu),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Hu=t,Mp=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Mp!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Hu===null)throw Error(B(308));ws=t,Hu.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var pi=null;function Bp(t){pi===null?pi=[t]:pi.push(t)}function oT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rp(t,n)}}function cy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ku(t,e,n,r){var i=t.updateQueue;pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,h=l.next;l.next=null,o===null?s=h:o.next=h,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=h:a.next=h,p.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,p=h=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,E=a;switch(d=e,m=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){c=y.call(m,c,d);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,d=typeof y=="function"?y.call(m,c,d):y,d==null)break e;c=Pe({},c,d);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(h=p=m,l=c):p=p.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(l=c),i.baseState=l,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Si|=o,t.lanes=o,t.memoizedState=c}}function hy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Ya={},_n=Hr(Ya),Aa=Hr(Ya),Sa=Hr(Ya);function mi(t){if(t===Ya)throw Error(B(174));return t}function zp(t,e){switch(pe(Sa,e),pe(Aa,t),pe(_n,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wd(e,t)}_e(_n),pe(_n,e)}function Fs(){_e(_n),_e(Aa),_e(Sa)}function lT(t){mi(Sa.current);var e=mi(_n.current),n=Wd(e,t.type);e!==n&&(pe(Aa,t),pe(_n,n))}function $p(t){Aa.current===t&&(_e(_n),_e(Aa))}var Ie=Hr(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function qp(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var fu=er.ReactCurrentDispatcher,cd=er.ReactCurrentBatchConfig,Ai=0,Se=null,Be=null,Ge=null,Qu=!1,ta=!1,Ra=0,Bk=0;function nt(){throw Error(B(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Hp(t,e,n,r,i,s){if(Ai=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=t===null||t.memoizedState===null?qk:Gk,t=n(r,i),ta){s=0;do{if(ta=!1,Ra=0,25<=s)throw Error(B(301));s+=1,Ge=Be=null,e.updateQueue=null,fu.current=Hk,t=n(r,i)}while(ta)}if(fu.current=Xu,e=Be!==null&&Be.next!==null,Ai=0,Ge=Be=Se=null,Qu=!1,e)throw Error(B(300));return t}function Kp(){var t=Ra!==0;return Ra=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Se.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Qt(){if(Be===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ge===null?Se.memoizedState:Ge.next;if(e!==null)Ge=e,Be=t;else{if(t===null)throw Error(B(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ge===null?Se.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Pa(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,h=s;do{var p=h.lane;if((Ai&p)===p)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var c={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,Se.lanes|=p,Si|=p}h=h.next}while(h!==null&&h!==s);l===null?o=r:l.next=a,sn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uT(){}function cT(t,e){var n=Se,r=Qt(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,Wp(fT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,ka(9,dT.bind(null,n,r,i,e),void 0,null),He===null)throw Error(B(349));Ai&30||hT(n,e,i)}return i}function hT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dT(t,e,n,r){e.value=n,e.getSnapshot=r,pT(e)&&mT(t)}function fT(t,e,n){return n(function(){pT(e)&&mT(t)})}function pT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function mT(t){var e=Kn(t,1);e!==null&&rn(e,t,1,-1)}function dy(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=$k.bind(null,Se,t),[e.memoizedState,t]}function ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gT(){return Qt().memoizedState}function pu(t,e,n,r){var i=cn();Se.flags|=t,i.memoizedState=ka(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&Gp(r,o.deps)){i.memoizedState=ka(e,n,s,r);return}}Se.flags|=t,i.memoizedState=ka(1|e,n,s,r)}function fy(t,e){return pu(8390656,8,t,e)}function Wp(t,e){return Vc(2048,8,t,e)}function _T(t,e){return Vc(4,2,t,e)}function yT(t,e){return Vc(4,4,t,e)}function vT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wT(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,vT.bind(null,e,t),n)}function Qp(){}function ET(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function TT(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function IT(t,e,n){return Ai&21?(sn(n,e)||(n=kE(),Se.lanes|=n,Si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function jk(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=cd.transition;cd.transition={};try{t(!1),e()}finally{ce=n,cd.transition=r}}function AT(){return Qt().memoizedState}function zk(t,e,n){var r=Nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ST(t))RT(e,n);else if(n=oT(t,e,n,r),n!==null){var i=gt();rn(n,t,r,i),PT(n,e,r)}}function $k(t,e,n){var r=Nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ST(t))RT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sn(a,o)){var l=e.interleaved;l===null?(i.next=i,Bp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=oT(t,e,i,r),n!==null&&(i=gt(),rn(n,t,r,i),PT(n,e,r))}}function ST(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function RT(t,e){ta=Qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function PT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rp(t,n)}}var Xu={readContext:Wt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},qk={readContext:Wt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:fy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pu(4194308,4,vT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return pu(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zk.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:Qp,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=jk.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=cn();if(we){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),He===null)throw Error(B(349));Ai&30||hT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fy(fT.bind(null,r,s,t),[t]),r.flags|=2048,ka(9,dT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=He.identifierPrefix;if(we){var n=Ln,r=Vn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Bk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gk={readContext:Wt,useCallback:ET,useContext:Wt,useEffect:Wp,useImperativeHandle:wT,useInsertionEffect:_T,useLayoutEffect:yT,useMemo:TT,useReducer:hd,useRef:gT,useState:function(){return hd(Pa)},useDebugValue:Qp,useDeferredValue:function(t){var e=Qt();return IT(e,Be.memoizedState,t)},useTransition:function(){var t=hd(Pa)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:uT,useSyncExternalStore:cT,useId:AT,unstable_isNewReconciler:!1},Hk={readContext:Wt,useCallback:ET,useContext:Wt,useEffect:Wp,useImperativeHandle:wT,useInsertionEffect:_T,useLayoutEffect:yT,useMemo:TT,useReducer:dd,useRef:gT,useState:function(){return dd(Pa)},useDebugValue:Qp,useDeferredValue:function(t){var e=Qt();return Be===null?e.memoizedState=t:IT(e,Be.memoizedState,t)},useTransition:function(){var t=dd(Pa)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:uT,useSyncExternalStore:cT,useId:AT,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Nr(t),s=jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(rn(e,t,i,r),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Nr(t),s=jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(rn(e,t,i,r),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Nr(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,r),e!==null&&(rn(e,t,r,n),du(e,t,r))}};function py(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function kT(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=kt(e)?Ti:ct.current,r=e.contextTypes,s=(r=r!=null)?Vs(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function my(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},jp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=kt(e)?Ti:ct.current,i.context=Vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lc.enqueueReplaceState(i,i.state,null),Ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",r=e;do n+=wP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kk=typeof WeakMap=="function"?WeakMap:Map;function CT(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ju||(Ju=!0,kf=r),yf(t,e)},n}function bT(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yf(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aC.bind(null,t,e,n),e.then(t,t))}function _y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Wk=er.ReactCurrentOwner,St=!1;function pt(t,e,n,r){e.child=t===null?sT(e,null,n,r):Ms(e,t.child,n,r)}function vy(t,e,n,r,i){n=n.render;var s=e.ref;return ks(e,i),r=Hp(t,e,n,r,s,i),n=Kp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(we&&n&&Op(e),e.flags|=1,pt(t,e,r,i),e.child)}function wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xT(t,e,s,r,i)):(t=yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=Or(s,r),t.ref=e.ref,t.return=e,e.child=t}function xT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return vf(t,e,n,r,i)}function DT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ts,Dt),Dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Ts,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Ts,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Ts,Dt),Dt|=r;return pt(t,e,i,n),e.child}function NT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vf(t,e,n,r,i){var s=kt(n)?Ti:ct.current;return s=Vs(e,s),ks(e,i),n=Hp(t,e,n,r,s,i),r=Kp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(we&&r&&Op(e),e.flags|=1,pt(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(kt(n)){var s=!0;zu(e)}else s=!1;if(ks(e,i),e.stateNode===null)mu(t,e),kT(e,n,r),_f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Wt(h):(h=kt(n)?Ti:ct.current,h=Vs(e,h));var p=n.getDerivedStateFromProps,c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==h)&&my(e,o,r,h),pr=!1;var d=e.memoizedState;o.state=d,Ku(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Pt.current||pr?(typeof p=="function"&&(gf(e,n,p,r),l=e.memoizedState),(a=pr||py(e,n,a,r,d,l,h))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,aT(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:Zt(e.type,a),o.props=h,c=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wt(l):(l=kt(n)?Ti:ct.current,l=Vs(e,l));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&my(e,o,r,l),pr=!1,d=e.memoizedState,o.state=d,Ku(e,r,o,i);var y=e.memoizedState;a!==c||d!==y||Pt.current||pr?(typeof m=="function"&&(gf(e,n,m,r),y=e.memoizedState),(h=pr||py(e,n,h,r,d,y,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return wf(t,e,n,r,s,i)}function wf(t,e,n,r,i,s){NT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&oy(e,n,!1),Wn(t,e,s);r=e.stateNode,Wk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,a,s)):pt(t,e,a,s),e.memoizedState=r.state,i&&oy(e,n,!0),e.child}function OT(t){var e=t.stateNode;e.pendingContext?sy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sy(t,e.context,!1),zp(t,e.containerInfo)}function Ty(t,e,n,r,i){return Ls(),Lp(i),e.flags|=256,pt(t,e,n,r),e.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function Tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function VT(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,r,0,null),t=yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tf(n),e.memoizedState=Ef,t):Xp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Qk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Or(a,s):(s=yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ef,r}return s=t.child,t=s.sibling,r=Or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xp(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,n,r){return r!==null&&Lp(r),Ms(e,t.child,null,n),t=Xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(B(422))),Wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uc({mode:"visible",children:r.children},i,0,null),s=yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=Tf(o),e.memoizedState=Ef,s);if(!(e.mode&1))return Wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=fd(s,r,void 0),Wl(t,e,o,r)}if(a=(o&t.childLanes)!==0,St||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),rn(r,t,i,-1))}return nm(),r=fd(Error(B(421))),Wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=br(i.nextSibling),Mt=e,we=!0,tn=null,t!==null&&(zt[$t++]=Vn,zt[$t++]=Ln,zt[$t++]=Ii,Vn=t.id,Ln=t.overflow,Ii=e),e=Xp(e,r.children),e.flags|=4096,e)}function Iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mf(t.return,e,n)}function pd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function LT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iy(t,n,e);else if(t.tag===19)Iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pd(e,!0,n,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xk(t,e,n){switch(e.tag){case 3:OT(e),Ls();break;case 5:lT(e);break;case 1:kt(e.type)&&zu(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?VT(t,e,n):(pe(Ie,Ie.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return LT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,DT(t,e,n)}return Wn(t,e,n)}var MT,If,FT,UT;MT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};FT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi(_n.current);var s=null;switch(n){case"input":i=qd(t,i),r=qd(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Kd(t,i),r=Kd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}Qd(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(fa.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var l=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&l!==a&&(l!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(fa.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(h,l))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};UT=function(t,e,n,r){n!==r&&(e.flags|=4)};function xo(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Yk(t,e,n){var r=e.pendingProps;switch(Vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return kt(e.type)&&ju(),rt(e),null;case 3:return r=e.stateNode,Fs(),_e(Pt),_e(ct),qp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(xf(tn),tn=null))),If(t,e),rt(e),null;case 5:$p(e);var i=mi(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)FT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return rt(e),null}if(t=mi(_n.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<zo.length;i++)ge(zo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":D_(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":O_(r,s),ge("invalid",r)}Qd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ml(r),N_(r,s,!0);break;case"textarea":Ml(r),V_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Ia]=r,MT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xd(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<zo.length;i++)ge(zo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":D_(t,r),i=qd(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ge("invalid",t);break;case"textarea":O_(t,r),i=Kd(t,r),ge("invalid",t);break;default:i=r}Qd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&wp(t,s,l,o))}switch(n){case"input":Ml(t),N_(t,r,!1);break;case"textarea":Ml(t),V_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?As(t,!!r.multiple,s,!1):r.defaultValue!=null&&As(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)UT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=mi(Sa.current),mi(_n.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return rt(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Ot!==null&&e.mode&1&&!(e.flags&128))rT(),Ls(),e.flags|=98560,s=!1;else if(s=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[hn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else tn!==null&&(xf(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?je===0&&(je=3):nm())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Fs(),If(t,e),t===null&&Ea(e.stateNode.containerInfo),rt(e),null;case 10:return Up(e.type._context),rt(e),null;case 17:return kt(e.type)&&ju(),rt(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xo(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=128,xo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>Bs&&(e.flags|=128,r=!0,xo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return rt(e),null}else 2*Ve()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Jk(t,e){switch(Vp(e),e.tag){case 1:return kt(e.type)&&ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),_e(Pt),_e(ct),qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $p(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return Fs(),null;case 10:return Up(e.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var Ql=!1,st=!1,Zk=typeof WeakSet=="function"?WeakSet:Set,H=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Af(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Ay=!1;function eC(t,e){if(af=Mu,t=qE(),Np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,h=0,p=0,c=t,d=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)d=c,c=m;for(;;){if(c===t)break t;if(d===n&&++h===i&&(a=o),d===s&&++p===r&&(l=o),(m=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Mu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,I=y.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?E:Zt(e.type,E),I);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){xe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return y=Ay,Ay=!1,y}function na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Af(e,n,s)}i=i.next}while(i!==r)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function BT(t){var e=t.alternate;e!==null&&(t.alternate=null,BT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Ia],delete e[hf],delete e[Lk],delete e[Mk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jT(t){return t.tag===5||t.tag===3||t.tag===4}function Sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Pf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}var We=null,en=!1;function ar(t,e,n){for(n=n.child;n!==null;)zT(t,e,n),n=n.sibling}function zT(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:st||Es(n,e);case 6:var r=We,i=en;We=null,ar(t,e,n),We=r,en=i,We!==null&&(en?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(en?(t=We,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),ya(t)):ad(We,n.stateNode));break;case 4:r=We,i=en,We=n.stateNode.containerInfo,en=!0,ar(t,e,n),We=r,en=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Af(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!st&&(Es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,ar(t,e,n),st=r):ar(t,e,n);break;default:ar(t,e,n)}}function Ry(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zk),e.forEach(function(r){var i=uC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,en=!1;break e;case 3:We=a.stateNode.containerInfo,en=!0;break e;case 4:We=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(We===null)throw Error(B(160));zT(s,o,i),We=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(h){xe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$T(e,t),e=e.sibling}function $T(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),un(t),r&4){try{na(3,t,t.return),Mc(3,t)}catch(E){xe(t,t.return,E)}try{na(5,t,t.return)}catch(E){xe(t,t.return,E)}}break;case 1:Jt(e,t),un(t),r&512&&n!==null&&Es(n,n.return);break;case 5:if(Jt(e,t),un(t),r&512&&n!==null&&Es(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(E){xe(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hE(i,s),Xd(a,o);var h=Xd(a,s);for(o=0;o<l.length;o+=2){var p=l[o],c=l[o+1];p==="style"?gE(i,c):p==="dangerouslySetInnerHTML"?pE(i,c):p==="children"?pa(i,c):wp(i,p,c,h)}switch(a){case"input":Gd(i,s);break;case"textarea":dE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?As(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?As(i,!!s.multiple,s.defaultValue,!0):As(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ia]=s}catch(E){xe(t,t.return,E)}}break;case 6:if(Jt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){xe(t,t.return,E)}}break;case 3:if(Jt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(E){xe(t,t.return,E)}break;case 4:Jt(e,t),un(t);break;case 13:Jt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zp=Ve())),r&4&&Ry(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(st=(h=st)||p,Jt(e,t),st=h):Jt(e,t),un(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(c=H=p;H!==null;){switch(d=H,m=d.child,d.tag){case 0:case 11:case 14:case 15:na(4,d,d.return);break;case 1:Es(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){xe(r,n,E)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){ky(c);continue}}m!==null?(m.return=d,H=m):ky(c)}p=p.sibling}e:for(p=null,c=t;;){if(c.tag===5){if(p===null){p=c;try{i=c.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mE("display",o))}catch(E){xe(t,t.return,E)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=h?"":c.memoizedProps}catch(E){xe(t,t.return,E)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Jt(e,t),un(t),r&4&&Ry(t);break;case 21:break;default:Jt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jT(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=Sy(t);Pf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sy(t);Rf(t,a,o);break;default:throw Error(B(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tC(t,e,n){H=t,qT(t)}function qT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ql;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=Ql;var h=st;if(Ql=o,(st=l)&&!h)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Cy(i):l!==null?(l.return=o,H=l):Cy(i);for(;s!==null;)H=s,qT(s),s=s.sibling;H=i,Ql=a,st=h}Py(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Py(t)}}function Py(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&ya(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}st||e.flags&512&&Sf(e)}catch(d){xe(e,e.return,d)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ky(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Cy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{Sf(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{Sf(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var nC=Math.ceil,Yu=er.ReactCurrentDispatcher,Yp=er.ReactCurrentOwner,Ht=er.ReactCurrentBatchConfig,oe=0,He=null,Me=null,Ye=0,Dt=0,Ts=Hr(0),je=0,Ca=null,Si=0,Fc=0,Jp=0,ra=null,At=null,Zp=0,Bs=1/0,Dn=null,Ju=!1,kf=null,Dr=null,Xl=!1,Ar=null,Zu=0,ia=0,Cf=null,gu=-1,_u=0;function gt(){return oe&6?Ve():gu!==-1?gu:gu=Ve()}function Nr(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:Uk.transition!==null?(_u===0&&(_u=kE()),_u):(t=ce,t!==0||(t=window.event,t=t===void 0?16:VE(t.type)),t):1}function rn(t,e,n,r){if(50<ia)throw ia=0,Cf=null,Error(B(185));Wa(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(Fc|=n),je===4&&gr(t,Ye)),Ct(t,r),n===1&&oe===0&&!(e.mode&1)&&(Bs=Ve()+500,Oc&&Kr()))}function Ct(t,e){var n=t.callbackNode;UP(t,e);var r=Lu(t,t===He?Ye:0);if(r===0)n!==null&&F_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&F_(n),e===1)t.tag===0?Fk(by.bind(null,t)):eT(by.bind(null,t)),Ok(function(){!(oe&6)&&Kr()}),n=null;else{switch(CE(r)){case 1:n=Sp;break;case 4:n=RE;break;case 16:n=Vu;break;case 536870912:n=PE;break;default:n=Vu}n=JT(n,GT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function GT(t,e){if(gu=-1,_u=0,oe&6)throw Error(B(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Lu(t,t===He?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=oe;oe|=2;var s=KT();(He!==t||Ye!==e)&&(Dn=null,Bs=Ve()+500,_i(t,e));do try{sC();break}catch(a){HT(t,a)}while(!0);Fp(),Yu.current=s,oe=i,Me!==null?e=0:(He=null,Ye=0,e=je)}if(e!==0){if(e===2&&(i=tf(t),i!==0&&(r=i,e=bf(t,i))),e===1)throw n=Ca,_i(t,0),gr(t,r),Ct(t,Ve()),n;if(e===6)gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!rC(i)&&(e=ec(t,r),e===2&&(s=tf(t),s!==0&&(r=s,e=bf(t,s))),e===1))throw n=Ca,_i(t,0),gr(t,r),Ct(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:oi(t,At,Dn);break;case 3:if(gr(t,r),(r&130023424)===r&&(e=Zp+500-Ve(),10<e)){if(Lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cf(oi.bind(null,t,At,Dn),e);break}oi(t,At,Dn);break;case 4:if(gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nC(r/1960))-r,10<r){t.timeoutHandle=cf(oi.bind(null,t,At,Dn),r);break}oi(t,At,Dn);break;case 5:oi(t,At,Dn);break;default:throw Error(B(329))}}}return Ct(t,Ve()),t.callbackNode===n?GT.bind(null,t):null}function bf(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=ec(t,e),t!==2&&(e=At,At=n,e!==null&&xf(e)),t}function xf(t){At===null?At=t:At.push.apply(At,t)}function rC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~Jp,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function by(t){if(oe&6)throw Error(B(327));Cs();var e=Lu(t,0);if(!(e&1))return Ct(t,Ve()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=tf(t);r!==0&&(e=r,n=bf(t,r))}if(n===1)throw n=Ca,_i(t,0),gr(t,e),Ct(t,Ve()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,At,Dn),Ct(t,Ve()),null}function em(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Bs=Ve()+500,Oc&&Kr())}}function Ri(t){Ar!==null&&Ar.tag===0&&!(oe&6)&&Cs();var e=oe;oe|=1;var n=Ht.transition,r=ce;try{if(Ht.transition=null,ce=1,t)return t()}finally{ce=r,Ht.transition=n,oe=e,!(oe&6)&&Kr()}}function tm(){Dt=Ts.current,_e(Ts)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nk(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:Fs(),_e(Pt),_e(ct),qp();break;case 5:$p(r);break;case 4:Fs();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Up(r.type._context);break;case 22:case 23:tm()}n=n.return}if(He=t,Me=t=Or(t.current,null),Ye=Dt=e,je=0,Ca=null,Jp=Fc=Si=0,At=ra=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function HT(t,e){do{var n=Me;try{if(Fp(),fu.current=Xu,Qu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qu=!1}if(Ai=0,Ge=Be=Se=null,ta=!1,Ra=0,Yp.current=null,n===null||n.return===null){je=1,Ca=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,p=a,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=_y(o);if(m!==null){m.flags&=-257,yy(m,o,a,s,e),m.mode&1&&gy(s,h,e),e=m,l=h;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if(!(e&1)){gy(s,h,e),nm();break e}l=Error(B(426))}}else if(we&&a.mode&1){var I=_y(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),yy(I,o,a,s,e),Lp(Us(l,a));break e}}s=l=Us(l,a),je!==4&&(je=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=CT(s,l,e);cy(s,_);break e;case 1:a=l;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Dr===null||!Dr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=bT(s,a,e);cy(s,b);break e}}s=s.return}while(s!==null)}QT(n)}catch(L){e=L,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function KT(){var t=Yu.current;return Yu.current=Xu,t===null?Xu:t}function nm(){(je===0||je===3||je===2)&&(je=4),He===null||!(Si&268435455)&&!(Fc&268435455)||gr(He,Ye)}function ec(t,e){var n=oe;oe|=2;var r=KT();(He!==t||Ye!==e)&&(Dn=null,_i(t,e));do try{iC();break}catch(i){HT(t,i)}while(!0);if(Fp(),oe=n,Yu.current=r,Me!==null)throw Error(B(261));return He=null,Ye=0,je}function iC(){for(;Me!==null;)WT(Me)}function sC(){for(;Me!==null&&!bP();)WT(Me)}function WT(t){var e=YT(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?QT(t):Me=e,Yp.current=null}function QT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jk(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Me=null;return}}else if(n=Yk(n,e,Dt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);je===0&&(je=5)}function oi(t,e,n){var r=ce,i=Ht.transition;try{Ht.transition=null,ce=1,oC(t,e,n,r)}finally{Ht.transition=i,ce=r}return null}function oC(t,e,n,r){do Cs();while(Ar!==null);if(oe&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BP(t,s),t===He&&(Me=He=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xl||(Xl=!0,JT(Vu,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=ce;ce=1;var a=oe;oe|=4,Yp.current=null,eC(t,n),$T(n,t),Rk(lf),Mu=!!af,lf=af=null,t.current=n,tC(n),xP(),oe=a,ce=o,Ht.transition=s}else t.current=n;if(Xl&&(Xl=!1,Ar=t,Zu=i),s=t.pendingLanes,s===0&&(Dr=null),OP(n.stateNode),Ct(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ju)throw Ju=!1,t=kf,kf=null,t;return Zu&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===Cf?ia++:(ia=0,Cf=t):ia=0,Kr(),null}function Cs(){if(Ar!==null){var t=CE(Zu),e=Ht.transition,n=ce;try{if(Ht.transition=null,ce=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,Zu=0,oe&6)throw Error(B(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var h=a[l];for(H=h;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:na(8,p,s)}var c=p.child;if(c!==null)c.return=p,H=c;else for(;H!==null;){p=H;var d=p.sibling,m=p.return;if(BT(p),p===h){H=null;break}if(d!==null){d.return=m,H=d;break}H=m}}}var y=s.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,H=_;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=v;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(L){xe(a,a.return,L)}if(a===o){H=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,H=b;break e}H=a.return}}if(oe=i,Kr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Cc,t)}catch{}r=!0}return r}finally{ce=n,Ht.transition=e}}return!1}function xy(t,e,n){e=Us(n,e),e=CT(t,e,1),t=xr(t,e,1),e=gt(),t!==null&&(Wa(t,1,e),Ct(t,e))}function xe(t,e,n){if(t.tag===3)xy(t,t,n);else for(;e!==null;){if(e.tag===3){xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Us(n,t),t=bT(e,t,1),e=xr(e,t,1),t=gt(),e!==null&&(Wa(e,1,t),Ct(e,t));break}}e=e.return}}function aC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ye&n)===n&&(je===4||je===3&&(Ye&130023424)===Ye&&500>Ve()-Zp?_i(t,0):Jp|=n),Ct(t,e)}function XT(t,e){e===0&&(t.mode&1?(e=Bl,Bl<<=1,!(Bl&130023424)&&(Bl=4194304)):e=1);var n=gt();t=Kn(t,e),t!==null&&(Wa(t,e,n),Ct(t,n))}function lC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),XT(t,n)}function uC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),XT(t,n)}var YT;YT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,Xk(t,e,n);St=!!(t.flags&131072)}else St=!1,we&&e.flags&1048576&&tT(e,qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mu(t,e),t=e.pendingProps;var i=Vs(e,ct.current);ks(e,n),i=Hp(null,e,r,t,i,n);var s=Kp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,zu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jp(e),i.updater=Lc,e.stateNode=i,i._reactInternals=e,_f(e,r,t,n),e=wf(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Op(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hC(r),t=Zt(r,t),i){case 0:e=vf(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=vy(null,e,r,t,n);break e;case 14:e=wy(null,e,r,Zt(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),vf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Ey(t,e,r,i,n);case 3:e:{if(OT(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,aT(t,e),Ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Us(Error(B(423)),e),e=Ty(t,e,r,n,i);break e}else if(r!==i){i=Us(Error(B(424)),e),e=Ty(t,e,r,n,i);break e}else for(Ot=br(e.stateNode.containerInfo.firstChild),Mt=e,we=!0,tn=null,n=sT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===i){e=Wn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return lT(e),t===null&&pf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uf(r,i)?o=null:s!==null&&uf(r,s)&&(e.flags|=32),NT(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return VT(t,e,n);case 4:return zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),vy(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Gu,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!Pt.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jn(-1,n&-n),l.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?l.next=l:(l.next=p.next,p.next=l),h.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ks(e,n),i=Wt(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),wy(t,e,r,i,n);case 15:return xT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),mu(t,e),e.tag=1,kt(r)?(t=!0,zu(e)):t=!1,ks(e,n),kT(e,r,i),_f(e,r,i,n),wf(null,e,r,!0,t,n);case 19:return LT(t,e,n);case 22:return DT(t,e,n)}throw Error(B(156,e.tag))};function JT(t,e){return SE(t,e)}function cC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new cC(t,e,n,r)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hC(t){if(typeof t=="function")return rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tp)return 11;if(t===Ip)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ds:return yi(n.children,i,s,e);case Ep:o=8,i|=8;break;case Bd:return t=qt(12,n,e,i|2),t.elementType=Bd,t.lanes=s,t;case jd:return t=qt(13,n,e,i),t.elementType=jd,t.lanes=s,t;case zd:return t=qt(19,n,e,i),t.elementType=zd,t.lanes=s,t;case lE:return Uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oE:o=10;break e;case aE:o=9;break e;case Tp:o=11;break e;case Ip:o=14;break e;case fr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yi(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Uc(t,e,n,r){return t=qt(22,t,r,e),t.elementType=lE,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function im(t,e,n,r,i,s,o,a,l){return t=new dC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jp(s),t}function fC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ZT(t){if(!t)return Br;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(kt(n))return ZE(t,n,e)}return e}function eI(t,e,n,r,i,s,o,a,l){return t=im(n,r,!0,t,i,s,o,a,l),t.context=ZT(null),n=t.current,r=gt(),i=Nr(n),s=jn(r,i),s.callback=e??null,xr(n,s,i),t.current.lanes=i,Wa(t,i,r),Ct(t,r),t}function Bc(t,e,n,r){var i=e.current,s=gt(),o=Nr(i);return n=ZT(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(i,e,o),t!==null&&(rn(t,i,o,s),du(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sm(t,e){Dy(t,e),(t=t.alternate)&&Dy(t,e)}function pC(){return null}var tI=typeof reportError=="function"?reportError:function(t){console.error(t)};function om(t){this._internalRoot=t}jc.prototype.render=om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Bc(t,e,null,null)};jc.prototype.unmount=om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){Bc(null,t,null,null)}),e[Hn]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=DE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&OE(t)}};function am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ny(){}function mC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=tc(o);s.call(h)}}var o=eI(e,r,t,0,null,!1,!1,"",Ny);return t._reactRootContainer=o,t[Hn]=o.current,Ea(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=tc(l);a.call(h)}}var l=im(t,0,!1,null,null,!1,!1,"",Ny);return t._reactRootContainer=l,t[Hn]=l.current,Ea(t.nodeType===8?t.parentNode:t),Ri(function(){Bc(e,l,n,r)}),l}function $c(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=tc(o);a.call(l)}}Bc(e,o,t,i)}else o=mC(n,e,t,i,r);return tc(o)}bE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(Rp(e,n|1),Ct(e,Ve()),!(oe&6)&&(Bs=Ve()+500,Kr()))}break;case 13:Ri(function(){var r=Kn(t,1);if(r!==null){var i=gt();rn(r,t,1,i)}}),sm(t,1)}};Pp=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=gt();rn(e,t,134217728,n)}sm(t,134217728)}};xE=function(t){if(t.tag===13){var e=Nr(t),n=Kn(t,e);if(n!==null){var r=gt();rn(n,t,e,r)}sm(t,e)}};DE=function(){return ce};NE=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Jd=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nc(r);if(!i)throw Error(B(90));cE(r),Gd(r,i)}}}break;case"textarea":dE(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};vE=em;wE=Ri;var gC={usingClientEntryPoint:!1,Events:[Xa,gs,Nc,_E,yE,em]},Do={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_C={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=IE(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||pC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Cc=Yl.inject(_C),gn=Yl}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gC;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(e))throw Error(B(200));return fC(t,e,null,n)};Bt.createRoot=function(t,e){if(!am(t))throw Error(B(299));var n=!1,r="",i=tI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=im(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Ea(t.nodeType===8?t.parentNode:t),new om(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=IE(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return Ri(t)};Bt.hydrate=function(t,e,n){if(!zc(e))throw Error(B(200));return $c(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!am(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=eI(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,Ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};Bt.render=function(t,e,n){if(!zc(e))throw Error(B(200));return $c(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!zc(t))throw Error(B(40));return t._reactRootContainer?(Ri(function(){$c(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Bt.unstable_batchedUpdates=em;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return $c(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function nI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nI)}catch(t){console.error(t)}}nI(),nE.exports=Bt;var yC=nE.exports,rI,Oy=yC;rI=Oy.createRoot,Oy.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}var Sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sr||(Sr={}));const Vy="popstate";function vC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Df("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nc(i)}return EC(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function iI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wC(){return Math.random().toString(36).substr(2,8)}function Ly(t,e){return{usr:t.state,key:t.key,idx:e}}function Df(t,e,n,r){return n===void 0&&(n=null),ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?no(e):e,{state:n,key:e&&e.key||r||wC()})}function nc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function no(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function EC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Sr.Pop,l=null,h=p();h==null&&(h=0,o.replaceState(ba({},o.state,{idx:h}),""));function p(){return(o.state||{idx:null}).idx}function c(){a=Sr.Pop;let I=p(),_=I==null?null:I-h;h=I,l&&l({action:a,location:E.location,delta:_})}function d(I,_){a=Sr.Push;let v=Df(E.location,I,_);h=p()+1;let A=Ly(v,h),b=E.createHref(v);try{o.pushState(A,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(b)}s&&l&&l({action:a,location:E.location,delta:1})}function m(I,_){a=Sr.Replace;let v=Df(E.location,I,_);h=p();let A=Ly(v,h),b=E.createHref(v);o.replaceState(A,"",b),s&&l&&l({action:a,location:E.location,delta:0})}function y(I){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof I=="string"?I:nc(I);return v=v.replace(/ $/,"%20"),Ne(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let E={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Vy,c),l=I,()=>{i.removeEventListener(Vy,c),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let _=y(I);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:d,replace:m,go(I){return o.go(I)}};return E}var My;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(My||(My={}));function TC(t,e,n){return n===void 0&&(n="/"),IC(t,e,n)}function IC(t,e,n,r){let i=typeof e=="string"?no(e):e,s=js(i.pathname||"/",n);if(s==null)return null;let o=sI(t);AC(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let h=VC(s);a=NC(o[l],h)}return a}function sI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let h=Vr([r,l.relativePath]),p=n.concat(l);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),sI(s.children,e,p,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:xC(h,s.index),routesMeta:p})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of oI(s.path))i(s,o,l)}),e}function oI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=oI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function AC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:DC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SC=/^:[\w-]+$/,RC=3,PC=2,kC=1,CC=10,bC=-2,Fy=t=>t==="*";function xC(t,e){let n=t.split("/"),r=n.length;return n.some(Fy)&&(r+=bC),e&&(r+=PC),n.filter(i=>!Fy(i)).reduce((i,s)=>i+(SC.test(s)?RC:s===""?kC:CC),r)}function DC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],h=a===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",c=Nf({path:l.relativePath,caseSensitive:l.caseSensitive,end:h},p),d=l.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Vr([s,c.pathname]),pathnameBase:UC(Vr([s,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(s=Vr([s,c.pathnameBase]))}return o}function Nf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,p,c)=>{let{paramName:d,isOptional:m}=p;if(d==="*"){let E=a[c]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const y=a[c];return m&&!y?h[d]=void 0:h[d]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function OC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),iI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return iI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function js(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?no(t):t;return{pathname:n?n.startsWith("/")?n:MC(n,e):e,search:BC(r),hash:jC(i)}}function MC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _d(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function aI(t,e){let n=FC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=no(t):(i=ba({},t),Ne(!i.pathname||!i.pathname.includes("?"),_d("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),_d("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),_d("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}a=c>=0?e[c]:"/"}let l=LC(i,a),h=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(h||p)&&(l.pathname+="/"),l}const Vr=t=>t.join("/").replace(/\/\/+/g,"/"),UC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uI=["post","put","patch","delete"];new Set(uI);const $C=["get",...uI];new Set($C);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xa.apply(this,arguments)}const qc=F.createContext(null),cI=F.createContext(null),Wr=F.createContext(null),Gc=F.createContext(null),Qr=F.createContext({outlet:null,matches:[],isDataRoute:!1}),hI=F.createContext(null);function qC(t,e){let{relative:n}=e===void 0?{}:e;Ja()||Ne(!1);let{basename:r,navigator:i}=F.useContext(Wr),{hash:s,pathname:o,search:a}=Hc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ja(){return F.useContext(Gc)!=null}function ro(){return Ja()||Ne(!1),F.useContext(Gc).location}function dI(t){F.useContext(Wr).static||F.useLayoutEffect(t)}function GC(){let{isDataRoute:t}=F.useContext(Qr);return t?i1():HC()}function HC(){Ja()||Ne(!1);let t=F.useContext(qc),{basename:e,future:n,navigator:r}=F.useContext(Wr),{matches:i}=F.useContext(Qr),{pathname:s}=ro(),o=JSON.stringify(aI(i,n.v7_relativeSplatPath)),a=F.useRef(!1);return dI(()=>{a.current=!0}),F.useCallback(function(h,p){if(p===void 0&&(p={}),!a.current)return;if(typeof h=="number"){r.go(h);return}let c=lI(h,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Vr([e,c.pathname])),(p.replace?r.replace:r.push)(c,p.state,p)},[e,r,o,s,t])}function zF(){let{matches:t}=F.useContext(Qr),e=t[t.length-1];return e?e.params:{}}function Hc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(Wr),{matches:i}=F.useContext(Qr),{pathname:s}=ro(),o=JSON.stringify(aI(i,r.v7_relativeSplatPath));return F.useMemo(()=>lI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function KC(t,e){return WC(t,e)}function WC(t,e,n,r){Ja()||Ne(!1);let{navigator:i}=F.useContext(Wr),{matches:s}=F.useContext(Qr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let h=ro(),p;if(e){var c;let I=typeof e=="string"?no(e):e;l==="/"||(c=I.pathname)!=null&&c.startsWith(l)||Ne(!1),p=I}else p=h;let d=p.pathname||"/",m=d;if(l!=="/"){let I=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(I.length).join("/")}let y=TC(t,{pathname:m}),E=ZC(y&&y.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:Vr([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:Vr([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return e&&E?F.createElement(Gc.Provider,{value:{location:xa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Sr.Pop}},E):E}function QC(){let t=r1(),e=zC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const XC=F.createElement(QC,null);class YC extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Qr.Provider,{value:this.props.routeContext},F.createElement(hI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JC(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Qr.Provider,{value:e},r)}function ZC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);p>=0||Ne(!1),o=o.slice(0,Math.min(o.length,p+1))}let l=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let c=o[p];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(h=p),c.route.id){let{loaderData:d,errors:m}=n,y=c.route.loader&&d[c.route.id]===void 0&&(!m||m[c.route.id]===void 0);if(c.route.lazy||y){l=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,c,d)=>{let m,y=!1,E=null,I=null;n&&(m=a&&c.route.id?a[c.route.id]:void 0,E=c.route.errorElement||XC,l&&(h<0&&d===0?(s1("route-fallback"),y=!0,I=null):h===d&&(y=!0,I=c.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,d+1)),v=()=>{let A;return m?A=E:y?A=I:c.route.Component?A=F.createElement(c.route.Component,null):c.route.element?A=c.route.element:A=p,F.createElement(JC,{match:c,routeContext:{outlet:p,matches:_,isDataRoute:n!=null},children:A})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?F.createElement(YC,{location:n.location,revalidation:n.revalidation,component:E,error:m,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var fI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fI||{}),pI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pI||{});function e1(t){let e=F.useContext(qc);return e||Ne(!1),e}function t1(t){let e=F.useContext(cI);return e||Ne(!1),e}function n1(t){let e=F.useContext(Qr);return e||Ne(!1),e}function mI(t){let e=n1(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function r1(){var t;let e=F.useContext(hI),n=t1(),r=mI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function i1(){let{router:t}=e1(fI.UseNavigateStable),e=mI(pI.UseNavigateStable),n=F.useRef(!1);return dI(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xa({fromRouteId:e},s)))},[t,e])}const Uy={};function s1(t,e,n){Uy[t]||(Uy[t]=!0)}function o1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hr(t){Ne(!1)}function a1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:s,static:o=!1,future:a}=t;Ja()&&Ne(!1);let l=e.replace(/^\/*/,"/"),h=F.useMemo(()=>({basename:l,navigator:s,static:o,future:xa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=no(r));let{pathname:p="/",search:c="",hash:d="",state:m=null,key:y="default"}=r,E=F.useMemo(()=>{let I=js(p,l);return I==null?null:{location:{pathname:I,search:c,hash:d,state:m,key:y},navigationType:i}},[l,p,c,d,m,y,i]);return E==null?null:F.createElement(Wr.Provider,{value:h},F.createElement(Gc.Provider,{children:n,value:E}))}function l1(t){let{children:e,location:n}=t;return KC(Of(e),n)}new Promise(()=>{});function Of(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,Of(r.props.children,s));return}r.type!==hr&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Of(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rc.apply(this,arguments)}function gI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function u1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function c1(t,e){return t.button===0&&(!e||e==="_self")&&!u1(t)}const h1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],f1="6";try{window.__reactRouterVersion=f1}catch{}const p1=F.createContext({isTransitioning:!1}),m1="startTransition",By=aP[m1];function g1(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=vC({window:i,v5Compat:!0}));let o=s.current,[a,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},p=F.useCallback(c=>{h&&By?By(()=>l(c)):l(c)},[l,h]);return F.useLayoutEffect(()=>o.listen(p),[o,p]),F.useEffect(()=>o1(r),[r]),F.createElement(a1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const _1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v1=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:h,preventScrollReset:p,viewTransition:c}=e,d=gI(e,h1),{basename:m}=F.useContext(Wr),y,E=!1;if(typeof h=="string"&&y1.test(h)&&(y=h,_1))try{let A=new URL(window.location.href),b=h.startsWith("//")?new URL(A.protocol+h):new URL(h),L=js(b.pathname,m);b.origin===A.origin&&L!=null?h=L+b.search+b.hash:E=!0}catch{}let I=qC(h,{relative:i}),_=E1(h,{replace:o,state:a,target:l,preventScrollReset:p,relative:i,viewTransition:c});function v(A){r&&r(A),A.defaultPrevented||_(A)}return F.createElement("a",rc({},d,{href:y||I,onClick:E||s?r:v,ref:n,target:l}))}),dr=F.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:h,children:p}=e,c=gI(e,d1),d=Hc(l,{relative:c.relative}),m=ro(),y=F.useContext(cI),{navigator:E,basename:I}=F.useContext(Wr),_=y!=null&&T1(d)&&h===!0,v=E.encodeLocation?E.encodeLocation(d).pathname:d.pathname,A=m.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(A=A.toLowerCase(),b=b?b.toLowerCase():null,v=v.toLowerCase()),b&&I&&(b=js(b,I)||b);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let M=A===v||!o&&A.startsWith(v)&&A.charAt(L)==="/",R=b!=null&&(b===v||!o&&b.startsWith(v)&&b.charAt(v.length)==="/"),T={isActive:M,isPending:R,isTransitioning:_},S=M?r:void 0,P;typeof s=="function"?P=s(T):P=[s,M?"active":null,R?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let C=typeof a=="function"?a(T):a;return F.createElement(v1,rc({},c,{"aria-current":S,className:P,ref:n,style:C,to:l,viewTransition:h}),typeof p=="function"?p(T):p)});var Vf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vf||(Vf={}));var jy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jy||(jy={}));function w1(t){let e=F.useContext(qc);return e||Ne(!1),e}function E1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=GC(),h=ro(),p=Hc(t,{relative:o});return F.useCallback(c=>{if(c1(c,n)){c.preventDefault();let d=r!==void 0?r:nc(h)===nc(p);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[h,l,p,r,i,n,t,s,o,a])}function T1(t,e){e===void 0&&(e={});let n=F.useContext(p1);n==null&&Ne(!1);let{basename:r}=w1(Vf.useViewTransitionState),i=Hc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=js(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=js(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Nf(i.pathname,o)!=null||Nf(i.pathname,s)!=null}const I1="modulepreload",A1=function(t){return"/"+t},zy={},Nt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=A1(l),l in zy)return;zy[l]=!0;const h=l.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const c=document.createElement("link");if(c.rel=h?"stylesheet":I1,h||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),h)return new Promise((d,m)=>{c.addEventListener("load",d),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},_I=F.createContext();function S1({children:t}){const[e,n]=F.useState(()=>localStorage.getItem("theme")||"day"),[r,i]=F.useState(()=>localStorage.getItem("galau")==="1");F.useEffect(()=>{const a=e+(r?" galau":"");document.body.className=a,localStorage.setItem("theme",e),localStorage.setItem("galau",r?"1":"0")},[e,r]),F.useEffect(()=>{if(!localStorage.getItem("theme")){const l=new Date().getHours();n(l>=6&&l<18?"day":"night")}},[]);const s=()=>n(a=>a==="day"?"night":"day"),o=()=>i(a=>!a);return $.jsx(_I.Provider,{value:{theme:e,galau:r,toggleTheme:s,toggleGalau:o},children:t})}var $y={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},R1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,p=s>>2,c=(s&3)<<4|a>>4;let d=(a&15)<<2|h>>6,m=h&63;l||(m=64,o||(d=64)),r.push(n[p],n[c],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):R1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||c==null)throw new P1;const d=s<<2|a>>4;if(r.push(d),h!==64){const m=a<<4&240|h>>2;if(r.push(m),c!==64){const y=h<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class P1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k1=function(t){const e=yI(t);return vI.encodeByteArray(e,!0)},ic=function(t){return k1(t).replace(/\./g,"")},wI=function(t){try{return vI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=()=>C1().__FIREBASE_DEFAULTS__,x1=()=>{if(typeof process>"u"||typeof $y>"u")return;const t=$y.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wI(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return b1()||x1()||D1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EI=t=>{var e,n;return(n=(e=Kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},TI=t=>{const e=EI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},II=()=>{var t;return(t=Kc())===null||t===void 0?void 0:t.config},AI=t=>{var e;return(e=Kc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function V1(){var t;const e=(t=Kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function L1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function M1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U1(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RI(){return!V1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lm(){try{return typeof indexedDB=="object"}catch{return!1}}function PI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function B1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=j1,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?z1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function z1(t,e){return t.replace($1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $1=/\{\$([^}]+)}/g;function q1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qy(s)&&qy(o)){if(!sc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function G1(t,e){const n=new H1(t,e);return n.subscribe.bind(n)}class H1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");K1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yd),i.error===void 0&&(i.error=yd),i.complete===void 0&&(i.complete=yd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new N1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X1(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Q1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q1(t){return t===ai?void 0:t}function X1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new W1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const J1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Z1=re.INFO,eb={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},tb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class um{constructor(e){this.name=e,this._logLevel=Z1,this._logHandler=tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const nb=(t,e)=>e.some(n=>t instanceof n);let Gy,Hy;function rb(){return Gy||(Gy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ib(){return Hy||(Hy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kI=new WeakMap,Lf=new WeakMap,CI=new WeakMap,vd=new WeakMap,cm=new WeakMap;function sb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kI.set(n,t)}).catch(()=>{}),cm.set(e,t),e}function ob(t){if(Lf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lf.set(t,e)}let Mf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ab(t){Mf=t(Mf)}function lb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wd(this),e,...n);return CI.set(r,e.sort?e.sort():[e]),zn(r)}:ib().includes(t)?function(...e){return t.apply(wd(this),e),zn(kI.get(this))}:function(...e){return zn(t.apply(wd(this),e))}}function ub(t){return typeof t=="function"?lb(t):(t instanceof IDBTransaction&&ob(t),nb(t,rb())?new Proxy(t,Mf):t)}function zn(t){if(t instanceof IDBRequest)return sb(t);if(vd.has(t))return vd.get(t);const e=ub(t);return e!==t&&(vd.set(t,e),cm.set(e,t)),e}const wd=t=>cm.get(t);function Wc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}function Ed(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),zn(n).then(()=>{})}const cb=["get","getKey","getAll","getAllKeys","count"],hb=["put","add","delete","clear"],Td=new Map;function Ky(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Td.get(e))return Td.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return Td.set(e,s),s}ab(t=>({...t,get:(e,n,r)=>Ky(e,n)||t.get(e,n,r),has:(e,n)=>!!Ky(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ff="@firebase/app",Wy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new um("@firebase/app"),pb="@firebase/app-compat",mb="@firebase/analytics-compat",gb="@firebase/analytics",_b="@firebase/app-check-compat",yb="@firebase/app-check",vb="@firebase/auth",wb="@firebase/auth-compat",Eb="@firebase/database",Tb="@firebase/data-connect",Ib="@firebase/database-compat",Ab="@firebase/functions",Sb="@firebase/functions-compat",Rb="@firebase/installations",Pb="@firebase/installations-compat",kb="@firebase/messaging",Cb="@firebase/messaging-compat",bb="@firebase/performance",xb="@firebase/performance-compat",Db="@firebase/remote-config",Nb="@firebase/remote-config-compat",Ob="@firebase/storage",Vb="@firebase/storage-compat",Lb="@firebase/firestore",Mb="@firebase/vertexai-preview",Fb="@firebase/firestore-compat",Ub="firebase",Bb="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="[DEFAULT]",jb={[Ff]:"fire-core",[pb]:"fire-core-compat",[gb]:"fire-analytics",[mb]:"fire-analytics-compat",[yb]:"fire-app-check",[_b]:"fire-app-check-compat",[vb]:"fire-auth",[wb]:"fire-auth-compat",[Eb]:"fire-rtdb",[Tb]:"fire-data-connect",[Ib]:"fire-rtdb-compat",[Ab]:"fire-fn",[Sb]:"fire-fn-compat",[Rb]:"fire-iid",[Pb]:"fire-iid-compat",[kb]:"fire-fcm",[Cb]:"fire-fcm-compat",[bb]:"fire-perf",[xb]:"fire-perf-compat",[Db]:"fire-rc",[Nb]:"fire-rc-compat",[Ob]:"fire-gcs",[Vb]:"fire-gcs-compat",[Lb]:"fire-fst",[Fb]:"fire-fst-compat",[Mb]:"fire-vertex","fire-js":"fire-js",[Ub]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map,zb=new Map,Bf=new Map;function Qy(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function on(t){const e=t.name;if(Bf.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Bf.set(e,t);for(const n of oc.values())Qy(n,t);for(const n of zb.values())Qy(n,t);return!0}function zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new ji("app","Firebase",$b);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=Bb;function bI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=II()),!n)throw Lr.create("no-options");const s=oc.get(i);if(s){if(sc(n,s.options)&&sc(r,s.config))return s;throw Lr.create("duplicate-app",{appName:i})}const o=new Y1(i);for(const l of Bf.values())o.addComponent(l);const a=new qb(n,r,o);return oc.set(i,a),a}function Qc(t=Uf){const e=oc.get(t);if(!e&&t===Uf&&II())return bI();if(!e)throw Lr.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=(r=jb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(a.join(" "));return}on(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="firebase-heartbeat-database",Hb=1,Da="firebase-heartbeat-store";let Id=null;function xI(){return Id||(Id=Wc(Gb,Hb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Da)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),Id}async function Kb(t){try{const n=(await xI()).transaction(Da),r=await n.objectStore(Da).get(DI(t));return await n.done,r}catch(e){if(e instanceof ln)Qn.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Xy(t,e){try{const r=(await xI()).transaction(Da,"readwrite");await r.objectStore(Da).put(e,DI(t)),await r.done}catch(n){if(n instanceof ln)Qn.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function DI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=1024,Qb=30*24*60*60*1e3;class Xb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Qb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yy(),{heartbeatsToSend:r,unsentEntries:i}=Yb(this._heartbeatsCache.heartbeats),s=ic(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function Yy(){return new Date().toISOString().substring(0,10)}function Yb(t,e=Wb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lm()?PI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){on(new Xt("platform-logger",e=>new db(e),"PRIVATE")),on(new Xt("heartbeat",e=>new Xb(e),"PRIVATE")),bt(Ff,Wy,t),bt(Ff,Wy,"esm2017"),bt("fire-js","")}Zb("");var ex="firebase",tx="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(ex,tx,"app");var Zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,NI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function S(){}S.prototype=T.prototype,R.D=T.prototype,R.prototype=new S,R.prototype.constructor=R,R.C=function(P,C,x){for(var k=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)k[Ue-2]=arguments[Ue];return T.prototype[C].apply(P,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,T,S){S||(S=0);var P=Array(16);if(typeof T=="string")for(var C=0;16>C;++C)P[C]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(C=0;16>C;++C)P[C]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=R.g[0],S=R.g[1],C=R.g[2];var x=R.g[3],k=T+(x^S&(C^x))+P[0]+3614090360&4294967295;T=S+(k<<7&4294967295|k>>>25),k=x+(C^T&(S^C))+P[1]+3905402710&4294967295,x=T+(k<<12&4294967295|k>>>20),k=C+(S^x&(T^S))+P[2]+606105819&4294967295,C=x+(k<<17&4294967295|k>>>15),k=S+(T^C&(x^T))+P[3]+3250441966&4294967295,S=C+(k<<22&4294967295|k>>>10),k=T+(x^S&(C^x))+P[4]+4118548399&4294967295,T=S+(k<<7&4294967295|k>>>25),k=x+(C^T&(S^C))+P[5]+1200080426&4294967295,x=T+(k<<12&4294967295|k>>>20),k=C+(S^x&(T^S))+P[6]+2821735955&4294967295,C=x+(k<<17&4294967295|k>>>15),k=S+(T^C&(x^T))+P[7]+4249261313&4294967295,S=C+(k<<22&4294967295|k>>>10),k=T+(x^S&(C^x))+P[8]+1770035416&4294967295,T=S+(k<<7&4294967295|k>>>25),k=x+(C^T&(S^C))+P[9]+2336552879&4294967295,x=T+(k<<12&4294967295|k>>>20),k=C+(S^x&(T^S))+P[10]+4294925233&4294967295,C=x+(k<<17&4294967295|k>>>15),k=S+(T^C&(x^T))+P[11]+2304563134&4294967295,S=C+(k<<22&4294967295|k>>>10),k=T+(x^S&(C^x))+P[12]+1804603682&4294967295,T=S+(k<<7&4294967295|k>>>25),k=x+(C^T&(S^C))+P[13]+4254626195&4294967295,x=T+(k<<12&4294967295|k>>>20),k=C+(S^x&(T^S))+P[14]+2792965006&4294967295,C=x+(k<<17&4294967295|k>>>15),k=S+(T^C&(x^T))+P[15]+1236535329&4294967295,S=C+(k<<22&4294967295|k>>>10),k=T+(C^x&(S^C))+P[1]+4129170786&4294967295,T=S+(k<<5&4294967295|k>>>27),k=x+(S^C&(T^S))+P[6]+3225465664&4294967295,x=T+(k<<9&4294967295|k>>>23),k=C+(T^S&(x^T))+P[11]+643717713&4294967295,C=x+(k<<14&4294967295|k>>>18),k=S+(x^T&(C^x))+P[0]+3921069994&4294967295,S=C+(k<<20&4294967295|k>>>12),k=T+(C^x&(S^C))+P[5]+3593408605&4294967295,T=S+(k<<5&4294967295|k>>>27),k=x+(S^C&(T^S))+P[10]+38016083&4294967295,x=T+(k<<9&4294967295|k>>>23),k=C+(T^S&(x^T))+P[15]+3634488961&4294967295,C=x+(k<<14&4294967295|k>>>18),k=S+(x^T&(C^x))+P[4]+3889429448&4294967295,S=C+(k<<20&4294967295|k>>>12),k=T+(C^x&(S^C))+P[9]+568446438&4294967295,T=S+(k<<5&4294967295|k>>>27),k=x+(S^C&(T^S))+P[14]+3275163606&4294967295,x=T+(k<<9&4294967295|k>>>23),k=C+(T^S&(x^T))+P[3]+4107603335&4294967295,C=x+(k<<14&4294967295|k>>>18),k=S+(x^T&(C^x))+P[8]+1163531501&4294967295,S=C+(k<<20&4294967295|k>>>12),k=T+(C^x&(S^C))+P[13]+2850285829&4294967295,T=S+(k<<5&4294967295|k>>>27),k=x+(S^C&(T^S))+P[2]+4243563512&4294967295,x=T+(k<<9&4294967295|k>>>23),k=C+(T^S&(x^T))+P[7]+1735328473&4294967295,C=x+(k<<14&4294967295|k>>>18),k=S+(x^T&(C^x))+P[12]+2368359562&4294967295,S=C+(k<<20&4294967295|k>>>12),k=T+(S^C^x)+P[5]+4294588738&4294967295,T=S+(k<<4&4294967295|k>>>28),k=x+(T^S^C)+P[8]+2272392833&4294967295,x=T+(k<<11&4294967295|k>>>21),k=C+(x^T^S)+P[11]+1839030562&4294967295,C=x+(k<<16&4294967295|k>>>16),k=S+(C^x^T)+P[14]+4259657740&4294967295,S=C+(k<<23&4294967295|k>>>9),k=T+(S^C^x)+P[1]+2763975236&4294967295,T=S+(k<<4&4294967295|k>>>28),k=x+(T^S^C)+P[4]+1272893353&4294967295,x=T+(k<<11&4294967295|k>>>21),k=C+(x^T^S)+P[7]+4139469664&4294967295,C=x+(k<<16&4294967295|k>>>16),k=S+(C^x^T)+P[10]+3200236656&4294967295,S=C+(k<<23&4294967295|k>>>9),k=T+(S^C^x)+P[13]+681279174&4294967295,T=S+(k<<4&4294967295|k>>>28),k=x+(T^S^C)+P[0]+3936430074&4294967295,x=T+(k<<11&4294967295|k>>>21),k=C+(x^T^S)+P[3]+3572445317&4294967295,C=x+(k<<16&4294967295|k>>>16),k=S+(C^x^T)+P[6]+76029189&4294967295,S=C+(k<<23&4294967295|k>>>9),k=T+(S^C^x)+P[9]+3654602809&4294967295,T=S+(k<<4&4294967295|k>>>28),k=x+(T^S^C)+P[12]+3873151461&4294967295,x=T+(k<<11&4294967295|k>>>21),k=C+(x^T^S)+P[15]+530742520&4294967295,C=x+(k<<16&4294967295|k>>>16),k=S+(C^x^T)+P[2]+3299628645&4294967295,S=C+(k<<23&4294967295|k>>>9),k=T+(C^(S|~x))+P[0]+4096336452&4294967295,T=S+(k<<6&4294967295|k>>>26),k=x+(S^(T|~C))+P[7]+1126891415&4294967295,x=T+(k<<10&4294967295|k>>>22),k=C+(T^(x|~S))+P[14]+2878612391&4294967295,C=x+(k<<15&4294967295|k>>>17),k=S+(x^(C|~T))+P[5]+4237533241&4294967295,S=C+(k<<21&4294967295|k>>>11),k=T+(C^(S|~x))+P[12]+1700485571&4294967295,T=S+(k<<6&4294967295|k>>>26),k=x+(S^(T|~C))+P[3]+2399980690&4294967295,x=T+(k<<10&4294967295|k>>>22),k=C+(T^(x|~S))+P[10]+4293915773&4294967295,C=x+(k<<15&4294967295|k>>>17),k=S+(x^(C|~T))+P[1]+2240044497&4294967295,S=C+(k<<21&4294967295|k>>>11),k=T+(C^(S|~x))+P[8]+1873313359&4294967295,T=S+(k<<6&4294967295|k>>>26),k=x+(S^(T|~C))+P[15]+4264355552&4294967295,x=T+(k<<10&4294967295|k>>>22),k=C+(T^(x|~S))+P[6]+2734768916&4294967295,C=x+(k<<15&4294967295|k>>>17),k=S+(x^(C|~T))+P[13]+1309151649&4294967295,S=C+(k<<21&4294967295|k>>>11),k=T+(C^(S|~x))+P[4]+4149444226&4294967295,T=S+(k<<6&4294967295|k>>>26),k=x+(S^(T|~C))+P[11]+3174756917&4294967295,x=T+(k<<10&4294967295|k>>>22),k=C+(T^(x|~S))+P[2]+718787259&4294967295,C=x+(k<<15&4294967295|k>>>17),k=S+(x^(C|~T))+P[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,R.g[2]=R.g[2]+C&4294967295,R.g[3]=R.g[3]+x&4294967295}r.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var S=T-this.blockSize,P=this.B,C=this.h,x=0;x<T;){if(C==0)for(;x<=S;)i(this,R,x),x+=this.blockSize;if(typeof R=="string"){for(;x<T;)if(P[C++]=R.charCodeAt(x++),C==this.blockSize){i(this,P),C=0;break}}else for(;x<T;)if(P[C++]=R[x++],C==this.blockSize){i(this,P),C=0;break}}this.h=C,this.o+=T},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var S=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=S&255,S/=256;for(this.u(R),R=Array(16),T=S=0;4>T;++T)for(var P=0;32>P;P+=8)R[S++]=this.g[T]>>>P&255;return R};function s(R,T){var S=a;return Object.prototype.hasOwnProperty.call(S,R)?S[R]:S[R]=T(R)}function o(R,T){this.h=T;for(var S=[],P=!0,C=R.length-1;0<=C;C--){var x=R[C]|0;P&&x==T||(S[C]=x,P=!1)}this.g=S}var a={};function l(R){return-128<=R&&128>R?s(R,function(T){return new o([T|0],0>T?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return c;if(0>R)return I(h(-R));for(var T=[],S=1,P=0;R>=S;P++)T[P]=R/S|0,S*=4294967296;return new o(T,0)}function p(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return I(p(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=h(Math.pow(T,8)),P=c,C=0;C<R.length;C+=8){var x=Math.min(8,R.length-C),k=parseInt(R.substring(C,C+x),T);8>x?(x=h(Math.pow(T,x)),P=P.j(x).add(h(k))):(P=P.j(S),P=P.add(h(k)))}return P}var c=l(0),d=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(E(this))return-I(this).m();for(var R=0,T=1,S=0;S<this.g.length;S++){var P=this.i(S);R+=(0<=P?P:4294967296+P)*T,T*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(y(this))return"0";if(E(this))return"-"+I(this).toString(R);for(var T=h(Math.pow(R,6)),S=this,P="";;){var C=b(S,T).g;S=_(S,C.j(T));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(R);if(S=C,y(S))return x+P;for(;6>x.length;)x="0"+x;P=x+P}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function y(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function E(R){return R.h==-1}t.l=function(R){return R=_(this,R),E(R)?-1:y(R)?0:1};function I(R){for(var T=R.g.length,S=[],P=0;P<T;P++)S[P]=~R.g[P];return new o(S,~R.h).add(d)}t.abs=function(){return E(this)?I(this):this},t.add=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],P=0,C=0;C<=T;C++){var x=P+(this.i(C)&65535)+(R.i(C)&65535),k=(x>>>16)+(this.i(C)>>>16)+(R.i(C)>>>16);P=k>>>16,x&=65535,k&=65535,S[C]=k<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(R,T){return R.add(I(T))}t.j=function(R){if(y(this)||y(R))return c;if(E(this))return E(R)?I(this).j(I(R)):I(I(this).j(R));if(E(R))return I(this.j(I(R)));if(0>this.l(m)&&0>R.l(m))return h(this.m()*R.m());for(var T=this.g.length+R.g.length,S=[],P=0;P<2*T;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(var C=0;C<R.g.length;C++){var x=this.i(P)>>>16,k=this.i(P)&65535,Ue=R.i(C)>>>16,An=R.i(C)&65535;S[2*P+2*C]+=k*An,v(S,2*P+2*C),S[2*P+2*C+1]+=x*An,v(S,2*P+2*C+1),S[2*P+2*C+1]+=k*Ue,v(S,2*P+2*C+1),S[2*P+2*C+2]+=x*Ue,v(S,2*P+2*C+2)}for(P=0;P<T;P++)S[P]=S[2*P+1]<<16|S[2*P];for(P=T;P<2*T;P++)S[P]=0;return new o(S,0)};function v(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function A(R,T){this.g=R,this.h=T}function b(R,T){if(y(T))throw Error("division by zero");if(y(R))return new A(c,c);if(E(R))return T=b(I(R),T),new A(I(T.g),I(T.h));if(E(T))return T=b(R,I(T)),new A(I(T.g),T.h);if(30<R.g.length){if(E(R)||E(T))throw Error("slowDivide_ only works with positive integers.");for(var S=d,P=T;0>=P.l(R);)S=L(S),P=L(P);var C=M(S,1),x=M(P,1);for(P=M(P,2),S=M(S,2);!y(P);){var k=x.add(P);0>=k.l(R)&&(C=C.add(S),x=k),P=M(P,1),S=M(S,1)}return T=_(R,C.j(T)),new A(C,T)}for(C=c;0<=R.l(T);){for(S=Math.max(1,Math.floor(R.m()/T.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),x=h(S),k=x.j(T);E(k)||0<k.l(R);)S-=P,x=h(S),k=x.j(T);y(x)&&(x=d),C=C.add(x),R=_(R,k)}return new A(C,R)}t.A=function(R){return b(this,R).h},t.and=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],P=0;P<T;P++)S[P]=this.i(P)&R.i(P);return new o(S,this.h&R.h)},t.or=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],P=0;P<T;P++)S[P]=this.i(P)|R.i(P);return new o(S,this.h|R.h)},t.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],P=0;P<T;P++)S[P]=this.i(P)^R.i(P);return new o(S,this.h^R.h)};function L(R){for(var T=R.g.length+1,S=[],P=0;P<T;P++)S[P]=R.i(P)<<1|R.i(P-1)>>>31;return new o(S,R.h)}function M(R,T){var S=T>>5;T%=32;for(var P=R.g.length-S,C=[],x=0;x<P;x++)C[x]=0<T?R.i(x+S)>>>T|R.i(x+S+1)<<32-T:R.i(x+S);return new o(C,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,NI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,vi=o}).apply(typeof Zy<"u"?Zy:typeof self<"u"?self:typeof window<"u"?window:{});var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var OI,Go,VI,vu,jf,LI,MI,FI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,g){return u==Array.prototype||u==Object.prototype||(u[f]=g.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jl=="object"&&Jl];for(var f=0;f<u.length;++f){var g=u[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var g=r;u=u.split(".");for(var w=0;w<u.length-1;w++){var D=u[w];if(!(D in g))break e;g=g[D]}u=u[u.length-1],w=g[u],f=f(w),f!=w&&f!=null&&e(g,u,{configurable:!0,writable:!0,value:f})}}function s(u,f){u instanceof String&&(u+="");var g=0,w=!1,D={next:function(){if(!w&&g<u.length){var O=g++;return{value:f(O,u[O]),done:!1}}return w=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function h(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function p(u,f,g){return u.call.apply(u.bind,arguments)}function c(u,f,g){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,w),u.apply(f,D)}}return function(){return u.apply(f,arguments)}}function d(u,f,g){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:c,d.apply(null,arguments)}function m(u,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function y(u,f){function g(){}g.prototype=f.prototype,u.aa=f.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(w,D,O){for(var j=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)j[fe-2]=arguments[fe];return f.prototype[D].apply(w,j)}}function E(u){const f=u.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=u[w];return g}return[]}function I(u,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(l(w)){const D=u.length||0,O=w.length||0;u.length=D+O;for(let j=0;j<O;j++)u[D+j]=w[j]}else u.push(w)}}class _{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function v(u){return/^[\s\xa0]*$/.test(u)}function A(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var L=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function M(u,f,g){for(const w in u)f.call(g,u[w],w,u)}function R(u,f){for(const g in u)f.call(void 0,u[g],g,u)}function T(u){const f={};for(const g in u)f[g]=u[g];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,f){let g,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(g in w)u[g]=w[g];for(let O=0;O<S.length;O++)g=S[O],Object.prototype.hasOwnProperty.call(w,g)&&(u[g]=w[g])}}function C(u){var f=1;u=u.split(":");const g=[];for(;0<f&&u.length;)g.push(u.shift()),f--;return u.length&&g.push(u.join(":")),g}function x(u){a.setTimeout(()=>{throw u},0)}function k(){var u=Y;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class Ue{constructor(){this.h=this.g=null}add(f,g){const w=An.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var An=new _(()=>new uo,u=>u.reset());class uo{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Sn,G=!1,Y=new Ue,ee=()=>{const u=a.Promise.resolve(void 0);Sn=()=>{u.then(Te)}};var Te=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(g){x(g)}var f=An;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}G=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return u}();function Pn(u,f){if(Oe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(L){e:{try{b(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else g=="mouseover"?f=u.fromElement:g=="mouseout"&&(f=u.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:kn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pn.aa.h.call(this)}}y(Pn,Oe);var kn={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),fR=0;function pR(u,f,g,w,D){this.listener=u,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=D,this.key=++fR,this.da=this.fa=!1}function _l(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function yl(u){this.src=u,this.g={},this.h=0}yl.prototype.add=function(u,f,g,w,D){var O=u.toString();u=this.g[O],u||(u=this.g[O]=[],this.h++);var j=Ih(u,f,w,D);return-1<j?(f=u[j],g||(f.fa=!1)):(f=new pR(f,this.src,O,!!w,D),f.fa=g,u.push(f)),f};function Th(u,f){var g=f.type;if(g in u.g){var w=u.g[g],D=Array.prototype.indexOf.call(w,f,void 0),O;(O=0<=D)&&Array.prototype.splice.call(w,D,1),O&&(_l(f),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Ih(u,f,g,w){for(var D=0;D<u.length;++D){var O=u[D];if(!O.da&&O.listener==f&&O.capture==!!g&&O.ha==w)return D}return-1}var Ah="closure_lm_"+(1e6*Math.random()|0),Sh={};function Pg(u,f,g,w,D){if(Array.isArray(f)){for(var O=0;O<f.length;O++)Pg(u,f[O],g,w,D);return null}return g=bg(g),u&&u[Cn]?u.K(f,g,h(w)?!!w.capture:!1,D):mR(u,f,g,!1,w,D)}function mR(u,f,g,w,D,O){if(!f)throw Error("Invalid event type");var j=h(D)?!!D.capture:!!D,fe=Ph(u);if(fe||(u[Ah]=fe=new yl(u)),g=fe.add(f,g,w,j,O),g.proxy)return g;if(w=gR(),g.proxy=w,w.src=u,w.listener=g,u.addEventListener)Rn||(D=j),D===void 0&&(D=!1),u.addEventListener(f.toString(),w,D);else if(u.attachEvent)u.attachEvent(Cg(f.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function gR(){function u(g){return f.call(u.src,u.listener,g)}const f=_R;return u}function kg(u,f,g,w,D){if(Array.isArray(f))for(var O=0;O<f.length;O++)kg(u,f[O],g,w,D);else w=h(w)?!!w.capture:!!w,g=bg(g),u&&u[Cn]?(u=u.i,f=String(f).toString(),f in u.g&&(O=u.g[f],g=Ih(O,g,w,D),-1<g&&(_l(O[g]),Array.prototype.splice.call(O,g,1),O.length==0&&(delete u.g[f],u.h--)))):u&&(u=Ph(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Ih(f,g,w,D)),(g=-1<u?f[u]:null)&&Rh(g))}function Rh(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Cn])Th(f.i,u);else{var g=u.type,w=u.proxy;f.removeEventListener?f.removeEventListener(g,w,u.capture):f.detachEvent?f.detachEvent(Cg(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=Ph(f))?(Th(g,u),g.h==0&&(g.src=null,f[Ah]=null)):_l(u)}}}function Cg(u){return u in Sh?Sh[u]:Sh[u]="on"+u}function _R(u,f){if(u.da)u=!0;else{f=new Pn(f,this);var g=u.listener,w=u.ha||u.src;u.fa&&Rh(u),u=g.call(w,f)}return u}function Ph(u){return u=u[Ah],u instanceof yl?u:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function bg(u){return typeof u=="function"?u:(u[kh]||(u[kh]=function(f){return u.handleEvent(f)}),u[kh])}function Ze(){de.call(this),this.i=new yl(this),this.M=this,this.F=null}y(Ze,de),Ze.prototype[Cn]=!0,Ze.prototype.removeEventListener=function(u,f,g,w){kg(this,u,f,g,w)};function ht(u,f){var g,w=u.F;if(w)for(g=[];w;w=w.F)g.push(w);if(u=u.M,w=f.type||f,typeof f=="string")f=new Oe(f,u);else if(f instanceof Oe)f.target=f.target||u;else{var D=f;f=new Oe(w,u),P(f,D)}if(D=!0,g)for(var O=g.length-1;0<=O;O--){var j=f.g=g[O];D=vl(j,w,!0,f)&&D}if(j=f.g=u,D=vl(j,w,!0,f)&&D,D=vl(j,w,!1,f)&&D,g)for(O=0;O<g.length;O++)j=f.g=g[O],D=vl(j,w,!1,f)&&D}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var g=u.g[f],w=0;w<g.length;w++)_l(g[w]);delete u.g[f],u.h--}}this.F=null},Ze.prototype.K=function(u,f,g,w){return this.i.add(String(u),f,!1,g,w)},Ze.prototype.L=function(u,f,g,w){return this.i.add(String(u),f,!0,g,w)};function vl(u,f,g,w){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,O=0;O<f.length;++O){var j=f[O];if(j&&!j.da&&j.capture==g){var fe=j.listener,Ke=j.ha||j.src;j.fa&&Th(u.i,j),D=fe.call(Ke,w)!==!1&&D}}return D&&!w.defaultPrevented}function xg(u,f,g){if(typeof u=="function")g&&(u=d(u,g));else if(u&&typeof u.handleEvent=="function")u=d(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(u,f||0)}function Dg(u){u.g=xg(()=>{u.g=null,u.i&&(u.i=!1,Dg(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class yR extends de{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Dg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function co(u){de.call(this),this.h=u,this.g={}}y(co,de);var Ng=[];function Og(u){M(u.g,function(f,g){this.g.hasOwnProperty(g)&&Rh(f)},u),u.g={}}co.prototype.N=function(){co.aa.N.call(this),Og(this)},co.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ch=a.JSON.stringify,vR=a.JSON.parse,wR=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function bh(){}bh.prototype.h=null;function Vg(u){return u.h||(u.h=u.i())}function Lg(){}var ho={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xh(){Oe.call(this,"d")}y(xh,Oe);function Dh(){Oe.call(this,"c")}y(Dh,Oe);var Zr={},Mg=null;function wl(){return Mg=Mg||new Ze}Zr.La="serverreachability";function Fg(u){Oe.call(this,Zr.La,u)}y(Fg,Oe);function fo(u){const f=wl();ht(f,new Fg(f))}Zr.STAT_EVENT="statevent";function Ug(u,f){Oe.call(this,Zr.STAT_EVENT,u),this.stat=f}y(Ug,Oe);function dt(u){const f=wl();ht(f,new Ug(f,u))}Zr.Ma="timingevent";function Bg(u,f){Oe.call(this,Zr.Ma,u),this.size=f}y(Bg,Oe);function po(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},f)}function mo(){this.g=!0}mo.prototype.xa=function(){this.g=!1};function ER(u,f,g,w,D,O){u.info(function(){if(u.g)if(O)for(var j="",fe=O.split("&"),Ke=0;Ke<fe.length;Ke++){var ae=fe[Ke].split("=");if(1<ae.length){var et=ae[0];ae=ae[1];var tt=et.split("_");j=2<=tt.length&&tt[1]=="type"?j+(et+"="+ae+"&"):j+(et+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+f+`
`+g+`
`+j})}function TR(u,f,g,w,D,O,j){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+f+`
`+g+`
`+O+" "+j})}function Wi(u,f,g,w){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+AR(u,g)+(w?" "+w:"")})}function IR(u,f){u.info(function(){return"TIMEOUT: "+f})}mo.prototype.info=function(){};function AR(u,f){if(!u.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var w=g[u];if(!(2>w.length)){var D=w[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<D.length;j++)D[j]=""}}}}return Ch(g)}catch{return f}}var El={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nh;function Tl(){}y(Tl,bh),Tl.prototype.g=function(){return new XMLHttpRequest},Tl.prototype.i=function(){return{}},Nh=new Tl;function ir(u,f,g,w){this.j=u,this.i=f,this.l=g,this.R=w||1,this.U=new co(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zg}function zg(){this.i=null,this.g="",this.h=!1}var $g={},Oh={};function Vh(u,f,g){u.L=1,u.v=Rl(bn(f)),u.m=g,u.P=!0,qg(u,null)}function qg(u,f){u.F=Date.now(),Il(u),u.A=bn(u.v);var g=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),i_(g.i,"t",w),u.C=0,g=u.j.J,u.h=new zg,u.g=T_(u.j,g?f:null,!u.m),0<u.O&&(u.M=new yR(d(u.Y,u,u.g),u.O)),f=u.U,g=u.g,w=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(Ng[0]=D.toString()),D=Ng);for(var O=0;O<D.length;O++){var j=Pg(g,D[O],w||f.handleEvent,!1,f.h||f);if(!j)break;f.g[j.key]=j}f=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),fo(),ER(u.i,u.u,u.A,u.l,u.R,u.m)}ir.prototype.ca=function(u){u=u.target;const f=this.M;f&&xn(u)==3?f.j():this.Y(u)},ir.prototype.Y=function(u){try{if(u==this.g)e:{const tt=xn(this.g);var f=this.g.Ba();const Yi=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||h_(this.g)))){this.J||tt!=4||f==7||(f==8||0>=Yi?fo(3):fo(2)),Lh(this);var g=this.g.Z();this.X=g;t:if(Gg(this)){var w=h_(this.g);u="";var D=w.length,O=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ei(this),go(this);var j="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,u+=this.h.i.decode(w[f],{stream:!(O&&f==D-1)});w.length=0,this.h.g+=u,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=g==200,TR(this.i,this.u,this.A,this.l,this.R,tt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ke=this.g;if((fe=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(fe)){var ae=fe;break t}}ae=null}if(g=ae)Wi(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mh(this,g);else{this.o=!1,this.s=3,dt(12),ei(this),go(this);break e}}if(this.P){g=!0;let Yt;for(;!this.J&&this.C<j.length;)if(Yt=SR(this,j),Yt==Oh){tt==4&&(this.s=4,dt(14),g=!1),Wi(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==$g){this.s=4,dt(15),Wi(this.i,this.l,j,"[Invalid Chunk]"),g=!1;break}else Wi(this.i,this.l,Yt,null),Mh(this,Yt);if(Gg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||j.length!=0||this.h.h||(this.s=1,dt(16),g=!1),this.o=this.o&&g,!g)Wi(this.i,this.l,j,"[Invalid Chunked Response]"),ei(this),go(this);else if(0<j.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),$h(et),et.M=!0,dt(11))}}else Wi(this.i,this.l,j,null),Mh(this,j);tt==4&&ei(this),this.o&&!this.J&&(tt==4?y_(this.j,this):(this.o=!1,Il(this)))}else zR(this.g),g==400&&0<j.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),ei(this),go(this)}}}catch{}finally{}};function Gg(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function SR(u,f){var g=u.C,w=f.indexOf(`
`,g);return w==-1?Oh:(g=Number(f.substring(g,w)),isNaN(g)?$g:(w+=1,w+g>f.length?Oh:(f=f.slice(w,w+g),u.C=w+g,f)))}ir.prototype.cancel=function(){this.J=!0,ei(this)};function Il(u){u.S=Date.now()+u.I,Hg(u,u.I)}function Hg(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=po(d(u.ba,u),f)}function Lh(u){u.B&&(a.clearTimeout(u.B),u.B=null)}ir.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(IR(this.i,this.A),this.L!=2&&(fo(),dt(17)),ei(this),this.s=2,go(this)):Hg(this,this.S-u)};function go(u){u.j.G==0||u.J||y_(u.j,u)}function ei(u){Lh(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,Og(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Mh(u,f){try{var g=u.j;if(g.G!=0&&(g.g==u||Fh(g.h,u))){if(!u.K&&Fh(g.h,u)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)Dl(g),bl(g);else break e;zh(g),dt(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=po(d(g.Za,g),6e3));if(1>=Qg(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ni(g,11)}else if((u.K||g.g==u)&&Dl(g),!v(f))for(D=g.Da.g.parse(f),f=0;f<D.length;f++){let ae=D[f];if(g.T=ae[0],ae=ae[1],g.G==2)if(ae[0]=="c"){g.K=ae[1],g.ia=ae[2];const et=ae[3];et!=null&&(g.la=et,g.j.info("VER="+g.la));const tt=ae[4];tt!=null&&(g.Aa=tt,g.j.info("SVER="+g.Aa));const Yi=ae[5];Yi!=null&&typeof Yi=="number"&&0<Yi&&(w=1.5*Yi,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Yt=u.g;if(Yt){const Ol=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ol){var O=w.h;O.g||Ol.indexOf("spdy")==-1&&Ol.indexOf("quic")==-1&&Ol.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Uh(O,O.h),O.h=null))}if(w.D){const qh=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;qh&&(w.ya=qh,me(w.I,w.D,qh))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var j=u;if(w.qa=E_(w,w.J?w.ia:null,w.W),j.K){Xg(w.h,j);var fe=j,Ke=w.L;Ke&&(fe.I=Ke),fe.B&&(Lh(fe),Il(fe)),w.g=j}else g_(w);0<g.i.length&&xl(g)}else ae[0]!="stop"&&ae[0]!="close"||ni(g,7);else g.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?ni(g,7):jh(g):ae[0]!="noop"&&g.l&&g.l.ta(ae),g.v=0)}}fo(4)}catch{}}var RR=class{constructor(u,f){this.g=u,this.map=f}};function Kg(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wg(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Qg(u){return u.h?1:u.g?u.g.size:0}function Fh(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Uh(u,f){u.g?u.g.add(f):u.h=f}function Xg(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}Kg.prototype.cancel=function(){if(this.i=Yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Yg(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const g of u.g.values())f=f.concat(g.D);return f}return E(u.i)}function PR(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var f=[],g=u.length,w=0;w<g;w++)f.push(u[w]);return f}f=[],g=0;for(w in u)f[g++]=u[w];return f}function kR(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var f=[];u=u.length;for(var g=0;g<u;g++)f.push(g);return f}f=[],g=0;for(const w in u)f[g++]=w;return f}}}function Jg(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var g=kR(u),w=PR(u),D=w.length,O=0;O<D;O++)f.call(void 0,w[O],g&&g[O],u)}var Zg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CR(u,f){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var w=u[g].indexOf("="),D=null;if(0<=w){var O=u[g].substring(0,w);D=u[g].substring(w+1)}else O=u[g];f(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ti(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ti){this.h=u.h,Al(this,u.j),this.o=u.o,this.g=u.g,Sl(this,u.s),this.l=u.l;var f=u.i,g=new vo;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),e_(this,g),this.m=u.m}else u&&(f=String(u).match(Zg))?(this.h=!1,Al(this,f[1]||"",!0),this.o=_o(f[2]||""),this.g=_o(f[3]||"",!0),Sl(this,f[4]),this.l=_o(f[5]||"",!0),e_(this,f[6]||"",!0),this.m=_o(f[7]||"")):(this.h=!1,this.i=new vo(null,this.h))}ti.prototype.toString=function(){var u=[],f=this.j;f&&u.push(yo(f,t_,!0),":");var g=this.g;return(g||f=="file")&&(u.push("//"),(f=this.o)&&u.push(yo(f,t_,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(yo(g,g.charAt(0)=="/"?DR:xR,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",yo(g,OR)),u.join("")};function bn(u){return new ti(u)}function Al(u,f,g){u.j=g?_o(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Sl(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function e_(u,f,g){f instanceof vo?(u.i=f,VR(u.i,u.h)):(g||(f=yo(f,NR)),u.i=new vo(f,u.h))}function me(u,f,g){u.i.set(f,g)}function Rl(u){return me(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function _o(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function yo(u,f,g){return typeof u=="string"?(u=encodeURI(u).replace(f,bR),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bR(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var t_=/[#\/\?@]/g,xR=/[#\?:]/g,DR=/[#\?]/g,NR=/[#\?@]/g,OR=/#/g;function vo(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function sr(u){u.g||(u.g=new Map,u.h=0,u.i&&CR(u.i,function(f,g){u.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=vo.prototype,t.add=function(u,f){sr(this),this.i=null,u=Qi(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(f),this.h+=1,this};function n_(u,f){sr(u),f=Qi(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function r_(u,f){return sr(u),f=Qi(u,f),u.g.has(f)}t.forEach=function(u,f){sr(this),this.g.forEach(function(g,w){g.forEach(function(D){u.call(f,D,w,this)},this)},this)},t.na=function(){sr(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const D=u[w];for(let O=0;O<D.length;O++)g.push(f[w])}return g},t.V=function(u){sr(this);let f=[];if(typeof u=="string")r_(this,u)&&(f=f.concat(this.g.get(Qi(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)f=f.concat(u[g])}return f},t.set=function(u,f){return sr(this),this.i=null,u=Qi(this,u),r_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function i_(u,f,g){n_(u,f),0<g.length&&(u.i=null,u.g.set(Qi(u,f),E(g)),u.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const O=encodeURIComponent(String(w)),j=this.V(w);for(w=0;w<j.length;w++){var D=O;j[w]!==""&&(D+="="+encodeURIComponent(String(j[w]))),u.push(D)}}return this.i=u.join("&")};function Qi(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function VR(u,f){f&&!u.j&&(sr(u),u.i=null,u.g.forEach(function(g,w){var D=w.toLowerCase();w!=D&&(n_(this,w),i_(this,D,g))},u)),u.j=f}function LR(u,f){const g=new mo;if(a.Image){const w=new Image;w.onload=m(or,g,"TestLoadImage: loaded",!0,f,w),w.onerror=m(or,g,"TestLoadImage: error",!1,f,w),w.onabort=m(or,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=m(or,g,"TestLoadImage: timeout",!1,f,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else f(!1)}function MR(u,f){const g=new mo,w=new AbortController,D=setTimeout(()=>{w.abort(),or(g,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:w.signal}).then(O=>{clearTimeout(D),O.ok?or(g,"TestPingServer: ok",!0,f):or(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),or(g,"TestPingServer: error",!1,f)})}function or(u,f,g,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(g)}catch{}}function FR(){this.g=new wR}function UR(u,f,g){const w=g||"";try{Jg(u,function(D,O){let j=D;h(D)&&(j=Ch(D)),f.push(w+O+"="+encodeURIComponent(j))})}catch(D){throw f.push(w+"type="+encodeURIComponent("_badmap")),D}}function Pl(u){this.l=u.Ub||null,this.j=u.eb||!1}y(Pl,bh),Pl.prototype.g=function(){return new kl(this.l,this.j)},Pl.prototype.i=function(u){return function(){return u}}({});function kl(u,f){Ze.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(kl,Ze),t=kl.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Eo(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wo(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;s_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function s_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?wo(this):Eo(this),this.readyState==3&&s_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,wo(this))},t.Qa=function(u){this.g&&(this.response=u,wo(this))},t.ga=function(){this.g&&wo(this)};function wo(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Eo(u)}t.setRequestHeader=function(u,f){this.u.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=f.next();return u.join(`\r
`)};function Eo(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(kl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function o_(u){let f="";return M(u,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function Bh(u,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=o_(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):me(u,f,g))}function be(u){Ze.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(be,Ze);var BR=/^https?$/i,jR=["POST","PUT"];t=be.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nh.g(),this.v=this.o?Vg(this.o):Vg(Nh),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(O){a_(this,O);return}if(u=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)g.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())g.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jR,f,void 0))||w||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of g)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{c_(this),this.u=!0,this.g.send(u),this.u=!1}catch(O){a_(this,O)}};function a_(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,l_(u),Cl(u)}function l_(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),Cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cl(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?u_(this):this.bb())},t.bb=function(){u_(this)};function u_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||xn(u)!=4||u.Z()!=2)){if(u.u&&xn(u)==4)xg(u.Ea,0,u);else if(ht(u,"readystatechange"),xn(u)==4){u.h=!1;try{const j=u.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=j===0){var D=String(u.D).match(Zg)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),w=!BR.test(D?D.toLowerCase():"")}g=w}if(g)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var O=2<xn(u)?u.g.statusText:""}catch{O=""}u.l=O+" ["+u.Z()+"]",l_(u)}}finally{Cl(u)}}}}function Cl(u,f){if(u.g){c_(u);const g=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||ht(u,"ready");try{g.onreadystatechange=w}catch{}}}function c_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function xn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),vR(f)}};function h_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function zR(u){const f={};u=(u.g&&2<=xn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(v(u[w]))continue;var g=C(u[w]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=f[D]||[];f[D]=O,O.push(g)}R(f,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function To(u,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||f}function d_(u){this.Aa=0,this.i=[],this.j=new mo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=To("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=To("baseRetryDelayMs",5e3,u),this.cb=To("retryDelaySeedMs",1e4,u),this.Wa=To("forwardChannelMaxRetries",2,u),this.wa=To("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Kg(u&&u.concurrentRequestLimit),this.Da=new FR,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=d_.prototype,t.la=8,t.G=1,t.connect=function(u,f,g,w){dt(0),this.W=u,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=E_(this,null,this.W),xl(this)};function jh(u){if(f_(u),u.G==3){var f=u.U++,g=bn(u.I);if(me(g,"SID",u.K),me(g,"RID",f),me(g,"TYPE","terminate"),Io(u,g),f=new ir(u,u.j,f),f.L=2,f.v=Rl(bn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=T_(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Il(f)}w_(u)}function bl(u){u.g&&($h(u),u.g.cancel(),u.g=null)}function f_(u){bl(u),u.u&&(a.clearTimeout(u.u),u.u=null),Dl(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function xl(u){if(!Wg(u.h)&&!u.s){u.s=!0;var f=u.Ga;Sn||ee(),G||(Sn(),G=!0),Y.add(f,u),u.B=0}}function $R(u,f){return Qg(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=po(d(u.Ga,u,f),v_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new ir(this,this.j,u);let O=this.o;if(this.S&&(O?(O=T(O),P(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=m_(this,D,f),g=bn(this.I),me(g,"RID",u),me(g,"CVER",22),this.D&&me(g,"X-HTTP-Session-Id",this.D),Io(this,g),O&&(this.O?f="headers="+encodeURIComponent(String(o_(O)))+"&"+f:this.m&&Bh(g,this.m,O)),Uh(this.h,D),this.Ua&&me(g,"TYPE","init"),this.P?(me(g,"$req",f),me(g,"SID","null"),D.T=!0,Vh(D,g,null)):Vh(D,g,f),this.G=2}}else this.G==3&&(u?p_(this,u):this.i.length==0||Wg(this.h)||p_(this))};function p_(u,f){var g;f?g=f.l:g=u.U++;const w=bn(u.I);me(w,"SID",u.K),me(w,"RID",g),me(w,"AID",u.T),Io(u,w),u.m&&u.o&&Bh(w,u.m,u.o),g=new ir(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),f&&(u.i=f.D.concat(u.i)),f=m_(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Uh(u.h,g),Vh(g,w,f)}function Io(u,f){u.H&&M(u.H,function(g,w){me(f,w,g)}),u.l&&Jg({},function(g,w){me(f,w,g)})}function m_(u,f,g){g=Math.min(u.i.length,g);var w=u.l?d(u.l.Na,u.l,u):null;e:{var D=u.i;let O=-1;for(;;){const j=["count="+g];O==-1?0<g?(O=D[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let fe=!0;for(let Ke=0;Ke<g;Ke++){let ae=D[Ke].g;const et=D[Ke].map;if(ae-=O,0>ae)O=Math.max(0,D[Ke].g-100),fe=!1;else try{UR(et,j,"req"+ae+"_")}catch{w&&w(et)}}if(fe){w=j.join("&");break e}}}return u=u.i.splice(0,g),f.D=u,w}function g_(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;Sn||ee(),G||(Sn(),G=!0),Y.add(f,u),u.v=0}}function zh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=po(d(u.Fa,u),v_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,__(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=po(d(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),bl(this),__(this))};function $h(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function __(u){u.g=new ir(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=bn(u.qa);me(f,"RID","rpc"),me(f,"SID",u.K),me(f,"AID",u.T),me(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&me(f,"TO",u.ja),me(f,"TYPE","xmlhttp"),Io(u,f),u.m&&u.o&&Bh(f,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Rl(bn(f)),g.m=null,g.P=!0,qg(g,u)}t.Za=function(){this.C!=null&&(this.C=null,bl(this),zh(this),dt(19))};function Dl(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function y_(u,f){var g=null;if(u.g==f){Dl(u),$h(u),u.g=null;var w=2}else if(Fh(u.h,f))g=f.D,Xg(u.h,f),w=1;else return;if(u.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var D=u.B;w=wl(),ht(w,new Bg(w,g)),xl(u)}else g_(u);else if(D=f.s,D==3||D==0&&0<f.X||!(w==1&&$R(u,f)||w==2&&zh(u)))switch(g&&0<g.length&&(f=u.h,f.i=f.i.concat(g)),D){case 1:ni(u,5);break;case 4:ni(u,10);break;case 3:ni(u,6);break;default:ni(u,2)}}}function v_(u,f){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*f}function ni(u,f){if(u.j.info("Error code "+f),f==2){var g=d(u.fb,u),w=u.Xa;const D=!w;w=new ti(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Al(w,"https"),Rl(w),D?LR(w.toString(),g):MR(w.toString(),g)}else dt(2);u.G=0,u.l&&u.l.sa(f),w_(u),f_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function w_(u){if(u.G=0,u.ka=[],u.l){const f=Yg(u.h);(f.length!=0||u.i.length!=0)&&(I(u.ka,f),I(u.ka,u.i),u.h.i.length=0,E(u.i),u.i.length=0),u.l.ra()}}function E_(u,f,g){var w=g instanceof ti?bn(g):new ti(g);if(w.g!="")f&&(w.g=f+"."+w.g),Sl(w,w.s);else{var D=a.location;w=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var O=new ti(null);w&&Al(O,w),f&&(O.g=f),D&&Sl(O,D),g&&(O.l=g),w=O}return g=u.D,f=u.ya,g&&f&&me(w,g,f),me(w,"VER",u.la),Io(u,w),w}function T_(u,f,g){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new be(new Pl({eb:g})):new be(u.pa),f.Ha(u.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function I_(){}t=I_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Nl(){}Nl.prototype.g=function(u,f){return new xt(u,f)};function xt(u,f){Ze.call(this),this.g=new d_(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!v(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!v(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Xi(this)}y(xt,Ze),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){jh(this.g)},xt.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=Ch(u),u=g);f.i.push(new RR(f.Ya++,u)),f.G==3&&xl(f)},xt.prototype.N=function(){this.g.l=null,delete this.j,jh(this.g),delete this.g,xt.aa.N.call(this)};function A_(u){xh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const g in f){u=g;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}y(A_,xh);function S_(){Dh.call(this),this.status=1}y(S_,Dh);function Xi(u){this.g=u}y(Xi,I_),Xi.prototype.ua=function(){ht(this.g,"a")},Xi.prototype.ta=function(u){ht(this.g,new A_(u))},Xi.prototype.sa=function(u){ht(this.g,new S_)},Xi.prototype.ra=function(){ht(this.g,"b")},Nl.prototype.createWebChannel=Nl.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,FI=function(){return new Nl},MI=function(){return wl()},LI=Zr,jf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},El.NO_ERROR=0,El.TIMEOUT=8,El.HTTP_ERROR=6,vu=El,jg.COMPLETE="complete",VI=jg,Lg.EventType=ho,ho.OPEN="a",ho.CLOSE="b",ho.ERROR="c",ho.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,Go=Lg,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,OI=be}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});const ev="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new um("@firebase/firestore");function ss(){return Pi.logLevel}function U(t,...e){if(Pi.logLevel<=re.DEBUG){const n=e.map(hm);Pi.debug(`Firestore (${io}): ${t}`,...n)}}function mt(t,...e){if(Pi.logLevel<=re.ERROR){const n=e.map(hm);Pi.error(`Firestore (${io}): ${t}`,...n)}}function ki(t,...e){if(Pi.logLevel<=re.WARN){const n=e.map(hm);Pi.warn(`Firestore (${io}): ${t}`,...n)}}function hm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw mt(e),new Error(e)}function W(t,e){t||K()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class rx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ix{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){W(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new UI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new Qe(e)}}class sx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ox{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ax{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){W(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.R=n.token,new ax(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ux(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function jI(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Re(0,0))}static max(){return new Q(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends Na{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const cx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Na{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return cx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(le.fromString(e))}static fromName(e){return new q(le.fromString(e).popFirst(5))}static empty(){return new q(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new le(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function zf(t){return t.fields.find(e=>e.kind===2)}function li(t){return t.fields.filter(e=>e.kind!==2)}ac.UNKNOWN_ID=-1;class wu{constructor(e,n){this.fieldPath=e,this.kind=n}}class Oa{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Oa(0,Ut.min())}}function hx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Ut(i,q.empty(),e)}function zI(t){return new Ut(t.readTime,t.key,-1)}class Ut{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ut(Q.min(),q.empty(),-1)}static max(){return new Ut(Q.max(),q.empty(),-1)}}function dm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==$I)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const h=l;n(e[h]).next(p=>{o[h]=p,++a,a===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new yn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new sa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=fm(r.target.error);this.V.reject(new sa(e,i))}}static open(e,n,r,i){try{return new Xc(n,e.transaction(i,r))}catch(s){throw new sa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new fx(n)}}class Mr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Mr.S(ze())===12.2&&mt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),ui(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!lm())return!1;if(Mr.v())return!0;const e=ze(),n=Mr.S(e),r=0<n&&n<10,i=GI(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new sa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new sa(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Xc.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),N.reject(h))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,h=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function GI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class dx{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ui(this.B.delete())}}class sa extends z{constructor(e,n){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Xr(t){return t.name==="IndexedDbTransactionError"}class fx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ui(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),ui(this.store.add(e))}get(e){return ui(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),ui(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),ui(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new N((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new N((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new N((r,i)=>{n.onerror=s=>{const o=fm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new N((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new dx(a),h=n(a.primaryKey,a.value,l);if(h instanceof N){const p=h.catch(c=>(l.done(),N.reject(c)));r.push(p)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>N.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ui(t){return new N((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=fm(r.target.error);n(i)}})}let tv=!1;function fm(t){const e=Mr.S(ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return tv||(tv=!0,setTimeout(()=>{throw r},0)),r}}return t}class px{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Xr(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await qi(n)}await this.X(6e4)})}}class mx{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return N.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=zI(s);dm(o,r)>0&&(r=o)}),new Ut(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Gt.oe=-1;function Yc(t){return t==null}function Va(t){return t===0&&1/t==-1/0}function gx(t){return typeof t=="number"&&Number.isInteger(t)&&!Va(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=nv(e)),e=_x(t.get(n),e);return nv(e)}function _x(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function nv(t){return t+""}function fn(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&K(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:K()}s=o+2}return new le(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e){return[t,_t(e)]}function HI(t,e,n){return[t,_t(e),n]}const yx={},vx=["prefixPath","collectionGroup","readTime","documentId"],wx=["prefixPath","collectionGroup","documentId"],Ex=["collectionGroup","readTime","prefixPath","documentId"],Tx=["canonicalId","targetId"],Ix=["targetId","path"],Ax=["path","targetId"],Sx=["collectionId","parent"],Rx=["indexId","uid"],Px=["uid","sequenceNumber"],kx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Cx=["indexId","uid","orderedDocumentKey"],bx=["userId","collectionPath","documentId"],xx=["userId","collectionPath","largestBatchId"],Dx=["userId","collectionGroup","largestBatchId"],KI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Nx=[...KI,"documentOverlays"],WI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],QI=WI,pm=[...QI,"indexConfiguration","indexState","indexEntries"],Ox=pm,Vx=[...pm,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends qI{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function $e(t,e){const n=J(t);return Mr.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zl(this.root,e,this.comparator,!0)}}class Zl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sv(this.data.getIterator())}getIteratorFrom(e){return new sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new he(this.comparator);return n.data=e,n}}class sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zi(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new he(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YI("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Lx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(W(!!t),typeof t=="string"){let e=0;const n=Lx.exec(t);if(W(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gm(t){const e=t.mapValue.fields.__previous_value__;return mm(e)?gm(e):e}function La(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n,r,i,s,o,a,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h}}class Ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ci&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Tu={nullValue:"NULL_VALUE"};function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mm(t)?4:JI(t)?9007199254740991:Jc(t)?10:11:K()}function En(t,e){if(t===e)return!0;const n=bi(t);if(n!==bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return La(t).isEqual(La(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xn(i.timestampValue),a=Xn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ve(i.doubleValue),a=ve(s.doubleValue);return o===a?Va(o)===Va(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(iv(o)!==iv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!En(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Ma(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function zr(t,e){if(t===e)return 0;const n=bi(t),r=bi(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ve(s.integerValue||s.doubleValue),l=ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ov(t.timestampValue,e.timestampValue);case 4:return ov(La(t),La(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=jr(s),l=jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const p=Z(a[h],l[h]);if(p!==0)return p}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(ve(s.latitude),ve(o.latitude));return a!==0?a:Z(ve(s.longitude),ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return av(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,h,p;const c=s.fields||{},d=o.fields||{},m=(a=c.value)===null||a===void 0?void 0:a.arrayValue,y=(l=d.value)===null||l===void 0?void 0:l.arrayValue,E=Z(((h=m==null?void 0:m.values)===null||h===void 0?void 0:h.length)||0,((p=y==null?void 0:y.values)===null||p===void 0?void 0:p.length)||0);return E!==0?E:av(m,y)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Rr.mapValue&&o===Rr.mapValue)return 0;if(s===Rr.mapValue)return 1;if(o===Rr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let c=0;c<l.length&&c<p.length;++c){const d=Z(l[c],p[c]);if(d!==0)return d;const m=zr(a[l[c]],h[p[c]]);if(m!==0)return m}return Z(l.length,p.length)}(t.mapValue,e.mapValue);default:throw K()}}function ov(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Xn(t),r=Xn(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function av(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=zr(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function $s(t){return qf(t)}function qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qf(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function Fa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gf(t){return!!t&&"integerValue"in t}function Ua(t){return!!t&&"arrayValue"in t}function lv(t){return!!t&&"nullValue"in t}function uv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function Jc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const ZI={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Fx(t){return"nullValue"in t?Tu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Fa(Ci.empty(),q.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Jc(t)?ZI:{mapValue:{}}:K()}function Ux(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Fa(Ci.empty(),q.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?ZI:"mapValue"in t?Jc(t)?{mapValue:{}}:Rr:K()}function cv(t,e){const n=zr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function hv(t,e){const n=zr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=oa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(oa(this.value))}}function e0(t){const e=[];return Gi(t.fields,(n,r)=>{const i=new Ae([n]);if(Iu(r)){const s=e0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,Q.min(),Q.min(),Q.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new De(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new De(e,2,n,Q.min(),Q.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,Q.min(),Q.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.position=e,this.inclusive=n}}function dv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=zr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{}class ie extends t0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jx(e,n,r):n==="array-contains"?new qx(e,r):n==="in"?new a0(e,r):n==="not-in"?new Gx(e,r):n==="array-contains-any"?new Hx(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zx(e,r):new $x(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zr(n,this.value)):n!==null&&bi(this.value)===bi(n)&&this.matchesComparison(zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends t0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ue(e,n)}matches(e){return Gs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gs(t){return t.op==="and"}function Hf(t){return t.op==="or"}function _m(t){return n0(t)&&Gs(t)}function n0(t){for(const e of t.filters)if(e instanceof ue)return!1;return!0}function Kf(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+$s(t.value);if(_m(t))return t.filters.map(e=>Kf(e)).join(",");{const e=t.filters.map(n=>Kf(n)).join(",");return`${t.op}(${e})`}}function r0(t,e){return t instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&r0(o,i.filters[a]),!0):!1}(t,e):void K()}function i0(t,e){const n=t.filters.concat(e);return ue.create(n,t.op)}function s0(t){return t instanceof ie?function(n){return`${n.field.canonicalString()} ${n.op} ${$s(n.value)}`}(t):t instanceof ue?function(n){return n.op.toString()+" {"+n.getFilters().map(s0).join(" ,")+"}"}(t):"Filter"}class jx extends ie{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class zx extends ie{constructor(e,n){super(e,"in",n),this.keys=o0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $x extends ie{constructor(e,n){super(e,"not-in",n),this.keys=o0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function o0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class qx extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ua(n)&&Ma(n.arrayValue,this.value)}}class a0 extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ma(this.value.arrayValue,n)}}class Gx extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ma(this.value.arrayValue,n)}}class Hx extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ua(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ma(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Wf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Kx(t,e,n,r,i,s,o)}function xi(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$s(r)).join(",")),e.ue=n}return e.ue}function el(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!r0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fv(t.startAt,e.startAt)&&fv(t.endAt,e.endAt)}function lc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function uc(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function pv(t,e,n){let r=Tu,i=!0;for(const s of uc(t,e)){let o=Tu,a=!0;switch(s.op){case"<":case"<=":o=Fx(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Tu}cv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];cv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function mv(t,e,n){let r=Rr,i=!0;for(const s of uc(t,e)){let o=Rr,a=!0;switch(s.op){case">=":case">":o=Ux(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Rr}hv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];hv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wx(t,e,n,r,i,s,o,a){return new Hi(t,e,n,r,i,s,o,a)}function tl(t){return new Hi(t)}function gv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l0(t){return t.collectionGroup!==null}function aa(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new he(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ba(s,r))}),n.has(Ae.keyField().canonicalString())||e.ce.push(new Ba(Ae.keyField(),r))}return e.ce}function Kt(t){const e=J(t);return e.le||(e.le=Qx(e,aa(t))),e.le}function Qx(t,e){if(t.limitType==="F")return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ba(i.field,s)});const n=t.endAt?new qs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qs(t.startAt.position,t.startAt.inclusive):null;return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qf(t,e){const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cc(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zc(t,e){return el(Kt(t),Kt(e))&&t.limitType===e.limitType}function u0(t){return`${xi(Kt(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>s0(i)).join(", ")}]`),Yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$s(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$s(i)).join(",")),`Target(${r})`}(Kt(t))}; limitType=${t.limitType})`}function nl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of aa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const h=dv(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,aa(r),i)||r.endAt&&!function(o,a,l){const h=dv(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,aa(r),i))}(t,e)}function Xx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c0(t){return(e,n)=>{let r=!1;for(const i of aa(t)){const s=Yx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Yx(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?zr(l,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return XI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=new Ee(q.comparator);function Vt(){return Jx}const h0=new Ee(q.comparator);function Ho(...t){let e=h0;for(const n of t)e=e.insert(n.key,n);return e}function d0(t){let e=h0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pn(){return la()}function f0(){return la()}function la(){return new Yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zx=new Ee(q.comparator),eD=new he(q.comparator);function te(...t){let e=eD;for(const n of t)e=e.add(n);return e}const tD=new he(Z);function nD(){return tD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Va(e)?"-0":e}}function p0(t){return{integerValue:""+t}}function m0(t,e){return gx(e)?p0(e):ym(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._=void 0}}function rD(t,e,n){return t instanceof Hs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mm(s)&&(s=gm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ks?_0(t,e):t instanceof Ws?y0(t,e):function(i,s){const o=g0(i,s),a=_v(o)+_v(i.Pe);return Gf(o)&&Gf(i.Pe)?p0(a):ym(i.serializer,a)}(t,e)}function iD(t,e,n){return t instanceof Ks?_0(t,e):t instanceof Ws?y0(t,e):n}function g0(t,e){return t instanceof Qs?function(r){return Gf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Hs extends eh{}class Ks extends eh{constructor(e){super(),this.elements=e}}function _0(t,e){const n=v0(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends eh{constructor(e){super(),this.elements=e}}function y0(t,e){let n=v0(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class Qs extends eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function _v(t){return ve(t.integerValue||t.doubleValue)}function v0(t){return Ua(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.field=e,this.transform=n}}function sD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ks&&i instanceof Ks||r instanceof Ws&&i instanceof Ws?zs(r.elements,i.elements,En):r instanceof Qs&&i instanceof Qs?En(r.Pe,i.Pe):r instanceof Hs&&i instanceof Hs}(t.transform,e.transform)}class oD{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function w0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nh(t.key,at.none()):new so(t.key,t.data,at.none());{const n=t.data,r=ot.empty();let i=new he(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tr(t.key,r,new Rt(i.toArray()),at.none())}}function aD(t,e,n){t instanceof so?function(i,s,o){const a=i.value.clone(),l=vv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof tr?function(i,s,o){if(!Au(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=vv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(E0(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ua(t,e,n,r){return t instanceof so?function(s,o,a,l){if(!Au(s.precondition,o))return a;const h=s.value.clone(),p=wv(s.fieldTransforms,l,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof tr?function(s,o,a,l){if(!Au(s.precondition,o))return a;const h=wv(s.fieldTransforms,l,o),p=o.data;return p.setAll(E0(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(s,o,a){return Au(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=g0(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function yv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zs(r,i,(s,o)=>sD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tr extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vv(t,e,n){const r=new Map;W(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,iD(o,a,n[i]))}return r}function wv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rD(s,o,e))}return r}class nh extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T0 extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=w0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>yv(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>yv(n,r))}}class Em{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){W(e.mutations.length===r.length);let i=function(){return Zx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Em(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,se;function cD(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function I0(t){if(t===void 0)return mt("GRPC error has no .code"),V.UNKNOWN;switch(t){case Le.OK:return V.OK;case Le.CANCELLED:return V.CANCELLED;case Le.UNKNOWN:return V.UNKNOWN;case Le.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Le.INTERNAL:return V.INTERNAL;case Le.UNAVAILABLE:return V.UNAVAILABLE;case Le.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Le.NOT_FOUND:return V.NOT_FOUND;case Le.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Le.ABORTED:return V.ABORTED;case Le.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Le.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(se=Le||(Le={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=new vi([4294967295,4294967295],0);function Ev(t){const e=hD().encode(t),n=new NI;return n.update(e),new Uint8Array(n.digest())}function Tv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vi([n,r],0),new vi([i,s],0)]}class Im{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ko(`Invalid padding: ${n}`);if(r<0)throw new Ko(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ko(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ko(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(vi.fromNumber(r)));return i.compare(dD)===1&&(i=new vi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ev(e),[r,i]=Tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Im(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Ev(e),[r,i]=Tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ko extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rh(Q.min(),i,new Ee(Z),Vt(),te())}}class rl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rl(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class A0{constructor(e,n){this.targetId=e,this.me=n}}class S0{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Iv{constructor(){this.fe=0,this.ge=Sv(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new rl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Sv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vt(),this.qe=Av(),this.Qe=new Ee(Z)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(lc(s))if(r===0){const o=new q(s.path);this.Ue(n,o,De.newNoDocument(o,Q.min()))}else W(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=jr(r).toUint8Array()}catch(l){if(l instanceof YI)return ki("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Im(o,i,s)}catch(l){return ki(l instanceof Ko?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&lc(a.target)){const l=new q(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,De.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new rh(e,n,this.Qe,this.ke,r);return this.ke=Vt(),this.qe=Av(),this.Qe=new Ee(Z),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Iv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new he(Z),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Iv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Av(){return new Ee(q.comparator)}function Sv(){return new Ee(q.comparator)}const pD={asc:"ASCENDING",desc:"DESCENDING"},mD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gD={and:"AND",or:"OR"};class _D{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xf(t,e){return t.useProto3Json||Yc(e)?e:{value:e}}function Xs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yD(t,e){return Xs(t,e.toTimestamp())}function yt(t){return W(!!t),Q.fromTimestamp(function(n){const r=Xn(n);return new Re(r.seconds,r.nanos)}(t))}function Am(t,e){return Yf(t,e).canonicalString()}function Yf(t,e){const n=function(i){return new le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P0(t){const e=le.fromString(t);return W(L0(e)),e}function hc(t,e){return Am(t.databaseId,e.path)}function wi(t,e){const n=P0(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(b0(n))}function k0(t,e){return Am(t.databaseId,e)}function C0(t){const e=P0(t);return e.length===4?le.emptyPath():b0(e)}function Jf(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b0(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rv(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function vD(t,e,n){const r=wi(t,e.name),i=yt(e.updateTime),s=e.createTime?yt(e.createTime):Q.min(),o=new ot({mapValue:{fields:e.fields}}),a=De.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function wD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(W(p===void 0||typeof p=="string"),Fe.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Fe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const p=h.code===void 0?V.UNKNOWN:I0(h.code);return new z(p,h.message||"")}(o);n=new S0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wi(t,r.document.name),s=yt(r.document.updateTime),o=r.document.createTime?yt(r.document.createTime):Q.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=De.newFoundDocument(i,s,o,a),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Su(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wi(t,r.document),s=r.readTime?yt(r.readTime):Q.min(),o=De.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wi(t,r.document),s=r.removedTargetIds||[];n=new Su([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uD(i,s),a=r.targetId;n=new A0(a,o)}}return n}function dc(t,e){let n;if(e instanceof so)n={update:Rv(t,e.key,e.value)};else if(e instanceof nh)n={delete:hc(t,e.key)};else if(e instanceof tr)n={update:Rv(t,e.key,e.data),updateMask:RD(e.fieldMask)};else{if(!(e instanceof T0))return K();n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Hs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ws)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qs)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function Zf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?at.updateTime(yt(s.updateTime)):s.exists!==void 0?at.exists(s.exists):at.none()}(e.currentDocument):at.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)W(a.setToServerValue==="REQUEST_TIME"),l=new Hs;else if("appendMissingElements"in a){const p=a.appendMissingElements.values||[];l=new Ks(p)}else if("removeAllFromArray"in a){const p=a.removeAllFromArray.values||[];l=new Ws(p)}else"increment"in a?l=new Qs(o,a.increment):K();const h=Ae.fromServerFormat(a.fieldPath);return new vm(h,l)}(t,i)):[];if(e.update){e.update.name;const i=wi(t,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Rt(h.map(p=>Ae.fromServerFormat(p)))}(e.updateMask);return new tr(i,s,o,n,r)}return new so(i,s,n,r)}if(e.delete){const i=wi(t,e.delete);return new nh(i,n)}if(e.verify){const i=wi(t,e.verify);return new T0(i,n)}return K()}function ED(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?yt(i.updateTime):yt(s);return o.isEqual(Q.min())&&(o=yt(s)),new oD(o,i.transformResults||[])}(n,e))):[]}function x0(t,e){return{documents:[k0(t,e.path)]}}function D0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k0(t,i);const s=function(h){if(h.length!==0)return V0(ue.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(d){return{field:as(d.field),direction:ID(d.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function N0(t){let e=C0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){W(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(c){const d=O0(c);return d instanceof ue&&_m(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(d=>function(y){return new Ba(ls(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Yc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,m=c.values||[];return new qs(m,d)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const d=!c.before,m=c.values||[];return new qs(m,d)}(n.endAt)),Wx(e,i,o,s,a,"F",l,h)}function TD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ls(n.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ls(n.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return ie.create(ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ue.create(n.compositeFilter.filters.map(r=>O0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function ID(t){return pD[t]}function AD(t){return mD[t]}function SD(t){return gD[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return Ae.fromServerFormat(t.fieldPath)}function V0(t){return t instanceof ie?function(n){if(n.op==="=="){if(uv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(lv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(lv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:AD(n.op),value:n.value}}}(t):t instanceof ue?function(n){const r=n.getFilters().map(i=>V0(i));return r.length===1?r[0]:{compositeFilter:{op:SD(n.op),filters:r}}}(t):K()}function RD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function L0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=Fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.ct=e}}function PD(t,e){let n;if(e.document)n=vD(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),i=Ni(e.noDocument.readTime);n=De.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=q.fromSegments(e.unknownDocument.path),i=Ni(e.unknownDocument.version);n=De.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Re(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),n}function Pv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:fc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:hc(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Xs(s,o.version.toTimestamp()),createTime:Xs(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Di(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:n.path.toArray(),version:Di(e.version)}}return r}function fc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Di(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ni(t){const e=new Re(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function ci(t,e){const n=(e.baseMutations||[]).map(s=>Zf(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Zf(t.ct,s)),i=Re.fromMillis(e.localWriteTimeMs);return new wm(e.batchId,i,n,r)}function Wo(t){const e=Ni(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ni(t.lastLimboFreeSnapshotVersion):Q.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return W(s.documents.length===1),Kt(tl(C0(s.documents[0])))}(t.query):function(s){return Kt(N0(s))}(t.query),new Mn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function F0(t,e){const n=Di(e.snapshotVersion),r=Di(e.lastLimboFreeSnapshotVersion);let i;i=lc(e.target)?x0(t.ct,e.target):D0(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function U0(t){const e=N0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cc(e,e.limit,"L"):e}function Ad(t,e){return new Tm(e.largestBatchId,Zf(t.ct,e.overlayMutation))}function kv(t,e){const n=e.path.lastSegment();return[t,_t(e.path.popLast()),n]}function Cv(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Di(r.readTime),documentKey:_t(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{getBundleMetadata(e,n){return bv(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ni(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return bv(e).put(function(i){return{bundleId:i.id,createTime:Di(yt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return xv(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:U0(s.bundledQuery),readTime:Ni(s.readTime)}}(r)})}saveNamedQuery(e,n){return xv(e).put(function(i){return{name:i.name,readTime:Di(yt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function bv(t){return $e(t,"bundles")}function xv(t){return $e(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new ih(e,r)}getOverlay(e,n){return No(e).get(kv(this.userId,n)).next(r=>r?Ad(this.serializer,r):null)}getOverlays(e,n){const r=pn();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Tm(n,o);i.push(this.ht(e,a))}),N.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(_t(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(No(e).j("collectionPathOverlayIndex",a))}),N.waitFor(s)}getOverlaysForCollection(e,n,r){const i=pn(),s=_t(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return No(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const h=Ad(this.serializer,l);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=pn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return No(e).J({index:"collectionGroupOverlayIndex",range:a},(l,h,p)=>{const c=Ad(this.serializer,h);s.size()<i||c.largestBatchId===o?(s.set(c.getKey(),c),o=c.largestBatchId):p.done()}).next(()=>s)}ht(e,n){return No(e).put(function(i,s,o){const[a,l,h]=kv(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:dc(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function No(t){return $e(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{Pt(e){return $e(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(ve(e.integerValue));else if("doubleValue"in e){const r=ve(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Va(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Xn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(jr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?JI(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Jc(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):K()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(ve(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),q.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}hi.vt=new hi;function bD(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Dv(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=bD(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class xD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Dv(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Dv(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class DD{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class ND{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Oo{constructor(){this.jt=new xD,this.Ht=new DD(this.jt),this.Jt=new ND(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new di(this.indexId,this.documentKey,this.arrayValue,r)}}function lr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Nv(t.arrayValue,e.arrayValue),n!==0?n:(n=Nv(t.directionalValue,e.directionalValue),n!==0?n:q.comparator(t.documentKey,e.documentKey)))}function Nv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.Xt=new he((n,r)=>Ae.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const n=zf(e);if(n!==void 0&&!this.sn(n))return!1;const r=li(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new he(Ae.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new wu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new wu(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new wu(r.field,r.dir==="asc"?0:1)));return new ac(ac.UNKNOWN_ID,this.collectionId,n,Oa.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){var e,n;if(W(t instanceof ie||t instanceof ue),t instanceof ie){if(t instanceof a0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ie.create(t.field,"==",s)))||[];return ue.create(i,"or")}return t}const r=t.filters.map(i=>B0(i));return ue.create(r,t.op)}function OD(t){if(t.getFilters().length===0)return[];const e=np(B0(t));return W(j0(e)),ep(e)||tp(e)?[e]:e.getFilters()}function ep(t){return t instanceof ie}function tp(t){return t instanceof ue&&_m(t)}function j0(t){return ep(t)||tp(t)||function(n){if(n instanceof ue&&Hf(n)){for(const r of n.getFilters())if(!ep(r)&&!tp(r))return!1;return!0}return!1}(t)}function np(t){if(W(t instanceof ie||t instanceof ue),t instanceof ie)return t;if(t.filters.length===1)return np(t.filters[0]);const e=t.filters.map(r=>np(r));let n=ue.create(e,t.op);return n=pc(n),j0(n)?n:(W(n instanceof ue),W(Gs(n)),W(n.filters.length>1),n.filters.reduce((r,i)=>Sm(r,i)))}function Sm(t,e){let n;return W(t instanceof ie||t instanceof ue),W(e instanceof ie||e instanceof ue),n=t instanceof ie?e instanceof ie?function(i,s){return ue.create([i,s],"and")}(t,e):Vv(t,e):e instanceof ie?Vv(e,t):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),Gs(i)&&Gs(s))return i0(i,s.getFilters());const o=Hf(i)?i:s,a=Hf(i)?s:i,l=o.filters.map(h=>Sm(h,a));return ue.create(l,"or")}(t,e),pc(n)}function Vv(t,e){if(Gs(e))return i0(e,t.getFilters());{const n=e.filters.map(r=>Sm(t,r));return ue.create(n,"or")}}function pc(t){if(W(t instanceof ie||t instanceof ue),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return pc(e[0]);if(n0(t))return t;const n=e.map(i=>pc(i)),r=[];return n.forEach(i=>{i instanceof ie?r.push(i):i instanceof ue&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ue.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this.un=new Rm}addToCollectionParentIndex(e,n){return this.un.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Ut.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class Rm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new he(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new he(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Uint8Array(0);class LD{constructor(e,n){this.databaseId=n,this.cn=new Rm,this.ln=new Yr(r=>xi(r),(r,i)=>el(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:_t(i)};return Lv(e).put(s)}return N.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[jI(n),""],!1,!0);return Lv(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(fn(o.parent))}return r})}addFieldIndex(e,n){const r=Vo(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ts(e);return s.next(a=>{o.put(Cv(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Vo(e),i=ts(e),s=es(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Vo(e),r=es(e),i=ts(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return N.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Ov(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=es(e);let i=!0;const s=new Map;return N.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return N.forEach(s,(l,h)=>{U("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`}(l)} to execute ${xi(n)}`);const p=function(A,b){const L=zf(b);if(L===void 0)return null;for(const M of uc(A,L.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(h,l),c=function(A,b){const L=new Map;for(const M of li(b))for(const R of uc(A,M.fieldPath))switch(R.op){case"==":case"in":L.set(M.fieldPath.canonicalString(),R.value);break;case"not-in":case"!=":return L.set(M.fieldPath.canonicalString(),R.value),Array.from(L.values())}return null}(h,l),d=function(A,b){const L=[];let M=!0;for(const R of li(b)){const T=R.kind===0?pv(A,R.fieldPath,A.startAt):mv(A,R.fieldPath,A.startAt);L.push(T.value),M&&(M=T.inclusive)}return new qs(L,M)}(h,l),m=function(A,b){const L=[];let M=!0;for(const R of li(b)){const T=R.kind===0?mv(A,R.fieldPath,A.endAt):pv(A,R.fieldPath,A.endAt);L.push(T.value),M&&(M=T.inclusive)}return new qs(L,M)}(h,l),y=this.In(l,h,d),E=this.In(l,h,m),I=this.Tn(l,h,c),_=this.En(l.indexId,p,y,d.inclusive,E,m.inclusive,I);return N.forEach(_,v=>r.G(v,n.limit).next(A=>{A.forEach(b=>{const L=q.fromSegments(b.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return N.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=OD(ue.create(e.filters,"and")).map(r=>Wf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),h=l/(n!=null?n.length:1),p=[];for(let c=0;c<l;++c){const d=n?this.dn(n[c/h]):eu,m=this.An(e,d,r[c%h],i),y=this.Rn(e,d,s[c%h],o),E=a.map(I=>this.An(e,d,I,!0));p.push(...this.createRange(m,y,E))}return p}An(e,n,r,i){const s=new di(e,q.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new di(e,q.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Ov(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return N.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let h=new he(Ae.comparator),p=!1;for(const c of l.filters)for(const d of c.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?p=!0:h=h.add(d.field));for(const c of l.orderBy)c.field.isKeyField()||(h=h.add(c.field));return h.size+(p?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new Oo;for(const i of li(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);hi.vt.It(s,o)}return r.zt()}dn(e){const n=new Oo;return hi.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new Oo;return hi.vt.It(Fa(this.databaseId,n),r.Yt(function(s){const o=li(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new Oo);let s=0;for(const o of li(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&Ua(a))i=this.gn(i,o,a);else{const h=l.Yt(o.kind);hi.vt.It(a,h)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Oo;l.seed(a.zt()),hi.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Vo(e),i=ts(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return N.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(p,c){const d=c?new Oa(c.sequenceNumber,new Ut(Ni(c.readTime),new q(fn(c.documentKey)),c.largestBatchId)):Oa.empty(),m=p.fields.map(([y,E])=>new wu(Ae.fromServerFormat(y),E));return new ac(p.indexId,p.collectionGroup,m,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Vo(e),s=ts(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>N.forEach(a,l=>s.put(Cv(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return N.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),N.forEach(a,l=>this.wn(e,i,l).next(h=>{const p=this.Sn(s,l);return h.isEqual(p)?N.resolve():this.bn(e,s,l,h,p)}))))})}Dn(e,n,r,i){return es(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return es(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=es(e);let s=new he(lr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new di(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new he(lr);const i=this.Vn(n,e);if(i==null)return r;const s=zf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ua(o))for(const a of o.arrayValue.values||[])r=r.add(new di(n.indexId,e.key,this.dn(a),i))}else r=r.add(new di(n.indexId,e.key,eu,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,h,p,c,d){const m=l.getIterator(),y=h.getIterator();let E=Zi(m),I=Zi(y);for(;E||I;){let _=!1,v=!1;if(E&&I){const A=p(E,I);A<0?v=!0:A>0&&(_=!0)}else E!=null?v=!0:_=!0;_?(c(I),I=Zi(y)):v?(d(E),E=Zi(m)):(E=Zi(m),I=Zi(y))}}(i,s,lr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),N.waitFor(o)}yn(e){let n=1;return ts(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>lr(o,a)).filter((o,a,l)=>!a||lr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=lr(o,e),l=lr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,eu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,eu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return lr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Mv)}getMinOffset(e,n){return N.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||K())).next(Mv)}}function Lv(t){return $e(t,"collectionParents")}function es(t){return $e(t,"indexEntries")}function Vo(t){return $e(t,"indexConfiguration")}function ts(t){return $e(t,"indexState")}function Mv(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;dm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ut(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(p,c,d)=>(a++,d.delete()));s.push(l.next(()=>{W(a===1)}));const h=[];for(const p of n.mutations){const c=HI(e,p.key.path,n.batchId);s.push(i.delete(c)),h.push(p.key)}return N.waitFor(s).next(()=>h)}function mc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw K();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);class sh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new sh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ur(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=us(e),o=ur(e);return o.add({}).next(a=>{W(typeof a=="number");const l=new wm(a,n,r,i),h=function(m,y,E){const I=E.baseMutations.map(v=>dc(m.ct,v)),_=E.mutations.map(v=>dc(m.ct,v));return{userId:y,batchId:E.batchId,localWriteTimeMs:E.localWriteTime.toMillis(),baseMutations:I,mutations:_}}(this.serializer,this.userId,l),p=[];let c=new he((d,m)=>Z(d.canonicalString(),m.canonicalString()));for(const d of i){const m=HI(this.userId,d.key.path,a);c=c.add(d.key.path.popLast()),p.push(o.put(h)),p.push(s.put(m,yx))}return c.forEach(d=>{p.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),N.waitFor(p).next(()=>l)})}lookupMutationBatch(e,n){return ur(e).get(n).next(r=>r?(W(r.userId===this.userId),ci(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?N.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ur(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(W(a.batchId>=r),s=ci(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ur(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ur(e).U("userMutationsIndex",n).next(r=>r.map(i=>ci(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Eu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return us(e).J({range:i},(o,a,l)=>{const[h,p,c]=o,d=fn(p);if(h===this.userId&&n.path.isEqual(d))return ur(e).get(c).next(m=>{if(!m)throw K();W(m.userId===this.userId),s.push(ci(this.serializer,m))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new he(Z);const i=[];return n.forEach(s=>{const o=Eu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=us(e).J({range:a},(h,p,c)=>{const[d,m,y]=h,E=fn(m);d===this.userId&&s.path.isEqual(E)?r=r.add(y):c.done()});i.push(l)}),N.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Eu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new he(Z);return us(e).J({range:o},(l,h,p)=>{const[c,d,m]=l,y=fn(d);c===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(m)):p.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ur(e).get(s).next(o=>{if(o===null)throw K();W(o.userId===this.userId),r.push(ci(this.serializer,o))}))}),N.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return z0(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),N.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return N.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return us(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=fn(s[1]);i.push(l)}else a.done()}).next(()=>{W(i.length===0)})})}containsKey(e,n){return $0(e,this.userId,n)}Nn(e){return q0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function $0(t,e,n){const r=Eu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return us(t).J({range:s,H:!0},(a,l,h)=>{const[p,c,d]=a;p===e&&c===i&&(o=!0),h.done()}).next(()=>o)}function ur(t){return $e(t,"mutations")}function us(t){return $e(t,"documentMutations")}function q0(t){return $e(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oi(0)}static kn(){return new Oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Oi(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>Q.fromTimestamp(new Re(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ns(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ns(e).J((o,a)=>{const l=Wo(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>N.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ns(e).J((r,i)=>{const s=Wo(i);n(s)})}qn(e){return Uv(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}Qn(e,n){return Uv(e).put("targetGlobalKey",n)}Kn(e,n){return ns(e).put(F0(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=xi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ns(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const h=Wo(a);el(n,h.target)&&(s=h,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=_r(e);return n.forEach(o=>{const a=_t(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),N.waitFor(i)}removeMatchingKeys(e,n,r){const i=_r(e);return N.forEach(n,s=>{const o=_t(s.path);return N.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=_r(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=_r(e);let s=te();return i.J({range:r,H:!0},(o,a,l)=>{const h=fn(o[1]),p=new q(h);s=s.add(p)}).next(()=>s)}containsKey(e,n){const r=_t(n.path),i=IDBKeyRange.bound([r],[jI(r)],!1,!0);let s=0;return _r(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,n){return ns(e).get(n).next(r=>r?Wo(r):null)}}function ns(t){return $e(t,"targets")}function Uv(t){return $e(t,"targetGlobal")}function _r(t){return $e(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class FD{constructor(e){this.Un=e,this.buffer=new he(Bv),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xr(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await qi(n)}await this.Hn(3e5)})}}class BD{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Gt.oe);const r=new FD(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Fv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fv):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(c=>(c>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${c}`),i=this.params.maximumSequenceNumbersToCollect):i=c,o=Date.now(),this.nthSequenceNumber(e,i))).next(c=>(r=c,a=Date.now(),this.removeTargets(e,r,n))).next(c=>(s=c,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(c=>(h=Date.now(),ss()<=re.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${c} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:c})))}}function jD(t,e){return new BD(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n){this.db=e,this.garbageCollector=jD(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return tu(e,r)}removeReference(e,n,r){return tu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return tu(e,n)}nr(e,n){return function(i,s){let o=!1;return q0(i).Y(a=>$0(i,a,s).next(l=>(l&&(o=!0),N.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),_r(e).delete(function(c){return[0,_t(c.path)]}(o))))});i.push(l)}}).next(()=>N.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return tu(e,n)}tr(e,n){const r=_r(e);let i,s=Gt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:h})=>{o===0?(s!==Gt.oe&&n(new q(fn(i)),s),s=h,i=l):s=Gt.oe}).next(()=>{s!==Gt.oe&&n(new q(fn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function tu(t,e){return _r(t).put(function(r,i){return{targetId:0,path:_t(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.changes=new Yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ri(e).put(r)}removeEntry(e,n,r){return ri(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],fc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=De.newInvalidDocument(n);return ri(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lo(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:De.newInvalidDocument(n)};return ri(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lo(n))},(i,s)=>{r={document:this.ir(n,s),size:mc(s)}}).next(()=>r)}getEntries(e,n){let r=Vt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Vt(),i=new Ee(q.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,mc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return N.resolve();let i=new he($v);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Lo(i.first()),Lo(i.last())),o=i.getIterator();let a=o.getNext();return ri(e).J({index:"documentKeyIndex",range:s},(l,h,p)=>{const c=q.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;a&&$v(a,c)<0;)r(a,null),a=o.getNext();a&&a.isEqual(c)&&(r(a,h),a=o.hasNext()?o.getNext():null),a?p.$(Lo(a)):p.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),fc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ri(e).U(IDBKeyRange.bound(a,l,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let p=Vt();for(const c of h){const d=this.ir(q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);d.isFoundDocument()&&(nl(n,d)||i.has(d.key))&&(p=p.insert(d.key,d))}return p})}getAllFromCollectionGroup(e,n,r,i){let s=Vt();const o=zv(n,r),a=zv(n,Ut.max());return ri(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,h,p)=>{const c=this.ir(q.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(c.key,c),s.size===i&&p.done()}).next(()=>s)}newChangeBuffer(e){return new qD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return jv(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}rr(e,n){return jv(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=PD(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return De.newInvalidDocument(e)}}function H0(t){return new $D(t)}class qD extends G0{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Yr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new he((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Pv(this.cr.serializer,o);i=i.add(s.path.popLast());const h=mc(l);r+=h-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Pv(this.cr.serializer,o.convertToNoDocument(Q.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),N.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function jv(t){return $e(t,"remoteDocumentGlobal")}function ri(t){return $e(t,"remoteDocumentsV14")}function Lo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zv(t,e){const n=e.documentKey.path.toArray();return[t,fc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function $v(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Z(n[s],r[s]),i)return i;return i=Z(n.length,r.length),i||(i=Z(n[n.length-2],r[r.length-2]),i||Z(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ua(r.mutation,i,Rt.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=pn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ho();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vt();const o=la(),a=function(){return la()}();return n.forEach((l,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof tr)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ua(p.mutation,h,p.mutation.getFieldMask(),Re.now())):o.set(h.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var c;return a.set(h,new GD(p,(c=o.get(h))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(e,n){const r=la();let i=new Ee((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let p=r.get(l)||Rt.empty();p=a.applyToLocalView(h,p),r.set(l,p);const c=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,p=l.value,c=f0();p.forEach(d=>{if(!s.has(d)){const m=w0(n.get(d),r.get(d));m!==null&&c.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,c))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):l0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(pn());let a=-1,l=s;return o.next(h=>N.forEach(h,(p,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(d=>{l=l.insert(p,d)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,te())).next(p=>({batchId:a,changes:d0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ho();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ho();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,l=>{const h=function(c,d){return new Hi(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((c,d)=>{o=o.insert(c,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,De.newInvalidDocument(p)))});let a=Ho();return o.forEach((l,h)=>{const p=s.get(l);p!==void 0&&ua(p.mutation,h,Rt.empty(),Re.now()),nl(n,h)&&(a=a.insert(l,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return N.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yt(i.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:U0(i.bundledQuery),readTime:yt(i.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this.overlays=new Ee(q.comparator),this.Ir=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pn();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=pn(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=pn(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const a=pn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>a.set(h,p)),!(a.size()>=i)););return N.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Tm(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.Tr=new he(qe.Er),this.dr=new he(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new le([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new le([])),r=new qe(n,e),i=new qe(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||Z(e.wr,n.wr)}static Ar(e,n){return Z(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new he(qe.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new he(Z);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new qe(new q(s),0);let a=new he(Z);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(l.wr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),i=this.br.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.Mr=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let r=Vt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():De.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vt();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dm(zI(p),r)<=0||(i.has(p.key)||nl(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YD(this)}getSize(e){return N.resolve(this.size)}}class YD extends G0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.persistence=e,this.Nr=new Yr(n=>xi(n),el),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pm,this.targetCount=0,this.kr=Oi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),N.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Kn(n),N.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Gt(0),this.Kr=!1,this.Kr=!0,this.$r=new WD,this.referenceDelegate=e(this),this.Ur=new JD(this),this.indexManager=new VD,this.remoteDocumentCache=function(i){return new XD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new M0(n),this.Gr=new HD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new QD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new ZD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ZD extends qI{constructor(e){super(),this.currentSequenceNumber=e}}class oh{constructor(e){this.persistence=e,this.Jr=new Pm,this.Yr=null}static Zr(e){return new oh(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),N.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return N.or([()=>N.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Xc("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rv,{unique:!0}),l.createObjectStore("documentMutations")}(e),qv(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),qv(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),p={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",p)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(p=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rv,{unique:!0});const c=h.store("mutations"),d=p.map(m=>c.put(m));return N.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:bx});h.createIndex("collectionPathOverlayIndex",xx,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",Dx,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:vx});h.createIndex("documentKeyIndex",wx),h.createIndex("collectionGroupIndex",Ex)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Rx}).createIndex("sequenceNumberIndex",Px,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:kx}).createIndex("documentKeyIndex",Cx,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=mc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>N.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>N.forEach(a,l=>{W(l.userId===s.userId);const h=ci(this.serializer,l);return z0(e,s.userId,h).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new le(o),h=function(c){return[0,_t(c)]}(l);s.push(n.get(h).next(p=>p?N.resolve():(c=>n.put({targetId:0,path:_t(c),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>N.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:Sx});const r=n.store("collectionParents"),i=new Rm,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:_t(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new le(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],h)=>{const p=fn(a);return s(p.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Wo(i),o=F0(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(c){return c.document?new q(le.fromString(c.document.name).popFirst(5)):c.noDocument?q.fromSegments(c.noDocument.path):c.unknownDocument?q.fromSegments(c.unknownDocument.path):K()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(h))}).next(()=>N.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=H0(this.serializer),s=new W0(oh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var h;let p=(h=a.get(l.userId))!==null&&h!==void 0?h:te();ci(this.serializer,l).keys().forEach(c=>p=p.add(c)),a.set(l.userId,p)}),N.forEach(a,(l,h)=>{const p=new Qe(h),c=ih.lt(this.serializer,p),d=s.getIndexManager(p),m=sh.lt(p,this.serializer,d,s.referenceDelegate);return new K0(i,m,c,d).recalculateAndSaveOverlaysForDocumentKeys(new $f(n,Gt.oe),l).next()})})}}function qv(t){t.createObjectStore("targetDocuments",{keyPath:Ix}).createIndex("documentTargetsIndex",Ax,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Tx,{unique:!0}),t.createObjectStore("targetGlobal")}const Sd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class km{constructor(e,n,r,i,s,o,a,l,h,p,c=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=h,this.li=p,this.hi=c,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=d=>Promise.resolve(),!km.D())throw new z(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new zD(this,i),this.Ai=n+"main",this.serializer=new M0(l),this.Ri=new Mr(this.Ai,this.hi,new eN(this.serializer)),this.$r=new CD,this.Ur=new MD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=H0(this.serializer),this.Gr=new kD,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,p===!1&&mt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(V.FAILED_PRECONDITION,Sd);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Gt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>nu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Xr(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Mo(e).get("owner").next(n=>N.resolve(this.vi(n)))}Ci(e){return nu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=$e(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return N.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):Mo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new z(V.FAILED_PRECONDITION,Sd);return!1}}return!(!this.networkEnabled||!this.inForeground)||nu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new $f(e,Gt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>nu(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return sh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new LD(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ih.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?Vx:l===16?Ox:l===15?pm:l===14?QI:l===13?WI:l===12?Nx:l===11?KI:void K()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new $f(a,this.Qr?this.Qr.next():Gt.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw mt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new z(V.FAILED_PRECONDITION,$I);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Mo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(V.FAILED_PRECONDITION,Sd)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Mo(e).put("owner",n)}static D(){return Mr.D()}bi(e){const n=Mo(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):N.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(mt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;RI()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return mt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){mt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Mo(t){return $e(t,"owner")}function nu(t){return $e(t,"clientMetadata")}function tN(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return RI()?8:GI(ze())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nN;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ss()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(ss()<=re.DEBUG&&U("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ss()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):N.resolve())}Yi(e,n){if(gv(n))return N.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cc(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,a);return this.ns(n,h,o,l.readTime)?this.Yi(e,cc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,i){return gv(n)||i.isEqual(Q.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?N.resolve(null):(ss()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),os(n)),this.rs(e,o,n,hx(i,-1)).next(a=>a))})}ts(e,n){let r=new he(c0(e));return n.forEach((i,s)=>{nl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ss()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",os(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ut.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(Z),this._s=new Yr(s=>xi(s),el),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function X0(t,e,n,r){return new rN(t,e,n,r)}async function Y0(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const h of i){o.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of s){a.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:a}))})})}function iN(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,p){const c=h.batch,d=c.keys();let m=N.resolve();return d.forEach(y=>{m=m.next(()=>p.getEntry(l,y)).next(E=>{const I=h.docVersions.get(y);W(I!==null),E.version.compareTo(I)<0&&(c.applyToRemoteDocument(E,h),E.isValidDocument()&&(E.setReadTime(h.commitVersion),p.addEntry(E)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function J0(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sN(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((p,c)=>{const d=i.get(c);if(!d)return;a.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,c).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,c)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(c)!==null?m=m.withResumeToken(Fe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(p.resumeToken,r)),i=i.insert(c,m),function(E,I,_){return E.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,m,p)&&a.push(n.Ur.updateTargetData(s,m))});let l=Vt(),h=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),a.push(oN(s,o,e.documentUpdates).next(p=>{l=p.Ps,h=p.Is})),!r.isEqual(Q.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(c=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(p)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(n.os=i,s))}function oN(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vt();return n.forEach((a,l)=>{const h=s.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function aN(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lN(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function rp(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Gv(t,e,n){const r=J(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,p){const c=J(l),d=c._s.get(p);return d!==void 0?N.resolve(c.os.get(d)):c.Ur.getTargetData(h,p)}(r,o,Kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(a=>(uN(r,Xx(e),a),{documents:a,Ts:s})))}function uN(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Hv{constructor(){this.activeTargetIds=nD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z0{constructor(){this.so=new Hv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Hv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function Rd(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class fN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Rd(),l=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,l,h,i).then(p=>(U("RestConnection",`Received RPC '${n}' ${a}: `,p),p),p=>{throw ki("RestConnection",`RPC '${n}' ${a} failed with error: `,p,"url: ",l,"request:",i),p})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=hN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Rd();return new Promise((o,a)=>{const l=new OI;l.setWithCredentials(!0),l.listenOnce(VI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vu.NO_ERROR:const p=l.getResponseJson();U(it,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case vu.TIMEOUT:U(it,`RPC '${e}' ${s} timed out`),a(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case vu.HTTP_ERROR:const c=l.getStatus();if(U(it,`RPC '${e}' ${s} failed with status:`,c,"response text:",l.getResponseText()),c>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(m.status);a(new z(y,m.message))}else a(new z(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(it,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);U(it,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Rd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FI(),a=MI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const p=s.join("");U(it,`Creating RPC '${e}' stream ${i}: ${p}`,l);const c=o.createWebChannel(p,l);let d=!1,m=!1;const y=new dN({Io:I=>{m?U(it,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(U(it,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),U(it,`RPC '${e}' stream ${i} sending:`,I),c.send(I))},To:()=>c.close()}),E=(I,_,v)=>{I.listen(_,A=>{try{v(A)}catch(b){setTimeout(()=>{throw b},0)}})};return E(c,Go.EventType.OPEN,()=>{m||(U(it,`RPC '${e}' stream ${i} transport opened.`),y.yo())}),E(c,Go.EventType.CLOSE,()=>{m||(m=!0,U(it,`RPC '${e}' stream ${i} transport closed`),y.So())}),E(c,Go.EventType.ERROR,I=>{m||(m=!0,ki(it,`RPC '${e}' stream ${i} transport errored:`,I),y.So(new z(V.UNAVAILABLE,"The operation could not be completed")))}),E(c,Go.EventType.MESSAGE,I=>{var _;if(!m){const v=I.data[0];W(!!v);const A=v,b=A.error||((_=A[0])===null||_===void 0?void 0:_.error);if(b){U(it,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let M=function(S){const P=Le[S];if(P!==void 0)return I0(P)}(L),R=b.message;M===void 0&&(M=V.INTERNAL,R="Unknown error status: "+L+" with message "+b.message),m=!0,y.So(new z(M,R)),c.close()}else U(it,`RPC '${e}' stream ${i} received:`,v),y.bo(v)}}),E(a,LI.STAT_EVENT,I=>{I.stat===jf.PROXY?U(it,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===jf.NOPROXY&&U(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.wo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(){return typeof window<"u"?window:null}function Ru(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t){return new _D(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new eA(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(mt(n.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mN extends tA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=wD(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?yt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Jf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=lc(l)?{documents:x0(s,l)}:{query:D0(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R0(s,o.resumeToken);const h=Xf(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=Xs(s,o.snapshotVersion.toTimestamp());const h=Xf(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=TD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Jf(this.serializer),n.removeTarget=e,this.a_(n)}}class gN extends tA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ED(e.writeResults,e.commitTime),r=yt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Jf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dc(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Yf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Yf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mt(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=J(l);h.L_.add(4),await il(h),h.q_.set("Unknown"),h.L_.delete(4),await lh(h)}(this))})}),this.q_=new yN(r,i)}}async function lh(t){if(Ki(t))for(const e of t.B_)await e(!0)}async function il(t){for(const e of t.B_)await e(!1)}function nA(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Nm(n)?Dm(n):oo(n).r_()&&xm(n,e))}function bm(t,e){const n=J(t),r=oo(n);n.N_.delete(e),r.r_()&&rA(n,e),n.N_.size===0&&(r.r_()?r.o_():Ki(n)&&n.q_.set("Unknown"))}function xm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oo(t).A_(e)}function rA(t,e){t.Q_.xe(e),oo(t).R_(e)}function Dm(t){t.Q_=new fD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),oo(t).start(),t.q_.v_()}function Nm(t){return Ki(t)&&!oo(t).n_()&&t.N_.size>0}function Ki(t){return J(t).L_.size===0}function iA(t){t.Q_=void 0}async function wN(t){t.q_.set("Online")}async function EN(t){t.N_.forEach((e,n)=>{xm(t,e)})}async function TN(t,e){iA(t),Nm(t)?(t.q_.M_(e),Dm(t)):t.q_.set("Unknown")}async function IN(t,e,n){if(t.q_.set("Online"),e instanceof S0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gc(t,r)}else if(e instanceof Su?t.Q_.Ke(e):e instanceof A0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await J0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const p=s.N_.get(h);p&&s.N_.set(h,p.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const p=s.N_.get(l);if(!p)return;s.N_.set(l,p.withResumeToken(Fe.EMPTY_BYTE_STRING,p.snapshotVersion)),rA(s,l);const c=new Mn(p.target,l,h,p.sequenceNumber);xm(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await gc(t,r)}}async function gc(t,e,n){if(!Xr(e))throw e;t.L_.add(1),await il(t),t.q_.set("Offline"),n||(n=()=>J0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await lh(t)})}function sA(t,e){return e().catch(n=>gc(t,n,e))}async function sl(t){const e=J(t),n=$r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;AN(e);)try{const i=await aN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,SN(e,i)}catch(i){await gc(e,i)}oA(e)&&aA(e)}function AN(t){return Ki(t)&&t.O_.length<10}function SN(t,e){t.O_.push(e);const n=$r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function oA(t){return Ki(t)&&!$r(t).n_()&&t.O_.length>0}function aA(t){$r(t).start()}async function RN(t){$r(t).p_()}async function PN(t){const e=$r(t);for(const n of t.O_)e.m_(n.mutations)}async function kN(t,e,n){const r=t.O_.shift(),i=Em.from(r,e,n);await sA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sl(t)}async function CN(t,e){e&&$r(t).V_&&await async function(r,i){if(function(o){return cD(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();$r(r).s_(),await sA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sl(r)}}(t,e),oA(t)&&aA(t)}async function Wv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ki(n);n.L_.add(3),await il(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await lh(n)}async function bN(t,e){const n=J(t);e?(n.L_.delete(2),await lh(n)):e||(n.L_.add(2),await il(n),n.q_.set("Unknown"))}function oo(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new mN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:wN.bind(null,t),Ro:EN.bind(null,t),mo:TN.bind(null,t),d_:IN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Nm(t)?Dm(t):t.q_.set("Unknown")):(await t.K_.stop(),iA(t))})),t.K_}function $r(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new gN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:RN.bind(null,t),mo:CN.bind(null,t),f_:PN.bind(null,t),g_:kN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sl(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Om(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vm(t,e){if(mt("AsyncQueue",`${e}: ${t}`),Xr(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ho(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.W_=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,i,s,o,a,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class DN{constructor(){this.queries=Xv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Xv(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function Xv(){return new Yr(t=>u0(t),Zc)}async function Lm(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new xN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Vm(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Fm(n)}async function Mm(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NN(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Fm(n)}function ON(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Fm(t){t.Y_.forEach(e=>{e.next()})}var ip,Yv;(Yv=ip||(ip={})).ea="default",Yv.Cache="cache";class Um{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ip.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.key=e}}class uA{constructor(e){this.key=e}}class VN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=c0(e),this.Ra=new bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,c)=>{const d=i.get(p),m=nl(this.query,c)?c:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;d&&m?d.data.isEqual(m.data)?y!==E&&(r.track({type:3,doc:m}),I=!0):this.ga(d,m)||(r.track({type:2,doc:m}),I=!0,(l&&this.Aa(m,l)>0||h&&this.Aa(m,h)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),I=!0):d&&!m&&(r.track({type:1,doc:d}),I=!0,(l||h)&&(a=!0)),I&&(m?(o=o.add(m),s=E?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,c)=>function(m,y){const E=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return E(m)-E(y)}(p.type,c.type)||this.Aa(p.doc,c.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Ys(this.query,e.Ra,s,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new uA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new lA(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ys.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MN{constructor(e){this.key=e,this.va=!1}}class FN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yr(a=>u0(a),Zc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(q.comparator),this.Na=new Map,this.La=new Pm,this.Ba={},this.ka=new Map,this.qa=Oi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UN(t,e,n=!0){const r=mA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await cA(r,e,n,!0),i}async function BN(t,e){const n=mA(t);await cA(n,e,!0,!1)}async function cA(t,e,n,r){const i=await lN(t.localStore,Kt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await jN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nA(t.remoteStore,i),a}async function jN(t,e,n,r,i){t.Ka=(c,d,m)=>async function(E,I,_,v){let A=I.view.ma(_);A.ns&&(A=await Gv(E.localStore,I.query,!1).then(({documents:R})=>I.view.ma(R,A)));const b=v&&v.targetChanges.get(I.targetId),L=v&&v.targetMismatches.get(I.targetId)!=null,M=I.view.applyChanges(A,E.isPrimaryClient,b,L);return Zv(E,I.targetId,M.wa),M.snapshot}(t,c,d,m);const s=await Gv(t.localStore,e,!0),o=new VN(e,s.Ts),a=o.ma(s.documents),l=rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(a,t.isPrimaryClient,l);Zv(t,n,h.wa);const p=new LN(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function zN(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Zc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&bm(r.remoteStore,i.targetId),sp(r,i.targetId)}).catch(qi)):(sp(r,i.targetId),await rp(r.localStore,i.targetId,!0))}async function $N(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bm(n.remoteStore,r.targetId))}async function qN(t,e,n){const r=gA(t);try{const i=await function(o,a){const l=J(o),h=Re.now(),p=a.reduce((m,y)=>m.add(y.key),te());let c,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Vt(),E=te();return l.cs.getEntries(m,p).next(I=>{y=I,y.forEach((_,v)=>{v.isValidDocument()||(E=E.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(I=>{c=I;const _=[];for(const v of a){const A=lD(v,c.get(v.key).overlayedDocument);A!=null&&_.push(new tr(v.key,A,e0(A.value.mapValue),at.exists(!0)))}return l.mutationQueue.addMutationBatch(m,h,_,a)}).next(I=>{d=I;const _=I.applyToLocalDocumentSet(c,E);return l.documentOverlayCache.saveOverlays(m,I.batchId,_)})}).then(()=>({batchId:d.batchId,changes:d0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ee(Z)),h=h.insert(a,l),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await ol(r,i.changes),await sl(r.remoteStore)}catch(i){const s=Vm(i,"Failed to persist write");n.reject(s)}}async function hA(t,e){const n=J(t);try{const r=await sN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?W(o.va):i.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await ol(n,r,e)}catch(r){await qi(r)}}function Jv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=J(o);l.onlineState=a;let h=!1;l.queries.forEach((p,c)=>{for(const d of c.j_)d.Z_(a)&&(h=!0)}),h&&Fm(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(q.comparator);o=o.insert(s,De.newNoDocument(s,Q.min()));const a=te().add(s),l=new rh(Q.min(),new Map,new Ee(Z),o,a);await hA(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Bm(r)}else await rp(r.localStore,e,!1).then(()=>sp(r,e,n)).catch(qi)}async function HN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await iN(n.localStore,e);fA(n,r,null),dA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ol(n,i)}catch(i){await qi(i)}}async function KN(t,e,n){const r=J(t);try{const i=await function(o,a){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,a).next(c=>(W(c!==null),p=c.keys(),l.mutationQueue.removeMutationBatch(h,c))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);fA(r,e,n),dA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ol(r,i)}catch(i){await qi(i)}}function dA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function fA(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function sp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||pA(t,r)})}function pA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(bm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Bm(t))}function Zv(t,e,n){for(const r of n)r instanceof lA?(t.La.addReference(r.key,e),WN(t,r)):r instanceof uA?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||pA(t,r.key)):K()}function WN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),Bm(t))}function Bm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(le.fromString(e)),r=t.qa.next();t.Na.set(r,new MN(n)),t.Oa=t.Oa.insert(n,r),nA(t.remoteStore,new Mn(Kt(tl(n.path)),r,"TargetPurposeLimboResolution",Gt.oe))}}async function ol(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const c=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,c?"current":"not-current")}if(h){i.push(h);const c=Cm.Wi(l.targetId,h);s.push(c)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,h){const p=J(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>N.forEach(h,d=>N.forEach(d.$i,m=>p.persistence.referenceDelegate.addReference(c,d.targetId,m)).next(()=>N.forEach(d.Ui,m=>p.persistence.referenceDelegate.removeReference(c,d.targetId,m)))))}catch(c){if(!Xr(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of h){const d=c.targetId;if(!c.fromCache){const m=p.os.get(d),y=m.snapshotVersion,E=m.withLastLimboFreeSnapshotVersion(y);p.os=p.os.insert(d,E)}}}(r.localStore,s))}async function QN(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Y0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new z(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ol(n,r.hs)}}function XN(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function mA(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GN.bind(null,e),e.Ca.d_=NN.bind(null,e.eventManager),e.Ca.$a=ON.bind(null,e.eventManager),e}function gA(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KN.bind(null,e),e}class ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ah(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return X0(this.persistence,new Q0,e.initialUser,this.serializer)}Ga(e){return new W0(oh.Zr,this.serializer)}Wa(e){return new Z0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ja.provider={build:()=>new ja};class YN extends ja{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await gA(this.Ja.syncEngine),await sl(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return X0(this.persistence,new Q0,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new UD(r,e.asyncQueue,n)}Ha(e,n){const r=new mx(n,this.persistence);return new px(e.asyncQueue,r)}Ga(e){const n=tN(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new km(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,pN(),Ru(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Z0}}class _c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QN.bind(null,this.syncEngine),await bN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DN}()}createDatastore(e){const n=ah(e.databaseInfo.databaseId),r=function(s){return new fN(s)}(e.databaseInfo);return function(s,o,a,l){return new _N(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new vN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Jv(this.syncEngine,n,0),function(){return Kv.D()?new Kv:new cN}())}createSyncEngine(e,n){return function(i,s,o,a,l,h,p){const c=new FN(i,s,o,a,l,h);return p&&(c.Qa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await il(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_c.provider={build:()=>new _c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=BI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Y0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ew(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZN(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wv(e.remoteStore,i)),t._onlineComponents=e}async function ZN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ki("Error using user provided cache. Falling back to memory cache: "+n),await Pd(t,new ja)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Pd(t,new ja);return t._offlineComponents}async function _A(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await ew(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await ew(t,new _c))),t._onlineComponents}function eO(t){return _A(t).then(e=>e.syncEngine)}async function yc(t){const e=await _A(t),n=e.eventManager;return n.onListen=UN.bind(null,e.syncEngine),n.onUnlisten=zN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$N.bind(null,e.syncEngine),n}function tO(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const p=new jm({next:d=>{p.Za(),o.enqueueAndForget(()=>Mm(s,c));const m=d.docs.has(a);!m&&d.fromCache?h.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?h.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(d)},error:d=>h.reject(d)}),c=new Um(tl(a.path),p,{includeMetadataChanges:!0,_a:!0});return Lm(s,c)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}function nO(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const p=new jm({next:d=>{p.Za(),o.enqueueAndForget(()=>Mm(s,c)),d.fromCache&&l.source==="server"?h.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(d)},error:d=>h.reject(d)}),c=new Um(a,p,{includeMetadataChanges:!0,_a:!0});return Lm(s,c)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rO(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nw(t){if(!q.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rw(t){if(q.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uh(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function iO(t,e){if(e<=0)throw new z(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class al{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nx;switch(r.type){case"firstParty":return new ox(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tw.get(n);r&&(U("ComponentProvider","Removing Datastore"),tw.delete(n),r.terminate())}(this),Promise.resolve()}}function vA(t,e,n,r={}){var i;const s=(t=lt(t,al))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Qe.MOCK_USER;else{a=SI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Qe(h)}t._authCredentials=new rx(new UI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new In(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Fr extends In{constructor(e,n,r){super(e,n,tl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new q(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function wA(t,e,...n){if(t=ke(t),zm("collection","path",e),t instanceof al){const r=le.fromString(e,...n);return rw(r),new Fr(t,null,r)}{if(!(t instanceof ut||t instanceof Fr))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return rw(r),new Fr(t.firestore,null,r)}}function sO(t,e){if(t=lt(t,al),zm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new In(t,null,function(r){return new Hi(le.emptyPath(),r)}(e))}function za(t,e,...n){if(t=ke(t),arguments.length===1&&(e=BI.newId()),zm("doc","path",e),t instanceof al){const r=le.fromString(e,...n);return nw(r),new ut(t,null,new q(r))}{if(!(t instanceof ut||t instanceof Fr))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return nw(r),new ut(t.firestore,t instanceof Fr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new eA(this,"async_queue_retry"),this.Vu=()=>{const r=Ru();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ru();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ru();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new yn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Om.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ow(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Tn extends al{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sw(e),this._firestoreClient=void 0,await e}}}function oO(t,e){const n=typeof t=="object"?t:Qc(),r=typeof t=="string"?t:"(default)",i=zi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=TI("firestore");s&&vA(i,...s)}return i}function ch(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||EA(t),t._firestoreClient}function EA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,h,p){return new Mx(a,l,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,yA(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new JN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}function aO(t,e){ki("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return lO(t,_c.provider,{build:r=>new YN(r,n.cacheSizeBytes,void 0)}),Promise.resolve()}function lO(t,e,n){if((t=lt(t,Tn))._firestoreClient||t._terminated)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new z(V.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},EA(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Js(Fe.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Js(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=/^__.*__$/;class cO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class TA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Gm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Gm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(IA(this.Cu)&&uO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ah(e)}Qu(e,n,r,i=!1){return new Gm({Cu:e,methodName:n,qu:r,path:Ae.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dh(t){const e=t._freezeSettings(),n=ah(t._databaseId);return new hO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AA(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Wm("Data must be an object, but it was:",o,r);const a=SA(r,o);let l,h;if(s.merge)l=new Rt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const c of s.mergeFields){const d=op(e,c,n);if(!o.contains(d))throw new z(V.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);PA(p,d)||p.push(d)}l=new Rt(p),h=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,h=o.fieldTransforms;return new cO(new ot(a),l,h)}class ul extends ll{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ul}}class Hm extends ll{_toFieldTransform(e){return new vm(e.path,new Hs)}isEqual(e){return e instanceof Hm}}class Km extends ll{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Qs(e.serializer,m0(e.serializer,this.$u));return new vm(e.path,n)}isEqual(e){return e instanceof Km&&this.$u===e.$u}}function dO(t,e,n,r){const i=t.Qu(1,e,n);Wm("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Gi(r,(l,h)=>{const p=Qm(e,l,n);h=ke(h);const c=i.Nu(p);if(h instanceof ul)s.push(p);else{const d=cl(h,c);d!=null&&(s.push(p),o.set(p,d))}});const a=new Rt(s);return new TA(o,a,i.fieldTransforms)}function fO(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[op(e,r,n)],l=[i];if(s.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(op(e,s[d])),l.push(s[d+1]);const h=[],p=ot.empty();for(let d=a.length-1;d>=0;--d)if(!PA(h,a[d])){const m=a[d];let y=l[d];y=ke(y);const E=o.Nu(m);if(y instanceof ul)h.push(m);else{const I=cl(y,E);I!=null&&(h.push(m),p.set(m,I))}}const c=new Rt(h);return new TA(p,c,o.fieldTransforms)}function pO(t,e,n,r=!1){return cl(n,t.Qu(r?4:3,e))}function cl(t,e){if(RA(t=ke(t)))return Wm("Unsupported field value:",e,t),SA(t,e);if(t instanceof ll)return function(r,i){if(!IA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=cl(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Xs(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xs(i.serializer,s)}}if(r instanceof $m)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Js)return{bytesValue:R0(i.serializer,r._byteString)};if(r instanceof ut){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Am(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return ym(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${uh(r)}`)}(t,e)}function SA(t,e){const n={};return XI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gi(t,(r,i)=>{const s=cl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof $m||t instanceof Js||t instanceof ut||t instanceof ll||t instanceof qm)}function Wm(t,e,n){if(!RA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=uh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function op(t,e,n){if((e=ke(e))instanceof hh)return e._internalPath;if(typeof e=="string")return Qm(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const mO=new RegExp("[~\\*/\\[\\]]");function Qm(t,e,n){if(e.search(mO)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(V.INVALID_ARGUMENT,a+t+l)}function PA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gO extends kA{data(){return super.data()}}function fh(t,e){return typeof e=="string"?Qm(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xm{}class Ym extends Xm{}function bA(t,e,...n){let r=[];e instanceof Xm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Jm).length,a=s.filter(l=>l instanceof ph).length;if(o>1||o>0&&a>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ph extends Ym{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ph(e,n,r)}_apply(e){const n=this._parse(e);return DA(e._query,n),new In(e.firestore,e.converter,Qf(e._query,n))}_parse(e){const n=dh(e.firestore);return function(s,o,a,l,h,p,c){let d;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){lw(c,p);const m=[];for(const y of c)m.push(aw(l,s,y));d={arrayValue:{values:m}}}else d=aw(l,s,c)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||lw(c,p),d=pO(a,o,c,p==="in"||p==="not-in");return ie.create(h,p,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xA(t,e,n){const r=e,i=fh("where",t);return ph._create(i,r,n)}class Jm extends Xm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ue.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)DA(o,l),o=Qf(o,l)}(e._query,n),new In(e.firestore,e.converter,Qf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zm extends Ym{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Zm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ba(s,o)}(e._query,this._field,this._direction);return new In(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Hi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function _O(t,e="asc"){const n=e,r=fh("orderBy",t);return Zm._create(r,n)}class eg extends Ym{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new eg(e,n,r)}_apply(e){return new In(e.firestore,e.converter,cc(e._query,this._limit,this._limitType))}}function HF(t){return iO("limit",t),eg._create("limit",t,"F")}function aw(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!l0(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!q.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fa(t,new q(r))}if(n instanceof ut)return Fa(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uh(n)}.`)}function lw(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function DA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yO{convertValue(e,n="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ve(o.doubleValue));return new qm(s)}convertGeoPoint(e){return new $m(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);W(L0(r));const i=new Ci(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||mt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OA extends kA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pu extends OA{data(e={}){return super.data(e)}}class VA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pu(this._firestore,this._userDataWriter,r.key,r,new Qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),p=o.indexOf(a.doc.key)),{type:vO(a.type),doc:l,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){t=lt(t,ut);const e=lt(t.firestore,Tn);return tO(ch(e),t._key).then(n=>MA(e,t,n))}class tg extends yO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function KF(t){t=lt(t,In);const e=lt(t.firestore,Tn),n=ch(e),r=new tg(e);return CA(t._query),nO(n,t._query).then(i=>new VA(e,r,t,i))}function uw(t,e,n){t=lt(t,ut);const r=lt(t.firestore,Tn),i=NA(t.converter,e,n);return mh(r,[AA(dh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,at.none())])}function WF(t,e,n,...r){t=lt(t,ut);const i=lt(t.firestore,Tn),s=dh(i);let o;return o=typeof(e=ke(e))=="string"||e instanceof hh?fO(s,"updateDoc",t._key,e,n,r):dO(s,"updateDoc",t._key,e),mh(i,[o.toMutation(t._key,at.exists(!0))])}function QF(t){return mh(lt(t.firestore,Tn),[new nh(t._key,at.none())])}function XF(t,e){const n=lt(t.firestore,Tn),r=za(t),i=NA(t.converter,e);return mh(n,[AA(dh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,at.exists(!1))]).then(()=>r)}function ap(t,...e){var n,r,i;t=ke(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ow(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ow(e[o])){const c=e[o];e[o]=(n=c.next)===null||n===void 0?void 0:n.bind(c),e[o+1]=(r=c.error)===null||r===void 0?void 0:r.bind(c),e[o+2]=(i=c.complete)===null||i===void 0?void 0:i.bind(c)}let l,h,p;if(t instanceof ut)h=lt(t.firestore,Tn),p=tl(t._key.path),l={next:c=>{e[o]&&e[o](MA(h,t,c))},error:e[o+1],complete:e[o+2]};else{const c=lt(t,In);h=lt(c.firestore,Tn),p=c._query;const d=new tg(h);l={next:m=>{e[o]&&e[o](new VA(h,d,c,m))},error:e[o+1],complete:e[o+2]},CA(t._query)}return function(d,m,y,E){const I=new jm(E),_=new Um(m,I,y);return d.asyncQueue.enqueueAndForget(async()=>Lm(await yc(d),_)),()=>{I.Za(),d.asyncQueue.enqueueAndForget(async()=>Mm(await yc(d),_))}}(ch(h),p,a,l)}function mh(t,e){return function(r,i){const s=new yn;return r.asyncQueue.enqueueAndForget(async()=>qN(await eO(r),i,s)),s.promise}(ch(t),e)}function MA(t,e,n){const r=n.docs.get(e._key),i=new tg(t);return new OA(t,i,e._key,r,new Qo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(){return new ul("deleteField")}function JF(){return new Hm("serverTimestamp")}function ZF(t){return new Km("increment",t)}(function(e,n=!0){(function(i){io=i})($i),on(new Xt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Tn(new ix(r.getProvider("auth-internal")),new lx(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ci(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bt(ev,"4.7.3",e),bt(ev,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="firebasestorage.googleapis.com",UA="storageBucket",wO=2*60*1e3,EO=10*60*1e3,TO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends ln{constructor(e,n,r=0){super(kd(e),`Firebase Storage: ${n} (${kd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ye||(ye={}));function kd(t){return"storage/"+t}function ng(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(ye.UNKNOWN,t)}function IO(t){return new Ce(ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AO(t){return new Ce(ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(ye.UNAUTHENTICATED,t)}function RO(){return new Ce(ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PO(t){return new Ce(ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function BA(){return new Ce(ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jA(){return new Ce(ye.CANCELED,"User canceled the upload/download.")}function kO(t){return new Ce(ye.INVALID_URL,"Invalid URL '"+t+"'.")}function CO(t){return new Ce(ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bO(){return new Ce(ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+UA+"' property when initializing the app?")}function zA(){return new Ce(ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xO(){return new Ce(ye.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function DO(){return new Ce(ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NO(t){return new Ce(ye.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lp(t){return new Ce(ye.INVALID_ARGUMENT,t)}function $A(){return new Ce(ye.APP_DELETED,"The Firebase app was deleted.")}function OO(t){return new Ce(ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ca(t,e){return new Ce(ye.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Fo(t){throw new Ce(ye.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(r.path==="")return r;throw CO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const p="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${c}/${p}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},E=n===FA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",_=new RegExp(`^https?://${E}/${i}/${I}`,"i"),A=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:h},{regex:_,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<A.length;b++){const L=A[b],M=L.regex.exec(e);if(M){const R=M[L.indices.bucket];let T=M[L.indices.path];T||(T=""),r=new Lt(R,T),L.postModify(r);break}}if(r==null)throw kO(e);return r}}class VO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let h=!1;function p(...I){h||(h=!0,e.apply(null,I))}function c(I){i=setTimeout(()=>{i=null,t(m,l())},I)}function d(){s&&clearTimeout(s)}function m(I,..._){if(h){d();return}if(I){d(),p.call(null,I,..._);return}if(l()||o){d(),p.call(null,I,..._);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,c(A)}let y=!1;function E(I){y||(y=!0,d(),!h&&(i!==null?(I||(a=2),clearTimeout(i),c(0)):I||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function MO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){return t!==void 0}function UO(t){return typeof t=="function"}function BO(t){return typeof t=="object"&&!Array.isArray(t)}function gh(t){return typeof t=="string"||t instanceof String}function cw(t){return rg()&&t instanceof Blob}function rg(){return typeof Blob<"u"}function hw(t,e,n,r){if(r<e)throw lp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw lp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ei;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ei||(Ei={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,i,s,o,a,l,h,p,c,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new iu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ei.NO_ERROR,l=s.getStatus();if(!a||GA(l,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Ei.ABORT;r(!1,new iu(!1,null,p));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new iu(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());FO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ng();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?$A():jA();o(l)}else{const l=BA();o(l)}};this.canceled_?n(!1,new iu(!1,null,!0)):this.backoffId_=LO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class iu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $O(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function HO(t,e,n,r,i,s,o=!0){const a=qA(t.urlParams),l=t.url+a,h=Object.assign({},t.headers);return qO(h,e),zO(h,n),$O(h,s),GO(h,r),new jO(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WO(...t){const e=KO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rg())return new Blob(t);throw new Ce(ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){if(typeof atob>"u")throw NO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cd{constructor(e,n){this.data=e,this.contentType=n||null}}function YO(t,e){switch(t){case mn.RAW:return new Cd(HA(e));case mn.BASE64:case mn.BASE64URL:return new Cd(KA(t,e));case mn.DATA_URL:return new Cd(ZO(e),eV(e))}throw ng()}function HA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JO(t){let e;try{e=decodeURIComponent(t)}catch{throw ca(mn.DATA_URL,"Malformed data URL.")}return HA(e)}function KA(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XO(e)}catch(i){throw i.message.includes("polyfill")?i:ca(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class WA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ca(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ZO(t){const e=new WA(t);return e.base64?KA(mn.BASE64,e.rest):JO(e.rest)}function eV(t){return new WA(t).contentType}function tV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){let r=0,i="";cw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(cw(this.data_)){const r=this.data_,i=QO(r,e,n);return i===null?null:new yr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yr(r,!0)}}static getBlob(...e){if(rg()){const n=e.map(r=>r instanceof yr?r.data_:r);return new yr(WO.apply(null,n))}else{const n=e.map(o=>gh(o)?YO(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new yr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){let e;try{e=JSON.parse(t)}catch{return null}return BO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function XA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(t,e){return e}class ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||iV}}let su=null;function sV(t){return!gh(t)||t.length<2?t:XA(t)}function YA(){if(su)return su;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(s,o){return sV(o)}const n=new ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ft("size");return i.xform=r,t.push(i),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),su=t,su}function oV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Lt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function aV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return oV(r,t),r}function JA(t,e,n){const r=QA(e);return r===null?null:aV(t,r,n)}function lV(t,e,n,r){const i=QA(e);if(i===null||!gh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const p=t.bucket,c=t.fullPath,d="/b/"+o(p)+"/o/"+o(c),m=hl(d,n,r),y=qA({alt:"media",token:h});return m+y})[0]}function ZA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ao{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){if(!t)throw ng()}function ig(t,e){function n(r,i){const s=JA(t,i,e);return $n(s!==null),s}return n}function uV(t,e){function n(r,i){const s=JA(t,i,e);return $n(s!==null),lV(s,i,t.host,t._protocol)}return n}function dl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=RO():i=SO():n.getStatus()===402?i=AO(t.bucket):n.getStatus()===403?i=PO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function eS(t){const e=dl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=IO(t.path)),s.serverResponse=i.serverResponse,s}return n}function cV(t,e,n){const r=e.fullServerUrl(),i=hl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ao(i,s,ig(t,n),o);return a.errorHandler=eS(e),a}function hV(t,e,n){const r=e.fullServerUrl(),i=hl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ao(i,s,uV(t,n),o);return a.errorHandler=eS(e),a}function dV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function tS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=dV(null,e)),r}function fV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let b=0;b<2;b++)A=A+Math.random().toString().slice(2);return A}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const h=tS(e,r,i),p=ZA(h,n),c="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=yr.getBlob(c,r,d);if(m===null)throw zA();const y={name:h.fullPath},E=hl(s,t.host,t._protocol),I="POST",_=t.maxUploadRetryTime,v=new ao(E,I,ig(t,n),_);return v.urlParams=y,v.headers=o,v.body=m.uploadData(),v.errorHandler=dl(e),v}class wc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function sg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{$n(!1)}return $n(!!n&&(e||["active"]).indexOf(n)!==-1),n}function pV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=tS(e,r,i),a={name:o.fullPath},l=hl(s,t.host,t._protocol),h="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},c=ZA(o,n),d=t.maxUploadRetryTime;function m(E){sg(E);let I;try{I=E.getResponseHeader("X-Goog-Upload-URL")}catch{$n(!1)}return $n(gh(I)),I}const y=new ao(l,h,m,d);return y.urlParams=a,y.headers=p,y.body=c,y.errorHandler=dl(e),y}function mV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(h){const p=sg(h,["active","final"]);let c=null;try{c=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{$n(!1)}c||$n(!1);const d=Number(c);return $n(!isNaN(d)),new wc(d,r.size(),p==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ao(n,o,s,a);return l.headers=i,l.errorHandler=dl(e),l}const dw=256*1024;function gV(t,e,n,r,i,s,o,a){const l=new wc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw xO();const h=l.total-l.current;let p=h;i>0&&(p=Math.min(p,i));const c=l.current,d=c+p;let m="";p===0?m="finalize":h===p?m="upload, finalize":m="upload";const y={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},E=r.slice(c,d);if(E===null)throw zA();function I(b,L){const M=sg(b,["active","final"]),R=l.current+p,T=r.size();let S;return M==="final"?S=ig(e,s)(b,L):S=null,new wc(R,T,M==="final",S)}const _="POST",v=e.maxUploadRetryTime,A=new ao(n,_,I,v);return A.headers=y,A.body=E.uploadData(),A.progressCallback=a||null,A.errorHandler=dl(t),A}const It={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function bd(t){switch(t){case"running":case"pausing":case"canceling":return It.RUNNING;case"paused":return It.PAUSED;case"success":return It.SUCCESS;case"canceled":return It.CANCELED;case"error":return It.ERROR;default:return It.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e,n,r){if(UO(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class yV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ei.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ei.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ei.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Fo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vV extends yV{initXhr(){this.xhr_.responseType="text"}}function cs(){return new vV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=YA(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ye.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(GA(i.status,[]))if(s)i=BA();else{this.sleepTime=Math.max(this.sleepTime*2,TO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ye.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=pV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,cs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=mV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,cs,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=dw*this._chunkMultiplier,n=new wc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=gV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,cs,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){dw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=cV(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,cs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=fV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,cs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=jA(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=bd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new _V(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(bd(this._state)){case It.SUCCESS:rs(this._resolve.bind(null,this.snapshot))();break;case It.CANCELED:case It.ERROR:const n=this._reject;rs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(bd(this._state)){case It.RUNNING:case It.PAUSED:e.next&&rs(e.next.bind(e,this.snapshot))();break;case It.SUCCESS:e.complete&&rs(e.complete.bind(e))();break;case It.CANCELED:case It.ERROR:e.error&&rs(e.error.bind(e,this._error))();break;default:e.error&&rs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vi(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XA(this._location.path)}get storage(){return this._service}get parent(){const e=nV(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new Vi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OO(e)}}function EV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new wV(t,new yr(e),n)}function TV(t){t._throwIfRoot("getDownloadURL");const e=hV(t.storage,t._location,YA());return t.storage.makeRequestWithTokens(e,cs).then(n=>{if(n===null)throw DO();return n})}function IV(t,e){const n=rV(t._location.path,e),r=new Lt(t._location.bucket,n);return new Vi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t){return/^[A-Za-z]+:\/\//.test(t)}function SV(t,e){return new Vi(t,e)}function nS(t,e){if(t instanceof og){const n=t;if(n._bucket==null)throw bO();const r=new Vi(n,n._bucket);return e!=null?nS(r,e):r}else return e!==void 0?IV(t,e):t}function RV(t,e){if(e&&AV(e)){if(t instanceof og)return SV(t,e);throw lp("To use ref(service, url), the first argument must be a Storage instance.")}else return nS(t,e)}function fw(t,e){const n=e==null?void 0:e[UA];return n==null?null:Lt.makeFromBucketSpec(n,t)}function PV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:SI(i,t.app.options.projectId))}class og{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=FA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wO,this._maxUploadRetryTime=EO,this._requests=new Set,i!=null?this._bucket=Lt.makeFromBucketSpec(i,this._host):this._bucket=fw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=fw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new VO($A());{const o=HO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const pw="@firebase/storage",mw="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="storage";function eU(t,e,n){return t=ke(t),EV(t,e,n)}function tU(t){return t=ke(t),TV(t)}function nU(t,e){return t=ke(t),RV(t,e)}function kV(t=Qc(),e){t=ke(t);const r=zi(t,rS).getImmediate({identifier:e}),i=TI("storage");return i&&iS(r,...i),r}function iS(t,e,n,r={}){PV(t,e,n,r)}function CV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new og(n,r,i,e,$i)}function bV(){on(new Xt(rS,CV,"PUBLIC").setMultipleInstances(!0)),bt(pw,mw,""),bt(pw,mw,"esm2017")}bV();function ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function sS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xV=sS,oS=new ji("auth","Firebase",sS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new um("@firebase/auth");function DV(t,...e){Ec.logLevel<=re.WARN&&Ec.warn(`Auth (${$i}): ${t}`,...e)}function ku(t,...e){Ec.logLevel<=re.ERROR&&Ec.error(`Auth (${$i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw lg(t,...e)}function vn(t,...e){return lg(t,...e)}function aS(t,e,n){const r=Object.assign(Object.assign({},xV()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function qn(t){return aS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oS.create(t,...e)}function X(t,e,...n){if(!t)throw lg(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ku(e),new Error(e)}function Yn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NV(){return gw()==="http:"||gw()==="https:"}function gw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NV()||M1()||"connection"in navigator)?navigator.onLine:!0}function VV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=O1()||F1()}get(){return OV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV=new fl(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,i={}){return uS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Za(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},s);return L1()||(h.referrerPolicy="no-referrer"),lS.fetch()(cS(t,t.config.apiHost,n,a),h)})}async function uS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LV),e);try{const i=new UV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ou(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ou(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ou(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ou(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw aS(t,p,h);an(t,p)}}catch(i){if(i instanceof ln)throw i;an(t,"network-request-failed",{message:String(i)})}}async function pl(t,e,n,r,i={}){const s=await rr(t,e,n,r,i);return"mfaPendingCredential"in s&&an(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ug(t.config,i):`${t.config.apiScheme}://${i}`}function FV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),MV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ou(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}function _w(t){return t!==void 0&&t.enterprise!==void 0}class BV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jV(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zV(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function hS(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $V(t,e=!1){const n=ke(t),r=await n.getIdToken(e),i=cg(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ha(xd(i.auth_time)),issuedAtTime:ha(xd(i.iat)),expirationTime:ha(xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xd(t){return Number(t)*1e3}function cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=wI(n);return i?JSON.parse(i):(ku("Failed to decode base64 JWT payload"),null)}catch(i){return ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yw(t){const e=cg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&qV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $a(t,hS(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dS(s.providerUserInfo):[],a=KV(t.providerData,o),l=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),p=l?h:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cp(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,c)}async function HV(t){const e=ke(t);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dS(t){return t.map(e=>{var{providerId:n}=e,r=ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(t,e){const n=await uS(t,{},async()=>{const r=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QV(t,e){return rr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=yw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $a(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $V(this,e)}reload(){return HV(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await $a(this,zV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,h,p;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:A,emailVerified:b,isAnonymous:L,providerData:M,stsTokenManager:R}=n;X(A&&R,e,"internal-error");const T=xs.fromJSON(this.name,R);X(typeof A=="string",e,"internal-error"),cr(c,e.name),cr(d,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof L=="boolean",e,"internal-error"),cr(m,e.name),cr(y,e.name),cr(E,e.name),cr(I,e.name),cr(_,e.name),cr(v,e.name);const S=new Un({uid:A,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:L,photoURL:y,phoneNumber:m,tenantId:E,stsTokenManager:T,createdAt:_,lastLoginAt:v});return M&&Array.isArray(M)&&(S.providerData=M.map(P=>Object.assign({},P))),I&&(S._redirectEventId=I),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new xs;i.updateFromServerResponse(n);const s=new Un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new xs;a.updateFromIdToken(r);const l=new Un({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Map;function Bn(t){Yn(t instanceof Function,"Expected a class definition");let e=vw.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fS.type="NONE";const ww=fS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Cu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(Bn(ww),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Bn(ww);const o=Cu(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const p=await h._get(o);if(p){const c=Un._fromJSON(e,p);h!==s&&(a=c),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ds(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_S(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vS(e))return"Blackberry";if(wS(e))return"Webos";if(mS(e))return"Safari";if((e.includes("chrome/")||gS(e))&&!e.includes("edge/"))return"Chrome";if(yS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pS(t=ze()){return/firefox\//i.test(t)}function mS(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gS(t=ze()){return/crios\//i.test(t)}function _S(t=ze()){return/iemobile/i.test(t)}function yS(t=ze()){return/android/i.test(t)}function vS(t=ze()){return/blackberry/i.test(t)}function wS(t=ze()){return/webos/i.test(t)}function hg(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XV(t=ze()){var e;return hg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YV(){return U1()&&document.documentMode===10}function ES(t=ze()){return hg(t)||yS(t)||wS(t)||vS(t)||/windows phone/i.test(t)||_S(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t,e=[]){let n;switch(t){case"Browser":n=Ew(ze());break;case"Worker":n=`${Ew(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(t,e={}){return rr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=6;class tL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tw(this),this.idTokenSubscription=new Tw(this),this.beforeStateQueue=new JV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hS(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(qn(this));const n=e?ke(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZV(this),n=new tL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(t){return ke(t)}class Tw{constructor(e){this.auth=e,this.observer=null,this.addObserver=G1(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rL(t){_h=t}function IS(t){return _h.loadJS(t)}function iL(){return _h.recaptchaEnterpriseScript}function sL(){return _h.gapiScript}function oL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aL="recaptcha-enterprise",lL="NO_RECAPTCHA";class uL{constructor(e){this.type=aL,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new BV(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;_w(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(lL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_w(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=iL();l.length!==0&&(l+=a),IS(l).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function Iw(t,e,n,r=!1){const i=new uL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Iw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Iw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(t,e){const n=zi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sc(s,e??{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function hL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AS(t,e,n){const r=Jr(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=SS(e),{host:o,port:a}=dL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fL()}function SS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dL(t){const e=SS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Aw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Aw(o)}}}function Aw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function pL(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mL(t,e){return pl(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function gL(t,e){return rr(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function _L(t,e){return gL(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(t,e){return pl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function vL(t,e){return pl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends dg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hp(e,n,"signInWithPassword",mL);case"emailLink":return yL(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hp(e,r,"signUpPassword",pL);case"emailLink":return vL(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return pl(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="http://localhost";class Li extends dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:wL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Za(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TL(t){const e=$o(qo(t)).link,n=e?$o(qo(e)).deep_link_id:null,r=$o(qo(t)).deep_link_id;return(r?$o(qo(r)).link:null)||r||n||e||t}class fg{constructor(e){var n,r,i,s,o,a;const l=$o(qo(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,c=EL((i=l.mode)!==null&&i!==void 0?i:null);X(h&&p&&c,"argument-error"),this.apiKey=h,this.operation=c,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TL(e);try{return new fg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.providerId=lo.PROVIDER_ID}static credential(e,n){return qa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fg.parseLink(n);return X(r,"argument-error"),qa._fromEmailAndCode(e,r.code,r.tenantId)}}lo.PROVIDER_ID="password";lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends RS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ml{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ml{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ml{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IL(t,e){return pl(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Un._fromIdTokenResponse(e,r,i),o=Sw(r);return new qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Sw(r);return new qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Sw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t){var e;if(dn(t.app))return Promise.reject(qn(t));const n=Jr(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new qr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await IL(n,{returnSecureToken:!0}),i=await qr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ic.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ic(e,n,r,i)}}function kS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(t,s,e,r):s})}async function AL(t,e,n=!1){const r=await $a(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(qn(r));const i="reauthenticate";try{const s=await $a(t,kS(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=cg(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&an(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e,n=!1){if(dn(t.app))return Promise.reject(qn(t));const r="signIn",i=await kS(t,r,e),s=await qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function RL(t,e){return CS(Jr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t,e,n){var r;X(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),X(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(X(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(X(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(t){const e=Jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rU(t,e,n){const r=Jr(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&PL(r,i,n),await hp(r,i,"getOobCode",_L)}function iU(t,e,n){return dn(t.app)?Promise.reject(qn(t)):RL(ke(t),lo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kL(t),r})}function CL(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function bL(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}const Ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=1e3,DL=10;class xS extends bS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ES(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xS.type="LOCAL";const NL=xS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS extends bS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DS.type="SESSION";const NS=DS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),l=await OL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const h=pg("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===h)switch(d.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function LL(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function ML(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UL(){return OS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="firebaseLocalStorageDb",BL=1,Sc="firebaseLocalStorage",LS="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(t,e){return t.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function jL(){const t=indexedDB.deleteDatabase(VS);return new gl(t).toPromise()}function dp(){const t=indexedDB.open(VS,BL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sc,{keyPath:LS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sc)?e(r):(r.close(),await jL(),e(await dp()))})})}async function Rw(t,e,n){const r=vh(t,!0).put({[LS]:e,value:n});return new gl(r).toPromise()}async function zL(t,e){const n=vh(t,!1).get(e),r=await new gl(n).toPromise();return r===void 0?null:r.value}function Pw(t,e){const n=vh(t,!0).delete(e);return new gl(n).toPromise()}const $L=800,qL=3;class MS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return OS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(UL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ML(),!this.activeServiceWorker)return;this.sender=new VL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await Rw(e,Ac,"1"),await Pw(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vh(i,!1).getAll();return new gl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$L)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MS.type="LOCAL";const GL=MS;new fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t,e){return e?Bn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KL(t){return CS(t.auth,new mg(t),t.bypassAuthState)}function WL(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),SL(n,new mg(t),t.bypassAuthState)}async function QL(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),AL(n,new mg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KL;case"linkViaPopup":case"linkViaRedirect":return QL;case"reauthViaPopup":case"reauthViaRedirect":return WL;default:an(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=new fl(2e3,1e4);class Is extends FS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XL.get())};e()}}Is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL="pendingRedirect",bu=new Map;class JL extends FS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const r=await ZL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZL(t,e){const n=nM(e),r=tM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eM(t,e){bu.set(t._key(),e)}function tM(t){return Bn(t._redirectPersistence)}function nM(t){return Cu(YL,t.config.apiKey,t.name)}async function rM(t,e,n=!1){if(dn(t.app))return Promise.reject(qn(t));const r=Jr(t),i=HL(r,e),o=await new JL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=10*60*1e3;class sM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!US(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iM&&this.cachedEventUids.clear(),this.cachedEventUids.has(kw(e))}saveEventToCache(e){this.cachedEventUids.add(kw(e)),this.lastProcessedEventTime=Date.now()}}function kw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function US({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return US(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aM(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uM=/^https?/;async function cM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aM(t);for(const n of e)try{if(hM(n))return}catch{}an(t,"unauthorized-domain")}function hM(t){const e=up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uM.test(n))return!1;if(lM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=new fl(3e4,6e4);function Cw(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fM(t){return new Promise((e,n)=>{var r,i,s;function o(){Cw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cw(),n(vn(t,"network-request-failed"))},timeout:dM.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=oL("iframefcb");return wn()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},IS(`${sL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xu=null,e})}let xu=null;function pM(t){return xu=xu||fM(t),xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=new fl(5e3,15e3),gM="__/auth/iframe",_M="emulator/auth/iframe",yM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wM(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ug(e,_M):`https://${t.config.authDomain}/${gM}`,r={apiKey:e.apiKey,appName:t.name,v:$i},i=vM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Za(r).slice(1)}`}async function EM(t){const e=await pM(t),n=wn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:wM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},mM.get());function l(){wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IM=500,AM=600,SM="_blank",RM="http://localhost";class bw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PM(t,e,n,r=IM,i=AM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TM),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ze().toLowerCase();n&&(a=gS(h)?SM:n),pS(h)&&(e=e||RM,l.scrollbars="yes");const p=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(XV(h)&&a!=="_self")return kM(e||"",a),new bw(null);const c=window.open(e||"",a,p);X(c,t,"popup-blocked");try{c.focus()}catch{}return new bw(c)}function kM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM="__/auth/handler",bM="emulator/auth/handler",xM=encodeURIComponent("fac");async function xw(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(e instanceof RS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",q1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,c]of Object.entries({}))o[p]=c}if(e instanceof ml){const p=e.getScopes().filter(c=>c!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),h=l?`#${xM}=${encodeURIComponent(l)}`:"";return`${DM(t)}?${Za(a).slice(1)}${h}`}function DM({config:t}){return t.emulator?ug(t,bM):`https://${t.authDomain}/${CM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="webStorageSupport";class NM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NS,this._completeRedirectFn=rM,this._overrideRedirectResult=eM}async _openPopup(e,n,r,i){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xw(e,n,r,up(),i);return PM(e,o,pg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xw(e,n,r,up(),i);return LL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EM(e),r=new sM(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dd,{type:Dd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dd];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ES()||mS()||hg()}}const OM=NM;var Dw="@firebase/auth",Nw="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MM(t){on(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TS(t)},h=new nL(r,i,s,l);return hL(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),on(new Xt("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new VM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Dw,Nw,LM(t)),bt(Dw,Nw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=5*60,UM=AI("authIdTokenMaxAge")||FM;let Ow=null;const BM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UM)return;const i=n==null?void 0:n.token;Ow!==i&&(Ow=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jM(t=Qc()){const e=zi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cL(t,{popupRedirectResolver:OM,persistence:[GL,NL,NS]}),r=AI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BM(s.toString());bL(n,o,()=>o(n.currentUser)),CL(n,a=>o(a))}}const i=EI("auth");return i&&AS(n,`http://${i}`),n}function zM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",zM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MM("Browser");const da={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},is=(t,e)=>typeof import.meta<"u"&&da&&da[t]||e,$M={apiKey:is("VITE_FIREBASE_API_KEY","AIzaSyBFJWZYmLysyol5RbLD0eqAnRe4UTinJ_s"),authDomain:is("VITE_FIREBASE_AUTH_DOMAIN","menfes-unbin.firebaseapp.com"),projectId:is("VITE_FIREBASE_PROJECT_ID","menfes-unbin"),storageBucket:is("VITE_FIREBASE_STORAGE_BUCKET","menfes-unbin.firebasestorage.app"),messagingSenderId:is("VITE_FIREBASE_MESSAGING_SENDER_ID","293015790949"),appId:is("VITE_FIREBASE_APP_ID","1:293015790949:web:3044b5dd863ec85f162d8c")},gg=bI($M),Jn=oO(gg),Rc=jM(gg),qM=kV(gg);try{typeof window<"u"&&(window.location.hostname==="localhost"||(da==null?void 0:da.VITE_USE_EMULATORS)==="1")&&(vA(Jn,"127.0.0.1",8080),AS(Rc,"http://127.0.0.1:9099",{disableWarnings:!0}),iS(qM,"127.0.0.1",9199),console.info("Connected to Firebase Emulators."))}catch(t){console.warn("Failed to connect emulators:",(t==null?void 0:t.message)||t)}PS(Rc).catch(t=>{console.warn("Anon auth failed:",t.message||t);try{t&&typeof t.code=="string"&&t.code.includes("operation-not-allowed")&&typeof window<"u"&&(window.__ANON_DISABLED__=!0)}catch{}});try{aO(Jn).catch(t=>{console.warn("Offline persistence disabled:",(t==null?void 0:t.message)||t)})}catch{}function _g(){if(typeof window>"u")return"server";const t="anon_uid_menfes";let e=localStorage.getItem(t);if(!e){const n=new Uint8Array(16);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(n);else for(let r=0;r<n.length;r++)n[r]=Math.floor(Math.random()*256);e=Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join(""),localStorage.setItem(t,e)}return e}function GM(){const[t,e]=F.useState(""),[n,r]=F.useState(0),[i,s]=F.useState(0);F.useEffect(()=>{e(_g())},[]),F.useEffect(()=>{if(!t)return;const a=bA(wA(Jn,"posts"),xA("uid","==",t)),l=ap(a,c=>r(c.size)),h=sO(Jn,"comments"),p=ap(h,c=>{let d=0;c.forEach(m=>{var y;(((y=m.data())==null?void 0:y.uid)||"")===t&&d++}),s(d)});return()=>{l(),p()}},[t]);const o=[];return i>=10&&o.push("Komentator Aktif"),n>=5&&o.push("Pengirim Terfavorit"),o.length?$.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginLeft:8},children:o.map(a=>$.jsx("span",{style:{background:"rgba(255,255,255,0.7)",border:"1px solid rgba(0,0,0,0.08)",borderRadius:999,padding:"4px 8px",fontSize:12},children:a},a))}):null}function ii(t){switch(t){case"/":return Nt(()=>import("./Home-oMc-67ew.js"),__vite__mapDeps([0,1,2,3]));case"/kirim":return Nt(()=>import("./AddPost-XphxfDBr.js"),__vite__mapDeps([4,3]));case"/statistik":return Nt(()=>import("./Stats-j8sAfzwS.js"),__vite__mapDeps([5,1]));case"/admin":return Nt(()=>import("./AdminPanel-RwCuih6S.js"),__vite__mapDeps([6,1]));case"/tentang":return Nt(()=>import("./About-dkZkJSsA.js"),__vite__mapDeps([7,1]));case"/galeri":return Nt(()=>import("./Galeri-C_gABhqb.js"),[]);default:return Promise.resolve()}}function HM(){var l,h,p,c;const{theme:t,galau:e,toggleTheme:n,toggleGalau:r}=F.useContext(_I),[i,s]=F.useState(!1),o=((h=(l=import.meta)==null?void 0:l.env)==null?void 0:h.VITE_LOGO_URL)||"/icons/logo-menfes.jpeg",a=((c=(p=import.meta)==null?void 0:p.env)==null?void 0:c.VITE_UNBIN_LOGO_URL)||"/icons/logo-unbin.jpeg";return $.jsxs("header",{children:[$.jsxs("div",{className:"brand-wrap",style:{display:"flex",alignItems:"center",gap:8},children:[$.jsx("img",{src:a,alt:"UNBIN",onError:d=>{d.currentTarget.style.display="none"},style:{height:28,width:28,objectFit:"cover",borderRadius:6}}),$.jsxs(dr,{to:"/",className:"brand",onMouseEnter:()=>ii("/"),style:{display:"flex",alignItems:"center",textDecoration:"none"},children:[$.jsx("img",{src:o,alt:"Menfes UNBIN",onError:d=>{d.currentTarget.style.display="none"},style:{height:32,width:32,objectFit:"cover",borderRadius:6,marginRight:8}}),$.jsx("span",{style:{color:"inherit",fontWeight:700},children:"Menfes UNBIN"})]})]}),$.jsxs("div",{className:`menu-toggle ${i?"open":""}`,onClick:()=>s(d=>!d),"aria-label":"Toggle Menu",title:"Menu",children:[$.jsx("span",{}),$.jsx("span",{}),$.jsx("span",{})]}),$.jsxs("nav",{className:i?"active":"","aria-label":"Main Navigation",children:[$.jsx(dr,{to:"/",end:!0,onMouseEnter:()=>ii("/"),children:"Home"}),$.jsx(dr,{to:"/kirim",onMouseEnter:()=>ii("/kirim"),children:"Kirim Pesan"}),$.jsx(dr,{to:"/statistik",onMouseEnter:()=>ii("/statistik"),children:"Statistik"}),$.jsx(dr,{to:"/tentang",onMouseEnter:()=>ii("/tentang"),children:"Tentang"}),$.jsx(dr,{to:"/admin",onMouseEnter:()=>ii("/admin"),children:"Admin"}),$.jsx(dr,{to:"/galeri",onMouseEnter:()=>ii("/galeri"),children:"Galeri"}),$.jsx("span",{style:{marginLeft:12}}),$.jsx(GM,{}),$.jsx("button",{onClick:n,title:"Tema Siang/Malam",style:{background:"transparent",border:"none",cursor:"pointer",fontSize:18},children:t==="day"?"🌞":"🌙"}),$.jsx("button",{onClick:r,title:"Mode Galau",style:{background:"transparent",border:"none",cursor:"pointer",fontSize:18},children:e?"🎧":"🎵"})]})]})}function KM(){if(document.querySelector("canvas.bubble-rain-overlay"))return;const t=document.createElement("canvas");t.className="bubble-rain-overlay";const e=t.getContext("2d");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",t.style.zIndex="0",document.body.appendChild(t);const n=()=>{t.width=window.innerWidth,t.height=window.innerHeight};n(),window.addEventListener("resize",n);const r=Array.from({length:40},()=>({x:Math.random()*t.width,y:Math.random()*t.height,r:Math.random()*8+3,d:Math.random()*.5+.5}));function i(){e.clearRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 182, 193, 0.45)",e.beginPath();for(const o of r)e.moveTo(o.x,o.y),e.arc(o.x,o.y,o.r,0,Math.PI*2,!0);e.fill(),s()}function s(){for(const o of r)o.y+=o.d,o.y>t.height&&(o.y=0,o.x=Math.random()*t.width)}(function o(){i(),requestAnimationFrame(o)})()}const BS=F.createContext(null);function WM({children:t}){const[e,n]=F.useState([]),r=F.useCallback((s,o="info",a=3e3)=>{const l=Math.random().toString(36).slice(2);n(h=>[...h,{id:l,msg:s,type:o}]),setTimeout(()=>n(h=>h.filter(p=>p.id!==l)),a)},[]),i=F.useMemo(()=>({show:r}),[r]);return $.jsxs(BS.Provider,{value:i,children:[t,$.jsx("div",{style:{position:"fixed",right:16,top:16,zIndex:1e3,display:"grid",gap:8},children:e.map(s=>$.jsx("div",{className:"ToastItem",style:{background:s.type==="error"?"linear-gradient(135deg,#ffebee,#ffcdd2)":"linear-gradient(135deg,#e8f5e9,#c8e6c9)"},children:s.msg},s.id))})]})}function sU(){return F.useContext(BS)||{show:()=>{}}}var jS={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(t){(function(){var e=function(){this.init()};e.prototype={init:function(){var c=this||n;return c._counter=1e3,c._html5AudioPool=[],c.html5PoolSize=10,c._codecs={},c._howls=[],c._muted=!1,c._volume=1,c._canPlayEvent="canplaythrough",c._navigator=typeof window<"u"&&window.navigator?window.navigator:null,c.masterGain=null,c.noAudio=!1,c.usingWebAudio=!0,c.autoSuspend=!0,c.ctx=null,c.autoUnlock=!0,c._setup(),c},volume:function(c){var d=this||n;if(c=parseFloat(c),d.ctx||p(),typeof c<"u"&&c>=0&&c<=1){if(d._volume=c,d._muted)return d;d.usingWebAudio&&d.masterGain.gain.setValueAtTime(c,n.ctx.currentTime);for(var m=0;m<d._howls.length;m++)if(!d._howls[m]._webAudio)for(var y=d._howls[m]._getSoundIds(),E=0;E<y.length;E++){var I=d._howls[m]._soundById(y[E]);I&&I._node&&(I._node.volume=I._volume*c)}return d}return d._volume},mute:function(c){var d=this||n;d.ctx||p(),d._muted=c,d.usingWebAudio&&d.masterGain.gain.setValueAtTime(c?0:d._volume,n.ctx.currentTime);for(var m=0;m<d._howls.length;m++)if(!d._howls[m]._webAudio)for(var y=d._howls[m]._getSoundIds(),E=0;E<y.length;E++){var I=d._howls[m]._soundById(y[E]);I&&I._node&&(I._node.muted=c?!0:I._muted)}return d},stop:function(){for(var c=this||n,d=0;d<c._howls.length;d++)c._howls[d].stop();return c},unload:function(){for(var c=this||n,d=c._howls.length-1;d>=0;d--)c._howls[d].unload();return c.usingWebAudio&&c.ctx&&typeof c.ctx.close<"u"&&(c.ctx.close(),c.ctx=null,p()),c},codecs:function(c){return(this||n)._codecs[c.replace(/^x-/,"")]},_setup:function(){var c=this||n;if(c.state=c.ctx&&c.ctx.state||"suspended",c._autoSuspend(),!c.usingWebAudio)if(typeof Audio<"u")try{var d=new Audio;typeof d.oncanplaythrough>"u"&&(c._canPlayEvent="canplay")}catch{c.noAudio=!0}else c.noAudio=!0;try{var d=new Audio;d.muted&&(c.noAudio=!0)}catch{}return c.noAudio||c._setupCodecs(),c},_setupCodecs:function(){var c=this||n,d=null;try{d=typeof Audio<"u"?new Audio:null}catch{return c}if(!d||typeof d.canPlayType!="function")return c;var m=d.canPlayType("audio/mpeg;").replace(/^no$/,""),y=c._navigator?c._navigator.userAgent:"",E=y.match(/OPR\/(\d+)/g),I=E&&parseInt(E[0].split("/")[1],10)<33,_=y.indexOf("Safari")!==-1&&y.indexOf("Chrome")===-1,v=y.match(/Version\/(.*?) /),A=_&&v&&parseInt(v[1],10)<15;return c._codecs={mp3:!!(!I&&(m||d.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!m,opus:!!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(d.canPlayType('audio/wav; codecs="1"')||d.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!d.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!d.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(d.canPlayType("audio/x-m4a;")||d.canPlayType("audio/m4a;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(d.canPlayType("audio/x-m4b;")||d.canPlayType("audio/m4b;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(d.canPlayType("audio/x-mp4;")||d.canPlayType("audio/mp4;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!A&&d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!A&&d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(d.canPlayType("audio/x-flac;")||d.canPlayType("audio/flac;")).replace(/^no$/,"")},c},_unlockAudio:function(){var c=this||n;if(!(c._audioUnlocked||!c.ctx)){c._audioUnlocked=!1,c.autoUnlock=!1,!c._mobileUnloaded&&c.ctx.sampleRate!==44100&&(c._mobileUnloaded=!0,c.unload()),c._scratchBuffer=c.ctx.createBuffer(1,1,22050);var d=function(m){for(;c._html5AudioPool.length<c.html5PoolSize;)try{var y=new Audio;y._unlocked=!0,c._releaseHtml5Audio(y)}catch{c.noAudio=!0;break}for(var E=0;E<c._howls.length;E++)if(!c._howls[E]._webAudio)for(var I=c._howls[E]._getSoundIds(),_=0;_<I.length;_++){var v=c._howls[E]._soundById(I[_]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}c._autoResume();var A=c.ctx.createBufferSource();A.buffer=c._scratchBuffer,A.connect(c.ctx.destination),typeof A.start>"u"?A.noteOn(0):A.start(0),typeof c.ctx.resume=="function"&&c.ctx.resume(),A.onended=function(){A.disconnect(0),c._audioUnlocked=!0,document.removeEventListener("touchstart",d,!0),document.removeEventListener("touchend",d,!0),document.removeEventListener("click",d,!0),document.removeEventListener("keydown",d,!0);for(var b=0;b<c._howls.length;b++)c._howls[b]._emit("unlock")}};return document.addEventListener("touchstart",d,!0),document.addEventListener("touchend",d,!0),document.addEventListener("click",d,!0),document.addEventListener("keydown",d,!0),c}},_obtainHtml5Audio:function(){var c=this||n;if(c._html5AudioPool.length)return c._html5AudioPool.pop();var d=new Audio().play();return d&&typeof Promise<"u"&&(d instanceof Promise||typeof d.then=="function")&&d.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(c){var d=this||n;return c._unlocked&&d._html5AudioPool.push(c),d},_autoSuspend:function(){var c=this;if(!(!c.autoSuspend||!c.ctx||typeof c.ctx.suspend>"u"||!n.usingWebAudio)){for(var d=0;d<c._howls.length;d++)if(c._howls[d]._webAudio){for(var m=0;m<c._howls[d]._sounds.length;m++)if(!c._howls[d]._sounds[m]._paused)return c}return c._suspendTimer&&clearTimeout(c._suspendTimer),c._suspendTimer=setTimeout(function(){if(c.autoSuspend){c._suspendTimer=null,c.state="suspending";var y=function(){c.state="suspended",c._resumeAfterSuspend&&(delete c._resumeAfterSuspend,c._autoResume())};c.ctx.suspend().then(y,y)}},3e4),c}},_autoResume:function(){var c=this;if(!(!c.ctx||typeof c.ctx.resume>"u"||!n.usingWebAudio))return c.state==="running"&&c.ctx.state!=="interrupted"&&c._suspendTimer?(clearTimeout(c._suspendTimer),c._suspendTimer=null):c.state==="suspended"||c.state==="running"&&c.ctx.state==="interrupted"?(c.ctx.resume().then(function(){c.state="running";for(var d=0;d<c._howls.length;d++)c._howls[d]._emit("resume")}),c._suspendTimer&&(clearTimeout(c._suspendTimer),c._suspendTimer=null)):c.state==="suspending"&&(c._resumeAfterSuspend=!0),c}};var n=new e,r=function(c){var d=this;if(!c.src||c.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}d.init(c)};r.prototype={init:function(c){var d=this;return n.ctx||p(),d._autoplay=c.autoplay||!1,d._format=typeof c.format!="string"?c.format:[c.format],d._html5=c.html5||!1,d._muted=c.mute||!1,d._loop=c.loop||!1,d._pool=c.pool||5,d._preload=typeof c.preload=="boolean"||c.preload==="metadata"?c.preload:!0,d._rate=c.rate||1,d._sprite=c.sprite||{},d._src=typeof c.src!="string"?c.src:[c.src],d._volume=c.volume!==void 0?c.volume:1,d._xhr={method:c.xhr&&c.xhr.method?c.xhr.method:"GET",headers:c.xhr&&c.xhr.headers?c.xhr.headers:null,withCredentials:c.xhr&&c.xhr.withCredentials?c.xhr.withCredentials:!1},d._duration=0,d._state="unloaded",d._sounds=[],d._endTimers={},d._queue=[],d._playLock=!1,d._onend=c.onend?[{fn:c.onend}]:[],d._onfade=c.onfade?[{fn:c.onfade}]:[],d._onload=c.onload?[{fn:c.onload}]:[],d._onloaderror=c.onloaderror?[{fn:c.onloaderror}]:[],d._onplayerror=c.onplayerror?[{fn:c.onplayerror}]:[],d._onpause=c.onpause?[{fn:c.onpause}]:[],d._onplay=c.onplay?[{fn:c.onplay}]:[],d._onstop=c.onstop?[{fn:c.onstop}]:[],d._onmute=c.onmute?[{fn:c.onmute}]:[],d._onvolume=c.onvolume?[{fn:c.onvolume}]:[],d._onrate=c.onrate?[{fn:c.onrate}]:[],d._onseek=c.onseek?[{fn:c.onseek}]:[],d._onunlock=c.onunlock?[{fn:c.onunlock}]:[],d._onresume=[],d._webAudio=n.usingWebAudio&&!d._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(d),d._autoplay&&d._queue.push({event:"play",action:function(){d.play()}}),d._preload&&d._preload!=="none"&&d.load(),d},load:function(){var c=this,d=null;if(n.noAudio){c._emit("loaderror",null,"No audio support.");return}typeof c._src=="string"&&(c._src=[c._src]);for(var m=0;m<c._src.length;m++){var y,E;if(c._format&&c._format[m])y=c._format[m];else{if(E=c._src[m],typeof E!="string"){c._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}y=/^data:audio\/([^;,]+);/i.exec(E),y||(y=/\.([^.]+)$/.exec(E.split("?",1)[0])),y&&(y=y[1].toLowerCase())}if(y||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),y&&n.codecs(y)){d=c._src[m];break}}if(!d){c._emit("loaderror",null,"No codec support for selected audio sources.");return}return c._src=d,c._state="loading",window.location.protocol==="https:"&&d.slice(0,5)==="http:"&&(c._html5=!0,c._webAudio=!1),new i(c),c._webAudio&&o(c),c},play:function(c,d){var m=this,y=null;if(typeof c=="number")y=c,c=null;else{if(typeof c=="string"&&m._state==="loaded"&&!m._sprite[c])return null;if(typeof c>"u"&&(c="__default",!m._playLock)){for(var E=0,I=0;I<m._sounds.length;I++)m._sounds[I]._paused&&!m._sounds[I]._ended&&(E++,y=m._sounds[I]._id);E===1?c=null:y=null}}var _=y?m._soundById(y):m._inactiveSound();if(!_)return null;if(y&&!c&&(c=_._sprite||"__default"),m._state!=="loaded"){_._sprite=c,_._ended=!1;var v=_._id;return m._queue.push({event:"play",action:function(){m.play(v)}}),v}if(y&&!_._paused)return d||m._loadQueue("play"),_._id;m._webAudio&&n._autoResume();var A=Math.max(0,_._seek>0?_._seek:m._sprite[c][0]/1e3),b=Math.max(0,(m._sprite[c][0]+m._sprite[c][1])/1e3-A),L=b*1e3/Math.abs(_._rate),M=m._sprite[c][0]/1e3,R=(m._sprite[c][0]+m._sprite[c][1])/1e3;_._sprite=c,_._ended=!1;var T=function(){_._paused=!1,_._seek=A,_._start=M,_._stop=R,_._loop=!!(_._loop||m._sprite[c][2])};if(A>=R){m._ended(_);return}var S=_._node;if(m._webAudio){var P=function(){m._playLock=!1,T(),m._refreshBuffer(_);var Ue=_._muted||m._muted?0:_._volume;S.gain.setValueAtTime(Ue,n.ctx.currentTime),_._playStart=n.ctx.currentTime,typeof S.bufferSource.start>"u"?_._loop?S.bufferSource.noteGrainOn(0,A,86400):S.bufferSource.noteGrainOn(0,A,b):_._loop?S.bufferSource.start(0,A,86400):S.bufferSource.start(0,A,b),L!==1/0&&(m._endTimers[_._id]=setTimeout(m._ended.bind(m,_),L)),d||setTimeout(function(){m._emit("play",_._id),m._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?P():(m._playLock=!0,m.once("resume",P),m._clearTimer(_._id))}else{var C=function(){S.currentTime=A,S.muted=_._muted||m._muted||n._muted||S.muted,S.volume=_._volume*n.volume(),S.playbackRate=_._rate;try{var Ue=S.play();if(Ue&&typeof Promise<"u"&&(Ue instanceof Promise||typeof Ue.then=="function")?(m._playLock=!0,T(),Ue.then(function(){m._playLock=!1,S._unlocked=!0,d?m._loadQueue():m._emit("play",_._id)}).catch(function(){m._playLock=!1,m._emit("playerror",_._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),_._ended=!0,_._paused=!0})):d||(m._playLock=!1,T(),m._emit("play",_._id)),S.playbackRate=_._rate,S.paused){m._emit("playerror",_._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}c!=="__default"||_._loop?m._endTimers[_._id]=setTimeout(m._ended.bind(m,_),L):(m._endTimers[_._id]=function(){m._ended(_),S.removeEventListener("ended",m._endTimers[_._id],!1)},S.addEventListener("ended",m._endTimers[_._id],!1))}catch(An){m._emit("playerror",_._id,An)}};S.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(S.src=m._src,S.load());var x=window&&window.ejecta||!S.readyState&&n._navigator.isCocoonJS;if(S.readyState>=3||x)C();else{m._playLock=!0,m._state="loading";var k=function(){m._state="loaded",C(),S.removeEventListener(n._canPlayEvent,k,!1)};S.addEventListener(n._canPlayEvent,k,!1),m._clearTimer(_._id)}}return _._id},pause:function(c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"pause",action:function(){d.pause(c)}}),d;for(var m=d._getSoundIds(c),y=0;y<m.length;y++){d._clearTimer(m[y]);var E=d._soundById(m[y]);if(E&&!E._paused&&(E._seek=d.seek(m[y]),E._rateSeek=0,E._paused=!0,d._stopFade(m[y]),E._node))if(d._webAudio){if(!E._node.bufferSource)continue;typeof E._node.bufferSource.stop>"u"?E._node.bufferSource.noteOff(0):E._node.bufferSource.stop(0),d._cleanBuffer(E._node)}else(!isNaN(E._node.duration)||E._node.duration===1/0)&&E._node.pause();arguments[1]||d._emit("pause",E?E._id:null)}return d},stop:function(c,d){var m=this;if(m._state!=="loaded"||m._playLock)return m._queue.push({event:"stop",action:function(){m.stop(c)}}),m;for(var y=m._getSoundIds(c),E=0;E<y.length;E++){m._clearTimer(y[E]);var I=m._soundById(y[E]);I&&(I._seek=I._start||0,I._rateSeek=0,I._paused=!0,I._ended=!0,m._stopFade(y[E]),I._node&&(m._webAudio?I._node.bufferSource&&(typeof I._node.bufferSource.stop>"u"?I._node.bufferSource.noteOff(0):I._node.bufferSource.stop(0),m._cleanBuffer(I._node)):(!isNaN(I._node.duration)||I._node.duration===1/0)&&(I._node.currentTime=I._start||0,I._node.pause(),I._node.duration===1/0&&m._clearSound(I._node))),d||m._emit("stop",I._id))}return m},mute:function(c,d){var m=this;if(m._state!=="loaded"||m._playLock)return m._queue.push({event:"mute",action:function(){m.mute(c,d)}}),m;if(typeof d>"u")if(typeof c=="boolean")m._muted=c;else return m._muted;for(var y=m._getSoundIds(d),E=0;E<y.length;E++){var I=m._soundById(y[E]);I&&(I._muted=c,I._interval&&m._stopFade(I._id),m._webAudio&&I._node?I._node.gain.setValueAtTime(c?0:I._volume,n.ctx.currentTime):I._node&&(I._node.muted=n._muted?!0:c),m._emit("mute",I._id))}return m},volume:function(){var c=this,d=arguments,m,y;if(d.length===0)return c._volume;if(d.length===1||d.length===2&&typeof d[1]>"u"){var E=c._getSoundIds(),I=E.indexOf(d[0]);I>=0?y=parseInt(d[0],10):m=parseFloat(d[0])}else d.length>=2&&(m=parseFloat(d[0]),y=parseInt(d[1],10));var _;if(typeof m<"u"&&m>=0&&m<=1){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"volume",action:function(){c.volume.apply(c,d)}}),c;typeof y>"u"&&(c._volume=m),y=c._getSoundIds(y);for(var v=0;v<y.length;v++)_=c._soundById(y[v]),_&&(_._volume=m,d[2]||c._stopFade(y[v]),c._webAudio&&_._node&&!_._muted?_._node.gain.setValueAtTime(m,n.ctx.currentTime):_._node&&!_._muted&&(_._node.volume=m*n.volume()),c._emit("volume",_._id))}else return _=y?c._soundById(y):c._sounds[0],_?_._volume:0;return c},fade:function(c,d,m,y){var E=this;if(E._state!=="loaded"||E._playLock)return E._queue.push({event:"fade",action:function(){E.fade(c,d,m,y)}}),E;c=Math.min(Math.max(0,parseFloat(c)),1),d=Math.min(Math.max(0,parseFloat(d)),1),m=parseFloat(m),E.volume(c,y);for(var I=E._getSoundIds(y),_=0;_<I.length;_++){var v=E._soundById(I[_]);if(v){if(y||E._stopFade(I[_]),E._webAudio&&!v._muted){var A=n.ctx.currentTime,b=A+m/1e3;v._volume=c,v._node.gain.setValueAtTime(c,A),v._node.gain.linearRampToValueAtTime(d,b)}E._startFadeInterval(v,c,d,m,I[_],typeof y>"u")}}return E},_startFadeInterval:function(c,d,m,y,E,I){var _=this,v=d,A=m-d,b=Math.abs(A/.01),L=Math.max(4,b>0?y/b:y),M=Date.now();c._fadeTo=m,c._interval=setInterval(function(){var R=(Date.now()-M)/y;M=Date.now(),v+=A*R,v=Math.round(v*100)/100,A<0?v=Math.max(m,v):v=Math.min(m,v),_._webAudio?c._volume=v:_.volume(v,c._id,!0),I&&(_._volume=v),(m<d&&v<=m||m>d&&v>=m)&&(clearInterval(c._interval),c._interval=null,c._fadeTo=null,_.volume(m,c._id),_._emit("fade",c._id))},L)},_stopFade:function(c){var d=this,m=d._soundById(c);return m&&m._interval&&(d._webAudio&&m._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(m._interval),m._interval=null,d.volume(m._fadeTo,c),m._fadeTo=null,d._emit("fade",c)),d},loop:function(){var c=this,d=arguments,m,y,E;if(d.length===0)return c._loop;if(d.length===1)if(typeof d[0]=="boolean")m=d[0],c._loop=m;else return E=c._soundById(parseInt(d[0],10)),E?E._loop:!1;else d.length===2&&(m=d[0],y=parseInt(d[1],10));for(var I=c._getSoundIds(y),_=0;_<I.length;_++)E=c._soundById(I[_]),E&&(E._loop=m,c._webAudio&&E._node&&E._node.bufferSource&&(E._node.bufferSource.loop=m,m&&(E._node.bufferSource.loopStart=E._start||0,E._node.bufferSource.loopEnd=E._stop,c.playing(I[_])&&(c.pause(I[_],!0),c.play(I[_],!0)))));return c},rate:function(){var c=this,d=arguments,m,y;if(d.length===0)y=c._sounds[0]._id;else if(d.length===1){var E=c._getSoundIds(),I=E.indexOf(d[0]);I>=0?y=parseInt(d[0],10):m=parseFloat(d[0])}else d.length===2&&(m=parseFloat(d[0]),y=parseInt(d[1],10));var _;if(typeof m=="number"){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"rate",action:function(){c.rate.apply(c,d)}}),c;typeof y>"u"&&(c._rate=m),y=c._getSoundIds(y);for(var v=0;v<y.length;v++)if(_=c._soundById(y[v]),_){c.playing(y[v])&&(_._rateSeek=c.seek(y[v]),_._playStart=c._webAudio?n.ctx.currentTime:_._playStart),_._rate=m,c._webAudio&&_._node&&_._node.bufferSource?_._node.bufferSource.playbackRate.setValueAtTime(m,n.ctx.currentTime):_._node&&(_._node.playbackRate=m);var A=c.seek(y[v]),b=(c._sprite[_._sprite][0]+c._sprite[_._sprite][1])/1e3-A,L=b*1e3/Math.abs(_._rate);(c._endTimers[y[v]]||!_._paused)&&(c._clearTimer(y[v]),c._endTimers[y[v]]=setTimeout(c._ended.bind(c,_),L)),c._emit("rate",_._id)}}else return _=c._soundById(y),_?_._rate:c._rate;return c},seek:function(){var c=this,d=arguments,m,y;if(d.length===0)c._sounds.length&&(y=c._sounds[0]._id);else if(d.length===1){var E=c._getSoundIds(),I=E.indexOf(d[0]);I>=0?y=parseInt(d[0],10):c._sounds.length&&(y=c._sounds[0]._id,m=parseFloat(d[0]))}else d.length===2&&(m=parseFloat(d[0]),y=parseInt(d[1],10));if(typeof y>"u")return 0;if(typeof m=="number"&&(c._state!=="loaded"||c._playLock))return c._queue.push({event:"seek",action:function(){c.seek.apply(c,d)}}),c;var _=c._soundById(y);if(_)if(typeof m=="number"&&m>=0){var v=c.playing(y);v&&c.pause(y,!0),_._seek=m,_._ended=!1,c._clearTimer(y),!c._webAudio&&_._node&&!isNaN(_._node.duration)&&(_._node.currentTime=m);var A=function(){v&&c.play(y,!0),c._emit("seek",y)};if(v&&!c._webAudio){var b=function(){c._playLock?setTimeout(b,0):A()};setTimeout(b,0)}else A()}else if(c._webAudio){var L=c.playing(y)?n.ctx.currentTime-_._playStart:0,M=_._rateSeek?_._rateSeek-_._seek:0;return _._seek+(M+L*Math.abs(_._rate))}else return _._node.currentTime;return c},playing:function(c){var d=this;if(typeof c=="number"){var m=d._soundById(c);return m?!m._paused:!1}for(var y=0;y<d._sounds.length;y++)if(!d._sounds[y]._paused)return!0;return!1},duration:function(c){var d=this,m=d._duration,y=d._soundById(c);return y&&(m=d._sprite[y._sprite][1]/1e3),m},state:function(){return this._state},unload:function(){for(var c=this,d=c._sounds,m=0;m<d.length;m++)d[m]._paused||c.stop(d[m]._id),c._webAudio||(c._clearSound(d[m]._node),d[m]._node.removeEventListener("error",d[m]._errorFn,!1),d[m]._node.removeEventListener(n._canPlayEvent,d[m]._loadFn,!1),d[m]._node.removeEventListener("ended",d[m]._endFn,!1),n._releaseHtml5Audio(d[m]._node)),delete d[m]._node,c._clearTimer(d[m]._id);var y=n._howls.indexOf(c);y>=0&&n._howls.splice(y,1);var E=!0;for(m=0;m<n._howls.length;m++)if(n._howls[m]._src===c._src||c._src.indexOf(n._howls[m]._src)>=0){E=!1;break}return s&&E&&delete s[c._src],n.noAudio=!1,c._state="unloaded",c._sounds=[],c=null,null},on:function(c,d,m,y){var E=this,I=E["_on"+c];return typeof d=="function"&&I.push(y?{id:m,fn:d,once:y}:{id:m,fn:d}),E},off:function(c,d,m){var y=this,E=y["_on"+c],I=0;if(typeof d=="number"&&(m=d,d=null),d||m)for(I=0;I<E.length;I++){var _=m===E[I].id;if(d===E[I].fn&&_||!d&&_){E.splice(I,1);break}}else if(c)y["_on"+c]=[];else{var v=Object.keys(y);for(I=0;I<v.length;I++)v[I].indexOf("_on")===0&&Array.isArray(y[v[I]])&&(y[v[I]]=[])}return y},once:function(c,d,m){var y=this;return y.on(c,d,m,1),y},_emit:function(c,d,m){for(var y=this,E=y["_on"+c],I=E.length-1;I>=0;I--)(!E[I].id||E[I].id===d||c==="load")&&(setTimeout((function(_){_.call(this,d,m)}).bind(y,E[I].fn),0),E[I].once&&y.off(c,E[I].fn,E[I].id));return y._loadQueue(c),y},_loadQueue:function(c){var d=this;if(d._queue.length>0){var m=d._queue[0];m.event===c&&(d._queue.shift(),d._loadQueue()),c||m.action()}return d},_ended:function(c){var d=this,m=c._sprite;if(!d._webAudio&&c._node&&!c._node.paused&&!c._node.ended&&c._node.currentTime<c._stop)return setTimeout(d._ended.bind(d,c),100),d;var y=!!(c._loop||d._sprite[m][2]);if(d._emit("end",c._id),!d._webAudio&&y&&d.stop(c._id,!0).play(c._id),d._webAudio&&y){d._emit("play",c._id),c._seek=c._start||0,c._rateSeek=0,c._playStart=n.ctx.currentTime;var E=(c._stop-c._start)*1e3/Math.abs(c._rate);d._endTimers[c._id]=setTimeout(d._ended.bind(d,c),E)}return d._webAudio&&!y&&(c._paused=!0,c._ended=!0,c._seek=c._start||0,c._rateSeek=0,d._clearTimer(c._id),d._cleanBuffer(c._node),n._autoSuspend()),!d._webAudio&&!y&&d.stop(c._id,!0),d},_clearTimer:function(c){var d=this;if(d._endTimers[c]){if(typeof d._endTimers[c]!="function")clearTimeout(d._endTimers[c]);else{var m=d._soundById(c);m&&m._node&&m._node.removeEventListener("ended",d._endTimers[c],!1)}delete d._endTimers[c]}return d},_soundById:function(c){for(var d=this,m=0;m<d._sounds.length;m++)if(c===d._sounds[m]._id)return d._sounds[m];return null},_inactiveSound:function(){var c=this;c._drain();for(var d=0;d<c._sounds.length;d++)if(c._sounds[d]._ended)return c._sounds[d].reset();return new i(c)},_drain:function(){var c=this,d=c._pool,m=0,y=0;if(!(c._sounds.length<d)){for(y=0;y<c._sounds.length;y++)c._sounds[y]._ended&&m++;for(y=c._sounds.length-1;y>=0;y--){if(m<=d)return;c._sounds[y]._ended&&(c._webAudio&&c._sounds[y]._node&&c._sounds[y]._node.disconnect(0),c._sounds.splice(y,1),m--)}}},_getSoundIds:function(c){var d=this;if(typeof c>"u"){for(var m=[],y=0;y<d._sounds.length;y++)m.push(d._sounds[y]._id);return m}else return[c]},_refreshBuffer:function(c){var d=this;return c._node.bufferSource=n.ctx.createBufferSource(),c._node.bufferSource.buffer=s[d._src],c._panner?c._node.bufferSource.connect(c._panner):c._node.bufferSource.connect(c._node),c._node.bufferSource.loop=c._loop,c._loop&&(c._node.bufferSource.loopStart=c._start||0,c._node.bufferSource.loopEnd=c._stop||0),c._node.bufferSource.playbackRate.setValueAtTime(c._rate,n.ctx.currentTime),d},_cleanBuffer:function(c){var d=this,m=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!c.bufferSource)return d;if(n._scratchBuffer&&c.bufferSource&&(c.bufferSource.onended=null,c.bufferSource.disconnect(0),m))try{c.bufferSource.buffer=n._scratchBuffer}catch{}return c.bufferSource=null,d},_clearSound:function(c){var d=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);d||(c.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(c){this._parent=c,this.init()};i.prototype={init:function(){var c=this,d=c._parent;return c._muted=d._muted,c._loop=d._loop,c._volume=d._volume,c._rate=d._rate,c._seek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++n._counter,d._sounds.push(c),c.create(),c},create:function(){var c=this,d=c._parent,m=n._muted||c._muted||c._parent._muted?0:c._volume;return d._webAudio?(c._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),c._node.gain.setValueAtTime(m,n.ctx.currentTime),c._node.paused=!0,c._node.connect(n.masterGain)):n.noAudio||(c._node=n._obtainHtml5Audio(),c._errorFn=c._errorListener.bind(c),c._node.addEventListener("error",c._errorFn,!1),c._loadFn=c._loadListener.bind(c),c._node.addEventListener(n._canPlayEvent,c._loadFn,!1),c._endFn=c._endListener.bind(c),c._node.addEventListener("ended",c._endFn,!1),c._node.src=d._src,c._node.preload=d._preload===!0?"auto":d._preload,c._node.volume=m*n.volume(),c._node.load()),c},reset:function(){var c=this,d=c._parent;return c._muted=d._muted,c._loop=d._loop,c._volume=d._volume,c._rate=d._rate,c._seek=0,c._rateSeek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++n._counter,c},_errorListener:function(){var c=this;c._parent._emit("loaderror",c._id,c._node.error?c._node.error.code:0),c._node.removeEventListener("error",c._errorFn,!1)},_loadListener:function(){var c=this,d=c._parent;d._duration=Math.ceil(c._node.duration*10)/10,Object.keys(d._sprite).length===0&&(d._sprite={__default:[0,d._duration*1e3]}),d._state!=="loaded"&&(d._state="loaded",d._emit("load"),d._loadQueue()),c._node.removeEventListener(n._canPlayEvent,c._loadFn,!1)},_endListener:function(){var c=this,d=c._parent;d._duration===1/0&&(d._duration=Math.ceil(c._node.duration*10)/10,d._sprite.__default[1]===1/0&&(d._sprite.__default[1]=d._duration*1e3),d._ended(c)),c._node.removeEventListener("ended",c._endFn,!1)}};var s={},o=function(c){var d=c._src;if(s[d]){c._duration=s[d].duration,h(c);return}if(/^data:[^;]+;base64,/.test(d)){for(var m=atob(d.split(",")[1]),y=new Uint8Array(m.length),E=0;E<m.length;++E)y[E]=m.charCodeAt(E);l(y.buffer,c)}else{var I=new XMLHttpRequest;I.open(c._xhr.method,d,!0),I.withCredentials=c._xhr.withCredentials,I.responseType="arraybuffer",c._xhr.headers&&Object.keys(c._xhr.headers).forEach(function(_){I.setRequestHeader(_,c._xhr.headers[_])}),I.onload=function(){var _=(I.status+"")[0];if(_!=="0"&&_!=="2"&&_!=="3"){c._emit("loaderror",null,"Failed loading audio file with status: "+I.status+".");return}l(I.response,c)},I.onerror=function(){c._webAudio&&(c._html5=!0,c._webAudio=!1,c._sounds=[],delete s[d],c.load())},a(I)}},a=function(c){try{c.send()}catch{c.onerror()}},l=function(c,d){var m=function(){d._emit("loaderror",null,"Decoding audio data failed.")},y=function(E){E&&d._sounds.length>0?(s[d._src]=E,h(d,E)):m()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(c).then(y).catch(m):n.ctx.decodeAudioData(c,y,m)},h=function(c,d){d&&!c._duration&&(c._duration=d.duration),Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue())},p=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var c=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),d=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),m=d?parseInt(d[1],10):null;if(c&&m&&m<9){var y=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!y&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};t.Howler=n,t.Howl=r,typeof Ao<"u"?(Ao.HowlerGlobal=e,Ao.Howler=n,Ao.Howl=r,Ao.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=n,window.Howl=r,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var i=r._howls.length-1;i>=0;i--)r._howls[i].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(r=typeof r!="number"?s._pos[1]:r,i=typeof i!="number"?s._pos[2]:i,typeof n=="number")s._pos=[n,r,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(n,r,i,s,o,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;var h=l._orientation;if(r=typeof r!="number"?h[1]:r,i=typeof i!="number"?h[2]:i,s=typeof s!="number"?h[3]:s,o=typeof o!="number"?h[4]:o,a=typeof a!="number"?h[5]:a,typeof n=="number")l._orientation=[n,r,i,s,o,a],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(n,r,i,s,o,a);else return h;return l},Howl.prototype.init=function(n){return function(r){var i=this;return i._orientation=r.orientation||[1,0,0],i._stereo=r.stereo||null,i._pos=r.pos||null,i._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},i._onstereo=r.onstereo?[{fn:r.onstereo}]:[],i._onpos=r.onpos?[{fn:r.onpos}]:[],i._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(n,r)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")i._stereo=n,i._pos=[n,0,0];else return i._stereo;for(var o=i._getSoundIds(r),a=0;a<o.length;a++){var l=i._soundById(o[a]);if(l)if(typeof n=="number")l._stereo=n,l._pos=[n,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,s),s==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(n,0,0):l._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),i._emit("stereo",l._id);else return l._stereo}return i},Howl.prototype.pos=function(n,r,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,i,s)}}),o;if(r=typeof r!="number"?0:r,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof n=="number")o._pos=[n,r,i];else return o._pos;for(var a=o._getSoundIds(s),l=0;l<a.length;l++){var h=o._soundById(a[l]);if(h)if(typeof n=="number")h._pos=[n,r,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(n,r,i)),o._emit("pos",h._id);else return h._pos}return o},Howl.prototype.orientation=function(n,r,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,i,s)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,i=typeof i!="number"?o._orientation[2]:i,typeof s>"u")if(typeof n=="number")o._orientation=[n,r,i];else return o._orientation;for(var a=o._getSoundIds(s),l=0;l<a.length;l++){var h=o._soundById(a[l]);if(h)if(typeof n=="number")h._orientation=[n,r,i],h._node&&(h._panner||(h._pos||(h._pos=o._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(n,r,i)),o._emit("orientation",h._id);else return h._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,i,s,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")i=r[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),n._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(i=r[0],s=parseInt(r[1],10));for(var a=n._getSoundIds(s),l=0;l<a.length;l++)if(o=n._soundById(a[l]),o){var h=o._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var p=o._panner;p||(o._pos||(o._pos=n._pos||[0,0,-.5]),e(o,"spatial"),p=o._panner),p.coneInnerAngle=h.coneInnerAngle,p.coneOuterAngle=h.coneOuterAngle,p.coneOuterGain=h.coneOuterGain,p.distanceModel=h.distanceModel,p.maxDistance=h.maxDistance,p.refDistance=h.refDistance,p.rolloffFactor=h.rolloffFactor,p.panningModel=h.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,i=r._parent;r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,n.call(this),r._stereo?i.stereo(r._stereo):r._pos&&i.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,i=r._parent;return r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,r._stereo?i.stereo(r._stereo):r._pos?i.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,i._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var e=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(jS);const QM="data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA...",XM="data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA...",YM="data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA...";function Nd(t,e){for(const n of t)try{return new jS.Howl({src:[n],volume:e,html5:!0})}catch{}return{play:()=>{}}}const yg={pop:Nd(["/audio/pop.mp3",QM],.2),whoosh:Nd(["/audio/whoosh.mp3",XM],.2),ping:Nd(["/audio/ping.mp3",YM],.25)},oU=()=>{try{yg.pop.play()}catch{}},aU=()=>{try{yg.whoosh.play()}catch{}},JM=()=>{try{yg.ping.play()}catch{}};function ZM(){const[t,e]=F.useState(null);return F.useEffect(()=>{const n=_g(),r=bA(wA(Jn,"notifications"),xA("to","==",n),_O("created_at","desc")),i=ap(r,s=>{if(!s.empty){const o=s.docs[0].data();e(o.message||"Notifikasi baru");try{navigator!=null&&navigator.vibrate&&navigator.vibrate(40)}catch{}JM(),setTimeout(()=>e(null),4e3)}});return()=>i()},[]),t?$.jsxs("div",{className:"toast-popup",style:{position:"fixed",right:16,bottom:16,zIndex:1e3},children:[$.jsx("strong",{children:"Notifikasi"}),$.jsx("div",{style:{marginTop:6},children:t})]}):null}function e2(){return F.useEffect(()=>{var i,s;const t=(s=(i=import.meta)==null?void 0:i.env)==null?void 0:s.VITE_OPENWEATHER_API_KEY;if(!t)return;let e=!1;const n=async()=>{var o,a,l,h,p,c;try{const d=((a=(o=import.meta)==null?void 0:o.env)==null?void 0:a.VITE_LAT)||"-6.5976",m=((h=(l=import.meta)==null?void 0:l.env)==null?void 0:h.VITE_LON)||"106.8060",E=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${d}&lon=${m}&appid=${t}`)).json();if(e)return;const I=(((c=(p=E==null?void 0:E.weather)==null?void 0:p[0])==null?void 0:c.main)||"").toLowerCase(),_=document.body;_.classList.remove("rain","clear","clouds"),I.includes("rain")?_.classList.add("rain"):I.includes("cloud")?_.classList.add("clouds"):_.classList.add("clear")}catch{}};n();const r=setInterval(n,30*60*1e3);return()=>{e=!0,clearInterval(r)}},[]),null}class t2 extends Zn.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,n){}render(){return this.state.hasError?$.jsx("div",{className:"card-glow",children:"Terjadi kesalahan saat memuat. Coba muat ulang."}):this.props.children}}async function n2(){if(Rc.currentUser)return!0;try{return await PS(Rc),!0}catch{return!1}}function r2(){const[t,e]=F.useState(!1);return F.useEffect(()=>{(async()=>{if(typeof window<"u"&&window.__ANON_DISABLED__){e(!0);return}await n2()||e(!0)})()},[]),t?$.jsx("div",{style:{background:"#fff3cd",color:"#664d03",padding:"10px 14px",borderBottom:"1px solid rgba(0,0,0,0.1)",textAlign:"center"},children:"Anonymous Sign-in belum aktif di Firebase Auth. Aktifkan di Console → Authentication → Sign-in method → Anonymous."}):null}const zS="@firebase/installations",vg="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=1e4,qS=`w:${vg}`,GS="FIS_v2",i2="https://firebaseinstallations.googleapis.com/v1",s2=60*60*1e3,o2="installations",a2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mi=new ji(o2,a2,l2);function HS(t){return t instanceof ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS({projectId:t}){return`${i2}/projects/${t}/installations`}function WS(t){return{token:t.token,requestStatus:2,expiresIn:c2(t.expiresIn),creationTime:Date.now()}}async function QS(t,e){const r=(await e.json()).error;return Mi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function XS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function u2(t,{refreshToken:e}){const n=XS(t);return n.append("Authorization",h2(e)),n}async function YS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function c2(t){return Number(t.replace("s","000"))}function h2(t){return`${GS} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=KS(t),i=XS(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:GS,appId:t.appId,sdkVersion:qS},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await YS(()=>fetch(r,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:WS(h.authToken)}}else throw await QS("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=/^[cdef][\w-]{21}$/,fp="";function m2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=g2(t);return p2.test(n)?n:fp}catch{return fp}}function g2(t){return f2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new Map;function eR(t,e){const n=wh(t);tR(n,e),_2(n,e)}function tR(t,e){const n=ZS.get(t);if(n)for(const r of n)r(e)}function _2(t,e){const n=y2();n&&n.postMessage({key:t,fid:e}),v2()}let gi=null;function y2(){return!gi&&"BroadcastChannel"in self&&(gi=new BroadcastChannel("[Firebase] FID Change"),gi.onmessage=t=>{tR(t.data.key,t.data.fid)}),gi}function v2(){ZS.size===0&&gi&&(gi.close(),gi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="firebase-installations-database",E2=1,Fi="firebase-installations-store";let Od=null;function wg(){return Od||(Od=Wc(w2,E2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}})),Od}async function Pc(t,e){const n=wh(t),i=(await wg()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&eR(t,e.fid),e}async function nR(t){const e=wh(t),r=(await wg()).transaction(Fi,"readwrite");await r.objectStore(Fi).delete(e),await r.done}async function Eh(t,e){const n=wh(t),i=(await wg()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&eR(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t){let e;const n=await Eh(t.appConfig,r=>{const i=T2(r),s=I2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===fp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function T2(t){const e=t||{fid:m2(),registrationStatus:0};return rR(e)}function I2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=A2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:S2(t)}:{installationEntry:e}}async function A2(t,e){try{const n=await d2(t,e);return Pc(t.appConfig,n)}catch(n){throw HS(n)&&n.customData.serverCode===409?await nR(t.appConfig):await Pc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function S2(t){let e=await Vw(t.appConfig);for(;e.registrationStatus===1;)await JS(100),e=await Vw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Eg(t);return r||n}return e}function Vw(t){return Eh(t,e=>{if(!e)throw Mi.create("installation-not-found");return rR(e)})}function rR(t){return R2(t)?{fid:t.fid,registrationStatus:0}:t}function R2(t){return t.registrationStatus===1&&t.registrationTime+$S<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2({appConfig:t,heartbeatServiceProvider:e},n){const r=k2(t,n),i=u2(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:qS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await YS(()=>fetch(r,a));if(l.ok){const h=await l.json();return WS(h)}else throw await QS("Generate Auth Token",l)}function k2(t,{fid:e}){return`${KS(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e=!1){let n;const r=await Eh(t.appConfig,s=>{if(!iR(s))throw Mi.create("not-registered");const o=s.authToken;if(!e&&x2(o))return s;if(o.requestStatus===1)return n=C2(t,e),s;{if(!navigator.onLine)throw Mi.create("app-offline");const a=N2(s);return n=b2(t,a),a}});return n?await n:r.authToken}async function C2(t,e){let n=await Lw(t.appConfig);for(;n.authToken.requestStatus===1;)await JS(100),n=await Lw(t.appConfig);const r=n.authToken;return r.requestStatus===0?Tg(t,e):r}function Lw(t){return Eh(t,e=>{if(!iR(e))throw Mi.create("not-registered");const n=e.authToken;return O2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function b2(t,e){try{const n=await P2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Pc(t.appConfig,r),n}catch(n){if(HS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nR(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pc(t.appConfig,r)}throw n}}function iR(t){return t!==void 0&&t.registrationStatus===2}function x2(t){return t.requestStatus===2&&!D2(t)}function D2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s2}function N2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function O2(t){return t.requestStatus===1&&t.requestTime+$S<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Eg(e);return r?r.catch(console.error):Tg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e=!1){const n=t;return await M2(n),(await Tg(n,e)).token}async function M2(t){const{registrationPromise:e}=await Eg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){if(!t||!t.options)throw Vd("App Configuration");if(!t.name)throw Vd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vd(t){return Mi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="installations",U2="installations-internal",B2=t=>{const e=t.getProvider("app").getImmediate(),n=F2(e),r=zi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},j2=t=>{const e=t.getProvider("app").getImmediate(),n=zi(e,sR).getImmediate();return{getId:()=>V2(n),getToken:i=>L2(n,i)}};function z2(){on(new Xt(sR,B2,"PUBLIC")),on(new Xt(U2,j2,"PRIVATE"))}z2();bt(zS,vg);bt(zS,vg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="/firebase-messaging-sw.js",q2="/firebase-cloud-messaging-push-scope",oR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",G2="https://fcmregistrations.googleapis.com/v1",aR="google.c.a.c_id",H2="google.c.a.c_l",K2="google.c.a.ts",W2="google.c.a.e";var Mw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mw||(Mw={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ga;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ga||(Ga={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Q2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="fcm_token_details_db",X2=5,Fw="fcm_token_object_Store";async function Y2(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ld))return null;let e=null;return(await Wc(Ld,X2,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(Fw))return;const l=o.objectStore(Fw),h=await l.index("fcmSenderId").get(t);if(await l.clear(),!!h){if(i===2){const p=h;if(!p.auth||!p.p256dh||!p.endpoint)return;e={token:p.fcmToken,createTime:(a=p.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:Nn(p.vapidKey)}}}else if(i===3){const p=h;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:Nn(p.auth),p256dh:Nn(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:Nn(p.vapidKey)}}}else if(i===4){const p=h;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:Nn(p.auth),p256dh:Nn(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:Nn(p.vapidKey)}}}}}})).close(),await Ed(Ld),await Ed("fcm_vapid_details_db"),await Ed("undefined"),J2(e)?e:null}function J2(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="firebase-messaging-database",eF=1,Ha="firebase-messaging-store";let Md=null;function lR(){return Md||(Md=Wc(Z2,eF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ha)}}})),Md}async function tF(t){const e=uR(t),r=await(await lR()).transaction(Ha).objectStore(Ha).get(e);if(r)return r;{const i=await Y2(t.appConfig.senderId);if(i)return await Ig(t,i),i}}async function Ig(t,e){const n=uR(t),i=(await lR()).transaction(Ha,"readwrite");return await i.objectStore(Ha).put(e,n),await i.done,e}function uR({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nF={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},vt=new ji("messaging","Messaging",nF);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rF(t,e){const n=await Sg(t),r=cR(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Ag(t.appConfig),i)).json()}catch(o){throw vt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw vt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw vt.create("token-subscribe-no-token");return s.token}async function iF(t,e){const n=await Sg(t),r=cR(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Ag(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw vt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw vt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw vt.create("token-update-no-token");return s.token}async function sF(t,e){const r={method:"DELETE",headers:await Sg(t)};try{const s=await(await fetch(`${Ag(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw vt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw vt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Ag({projectId:t}){return`${G2}/projects/${t}/registrations`}async function Sg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function cR({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==oR&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF=7*24*60*60*1e3;async function aF(t){const e=await uF(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Nn(e.getKey("auth")),p256dh:Nn(e.getKey("p256dh"))},r=await tF(t.firebaseDependencies);if(r){if(cF(r.subscriptionOptions,n))return Date.now()>=r.createTime+oF?lF(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await sF(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Uw(t.firebaseDependencies,n)}else return Uw(t.firebaseDependencies,n)}async function lF(t,e){try{const n=await iF(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Ig(t.firebaseDependencies,r),n}catch(n){throw n}}async function Uw(t,e){const r={token:await rF(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ig(t,r),r.token}async function uF(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Q2(e)})}function cF(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return hF(e,t),dF(e,t),fF(e,t),e}function hF(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function dF(t,e){e.data&&(t.data=e.data)}function fF(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pF(t){return typeof t=="object"&&!!t&&aR in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mF(t){if(!t||!t.options)throw Fd("App Configuration Object");if(!t.name)throw Fd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Fd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Fd(t){return vt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=mF(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _F(t){try{t.swRegistration=await navigator.serviceWorker.register($2,{scope:q2}),t.swRegistration.update().catch(()=>{})}catch(e){throw vt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yF(t,e){if(!e&&!t.swRegistration&&await _F(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw vt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vF(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=oR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e){if(!navigator)throw vt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw vt.create("permission-blocked");return await vF(t,e==null?void 0:e.vapidKey),await yF(t,e==null?void 0:e.serviceWorkerRegistration),aF(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wF(t,e,n){const r=EF(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[aR],message_name:n[H2],message_time:n[K2],message_device_time:Math.floor(Date.now()/1e3)})}function EF(t){switch(t){case Ga.NOTIFICATION_CLICKED:return"notification_open";case Ga.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TF(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ga.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Bw(n)):t.onMessageHandler.next(Bw(n)));const r=n.data;pF(r)&&r[W2]==="1"&&await wF(t,n.messageType,r)}const jw="@firebase/messaging",zw="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF=t=>{const e=new gF(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>TF(e,n)),e},AF=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>hR(e,r)}};function SF(){on(new Xt("messaging",IF,"PUBLIC")),on(new Xt("messaging-internal",AF,"PRIVATE")),bt(jw,zw),bt(jw,zw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(){try{await PI()}catch{return!1}return typeof window<"u"&&lm()&&B1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RF(t=Qc()){return dR().then(e=>{if(!e)throw vt.create("unsupported-browser")},e=>{throw vt.create("indexed-db-unsupported")}),zi(ke(t),"messaging").getImmediate()}async function PF(t,e){return t=ke(t),hR(t,e)}SF();const $w={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},kF=t=>typeof import.meta<"u"&&$w&&$w[t]||"",qw="BKwLAa54NP1rU3QzbaOG3gZ-II7EHrN6-nDnt24w6D7KpsiyQJgIH9qJ52aum_FBYh9Her-F_FKNz6R_I2vnYjs";async function CF(){const t=kF("VITE_FCM_VAPID_KEY");if(t)return t;try{const e=await LA(za(Jn,"appConfig","push"));return e.exists()&&(e.data().vapidKey||e.data().vapid||"")||qw}catch{return qw}}async function bF(){try{const t=await LA(za(Jn,"appConfig","push"));return(t.exists()&&(t.data().webhook||"")).trim()}catch{return""}}async function Rg(){try{if(!await dR())return!1;const t=await CF();if(!t||!("Notification"in window)||await Notification.requestPermission()!=="granted")return!1;const n=RF(),r=await navigator.serviceWorker.getRegistration(),i=await PF(n,{vapidKey:t,serviceWorkerRegistration:r||void 0});if(!i)return!1;const s=_g();await uw(za(Jn,"tokens",s),{updated_at:Date.now()},{merge:!0}),await uw(za(Jn,"tokens",s,"web",i),{token:i,ua:navigator.userAgent,updated_at:Date.now()});try{const o=await bF();o&&await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"register",uid:s,token:i})})}catch{}return!0}catch{return!1}}function xF(){try{if(!("Notification"in window)||Notification.permission==="granted")return;let t=!1;const e=async()=>{if(!t){t=!0;try{await Rg()}finally{window.removeEventListener("pointerdown",e,!0),window.removeEventListener("keydown",e,!0)}}};window.addEventListener("pointerdown",e,!0),window.addEventListener("keydown",e,!0)}catch{}}function DF(){const[t,e]=F.useState(!1),[n,r]=F.useState(Notification&&Notification.permission==="granted"),[i,s]=F.useState(!1);return F.useEffect(()=>{try{e("Notification"in window&&"serviceWorker"in navigator)}catch{e(!1)}const o=()=>r(Notification.permission==="granted");return document.addEventListener("visibilitychange",o),()=>document.removeEventListener("visibilitychange",o)},[]),!t||n?null:$.jsxs("div",{className:"card",style:{padding:10,margin:"10px 0",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10},children:[$.jsxs("div",{children:[$.jsx("strong",{children:"Nyalakan notifikasi?"}),$.jsx("div",{style:{fontSize:12,opacity:.8},children:"Agar dapat pemberitahuan balasan & pesan penting."})]}),$.jsx("button",{className:"btn",onClick:async()=>{s(!0);try{await Rg()}finally{s(!1),r(Notification.permission==="granted")}},children:i?"Memproses…":"Aktifkan"})]})}function NF(){const{pathname:t}=ro(),e=[{to:"/",label:"Home",icon:"🏠"},{to:"/kirim",label:"Kirim",icon:"✉️"},{to:"/galeri",label:"Galeri",icon:"🖼️"},{to:"/admin",label:"Admin",icon:"🛡️"}];return $.jsx("nav",{className:"tabbar","aria-label":"Bottom Navigation",children:e.map(n=>{const r=t===n.to;return $.jsxs(dr,{to:n.to,end:!0,className:r?"active":"","aria-current":r?"page":void 0,children:[$.jsx("span",{className:"ico","aria-hidden":!0,children:n.icon}),$.jsx("span",{className:"txt",children:n.label})]},n.to)})})}const OF=Zn.lazy(()=>Nt(()=>import("./Home-oMc-67ew.js"),__vite__mapDeps([0,1,2,3]))),VF=Zn.lazy(()=>Nt(()=>import("./AddPost-XphxfDBr.js"),__vite__mapDeps([4,3]))),LF=Zn.lazy(()=>Nt(()=>import("./PostDetail-q9-M0YSA.js"),__vite__mapDeps([8,3,2,1]))),MF=Zn.lazy(()=>Nt(()=>import("./Stats-j8sAfzwS.js"),__vite__mapDeps([5,1]))),FF=Zn.lazy(()=>Nt(()=>import("./AdminPanel-RwCuih6S.js"),__vite__mapDeps([6,1]))),UF=Zn.lazy(()=>Nt(()=>import("./About-dkZkJSsA.js"),__vite__mapDeps([7,1]))),BF=Zn.lazy(()=>Nt(()=>import("./Galeri-C_gABhqb.js"),[]));function jF(){var n,r,i,s;const t=((r=(n=import.meta)==null?void 0:n.env)==null?void 0:r.VITE_UNBIN_LOGO_URL)||"/icons/logo-unbin.jpeg",e=((s=(i=import.meta)==null?void 0:i.env)==null?void 0:s.VITE_BEM_LOGO_URL)||"/icons/logo-bem.jpeg";return F.useEffect(()=>{KM();try{Rg()}catch{}try{xF()}catch{}const o=l=>{const h=l.clientX/window.innerWidth*100,p=l.clientY/window.innerHeight*100;document.documentElement.style.setProperty("--mx",`${h}%`),document.documentElement.style.setProperty("--my",`${p}%`)},a=l=>{const h=l.target.closest(".btn.neon");if(!h)return;const p=h.getBoundingClientRect(),c=(l.clientX-p.left)/p.width*100,d=(l.clientY-p.top)/p.height*100;h.style.setProperty("--rx",`${c}%`),h.style.setProperty("--ry",`${d}%`)};return window.addEventListener("mousemove",o),window.addEventListener("click",a),()=>{window.removeEventListener("mousemove",o),window.removeEventListener("click",a)}},[]),$.jsx(WM,{children:$.jsxs(S1,{children:[$.jsx(HM,{}),$.jsx(r2,{}),$.jsx(DF,{}),$.jsx(e2,{}),$.jsx(ZM,{}),$.jsx("div",{className:"container",children:$.jsx(t2,{children:$.jsx(F.Suspense,{fallback:$.jsx("div",{className:"card-glow",children:"Memuat..."}),children:$.jsxs(l1,{children:[$.jsx(hr,{path:"/",element:$.jsx(OF,{})}),$.jsx(hr,{path:"/kirim",element:$.jsx(VF,{})}),$.jsx(hr,{path:"/post/:id",element:$.jsx(LF,{})}),$.jsx(hr,{path:"/statistik",element:$.jsx(MF,{})}),$.jsx(hr,{path:"/admin",element:$.jsx(FF,{})}),$.jsx(hr,{path:"/tentang",element:$.jsx(UF,{})}),$.jsx(hr,{path:"/galeri",element:$.jsx(BF,{})})]})})})}),$.jsxs("footer",{className:"footer",children:[$.jsx("img",{src:t,alt:"UNBIN",onError:o=>{o.currentTarget.style.display="none"}}),$.jsx("span",{children:"(c) BEM KM UNBIN - Menfes Platform"}),$.jsx("img",{src:e,alt:"BEM",onError:o=>{o.currentTarget.style.display="none"}})]}),$.jsx(NF,{})]})})}rI(document.getElementById("root")).render($.jsx(g1,{children:$.jsx(jF,{})}));typeof window<"u"&&"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/firebase-messaging-sw.js").catch(()=>{})});export{VA as $,eU as A,tU as B,iU as C,Rc as D,$V as E,LA as F,rU as G,uw as H,KF as I,yO as J,Js as K,Fr as L,ut as M,OA as N,hh as O,ll as P,Tn as Q,z as R,$m as S,In as T,Jm as U,Ym as V,Pu as W,ph as X,eg as Y,Zm as Z,Nt as _,ap as a,Qo as a0,Re as a1,qm as a2,BI as a3,Fe as a4,Ci as a5,q as a6,nx as a7,Ae as a8,lt as a9,ki as aa,rO as ab,vA as ac,aO as ad,ch as ae,mh as af,oO as ag,sO as b,wA as c,Jn as d,sU as e,za as f,_g as g,WF as h,YF as i,$ as j,ZF as k,HF as l,n2 as m,XF as n,_O as o,oU as p,bA as q,F as r,JF as s,aU as t,GC as u,QF as v,zF as w,xA as x,nU as y,qM as z};
