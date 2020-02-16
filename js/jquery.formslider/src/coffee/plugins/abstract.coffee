class @AbstractFormsliderPlugin
  constructor: (@formslider, config, @pluginClass) ->
    @config    = ObjectExtender.extend({}, @constructor.config, config)
    @container = @formslider.container
    @slides    = @formslider.slides
    @events    = @formslider.events
    @logger    = new Logger("jquery.formslider::#{@pluginClass}")

  # plugins doing their setup and event registering stuff here
  init: ->
    null

  configWithDataFrom: (element) =>
    config = ObjectExtender.extend({}, @config)

    $element = $(element)
    for key, value of config
      data = $element.data(key)
      config[key] = data if data != undefined

    return config

  # event helper
  on: (eventName, callback) =>
    @events.on("#{eventName}.#{@constructor.name}", callback)

  off: (eventName) =>
    @events.off("#{eventName}.#{@constructor.name}")

  cancel: (event) =>
    @events.cancel(event)

  isCanceled: (event) =>
    @events.isCanceled(event)

  trigger: () =>
    @events.trigger(arguments...)

  # needs something like FormsliderTracking to make sense
  track: (source, label, category = null, value = null) =>
    @events.trigger('track', source, label, category, value)


  index: =>
    @formslider.index()

  slideByIndex: (indexFromZero = null) =>
    indexFromZero = @index() if indexFromZero == null
    @slides.get(indexFromZero)

  # depends on plugin AddSlideClasses
  slideByRole: (role) =>
    $(".slide-role-#{role}", @container)

  # depends on plugin AddSlideClasses
  slideById: (id) =>
    $(".slide-id-#{id}", @container)
