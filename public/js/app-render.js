/*
	Application render
*/

// Sections
var sections_collection = new Radverts.Collections.Sections([
	{
		title:'Каталог',
		url  :'#catalog',
		id   :'catalog_section',
		route:'catalog'
	},
	{
		title:'Мои объявления',
		url  :'#myadverts',
		id   :'myadverts_section',
		route:'myadverts'
	},
	{
		title:'Модерация',
		url  :'#moderation',
		id   :'moderation_section',
		route:'moderation'
	},
	{
		title:'Администрация',
		url  :'#administration',
		id   :'administration_section',
		route:'administration'
	},
	{
		title  :'Подать объявление',
		url    :'#giveadv',
		id     :'giveadv_section',
		route  :'giveadv',
		giveAdv:true
	}
]);

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

sections_collection.initRouter(router);
Backbone.history.start();