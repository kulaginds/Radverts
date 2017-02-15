Radverts.Views.Breadcrumb = Backbone.View.extend({

	tagName:'ol',

	className:'breadcrumb',

	initialize:function() {
		this.render();
	},

	render:function() {
		this.collection.each(this.addOne, this);
	},

	addOne:function(model) {
		var view = new Radverts.Views.BreadcrumbItem({ model:model });

		this.$el.append(view.el);
	}

});