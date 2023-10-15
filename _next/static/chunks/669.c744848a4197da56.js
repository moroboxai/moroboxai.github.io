(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{3764:function(a,h,g){"use strict";g.d(h,{VK:function(){return BrowserRouter}});var v,m,b,E,O,w,S,P,L,x,A,R=g(7294),_=g.t(R,2);/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return(_extends=Object.assign?Object.assign.bind():function(a){for(var h=1;h<arguments.length;h++){var g=arguments[h];for(var v in g)Object.prototype.hasOwnProperty.call(g,v)&&(a[v]=g[v])}return a}).apply(this,arguments)}(v=P||(P={})).Pop="POP",v.Push="PUSH",v.Replace="REPLACE";let C="popstate";function invariant(a,h){if(!1===a||null==a)throw Error(h)}function getHistoryState(a,h){return{usr:a.state,key:a.key,idx:h}}function createLocation(a,h,g,v){return void 0===g&&(g=null),_extends({pathname:"string"==typeof a?a:a.pathname,search:"",hash:""},"string"==typeof h?router_parsePath(h):h,{state:g,key:h&&h.key||v||Math.random().toString(36).substr(2,8)})}function router_createPath(a){let{pathname:h="/",search:g="",hash:v=""}=a;return g&&"?"!==g&&(h+="?"===g.charAt(0)?g:"?"+g),v&&"#"!==v&&(h+="#"===v.charAt(0)?v:"#"+v),h}function router_parsePath(a){let h={};if(a){let g=a.indexOf("#");g>=0&&(h.hash=a.substr(g),a=a.substr(0,g));let v=a.indexOf("?");v>=0&&(h.search=a.substr(v),a=a.substr(0,v)),a&&(h.pathname=a)}return h}(m=L||(L={})).data="data",m.deferred="deferred",m.redirect="redirect",m.error="error",Symbol("deferred");let j=R.createContext(null),T=R.createContext(null);var N=((b=N||{}).UseBlocker="useBlocker",b.UseRevalidator="useRevalidator",b.UseNavigateStable="useNavigate",b),M=((E=M||{}).UseBlocker="useBlocker",E.UseLoaderData="useLoaderData",E.UseActionData="useActionData",E.UseRouteError="useRouteError",E.UseNavigation="useNavigation",E.UseRouteLoaderData="useRouteLoaderData",E.UseMatches="useMatches",E.UseRevalidator="useRevalidator",E.UseNavigateStable="useNavigate",E.UseRouteId="useRouteId",E);function dist_Router(a){let{basename:h="/",children:g=null,location:v,navigationType:m=P.Pop,navigator:b,static:E=!1}=a;null!=R.useContext(T)&&invariant(!1);let O=h.replace(/^\/*/,"/"),w=R.useMemo(()=>({basename:O,navigator:b,static:E}),[O,b,E]);"string"==typeof v&&(v=router_parsePath(v));let{pathname:S="/",search:L="",hash:x="",state:A=null,key:_="default"}=v,C=R.useMemo(()=>{let a=function(a,h){if("/"===h)return a;if(!a.toLowerCase().startsWith(h.toLowerCase()))return null;let g=h.endsWith("/")?h.length-1:h.length,v=a.charAt(g);return v&&"/"!==v?null:a.slice(g)||"/"}(S,O);return null==a?null:{location:{pathname:a,search:L,hash:x,state:A,key:_},navigationType:m}},[O,S,L,x,A,_,m]);return null==C?null:R.createElement(j.Provider,{value:w},R.createElement(T.Provider,{children:g,value:C}))}_.startTransition;var I=((O=I||{})[O.pending=0]="pending",O[O.success=1]="success",O[O.error=2]="error",O);new Promise(()=>{});let U=_.startTransition;function BrowserRouter(a){let{basename:h,children:g,future:v,window:m}=a,b=R.useRef();null==b.current&&(b.current=function(a,h,g,v){void 0===v&&(v={});let{window:m=document.defaultView,v5Compat:b=!1}=v,E=m.history,O=P.Pop,w=null,S=getIndex();function getIndex(){return(E.state||{idx:null}).idx}function handlePop(){O=P.Pop;let a=getIndex(),h=null==a?null:a-S;S=a,w&&w({action:O,location:L.location,delta:h})}function createURL(a){let h="null"!==m.location.origin?m.location.origin:m.location.href,g="string"==typeof a?a:router_createPath(a);return invariant(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}null==S&&(S=0,E.replaceState(_extends({},E.state,{idx:S}),""));let L={get action(){return O},get location(){return a(m,E)},listen(a){if(w)throw Error("A history only accepts one active listener");return m.addEventListener(C,handlePop),w=a,()=>{m.removeEventListener(C,handlePop),w=null}},createHref:a=>h(m,a),createURL,encodeLocation(a){let h=createURL(a);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:function(a,h){O=P.Push;let v=createLocation(L.location,a,h);g&&g(v,a);let x=getHistoryState(v,S=getIndex()+1),A=L.createHref(v);try{E.pushState(x,"",A)}catch(a){if(a instanceof DOMException&&"DataCloneError"===a.name)throw a;m.location.assign(A)}b&&w&&w({action:O,location:L.location,delta:1})},replace:function(a,h){O=P.Replace;let v=createLocation(L.location,a,h);g&&g(v,a);let m=getHistoryState(v,S=getIndex()),x=L.createHref(v);E.replaceState(m,"",x),b&&w&&w({action:O,location:L.location,delta:0})},go:a=>E.go(a)};return L}(function(a,h){let{pathname:g,search:v,hash:m}=a.location;return createLocation("",{pathname:g,search:v,hash:m},h.state&&h.state.usr||null,h.state&&h.state.key||"default")},function(a,h){return"string"==typeof h?h:router_createPath(h)},null,{window:m,v5Compat:!0}));let E=b.current,[O,w]=R.useState({action:E.action,location:E.location}),{v7_startTransition:S}=v||{},L=R.useCallback(a=>{S&&U?U(()=>w(a)):w(a)},[w,S]);return R.useLayoutEffect(()=>E.listen(L),[E,L]),R.createElement(dist_Router,{basename:h,children:g,location:O.location,navigationType:O.action,navigator:E})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(w=x||(x={})).UseScrollRestoration="useScrollRestoration",w.UseSubmit="useSubmit",w.UseSubmitFetcher="useSubmitFetcher",w.UseFetcher="useFetcher",(S=A||(A={})).UseFetchers="useFetchers",S.UseScrollRestoration="useScrollRestoration"},2811:function(a,h){"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=h.CALL_HISTORY_METHOD="@@router/CALL_HISTORY_METHOD";function updateLocation(a){return function(){for(var h=arguments.length,v=Array(h),m=0;m<h;m++)v[m]=arguments[m];return{type:g,payload:{method:a,args:v}}}}var v=h.push=updateLocation("push"),m=h.replace=updateLocation("replace"),b=h.go=updateLocation("go"),E=h.goBack=updateLocation("goBack"),O=h.goForward=updateLocation("goForward");h.routerActions={push:v,replace:m,go:b,goBack:E,goForward:O}},3311:function(a,h,g){"use strict";h.mg=void 0;var v=g(5023);Object.defineProperty(h,"mg",{enumerable:!0,get:function(){return v.routerReducer}}),g(2811);var m=_interopRequireDefault(g(8533)),b=_interopRequireDefault(g(2998));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}m.default,b.default},2998:function(a,h,g){"use strict";Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(a){return function(){return function(h){return function(g){if(g.type!==v.CALL_HISTORY_METHOD)return h(g);var m=g.payload,b=m.method,E=m.args;a[b].apply(a,function(a){if(!Array.isArray(a))return Array.from(a);for(var h=0,g=Array(a.length);h<a.length;h++)g[h]=a[h];return g}(E))}}}};var v=g(2811)},5023:function(a,h){"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=Object.assign||function(a){for(var h=1;h<arguments.length;h++){var g=arguments[h];for(var v in g)Object.prototype.hasOwnProperty.call(g,v)&&(a[v]=g[v])}return a};h.routerReducer=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=h.type,E=h.payload;return b===v?g({},a,{locationBeforeTransitions:E}):a};var v=h.LOCATION_CHANGE="@@router/LOCATION_CHANGE",m={locationBeforeTransitions:null}},8533:function(a,h,g){"use strict";Object.defineProperty(h,"__esModule",{value:!0});var v=Object.assign||function(a){for(var h=1;h<arguments.length;h++){var g=arguments[h];for(var v in g)Object.prototype.hasOwnProperty.call(g,v)&&(a[v]=g[v])}return a};h.default=function(a,h){var g=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},b=g.selectLocationState,E=void 0===b?defaultSelectLocationState:b,O=g.adjustUrlOnReplay,w=void 0===O||O;if(void 0===E(h.getState()))throw Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");var S=void 0,P=void 0,L=void 0,x=void 0,A=void 0,getLocationInStore=function(a){return E(h.getState()).locationBeforeTransitions||(a?S:void 0)};if(S=getLocationInStore(),w){var handleStoreChange=function(){var h=getLocationInStore(!0);A!==h&&S!==h&&(P=!0,A=h,a.transitionTo(v({},h,{action:"PUSH"})),P=!1)};L=h.subscribe(handleStoreChange),handleStoreChange()}var handleLocationChange=function(a){!P&&(A=a,!S&&(S=a,getLocationInStore())||h.dispatch({type:m.LOCATION_CHANGE,payload:a}))};return x=a.listen(handleLocationChange),a.getCurrentLocation&&handleLocationChange(a.getCurrentLocation()),v({},a,{listen:function(g){var v=getLocationInStore(!0),m=!1,b=h.subscribe(function(){var a=getLocationInStore(!0);a!==v&&(v=a,m||g(v))});return a.getCurrentLocation||g(v),function(){m=!0,b()}},unsubscribe:function(){w&&L(),x()}})};var m=g(5023),defaultSelectLocationState=function(a){return a.routing}},5301:function(a,h,g){"use strict";var v=g(7294),m=v&&"object"==typeof v&&"default"in v?v.default:v,__assign=function(){return(__assign=Object.assign||function(a){for(var h,g=1,v=arguments.length;g<v;g++)for(var m in h=arguments[g])Object.prototype.hasOwnProperty.call(h,m)&&(a[m]=h[m]);return a}).apply(this,arguments)};!function(a,h){void 0===h&&(h={});var g=h.insertAt;if(a&&"undefined"!=typeof document){var v=document.head||document.getElementsByTagName("head")[0],m=document.createElement("style");m.type="text/css","top"===g&&v.firstChild?v.insertBefore(m,v.firstChild):v.appendChild(m),m.styleSheet?m.styleSheet.cssText=a:m.appendChild(document.createTextNode(a))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n"),a.exports=function(a){var h=a.top,g=void 0===h?20:h,b=a.className,E=a.color,O=a.smooth,w=void 0!==O&&O,S=a.component,P=void 0===S?"":S,L=a.viewBox,x=a.svgPath,A=a.width,R=a.height,_=function(a,h){var g={};for(var v in a)Object.prototype.hasOwnProperty.call(a,v)&&0>h.indexOf(v)&&(g[v]=a[v]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var m=0,v=Object.getOwnPropertySymbols(a);m<v.length;m++)0>h.indexOf(v[m])&&Object.prototype.propertyIsEnumerable.call(a,v[m])&&(g[v[m]]=a[v[m]]);return g}(a,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),C=v.useState(!1),j=C[0],T=C[1];return v.useEffect(function(){var onScroll=function(){T(document.documentElement.scrollTop>=g)};return onScroll(),document.addEventListener("scroll",onScroll),function(){return document.removeEventListener("scroll",onScroll)}},[g]),m.createElement(m.Fragment,null,j&&m.createElement("button",__assign({className:"scroll-to-top "+(void 0===b?"":b),onClick:function(){var a;void 0===(a=w)&&(a=!1),a?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0},"aria-label":"Scroll to top"},_),P||m.createElement("svg",{width:void 0===A?"28":A,height:void 0===R?"28":R,fill:void 0===E?"black":E,viewBox:void 0===L?"0 0 256 256":L},m.createElement("path",{d:void 0===x?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":x}))))}},4890:function(a,h,g){"use strict";function formatProdErrorMessage(a){return"Minified Redux error #"+a+"; visit https://redux.js.org/Errors?code="+a+" for the full message or use the non-minified dev environment for full errors. "}g.d(h,{MT:function(){return createStore},UY:function(){return combineReducers}});var v="function"==typeof Symbol&&Symbol.observable||"@@observable",randomString=function(){return Math.random().toString(36).substring(7).split("").join(".")},m={INIT:"@@redux/INIT"+randomString(),REPLACE:"@@redux/REPLACE"+randomString(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+randomString()}};function createStore(a,h,g){if("function"==typeof h&&"function"==typeof g||"function"==typeof g&&"function"==typeof arguments[3])throw Error(formatProdErrorMessage(0));if("function"==typeof h&&void 0===g&&(g=h,h=void 0),void 0!==g){if("function"!=typeof g)throw Error(formatProdErrorMessage(1));return g(createStore)(a,h)}if("function"!=typeof a)throw Error(formatProdErrorMessage(2));var b,E=a,O=h,w=[],S=w,P=!1;function ensureCanMutateNextListeners(){S===w&&(S=w.slice())}function getState(){if(P)throw Error(formatProdErrorMessage(3));return O}function subscribe(a){if("function"!=typeof a)throw Error(formatProdErrorMessage(4));if(P)throw Error(formatProdErrorMessage(5));var h=!0;return ensureCanMutateNextListeners(),S.push(a),function(){if(h){if(P)throw Error(formatProdErrorMessage(6));h=!1,ensureCanMutateNextListeners();var g=S.indexOf(a);S.splice(g,1),w=null}}}function dispatch(a){if(!function(a){if("object"!=typeof a||null===a)return!1;for(var h=a;null!==Object.getPrototypeOf(h);)h=Object.getPrototypeOf(h);return Object.getPrototypeOf(a)===h}(a))throw Error(formatProdErrorMessage(7));if(void 0===a.type)throw Error(formatProdErrorMessage(8));if(P)throw Error(formatProdErrorMessage(9));try{P=!0,O=E(O,a)}finally{P=!1}for(var h=w=S,g=0;g<h.length;g++)(0,h[g])();return a}return dispatch({type:m.INIT}),(b={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:function(a){if("function"!=typeof a)throw Error(formatProdErrorMessage(10));E=a,dispatch({type:m.REPLACE})}})[v]=function(){var a;return(a={subscribe:function(a){if("object"!=typeof a||null===a)throw Error(formatProdErrorMessage(11));function observeState(){a.next&&a.next(getState())}return observeState(),{unsubscribe:subscribe(observeState)}}})[v]=function(){return this},a},b}function combineReducers(a){for(var h,g=Object.keys(a),v={},b=0;b<g.length;b++){var E=g[b];"function"==typeof a[E]&&(v[E]=a[E])}var O=Object.keys(v);try{!function(a){Object.keys(a).forEach(function(h){var g=a[h];if(void 0===g(void 0,{type:m.INIT}))throw Error(formatProdErrorMessage(12));if(void 0===g(void 0,{type:m.PROBE_UNKNOWN_ACTION()}))throw Error(formatProdErrorMessage(13))})}(v)}catch(a){h=a}return function(a,g){if(void 0===a&&(a={}),h)throw h;for(var m=!1,b={},E=0;E<O.length;E++){var w=O[E],S=v[w],P=a[w],L=S(P,g);if(void 0===L)throw g&&g.type,Error(formatProdErrorMessage(14));b[w]=L,m=m||L!==P}return(m=m||O.length!==Object.keys(a).length)?b:a}}},4887:function(a,h){!function(a){"use strict";function t(a){return null==a}function r(a){throw Error("Argument "+a+" is empty.")}function e(a){return"function"==typeof a&&"getType"in a}function i(a){throw Error("Argument "+a+' is invalid, it should be an action-creator instance from "typesafe-actions"')}function o(a,h){if(null==a)throw Error("Argument contains array with empty element at index "+h);if(null==a.getType)throw Error("Argument contains array with invalid element at index "+h+', it should be an action-creator instance from "typesafe-actions"')}function u(a){return"string"==typeof a||"symbol"==typeof a}function c(a){throw Error("Argument "+a+" is invalid, it should be an action type of type: string | symbol")}function f(a,h){if(null==a)throw Error("Argument contains array with empty element at index "+h);if("string"!=typeof a&&"symbol"!=typeof a)throw Error("Argument contains array with invalid element at index "+h+", it should be of type: string | symbol")}function s(a,h,g,v){return t(a)&&r(1),u(a)||i(1),{type:a,payload:h,meta:g,error:v}}function y(a,h){return t(a)&&r(1),u(a)||c(1),Object.assign(function(){var g=null!=h?h.apply(void 0,arguments):void 0;return Object.assign({type:a},g)},{getType:function(){return a},toString:function(){return a}})}function l(a,h,g){return t(a)&&r(1),u(a)||c(1),function(){return y(a,function(){var a=arguments.length<=0?void 0:arguments[0],v=arguments.length<=1?void 0:arguments[1];return null==h&&null==g||(a=null!=h?h.apply(void 0,arguments):void 0,v=null!=g?g.apply(void 0,arguments):void 0),Object.assign({},void 0!==a&&{payload:a},{},void 0!==v&&{meta:v})})}}function p(a){return t(a)&&r(1),e(a)||i(1),a.getType()}function d(a,h){return t(a)&&r(1),u(a)||c(1),Object.assign(null!=h?h(a):function(){return{type:a}},{getType:function(){return a},toString:function(){return a}})}a.action=s,a.createAction=l,a.createAsyncAction=function(a,h,g,v){return function(){var m=[a,h,g,v].map(function(a,h){return Array.isArray(a)?l(a[0],a[1],a[2])():"string"==typeof a||"symbol"==typeof a?l(a)():void(h<3&&function(a){throw Error("Argument "+a+' is invalid, it should be an action type of "string | symbol" or a tuple of "[string | symbol, Function, Function?]"')}(h))});return{request:m[0],success:m[1],failure:m[2],cancel:m[3]}}},a.createCustomAction=y,a.createReducer=function n(a,h){void 0===h&&(h={});var g=Object.assign({},h),o=function(h,v){var m=Array.isArray(h)?h:[h],b={};return m.map(function(a,h){return e(a)?p(a):u(a)?a:function(a){throw Error("Argument "+a+' is invalid, it should be an action-creator instance from "typesafe-actions" or action type of type: string | symbol')}(h+1)}).forEach(function(a){return b[a]=v}),n(a,Object.assign({},g,{},b))};return Object.assign(function(h,v){if(void 0===h&&(h=a),g.hasOwnProperty(v.type)){var m=g[v.type];if("function"!=typeof m)throw Error('Reducer under "'+v.type+'" key is not a valid reducer');return m(h,v)}return h},{handlers:Object.assign({},g),handleAction:o,handleType:o})},a.deprecated={createAction:function(a,h){return Object.assign(null==h?function(){return s(a)}:h(s.bind(null,a)),{getType:function(){return a},toString:function(){return a}})},createCustomAction:d,createStandardAction:function(a){return t(a)&&r(1),u(a)||c(1),Object.assign(function(){return d(a,function(a){return function(h,g){return{type:a,payload:h,meta:g}}})},{map:function(h){return d(a,function(a){return function(g,v){return Object.assign(h(g,v),{type:a})}})}})}},a.getType=p,a.isActionOf=function(a,h){t(a)&&r(1);var g=Array.isArray(a)?a:[a];g.forEach(o);var u=function(a){return g.some(function(h){return a.type===h.getType()})};return void 0===h?u:u(h)},a.isOfType=function(a,h){t(a)&&r(1);var g=Array.isArray(a)?a:[a];g.forEach(f);var o=function(a){return g.includes(a.type)};return void 0===h?o:o(h)}}(h)}}]);