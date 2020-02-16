if (self.CavalryLogger) { CavalryLogger.start_js(["QAAvA"]); }

__d("NTAnnounceSubscription",["Stratcom"],(function(a,b,c,d,e,f,g){"use strict";a={subscribe:function(a,b){g.listen(a,null,function(a){b(a.getData())})}};e.exports=a}),null);
__d("MMultiPhotoUploaderAttachmentState",[],(function(a,b,c,d,e,f){__p&&__p();var g={SENDING:"sending",POLLING_TAG_SUGGESTIONS:"polling",UPLOADED:"uploaded",ERROR:"error"};g.getDefaultState=function(){var a={};for(var b in g){if(!Object.prototype.hasOwnProperty.call(g,b)||typeof g[b]!=="string")continue;a[g[b]]=0}return a};e.exports=g}),null);
__d("MScrollPositionSaver",["MViewport","Stratcom","Vector","$","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j,k){__p&&__p();var l,m={getElementPositionY:function(a){return i.getPos(a).y},getScrollPosition:function(a){__p&&__p();var b=j("root");l=a;a=a?a.scrollTop:g.getScrollTop();if(a<g.getHeight()/3)return{element:document.body,hiddenRatio:0};do{var c=[];for(var d=0;d<b.childNodes.length;d++){var e=b.childNodes[d];if(e.nodeType!==1)continue;var f=document.defaultView.getComputedStyle(e,"");f.display!="none"&&f.visibility!="hidden"&&c.push(e)}if(!c.length)break;f=a;c[0].offsetParent&&(f-=m.getElementPositionY(c[0].offsetParent));e=0;d=c.length-1;while(e<=d){var i=Math.floor((e+d)/2);c[i].offsetTop<=f?e=i+1:d=i-1}b=c[Math.max(d,0)]}while(!h.hasSigil(b,"marea"));i=Math.max(a-m.getElementPositionY(b),0);f=0;b.offsetHeight&&(f=Math.min(i/b.offsetHeight,1));return{element:b,hiddenRatio:f}},setScrollPosition:function(a,b){var c=a.element.offsetHeight*a.hiddenRatio;a=m.getElementPositionY(a.element)+parseInt(c,10);c=b?b.scrollTop:g.getScrollTop();(a>0||c>0)&&(b?b.scrollTop=a:g.scrollTo(0,a))}},n=null,o=null,p=g.isLandscape(),q=!1,r=!1;function s(){var a=l?l.scrollTop:g.getScrollTop();a!=n&&(o=m.getScrollPosition(l),n=a);r=!1}h.listen("scroll",null,function(a){if(a.getType()=="scroll"&&q)return;r||(k(s,50),r=!0)});h.listen("resize",null,function(){q=!0,k(function(){var a=g.isLandscape();o&&p!==a&&(p=a,m.setScrollPosition(o,l),s());q=!1},200)});e.exports=m}),null);
__d("ModalDialogURIWhitelistForNavigationLogging",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADD_FEATURE_PHOTOS:"/profile/intro/edit/photos/",DESCRIBE_WHO_YOU_ARE:"/profile/intro/edit/bio/"})}),null);
__d("MModalDialog",["CSS","DOM","MHistory","MLinkHack","ModalDialogURIWhitelistForNavigationLogging","MPageCache","MPageController","MRequest","MRequestGateway","MRequestTypes","MScrollPositionSaver","MURI","MViewport","ScriptPath","Stratcom","URI","$","fbt","ge","gkx","setTimeout","setTimeoutAcrossTransitions","FWLoader"],(function(a,b,c,d,e,f,g,h,i,aa,ba,j,ca,da,ea,fa,k,l,m,n,o,p,q,ga,r,ha,ia,ja){__p&&__p();var s=b("FWLoader").FW,ka="dialog-ignore-subtree-links",t="mds",u="mdf",v="mdp",w="fw:modal-dialog:close",x="m:modal-dialog:step-change",y="m:modal-dialog:initial-load",z="m:modal-dialog:close",A="m:modal-dialog:will-close",B,C=!1,D=!1,E=!1,F,G,H,I,J,K,L,M=[],N=null,O=null,P;function a(){return D}function c(a,b,c){O=b,Q(a,c)}function Q(a,b,c,d){__p&&__p();d===void 0&&(d={});a instanceof p&&(a=a.toString());Ca(a)&&n.openOverlayView(a);if(window.FW_ENABLED){b&&o.listen(w,null,function(a){o.removeCurrentListener(),b&&b(a.getData())});var e=encodeURIComponent(a);s.openInNewWebView("fb://facewebmodal/f?href="+e);return}if(D)throw new Error("A modal dialog is already open.");h.hide(Z());h.setContent(ya(),null);D=!0;W(!0);F=b;c?U(c):U(ga._("Chargement..."));na(!0);L=k.getScrollPosition();S(a,babelHelpers["extends"]({},d,{firstStep:!0}));h.hide(q("viewport"));h.show(B);m.scrollToHeader();K=m.getUseableHeight()-q("mDialogHeader").offsetHeight}function R(a){a===void 0&&(a={});if(window.FW_ENABLED){s.broadcastEvent(w,null,a,1);s.dismissModalDialog(!0);return}Ca(H)&&n.closeOverlayView(H);!!a&&a.goBack===!0?(N=pa.bind(null,a),window.history.go(-1)):pa(a)}function S(a,b){b===void 0&&(b={});a instanceof p&&(a=a.toString());b.dontPushState||la(O,a,b);if(b.hideNavBar){b=r("mDialogHeader");b!=null&&h.hide(b)}wa(a)}function la(a,b,c){__p&&__p();c===void 0&&(c={});G=b||G;M.push(m.getScrollPos());if(!window.FW_ENABLED){a=a||i.getPath();b=new l(a).addQueryData(i.SOFT_STATE_KEY).addQueryData(t,G.toString());a===O&&(ha("726410")&&(b=b.addQueryData(v,1)));c.firstStep?b.addQueryData(u,1):b.addQueryData(u,void 0);i.pushState(b.toString())}}function T(){o.invoke(x);window.FW_ENABLED?sa(!0):(E=!0,window.history.go(-1));if(M.length){var a=M.pop();ia(function(){m.scrollTo(a.x,a.y)})}}function U(a){h.setContent(I,a)}function ma(){return I.innerText||null}function V(a){g.conditionClass(q("modalDialog"),"spin",a)}function na(a){h.scry(q("mDialogHeader"),"button").forEach(function(b){b.disabled=!a})}function d(a){oa(),D=!0,a instanceof p&&(a=a.toString()),H=a,o.invoke(x)}function oa(){__p&&__p();var a=q("modalDialog");if(B===a)return;B=a;o.addSigil(B,"context-layer-root");I=h.find(a,"div","dialog-title");P=h.listen(a,"click","dialog-cancel-button",function(a){a.kill(),R({canceled:!0,goBack:!0})});h.listen(a,"click","dialog-back-button",function(a){a.kill(),T()});h.listen(a,"click",null,function(a){__p&&__p();var b=a.getNode("tag:a");if(!b)return;if(a.getPrevented())return;var c=a.getNode(ka);if(b.getAttribute("rel")=="ignore"||c)return;a.kill();if(o.hasSigil(b,"cancel-link")){T();return}aa.remove(b);c=b.getAttribute("href");ja(S.bind(null,c),200)});window.FW_ENABLED?J=[]:o.listen("m:history:change",null,qa);o.listen("m:page:unload",null,function(){!window.FW_ENABLED&&D&&R({canceled:!0})})}function pa(a){__p&&__p();o.invoke(A);h.hide(B);var b=r("mDialogHeader");b!=null&&h.show(b);h.show(q("viewport"));L&&k.setScrollPosition(L);F&&F(a);o.invoke(x);h.setContent(q("modalDialogView"),null);o.invoke(z);D=!1}function qa(a){__p&&__p();var b=new p(a.getData().path).getQueryData(),c=b[t];if(N!==null){if(c)a.kill(),window.history.go(-1);else{var d=N;N=null;d&&d()}return}if(!D){c&&!b[v]&&(a.kill(),window.history.go(-1));return}a.prevent();if(!c){R({canceled:!0});return}W(!!b[u]);if(c===G.toString())return;ea.stopAllRequests();G=c;if(!E&&j.isPageCached(c,ca.HISTORY_EXPIRE_MS)){d=j.getCachedPage(c);d.listen("complete",Y.bind(this,c));d.process()}else E=!1,wa(c)}function e(a){this._customData=a}function ra(){return this._customData}function sa(a){if(J.length===0)return;var b=J.pop();J.length===0&&W(!0);a?S(b.uri):(h.setContent(q("modalDialogView"),b.content),xa(b.rightButtons),U(b.title),Y(b.uri))}function W(a){g.conditionClass(q("mDialogHeader"),"firstStep",a),C=a}function X(){return C}function ta(){h.hide($()),h.show(Z())}function ua(){h.show($()),h.hide(Z())}function va(){h.hide($()),h.hide(Z())}function wa(a){__p&&__p();function b(a){var b=document.createDocumentFragment();while(a.firstChild)b.appendChild(a.removeChild(a.firstChild));return b}V(!0);X()||o.invoke(x);window.FW_ENABLED&&(J.push({content:b(q("modalDialogView")),uri:H,title:ma(),rightButtons:b(q("modalDialogHeaderButtons"))}),W(!1));b=new da(new l(a).toString()).setType(fa.TRANSITION);b.setMethod("GET");b.listen("postprocess",function(b){window.FW_ENABLED||j.setCachedPage(a,b.response),Y(a)});b.send()}function Y(a){window.FW_ENABLED||(q("modalDialogView").style.minHeight=K+"px"),V(!1),H=a,X()&&o.invoke(y,null,{uri:a}),o.invoke("m:ajax:complete")}function xa(a){h.setContent(ya(),a)}function ya(){return q("modalDialogHeaderButtons")}function Z(){return h.find(B,"*","dialog-cancel-button")}function $(){return h.find(B,"*","dialog-back-button")}function za(a){a?h.replace(Z(),a):h.hide(Z())}function Aa(a){D?S(a):Q(a)}function Ba(){var a=r("mDialogHeader");a!=null&&h.hide(a)}function Ca(a){return Object.values(ba).indexOf(a)>-1}function Da(){P.remove()}f.init=oa;f._replaceButtons=xa;f._replaceCancelButton=za;f.STEP_CHANGE_EVENT=x;f.STEP_KEY=t;f.INITIAL_LOAD_EVENT=y;f.CLOSE_EVENT=z;f.WILL_CLOSE_EVENT=A;f.close=R;f.hideHeader=Ba;f.getIsFirstStep=X;f.goBack=T;f.initForFaceweb=d;f.isOpen=a;f.load=S;f.loadOrOpen=Aa;f.open=Q;f.pushState=la;f.setSpinnerVisibility=V;f.setTitle=U;f.setHeaderButtonsEnabledState=na;f.openWithPermalinkURI=c;f.showCancelButton=ta;f.removeCancelButtonClickListener=Da;f.showBackButton=ua;f.hideBackAndCancelButtons=va;f.setCustomData=e;f.getCustomData=ra}),null);
__d("MModalDialogLink",["MLegacyDataStore","MModalDialog","MPageController","Stratcom"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k="dialog-link";j.listen("click",k,function(a){__p&&__p();a.prevent();var b=a.getNode(k);switch(b.getAttribute("rel")){case"dialog":h.open(g.get(a.getNode(k)).dialogURI,function(a){a&&(a.redirectURI?i.forceLoad(a.redirectURI):a.refresh&&i.reload())},b.getAttribute("data-loading-title"));break;case"dialog-load":h.load(g.get(a.getNode(k)).dialogURI,{dontPushState:!1,hideNavBar:!1},b.getAttribute("data-loading-title"));break;case"dialog-close":h.close({redirectURI:g.get(a.getNode(k)).dialogURI,goBack:!0});break;case"dialog-close-and-navigate":h.close({redirectURI:g.get(a.getNode(k)).dialogURI,goBack:!1});break;case"dialog-close-and-refresh":h.close({refresh:!0,goBack:!0});break}})}),null);
__d("MContextualThing",[],(function(a,b,c,d,e,f){__p&&__p();var g=0,h={register:function(a,b){b.id=b.id||"ctxtlayer_"+g++,a.setAttribute("data-ownerid",b.id)},containsIncludingLayers:function(a,b){while(b){if(a.contains(b))return!0;b=h.getContext(b)}return!1},getContext:function(a){var b;while(a){if(a.getAttribute&&(b=a.getAttribute("data-ownerid")))return document.getElementById(b);a=a.parentNode}return null}};e.exports=h}),null);
__d("BehaviorsMixin",[],(function(a,b,c,d,e,f){__p&&__p();var g=function(){"use strict";function a(a){this.$1=a,this.$2=!1}var b=a.prototype;b.enable=function(){this.$2||(this.$2=!0,this.$1.enable())};b.disable=function(){this.$2&&(this.$2=!1,this.$1.disable())};return a}(),h=1;function i(a){a.__BEHAVIOR_ID||(a.__BEHAVIOR_ID=h++);return a.__BEHAVIOR_ID}a={enableBehavior:function(a){this._behaviors||(this._behaviors={});var b=i(a);this._behaviors[b]||(this._behaviors[b]=new g(new a(this)));this._behaviors[b].enable();return this},disableBehavior:function(a){if(this._behaviors){a=i(a);this._behaviors[a]&&this._behaviors[a].disable()}return this},enableBehaviors:function(a){a.forEach(this.enableBehavior,this);return this},destroyBehaviors:function(){if(this._behaviors){for(var a in this._behaviors)this._behaviors[a].disable();this._behaviors={}}},hasBehavior:function(a){return this._behaviors&&i(a)in this._behaviors}};e.exports=a}),null);
__d("MLayer",["BehaviorsMixin","CSS","DOM","MContextualThing","MLegacyDataStore","Stratcom","ge","mixin","mixInEventEmitter","nullthrows","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){__p&&__p();var r=[],s={};c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this)||this;c.$MLayer2=!1;c.$MLayer3=!1;c.$MLayer4=null;c.config=b||{layerid:void 0};return c}var c=b.prototype;c.init=function(a){__p&&__p();if(this.config.layerid){if(s[this.config.layerid])return;s[this.config.layerid]=this}this.configure(this.config,p(a));a=this.config.addedBehaviors||[];this.enableBehaviors(this.getDefaultBehaviors().concat(a));a=m("flyout-nocontext-root");a||(a=i.create("div",{id:"flyout-nocontext-root"}));i.appendContent(document.body,a);i.appendContent(a,this.getRoot());i.hide(this.getRoot());l.invoke("m:layer:init",null,this)};c.configure=function(a,b){__p&&__p();this.$MLayer1=this.buildWrapper(a,b);l.addSigil(this.$MLayer1,"m-layer-root");b=a.attributes;if(b){if(b.sigil){var c=b.sigil.split(" ");c.forEach(function(a){l.addSigil(this.$MLayer1,a)},this);delete b.sigil}for(var d in b)this.getRoot().setAttribute(d,b[d])}a.classNames&&a.classNames.forEach(function(a){h.conditionClass(this.$MLayer1,a,!0)},this);a.causalElement&&(this.$MLayer4=a.causalElement);k.set(this.$MLayer1,{layer:this})};c.getDefaultBehaviors=function(){return[]};c.getCausalElement=function(){return this.$MLayer4};c.setCausalElement=function(a){this.$MLayer4=a;return this};c.getInsertParent=function(){return this.insertParent||p(document.body)};c.getRoot=function(){return p(this.$MLayer1)};c.getContentRoot=function(){return this.$MLayer1};c.buildWrapper=function(a,b){return b};c.setInsertParent=function(a){a&&(this.$MLayer2&&a!==this.getInsertParent()&&(i.appendContent(a,this.getRoot()),this.updatePosition()),this.insertParent=a);return this};c.show=function(){__p&&__p();if(this.$MLayer2)return this;var a=this.getRoot(),b=this.getInsertParent();a.parentNode!==b&&i.appendContent(b,a);this.emit("beforeshow");a.style.visibility="hidden";a.style.overflow="hidden";i.show(a);this.updatePosition()!==!1?(this.$MLayer2=!0,this.emit("show"),l.invoke("Layer:show",null,this),q(function(){this.$MLayer2&&r.push(this)}.bind(this))):i.hide(a);a.style.visibility="";a.style.overflow="";this.emit("aftershow");return this};c.hide=function(){if(this.$MLayer3||!this.$MLayer2||this.emit("beforehide")===!1)return this;this.$MLayer3=!0;this.emit("starthide")!==!1&&this.finishHide();return this};c.conditionShow=function(a){return a?this.show():this.hide()};c.finishHide=function(){this.$MLayer2&&(r.splice(r.indexOf(this),1),this.$MLayer3=!1,this.$MLayer2=!1,i.hide(this.getRoot()),this.emit("hide"),l.invoke("m:layer:hide",null,this));return this};c.isShown=function(){return this.$MLayer2};c.updatePosition=function(){return!0};c.updateIfShown=function(){this.isShown()&&this.updatePosition()};c.isDestroyed=function(){return this.destroyed};c.destroy=function(){__p&&__p();if(this.destroyed)return;this.destroyed=!0;this.finishHide();var a=this.getRoot();i.remove(a);this.destroyBehaviors();this.emit("destroy");l.invoke("Layer:destroy",null,this);delete k.get(a).layer;this.$MLayer1=this.$MLayer4=null;this.config.layerid&&delete s[this.config.layerid];this.config=null};c.shouldBlurOnTouchEnd=function(){return!0};b.getLayers=function(){return s};b.show=function(a){a.show()};return b}(n(g));o(c,{destroy:!0,blur:!0,beforeshow:!0,show:!0,aftershow:!0,beforehide:!0,starthide:!0,hide:!0});var t;function a(a){a=a.getTouch();var b=a.clientX;a=a.clientY;t={x:b,y:a}}function b(a){__p&&__p();var b=r.length;if(!b)return;var c=a.getTarget(),d=a.getType();if(!p(document.documentElement).contains(c))return;if(d==="touchend"&&t){a=a.getTouch();var e=a.clientX;a=a.clientY;e=Math.sqrt(Math.pow(t.x-e,2)+Math.pow(t.y-a,2));t=null;if(e>5)return}while(b--){a=r[b];if(!a.isShown())continue;e=a.getContentRoot();if(j.containsIncludingLayers(e,c))return;e=a.getCausalElement();if(d==="touchend"&&e&&(e.contains(c)||e===c||!a.shouldBlurOnTouchEnd()))continue;if(a.emit("blur")===!1||a.isShown())return}}l.listen("touchstart",null,a);l.listen("click",null,b);l.listen("touchend",null,b);e.exports=c}),null);
__d("MLayerDestroyOnHide",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(a){this.$1=a,this.$2}var b=a.prototype;b.enable=function(){this.$2=this.$1.addListener("hide",this.$1.destroy.bind(this.$1))};b.disable=function(){this.$1=null,this.$2.remove(),this.$2=null};return a}();e.exports=a}),null);
__d("MLayerHideOnBlur",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$3=null,this.$2=null,this.$1=a}var b=a.prototype;b.enable=function(){this.$3=[this.$1.addListener("show",this.$4.bind(this)),this.$1.addListener("hide",this.$5.bind(this))],this.$1.isShown()&&this.$4()};b.disable=function(){this.$5();while(this.$3.length)this.$3.pop().remove();this.$3=null};b.$5=function(){this.$2&&this.$2.remove(),this.$2=null};b.$4=function(){this.$2=this.$1.addListener("blur",function(){this.$1.hide()}.bind(this))};return a}();e.exports=a}),null);
__d("MLayerHideOnCloseClick",["DOM"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=null,this.$2=null,this.$3=a}var b=a.prototype;b.enable=function(){this.$1=[this.$3.addListener("show",this.$4.bind(this)),this.$3.addListener("hide",this.$5.bind(this))],this.$3.isShown()&&this.$4()};b.disable=function(){this.$5();while(this.$1.length)this.$1.pop().remove();this.$1=null};b.$5=function(){this.$2&&this.$2.remove()};b.$4=function(){this.$2=g.listen(this.$3.getRoot(),"click","mlayer-hide-on-click",this.$3.hide.bind(this.$3))};return a}();e.exports=a}),null);
__d("TouchEventType",[],(function(a,b,c,d,e,f){a="touchend";b="touchstart";e.exports={END:a,START:b}}),null);
__d("MLayerHideOnTouch",["CancelableEventListener","TouchEventType"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=null,this.$2=a}var b=a.prototype;b.enable=function(){this.$1=[this.$2.addListener("show",this.$3.bind(this)),this.$2.addListener("hide",this.$4.bind(this))],this.$2.isShown()&&this.$3()};b.disable=function(){this.$4();while(this.$1.length)this.$1.pop().remove();this.$1=null};b.$4=function(){this.$5&&this.$5.remove(),this.$5=null};b.$3=function(){var a=this;this.$5=g.listen(document.body,h.START,null,function(b){a.$2.getContentRoot().contains(b.getTarget())||(a.$2.hide(),b.prevent())})};return a}();e.exports=a}),null);
__d("MUFIReactionsUtils",["BackgroundSyncParameters","DateConsts","QE2Logger","UFIReactionsUtils"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k=[null,null],l=1,m=0;a={getReactionData:function(a,b){var c=a.viewerreaction||a.has_viewer_liked?l:m,d=a.like_count,e=a.like_counts||k,f=a.like_friend_sentences||k,g=a.like_sentences||k;c&&!b?d--:!c&&b&&d++;var h=a.reduced_like_count;isNaN(h)||(h=d.toString());(c&&!b||!c&&b)&&(e=[e[1],e[0]],f=[f[1],f[0]],g=[g[1],g[0]]);return Object.assign({has_viewer_liked:!!b,like_count:d,like_counts:e,like_friend_sentences:f,like_sentences:g,reduced_like_count:h},j.getReactionData(a,b,a.actor_for_post))},getReactionDataForComment:function(a,b){var c=a.reactioncount,d=a.reactioncountreduced;a.viewerreaction&&!b?c--:!a.viewerreaction&&b&&c++;c=Math.max(c,0);d&&!isNaN(d)&&(d=c.toString());a=this.getReactionData(a,b);return{has_viewer_liked:a.has_viewer_liked,like_count:a.like_count,reactioncount:c,reactioncountmap:a.reactioncountmap,reactioncountreduced:d,viewerreaction:a.viewerreaction}},getConfigForBackgroundRetry:function(a){return!navigator.serviceWorker||!navigator.serviceWorker.controller?void 0:g.shouldRecoverReactions?{requestId:"react_"+a,ttl:2*h.SEC_PER_HOUR,maxRetry:1}:void 0}};e.exports=a}),null);
__d("MUFIRequest",["ChannelClientID","ClientIDs","MLiveData","MRequest","MURI","Stratcom"],(function(a,b,c,d,e,f,g,h,i,j,k,l){__p&&__p();var m=k.getHashPrefixRegex(),n={};function a(a){a=new k(a);var b=a.getFragment();m.test(b)&&(a=new k(b.replace(m,"/")));return a.setProtocol(null).setDomain(null).setFragment(null)}function b(a,b,c,d,e){__p&&__p();b&&(b.request_id=null,i.update(a,b));n[a]&&n[a].abort();c.addQueryData("client_id",h.getNewClientID());c.addQueryData("session_id",g.getID());b=new j(c.toString());b.listen("finally",function(){n[a]=null});b.listen("postprocess",function(){l.invoke("m:ajax:complete")});b.setAutoRetry(!0);e&&b.setBackgroundRetry(e);d&&b.setData(d);n[a]=b;b.send()}e.exports={getURI:a,send:b}}),null);
__d("TabbableElements",["Style"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){__p&&__p();if(a.tabIndex<0)return!1;if(a.tabIndex>0||a.tabIndex===0&&a.getAttribute("tabIndex")!==null)return!0;var b=a;switch(a.tagName){case"A":a=b;return!!a.href&&a.rel!="ignore";case"INPUT":a=b;return a.type!="hidden"&&a.type!="file"&&!a.disabled;case"BUTTON":case"SELECT":case"TEXTAREA":a=b;return!a.disabled}return!1}function i(a){a=a;while(a&&a!==document&&g.get(a,"visibility")!="hidden"&&g.get(a,"display")!="none")a=a.parentNode;return a===document}var j={find:function(a){return Array.from(a.getElementsByTagName("*")).filter(j.isTabbable)},findFirst:function(a){return Array.from(a.getElementsByTagName("*")).find(j.isTabbable)},isTabbable:function(a){return h(a)&&i(a)},isVisible:function(a){return i(a)}};e.exports=j}),null);
__d("clamp",[],(function(a,b,c,d,e,f){function a(a,b,c){if(a<b)return b;return a>c?c:a}e.exports=a}),null);
__d("MFlyout",["CSS","DOM","Locale","MContextualThing","MJSEnvironment","MLayer","MLegacyDataStore","MParent","MViewport","Scroll","Stratcom","TabbableElements","Vector","clamp","cx","emptyFunction","mixInEventEmitter"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){__p&&__p();var x=52,y=26,z=10,A=22,B=20,C=10,D=14,E=44,F=3,G=400,H=320,I=["resize","m:schedulable:loaded","m:viewport:orientation-change","m:orientation-resize:complete","m:hideout:reflow","m:landscape-cover-crop:complete"],J="flyout-causal";function K(){return document.body}var L=[];a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b,c){__p&&__p();b=a.call(this,b)||this;b._contentRoot=null;b._overlay=null;b._contentWrapper=null;b._nubNode=null;b._nubAlignment=null;b._content=null;b._contextNode=null;b._parentLayer=null;b._parentSubscription=null;b._orientation=null;b._orientationClass=null;b._width=null;b._modal=null;b._contentPositioner=null;b._heightConstraint=null;b._autoflipTopOffset=null;b._coverZIndex=null;b._cover=null;b._supportFixedPosition=!1;b._contentContainer=null;b._useContentAsBounds=!1;b.init(c);return b}var c=b.prototype;c.configure=function(b,c){__p&&__p();a.prototype.configure.call(this,b,c);if(b.context){this.setContext(b.context);this.setParentSubscription();q.addSigil(this.getCausalElement(),J);var d=m.get(this.getCausalElement());d.flyout=this}this.setMargin(b.margin);this.setPosition(b.position);this.setNubAlign(b.nubalign);this.setOffsetY(b.offsetY);this._content=c;this.setWidth(b.width);this.setModal(!!b.modal);this.setAutoflipTopOffset(b.autoFlipTopOffset);this.setCoverZIndex(b.coverZIndex);this.setUseContentAsBounds(b.useContentAsBounds||!1);this._supportFixedPosition=b.supportFixedPosition!=null?b.supportFixedPosition:!1};c.setCoverZIndex=function(a){this._coverZIndex=a};c.setWidth=function(a){this._width=a};c.setModal=function(a){this._modal=a};c.getModal=function(){return this._modal};c.setAutoflipTopOffset=function(a){this._autoflipTopOffset=a};c.getAutoflipTopOffset=function(){return this._autoflipTopOffset};c._getLayerParentWidth=function(){return s.getDim(this.getRoot().offsetParent).x};c.getMaxWidth=function(){return Math.min(this._getLayerParentWidth(),k.IS_TABLET?H:G)};c._maxWidthIsApplicable=function(){return this.getMaxWidth()!==this._getLayerParentWidth()};c._isCustomWidth=function(){return this._width==="auto"||this._maxWidthIsApplicable()};c.applyWidth=function(){var a=this._contentRoot.style;a.width="";a.maxWidth="";if(this._maxWidthIsApplicable()){var b=this.getMaxWidth()+"px";this._width==="auto"?a.maxWidth=b:a.width=b}g.conditionClass(this._contentRoot,"_556f",this._isCustomWidth())};c.buildWrapper=function(a,b){this._nubNode=h.create("div",{className:"_5bn_"});this._backgroundNode=h.create("div",{className:"_5c0e"},this._nubNode);this._contentContainer=h.create("div",{className:"_5c0f"},b);this._contentRoot=h.create("div",{className:"_5bo0"},[this._backgroundNode,this._contentContainer]);i.isRTL()&&(this._contentRoot.style.direction="rtl");this.config.isBottomSheet?(this._overlay=h.create("div",{className:"_7ahu"}),this._contentWrapper=h.create("div",{className:"_544k"},[this._contentRoot,this._overlay])):this._contentWrapper=h.create("div",{className:"_544k"},this._contentRoot);this._contentPositioner=h.create("div",{className:"_544l _7a_1"},this._contentWrapper);return this._contentPositioner};c.setMargin=function(a){g.conditionClass(this._contentRoot,"_54wl",a==="large"),g.conditionClass(this._contentRoot,"_55kj",a==="medium")};c.getInsertParent=function(){var b=this.insertParent;if(!b){var c=this.getContext();c&&(b=n.bySigil(c,"context-layer-root")||K())}return b||a.prototype.getInsertParent.call(this)};c.setContent=function(a){this._content=a;h.setContent(this._contentRoot,this._content);this.updateIfShown();return this};c.setContext=function(a){this._contextNode=a};c.getCausalElement=function(){return a.prototype.getCausalElement.call(this)||this.getContext()};c.setParentSubscription=function(){__p&&__p();var a=this.getContext(),b=null,c=K().parentNode;while(a!==c){b=m.get(a).layer;if(b)break;a=a.parentNode}if(b===this._parentLayer)return;this._parentLayer&&this._parentSubscription&&(this._parentSubscription.remove(),this._parentSubscription=null);b&&(this._parentSubscription=b.subscribe("hide",this.hide.bind(this)));this._parentLayer=b};c.setPosition=function(a){this.getOrientation().setDefaultPosition(a)&&(this.getOrientation().setPosition(a),this.updateIfShown());return this};c.setNubAlign=function(a){N(a),this._nubAlignment=a||"center"};c.setOffsetX=function(a){a=parseInt(a,10);this.getOrientation().setDefaultOffsetX(a)&&this.updateIfShown();return this};c.setOffsetY=function(a){a=parseInt(a,10);this.getOrientation().setDefaultOffsetY(a)&&this.updateIfShown();return this};c.setUseContentAsBounds=function(a){this._useContentAsBounds=a};c.getOrientation=function(){this._orientation||(this._orientation=new O());return this._orientation};c.getContentRoot=function(){return this._contentRoot};c.getContent=function(){return this._content};c.getContext=function(){return this._contextNode};c.getContextBounds=function(){return this.getContext().getBoundingClientRect()};c.causalClickShow=function(){this.getContent()&&this.show()};c.show=function(){__p&&__p();if(this.isShown())return this;this._cover||(this._cover=h.create("div",{className:"_5so _2wyb",style:this._coverZIndex?{zIndex:this._coverZIndex}:{}}));a.prototype.show.call(this);this.getModal()&&h.insertAfter(this._contentPositioner,this._cover);if(this.isShown()){this.config&&this.config.logShown&&q.invoke("m:flyout:show",null,{type:this.config.logShown});j.register(this.getRoot(),this.getContext());L.push(this);if(!this.resizeListeners){var b=this.updatePosition.bind(this);this.resizeListeners=I.map(function(a){return q.listen(a,null,b)})}var c=document.getElementById("viewport"),d=this.getContentRoot();if(c&&d){d=d.parentNode;var e=0,f=d;while(f&&f!==c)e+=f.offsetTop,f=f.offsetParent;f=e+d.clientHeight;this._heightConstraint=o.addMinHeightConstraint(f)}}c=r.findFirst(this._contentContainer);c&&c.focus();return this};c.finishHide=function(){L.splice(L.indexOf(this),1);while(this.resizeListeners&&this.resizeListeners.length)this.resizeListeners.pop().remove();this.resizeListeners=null;q.invoke("m:flyout:close",null,{flyout:this});this.getModal()&&this._cover&&h.remove(this._cover);this._heightConstraint&&(this._heightConstraint.release(),this._heightConstraint=null);return a.prototype.finishHide.call(this)};c.updatePosition=function(){__p&&__p();var a=this.getContext();if(!a)return!1;var b=a.offsetParent;if(!b&&this._supportFixedPosition){var c=getComputedStyle(a);c.position==="fixed"&&(b=parseInt(c.top,10))}if(!b)return!1;this.applyWidth();this.emit("adjustDimensions");c=this.getRoot();b=this.getOrientation();this.emit("adjust",b.reset());var d=c.offsetParent;d=d.getBoundingClientRect();var e=this.getContextBounds(),f=e.left-d.left,g=e.top-d.top,h=window.innerHeight,i=this.getContentRoot(),j=n.bySigil(a,"feed-ufi-comments"),k=j!==null?i.clientHeight+A+E+C:i.clientHeight+A+E;k=k<e.top;var l=j!==null?i.clientHeight+z+B+(h-j.getBoundingClientRect().bottom):i.clientHeight+z+B;i.clientHeight+z+B;var m=h-e.bottom>=l;b.getPosition()==="below"&&(!j&&e.height<=h-l-E||j&&e.height<=h-l?g+=e.height:k?b.setPosition("above"):!m?g=j!==null?d.top*-1+j.clientHeight/2:d.top*-1+h/2-E:g+=e.height+B);this.updateWrapperClass(b);l=0;k=b.getOffsetX();m=i.clientWidth;j=Math.round(m/2);if(this._isCustomWidth()){if(k)l=k-j;else{h=f+Math.round(e.width/2);l=h-j}l=t(Math.round(l),0,this._getLayerParentWidth()-m)}i.style.left=l+"px";k=b.getOffsetY();h=0;q.hasSigil(a,"kaios-like-react-trigger")&&(b.getPosition()==="above"?h=D:b.getPosition()==="below"&&(h=-D));c.style.top=g+k+h+"px";m=this._nubAlignment;e.width<y&&(m="center");a=y/2;c=f;g=Math.round(e.width/2);this._useContentAsBounds&&(c=l,g=j);m==="center"?c+=g:m==="left"?c+=a:c+=e.width-a;k=i.getBoundingClientRect();h={left:k.left,width:k.width};h.left-=d.left;f=F+y/2;c=t(c,h.left+f,h.left+h.width-f);l=c-x/2-h.left;this._nubNode.style.left=l+"px";this.emit("reposition",b);return!0};c.updateNubPosition=function(a){this._nubNode&&(this._nubNode.style.left=a+"px")};c._toggleOrientationClass=function(a,b){g.conditionClass(this._contentWrapper,b||this._orientationClass,a)};c.updateWrapperClass=function(a){a=a.getClassName();if(a===this._orientationClass)return;this._orientationClass&&this._toggleOrientationClass(!1);this._orientationClass=a;this._toggleOrientationClass(!0)};c.simulateOrientation=function(a,b){__p&&__p();a=a.getClassName();if(a===this._orientationClass)return b();else{this._orientationClass&&this._toggleOrientationClass(!1);this._toggleOrientationClass(!0,a);b=b();this._toggleOrientationClass(!1,a);this._orientationClass&&this._toggleOrientationClass(!0);return b}};c.destroy=function(){__p&&__p();a.prototype.destroy.call(this);this._contextNode=null;this._contextSigil=null;this._contentRoot=null;this._contentWrapper=null;this._contentContainer=null;this._content=null;this._nubNode=null;this._width=null;this._cover=null;this._overlay=null;return this};c.shouldBlurOnTouchEnd=function(){return this.getModal()==null};return b}(l);w(a,{adjustDimensions:!0,adjust:!0,reposition:!0});var M=v.thatReturnsArgument,N=v.thatReturnsArgument,O=function(){"use strict";__p&&__p();function a(){this._default={_position:"above",_offsetX:0,_offsetY:0},this.reset()}var b=a.prototype;b.setPosition=function(a){this._position=M(a);return this};b.getOppositePosition=function(){return a.OPPOSITE[this.getPosition()]};b.getPosition=function(){return this._position||"above"};b.getOffsetX=function(){return this._offsetX||0};b.getOffsetY=function(){var a=this._offsetY||0;this._position==="above"?(a-=A,a*=-1):this._position==="below"&&(a-=z);return a};b.getClassName=function(){var a=this.getPosition();if(a==="below")return"_5bo1";else if(a==="above")return"_5bo2"};b.reset=function(){Object.assign(this,this._default);return this};b.setDefaultPosition=function(a){var b=this._default._position;this._default._position=M(a);return b!==a};b.setDefaultOffsetX=function(a){var b=this._default._offsetX;this._default._offsetX=a;return b!==a};b.setDefaultOffsetY=function(a){var b=this._default._offsetY;this._default._offsetY=a;return b!==a};return a}();O.OPPOSITE={above:"below",below:"above"};q.listen("click",J,function(a){m.get(a.getNode(J)).flyout.causalClickShow()});q.listen("click",["m-layer-root","mflyout-remove-on-click"],function(a){a=a.getNode("m-layer-root");m.get(a).layer.hide()});e.exports=a}),null);
__d("MFlyoutAutoFlip",["MParent","MViewport"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=null,this.$2=a}var b=a.prototype;b.enable=function(){this.$1=this.$2.addListener("adjust",this.$3.bind(this)),this.$2.isShown()&&this.$2.updatePosition()};b.disable=function(){this.$1.remove(),this.$1=null,this.$2.isShown()&&this.$2.updatePosition()};b.$3=function(a){__p&&__p();var b=this.$4(a),c={top:this.$2.getAutoflipTopOffset()||0,bottom:h.getUseableHeight()},d=g.bySigil(this.$2.getRoot(),"scroll-area");if(d){d=d.getBoundingClientRect();c={top:Math.max(d.top,c.top),bottom:Math.min(d.bottom,c.bottom)}}var e,f,i=this.$2;d=i.getContext();d=d.getBoundingClientRect();for(e=0;e<b.length;e++){a.setPosition(b[e]);f=i.simulateOrientation(a,function(){return i.getRoot().firstChild.getBoundingClientRect()});var j=d.top+a.getOffsetY();a.getPosition()==="above"?j-=f.height:a.getPosition()==="below"&&(j+=d.height);j={top:j,bottom:j+f.height};if(j.top>=c.top&&j.bottom<=c.bottom)return}a.setPosition(b.indexOf("below")>-1?"below":b[0])};b.$4=function(a){return[a.getPosition(),a.getOppositePosition()]};return a}();e.exports=a}),null);
__d("MFlyoutContextSigil",["DOM","MLegacyDataStore","Stratcom","ex"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k={};a=function(){"use strict";__p&&__p();function a(a){this.$1=null,this.$2=a}var b=a.prototype;b.enable=function(){var a=this.$3();k[a];k[a]=this.$2;this.$1=i.listen("click",this.$3(),this.$4.bind(this))};b.disable=function(){delete k[this.$3()],this.$1.remove(),this.$1=null,this.$2=null};b.$3=function(){var a=this.$2.config;return a.causalSigil||a.contextSigil};b.$4=function(a){__p&&__p();var b=a.getNode(this.$3()),c,d=this.$2.config.contextSigil,e=this.$2.config.causalSigil;if(e&&e!==d){e=b;while(e&&e!==document.body&&!c)if(i.hasSigil(e,d))c=e;else{var f=g.scry(e,"*",d);c=f[0];e=e.parentNode}}else c=b;if(this.$2.getContext()!==c&&this.$2.isShown()){this.$2.hide();if(!this.$2)return}this.$2.setCausalElement(b);this.$2.setContext(c);h.get(b).flyout=this.$2;this.$2.isShown()||this.$2.show();a.prevent()};return a}();e.exports=a}),null);
__d("CommentPrivacyValue",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DEFAULT_PRIVACY:0,OWNER_OR_COMMENTER:1,FRIENDS_ONLY:2,FRIENDS_AND_POST_OWNER:3,SIDE_CONVERSATION:4,SIDE_CONVERSATION_AND_POST_OWNER:5,GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE:-1})}),null);