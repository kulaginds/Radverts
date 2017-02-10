/*
	Application section: Catalog
*/

Radverts.Views.Catalog = Backbone.View.extend({

	tagName:'section',

	className:'container',

	initialize:function(options) {
		this.template = template(options.id + '_template');

		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		this.$el.html(this.template({}));
	},

	updateActive:function(model, active) {
		if (active) {
			this.$el.addClass('show');
		} else {
			this.$el.removeClass('show');
		}
		this.render();
	}

});