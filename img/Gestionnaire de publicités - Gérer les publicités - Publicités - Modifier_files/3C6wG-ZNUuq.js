if (self.CavalryLogger) { CavalryLogger.start_js(["aLmCl"]); }

__d("AdsMediaPickerContent",["fbt","AdsLearnMore.react","AdsMediaPickerConstants","React"],(function(a,b,c,d,e,f,g){"use strict";e.exports=Object.freeze((a={COMMON:{EDIT_WARNING:g._("En modifiant le contenu cr\u00e9atif publicitaire vous allez r\u00e9initialiser tous les commentaires, r\u00e9actions et partages."),CANCEL_BUTTON:g._("Annuler"),CONTINUE_BUTTON:g._("Continuer"),UPLOAD_STATE_UPLOADING:g._("Importation"),UPLOAD_STATE_PROCESSING:g._("Traitement"),FILTERS:{TITLE:g._("Filtrer par"),ASPECT_RATIO:g._("Proportions"),LANDSCAPE:g._("Grand paysage (16:9)"),PORTRAIT:g._("Grand portrait (9:16)"),VERTICAL:g._("Vertical (4:5)"),SQUARE:g._("Carr\u00e9 (1:1)"),WIDTH:g._("Largeur"),HEIGHT:g._("Hauteur"),LESS_600:g._("Moins de 600 px"),MORE_600:g._("600 px et plus"),MORE_1080:g._("1080 px et plus"),VIDEO_LENGTH:g._("Dur\u00e9e de la vid\u00e9o"),LENGTH_LESS_15:g._("Moins de 15 secondes"),LENGTH_MORE_15:g._("15 secondes ou plus"),LENGTH_MORE_60:g._("60 secondes ou plus")},SORT:{PLACEHOLDER:g._("Trier par"),DATE_ADDED:g._("Date d\u2019ajout"),DATE_DSC:g._("Plus r\u00e9cent"),DATE_DSC_LABEL:g._("Les plus r\u00e9centes"),DATE_ASC:g._("Plus anciennes"),DATE_ASC_LABEL:g._("Les plus anciennes"),DATE_LAST:g._("Date de derni\u00e8re utilisation"),DATE_LAST_DSC:g._("Plus r\u00e9centes"),DATE_LAST_DSC_LABEL:g._("Les plus utilis\u00e9es r\u00e9cemment"),DATE_LAST_ASC:g._("Les moins r\u00e9centes"),DATE_LAST_ASC_LABEL:g._("Les moins utilis\u00e9es r\u00e9cemment"),WIDTH:g._("Largeur"),WIDTH_DSC:g._("Les plus larges"),WIDTH_DSC_LABEL:g._("Les plus larges"),WIDTH_ASC:g._("Les plus \u00e9troites"),WIDTH_ASC_LABEL:g._("Les moins larges"),HEIGHT:g._("Hauteur"),HEIGHT_DSC:g._("Les plus hautes"),HEIGHT_DSC_LABEL:g._("Les plus hautes"),HEIGHT_ASC:g._("Les plus courtes"),HEIGHT_ASC_LABEL:g._("Les plus courtes"),VIDEO_LENGTH:g._("Dur\u00e9e de la vid\u00e9o"),VIDEO_LENGTH_DSC:g._("Les plus longues"),VIDEO_LENGTH_DSC_LABEL:g._("Les plus longues"),VIDEO_LENGTH_ASC:g._("Plus courtes"),VIDEO_LENGTH_ASC_LABEL:g._("Les plus courtes")},HOVERCARD:{NAME:g._("Nom"),SIZE:g._("Taille"),ASPECT_RATIO:g._("Format de l\u2019image"),DATE_ADDED:g._("Date d\u2019ajout"),LAST_USED:g._("Date de derni\u00e8re utilisation"),LENGTH:g._("Dur\u00e9e"),RESOLUTION:g._("R\u00e9solution")}}},a[b("AdsMediaPickerConstants").IMAGE]={DIALOG_TITLE:g._("Ressources image"),UPLOAD_BUTTON:g._("Importer des images"),SELECTION_TITLE_SINGLE:g._("Image s\u00e9lectionn\u00e9e"),SELECTION_TITLE_MULTIPLE_GETTER:function(a,b){return g._("Images s\u00e9lectionn\u00e9es ({image count} sur {image max})",[g._param("image count",a),g._param("image max",b)])},SEARCH_ACCOUNT:g._("Rechercher des images par nom"),SEARCH_PAGE:g._("Recherchez des images par mot cl\u00e9 de la l\u00e9gende"),SEARCH_INSTAGRAM:g._("Recherchez des images par mot cl\u00e9 de la publication"),EMPTY_STATE:{ACCOUNT_TITLE:g._("Votre compte n\u2019a pas d\u2019images"),ACCOUNT_DESCRIPTION:g._("Importez des images de votre ordinateur."),ACCOUNT_UPLOAD:g._("Importer une image"),INSTAGRAM_NOT_CONNECTED:g._("Instagram n\u2019est pas connect\u00e9"),INSTAGRAM_NOT_CONNECTED_DESCRIPTION:g._("Pour voir s\u2019afficher des images que vous partagez sur Instagram ici, connectez votre compte Instagram dans la rubrique identit\u00e9."),INSTAGRAM_TITLE:g._("Vous n\u2019avez pas d\u2019images Instagram"),INSTAGRAM_DESCRIPTION:g._("Partagez une photo sur Instagram pour la voir ici."),PAGE_TITLE:g._("Vous n\u2019avez pas d\u2019image sur votre Page"),PAGE_DESCRIPTION:g._("Partagez une photo sur votre Page pour la voir ici."),STOCK_TITLE:g._("Recherchez des images professionnelles pour les utiliser dans vos publicit\u00e9s."),STOCK_DESCRIPTION:g._("Toutes les images s\u00e9lectionn\u00e9es seront enregistr\u00e9es dans votre biblioth\u00e8que d\u2019images.")},EMPTY_RESULTS:{ACCOUNT_TITLE:g._("Aucune image ne correspond \u00e0 votre recherche"),ACCOUNT_DESCRIPTION:g._("Nous n\u2019avons pas trouv\u00e9 d\u2019image correspondant \u00e0 votre recherche. Essayez de modifier vos filtres ou recherchez autre chose."),INSTAGRAM_TITLE:g._("Aucune image ne correspond \u00e0 votre recherche"),INSTAGRAM_DESCRIPTION:g._("Nous n\u2019avons pas trouv\u00e9 d\u2019images publi\u00e9es contenant vos termes de recherche. Essayez de modifier vos filtres ou de rechercher autre chose."),PAGE_TITLE:g._("Aucune vid\u00e9o ne correspond \u00e0 votre recherche"),PAGE_DESCRIPTION:g._("Nous n\u2019avons pas trouv\u00e9 de l\u00e9gende d\u2019image avec les termes recherch\u00e9s. Essayez de modifier vos filtres ou recherchez autre chose."),STOCK_TITLE:g._("Aucune image ne correspond \u00e0 votre recherche."),STOCK_DESCRIPTION:g._("Essayez d\u2019utiliser d\u2019autres mots-cl\u00e9s.")}},a[b("AdsMediaPickerConstants").VIDEO]={DIALOG_TITLE:g._("Ressources vid\u00e9o"),UPLOAD_BUTTON:g._("Importer la vid\u00e9o"),PASTE_LINK_BUTTON:g._("Coller le lien"),SELECTION_TITLE_SINGLE:g._("Vid\u00e9o s\u00e9lectionn\u00e9e"),SELECTION_TITLE_MULTIPLE_GETTER:function(a,b){return g._("Vid\u00e9os s\u00e9lectionn\u00e9es ({video count} sur {video max})",[g._param("video count",a),g._param("video max",b)])},SEARCH_ACCOUNT:g._("Recherchez des vid\u00e9os par nom"),SEARCH_PAGE:g._("Recherchez des vid\u00e9os par mot cl\u00e9 de la l\u00e9gende"),SEARCH_INSTAGRAM:g._("Recherchez des vid\u00e9os par mot cl\u00e9 de la publication"),EMPTY_STATE:{ACCOUNT_TITLE:g._("Votre compte n\u2019a pas de vid\u00e9os"),ACCOUNT_DESCRIPTION:g._("Importez des vid\u00e9os de votre ordinateur."),ACCOUNT_UPLOAD:g._("Importer une vid\u00e9o"),INSTAGRAM_NOT_CONNECTED:g._("Instagram n\u2019est pas connect\u00e9"),INSTAGRAM_NOT_CONNECTED_DESCRIPTION:g._("Pour voir appara\u00eetre des vid\u00e9os que vous avez partag\u00e9es sur Instagram ici, connectez votre compte Instagram dans la rubrique identit\u00e9."),INSTAGRAM_TITLE:g._("Vous n\u2019avez pas de vid\u00e9o Instagram"),INSTAGRAM_DESCRIPTION:g._("Partagez une vid\u00e9o sur Instagram pour la voir appara\u00eetre ici."),PAGE_TITLE:g._("Vous n\u2019avez pas de vid\u00e9os sur votre Page"),PAGE_DESCRIPTION:g._("Partagez une vid\u00e9o sur votre Page pour la voir ici.")},EMPTY_RESULTS:{ACCOUNT_TITLE:g._("Aucune vid\u00e9o ne correspond \u00e0 votre recherche"),ACCOUNT_DESCRIPTION:g._("Nous n\u2019avons pas trouv\u00e9 de vid\u00e9o correspondant \u00e0 votre recherche. Essayez de modifier vos filtres ou recherchez autre chose."),INSTAGRAM_TITLE:g._("Aucune vid\u00e9o ne r\u00e9pond \u00e0 votre recherche"),INSTAGRAM_DESCRIPTION:g._("Nous n\u2019avons pas trouv\u00e9 de publications vid\u00e9os avec vos termes de recherche. Essayez de modifier vos filtres ou recherchez autre chose."),PAGE_TITLE:g._("Aucune vid\u00e9o ne r\u00e9pond \u00e0 vos crit\u00e8res"),PAGE_DESCRIPTION:g._("Nous n\u2019avons pas trouv\u00e9 de l\u00e9gende vid\u00e9o avec les termes recherch\u00e9s. Essayez de modifier vos filtres ou recherchez autre chose.")},PASTE_LINK_DIALOG:{DIALOG_TITLE:g._("Copier un lien vers un fichier vid\u00e9o h\u00e9berg\u00e9"),DESCRIPTION:g._("L\u2019URL doit \u00eatre un lien de t\u00e9l\u00e9chargement direct de votre fichier vid\u00e9o. Nous ne sommes pas actuellement en mesure d\u2019accepter les liens de partage ou les liens avec connexion. {Learn more}",[g._param("Learn more",b("React").createElement(b("AdsLearnMore.react"),{cmsID:"1764659187152203"}))]),VIDEO_URL_LABEL:g._("URL de la vid\u00e9o"),VIDEO_URL_DESCRIPTION:g._("Votre fichier vid\u00e9o doit \u00eatre directement t\u00e9l\u00e9chargeable sur le lien. Nous vous recommandons les formats .mov et .mp4."),VIDEO_URL_PLACEHOLDER:g._("Collez un lien de t\u00e9l\u00e9chargement direct de votre vid\u00e9o"),VIDEO_NAME_LABEL:g._("Nom de la vid\u00e9o"),VIDEO_NAME_DESCRIPTION:g._("Nommez votre fichier vid\u00e9o de mani\u00e8re \u00e0 le retrouver facilement lorsque vous parcourez votre biblioth\u00e8que."),VIDEO_NAME_PLACEHOLDER:g._("Entrez un nom pour votre vid\u00e9o"),SUBMIT_BUTTON:g._("Envoyer")}},a))}),null);
__d("AdsMediaPickerDialogMediaTypeContext",["AdsMediaPickerConstants","react"],(function(a,b,c,d,e,f){"use strict";e.exports=b("react").createContext({mediaType:b("AdsMediaPickerConstants").IMAGE,sourceKey:b("AdsMediaPickerConstants").commonSourceKeys.ACCOUNT})}),null);
__d("AdsMediaPickerCurrentSelectionBar.react",["cx","AdsMediaPickerContent","AdsMediaPickerDialogMediaTypeContext","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){return a!=null&&typeof a==="object"&&typeof a.getSignature==="function"?a.getSignature():String(a)}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.onRemoveItems([a])},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this;if(this.props.itemIDs.size===0)return null;var c=this.props.itemRenderer;return b("React").createElement("div",{className:"_732m"},b("React").createElement("div",{className:"_732n"},b("React").createElement("div",{className:"_732o"},b("React").createElement(b("AdsMediaPickerDialogMediaTypeContext").Consumer,null,function(c){c=c.mediaType;return a.props.maxSelectionCount===1?b("AdsMediaPickerContent")[c].SELECTION_TITLE_SINGLE:b("AdsMediaPickerContent")[c].SELECTION_TITLE_MULTIPLE_GETTER(a.props.itemIDs.size,a.props.maxSelectionCount)}))),b("React").createElement("div",{className:"_732p"},this.props.itemIDs.map(function(d){return b("React").createElement(c,{id:d,key:h(d),onRemoveItem:a.$1})})))};return c}(b("React").PureComponent);a.defaultProps={maxSelectionCount:1};e.exports=a}),null);
__d("AdsMediaPickerDialog.react",["ix","cx","AdsImageSelectorV2Types","AdsMediaPickerContent","AdsMediaPickerDialogContext","AdsMediaPickerDialogMediaTypeContext","AdsVideoSelectionHeaderTabTypes","FDSButton.react","FDSCancelButton.react","FDSHorizontalLayout.react","FDSModal.react","FDSModalFooter.react","FDSModalHeader.react","FDSSection.react","FDSTabGroup.react","FDSText.react","Image.react","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("AdsImageSelectorV2Types").AdsImageSource;var i=[b("AdsVideoSelectionHeaderTabTypes").UPLOAD,a.UPLOAD_IMAGE];function j(a){return b("React").createElement(b("FDSTabGroup.react"),{tabs:a.sources.filter(function(a){return!i.includes(a.id)}).map(function(a){return{label:a.sourceName,value:a.id,icon:b("React").createElement(b("SUIGlyphIcon.react"),{srcActive:a.sourceIconActive,srcDefault:a.sourceIconDefault})}}),value:a.currentSourceID,onChange:a.onChangeSource})}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return b("React").createElement(b("AdsMediaPickerDialogMediaTypeContext").Consumer,null,function(c){c=c.mediaType;return b("React").createElement(b("FDSModal.react"),{footer:b("React").createElement(b("FDSModalFooter.react"),{leftContent:a.props.adEditWarningMessage!=null?b("React").createElement(b("FDSHorizontalLayout.react"),null,b("React").createElement(b("Image.react"),{className:"_7a7n",src:g("480790")}),b("React").createElement(b("FDSText.react"),{color:"primary",size:"body3"},a.props.adEditWarningMessage)):null,primaryButton:b("React").createElement(b("FDSButton.react"),{isDisabled:!a.props.isConfirmEnabled,label:b("AdsMediaPickerContent").COMMON.CONTINUE_BUTTON,use:"primary",onClick:a.props.onConfirm}),secondaryButton:b("React").createElement(b("FDSCancelButton.react"),null)}),header:b("React").createElement(b("FDSModalHeader.react"),{title:b("AdsMediaPickerContent")[c].DIALOG_TITLE}),isShown:a.props.isShown,width:768,onHide:a.props.onHide},b("React").createElement(b("FDSSection.react"),{hasPadding:!1},b("React").createElement("div",{className:"_731m"},b("React").createElement(j,{currentSourceID:a.props.currentSourceID,sources:a.props.sources,onChangeSource:a.props.onChangeSource}))),b("React").createElement(b("FDSSection.react"),{hasPadding:!1},b("React").createElement("div",{className:"_731l"},b("React").createElement("div",{className:"_731n"},b("React").createElement(b("AdsMediaPickerDialogContext").Provider,{value:{}},a.props.children)))))})};return c}(b("React").PureComponent);e.exports=c}),null);
__d("AdsMediaPickerDialogActionsBar.react",["ix","cx","AdsInterfacesLogEvents","AdsInterfacesLogger","AdsMediaPickerConstants","AdsMediaPickerContent","AdsMediaPickerDialogMediaTypeContext","AdsVideoUtils","FDSButton.react","FDSButtonSpinner.react","FDSDropdownSelector.react","FDSDropdownSelectorOption.react","FileInput.react","Image.react","React","SUIBusinessTheme","SUISearchInput.react","asset","debounce","emptyFunction","gkx","objectKeys"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=750;function j(a,c){switch(c){case b("AdsMediaPickerConstants").commonSourceKeys.ACCOUNT:return b("AdsMediaPickerContent")[a].SEARCH_ACCOUNT;case b("AdsMediaPickerConstants").commonSourceKeys.PAGE:return b("AdsMediaPickerContent")[a].SEARCH_PAGE;case b("AdsMediaPickerConstants").commonSourceKeys.INSTAGRAM:return b("AdsMediaPickerContent")[a].SEARCH_INSTAGRAM;default:return b("AdsMediaPickerContent")[a].SEARCH_ACCOUNT}}var k=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){__p&&__p();var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(a=d=c.call.apply(c,[this].concat(f))||this,d.state={sortKey:null},d.$1=function(a){d.setState({sortKey:a===b("AdsMediaPickerConstants").sortKeys.CLEAR?null:a});d.props.onChange(a);if(d.props.loggerMap){a=d.props.loggerMap[a||b("AdsMediaPickerConstants").sortKeys.CLEAR];if(a==null)return;b("AdsInterfacesLogger").log({eventName:a,eventCategory:b("AdsInterfacesLogEvents").EventCategory.USER_ACTION})}},a)||babelHelpers.assertThisInitialized(d)}var d=a.prototype;d.render=function(){var a=b("objectKeys")(b("AdsMediaPickerConstants").sortKeys).map(function(a){return b("React").createElement(b("FDSDropdownSelectorOption.react"),{key:a,value:a},b("AdsMediaPickerConstants").sortKeyLabelMap[a])});return b("React").createElement(b("FDSDropdownSelector.react"),{buttonUse:"default",placeholder:b("AdsMediaPickerContent").COMMON.SORT.PLACEHOLDER,value:this.state.sortKey,onChange:this.$1},a)};return a}(b("React").PureComponent),l=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(a=d=c.call.apply(c,[this].concat(f))||this,d.state={value:""},d.$1=function(a){d.setState({value:a}),d.$2(a)},d.$2=b("debounce")(function(a){return d.props.onSearch(a.trim())},i),a)||babelHelpers.assertThisInitialized(d)}var d=a.prototype;d.render=function(){var a=this;return b("React").createElement(b("AdsMediaPickerDialogMediaTypeContext").Consumer,null,function(c){var d=c.mediaType;c=c.sourceKey;return b("React").createElement(b("SUISearchInput.react"),{placeholder:j(d,c),theme:b("SUIBusinessTheme"),value:a.state.value,onChange:a.$1})})};return a}(b("React").PureComponent),m=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(a=b=c.call.apply(c,[this].concat(e))||this,b.$1=function(a){return b.props.onUpload(a.target.files)},a)||babelHelpers.assertThisInitialized(b)}var d=a.prototype;d.render=function(){var a=this;return b("React").createElement(b("AdsMediaPickerDialogMediaTypeContext").Consumer,null,function(c){c=c.mediaType;return b("React").createElement(b("FileInput.react"),{accept:a.props.mediaType==="image"?"image/*":b("AdsVideoUtils").getVideoFileExtensions(),multiple:a.props.allowMultiUpload,name:"file",onChange:a.$1},b("React").createElement(b("FDSButton.react"),{busyIndicator:a.props.isLoading?b("React").createElement(b("FDSButtonSpinner.react"),null):void 0,href:{url:"#"},iconAfter:a.props.uploadFailReason!=null?b("React").createElement(b("Image.react"),{src:g("480268")}):null,isDisabled:a.props.isLoading,label:b("AdsMediaPickerContent")[c].UPLOAD_BUTTON,tooltip:a.props.uploadFailReason}))})};return a}(b("React").PureComponent);function a(a){return b("React").createElement("div",{className:"_731z"},b("React").createElement("div",{className:"_731- _731_"},b("React").createElement(l,{onSearch:a.onSearch||b("emptyFunction")})),b("React").createElement("div",{className:"_731- _7320"},a.onApplySort!=null?b("React").createElement(b("AdsMediaPickerDialogMediaTypeContext").Consumer,null,function(c){var d=c.mediaType;c=c.sourceKey;return d==="video"||c===b("AdsMediaPickerConstants").commonSourceKeys.INSTAGRAM?null:b("React").createElement(k,{loggerMap:a.sortLoggerMap,onChange:a.onApplySort})}):null),a.onUpload&&!b("gkx")("824285")?b("React").createElement("div",{className:"_731- _7323"},b("React").createElement(m,{allowMultiUpload:!!a.allowMultiUpload,isLoading:!!a.isLoading,mediaType:a.mediaType,uploadFailReason:a.uploadFailReason,onUpload:a.onUpload})):null)}e.exports=a}),null);
__d("AdsMediaPickerImageDialogWrapperContainer.react",["AdsFluxContainer","AdsImageSelectorV2StateStore","AdsMediaPickerConstants","AdsMediaPickerDialog.react","AdsMediaPickerDialogMediaTypeContext","AdsMediaPickerUtils","React","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsMediaPickerUtils").convertSourceIDToCommonKey;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("AdsImageSelectorV2StateStore")]};c.calculateState=function(a,c){a=b("AdsImageSelectorV2StateStore").getSelectedSourceType()||c.initialSource;c=b("AdsImageSelectorV2StateStore").getSelectedImageIDs().size>0;return{commonSourceKey:g(a),currentSourceID:a,hasSelection:c}};var d=c.prototype;d.render=function(){var a=b("AdsMediaPickerUtils").processImageSources(this.props.sources);return b("React").createElement(b("AdsMediaPickerDialogMediaTypeContext").Provider,{value:{mediaType:b("AdsMediaPickerConstants").IMAGE,sourceKey:this.state.commonSourceKey}},b("React").createElement(b("AdsMediaPickerDialog.react"),{adEditWarningMessage:this.props.adEditWarningMessage,currentSourceID:this.state.currentSourceID,isConfirmEnabled:this.state.hasSelection,isShown:this.props.isShown,sources:a,onChangeSource:this.props.onChangeSource,onConfirm:this.props.onConfirm,onHide:this.props.onHide},this.props.children))};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{withProps:!0,name:e.id})}),null);