Radverts.Views.Giveadv = Backbone.View.extend({

	tagName:'section',

	className:'container',

	template:JST['sections/onecolumn'],

	initialize:function(options) {
		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		this.$el.html(this.template());

		var breadcrumb = new Radverts.Views.Breadcrumb({ collection:breadcrumb_collection });
		var pagination = new Radverts.Views.Pagination({ previous_title:'Назад' });
		var createform = new Radverts.Views.GiveadvCreateForm();

		pagination.hideNext();

		this.$el.find('.content')
						.append(breadcrumb.el)
						.append(pagination.el)
						.append(createform.el);
	},

	updateActive:function(model, active) {
		if (active) {
			this.$el.addClass('show');
		} else {
			this.$el.removeClass('show');
		}
	}

});