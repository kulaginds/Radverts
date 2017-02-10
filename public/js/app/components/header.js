/*
	Application component: Header
*/

Radverts.Views.Header = Backbone.View.extend({

	tagName:'nav',

	className:'navbar navbar-default',

	template:template('header_template'),

	top_menu_view:null,

	initialize:function(options) {
		this.top_menu_view = options.top_menu_view;

		this.render();
	},

	render:function() {
		this.$el.html(this.template({ title:'Radverts' }));
		this.$el.find('#top_menu').html(this.top_menu_view.el);
	}

});

