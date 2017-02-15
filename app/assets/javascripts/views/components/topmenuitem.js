Radverts.Views.TopMenuItem = Backbone.View.extend({

	tagName:'li',

	template:JST['components/item'],

	events: {
		'click a':'itemClick'
	},

	initialize:function() {
		this.model.on('change:active', this.updateActive, this);
		this.render();
	},

	render:function() {
		this.$el.html(this.template(this.model.attributes));
		if (this.model.get('active')) {
			this.$el.addClass('active');
		}
	},

	itemClick:function() {
		if (!this.model.get('active')) {
			this.model.set('active', true);
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