class @AbstractFormsliderProgressBar extends AbstractFormsliderPlugin
  @config =
    selectorWrapper: '.progressbar-wrapper'
    selectorText: '.progress-text'
    selectorProgress: '.progress'
    animationSpeed: 300
    initialProgress: null
    animateHeight: true
    firstSlideCounts: true
    dontCountOnRoles: [
      'loader'
      'contact'
      'confirmation'
    ]
    hideOnRoles: [
      'zipcode'
      'loader'
      'contact'
      'confirmation'
    ]
    # if you need to manually adjust max length when using OrderByIdController
    # dataKeyForMaxLength: 'progressbar-longest-path'
    # dataKeyForCurrentIndex: 'progressbar-current-index'

  init: =>
    @on('after.next', =>
      @currentIndex++
    )
    @on('after.prev', =>
      @currentIndex--
    )
    @on('after', @doUpdate)
    @on('ready', =>
      @setCountMax()
      @_set(@currentIndex)
    )

    @visible  = true
    @wrapper  = $(@config.selectorWrapper)
    @config   = @configWithDataFrom(@wrapper)

    @progressText = $(@config.selectorText, @wrapper)
    @bar          = $(@config.selectorProgress, @wrapper)
    @bar.css('transition-duration', (@config.animationSpeed / 1000) + 's')

    @lengthByDataAttribute = @config?.dataKeyForMaxLength
    unless $("[data-#{@config.dataKeyForMaxLength}]", @container).length
      @lengthByDataAttribute = false

    @currentIndex = 0

  set: (indexFromZero, percent) ->
    # this is the method you have to implement


  setCountMax: (slide = null) =>
    unless @lengthByDataAttribute
      @countMax = @slidesThatCount()
      return

    # set count max from slide data attribute if set
    slide = @slideByIndex() if slide == null
    possibleCountMax = $(slide).data(@config.dataKeyForMaxLength)

    return unless possibleCountMax

    possibleCountMax = parseInt(possibleCountMax, 10)
    @countMax = possibleCountMax

  slidesThatCount: =>
    substract = 0
    for role in @config.dontCountOnRoles
      substract = substract + @slideByRole(role).length

    return @slides.length - substract

  doUpdate: (_event, current, direction, prev) =>
    @setCountMax(current)
    if @config.dataKeyForCurrentIndex
      possibleNewIndex = $(current).data(@config.dataKeyForCurrentIndex)
      possibleNewIndex = parseInt(possibleNewIndex, 10)
      if possibleNewIndex > -1
        @currentIndex = parseInt(possibleNewIndex, 10)

    unless @shouldBeVisible(current)
      @_set(@currentIndex)
      return @hide()

    @show()
    @_set(@currentIndex) # we are on first step initial

  _set: (indexFromZero) =>
    indexFromZero = @countMax - 1 if indexFromZero > @countMax - 1
    indexFromZero = 0 if indexFromZero < 0
    if @config.firstSlideCounts
      percent = ((indexFromZero + 1) / @countMax) * 100
    else
      percent = ((indexFromZero) / @countMax) * 100

    if @config.initialProgress && indexFromZero == 0
      percent = @config.initialProgress

    @bar.css('width', percent + '%')

    @set(indexFromZero, percent)

  shouldBeVisible: (slide) =>
    ! ($(slide).data('role') in @config.hideOnRoles)

  hide: =>
    return unless @visible
    @visible = false
    @wrapper.stop().animate({opacity: 0, height: 0}, @config.animationSpeed)

  show: =>
    return if @visible
    @visible = true

    animationProperties =
      opacity: 1

    if @config.animateHeight
      currentHeight = @wrapper.height()
      autoHeight    = @wrapper.css('height', 'auto').height()
      @wrapper.css('height', currentHeight)

      animationProperties.height = "#{autoHeight}px"

    @wrapper.stop().animate(animationProperties, @config.animationSpeed)
