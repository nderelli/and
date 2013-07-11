
ns = {}

Nav = 
	settings:
		trigger: $ '.showMenu'
		nav: $ '.main-nav'
		container: $ '.container'

	init: ->
		ns = @.settings
		@.bindUIActions()

	bindUIActions: =>
		ns.nav.on {
			click: (e) ->
				ns.container.toggleClass 'slideOut'
				# ns.nav.toggleClass 'slideOut'
			mouseenter: (e) ->
				ns.nav.addClass 'slideOut'
				ns.container.toggleClass 'slideOut'
			mouseleave: (e) ->
				ns.nav.removeClass 'slideOut'
				ns.container.toggleClass 'slideOut'

			}, @





$ ->
	Nav.init()