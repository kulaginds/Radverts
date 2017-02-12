/*
	Application section: Moderation
*/

Radverts.Views.Moderation = Backbone.View.extend({

	tagName:'section',

	className:'container',

	template:template('section_one_column_template'),

	initialize:function(options) {
		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		this.$el.html(this.template());

		var breadcrumb = new Radverts.Views.Breadcrumb({ collection:breadcrumb_collection });
		var list = new Radverts.Views.Adverts({
			collection:moderation_adverts,
			state:'moderation'
		});

		this.$el.find('.content')
						.append(breadcrumb.el)
						.append(list.el);
	},

	updateActive:function(model, active) {
		if (active) {
			this.$el.addClass('show');
		} else {
			this.$el.removeClass('show');
		}
	}

});