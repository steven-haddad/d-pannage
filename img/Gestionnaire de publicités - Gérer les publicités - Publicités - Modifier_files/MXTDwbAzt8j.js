if (self.CavalryLogger) { CavalryLogger.start_js(["02H4n"]); }

__d("AdsPECreativeTablePagerContainer.react",["AdsPECreativeTablePagingSelectors","AdsPETablePager.react","AdsPETableUIStateActions","React","adsCreateSelector","adsCreateSelectorContainer"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateSelectorContainer")(b("adsCreateSelector")([b("AdsPECreativeTablePagingSelectors").getRowStartSelector,b("AdsPECreativeTablePagingSelectors").getRowEndSelector,b("AdsPECreativeTablePagingSelectors").getRowTotalSelector],function(a,b,c){return{startIndex:a,endIndex:b,totalItems:c}},{name:e.id}),function(a){return b("React").createElement(b("AdsPETablePager.react"),babelHelpers["extends"]({},a,{onBack:b("AdsPETableUIStateActions").previousCreativePage,onForward:b("AdsPETableUIStateActions").nextCreativePage}))});e.exports=a}),null);