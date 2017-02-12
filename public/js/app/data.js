/*
	Application data
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

// Breadcrumbs
var breadcrumb_collection = new Radverts.Collections.Breadcrumbs([
	{
		title:'Главная',
		url:'#catalog',
		active:true
	}
]);

// Categories
var categories = new Radverts.Collections.Options([
	{
		title:'Любая',
		value:'0'
	}
]);

// Catalog adverts
var catalog_adverts = new Radverts.Collections.Adverts([
	{
		title:'Advert title',
		description:'Description of advert',
		created_at:new Date(Date.parse('2017-02-12T10:03:08.759Z'))
	},
	{
		title:'Advert title',
		description:'Description of advert',
		created_at:new Date(Date.parse('2017-02-12T10:05:08.759Z'))
	}
]);