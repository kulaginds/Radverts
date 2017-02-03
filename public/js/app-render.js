/*
	Application render
*/

// TopMenu
var top_menu_items_collection = new Radverts.Collections.TopMenuCollection([
	{
		title :'Каталог',
		url   :'#catalog',
	},
	{
		title:'Мои объявления',
		url  :'#myadverts'
	},
	{
		title:'Модерация',
		url  :'#moderation'
	},
	{
		title:'Администрация',
		url  :'#administration'
	},
	{
		title  :'Подать объявление',
		url    :'#giveadv',
		giveAdv:true
	}
]);

top_menu_items_collection.addCallbacks();

var top_menu_view = new Radverts.Views.TopMenuView({
	collection:top_menu_items_collection
});

$('#top_menu').html(top_menu_view.el);