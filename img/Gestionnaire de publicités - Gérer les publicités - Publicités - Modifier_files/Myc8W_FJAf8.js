if (self.CavalryLogger) { CavalryLogger.start_js(["KxgN2"]); }

__d("MAjaxifyFormTypes",[],(function(a,b,c,d,e,f){e.exports={PAGELOAD:"pageload",NOCACHE:"nocache",CACHE:"cache"}}),null);
__d("MAjaxify",["CSS","DOM","ErrorUtils","LoadingIndicator","MAjaxifyFormTypes","MHistory","MLegacyDataStore","MPageCache","MPageControllerPath","MRequest","MRequestTypes","Stratcom","URI"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){__p&&__p();var t={postprocess:function(a){n.addCachedIUIResponse(o.getRequestPath(),a.response)}};function u(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1}function v(a,b){while(a&&!u(a,b))a=a.parentNode;return a}function w(a,b,c,d,e){__p&&__p();d=d||"async_elem";a&&(a.preventDefault(),a.stopPropagation());if(b){var f=v(b,d)||b,h=d+"_saving";if(u(f,h))return!1;g.conditionClass(f,d+"_preprocess",!0);a=function(a){g.conditionClass(f,d,!a),g.conditionClass(f,h,a),r.invoke(a?"m:ajax:saving:start":"m:ajax:saving:complete",null,f)};c.listen("start",a.bind(null,!0));c.listen("finally",a.bind(null,!1))}c.setType(q.INDEPENDENT);for(var b=0,a=e.length;b<a;b++){var i=e[b];for(var j in i)c.listen(j,i[j])}c.send();return!1}var x=["input","textarea","select","button","object"];function y(a,b){for(var c=0;c<x.length;c++){var d=h.scry(a,x[c]);for(var e=0;e<d.length;e++){var f=m.get(d[e]);b?(f.wasDisabled=d[e].disabled,d[e].disabled=!0):d[e].disabled=f.wasDisabled}}}function z(a,b,c){__p&&__p();this.start=function(){if(c)return;y(a,!0)},this.process=function(b){if(c)return;y(a,!1);a.reset();if(document.createEvent&&a.dispatchEvent){b=document.createEvent("HTMLEvents");b.initEvent("reset",!0,!0);a.dispatchEvent(b)}},this.error=this.fail=function(c){y(a,!1),b==k.PAGELOAD&&j.hide()},this.postprocess=function(a){b==k.PAGELOAD&&j.hide(),b==k.CACHE&&t.postprocess(a),r.invoke("m:ajax:complete")}}var A=null;document.addEventListener("click",function(a){a=a.target;(a.tagName==="INPUT"||a.tagName==="BUTTON")&&a.type=="submit"&&(A=a)},!0);function B(a,b,c,d,e){return w(a,b,c,d,e?[t].concat(e):[t])}function a(a,b,c,d){return!b||(a.which||a.button)>=2?!0:B(a,a.target,new p(b),c,d)}function b(a,b,c,d,e,f,g,m,n){__p&&__p();n===void 0&&(n=!1);return i.guard(function(){__p&&__p();if(!b||!b.action)return!0;var i=h.convertFormToDictionary(b);A&&(i[A.name]=A.value,A=null);var o=new p(b.action);o.processResponseAfterPageTransitions=n;o.addData(i);o.setMethod(b.method||"POST");m&&o.setFailureLogging(m);var q=null;if(d===k.PAGELOAD){if(b.method.toUpperCase()==="GET"){i=new s(b.action).addQueryData(i);l.pushState(i)}j.show()}else q=f?null:e||b;g||(g=[]);g.push(new z(b,d,f));r.invoke("MAjaxify.form.ajax.start","",o);return w(a,q,o,c,g)},"MAjaxify.form")()}f.ajaxify=B;f.form=b;f.link=a}),null);
__d("legacy:m-ajaxify-js",["MAjaxify"],(function(a,b,c,d,e,f,g){a.MAjaxify=g}),3);
__d("MVerifyCache",["MCache"],(function(a,b,c,d,e,f,g){a=function(a){var b=g.VIEWER_KEY,c=g.getItem(b);c!==a.viewer&&(c&&g.clear(),g.setItem(b,a.viewer,!0))};f.main=a}),null);
__d("MPageError",["DOM","FBLogger","LoadingIndicator","MErrorCodes","MPageController","Stratcom","$"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m){__p&&__p();var n=m("mErrorView"),o=g.find(n,"div","error-message");l.listen("click","MPageError:retry",k.reload);l.listen("m:page:loading",null,function(a){g.hide(n)});l.listen("m:page:error",null,function(a){a=a.getData();var b=j.getMessage(a);i.hide();g.setContent(o,b);g.show(n);h("FIXME").warn("Error code: %s",a)})}),null);
__d("MPageHeaderAccessibility",["DOM","MAria","Stratcom"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=document.body;var j=g.scry(a,"*","mChromeHeaderCenter")[0],k=g.scry(a,"*","mChromeHeaderRight")[0],l=document.getElementById("root");function m(a){a&&h.show(a)}function n(a){a&&h.hide(a)}i.listen("m:side-area:show",null,function(a){n(j),n(k),n(l)});i.listen("m:side-area:hide",null,function(a){m(j),m(k),m(l)});e.exports={}}),null);
__d("MFirefoxAppDetect",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){__p&&__p();if(!navigator.mozApps){b();return}if(window.locationbar&&!window.locationbar.visible){a();return}if(navigator.mozApps.getSelf){var c=navigator.mozApps.getSelf();c.onsuccess=function(){c.result?a():b()};c.onerror=b}else b()}f.isFirefoxApp=a}),null);
__d("MPageHeaderLeft",["DOM","MFirefoxAppDetect","$"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j={};function k(a){if(!j.back_button){var b=i("page");j.back_button=g.find(b,"a","back-button");j.menu_button=g.find(b,"a","menu-link")}a.show_back_button?(g.hide(j.menu_button),g.show(j.back_button)):(g.hide(j.back_button),g.show(j.menu_button))}a=function a(b){var c=window.navigator;c.standalone||j.isMozApp?k(b):j.isMozApp===void 0&&(j.lastConfig=b,h.isFirefoxApp(function(){j.isMozApp=!0,b===j.lastConfig&&(a(b),delete j.lastConfig)},function(){j.isMozApp=!1}))};f.main=a}),null);
__d("RemoteDevice",["Banzai","Cookie","GeneratedLoggerUtils","MViewport","Run","isInIframe"],(function(a,b,c,d,e,f,g,h,i,j,k,l){__p&&__p();var m=!1,n={init:function(b){__p&&__p();if(!l()&&!window.APP_ENABLED&&!window.FW_ENABLED){if(/\((?:iPad|iPhone|iPod(?: touch));/.test(navigator.userAgent)){var c=Math.min(screen.width,screen.height),d=Math.max(screen.width,screen.height);c&&d&&(h.set("wd",c+"x"+d),h.set("m_pixel_ratio",window.devicePixelRatio));b&&b.performHardwareDetection&&b.hashId!==null&&k.onAfterLoad(function(){n.logHardwareInfo(b.hashId||"")});return}c=j.getWidth();d=j.getScreenHeight();if(!c||!d)return;a.DEFER_COOKIES||h.set("wd",c+"x"+d)}},logHardwareInfo:function(a){__p&&__p();if(m)return;m=!0;var b=document.createElement("canvas");if(!b)return;b=b.getContext("webgl")||b.getContext("experimental-webgl");if(!b)return;var c=b.getExtension("WEBGL_debug_renderer_info");if(!c)return;var d="unknown",e="unknown";c!=null&&(d=b.getParameter(c.UNMASKED_RENDERER_WEBGL),e=b.getParameter(c.UNMASKED_VENDOR_WEBGL));b=0;window.navigator&&(b=window.navigator.hardwareConcurrency);c=window.screen.width;var f=window.screen.height,h=Math.min(c,f);c=Math.max(c,f);f={gpu_renderer:d,gpu_vendor:e,logical_cpu_count:b,screen_width_pixel:h,screen_height_pixel:c,device_pixel_ratio:window.devicePixelRatio,hashid:a};i.log("logger:MHardwareDetectorLoggerConfig",f,g.VITAL)}};e.exports=n}),null);
__d("Clock",["EventEmitter"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new g();h.ANOMALY="anomaly";var i=30,j=Date.now(),k=[],l=0,m=1e3;function n(){var a=Date.now()-j;return a<0||a>m*10}function a(){var a=Date.now()-j;k[l]=a;l=(l+1)%i;n()&&h.emit(h.ANOMALY,a);j=Date.now()}h.getSamples=function(){return k.slice(l).concat(k.slice(0,l))};h.isAnomalous=n;setInterval(a,m);e.exports=h}),null);
__d("LogHistoryListeners",["Clock","ErrorUtils","LogHistory"],(function(a,b,c,d,e,f,g,h){var i=b("LogHistory").getInstance("sys");g.addListener(g.ANOMALY,function(a){i.warn("clock_anomaly",g.getSamples())});h.addListener(function(a){i.error("error",JSON.stringify({guard:a.guard,line:a.line,message:a.message,script:a.script,stack:a.stack}))})}),null);
__d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var b=a.prototype;b.log=function(){h.log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,g.BASIC)};b.logVital=function(){h.log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,g.VITAL)};b.logImmediately=function(){h.log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0})};b.clear=function(){this.$1={};return this};b.getData=function(){return babelHelpers["extends"]({},this.$1)};b.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};b.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=h.serializeVector(a);return this};b.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};b.setTime=function(a){this.$1.time=a;return this};b.setVC=function(a){this.$1.vc=a;return this};b.setWeight=function(a){this.$1.weight=a;return this};b.updateExtraData=function(a){a=i(h.serializeMap(a));h.checkExtraDataFieldNames(a,j);this.$1=babelHelpers["extends"]({},this.$1,a);return this};b.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var j={indicated_browsers:!0,is_virtual_cursor_action:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("MExceptionReportingMarauderLogger",["ErrorUtils"],(function(a,b,c,d,e,f,g){function h(a){d(["MarauderLogger"],function(b){b.log("js_exception",void 0,a),a=null})}function a(a,b,c){h({message:a,context:b,stack_trace:c})}g.addListener(function(a){h(a)});e.exports.log=a}),null);
__d("MNotificationsImpressionLogger",["MRequest"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=new g("/a/jewel_notifications_read.php");b.addData({ids:a,count:a.length,seen:!0});b.send()}e.exports={markSeenOnDisplay:a}}),null);
__d("MAsyncPageLoadWithGraphSearch",["Stratcom"],(function(a,b,c,d,e,f,g){var h="graph-search-entry-point";a={pageLoad:function(a){g.invoke("setSearchText",h,{title:a.searchTitle||""}),g.invoke("setCurrentProfileID",h,{profileID:a.currentProfileID})}};e.exports=a}),null);
__d("InitMAjaxify",["MAjaxify","MLegacyDataStore","MLinkHack","MRequest","Stratcom"],(function(a,b,c,d,e,f,g,h,i,j,k){__p&&__p();var l={};function m(a){l[a]=l[a]||new RegExp("(^|\\s+)"+a+"(\\s+|$)");return l[a]}function a(a,b){a=a.className||"";return a.match(m(b))}k.listen("click","ajaxify",function(a){__p&&__p();a.prevent();var b=a.getNode("ajaxify"),c=b.getAttribute("data-ajaxify-class"),d=b.getAttribute("data-confirm-text");if(d&&!confirm(d))return;var e=h.get(b);if(e.loading)return;e.loading=!0;d=function(){e&&(e.loading=e.request=null),e=null};var f=function(){k.invoke("m:ajax:complete")};d={"finally":d,postprocess:f};f=i.remove(b);var l=b.getAttribute("data-ajaxify-href")||b.getAttribute("href");if(b.getAttribute("data-method")==="post"){var m=new j(l);m.setAutoRetry(!0);e.request=m;g.ajaxify(a.getRawEvent(),b,m,c,null)}else g.link(a.getRawEvent(),l,c,d);f&&i.add(b)})}),null);
__d("MModalDialogInit",["MModalDialog"],(function(a,b,c,d,e,f,g){a.FW_ENABLED||g.init()}),null);
__d("MAsyncThrobber",["DOM","MLoadingIndicator","Stratcom","destroyOnUnload"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k="async-throbber";a=function(){"use strict";__p&&__p();function a(a){this.$1=h.init(a);if(!this.$1)return;this.$2=[i.listen("m:ajax:saving:start",null,this.$3.bind(this)),i.listen("m:ajax:saving:complete",null,this.$4.bind(this))];j(this.$5.bind(this))}var b=a.prototype;b.$3=function(a){a=a&&a.getData();a&&g.scry(a,"*",k)&&this.$1.willStartAnimation()};b.$4=function(a){a=a&&a.getData();a&&g.scry(a,"*",k)&&this.$1.willPauseAnimation()};b.$5=function(){while(this.$2&&this.$2.length)this.$2.pop().remove();this.$1=null};return a}();e.exports=a}),null);
__d("MTimestamp",["DOM","MLegacyDataStore","Stratcom","fbt","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j,k){__p&&__p();var l=2e4,m=60,n=3600,o;function p(){var a=Math.floor(Date.now()/1e3),b=g.scry(document,"abbr","timestamp");for(var c=0,d=b.length;c<d;++c){var e=h.get(b[c]);e=q(a-e.time||0,e["short"],e.forceseconds);e&&(b[c].innerText=e)}clearTimeout(o);o=k(p,l)}function q(a,b,c){__p&&__p();if(a>12*n)return null;if(a<2*m&&c)return j._({"*":"il y a {number} secondes"},[j._param("number",a,[0])]);if(a<2*m)return j._("\u00c0 l\u2019instant");if(a<n){c=Math.floor(a/m);return b?j._({"*":"{number} min"},[j._param("number",c,[0])]):j._({"*":"il y a {number} minutes"},[j._param("number",c,[0])])}c=Math.floor(a/n);if(b)return j._("{number} hr",[j._param("number",c)]);else if(c==1)return j._("Il y a une heure");return j._({"*":"il y a {number} heures"},[j._param("number",c,[0])])}p();i.listen("m:update-timestamps",null,function(){p()});f.renderTimestamp=q}),null);
__d("VirtualCursorStatus",["Event","UserAgent","emptyFunction","setImmediate"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k=null,l=null;function m(){l||(l=g.listen(window,"blur",function(){k=null,n()}))}function n(){l&&(l.remove(),l=null)}function a(a){k=a.keyCode,m()}function b(){k=null,n()}if(typeof window!=="undefined"&&window.document&&window.document.createElement){c=document.documentElement;if(c)if(c.addEventListener)c.addEventListener("keydown",a,!0),c.addEventListener("keyup",b,!0);else if(c.attachEvent){d=c.attachEvent;d("onkeydown",a);d("onkeyup",b)}}var o={isKeyDown:function(){return!!k},getKeyDownCode:function(){return k}},p=!1,q=!1,r=null,s=!1;function t(a){__p&&__p();var b=new Set(),c=o.isKeyDown(),d=a.clientX,e=a.clientY,f=a.isPrimary,g=a.isTrusted,i=a.offsetX,j=a.offsetY,k=a.pointerType,l=a.mozInputSource,m=a.WEBKIT_FORCE_AT_MOUSE_DOWN,n=a.webkitForce;a=a.target;var r=a.clientWidth;a=a.clientHeight;d===0&&e===0&&i>=0&&j>=0&&q&&g&&l==null&&b.add("Chrome");p&&q&&!c&&n!=null&&n<m&&i===0&&j===0&&l==null&&b.add("Safari-edge");d===0&&e===0&&i<0&&j<0&&q&&l==null&&b.add("Safari-old");!p&&!q&&c&&f===!1&&g&&k===""&&d===0&&e===0&&i===0&&j===0&&l==null;!p&&!q&&!c&&g&&h.isBrowser("IE >= 10")&&l==null&&(d<0&&e<0?b.add("IE"):(i<0||i>r)&&(j<0||j>a)&&b.add("MSIE"));l===0&&g&&b.add("Firefox");return b}function u(){p=!0,j(function(){p=!1})}function v(){q=!0,j(function(){q=!1})}function w(a,b){r===null&&(r=t(a));s=r.size>0;a=a.target.getAttribute("data-accessibilityid")==="virtual_cursor_trigger";b(s,r,a);j(function(){s=!1,r=null})}f={isVirtualCursorTriggered:function(){return s},add:function(a,b){b===void 0&&(b=i);var c=function(a){return w(a,b)};a.addEventListener("click",c);var d=g.listen(a,"mousedown",u),e=g.listen(a,"mouseup",v);return{remove:function(){a.removeEventListener("click",c),d.remove(),e.remove()}}}};e.exports=f}),null);
__d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f,g,h){a={init:function(a){var b=this;a.forEach(function(a){h.add(a,b._log)},this)},_log:function(a,b,c){c===void 0&&(c=!1),a&&new g().setIndicatedBrowsers(b).setIsVirtualCursorAction(c).log()}};e.exports=a}),null);
__d("ArtillerySegment",["invariant","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=0;a=function(){"use strict";__p&&__p();function a(a){a||g(0,1496),"category"in a&&"description"in a||g(0,3138,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(i++).toString(36)}),this.$3=[]}var b=a.prototype;b.getID=function(){return this.$2.id};b.begin=function(){this.$2.begin=h();return this};b.end=function(){this.$2.end=h();return this};b.appendChild=function(){var a=this;this.$1&&g(0,3139,this.$2.description);for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];c.forEach(function(b){a.$3.push(b.getID())});return this};b.setPosted=function(){this.$1=!0;return this};b.getPostData=function(){return babelHelpers["extends"]({},this.$2,{id:this.$2.id,children:this.$3.slice()})};return a}();e.exports=a}),null);
__d("ArtillerySequence",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0;a=function(){"use strict";__p&&__p();function a(a){a||g(0,1496),"description"in a||g(0,1497,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(h++).toString(36)}),this.$3=[]}var b=a.prototype;b.getID=function(){return this.$2.id};b.addSegment=function(){var a=this;this.$1&&g(0,1498,this.$2.description);for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];c.forEach(function(b){a.$3.push(b.getID())});return this};b.setPosted=function(){this.$1=!0;return this};b.getPostData=function(){return babelHelpers["extends"]({},this.$2,{id:this.$2.id,segments:this.$3.slice()})};return a}();e.exports=a}),null);
__d("ArtilleryTrace",["ArtillerySegment","ArtillerySequence","invariant"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=function(){"use strict";__p&&__p();function a(){this.$1=!1,this.$3=void 0,this.$4={},this.$5={},this.$6=[],this.$7=[],this.$8={},this.$9=[],this.$10=null}var b=a.prototype;b.createSequence=function(a){this.$1&&i(0,4917);a=new h(a);this.$6.push(a);return a};b.createSegment=function(a){this.$1&&i(0,4918);a=new g(a);this.$7.push(a);return a};b.markSegment=function(a,b){this.$1&&i(0,4919);this.$8[b]=a.getID();return this};b.connectTrace=function(a,b){this.$1&&i(0,4919);b=b||this.$2;b||i(0,4920);this.$9.push({segment:a.getID(),trace:b});return this};b.setID=function(a,b){!this.$2&&!this.$3||i(0,4921);this.$2=a;this.$3=b;return this};b.getID=function(){return this.$2};b.getArtillery2ID=function(){return this.$3};b.addProperty=function(a,b){this.$4[a]=b;return this};b.addTagset=function(a,b){this.$5[a]=b;return this};b.addActivePolicies=function(a){this.addTagset("active_policies",a);this.addTagset("policy",a);return this};b.getProperty=function(a){return this.$4[a]};b.getTagset=function(a){return this.$5[a]};b.getActivePolicies=function(){return this.getTagset("active_policies")};b.post=function(){this.$1&&i(0,4922,this.$2);this.$1=!0;var a=this.$10;a&&a({id:this.$2,artillery2Id:this.$3,properties:this.$4,tagsets:this.$5,sequences:this.$6.map(function(a){return a.setPosted().getPostData()}),segments:this.$7.map(function(a){return a.setPosted().getPostData()}),marks:Object.assign({},this.$8),connections:this.$9.slice()})};b.setOnPost=function(a){this.$10&&i(0,4923);this.$10=a;return this};b.isPosted=function(){return this.$1};return a}();e.exports=a}),null);
__d("ServiceWorkerRegistration",["Promise","BrowserPaymentHandlerConfig","ClientServiceWorkerMessage","EventListener","Run","promiseDone"],(function(a,b,c,d,e,f,g,h,i,j,k,l){__p&&__p();var m=!!navigator.serviceWorker,n={},o=Object.freeze({name:"Facebook Payments",method:"basic-card",capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}}),p=Object.freeze({name:"Facebook Payments",method:self.location.origin,capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}});function q(){var a=navigator.serviceWorker;if(!m||!a)throw new Error("serviceWorker is not supported in this browser");return a}var r={isSupported:function(){return m},registerWorkerIfUnregisteredAfterDD:function(a){k.onAfterLoad(function(){r.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){__p&&__p();var b=this;if(n[a])return n[a];var c=q();n[a]=new g(function(d,e){b.getWorkerRegistration(a).done(function(b){if(!b){var f=j.listen(window,"message",function(a){a.data&&a.data.command&&a.data.command==="ServiceWorkerInstallError"&&e()});l(g.resolve(c.register(a,{updateViaCache:"all"})),function(){f.remove(),l(g.resolve(c.ready),d)})}else d(b),h.enabled&&b.paymentManager&&b.paymentManager.instruments&&(b.paymentManager.instruments.set("Facebook",p),b.paymentManager.instruments.set("FacebookBasicCard",o))})});n[a].done(function(){n[a]=null});return n[a]},unregisterControllingWorker:function(){return new g(function(a,b){b=new i("unregister",{},function(){a(!0)});b.sendViaController()})},getWorkerRegistration:function(a){var b=q();return g.resolve(b.getRegistration(a))},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?g.resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=r}),null);
__d("Artillery",["ArtilleryTrace","Banzai","ClientServiceWorkerMessage","Run","ServiceWorkerRegistration","forEachObject","invariant","mixInEventEmitter","performance"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){__p&&__p();var p=!1,q=!1,r=[],s,t,u,v={},w={},x=!1,y=!1;function z(){if(p)return;p=!0;h.subscribe(h.SHUTDOWN,function(){B._postAll()})}function A(){t=null,s=null,w={},v={},u=null,y=!1}var B={isEnabled:function(){return q},createTrace:function(){z();var a=new g();a.setOnPost(function(a){B.emitAndHold("posttrace",a)});r.push(a);return a},getPageTrace:function(){__p&&__p();s||m(0,4261);if(u)return u;var a=B.createTrace().setID(s,t);l(v,function(b,c,d){a.addProperty(c,b)});l(w,function(b,c,d){a.addTagset(c,b)});u=a;return a},setPageProperties:function(a){v=a},addPageTagset:function(a,b){u==null?w[a]=b:u.addTagset(a,b)},setActivePolicies:function(a){this.addPageTagset("active_policies",a),this.addPageTagset("policy",a)},getPageActivePolicies:function(){return this.getPageTagset("active_policies")},enableLogServiceWorker:function(){k.isSupported()&&(x=!0)},getPageProperty:function(a){if(u==null)return v[a];else return u.getProperty(a)},getPageTagset:function(a){if(u==null)return w[a];else return u.getTagset(a)},enable:function(){q=!0,y||(j.onLeave(A),y=!0)},disable:function(){q=!1},setPageTraceID:function(a,b){if(s===a&&t===b)return;!s&&!t||m(0,4262);s=a;t=b;if(x&&o&&o.timing&&o.timing.navigationStart){a=new i("asw-sendStartupData",{traceID:t,windowStart:o.timing.navigationStart},null);a.sendViaController()}},addPiggyback:function(a,b){window.CavalryLogger&&window.CavalryLogger.getInstance().addPiggyback(a,b)},_postAll:function(){r.forEach(function(a){return!a.isPosted()&&a.post()})}};n(B,{posttrace:!0});e.exports=B}),null);
__d("Keys",[],(function(a,b,c,d,e,f){"use strict";e.exports=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222})}),null);
__d("once",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=g(a);for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b}function g(a){__p&&__p();var b=a,c;a=function(){if(b){for(var a=arguments.length,d=new Array(a),e=0;e<a;e++)d[e]=arguments[e];c=b.apply(this,d);b=null}return c};return a}e.exports=a}),null);
__d("FRXDiglossiaQE",["Event","FRXDiglossiaExperiment","QE2Logger"],(function(a,b,c,d,e,f,g,h,i){var j="frx_diglossia_experiments",k={maybeExposeOnClick:function(a){g.listen(a,"click",function(a){k.maybeExpose()})},maybeExpose:function(){h.isEligibleForDiglossia&&k.expose()},expose:function(){i.logExposureForUser(j)}};e.exports=k}),null);
__d("ServiceWorkerURLCleaner",[],(function(a,b,c,d,e,f){__p&&__p();var g=/sw_fnr_id=\d+&?/,h=/fnr_t=\d+&?/,i=!1,j=!1;a={removeRedirectID:function(){__p&&__p();if(i)return j;i=!0;if(location.search&&g.test(location.search)){j=!0;if(history!==void 0&&typeof history.replaceState==="function"){var a=location.toString().replace(g,"").replace(h,"").replace(/\?$/,"");history.replaceState({},document.title,a)}}return j}};e.exports=a}),null);