

require.config({
	paths: {
		'jquery': "../components/jquery/jquery.min",
	}
});


// First argument is array of modules
// Second argument is to what they are referring

require(['App'], function(App) {

	App.init();

});