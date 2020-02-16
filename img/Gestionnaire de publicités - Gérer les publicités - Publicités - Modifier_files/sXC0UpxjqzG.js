if (self.CavalryLogger) { CavalryLogger.start_js(["gjM+S"]); }

__d("AdsMessengerSetStandardTemplateReducerPlugin",[],(function(a,b,c,d,e,f){"use strict";a={reduce:function(a,b){return b.standardTemplate}};e.exports=a}),null);
__d("AdsMessengerSetStandardTemplateAction",["Laminar","AdsMessengerSetStandardTemplateReducerPlugin","AdsMessengerStandardTemplateDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("AdsMessengerSetStandardTemplateReducerPlugin"),b("AdsMessengerStandardTemplateDataProvider"),{})]},function(){return[]},"ADS_MESSENGER_SET_STANDARD_TEMPLATE");e.exports=a}),null);
__d("adsMessengerDataModelGetIceBreakers",["AdsMessengerJSONMediaFormatType","AdsMessengerJSONPaths","adsMessengerDataModelGetMediaFormat","getByPath"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("adsMessengerDataModelGetMediaFormat")(a);if(c===b("AdsMessengerJSONMediaFormatType").TEXT)return b("getByPath")(a,b("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ICE_BREAKERS);else return null}e.exports=a}),null);
__d("adsMessengerDataModelGetImageHash",["adsMessengerDataModelGetGenericElement"],(function(a,b,c,d,e,f){"use strict";function a(a){a=b("adsMessengerDataModelGetGenericElement")(a);return a&&a.image_hash}e.exports=a}),null);
__d("adsMessengerDataModelGetImageID",["AdsImageIDUtils","adsMessengerDataModelGetImageHash"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();a=b("adsMessengerDataModelGetImageHash")(a);if(a==null||a=="")return null;a=a&&a.split(":");var c=a&&a[0];a=a&&a[1];if(!a||!c)return null;c=c.trim();a=a.trim();return b("AdsImageIDUtils").getImageID({accountID:c,hash:a})}e.exports=a}),null);
__d("adsMessengerDataModelSelectImage",["AdsMessengerJSONPaths","adsMessengerDataModelClone","adsMessengerDataModelGetGenericElement","setByPath"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){__p&&__p();d=d&&d[0];if(!d)return a;var e=b("adsMessengerDataModelGetGenericElement")(a)||{};if(d.hash)e.image_hash=c+":"+d.hash;else return a;c=b("adsMessengerDataModelClone")(a);b("setByPath")(c,b("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD.ELEMENTS,[e]);return c}e.exports=a}),null);
__d("adsMessengerDataModelSwitchToButtons",["AdsMessengerVisualEditorCustomerActionType","adsMessengerDataModelAddButtonTemplate","adsMessengerDataModelIsTextWithQR","adsMessengerDataModelRemoveAllQR","adsMessengerDataModelRemoveIceBreakers","adsMessengerDataModelSetActionType"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("adsMessengerDataModelSetActionType")(a,b("AdsMessengerVisualEditorCustomerActionType").BUTTONS);b("adsMessengerDataModelRemoveIceBreakers")(a);if(b("adsMessengerDataModelIsTextWithQR")(a))return b("adsMessengerDataModelRemoveAllQR")(b("adsMessengerDataModelAddButtonTemplate")(a,c));else return b("adsMessengerDataModelRemoveAllQR")(a)}e.exports=a}),null);
__d("adsMessengerDataModelSwitchToIceBreakers",["AdsMessengerJSONMediaFormatType","AdsMessengerJSONPaths","AdsMessengerVisualEditorCustomerActionType","AdsMessengerVisualEditorUtils","adsMessengerDataModelGetMediaFormat","adsMessengerDataModelRemoveAllQR","adsMessengerDataModelRemoveButtonTemplate","adsMessengerDataModelSetActionType","setByPath"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){var d=b("adsMessengerDataModelGetMediaFormat")(a);if(d===b("AdsMessengerJSONMediaFormatType").TEXT){b("adsMessengerDataModelSetActionType")(a,b("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS);d=b("AdsMessengerVisualEditorUtils").getDefaultIceBreakers(c);b("setByPath")(a,b("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ICE_BREAKERS,d);return b("adsMessengerDataModelRemoveAllQR")(b("adsMessengerDataModelRemoveButtonTemplate")(a,!0))}return a}e.exports=a}),null);
__d("MessengerDestinationCustomTemplateEditor.react",["fbt","AdsMessengerContentEditorTabs","AdsMessengerUtils","AdsMessengerVisualEditorUtils","AdsMessengerWelcomeMessageDataType","AdsUEditorAdgroupMessengerContentEditor.react","AdsUniformValue","MessengerContentEditorSurface","React","adsMessengerDataModelAddCTA","adsMessengerDataModelAddQuickReply","adsMessengerDataModelChangeFormat","adsMessengerDataModelGetActionType","adsMessengerDataModelGetAttachmentText","adsMessengerDataModelGetCTAs","adsMessengerDataModelGetGenericSubtitle","adsMessengerDataModelGetGenericTitle","adsMessengerDataModelGetIceBreakers","adsMessengerDataModelGetImageID","adsMessengerDataModelGetLandingScreenType","adsMessengerDataModelGetMediaFormat","adsMessengerDataModelGetQuickReplies","adsMessengerDataModelGetWelcomeMessage","adsMessengerDataModelRemoveCTA","adsMessengerDataModelRemoveIceBreakers","adsMessengerDataModelRemoveQuickReply","adsMessengerDataModelSelectImage","adsMessengerDataModelSetActionType","adsMessengerDataModelSetAttachmentText","adsMessengerDataModelSetCTATitle","adsMessengerDataModelSetCTAType","adsMessengerDataModelSetCTAURL","adsMessengerDataModelSetGenericSubtitle","adsMessengerDataModelSetGenericTitle","adsMessengerDataModelSetQRPayload","adsMessengerDataModelSetQRTitle","adsMessengerDataModelSetWelcomeMessage","adsMessengerDataModelSwitchToButtons","adsMessengerDataModelSwitchToIceBreakers","adsMessengerDataModelSwitchToQuickReplies"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){return b("AdsMessengerUtils").getWelcomeMessageDataType(a)===b("AdsMessengerWelcomeMessageDataType").VISUAL_EDITOR}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),i=0;i<e;i++)f[i]=arguments[i];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$16=function(){b("adsMessengerDataModelRemoveIceBreakers")(d.props.welcomeMessageJSON),b("adsMessengerDataModelSetActionType")(d.props.welcomeMessageJSON,null),d.props.onJSONChange(d.props.welcomeMessageJSON)},d.$5=function(){d.props.onJSONChange(b("adsMessengerDataModelAddCTA")(d.props.welcomeMessageJSON))},d.$6=function(){d.props.onJSONChange(b("adsMessengerDataModelAddQuickReply")(d.props.welcomeMessageJSON))},d.$7=function(a){d.props.onJSONChange(b("adsMessengerDataModelSetAttachmentText")(d.props.welcomeMessageJSON,a))},d.$8=function(a,c){d.props.onJSONChange(b("adsMessengerDataModelSetCTATitle")(d.props.welcomeMessageJSON,a,c))},d.$9=function(a,c){d.props.onJSONChange(b("adsMessengerDataModelSetCTAType")(d.props.welcomeMessageJSON,a,c))},d.$12=function(a){d.props.onJSONChange(b("adsMessengerDataModelSelectImage")(d.props.welcomeMessageJSON,d.props.accountID,a))},d.$10=function(a,c){d.props.onJSONChange(b("adsMessengerDataModelSetCTAURL")(d.props.welcomeMessageJSON,a,c))},d.$14=function(a,c){d.props.onJSONChange(b("adsMessengerDataModelSetQRTitle")(d.props.welcomeMessageJSON,a,c))},d.$13=function(a,c){d.props.onJSONChange(b("adsMessengerDataModelSetQRPayload")(d.props.welcomeMessageJSON,a,c))},d.$17=function(a){d.props.onJSONChange(b("adsMessengerDataModelRemoveQuickReply")(d.props.welcomeMessageJSON,a))},d.$18=function(a){d.props.onJSONChange(b("adsMessengerDataModelSetGenericSubtitle")(d.props.welcomeMessageJSON,a))},d.$19=function(a){var c=h(d.props.welcomeMessageJSON);if(c&&a!==b("AdsMessengerContentEditorTabs").VISUAL)d.props.onJSONChange(b("AdsMessengerUtils").getDefaultJSON());else if(!c&&a===b("AdsMessengerContentEditorTabs").VISUAL){c=d.props.pageID instanceof b("AdsUniformValue")?d.props.pageID.getValue():null;d.props.onJSONChange(b("AdsMessengerVisualEditorUtils").getStandardTemplateDefaultJSON(c))}},d.$20=function(a){d.props.onJSONChange(b("adsMessengerDataModelSetGenericTitle")(d.props.welcomeMessageJSON,a))},d.$15=function(a){d.props.onJSONChange(b("adsMessengerDataModelRemoveCTA")(d.props.welcomeMessageJSON,a))},d.$11=function(a){a=b("adsMessengerDataModelChangeFormat")(d.props.welcomeMessageJSON,a,!0,!0);d.props.onJSONChange(a);return b("adsMessengerDataModelGetActionType")(a)},d.$21=function(a){d.props.onJSONChange(b("adsMessengerDataModelSetWelcomeMessage")(d.props.welcomeMessageJSON,a,!0))},d.$3=function(){var a=d.props.pageID instanceof b("AdsUniformValue")?d.props.pageID.getValue():null;d.props.onJSONChange(b("adsMessengerDataModelSwitchToIceBreakers")(d.props.welcomeMessageJSON,a))},d.$2=function(){d.props.onJSONChange(b("adsMessengerDataModelSwitchToButtons")(d.props.welcomeMessageJSON,!0))},d.$4=function(){var a=[{title:g._("J\u2019aimerais en savoir plus"),content_type:"text"}];d.props.onJSONChange(b("adsMessengerDataModelSwitchToQuickReplies")(d.props.welcomeMessageJSON,a,!0))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("AdsUEditorAdgroupMessengerContentEditor.react"),{accountID:this.props.accountID,actionType:b("adsMessengerDataModelGetActionType")(this.props.welcomeMessageJSON),attachmentText:b("adsMessengerDataModelGetAttachmentText")(this.props.welcomeMessageJSON),ctas:b("adsMessengerDataModelGetCTAs")(this.props.welcomeMessageJSON),defaultTextOnly:!0,errorSpec:this.props.errorSpec,format:b("adsMessengerDataModelGetMediaFormat")(this.props.welcomeMessageJSON),iceBreakers:b("adsMessengerDataModelGetIceBreakers")(this.props.welcomeMessageJSON),imageID:b("adsMessengerDataModelGetImageID")(this.props.welcomeMessageJSON),isCondensedFormat:!1,isGetStartedEnabled:!1,isIceBreakersSupported:!0,isLoading:this.props.isVideoLoading,isMessengerBot:this.$1(),isNewContent:!0,isNewDesign:!0,isSponsoredMessage:!1,isSuggestedReply:!0,isVisualEditorData:h(this.props.welcomeMessageJSON),json:this.props.welcomeMessageJSON,landingScreenType:b("adsMessengerDataModelGetLandingScreenType")(this.props.welcomeMessageJSON),pageID:this.props.pageID,quickReplies:b("adsMessengerDataModelGetQuickReplies")(this.props.welcomeMessageJSON),shouldShowErrors:this.props.shouldShowErrors,shown:this.props.shown,subtitle:b("adsMessengerDataModelGetGenericSubtitle")(this.props.welcomeMessageJSON),surface:b("MessengerContentEditorSurface").VISUAL_EDITOR_NEW,switchToButtons:this.$2,switchToIceBreakers:this.$3,switchToQuickReplies:this.$4,title:b("adsMessengerDataModelGetGenericTitle")(this.props.welcomeMessageJSON),videoURL:this.props.videoURL,visualEditorName:this.props.visualEditorName,welcomeMessage:b("adsMessengerDataModelGetWelcomeMessage")(this.props.welcomeMessageJSON,!0),onAddCTA:this.$5,onAddQR:this.$6,onAttachmentTextChange:this.$7,onCTATitleChange:this.$8,onCTATypeChange:this.$9,onCTAURLChange:this.$10,onIceBreakerChange:this.props.onIceBreakerChange,onFormatChange:this.$11,onImageSelect:this.$12,onJSONChange:this.props.onJSONChange,onLandingScreenChange:function(){},onQRPayloadChange:this.$13,onQRTitleChange:this.$14,onRemoveCTA:this.$15,onRemoveIceBreaker:this.$16,onRemoveQR:this.$17,onSubtitleChange:this.$18,onTabChange:this.$19,onTitleChange:this.$20,onWelcomeMessageChange:this.$21})};d.$1=function(){var a=this.props.pageID instanceof b("AdsUniformValue")?this.props.pageID.getValue():null;return!!b("AdsMessengerUtils").getIsMessengerPlatformBot(a)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("MessengerJSONPreviewContainer.react",["AdsFluxContainer","AdsImageInfoStore","AdsMessengerSavedResponseIndexProvider","AdsPageStore","MessengerAdPreviewConversation.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").Component;c=b("React").PropTypes;var g=b("AdsMessengerSavedResponseIndexProvider").toFluxStore();d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("AdsImageInfoStore"),b("AdsPageStore"),g]};c.calculateState=function(a,c){a=c.imageID;var d=null;if(c.pageID!=null&&c.pageID.length!==0){var e=b("AdsPageStore").get(c.pageID);d=e.name}e=a&&b("AdsImageInfoStore").getFullSize(a);a=c.visualEditorName&&g.getState()[c.visualEditorName];return{imageLoadObject:e,pageName:d,icebreakerIndex:a}};var d=c.prototype;d.render=function(){var a=this.state.imageLoadObject;a=this.props.imageID&&a&&a.hasValue()?a.getValueEnforcing():null;return b("React").createElement(b("MessengerAdPreviewConversation.react"),{className:this.props.className,callToAction:this.props.callToAction,description:this.props.description,iceBreakers:this.props.iceBreakers,icebreakerIndex:this.state.icebreakerIndex,imageURL:this.props.imageURL,isNewDesign:this.props.isNewDesign,isTextWithQR:this.props.isTextWithQR,isVisualEditorRedesign:this.props.isVisualEditorRedesign,jsonImageURL:a&&a.url,message:this.props.message,name:this.props.name,pageID:this.props.pageID,pageName:this.props.pageName==null||this.props.pageName.length===0?this.state.pageName:this.props.pageName,payload:this.props.payload,platformXMD:this.props.platformXMD,surface:this.props.surface,textSecondMessage:this.props.textSecondMessage,type:this.props.type,videoURL:this.props.videoURL})};return c}(a);d.propTypes={callToAction:c.string,description:c.string,iceBreakers:c.array,imageID:c.object,imageURL:c.string,isNewDesign:c.bool,isTextWithQR:c.bool,message:c.string,name:c.string,pageID:c.string,pageName:c.string,payload:c.object,platformXMD:c.object,surface:c.string,textSecondMessage:c.string,type:c.string,videoURL:c.string,visualEditorName:c.string};e.exports=b("AdsFluxContainer").create(d,{withProps:!0,name:e.id})}),null);
__d("MessengerDestinationExperiencePreview.react",["cx","AdsFluxContainer","AdsMessengerJSONMediaFormatType","AdsMessengerVisualEditorUtils","AdsUtils","MessengerJSONPreviewContainer.react","MessengerPlatformXMDType","PagesReplyComposerActions","PagesReplyComposerDispatcher","PagesReplyComposerStore","PagesReplyComposerTextUtilities","React","adsMessengerDataModelGetIceBreakers","adsMessengerDataModelGetImageID","adsMessengerDataModelGetMediaFormat","adsMessengerDataModelGetPayload","adsMessengerDataModelGetQuickReplies","adsMessengerDataModelGetSurface","adsMessengerDataModelGetTemplateType","adsMessengerDataModelGetWelcomeMessage","adsMessengerDataModelIsTextWithQR","setByPath"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("AdsUtils").clone,i="MessengerJSONPreview";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(a){return[b("PagesReplyComposerStore").getByKey(i)]};c.calculateState=function(){var a=b("PagesReplyComposerStore").getByKey(i).getState();return{composerState:a}};var d=c.prototype;d.UNSAFE_componentWillMount=function(){b("PagesReplyComposerDispatcher").getByKey(i).explicitlyRegisterStore(b("PagesReplyComposerStore").getByKey(i)),b("PagesReplyComposerActions").getActionsByKey(i).initializeStoreWithConfig({composerKey:i,initialReply:"",initialDisabled:!1,isAdsInterfaceSource:!0,pageID:this.props.pageID||"",placeholderText:""})};d.renderPersonalizedWelcomeMessage=function(a){return b("PagesReplyComposerTextUtilities").processMessage(a||"",this.state.composerState.supportedMacros)};d.render=function(){var a,c=b("adsMessengerDataModelGetWelcomeMessage")(this.props.welcomeMessageJSON,!0),d=h(b("adsMessengerDataModelGetPayload")(this.props.welcomeMessageJSON));this.props.pageID&&(c=this.renderPersonalizedWelcomeMessage(c));d&&b("adsMessengerDataModelGetMediaFormat")(this.props.welcomeMessageJSON)===b("AdsMessengerJSONMediaFormatType").TEXT&&!b("adsMessengerDataModelIsTextWithQR")(this.props.welcomeMessageJSON)&&(b("setByPath")(d,["text"],c),c=null);var e=b("adsMessengerDataModelGetQuickReplies")(this.props.welcomeMessageJSON);e=e&&e.filter(function(a){return!!a});e=e&&e.length?(a={},a[b("MessengerPlatformXMDType").QUICK_REPLIES]=e,a):null;a=b("adsMessengerDataModelGetIceBreakers")(this.props.welcomeMessageJSON);return!b("AdsMessengerVisualEditorUtils").isVisualEditorData(this.props.welcomeMessageJSON)?b("AdsMessengerVisualEditorUtils").getPreviewDisabledNotice(this.props.onJSONSend):b("React").createElement(b("MessengerJSONPreviewContainer.react"),{className:"_68to",iceBreakers:a,imageID:b("adsMessengerDataModelGetImageID")(this.props.welcomeMessageJSON),isNewDesign:!0,isTextWithQR:b("adsMessengerDataModelIsTextWithQR")(this.props.welcomeMessageJSON),isVisualEditorRedesign:!0,message:c,pageID:this.props.pageID,pageName:this.props.pageName,payload:d,platformXMD:e,surface:b("adsMessengerDataModelGetSurface")(this.props.welcomeMessageJSON),type:b("adsMessengerDataModelGetTemplateType")(this.props.welcomeMessageJSON),videoURL:this.props.videoURL,visualEditorName:this.props.visualEditorName})};return c}(b("React").Component);e.exports=b("AdsFluxContainer").create(a,{withProps:!0,name:e.id})}),null);
__d("adsUEditorAdgroupMessengerStandardTemplateSelector",["adsCreateSelector","adsUEditorAccountSelector","adsUEditorAdgroupMessengerAutoExpandSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateSelector")([b("adsUEditorAdgroupMessengerAutoExpandSelector"),b("adsUEditorAccountSelector")],function(a,b){return{accountID:b.account_id,shouldAutoExpandSavedResponses:a.shouldAutoExpandSavedResponses,showResponse:!0}},{name:e.id});e.exports=a}),null);
__d("MessengerDestinationStandardTemplateEditor.react",["cx","fbt","AdsFluxContainer","AdsMessengerConstants","AdsMessengerContentEditorTabs","AdsMessengerDestinationUtils","AdsMessengerErrorSpecType","AdsMessengerErrorSpecUtils","AdsUEditorAdgroupMessengerContentIceBreaker.react","CTMAdsSavedResponseFunnelLogger","FDSText.react","Link.react","MessengerVisualEditorAddResponseButton.react","PagesReplyComposerEditorContainer.react","PagesReplyComposerToolbarContainer.react","QE2Logger","React","adsUEditorAdgroupMessengerStandardTemplateSelector","suiMargin"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("AdsMessengerDestinationUtils").icebreakersHaveResponse;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$4=function(){b("CTMAdsSavedResponseFunnelLogger").logFunnelEvent("CLICK_ADD_RESPONSE_BUTTON"),d.setState({showResponse:!0})},c)||babelHelpers.assertThisInitialized(d)}c.getStores=function(a,c){a=c.adgroupEditorContext;return b("adsUEditorAdgroupMessengerStandardTemplateSelector").getStores(a)};c.calculateState=function(a,c,d){a=d.adgroupEditorContext;return b("adsUEditorAdgroupMessengerStandardTemplateSelector")(a)};var d=c.prototype;d.render=function(){var a=h._("Saisissez une amorce, comme \u00ab\u00a0Bonjour\u00a0! Dites-nous en quoi nous pouvons vous aider.\u00a0\u00bb");this.$1={composerKey:"welcomeMessage",initialDisabled:!1,initialReply:this.props.getGreetingText()||"",isAdsInterfaceSource:!0,maxCharacterLength:b("AdsMessengerConstants").WELCOME_MESSAGE_MAX_LENGTH,pageID:this.props.pageID,placeholderText:a};return b("React").createElement("div",{className:"_1wrs"},this.$2(),this.$3())};d.$2=function(){var a=h._("Message d\u2019accueil"),c=this.props.getGreetingText();return b("React").createElement("div",{className:"_28az"},b("React").createElement(b("FDSText.react"),{display:"block",size:"body3",weight:"bold"},a),b("React").createElement(b("FDSText.react"),{color:"secondary",display:"block",margin:"_3-96",size:"body3"},h._("Souhaitez la bienvenue sur la conversation Messenger gr\u00e2ce \u00e0 un message d\u2019accueil.")),b("React").createElement("div",{className:"_3-96 _28a_"},b("React").createElement(b("PagesReplyComposerEditorContainer.react"),{config:this.$1,welcomeString:c,onReplyChange:this.props.onGreetingTextChange}),b("React").createElement(b("PagesReplyComposerToolbarContainer.react"),{className:"_3w-l",config:this.$1})))};d.$5=function(a){a=b("AdsMessengerErrorSpecUtils").getCTAError(this.props.errorSpec,b("AdsMessengerErrorSpecType").ICE_BREAKERS,a);if(a)return a.errorMessage;else return null};d.$3=function(){__p&&__p();var a=this,c=h._("Questions\/r\u00e9ponses"),d="/business/help/1816962591668838";d=h._("Propose une liste de questions que les personnes sont susceptibles de se poser apr\u00e8s avoir cliqu\u00e9 sur votre publicit\u00e9. {Learn more for Ice Breaker}.",[h._param("Learn more for Ice Breaker",b("React").createElement(b("Link.react"),{href:d,target:"_blank"},h._("En savoir plus")))]);var e=i(this.props.getFAQs())||this.state.showResponse||this.state.shouldAutoExpandSavedResponses;this.props.shown&&b("QE2Logger").logExposureForAdAccountID("qe_expand_automated_responses",this.state.accountID);var f=[{title:"FAQ 1"},{title:"FAQ 2"},{title:"FAQ 3"}];f=this.props.getFAQs()||f;f=f.map(function(c,d){var f=a.$5(d);return b("React").createElement("div",{key:d},b("React").createElement(b("AdsUEditorAdgroupMessengerContentIceBreaker.react"),{errorMessage:f,index:d,showResponse:e,value:c,visualEditorName:b("AdsMessengerContentEditorTabs").STANDARD_TEMPLATE,onIceBreakerChange:a.props.onIceBreakerChange}))});return b("React").createElement("div",{className:"_28b2"},b("React").createElement("div",null,b("React").createElement(b("FDSText.react"),{display:"block",size:"body3",weight:"bold"},c)),b("React").createElement("div",null,b("React").createElement(b("FDSText.react"),{color:"secondary",display:"block",margin:"_3-96",size:"body3"},d)),f,!e&&this.props.shown&&b("React").createElement(b("MessengerVisualEditorAddResponseButton.react"),{onClick:this.$4}),b("React").createElement("div",null))};return c}(b("React").Component);e.exports=b("AdsFluxContainer").create(a,{withContext:!0,name:e.id})}),null);
__d("MessengerExperienceCancelDialog.react",["fbt","React","XUIDialog.react","XUIDialogBody.react","XUIDialogCancelButton.react","XUIDialogConfirmButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.isStandardTemplate?g._("Si vous confirmez, vos modifications seront perdues."):g._("Si vous confirmez, votre mod\u00e8le et toutes les modifications seront perdues."),c=this.props.isStandardTemplate?g._("abandonner les modifications\u00a0?"):g._("Abandonner le mod\u00e8le\u00a0?");return b("React").createElement(b("XUIDialog.react"),{height:200,shown:this.props.shown,width:500,onToggle:this.props.onToggle},b("React").createElement(b("XUIDialogTitle.react"),null,c),b("React").createElement(b("XUIDialogBody.react"),null,a),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogCancelButton.react"),{onClick:this.props.onCancel}),b("React").createElement(b("XUIDialogConfirmButton.react"),{action:"confirm",use:"confirm",onClick:this.props.onConfirm})))};return c}(b("React").Component);e.exports=a}),null);
__d("MessengerExperienceConfirmDialog.react",["fbt","React","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g._("Les mod\u00e8les que vous terminez seront enregistr\u00e9s afin que vous puissiez les r\u00e9utiliser pour vos campagnes futures. Une fois termin\u00e9, la seule mani\u00e8re de modifier votre mod\u00e8le sera de le dupliquer."),c=g._("Terminer votre mod\u00e8le\u00a0?");return b("React").createElement(b("XUIDialog.react"),{height:200,shown:this.props.shown,width:500,onToggle:this.props.onToggle},b("React").createElement(b("XUIDialogTitle.react"),null,c),b("React").createElement(b("XUIDialogBody.react"),null,a),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogCancelButton.react"),{onClick:this.props.onCancel}),b("React").createElement(b("XUIDialogButton.react"),{action:"confirm",label:g._("Terminer"),use:"confirm",onClick:this.props.onCreateConfirm})))};return c}(b("React").Component);e.exports=a}),null);
__d("adsMessengerDataModelGetIceBreaker",["adsMessengerDataModelGetIceBreakerPath","getByPath"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={title:null};function a(a,c){var d=b("adsMessengerDataModelGetIceBreakerPath")(a);if(d){a=b("getByPath")(a,d);if(a&&a.length>c)return a[c]||g}return g}e.exports=a}),null);
__d("adsMessengerDataModelSetIceBreaker",["adsMessengerDataModelClone","adsMessengerDataModelGetIceBreakerPath","getByPath","setByPath"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){var e=b("adsMessengerDataModelGetIceBreakerPath")(a),f=b("adsMessengerDataModelClone")(a);if(e){a=b("getByPath")(a,e);a&&a.length>c&&(a[c]=d);b("setByPath")(f,e,a)}return f}e.exports=a}),null);
__d("MessengerDestinationExperienceDialog.react",["cx","errorCode","errorDesc","fbt","AdsError","AdsInterfacesLogger","AdsLeadGenBigTextInput.react","AdsMessengerContentEditorTabs","AdsMessengerPageWelcomeMessageDataManager","AdsMessengerSetStandardTemplateAction","AdsMessengerUtils","AdsMessengerVisualEditorLoggerEvents","AdsMessengerVisualEditorUtils","AdsMessengerWelcomeMessageFields","AdsMessengerWelcomeMessageIcebreakerFields","AdsUniformValue","CTMAdsSavedResponseFunnelLogger","DialogFitHeightToContent","LayerFadeOnHide","LeftRight.react","Link.react","MessengerDestinationCustomTemplateEditor.react","MessengerDestinationExperiencePreview.react","MessengerDestinationStandardTemplateEditor.react","MessengerExperienceCancelDialog.react","MessengerExperienceConfirmDialog.react","React","SUISpinner.react","SUIText.react","URI","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react","adsMessengerDataModelGetIceBreaker","adsMessengerDataModelGetIceBreakers","adsMessengerDataModelGetWelcomeMessage","adsMessengerDataModelSetIceBreaker","adsMessengerDataModelSetWelcomeMessage","setByPath"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={previewBubble:null,previewLoading:!1,shouldShowErrors:!1,showCancelDialog:!1,showChangeTemplateDialog:!1,showConfirmDialog:!1,showPreviewSuccessDialog:!1,userEdited:!1},d.$13=function(){d.setState({showPreviewSuccessDialog:!1})},d.$19=function(){d.setState({previewBubble:null}),d.props.editorType===b("AdsMessengerContentEditorTabs").CUSTOM_TEMPLATE||d.props.editorType===b("AdsMessengerContentEditorTabs").USE_EXISTING||d.state.userEdited?d.setState({showCancelDialog:!0}):d.$11(),b("CTMAdsSavedResponseFunnelLogger").logFunnelEvent("CANCEL")},d.$16=function(a){var c=d.props.welcomeMessageJSON,e=b("adsMessengerDataModelGetWelcomeMessage")(c,!0);if(e===a)return;b("setByPath")(c,[b("AdsMessengerWelcomeMessageFields").USER_EDIT],!0);d.props.onJSONChange(b("adsMessengerDataModelSetWelcomeMessage")(c,new(b("AdsUniformValue"))(a),!0));d.setState({userEdited:!0})},d.$17=function(a,c){var e=d.props.welcomeMessageJSON,f=b("adsMessengerDataModelGetIceBreaker")(e,a);if(c.title===f.title&&c.response===f.response)return;b("setByPath")(e,[b("AdsMessengerWelcomeMessageFields").USER_EDIT],!0);d.props.onJSONChange(b("adsMessengerDataModelSetIceBreaker")(e,a,(f={},f[b("AdsMessengerWelcomeMessageIcebreakerFields").TITLE]=c.title,f[b("AdsMessengerWelcomeMessageIcebreakerFields").RESPONSE]=c.response==null?null:c.response,f)));d.props.editorType===b("AdsMessengerContentEditorTabs").STANDARD_TEMPLATE&&(b("AdsInterfacesLogger").log({eventName:b("AdsMessengerVisualEditorLoggerEvents").CTM_CHANGE_STANDARD_TEMPLATE_ICEBREAKER}),d.setState({userEdited:!0}))},d.$14=function(){return b("adsMessengerDataModelGetIceBreakers")(d.props.welcomeMessageJSON)},d.$15=function(){return b("adsMessengerDataModelGetWelcomeMessage")(d.props.welcomeMessageJSON,!0)},d.$20=function(){d.setState({shouldShowErrors:!0}),d.setState({previewBubble:null}),d.props.pageID!==null&&!d.props.errorSpec&&(d.props.editorType===b("AdsMessengerContentEditorTabs").CUSTOM_TEMPLATE||d.props.editorType===b("AdsMessengerContentEditorTabs").USE_EXISTING)?d.setState({showConfirmDialog:!0}):d.props.errorSpec||(b("AdsMessengerSetStandardTemplateAction").dispatch({standardTemplate:JSON.stringify(d.props.welcomeMessageJSON)},{line:"573",module:"MessengerDestinationExperienceDialog.react.js"}),b("AdsInterfacesLogger").log({eventName:b("AdsMessengerVisualEditorLoggerEvents").CTM_CHANGE_STANDARD_TEMPLATE}),d.setState({userEdited:!1}),d.props.onToggle(!1)),b("CTMAdsSavedResponseFunnelLogger").logFunnelEvent("SAVE")},d.$10=function(){var a=JSON.stringify(d.props.welcomeMessageJSON);b("AdsMessengerPageWelcomeMessageDataManager").createCustomTemplate(d.props.adgroupIDs,d.props.pageID,a,d.props.templateName,d.props.hostID);d.setState({showConfirmDialog:!1});d.props.onToggle(!1);d.props.isBetaDesign&&d.props.editorType!==b("AdsMessengerContentEditorTabs").USE_EXISTING&&d.props.onTabChange(b("AdsMessengerContentEditorTabs").USE_EXISTING)},d.$11=function(){__p&&__p();d.setState({showCancelDialog:!1,userEdited:!1});d.props.onToggle(!1);var a;if(d.props.selectedTemplate){a=d.props.selectedTemplate.page_welcome_message_body;try{a=JSON.parse(a)}catch(c){a=b("AdsMessengerVisualEditorUtils").getStandardTemplateMessage(d.props.pageID)}}else a=b("AdsMessengerVisualEditorUtils").getStandardTemplateMessage(d.props.pageID);d.props.onJSONChange(a)},d.$22=function(){d.state.userEdited?d.setState({showChangeTemplateDialog:!0}):d.$12()},d.$12=function(){d.setState({showChangeTemplateDialog:!1}),d.props.onTabChange(b("AdsMessengerContentEditorTabs").CUSTOM_TEMPLATE)},d.$21=function(){d.setState({shouldShowErrors:!0});if(!d.props.errorSpec){var a=d.props.pageID;if(!a)return;b("AdsMessengerUtils").getJSONSend(d.props.welcomeMessageJSON,a,function(){},d.$23,function(){})}b("CTMAdsSavedResponseFunnelLogger").logFunnelEvent("PREVIEW")},d.$23=function(a){d.setState({showPreviewSuccessDialog:!0})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.props.shown&&this.$1()};d.componentDidUpdate=function(a){this.props.shown&&!a.shown&&this.$1()};d.$1=function(){switch(this.props.editorType){case"standard_template":b("CTMAdsSavedResponseFunnelLogger").logFunnelEvent("OPEN_STANDARD_TEMPLATE");break;case"custom_template":b("CTMAdsSavedResponseFunnelLogger").logFunnelEvent("OPEN_CUSTOM_TEMPLATE");break;case"use_existing":b("CTMAdsSavedResponseFunnelLogger").logFunnelEvent("OPEN_USE_EXISTING");break}};d.render=function(){var a=this,c=this.props.editorType===b("AdsMessengerContentEditorTabs").STANDARD_TEMPLATE?j._("Modifier le mod\u00e8le standard"):j._("Cr\u00e9er un lieu personnalis\u00e9"),d=this.props.editorType===b("AdsMessengerContentEditorTabs").STANDARD_TEMPLATE?this.$2():this.$3(),e=this.$4(),f=this.props.editorType===b("AdsMessengerContentEditorTabs").CUSTOM_TEMPLATE||this.props.editorType===b("AdsMessengerContentEditorTabs").USE_EXISTING?this.$5():null;return b("React").createElement("div",null,b("React").createElement(b("XUIDialog.react"),babelHelpers["extends"]({behaviors:{DialogFitHeightToContent:b("DialogFitHeightToContent"),LayerFadeOnHide:b("LayerFadeOnHide")},destroyonhide:!0,layerHideOnBlur:!1,onHide:this.props.onToggle,shown:this.props.shown,width:950},this.props),b("React").createElement(b("XUIDialogTitle.react"),{className:"_1wrq",showCloseButton:!1},c),b("React").createElement(b("XUIDialogBody.react"),{useCustomPadding:!0},b("React").createElement("div",{className:"_1wrr"},f,b("React").createElement(b("LeftRight.react"),null,d,b("React").createElement("div",{className:"_1wrt"},e)))),b("React").createElement(b("XUIDialogFooter.react"),{leftContent:this.$6()},this.$7(),this.$8(),this.$9())),b("React").createElement(b("MessengerExperienceConfirmDialog.react"),{shown:this.state.showConfirmDialog,onCancel:function(){a.setState({showConfirmDialog:!1})},onCreateConfirm:this.$10,onToggle:function(b){a.setState({showConfirmDialog:b})}}),b("React").createElement(b("MessengerExperienceCancelDialog.react"),{isStandardTemplate:this.props.editorType===b("AdsMessengerContentEditorTabs").STANDARD_TEMPLATE,shown:this.state.showCancelDialog,onCancel:function(){a.setState({showCancelDialog:!1})},onConfirm:this.$11,onToggle:function(b){a.setState({showCancelDialog:b})}}),b("React").createElement(b("MessengerExperienceCancelDialog.react"),{isStandardTemplate:!0,shown:this.state.showChangeTemplateDialog,onCancel:function(){a.setState({showChangeTemplateDialog:!1})},onConfirm:this.$12,onToggle:function(b){a.setState({showChangeTemplateDialog:b})}}),b("AdsMessengerVisualEditorUtils").showMessengerPreviewSuccessDialog(this.state.showPreviewSuccessDialog,this.props.pageName,this.$13))};d.$2=function(){return b("React").createElement(b("MessengerDestinationStandardTemplateEditor.react"),{accountID:this.props.accountID,errorSpec:this.state.shouldShowErrors?this.props.errorSpec:null,getFAQs:this.$14,getGreetingText:this.$15,pageID:String(this.props.pageID),shown:this.props.shown,welcomeMessageJSON:this.props.welcomeMessageJSON,onGreetingTextChange:this.$16,onIceBreakerChange:this.$17})};d.$3=function(){return b("React").createElement("div",{className:"_1wrs"},b("React").createElement(b("MessengerDestinationCustomTemplateEditor.react"),{accountID:this.props.accountID,errorSpec:this.state.shouldShowErrors?this.props.errorSpec:null,isVideoLoading:this.props.isVideoLoading,pageID:new(b("AdsUniformValue"))(this.props.pageID),shouldShowErrors:this.state.shouldShowErrors,shown:this.props.shown,videoID:this.props.videoID,videoURL:this.props.videoURL,visualEditorName:this.props.visualEditorName,welcomeMessageJSON:this.props.welcomeMessageJSON,getFAQs:this.$14,onJSONChange:this.props.onJSONChange,onIceBreakerChange:this.$17}))};d.$5=function(){var a=j._("Donnez un nom \u00e0 votre mod\u00e8le"),c=this.$18();return b("React").createElement("div",{className:"_19yp"},b("React").createElement(b("AdsLeadGenBigTextInput.react"),{className:"_5jqd",error:c&&c.message,placeholder:a,value:this.props.templateName,onBlur:function(){},onChange:this.props.onTemplateNameChange,onFocus:function(){}}))};d.$7=function(){var a=j._("Annuler");return b("React").createElement(b("XUIDialogButton.react"),{label:a,onClick:this.$19})};d.$9=function(){var a=j._("Enregistrer les modifications"),c=j._("Termin\u00e9");a=this.props.editorType===b("AdsMessengerContentEditorTabs").STANDARD_TEMPLATE?a:c;c=this.$18();return b("React").createElement(b("XUIDialogButton.react"),{action:"confirm",disabled:(this.props.errorSpec||c)&&this.state.shouldShowErrors,label:a,use:"confirm",onClick:this.$20})};d.$8=function(){var a=j._("Afficher un aper\u00e7u dans Messenger");return b("React").createElement(b("XUIDialogButton.react"),{action:"button",disabled:this.props.errorSpec&&this.state.shouldShowErrors,label:a,onClick:this.$21})};d.$6=function(){var a=b("React").createElement(b("Link.react"),{href:"/business/help/1816962591668838",target:"_blank"},j._("Aide")),c=b("React").createElement(b("Link.react"),{href:new(b("URI"))("/business/m/one-sheeters/improve-click-to-messenger?locale=en_US"),target:"_blank"},j._("Voir des astuces et des exemples."));a=this.props.editorType===b("AdsMessengerContentEditorTabs").STANDARD_TEMPLATE?j._("Vous voulez inclure des photos, des vid\u00e9os, et plus encore\u00a0? Utilisez un {Link to Custom Template}.",[j._param("Link to Custom Template",b("React").createElement(b("Link.react"),{target:"_blank",onClick:this.$22},j._("Mod\u00e8le personnalis\u00e9")))]):j._("Obtenir de l\u2019{Help link about CTM ad} ou {Tips and exammples about CTM ad}",[j._param("Help link about CTM ad",a),j._param("Tips and exammples about CTM ad",c)]);return a};d.$4=function(){var a=j._("Aper\u00e7u Messenger"),c=this.state.previewLoading?b("React").createElement("div",{className:"_3mqx"},b("React").createElement(b("SUISpinner.react"),null)):null;return b("React").createElement("div",null,b("React").createElement("div",{className:"_3d22"},b("React").createElement(b("SUIText.react"),{display:"block",size:"body1",weight:"bold"},a)),b("React").createElement("div",{className:"_3d24"},c,this.state.previewBubble,b("React").createElement(b("MessengerDestinationExperiencePreview.react"),{pageID:this.props.pageID,pageName:this.props.pageName,videoURL:this.props.videoURL,visualEditorName:this.props.visualEditorName,welcomeMessageJSON:this.props.welcomeMessageJSON,onJSONSend:this.$21})))};d.$18=function(){return this.props.editorType===b("AdsMessengerContentEditorTabs").CUSTOM_TEMPLATE&&!this.props.templateName?new(b("AdsError"))(1815895,i._(function(a,b){return a._("Veuillez entrer un nom de mod\u00e8le")},{}),{level:b("AdsError").Level.WARN}):null};return c}(b("React").Component);e.exports=a}),null);