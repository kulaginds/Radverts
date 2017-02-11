/*
	Application section: Catalog
*/

Radverts.Views.Catalog = Backbone.View.extend({

	tagName:'section',

	className:'container',

	template:template('section_two_column_template'),

	initialize:function(options) {
		this.model.on('change:active', this.updateActive, this);

		this.categories = new Radverts.Collections.Options([]);

		this.render();
	},

	render:function() {
		this.$el.html(this.template());

		this.search_form = new Radverts.Views.CatalogSearchForm({
			categories:this.categories
		});

		var filter_panel = new Radverts.Views.FilterPanel({
			target:'catalog',
			search_form:this.search_form.el
		});

		this.$el.find('.sidebar').html(filter_panel.el);
	},

	updateActive:function(model, active) {
		if (active) {
			this.$el.addClass('show');
		} else {
			this.$el.removeClass('show');
		}
	}

});