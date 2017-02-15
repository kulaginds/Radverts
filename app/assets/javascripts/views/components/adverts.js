Radverts.Views.Adverts = Backbone.View.extend({

	tagName:'div',

	className:'list',

	initialize:function(options) {
		this.state = options.state;

		this.render();
	},

	render:function() {
		this.collection.each(this.addOne, this);

		this.pagination = new Radverts.Views.Pagination();
		this.$el.append(this.pagination.el);
	},

	addOne:function(model) {
		var view = new Radverts.Views.Advert({
			model:model,
			state:this.state
		});

		this.$el.append(view.el);
	}

});