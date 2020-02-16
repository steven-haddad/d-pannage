if (self.CavalryLogger) { CavalryLogger.start_js(["1NSKj"]); }

__d("AddressTypeaheadWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1875848159153761"};b.getQueryID=function(){return"201531893907334"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("AddressTypeaheadGraphQLSearchSource",["AbstractAsyncSearchSource","AddressTypeaheadWebGraphQLQuery","AsyncRequest","SearchableEntry"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="/images/tiles/typeahead_default.png";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){return a.call(this,{bootstrapRequests:[{createQuery:function(a){return i(a,b)}}],queryRequests:[{createQuery:function(a){return i(a,b)}}],packageFn:c||function(a){return j(a,b)},getAllForEmptyQuery:!0},h,k)||this}return b}(b("AbstractAsyncSearchSource"));function h(a,c,d,e){c=c.createQuery(a,c);new(b("AsyncRequest"))(c).setHandler(function(b){return d(b.payload[a.value||""])}).setErrorHandler(e).send()}function i(a,c){return b("AddressTypeaheadWebGraphQLQuery").getLegacyURI({query_params:{query:a.value,viewer_coordinates:{latitude:c.latitude||void 0,longitude:c.longitude||void 0},provider:c.provider,search_type:c.search_type,integration_strategy:c.integration_strategy,result_ordering:c.display_order,caller:c.caller,country_filter:c.country_filter||void 0,page_category:c.page_category||void 0,radius:c.radius_in_meters||void 0,geocode_fallback:c.geocode_fallback||!1},max_results:c.num_results,photo_width:c.photo_width,photo_height:c.photo_height})}function j(a,c){a=a&&a.street_results&&a.street_results.edges;return!a?[]:a.map(function(a,d){a=a.node;return new(b("SearchableEntry"))({auxiliaryData:{latitude:a.location.latitude,longitude:a.location.longitude,locationID:a.page?a.page.id:a.city?a.city.id:0,resultType:a.page?"place":"street",freeformEntry:!1,full_address:a.single_line_address,multi_line_address:a.multi_line_address,city_name:a.city?a.city.name:null,city_id:a.city?a.city.id:null},photo:c.show_photo&&a.page&&a.page.page_logo?a.page.page_logo.uri:g,title:a.title,subtitle:a.subtitle,uniqueID:a.place_name+"_"+a.single_line_address,order:d})})}function k(a,b){return b(a)}e.exports=a}),null);
__d("AddressTypeaheadCaller",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LOCATION_TYPEAHEAD_GRAPH_API:"location_typeahead_graph_api",CIVIC_CHECKUP:"civic_checkup",VOTER_INFO:"voter_info",ELECTION_RESULT:"election_result",MARKETPLACE:"marketplace",MARKETPLACE_MEETING_LOCATIONS:"marketplace_meeting_locations",MOBILE_ADS_MANAGER:"mobile_ads_manager",MESSENGER_TRANSPORTATION_ANDROID:"messenger_transportation_android",MESSENGER_TRANSPORTATION_IOS:"messenger_transportation_ios",ADS_TARGETTING:"ads_targetting",EVENTS_CREATION:"events_creation",INTERN_EVENT:"intern_event_offsite_location",GRAPHQL:"graphql",GROUPS_MEET_UP_CREATION:"groups_meet_up_creation",GROUPS_LOCATION_TAGGING:"groups_location_tagging",WWW_GUI:"www_gui",ADS_GEO_LOCATION_SEARCH:"ads_geolocation_search",EVALUATION:"evaluation",CONSTITUENT_TITLE_UPSELL:"constituent_title_upsell",UNKNOWN:"unknown",JOB_SEARCH:"job_search",OFFERS_CREATION:"offers_creation",ANDROID_PAGES:"android_pages",IOS_PAGES:"ios_pages",SHUTTLE_MAP:"shuttle_map",SOCIAL_BALLOT:"social_ballot",OMNIM_MINIAPP_FOOD_ORDERING:"omnim_miniapp_food_ordering",M_PAGE_CREATION:"m_page_creation",PAGE_EDIT:"page_edit",PAGES_WEB:"pages_web",RIDE_BOT_SEARCH:"ride_bot_search",PPD_TOOL:"ppd_tool",LIGHTWEIGHT_EVENTS_CREATION:"lightweight_events_creation",PAGES_PLATFORM:"pages_platform",TOWNHALL:"townhall",RIDE_LOCATION_SEARCH:"ride_location_search",MESSENGER_LIVE_LOCATION:"messenger_live_location",FOOD_DRINK_BOOKMARK:"food_drink_bookmark",SERVICES_LEAD_GEN_SURVEY:"services_lead_gen_survey",SOCAL_APP:"socal_app",RECRUITING_EVENT:"recruiting_event",INSTANT_EXPERIENCES_NATIVE_FORM:"instant_experiences_native_form",BLOOD_DONATIONS:"blood_donations",LEAD_GENERATION:"lead_generation",QUICK_PROMOTION:"quick_promotion",M_SUGGESTION:"m_suggestion",CRISIS:"crisis",VOTER_REGISTRATION_DRIVE:"voter_registration_drive",CIVIC_PROPOSAL:"civic_proposal",PAYMENTS:"payments",PORTAL_SETTINGS:"portal_settings",STORE_CHECKOUT:"store_checkout",GOV_SERVICE_SUBMISSION:"gov_service_submission",WHATSAPP_BIZ_SEARCH:"whatsapp_biz_search"})}),null);
__d("AddressTypeaheadDisplayOrder",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PLACE_FIRST:"place_first",ADDRESS_FIRST:"address_first",INTERLEAVE:"interleave"})}),null);
__d("AddressTypeaheadIntegration",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SIMPLE:"simple",DISTANCE_ONLY:"distance_only",STRING_MATCH:"string_match",TYPE_MATCH_CHECK:"type_match_check"})}),null);
__d("AddressTypeaheadProvider",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FACEBOOK:"facebook",GOOGLE:"google",HERE_WEB:"here_web",HERE_THRIFT:"here_thrift",DEFAULT_PROVIDER:"default_provider",GEOAPI:"geoapi"})}),null);
__d("AddressTypeaheadType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({STREET_TYPEAHEAD:"street_typeahead",PLACE_TYPEAHEAD:"place_typeahead",CITY_TYPEAHEAD:"city_typeahead",STREET_PLACE_TYPEAHEAD:"street_place_typeahead"})}),null);
__d("AddressTypeaheadSearchSourceConfig",["AddressTypeaheadCaller","AddressTypeaheadDisplayOrder","AddressTypeaheadIntegration","AddressTypeaheadProvider","AddressTypeaheadType","ImmutableObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=10,h=50,i=50;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,j,k,l,m,n,o,p,q,r,s,t){__p&&__p();c===void 0&&(c=null);d===void 0&&(d=null);e===void 0&&(e=b("AddressTypeaheadProvider").HERE_THRIFT);f===void 0&&(f=b("AddressTypeaheadType").STREET_PLACE_TYPEAHEAD);j===void 0&&(j=b("AddressTypeaheadIntegration").STRING_MATCH);k===void 0&&(k=b("AddressTypeaheadDisplayOrder").INTERLEAVE);l===void 0&&(l=g);m===void 0&&(m=b("AddressTypeaheadCaller").GRAPHQL);n===void 0&&(n=null);o===void 0&&(o=null);p===void 0&&(p=null);q===void 0&&(q=!1);r===void 0&&(r=!0);s===void 0&&(s=h);t===void 0&&(t=i);return a.call(this,{latitude:c,longitude:d,provider:e,search_type:f,integration_strategy:j,display_order:k,num_results:l,caller:m,country_filter:n,page_category:o,radius_in_meters:p,geocode_fallback:q,show_photo:r,photo_width:s,photo_height:t})||this}var d=c.prototype;d.equals=function(a){return this===a||this.latitude===a.latitude&&this.longitude===a.longitude&&this.provider===a.provider&&this.search_type===a.search_type&&this.integration_strategy===a.integration_strategy&&this.display_order===a.display_order&&this.num_results===a.num_results&&this.caller===a.caller&&(this.country_filter===a.country_filter||!!this.country_filter&&!!a.country_filter&&this.country_filter.toString()===a.country_filter.toString())&&(this.page_category===a.page_category||!!this.page_category&&!!a.page_category&&this.page_category.toString()===a.page_category.toString())&&this.radius_in_meters===a.radius_in_meters&&this.geocode_fallback===a.geocode_fallback&&this.show_photo===a.show_photo&&this.photo_width===a.photo_width&&this.photo_height===a.photo_height};return c}(b("ImmutableObject"));e.exports=a}),null);
__d("AdsUEditorAdgroupExistingPostCTALinkField.react",["cssVar","fbt","AdsBulkTextInput.react","AdsBulkValueUtils","AdsExistingPostCTAUtils","AdsUEditorAdgroupCallToActionLinkField.react","CallToActionTypes","FDSSpinner.react","React","SUIText.react","ads-lib-urllib"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props.ctaData.isLoading()||!this.props.ctaData.hasValue();if(a)return b("React").createElement(b("FDSSpinner.react"),null);a=this.props.ctaData.getValueEnforcing();var c=a.bulkDisplayCTALink,d=a.bulkDisplayCTAType,e=a.hasDisplayCTALinkError;a=a.bulkPostCTALink;var f=b("AdsBulkValueUtils").getValueOrMixed_DEPRECATED(d);a=this.props.readOnly?a:c;c=e&&!this.props.readOnly?{errorMessage:h._("Vous devez indiquer une URL valide.")}:{};if(this.props.readOnly){e=b("AdsBulkValueUtils").getValueOrMixed_DEPRECATED(a);if(e===b("AdsBulkValueUtils").MIXED_VALUE)return b("React").createElement(b("SUIText.react"),{color:"secondary",size:"meta1"},h._("URL mixtes"));var g=e;g!==""&&g!=null&&g.length>b("AdsExistingPostCTAUtils").MAX_URL_LENGTH&&(g=g.substring(0,b("AdsExistingPostCTAUtils").MAX_URL_LENGTH)+"...");return b("React").createElement("a",{href:e!==""&&e!=null?b("ads-lib-urllib").normalize(e):null,style:{color:"#4b4f56"},target:"_blank"},g)}return f===b("CallToActionTypes").GET_DIRECTIONS?b("React").createElement(b("AdsUEditorAdgroupCallToActionLinkField.react"),{bulkCallToActionLink:a,bulkCallToActionType:d,isBulkEditDialog:!1,type:"address",onChange:this.props.onCallToActionLinkChange}):b("React").createElement(b("AdsBulkTextInput.react"),{errors:c,helpText:h._("Saisissez l\u2019URL du site web dont vous souhaitez faire la promotion. Ex.\u00a0: http:\/\/www.example.com\/page"),label:h._("URL du site Web (obligatoire)"),placeholder:h._("Saisissez l\u2019URL \u00e0 promouvoir"),value:a,onChange:this.props.onCallToActionLinkChange})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("AdsUEditorAdgroupExtraPlacementsForWhatsAppNotice.react",["cx","fbt","AdsCCCategory","AdsStaticInlineNux.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";var i={onlyValidOnFBMobileFeedWarning:h._("Les publicit\u00e9s offrant la possibilit\u00e9 d\u2019envoyer un message WhatsApp ne peuvent \u00eatre diffus\u00e9es que sur les fils d\u2019actualit\u00e9 Facebook Mobile."),onlyValidOnFBAndIGMobileFeedWarning:h._("Les publicit\u00e9s avec le bouton Envoyer un message WhatsApp n\u2019appara\u00eetront que dans les placements suivants\u00a0: fils d\u2019actualit\u00e9 pour mobile de Facebook et d\u2019Instagram.")};function a(a){a=a.isIGFeedPlacementSupported;var c=a?i.onlyValidOnFBAndIGMobileFeedWarning:i.onlyValidOnFBMobileFeedWarning;a=a?b("AdsCCCategory").ACTIVE_FEEDBACK:b("AdsCCCategory").WARNING;return b("React").createElement("div",{className:"_3-8o"},b("React").createElement(b("AdsStaticInlineNux.react"),{ccCardProps:{category:a,messageID:"ad_extra_placements_for_click_to_whatsapp",textData:[{type:"PARAGRAPH",data:{text:c}}]}}))}e.exports=a}),null);
__d("AdsUEditorAdgroupInvalidPlacementsForWhatsAppNotice.react",["cx","fbt","AdsCCCategory","AdsMultiLanguagePlacementUtils","AdsStaticInlineNux.react","React","intlList"],(function(a,b,c,d,e,f,g,h){"use strict";var i={onlyValidOnFBMobileFeedError:h._("Les pubs utilisant un message WhatsApp ne peuvent \u00eatre diffus\u00e9es que dans les fils d\u2019actualit\u00e9 Facebook Mobile. Ajoutez ce placement ou choisissez un autre bouton d\u2019appel \u00e0 l\u2019action."),onValidOnFBAndIGMobileFeedError:h._("Pour utiliser le bouton Envoyer un message WhatsApp, ajoutez au moins l\u2019un des placements suivants\u00a0: {supportedPlacementsList}.",[h._param("supportedPlacementsList",b("intlList")(b("AdsMultiLanguagePlacementUtils").getPlatformAndPlacementLabels(["facebook/feed","instagram/stream"]),b("intlList").CONJUNCTIONS.NONE))]),addFBMobileFeedPlacement:h._("Ajouter le fil d\u2019actualit\u00e9 Facebook Mobile"),addFBAndIGMobileFeedPlacements:h._("Mettre \u00e0 jour les placements")};function a(a){var c=a.isIGFeedPlacementSupported?i.onValidOnFBAndIGMobileFeedError:i.onlyValidOnFBMobileFeedError,d=a.isIGFeedPlacementSupported?i.addFBAndIGMobileFeedPlacements:i.addFBMobileFeedPlacement;return b("React").createElement("div",{className:"_3-8o"},b("React").createElement(b("AdsStaticInlineNux.react"),{ccCardProps:{category:b("AdsCCCategory").ERROR,messageID:"ad_invalid_placements_for_click_to_whatsapp",ctaData:[{type:"BUTTON_GROUP",data:{buttonsData:[{text:d,onCallToAction:a.onAddSupportedPlacements}]}}],textData:[{type:"PARAGRAPH",data:{text:c}}]}}))}e.exports=a}),null);
__d("AdsUEditorAdgroupMultipleAdsSelectedForWhatsAppNotice.react",["cx","fbt","AdsCCCategory","AdsStaticInlineNux.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){var a=h._("Les informations concernant le compte WhatsApp connect\u00e9 ne sont pas disponibles quand plusieurs pubs sont s\u00e9lectionn\u00e9es. S\u00e9lectionnez une pub \u00e0 la fois.");return b("React").createElement("div",{className:"_3-8o"},b("React").createElement(b("AdsStaticInlineNux.react"),{ccCardProps:{category:b("AdsCCCategory").WARNING,messageID:"ad_multiple_ads_selected_for_click_to_whatsapp",textData:[{type:"PARAGRAPH",data:{text:a}}]}}))}e.exports=a}),null);
__d("AdsUEditorAdgroupWhatsAppCTAFieldEditor.react",["AdsConnectWhatsAppToPageDialogContainer.react","AdsUEditorPageWhatsAppAccountNotice.react","AdsWhatsAppAccountSelector.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsWhatsAppAccountSelector.react").AdsWhatsAppAccountSelector;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;return b("React").createElement("div",null,b("React").createElement("div",{style:{marginTop:"16px"}},b("React").createElement(b("AdsUEditorPageWhatsAppAccountNotice.react"),{hasWhatsAppBusinessNumber:a.hasWhatsAppBusinessNumber,hasWhatsAppNumber:a.hasWhatsAppNumber,isAdmin:a.isPageAdmin,loadState:a.pageLoadState,pageID:a.pageID,pageSettingsLink:a.pageSettingsLink||void 0,requireWhatsAppBusinessNumber:a.requireWhatsAppBusinessNumber,whatsAppNumber:a.whatsAppNumber})),this.$1(),b("React").createElement(b("AdsConnectWhatsAppToPageDialogContainer.react"),{requireWhatsAppBusinessNumber:a.requireWhatsAppBusinessNumber,onConnectAccountSuccess:a.onConnectAccountSuccess}))};d.$1=function(){var a=this.props.requireWhatsAppBusinessNumber&&!this.props.hasWhatsAppBusinessNumber||!this.props.requireWhatsAppBusinessNumber&&!this.props.hasWhatsAppNumber;return a&&this.props.isPageAdmin?b("React").createElement(g,{buttonSize:"medium",pageID:this.props.pageID,pageToken:this.props.pageToken,requireWhatsAppBusinessNumber:this.props.requireWhatsAppBusinessNumber}):null};return c}(b("React").Component);e.exports=a}),null);
__d("AdsUEditorAdgroupWhatsAppPlacementsNotice.react",["AdsUEditorAdgroupExtraPlacementsForWhatsAppNotice.react","AdsUEditorAdgroupInvalidPlacementsForWhatsAppNotice.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a){if(!a.hasSupportedPlacements)return b("React").createElement(b("AdsUEditorAdgroupInvalidPlacementsForWhatsAppNotice.react"),{isIGFeedPlacementSupported:a.isIGFeedPlacementSupported,onAddSupportedPlacements:a.onAddSupportedPlacements});return!a.isAutoPlacementSelected&&a.hasUnsupportedPlacements?b("React").createElement(b("AdsUEditorAdgroupExtraPlacementsForWhatsAppNotice.react"),{isIGFeedPlacementSupported:a.isIGFeedPlacementSupported}):null}e.exports=a}),null);