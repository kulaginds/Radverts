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
		status:'success'
	},
	{
		title:'Advert title',
		description:'Description of advert',
		status:'success'
	}
]);

// Myadverts adverts
var myadverts_adverts = new Radverts.Collections.Adverts([
	{
		title:'Advert title',
		description:'Description of advert',
		status:'error',
		error_message:'test message'
	},
	{
		title:'Advert title',
		description:'Description of advert',
		status:'process'
	},
	{
		title:'Advert title',
		description:'Description of advert',
		status:'success'
	}
]);

// Moderation adverts
var moderation_adverts = new Radverts.Collections.Adverts([
	{
		title:'Advert title',
		description:'Description of advert',
		status:'process'
	},
	{
		title:'Advert title',
		description:'Description of advert',
		status:'process'
	},
	{
		title:'Advert title',
		description:'Description of advert',
		status:'process'
	}
]);