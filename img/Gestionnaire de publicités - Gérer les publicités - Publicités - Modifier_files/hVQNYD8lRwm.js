if (self.CavalryLogger) { CavalryLogger.start_js(["06d7Z"]); }

__d("VisibilityListener",[],(function(a,b,c,d,e,f){"use strict";a={getHiddenTime:function(a,b){throw new Error("not supported here")},supported:function(){return!1}};e.exports=a}),null);
__d("ArtilleryRequestDataCollection",["Arbiter","ArtilleryRequestDataCollector","BigPipe","PageEvents","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j,k){"use strict";__p&&__p();var l=12e4,m={},n={},o=!1;function p(a){delete m[a],clearTimeout(n[a]),delete n[a]}a={init:function(){__p&&__p();var a=this;if(o)return;g.subscribe(i.Events.init,function(b,c){b=c.arbiter;b.subscribeOnce(j.AJAXPIPE_FIRST_RESPONSE,function(b,c){b=c.lid;c=c.quickling;c||a.start(b)},"new")});o=!0},start:function(a){var b=this;if(m[a])return;var c=new h().start();m[a]=c;n[a]=k(function(){b.disable(a)},l)},finish:function(a){var b=m[a];if(b){b=b.finish();p(a);return b}return{sampleRecorder:null,profilingCountersData:[],userTimingProfilerData:null,timeSliceData:[]}},getCollector:function(a){return m[a]},disable:function(a){var b=m[a];b&&(b.disable(),p(a))}};e.exports=a}),null);
__d("NavigationMetricsEnumJS",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"})}),null);
__d("ResourceTimingMetricsEnumJS",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"})}),null);
__d("ImageTimingHelper",["Arbiter","BigPipe","URI"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j={},k={};function l(a){__p&&__p();var b=a.lid,c=a.pagelet,d=a.images,e=a.timeslice,f=a.ts,g=j[b];g||(g=j[b]=[]);d.forEach(function(a){try{var b=new i(a);a=b.setFragment("").toString()}catch(a){return}if(k[a])return;k[a]=!0;g.push({pagelet:c,timeslice:e,ts:f,uri:a})})}g.subscribe(h.Events.init,function(a,b){b.lid&&b.lid!=="0"&&b.arbiter.subscribe("images_displayed",function(a,b){l(b)})});g.subscribe("MRenderingScheduler/images_displayed",function(a,b){l(b)});e.exports.getImageTimings=function(a){return j[a]||[]}}),null);
__d("NavigationTimingHelper",["NavigationMetricsEnumJS","forEachObject","performance"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();function j(a,b){var c={};h(g,function(d){var e=b[d];e&&(c[d]=e+a)});return c}var k={getAsyncRequestTimings:function(a){if(!a||!i.timing||!i.getEntriesByName)return void 0;a=i.getEntriesByName(a);return a.length===0?void 0:j(i.timing.navigationStart,a[0])},getPerformanceNavigationTiming:function(){if(!i.timing||!i.getEntriesByType)return{};var a=i.getEntriesByType("navigation");return!a.length?{}:j(i.timing.navigationStart,a[0])},getNavTimings:function(){if(!i.timing)return void 0;var a=babelHelpers["extends"]({},j(0,i.timing),k.getPerformanceNavigationTiming());return j(0,a)}};e.exports=k}),null);
__d("ResourceTimingBootloaderHelper",["Bootloader","ErrorUtils","ImageTimingHelper","ResourceTimingMetricsEnumJS","ResourceTimingsStore","ResourceTypes","URI","forEachObject","isEmpty","performance"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){__p&&__p();var q=500,r=[],s={},t={},u={},v=[".mp4",".m4v",".mpd","m4a"],w=new Set(["bootload","js_exec","start_bootload","tag_bootload"]);function x(a){for(var b=0;b<v.length;b++){var c=v[b];if(a.endsWith(c))return!0}return!1}function y(a){__p&&__p();var b=new Map();k.getMapFor(a).forEach(function(a){if(a.requestSent!=null){var c=b.get(a.uri);c!=null?c.push(a):b.set(a.uri,[a])}});b.forEach(function(a){return a.sort(function(a,b){return a.requestSent-b.requestSent})});return b}function z(a,b,c,d){__p&&__p();var e=a.get(b);if(e==null){var f=b.indexOf("?");if(f!==-1){b=b.substring(0,f);e=a.get(b)}}if(e!=null)for(var f=0;f<e.length;f++){a=e[f];b=a.requestSent;a=a.responseReceived;if((c==null||b!=null&&b<=c)&&(d==null||a!=null&&a>=d))return e.splice(f,1)[0]}return null}function A(a,b,c,d,e,f,g){__p&&__p();if(!p.timing||!p.getEntriesByType)return null;var h={},m=p.timing.navigationStart;c&&(h=i.getImageTimings(d).sort(function(a,b){return a.ts-b.ts}).reduce(function(a,b){if(a[b.uri])return a;a[b.uri]=b.pagelet;return a},{}));c=Array.from(p.getEntriesByType("resource"));d=c.filter(function(a){return a.duration>=0&&a.startTime!=null&&a.startTime+m>b&&(e==null||a.responseEnd==null||a.responseEnd+m<e)});d.sort(function(a,b){return a.startTime-b.startTime});c=d.length;var n=0,o=0,q=0,r=0,s=0,v=y(l.XHR),w=y(l.CSS),A=y(l.JS);for(var E=0;E<d.length;E++){var F=d[E],G="",H="",I=void 0,J=F.initiatorType;switch(J){case"css":case"link":case"script":J=k.parseMakeHasteURL(F.name);if(!J)continue;var K=J[0];J=J[1];if(J==="css"||J==="js"){var L=J==="css"?w:A;I=z(L,F.name,F.startTime+m,F.responseEnd+m);if(I!=null&&g){H=J;G=I.uid;break}else{H=J;L=u[F.name]||q++;G=L+"_"+K}}else{J=D(F.name);L=J[0];H=J[1];G=o+++"_"+L}break;case"img":G=o+++"_"+B(F.name);H="img";break;case"iframe":G=r+++"_"+B(F.name)+C(F.name);H="iframe";break;case"xmlhttprequest":if(f){K=B(F.name);J=C(F.name);if(x(J)){G=s+++"_"+K+J;H="video";break}else{I=z(v,F.name,F.startTime+m,F.responseEnd+m);if(I!=null){H=l.XHR;G=I.uid;break}}}default:continue}L={};K=Object.keys(j);for(var J=0;J<K.length;J++){var M=j[K[J]],N=F[M];N&&(L[M]=N+p.timing.navigationStart)}if(I!=null){M=I;N=M.requestSent;J=M.responseReceived;if(b!=null&&N!=null&&N<b||e!=null&&J!=null&&J>e)continue;L.requestSent=N;L.responseReceived=J}L.type=H;L.desc=G;if(I!=null&&(H===l.JS||H===l.CSS||H===l.XHR)){K=k.getAnnotationsFor(H,I.uid);K!=null&&(L.annotations=K)}H=="img"&&Object.prototype.hasOwnProperty.call(h,F.name)&&(L.pagelet=h[F.name]);L.transferSize=F.transferSize;L.encodedBodySize=F.encodedBodySize;a[F.name]==void 0&&(a[F.name]=[]);n++;a[F.name].push(L)}return g?{numValidEntries:c,numSuccessfulMetrics:n}:null}function B(a){a=new m(a).getDomain();return a}function C(a){a=new m(a).getPath();return a}function D(a){return[B(a),"img"]}function E(a){__p&&__p();var b=Object.keys(a).filter(function(a){return a.startsWith("start_bootload/")}).sort(function(b,c){return a[b]-a[c]}).map(function(a){return a.substring(a.indexOf("/")+1)});b.forEach(function(b){return w.forEach(function(c){c=c+"/"+b;a[c]!=null&&(s[c]=a[c])})});r=r.concat(b);if(r.length>q){b=r.splice(0,r.length-q);b.forEach(function(a){return w.forEach(function(b){s[b+"/"+a]&&delete s[b+"/"+a]})})}}a={addPastBootloaderMetricsToResourceTimings:function(b,c){__p&&__p();b===void 0&&(b={});c===void 0&&(c={});var a=g.getURLToHashMap();n(b,function(b,d){__p&&__p();var e=a[d];if(!e)return;var f=new Map();f.set("bootloader_hash",e);w.forEach(function(a){var b=a+"/"+e;b=c[b]||s[b];b!=null&&f.set(a,b)});f.size>0&&b.forEach(function(a){if(a.requestSent||a.responseReceived)return;f.forEach(function(b,c){return a[c]=b})})})},mergeBootloaderMetricsAndResourceTimings:function(a,b,c){__p&&__p();a===void 0&&(a={});b===void 0&&(b={});c===void 0&&(c=!0);o(u)&&(u=g.getURLToHashMap());var d=new Map();n(u,function(a,b){d.set(a,b)});var e=[];n(b,function(b,c){__p&&__p();var f=c.indexOf("/");if(f===-1)return;var g=c.substring(0,f);if(!w.has(g))return;e.push(c);var h=c.substring(f+1);c=d.get(h);if(!c){c=h;h=u[c];if(!h)return}c.startsWith("data:")&&(c="inlined resource: "+h);a[c]==null&&(a[c]=[{}]);a[c].forEach(function(a){a.bootloader_hash=h,a[g]=b})});c||(E(b),e.forEach(function(a){return delete b[a]}));return a},getLastTTIAndE2EImageResponseEnds:function(a,b,c){__p&&__p();var d={TTI:a,E2E:b};if(!p.timing)return d;var e=c.filter(function(b){return b.ts<=a}).map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{}),f=c.map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{});for(var g in t)t[g].forEach(function(a){a.type==="img"&&(e[g]&&(d.TTI=Math.max(d.TTI,a.responseEnd)),f[g]&&(d.E2E=Math.max(d.E2E,a.responseEnd)))});return d},getMetrics:function(a,b,c,d,e,f){t={};o(u)&&(u=g.getURLToHashMap());a=A(t,a,b,c,d,e,f);return{data:t,diagnostics:a}}};e.exports=a}),null);
__d("PerfXFlusher",["Banzai","invariant"],(function(a,b,c,d,e,f,g,h){var i="perfx_custom_logger_endpoint",j=["perfx_page","perfx_page_type","lid"];function k(a){j.forEach(function(b){return h(b in a,'PerfXFlusher: Field "%s" missing in the PerfX payload',b)})}a={flush:function(a){k(a),g.post(i,a,{signal:!0})},registerToSendWithBeacon:function(a){g.registerToSendWithBeacon(i,a)}};e.exports=a}),null);
__d("QuicklingRefreshOverheadUtil",["QuicklingConfig","WebStorage","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=null,k=1e4;a={onQuicklingStart:function(){j=i()},onQuicklingVersionMatch:function(){j=null},onQuicklingRefreshStart:function(){if(!g.logRefreshOverhead||j===null)return;var a=h.getSessionStorage();if(!a)return;a.setItem("quickling_refresh_overhead",(i()-j).toString());a.setItem("quickling_refresh_start",Date.now().toString())},getOverhead:function(a){__p&&__p();if(!g.logRefreshOverhead)return null;var b=h.getSessionStorageForRead();if(!b)return null;var c=b.getItem("quickling_refresh_start");if(c==null)return null;if(a-parseInt(c,10)>k)return null;a=b.getItem("quickling_refresh_overhead");return a!=null?parseFloat(a):null}};e.exports=a}),null);
__d("pageLoadedViaSWCache",[],(function(a,b,c,d,e,f){function a(){return self.__SW_CACHE__===1}e.exports=a}),null);
__d("PerfXLogger",["ArtilleryOnUntilOffLogging","BanzaiODS","DataAttributeUtils","NavigationMetrics","NavigationTimingHelper","PerfXFlusher","PerfXSharedFields","QuicklingRefreshOverheadUtil","VisibilityListener","forEachObject","pageLoadedViaSWCache","performanceAbsoluteNow","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){__p&&__p();var t={},u={},v=65*1e3,w=["e2e","tti","all_pagelets_displayed","all_pagelets_loaded","artillery_disable_time"],x={},y={_listenersSetUp:!1,_uploadEarly:!1,_alreadyUploadedEarly:!1,_setupListeners:function(){__p&&__p();var a=this;if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();l.registerToSendWithBeacon(function(){var b=[];p(t,function(c,d){if(!t[d].sent){c=a.getPayload(d,"unload fired");c!=null&&b.push(c)}});t={};return b});this._listenersSetUp=!0},_init:function(a){__p&&__p();var b=a.lid;if(b==null)return;this._alreadyUploadedEarly=!1;this._uploadEarly=!!a.upload_perfx_early;delete a.upload_perfx_early;var c=u[b]||[];delete u[b];if(a.sw_controlled_tags){if(navigator.serviceWorker&&navigator.serviceWorker.controller)for(var d=0;d<a.sw_controlled_tags.length;d++)c.push(a.sw_controlled_tags[d]);delete a.sw_controlled_tags}t[b]=babelHelpers["extends"]({tags:new Set(c),sent:!1},a);this._registerTimeoutSendback(b);this._setupListeners()},initWithNavigationMetricsLID:function(a,b){__p&&__p();var c=j.getFullPageLoadLid();if(!c)return;this._init(babelHelpers["extends"]({},b,{lid:c}));if(a&&a.always)for(var b=0;b<a.always.length;b++)y.addTag(c,a.always[b]);if(a&&a.swCache&&q())for(var b=0;b<a.swCache.length;b++)y.addTag(c,a.swCache[b])},init:function(a,b){b!=null&&a.lid!=null&&(x[a.lid]=b),this._init(a)},addTag:function(a,b){this._alreadyUploadedEarly&&h.bumpEntityKey("PerfXLateTag",b);var c=t[a];if(c){c.tags.add(b);return}u[a]||(u[a]=[]);u[a].push(b)},addTagWithNavigationMetricsLID:function(a){this._alreadyUploadedEarly&&h.bumpEntityKey("PerfXLateTag",a);var b=j.getFullPageLoadLid();if(!b)return;y.addTag(b,a)},_registerTimeoutSendback:function(a){var b=this,c=this._getFetchStart(a),d=v;c!=null&&(d-=r()-c);s(function(){return b._uploadPayload(a,"sendback time out")},d)},_subscribeToNavigationMetrics:function(){__p&&__p();var a=this;j.addRetroactiveListener(j.Events.EVENT_OCCURRED,function(b,c){if(!(b in t))return;w.includes(c.event)&&Object.prototype.hasOwnProperty.call(c,"timestamp")&&c.timestamp!=null&&(t[b][c.event]=c.timestamp);c.event==="all_pagelets_displayed"&&a._uploadEarly&&(w.forEach(function(a){Object.prototype.hasOwnProperty.call(c,a)&&c[a]!=null&&(t[b][a]=c[a])}),a._uploadPayload(b),a._alreadyUploadedEarly=!0)});j.addRetroactiveListener(j.Events.NAVIGATION_DONE,function(b,c){var d=c.serverLID;if(!(d in t))return;w.forEach(function(a){Object.prototype.hasOwnProperty.call(c,a)&&c[a]!=null&&(t[d][a]=c[a])});a._uploadPayload(d)})},_getPayloadWithOffset:function(a,b,c){__p&&__p();a=t[a];if(a==null)return null;var d=Object.assign({},a),e=document.querySelector('[id^="hyperfeed_story_id"]');if(e){e=JSON.parse(i.getDataFt(e));e&&(d.mf_query_id=e.qid)}d.tags=Array.from(a.tags);d.art_id||(d.artillery_disable_time=g.lastDisableTime());this._adjustValues(d,b);d.fetch_start=b;if(d.perfx_page_type==="normal"){e=k.getNavTimings();e!=null&&e.navigationStart!=null&&(d.nav_to_fetch=b-e.navigationStart);a=n.getOverhead(b);a!==null&&(d.quickling_refresh_overhead=a)}c!=null&&(d.sendback_reason=c);m.addCommonValues(d);o.supported()&&d.fetch_start&&d.all_pagelets_displayed&&d.tti&&d.e2e&&(d.tab_hidden_time_dd=o.getHiddenTime(d.fetch_start,d.fetch_start+d.all_pagelets_displayed),d.tab_hidden_time_tti=o.getHiddenTime(d.fetch_start,d.fetch_start+d.tti),d.tab_hidden_time_e2e=o.getHiddenTime(d.fetch_start,d.fetch_start+d.e2e));window&&window.location&&window.location.pathname&&(d.request_uri=window.location.pathname);delete d.sent;return d},_uploadPayload:function(a,b){if(t[a]!=null&&!t[a].sent){b=this.getPayload(a,b);b!=null&&(l.flush(b),t[a].sent=!0)}},getPayload:function(a,b){return this._getPayloadWithOffset(a,this._getFetchStart(a),b)},_getFetchStart:function(a){if(!(a in t))return null;var b=t[a].perfx_page_type;if(b=="quickling")if(!(a in x))return null;else b=k.getAsyncRequestTimings(x[a]);else b=k.getNavTimings();return!b||!b.fetchStart?null:b.fetchStart},_adjustValues:function(a,b){w.forEach(function(c){Object.prototype.hasOwnProperty.call(a,c)&&(a[c]-=b)})}};e.exports=y}),null);