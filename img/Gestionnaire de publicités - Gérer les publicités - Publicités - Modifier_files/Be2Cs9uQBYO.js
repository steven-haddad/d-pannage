if (self.CavalryLogger) { CavalryLogger.start_js(["jotVr"]); }

__d("AdsMgmtExportProgressHoverCard.react",["cx","AdsAPIReportRunAsyncStatus","AdsMgmtExportToastGenerator","AdsToastCard.react","React","curry","isEmpty"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="tableExport";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidUpdate=function(a){a.insightsExport.length&&!this.props.insightsExport.length&&this.props.onToggleExportInsights(!1)};d.render=function(){return!this.props.shown?null:b("React").createElement("div",{className:"_1gwt",style:{bottom:this.props.bottom}},this.$1())};d.$1=function(){var a=this.$2(this.props.insightsExport);return b("React").createElement("ul",null,a)};d.$3=function(a){window.open(a.scheduleReportURL,"_blank")};d.$4=function(a){var c=a.url,d=function(){window.open(c,"_blank")};return a.showScheduleReport===!0?b("AdsMgmtExportToastGenerator").getScheduleReportCard(a.id,h,b("curry")(this.$3,a),b("curry")(this.props.onCancelInsightsExport,a),d):b("AdsMgmtExportToastGenerator").getDownloadLinkCard(a.id,h,d,b("curry")(this.props.onCancelInsightsExport,a))};d.$5=function(a){var c=a.status,d=[b("AdsAPIReportRunAsyncStatus").NOT_STARTED,b("AdsAPIReportRunAsyncStatus").COMPLETED].includes(c),e=0;switch(c){case b("AdsAPIReportRunAsyncStatus").RUNNING:e=a.percentComplete||0;break;case b("AdsAPIReportRunAsyncStatus").COMPLETED:e=100;break}return a.showScheduleReport===!0?b("AdsMgmtExportToastGenerator").getScheduleReportCard(a.id,h,b("curry")(this.$3,a),b("curry")(this.props.onCancelInsightsExport,a)):b("AdsMgmtExportToastGenerator").getProgressCard(a.id,d,e,h,b("curry")(this.props.onCancelInsightsExport,a))};d.$6=function(a){return!b("isEmpty")(a.showDownloadLink)&&!b("isEmpty")(a.url)?this.$4(a):this.$5(a)};d.$2=function(a){var c=this;return b("isEmpty")(a)?[]:a.map(function(a,d){d=c.$6(a);return b("React").createElement("li",{className:"_3-8n",key:a.id},b("React").createElement(b("AdsToastCard.react"),{toastCard:d}))})};return c}(b("React").Component);a.defaultProps={bottom:100};e.exports=a}),null);
__d("AdsMgmtExportProgressHoverCardContainer.react",["AdsFluxContainer","AdsInsightsExportActions","AdsInsightsExportStore","AdsInsightsLayerCategory","AdsInsightsLayerViewStore","AdsInsightsViewAction","AdsMgmtExportProgressHoverCard.react","AdsReportBuilderExportDataProvider","React","isEmpty"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsReportBuilderExportDataProvider").toFluxStore(),h=72,i=72,j=100;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("AdsInsightsExportStore"),b("AdsInsightsLayerViewStore"),g]};c.calculateState=function(){var a=b("AdsInsightsExportStore").getAllExports(),c=!!b("AdsInsightsLayerViewStore").get(b("AdsInsightsLayerCategory").INSIGHTS_EXPORT_MENU_IN_REPORTING),d=Array.from(g.getState().values()),e;b("isEmpty")(d)||(e=d.reduce(function(a,b){return a+(b.showScheduleReport===!0?j:i)},h));return{bottom:e,insightsExport:a,shown:c}};var d=c.prototype;d.render=function(){return b("React").createElement(b("AdsMgmtExportProgressHoverCard.react"),babelHelpers["extends"]({},this.state,{onCancelInsightsExport:b("AdsInsightsExportActions").onCancelExport,onToggleExportInsights:b("AdsInsightsViewAction").toggleExportMenu}))};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{name:e.id})}),null);