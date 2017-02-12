/*
	Application component: Breadcrumb
*/

Radverts.Models.BreadCrumb = Backbone.Model.extend({

	defaults: {

		title:'',
		url:'',
		active:false

	}

});

Radverts.Collections.Breadcrumbs = Backbone.Collection.extend({

	model:Radverts.Models.BreadCrumb

});

Radverts.Views.BreadcrumbItem = Backbone.View.extend({

	tagName:'li',

	template:template('item_template'),

	initialize:function() {
		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		if (this.model.get('active')) {
			this.$el.addClass('active');
			this.$el.html(this.model.get('title'));
		} else {
			this.$el.html(this.template(this.model.attributes));
		}
	},

	updateActive:function(model, active) {
		if (active) {
			this.$el.addClass('active');
		} else {
			this.$el.removeClass('active');
		}
	}

});

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