define('App', ['jquery'], function($) {

	var ExampleApp = {
		settings: {
			title: 'This is a String',
			$el: $('.content')
		},

		init: function() {
			console.log(this.settings.$el);

			this.anotherFunction();
		},

		anotherFunction: function() {
			this.settings.$el.hide().html('<h1>What\'s up motherfuckers</h1>').fadeIn();
		}


	}

	return ExampleApp;

});