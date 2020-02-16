if (self.CavalryLogger) { CavalryLogger.start_js(["xZ\/0V"]); }

__d("AdsIterativeSplitTestCreationBlockedReducerPlugin",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";var g=1e4;a={reduce:function(a,c){return[{bodyText:c.budgetErrorMessage,canDismiss:!0,cardType:"error","data-testid":"iterativeSplitTestBudgetBlockedToast",dismissTimer:g,id:"iterativeSplitTestBudgetBlockedToast",useCase:"iterativeSplitTestCreationBlocked",onDismiss:b("emptyFunction")}]}};e.exports=a}),null);
__d("AdsIterativeSplitTestCreationBlockedDataAction",["Laminar","AdsIterativeSplitTestCreationBlockedReducerPlugin","AdsToastCardDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("AdsIterativeSplitTestCreationBlockedReducerPlugin"),b("AdsToastCardDataProvider"),{})]},function(){return[]},"AdsIterativeSplitTestCreationBlockedDataActionPlugin");e.exports=a}),null);
__d("AdsEditorIterativeSplitTestEntryCard.react",["cx","fbt","invariant","AdObjectLevels","AdsCCCategory","AdsCCCategoryConfig","AdsIterativeSplitTestActions","AdsIterativeSplitTestCreationBlockedDataAction","AdsIterativeSplitTestCreationSource","AdsIterativeSplitTestLoggingEvents","AdsIterativeSplitTestUtils","AdsStaticInlineNux.react","ObjectCreationSource","React","nullthrows"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("AdsCCCategoryConfig").CardLayout;function k(a){a=(a=a.entryCardConfigData)==null?void 0:a.selectedAdObjectLevel;if(a==null)return null;a=a===b("AdObjectLevels").CAMPAIGN;return{creationSource:a?b("AdsIterativeSplitTestCreationSource").ITERATIVE_EDIT_UPSELL_CAMPAIGN:b("AdsIterativeSplitTestCreationSource").ITERATIVE_EDIT_UPSELL_ADGROUP,objectCreationSource:a?b("ObjectCreationSource").ITERATIVE_SPLIT_TEST_CAMPAIGN_EDIT_UPSELL:b("ObjectCreationSource").ITERATIVE_SPLIT_TEST_ADGROUP_EDIT_UPSELL}}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={mode:"none"},d.$5=function(){d.setState({mode:"creation-upsell-card-hidden"})},d.$3=function(){__p&&__p();var a=d.$6();if(a!=null){b("AdsIterativeSplitTestCreationBlockedDataAction").dispatch({budgetErrorMessage:a},{line:"268",module:"AdsEditorIterativeSplitTestEntryCard.react.js"});return}a=b("nullthrows")(k(d.props));var c=a.creationSource;a=a.objectCreationSource;var e=b("nullthrows")(d.props.entryCardConfigData),f=e.account,g=e.campaignGroupDraftFragment,h=e.originalAdgroupDraftFragment;e=e.originalCampaignDraftFragment;b("AdsIterativeSplitTestActions").createIterativeSplitTestFromEdit({account:f,campaignGroupDraftFragment:g,originalAdgroupDraftFragment:h,originalCampaignDraftFragment:e,creationSource:c,objectCreationSource:a});d.setState({mode:"creation-upsell-card"})},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,b){b=b.mode;a=a.entryCardConfigData;switch(b){case"none":return a?{mode:"creation-upsell-card"}:null;case"creation-upsell-card":case"creation-upsell-card-hidden":return a==null?{mode:"none"}:null}return null};var d=c.prototype;d.componentDidMount=function(){var a=this.state.mode;a==="creation-upsell-card"&&this.$1()};d.componentDidUpdate=function(a,b){var c=this.state.mode;b=b.mode;a=this.props.campaignID!==a.campaignID;if(a&&c==="creation-upsell-card-hidden"){this.setState({mode:"none"});return}c==="creation-upsell-card"&&(b==="none"||a)&&this.$1()};d.render=function(){return this.state.mode==="none"?null:this.$2()};d.$1=function(){var a,c;b("AdsIterativeSplitTestUtils").logEvent(b("AdsIterativeSplitTestLoggingEvents").ITERATIVE_SPLIT_TEST_CREATION_EDIT_UPSELL_SHOWN,(c={},c.object_ids=[this.props.campaignID],c.event_source=(a=k(this.props))==null?void 0:a.creationSource,c))};d.$2=function(){var a,c=this.state.mode;a=(a=this.props)==null?void 0:a.entryCardConfigData;if(a==null)return null;if(c!=="creation-upsell-card"||a.budgetData==null)return null;c=[{type:"LEARN_MORE",data:{cmsID:"1159714227408868"}},{type:"BUTTON_GROUP",data:{buttonsData:[{text:h._("Cr\u00e9er un test"),onCallToAction:this.$3}]}}];return b("React").createElement("div",{className:"_3-96"},b("React").createElement(b("AdsStaticInlineNux.react"),{ccCardProps:{category:b("AdsCCCategory").RECOMMENDATION_BEST_PRACTICE,ctaData:c,header:h._("Vous voulez tester ces modifications\u00a0?"),layout:j.VERTICAL,messageID:"create_iterative_test_upsell",textData:[{type:"PARAGRAPH",data:{text:this.$4(a.selectedAdObjectLevel)}}]},onCustomizedClose:this.$5}))};d.$6=function(){var a;a=b("nullthrows")((a=this.props)==null?void 0:(a=a.entryCardConfigData)==null?void 0:a.budgetData);a.status!=="unknown"||i(0,3431);if(a.status==="sufficient")return null;var c=a.formattedMinimumBudget;a=a.isLifetimeBudget;return a===!0?h._("En fonction des param\u00e8tres de votre ensemble de publicit\u00e9s, votre budget global total doit \u00eatre au minimum {additional_formated_budget} afin de pouvoir cr\u00e9er un test.",[h._param("additional_formated_budget",c)]):h._("En fonction des param\u00e8tres de votre ensemble de publicit\u00e9s, votre budget quotidien doit \u00eatre au minimum {additional_formated_budget} afin de pouvoir cr\u00e9er un test.",[h._param("additional_formated_budget",c)])};d.$4=function(a){return a===b("AdObjectLevels").ADGROUP?h._("Vous pouvez utiliser votre budget existant pour tester en quoi ces modifications impactent la performance de votre publicit\u00e9."):h._("Vous pouvez utiliser votre budget existant pour tester en quoi ces modifications impactent la performance de votre ensemble de publicit\u00e9s.")};return c}(b("React").Component);e.exports=a}),null);