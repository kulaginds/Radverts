Radverts.Views.Advert = Backbone.View.extend({

	tagName:'div',

	className:'panel panel-default',

	initialize:function(options) {
		this.state    = options.state || 'catalog';
		this.template = JST['components/' + this.state + '/advert'];

		this.render();
	},

	render:function() {
		this.$el.html(this.template(this.model.attributes));
	}

});