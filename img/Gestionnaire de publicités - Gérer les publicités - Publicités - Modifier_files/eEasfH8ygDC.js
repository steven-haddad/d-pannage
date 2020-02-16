if (self.CavalryLogger) { CavalryLogger.start_js(["eeinl"]); }

__d("XUFIReactionProfileBrowserController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/reaction/profile/browser/",{ft_ent_identifier:{type:"String",required:!0}})}),null);
__d("XUFIReactionProfileDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/reaction/profile/dialog/",{reaction_type:{type:"Enum",enumType:0},ft_ent_identifier:{type:"String",required:!0},__asyncDialog:{type:"Int"}})}),null);
__d("UFIReactionsProfileBrowserUtils",["ActorURIConfig","XUFIReactionProfileBrowserController","XUFIReactionProfileDialogController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={getDialogURI:function(a){var c=a.actorID,d=a.feedbackTargetID;a=a.reactionKey;return b("XUFIReactionProfileDialogController").getURIBuilder().setString("ft_ent_identifier",d).setEnum("reaction_type",a).getURI().addQueryData(b("ActorURIConfig").PARAMETER_ACTOR,c)},getPageURI:function(a){var c=a.actorID;a=a.feedbackTargetID;return b("XUFIReactionProfileBrowserController").getURIBuilder().setString("ft_ent_identifier",a).getURI().addQueryData(b("ActorURIConfig").PARAMETER_ACTOR,c)},getPrimerProps:function(a){var b=g.getPageURI(a);a=g.getDialogURI(a);return{ajaxify:a,href:b,rel:"dialog"}}};e.exports=g}),null);
__d("sortReactionTypes",["UFIReactionTypes","objectKeys"],(function(a,b,c,d,e,f){var g={};b("UFIReactionTypes").ordering.forEach(function(a,b){g[a]=b});function a(a){return b("objectKeys")(a).sort(function(b,c){return a[b]["default"]===a[c]["default"]?g[b]-g[c]:a[c]["default"]-a[b]["default"]})}e.exports=a}),null);
__d("UFIReactionsBlingTokens.react",["cx","fbt","Bootloader","Event","React","ReactDOM","RTLKeys","UFIReactionIconImpl.react","UFIReactionsProfileBrowserUtils","UFIReactionTypes","joinClasses","sortReactionTypes"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=null;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={active:null,prevFeedback:d.props.feedback,selectedIndex:-1,reactionTypes:j(d.props.feedback.reactioncountmap,d.props.max)},d.onFocusIn=function(a){d.refs.tokens.contains(a.target)||(d.setState({selectedIndex:-1}),d.focusInListener&&(d.focusInListener.remove(),d.focusInListener=null))},d.onFocus=function(a){a.target===d.refs.tokens&&(d.setState({selectedIndex:0}),d.focusInListener||(d.focusInListener=b("Event").listen(document.documentElement,"focusin",d.onFocusIn)))},d.onKeyDown=function(a){switch(a.keyCode){case b("RTLKeys").RETURN:d.focusInListener&&(d.focusInListener.remove(),d.focusInListener=null);break;case b("RTLKeys").TAB:d.setState({selectedIndex:0});break;case b("RTLKeys").getLeft():case b("RTLKeys").getRight():a.preventDefault();d.setState({selectedIndex:Math.max(0,Math.min(d.state.selectedIndex+(a.keyCode===b("RTLKeys").getLeft()?-1:1),d.state.reactionTypes.length-1))});break}},d.renderToken=function(a,c){var e=d.props.feedback,f=h._("{reduced_count} {reaction_type}",[h._param("reduced_count",e.reactioncountmap[a].reduced),h._param("reaction_type",b("UFIReactionTypes").reactions[a].display_name)]),g=b("React").createElement(b("UFIReactionIconImpl.react"),{size:d.props.size,className:"_4-op",reaction:a}),j=b("React").createElement("span",{className:"_3chu"},e.reactioncountmap[a].reduced);f={"aria-label":f,"data-testid":"ufi_bling_token_"+a,className:"_3emk"+(d.props.size==="14"?" _26lk":"")+(d.props.size==="16"?" _401_":""),key:"reactionType-"+a,ref:c};if(d.props.noLinks)return b("React").createElement("span",f,g,j);f=babelHelpers["extends"]({},f,b("UFIReactionsProfileBrowserUtils").getPrimerProps({actorID:e.actorforpost,feedbackTargetID:e.entidentifier,reactionKey:a}),{role:"button",tabIndex:d.state.selectedIndex===c?0:-1});return i?b("React").createElement(i,babelHelpers["extends"]({active:d.state.active===a,feedback:e,reaction:a},f),g,j):b("React").createElement("a",babelHelpers["extends"]({onMouseEnter:d.onMouseEnter.bind(babelHelpers.assertThisInitialized(d),a)},f),g,j)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidUpdate=function(){if(this.state.selectedIndex>-1){var a=b("ReactDOM").findDOMNode(this.refs[this.state.selectedIndex]);a&&a.focus()}};c.getDerivedStateFromProps=function(a,b){return{active:a.feedback.reactioncount===b.prevFeedback.reactioncount?b.active:null,prevFeedback:a.feedback,reactionTypes:j(a.feedback.reactioncountmap,a.max)}};d.onMouseEnter=function(a){var c=this;i||b("Bootloader").loadModules(["UFIReactionsTooltipImpl.react"],function(a){i=a,c.forceUpdate()},"UFIReactionsBlingTokens.react");this.setState({active:a})};d.render=function(){var a=this.props.noLinks?{}:{onFocus:this.onFocus,onKeyDown:this.onKeyDown,role:"toolbar",tabIndex:this.state.selectedIndex>-1?-1:0};return b("React").createElement("div",{className:b("joinClasses")("_3t53",this.props.className)},b("React").createElement("span",babelHelpers["extends"]({"aria-label":h._("Voyez qui a r\u00e9agi \u00e0 \u00e7a"),className:"_3t54",ref:"tokens"},a),this.state.reactionTypes.map(this.renderToken,this)),this.props.children)};return c}(b("React").Component);a.defaultProps={className:null,size:"16"};function j(a,c){if(a==null)return[];var d=b("sortReactionTypes")(a).filter(function(c){return b("UFIReactionTypes").reactions[c]&&a[c]["default"]});c&&(d=d.slice(0,c));return d}e.exports=a}),null);
__d("XUFIReactionTooltipController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/reaction/tooltip/",{ft_ent_identifier:{type:"String",required:!0},seen_user_fbids:{type:"IntVector",defaultValue:[]},reaction_type:{type:"Enum",enumType:0},user_count:{type:"Int"}})}),null);
__d("XUFIReactionsSocialSentenceTooltipController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/reaction/sentence/tooltip/",{ft_ent_identifier:{type:"String",required:!0},user_count:{type:"Int"},client_id:{type:"String"}})}),null);