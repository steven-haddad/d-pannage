if (self.CavalryLogger) { CavalryLogger.start_js(["Fqux3"]); }

__d("AdsManagementDeliveryScheduleEditor.react",["AdsAPIAccountPaths","AdsAPICampaignPaths","AdsBulkCampaignScheduleField.react","AdsBulkValueUtils","AdsCampaignBudgetPluginResolver","AdsCampaignUtils","AdsDeliveryBudgetModes","AdsDeliveryContainerUtils","AdsDeliveryEditorFactory","AdsEmptyValue","AdsUniformValue","DateTime","React","getByPath"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").Component;c=b("React").PropTypes;var g=b("AdsBulkValueUtils").parallelIterator;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a,c){var e=d.context.getExtraData();e=e.account;e=e.timezone_id;var f={};c&&(f.endTime=b("AdsCampaignUtils").convertTimestampToISOString(c,e));a&&(f.startTime=b("AdsCampaignUtils").convertTimestampToISOString(a,e));d.$2(f)},d.$3=function(){var a=d.props.onToggleScheduleModeInManagement;a()},d.$4=function(a){var c=d.context.getExtraData();c=c.account;c=c.timezone_id;d.$2({endTime:b("AdsCampaignUtils").convertTimestampToISOString(a,c)})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(a){var b=this.props.onChangeSchedule;b(a)};d.$5=function(){var a=b("AdsDeliveryContainerUtils").getLifetimeBudget(this.context.getApiSpec());return this.props.campaignGroupBudgetMode instanceof b("AdsUniformValue")&&this.props.campaignGroupBudgetMode.getValue()===b("AdsDeliveryBudgetModes").LIFETIME||a instanceof b("AdsUniformValue")&&+a.getValue()>0};d.render=function(){__p&&__p();var a=this.context.getApiSpec(),c=this.context.getExtraData(),d=c.account,e=c.objective;c=c.promotedObjectType;var f=d.timezone_id,h=d.currency,i=d.min_daily_budget,j=d.timezone_offset_hours_utc,k=this.props,l=k.canChooseTime,m=k.errorSpec,n=k.id,o=k.isNewCampaign,p=k.originalEndTime,q=k.originalStartTime;k=k.willAffectBrandStudy;var r=a.getIn(b("AdsAPICampaignPaths").START_TIME),s=b("AdsBulkValueUtils").isNullValue(r)?b("AdsEmptyValue").instance():b("AdsCampaignUtils").convertISOStringToTimeStamp(r,f),t=a.getIn(b("AdsAPICampaignPaths").END_TIME);r=this.$5()&&o?g(function(a){var c=a[0],e=a[1];a=a[2];return b("AdsCampaignUtils").getISODateTimeString(b("AdsCampaignUtils").getDefaultEndDate(b("DateTime").fromISOString(c,f).toDate(),null,b("AdsCampaignUtils").getScheduleLengthsDays(),b("AdsCampaignBudgetPluginResolver").resolve({objective:e,promotedObjectType:a})),b("getByPath")(d,b("AdsAPIAccountPaths").TIMEZONE_OFFSET_HOURS_UTC))},[r,e,c]):b("AdsEmptyValue").instance();e=b("AdsBulkValueUtils").isNullValue(t)?b("AdsCampaignUtils").convertISOStringToTimeStamp(r,f):b("AdsCampaignUtils").convertISOStringToTimeStamp(t,f);c=b("AdsCampaignUtils").convertBulkTime(p,f);r=b("AdsCampaignUtils").convertBulkTime(q,f);t=b("getByPath")(m,b("AdsAPICampaignPaths").END_TIME);p=b("getByPath")(m,b("AdsAPICampaignPaths").START_TIME);q=b("AdsDeliveryContainerUtils").getDailyBudget(a);m=b("AdsDeliveryContainerUtils").getLifetimeBudget(a);return b("React").createElement(b("AdsBulkCampaignScheduleField.react"),{campaignGroupBudgetMode:this.props.campaignGroupBudgetMode,canChooseEndTime:l,canChooseStartTime:l,className:this.props.className,currency:h,dailyBudget:q,endTime:e,endTimeError:t,hasBulkCampaignGroupBudget:this.props.hasBulkCampaignGroupBudget,hasIterativeSplitTest:!!this.props.hasIterativeSplitTest,hasSplitTest:this.props.hasSplitTest,id:n,isNew:o,lifetimeBudget:m,minDailyBudget:i,originalEndTime:c,originalStartTime:r,shouldShowIterativeSplitTestWarning:this.props.shouldShowIterativeSplitTestWarning,startTime:s,startTimeError:p,timezoneID:f,timezoneOffsetHours:j,willAffectBrandStudy:k,onResetEndTime:this.$4,onScheduleChange:this.$1,onScheduleModeChange:this.$3})};return c}(a);d.displayName="AdsManagementDeliveryScheduleEditor";d.webdriverID="campaign-schedule";d.contextTypes={getApiSpec:c.func.isRequired,getExtraData:c.func.isRequired};e.exports=b("AdsDeliveryEditorFactory").create(d)}),null);
__d("AdsManagementDeliverySplitTestCampaignBudgetField.react",["cx","fbt","AdsCampaignSplitTestWeightedSplitBudgetSelector.react","AdsCommonSplitTestBudgetUtils","AdsCurrencyInput.react","AdsSplitTestBudgetMode","AdsSplitTestBudgetUtils","AdsSplitTestStrings","BUIFormElement.react","FDSText.react","React","suiMargin"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").Component;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$3=function(a){a!=null&&a!==0&&c.props.onCampaignSplitChange(c.props.index,a)},c.$5=function(a){a!=null&&a!==0&&c.props.onCampaignBudgetChange(c.props.index,a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$1=function(){return b("React").createElement("span",{className:"_ja9"},b("React").createElement(b("FDSText.react"),{color:"secondary",size:"meta1",weight:"bold"},b("AdsCommonSplitTestBudgetUtils").formatSplitPercent(this.props.split)))};d.$2=function(){return b("React").createElement("span",{className:"_ja9"},b("React").createElement(b("AdsCampaignSplitTestWeightedSplitBudgetSelector.react"),{isDisabled:this.props.isEditingSplitsDisabled,maxWidth:300,minPreset:0,preset:this.props.split,onPresetChange:this.$3}))};d.$4=function(){return b("React").createElement("span",{className:"_jab"},b("AdsSplitTestBudgetUtils").formatCurrency(this.props.currency,this.props.campaignBudget))};d.$6=function(){return b("React").createElement(b("AdsCurrencyInput.react"),{className:"_jab _jac",currency:this.props.currency,nonnegative:!0,ref:"budgetInput",value:this.props.campaignBudget,withISO:!1,withNumberDelimiters:!0,onDataUpdate:this.$5})};d.$7=function(){var a=this.props.splitTestBudgetMode;return b("React").createElement("span",null,this.$6(),a===b("AdsSplitTestBudgetMode").WEIGHTED?this.$2():this.$1())};d.$8=function(){return b("React").createElement("span",null,this.$4(),this.$1())};d.render=function(){return b("React").createElement(b("BUIFormElement.react"),{className:"_uzl _uzm",label:"\xa0"},b("React").createElement("span",{className:this.props.className},b("React").createElement(b("FDSText.react"),{color:"secondary",margin:"_3-91",size:"meta1",weight:"bold"},h._("Ensemble de publicit\u00e9s {ad set version, e.g. A}",[h._param("ad set version, e.g. A",b("AdsSplitTestStrings").getLetterForIndex(this.props.index))])),this.props.isCurrentCampaign?this.$7():this.$8()))};return c}(a);e.exports=c}),null);
__d("AdsSplitTestPowerRecommendationCardContainer.react",["AdsBulkValueUtils","AdsEditingCampaignEditorContext","AdsFluxContainer","AdsLoadObjectUtils","AdsSplitTestBudgetRecommendationUtils","AdsSplitTestBudgetSelectors","AdsSplitTestPowerConstants","AdsSplitTestPowerRecommendationInlineNUX.react","AdsSplitTestQESelectors","AdsSplitTestSetBudgetAndSplitsDataAction","AdsSplitTestUtils","React","adsCreateSelector","adsUEditorCampaignsForSelectedCampaignGroupsSelector_SLOW","adsUEditorSelectedCampaignGroupsSelector","adsUEditorSplitTestSectionInfoSelector","compactArray","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsSplitTestBudgetRecommendationUtils").getTestBudgetForRecommendedPower;a=b("AdsSplitTestBudgetSelectors").powerEstimatesSelector;c=b("AdsSplitTestBudgetSelectors").powerForBudgetSelector;d=b("AdsSplitTestQESelectors").powerEstimateQELoaderSelector;var h=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(a=d=c.call.apply(c,[this].concat(f))||this,d.$1=function(){var a=d.props,c=a.account,e=a.campaignGroup,f=a.campaigns,h=a.powerEstimates;a=a.splits;h=g(h,c,e,f,!0);b("AdsSplitTestSetBudgetAndSplitsDataAction").dispatch({budget:h,campaignGroupIDs:[e.id],campaignIDs:f.map(function(a){return a.id}),splits:a},{line:"88",module:"AdsSplitTestPowerRecommendationCardContainer.react.js"})},a)||babelHelpers.assertThisInitialized(d)}var d=a.prototype;d.render=function(){return b("React").createElement(b("AdsSplitTestPowerRecommendationInlineNUX.react"),{messageID:"aymt_ads_split_test_power_recommendation_ads_manager",onBudgetUpdate:this.$1})};return a}(b("React").Component),i={shouldShowRecommendation:!1},j=b("adsCreateSelector")([b("adsUEditorSplitTestSectionInfoSelector"),b("adsUEditorSelectedCampaignGroupsSelector"),b("adsUEditorCampaignsForSelectedCampaignGroupsSelector_SLOW"),d,a,c],function(a,c,d,e,f,g){__p&&__p();if(a.haveSplitTest===!1)return i;if(a.isAnySplitTestCompleted)return i;var h=b("AdsBulkValueUtils").getUniformValue(a.campaignGroupID);if(h==null)return i;c=b("nullthrows")(c.find(function(a){return a.id===h}));if(b("AdsLoadObjectUtils").anyLoadingOrEmpty([g,d,e,f]))return i;if(b("AdsSplitTestUtils").getPowerEstimateQEGroup(e.getValueEnforcing())==="control")return i;e=g.getValueEnforcing();return e>=b("AdsSplitTestPowerConstants").RECOMMENDED_POWER?i:{shouldShowRecommendation:!0,account:a.account,campaignGroup:c,campaigns:b("compactArray")(d.getValueEnforcing()),powerEstimates:f.getValueEnforcing(),splits:b("nullthrows")(b("AdsBulkValueUtils").getUniformValue(a.splitTestSplits))}},{name:e.id+".splitTestPowerRecommendationSelector"});f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return j.getStores(b("AdsEditingCampaignEditorContext"))};c.calculateState=function(a,c){return j(b("AdsEditingCampaignEditorContext"))};var d=c.prototype;d.render=function(){var a=this.state;if(a.shouldShowRecommendation===!1)return null;a.shouldShowRecommendation;a=babelHelpers.objectWithoutPropertiesLoose(a,["shouldShowRecommendation"]);return b("React").createElement(h,a)};return c}(b("React").Component);e.exports=b("AdsFluxContainer").create(f,{withProps:!0,name:e.id})}),null);
__d("AdsManagementDeliverySplitTestBudgetEditor.react",["cx","fbt","AdsAPICampaignPaths","AdsBudgetModeSelector.react","AdsBudgetUtils","AdsBulkValueUtils","AdsCampaignSplitTestBudgetModeSelector.react","AdsCampaignSplitTestPowerEstimateContainer.react","AdsCommonSplitTestBudgetUtils","AdsDeliveryBudgetModes","AdsDeliveryEditorFactory","AdsDeliveryUIConstants","AdsInterfacesComponentsInterfaces","AdsManagementDeliverySplitTestCampaignBudgetField.react","AdsMixedValue","AdsSplitTestBudgetMode","AdsSplitTestBudgetUtils","AdsSplitTestPowerRecommendationCardContainer.react","AdsSplitTestSitevarConfig","AdsSplitTestUtils","AdsStrings","AdsUniformValue","BUIForm.react","BUIFormElement.react","React","RecurringBudgetMessageForNewCampaignNotice.react","getBulkByPath","nullthrows"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("AdsDeliveryUIConstants").BulkBudgetMode;a=b("React").Component;c=b("React").PropTypes;function j(a){__p&&__p();var c=a.account,d=a.bulkBudgetMode,e=a.bulkCampaignGroupSpec,f=a.bulkCampaignSpec,g=a.bulkSplitTestBudget,h=a.bulkSplitTestSplits,j=a.isShowingColorCodedPower;a=a.powerEstimateQE;g=b("AdsBulkValueUtils").getUniformValue(g);d=d===i.DAILY?b("AdsDeliveryBudgetModes").DAILY:d===i.LIFETIME?b("AdsDeliveryBudgetModes").LIFETIME:null;e=b("AdsBulkValueUtils").getUniformValue(e.objective);var k=b("AdsBulkValueUtils").getUniformValue(b("getBulkByPath").orEmpty(f,b("AdsAPICampaignPaths").START_TIME));f=b("AdsBulkValueUtils").getUniformValue(b("getBulkByPath").orEmpty(f,b("AdsAPICampaignPaths").END_TIME));h=b("AdsBulkValueUtils").getUniformValue(h);if(g==null||d==null||e==null||k==null||f==null||h==null)return null;a=b("AdsSplitTestUtils").getPowerEstimateQEGroup(a);return a==="control"?null:b("React").createElement(b("AdsCampaignSplitTestPowerEstimateContainer.react"),{account:c,budget:g,budgetMode:d,cellCount:h.length,endTime:f,isShowingColorCodedPower:j,objective:e,source:b("AdsInterfacesComponentsInterfaces").ADS_MANAGER,startTime:k})}function k(a){var c=a.bulkBudgetMode;a=a.onBudgetModeChange;return b("React").createElement("div",{className:"_3-94"},b("React").createElement(b("AdsBudgetModeSelector.react"),{budgetMode:c===i.DAILY?new(b("AdsUniformValue"))(b("AdsDeliveryBudgetModes").DAILY):c===i.LIFETIME?new(b("AdsUniformValue"))(b("AdsDeliveryBudgetModes").LIFETIME):new(b("AdsMixedValue"))([]),isDisabled:!1,onChange:a}))}function l(a){var c=a.bulkBudgetMode,d=a.currency,e=a.isNewCampaign,f=a.onBudgetModeChange,g=a.powerEstimate;a=a.splitTestBudget;var j=c===i.DAILY||c===i.LIFETIME;e=e instanceof b("AdsUniformValue")&&e.getValue()===!0;return b("React").createElement(b("BUIFormElement.react"),{label:e||!j?h._("Budget"):c===i.DAILY?h._("Budget quotidien"):c===i.LIFETIME?h._("Budget global"):""},b("React").createElement("span",{className:"_3klc _nas uiContextualLayerParent"},e?b("React").createElement(k,{bulkBudgetMode:c,onBudgetModeChange:f}):null,a instanceof b("AdsUniformValue")&&j?h._("{budget}",[h._param("budget",b("AdsSplitTestBudgetUtils").formatCurrency(d,a.getValue()))]):b("AdsStrings").MixedValuePlaceholder),g,a instanceof b("AdsUniformValue")&&c===i.DAILY?b("React").createElement("div",null,b("React").createElement(b("RecurringBudgetMessageForNewCampaignNotice.react"),{budget:a.getValue(),currency:d})):null)}function m(a){var c=a.isEditingSplitsDisabled,d=a.splitTestBudgetMode;a=a.onBudgetSplitModeChange;return b("React").createElement(b("BUIFormElement.react"),{label:h._("R\u00e9partition")},b("React").createElement("span",{className:"_3klc"},d instanceof b("AdsUniformValue")?b("React").createElement(b("AdsCampaignSplitTestBudgetModeSelector.react"),{budgetMode:d.getValue(),isDisabled:c,maxWidth:300,onBudgetModeChange:a}):b("AdsStrings").MixedValuePlaceholder))}function n(a){var c=a.account,d=a.bulkBudgetMode,e=a.bulkCampaignSpec,f=a.bulkSplitTestBudget,g=a.bulkSplitTestBudgetMode,h=a.bulkSplitTestSplits,j=a.currency,k=a.isEditingSplitsDisabled,l=a.onCampaignBudgetChange,m=a.onCampaignSplitChange,n=b("AdsBulkValueUtils").getUniformValueOrDefault(g);a=b("AdsBulkValueUtils").getUniformValueOrDefault(h);g=b("AdsBulkValueUtils").getUniformValueOrDefault(f);if(!(d===i.DAILY||d===i.LIFETIME)||n==null||a==null||g==null)return null;var o=d===i.DAILY?b("AdsDeliveryBudgetModes").DAILY:b("AdsDeliveryBudgetModes").LIFETIME,p=b("getBulkByPath").orThrow(e,b("AdsAPICampaignPaths").SPLIT_TEST_CONFIG_SPLITS_INDEX).getValues(),q=b("AdsCommonSplitTestBudgetUtils").getCampaignBudgets(a,g);return b("React").createElement("div",{className:"_2pif"},a.map(function(a,d){return b("React").createElement(b("AdsManagementDeliverySplitTestCampaignBudgetField.react"),{account:c,budgetMode:o,campaignBudget:q[d],className:"_3klc",currency:j,index:d,isCurrentCampaign:p.includes(d),isEditingSplitsDisabled:k,key:d,split:a,splitTestBudgetMode:n,onCampaignBudgetChange:l,onCampaignSplitChange:m})}))}d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(a){d.props.onBudgetModeChange(a.getValue())},d.$3=function(a){var c=b("AdsBulkValueUtils").getUniformValueOrDefault(d.props.splitTestBudget),e=b("AdsBulkValueUtils").getUniformValueOrDefault(d.props.splitTestSplits);if(c==null||e==null)return;e=e.length;a=a===b("AdsSplitTestBudgetMode").WEIGHTED?b("AdsSplitTestBudgetUtils").getWeightedSplitPercentages(e):b("AdsCommonSplitTestBudgetUtils").getEvenSplitPercentages(e);d.props.onBudgetAndSplitsChange(c,a)},d.$4=function(a,c){var e=b("AdsBulkValueUtils").getUniformValueOrDefault(d.props.splitTestSplits);if(e==null)return;a=b("AdsSplitTestBudgetUtils").getCampaignGroupBudgetFromCampaignBudget(e,e[a],c);d.props.onBudgetAndSplitsChange(a,e)},d.$5=function(a,c){var e=b("AdsBulkValueUtils").getUniformValueOrDefault(d.props.splitTestBudget),f=b("AdsBulkValueUtils").getUniformValueOrDefault(d.props.splitTestSplits);if(e==null||f==null)return;d.props.onBudgetAndSplitsChange(e,b("AdsSplitTestBudgetUtils").getWeightedSplitPercentages(f.length,c,a))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.context.getExtraData(),c=a.account;a=a.bulkCampaignGroupSpec;var d=this.context.getApiSpec();d=b("AdsBudgetUtils").getBudgetModeFromSpec(d);var e=c.currency,f=b("AdsBulkValueUtils").mapBulkValue(this.props.splitTestSplits,function(a){return b("AdsCommonSplitTestBudgetUtils").getSplitTestBudgetMode(b("nullthrows")(a))}),g=this.$1();return b("React").createElement(b("BUIForm.react"),{className:this.props.className,density:"taut"},b("React").createElement(b("AdsSplitTestPowerRecommendationCardContainer.react"),null),b("React").createElement(l,{bulkBudgetMode:d,currency:e,isNewCampaign:this.props.isNewCampaign,powerEstimate:b("React").createElement(j,{account:c,bulkBudgetMode:d,bulkCampaignGroupSpec:a,bulkCampaignSpec:this.props.bulkCampaignSpec,bulkSplitTestBudget:this.props.splitTestBudget,bulkSplitTestSplits:this.props.splitTestSplits,isShowingColorCodedPower:!this.props.isInTorsoHoldout,powerEstimateQE:this.props.powerEstimateQE}),splitTestBudget:this.props.splitTestBudget,onBudgetModeChange:this.$2}),b("React").createElement(m,{isEditingSplitsDisabled:g,splitTestBudgetMode:f,onBudgetSplitModeChange:this.$3}),b("React").createElement(n,{account:c,bulkBudgetMode:d,bulkCampaignSpec:this.props.bulkCampaignSpec,bulkSplitTestBudget:this.props.splitTestBudget,bulkSplitTestBudgetMode:f,bulkSplitTestSplits:this.props.splitTestSplits,currency:e,isEditingSplitsDisabled:g,onCampaignBudgetChange:this.$4,onCampaignSplitChange:this.$5}))};d.$1=function(){var a=this.context.getExtraData();a=a.bulkCampaignGroupSpec;return b("AdsSplitTestUtils").doesBulkSpecContainNonScheduledStatusSplitTest(a)||this.props.splitTestSplits.getValues().some(function(a){return a.length<b("AdsSplitTestSitevarConfig").MIN_NUMBER_OF_CAMPAIGN_WITHIN_SPLIT_TEST})};return c}(a);d.displayName="AdsManagementDeliverySplitTestBudgetEditor";d.contextTypes={getApiSpec:c.func.isRequired,getExtraData:c.func.isRequired};e.exports=b("AdsDeliveryEditorFactory").create(d)}),null);
__d("AdsManagementIterativeSplitTestBudgetEditorItem.react",["cx","BUIFormElement.react","React","SUIBusinessTheme","SUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.editorContent,e=a.editorSecondaryContent,f=a.helpText,g=a.label;a=a.secondaryCTA;return b("React").createElement("div",{className:b("joinClasses")("_68kr",c)},b("React").createElement("span",{className:"_6cci"},b("React").createElement(b("BUIFormElement.react"),{helpText:f,label:g},b("React").createElement("div",{className:"_68ks"},b("React").createElement("div",{className:"_19wa"},d),e!=null&&e!==""?b("React").createElement(b("SUIText.react"),{color:"secondary",size:"meta1",style:{marginLeft:8},theme:b("SUIBusinessTheme")},e):null))),a!=null&&a!==""?b("React").createElement("span",{className:"_6cci"},b("React").createElement(b("BUIFormElement.react"),{label:""},a)):null)};return c}(b("React").Component);e.exports=a}),null);
__d("AdsManagementIterativeSplitTestBudgetEditorComponents",["cx","AdsCurrencyInput.react","AdsSplitTestBudgetUtils","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){var c=a.budget;a=a.currency;return b("React").createElement("span",{className:"_3ljd"},b("AdsSplitTestBudgetUtils").formatCurrency(a,c))}function c(a){var c=a.budget,d=a.currency;a=a.onBudgetChange;return b("React").createElement(b("AdsCurrencyInput.react"),{className:"_3ljd _3lje",currency:d,nonnegative:!0,value:c,withISO:!1,withNumberDelimiters:!0,onDataUpdate:a})}e.exports={EditableBudget:c,ReadOnlyBudget:a}}),null);
__d("AdsManagementIterativeSplitTestBudgetEditorTotalBudgetRow.react",["cx","fbt","AdsBudgetStrings","AdsDeliveryBudgetModeStrings","AdsManagementIterativeSplitTestBudgetEditorComponents","AdsManagementIterativeSplitTestBudgetEditorItem.react","AdsSplitTestBudgetUtils","FDSText.react","Link.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("AdsManagementIterativeSplitTestBudgetEditorComponents").EditableBudget,j=b("AdsManagementIterativeSplitTestBudgetEditorComponents").ReadOnlyBudget;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.onChangeTotalBudgetClick()},c.$2=function(a){a!=null&&a!==0&&c.props.onTotalBudgetChange(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.currency,e=a.isNew,f=a.isLifetimeBudget,g=a.isReadOnly;a=a.totalBudget;return b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorItem.react"),{className:c,editorContent:g?b("React").createElement("div",null,b("React").createElement(j,{budget:a,currency:d}),b("React").createElement("div",{className:"_3-8x"},b("React").createElement(b("Link.react"),{onClick:this.$1},h._("Modifier le {budget mode}",[h._param("budget mode",f?b("AdsDeliveryBudgetModeStrings").LIFETIME:b("AdsDeliveryBudgetModeStrings").DAILY)])))):b("React").createElement(i,{budget:a,currency:d,onBudgetChange:this.$2}),editorSecondaryContent:b("React").createElement(b("FDSText.react"),{size:"body3"},this.$3()),label:f?b("AdsBudgetStrings").LIFETIME_BUDGET:b("AdsBudgetStrings").DAILY_BUDGET,secondaryCTA:f&&e?b("React").createElement("div",null,h._("Le budget total restant est partag\u00e9 de mani\u00e8re \u00e9gale.")):null})};d.$3=function(){var a=this.props,c=a.currency,d=a.isLifetimeBudget;a=a.remainingBudget;return d?h._("Il vous reste {remaining budget} pour le test",[h._param("remaining budget",b("React").createElement(b("FDSText.react"),{size:"body3",weight:"bold"},b("AdsSplitTestBudgetUtils").formatCurrency(c,a)))]):null};return c}(b("React").Component);e.exports=a}),null);
__d("AdsManagementIterativeSplitTestBudgetEditorVariantRow.react",["AdsManagementIterativeSplitTestBudgetEditorComponents","AdsManagementIterativeSplitTestBudgetEditorItem.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsManagementIterativeSplitTestBudgetEditorComponents").EditableBudget,h=b("AdsManagementIterativeSplitTestBudgetEditorComponents").ReadOnlyBudget;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$3=function(a){var b=c.props.onBudgetChange;a!=null&&a!==0&&b&&b(c.props.id,a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.budgetDetails,e=a.helpText,f=a.isReadOnly;a=a.name;return b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorItem.react"),{className:c,editorContent:f?this.$1():this.$2(),editorSecondaryContent:d,helpText:e,label:a})};d.$1=function(){var a=this.props,c=a.budget;a=a.currency;return b("React").createElement(h,{budget:c,currency:a})};d.$2=function(){var a=this.props,c=a.budget;a=a.currency;return b("React").createElement(g,{budget:c,currency:a,onBudgetChange:this.$3})};return c}(b("React").Component);e.exports=a}),null);
__d("AdsManagementNewIterativeSplitTestDailyBudgetEditor.react",["cx","errorCode","AdsCampaignUtils","AdsCCCategory","AdsIterativeSplitTestBudgetUtils","AdsIterativeSplitTestConfigUtils","AdsManagementIterativeSplitTestBudgetEditorItem.react","AdsManagementIterativeSplitTestBudgetEditorTotalBudgetRow.react","AdsManagementIterativeSplitTestBudgetEditorVariantRow.react","AdsStaticInlineNux.react","React","flattenArray","immutable"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").Map;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){var c=d.props,e=c.campaigns;c=c.dispatchBudgetChangeForNew;e=i(e.map(function(a){return[a.id,b("AdsCampaignUtils").getBudgetAmount(a)]}));c({budgetsByCampaignID:i([]),splitsByCampaignID:b("AdsIterativeSplitTestBudgetUtils").computeSplitsForCampaignBudgets(e,a),configBudget:a})},d.$2=function(a,c){__p&&__p();var e=d.props,f=e.areAllCampaignsEditable,g=e.campaigns,h=e.dispatchBudgetChangeForNew,j=e.iterativeSplitTestConfig,k=e.getCampaignBudget;e=e.selectedCampaignIDs;j=b("AdsIterativeSplitTestConfigUtils").getTestBudget(j);if(c>=j&&!f)return;e=i(e.map(function(a){return[a,k(a)]})).set(a,c);a=b("AdsIterativeSplitTestBudgetUtils").computeStateOfBudgetForVariantBudgetChange(f,g,e,j);c=a.budgetsByCampaignID;f=b("AdsIterativeSplitTestBudgetUtils").computeSplitsForCampaignBudgets(c,j);h({budgetsByCampaignID:c,splitsByCampaignID:f,configBudget:j})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.account,e=c.areAllCampaignsEditable,f=c.iterativeSplitTestConfig,g=c.onChangeTotalBudgetClick;c=c.variantBudgetConfigs;return b("React").createElement("div",null,b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorTotalBudgetRow.react"),{className:"_3-95",currency:d.currency,isLifetimeBudget:!1,isNew:!0,isReadOnly:!e,remainingBudget:null,totalBudget:b("AdsIterativeSplitTestConfigUtils").getTestBudget(f),onChangeTotalBudgetClick:g,onTotalBudgetChange:this.$1}),c.map(function(c){return b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorVariantRow.react"),babelHelpers["extends"]({className:"_3-95"},c,{key:c.id,onBudgetChange:a.$2}))}),this.$3())};d.$3=function(){var a=this.props.budgetErrorsByCampaignID;a=b("flattenArray")(Array.from(a.values()));var c=1885953;a=a.find(function(a){return a.key===c});return!a?null:b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorItem.react"),{editorContent:b("React").createElement(b("AdsStaticInlineNux.react"),{ccCardProps:{category:b("AdsCCCategory").ERROR,messageID:"iterative_split_test_sum_of_budgets_error",textData:[{type:"PARAGRAPH",data:{text:a.message}}]}}),label:""})};return c}(b("React").Component);e.exports=a}),null);
__d("AdsManagementNewIterativeSplitTestLifetimeBudgetEditor.react",["cx","errorCode","fbt","AdsCampaignDerivedPaths","AdsCampaignUtils","AdsCCCategory","AdsCommonSplitTestBudgetUtils","AdsIterativeSplitTestBudgetUtils","AdsIterativeSplitTestConfigUtils","AdsManagementIterativeSplitTestBudgetEditorItem.react","AdsManagementIterativeSplitTestBudgetEditorTotalBudgetRow.react","AdsManagementIterativeSplitTestBudgetEditorVariantRow.react","AdsSplitTestBudgetUtils","AdsStaticInlineNux.react","FDSText.react","React","flattenArray","getByPath","immutable","sumOfArray"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("AdsIterativeSplitTestBudgetUtils").computeStateOfBudgetForChangeInOriginalRemainingBudget,k=b("AdsIterativeSplitTestConfigUtils").getOriginalVariantID,l=b("AdsIterativeSplitTestConfigUtils").getSplits,m=b("AdsIterativeSplitTestConfigUtils").getSplitsByCampaignID,n=b("AdsIterativeSplitTestConfigUtils").getSplitsIndexForCampaignIDEnforcing,o=b("AdsIterativeSplitTestConfigUtils").getTestBudget,p=b("immutable").Map;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(a){var c=d.props,e=c.campaigns,f=c.dispatchBudgetChangeForNew;c=c.iterativeSplitTestConfig;a=a-d.$1();e=b("AdsIterativeSplitTestBudgetUtils").computeStateOfBudgetForTotalBudgetChangeInLifetime(a,p(e.map(function(a){return[a.id,b("AdsCampaignUtils").getBudgetAmount(a)]})),c);f({budgetsByCampaignID:e,splitsByCampaignID:m(c),configBudget:a+o(c)})},d.$5=function(){var a=d.props,c=a.campaigns,e=a.derivedCampaignsByID,f=a.dispatchBudgetChangeForNew,g=a.iterativeSplitTestConfig,h=a.getCampaignBudget;a=d.$4();f({budgetsByCampaignID:j(a,p(c.map(function(a){return[a.id,h(a.id)]})),e.map(function(a){return b("getByPath")(a,b("AdsCampaignDerivedPaths").BUDGET_REMAINING)}),g),splitsByCampaignID:m(g),configBudget:o(g)+a})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.account,d=a.areAllCampaignsEditable,e=a.iterativeSplitTestConfig,f=a.onChangeTotalBudgetClick;a=a.variantBudgetConfigs;return b("React").createElement("div",null,b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorTotalBudgetRow.react"),{className:"_3-95",currency:c.currency,isLifetimeBudget:!0,isNew:!0,isReadOnly:!d,remainingBudget:o(e),totalBudget:this.$1(),onChangeTotalBudgetClick:f,onTotalBudgetChange:this.$2}),a.map(function(a){return b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorVariantRow.react"),babelHelpers["extends"]({className:"_3-95"},a,{key:a.id}))}),this.$3())};d.$4=function(){var a=this.props,c=a.derivedCampaignsByID;a=a.iterativeSplitTestConfig;var d=k(a),e=n(a,d);c=b("getByPath")(c.get(d),b("AdsCampaignDerivedPaths").BUDGET_REMAINING);d=b("AdsCommonSplitTestBudgetUtils").getCampaignBudgets(l(a),o(a))[e];return c-d};d.$1=function(){return b("sumOfArray")(this.props.campaigns.map(b("AdsCampaignUtils").getBudgetAmount))};d.$3=function(){__p&&__p();var a=this.props,c=a.account,d=a.budgetErrorsByCampaignID;a=a.iterativeSplitTestConfig;d=b("flattenArray")(Array.from(d.values()));var e=1885969;if(!d.find(function(a){return a.key===e}))return null;d=i._("Mettre le budget \u00e0 jour");var f=i._("Le budget restant pour le test a chang\u00e9.");c=i._("L\u2019ensemble de publicit\u00e9s original a d\u00e9pens\u00e9 du budget depuis que vous avez cr\u00e9\u00e9 le test. Votre budget restant pour le test est de {remaining budget}. Cliquez sur Mettre le budget \u00e0 jour pour utiliser ce montant pour votre test.",[i._param("remaining budget",b("React").createElement(b("FDSText.react"),null,b("AdsSplitTestBudgetUtils").formatCurrency(c.currency,o(a)+this.$4())))]);return b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorItem.react"),{editorContent:b("React").createElement(b("AdsStaticInlineNux.react"),{ccCardProps:{category:b("AdsCCCategory").ERROR,ctaData:[{type:"BUTTON_GROUP",data:{buttonsData:[{text:d,onCallToAction:this.$5}]}}],header:f,messageID:"iterative_split_test_remaining_budget_error",textData:[{type:"PARAGRAPH",data:{text:c}}]}}),label:""})};return c}(b("React").Component);e.exports=a}),null);
__d("AdsManagementPublishedIterativeSplitTestBudgetEditor.react",["cx","AdsAPIIterativeSplitTestConfigFields","AdsCampaignDerivedPaths","AdsCampaignUtils","AdsIterativeSplitTestActions","AdsIterativeSplitTestBudgetUtils","AdsIterativeSplitTestConfigUtils","AdsManagementIterativeSplitTestBudgetEditorTotalBudgetRow.react","AdsManagementIterativeSplitTestBudgetEditorVariantRow.react","React","getByPath","immutable","sumOfArray"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("immutable").Map;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$3=function(a){var c=d.props,e=c.campaigns,f=c.campaignGroupID,g=c.isLifetimeBudget;c=c.iterativeSplitTestConfig;var i=a-d.$2();g=g?b("AdsIterativeSplitTestBudgetUtils").computeStateOfBudgetForTotalBudgetChangeInLifetime(i,h(e.map(function(a){return[a.id,b("AdsCampaignUtils").getBudgetAmount(a)]})),c):b("AdsIterativeSplitTestBudgetUtils").computeStateOfBudgetForNewTotalBudgetInPublishedTest(a,c);b("AdsIterativeSplitTestActions").setBudgetsForPublishedMode(g,f,babelHelpers["extends"]({},c,(e={},e[b("AdsAPIIterativeSplitTestConfigFields").BUDGET]=b("AdsIterativeSplitTestConfigUtils").getTestBudget(c)+i,e)))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.account,d=a.areAllCampaignsEditable,e=a.isLifetimeBudget,f=a.onChangeTotalBudgetClick;a=a.variantBudgetConfigs;return b("React").createElement("div",null,b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorTotalBudgetRow.react"),{className:"_3-95",currency:c.currency,isLifetimeBudget:e,isNew:!1,isReadOnly:!d,remainingBudget:e?this.$1():null,totalBudget:this.$2(),onChangeTotalBudgetClick:f,onTotalBudgetChange:this.$3}),a.map(function(a){return b("React").createElement(b("AdsManagementIterativeSplitTestBudgetEditorVariantRow.react"),babelHelpers["extends"]({className:"_3-95"},a,{key:a.id}))}))};d.$2=function(){return b("sumOfArray")(this.props.campaigns.map(b("AdsCampaignUtils").getBudgetAmount))};d.$1=function(){return b("sumOfArray")(Array.from(this.props.derivedCampaignsByID.values()).map(function(a){return b("getByPath")(a,b("AdsCampaignDerivedPaths").BUDGET_REMAINING)}))};return c}(b("React").Component);e.exports=a}),null);
__d("AdsManagementIterativeSplitTestBudgetEditor.react",["fbt","AdsAPIIterativeSplitTestConfigFields","AdsCampaignDerivedPaths","AdsCampaignUtils","AdsCommonSplitTestBudgetUtils","AdsEditorLogging","AdsIterativeSplitTestActions","AdsIterativeSplitTestBudgetUtils","AdsIterativeSplitTestConfigUtils","AdsIterativeSplitTestStringUtils","AdsManagementNewIterativeSplitTestDailyBudgetEditor.react","AdsManagementNewIterativeSplitTestLifetimeBudgetEditor.react","AdsManagementPublishedIterativeSplitTestBudgetEditor.react","AdsSplitTestBudgetUtils","BUIForm.react","FDSText.react","React","getByPath","immutable","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").Component;b("immutable").Map;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$4=function(){var a=d.props.customProperties.campaigns.map(function(a){return a.id});b("AdsIterativeSplitTestActions").navigateToCampaignsEditor(a,b("AdsEditorLogging").sources.ITERATIVE_SPLIT_TEST_BUDGET_EDITOR)},d.$5=function(a){var c=a.budgetsByCampaignID,e=a.splitsByCampaignID;a=a.configBudget;var f=d.props.customProperties,g=f.iterativeSplitTestConfig;f=f.campaignGroupID;b("AdsIterativeSplitTestActions").setBudgetsForNewMode(c,f,babelHelpers["extends"]({},g,(c={},c[b("AdsAPIIterativeSplitTestConfigFields").BUDGET]=a,c[b("AdsAPIIterativeSplitTestConfigFields").SPLITS]=b("AdsIterativeSplitTestBudgetUtils").getOrderedSplits(b("getByPath")(g,[b("AdsAPIIterativeSplitTestConfigFields").ITERATIVE_SPLIT_TEST_VARIANT_TO_SPLIT_INDEX_MAPPING]),e),c)))},d.$6=function(a){return b("nullthrows")(b("AdsCampaignUtils").getBudgetAmount(b("nullthrows")(d.props.customProperties.campaigns.find(function(b){return b.id===a}))))},d.$7=function(a){var c=d.props.customProperties.derivedCampaignsByID;return d.$6(a)-b("getByPath")(c.get(a),b("AdsCampaignDerivedPaths").BUDGET_REMAINING)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("BUIForm.react"),{className:this.props.customProperties.className,density:"taut"},this.$1())};d.$1=function(){var a=this.props.customProperties,c=a.account,d=a.budgetErrorsByCampaignID,e=a.campaigns,f=a.campaignGroupID,g=a.derivedCampaignsByID,h=a.isNew,i=a.isLifetimeBudget,j=a.iterativeSplitTestConfig;a=a.selectedCampaignIDs;c={account:c,areAllCampaignsEditable:this.$2(),budgetErrorsByCampaignID:d,campaigns:e,derivedCampaignsByID:g,iterativeSplitTestConfig:j,variantBudgetConfigs:this.$3(),onChangeTotalBudgetClick:this.$4};if(!h)return b("React").createElement(b("AdsManagementPublishedIterativeSplitTestBudgetEditor.react"),babelHelpers["extends"]({},c,{campaignGroupID:f,isLifetimeBudget:i}));else if(i)return b("React").createElement(b("AdsManagementNewIterativeSplitTestLifetimeBudgetEditor.react"),babelHelpers["extends"]({},c,{dispatchBudgetChangeForNew:this.$5,getCampaignBudget:this.$6,getCampaignBudgetSpent:this.$7,selectedCampaignIDs:a}));else return b("React").createElement(b("AdsManagementNewIterativeSplitTestDailyBudgetEditor.react"),babelHelpers["extends"]({},c,{dispatchBudgetChangeForNew:this.$5,getCampaignBudget:this.$6,selectedCampaignIDs:a}))};d.$3=function(){var a=this,c=this.props.customProperties,d=c.account,e=c.campaigns,f=c.isNew,h=c.isLifetimeBudget,i=c.selectedCampaignIDs;return e.map(function(c,j){return{budget:b("AdsCampaignUtils").getBudgetAmount(c),budgetDetails:a.$8(c),id:b("AdsCampaignUtils").getID(c),isReadOnly:h||!(f&&i.includes(b("AdsCampaignUtils").getID(c))),currency:d.currency,helpText:f?void 0:g._("Vous avez initialement affect\u00e9 {split percetange} de votre budget de test \u00e0 cette version.",[g._param("split percetange",a.$9(c))]),name:g._("{name}",[g._param("name",b("AdsIterativeSplitTestStringUtils").getLabelForVariantAtIndex(j,e.length))])}})};d.$8=function(a){var c=this.props.customProperties,d=c.account,e=c.isNew,f=c.isLifetimeBudget;c=c.derivedCampaignsByID;c=b("getByPath")(c.get(b("AdsCampaignUtils").getID(a)),b("AdsCampaignDerivedPaths").BUDGET_REMAINING);return b("React").createElement(b("FDSText.react"),{size:"body3"},g._("{=[remaining budget][budget split percentage]} {phrase describing budget remaining for the tests}",[g._param("=[remaining budget][budget split percentage]",b("React").createElement(b("FDSText.react"),{size:"body3",weight:"bold"},g._("{remaining budget} {budget split percentage}",[g._param("remaining budget",f?b("AdsSplitTestBudgetUtils").formatCurrency(d.currency,c):null),g._param("budget split percentage",e&&(!this.$2()||f)?b("React").createElement("span",null,"(",this.$9(a),")"):null)]))),g._param("phrase describing budget remaining for the tests",f?g._("restant pour le test"):null)]))};d.$2=function(){var a=this.props.customProperties,b=a.campaigns;a=a.selectedCampaignIDs;return a.length===b.length};d.$9=function(a){var c=this.props.customProperties.iterativeSplitTestConfig;return b("AdsCommonSplitTestBudgetUtils").formatSplitPercent(b("AdsIterativeSplitTestConfigUtils").getSplitForCampaignInConfigEnforcing(a,c))};return c}(a);e.exports=c}),null);