!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/chess/",r(r.s=4)}([function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";var n=r(3),a=r(0),i=-8,o=-4,u=0,c=1,s=1,l=2,f=5,y=1024,h=2048,p=8192,g=0,v=4,d=8,b=12,_=12,m=16,w="undefined"!==typeof BigUint64Array,A=Symbol(),x=1024;function E(t,e){var r=new Uint32Array(t),n=new Uint16Array(t),a=r[e+o>>>2]>>>1,i=e>>>1;if(a<=x)return String.fromCharCode.apply(String,n.subarray(i,i+a));var u=[];do{var c=n[i+x-1],s=c>=55296&&c<56320?x-1:x;u.push(String.fromCharCode.apply(String,n.subarray(i,i+=s))),a-=s}while(a>x);return u.join("")+String.fromCharCode.apply(String,n.subarray(i,i+a))}function U(t){var e={};function r(t,e){return t?E(t.buffer,e):"<yet unknown>"}var n=t.env=t.env||{};return n.abort=n.abort||function(t,a,i,o){var u=e.memory||n.memory;throw Error("abort: "+r(u,t)+" at "+r(u,a)+":"+i+":"+o)},n.trace=n.trace||function(t,a){var i=e.memory||n.memory;console.log("trace: "+r(i,t)+(a?" ":"")+Array.prototype.slice.call(arguments,2,2+a).join(", "))},t.Math=t.Math||Math,t.Date=t.Date||Date,e}function O(t,e){var r=e.exports,n=r.memory,a=r.table,A=r.__alloc,x=r.__retain,U=r.__rtti_base||-1;function O(t){var e=new Uint32Array(n.buffer);if((t>>>=0)>=e[U>>>2])throw Error("invalid id: "+t);return e[(U+4>>>2)+2*t]}function j(t){var e=new Uint32Array(n.buffer);if((t>>>=0)>=e[U>>>2])throw Error("invalid id: "+t);return e[(U+4>>>2)+2*t+1]}function I(t){return 31-Math.clz32(t>>>f&31)}function L(t,e,r){var a=n.buffer;if(r)switch(t){case 2:return new Float32Array(a);case 3:return new Float64Array(a)}else switch(t){case 0:return new(e?Int8Array:Uint8Array)(a);case 1:return new(e?Int16Array:Uint16Array)(a);case 2:return new(e?Int32Array:Uint32Array)(a);case 3:return new(e?BigInt64Array:BigUint64Array)(a)}throw Error("unsupported align: "+t)}function k(t){var e=new Uint32Array(n.buffer),r=e[t+i>>>2],a=O(r);if(!(a&s))throw Error("not an array: "+r);var u=I(a),c=e[t+v>>>2],f=a&l?e[t+_>>>2]:e[c+o>>>2]>>>u;return L(u,a&y,a&h).subarray(c>>>=u,c+f)}function P(t,e,r){return new t(S(t,e,r))}function S(t,e,r){var a=n.buffer,i=new Uint32Array(a),u=i[r+v>>>2];return new t(a,u,i[u+o>>>2]>>>e)}return t.__allocString=function(t){for(var e=t.length,r=A(e<<1,c),a=new Uint16Array(n.buffer),i=0,o=r>>>1;i<e;++i)a[o+i]=t.charCodeAt(i);return r},t.__getString=function(t){var e=n.buffer;if(new Uint32Array(e)[t+i>>>2]!==c)throw Error("not a string: "+t);return E(e,t)},t.__allocArray=function(t,e){var r=O(t);if(!(r&(s|l)))throw Error("not an array: "+t+" @ "+r);var a=I(r),i=e.length,o=A(i<<a,u),c=A(r&l?m:b,t),f=new Uint32Array(n.buffer);f[c+g>>>2]=x(o),f[c+v>>>2]=o,f[c+d>>>2]=i<<a,r&l&&(f[c+_>>>2]=i);var w=L(a,r&y,r&h);if(r&p)for(var E=0;E<i;++E)w[(o>>>a)+E]=x(e[E]);else w.set(e,o>>>a);return c},t.__getArrayView=k,t.__getArray=function(t){for(var e=k(t),r=e.length,n=new Array(r),a=0;a<r;a++)n[a]=e[a];return n},t.__getArrayBuffer=function(t){var e=n.buffer,r=new Uint32Array(e)[t+o>>>2];return e.slice(t,t+r)},t.__getInt8Array=P.bind(null,Int8Array,0),t.__getInt8ArrayView=S.bind(null,Int8Array,0),t.__getUint8Array=P.bind(null,Uint8Array,0),t.__getUint8ArrayView=S.bind(null,Uint8Array,0),t.__getUint8ClampedArray=P.bind(null,Uint8ClampedArray,0),t.__getUint8ClampedArrayView=S.bind(null,Uint8ClampedArray,0),t.__getInt16Array=P.bind(null,Int16Array,1),t.__getInt16ArrayView=S.bind(null,Int16Array,1),t.__getUint16Array=P.bind(null,Uint16Array,1),t.__getUint16ArrayView=S.bind(null,Uint16Array,1),t.__getInt32Array=P.bind(null,Int32Array,2),t.__getInt32ArrayView=S.bind(null,Int32Array,2),t.__getUint32Array=P.bind(null,Uint32Array,2),t.__getUint32ArrayView=S.bind(null,Uint32Array,2),w&&(t.__getInt64Array=P.bind(null,BigInt64Array,3),t.__getInt64ArrayView=S.bind(null,BigInt64Array,3),t.__getUint64Array=P.bind(null,BigUint64Array,3),t.__getUint64ArrayView=S.bind(null,BigUint64Array,3)),t.__getFloat32Array=P.bind(null,Float32Array,2),t.__getFloat32ArrayView=S.bind(null,Float32Array,2),t.__getFloat64Array=P.bind(null,Float64Array,3),t.__getFloat64ArrayView=S.bind(null,Float64Array,3),t.__instanceof=function(t,e){var r=new Uint32Array(n.buffer),a=r[t+i>>>2];if(a<=r[U>>>2])do{if(a==e)return!0}while(a=j(a));return!1},t.memory=t.memory||n,t.table=t.table||a,M(r,t)}function j(t,e){var r=function(){return e&&(e.value=arguments.length),t.apply(void 0,arguments)};return r.original=t,r}function I(t){return"undefined"!==typeof Response&&t instanceof Response}function L(t,e){return a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=I,r.next=3,a.awrap(t);case 3:if(r.t1=t=r.sent,!(0,r.t0)(r.t1)){r.next=6;break}return r.abrupt("return",k(t,e));case 6:if(r.t2=O,r.t3=U(e||(e={})),r.t4=a,r.t5=WebAssembly,!(t instanceof WebAssembly.Module)){r.next=14;break}r.t6=t,r.next=17;break;case 14:return r.next=16,a.awrap(WebAssembly.compile(t));case 16:r.t6=r.sent;case 17:return r.t7=r.t6,r.t8=e,r.t9=r.t5.instantiate.call(r.t5,r.t7,r.t8),r.next=22,r.t4.awrap.call(r.t4,r.t9);case 22:return r.t10=r.sent,r.abrupt("return",(0,r.t2)(r.t3,r.t10));case 24:case"end":return r.stop()}}))}function k(t,e){return a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(WebAssembly.instantiateStreaming){r.next=14;break}return r.t0=L,r.t1=I,r.next=5,a.awrap(t);case 5:if(r.t2=t=r.sent,!(0,r.t1)(r.t2)){r.next=10;break}r.t3=t.arrayBuffer(),r.next=11;break;case 10:r.t3=t;case 11:return r.t4=r.t3,r.t5=e,r.abrupt("return",(0,r.t0)(r.t4,r.t5));case 14:return r.t6=O,r.t7=U(e||(e={})),r.next=18,a.awrap(WebAssembly.instantiateStreaming(t,e));case 18:return r.t8=r.sent.instance,r.abrupt("return",(0,r.t6)(r.t7,r.t8));case 20:case"end":return r.stop()}}))}function M(t,e){var r=e?Object.create(e):{},a=t.__argumentsLength;function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var o=function(e){if(!i(t,e))return"continue";for(var o=t[e],u=e.split("."),c=r;u.length>1;){var s=u.shift();i(c,s)||(c[s]={}),c=c[s]}var l=u[0],f=l.indexOf("#");if(f>=0){var y=l.substring(0,f),h=c[y];if("undefined"===typeof h||!h.prototype){var p=function t(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.wrap((e=t.prototype).constructor.apply(e,[0].concat(n)))};p.prototype={valueOf:function(){return this[A]}},p.wrap=function(t){return Object.create(p.prototype,n({},A,{value:t,writable:!1}))},h&&Object.getOwnPropertyNames(h).forEach((function(t){return Object.defineProperty(p,t,Object.getOwnPropertyDescriptor(h,t))})),c[y]=p}if(l=l.substring(f+1),c=c[y].prototype,/^(get|set):/.test(l)){if(!i(c,l=l.substring(4))){var g=t[e.replace("set:","get:")],v=t[e.replace("get:","set:")];Object.defineProperty(c,l,{get:function(){return g(this[A])},set:function(t){v(this[A],t)},enumerable:!0})}}else"constructor"===l?c[l]=j(o,a):Object.defineProperty(c,l,{value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return a&&(a.value=e.length),o.apply(void 0,[this[A]].concat(e))}})}else/^(get|set):/.test(l)?i(c,l=l.substring(4))||Object.defineProperty(c,l,{get:t[e.replace("set:","get:")],set:t[e.replace("get:","set:")],enumerable:!0}):c[l]="function"===typeof o?j(o,a):o};for(var u in t)o(u);return r}e.instantiate=L,e.instantiateSync=function(t,e){return O(U(e||(e={})),new WebAssembly.Instance(t instanceof WebAssembly.Module?t:new WebAssembly.Module(t),e))},e.instantiateStreaming=k,e.demangle=M},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),o=new j(n||[]);return i._invoke=function(t,e,r){var n=l;return function(a,i){if(n===y)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var u=E(o,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=y;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",y="executing",h="completed",p={};function g(){}function v(){}function d(){}var b={};b[i]=function(){return this};var _=Object.getPrototypeOf,m=_&&_(_(I([])));m&&m!==r&&n.call(m,i)&&(b=m);var w=d.prototype=g.prototype=Object.create(b);function A(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t){var e;this._invoke=function(r,a){function i(){return new Promise((function(e,i){!function e(r,a,i,o){var u=s(t[r],t,a);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):Promise.resolve(l).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,o)}))}o(u.arg)}(r,a,e,i)}))}return e=e?e.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=s(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function U(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(U,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:L}}function L(){return{value:e,done:!0}}return v.prototype=w.constructor=d,d.constructor=v,d[u]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},A(x.prototype),x.prototype[o]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,a){var i=new x(c(e,r,n,a));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},A(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return u.type="throw",u.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}var c=r(1),s=function(){function t(){i(this,t)}return u(t,[{key:"init",value:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.engine){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,a.a.awrap(Object(c.instantiate)(fetch("./as-api.wasm")));case 4:this.engine=t.sent,console.log("Engine initialized");case 6:case"end":return t.stop()}}),null,this)}},{key:"newGame",value:function(){this.engine.newGame()}},{key:"calculateMove",value:function(t,e,r){console.log("Start calculation of move ...");var n=this.engine.__allocArray(this.engine.INT32ARRAY_ID,t),a=this.engine.__retain(n),i=this.engine.calculateMove(a,e,r),o=l.fromEncodedMove(i);return this.engine.__release(a),console.log("Calculation finished"),o}},{key:"performMove",value:function(t,e){var r=this.engine.__allocArray(this.engine.INT32ARRAY_ID,t),n=this.engine.__retain(r),a=this.engine.performMove(n,e.encodedMove),i=this.engine.__getArray(a);return this.engine.__release(n),this.engine.__release(a),i}},{key:"generateMoves",value:function(t,e){var r=this.engine.__allocArray(this.engine.INT32ARRAY_ID,t),n=this.engine.__retain(r),a=this.engine.generatePlayerMoves(n,e),i=this.engine.__getArray(a);return this.engine.__release(a),this.engine.__release(n),i.map(l.fromEncodedMove)}},{key:"isCheckMate",value:function(t,e){var r=this.engine.__allocArray(this.engine.INT32ARRAY_ID,t),n=this.engine.__retain(r),a=this.engine.isCheckMate(n,e);return this.engine.__release(n),a}}]),t}(),l=function(){function t(e,r,n){i(this,t),this.piece=e,this.start=r,this.end=n,this.encodedMove=e|r<<3|n<<10}return u(t,null,[{key:"fromEncodedMove",value:function(e){return new t(7&e,e>>3&127,e>>10&127)}}]),t}(),f=new s;function y(t,e,r){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(f.init());case 2:return n.abrupt("return",f.calculateMove(t,e,r));case 3:case"end":return n.stop()}}))}function h(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(f.init());case 2:return t.abrupt("return",f.newGame());case 3:case"end":return t.stop()}}))}r.d(e,"calculateMove",(function(){return y})),r.d(e,"newGame",(function(){return h})),addEventListener("message",(function(t){var r,n=t.data,a=n.type,i=n.method,o=n.id,u=n.params;"RPC"===a&&i&&((r=e[i])?Promise.resolve().then((function(){return r.apply(e,u)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:o,result:t})})).catch((function(t){var e={message:t};t.stack&&(e.message=t.message,e.stack=t.stack,e.name=t.name),postMessage({type:"RPC",id:o,error:e})}))})),postMessage({type:"RPC",method:"ready"})}]);
//# sourceMappingURL=6fde106e496b6c98de0c.worker.js.map