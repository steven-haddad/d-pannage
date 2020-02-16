# Changelog

##### 1.3.3
  * force `ContentReplace` and `DynamicDate` to use selectors for not killing event handlers
  * moove slideVisitedClass to global config
  * set slideVisited class initially on first slide after load

##### 1.3.2
  * make events configurable `TrackUserInteraction`-Plugin
  * dont track formslider version via events
  * add `leaving-success` event trigger
  * add on `beforeSubmit` callback for plugin `FormSubmission`
  * add possibility to set current index for `ProgressBar`
  * add `CustomDataEvent` plugin

##### 1.3.1
  * add `PreventGoingBackOnRole` plugin
  * add `AddBodyClasses` plugin

##### 1.3.0
  * `DoOneTimeOnEvent` and `DoOnEvent` passing args now to callback handler
  * fix call to `FormsliderTrackingHelper` after renaming `FormsliderTracking` to `FormsliderTracking`

##### 1.2.9
  * fix $('input[type="radio"]').is(':checked')
  * implement multiple answers correct
  * rename `FormsliderTracking` -> `FormsliderTracking`

##### 1.2.8
  * trigger `do-equal-height` after all images loaded from `LazyLoad`-Plugin
  * add option to reset selected answer on going back
  * add `DynamicDate`
  * use regexp for `ContentReplace` plugin
  * trigger 'ready.formslider' on container when ready
  * fix safari ios issue with inputs when click on label

##### 1.2.7
  * add form_submitted_at to FormSubmitterCollect
  * add `ContentReplace` plugin

##### 1.2.6
  * fix coffeelint errors

##### 1.2.5
  * implement `FormSubmitterEmail`

##### 1.2.4
  * Progressbar: better longest path data attribute handling
  * add basic support for multiple answers

##### 1.2.3
  * introduce `firstSlideCounts` for progressbar plugin
  * change default selector for `JqueryInputValidator`
  ```
  elements: 'input[type!="hidden"], textarea, select'
  ignore:   '[readonly]'
  ```

##### 1.2.2
  * introduce `JqueryAnimate` plugin, animations based on data attributes
  * prevent `Formslider` from duplicate `ready` event triggering
  * make `FormsubmitterSubmit` default
  * `JqueryInputValidator` now listens on natural form submissions per default
  * `NavigateOnKey` supports now `preventDefault`

##### 1.2.1
  * update dependencies

##### 1.2.0
  * replace `JqueryValidate` with `JqueryInputValidator` (JqueryValidate is now independent plugin: https://github.com/formslider/formslider.jquery-validation)
  * extract `InputForceMaxlength`
  * add coverage reporter

##### 1.1.10
  * fix `JqueryValidate` transition prevention
  * better integration tests for `JqueryValidate`

##### 1.1.9
  * add specs for plugin `JqueryValidate`
  * better performance for `JqueryValidate`
  * better error checking in `Logger`

##### 1.1.8
  * refactor `JqueryValidate`, real validation for number, email, tel or pattern based
  * refactor `InputNormalizer`, adds `inputmode="..."` for inptuts of type number, tel, email, url
  * add `@slide` to `AbstractFormsliderLoader`
  * track google client id via `formslider.tracking` plugin
  * add class `info` to hidden user information inputs
  * add `buildHiddenInput` to config for `TrackSessionInformation`
  * fix `FormSubmitterCollect` selects informational inputs now via class
  * fix `InputSync` now handles radios/checkbox correctly
  * add `syncGlobal` to `InputSync` so we can sync outside the the formslider

##### 1.1.7
  * fix trigger resize after `JqueryValidate.onValidate`
  * fix `FormSubmission` null/false check for `loadHiddenFrameOnSuccess`
  * `FormSubmitterAbstract` respects now static config for submitter implementation
  * `AddSlideClasses` now adds a class to a slide that indicates that a slide was visited
  * `FormSubmitterCollect` now selects inputs only from visited slides

##### 1.1.6
  * fix 100% check for `AbstractFormsliderProgressBar`

##### 1.1.5
  * fix resize issue with `DriverFlexslider`
  * fix loading issue with `AbstractFormsliderProgressBar`

##### 1.1.4
  * dont set `dataKeyForMaxLength` per default for `AbstractFormsliderProgressBar`

##### 1.1.3
  * adjust `SlideVisibility` plugin for unordered jumps, enhance performance
  * remove `waitBeforeFocus` option from `InputFocus` as it works as expected after fixing after trigger timer issue with 1.1.0
  * return an event even when there is no listener (`EventManager`)
  * `BrowserHostoryController` only react if slider is unlocked
  * `AbstractFormsliderProgressBar` now respects the data attribute `dataKeyForMaxLength`
  * enhance `InputNormalizer`
  * `AnswerMemory` plugin now memorizes by question input id and answer input id
  * `JqueryValidate` validtates now only writable inputs (not readonly)
  * `AnswerClick` trigger now events in form of @trigger('question-answered', questionId, answerId, asnwerValue, slideIndex)
  * `TrackUserInteraction` respects new `AnswerClick` event signature

##### 1.1.2
  * add link to minimal demo implementation
  * fix empty first initialization with jquery plugin

##### 1.1.1
  * " `OrderByIdController`:reset prev-id after navigating back"
  * re introduce formlsider.index

##### 1.1.0
  * rename plugins -> remove `Plugin` from names as its redundant information
  * implement `OrderByIdController` for non native order paths
  * introduce navgation controller plugins: `BrowserHistoryController`, `HistoryJsController`, `NativeOrderController` and `OrderByIdController`
  * simplify driver implementation by removing `get`, `removeSlide`, `addSlide` and `moveSlide`
  * fix: driver triggers on after before transition end when using css animations
  * add `AnswerMemory` plugin for later logic depending on previous answers
  * rename `NormalizeInputAttributes` -> `InputNormalizer`
  * progessbars are now direct `AbstractFormsliderPlugin`s
  * loader are now direct `AbstractFormsliderPlugin`s
  * browser history is now a controller
  * refactor navigation trigger plugins to `NavigateOnCLick` and `NavigateOnKey`
  * refactor `LazyLoad` and `SlideVisibility` for working with non native order routing
  * add `slide-[id]-entered` event to `TrackUserInteraction`
  * add more comments and explcicit returns
  * do forgotten commit for `docs/EVENTMANAGER.md` ;)
  * add `PrevOnClick`
  * add new external plugin `NoUiSlider` to list

##### 1.0.21
  * don't let jquery.formslider fail if wrapper not found
  * add `animateHeight` to `Progressbar`
  * add possibility to access formslider directly via attached element
  * add `docs/FORMSLIDER.md`
  * add `docs/EVENTMANAGER.md`
  * update `README.md`

##### 1.0.20
  * eliminate unwanted loops for performance
  * remove logging of loaded modules

##### 1.0.19
  * add `hideAnimationDuration` to `SlideVisibility`

##### 1.0.18
  * fix `TabIndexSetter`, start from 1 and count up per slide -> fixes autofill
  * add area and object for tabindex setting and apply also to non visible because they get ignored
  * move slide `SlideVisibility` plugin from progress to views

##### 1.0.17
  * add `scrollTo` and `checkElement` method to `ScrollUp` so that they can be overridden
  * remove left and right check from `ScrollUp`

##### 1.0.16
  * implement `SlideVisibility`

##### 1.0.15
  * fix triggering after events, when there was not an allowed transition
  * correct description for `DirectionPolicyByRole`

##### 1.0.14
  * add specs for `DirectionPolicyByRole`
  * lock navigation until current transition finished
  * set default for `BrowserHistory` `updateHash` to false
  * introduce `resetStatesOnLoad` for `BrowserHistory`

##### 1.0.13
  * docs/INTEGRATION.md added
  * `DirectionPolicyByRole` introduced
  * implement `ProgressBar` with adapter:
    * `ProgressBarAdapterPercent`
    * `ProgressBarAdapterSteps`

##### 1.0.12
  * define FormSubmitter in global namespace

##### 1.0.11
  * build dist ;)

##### 1.0.10
  * add `configWithDataFrom` for `Abstract` so you can merge data attributes
  * log warning if `ScrollUp` does not find an element to check for
  * `Progressbar` merges config data from progress bar wrapper by default
  * `NextOnKey` attaches to all inputs per default config
  * `InputSync` attaches to all inputs per default config
  * refactor `FormSubmission` and implement strategies via adapter classes

##### 1.0.09
  * build dist ;)

##### 1.0.8
  * only equalize element heights at ready or resize

##### 1.0.8
  * add feature `disableOnMobile` to `InputFocus`
  * add feature `scrollUpOffset` to `ScrollUp`
  * introduce `FeatureDetector`

##### 1.0.7
  * performance

##### 1.0.6
  * add `DoOnEvent` for inline plugin definition
  * eleminate `before` event dependency from `EqualHeight`
  * add `do-equal-height` event
  * move changelog to `docs/CHANGELOG.md`

##### 1.0.5
  * fix loader implementation

##### 1.0.4
  * add input without spinner capability

##### 1.0.3
  * remove isInViewport dependency

##### 1.0.2
  * remove phantomjs dependency
  * extend sass capabilities

##### 1.0.1
  * introduce locking
  * fix initial progressbar value
