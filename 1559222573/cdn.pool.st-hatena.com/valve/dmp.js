/*! License information is available at dmp.licenses.txt */ /*! bd0f103 released at 2019-5-17 15:00:45 GMT+9 */!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=22)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.appendScript=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=t;var r=new Promise(function(t,r){e.addEventListener("load",function(e){return t(e)}),e.addEventListener("error",function(t){return r(t)})});return document.head.appendChild(e),r},e.pollingElementById=function(t,e){return new Promise(function(r,n){var o=document.getElementById(t);if(o)r(o);else{var i=Date.now(),s=function(){var o=document.getElementById(t);o?r(o):"number"==typeof e&&i+e<Date.now()?n(new Error(t)):setTimeout(s,10)};setTimeout(s,10)}})},e.requestGPTSurveyTag=function(t,e){var r=encodeURIComponent(Object.keys(e).map(function(t){var r=e[t],n=Array.isArray(r)?r.map(function(t){return encodeURIComponent(""!==t?t:"null")}).join(","):encodeURIComponent(""!==r?r:"null");return encodeURIComponent(t)+"="+(n||"null")}).join("&")),n="https://pubads.g.doubleclick.net/gampad/adx?"+["iu="+t,"sz=1x1","c="+Math.floor(1e8*Math.random()),"t="+r].join("&");return fetch(n)},e.timeoutPromise=function(t,e){var r=new Promise(function(t){setTimeout(t,e)}).then(function(){throw new Error("Operation timed out after "+e+" ms")});return Promise.race([t,r])};var n=function(){return function(){var t=this;this.promise=new Promise(function(e,r){t.resolve=e,t.reject=r})}}();e.Deferred=n},,function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};f.prototype.append=function(t,e){t=u(t),e=a(e);var r=this.map[t];this.map[t]=r?r+","+e:e},f.prototype.delete=function(t){delete this.map[u(t)]},f.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},f.prototype.set=function(t,e){this.map[u(t)]=a(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),c(t)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},f.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),c(t)},e.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},y.call(v.prototype),y.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];b.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=f,t.Request=v,t.Response=b,t.fetch=function(t,r){return new Promise(function(n,o){var i=new v(t,r),s=new XMLHttpRequest;s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;n(new b(o,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function f(t){this.map={},t instanceof f?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,r){(function(e,r){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */var n;n=function(){"use strict";function t(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,s=void 0,u=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(s?s(y):g())},a="undefined"!=typeof window?window:void 0,c=a||{},f=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var t=setTimeout;return function(){return t(y,1)}}var p=new Array(1e3);function y(){for(var t=0;t<o;t+=2){(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0}o=0}var v,m,b,w,g=void 0;function _(t,e){var r=this,n=new this.constructor(x);void 0===n[T]&&F(n);var o=r._state;if(o){var i=arguments[o-1];u(function(){return k(o,n,i,r._result)})}else I(r,n,t,e);return n}function P(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(x);return M(e,t),e}l?g=function(){return e.nextTick(y)}:f?(m=0,b=new f(y),w=document.createTextNode(""),b.observe(w,{characterData:!0}),g=function(){w.data=m=++m%2}):h?((v=new MessageChannel).port1.onmessage=y,g=function(){return v.port2.postMessage(0)}):g=void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(y)}:d()}catch(t){return d()}}():d();var T=Math.random().toString(36).substring(2);function x(){}var E=void 0,j=1,A=2,S={error:null};function O(t){try{return t.then}catch(t){return S.error=t,S}}function D(e,r,n){r.constructor===e.constructor&&n===_&&r.constructor.resolve===P?function(t,e){e._state===j?C(t,e._result):e._state===A?U(t,e._result):I(e,void 0,function(e){return M(t,e)},function(e){return U(t,e)})}(e,r):n===S?(U(e,S.error),S.error=null):void 0===n?C(e,r):t(n)?function(t,e,r){u(function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,function(r){n||(n=!0,e!==r?M(t,r):C(t,r))},function(e){n||(n=!0,U(t,e))},t._label);!n&&o&&(n=!0,U(t,o))},t)}(e,r,n):C(e,r)}function M(t,e){var r,n;t===e?U(t,new TypeError("You cannot resolve a promise with itself")):(n=typeof(r=e),null===r||"object"!==n&&"function"!==n?C(t,e):D(t,e,O(e)))}function B(t){t._onerror&&t._onerror(t._result),R(t)}function C(t,e){t._state===E&&(t._result=e,t._state=j,0!==t._subscribers.length&&u(R,t))}function U(t,e){t._state===E&&(t._state=A,t._result=e,u(B,t))}function I(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+j]=r,o[i+A]=n,0===i&&t._state&&u(R,t)}function R(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?k(r,n,o,i):o(i);t._subscribers.length=0}}function k(e,r,n,o){var i=t(n),s=void 0,u=void 0,a=void 0,c=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return S.error=t,S}}(n,o))===S?(c=!0,u=s.error,s.error=null):a=!0,r===s)return void U(r,new TypeError("A promises callback cannot return that same promise."))}else s=o,a=!0;r._state!==E||(i&&a?M(r,s):c?U(r,u):e===j?C(r,s):e===A&&U(r,s))}var L=0;function F(t){t[T]=L++,t._state=void 0,t._result=void 0,t._subscribers=[]}var V=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(x),this.promise[T]||F(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&C(this.promise,this._result))):U(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===P){var o=O(t);if(o===_&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===q){var i=new r(x);D(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===E&&(this._remaining--,t===A?U(n,r):this._result[e]=r),0===this._remaining&&C(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;I(t,void 0,function(t){return r._settledAt(j,e,t)},function(t){return r._settledAt(A,e,t)})},t}(),q=function(){function e(t){this[T]=L++,this._result=this._state=void 0,this._subscribers=[],x!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){M(t,e)},function(e){U(t,e)})}catch(e){U(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return q.prototype.then=_,q.all=function(t){return new V(this,t).promise},q.race=function(t){var e=this;return n(t)?new e(function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},q.resolve=P,q.reject=function(t){var e=new this(x);return U(e,t),e},q._setScheduler=function(t){s=t},q._setAsap=function(t){u=t},q._asap=u,q.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=q},q.Promise=q,q},t.exports=n()}).call(this,r(4),r(5))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var a,c=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=u(h);f=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||f||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=function(){function t(t,e){this.searchInterval=1,this.keywords=t,this.text=e}return t.prototype.search=function(t){var e=this;if(0===this.keywords.length)return Promise.resolve([[],{}]);var r=this.regexpFromWords(this.keywords.map(function(t){return t.word})),o={},i=new Promise(function(t){e.doSearch(r,o,t)});return t&&(i=n.timeoutPromise(i,t).catch(function(){return o})),i.then(function(t){return[e.keywords.filter(function(e){return e.times<=t[e.word.toLowerCase()]}),t]})},t.prototype.doSearch=function(t,e,r){var n=this,o=t.exec(this.text);if(o){var i=o[0].toLowerCase();e[i]||(e[i]=0),e[i]+=1,t.lastIndex-=i.length-1,setTimeout(function(){n.doSearch(t,e,r)},this.searchInterval)}else r(e)},t.prototype.regexpFromWords=function(t){var e=t.map(function(t){var e=t.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1");return/^\w+$/.test(t)?"\\b"+e+"\\b":e}).sort(function(t,e){return e.length-t.length});return new RegExp("("+e.join("|")+")","ig")},t}();e.KeywordSearcher=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.selectors=t}return t.prototype.contentSelector=function(){return 0===this.selectors.length?null:this.selectors.join(",")},t.prototype.contentText=function(){var t=this.contentSelector();return t?this._foldParents(document.querySelectorAll(t)).map(function(t){return t.textContent}).join("\n"):""},t.prototype.contentTextWithTimeout=function(t){var e=this,r=this.contentSelector();return r?this._pollingQuerySelectorAll(r,t).then(function(t){return e._foldParents(t).map(function(t){return t.textContent}).join("\n")}):Promise.reject(new Error("empty selector"))},t.prototype._foldParents=function(t){var e=[];return Array.prototype.forEach.call(t,function(t){e.some(function(e){return e.contains(t)})||(e=e.filter(function(e){return!t.contains(e)})).push(t)}),e},t.prototype._pollingQuerySelectorAll=function(t,e){return new Promise(function(r,n){var o=Date.now(),i=function(){var s=document.querySelectorAll(t);0<s.length?r(s):"number"==typeof e&&o+e<Date.now()?n(new Error(t)):setTimeout(i,10)};setTimeout(i,1)})},t}();e.PageTextExtractor=n},,,,,,,,,,,,,,function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(3)),i=r(23);o.polyfill(),new i.ValveDMP},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(24),o=r(7),i=r(8),s=r(25),u=r(0),a=r(26),c=function(){function t(){var t=this;this.config=new n.Config,this.config.debug&&"function"==typeof console.time&&console.time("ValveDMP"),this.keywordSearch=Promise.all([this.config.ready(),this.onDOMContentLoaded()]).catch(function(){throw new Error("ValveDMP: failed to ready")}).then(function(){return new o.KeywordSearcher(t.config.keywords,new i.PageTextExtractor(t.config.textSelectors).contentText()).search()}).then(function(e){var r=e[0],n=(e[1],r.reduce(function(t,e){return t[e.platform]instanceof Array||(t[e.platform]=[]),t[e.platform].push(e),t},{}));Object.keys(n).forEach(function(e){"Enhance"!==e&&(s.isPlatform(e)&&new s.platformDriverFactory[e](t.config.service,t.config.debug).submit(n[e]))})}).catch(function(e){t.config.debug&&console.error(e)}),this.imCall=this.callIntimateMerger(),this.done=Promise.all([this.keywordSearch,this.imCall]).then(function(){t.config.debug&&"function"==typeof console.timeEnd&&console.timeEnd("ValveDMP")})}return t.prototype.onDOMContentLoaded=function(){return new Promise(function(t){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){return t()}):t()})},t.prototype.callIntimateMerger=function(){var t=this;return a.get("rk")&&((new Image).src="//atm.im-apps.net/a/beacon.gif?cid=6604&c1=1",this.config.debug&&console.log("ValveDMP: IntimateMerger login beacon requested")),u.appendScript("//dmp.im-apps.net/js/6604/0001/itm.js").then(function(){t.config.debug&&console.log("ValveDMP: IntimateMerger inserted")}).catch(function(e){t.config.debug&&console.error(e)})},t}();e.ValveDMP=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(2);var n=function(){function t(){var t=this;this.textSelectors=[],this.keywords=[],this.debug=-1!==location.href.indexOf("valve_dmp_debug"),this.configPromise=this.fetchConfig().then(function(e){return t.textSelectors=(e.TextSelectors||[]).reduce(function(e,r){return r.service===t.service&&e.push(r.selector),e},[]),t.keywords=e.DMPKeywords||[],!0}).catch(function(e){return t.debug&&console.error(e),!1}),this.service=this.getService(),!this.service&&this.debug&&console.error("ValveDMP: `service` is not provided")}return t.jsonUrl=function(){return"https://cdn.pool.st-hatena.com/valve/dmp-config.json"},t.prototype.fetchConfig=function(){var e=window.ValveDMP||{};return e.config?Promise.resolve(e.config):fetch(t.jsonUrl()).then(function(e){if(400<=e.status)throw new Error("ValveDMP: config is not found on "+t.jsonUrl());return e.json()})},t.prototype.getService=function(){var t=window.ValveDMP||{};if(t.service)return t.service;var e=document.querySelector("script#valve-dmp");return e?e.getAttribute("data-service"):null},t.prototype.ready=function(){var t=this;return new Promise(function(e,r){t.configPromise.then(function(n){return n&&t.service?e(t):r(null)})})},t}();e.Config=n},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),r(2);var i=r(0),s=function(){function t(t,e){void 0===e&&(e=!1),this.service=t,this.debug=e}return t.prototype.submit=function(t){this.send(t),this.debug&&console.log("ValveDMP: "+this.platform+" <- [ "+t.map(function(t){return t.parameter}).join(", ")+" ]")},t}();e.PlatformDriver=s;var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.platform="Enhance",e}return o(e,t),e.prototype.send=function(t){var e=this;0!==t.length&&i.appendScript("//d-cache.microad.jp/js/td_htn_access.js").then(function(e){window.enhanceTd&&window.enhanceTd.HTN&&"function"==typeof window.enhanceTd.HTN.start&&t.forEach(function(t){return window.enhanceTd.HTN.start({article_category:t.parameter})})}).catch(function(){e.debug&&console.error("ValveDMP: Enhance parameter submission failed.")})},e}(s);e.EnhanceDriver=u;var a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.platform="BigMining",e}return o(e,t),e.prototype.send=function(t){var e=this;0!==t.length&&(window.hatenadfp=window.hatenadfp||{},window.hatenadfp.imKeywords=t.map(function(t){return t.parameter}),i.appendScript("//cdn.bigmining.com/private/js/hatena_bigmining.js").catch(function(){e.debug&&console.error("ValveDMP: BigMining parameter submission failed.")}))},e}(s);e.BigMiningDriver=a;var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.platform="ValveSurvey",e}return o(e,t),e.prototype.send=function(t){var e=this;0!==t.length&&i.requestGPTSurveyTag("/4374287/valve_survey_dmp_"+this.service,{matched_parameter:t.map(function(t){return t.parameter})}).catch(function(){e.debug&&console.error("ValveDMP: ValveSurvey parameter submission failed.")})},e}(s);e.ValveSurveyDriver=c;var f={Enhance:u,BigMining:a,ValveSurvey:c};e.platformDriverFactory=f;e.isPlatform=function(t){return-1!==["Enhance","BigMining","ValveSurvey"].indexOf(t)}},function(t,e){e.defaults={},e.set=function(t,r,n){var o=n||{},i=e.defaults,s=o.expires||i.expires,u=o.domain||i.domain,a=void 0!==o.path?o.path:void 0!==i.path?i.path:"/",c=void 0!==o.secure?o.secure:i.secure,f=void 0!==o.httponly?o.httponly:i.httponly,l=void 0!==o.samesite?o.samesite:i.samesite,h=s?new Date("number"==typeof s?(new Date).getTime()+864e5*s:s):0;document.cookie=t.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+r.replace(/[^+#$&\/:<-\[\]-}]/g,encodeURIComponent)+(h&&h.getTime()>=0?";expires="+h.toUTCString():"")+(u?";domain="+u:"")+(a?";path="+a:"")+(c?";secure":"")+(f?";httponly":"")+(l?";samesite="+l:"")},e.get=function(t){for(var e=document.cookie.split(";");e.length;){var r=e.pop(),n=r.indexOf("=");if(n=n<0?r.length:n,decodeURIComponent(r.slice(0,n).replace(/^\s+/,""))===t)return decodeURIComponent(r.slice(n+1))}return null},e.erase=function(t,r){e.set(t,"",{expires:-1,domain:r&&r.domain,path:r&&r.path,secure:0,httponly:0})},e.all=function(){for(var t={},e=document.cookie.split(";");e.length;){var r=e.pop(),n=r.indexOf("=");n=n<0?r.length:n,t[decodeURIComponent(r.slice(0,n).replace(/^\s+/,""))]=decodeURIComponent(r.slice(n+1))}return t}}]);