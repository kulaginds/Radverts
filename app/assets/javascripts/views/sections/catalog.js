Radverts.Views.Catalog = Backbone.View.extend({

	tagName:'section',

	className:'container',

	template:JST['sections/twocolumn'],

	initialize:function(options) {
		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		this.$el.html(this.template());

		this.search_form = new Radverts.Views.CatalogSearchForm();
		var filter_panel = new Radverts.Views.FilterPanel({
			target:'catalog',
			search_form:this.search_form.el
		});
		var breadcrumb = new Radverts.Views.Breadcrumb({ collection:breadcrumb_collection });
		var list = new Radverts.Views.Adverts({
			collection:catalog_adverts,
			state:'catalog'
		});

		this.$el.find('.sidebar').html(filter_panel.el);
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