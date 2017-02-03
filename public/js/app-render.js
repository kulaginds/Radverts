/*
	Application render
*/

// Sections
var sections_collection = new Radverts.Collections.Sections([
	{
		title:'Каталог',
		url  :'#catalog',
		id   :'catalog_section'
	},
	{
		title:'Мои объявления',
		url  :'#myadverts',
		id   :'myadverts_section'
	},
	{
		title:'Модерация',
		url  :'#moderation',
		id   :'moderation_section'
	},
	{
		title:'Администрация',
		url  :'#administration',
		id   :'administration_section'
	},
	{
		title  :'Подать объявление',
		url    :'#giveadv',
		id     :'giveadv_section',
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
