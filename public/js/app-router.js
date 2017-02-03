/*
	Application router
*/

Radverts.Router = Backbone.Router.extend({

	routes: {
		''              :'catalog',
		'catalog'       :'catalog',
		'myadverts'     :'myadverts',
		'giveadv'       :'giveadv',
		'moderation'    :'moderation',
		'administration':'administration'
	},

	catalog:function() {
		console.log('catalog page');
		this._openSection('catalog');
	},

	myadverts:function() {
		console.log('myadverts page');
		this._openSection('myadverts');
	},

	giveadv:function() {
		console.log('giveadv page');
		this._openSection('giveadv');
	},

	moderation:function() {
		console.log('moderation page');
		this._openSection('moderation');
	},

	administration:function() {
		console.log('administration page');
		this._openSection('administration');
	},

	_openSection:function(section_name) {
		sections_collection.activateByUrl('#' + section_name);
		$("section").removeClass('show');
		$("#" + section_name + "_section").addClass('show');
	}
	
});

var router = new Radverts.Router();
Backbone.history.start();