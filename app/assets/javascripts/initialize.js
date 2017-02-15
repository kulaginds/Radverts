$(document).ready(function(){
	sections_collection.addCallbacks();

	var top_menu_view = new Radverts.Views.TopMenu({
		collection:sections_collection
	});

	var header_view = new Radverts.Views.Header({
		top_menu_view:top_menu_view
	});

	var content_view = new Radverts.Views.Content({
		collection:sections_collection
	});

	$('#app').append(header_view.el);
	$('#app').append(content_view.el);

	var router = new Radverts.Router();
	
	sections_collection.initRouter(router);
	Backbone.history.start();
});