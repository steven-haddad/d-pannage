if (self.CavalryLogger) { CavalryLogger.start_js(["LdR+0"]); }

__d("AdsInsightsCostPerResultCell_LEGACY.react",["AdsInsightsColumnUtil","AdsInsightsComparisonColumnUtil","AdsInsightsField","AdsInsightsResultUtil","AdsInsightsTableFormatter","AdsInsightsTextSubtextCell.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.attributionWindow,d=a.column,e=a.comparisonCostPerResult,f=a.costPerResult,g=a.currencyCode,h=a.customConversion,i=a.defaultAttributionWindows,j=a.showAttributionWindow;a=a.unit;g=b("AdsInsightsTableFormatter").getFieldFormatter(b("AdsInsightsField").COST_PER_RESULT,g);a=a?b("AdsInsightsResultUtil").getUnit(a,h).getCostPerResultUnitAndAttributionLabel(f,c,i,j):void 0;h=f;c=g;var k;if(d){i=b("AdsInsightsColumnUtil").getDerivedColumnConfig(d);j=i.comparisonColumnType;d=i.supportBenchmark;d&&j&&(h=b("AdsInsightsComparisonColumnUtil").getValueForComparisonColumn(f,e,j),c=b("AdsInsightsComparisonColumnUtil").getTableFormatterForComparisonColumn(g,j),k=b("AdsInsightsComparisonColumnUtil").getIndicatorForComparisonColumn(f,e,j))}return b("React").createElement(b("AdsInsightsTextSubtextCell.react"),{indicator:k,mainText:c(h),subText:a})};return c}(b("React").Component);c.propTypes={attributionWindow:a.string,column:a.string,comparisonCostPerResult:a.number,costPerResult:a.number,currencyCode:a.string.isRequired,customConversion:a.object,defaultAttributionWindows:a.array,showAttributionWindow:a.bool,unit:a.string};e.exports=c}),null);
__d("AdsInsightsCostPerResultFooter_LEGACY.react",["AdsApplicationUtils","AdsInsightsColumnUtil","AdsInsightsComparisonColumnUtil","AdsInsightsEmptyCell.react","AdsInsightsField","AdsInsightsResultUtil","AdsInsightsTableFormatter","AdsInsightsTextSubtextCell.react","AdsPETableShimmerBar.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.attributionWindow,d=a.column,e=a.comparisonCostPerResult,f=a.costPerResult,g=a.currencyCode,h=a.customConversion;a=a.unit;if(!f||f.isLoading()||!a||a.isLoading()||e&&e.isLoading())return b("AdsApplicationUtils").isPowerEditor()?b("React").createElement(b("AdsPETableShimmerBar.react"),{className:this.props.className}):b("React").createElement(b("AdsInsightsEmptyCell.react"),{className:this.props.className});f=f.orUndefined();a=a.orUndefined();e=e&&e.orUndefined();a=a?b("AdsInsightsResultUtil").getUnit(a,h).getCostPerResultUnitAndAttributionLabel(f,c):void 0;h=b("AdsInsightsTableFormatter").getFieldFormatter(b("AdsInsightsField").COST_PER_RESULT,g);c=f;g=h;var i;if(d){d=b("AdsInsightsColumnUtil").getDerivedColumnConfig(d);var j=d.comparisonColumnType;d=d.supportBenchmark;d&&j&&(c=b("AdsInsightsComparisonColumnUtil").getValueForComparisonColumn(f,e,j),g=b("AdsInsightsComparisonColumnUtil").getTableFormatterForComparisonColumn(h,j),i=b("AdsInsightsComparisonColumnUtil").getIndicatorForComparisonColumn(f,e,j))}return b("React").createElement(b("AdsInsightsTextSubtextCell.react"),{className:this.props.className,indicator:i,mainText:g(c),subText:a})};return c}(b("React").Component);e.exports=a}),null);
__d("AdsMgmtGenericFooter_LEGACY.react",["AdsApplicationUtils","AdsInsightsColumnUtil","AdsInsightsComparisonColumnUtil","AdsInsightsEmptyCell.react","AdsInsightsFields","AdsInsightsTableFormatter","AdsInsightsTextSubtextCell.react","AdsPETableShimmerBar.react","AdsPropTypes","AdsUtils","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("AdsPropTypes").loadProgressOf;c=b("React").PropTypes;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.benchmarkValue,d=a.className,e=a.column,f=a.currencyCode;a=a.primaryValue;if(a.isLoading()||c&&c.isLoading())return b("AdsApplicationUtils").isPowerEditor()?b("React").createElement(b("AdsPETableShimmerBar.react"),{className:d}):b("React").createElement(b("AdsInsightsEmptyCell.react"),{className:d});a=a.orNull();c=c&&c.orNull();e=b("AdsInsightsColumnUtil").getDerivedColumnConfig(e);var g=b("AdsInsightsFields").getConfig(e.primaryField),h=e.comparisonColumnType,i=e.supportBenchmark;e=b("AdsInsightsTableFormatter").getPrimaryFormatter(e,f);var j;if(this.props.benchmarkValue&&i&&h)f=b("AdsInsightsComparisonColumnUtil").getValueForComparisonColumn(a,c,h),i=b("AdsInsightsComparisonColumnUtil").getTableFormatterForComparisonColumn(e,h),j=b("AdsInsightsComparisonColumnUtil").getIndicatorForComparisonColumn(a,c,h);else{f=b("AdsUtils").isObject(a)?Number((c=a)!=null?(c=c[0])!=null?c.value:c:c):a;i=e}h=i(f);c=g.shortSummaryLabel;return b("React").createElement(b("AdsInsightsTextSubtextCell.react"),{className:d,indicator:j,mainText:h,subText:c})};return c}(b("React").Component);d.propTypes={benchmarkValue:a(c.any),column:c.string.isRequired,currencyCode:c.string,primaryValue:a(c.any).isRequired};e.exports=d}),null);
__d("AdsMgmtCostPerResultCellContainer_LEGACY.react",["AdsAccountStore","AdsGoalStore","AdsInsightsAttributionWindows","AdsInsightsBuiltinColumnPreset","AdsInsightsColumnUtil","AdsInsightsComparisonColumns","AdsInsightsCostPerResultCell_LEGACY.react","AdsInsightsObjectStatsUtil","AdsInsightsSimpleStatCell.react","AdsInsightsTableViewStore","AdsLoadState_LEGACY","AdsMgmtStatCellContainerStoreUtils","AdsObjectTypes","AdsPECellContainerUtils_LEGACY","AdsSelectedAccountCurrencyGetter","LoadObject","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();a=b("AdsAccountStore").getSelectedAccount_LEGACY();if(a.loadState!==b("AdsLoadState_LEGACY").LOADED)return b("AdsPECellContainerUtils_LEGACY").getNotLoadedState_LEGACY(a.loadState);var d=c.objectType,e=c.isNewDraft;if(e===!0&&(d===b("AdsObjectTypes").ADGROUP||d===b("AdsObjectTypes").CAMPAIGN||d===b("AdsObjectTypes").CAMPAIGN_GROUP))return b("AdsPECellContainerUtils_LEGACY").getNotAvailableState();e=b("AdsSelectedAccountCurrencyGetter").get({});if(!e)return b("AdsPECellContainerUtils_LEGACY").getNotLoadedState(b("LoadObject").loading());d=b("AdsMgmtStatCellContainerStoreUtils").getGroup(c);var f=b("AdsMgmtStatCellContainerStoreUtils").getBenchmarkGroup(c);d=b("AdsInsightsObjectStatsUtil").getCostPerResultContainerState_LEGACY(d,c.column,c.breakdownKey,c.breakdowns.length===0||c.showUnitLabelForBreakdown,b("AdsGoalStore"),f);f=d.attributionWindow;var g=d.comparisonCostPerResult,h=d.costPerResult,i=d.customConversion;d=d.unit;var j=b("AdsInsightsColumnUtil").getDerivedColumnConfig(c.column);j=j.comparisonColumnType;if(!h.isLoaded())return b("AdsPECellContainerUtils_LEGACY").getNotLoadedState_LEGACY(h.getStatus());if(!d.isLoaded())return b("AdsPECellContainerUtils_LEGACY").getNotLoadedState_LEGACY(d.getStatus());if(b("AdsInsightsComparisonColumns").isBenchmarkDataRequired(j)){if(!g)return b("AdsPECellContainerUtils_LEGACY").getNotLoadedState_LEGACY(b("AdsLoadState_LEGACY").ERROR);if(!g.isLoaded())return b("AdsPECellContainerUtils_LEGACY").getNotLoadedState_LEGACY(g.getStatus())}j=b("AdsInsightsAttributionWindows").getDefaultAttributionWindows(a.attribution_spec||[]);a=b("AdsInsightsTableViewStore").getOrNull();var k=!1;a&&(k=a.columns.preset===b("AdsInsightsBuiltinColumnPreset").BIDDING_AND_OPTIMIZATION);a=f&&(b("AdsMgmtStatCellContainerStoreUtils").isAttributionWindowComparisonMode()||!b("AdsInsightsAttributionWindows").isDefault(f)||k);return b("AdsPECellContainerUtils_LEGACY").getLoadedState({attributionWindow:f,comparisonCostPerResult:g&&g.orUndefined(),costPerResult:h.orUndefined(),currencyCode:e,customConversion:i,defaultAttributionWindows:j,showAttributionWindow:!!a,unit:d.orUndefined(),breakdowns:c.breakdowns,showUnitLabelForBreakdown:c.showUnitLabelForBreakdown,column:c.column})}function c(a){return a.breakdowns.length===0||a.showUnitLabelForBreakdown?b("React").createElement(b("AdsInsightsCostPerResultCell_LEGACY.react"),{attributionWindow:a.attributionWindow,column:a.column,comparisonCostPerResult:a.comparisonCostPerResult,costPerResult:a.costPerResult,currencyCode:a.currencyCode,customConversion:a.customConversion,defaultAttributionWindows:a.defaultAttributionWindows,showAttributionWindow:a.showAttributionWindow,unit:a.unit}):b("React").createElement(b("AdsInsightsSimpleStatCell.react"),{benchmarkValue:a.comparisonCostPerResult,column:a.column,currencyCode:a.currencyCode,primaryValue:a.costPerResult})}e.exports=b("AdsPECellContainerUtils_LEGACY").createCellContainer({calculateState:a,name:"AdsMgmtCostPerResultCellContainer_LEGACY",renderCell:c,shouldRenderForBreakdownRows:!0,getStores:function(){return[b("AdsAccountStore"),b("AdsGoalStore"),b("AdsInsightsTableViewStore")].concat(b("AdsSelectedAccountCurrencyGetter").getStores(),b("AdsMgmtStatCellContainerStoreUtils").getStatsStores())}})}),null);
__d("AdsMgmtCostPerResultFooterContainer_LEGACY.react",["AdsAccountStore","AdsApplicationUtils","AdsGoalStore","AdsImportanceFactorConst","AdsInsightsCostPerResultFooter_LEGACY.react","AdsInsightsFooterContainerSelectors","AdsInsightsObjectStatsUtil","AdsLoadState_LEGACY","AdsPECellContainerUtils_LEGACY","AdsSelectedAccountCurrencyGetter","LoadingMarkerImportanceFactor.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){b("AdsApplicationUtils").isPowerEditor()?a=b("AdsInsightsFooterContainerSelectors").getGroupCached():a=b("AdsInsightsFooterContainerSelectors").getGroup(c);var d=b("AdsInsightsFooterContainerSelectors").getBenchmarkGroup(c),e=b("AdsAccountStore").getSelectedAccount_LEGACY();if(e.loadState!==b("AdsLoadState_LEGACY").LOADED)return b("AdsPECellContainerUtils_LEGACY").getEmptyState();e=b("AdsSelectedAccountCurrencyGetter").get({});return e==null||e===""?b("AdsPECellContainerUtils_LEGACY").getEmptyState():b("AdsPECellContainerUtils_LEGACY").getLoadedState(babelHelpers["extends"]({currencyCode:e},b("AdsInsightsObjectStatsUtil").getCostPerResultContainerState_LEGACY(a,c.column,"unit",!0,b("AdsGoalStore"),d),{className:c.className,column:c.column}))}function c(a){return a.costPerResult.isError()?null:b("React").createElement(b("LoadingMarkerImportanceFactor.react"),{importance:b("AdsImportanceFactorConst").FOOTER_CELL},b("React").createElement(b("AdsInsightsCostPerResultFooter_LEGACY.react"),{attributionWindow:a.attributionWindow,className:a.className,column:a.column,comparisonCostPerResult:a.comparisonCostPerResult,costPerResult:a.costPerResult,currencyCode:a.currencyCode,customConversion:a.customConversion,unit:a.unit}))}e.exports=b("AdsPECellContainerUtils_LEGACY").createCellContainer({calculateState:a,name:"AdsMgmtCostPerResultFooterContainerNew_LEGACY",renderCell:c,shouldRenderForBreakdownRows:!1,isFooterContainer:!0,getStores:function(){return[b("AdsAccountStore"),b("AdsGoalStore")].concat(b("AdsSelectedAccountCurrencyGetter").getStores(),b("AdsInsightsFooterContainerSelectors").getGroup.getStores(),b("AdsInsightsFooterContainerSelectors").getGroupCached.getStores(),b("AdsInsightsFooterContainerSelectors").getBenchmarkGroup.getStores())}})}),null);
__d("AdsMgmtGenericFooterContainer_LEGACY.react",["invariant","AdsAccountStore","AdsAPIAccountPaths","AdsApplicationUtils","AdsImportanceFactorConst","AdsInsightsColumnUtil","AdsInsightsComparisonColumns","AdsInsightsFields","AdsInsightsFooterContainerSelectors","AdsInsightsObjectStatsUtil","AdsLoadProgress_LEGACY","AdsLoadState_LEGACY","AdsMgmtColumnComponentConfig","AdsPECellContainerUtils_LEGACY","LoadingMarkerImportanceFactor.react","React","getByPath"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,c){__p&&__p();a=b("AdsInsightsColumnUtil").getDerivedColumnConfig(c.column);var d=a.attributionWindow,e=a.comparisonColumnType,f=a.formatType;a=a.primaryField;var i=b("AdsAccountStore").getSelectedAccount_LEGACY();if(i.loadState!==b("AdsLoadState_LEGACY").LOADED)return b("AdsPECellContainerUtils_LEGACY").getEmptyState();i=b("getByPath")(i,b("AdsAPIAccountPaths").CURRENCY);var j;b("AdsApplicationUtils").isPowerEditor()?j=b("AdsInsightsFooterContainerSelectors").getGroupCached():j=b("AdsInsightsFooterContainerSelectors").getGroup(c);a||g(0,867,c.column);j=h(j,a,d,f);if(!j.isLoaded())return b("AdsPECellContainerUtils_LEGACY").getNotLoadedState(b("AdsLoadProgress_LEGACY").toLoadObject(j));var k;if(b("AdsInsightsComparisonColumns").isBenchmarkDataRequired(e)){e=b("AdsInsightsFooterContainerSelectors").getBenchmarkGroup(c);k=e&&h(e,a,d,f)}return k&&!k.isLoaded()?b("AdsPECellContainerUtils_LEGACY").getNotLoadedState(b("AdsLoadProgress_LEGACY").toLoadObject(k)):b("AdsPECellContainerUtils_LEGACY").getLoadedState({benchmarkValue:k,className:c.className,column:c.column,currencyCode:i,primaryValue:j})}function h(a,c,d,e){var f=b("AdsInsightsFields").getDescriptor(c);f=f.resultsType;if(f!=null&&f!==""){f=a.get("unit",f);return b("AdsInsightsObjectStatsUtil").getResultsProgress(f,d,e).results}else return a.get("unit",c)}function c(a){if(a.primaryValue.isError())return null;var c=b("AdsMgmtColumnComponentConfig").getFooterComponent(a.column);return b("React").createElement(b("LoadingMarkerImportanceFactor.react"),{importance:b("AdsImportanceFactorConst").FOOTER_CELL},b("React").createElement(c,a))}function d(a,b){return{objectID:"1",metricName:b.column,metricValue:b.primaryValue.value}}e.exports=b("AdsPECellContainerUtils_LEGACY").createCellContainer({calculateState:a,name:"AdsMgmtGenericFooterContainerNew_LEGACY",renderCell:c,reportPrimaryData:d,shouldRenderForBreakdownRows:!1,isFooterContainer:!0,getStores:function(){return[b("AdsAccountStore")].concat(b("AdsInsightsFooterContainerSelectors").getGroup.getStores(),b("AdsInsightsFooterContainerSelectors").getBenchmarkGroup.getStores(),b("AdsInsightsFooterContainerSelectors").getGroupCached.getStores())}})}),null);