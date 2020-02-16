if (self.CavalryLogger) { CavalryLogger.start_js(["saefI"]); }

__d("AdsManagementDeliveryLinePriceEditor.react",["fbt","AdsAccountUtils","AdsAPIAccountPaths","AdsAPIToplinePaths","AdsDeliveryEditorFactory","AdsStrings","AdsUniformValue","React","ads-lib-formatters","getBulkByPath","getByPath"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").Component;c=b("React").PropTypes;var h=2,i=!1;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.context.getExtraData();a=a.account;var c=this.context.getCustomProperties();c=c.toplineBulkSpec;a=b("getByPath")(a,b("AdsAPIAccountPaths").CURRENCY);a=b("ads-lib-formatters").createIntlMoneyFormatter(h,a,i);c=b("getBulkByPath")(c,b("AdsAPIToplinePaths").FUNC_PRICE);a=c instanceof b("AdsUniformValue")?g._("{Price} pour 1 000 impressions",[g._param("Price",a(Number(c.getValue())))]):b("AdsStrings").MixedValuePlaceholder;return b("React").createElement("div",null,a)};return c}(a);d.displayName="AdsManagementDeliveryLinePriceEditor";d.webdriverID="campaign-line-price";d.contextTypes={getCustomProperties:c.func.isRequired,getExtraData:c.func.isRequired};d.getLabel=function(){return g._("Prix de ligne")};d.getHelpText=function(){return null};d.shouldRender=function(a){a=a.extraData.account;return b("AdsAccountUtils").hasContract(a)};e.exports=b("AdsDeliveryEditorFactory").create(d)}),null);