Radverts.Views.BreadcrumbItem = Backbone.View.extend({

	tagName:'li',

	template:JST['components/item'],

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