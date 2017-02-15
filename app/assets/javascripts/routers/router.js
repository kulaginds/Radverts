Radverts.Router = Backbone.Router.extend({
	routes: {
		''              :'catalog',
		'catalog'       :'catalog',
		'myadverts'     :'myadverts',
		'giveadv'       :'giveadv',
		'moderation'    :'moderation',
		'administration':'administration'
	}
});