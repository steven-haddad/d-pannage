
# Plugins

## Registering plugins
You can register plugins at initialization time (see [README.md](INTEGRATION.md)).

Or after initialization:
```js
formslider = $('.my-formslider').formslider();

formslider.plugins.load({
  class: 'BrowserHistory'
  config:{
    updateHash: true
  }
})
```


## Plugin configuration
The configuration consists of three levels:

### 1. The default config
Default configuration for a plugin provided by source code.

### 2. Global plugin config
Passed during initialization.
```js
$('.my-formslider').formslider({
  driver:{
    ...
  },

  pluginsGlobalConfig: {
    answersSelector: '.answers',
    answerSelector:  '.answer',
    answerSelectedClass: 'selected'
  },

  plugins: [
    ...
  ]
});
```

### 3. The initial config
Passed during initialization.
```js
$('.my-formslider').formslider({
  ...
  plugins: [
    {
      class: 'BrowserHistory'
      config:{
        updateHash: false,
        resetStatesOnLoad: true
      }
    }
  ]
  ...
});

```

### Merge data attributes into config
You can merge slide data attributes into the current plugin config:
```
coffee

@config = @configWithDataFrom(@wrapper)
```

Have a look at [AbstractFormsliderPlugin::configWithDataFromElement](EXTENDING.md#configwithdatafromelement)
and  [ProgressBarPlugin](https://github.com/formslider/jquery.formslider/blob/master/src/coffee/plugins/progressbar/absract.coffee#L35) for an example implementation.


## Available plugins

### List of extern plugins
These plugins can be used to extend the formslider:
  * [formslider.tracking](https://github.com/formslider/formslider.tracking)
  * [formslider.animate.css](https://github.com/formslider/formslider.animate.css)
  * [formslider.dramatic.loader](https://github.com/formslider/formslider.dramatic.loader)
  * [formslider.hitory.js](https://github.com/formslider/formslider.hitory.js)
  * [formslider.nouislider](https://github.com/formslider/formslider.nouislider)
  * [formslider.jquery-validation](https://github.com/formslider/formslider.jquery-validation) *old validation implementation

### form plugins
##### *AnswerClick*
Add answered classes and triggers track events.
Default configuration:
```js
config: {
  resetAnswerOnGoingBack: false
  answersSelector:     '.answers', // from global config
  answerSelector:      '.answer'   // from global config
  answerSelectedClass: 'selected'  // from global config
}
```

The Plugin triggers the following events:
```coffee
@trigger('question-answered', questionId, answerId, asnwerValue, slideIndex)
```

##### *AnswerMemory*
Memorizes answers for later usage.

Access by `@formslider.plugins.get('AnswerMemory').memoryByQuestionId`.


##### *FormSubmission*
Submits a form if valid.
Default configuration:
```js
config: {
  submitOnEvents: ['validation.valid.contact'], // only triggered if direction is next

  successEventName: 'form-submitted',
  errorEventName:   'form-submission-error',
  loadHiddenFrameOnSuccess: 'url',

  formSelector: 'form',

  submitter: {
    class: 'FormSubmitterSubmit' // you should add novalidato to your form
  }    

  // submitter: {
  //   class: 'FormSubmitterCollect',
  //   endpoint: '#',
  //   method:   'POST'
  //   visitedSlideSelector: '.slide-visited'
  //   inputFilter: (inputs) ->
  //     inputs['form_submitted_at'] = (new Date()).toUTCString()
  //     inputs
  // }

  // make sure to load https://github.com/jquery-form/form
  // submitter: {
  //   class: 'FormSubmitterAjax',
  //   jquery-form configuration
  // }    

  // submitter: {
  //   class: 'FormSubmitterEmail',
  //   visitedSlideSelector: '.slide-visited',
  //   submitButtonSelector: '.slide-role-contact .next-button',
  //   mailto: 'hello@slidevision.io',
  //   subject: 'Hey There!',
  //   body: 'Tell us your story =)',
  //   validatorPlugin: 'JqueryInputValidator',
  //   validateSlideRole: 'contact'
  // }
}
```


##### *InputFocus*
Focusses first input on current slide.
Default configuration:
```js
config: {
  selector: 'input:visible',
  disableOnMobile: true
}
```


##### *InputForceMaxlength*
Adds javascript to inputs and textareas that truncates the input by given length when attribute 'data-force-maxlength'.
Default configuration:
```js
config: {
  selector: 'input, textarea',
  forceMaxLengthJs: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
}
```


##### *InputNormalizer*
Does some normalization on inputs.
Adds
  * `required="required"` if `required` attribute isset
  * `aria-required` if `required` attribute isset
  * adds `inputmode="..."` for inptuts of type number, tel, email, url
  * `x-inputmode` if `inputmode` isset
  * `x-autocompletetype` if `autocompletetype` or `autocomplete` isset
  * `autocomplete` and `autocompletetype` if one of them isset

Default configuration:
```js
config: {
  selector: 'input:visible'
}
```


##### *InputSync*
Syncs inputs with the same name.
Default configuration:
```js
config: {
  selector: 'input',
  attribute: 'name'
}
```

##### *JqueryInputValidator*
Validates inputs, selects and textareas by html5 attributes (see: [jquery.input.validator](https://github.com/creative-workflow/jquery.input.validator)).
```js
config:{
  selectors:{
    elements: 'input[type!="hidden"], textarea, select',
    ignore:   '[readonly]'
  },
  validateOnEvents: ['leaving.next'],
  formSelector: 'form',  // set to null if ou dont which to listen for natural form submit
  messages:{
    generic:   'invalid',
    email:     'invalid email',
    tel:       'invalid phone number',
    number:    'invalid number',
    minlength: 'to short',
    maxlength: 'to long',
    required:  'required'
  }
}
```


The plugin automatically detects the following attributes:
```bash
  * required                    # also add aria-required="true"
  * minlength
  * maxlength
  * type="email"
  * type="number"
  * type="tel"
  * pattern="..."
  * data-force-max-length="1"   # will truncate input if longer
```

The Plugin triggers the following events:
```coffee
@trigger("validation.valid.#{currentRole}", currentSlide)
@trigger("validation.invalid.#{currentRole}", currentSlide, errors=[])
$(window).trigger('resize') # if one ore more inputs are invalid -> height could be adjusted
```


###  generic plugins
##### *AddSlideClasses*
Adds classes based on role and index.
Adds:
  * class `answer-count-[answerCount]` based on global `answerSelector`
  * attribute `data-answer-count=[answerCount]`
  * class `slide-role-[slideRole]` based on slide attribute `data-role=slideRole`
  * class `slide-number-[index]` based on slide order  
  * attribute `data-slide-number=[index]`
  * adds `slide-visited` class to slide after transition

Default configuration:
```js
config: {
  answerSelector:  '.answer', // from global config
  slideVisitedClass: 'slide-visited'
}
```


##### *DoOnEvent*
Generic plugin to for inline implementing a plugin..
Default configuration:
```js
config: {
    'after.question': function (plugin){
      plugin.track('any after question');
    }
}
```


##### *DoOneTimeOnEvent*
Run a callback first time a specific event occurs.
Default configuration:
```js
config: {
    'after.question': function (plugin){
      plugin.formslider.track('first time after question');
    }
}
```

##### *ContentReplace*
Replace static content with dynamic generated content.
Default configuration:
```coffee
@config =
  locale: "en-us"
  mappings:
    '{{month}}': (plugin, content) ->
      (new Date()).getMonth()

    '{{month-name}}': (plugin, content) ->
      (new Date()).toLocaleString(plugin.config.locale, { month: "long" })

    '{{year}}': (plugin, content) ->
      (new Date()).getFullYear()

    '{{day}}': (plugin, content) ->
      (new Date()).getDate()

    '{{day-name}}': (plugin, content) ->
      (new Date()).toLocaleString(plugin.config.locale, { day: "long" })

    '{{date}}': (plugin, content) ->
      (new Date()).toLocaleString(plugin.config.locale)

    '{{time}}': (plugin, content) ->
      (new Date()).getTime()
```

##### *DynamicDate*
Replace static content with dynamic generated date values relative to current date.
Default configuration:
```coffee
@cache  = {}
@config =
  locale: "en-us"
  formats:
    day:       { day: 'numeric', weekday: 'long'}
    date:      { day: '2-digit', month: "long" }
    monthName: { month: "long", year: 'numeric' }
    dayName:   { day: "long" }

  mappings:
    '\{\{date([-+0-9]*)\}\}': (p, match, content) ->
      d = (new Date())
      unless content[0] in ['-', '+']
        return d.toLocaleString(p.config.locale, p.config.formats.date)

      relativeDays = parseInt(content)
      d.setDate(d.getDate() + relativeDays)
      d.toLocaleString(p.config.locale, p.config.formats.date)

    '\{\{month-name([-+0-9]*)\}\}': (p, match, content) ->
      d = (new Date())
      unless content[0] in ['-', '+']
        return d.toLocaleString(p.config.locale, p.config.formats.monthName)

      relativeMonth = parseInt(content)
      d.setMonth(d.getMonth() + relativeMonth)
      d.toLocaleString(p.config.locale, p.config.formats.monthName)

    '\{\{month([-+0-9]*)\}\}': (p, match, content) ->
      d = (new Date())
      return d.getMonth() unless content[0] in ['-', '+']

      relativeMonth = parseInt(content)
      d.setMonth(d.getMonth() + relativeMonth)
      d.getMonth()

    '\{\{year([-+0-9]*)\}\}': (p, match, content) ->
      d = (new Date())
      return d.getFullYear() unless content[0] in ['-', '+']
      d.getFullYear() + parseInt(content)

    '\{\{day([-+0-9]*)\}\}': (p, match, content) ->
      d = (new Date())
      unless content[0] in ['-', '+']
        return d.toLocaleString(p.config.locale, p.config.formats.day)

      relativeDays = parseInt(content)
      d.setDate(d.getDate() + relativeDays)
      d.toLocaleString(p.config.locale, p.config.formats.day)

    '\{\{day-name([-+0-9]*)\}\}': (p, match, content) ->
      d = (new Date())
      unless content[0] in ['-', '+']
        return d.toLocaleString(p.config.locale, p.config.formats.dayName)

      relativeDays = parseInt(content)
      d.setDate(d.getDate() + relativeDays)
      d.toLocaleString(p.config.locale, p.config.formats.dayName)

    '\{\{time\}\}': (p, match, content) ->
      (new Date()).toLocaleTimeString(p.config.locale)
```


###  loader plugins
##### *SimpleLoader*
Controlls a loading page with no user interaction allowed.
Default configuration:
```js
config: {
  duration: 1000  // duration of the loader
}
```

For your custom loader implementation have alook at https://github.com/formslider/formslider.dramatic.loader.


### navigation controller plugins          
controller can be stacked as they cancel the `controller.*` events when they succeed

##### *BrowserHistoryController*
Adds browser history entries and reacts on browser prev/next.
Default configuration:
```js
config: {
  updateHash: false,          // change browser url or not
  resetStatesOnLoad: true    // only allow states since browser reload
}
```


##### *NativeOrderController*
Navigates prev/next by the native order of the slides.


##### *OrderByIdController*
Navigates prev/next by next-id data attributes. You should not use `driver.touch=true` when using fexslider, because the touch transition only respects native slide order.


### navigation plugins
##### *DirectionPolicyByRole*
Can prevent going forward or backward based on events and current/next roles.
Default configuration:
```js
{
  class: 'DirectionPolicyByRole'
  config:
    zipcode:
      commingFrom: ['question']
      goingTo: ['loader', 'question']

    loader:
      commingFrom: ['zipcode']
      goingTo: ['contact']

    contact:
      commingFrom: ['loader']
      goingTo: ['confirmation']

    confirmation:
      goingTo: ['none']
}
```


##### *NavigateOnClick*
Call next/prev if certain element clicked.
Default configuration:
```js
config: {
  actions: [
    {
      selector: '.answer:not(.multiple-answers .answer)',
      action: 'next',
      wait: 200
    },
    {
      selector: '.next-button',
      action: 'next',
      wait: 10
    },
    {
      selector: '.prev-button',
      action: 'prev',
      wait: 10
    }
  ]
}
```


##### *NavigateOnKey*
Can trigger next/prev if enter or arrow keys pressed.
Default configuration:
```js
config: {
  actions: [
    { // right arrow
      context: document,
      action: 'next',
      code: 39,
      wait: 100
    },
    { // return
      selector: 'input',
      action: 'next',
      code: 13,
      prevent: true,  // prevents natural behaviour
      wait: 100
    },
    { // left arrow
      context: document,
      action: 'prev',
      code: 37,
      wait: 100
    }
  ]
}
```


##### *TabIndexSetter*
Fixes tab order on current visible slide, prevents jumping between slides.
Default configuration:
```js
config: {
  selector: 'input, a, select, textarea, button, area, object'
}
```


### progressbar plugins
Manages progress animation, looks for data attributes on progress bar wrapper. Use `data-type="steps"` for ex.
Default configuration:
```js
@config = {
  selectorWrapper: '.progressbar-wrapper',
  selectorText: '.progress-text',
  selectorProgress: '.progress',
  animationSpeed: 300,
  initialProgress: null,  // initial bar width in percent
  firstSlideCounts: true  // weather to count first slide as visited or not
  animateHeight: true,
  // dataKeyForMaxLength: 'progressbar-longest-path', // set count max based on data attribute
  dontCountOnRoles: [
    'loader',
    'contact',
    'confirmation'
  ],
  hideOnRoles: [
    'zipcode',
    'loader',
    'contact',
    'confirmation'
  ]
  // if you need to manually adjust max length when using OrderByIdController
  // dataKeyForMaxLength: 'progressbar-longest-path'

}
```


##### *ProgressBarPercent*
Manages progress with percent progess.


##### *ProgressBarSteps*
Manages progress with steps progress.


### tracking plugins
##### *TrackSessionInformation*
Triggers track events for useragent, device dimension etc and adds an hidden input field for later form submission.
Triggers after first user interaction for clean bounce rate tracking.
Default configuration:
```js
config: {
  onReady: null,   // called after first user interaction, see onReadyInternal
  onReadyInternal: function(plugin){
    plugin.inform('url',       location.href);
    plugin.inform('useragent', navigator.userAgent );
    plugin.inform('referer',   document.referrer);
    plugin.inform('dimension', $(window).width() + 'x' + $(window).height());
    plugin.inform('jquery.formslider.version', plugin.formslider.config.version);

    if plugin.formslider.plugins.isLoaded('FormsliderTracking'){
      plugin.inform('channel', $.tracking.channel());
      plugin.inform('campaign', $.tracking.campaign());
    }
  },
  buildHiddenInput: function(name, value){
    $('<input>', {
      type: 'hidden',
      name: "info[#{name}]",
      class: 'info',
      value: value
    });
  }
}
```


##### *TrackUserInteraction*
Triggers track events for current/next page transition.
Triggers:
  * `slide-[index]-entered` = [direction]
  * `slide-role-[role]-entered` = [direction]
  * `question-answered` = [index]
  * `question-answered-[index]` = [answerValue]
)

Default configuration:
```js
config: {
  questionAnsweredEvent: 'question-answered'  // event triggered, when an answer was selected
}
```

### view plugins
##### *EqualHeight*
Equalizes the height of elements on the current slide.
Default configuration:
```js
config: {
  selector: '.answer .label'
}
```
Listens also on event `do-equal-height`. To trigger this event: `@trigger('do-equal-height', slideToEqualize)`.


##### *JqueryAnimate*
Exactlecutes animations absed on data attributes.
Default configuration:
```js
config: {
  dataPrefix:     'animate', // means data-animate
  defaultDuration: 600
}
```

*Api:*
Just add a data attribute like `data-animate='{...}'` to an existing element or add an hidden element.

The animation will be executed on the element it self or on the element found by the property `selector`.
```html
<div data-animate='{"selector": ".animation-target"}'></div>
<span class="animation-target"></div>
```

The Animation will be executed when the event(s) fires that you specify by the `on` property:
```html
<div data-animate='{"on": "leaving.question, leaving.zipcode"}'></div>
```

Before the animation starts you can set css attributes via the property `css`.

```html
<div data-animate='{"css": {"opacity": 0}}'></div>
```

These Properties are regulating the animation:
```coffee
  animate: { }      # animation properties, see jquery.animate
  duration: 600     # duration for the animation
  delay: 0          # wait before animation starts
  stop: true        # stop other queued animations
  easing: 'swing'   # easing, see jquery.animate
  once: false       # run animation exactly once
```

The `complete` property is a nested animation object like this which will be executed when the animation finishes.
```coffee
  complete: [nested animation object]
```

*Example:*
```html
<div data-animate='{"on": "ready, before.question", "css": {"opacity": 0}, "animate": {"opacity": 1}}'>huhu</div>
```

##### *LazyLoad*
Load images from the next slides.
Default configuration:
```js
config: {
  lazyClass: 'lazy-load',
  dataKey: 'src'
}
```


##### *LoadingState*
Manipulates loading classes on ready.
Default configuration:
```js
config: {
  selector: '.nextbar-wrapper, .formslider-wrapper',
  loadingClass: 'loading',          // will be removed
  loadedClass: 'loaded'             // will be added
}
```


##### *ScrollUp*
Scrolls up if a question is not in viewport and logs warning if no element found by `@config.selector`.

Default configuration:
```js
config: {
  selector: '.headline',
  duration: 500,
  tolerance: -30
  scrollUpOffset: 30
  scrollTo: function(plugin, $element){
    return Math.max(0, $element.offset().top - plugin.config.scrollUpOffset);
  },
  checkElement: function(plugin, slide){
    retrun $(plugin.config.selector, slide);
  }
}
```


##### *SlideVisibility*
Hides slides before and after current slide until transition is allowed.
