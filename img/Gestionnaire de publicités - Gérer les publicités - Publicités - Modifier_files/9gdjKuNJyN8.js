if (self.CavalryLogger) { CavalryLogger.start_js(["DhESo"]); }

__d("AYMTGuidanceParams",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACTION:"action",ACTION_COUNT_MAX:"action_count_max",ACTION_COUNT_MIN:"action_count_min",ACTION_DATA:"action_data",COLUMN:"column",COMPARE_KEYS_ONLY:"compare_keys_only",IDLE_TIME:"idle_time",INVALID_TABS:"invalid_tabs",LEARN_MORE_ARTICLE_CMS_ID:"learn_more_article_cms_id",MESSAGE_BODY:"message_body",MESSAGE_SEVERITY:"message_severity",PAGE_TYPE:"page_type",PAGES:"pages",TABS:"tabs",TIP_ACTION_LABEL:"tip_action_label",TIP_AUDIENCE:"tip_audience",TIP_BODY:"tip_body",TIP_HAS_ASYNC_ACTION_LINK:"tip_is_async",TIP_IMAGE_URI:"tip_image_uri",TIP_JS_ACTION:"tip_js_action",TIP_LINK:"tip_link",TIP_TITLE:"tip_title",TIP_TYPE:"tip_type"})}),null);
__d("AdsGuidanceTipRenderer",["AdsDataAtom","AdsHelpTrayUIActions","AYMTClientSideLogging","AYMTGuidanceParams","React","ReactDOM","$","abstractMethod","clearTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=60*1e3;a=function(){__p&&__p();function a(a,c,d,e,f,g,h){__p&&__p();var i=this;this.logClickNew=function(){b("AYMTClientSideLogging").logClickNew(i.getAYMTData())};this.$6=a;this.$4=e;this.$5=f;this.$1=g;this.$3=!1;this.$8=null;this.$10=c;this.$11=d;this.$12=h}var c=a.prototype;c.getTipID=function(){return this.$10};c.getChannelID=function(){return this.$11};c.getAYMTData=function(){return this.$12};c.getAppContext=function(){return this.$1};c.getOnCloseCallback=function(){return this.$4};c.getOnResetCallback=function(){return this.$5};c.isActive=function(){return this.$3};c.getRoot=function(){return b("$")("web_ads_guidance_tips")};c.run=function(){var a=this;if(this.$3)throw new Error("Tip already active");this.componentWillShow();this.$13();this.$2=b("AdsDataAtom").register(function(b){a.$14(b)});this.shouldTimeout()&&this.$15()};c.getParam=function(a){return!this.$6?null:this.$6[a]};c.$14=function(a){this.$3&&(this.componentShouldClose(a)&&(this.close(),this.shouldReset()&&this.$5()))};c.componentWillShow=function(){};c.getComponent=function(){b("abstractMethod")("AdsGuidanceTipRenderer","getComponent");return b("React").createElement("span",null)};c.componentShouldClose=function(a){return this.getCloseActions().includes(a.action.actionType)};c.$13=function(){this.$7=this.getRoot(),this.$9=b("ReactDOM").render(this.getComponent(),this.$7),this.$3=!0};c.shouldTimeout=function(){return!1};c.$15=function(){var a=this;this.$8=setTimeout(function(){a.close(),a.shouldReset()&&a.$5()},g)};c.getCloseActions=function(){return[]};c.logClick=function(){b("AYMTClientSideLogging").logClick(this.getTipID(),this.getChannelID())};c.xout=function(){this.close(!0),b("AYMTClientSideLogging").logXout(this.$10,this.$11)};c.xoutNew=function(){this.close(!0),b("AYMTClientSideLogging").logXoutNew(this.getAYMTData())};c.close=function(a){this.$9&&this.$9.isMounted()&&b("ReactDOM").unmountComponentAtNode(this.$7),this.$2&&b("AdsDataAtom").unregister(this.$2),this.$8&&b("clearTimeout")(this.$8),this.$3=!1,this.$4(a)};c.shouldReset=function(){return!1};c.getDispatchToken=function(){return this.$2};c.openHelpTray=function(){b("AdsHelpTrayUIActions").pushCMSIDToHistory(this.getParam(b("AYMTGuidanceParams").LEARN_MORE_ARTICLE_CMS_ID)),this.logClickNew()};return a}();e.exports=a}),null);
__d("AdsMgmtMegaphoneTipRenderer",["AdsDataAtom","AdsGuidanceTipRenderer","AdsMessagingDismissMessageDataActionFlux","AdsMgmtMessageActions","AdsMgmtMessagePlacement","AdsMgmtMessageSeverity","AYMTClientSideRenderingParam","DOMContainer.react","Link.react","React","isNode"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.run=function(){var a=this,c;this.getCMSTip()?c=this.getCMSTip():c=this.getMessageBody();c&&(this.$AdsMgmtMegaphoneTipRenderer1=b("AdsMgmtMessageActions").addMessage(c,this.getMessageSeverity(),this.getMessagePlacement(),this.getMessageTitle(),null,null,this.getOnCloseCallback()),this.$AdsMgmtMegaphoneTipRenderer2=b("AdsDataAtom").register(function(b){a.$AdsMgmtMegaphoneTipRenderer3(b)}))};d.$AdsMgmtMegaphoneTipRenderer3=function(a){var c=this;if(a.action.actionType===b("AdsMessagingDismissMessageDataActionFlux").actionType&&a.action.data.id===this.$AdsMgmtMegaphoneTipRenderer1){b("AdsDataAtom").unregister(this.$AdsMgmtMegaphoneTipRenderer2);return}this.componentShouldClose(a)&&(b("AdsDataAtom").unregister(this.$AdsMgmtMegaphoneTipRenderer2),window.setTimeout(function(){return b("AdsMgmtMessageActions").dismissMessage(c.$AdsMgmtMegaphoneTipRenderer1)},0))};d.getMessageID=function(){return this.$AdsMgmtMegaphoneTipRenderer1};d.getCMSTip=function(){return this.getParam(b("AYMTClientSideRenderingParam").CMS_TIP)};d.getMessageBody=function(){var a=this.getMessageLink(),c=this.getMessageActionLabel(),d=this.getParam(b("AYMTClientSideRenderingParam").TIP_BODY);if(a!=null&&c){b("isNode")(d)&&(d=b("React").createElement(b("DOMContainer.react"),null,d.cloneNode(!0)));b("isNode")(c)&&(c=b("React").createElement(b("DOMContainer.react"),null,c.cloneNode(!0)));return b("React").createElement("div",null,d," ",b("React").createElement(b("Link.react"),{href:a,target:"_blank",onClick:this.logClickNew},c),".")}return d};d.getMessageSeverity=function(){return this.getParam(b("AYMTClientSideRenderingParam").TIP_MESSAGE_SEVERITY)||b("AdsMgmtMessageSeverity").ERROR};d.getMessageActionLabel=function(){return this.getParam(b("AYMTClientSideRenderingParam").TIP_ACTION_LABEL)};d.getMessageLink=function(){return this.getParam(b("AYMTClientSideRenderingParam").TIP_LINK)};d.getMessagePlacement=function(){return b("AdsMgmtMessagePlacement").GLOBAL};d.getMessageTitle=function(){return this.getParam(b("AYMTClientSideRenderingParam").TIP_TITLE)};return c}(b("AdsGuidanceTipRenderer"));e.exports=a}),null);
__d("AYMTAdsManagerDraftDeletionWarningTipRenderer",["fbt","AdsGraphAPI","AdsMgmtMegaphoneTipRenderer"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getMessageBody=function(){return!b("AdsGraphAPI").isCanonicalAPIVersionFromDraft()?null:g._("On April 15th, we are making changes to Ads Manager. As a result, any draft changes in this specific account that have not been published before April 15th will be deleted. To make sure you do not lose your work, you can either publish all of your changes or use bulk export to download a copy of your changes.")};d.getMessageTitle=function(){return!b("AdsGraphAPI").isCanonicalAPIVersionFromDraft()?null:g._("Your unpublished drafts will be deleted soon")};return c}(b("AdsMgmtMegaphoneTipRenderer"));e.exports=a}),null);