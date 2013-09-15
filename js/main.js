

require.config({
	paths: {
		'jquery': [
			"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
			"../components/jquery/jquery.min"
		],
	}
});


// First argument is array of modules
// Second argument is to what they are referring

require(['jquery'], function($) {
	// JQuery and other dependencies are loaded
});